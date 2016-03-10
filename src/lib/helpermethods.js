'use strict';
function getFriendsListForUser(uid) {
  var friendsList = ["f2","f3","f4"];
  return friendsList;
}

function getTradeTransactionsForUser(uid) {
  var trades = [];
  if (uid === "f2") {
    trades = [
      "2014-01-02,BUY,APPL",
      "2014-01-04,BUY,FB",
      "2014-01-01,SELL,GOOG",
    ];
  } else if (uid === "f3") {
    trades = [
      "2014-01-02,SELL,APPL",
      "2014-01-04,SELL,FB",
      "2014-01-01,BUY,GOOG",
      "2014-01-01,BUY,XOXO",
      "2014-01-04,SELL,YHOO"
    ];
  } else if (uid === "f4") {
    trades = [
      "2014-01-02,SELL,APPL",
      "2014-01-04,BUY,XOXO",
      "2014-01-01,BUY,GOOG",
      "2014-01-04,BUY,YHOO"
    ];
  }
  return trades;
}

module.exports = {
  getFriendsListForUser: getFriendsListForUser,
  getTradeTransactionsForUser: getTradeTransactionsForUser
};
