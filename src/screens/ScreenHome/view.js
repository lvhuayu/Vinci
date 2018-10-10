/**
 * ScreenHome/index.js
 */

import React from "react";
import {Text, View, Image, Button, ScrollView, StyleSheet} from "react-native";
import ImageViewer from 'react-native-image-zoom-viewer';

export default self => (
    <ScrollView>
        <View style={styles.container}>
            <View style={styles.leftBox}>
                <ImageViewer style={styles.photo} imageUrls={[
                    {
                        props: {
                            source: require('../../assets/images/photo.png')
                        }
                    }
                ]}/>
            </View>
            <View style={styles.rightBox}>
                <View style={styles.heading}>
                    <Text style={styles.text}>邀约去吃洞庭春</Text>
                </View>
                <Image style={styles.image} source={require('../../assets/images/dongtingchun.png')}/>
                <View style={styles.details}>
                    <Text style={styles.text}>时间: 10/09/2018</Text>
                    <Text style={styles.text}>地点: 洞庭春</Text>
                    <Text style={styles.text}>对象: 仅限女生</Text>
                    <Text style={styles.text}>费用: 我买单</Text>
                </View>
            </View>
        </View>
        <View style={styles.container}>
            <View style={styles.leftBox}>
                <Image style={styles.photo} source={require('../../assets/images/photo.png')}/>
            </View>
            <View style={styles.rightBox}>
                <View style={styles.heading}>
                    <Text style={styles.text}>邀约去吃洞庭春</Text>
                </View>
                <Image style={styles.image} source={require('../../assets/images/dongtingchun.png')}/>
                <View style={styles.details}>
                    <Text style={styles.text}>时间: 10/09/2018</Text>
                    <Text style={styles.text}>地点: 洞庭春</Text>
                    <Text style={styles.text}>对象: 仅限女生</Text>
                    <Text style={styles.text}>费用: 我买单</Text>
                </View>
            </View>
        </View>
        <View style={styles.container}>
            <View style={styles.leftBox}>
                <Image style={styles.photo} source={require('../../assets/images/photo.png')}/>
            </View>
            <View style={styles.rightBox}>
                <View style={styles.heading}>
                    <Text style={styles.text}>邀约去吃洞庭春</Text>
                </View>
                <Image style={styles.image} source={require('../../assets/images/dongtingchun.png')}/>
                <View style={styles.details}>
                    <Text style={styles.text}>时间: 10/09/2018</Text>
                    <Text style={styles.text}>地点: 洞庭春</Text>
                    <Text style={styles.text}>对象: 仅限女生</Text>
                    <Text style={styles.text}>费用: 我买单</Text>
                </View>
            </View>
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
        marginTop:8,
        marginLeft:3,
        marginRight:3,
        height:300,
        backgroundColor:'#FFFFFF',
        borderRadius: 2,
    },
    heading:{
        fontSize: 16
    },
    details:{
        fontSize: 16
    },
    rightBox:{
        position: 'absolute',
        marginLeft:60,
        width:'70%',
    },
    leftBox:{
        position: 'absolute',
        width:'30%',
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
        marginTop:12,
        fontSize:14
    },
    image:{
        marginTop:12,
        width:135,
        height:135
    },
    photo:{
        marginTop:12,
        marginLeft:3,
        width:50,
        borderRadius:25,
        height:50,
    }
});