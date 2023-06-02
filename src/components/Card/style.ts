import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // Style definition for the posterImage element
    movieCard: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 16,
    },
    movieTitle: {
        marginTop: 8,
        textAlign: 'center',
        color: 'black'
    },
    posterImage: {
        width: 150,
        height: 225,
        marginBottom: 4,
        resizeMode: 'contain',
        borderRadius: 12,
        marginRight: 4,
        marginLeft: 4,
    },
});

export default styles;
