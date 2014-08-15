  var thrift = require('thrift'),        
      TRoot = require('./lib/TRootService'),        
      tree_types = require('./lib/tree_types')
      ,root_types = require('./lib/root_types');

'use strict';

var TROOT_SERVICE_ID = 'TRootService';
var TTREE_SERVICE_ID = 'TTreeService';

function getService(identifier,conn){
   var multiplexer = new  thrift.Multiplexer(),
   service =  multiplexer.createClient(identifier,TRoot,conn);  
   return service;  
}

exports.getTRootService = function(conn){
    getService(TROOT_SERVICE_ID,conn);
};

exports.getTTreeService = function(conn){
    getService(TTREE_SERVICE_ID,conn);
};


exports.getConnection = function(settings){
    var connection = thrift.createConnection(settings.host, settings.port, {transport: thrift.TFramedTransport});
    return connection;
};

exports.tree_types = tree_types;
exports.root_types = root_types;

