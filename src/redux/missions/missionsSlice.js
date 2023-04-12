import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
  missionsisLoading: false,
  missionserror: null,
  fetched: false,
};

const api = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk(
  'redux/fetchMissions',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${api}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      state.missions = state.missions.map((mission) => (mission.mission_id === action.payload
        ? { ...mission, joined: true }
        : mission));
    },
    cancelMission: (state, action) => {
      state.missions = state.missions.map((mission) => (mission.mission_id === action.payload
        ? { ...mission, joined: false }
        : mission));
    },
  },
  extraReducers: {
    [fetchMissions.pending]: (state) => ({ ...state, missionsisLoading: true }),
    [fetchMissions.fulfilled]: (state, action) => ({
      ...state,
      missions: action.payload,
      missionsisLoading: false,
      fetched: true,
    }),
    [fetchMissions.rejected]: (state, action) => ({
      ...state,
      missionsisLoading: false,
      missionserror: action.payload,
    }),
  },
});

export const { joinMission, cancelMission } = missionsSlice.actions;
export default missionsSlice.reducer;
