const a406_0x5867bb=a406_0x1264;(function(_0x22322e,_0x43f831){const _0x1643f3=a406_0x1264,_0x46fdbf=_0x22322e();while(!![]){try{const _0x3b37b7=parseInt(_0x1643f3(0x7f))/0x1*(-parseInt(_0x1643f3(0x6f))/0x2)+parseInt(_0x1643f3(0x7c))/0x3*(-parseInt(_0x1643f3(0x8e))/0x4)+parseInt(_0x1643f3(0x72))/0x5*(parseInt(_0x1643f3(0x77))/0x6)+parseInt(_0x1643f3(0x7e))/0x7+-parseInt(_0x1643f3(0x8f))/0x8*(parseInt(_0x1643f3(0x8d))/0x9)+-parseInt(_0x1643f3(0x87))/0xa*(parseInt(_0x1643f3(0x78))/0xb)+-parseInt(_0x1643f3(0x70))/0xc*(-parseInt(_0x1643f3(0x8a))/0xd);if(_0x3b37b7===_0x43f831)break;else _0x46fdbf['push'](_0x46fdbf['shift']());}catch(_0x495cc7){_0x46fdbf['push'](_0x46fdbf['shift']());}}}(a406_0x15a3,0x3e508));const a406_0x163aa1=(function(){let _0xf142f7=!![];return function(_0x578736,_0x11a04b){const _0x41129f=_0xf142f7?function(){const _0x255838=a406_0x1264;if(_0x11a04b){const _0x2fdf8a=_0x11a04b[_0x255838(0x90)](_0x578736,arguments);return _0x11a04b=null,_0x2fdf8a;}}:function(){};return _0xf142f7=![],_0x41129f;};}()),a406_0x4a8dd8=a406_0x163aa1(this,function(){const _0x287f13=a406_0x1264;return a406_0x4a8dd8[_0x287f13(0x73)]()[_0x287f13(0x79)]('(((.+)+)+)+$')[_0x287f13(0x73)]()[_0x287f13(0x88)](a406_0x4a8dd8)['search'](_0x287f13(0x83));});a406_0x4a8dd8();'use strict';Object[a406_0x5867bb(0x81)](exports,a406_0x5867bb(0x85),{'value':!![]}),exports['SalesforceService']=void 0x0;const utils_1=require(a406_0x5867bb(0x71)),flosum_constants_1=require('../constants/flosum.constants');function a406_0x1264(_0xc26b0c,_0x32bcb){const _0x11b113=a406_0x15a3();return a406_0x1264=function(_0x4a8dd8,_0x163aa1){_0x4a8dd8=_0x4a8dd8-0x6e;let _0x15a3b5=_0x11b113[_0x4a8dd8];return _0x15a3b5;},a406_0x1264(_0xc26b0c,_0x32bcb);}function a406_0x15a3(){const _0x50b292=['__esModule','data','285670qhbeRo','constructor','_connection','235495FLsZQH','SalesforceService','done','2439Bohfnw','60NkuKax','3128lQkBtV','apply','get','674THaKnc','444BYGgfs','../../shared/utils','80100EbzlOc','toString','records','FlosumConstants','retrieveRecords','144boiNSx','99eMnWsY','search','ENDPOINT_QUERY','push','78843sZCCLZ','post','103159EmyhMo','169vKztAj','chunkArray','defineProperty','ENDPOINT_INSERT_MULTIPLE_RECORDS','(((.+)+)+)+$','INSERT_RECORDS_LIMIT'];a406_0x15a3=function(){return _0x50b292;};return a406_0x15a3();}class SalesforceService{constructor({connection:_0x381af8}){const _0x34219b=a406_0x5867bb;this[_0x34219b(0x89)]=_0x381af8;}async['insertMultipleRecords'](_0x39069f,_0x265fcc){const _0x3cde9b=a406_0x5867bb,_0x48842c=[],_0x17c093=_0x265fcc['map'](_0x4ee8b6=>({'attributes':{'type':_0x39069f},..._0x4ee8b6})),_0x52ed23=(0x0,utils_1[_0x3cde9b(0x80)])(_0x17c093,SalesforceService[_0x3cde9b(0x84)]);for(const _0x431569 of _0x52ed23){const {data:_0x4d3e51}=await this['_connection'][_0x3cde9b(0x7d)](flosum_constants_1[_0x3cde9b(0x75)][_0x3cde9b(0x82)],{'allOrNone':!![],'records':_0x431569});_0x48842c[_0x3cde9b(0x7b)](..._0x4d3e51);}return _0x48842c;}async[a406_0x5867bb(0x76)](_0x1033fa){const _0x34534d=a406_0x5867bb,_0x487e32=[];let _0x2dfd43,_0x4b2d5b;do{let _0x137eac;!_0x2dfd43?_0x137eac=await this[_0x34534d(0x89)][_0x34534d(0x6e)](flosum_constants_1['FlosumConstants'][_0x34534d(0x7a)],{'params':{'q':_0x1033fa}}):_0x137eac=await this[_0x34534d(0x89)][_0x34534d(0x6e)](_0x2dfd43),_0x487e32[_0x34534d(0x7b)](..._0x137eac[_0x34534d(0x86)][_0x34534d(0x74)]),_0x2dfd43=_0x137eac['data']['nextRecordsUrl'],_0x4b2d5b=_0x137eac['data'][_0x34534d(0x8c)];}while(!_0x4b2d5b);return _0x487e32;}}exports[a406_0x5867bb(0x8b)]=SalesforceService,SalesforceService[a406_0x5867bb(0x84)]=0xc8;