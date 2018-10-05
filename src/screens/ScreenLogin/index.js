/**
 * ScreenLogin/index.js
 */
import React, {Component} from 'react';
import view from "../ScreenLogin/view";

export default class ScreenLogin extends Component {

    // 配置页面导航header选项
    static navigationOptions = ({navigation}) => ({
        headerTitle: '登录',
        headerBackTitle:'取消',
    });

    constructor(props) {
        super();
        this.navigation = props.navigation;
    }

    render() {
        return view(this);
    }
};