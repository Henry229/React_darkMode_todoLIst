import React from 'react';
import './Container.css';
import { BsFillSunFill } from 'react-icons/bs';
import { useState } from 'react';
import BodyItem from '../BodyItem/BodyItem';
import { v4 as uuidv4 } from 'uuid';

const Container = () => {
  const [todoItems, setTodoItems] = useState([
    {
      id: '1234',
      item: 'Study',
      isChecked: false,
    },
    {
      id: '1235',
      item: 'Workout',
      isChecked: false,
    },
    {
      id: '1236',
      item: 'Coding',
      isChecked: false,
    },
  ]);
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoItems((todoItems) => [...todoItems, { id: uuidv4(), item: todo }]);
    setTodo('');
  };

  const handleInput = (e) => {
    setTodo(e.target.value);
  };

  const deleteItem = (id) => {
    setTodoItems((prev) => prev.filter((item) => item.id !== id));
  };

  const createCancel = (id) => {
    // setTodoItems((prev) => prev.map( item => ((item.id === id) ? ({...item, !isChecked}) : item )));
    setTodoItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, isChecked: !item.isChecked };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div className='container'>
      <header className='header'>
        <p className='leftMenu'>
          <BsFillSunFill />
        </p>
        <div className='rightMenu'>
          <span>All</span>
          <span>Active</span>
          <span>Completed</span>
        </div>
      </header>
      <section className='list'>
        <BodyItem
          todoItems={todoItems}
          deleteItem={deleteItem}
          createCancel={createCancel}
        />
      </section>
      <footer className='footer'>
        <form className='form' onSubmit={handleSubmit}>
          <input
            type='text'
            className='footerInput'
            value={todo}
            onChange={handleInput}
          />
          <button className='footerBtn'>Add</button>
        </form>
      </footer>
    </div>
  );
};

export default Container;
