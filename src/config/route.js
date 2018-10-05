/**
 * route.js
 */

// 引入依赖
import React from "react";
import { createStackNavigator } from "react-navigation";

// 引入页面组件
import ScreenBottomTab from '../screens/ScreenBottomTab';
import ScreenHome from "../screens/ScreenHome";
import ScreenDetail from "../screens/ScreenDetail";
import ScreenLogin from "../screens/ScreenLogin";
import ScreenReg from "../screens/ScreenReg";

// 配置路由
const AppNavigator = createStackNavigator({
    ScreenLogin: {
        screen: ScreenLogin  // 登录页
    },
    ScreenReg: {
        screen: ScreenReg  // 注册页
    },
    ScreenBottomTab: {
        screen: ScreenBottomTab
    },
    ScreenHome: {
        screen: ScreenHome
    },
    ScreenDetail: {
        screen: ScreenDetail
    }
});

export default () => <AppNavigator />;