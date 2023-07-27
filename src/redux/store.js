// Import the createStore function from Redux to create the store.
import { createStore } from "redux";

// Import the habitReducer from the './reducers' file. This is the reducer function that will manage the state for our habits.
import habitReducer from "./reducers";

// Create the Redux store using the createStore function and passing in the habitReducer as the reducer function.
const store = createStore(habitReducer);

// Export the store so that it can be used in other parts of the application.
export default store;
