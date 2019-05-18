/**
 * ScreenCreateActivity/index.js
 */

import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';
import React from "react";
import {ImageBackground, Image, StyleSheet, View, TouchableOpacity} from "react-native";

export default self => (
    <Container>
        <View style={styles.header}>
            <ImageBackground style={styles.photo_background} source={require('../../assets/images/photo.png')}>
            </ImageBackground>
        </View>
        <Content>
            <List>
                <ListItem onPress={() => self.navigation.navigate("ScreenUserDetailProfile")}>
                    <Left>
                        <Text>个人资料</Text>
                    </Left>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </ListItem>
                <ListItem onPress={() => self.navigation.navigate("ScreenUserDetailProfile")}>
                    <Left>
                        <Text>我的约会</Text>
                    </Left>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </ListItem>
                <ListItem onPress={() => self.navigation.navigate("ScreenUserDetailProfile")}>
                    <Left>
                        <Text>设置</Text>
                    </Left>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </ListItem>
            </List>
        </Content>
    </Container>
);

const styles = StyleSheet.create({
    row: {
        marginTop:8,
        flexDirection: "row"
    },
    header:{
        flex: 0.4
    },
    photo_background:{
        flex: 1,
        width:'100%'
    },
    photo:{
        marginTop:120,
        marginLeft:15,
        justifyContent: 'center',
        width:70,
        borderRadius:35,
        height:70,
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

    }
});