import React, { Component } from 'react';

class CampsiteInfo extends Component {

    renderCampsiteInfo(campsite) {
        if (campsite) {
            return (
            <div className="container">
                <div className="row">

                </div>
            </div>
            );
        }
        return <div />
    }

    render() {
        return (
        <div className="container">
            <div className="row">
                {this.renderCampsiteInfo(this.props.campsite)}
            </div>
        </div>
        ); 
    }
}

export default CampsiteInfo;