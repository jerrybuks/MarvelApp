import axios from 'axios';
import { takeEvery, put, all, call } from 'redux-saga/effects';
import crypto from 'crypto';
import { getCharactersStart, getCharactersSuccess, getCharactersFailure } from './marvel.slice';

export function* getCharacters({ payload: tx }) {
	try {
		const ts = Date.now();
		const privateKey = process.env.REACT_APP_PRIVATE_KEY;
		const publicKey = process.env.REACT_APP_PUBLIC_KEY;
		const hash = crypto.createHash('md5').update(`${ts}${privateKey}${publicKey}`).digest('hex');
		const params = {};
		if (tx) params.nameStartsWith = tx;
		const {
			data: { data }
		} = yield axios.get(
			`https://gateway.marvel.com:443/v1/public/characters?&ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${30}`,
			{
				params
			}
		);
		const { results } = data;

		yield put(getCharactersSuccess(results));
	} catch (error) {
		yield put(getCharactersFailure(error));
	}
}

export function* onSearchStart() {
	yield takeEvery(getCharactersStart, getCharacters);
}

export function* marvelSagas() {
	yield all([ call(onSearchStart) ]);
}
