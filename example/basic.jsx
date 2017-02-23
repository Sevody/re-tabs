import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tabs from '../index';

class Basic extends Component {
    render() {
        return (
            <Tabs></Tabs>
        );
    }
}

ReactDOM.render(<Basic />, document.getElementById('root'));
