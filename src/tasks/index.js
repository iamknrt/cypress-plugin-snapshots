const {
  GET_FILE,
  MATCH_IMAGE,
  MATCH_TEXT,
  READ_FILE,
} = require('./taskNames');
const getFile = require('./getFile');
const matchImageSnapshot = require('./matchImageSnapshot');
const matchTextSnapshot = require('./matchTextSnapshot');
const readFile = require("./readFile");

module.exports = {
  [GET_FILE]: getFile,
  [MATCH_IMAGE]: matchImageSnapshot,
  [MATCH_TEXT]: matchTextSnapshot,
  [READ_FILE]: readFile
}
