import request from './request'

const getText = text => request(`https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2${text}`)

export { getText }
