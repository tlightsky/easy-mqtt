var Messaging = require("mqtt_over_websockets");

var EasyMqtt = {
  /**
  * options:
  * host, username, password, clientID, topics
  * callback:
  * ret = {status: false}
  * err = {msg: ""}
  */
  startMqtt : function (options, callback) {

  },
  recvMqttMsg : function (callbcak) {

  },
  stopRecvMqttMsg : function () {

  },
  /**
  * params:
  * topic, command
  * callback:
  * ret = {status: false}
  * err = {msg: ""}
  */
  publish : function (params, callbcak) {

  },
  /**
  * callback:
  * ret = {status: false}
  * err = {msg: ""}
  */
  stopMqtt : function (callback) {

  }
}

export=EasyMqtt;
