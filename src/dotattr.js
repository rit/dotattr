'use strict'

function get (src, dots) {
  var attrs = dots.split('.')

  var res = src
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i]
    res = res[attr]
    if (res === undefined) {
      return
    }
  }
  return res
}

function set (target, dots, val) {
  var attrs = dots.split('.')
  var lastAttr = attrs.pop()

  var obj
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i]

    if (i === 0) {
      obj = target[attr]
      if (obj === undefined) {
        obj = target[attr] = {}
      }
      continue
    }

    var nextObj = obj[attr]
    if (nextObj === undefined) {
      obj = obj[attr] = {}
    } else {
      obj = nextObj
    }
  }

  obj[lastAttr] = val
  return target
}

module.exports = {
  get,
  set
}
