import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BioState {
  aboutMe: string;
  bloodGroup: string;
  resume: string | null;
}

const initialState: BioState = {
  aboutMe: '',
  bloodGroup: '',
  resume: null,
};

const bioSlice = createSlice({
  name: 'bio',
  initialState,
  reducers: {
    settingAboutMe: (state, action: PayloadAction<string>) => {
      state.aboutMe = action.payload;
    },
    settingBloodGroup: (state, action: PayloadAction<string>) => {
      state.bloodGroup = action.payload;
    },
    settingResume:(state, action: PayloadAction<string>) => {
      state.resume = action.payload;
    },
  },
});

export const { settingAboutMe, settingBloodGroup, settingResume } = bioSlice.actions;
export const bioSliceReducer = bioSlice.reducer;
