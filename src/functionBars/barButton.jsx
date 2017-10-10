import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BarButton extends Component {
    render() {
        return (
            <button
                style={{ border: "0px", width: "40px", height: "40px" }}
                onClick={this.props.onClick}>
                <i className={"fa fa-" + this.props.icon} />
            </button>
        );
    }
}

BarButton.propTypes = {
    onClick: PropTypes.func,
    icon: PropTypes.string
};

BarButton.defaultProps = {
    icon: "check-circle"
}

export default BarButton;
