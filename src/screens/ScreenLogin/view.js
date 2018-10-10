/**
 * ScreenLogin/index.js
 */

import React from "react";
import {View, TextInput, StyleSheet, Text, TouchableOpacity, KeyboardAvoidingView, PixelRatio} from "react-native";

export default self => (
    <View>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={styles.input_box}>
                <View style={styles.row}>
                    <Text style={styles.label}>手机号</Text>
                    <TextInput
                        style={styles.input}
                        maxLength = {10}
                        placeholder='输入手机号'/>
                </View>
                <View style={{height: 1/PixelRatio.get(), backgroundColor:'#c4c4c4'}}/>
                <View style={styles.row}>
                    <Text style={styles.label}>密码</Text>
                    <TextInput
                        style={styles.input}
                        textContentType={'password'}
                        maxLength = {15}
                        secureTextEntry={true}
                        placeholder='输入密码'
                        password={true}/>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.loginButton}
                                  onPress={() => self.navigation.navigate("ScreenReg")}>
                    <Text style={styles.text}>登录</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    </View>
);

const styles = StyleSheet.create({
    container:{
        marginTop:14,
        width:'100%',
        height:82,
        backgroundColor:'#FFFFFF'
    },
    input_box:{
        marginLeft:15,
        width:'100%',
        height:82,
    },
    row: {
        flex: 1,
        flexDirection: "row",
        alignItems:'center',
    },
    input:{
        position: 'absolute',
        marginLeft:60,
        width:'70%',
        fontSize:15
    },
    label:{
        fontSize:15
    },
    loginButton:{
        width:'90%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#3333FF',
        height:43,
        marginTop:18,
        marginLeft:'5%',
        borderRadius: 3
    },
    text:{
        fontWeight:'bold',
        fontSize:15,
        color:'#FFFFFF'
    }
});