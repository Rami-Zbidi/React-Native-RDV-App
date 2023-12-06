import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container:
    {
        margin: 20,
    },
    header:
    {
        fontSize: 30,
        fontWeight: '900',
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 30,
    },
    label:
    {
        color: '#7e7e7e',
    },
    inputArea:
    {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#e1e1e1',
        padding: 10,
        marginBottom: 20,
    },
    button:
    {
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    listItem:
    {

    },
    listTimestamp: 
    {
        width: '100%',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        backgroundColor: '#c0c0c2',
        flexDirection: "row",
        justifyContent: "space-around",
        gap: 10,
        padding: 5,
        marginTop: 15,
    },
    listItemBody:
    {
        width: '100%',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        backgroundColor: '#e1e1e1',
        padding: 10,
    }
})