import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { fetchSearch } from '../actions/gamesActions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fadeIn } from '../animations';
const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState('');

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput('');
  };

  const clearSerach = () => {
    dispatch({ type: 'CLEAR_SEARCH' });
  };
  return (
    <StyledNav variants={fadeIn} initial='hidden' animate='show'>
      <Link to='/'>
        <Heading onClick={clearSerach}>
          <span style={{ color: 'red' }}>Go</span>Game
          <span style={{ color: 'red' }}>Z</span>
        </Heading>
      </Link>
      <form className='search' onSubmit={submitSearch}>
        <input
          type='text'
          placeholder='Games...'
          onChange={(e) => setTextInput(e.target.value)}
          value={textInput}
        />
        <button type='submit'>Search</button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 2rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    font-family: 'Libre Baskerville', serif;
  }
  input:focus {
    outline-style: none;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.54rem 2rem;
    cursor: pointer;
    background-color: red;
    color: white;
    font-family: 'Libre Baskerville', serif;
  }
`;
const Heading = styled.h2`
  font-family: 'East Sea Dokdo', cursive;
  color: white;
`;

export default Nav;
