import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Container } from "reactstrap";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const IssueKey = ({ data, index }) => {
  return (
    <Container className="content">
      <Container className="textEle">USER PROFILE</Container>
      <Image src={data[index].user.avatar_url} fluid />
      <div>
        <b>Comment : </b>
        {data[index].title}
      </div>
      <div>
        <b>Created At : </b>
        {data[index].created_at}
      </div>
      <div>
        <b>Updated At : </b>
        {data[index].updated_at}
      </div>
    </Container>
  );
};

export default IssueKey;
