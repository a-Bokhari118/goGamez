import styled from 'styled-components';
import { motion } from 'framer-motion';
//redux
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { smallImage } from '../util';
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
import PS5 from '../img/PS5.svg';
import xbox5 from '../img/xbox5.svg';
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';
const GameDetail = ({ pathId }) => {
  const history = useHistory();
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto';
      history.push('/');
    }
  };

  //platforms image
  const getPlatform = (platform) => {
    switch (platform) {
      case 'PlayStation 4':
        return playstation;
      case 'PlayStation 5':
        return PS5;
      case 'Xbox Series S/X':
        return xbox5;
      case 'Xbox One':
        return xbox;
      case 'PC':
        return steam;
      case 'Nintendo Switch':
        return nintendo;
      case 'iOS':
        return apple;
      default:
        return gamepad;
    }
  };

  //Stars
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt='star' src={starFull} key={i} />);
      } else {
        stars.push(<img alt='star' src={starEmpty} key={i} />);
      }
    }
    return stars;
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
                {getStars()}
              </div>
              <Info className='info'>
                <h3>Platforms</h3>
                <Platforms>
                  {game?.platforms?.map((data) => (
                    <img
                      key={data?.platform.id}
                      src={getPlatform(data?.platform.name)}
                      alt={data?.platform.name}
                      style={{
                        width: '80px',
                      }}
                    />
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
            <Gallery>
              {screen.results?.map((screen) => (
                <img
                  src={smallImage(screen?.image, 1280)}
                  alt='Game'
                  key={screen.id}
                />
              ))}
            </Gallery>
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
  img {
    width: 1rem;
    height: 1rem;
    display: inline;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  img {
    margin-left: 1rem;
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
const Gallery = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
`;
export default GameDetail;
