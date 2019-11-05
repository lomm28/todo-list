import React, { useState } from 'react';
import { func } from 'prop-types';
import { Input } from 'antd';

const { Search } = Input;

const style = {
  container: {
    marginTop: 15,
    display: 'flex',
    justifyContent: 'flex-end',
  },
};

const AntInput = ({ createTodo }) => {
  const [input, updateInput] = useState('');

  const handleOnChange = e => {
    const { value } = e.target;
    updateInput(value);
  };

  const addNewTodo = () => {
    if (input) {
      createTodo(input);
      updateInput('');
    }
  };

  return (
    <div style={style.container}>
      <Search
        maxLength={300}
        placeholder="create a new todo"
        enterButton="Add"
        size="large"
        value={input}
        onChange={handleOnChange}
        onSearch={addNewTodo}
      />
    </div>
  );
};

AntInput.propTypes = {
  createTodo: func.isRequired,
};

export default AntInput;
