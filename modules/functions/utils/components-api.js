function a90_0x39eb(){const _0x4a0ccc=['../../shared/utils','removeNamespacePrefix','getData','extractFieldsFromRecord','length','1003324uDRQiW','base64','Component__r','fetchComponentsDetailsByComponentsHistory','../../git/salesforce/utils/flosum-naming.utils','Component_Type__c\x0a\x20\x20\x20\x20\x20\x20FROM\x20','map','270282fgHxSK','3091653vKMyJM','MAX_ZIP_SIZE','\x27,\x27','toString','addFile','FLOSUM_NAMESPACE','filter','push','112pWLXZv','9301968jHcRMd','search','chunkArray','(((.+)+)+)+$','sort','2yGNZhA','splitZip','default','Component_Name__c','getEntry','getEntries','5JedOqc','__esModule','Component_Name__c,\x20','/query/','4781886SfrwwF','__importDefault','685336TuXqcB','50610620KyHCHm','Component__r.','ComponentsApi','constructor','records','deleteFile'];a90_0x39eb=function(){return _0x4a0ccc;};return a90_0x39eb();}const a90_0x28dfb8=a90_0x24a7;(function(_0xda21f,_0x1f88a4){const _0x3bd00d=a90_0x24a7,_0x53fb3e=_0xda21f();while(!![]){try{const _0x531a4d=parseInt(_0x3bd00d(0x1d2))/0x1+parseInt(_0x3bd00d(0x1b3))/0x2*(-parseInt(_0x3bd00d(0x1d3))/0x3)+-parseInt(_0x3bd00d(0x1cb))/0x4+parseInt(_0x3bd00d(0x1b9))/0x5*(-parseInt(_0x3bd00d(0x1bd))/0x6)+parseInt(_0x3bd00d(0x1db))/0x7*(-parseInt(_0x3bd00d(0x1bf))/0x8)+-parseInt(_0x3bd00d(0x1dc))/0x9+parseInt(_0x3bd00d(0x1c0))/0xa;if(_0x531a4d===_0x1f88a4)break;else _0x53fb3e['push'](_0x53fb3e['shift']());}catch(_0x4d3b1f){_0x53fb3e['push'](_0x53fb3e['shift']());}}}(a90_0x39eb,0xcf375));const a90_0x1c858f=(function(){let _0xc21911=!![];return function(_0x3be2e6,_0x25bb93){const _0x16a8dc=_0xc21911?function(){if(_0x25bb93){const _0x1ff8c5=_0x25bb93['apply'](_0x3be2e6,arguments);return _0x25bb93=null,_0x1ff8c5;}}:function(){};return _0xc21911=![],_0x16a8dc;};}()),a90_0xd1b19c=a90_0x1c858f(this,function(){const _0x5c6f2e=a90_0x24a7;return a90_0xd1b19c[_0x5c6f2e(0x1d6)]()[_0x5c6f2e(0x1af)](_0x5c6f2e(0x1b1))['toString']()[_0x5c6f2e(0x1c3)](a90_0xd1b19c)[_0x5c6f2e(0x1af)](_0x5c6f2e(0x1b1));});a90_0xd1b19c();'use strict';var __importDefault=this&&this[a90_0x28dfb8(0x1be)]||function(_0x1f40e2){const _0x190cb2=a90_0x28dfb8;return _0x1f40e2&&_0x1f40e2[_0x190cb2(0x1ba)]?_0x1f40e2:{'default':_0x1f40e2};};Object['defineProperty'](exports,a90_0x28dfb8(0x1ba),{'value':!![]}),exports['ComponentsApi']=exports[a90_0x28dfb8(0x1d4)]=void 0x0;const utils_1=require(a90_0x28dfb8(0x1c6)),constants_1=require('../../../constants'),flosum_naming_utils_1=require(a90_0x28dfb8(0x1cf)),adm_zip_1=__importDefault(require('adm-zip')),CHUNK_QUERY_SIZE=0x1f4;function a90_0x24a7(_0x312b2e,_0x5e1b2d){const _0x1ad077=a90_0x39eb();return a90_0x24a7=function(_0xd1b19c,_0x1c858f){_0xd1b19c=_0xd1b19c-0x1af;let _0x39eb76=_0x1ad077[_0xd1b19c];return _0x39eb76;},a90_0x24a7(_0x312b2e,_0x5e1b2d);}exports['MAX_ZIP_SIZE']=0x2100000;class ComponentsApi{static async[a90_0x28dfb8(0x1ce)](_0x3cc814,_0x4a1409,_0x2ddd81){const _0x4caef5=a90_0x28dfb8,_0x496afd=[],_0x5d1407=(0x0,utils_1[_0x4caef5(0x1b0)])(_0x4a1409,CHUNK_QUERY_SIZE);for(const _0x181403 of _0x5d1407){const _0x587ae3='\x0a\x20\x20\x20\x20\x20\x20SELECT\x20Id,\x20'+constants_1['FLOSUM_NAMESPACE']+'Component__r.'+constants_1['FLOSUM_NAMESPACE']+_0x4caef5(0x1bb)+constants_1['FLOSUM_NAMESPACE']+_0x4caef5(0x1c1)+constants_1[_0x4caef5(0x1d8)]+_0x4caef5(0x1d0)+constants_1[_0x4caef5(0x1d8)]+'Component_History__c\x0a\x20\x20\x20\x20\x20\x20WHERE\x20Id\x20IN\x20('+('\x27'+_0x181403['join'](_0x4caef5(0x1d5))+'\x27')+')',{data:_0x36bae1}=await _0x3cc814['get']('/services/data/v'+_0x2ddd81+_0x4caef5(0x1bc),{'params':{'q':_0x587ae3}});_0x496afd[_0x4caef5(0x1da)](..._0x36bae1[_0x4caef5(0x1c4)]);}return _0x496afd;}static[a90_0x28dfb8(0x1c7)](_0x40fb65){const _0x4878e9=a90_0x28dfb8,_0x57c249=_0x40fb65[_0x4878e9(0x1d1)](_0x3470db=>{const _0x1d1c3e=_0x4878e9,_0x126e50=(0x0,flosum_naming_utils_1[_0x1d1c3e(0x1c9)])(_0x3470db,['Id',_0x1d1c3e(0x1cd)]);return _0x126e50[_0x1d1c3e(0x1cd)]=(0x0,flosum_naming_utils_1[_0x1d1c3e(0x1c9)])(_0x126e50[_0x1d1c3e(0x1cd)],[_0x1d1c3e(0x1b6),'Component_Type__c']),_0x126e50;});return _0x57c249;}static async[a90_0x28dfb8(0x1b4)](_0x8ebb8c,_0x2d98e7){const _0x26a21a=a90_0x28dfb8;var _0x350178;const _0x5c9669=_0x8ebb8c[_0x26a21a(0x1b8)]()[_0x26a21a(0x1d9)](_0x396131=>!_0x396131['isDirectory'])[_0x26a21a(0x1b2)]((_0x1fe328,_0x322b98)=>_0x1fe328[_0x26a21a(0x1c8)]()[_0x26a21a(0x1ca)]>_0x322b98[_0x26a21a(0x1c8)]()[_0x26a21a(0x1ca)]?-0x1:0x1),_0x1d5376=new adm_zip_1[(_0x26a21a(0x1b5))]();for(const {entryName:_0x589136}of _0x5c9669){const _0x18d42f=(_0x350178=_0x8ebb8c[_0x26a21a(0x1b7)](_0x589136))===null||_0x350178===void 0x0?void 0x0:_0x350178[_0x26a21a(0x1c8)]();_0x1d5376[_0x26a21a(0x1d7)](_0x589136,_0x18d42f),_0x8ebb8c[_0x26a21a(0x1c5)](_0x589136);if(_0x2d98e7-_0x1d5376['toBuffer']()[_0x26a21a(0x1d6)](_0x26a21a(0x1cc))['length']<exports[_0x26a21a(0x1d4)])break;}return[_0x8ebb8c,_0x1d5376];}}exports[a90_0x28dfb8(0x1c2)]=ComponentsApi;