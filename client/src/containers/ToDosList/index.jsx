import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import FiltersBar from '../FiltersBar';
import AntInput from '../../components/AntInput';
import TodoList from '../../components/TodoList';
import { getAllTodos, updateTodo, deleteTodo, createTodo } from '../../store/actions/todo';
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
  user
}) => {
  const [isLoading, updateLoading] = useState(false);

  useEffect(() => {
    getAllTodos();
    getUser();
  }, [getAllTodos, getUser]);

  const handleTodoCreate = description => {
    asyncHelper(createTodo, updateLoading)({ userId: user.id, description, state: 'in progress' });
  }

  const handleTodoUpdate = todo => {
    const updatedStatus = todo.state === 'in progress' ? 'completed' : 'in progress';
    asyncHelper(updateTodo, updateLoading)({ ...todo, state: updatedStatus });
  }

  const handleTodoDelete = todoId => {
    asyncHelper(deleteTodo, updateLoading)(todoId);
  }

  return (
    <Spin spinning={isLoading} >
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
  )
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(todos(state), filters(state)),
    user: profile(state),
  };
}

export default connect(
  mapStateToProps,
  {
    getAllTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    getUser
  },
)(ToDosList)