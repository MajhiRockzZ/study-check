/* Default React Imports */
import React from "react";

/* Ant Design Imports */
import { List, Button, Icon } from "antd";
import "antd/dist/antd.css";

function CompletedList(props) {
  const data = props.list.map(todo => todo.title);
  return (
    <div>
      <List
        header={
          <div>
            Task Completed{" "}
            <span role="img" aria-label="done-emoji">
              🤩
            </span>
          </div>
        }
        bordered
        dataSource={data}
        renderItem={item => (
          <List.Item>
            {item}{" "}
            <span style={{ float: "right" }}>
              <Button type="danger" size="small" ghost>
                <Icon type="delete" theme="twoTone" twoToneColor="#c0392b" />{" "}
                Remove
              </Button>{" "}
              <Button type="primary" size="small" ghost>
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

export default CompletedList;
