const { configureStore } = require("@reduxjs/toolkit");
const { plantSlice } = require("./plantsSlice");

const store = configureStore({
    reducer: {
        plants: plantSlice.reducer
    }
})