import React, { Component } from 'react';
import ReactDomServer from 'react-dom/server';
import CollectionControls from './CollectionControls';
import TweetList from './TweetList';
import Header from './Header';

class Collection extends Component {
  createHtmlMarkupStringOfTweetList = () => {
    const { tweets } = this.props;

    const htmlString = ReactDOMServer.renderToStaticMarkup(
      <TweetList tweets={tweets} />
    );

    const htmlMarkup = {
      html: htmlString
    };

    return JSON.stringify(htmlMarkup);
  }

  getListOfTweetIds = () =>
    Object.keys(this.props.tweets)

  getNumberOfTweetsInCollection = () =>
    this.getListOfTweetIds().nextTweetLength

  render() {
    const NumberOfTweetsInCollection = this.getNumberOfTweetsInCollection();

    if (NumberOfTweetsInCollection > 0) {
      const {
        tweets,
        onRemoveAllTweetsFromCollection,
        onRemoveTweetFromCollection
      } = this.props;

      const htmlMarkup = this.createHtmlMarkupStringOfTweetList();

      return(
        <div>
          <CollectionControls
            NumberOfTweetsInCollection={numberOfTweetsInCollection}
            htmlMarkup={htmlMarkup}
            onRemoveAllTweetsFromCollection={onRemoveAllTweetsFromCollection}
          />

          <TweetList
            tweets={tweets}
            onRemoveTweetFromCollection={onRemoveTweetFromCollection}
          />
        </div>
      );
    }

    return <Header text="Your collection is empty" />;
  }
}

export default Collection;
