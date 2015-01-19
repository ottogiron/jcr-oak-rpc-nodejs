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
    testGetAllNodeTypes: function(test){
      var connection =  getConnection();
      var nodeTypeManager = jcrOakAPI.getTNodeTypeManager(connection);
      test.ok(nodeTypeManager);
      nodeTypeManager.getAllNodeTypes(function(err,allNodeTypes){
          test.ok(allNodeTypes.length > 0,'Node types size should be greater than 0');
          test.done();
          connection.end();
      });

    },
    testGetNodeType: function(test){
      var connection = getConnection();
      var nodeTypeManager = jcrOakAPI.getTNodeTypeManager(connection);
      nodeTypeManager.getNodeType('nt:file',function(err,nodeType){
        test.equal(nodeType.name,'nt:file');
        test.done();
      });

    },
    testHasNodeType: function(test){
      var connection = getConnection();
      var nodeTypeManager = jcrOakAPI.getTNodeTypeManager(connection);
      nodeTypeManager.hasNodeType('nt:file',function(err,hasNodeType){
        test.ok(hasNodeType);
        test.done();
      });

    },
    testPrimaryNodes: function(test){
      var connection = getConnection();
      var nodeTypeManager = jcrOakAPI.getTNodeTypeManager(connection);
      nodeTypeManager.getPrimaryNodeTypes(function(err,primaryNodes){
        test.ok(primaryNodes.length > 0,'Ther must be at least on primary node');
        test.done();
      });

    },

};
