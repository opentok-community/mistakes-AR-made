require('dotenv').config();

const OpenTok = require('opentok');
const opentok = new OpenTok(process.env.OPENTOK_API_KEY, process.env.OPENTOK_API_SECRET);

let sessionId;

const getTheGoods = () => {
  return new Promise((res, rej) => {
    if (!sessionId) {
      opentok.createSession(function (err, session) {
        if (err) {
          console.log(err);
          rej(err);
        }
        sessionId = session.sessionId;

        const token = opentok.generateToken(sessionId);

        res({
          apiKey: process.env.OPENTOK_API_KEY,
          sessionId,
          token,
          deepARKey: process.env.DEEPAR_KEY
        });
      });
    }
    else {
      const token = opentok.generateToken(sessionId);

      res({
        apiKey: process.env.OPENTOK_API_KEY,
        sessionId,
        token,
        deepARKey: process.env.DEEPAR_KEY
      });
    }
  })
}

module.exports = getTheGoods;