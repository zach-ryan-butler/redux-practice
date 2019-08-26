import { createStore } from 'redux';

// add and remove to 0 and an array
const initalState = {
  chips: 0,
  drink: [],
  sandwich: 0
};

function reducer(state = initalState, action) {
  switch(action.type) {
    case 'ADD_DRINK':
      return { ...state, drink: [...state.drink, action.payload] };
    case 'REMOVE_DRINK':
      return { ...state, drink: state.drink.filter(d => d !== action.payload) };
    case 'ADD_CHIPS':
      return { ...state, chips: state.chips + 1 };
    case 'REMOVE_CHIPS':
      return { ...state, chips: state.chips - 1 };
    case 'ADD_SANDWICH':
      return { ...state, sandwich: state.sandwich + 1 };
    case 'REMOVE_SANDWICH':
      return { ...state, sandwich: state.sandwich - 1 };
    default: 
      return state;
  }
}
            
const store = createStore(reducer);

store.dispatch({
  type: 'ADD_DRINK',
  payload: 'water'
});

store.dispatch({
  type: 'REMOVE_DRINK',
  payload: 'water'
});
            
console.log(store.getState());
