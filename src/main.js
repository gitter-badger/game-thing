(function() {
  let Game = {},
      dev  = {}

  dev = require('./util.js')(Game, dev)

  Game = require('./game.js')(Game, dev)

  Object.defineProperty(window, 'Game', {
    enumerable: false, configurable: false,
    value: Game,
    writable: false
  })
})
