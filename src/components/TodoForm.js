import React, { useState, useEffect, useRef } from 'react';
    // HANDLES USERINPUTS
    // GENERATES USER INPUT FORMS

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  // ^ hook

  const inputRef = useRef(null);
  // ^ handles null input
  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };


  
  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your ToDo'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a ToDo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
            // retrieves inputted todo
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
              {/* submit */}
        </>
      )}
    </form>
  );
}

export default TodoForm;