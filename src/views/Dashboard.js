import React, { useEffect, useState } from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import { Table, Card, Container, Button } from "react-bootstrap";
import BaseApi from "api/BaseApi";
import { get } from "jquery";

const Dashboard = () => {
  const [postData, setPostData] = useState([]);

  const listPosts = postData.map((post) => (
    <tr key={post.id}>
      <td>{post.title}</td>
      <td>{post.upvote}</td>
      <td>
        <Button variant="primary" size="sm" id={post.id}>
          View
        </Button>
      </td>
    </tr>
  ));

  useEffect(() => {
    const getPostData = async () => {
      BaseApi.get("/posts")
        .then(function (response) {
          // handle success
          console.log(response);
          setPostData(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    };

    getPostData();
  }, []);

  return (
    <>
      <Container fluid>
        <Card>
          <Card.Header>
            <Card.Title>Subjects</Card.Title>
          </Card.Header>
          <Card.Body>
            <Table striped>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Upvote</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {listPosts}
                {/* <tr>
                  <td>This is subject 1</td>
                  <td>23</td>
                  <td>
                    <Button variant="primary" size="sm">
                      View
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>This is subject 2</td>
                  <td>8</td>
                  <td>
                    <Button variant="primary" size="sm">
                      View
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>This is subject 3</td>
                  <td>12</td>
                  <td>
                    <Button variant="primary" size="sm">
                      View
                    </Button>
                  </td>
                </tr> */}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Dashboard;
