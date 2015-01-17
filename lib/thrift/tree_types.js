//
// Autogenerated by Thrift Compiler (1.0.0-dev)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = module.exports = {};
ttypes.TType = {
  'BINARIES' : 0,
  'BINARY' : 1,
  'BOOLEAN' : 2,
  'BOOLEANS' : 3,
  'DATE' : 4,
  'DATES' : 5,
  'DOUBLE' : 6,
  'DOUBLES' : 7,
  'LONG' : 8,
  'LONGS' : 9,
  'STRING' : 10,
  'STRINGS' : 11
};
ttypes.TTreeStatus = {
  'UNCHANGED' : 0,
  'NEW' : 1,
  'MODIFIED' : 2
};
TPropertyState = module.exports.TPropertyState = function(args) {
  this.count = null;
  this.name = null;
  this.size = null;
  this.isArray = null;
  this.type = null;
  this.binaryValue = null;
  this.binaryValues = null;
  this.longValues = null;
  this.longValue = null;
  this.booleanValues = null;
  this.booleanValue = null;
  this.dateValues = null;
  this.dateValue = null;
  this.doubleValues = null;
  this.doubleValue = null;
  this.stringValues = null;
  this.stringValue = null;
  if (args) {
    if (args.count !== undefined) {
      this.count = args.count;
    }
    if (args.name !== undefined) {
      this.name = args.name;
    }
    if (args.size !== undefined) {
      this.size = args.size;
    }
    if (args.isArray !== undefined) {
      this.isArray = args.isArray;
    }
    if (args.type !== undefined) {
      this.type = args.type;
    }
    if (args.binaryValue !== undefined) {
      this.binaryValue = args.binaryValue;
    }
    if (args.binaryValues !== undefined) {
      this.binaryValues = args.binaryValues;
    }
    if (args.longValues !== undefined) {
      this.longValues = args.longValues;
    }
    if (args.longValue !== undefined) {
      this.longValue = args.longValue;
    }
    if (args.booleanValues !== undefined) {
      this.booleanValues = args.booleanValues;
    }
    if (args.booleanValue !== undefined) {
      this.booleanValue = args.booleanValue;
    }
    if (args.dateValues !== undefined) {
      this.dateValues = args.dateValues;
    }
    if (args.dateValue !== undefined) {
      this.dateValue = args.dateValue;
    }
    if (args.doubleValues !== undefined) {
      this.doubleValues = args.doubleValues;
    }
    if (args.doubleValue !== undefined) {
      this.doubleValue = args.doubleValue;
    }
    if (args.stringValues !== undefined) {
      this.stringValues = args.stringValues;
    }
    if (args.stringValue !== undefined) {
      this.stringValue = args.stringValue;
    }
  }
};
TPropertyState.prototype = {};
TPropertyState.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I32) {
        this.count = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.size = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.BOOL) {
        this.isArray = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I32) {
        this.type = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.binaryValue = input.readBinary();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.binaryValues = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = input.readBinary();
          this.binaryValues.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.LIST) {
        var _size7 = 0;
        var _rtmp311;
        this.longValues = [];
        var _etype10 = 0;
        _rtmp311 = input.readListBegin();
        _etype10 = _rtmp311.etype;
        _size7 = _rtmp311.size;
        for (var _i12 = 0; _i12 < _size7; ++_i12)
        {
          var elem13 = null;
          elem13 = input.readI64();
          this.longValues.push(elem13);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.I64) {
        this.longValue = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.LIST) {
        var _size14 = 0;
        var _rtmp318;
        this.booleanValues = [];
        var _etype17 = 0;
        _rtmp318 = input.readListBegin();
        _etype17 = _rtmp318.etype;
        _size14 = _rtmp318.size;
        for (var _i19 = 0; _i19 < _size14; ++_i19)
        {
          var elem20 = null;
          elem20 = input.readBool();
          this.booleanValues.push(elem20);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.BOOL) {
        this.booleanValue = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.LIST) {
        var _size21 = 0;
        var _rtmp325;
        this.dateValues = [];
        var _etype24 = 0;
        _rtmp325 = input.readListBegin();
        _etype24 = _rtmp325.etype;
        _size21 = _rtmp325.size;
        for (var _i26 = 0; _i26 < _size21; ++_i26)
        {
          var elem27 = null;
          elem27 = input.readI64();
          this.dateValues.push(elem27);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 13:
      if (ftype == Thrift.Type.I64) {
        this.dateValue = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 14:
      if (ftype == Thrift.Type.LIST) {
        var _size28 = 0;
        var _rtmp332;
        this.doubleValues = [];
        var _etype31 = 0;
        _rtmp332 = input.readListBegin();
        _etype31 = _rtmp332.etype;
        _size28 = _rtmp332.size;
        for (var _i33 = 0; _i33 < _size28; ++_i33)
        {
          var elem34 = null;
          elem34 = input.readDouble();
          this.doubleValues.push(elem34);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 15:
      if (ftype == Thrift.Type.DOUBLE) {
        this.doubleValue = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 16:
      if (ftype == Thrift.Type.LIST) {
        var _size35 = 0;
        var _rtmp339;
        this.stringValues = [];
        var _etype38 = 0;
        _rtmp339 = input.readListBegin();
        _etype38 = _rtmp339.etype;
        _size35 = _rtmp339.size;
        for (var _i40 = 0; _i40 < _size35; ++_i40)
        {
          var elem41 = null;
          elem41 = input.readString();
          this.stringValues.push(elem41);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 17:
      if (ftype == Thrift.Type.STRING) {
        this.stringValue = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TPropertyState.prototype.write = function(output) {
  output.writeStructBegin('TPropertyState');
  if (this.count !== null && this.count !== undefined) {
    output.writeFieldBegin('count', Thrift.Type.I32, 1);
    output.writeI32(this.count);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 2);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.size !== null && this.size !== undefined) {
    output.writeFieldBegin('size', Thrift.Type.I32, 3);
    output.writeI32(this.size);
    output.writeFieldEnd();
  }
  if (this.isArray !== null && this.isArray !== undefined) {
    output.writeFieldBegin('isArray', Thrift.Type.BOOL, 4);
    output.writeBool(this.isArray);
    output.writeFieldEnd();
  }
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.I32, 5);
    output.writeI32(this.type);
    output.writeFieldEnd();
  }
  if (this.binaryValue !== null && this.binaryValue !== undefined) {
    output.writeFieldBegin('binaryValue', Thrift.Type.STRING, 6);
    output.writeBinary(this.binaryValue);
    output.writeFieldEnd();
  }
  if (this.binaryValues !== null && this.binaryValues !== undefined) {
    output.writeFieldBegin('binaryValues', Thrift.Type.LIST, 7);
    output.writeListBegin(Thrift.Type.STRING, this.binaryValues.length);
    for (var iter42 in this.binaryValues)
    {
      if (this.binaryValues.hasOwnProperty(iter42))
      {
        iter42 = this.binaryValues[iter42];
        output.writeBinary(iter42);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.longValues !== null && this.longValues !== undefined) {
    output.writeFieldBegin('longValues', Thrift.Type.LIST, 8);
    output.writeListBegin(Thrift.Type.I64, this.longValues.length);
    for (var iter43 in this.longValues)
    {
      if (this.longValues.hasOwnProperty(iter43))
      {
        iter43 = this.longValues[iter43];
        output.writeI64(iter43);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.longValue !== null && this.longValue !== undefined) {
    output.writeFieldBegin('longValue', Thrift.Type.I64, 9);
    output.writeI64(this.longValue);
    output.writeFieldEnd();
  }
  if (this.booleanValues !== null && this.booleanValues !== undefined) {
    output.writeFieldBegin('booleanValues', Thrift.Type.LIST, 10);
    output.writeListBegin(Thrift.Type.BOOL, this.booleanValues.length);
    for (var iter44 in this.booleanValues)
    {
      if (this.booleanValues.hasOwnProperty(iter44))
      {
        iter44 = this.booleanValues[iter44];
        output.writeBool(iter44);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.booleanValue !== null && this.booleanValue !== undefined) {
    output.writeFieldBegin('booleanValue', Thrift.Type.BOOL, 11);
    output.writeBool(this.booleanValue);
    output.writeFieldEnd();
  }
  if (this.dateValues !== null && this.dateValues !== undefined) {
    output.writeFieldBegin('dateValues', Thrift.Type.LIST, 12);
    output.writeListBegin(Thrift.Type.I64, this.dateValues.length);
    for (var iter45 in this.dateValues)
    {
      if (this.dateValues.hasOwnProperty(iter45))
      {
        iter45 = this.dateValues[iter45];
        output.writeI64(iter45);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.dateValue !== null && this.dateValue !== undefined) {
    output.writeFieldBegin('dateValue', Thrift.Type.I64, 13);
    output.writeI64(this.dateValue);
    output.writeFieldEnd();
  }
  if (this.doubleValues !== null && this.doubleValues !== undefined) {
    output.writeFieldBegin('doubleValues', Thrift.Type.LIST, 14);
    output.writeListBegin(Thrift.Type.DOUBLE, this.doubleValues.length);
    for (var iter46 in this.doubleValues)
    {
      if (this.doubleValues.hasOwnProperty(iter46))
      {
        iter46 = this.doubleValues[iter46];
        output.writeDouble(iter46);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.doubleValue !== null && this.doubleValue !== undefined) {
    output.writeFieldBegin('doubleValue', Thrift.Type.DOUBLE, 15);
    output.writeDouble(this.doubleValue);
    output.writeFieldEnd();
  }
  if (this.stringValues !== null && this.stringValues !== undefined) {
    output.writeFieldBegin('stringValues', Thrift.Type.LIST, 16);
    output.writeListBegin(Thrift.Type.STRING, this.stringValues.length);
    for (var iter47 in this.stringValues)
    {
      if (this.stringValues.hasOwnProperty(iter47))
      {
        iter47 = this.stringValues[iter47];
        output.writeString(iter47);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.stringValue !== null && this.stringValue !== undefined) {
    output.writeFieldBegin('stringValue', Thrift.Type.STRING, 17);
    output.writeString(this.stringValue);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TTree = module.exports.TTree = function(args) {
  this.path = null;
  this.root = null;
  this.exists = null;
  this.name = null;
  this.status = null;
  if (args) {
    if (args.path !== undefined) {
      this.path = args.path;
    }
    if (args.root !== undefined) {
      this.root = args.root;
    }
    if (args.exists !== undefined) {
      this.exists = args.exists;
    }
    if (args.name !== undefined) {
      this.name = args.name;
    }
    if (args.status !== undefined) {
      this.status = args.status;
    }
  }
};
TTree.prototype = {};
TTree.prototype.read = function(input) {
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
        this.path = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.BOOL) {
        this.root = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.BOOL) {
        this.exists = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I32) {
        this.status = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TTree.prototype.write = function(output) {
  output.writeStructBegin('TTree');
  if (this.path !== null && this.path !== undefined) {
    output.writeFieldBegin('path', Thrift.Type.STRING, 1);
    output.writeString(this.path);
    output.writeFieldEnd();
  }
  if (this.root !== null && this.root !== undefined) {
    output.writeFieldBegin('root', Thrift.Type.BOOL, 2);
    output.writeBool(this.root);
    output.writeFieldEnd();
  }
  if (this.exists !== null && this.exists !== undefined) {
    output.writeFieldBegin('exists', Thrift.Type.BOOL, 3);
    output.writeBool(this.exists);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 4);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.status !== null && this.status !== undefined) {
    output.writeFieldBegin('status', Thrift.Type.I32, 5);
    output.writeI32(this.status);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};
