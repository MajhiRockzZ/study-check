/* Default React Imports */
import React from "react";
import "./App.css";
import IncompleteList from "./components/IncompleteList";
import CompletedList from "./components/CompletedList";

/* Ant Design Imports */
import { Input, Row, Col, Button, Icon, Typography, Card } from "antd";
import "antd/dist/antd.css";
const { Title } = Typography;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [
        {
          title: "Hacktoberfest 2018",
          todo: true
        },
        {
          title: "React Todo App",
          todo: true
        },
        {
          title: "Learn Bootcamp",
          todo: false
        }
      ],
      input: ""
    };
  }

  render() {
    return (
      <div>
        <Row style={{ marginBottom: 60 }}>
          <Col span={12} offset={6}>
            <Title style={{ textAlign: "center", marginTop: 30 }}>
              <Icon type="book" /> Todo
            </Title>
            <Card title="Add new todos ⚡">
              <Input placeholder="New Todo" />
              <Button type="primary" block style={{ marginTop: 10 }}>
                <Icon type="plus-circle" /> Add Todo
              </Button>
              <Button type="danger" block style={{ marginTop: 10 }}>
                <Icon type="close-circle" /> Clear All
              </Button>
            </Card>
            <IncompleteList list={this.state.todoList} />
            <CompletedList list={this.state.todoList} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
