import React, { useRef, useState } from "react";
import ActivityList from "./ActivityList";

const Content = () => {
  const [list, setList] = useState([]);
  const [error, setError] = useState('');
  const inputRef = useRef();

  const textboxStyle = {
    height: '30px',
    width: '300px',
    marginRight: '25px',
  };

  const buttonStyle = {
    height: '40px',
    width: '100px',
    borderRadius: '20px',
    background: 'var(--green)',
    color: 'var(--white)',
    fontWeight: 800,
    fontSize: '18px',
  };

  const errorStyle = {
    marginLeft: '-100px',
    color: 'var(--red)',
    fontSize: '18px',
  };

  const handleClick = () => {
    const val = inputRef.current.value;
    if (val) {
      setList([...list, {name: val, isDone: false}]);
      inputRef.current.value = '';
      setError('');
    } else {
      setError('Please enter the todo item');
    }
  };

  return (
    <>
      <input type="text" ref={inputRef} style={textboxStyle} />
      <input type="button" value="Add" onClick={handleClick} style={buttonStyle} />
      {error && <div style={errorStyle}>{error}</div>}
      <ActivityList list={list} setList={setList} />
    </>
  );
};

export default Content;
