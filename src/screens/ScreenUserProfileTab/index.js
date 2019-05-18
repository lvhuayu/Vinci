/**
 * ScreenUserProfileTab/index.js
 */

import React, {Component} from 'react';
import userProfileIndex from "../ScreenUserProfile/index";

export default class ScreenUserProfileTab extends Component {

    // 配置页面导航header选项
    static navigationOptions = ({navigation}) => ({
        headerTitle: '首页',
        headerLeft: null,
        headerTitleStyle:{alignSelf:'center'}
    });

    constructor(props) {
        super();
        this.navigation = props.navigation;
    }

    render() {
        return userProfileIndex(this);
    }
}