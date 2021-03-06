module.exports = {
  FriendsActions: {
    FRIENDS_INIT: 'FRIENDS_INIT',
    FRIENDS_INSERT_OR_UPDATE: 'FRIENDS_INSERT_OR_UPDATE',
    FRIENDS_REMOVE: 'FRIENDS_REMOVE',
    FRIENDS_BLOCK: 'FRIENDS_BLOCK',
    FRIENDS_ADD: 'FRIENDS_ADD',
    FRIENDS_SEND_TRADE_REQUEST: 'FRIENDS_SEND_TRADE_REQUEST',
    FRIENDS_PURGE: 'FRIENDS_PURGE'
  },

  ChatActions: {
    CHAT_OPEN: 'CHAT_OPEN',
    CHAT_SWITCH: 'CHAT_SWITCH',
    CHAT_CLOSE: 'CHAT_CLOSE',
    CHAT_NEW_INCOMING_MESSAGE: 'CHAT_NEW_INCOMING_MESSAGE',
    CHAT_NEW_OUTGOING_MESSAGE: 'CHAT_NEW_OUTGOING_MESSAGE',
    CHAT_ECHO_MESSAGE: 'CHAT_ECHO_MESSAGE',
    CHAT_CLEAR: 'CHAT_CLEAR',
    CHAT_REQUEST_OFFLINE_MESSAGES: 'CHAT_REQUEST_OFFLINE_MESSAGES',
    CHAT_RESPOND_TO_TRADE_REQUEST: 'CHAT_RESPOND_TO_TRADE_REQUEST',
    CHAT_INCOMING_TRADE_REQUEST_RESPONSE: 'CHAT_INCOMING_TRADE_REQUEST_RESPONSE',
    CHAT_CANCEL_TRADE_REQUEST: 'CHAT_CANCEL_TRADE_REQUEST',
    OTHER_USER_IS_TYPING: 'OTHER_USER_IS_TYPING',
    OTHER_USER_STOPPED_TYPING: 'OTHER_USER_STOPPED_TYPING',
    WE_ARE_TYPING: 'WE_ARE_TYPING'
  },

  UserActions: {
    USER_UPDATE: 'USER_UPDATE',
    USER_CHANGE_STATE: 'USER_CHANGE_STATE',
    USER_CHANGE_STATE: 'USER_CHANGE_NAME',
    USER_SET_WEBSESSION: 'USER_SET_WEBSESSION'
  },

  NotificationActions: {
    NOTIFICATION_UPDATE_ALL: 'NOTIFICATION_UPDATE_ALL',
    NOTIFICATION_UPDATE_TRADEOFFER_COUNT: 'NOTIFICATION_UPDATE_TRADEOFFER_COUNT'
  },

  UIActions: {
    UI_LOGOUT: 'UI_LOGOUT',
    UI_CHANGE_NAME_OPEN_DIALOG: 'UI_CHANGE_NAME_OPEN_DIALOG',
    UI_CHANGE_NAME_CLOSE_DIALOG: 'UI_CHANGE_NAME_CLOSE_DIALOG',
    UI_ADD_FRIEND_OPEN_DIALOG: 'UI_ADD_FRIEND_OPEN_DIALOG',
    UI_ADD_FRIEND_CLOSE_DIALOG: 'UI_ADD_FRIEND_CLOSE_DIALOG',
    UI_NOTIFICATION_OPEN_URL: 'UI_NOTIFICATION_OPEN_URL',
    UI_NOTIFICATION_SWITCH_CHAT: 'UI_NOTIFICATION_SWITCH_CHAT',
    UI_UPDATE_AVAILABLE: 'UI_UPDATE_AVAILABLE'
  },

  MessageTypes: {
    CHAT_OUR_MESSAGE: 'our-message',
    CHAT_THEIR_MESSAGE: 'their-message',
    CHAT_OUR_TRADE_REQUEST: 'our-trade-request',
    CHAT_THEIR_TRADE_REQUEST: 'their-trade-request'
  },

  SteamEnums: require('./steam-enums.js')
};
