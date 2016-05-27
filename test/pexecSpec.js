'use strict'

const expect = require('chai').expect
const pexec = require('../lib/index.js')

describe('pexec', function () {
  describe('#pexec', function () {
    it('returns the correct current directory', function () {
      pexec.pexec('pwd')
        .then(function (output) {
          expect(output.stdout).to.equal(__directory)
        })
        .catch(function (err) {
          expect(err).to.be
        })
    })

    it('returns an error if a non-existent command is executed', function () {
      pexec.pexec('nonexistent_command')
        .then(function (output) {
          expect(output).to.equal(null)
        })
        .catch(function (err) {
          expect(err.killed).to.equal(false)
          expect(err.code).to.equal(127)
        })
    })
  })
})
