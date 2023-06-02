import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Image, ActivityIndicator, Bu } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigation/Route';
import Card from '../../components/Card/Card';
import styles from './Style';
import Button from '../../components/Button/Button';

interface Movie {
    id: number;
    original_title: string;
    poster_path: string;
}

const ListScreen: React.FC = () => {
    const navigation = useNavigation();
    const API_KEY = 'e75190b01b5a730f1d71fd300d45b508';
    const [movies, setMovies] = useState<Movie[]>([]);
    const [sortOrder, setSortOrder] = useState<'popular' | 'top_rated'>('popular');
    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [loadMore, setLoadMore] = useState(true);
    const timeout = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        fetchMovies();
    }, [sortOrder]);

    useEffect(() => {
        onEndReached();
    }, [page]);

    const fetchMovies = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${sortOrder}`, {
                params: {
                    api_key: API_KEY,
                    page: page,
                },
            });

            setMovies(response.data.results);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    const onEndReached = async () => {
        setLoadMore(true);
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${sortOrder}`, {
                params: {
                    api_key: API_KEY,
                    page: page,
                },
            });

            setMovies((prevMovies) => [...prevMovies, ...response.data.results]);
            setLoadMore(false);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    const handleSortOrderChange = (newSortOrder: 'popular' | 'top_rated') => {
        setSortOrder(newSortOrder);
        setPage(1);
        fetchMovies();
    };

    const onChangeHandler = (value: string) => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }

        setSearchQuery(value);
        timeout.current = setTimeout(() => {
            handleSearch(value);
        }, 2000);
    };

    const handleSearch = (value: string) => {
        if (value.trim() === '') {
            fetchMovies();
        } else {
            setMovies(
                movies.filter((item) =>
                    item.original_title
                        .trim()
                        .toLowerCase()
                        .includes(value.trim().toLowerCase())
                )
            );
        }
    };

    const renderItem = ({ item, index }: { item: Movie; index: number }) => (
        <Card index={index} item={item} onPress={() => showMovieDetails(item)} />
    );

    const showMovieDetails = (movie: Movie) => {
        navigation.navigate(Routes.DETAIL_SCREEN, { movie });
    };

    const renderFooter = () => {
        return loadMore ? (
            <View style={styles.renderFooterStyle}>
                <ActivityIndicator size="large" color="grey" />
                <Text style={styles.loadingTxt}>Loading..</Text>
            </View>
        ) : null;
    };

    if (loading) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size="large" color="grey" />
                <Text style={styles.loadingTxt}>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Search movies"
                value={searchQuery}
                placeholderTextColor="grey"
                onChangeText={onChangeHandler}
            />

            <View style={styles.sortButtons}>

                <Button bg={{ backgroundColor: sortOrder === 'popular' ? 'green' : 'lightgray' }} btnTxt={'Popular'} sortOrder={sortOrder} onPress={() => handleSortOrderChange('popular')} />
                <Button bg={{ backgroundColor: sortOrder === 'top_rated' ? 'green' : 'lightgray' }} btnTxt={'Top Rated'} sortOrder={sortOrder} onPress={() => handleSortOrderChange('top_rated')} />
            </View>

            {movies?.length > 0 ? (
                <FlatList
                    data={movies}
                    numColumns={2}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    onEndReached={() => {
                        searchQuery === '' && setPage((prevPage) => prevPage + 1);
                    }}
                    contentContainerStyle={styles.flatListContent}
                    onEndReachedThreshold={1}
                    refreshing={loading}
                    onRefresh={fetchMovies}
                    ListFooterComponent={renderFooter}
                />
            ) : (
                <View style={styles.noMovieContainer}>
                    <Text style={styles.noMovieText}>No movies available</Text>
                </View>
            )}
        </View>
    );
};



export default ListScreen;


