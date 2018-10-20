/**
 * ScreenLogin/index.js
 */
import React, {Component} from 'react';
import view from "../ScreenLogin/view";
import {Button} from "react-native";
import {createMaterialTopTabNavigator} from "react-navigation";

import ScreenHome from "../ScreenHome";
import ScreenDetail from "../ScreenDetail";

const ScreenTab = createMaterialTopTabNavigator(
    // 配置 tab 路由
    {
        ScreenHomeTab: {
            screen: ScreenHome
        },
        ScreenDetailTab: {
            screen: ScreenDetail
        }
    },
    // 其他配置选项
    {
        tabBarPosition: "bottom"
    }
);



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
        this.state = { email: '', password: '', errorMessage: null}
    }

    render() {
        return view(this);
    }
};