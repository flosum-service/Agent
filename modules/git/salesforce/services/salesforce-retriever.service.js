function a190_0x1a68(){const _0x365653=['../queries','fileName','retrieveLastComponents','GET_COMPONENT_HISTORIES_BY_IDS','components','filename','manually\x20retrieving\x20component\x20ids\x20from\x20history\x20ids\x20(%d)','%parent_ids%','all','push','__esModule','run','336708AhYPfm','fileType','find','toString','manually\x20retrieving\x20components\x20from\x20salesforce','./salesforce-query.service','Name','length','2072KdbiHs','logger','default','SalesforceRetrieverService','../../../../core','log','%ids%','retrieved\x20%d/%d\x20components\x20from\x20salesforce\x20rest','info','88253LDYaEI','replace','retrieveComponentIdsFromHistoryIds','7755limvJt','1027816wfsVRq','salesforceService','ids','3877560KFsWKr','14462nYecvY','splice','__importDefault','(((.+)+)+)+$','join','typedi','2196uwOFOl','search','COMPONENTS_PER_REQUEST','COMPONENTS_PER_QUERY','1620jGXJuZ','2WyXxWL','160wGHlCX','fromSalesforce','5109020etjxCw','../dto/flosum-component-history.dto','attachmentId','then','map','query','retrieveComponents','constructor'];a190_0x1a68=function(){return _0x365653;};return a190_0x1a68();}const a190_0x3e54d7=a190_0x18ac;(function(_0x253c82,_0x57bc0c){const _0x4db940=a190_0x18ac,_0x416af8=_0x253c82();while(!![]){try{const _0x490088=parseInt(_0x4db940(0xe4))/0x1*(parseInt(_0x4db940(0xd5))/0x2)+-parseInt(_0x4db940(0xd4))/0x3*(parseInt(_0x4db940(0xe3))/0x4)+-parseInt(_0x4db940(0xe5))/0x5*(-parseInt(_0x4db940(0xfb))/0x6)+parseInt(_0x4db940(0xd9))/0x7*(parseInt(_0x4db940(0x103))/0x8)+-parseInt(_0x4db940(0xd8))/0x9+parseInt(_0x4db940(0xe7))/0xa+-parseInt(_0x4db940(0xd1))/0xb*(parseInt(_0x4db940(0xdf))/0xc);if(_0x490088===_0x57bc0c)break;else _0x416af8['push'](_0x416af8['shift']());}catch(_0x2c746d){_0x416af8['push'](_0x416af8['shift']());}}}(a190_0x1a68,0xe17de));const a190_0xa254b5=(function(){let _0x1a2edb=!![];return function(_0x2a64ad,_0x22d689){const _0x547d93=_0x1a2edb?function(){if(_0x22d689){const _0x361756=_0x22d689['apply'](_0x2a64ad,arguments);return _0x22d689=null,_0x361756;}}:function(){};return _0x1a2edb=![],_0x547d93;};}()),a190_0x3a7e43=a190_0xa254b5(this,function(){const _0x4b92bb=a190_0x18ac;return a190_0x3a7e43[_0x4b92bb(0xfe)]()['search'](_0x4b92bb(0xdc))[_0x4b92bb(0xfe)]()[_0x4b92bb(0xee)](a190_0x3a7e43)[_0x4b92bb(0xe0)]('(((.+)+)+)+$');});a190_0x3a7e43();'use strict';function a190_0x18ac(_0x375edf,_0x35a11c){const _0x587aca=a190_0x1a68();return a190_0x18ac=function(_0x3a7e43,_0xa254b5){_0x3a7e43=_0x3a7e43-0xd1;let _0x1a6806=_0x587aca[_0x3a7e43];return _0x1a6806;},a190_0x18ac(_0x375edf,_0x35a11c);}var __importDefault=this&&this[a190_0x3e54d7(0xdb)]||function(_0x11b29d){const _0x1174e0=a190_0x3e54d7;return _0x11b29d&&_0x11b29d[_0x1174e0(0xf9)]?_0x11b29d:{'default':_0x11b29d};};Object['defineProperty'](exports,a190_0x3e54d7(0xf9),{'value':!![]}),exports[a190_0x3e54d7(0x106)]=void 0x0;const core_1=require(a190_0x3e54d7(0x107)),typedi_1=__importDefault(require(a190_0x3e54d7(0xde))),salesforce_query_service_1=require(a190_0x3e54d7(0x100)),queries_1=require(a190_0x3e54d7(0xef)),flosum_component_history_dto_1=require(a190_0x3e54d7(0xe8));class SalesforceRetrieverService{constructor(_0x33ab3b){const _0x3b9a6b=a190_0x3e54d7;this[_0x3b9a6b(0xd6)]=_0x33ab3b,this[_0x3b9a6b(0x104)]=new core_1['Logger'](SalesforceRetrieverService['name']),this['COMPONENTS_PER_REQUEST']=0xbb8,this['COMPONENTS_PER_QUERY']=0x1f4;}async['retrieveComponentIdsFromHistoryIds'](_0x454a69){const _0x2df596=a190_0x3e54d7;this[_0x2df596(0x104)][_0x2df596(0x10b)](_0x2df596(0xf5),_0x454a69['length']);const _0x123cfc=typedi_1[_0x2df596(0x105)]['get'](salesforce_query_service_1['SalesforceQueryService']),_0x2863c9=_0x454a69['map'](_0x1e02c6=>'\x27'+_0x1e02c6+'\x27'),_0x47b12a=[];while(_0x2863c9[_0x2df596(0x102)]){const _0x59b0e0=_0x2863c9[_0x2df596(0xda)](0x0,this[_0x2df596(0xe2)]),_0x4d9b7d=_0x123cfc[_0x2df596(0xec)](queries_1['GET_ATTACHMENT_BY_PARENT_IDS_QUERY'][_0x2df596(0xd2)](_0x2df596(0xf6),_0x59b0e0[_0x2df596(0xdd)]())),_0x242307=_0x123cfc['query'](queries_1[_0x2df596(0xf2)]['replace'](_0x2df596(0x109),_0x59b0e0['join']()))[_0x2df596(0xea)](_0x5e8c96=>_0x5e8c96[_0x2df596(0xeb)](_0x21a004=>flosum_component_history_dto_1['FlosumComponentHistoryDto'][_0x2df596(0xe6)](_0x21a004))),[_0x4a1eff,_0x3e71d3]=await Promise[_0x2df596(0xf7)]([_0x4d9b7d,_0x242307]);for(const _0x10453b of _0x3e71d3){const _0x147cc1=_0x4a1eff[_0x2df596(0xfd)](_0x5b314f=>_0x5b314f['ParentId']===_0x10453b['id']);_0x147cc1&&_0x47b12a['push']({'fileType':_0x147cc1[_0x2df596(0x101)],'fileName':_0x10453b[_0x2df596(0xf4)],'attachmentId':_0x147cc1['Id']});}}return _0x47b12a;}async[a190_0x3e54d7(0xf1)](_0xcd60e9){const _0x24add1=a190_0x3e54d7,_0x39561b=await this[_0x24add1(0xd3)](_0xcd60e9);this[_0x24add1(0x104)][_0x24add1(0x10b)](_0x24add1(0xff));const _0xafef21=[];for(const _0x2cf658 of _0x39561b){const _0x98996f=await this[_0x24add1(0xd6)]['retrieveAttachment'](_0x2cf658[_0x24add1(0xe9)],!![]);_0xafef21[_0x24add1(0xf8)]({'body':_0x98996f[_0x24add1(0xfe)]('base64'),'fileName':_0x2cf658[_0x24add1(0xf0)],'fileType':_0x2cf658[_0x24add1(0xfc)]}),this['logger'][_0x24add1(0x10b)]('manually\x20retrieved\x20%d/%d\x20components',_0xafef21[_0x24add1(0x102)],_0xcd60e9[_0x24add1(0x102)]);}return _0xafef21;}async[a190_0x3e54d7(0xfa)](_0x33b59f){const _0x346270=a190_0x3e54d7,_0x1b6c4f=[..._0x33b59f],_0x47415f=[],_0x33f096=[];while(_0x1b6c4f[_0x346270(0x102)]){const _0x571ba3=_0x1b6c4f['splice'](0x0,this[_0x346270(0xe1)]),_0x2ecf75=await this[_0x346270(0xd6)][_0x346270(0xed)](_0x571ba3);_0x571ba3[_0x346270(0x102)]!==_0x2ecf75[_0x346270(0xd7)][_0x346270(0x102)]?(_0x1b6c4f[_0x346270(0xf8)](..._0x2ecf75[_0x346270(0xd7)]),_0x47415f[_0x346270(0xf8)](..._0x2ecf75[_0x346270(0xf3)])):_0x33f096[_0x346270(0xf8)](..._0x571ba3),this[_0x346270(0x104)][_0x346270(0x108)](_0x346270(0x10a),_0x33b59f['length']-_0x1b6c4f[_0x346270(0x102)],_0x33b59f[_0x346270(0x102)]);}if(_0x33f096[_0x346270(0x102)]){const _0x1d8a58=await this[_0x346270(0xf1)](_0x33f096);_0x47415f[_0x346270(0xf8)](..._0x1d8a58);}return _0x47415f;}}exports[a190_0x3e54d7(0x106)]=SalesforceRetrieverService;