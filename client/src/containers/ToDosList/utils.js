import { message } from 'antd';

import { SHOW_ALL_FILTER, SHOW_COMPLETED_FILTER, SHOW_ACTIVE_FILTER } from '../../store/types';

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
  }
}

export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL_FILTER:
      return todos;
    case SHOW_COMPLETED_FILTER:
      return todos.filter(todo => todo.state === "completed");
    case SHOW_ACTIVE_FILTER:
      return todos.filter(todo => todo.state === "in progress");
    default:
      message.error(`Unknown filter: ${filter}`);
      return todos;
  }
}