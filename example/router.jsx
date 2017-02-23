import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Tabs, { TabPane }  from '../index.js';

export class App extends Component {
    componentWillMount() {
        this.navs = [
            {
                value: 'Page1',
                key: 'page1',
                component: <Page1 />
            },
            {
                value: 'Page2',
                key: 'page2',
                component: <Page2 />
            }
        ];
    }

    onChange(key) {
        const url = `/${key}`;
        hashHistory.push(url);
    }

    render() {
        let activeKey = 'page1';
        const { children } = this.props;
        const navs = this.navs;
        const panes = navs.map((nav, index) => {
            if (nav.component.type === children.type) {
                activeKey = nav.key;
                nav.component = children;
            }
            return <TabPane key={`tab-pane-${index}`}>{nav.component}</TabPane>;
        })

        return (
            <div>
                <Tabs navs={navs} activeKey={activeKey} onChange={::this.onChange}>
                    {panes}
                </Tabs>
            </div>
        );
    }
}

function Page1() {
    return <div>page1</div>;
}

function Page2() {
    return <div>page2</div>;
}

ReactDOM.render(<Router history={hashHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Page1}/>
    <Route path="page1" component={Page1}/>
    <Route path="page2" component={Page2}/>
  </Route>
</Router>, document.getElementById('root'));
