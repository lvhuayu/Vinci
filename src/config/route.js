/**
 * route.js
 */

// 引入依赖
import React from "react";
import { createStackNavigator } from "react-navigation";

// 引入页面组件
import ScreenHome from "../screens/ScreenHome";
import ScreenDetail from "../screens/ScreenDetail";

// 配置路由
const AppNavigator = createStackNavigator({
    ScreenHome: {
        screen: ScreenHome
    },
    ScreenDetail: {
        screen: ScreenDetail
    }
});

export default () => <AppNavigator />;