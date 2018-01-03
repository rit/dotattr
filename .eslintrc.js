module.exports = {
  "extends": "standard",
  "env": {
    "es6": true,
    "node": true,
    "mocha": true
  },
  "globals": {
    "expect": true
  },
  "plugins": [
    "chai-friendly"
  ],
  "rules": {
    "no-unused-expressions": 0,
    "chai-friendly/no-unused-expressions": 2
  }
};
