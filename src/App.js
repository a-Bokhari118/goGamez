import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadGames } from './actions/gamesActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  return (
    <div className='App'>
      <h1>Hello GoGameZ</h1>
    </div>
  );
}

export default App;
