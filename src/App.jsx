import './App.css';
import { BsFillSunFill, BsFillTrashFill } from 'react-icons/bs';
import { useState } from 'react';

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      id: '1234',
      item: 'Study',
    },
    {
      id: '1235',
      item: 'Workout',
    },
    {
      id: '1236',
      item: 'Coding',
    },
  ]);
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
        <ul>
          {todoItems.map((item) => (
            <li key={item.id} className='item'>
              <div className='leftList'>
                <input type='checkbox' className='check' />
                <span className='item'>{item.item}</span>
              </div>
              <button className='trashBtn'>
                <BsFillTrashFill />
              </button>
            </li>
          ))}
        </ul>
      </section>
      <footer className='footer'>
        <form className='form'>
          <input type='text' className='footerInput' />
          <button className='footerBtn'>Add</button>
        </form>
      </footer>
    </div>
  );
}

export default App;
