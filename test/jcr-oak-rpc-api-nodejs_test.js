'use strict';

var jcrOakRpcApiNodejs = require('../lib/jcr-oak-rpc-api-nodejs.js'),
        thrift = require('thrift'),        
        TRoot = require('../lib/TRootService'),        
        treetypes = require('../lib/tree_types');


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

exports.jcrOakRpcApiNodejs = {
    setUp: function(done) {
        // setup here
        done();
    },
    testJcrOakClient: function(test) {

        var connection = thrift.createConnection('localhost', 9090, {transport: thrift.TFramedTransport}),
        multiplexer = new  thrift.Multiplexer(),
        root =  multiplexer.createClient('TRootService',TRoot,connection);        
        
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
                console.log(tree);
                connection.end();
            }

            test.done();
        });

    }
};
