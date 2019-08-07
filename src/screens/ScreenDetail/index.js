/**
 * ScreenDetail/index.js
 */

import React, {Component} from 'react';
import view from "../ScreenDetail/view";
import Fire from "../../../Fire";

const firebase = require('firebase');

export default class ScreenHome extends Component {
    // 自定义当前页面路由配置，后面介绍的TabNavigator也使用这个对象中的属性
    static navigationOptions = {
        // 设置 title
        title: "正在约会",
    };

    constructor(props) {
        super(props);
        // 初始状态
        this.navigation = props.navigation;
    }

    componentWillMount() {
        const activityKey = this.props.navigation.getParam('activityKey')
        firebase.database().ref().child('ActivityList/'+ activityKey).on("value", snapshot => {
            console.log(snapshot.val());
            this.setState({ activityKey: activityKey});
            this.setState({ activityData: snapshot.val()});
        }, function (error) {
            console.log("Error: " + error.code);
        });
        var docRef = firebase.firestore().collection("fangxiang").doc("activities");
        docRef.get().then(snapshot => {
          console.log("Document data:", snapshot.data()['viewCount']);
          this.setState({ activityMetaData: snapshot.data()['viewCount']});
        });
    }

    componentDidMount() {
        this.props.navigation.setParams({ applyActivity: this._applyActivity });
    }

    _applyActivity = () => {
        Fire.shared.applyActivity({
            expectation: this.state.expectation,
            note: this.state.note,
            place: this.state.place,
            date: this.state.date,
            gender: this.state.gender,
            fee: this.state.fee
        }).then(() => {
            console.log("Create new activity successfully!")
        });
    };

    render() {
        return view(this);
    }
}
