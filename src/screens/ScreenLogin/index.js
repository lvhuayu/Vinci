/**
 * ScreenLogin/index.js
 */
import React, {Component} from 'react';
import view from "../ScreenLogin/view";
import {Button, Text} from "react-native";


export default class ScreenLogin extends Component {

    // 配置页面导航header选项
    static navigationOptions = ({navigation}) => ({
        headerTitle: '登录',
        headerBackTitle:'取消',
        headerRight: (
            <Button
                onPress={() => navigation.navigate("ScreenReg")}
                title="注册"
            />)
    });

    constructor(props) {
        super();
        this.navigation = props.navigation;
    }

    render() {
        return view(this);
    }
};