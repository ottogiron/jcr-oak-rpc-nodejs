  var thrift = require('thrift'),        
      TRoot = require('./TRootService'),        
      tree_types = require('./tree_types')
      ,root_types = require('./root_types');

'use strict';

var TROOT_SERVICE_ID = 'TRootService';
var TTREE_SERVICE_ID = 'TTreeService';

function getService(identifier,conn){
   var multiplexer = new  thrift.Multiplexer(),
   service =  multiplexer.createClient(identifier,TRoot,conn);  
   return service;  
}

exports.getTRootService = function(conn){
   return  getService(TROOT_SERVICE_ID,conn);
};

exports.getTTreeService = function(conn){
   return getService(TTREE_SERVICE_ID,conn);
};


exports.getConnection = function(settings){
    var connection = thrift.createConnection(settings.host, settings.port, {transport: thrift.TFramedTransport});
    return connection;
};

exports.tree_types = tree_types;
exports.root_types = root_types;

