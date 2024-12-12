import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Gastos {
    saldo: string;
    gastos: string;
}

export default function Balence({ saldo, gastos }: Gastos) {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.itemSaldo}>Saldo</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySimbol}>R$</Text>
                    <Text style={styles.balence}>{saldo}</Text>
                </View>
            </View>

            <View style={styles.item}>
                <Text style={styles.itemSaldo}>Gastos</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySimbol}>R$</Text>
                    <Text style={styles.expenses}>{gastos}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -15,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,
        
    },
    item: {},
    itemSaldo: {
        fontSize: 20,
        color: '#808080'
    },
    currencySimbol: {
        color: '#999',
        marginRight: 6
    },
    balence: {
        fontSize: 22,
        color: '#2ecc71'
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    expenses: {
        fontSize: 22,
        color: '#e74c3c'
    }
});