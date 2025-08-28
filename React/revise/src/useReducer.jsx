import { useReducer, useRef } from 'react';

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        { id: state.length + 1, task: action.payload, completed: false },
      ];
    case 'TOGGLE':
      return state.map(item =>
        item.id == action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
  }
};

export const TODO = () => {
  const [taskList, dispatch] = useReducer(reducer, initialState);
  const inputRef = useRef();
  console.log(taskList);
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button
        onClick={() =>
          dispatch({ type: 'ADD_TODO', payload: inputRef.current.value })
        }
      >
        Add
      </button>
      {taskList.map(t => (
        <List
          key={t.id}
          task={t.task}
          completed={t.completed}
          toggle={() => dispatch({ type: 'TOGGLE', payload: t.id })}
        />
      ))}
    </div>
  );
};

const List = ({ task, completed, toggle }) => {
  return (
    <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
      <input
        type="checkbox"
        name=""
        id=""
        checked={completed}
        onChange={toggle}
      />
      <li style={{ textDecorationLine: completed ? 'line-through' : '' }}>
        {task}
      </li>
      <span>X</span>
    </div>
  );
};
