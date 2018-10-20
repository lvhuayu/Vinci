/**
 * ScreenLogin/index.js
 */
import React, {Component} from 'react';
import view from "../ScreenLogin/view";
import {Button} from "react-native";

export default class ScreenLogin extends Component {

    // 配置页面导航header选项
    static navigationOptions = ({navigation}) => ({
        headerTitle: '登录',
        headerRight: (
            <Button
                title="注册"
                onPress={() => navigation.navigate("ScreenReg")}
            />)
    });

    constructor(props) {
        super();
        this.navigation = props.navigation;
        this.state = { email: '', password: '', errorMessage: null}
    }

    render() {
        return view(this);
    }
};