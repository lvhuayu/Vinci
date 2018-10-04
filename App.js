/**
 * App.js
 */

import React, {Component} from 'react';
import Route from './src/config/route';

export default class RootApp extends Component {
    constructor() {
        super();
    }

    render() {
        return <Route />;
    }
}