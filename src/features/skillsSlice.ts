import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SkillsState {
  availableSkills: string[];
  selectedSkills: string[];
  availableHobbies: string[];
  selectedHobbies: string[];
}

const initialState: SkillsState = {
  availableSkills: [],
  selectedSkills: [],
  availableHobbies: [],
  selectedHobbies: [],
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

    setAvailableHobbies: (state, action: PayloadAction<string[]>) => {
      state.availableHobbies = action.payload;
    },
    setSelectedHobbies: (state, action: PayloadAction<string[]>) => {
      state.selectedHobbies = action.payload;
    },    
  },
});

export const { setAvailableSkills, setSelectedSkills, setAvailableHobbies, setSelectedHobbies } = skillsSlice.actions;
export const skillSliceReducer = skillsSlice.reducer;
