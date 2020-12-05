import { FETCH_GAMES } from './types';
import axios from 'axios';
import {
  popularGamesURL,
  newGamesURL,
  upcomingGamesURL,
  searchGameURL,
} from '../api';

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL());
  const upcomingData = await axios.get(newGamesURL());
  const newData = await axios.get(upcomingGamesURL());
  dispatch({
    type: FETCH_GAMES,
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      new: newData.data.results,
    },
  });
};
export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGame = await axios.get(searchGameURL(game_name));
  dispatch({
    type: 'FETCH_SEARCHED',
    payload: { searched: searchGame.data.results },
  });
};
