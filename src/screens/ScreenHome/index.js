/**
 * ScreenHome/index.js
 */
import React, {Component} from 'react';
import view from "../ScreenHome/view";

export default class ScreenHome extends Component {

    navigationOptions = {
        title: '首页',
        tabBarIcon: ({ focused }) => {
            // 根据是否选中，显示不同图片
            const icon = focused
                ? require('../../assets/images/tab_home_active.png')
                : require('../../assets/images/tab_home.png');
            return <Image source={icon} style={{ height: 22, width: 22 }} />;
        },
    };

    constructor(props) {
        super();
        this.navigation = props.navigation;
    }

    render() {
        return view(this);
    }
}