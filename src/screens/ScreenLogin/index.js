/**
 * ScreenLogin/index.js
 */
import React, {Component} from 'react';
import view from "../ScreenLogin/view";

export default class ScreenLogin extends Component {

    constructor(props) {
        super();
        this.navigation = props.navigation;
    }

    render() {
        return view(this);
    }
};