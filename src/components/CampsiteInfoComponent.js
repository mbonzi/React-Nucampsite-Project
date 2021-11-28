import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Link } from "react-router-dom";

const minLength = (len) => (val) => val && val.length >= len;
const maxLength = (len) => (val) => !val || val.length <= len;

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleSubmit(values) {
    alert("Current state is: " + JSON.stringify(values));
  }

  render() {
    return (
      <React.Fragment>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment:</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="rating">Rating</label>
                <Control.select
                  id="rating"
                  name="rating"
                  model=".rating"
                  className="form-control"
                >
                  <option name="rating" disabled selected value> Select... </option>
                  <option name="rating">1</option>
                  <option name="rating">2</option>
                  <option name="rating">3</option>
                  <option name="rating">4</option>
                  <option name="rating">5</option>
                </Control.select>
              </div>

              <div className="form-group">
                <label htmlFor="author">Author</label>
                <Control.text
                  id="author"
                  name="author"
                  model=".author"
                  placeholder="Your Name"
                  className="form-control"
                  validators={{
                    minLength: minLength(2),
                    maxLength: maxLength(15),
                  }} 
                >
                </Control.text>

                <Errors
                  className="text-danger"
                  show="touched"
                  model=".author"
                  messages={{
                    minLength: "Must be at least 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="comments">Comment</label>
                <Control.textarea
                  id="text"
                  name="text"
                  model=".text"
                  className="form-control"
                  placeholder="Comments"
                  validators={{
                    maxLength: maxLength(250),
                  }}
                >
                </Control.textarea>

                <Errors
                  className="text-danger"
                  show="touched"
                  model=".text"
                  messages={{
                    maxLength: "Must be 250 characters or less",
                  }}
                />
              </div>

              <div className="form-group">
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </div>
            </LocalForm>
          </ModalBody>
        </Modal>

        <Button outline color="secondary" size="sm" onClick={this.toggleModal}>
          <i className="fa fa-light fa-pencil fa-lg" />
          Submit Comment
        </Button>
        {""}
      </React.Fragment>
    );
  }
}

function RenderCampsite({ campsite }) {
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

function RenderComments({ comments }) {
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
              <BreadcrumbItem>
                <Link to="/directory">Directory</Link>
              </BreadcrumbItem>
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