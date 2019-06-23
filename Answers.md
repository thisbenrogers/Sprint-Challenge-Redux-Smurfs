1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    > `.map`, `.filter`, `.reduce` are non-destructive Array methods, the spread operator `...` similarly on both Arrays and Objects, and allows us to easily extend the properties of another object into a new object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    > `actions` are triggered by events, they call reducers and push those reducers to the store. The `reducer` is where we define changes to state and once called by an action a reducer then pushes a new copy of state to the store. The `store` is where all of our consecutive versions of state live, and since there is only one store where we access our state, it acts as a single source of truth for the state of our app.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    > Application state typially means the state that is passed around to all of the components via props. Component state is a temporary place to build potential state before that data is pushed through an action->reducer->store->newState flow.

1.  What is middleware?

    > Middleware are functions that are called by our reducer functions, they intercept our data once in the store, and alter our data in a predetermined fashion.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    > Redux `thunk` is a way to use thunks in redux. A thunk is a function that is returned by another function. Redux-thunk specifically allows us to make asyncronous API calls when properly used with promises.

1.  Which `react-redux` method links up our `components` with our `redux store`?

    > connect
