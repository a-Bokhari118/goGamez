import { FETCH_GAMES } from '../actions/types';
const initState = {
  popular: [],
  newGames: [],
  upComing: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_GAMES:
      return {
        ...state,
        popular: action.payload.popular,
        newGames: action.payload.new,
        upComing: action.payload.upcoming,
      };
    default:
      return {
        ...state,
      };
  }
};

export default gamesReducer;
