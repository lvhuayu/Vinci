/**
 * ScreenUserProfile/index.js
 */

import React, {Component} from 'react';
import view from "../ScreenUserProfile/view";

export default class ScreenUserProfile extends Component {

    // 配置页面导航header选项
    navigationOptions = () => ({
        headerTitle: '首页',
        headerLeft: null,
        headerTitleStyle:{alignSelf:'center'}
    });

    constructor(props) {
        super();
        this.navigation = props.navigation;
        this.state = {};
    }

    render() {
        return view(this);
    }
}