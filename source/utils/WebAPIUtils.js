import SnapkiteStreamClient from 'snapkite-stream-client';
import { receiveTweet } from '../actions/TweetActionCreators';

function initializeStreamOfTweets() {
  SnapkiteStreamClient.initilizeStream(receiveTweet);
}

export { initializeStreamOfTweets };
