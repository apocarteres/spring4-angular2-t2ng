declare module 't2ng.demo/person' {

export class TPersonServiceClient {
input: Thrift.TJSONProtocol;
output: Thrift.TJSONProtocol;
seqid: number;
constructor(input: Thrift.TJSONProtocol, output?: Thrift.TJSONProtocol);
find(request: TPersonLookupRequest): TPerson;
find(request: TPersonLookupRequest, callback: Function): void;
}
export class TPersonLookupRequest {
role: string;
limit: number;
constructor(args?: { role: string; limit: number; });
}
export class TPerson {
name: string;
age: number;
constructor(args?: { name: string; age: number; });
}
}