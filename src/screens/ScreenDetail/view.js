/**
 * ScreenDetail/index.js
 */

import React from "react";
import {Text, View, Image, ScrollView, StyleSheet, PixelRatio, Modal, TouchableOpacity} from "react-native";
import {Button} from "react-native-elements";
import Fire from "../../../Fire";

const images = [
    {url: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=460"},
    {url: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=460"}
];

let state={
    modalVisible: false,  //Controls if modal is opened or closed
    currentImageIndex: 0   //Controls initial photo to show for modal
}

function openModal(index) {
    state.modalVisible = true;
    state.currentImageIndex = index;
    console.log(state.modalVisible);
    console.log(state.currentImageIndex);
}

export default self => (
    <View style={styles.bigcontainer}>
        <ScrollView>
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
                            <Text style={styles.subject}> 有没有女生想于我一同去吃洞庭春 </Text>
                        </View>
                        <View style={styles.divide_line}/>
                        <ScrollView horizontal={true}>
                            <View style={styles.wrapper}>
                                <Image
                                    resizeMode="cover"
                                    style={styles.image}
                                    source={{ uri: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=460" }}
                                />
                                <Image
                                    resizeMode="contain"
                                    style={styles.image}
                                    source={{ uri: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=460" }}
                                />
                                <Image
                                    resizeMode="cover"
                                    style={styles.image}
                                    source={{ uri: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=460" }}
                                />
                            </View>
                        </ScrollView>
                        <View style={styles.divide_line}/>
                        <View style={styles.detail_restaurant}>
                            <Image style={styles.small_picture} source={require('../../assets/images/fork.png')}/>
                            <Text style={styles.address}> 洞庭春 </Text>
                        </View>
                        <View style={styles.divide_line}/>
                        <View style={styles.row}>
                            <Image style={styles.small_picture} source={require('../../assets/images/person.png')}/>
                            <Text style={styles.time}> 一位女生 </Text>
                        </View>
                        <View style={styles.row}>
                            <Image style={styles.small_picture} source={require('../../assets/images/fork.png')}/>
                            <Text style={styles.address}> 可接送 </Text>
                        </View>
                        <View style={styles.row}>
                            <Image style={styles.small_picture} source={require('../../assets/images/clock.png')}/>
                            <Text style={styles.time}> 2018-10-17 03:00  我请客</Text>
                        </View>
                    </View>
                    <View style={styles.divide_line}/>
                    <View style={styles.detail_status}>
                        <Image style={styles.small_picture} source={require('../../assets/images/eye.png')}/>
                        <Text style={styles.times}> 18 </Text>
                        <Image style={styles.small_picture} source={require('../../assets/images/imessage.png')}/>
                        <Text style={styles.times}> 18 </Text>
                        <Image style={styles.small_picture} source={require('../../assets/images/person.png')}/>
                        <Text style={styles.times}> 18 </Text>
                    </View>
                </View>
            </View>
            <View style={styles.comment_container}>
                <Text style={styles.comment}> 评论 2 </Text>
                <View style={{height: 1/PixelRatio.get(), backgroundColor:'#c4c4c4'}}/>
                <View style={styles.innerBox}>
                    <View style={styles.comment_profile}>
                        <Image style={styles.comment_small_photo} source={require('../../assets/images/photo.png')}/>
                        <View style={styles.comment_profile_detail}>
                            <View>
                                <Text style={styles.comment_name}> 人生若只如初见 </Text>
                            </View>
                            <View>
                                <Text style={styles.subject}> 好吃吗？ </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
        <View style={styles.apply_button}>
            <Button
                raised
                rightIcon={{ type: 'octicon', buttonStyle: styles.someButtonStyle}}
                backgroundColor='#FF5953'
                title='报名'
                onPress={() => {Fire.shared.applyActivity()}}/>
        </View>
     </View>
);

const styles = StyleSheet.create({
    row: {
        marginTop:9,
        flexDirection: "row"
    },
    bigcontainer:{
        height: '100%'
    },
    container:{
        flexDirection: "column",
        marginBottom:4,
        marginLeft:1,
        marginRight:1,
        backgroundColor:'#FFFFFF',
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
    photo:{
        justifyContent: 'center',
        width:52,
        borderRadius:26,
        height:52,
    },
    resume:{
        flexDirection: "column",
        marginLeft:15,
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
    activity:{
        flexDirection: "column",
        marginTop:12,
    },
    subject:{
        marginBottom:2,
        fontSize:17
    },
    divide_line:{
        height: 1/PixelRatio.get(),
        backgroundColor:'#c4c4c4',
        marginTop:8
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
    address:{
        fontSize:16
    },
    time:{
        fontSize:15
    },
    image:{
        width:135,
        height:135
    },
    small_picture:{
        width:17,
        height:17,
        marginRight:3,
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
    comment_container:{
        flexDirection: "column",
        marginBottom:4,
        marginLeft:1,
        marginRight:1,
        height:'100%',
        backgroundColor:'#FFFFFF',
    },
    comment_profile:{
        flexDirection: "row"
    },
    comment_profile_detail:{
        flexDirection: "column",
        marginLeft:8,
    },
    comment_small_photo:{
        marginLeft:3,
        marginTop:12,
        justifyContent: 'center',
        width:30,
        borderRadius:15,
        height:30,
    },
    comment_name:{
        marginTop:12,
        marginBottom:6,
        fontSize:15,
        color: 'grey'
    },
    comment:{
        marginTop:6,
        marginBottom:6,
        marginLeft:12,
        fontSize:15
    },
    detail_status:{
        marginTop:8,
        marginBottom:8,
        flexDirection: "row",
        position: "bottom"
    },
    detail_restaurant:{
        marginTop:8,
        fontSize:16,
        flexDirection: "row"
    },
    detail_picture:{
        marginTop:8,
        width:90,
        height:90,
        flexDirection: "row"
    },
    wrapper: {
        height:120,
        flexDirection: "row"
    },
    slide1: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    someButtonStyle: {
        color: 'red'
    },
    apply_button: {
        color: 'red',
        position: 'fixed',
        bottom: 60
    }
});