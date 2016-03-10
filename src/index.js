'use strict';
const helpers = require('./lib/helpermethods.js');

function getFriendsTradingAlerts(uid) {
  // console.log('help', helpers)
  const friends = helpers.getFriendsListForUser(uid);
  const activity = [];
  const ordered = [];
  const alerts = [];

  // project all friends transactions into the activity array
  friends.forEach( friend => {
    const activityStrings = helpers.getTradeTransactionsForUser(friend);
    activityStrings.forEach( el => activity.push(el.split(',').splice(1)));
  });

  // tease out activity noise to individual threads
  const threads = activity
      .reduce((symbols, arr) => {
        symbols[arr[1]] = [];
        return symbols;
      }, {});

  // score ticker threads
  activity.forEach( a => {
    let action = a[0];
    let count = 0;
     if ( action === "BUY") {
       count = 1;
     } else if ( action === "SELL") {
       count = -1;
     }
     threads[a[1]].push(count);
  });

  // create and order alert objects in ordered array
  function orderUp (net_friends, transaction, ticker){
    ordered.push({
      'net_friends': net_friends,
      'buy_sell': transaction,
      'ticker': ticker
    });
    ordered.sort((a, b) => {
      return parseFloat(a.net_friends) - parseFloat(b.net_friends);
    });
  };

  // gather ticker scores
  for (var ticker in threads) {
    let net_friends = 0;
    let transaction = null;

    // total ticker scores
    threads[ticker].forEach( tick => {
      net_friends += tick;
    });

    // set net trasaction for the ticker
    if (net_friends > 0){
      transaction = 'BUY';
      orderUp(net_friends, transaction, ticker);
    } else if (net_friends < 0) {
      net_friends *= -1; // convert to pos num
      transaction = 'SELL';
      orderUp(net_friends, transaction, ticker);
    }
  }

  // use the ordered alert object to push values into alert array
  ordered.forEach(e => alerts.push(e.net_friends +','+ e.buy_sell +','+ e.ticker));

  return alerts.reverse();
}

module.exports = getFriendsTradingAlerts;
