# pexec

An npm module that allows you to invoke a child process (via require('child_process').exec) within the
confines of a Promise.

The resolution of the promise is an object that holds the stdout and stderr from the completed process.

## Installing

To install 'pexec':

    npm install pexec

## Examples

Invoke the 'ls' process:

    var pexec = require('pexec');

    pexec.pexec('ls').
      then(function(output) {
        console.log("Stdout from process: %s", output.stdout);
        console.log("Stderr from process: %s", output.stderr);
      }).
      catch(function(err) {
        console.log("Error invoking process: %j", err);
      });
