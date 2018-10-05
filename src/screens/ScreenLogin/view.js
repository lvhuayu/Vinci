/**
 * ScreenLogin/index.js
 */

import React from "react";
import {View, TextInput, StyleSheet, Text, TouchableOpacity, KeyboardAvoidingView} from "react-native";

export default () => (
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
                <View
                    style={{
                        borderBottomColor: 'grey',
                        borderBottomWidth: 0.5,
                    }}
                />
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
                                  onPress={()=> console.log('press me')}>
                    <Text style={styles.text}>登录</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    </View>
);

const styles = StyleSheet.create({
    row: {
        flex: 0.5,
        flexDirection: "row"
    },
    container:{
        marginTop:10,
        width:'100%',
        height:70,
        backgroundColor:'#FFFFFF'
    },
    input_box:{
        marginLeft:10,
        width:'100%',
        height:70,
        backgroundColor:'#FFFFFF',
    },
    input:{
        position: 'absolute',
        marginLeft:50,
        width:'70%',
        height:35,
    },
    label:{
        marginTop:11,
        fontSize:13,
        height:35,
        alignItems:'center',
        justifyContent:'center',
    },

    loginButton:{
        width:'90%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#3333FF',
        height:35,
        marginTop:15,
        marginLeft:16,
    },
    text:{
        fontWeight:'bold',
        fontSize:14,
        color:'#FFF'
    },
    logo:{
        width:160,
        height:160,
        marginTop:100
    }

});