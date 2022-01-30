const sql = require("./db.js");


const tableColumns = function(entry) {
  this.word = entry.word;
  this.wordtype = entry.wordtype;
  this.definition = entry.definition;
};

tableColumns.findByWord = (word, result) => {

    sql.query(`SELECT * FROM entries WHERE word = '${word}'`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        result(null, res);
        return;
      }

      result({ kind: "not_found" }, null);
    });
  };

  module.exports = tableColumns;
 