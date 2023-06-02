
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    searchInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginBottom: 16,
        marginHorizontal: 10
    },
    sortButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },

    flatListContent: {
        paddingBottom: 16,
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingTxt: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'grey',
    },
    renderFooterStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    noMovieContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    noMovieText: {
        marginTop: '50%',
        fontSize: 16,
        fontWeight: 'bold',
        color: 'grey',
    },
});
export default styles;