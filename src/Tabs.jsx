import React, { PropTypes } from 'react';
import './Tabs.less';

const propTypes = {
    activeKey: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    children: PropTypes.node.isRequired,
    navs: PropTypes.arrayOf(PropTypes.shape({
        value: React.PropTypes.string,
        key: React.PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
        ]),
    })).isRequired,
    onChange: PropTypes.func.isRequired,
};

const defaultProps = {
    activeKey: 0,
};

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(key) {
        if (this.props.onChange) {
            this.props.onChange(key);
        }
    }

    render() {
        const { navs, activeKey, children } = this.props;
        let activePositon = 0;
        const contents = navs.map((item, index) => {
            let cls = '';
            if (item.key === activeKey) {
                activePositon = index;
                cls = 'active';
            }
            return <li key={item.key} className={cls} onClick={() => this.onChange(item.key)}>{item.value}</li>;
        });

        // 使用 translate3d 来进行转场，优化性能
        const inkBarPosition = `translate3d(${100 * activePositon}%, 0px, 0px)`;

        const panes = React.Children.map(children, child => <div className="tab-pane scroller">{child}</div>);
        const tabPanesPosition = `translate3d(${-100 * activePositon}%, 0px, 0px)`;
        return (
            <div className="tabs-wrapper">
                <div className="tabs-bar">
                    <ul className="tab-nav">
                        {contents}
                        <div className="tab-ink-bar" style={{ transform: inkBarPosition, WebkitTransform: inkBarPosition }} />
                    </ul>
                </div>
                <div className="tab-panes" style={{ transform: tabPanesPosition, WebkitTransform: tabPanesPosition }}>
                    {panes}
                </div>
            </div>
        );
    }
}

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;

export default Tabs;
