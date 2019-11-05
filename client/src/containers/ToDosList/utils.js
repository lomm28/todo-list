import { message } from 'antd';
import moment from 'moment';

import {
  SHOW_ALL_FILTER,
  SHOW_COMPLETED_FILTER,
  SHOW_ACTIVE_FILTER,
  SHOW_MINE_FILTER,
  SHOW_DATE_FILTER,
} from '../../store/types';

export const asyncHelper = (action, updateState) => {
  return async args => {
    try {
      updateState(true);
      const res = await action(args);
      updateState(false);
      message.success(res.msg);
    } catch (e) {
      message.error(e.data.msg);
      updateState(false);
    }
  };
};

export const getVisibleTodos = (todos, filter, user) => {
  switch (filter.type) {
    case SHOW_ALL_FILTER:
      return todos;
    case SHOW_COMPLETED_FILTER:
      return todos.filter(todo => todo.state === 'completed');
    case SHOW_ACTIVE_FILTER:
      return todos.filter(todo => todo.state === 'in progress');
    case SHOW_MINE_FILTER:
      return todos.filter(todo => todo.userId === user.id);
    case SHOW_DATE_FILTER:
      return todos.filter(
        todo => moment(todo.createdAt).format('YYYY-MM-DD') === filter.date,
      );
    default:
      message.error(`Unknown filter: ${filter.type}`);
      return todos;
  }
};
