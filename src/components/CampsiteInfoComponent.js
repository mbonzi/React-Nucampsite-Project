import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {

    renderCampsite(campsite) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-5 m-1">
                        <Card>
                            <CardImg top src={campsite.image} alt={campsite.name} />
                            <CardBody>
                                <CardTitle>
                                    {campsite.name}
                                </CardTitle>
                                <CardText>
                                    {campsite.description}
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
    
    renderCampsiteInfo(campsite) {
        if (campsite) {
            return (
            <div className="container">
                <div className="row">
                    {this.renderCampsite(this.props.campsite)}
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