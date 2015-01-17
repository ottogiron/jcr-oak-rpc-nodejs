'use strict';

var jcrOakAPI = require('../lib/jcr-oak-api.js');


/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

 function getConnection(){
   var connection = jcrOakAPI.getConnection({
       host: 'localhost',
       port: 9090
   });
   return connection;
 }

exports.jcrOakRpcApiNodejs = {
    setUp: function(done) {
        // setup here
        done();
    },
    testRootGetTree: function(test) {

        var connection = getConnection();

        var root =  jcrOakAPI.getTRootService(connection);

        connection.on('error', function(err) {
            console.error(err);
            test.done();
        });
        var path = "/";
        root.getTree(path, function(error, tree) {
            if (error) {
                console.log(error);
            } else {
                test.ok(tree, 'Session has not returned a result');
                test.equal(tree.path, path, 'The path of the tree should be equal the required path /');
                connection.end();
            }
            test.done();
        });

    },
    testTreeGetChildren: function(test){
        var connection = getConnection();

        var rootService =  jcrOakAPI.getTRootService(connection);
        var treeService = jcrOakAPI.getTTreeService(connection);

        connection.on('error', function(err) {
            console.error(err);
            test.done();
        });

        rootService.getTree('/', function(error,tree){
            treeService.getChildren(tree,function(err,children){
                test.ok(children);
               // console.log(children);
                test.done();
                connection.end();
            });
        });

    },

};
