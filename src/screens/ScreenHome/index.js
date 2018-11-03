/**
 * ScreenHome/index.js
 */
import React, {Component} from 'react';
import view from "../ScreenHome/view";
const firebase = require('firebase');

export default class ScreenHome extends Component {

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

    componentDidMount() {
        firebase.database().ref().child('ActivityList').on("value", snapshot => {
            this.setState({ activities: snapshot.val()});
        }, function (error) {
            console.log("Error: " + error.code);
        });
    }

    render() {
        return this.state.activities? view(this): null;
    }
}
