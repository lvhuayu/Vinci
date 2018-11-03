/**
 * ScreenCreateActivity/index.js
 */

import React, {Component} from 'react';
import view from "../ScreenCreateActivity/view";
import {Button} from "react-native";
import Fire from "../../../Fire";

export default class ScreenCreateActivity extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "创建约会",
            headerRight: (
                <Button
                    onPress={navigation.getParam('createActivity')}
                    title="创建"
                />
            ),
        };
    };

    constructor(props) {
        super();
        this.navigation = props.navigation;
        this.state = {};
    }

    componentDidMount() {
        this.props.navigation.setParams({ createActivity: this._createActivity });
    }

    _createActivity = () => {
        Fire.shared.createActivity({
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