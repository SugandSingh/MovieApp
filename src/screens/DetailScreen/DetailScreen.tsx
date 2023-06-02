import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from './Style';

const MovieDetailsScreen = () => {
    const route = useRoute();
    const { movie }: any = route.params;

    return (
        <ScrollView style={styles.container}>
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                style={styles.posterImage}
            />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{movie.original_title}</Text>
                <Text style={styles.releaseDate}>Release Date: {movie.release_date}</Text>
                <Text style={styles.rating}>Rating: {movie.vote_average}/10</Text>
                <Text style={styles.overview}>{movie.overview}</Text>
            </View>
        </ScrollView>
    );
};



export default MovieDetailsScreen;
