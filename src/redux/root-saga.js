import { all, call } from 'redux-saga/effects';
import { marvelSagas } from './marvel/marvel.sagas';

export default function* rootSaga() {
  yield all([call(marvelSagas)]);
}
