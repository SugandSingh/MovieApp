// Import necessary libraries
import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';

// Define the props interface for the Card component
interface CardProps {
    item: any;
    onPress: () => Promise<void>;
    index: number
}

// Create the Card component
const Card = ({ onPress, item, index }: CardProps) => {
    // Render the component
    return (
        <TouchableOpacity key={index} style={styles.movieCard} onPress={() => onPress && onPress()}>
            <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} style={styles.posterImage} />
            <Text style={styles.movieTitle}>{item.original_title}</Text>
        </TouchableOpacity>
    );
};

// Export the Card component as the default export
export default Card;
