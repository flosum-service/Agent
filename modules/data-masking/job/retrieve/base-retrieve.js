function a75_0x20fc(){const _0x4992a7=['506240hSCttF','1281174IBmNoT','_read','defineProperty','QueryBuilder','toString','select','SALESFORCE_API_VERSION','request','20MDhLYm','2829048iEoHeM','whereClause','8977184PtmmpP','from','(((.+)+)+)+$','apply','search','BaseRetrieve','30451689zTulsC','441naqKvc','fields','26472RhTgKI','pull','532065rpFwKe','queryBuilder','constructor','baseRetrievePayload'];a75_0x20fc=function(){return _0x4992a7;};return a75_0x20fc();}const a75_0x56fb10=a75_0xde42;(function(_0x3772d3,_0x4f4cd8){const _0xfd141b=a75_0xde42,_0x1a5edd=_0x3772d3();while(!![]){try{const _0x333727=parseInt(_0xfd141b(0x1bc))/0x1+parseInt(_0xfd141b(0x1c1))/0x2+parseInt(_0xfd141b(0x1af))/0x3+-parseInt(_0xfd141b(0x1c0))/0x4*(-parseInt(_0xfd141b(0x1ae))/0x5)+parseInt(_0xfd141b(0x1ba))/0x6*(parseInt(_0xfd141b(0x1b8))/0x7)+parseInt(_0xfd141b(0x1b1))/0x8+-parseInt(_0xfd141b(0x1b7))/0x9;if(_0x333727===_0x4f4cd8)break;else _0x1a5edd['push'](_0x1a5edd['shift']());}catch(_0x544631){_0x1a5edd['push'](_0x1a5edd['shift']());}}}(a75_0x20fc,0x9be1b));const a75_0x228c38=(function(){let _0x3fb0f8=!![];return function(_0x3ed9f0,_0x598198){const _0x4eddca=_0x3fb0f8?function(){const _0x5d4b13=a75_0xde42;if(_0x598198){const _0x4757c7=_0x598198[_0x5d4b13(0x1b4)](_0x3ed9f0,arguments);return _0x598198=null,_0x4757c7;}}:function(){};return _0x3fb0f8=![],_0x4eddca;};}()),a75_0x2238b7=a75_0x228c38(this,function(){const _0x50ee39=a75_0xde42;return a75_0x2238b7[_0x50ee39(0x1c5)]()[_0x50ee39(0x1b5)](_0x50ee39(0x1b3))[_0x50ee39(0x1c5)]()[_0x50ee39(0x1be)](a75_0x2238b7)[_0x50ee39(0x1b5)](_0x50ee39(0x1b3));});function a75_0xde42(_0x3b723a,_0x4b81a7){const _0x3b0d82=a75_0x20fc();return a75_0xde42=function(_0x2238b7,_0x228c38){_0x2238b7=_0x2238b7-0x1ae;let _0x20fc1e=_0x3b0d82[_0x2238b7];return _0x20fc1e;},a75_0xde42(_0x3b723a,_0x4b81a7);}a75_0x2238b7();'use strict';Object[a75_0x56fb10(0x1c3)](exports,'__esModule',{'value':!![]}),exports[a75_0x56fb10(0x1b6)]=void 0x0;const stream_1=require('stream'),salesforce_1=require('@flosum/salesforce'),constants_1=require('../../constants'),FIELD_ID='Id';class BaseRetrieve extends stream_1['Readable']{constructor({request:_0x56a837,fields:_0x3ef50d,whereClause:_0x31b0e7,objectName:_0x49c920,describe:_0x471f2d}){const _0x39cd13=a75_0x56fb10;super({'objectMode':!![]}),this['queryBuilder']=new salesforce_1[(_0x39cd13(0x1c4))]()[_0x39cd13(0x1c6)](FIELD_ID,..._0x3ef50d)[_0x39cd13(0x1b2)](_0x49c920),_0x31b0e7&&this[_0x39cd13(0x1bd)]['where'](''+_0x31b0e7),this[_0x39cd13(0x1c8)]=_0x56a837,this[_0x39cd13(0x1b9)]=_0x3ef50d,this[_0x39cd13(0x1b0)]=_0x31b0e7,this['objectName']=_0x49c920,this['describe']=_0x471f2d;}get[a75_0x56fb10(0x1bf)](){const _0x1157a5=a75_0x56fb10;return{'queryBuilder':this[_0x1157a5(0x1bd)],'instance':this[_0x1157a5(0x1c8)],'api':constants_1[_0x1157a5(0x1c7)]};}async[a75_0x56fb10(0x1c2)](){const _0x34432e=a75_0x56fb10;try{await this[_0x34432e(0x1bb)]();}catch(_0x9db314){this['destroy'](_0x9db314);}}}exports[a75_0x56fb10(0x1b6)]=BaseRetrieve;