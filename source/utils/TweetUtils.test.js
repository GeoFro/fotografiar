import TweetUtils from './TweetUtils';

// describe() takes 2 parameters
// The first is a description of what is being tested by the test suite.
// In this case it is 'TweetUtils'
// The second is the function that implements this suite.

// To create an individual test and not a suite, use test()
// test() also takes two parameters. A description and a callback.
describe('TweetUtils', () => {
  test('getListOfTweetIds returns an array of tweet ids', () => {
    const tweetsMock = {
      tweet1: {},
      tweet2: {},
      tweet3: {}
    };
    const expectedListOfTweetIds = [
      'tweet1',
      'tweet2',
      'tweet3'
    ];
    const actualListOfTweetIds = TweetUtils.getListOfTweetIds(tweetsMock);

    // We create an expectation of the correct output with expect()
    // We use expect() in conjunction with a matcher function in this case .toEqual()

    expect(actualListOfTweetIds).toEqual(expectedListOfTweetIds);
  });
});
