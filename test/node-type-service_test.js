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
    testCanAddChildNode: function(test){
      var connection =  getConnection();
      var nodeTypeService = jcrOakAPI.getTNodeTypeService(connection);
      var tNodeType = new jcrOakAPI.nodetypemanager_types.TNodeType();
      tNodeType.name = 'nt:folder';
      test.ok(tNodeType);
      nodeTypeService.canAddChildNodeWithType(tNodeType,'folder','nt:file',function(err,canAddChildNode){
            connection.end();
            test.ok(canAddChildNode,'It should be posibble to add a child node of type nt:file');
            test.done();
      });



    }

};
