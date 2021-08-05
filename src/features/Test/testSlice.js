import testApi from "api/testApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const getTest = createAsyncThunk("test/getTest", async (params, thunkApi) => {
  const result = await testApi.get();
  return result;
});

const initialState = [
  {
    id: 1,
    content: "Test 1",
  },
  {
    id: 2,
    content: "Test 2",
  },
];

const testSlice = createSlice({
  name: "test",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      const testId = action.payload;
      return state.filter((test) => test.id !== testId);
    },
    update: (state, action) => {
      const newTest = action.payload;
      const testIndex = state.findIndex((test) => test.id === newTest.id);
      if (testIndex) {
        state[testIndex] = { ...newTest };
      }
    },
  },
  extraReducers: {
    [getTest.pending]: (state, action) => {
      console.log("Fetching data");
    },
    [getTest.rejected]: (state, action) => {
      console.log("Error: ", action.payload);
    },
    [getTest.fulfilled]: (state, action) => {
      state = action.payload;
    },
  },
});

const { reducer, actions } = testSlice;
export const { add, remove, update } = actions;
export default reducer;
