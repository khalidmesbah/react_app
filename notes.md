# What
- Redux is a state management framework that can be used with a number of different web technologies, including React.
- the Redux store is the single source of truth when it comes to application state.
- In Redux, there is a single state object that's responsible for the entire state of your application.
- The Redux store is an object which holds and manages application state. 
- Redux methods are available from a Redux object
- The Redux store object provides several methods that allow you to interact with it.
- redux is a state management framework
- In Redux, all state updates are triggered by dispatching actions.
- An action is simply a JavaScript object that contains information about an action event that has occurred. 
-  Sometimes a Redux action also carries some data. 
-  Think of Redux actions as messengers that deliver information about events happening in your app to the Redux store. The store then conducts the business of updating state based on the action that occurred.
-  actions must carry a type property that specifies the 'type' of action that occurred.
- Redux action is as simple as declaring an object with a type property.
- action creators create objects that represent action events.
-  An action creator is simply a JavaScript function that returns an action. 
-  dispatch method is what you use to dispatch actions to the Redux store.
-  Calling store.dispatch() and passing the value returned from an action creator sends an action back to the store.
- action creators return an object with a type property that specifies the action that has occurred. 
- After an action is created and dispatched, the Redux store needs to know how to respond to that action.This is the job of a reducer function.
- Reducers in Redux are responsible for the state modifications that take place in response to actions.
- A reducer takes state and action as arguments, and it always returns a new state.it is important to see that this is the only role of the reducer. It has no side effects
-  The reducer is simply a pure function that takes state and action, then returns new state.
-  state is read-only in redux -> the reducer func always return a new copy of the state
-  the first principle of Redux: all app state is held in a single state object in the store.
-  Redux does not enforce state immutability,
-  Typically, it is a good practice to create a reducer for each piece of application state when they are distinct or unique in some way. 
-  we dispatch actions to the redux store
- use Redux Thunk middleware to handle async requests
- Immutable state means that you never modify state directly, instead, you return a new copy of state.
- strings and numbers are primitive values and are immutable by nature.
- you create a single Redux store that manages the state of your entire app.
- Your React components subscribe to only the pieces of data in the store that are relevant to their role,Then, you dispatch actions directly from React components, which then trigger store updates.
- react-redux package. It provides a way for you to pass Redux state and dispatch to your React components as props.
- The Provider is a wrapper component from React Redux that wraps your React app.
- The Provider component allows you to provide state and dispatch to your React components, 
- 






# Methods
- createStore(reducer.isRequired)
- getState
- subscribe
- dispatch
- combineReducer
- applyMiddleware


# learn how to
- create action
- create action creators
- create redux store
- dispatch actions against the store
- design store update with pure reducers
- manage complex state with reducer composition
- handle async actions
- state immutability
- 