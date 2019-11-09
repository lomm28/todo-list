import React, { useState, useEffect } from 'react';
import { arrayOf, func, shape, number } from 'prop-types';
import { Spin } from 'antd';
import { connect } from 'react-redux';

import FiltersBar from '../FiltersBar';
import Header from '../../components/Header';
import AntInput from '../../components/AntInput';
import TodoList from '../../components/TodoList';

import {
  getAllTodos,
  updateTodo,
  deleteTodo,
  createTodo,
} from '../../store/actions/todo';
import { getUser } from '../../store/actions/user';

import { todos } from '../../store/selectors/todos';
import { filters } from '../../store/selectors/filters';
import { profile } from '../../store/selectors/user';

import { asyncHelper, getVisibleTodos } from './utils';

const ToDosList = ({
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  getUser,
  todos,
  user,
}) => {
  const [isLoading, updateLoading] = useState(false);

  useEffect(() => {
    getAllTodos();
    getUser();
  }, [getAllTodos, getUser]);

  const handleTodoCreate = description => {
    // eslint-disable-next-line
    asyncHelper(createTodo, updateLoading)({
      userId: user.id,
      description,
      state: 'in progress',
    });
  };

  const handleTodoUpdate = todo => {
    const updatedStatus =
      todo.state === 'in progress' ? 'completed' : 'in progress';
    asyncHelper(updateTodo, updateLoading)({ ...todo, state: updatedStatus });
  };

  const handleTodoDelete = todoId => {
    asyncHelper(deleteTodo, updateLoading)(todoId);
  };

  return (
    <Spin spinning={isLoading}>
      <Header user={user} />
      <FiltersBar />
      <AntInput createTodo={handleTodoCreate} />
      <TodoList
        todos={todos}
        user={user}
        updateTodo={handleTodoUpdate}
        deleteTodo={handleTodoDelete}
      />
    </Spin>
  );
};

const mapStateToProps = state => {
  return {
    user: profile(state),
    todos: getVisibleTodos(todos(state), filters(state), profile(state)),
  };
};

ToDosList.defaultProps = {
  user: {
    id: 0,
  },
};

ToDosList.propTypes = {
  getAllTodos: func.isRequired,
  createTodo: func.isRequired,
  updateTodo: func.isRequired,
  deleteTodo: func.isRequired,
  getUser: func.isRequired,
  todos: arrayOf(shape({})).isRequired,
  user: shape({
    id: number.isRequired,
  }),
};

export default connect(mapStateToProps, {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  getUser,
})(ToDosList);
