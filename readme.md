# getFriendsTradingAlerts

Alerts for friends weekly stock trading activities.

## Dependencies
- getFriendsListForUser
- getTradeTransactionsForUser

## API
getFriendsTradingAlerts(userId)

## Usage
getFriendsListForUser is mocked to just take "f1" as the only parameter that will give a valid return.

    const friendAlerts = require('./index.js');
    console.log("ALERTS", friendAlerts("f1"));
