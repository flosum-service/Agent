function a287_0x2dbc(){const _0x1c0028=['/query/','search','apply','post','fetchAttachmentBody','chunkArray','/body','fetchAttachmentsDetailsById','260ZqCmEf','3004476YZujfO','ParentId','71076uGrhbB','__esModule','push','SALESFORCE_API_VERSION','/services/data/','1359198lHKNXB','/sobjects/Attachment/','Body','../../functions/utils/salesforce-request','1929sHbrBB','retrieveAttachments','BodyLength','Attachment','79857StXXtM','/services/apexrest','get','base64','435mZyBLx','../../../constants','fetchAttachments','namespace','5611312tmdPpi','defineProperty','740JKcUbN','toString','fetchAttachmentsDetailsByParentId','15481697eHHZpX','records','(((.+)+)+)+$','8NDZnBr','\x27,\x27','\x20IN\x20(','arraybuffer'];a287_0x2dbc=function(){return _0x1c0028;};return a287_0x2dbc();}const a287_0x438dc3=a287_0x2e1a;(function(_0x19bded,_0x32d370){const _0x2ce208=a287_0x2e1a,_0x466740=_0x19bded();while(!![]){try{const _0xe3d3e3=parseInt(_0x2ce208(0x151))/0x1*(-parseInt(_0x2ce208(0x145))/0x2)+-parseInt(_0x2ce208(0x14d))/0x3+parseInt(_0x2ce208(0x146))/0x4+parseInt(_0x2ce208(0x159))/0x5*(-parseInt(_0x2ce208(0x148))/0x6)+-parseInt(_0x2ce208(0x131))/0x7*(-parseInt(_0x2ce208(0x139))/0x8)+parseInt(_0x2ce208(0x155))/0x9*(-parseInt(_0x2ce208(0x133))/0xa)+parseInt(_0x2ce208(0x136))/0xb;if(_0xe3d3e3===_0x32d370)break;else _0x466740['push'](_0x466740['shift']());}catch(_0x1b3834){_0x466740['push'](_0x466740['shift']());}}}(a287_0x2dbc,0x8af22));const a287_0x3d030b=(function(){let _0x3712aa=!![];return function(_0x22339f,_0x6c663f){const _0x5777e1=_0x3712aa?function(){const _0x56cd59=a287_0x2e1a;if(_0x6c663f){const _0x30a6e=_0x6c663f[_0x56cd59(0x13f)](_0x22339f,arguments);return _0x6c663f=null,_0x30a6e;}}:function(){};return _0x3712aa=![],_0x5777e1;};}()),a287_0x4a69d5=a287_0x3d030b(this,function(){const _0x17a65e=a287_0x2e1a;return a287_0x4a69d5['toString']()[_0x17a65e(0x13e)](_0x17a65e(0x138))[_0x17a65e(0x134)]()['constructor'](a287_0x4a69d5)[_0x17a65e(0x13e)]('(((.+)+)+)+$');});a287_0x4a69d5();'use strict';Object[a287_0x438dc3(0x132)](exports,a287_0x438dc3(0x149),{'value':!![]}),exports['fetchAttachments']=exports[a287_0x438dc3(0x141)]=exports[a287_0x438dc3(0x135)]=exports['fetchAttachmentsDetailsById']=exports[a287_0x438dc3(0x152)]=void 0x0;const index_1=require('./index'),constants_1=require(a287_0x438dc3(0x15a)),salesforce_request_1=require(a287_0x438dc3(0x150)),CHUNK_QUERY_SIZE=0x1f4,REST_ATTACHMENT_MAX_SIZE=0x200000,REST_ATTACHMENT_COUNT=0x64,BINARY_FIELDS=[a287_0x438dc3(0x14f)],FIELD_PARENT_ID=a287_0x438dc3(0x147),FIELD_ID='Id';async function retrieveAttachments(_0x1d1602,_0x4e3207){const _0x3f1396=a287_0x438dc3;let _0x57a1d3=0x0,_0x5a6f87=0x0,_0x4da3f0=[];const _0x2dd674=[];for(const _0x3bd4fd of _0x1d1602){if(_0x3bd4fd[_0x3f1396(0x153)]>REST_ATTACHMENT_MAX_SIZE){const _0x42ab64=await fetchAttachmentBody(_0x4e3207,_0x3bd4fd['Id']);_0x2dd674[_0x3f1396(0x14a)]({'id':_0x3bd4fd['Id'],'values':{'Body':_0x42ab64[_0x3f1396(0x134)](_0x3f1396(0x158))}});continue;}if(_0x3bd4fd[_0x3f1396(0x153)]+_0x57a1d3>REST_ATTACHMENT_MAX_SIZE||_0x5a6f87+0x1>=REST_ATTACHMENT_COUNT){const _0x5ed5a5=await fetchAttachments(_0x4e3207,BINARY_FIELDS,_0x4da3f0);_0x2dd674[_0x3f1396(0x14a)](..._0x5ed5a5),_0x4da3f0=[],_0x57a1d3=0x0,_0x5a6f87=0x0;}_0x4da3f0[_0x3f1396(0x14a)](_0x3bd4fd['Id']),_0x57a1d3+=_0x3bd4fd[_0x3f1396(0x153)],_0x5a6f87++;}if(_0x4da3f0['length']){const _0x3fab5d=await fetchAttachments(_0x4e3207,BINARY_FIELDS,_0x4da3f0);_0x2dd674['push'](..._0x3fab5d);}return _0x2dd674;}exports['retrieveAttachments']=retrieveAttachments;function a287_0x2e1a(_0x2ecb22,_0x2fc159){const _0x17a122=a287_0x2dbc();return a287_0x2e1a=function(_0x4a69d5,_0x3d030b){_0x4a69d5=_0x4a69d5-0x12f;let _0x2dbc9d=_0x17a122[_0x4a69d5];return _0x2dbc9d;},a287_0x2e1a(_0x2ecb22,_0x2fc159);}function fetchAttachmentsDetailsById(_0x1fa6a2,_0x4c2f74){return fetchAttachmentsDetails(_0x1fa6a2,FIELD_ID,_0x4c2f74);}exports[a287_0x438dc3(0x144)]=fetchAttachmentsDetailsById;function fetchAttachmentsDetailsByParentId(_0x1db92f,_0x109bd0){return fetchAttachmentsDetails(_0x1db92f,FIELD_PARENT_ID,_0x109bd0);}exports[a287_0x438dc3(0x135)]=fetchAttachmentsDetailsByParentId;async function fetchAttachmentsDetails(_0x27578d,_0x5846a7,_0x3a8694){const _0x408a58=a287_0x438dc3,_0x5ab47d=[],_0x29c45c=(0x0,index_1[_0x408a58(0x142)])(_0x3a8694,CHUNK_QUERY_SIZE);for(const _0x348492 of _0x29c45c){const _0x370cf4='\x0a\x20\x20\x20\x20\x20\x20SELECT\x20Id,\x20Name,\x20BodyLength,\x20ParentId\x0a\x20\x20\x20\x20\x20\x20FROM\x20Attachment\x0a\x20\x20\x20\x20\x20\x20WHERE\x20'+_0x5846a7+_0x408a58(0x13b)+('\x27'+_0x348492['join'](_0x408a58(0x13a))+'\x27')+')',{data:_0x45905e}=await _0x27578d[_0x408a58(0x157)](_0x408a58(0x14c)+constants_1[_0x408a58(0x14b)]+_0x408a58(0x13d),{'params':{'q':_0x370cf4}});_0x5ab47d[_0x408a58(0x14a)](..._0x45905e[_0x408a58(0x137)]);}return _0x5ab47d;}async function fetchAttachmentBody(_0x1f2079,_0x3c3e25){const _0x1b21b0=a287_0x438dc3,{data:_0x1a0fea}=await _0x1f2079[_0x1b21b0(0x157)](_0x1b21b0(0x14c)+constants_1[_0x1b21b0(0x14b)]+_0x1b21b0(0x14e)+_0x3c3e25+_0x1b21b0(0x143),{'responseType':_0x1b21b0(0x13c)});return _0x1a0fea;}exports[a287_0x438dc3(0x141)]=fetchAttachmentBody;async function fetchAttachments(_0x17125e,_0x5bd5a0,_0x5b44a0){const _0x4e4a6e=a287_0x438dc3,{data:_0x44f459}=await _0x17125e[_0x4e4a6e(0x140)](_0x4e4a6e(0x156)+salesforce_request_1[_0x4e4a6e(0x130)]+'/retrieveAttachments/',{'objectName':_0x4e4a6e(0x154),'binaryFields':_0x5bd5a0,'recordIds':_0x5b44a0});return _0x44f459;}exports[a287_0x438dc3(0x12f)]=fetchAttachments;