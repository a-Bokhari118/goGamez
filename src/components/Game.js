import styled from 'styled-components';
import { motion } from 'framer-motion';
//redux
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailAction';
import { smallImage } from '../util';
import { popup } from '../animations';
import { Link } from 'react-router-dom';
const Game = ({ game: { name, released, background_image, id } }) => {
  const dispatch = useDispatch();
  const stringPathId = id.toString();
  const loadDetailHandler = () => {
    setTimeout(() => {
      document.body.style.overflow = 'hidden';
    }, 500);

    dispatch(loadDetail(id));
  };
  return (
    <StyledGame
      layoutId={stringPathId}
      onClick={loadDetailHandler}
      variants={popup}
      initial='hidden'
      animate='show'
    >
      <Link to={`/game/${id}`}>
        <h3>{name.length < 27 ? name : name.substring(0, 25) + '...'}</h3>
        <p>{released}</p>

        <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallImage(background_image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 40vh;
  max-height: 40vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;

  h3 {
    font-size: 1rem;
  }
  p {
    font-size: 0.9rem;
  }
  cursor: pointer;
  overflow: hidden;
  background-color: white;
  img {
    width: 100%;
    min-height: 30vh;
    object-fit: cover;
  }
`;

export default Game;
