/**
 * ScreenBottomTab/index.js
 */

// 引入依赖
import React from 'react';
import {createMaterialTopTabNavigator} from "react-navigation";

// 引入页面组件
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

export default ScreenTab;