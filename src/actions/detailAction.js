import { FETCH_DETAIL } from './types';
import axios from 'axios';
import { gameDetailsURL, gameScreenshotURL } from '../api';

export const loadDetail = (id) => async (dispatch) => {
  dispatch({ type: 'LOADING_DETAIL' });
  const gameDetail = await axios.get(gameDetailsURL(id));
  const gameScreenshots = await axios.get(gameScreenshotURL(id));
  dispatch({
    type: FETCH_DETAIL,
    payload: { game: gameDetail.data, screen: gameScreenshots.data },
  });
};
