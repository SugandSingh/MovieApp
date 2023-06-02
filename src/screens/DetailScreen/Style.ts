
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    posterImage: {
        aspectRatio: 2 / 2.5
    },
    detailsContainer: {
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        color: 'black'
    },
    releaseDate: {
        fontSize: 16,
        marginBottom: 4,
        color: 'black'
    },
    rating: {
        fontSize: 16,
        marginBottom: 4,
        color: 'black'
    },
    overview: {
        fontSize: 16,
        marginBottom: 8,
        color: 'black'
    },
});
export default styles;