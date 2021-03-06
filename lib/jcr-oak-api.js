  var thrift = require('thrift'),
      TRoot = require('./thrift/TRootService'),
      TTree = require('./thrift/TTreeService'),
      TNodeTypeManager = require('./thrift/TNodeTypeManager'),
      TNodeTypeService = require('./thrift/TNodeTypeService'),
      tree_types = require('./thrift/tree_types'),
      root_types = require('./thrift/root_types'),
      nodetypemanager_types = require('./thrift/nodetypemanager_types');

'use strict';

var TROOT_SERVICE_ID = 'TRootService';
var TTREE_SERVICE_ID = 'TTreeService';
var TNODETYPEMANAGER_ID = 'TNodeTypeManager';
var TNODETYPESERVICE_ID = "TNodeTypeService";

function getService(identifier,otype,conn){
   var multiplexer = new  thrift.Multiplexer(),
   service =  multiplexer.createClient(identifier,otype,conn);
   return service;
}

exports.getTRootService = function(conn){
   return  getService(TROOT_SERVICE_ID,TRoot,conn);
};

exports.getTTreeService = function(conn){
   return getService(TTREE_SERVICE_ID,TTree,conn);
};

exports.getTNodeTypeManager = function(conn){
  return getService(TNODETYPEMANAGER_ID,TNodeTypeManager,conn);
};

exports.getTNodeTypeService = function(conn){
  return getService(TNODETYPESERVICE_ID,TNodeTypeService,conn);
}


exports.getConnection = function(settings){
    var connection = thrift.createConnection(settings.host, settings.port, {transport: thrift.TFramedTransport});
    return connection;
};

exports.tree_types = tree_types;
exports.root_types = root_types;
exports.nodetypemanager_types = nodetypemanager_types;
