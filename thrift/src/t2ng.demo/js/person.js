var person = require ('t2ng.demo/person');
exports.TPersonLookupRequest = (function () { function TPersonLookupRequest (args) {
  this.role = null;
  this.limit = null;
  if (args) {
    if (args.role !== undefined && args.role !== null) {
      this.role = args.role;
    }
    if (args.limit !== undefined && args.limit !== null) {
      this.limit = args.limit;
    }
  }
}
TPersonLookupRequest.prototype = {};
TPersonLookupRequest.prototype.read = function(input) {
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
        this.role = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.limit = input.readI32().value;
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
TPersonLookupRequest.prototype.write = function(output) {
  output.writeStructBegin('TPersonLookupRequest');
  if (this.role !== null && this.role !== undefined) {
    output.writeFieldBegin('role', Thrift.Type.STRING, 1);
    output.writeString(this.role);
    output.writeFieldEnd();
  }
  if (this.limit !== null && this.limit !== undefined) {
    output.writeFieldBegin('limit', Thrift.Type.I32, 2);
    output.writeI32(this.limit);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};
return TPersonLookupRequest;
}());
exports.TPerson = (function () { function TPerson (args) {
  this.name = null;
  this.age = null;
  if (args) {
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.age !== undefined && args.age !== null) {
      this.age = args.age;
    }
  }
}
TPerson.prototype = {};
TPerson.prototype.read = function(input) {
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
        this.name = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.age = input.readI32().value;
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
TPerson.prototype.write = function(output) {
  output.writeStructBegin('TPerson');
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 1);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.age !== null && this.age !== undefined) {
    output.writeFieldBegin('age', Thrift.Type.I32, 2);
    output.writeI32(this.age);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};
return TPerson;
}());
exports.TPersonServiceClient = (function () { 
function TPersonServiceClient (input, output) {
    this.input = input;
    this.output = (!output) ? input : output;
    this.seqid = 0;
}

person.TPersonService_find_args = function(args) {
  this.request = null;
  if (args) {
    if (args.request !== undefined && args.request !== null) {
      this.request = new person.TPersonLookupRequest(args.request);
    }
  }
};

person.TPersonService_find_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.request = new person.TPersonLookupRequest();
        this.request.read(input);
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

person.TPersonService_find_args.prototype.write = function(output) {
  output.writeStructBegin('TPersonService_find_args');
  if (this.request !== null && this.request !== undefined) {
    output.writeFieldBegin('request', Thrift.Type.STRUCT, 1);
    this.request.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

person.TPersonService_find_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new person.TPerson(args.success);
    }
  }
};

person.TPersonService_find_result.prototype.read = function(input) {
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
        this.success = new person.TPerson();
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

person.TPersonService_find_result.prototype.write = function(output) {
  output.writeStructBegin('TPersonService_find_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};
TPersonServiceClient.prototype = {};
TPersonServiceClient.prototype.find = function(request, callback) {
  this.send_find(request, callback); 
  if (!callback) {
    return this.recv_find();
  }
};
TPersonServiceClient.prototype.send_find = function(request, callback) {
  this.output.writeMessageBegin('find', Thrift.MessageType.CALL, this.seqid);
  var args = new person.TPersonService_find_args();
  args.request = request;
  args.write(this.output);
  this.output.writeMessageEnd();
  if (callback) {
    var self = this;
    this.output.getTransport().flush(true, function() {
      var result = null;
      try {
        result = self.recv_find();
      } catch (e) {
        result = e;
      }
      callback(result);
    });
  } else {
    return this.output.getTransport().flush();
  }
};
TPersonServiceClient.prototype.recv_find = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new person.TPersonService_find_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.success) {
    return result.success;
  }
  throw 'find failed: unknown result';
};
return TPersonServiceClient;
}());
