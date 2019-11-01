import React from 'react';
import { Card, Icon, Spin } from 'antd';

const { Meta } = Card;

const style = {
  spinContainer: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 15,
  },
  card: {
    width: 300,
    marginRight: 15,
    marginTop: 15,
  }
}

const ToDoList = ({ todos }) => {
  if (!todos) {
    return (
      <div style={style.spinContainer}>
        <Spin size="large" />
      </div>
    )
  }

  return (
    <div style={style.container}>
      {todos.map(todo => (
        <Card
          key={todo.id}
          style={style.card}
          actions={[
            <Icon type="setting" key="setting" />,
            <Icon type="edit" key="edit" />,
          ]}
          extra={todo.createdAt}
        >
          <Meta
            title={todo.description}
            description={todo.state}
          />
        </Card>
      ))}
    </div>
  )

};

export default ToDoList;