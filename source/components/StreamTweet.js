import React, { Component } from 'react';
import Header from './Header';
import Tweet from './Tweet';

class StreamTweet extends Component {

  componentWillMount() {
    console.log('[Fotografiar] StreatTweet: 1. Running componentWillMount()')

    this.setState({
      numberOfCharactersIsIncreasing: true,
      headerText: 'Latest public photo from Twitter'
    });

    // It's bad practice to have properties on a Global object.
    // This code can be taken out and won't affect anything bu I'm leaving it in for now.
    window.fotografiar = {
      numberOfReceivedTweets: 1,
      numberOfDisplayedTweets: 1
    };
  }

  componentDidMount = () => {

    console.log('[Fotografiar] StreamTweet: 3. Running componentDidMount()');

    const componentDOMRepresentation = ReactDOM.findDOMNode(this);

    window.fotografiar.headerHtml = componentDOMRepresentation.children[0].outerHTML;
    window.fotografiar.tweetHtml = componentDOMRepresentation.children[1].outerHTML;
  }

  componentWillReceiveProps(nextProps) {
    console.log('[Fotografiar] StreamTweet: 4. Running componentWillReceiveProps()')

    const { tweet: currentTweet } = this.props;
    const { tweet: nextTweet } = nextProps;

    const currentTweetLength = currentTweet.text.length;
    const nextTweetLength = nextTweet.text.length;

    const isNumberOfCharactersIncreasing = (nextTweetLength > currentTweetLength);
    let headerText;

    this.setState({
      numberOfCharactersIsIncreasing: isNumberOfCharactersIncreasing
    });

    if (isNumberOfCharactersIncreasing) {
      headerText = 'Number of characters is increasing';
    } else {
      headerText = 'Latest public photo from Twitter';
    }

    this.setState({
      headerText
    });

    window.fotografiar.numberOfReceivedTweets++;
  }

  // If the next Tweet's text is longer than 1 character then it will be true //
  // and then it will update. Otherwise false and it won't //
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Fotografiar] StreamTweet: 5 Running shouldComponentUpdate()')

    return (nextProps.tweet.text.length > 1);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[Fotografiar] StreamTweet 6. Running componentWillUpdate()')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('[Fotografiar] StreamTweet 7. Running componentDidUpdate()')

    window.fotografiar.numberOfDisplayedTweets++;
  }

  // End of updating cycle

  componentWillUnMount() {
    console.log('[Fotografiar] StreamTweet: 8. Running componentWillUnMount()');

    delete window.fotografiar;
  }

  // Define other component lifecycle methods here //

  render() {
    console.log('[Fotografiar] StreamTweet: Running render()');


    const { headerText } = this.state;
    const { tweet, onAddTweetToCollection } = this.props;

    return(
      <section>
        <Header text={headerText} />
        <Tweet
          tweet={tweet}
          onImageClick={onAddTweetToCollection}
        />
      </section>
    );
  }
}

export default StreamTweet;
