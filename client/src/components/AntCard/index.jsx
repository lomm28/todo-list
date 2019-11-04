import React from 'react';
import { Card, Button, Tag } from 'antd';
import moment from 'moment';

const { Meta } = Card;

const style = {
  card: {
    width: 300,
    marginRight: 15,
    marginTop: 15,
  }
}

const AntCard = ({ todoItem, userId, updateTodo, deleteTodo }) => {

  const isDisabled = todoItem.userId !== userId;
  const tagColor = todoItem.state === 'in progress' ? '#f50' : '#87d068';

  return (
    <Card
      key={todoItem.id}
      style={style.card}
      actions={[
        <Button
          icon="edit"
          type="primary"
          disabled={isDisabled}
          onClick={() => updateTodo(todoItem)}
        />,
        <Button
          icon="delete"
          type="danger"
          disabled={isDisabled}
          onClick={() => deleteTodo(todoItem.id)}
        />,
      ]}
      extra={moment(todoItem.createdAt).format('YYYY-MM-DD')}
    >
      <Meta
        title={todoItem.description}
        description={<Tag color={tagColor}>{todoItem.state}</Tag>}
      />
    </Card>
  )
}

export default AntCard;