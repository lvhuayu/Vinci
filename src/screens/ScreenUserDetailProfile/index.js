/**
 * ScreenCreateActivity/index.js
 */

import React, {Component} from 'react';
import view from "../ScreenUserDetailProfile/view";
import {Button} from "react-native";
import Fire from "../../../Fire";

export default class ScreenCreateActivity extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "详细资料",
            headerLeft: null,
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

        this.inputRefs = {};

        this.state = {
            favColor: undefined,
            items: [
                {
                    label: 'Red',
                    value: 'red',
                },
                {
                    label: 'Orange',
                    value: 'orange',
                },
                {
                    label: 'Blue',
                    value: 'blue',
                },
            ],
            favSport: undefined,
            items2: [
                {
                    label: 'Football',
                    value: 'football',
                },
                {
                    label: 'Baseball',
                    value: 'baseball',
                },
                {
                    label: 'Hockey',
                    value: 'hockey',
                },
            ],
        };
    }

    componentDidMount() {
        // if the component is using the optional `value` prop, the parent
        // has the abililty to both set the initial value and also update it
        setTimeout(() => {
            this.setState({
                favColor: 'red',
            });
        }, 1000);

        // parent can also update the `items` prop
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat([{ value: 'purple', label: 'Purple' }]),
            });
        }, 2000);
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