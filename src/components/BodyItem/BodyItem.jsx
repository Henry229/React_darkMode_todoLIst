import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import './BodyItem.css';

const BodyItem = ({ todoItems, deleteItem, createCancel }) => {
  return (
    <ul>
      {todoItems.map((item) => (
        <li key={item.id} className='item'>
          <div className='leftList'>
            <input
              type='checkbox'
              className='check'
              onChange={() => createCancel(item.id)}
            />
            <span className={`${item.isChecked ? 'spanChecked' : 'span'}`}>
              {item.item}
            </span>
          </div>
          <button className='trashBtn' onClick={() => deleteItem(item.id)}>
            <BsFillTrashFill />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BodyItem;
