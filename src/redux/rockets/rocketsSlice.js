import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  rocketsisLoading: false,
  rocketserror: null,
  fetched: false,
};

const url = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk('books/fetchRockets', async (_, thunkAPI) => {
  try {
    const response = await fetch(`${url}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRockets.pending]: (state) => ({ ...state, rocketsisLoading: true }),
    [fetchRockets.fulfilled]: (state, action) => ({
      ...state,
      rockets: action.payload,
      rocketsisLoading: false,
      fetched: true,
    }),
    [fetchRockets.rejected]: (state, action) => ({
      ...state,
      rocketsisLoading: false,
      rocketserror: action.payload,
    }),
  },
});

export default rocketsSlice.reducer;
