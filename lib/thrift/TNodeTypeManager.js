//
// Autogenerated by Thrift Compiler (1.0.0-dev)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = require('./nodetypemanager_types');
//HELPER FUNCTIONS AND STRUCTURES

NodeType.TNodeTypeManager_getAllNodeTypes_args = function(args) {
};
NodeType.TNodeTypeManager_getAllNodeTypes_args.prototype = {};
NodeType.TNodeTypeManager_getAllNodeTypes_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

NodeType.TNodeTypeManager_getAllNodeTypes_args.prototype.write = function(output) {
  output.writeStructBegin('TNodeTypeManager_getAllNodeTypes_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

NodeType.TNodeTypeManager_getAllNodeTypes_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
NodeType.TNodeTypeManager_getAllNodeTypes_result.prototype = {};
NodeType.TNodeTypeManager_getAllNodeTypes_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.LIST) {
        var _size32 = 0;
        var _rtmp336;
        this.success = [];
        var _etype35 = 0;
        _rtmp336 = input.readListBegin();
        _etype35 = _rtmp336.etype;
        _size32 = _rtmp336.size;
        for (var _i37 = 0; _i37 < _size32; ++_i37)
        {
          var elem38 = null;
          elem38 = input.readString();
          this.success.push(elem38);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

NodeType.TNodeTypeManager_getAllNodeTypes_result.prototype.write = function(output) {
  output.writeStructBegin('TNodeTypeManager_getAllNodeTypes_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRING, this.success.length);
    for (var iter39 in this.success)
    {
      if (this.success.hasOwnProperty(iter39))
      {
        iter39 = this.success[iter39];
        output.writeString(iter39);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

NodeType.TNodeTypeManager_getNodeType_args = function(args) {
  this.nodeTypeName = null;
  if (args) {
    if (args.nodeTypeName !== undefined) {
      this.nodeTypeName = args.nodeTypeName;
    }
  }
};
NodeType.TNodeTypeManager_getNodeType_args.prototype = {};
NodeType.TNodeTypeManager_getNodeType_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.nodeTypeName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

NodeType.TNodeTypeManager_getNodeType_args.prototype.write = function(output) {
  output.writeStructBegin('TNodeTypeManager_getNodeType_args');
  if (this.nodeTypeName !== null && this.nodeTypeName !== undefined) {
    output.writeFieldBegin('nodeTypeName', Thrift.Type.STRING, 1);
    output.writeString(this.nodeTypeName);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

NodeType.TNodeTypeManager_getNodeType_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
NodeType.TNodeTypeManager_getNodeType_result.prototype = {};
NodeType.TNodeTypeManager_getNodeType_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.TNodeType();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

NodeType.TNodeTypeManager_getNodeType_result.prototype.write = function(output) {
  output.writeStructBegin('TNodeTypeManager_getNodeType_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

NodeType.TNodeTypeManager_getPrimaryNodeTypes_args = function(args) {
};
NodeType.TNodeTypeManager_getPrimaryNodeTypes_args.prototype = {};
NodeType.TNodeTypeManager_getPrimaryNodeTypes_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

NodeType.TNodeTypeManager_getPrimaryNodeTypes_args.prototype.write = function(output) {
  output.writeStructBegin('TNodeTypeManager_getPrimaryNodeTypes_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

NodeType.TNodeTypeManager_getPrimaryNodeTypes_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
NodeType.TNodeTypeManager_getPrimaryNodeTypes_result.prototype = {};
NodeType.TNodeTypeManager_getPrimaryNodeTypes_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.LIST) {
        var _size40 = 0;
        var _rtmp344;
        this.success = [];
        var _etype43 = 0;
        _rtmp344 = input.readListBegin();
        _etype43 = _rtmp344.etype;
        _size40 = _rtmp344.size;
        for (var _i45 = 0; _i45 < _size40; ++_i45)
        {
          var elem46 = null;
          elem46 = input.readString();
          this.success.push(elem46);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

NodeType.TNodeTypeManager_getPrimaryNodeTypes_result.prototype.write = function(output) {
  output.writeStructBegin('TNodeTypeManager_getPrimaryNodeTypes_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRING, this.success.length);
    for (var iter47 in this.success)
    {
      if (this.success.hasOwnProperty(iter47))
      {
        iter47 = this.success[iter47];
        output.writeString(iter47);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

NodeType.TNodeTypeManager_hasNodeType_args = function(args) {
  this.name = null;
  if (args) {
    if (args.name !== undefined) {
      this.name = args.name;
    }
  }
};
NodeType.TNodeTypeManager_hasNodeType_args.prototype = {};
NodeType.TNodeTypeManager_hasNodeType_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

NodeType.TNodeTypeManager_hasNodeType_args.prototype.write = function(output) {
  output.writeStructBegin('TNodeTypeManager_hasNodeType_args');
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 1);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

NodeType.TNodeTypeManager_hasNodeType_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
NodeType.TNodeTypeManager_hasNodeType_result.prototype = {};
NodeType.TNodeTypeManager_hasNodeType_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.BOOL) {
        this.success = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

NodeType.TNodeTypeManager_hasNodeType_result.prototype.write = function(output) {
  output.writeStructBegin('TNodeTypeManager_hasNodeType_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 0);
    output.writeBool(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

NodeType.TNodeTypeManagerClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
NodeType.TNodeTypeManagerClient.prototype = {};
NodeType.TNodeTypeManagerClient.prototype.seqid = function() { return this._seqid; }
NodeType.TNodeTypeManagerClient.prototype.new_seqid = function() { return this._seqid += 1; }
NodeType.TNodeTypeManagerClient.prototype.getAllNodeTypes = function(callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_getAllNodeTypes();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getAllNodeTypes();
  }
};

NodeType.TNodeTypeManagerClient.prototype.send_getAllNodeTypes = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getAllNodeTypes', Thrift.MessageType.CALL, this.seqid());
  var args = new NodeType.TNodeTypeManager_getAllNodeTypes_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

NodeType.TNodeTypeManagerClient.prototype.recv_getAllNodeTypes = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new NodeType.TNodeTypeManager_getAllNodeTypes_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getAllNodeTypes failed: unknown result');
};
NodeType.TNodeTypeManagerClient.prototype.getNodeType = function(nodeTypeName, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_getNodeType(nodeTypeName);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getNodeType(nodeTypeName);
  }
};

NodeType.TNodeTypeManagerClient.prototype.send_getNodeType = function(nodeTypeName) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getNodeType', Thrift.MessageType.CALL, this.seqid());
  var args = new NodeType.TNodeTypeManager_getNodeType_args();
  args.nodeTypeName = nodeTypeName;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

NodeType.TNodeTypeManagerClient.prototype.recv_getNodeType = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new NodeType.TNodeTypeManager_getNodeType_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getNodeType failed: unknown result');
};
NodeType.TNodeTypeManagerClient.prototype.getPrimaryNodeTypes = function(callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_getPrimaryNodeTypes();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getPrimaryNodeTypes();
  }
};

NodeType.TNodeTypeManagerClient.prototype.send_getPrimaryNodeTypes = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getPrimaryNodeTypes', Thrift.MessageType.CALL, this.seqid());
  var args = new NodeType.TNodeTypeManager_getPrimaryNodeTypes_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

NodeType.TNodeTypeManagerClient.prototype.recv_getPrimaryNodeTypes = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new NodeType.TNodeTypeManager_getPrimaryNodeTypes_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getPrimaryNodeTypes failed: unknown result');
};
NodeType.TNodeTypeManagerClient.prototype.hasNodeType = function(name, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_hasNodeType(name);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_hasNodeType(name);
  }
};

NodeType.TNodeTypeManagerClient.prototype.send_hasNodeType = function(name) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('hasNodeType', Thrift.MessageType.CALL, this.seqid());
  var args = new NodeType.TNodeTypeManager_hasNodeType_args();
  args.name = name;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

NodeType.TNodeTypeManagerClient.prototype.recv_hasNodeType = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new NodeType.TNodeTypeManager_hasNodeType_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('hasNodeType failed: unknown result');
};
NodeType.TNodeTypeManagerProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
NodeType.TNodeTypeManagerProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}

NodeType.TNodeTypeManagerProcessor.prototype.process_getAllNodeTypes = function(seqid, input, output) {
  var args = new NodeType.TNodeTypeManager_getAllNodeTypes_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getAllNodeTypes.length === 0) {
    Q.fcall(this._handler.getAllNodeTypes)
      .then(function(result) {
        var result = new NodeType.TNodeTypeManager_getAllNodeTypes_result({success: result});
        output.writeMessageBegin("getAllNodeTypes", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new NodeType.TNodeTypeManager_getAllNodeTypes_result(err);
        output.writeMessageBegin("getAllNodeTypes", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getAllNodeTypes( function (err, result) {
      var result = new NodeType.TNodeTypeManager_getAllNodeTypes_result((err != null ? err : {success: result}));
      output.writeMessageBegin("getAllNodeTypes", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

NodeType.TNodeTypeManagerProcessor.prototype.process_getNodeType = function(seqid, input, output) {
  var args = new NodeType.TNodeTypeManager_getNodeType_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getNodeType.length === 1) {
    Q.fcall(this._handler.getNodeType, args.nodeTypeName)
      .then(function(result) {
        var result = new NodeType.TNodeTypeManager_getNodeType_result({success: result});
        output.writeMessageBegin("getNodeType", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new NodeType.TNodeTypeManager_getNodeType_result(err);
        output.writeMessageBegin("getNodeType", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getNodeType(args.nodeTypeName,  function (err, result) {
      var result = new NodeType.TNodeTypeManager_getNodeType_result((err != null ? err : {success: result}));
      output.writeMessageBegin("getNodeType", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

NodeType.TNodeTypeManagerProcessor.prototype.process_getPrimaryNodeTypes = function(seqid, input, output) {
  var args = new NodeType.TNodeTypeManager_getPrimaryNodeTypes_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getPrimaryNodeTypes.length === 0) {
    Q.fcall(this._handler.getPrimaryNodeTypes)
      .then(function(result) {
        var result = new NodeType.TNodeTypeManager_getPrimaryNodeTypes_result({success: result});
        output.writeMessageBegin("getPrimaryNodeTypes", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new NodeType.TNodeTypeManager_getPrimaryNodeTypes_result(err);
        output.writeMessageBegin("getPrimaryNodeTypes", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getPrimaryNodeTypes( function (err, result) {
      var result = new NodeType.TNodeTypeManager_getPrimaryNodeTypes_result((err != null ? err : {success: result}));
      output.writeMessageBegin("getPrimaryNodeTypes", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

NodeType.TNodeTypeManagerProcessor.prototype.process_hasNodeType = function(seqid, input, output) {
  var args = new NodeType.TNodeTypeManager_hasNodeType_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.hasNodeType.length === 1) {
    Q.fcall(this._handler.hasNodeType, args.name)
      .then(function(result) {
        var result = new NodeType.TNodeTypeManager_hasNodeType_result({success: result});
        output.writeMessageBegin("hasNodeType", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new NodeType.TNodeTypeManager_hasNodeType_result(err);
        output.writeMessageBegin("hasNodeType", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.hasNodeType(args.name,  function (err, result) {
      var result = new NodeType.TNodeTypeManager_hasNodeType_result((err != null ? err : {success: result}));
      output.writeMessageBegin("hasNodeType", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

