module.exports = {
  'dbUrl': 'mongodb://data01.audacy.space:11001/telemetry',
  'dbOptions': {
    'user': 'audacyapp',
    'pass': 'quindar',
    'auth': {
      'authdb': 'admin'
    },
    "server": {   
      "auto_reconnect": true,
      "poolSize": 200,
      "socketOptions": {
         "keepAlive": 1
      }
    }
  },
  'secret': 'quindar',
  'maxRecords': 9999,
  'vehicles': ["Audacy1", "Audacy2", "Audacy3", "IBEX", "CST-100 Starliner", "Orion MPCV", "Dream Chaser CRS-2", "ISRO OV",
    "Skylon D1", "XCOR Lynx", "SIRIUS-1", "ISS (ZARYA)"],
  'exchange':'quindarExchange04',
  'exchangeType': 'topic',
  'serverURL': 'data04.audacy.space/develop',
  'serverEndpoint': 'amqp://audacyapp:quindar@data04.audacy.space/develop',
  'mqConfig': {
    'user': 'audacyapp',
    'pass': 'quindar',
    'server': 'data04.audacy.space'
  },
  // when starting NodeJS server, we can disable/enable modules
  'serverStartupOptions': {
    'apiHttp': true,
    'apiHttps': true,
    'socketHttp': true,
    'socketHttps': true
  }
};
