import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

export default function TabSuaComunidadeFinanceira() {
    return (
        <View style={styles.screen}>
            <ScrollView>
                <View style={{ gap: 20, flex: 1 }}>
                    <View style={styles.title_container}>
                        <Text style={styles.title}>Sua Comunidade Financeira</Text>
                    </View>
                    <View style={styles.image_container}>
                        <Image style={styles.image} source={require('../../../assets/dicionario1.png')}/>
                    </View>
                    <View style={styles.contents_wrapper}>
                        <View style={styles.content}>
                            <ScrollView style={styles.scrollable_view}>
                                <View>
                                    <Text style={styles.content_title}>1. Orcamento</Text>
                                    <View>
                                        <Text style={styles.scrollable_view_content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aliquam officiis, eos hic libero earum odit, iste magnam dolore facilis laborum animi corrupti magni, praesentium repudiandae eligendi at ducimus beatae?</Text>
                                        <Text style={styles.scrollable_view_content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aliquam officiis, eos hic libero earum odit, iste magnam dolore facilis laborum animi corrupti magni, praesentium repudiandae eligendi at ducimus beatae?</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.content_title}>2. Gastos Fixos e Variaveis</Text>
                                    <View>
                                        <Text style={styles.scrollable_view_content}> </Text>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                    <View style={styles.image_container}>
                        <Image style={styles.image} source={require('../../../assets/link-quebrado1.png')}/>
                    </View>
                    <View style={styles.contents_wrapper}>
                        <View style={styles.content}>
                            <ScrollView style={styles.scrollable_view}>
                                <View>
                                    <Text style={styles.content_title}>1. Orcamento</Text>
                                    <View>
                                        <Text style={styles.scrollable_view_content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aliquam officiis, eos hic libero earum odit, iste magnam dolore facilis laborum animi corrupti magni, praesentium repudiandae eligendi at ducimus beatae?</Text>
                                        <Text style={styles.scrollable_view_content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aliquam officiis, eos hic libero earum odit, iste magnam dolore facilis laborum animi corrupti magni, praesentium repudiandae eligendi at ducimus beatae?</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.content_title}>2. Gastos Fixos e Variaveis</Text>
                                    <View>
                                        <Text style={styles.scrollable_view_content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aliquam officiis, eos hic libero earum odit, iste magnam dolore facilis laborum animi corrupti magni, praesentium repudiandae eligendi at ducimus beatae?</Text>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#444242',
        gap: 10,
        
    },
    title_container: {
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fafafa',
    },
    title: {
        color: '#fafafa',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 22,
        flexWrap: 'nowrap'
    },
    contents_wrapper: {
        flex: 1,
        gap: 20,
        padding: 10
    },
    content: {
        flex: 1,
        paddingHorizontal: 50,
        gap: 5
    },
    content_title: {
        color: '#fafafa',
        fontWeight: 'bold',
        fontSize: 18
    },
    scrollable_view: {
        backgroundColor: '#292929',
        flex: 1,
        borderRadius: 12,
        padding: 10
    },
    scrollable_view_content: {
        color: '#fafafa',
        marginVertical: 5,
        marginHorizontal: 20
    },
    image_container: {
        flex: 1,
        maxHeight: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:30
    },
    image: {
        height: '100%',
        aspectRatio: 1,
    }
})
