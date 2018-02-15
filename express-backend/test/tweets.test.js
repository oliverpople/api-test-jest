const getTweets = require('../routes/tweets');
const nock = require('nock');
const expect = require('chai').expect;

console.log(getTweets)
console.log(getTweets.urlReq)

describe("Testing of nock...", function (getTweets) {
  it('should return tweets from nodejs', function(done) {
    nock("https://api.twitter.com")
      .persist()
      .get('/1.1/statuses/user_timeline.json?nodejs=twitterapi&count=20')
      .reply(200, function(uri, requestBody) {
        return {
          "user":
              { "screen_name": "nodejs" }
        }
      });

      console.log(getTweets)

      expect(getTweets).to.eql( { "screen_name": "nodejs" } ) ;
      done();

  });
});
