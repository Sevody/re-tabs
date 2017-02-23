import React, { PropTypes } from 'react';

const propTypes = {
    active: PropTypes.number,
};

const defaultProps = {
    active: 0,
};

class Tabs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="tabs-wrapper">
                <div className="tabs-bar">
                    <ul className="tab-nav">
                        <div className="tab-ink-bar" />
                    </ul>
                </div>
                <div className="tab-panes" />
            </div>
        );
    }
}

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;

export default Tabs;
