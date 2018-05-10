// Import dependencies for the stores
// The store needs to be registered with a dispatcher, so we import AppDispatcher
// Need to add and remove event listeners from our store so import the EventEmitter from events.

import AppDispatcher from '../dispatcher/AppDispatcher';
import EventEmitter from 'events';

// Define the data that the store will manage.
// The tweet is set to null to indicate that we haven't received the new tweet yet.
let tweet = null;

// Create private methods - Not accessible outside of this store.

// Updates the tweet object with a receivedTweet object
function setTweet(receivedTweet) {
  tweet = receivedTweet;
}

function emitChange() {
  TweetStore.emit('change');
}

// Create the TweetStore object.
// Changes in state will emit the change event.
// Other parts of the application can listen for this change event and know that the state of the store has changed.
const TweetStore = Object.assign({}, EventEmitter.prototype, {
  // Adds change event listener
  addChangeListener(callback) {
    this.on('change', callback);
  },

  // Removes change event listener
  removeChangeListener(callback) {
    this.removeListener('change', callback);
  },

  // The above two listener methods that we just defined are provided by the EventEmitter.prototype object
  // So we needs to copy the methods from EventEmitter.prototype object to out TweetStore object.
  // That's what we're doing with Object.assign()
  // Object.assign copies properties owned by sourceObject1 and sourceObject2 to targerObject and then it returns targetObject.
  // So here sourceObject1 is EventEmitter.prototype
  // and sourceObject2 is the object literal that this comment is in, that contains the three methods.

  getTweet() {
    return tweet;
  }
});

// Creating an action handler.
function handleAction(action) {
  // Check to see if the action is of the type we want.
  // Note: In flux, all stores get all actions, so you have to check the types of actions coming in.
  if (action.type === 'receive_tweet') {
    // If it is the receive_tweet action, then invoke the private function setTweet() with the tweet that the
    // action has with it.
    setTweet(action.tweet);
    // Invoke the emitChange() function that emits the change event and triggers the listeners.
    // This will let the rest of the application that may be listening know that a change has occurred.
    emitChange();
  }
}

// Register the store with the dispacther with .register(), passing in the store's action handler function to it as a callback.
// Whenever the dispatcher dispatches an action, it calls that callback function and passes the action object to it.
TweetStore.dispatchToken = AppDispatcher.register(handleAction);

// Export the TweetStore object.
export default TweetStore;
