import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import AntInput from '../AntInput';
import TodoList from '../../components/TodoList';
import { getAllTodos } from '../../store/actions/todo';
import { getUser } from '../../store/actions/user';
import { todos } from '../../store/selectors/todos';
import { profile } from '../../store/selectors/user';

const ToDosList = ({ getAllTodos, getUser, todos, user, ...props }) => {
  useEffect(() => {
    getAllTodos();
    getUser();
  }, [getAllTodos, getUser]);

  return (
    <>
      <Header user={user} />
      <AntInput user={user} />
      <TodoList todos={todos} />
    </>
  )
};

const mapStateToProps = state => {
  return {
    todos: todos(state),
    user: profile(state),
  };
}

export default connect(
  mapStateToProps,
  { getAllTodos, getUser },
)(ToDosList)