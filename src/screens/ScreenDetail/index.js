/**
 * ScreenDetail/index.js
 */

import React, {Component} from 'react';
import view from "../ScreenDetail/view";

export default class ScreenHome extends Component {
    // 自定义当前页面路由配置，后面介绍的TabNavigator也使用这个对象中的属性
    static navigationOptions = {
        // 设置 title
        title: "Detail Page",
    };

    constructor(props) {
        super();
        // 初始状态
        this.navigation = props.navigation;
        this.state = {
            isModal:false
        };
    }

    showModal() {
        this.setState({
            isModal:true
        });

        setTimeout(() => {
            this.setState({
                isModal:false
            });
        }, 1500)
    }

    onRequestClose() {
        this.setState({
            isModal:false
        });
    }

    render() {
        return view(this);
    }
}