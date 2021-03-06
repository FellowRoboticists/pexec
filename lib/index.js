'use strict'

module.exports = (function () {
  const exec = require('child_process').exec
  const Promise = require('promise')

  /**
   * Invoke a new process. stdout and stderr are returned so
   * you can capture the output.
   */
  const pexec = function (command) {
    return new Promise(function (resolve, reject) {
      exec(command, function (err, stdout, stderr) {
        if (err) return reject(err)
        resolve({stdout: stdout, stderr: stderr})
      })
    })
  }

  var mod = {
    pexec: pexec
  }

  return mod
}())
