
import { createSlice } from '@reduxjs/toolkit'

const marvelSlice = createSlice({
  name: 'marvel',
  initialState: { characters: [], character: {}, loading: true, error: null },
  reducers: {
    getCharactersStart(state){
        state.loading = true;
      },
    getCharactersSuccess(state,action) {
      state.loading = false;
      state.characters = action.payload;
    },
    getCharactersFailure(state, action){
      state.loading = false;
      state.characters = [];
      state.error = action.payload;
    },
  }
})

export const { getCharactersStart, getCharactersSuccess, getCharactersFailure  } = marvelSlice.actions

export default marvelSlice.reducer