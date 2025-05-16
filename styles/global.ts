import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        padding: 20
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10,
        marginHorizontal: 'auto'
    },
    greeting: {
        fontSize: 24,
        marginBottom: 20
    },
    balanceLabel: {
        fontSize: 16,
        color: '#777',
    },
    balance: {
        fontSize: 32,
        fontWeight: 'regular',
        marginBottom: 20,
    },
    buttonsContainer: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 10,
    },
});