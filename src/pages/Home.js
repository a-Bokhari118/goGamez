import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesActions';
//components
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';
//styles
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { fadeIn } from '../animations';
import { useLocation } from 'react-router-dom';

const Home = () => {
  //current location
  const location = useLocation();
  const dispatch = useDispatch();
  const pathId = location.pathname.split('/')[2];
  const { popular, newGames, upComing, searched } = useSelector(
    (state) => state.games
  );

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  return (
    <GameList variants={fadeIn} initial='hidden' animate='show'>
      <AnimateSharedLayout>
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length > 0 ? (
          <Games>
            {searched.map((game) => (
              <Game key={game.id} game={game} />
            ))}
          </Games>
        ) : (
          <>
            <h2>New Games</h2>
            <Games>
              {newGames.map((game) => (
                <Game key={game.id} game={game} />
              ))}
            </Games>

            <h2>Popular Games</h2>
            <Games>
              {popular.map((game) => (
                <Game key={game.id} game={game} />
              ))}
            </Games>

            <h2>Upcoming Games</h2>
            <Games>
              {upComing.map((game) => (
                <Game key={game.id} game={game} />
              ))}
            </Games>
          </>
        )}
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
    color: red;
    letter-spacing: 10px;
  }
  margin-bottom: 2rem;
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
