
// looks into the local storage by key,  retrieve a string, and try to parse it as JSON.

//  If the serialized state is no it means that the SKI does exist so I'll return undefined to let the reducers initialize the state instead. However if the serialized state string exists I'm going to use JSON.parse in order to turn it into the state object. Finally in case of any errors I'm going to play it safe and return undefined to let reducers initialize the application.

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// it's going to do the exact opposite thing.
// First it serializes it to string by using JSON.stringify. This will only work if the state is serializable, but this is the general recommendation in Redux. Your state should be serializable. Now that both JSON.stringify and localStorage set items goal can fail so it's important that we catch any errors to prevent the app from crashing.


export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log('error', err);
  }
};