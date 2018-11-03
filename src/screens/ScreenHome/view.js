/**
 * ScreenHome/index.js
 */

import {Text, View, Image, ScrollView, StyleSheet, PixelRatio, TouchableOpacity} from "react-native";
import React from "react";
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default self => (
    <View>
        <ScrollView>
            {Object.keys(self.state.activities).map((key) => {
                return(
                    <TouchableOpacity onPress={() => self.navigation.navigate("ScreenDetail")}>
                        <View style={styles.container}>
                            <View style={styles.innerBox}>
                                <View style={styles.profile}>
                                    <Image style={styles.photo} source={require('../../assets/images/photo.png')}/>
                                    <View style={styles.resume}>
                                        <View>
                                            <Text style={styles.name}> 人生若只如初见 </Text>
                                        </View>
                                        <View style={styles.age}>
                                            <Text> 38 </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.activity}>
                                    <View>
                                        <Text style={styles.subject}> {self.state.activities[key]['expectation']} </Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Image style={styles.small_picture} source={require('../../assets/images/fork.png')}/>
                                        <Text style={styles.address}> {self.state.activities[key]['place']} </Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Image style={styles.small_picture} source={require('../../assets/images/clock.png')}/>
                                        <Text style={styles.time}> {self.state.activities[key]['date']}  {self.state.activities[key]['fee']}</Text>
                                    </View>
                                </View>
                                <View style={{height: 1/PixelRatio.get(), marginTop:4, backgroundColor:'#c4c4c4'}}/>
                                <View style={styles.status}>
                                    <Image style={styles.small_picture} source={require('../../assets/images/eye.png')}/>
                                    <Text style={styles.times}> 18 </Text>
                                    <Image style={styles.small_picture} source={require('../../assets/images/imessage.png')}/>
                                    <Text style={styles.times}> 18 </Text>
                                    <Image style={styles.small_picture} source={require('../../assets/images/person.png')}/>
                                    <Text style={styles.times}> 18 </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            })}
        </ScrollView>
        <ActionButton style={styles.TouchableOpacityStyle} position="right" buttonColor="rgba(231,76,60,1)" verticalOrientation='up'>
            <ActionButton.Item buttonColor='#3498db' title="约饭" onPress={() => {self.navigation.navigate("ScreenCreateActivity")}}>
                <Icon name="md-create" style={styles.actionButtonIcon} />
            </ActionButton.Item>
        </ActionButton>
    </View>
);

const styles = StyleSheet.create({
    row: {
        marginTop:8,
        flexDirection: "row"
    },
    container:{
        flexDirection: "column",
        marginBottom:4,
        marginLeft:3,
        marginRight:3,
        height:210,
        backgroundColor:'#FFFFFF',
        borderRadius: 2,
    },
    innerBox:{
        marginLeft:10,
        marginRight:10
    },
    profile:{
        flexDirection: "row",
        marginTop:18,
        marginBottom:15,
    },
    activity:{
        flexDirection: "column",
        marginTop:12,
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
    subject:{
        fontSize:17
    },
    address:{
        fontSize:16
    },
    time:{
        fontSize:15
    },
    image:{
        marginTop:12,
        width:135,
        height:135
    },
    photo:{
        justifyContent: 'center',
        width:52,
        borderRadius:26,
        height:52,
    },
    small_picture:{
        width:17,
        height:17,
        marginRight:3,
    },
    name:{
        marginTop:6,
        marginBottom:6,
        fontSize:17
    },
    age:{
        backgroundColor: '#87cefa',
        width:35,
        height:18,
        fontSize:15,
        marginLeft:6,
        borderRadius:26,
        alignItems:'center'
    },
    resume:{
        flexDirection: "column",
        marginLeft:15,
    },
    status:{
        marginTop:8,
        flexDirection: "row",
    },
    eye_picture:{
        width:34,
        height:34,
        marginRight:3,
    },
    times:{
        fontSize:15,
        marginRight:3,
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    TouchableOpacityStyle: {

    },
});