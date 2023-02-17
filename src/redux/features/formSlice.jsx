import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formItems: [],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addToForm(state, action) {
      state.formItems.push(action.payload);
    }
  },
});
export const { addToForm } = formSlice.actions;

export default formSlice.reducer;
