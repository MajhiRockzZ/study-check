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

    this.updateInput = this.updateInput.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo() {
    this.setState(currentState => {
      return {
        todoList: currentState.todoList.concat([
          {
            title: this.state.input,
            todo: true
          }
        ]),
        input: ""
      };
    });
  }

  updateInput(e) {
    const value = e.target.value;

    this.setState({
      input: value
    });
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
              <Input
                type="text"
                placeholder="New Todo"
                value={this.state.input}
                onChange={this.updateInput}
              />
              <Button
                type="primary"
                block
                style={{ marginTop: 10 }}
                onClick={this.handleAddTodo}
              >
                <Icon type="plus-circle" /> Add Todo
              </Button>
              <Button
                type="danger"
                block
                style={{ marginTop: 10 }}
                onClick={() =>
                  this.setState({
                    todoList: []
                  })
                }
              >
                <Icon type="close-circle" /> Clear All
              </Button>
            </Card>
            <IncompleteList
              list={this.state.todoList.filter(
                todoItem => todoItem.todo === true
              )}
            />
            <CompletedList
              list={this.state.todoList.filter(
                todoItem => todoItem.todo === false
              )}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
