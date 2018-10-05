/**
 * ScreenReg/index.js
 */
import React, {Component} from 'react';
import view from "../ScreenReg/view";

export default class ScreenReg extends Component {

    constructor(props) {
        super();
        this.navigation = props.navigation;
    }

    render() {
        return view(this);
    }
};