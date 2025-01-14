


export default function createStore(reducer) {
  let state;
 
  function dispatch(action) {
    state = reducer(state, action);
    
  }
 
  function getState() {
    return state;
  };

  
  dispatch({ type: '@@INIT' });
 
  return {
    dispatch,
    getState
  };
}


