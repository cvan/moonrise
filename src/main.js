/* jshint node:true */

console.log('[main] loaded');

var os = require('os');

var gui = window.require('nw.gui');

var steam = require('./steam');

gui.Window.get().showDevTools();

function log (msg) {
  console.log(msg);
  document.getElementById('logs').innerHTML += msg + '<br>\n';
}

function testSteamAPI () {
  var greenworks = require('./greenworks.js');
  if (!greenworks) {
    log('Greenworks not support for ' + os.platform() + ' platform');
    return;
  }

  if (!greenworks.initAPI()) {
    log('Error initializing Steam API');
    return;
  }

  log('Successfully initialized Steam API');

  log('Cloud enabled: ' + greenworks.isCloudEnabled());
  log('Cloud enabled for user: ' + greenworks.isCloudEnabledForUser());

  greenworks.on('game-overlay-activated', function (isOverlayActive) {
    log('Overlay active: ' + isOverlayActive);
  });
  greenworks.on('steam-servers-connected', function () {
    log('Connected');
  });
  greenworks.on('steam-servers-disconnected', function () {
    log('Disconnected');
  });
  greenworks.on('steam-server-connect-failure', function () {
    log('Connection failure');
  });
  greenworks.on('steam-shutdown', function () {
    log('Shutdown');
  });

  greenworks.saveTextToFile('test_file.txt', 'test_content', function () {
    log('Successfully wrote text to file');
  }, function (err) {
    log('Failed to write text to file');
  });

  greenworks.readTextFromFile('test_file.txt', function (msg) {
    if (msg) {
      console.log(msg);
    }
    log('Successfully read text from file successfully');
  }, function (err) {
    log('Failed to read text from file');
  });

  greenworks.getCloudQuota(function (quota, used) {
    log('Successfully fetched cloud quota: ' + used + ' of ' + quota);
  }, function (err) {
    log('Failed to fetch cloud quota');
  });

  greenworks.activateAchievement('achievement', function () {
    log('Successfully activated achievement');
  }, function (err) {
    log('Failed to activate achievement');
  });

  greenworks.getNumberOfPlayers(function (numPlayers) {
    log('Number of players: ' + numPlayers);
  }, function (err) {
    log ('Failed to retrieve number of players');
  });

  log('Numer of friends: ' + greenworks.getFriendCount(greenworks.FriendFlags.Immediate));
  var friends = greenworks.getFriends(greenworks.FriendFlags.Immediate);
  var friends_names = [];
  for (var i = 0; i < friends.length; ++i) {
    friends_names.push(friends[i].getPersonaName());
  }
  log('Friends: ' + friends_names.join(','));
}

// document.addEventListener('DOMContentLoaded', testSteamAPI);

var fps = 30;

function forceRefresh () {
  // This function updates the renderer at a given frame rate, even if the user is idle.
  // Without this function, the Steam overlay feels frozen.
  var el = document.getElementById('force-refresh');
  if (!el) {
    return;
  }
  setTimeout(function () {
    el.getContext('2d').clearRect(0, 0, 1, 1);
    window.requestAnimationFrame(forceRefresh);
  }, 1000 / fps);
}
