import { FETCH_GAMES } from './types';
import axios from 'axios';
import { popularGamesURL, newGamesURL, upcomingGamesURL } from '../api';

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
