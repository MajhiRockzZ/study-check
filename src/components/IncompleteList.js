/* Default React Imports */
import React from "react";

/* Ant Design Imports */
import { List, Button, Icon } from "antd";
import "antd/dist/antd.css";

function IncompleteList(props) {
  const data = props.list.map(todo => todo.title);
  return (
    <div>
      <List
        header={
          <div>
            To be completed{" "}
            <span role="img" aria-label="todo-emoji">
              😥
            </span>
          </div>
        }
        bordered
        dataSource={data}
        renderItem={item => (
          <List.Item>
            {item}{" "}
            <span style={{ float: "right" }}>
              <Button
                type="danger"
                size="small"
                ghost
                onClick={() => props.onRemoveTodos(item)}
              >
                <Icon type="delete" theme="twoTone" twoToneColor="#c0392b" />{" "}
                Remove
              </Button>{" "}
              <Button
                type="primary"
                size="small"
                ghost
                onClick={() => props.onToggleTodos(item)}
              >
                <Icon
                  type="check-circle"
                  theme="twoTone"
                  twoToneColor="#52c41a"
                />{" "}
                Done
              </Button>
            </span>
          </List.Item>
        )}
        style={{ marginTop: 20 }}
      />
    </div>
  );
}

export default IncompleteList;
