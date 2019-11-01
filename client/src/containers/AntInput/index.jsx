import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Input } from 'antd';
import { createTodo } from '../../store/actions/todo';

const { Search } = Input;

const style = {
  container: {
    marginTop: 15,
  }
}

const AntInput = ({ user, createTodo }) => {
  const [input, updateInput] = useState('');

  const handleOnChange = e => {
    const { value } = e.target;
    updateInput(value);
  }

  const addNewTodo = () => {
    if (user && input) {
      createTodo({ userId: user.id, description: input, state: 'in progress' });
      updateInput('');
    }
  };

  return (
    <div style={style.container}>
      <Search
        placeholder="create a new todo"
        enterButton="Add"
        size="large"
        value={input}
        onChange={handleOnChange}
        onSearch={addNewTodo}
      />
    </div>
  )
}

export default connect(
  null,
  { createTodo },
)(AntInput)