# re-tabs

react tabs compoent for mobile

## Install

`npm install re-tabs --save`

## Usage

### Basic

```js
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
```

### Router

```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Tabs, { TabPane }  from 're-tabs';

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
    return (
        <div>
            <div>page1</div>
            <div>page1</div>
            <div>page1</div>
            <div>page1</div>
            <div>page1</div>
            <div>page1</div>
            <div>page1</div>
        </div>
    );
}

function Page2() {
    return (
        <div>
            <div>page2</div>
            <div>page2</div>
            <div>page2</div>
            <div>page2</div>
            <div>page2</div>
            <div>page2</div>
            <div>page2</div>
        </div>
    )
}

ReactDOM.render(<Router history={hashHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Page1}/>
    <Route path="page1" component={Page1}/>
    <Route path="page2" component={Page2}/>
  </Route>
</Router>, document.getElementById('root'));

```


## LICENSE

MIT
