// We import AppDispatcher from the dispatcher folder.
// Now we can access a new instance of the dispatcher.
import AppDispatcher from '../dispatcher/AppDispatcher';

// Create the action creator for receiving a tweet.
// The action creator takes a tweet as an argument.
// It also passes the tweet to the action object.
// The store will therefore receive a copy of the tweet.
function receiveTweet(tweet) {
  const action = {
    type: 'receive_tweet',
    tweet
  };

  // The action is dispatched with the imported instance of the dispatcher
  // and the method .dispatch()
  // The dispatcher will deliver the action to all stores that are registered
  // with the AppDispatcher dispatcher.
  AppDispatcher.dispatch(action);
}

// Must not forget to export the receiveTweet method.
export { receiveTweet };
