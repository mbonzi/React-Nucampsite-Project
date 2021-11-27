import React from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, Button} from 'reactstrap';
import FontAwesomeIcon from 'font-awesome/css/font-awesome.css';
import { Link } from 'react-router-dom';
//import Button from 'reactstrap/lib/Button';


class CommentForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {    

    return(
      <React.Fragment>

        <Button outline color="secondary" size="sm">
          <i className="fa fa-light fa-pencil fa-lg" />
          Submit Comment
        </Button>{''}

      </React.Fragment>
    );

  }
};


function RenderCampsite ({campsite}){
    return (
        <div className="col-md-5 m-1">
          <Card>
            <CardImg top src={campsite.image} alt={campsite.name} />
            <CardBody>
              <CardText>{campsite.description}</CardText>
            </CardBody>
          </Card>
        </div>
    );
  }


function RenderComments({comments}) {
  if (comments) {
      return (
          <div className="col-md-5 m-1">
            <h4>Comments:</h4>
            {comments.map((comments) => (
              <div key={comments.id}>
                {comments.text},{comments.author} -
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comments.date)))}
              </div>
            ))}
            <CommentForm />
          </div>
        );
    }
    return <div />;
  }


function CampsiteInfo(props) {
  if (props.campsite) {
    return (
      <div className="container">
        <div className="row">
            <div className="col">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                </Breadcrumb>
                <h2>{props.campsite.name}</h2>
                <hr />
            </div>
        </div>
        <div className="row">
            <RenderCampsite campsite={props.campsite} />
            <RenderComments comments={props.comments} />
        </div>
      </div>
    );
  }
  return <div />;
}

export default CampsiteInfo;