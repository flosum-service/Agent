function a236_0x3d6b(){const _0x243248=['join','retrieveLastComponents','9043952mcOeBw','ParentId','108yxeDMn','1003120qzCYVI','run','fromSalesforce','constructor','__esModule','4OtPSQa','220668imtcFh','length','log','77010ZtwTnb','FlosumComponentHistoryDto','COMPONENTS_PER_QUERY','%parent_ids%','(((.+)+)+)+$','default','toString','components','get','retrieveComponents','push','fileName','Logger','GET_ATTACHMENT_BY_PARENT_IDS_QUERY','GET_COMPONENT_HISTORIES_BY_IDS','1872775mliQre','ids','splice','salesforceService','./salesforce-query.service','__importDefault','apply','../dto/flosum-component-history.dto','manually\x20retrieved\x20%d/%d\x20components','manually\x20retrieving\x20components\x20from\x20salesforce','retrieveAttachment','logger','SalesforceRetrieverService','435443qQpuwl','replace','156VRbexs','info','9719930ASgImq','defineProperty','search','Name','typedi','query','retrieveComponentIdsFromHistoryIds','map','retrieved\x20%d/%d\x20components\x20from\x20salesforce\x20rest','../../../../core','108eMxBgs','../queries','%ids%'];a236_0x3d6b=function(){return _0x243248;};return a236_0x3d6b();}const a236_0x208700=a236_0x50a4;(function(_0x3ce63f,_0x148e00){const _0x60288f=a236_0x50a4,_0x46b931=_0x3ce63f();while(!![]){try{const _0x51db91=-parseInt(_0x60288f(0x1d3))/0x1*(parseInt(_0x60288f(0x1ee))/0x2)+-parseInt(_0x60288f(0x1f2))/0x3*(-parseInt(_0x60288f(0x1d5))/0x4)+-parseInt(_0x60288f(0x201))/0x5+-parseInt(_0x60288f(0x1e8))/0x6*(parseInt(_0x60288f(0x1ef))/0x7)+parseInt(_0x60288f(0x1e6))/0x8+-parseInt(_0x60288f(0x1e1))/0x9*(-parseInt(_0x60288f(0x1e9))/0xa)+-parseInt(_0x60288f(0x1d7))/0xb;if(_0x51db91===_0x148e00)break;else _0x46b931['push'](_0x46b931['shift']());}catch(_0x366839){_0x46b931['push'](_0x46b931['shift']());}}}(a236_0x3d6b,0x9bf91));const a236_0x1fe879=(function(){let _0x58eb7c=!![];return function(_0x446d66,_0x32e029){const _0x441c0e=_0x58eb7c?function(){const _0x17320a=a236_0x50a4;if(_0x32e029){const _0x2d515d=_0x32e029[_0x17320a(0x1cc)](_0x446d66,arguments);return _0x32e029=null,_0x2d515d;}}:function(){};return _0x58eb7c=![],_0x441c0e;};}()),a236_0x1a5851=a236_0x1fe879(this,function(){const _0x3f671d=a236_0x50a4;return a236_0x1a5851['toString']()['search'](_0x3f671d(0x1f6))[_0x3f671d(0x1f8)]()[_0x3f671d(0x1ec)](a236_0x1a5851)[_0x3f671d(0x1d9)](_0x3f671d(0x1f6));});a236_0x1a5851();'use strict';var __importDefault=this&&this[a236_0x208700(0x1cb)]||function(_0x5054ce){const _0xf93637=a236_0x208700;return _0x5054ce&&_0x5054ce[_0xf93637(0x1ed)]?_0x5054ce:{'default':_0x5054ce};};Object[a236_0x208700(0x1d8)](exports,a236_0x208700(0x1ed),{'value':!![]}),exports['SalesforceRetrieverService']=void 0x0;const core_1=require(a236_0x208700(0x1e0)),typedi_1=__importDefault(require(a236_0x208700(0x1db))),salesforce_query_service_1=require(a236_0x208700(0x1ca)),queries_1=require(a236_0x208700(0x1e2)),flosum_component_history_dto_1=require(a236_0x208700(0x1cd));class SalesforceRetrieverService{constructor(_0xc7f7bd){const _0x573ad6=a236_0x208700;this[_0x573ad6(0x1c9)]=_0xc7f7bd,this['logger']=new core_1[(_0x573ad6(0x1fe))](SalesforceRetrieverService['name']),this['COMPONENTS_PER_REQUEST']=0xbb8,this[_0x573ad6(0x1f4)]=0x1f4;}async[a236_0x208700(0x1dd)](_0x300280){const _0x141432=a236_0x208700;this[_0x141432(0x1d1)]['info']('manually\x20retrieving\x20component\x20ids\x20from\x20history\x20ids\x20(%d)',_0x300280[_0x141432(0x1f0)]);const _0x3296c7=typedi_1[_0x141432(0x1f7)][_0x141432(0x1fa)](salesforce_query_service_1['SalesforceQueryService']),_0x187038=_0x300280[_0x141432(0x1de)](_0x579382=>'\x27'+_0x579382+'\x27'),_0x2afbc4=[];while(_0x187038[_0x141432(0x1f0)]){const _0x46ffdd=_0x187038[_0x141432(0x203)](0x0,this[_0x141432(0x1f4)]),_0x8612de=_0x3296c7[_0x141432(0x1dc)](queries_1[_0x141432(0x1ff)][_0x141432(0x1d4)](_0x141432(0x1f5),_0x46ffdd[_0x141432(0x1e4)]())),_0x273f4d=_0x3296c7[_0x141432(0x1dc)](queries_1[_0x141432(0x200)][_0x141432(0x1d4)](_0x141432(0x1e3),_0x46ffdd[_0x141432(0x1e4)]()))['then'](_0x1ceabe=>_0x1ceabe['map'](_0x2cce76=>flosum_component_history_dto_1[_0x141432(0x1f3)][_0x141432(0x1eb)](_0x2cce76))),[_0xed64ff,_0x520fcc]=await Promise['all']([_0x8612de,_0x273f4d]);for(const _0x4ffc7e of _0x520fcc){const _0x500d91=_0xed64ff['find'](_0x1995d5=>_0x1995d5[_0x141432(0x1e7)]===_0x4ffc7e['id']);_0x500d91&&_0x2afbc4[_0x141432(0x1fc)]({'fileType':_0x500d91[_0x141432(0x1da)],'fileName':_0x4ffc7e['filename'],'attachmentId':_0x500d91['Id']});}}return _0x2afbc4;}async[a236_0x208700(0x1e5)](_0x186d94){const _0x3415c0=a236_0x208700,_0x1867fe=await this['retrieveComponentIdsFromHistoryIds'](_0x186d94);this[_0x3415c0(0x1d1)][_0x3415c0(0x1d6)](_0x3415c0(0x1cf));const _0x4da28e=[];for(const _0x51f213 of _0x1867fe){const _0x5e45e7=await this[_0x3415c0(0x1c9)][_0x3415c0(0x1d0)](_0x51f213['attachmentId'],!![]);_0x4da28e['push']({'body':_0x5e45e7[_0x3415c0(0x1f8)]('base64'),'fileName':_0x51f213[_0x3415c0(0x1fd)],'fileType':_0x51f213['fileType']}),this[_0x3415c0(0x1d1)][_0x3415c0(0x1d6)](_0x3415c0(0x1ce),_0x4da28e[_0x3415c0(0x1f0)],_0x186d94[_0x3415c0(0x1f0)]);}return _0x4da28e;}async[a236_0x208700(0x1ea)](_0x15ee06){const _0x33da93=a236_0x208700,_0x4409bf=[..._0x15ee06],_0x1c304f=[],_0x46ffe5=[];while(_0x4409bf['length']){const _0x1b361d=_0x4409bf['splice'](0x0,this['COMPONENTS_PER_REQUEST']),_0x42daa5=await this[_0x33da93(0x1c9)][_0x33da93(0x1fb)](_0x1b361d);_0x1b361d[_0x33da93(0x1f0)]!==_0x42daa5[_0x33da93(0x202)][_0x33da93(0x1f0)]?(_0x4409bf[_0x33da93(0x1fc)](..._0x42daa5[_0x33da93(0x202)]),_0x1c304f['push'](..._0x42daa5[_0x33da93(0x1f9)])):_0x46ffe5['push'](..._0x1b361d),this[_0x33da93(0x1d1)][_0x33da93(0x1f1)](_0x33da93(0x1df),_0x15ee06[_0x33da93(0x1f0)]-_0x4409bf[_0x33da93(0x1f0)],_0x15ee06[_0x33da93(0x1f0)]);}if(_0x46ffe5[_0x33da93(0x1f0)]){const _0x36f939=await this[_0x33da93(0x1e5)](_0x46ffe5);_0x1c304f[_0x33da93(0x1fc)](..._0x36f939);}return _0x1c304f;}}function a236_0x50a4(_0x2aa678,_0x5286ac){const _0x23ea5f=a236_0x3d6b();return a236_0x50a4=function(_0x1a5851,_0x1fe879){_0x1a5851=_0x1a5851-0x1c9;let _0x3d6b5b=_0x23ea5f[_0x1a5851];return _0x3d6b5b;},a236_0x50a4(_0x2aa678,_0x5286ac);}exports[a236_0x208700(0x1d2)]=SalesforceRetrieverService;