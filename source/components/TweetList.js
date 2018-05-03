import React, { Component } from 'react';
import Tweet from './Tweet';
// import TweetUtils from '../utils/TweetUtils';

const listStyle = {
  padding: "0"
};

const listItemStyle = {
  display: "inline-block",
  listStyle: "none"
};

class TweetList extends Component {
  getTweetElement = (tweetId) => {
    const { tweets, onRemoveTweetFromCollection } = this.props;
    const tweet = tweets[tweetId];
    let tweetElement;


    // Checks whether the onRemoveTweetFromCollection property is provided.
    // Will render differently depending on whether it is or not
    // Allows the same component to be reused in different contexts.
    if (onRemoveTweetFromCollection) {
      tweetElement = (
        <Tweet
          tweet={tweet}
          onImageClick={onRemoveTweetFromCollection}
        />
      );
    } else {
        tweetElement = <Tweet tweet={tweet} />;
    }

    return (
      <li style={listItemStyle} key={tweet.id}>
        {tweetElement}
      </li>
    );
  }

  render() {
    const tweetElements = TweetUtils
      .getListOfTweetIds()
      .map(this.getTweetElement);

    return (
      <ul style={listStyle}>
        {tweetElements}
      </ul>
    );
  }
}

export default TweetList;
