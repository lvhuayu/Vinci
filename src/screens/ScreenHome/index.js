/**
 * ScreenHome/index.js
 */
import React, {Component} from 'react';
import view from "../ScreenHome/view";

export default class ScreenHome extends Component {

    // 配置页面导航header选项
    navigationOptions = ({navigation}) => ({
        headerTitle: '首页',
        headerLeft: null,
        headerTitleStyle:{alignSelf:'center'}
    });

    constructor(props) {
        super();
        this.navigation = props.navigation;
    }

    render() {
        return view(this);
    }
}