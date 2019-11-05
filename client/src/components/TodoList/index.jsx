import React, { useState } from 'react';
import { shape, number, arrayOf } from 'prop-types';
import { Spin } from 'antd';
import AntCard from '../AntCard';
import AntPagination from '../AntPagination';

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
    justifyContent: 'center',
    marginTop: 15,
  },
};

const ToDoList = ({ todos, user, ...props }) => {
  const [pagination, updatePagination] = useState({
    minValue: 0,
    maxValue: 10,
  });

  const handlePageChange = value => {
    if (value <= 1) {
      updatePagination({
        minValue: 0,
        maxValue: 10,
      });
    } else {
      updatePagination({
        minValue: pagination.maxValue,
        maxValue: value * 10,
      });
    }
  };

  if (!todos || !user) {
    return (
      <div style={style.spinContainer}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <>
      <div style={style.container}>
        {todos.slice(pagination.minValue, pagination.maxValue).map(todo => (
          <AntCard {...props} key={todo.id} todoItem={todo} userId={user.id} />
        ))}
      </div>
      <AntPagination
        total={todos.length}
        pageSize={10}
        onChange={handlePageChange}
      />
    </>
  );
};

ToDoList.defaultProps = {
  user: {
    id: 0,
  },
};

ToDoList.propTypes = {
  todos: arrayOf(shape({})).isRequired,
  user: shape({
    id: number.isRequired,
  }),
};

export default ToDoList;
