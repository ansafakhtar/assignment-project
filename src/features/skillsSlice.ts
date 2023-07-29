import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SkillsState {
  availableSkills: string[];
  selectedSkills: string[];
  availableHobbies: string[];
  selectedHobbies: string[];
  availableSubjects: string[];
  selectedSubjects: string[];  
}

const initialState: SkillsState = {
  availableSkills: [],
  selectedSkills: [],
  availableHobbies: [],
  selectedHobbies: [],
  availableSubjects: [],
  selectedSubjects: [],  
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

    setAvailableSubjects: (state, action: PayloadAction<string[]>) => {
      state.availableSubjects = action.payload;
    },
    setSelectedSubjects: (state, action: PayloadAction<string[]>) => {
      state.selectedSubjects = action.payload;
    },      
  },
});

export const { setAvailableSkills, setSelectedSkills, setAvailableHobbies, setSelectedHobbies, setAvailableSubjects, setSelectedSubjects } = skillsSlice.actions;
export const skillSliceReducer = skillsSlice.reducer;
