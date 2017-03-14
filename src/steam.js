/**
 * Steam access.
 *
 * 1. Logs in to Steam using account credentials.
 * 2. Goes online for friends.
 * 3. Launches Team Fortress 2.
 */

var fs = require('fs');

var dotenv = require('dotenv');
var SteamUser = require('steam-user');
var client = new SteamUser();

dotenv.config();

console.log(Object.keys(client.myFriends));

client.logOn({
  accountName: process.env.STEAM_USERNAME,
  password: process.env.STEAM_PASSWORD
});

client.on('loggedOn', details => {
  console.log(`Logged in to Steam as user ID: ${client.steamID.getSteam3RenderedID()}`);

  console.log(details);

  client.setPersona(SteamUser.EPersonaState.Online);
  client.setUIMode(SteamUser.EClientUIMode.BigPicture);
  // client.gamesPlayed(440);

  client.getProductInfo([440, 730], [], function(apps, packages, unknownApps, unknownPackages) {
    console.log("Got app info, writing to files");

    // for (var appid in apps) {
    //   fs.writeFileSync(appid + '.json', JSON.stringify(apps[appid].appinfo, null, "  "));
    // }

		// 448280

    // console.log("Logging off of Steam");
    // client.logOff();
  });
});

client.on('error', err => {
  // Some error occurred during login.
  console.log(err);
});

client.on('webSession', (sessionID, cookies) => {
  console.log('Got web session');
  // Do something with these cookies if you wish.
});

client.on('newItems', count => {
  console.log(`%s new item${count === 1 ? '' : 's'} in our inventory`, count);
});

client.on('emailInfo', (address, validated) => {
  console.log('Email address %s: %s',
    validated ? 'validated' : 'not validated',
    address);
});

client.on('wallet', (hasWallet, currency, balance) => {
  console.log('Wallet balance: %s', SteamUser.formatCurrency(balance, currency));
});

client.on('accountLimitations', (limited, communityBanned, locked, canInviteFriends) => {
  var limitations = [];

  if (limited) {
    limitations.push('LIMITED');
  }

  if (communityBanned) {
    limitations.push('COMMUNITY BANNED');
  }

  if (locked) {
    limitations.push('LOCKED');
  }

  if (limitations.length === 0) {
    console.log('Our account has no limitations');
  } else {
    console.log(`Our account is ${limitations.join(', ')}`);
  }

  if (canInviteFriends) {
    console.log('Our account can invite friends');
  }
});

client.on('vacBans', (numBans, appids) => {
  console.log(`We have ${numBans} VAC ban${numBans === 1 ? '' : 's'}`);
  if (appids.length > 0) {
    console.log(`We are VAC-banned from these apps: ${appids.join(', ')}`);
  }
});

client.on('licenses', licenses => {
  console.log(`Our account owns ${licenses.length} license${licenses.length === 1 ? '' : 's'}`);
});
