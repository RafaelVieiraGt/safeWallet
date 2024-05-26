import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function TabDesafiosEMetas() {
    const [weekGoal, setWeekGoal] = useState(25.00)
    const [monthGoal, setMonthGoal] = useState(100.00)
    const numberToBRL = (num) => {
        return num.toFixed(2).replace('.', ',')
    }
    return (
        <View style={styles.screen}>
            <View style={styles.title_container}>
                <Text style={styles.title}>Desafios E Metas</Text>
            </View>
            <View style={styles.component}>
                <Text style={styles.component_title}>Meta da Semana</Text>
                <View style={styles.component_view}>
                    <View style={styles.component_view_wrapper}>
                        <Text style={styles.component_value}>R$ {numberToBRL(weekGoal)}</Text>
                        <TouchableOpacity style={styles.component_button}><Text style={styles.component_button_text} onPress={() => { setWeekGoal(weekGoal + 1.5) }}>Modificar</Text></TouchableOpacity>
                    </View>
                    <View style={styles.image_container}><Image style={styles.image} source={require('../../../assets/alinhamento-do-grafico1.png')}/></View>
                </View>
            </View>
            <View style={styles.component}>
                <Text style={styles.component_title}>Meta do Mes</Text>
                <View style={styles.component_view}>
                    <View style={styles.component_view_wrapper}>
                        <Text style={styles.component_value}>R$ {numberToBRL(monthGoal)}</Text>
                        <TouchableOpacity style={styles.component_button} onPress={() => { setMonthGoal(monthGoal + 1.5) }}><Text style={styles.component_button_text}>Modificar</Text></TouchableOpacity>
                    </View>
                    <View style={styles.image_container}><Image style={styles.image} source={require('../../../assets/alinhamento-do-grafico1.png')}/></View>
                </View>
            </View>
            <View style={[styles.title_container, { alignItems: 'flex-start' }]}>
                <Text style={styles.title}>Desafios</Text>
            </View>
            <View style={styles.define_goals_view}>
                <ScrollView style={styles.scrollable_view}>
                    <Text style={styles.scrollable_view_content}>.Lorem ipsum</Text>
                    <Text style={styles.scrollable_view_content}>.Lorem ipsum</Text>
                    <Text style={styles.scrollable_view_content}>.Lorem ipsum</Text>
                </ScrollView>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', maxHeight: 30 }}>
                <TouchableOpacity style={{ backgroundColor: 'red', paddingHorizontal: 20, paddingVertical: 5, borderRadius: 50 }}><Text style={styles.component_button_text}>Adicionar Desafio</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#444242',
        gap: 10,
        
        paddingHorizontal: 15,
        paddingBottom: 15
    },
    title_container: {
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fafafa'
    },
    title: {
        color: '#fafafa',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 22,
        flexWrap: 'nowrap'
    },
    component: {
        flex: 1,
        maxHeight: 160,
        flexDirection: 'column',
        gap: 5
    },
    component_title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fafafa'
    },
    component_view: {
        flex: 1,
        backgroundColor: '#292929',
        flexDirection: 'row',
        borderRadius: 10,
        padding: 10,
        gap: 20
    },
    component_view_wrapper: {
        flex: 1,
        justifyContent: 'space-around'
    },
    image_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: '90%',
        aspectRatio: 1,
        objectFit: 'contain'
    },
    component_value: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fafafa'
    },
    component_button: {
        width: '100%',
        padding: 5,
        backgroundColor: 'red',
        borderRadius: 50,
    },
    component_button_text: {
        textAlign: 'center',
        color: '#fafafa'
    },
    define_goals_view: {
        flex: 1,
        padding: 20
    },
    scrollable_view: {
        backgroundColor: '#292929',
        flex: 1,
        borderRadius: 12
    },
    scrollable_view_content: {
        color: '#fafafa',
        marginVertical: 10,
        marginHorizontal: 15
    }
})

// bg: #444242
// scroll: #cc2229
// scroll-content-bg: #292929