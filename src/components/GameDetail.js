import styled from 'styled-components';
import { motion } from 'framer-motion';
//redux
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { smallImage } from '../util';
const GameDetail = ({ pathId }) => {
  const history = useHistory();
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto';
      history.push('/');
    }
  };

  const { game, screen, isLoading } = useSelector((state) => state.detail);

  return (
    <>
      {!isLoading && (
        <CardShadow className='shadow' onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className='rating'>
                <h3>{game?.name}</h3>
                <p>Rating: {game?.rating}</p>
              </div>
              <Info className='info'>
                <h3>Platforms</h3>
                <Platforms>
                  {game?.platforms?.map((data) => (
                    <h3 key={data?.platform.id}>{data?.platform.name}</h3>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(game?.background_image, 1280)}
                alt={game.name}
              />
            </Media>
            <Discription>
              <p>{game?.description_raw}</p>
            </Discription>
            <div className='gallery'>
              {screen.results?.map((screen) => (
                <img
                  src={smallImage(screen?.image, 1280)}
                  alt='Game'
                  key={screen.id}
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: #fff;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: block;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Discription = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetail;
