import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SkillsState {
  availableSkills: string[];
  selectedSkills: string[];
}

const initialState: SkillsState = {
  availableSkills: [],
  selectedSkills: [],
};

const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    setAvailableSkills: (state, action: PayloadAction<string[]>) => {
      state.availableSkills = action.payload;
    },
    setSelectedSkills: (state, action: PayloadAction<string[]>) => {
      state.selectedSkills = action.payload;
    },
  },
});

export const { setAvailableSkills, setSelectedSkills } = skillsSlice.actions;
export const skillSliceReducer = skillsSlice.reducer;
