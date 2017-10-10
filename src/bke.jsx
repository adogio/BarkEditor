import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BarButton from './functionBars/barButton';
import './bke.css';

class BKE extends Component {
    render() {
        return (
            <div style={{
                width: "90%",
                margin: "auto",
                border: "5px solid #ffaf53",
                padding: "10px"
            }}>
                <div>
                    <BarButton icon="bold" onClick={() => { console.log("b") }} />
                </div>
                <hr />
                <div
                    ref="editor"
                    contentEditable="true"
                    style={{
                        height: this.props.height,
                        overflow: "auto",
                        padding: "5px"
                    }} />
            </div>
        );
    }
}

BKE.propTypes = {
    height: PropTypes.string
};

BKE.defaultProps = {
    height: "100%"
}

export default BKE;
