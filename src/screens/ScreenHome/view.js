/**
 * ScreenHome/index.js
 */

import React from "react";
import {Text, View, Image, Button, ScrollView, StyleSheet} from "react-native";

export default self => (
    <ScrollView style={{ backgroundColor: '#FFFFFF'}}>
        <View style={styles.container}>
            <Text style={{fontSize: 16}}>邀约去吃洞庭春</Text>
            <Text style={{fontSize: 16}}>活动时间</Text>
            <Text style={{fontSize: 16}}>活动地点</Text>
            <Image style={{width:70, height:70}} source={require('../../assets/images/dongtingchun.png')}/>
        </View>
        <View style={styles.container}>
            <Text style={{fontSize: 16}}>Home Page</Text>
        </View>
        <Button
            title="Go to the detail page..."
            // 路由跳转
            onPress={() => self.navigation.navigate("ScreenDetail")}
        />
    </ScrollView>
);

const styles = StyleSheet.create({
    row: {
        flex: 0.5,
        flexDirection: "row"
    },
    container:{
        marginTop:10,
        width:'100%',
        height:150,
        justifyContent: 'center',
        backgroundColor:'#FFFFFF',
        borderWidth: 1,
        borderColor: '#d6d7da',
        paddingVertical: 20
    },
    heading:{

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