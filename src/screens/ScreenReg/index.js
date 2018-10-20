/**
 * ScreenReg/index.js
 */
import React, {Component} from 'react';
import view from "../ScreenReg/view";

export default class ScreenReg extends Component {

    // 配置页面导航header选项
    static navigationOptions = ({navigation}) => ({
        headerTitle: '注册',
        headerBackTitle:'取消',
    });

    constructor(props) {
        super();
        this.navigation = props.navigation;
        this.state = { email: '', password: '', errorMessage: null }
    }

    render() {
        return view(this);
    }
};