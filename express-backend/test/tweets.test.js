const request = require('supertest')("https://api.twitter.com");
const nock = require('nock');
const expect = require('chai').expect;
const fs = require("fs");

describe("Testing API with a mocked backend", function () {

  it("responds with json file response", function (done) {
      //read the json file
      var contents = fs.readFileSync('./mock_data/tweet.json');
      //parse the contents and assign to a variable
      var jsonContent = JSON.parse(contents);

      nock('https://api.twitter.com')
        .get('/1.1/statuses/user_timeline.json?screen_name=nodejs&count=20')
        .reply(200, jsonContent);

      request
        .get('/1.1/statuses/user_timeline.json?screen_name=nodejs&count=20')
        .end(function (err, res) {
          expect(res.status).to.equal(200);
          expect(res.body.user.screen_name).to.equal("twitterapi")
          done();
        });
    })
  });
