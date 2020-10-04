import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function Logo() {
    return (
        <View style={{ alignItems: 'center', flex: 1, flexDirection: 'column' }}>
            
            <View >
                <Text style={styles.maintitle}>PANJAB UNIVERSITY</Text>
                <Text style={styles.maintitle}>CHANDIGARH</Text>
                <View >
                    <Image  style={styles.imageprop} source={require('../images/LOGO.jpg')} >
                    </Image>
                </View>
            
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    imageprop: {
        width: 60,
        height: 60,
        marginTop:5,
        marginLeft:70
    },
    maintitle: {
        color: '#01579b',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    }

});