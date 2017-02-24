import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tabs, { TabPane } from 're-tabs';

class Basic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeKey: 'tab1',
        };
        this.onChange = this.onChange.bind(this);
    }
    onChange(key) {
        this.setState({
            activeKey: key,
        });
    }
    render() {
        const tabs = [
            {
                value: 'tab1',
                key: 'tab1',
            },
            {
                value: 'tab2',
                key: 'tab2',
            },
        ];
        return (
            <Tabs navs={tabs} activeKey={this.state.activeKey} onChange={this.onChange}>
                <TabPane key="tab1">
                    <div>Tab1</div>
                </TabPane>
                <TabPane key="tab2">
                    <div>Tab2</div>
                </TabPane>
                <TabPane key="tab3">
                    <div>Tab3</div>
                </TabPane>
            </Tabs>
        );
    }
}

ReactDOM.render(<Basic />, document.getElementById('root'));
