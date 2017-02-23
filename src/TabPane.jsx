import React, { PropTypes } from 'react';

const propTypes = {
    children: PropTypes.node.isRequired,
};

function TabPane({ children }) {
    return <div>{children}</div>;
}

TabPane.propTypes = propTypes;

export default TabPane;
