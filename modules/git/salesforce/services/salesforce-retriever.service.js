const a242_0x4a863f=a242_0x5839;(function(_0x5ee5d3,_0x10965b){const _0x144091=a242_0x5839,_0x23b41a=_0x5ee5d3();while(!![]){try{const _0x50281a=-parseInt(_0x144091(0x1b0))/0x1+parseInt(_0x144091(0x1a5))/0x2+-parseInt(_0x144091(0x188))/0x3+-parseInt(_0x144091(0x19e))/0x4+parseInt(_0x144091(0x19d))/0x5*(parseInt(_0x144091(0x18a))/0x6)+parseInt(_0x144091(0x1ad))/0x7*(-parseInt(_0x144091(0x18e))/0x8)+parseInt(_0x144091(0x1b5))/0x9;if(_0x50281a===_0x10965b)break;else _0x23b41a['push'](_0x23b41a['shift']());}catch(_0x55d994){_0x23b41a['push'](_0x23b41a['shift']());}}}(a242_0x3ec6,0xca6ab));const a242_0x200f1f=(function(){let _0xc7be9f=!![];return function(_0x15c2ed,_0x18da47){const _0x2b5646=_0xc7be9f?function(){const _0x33d46f=a242_0x5839;if(_0x18da47){const _0x3e8e6d=_0x18da47[_0x33d46f(0x18d)](_0x15c2ed,arguments);return _0x18da47=null,_0x3e8e6d;}}:function(){};return _0xc7be9f=![],_0x2b5646;};}()),a242_0x15613a=a242_0x200f1f(this,function(){const _0x5e724c=a242_0x5839;return a242_0x15613a[_0x5e724c(0x1aa)]()['search'](_0x5e724c(0x193))[_0x5e724c(0x1aa)]()[_0x5e724c(0x199)](a242_0x15613a)['search'](_0x5e724c(0x193));});a242_0x15613a();'use strict';var __importDefault=this&&this[a242_0x4a863f(0x187)]||function(_0x2ea2bf){return _0x2ea2bf&&_0x2ea2bf['__esModule']?_0x2ea2bf:{'default':_0x2ea2bf};};function a242_0x5839(_0x513994,_0x259bd0){const _0x3d4e11=a242_0x3ec6();return a242_0x5839=function(_0x15613a,_0x200f1f){_0x15613a=_0x15613a-0x182;let _0x3ec64b=_0x3d4e11[_0x15613a];return _0x3ec64b;},a242_0x5839(_0x513994,_0x259bd0);}Object['defineProperty'](exports,a242_0x4a863f(0x1ac),{'value':!![]}),exports['SalesforceRetrieverService']=void 0x0;const core_1=require(a242_0x4a863f(0x19b)),typedi_1=__importDefault(require(a242_0x4a863f(0x198))),salesforce_query_service_1=require('./salesforce-query.service'),queries_1=require(a242_0x4a863f(0x197)),flosum_component_history_dto_1=require(a242_0x4a863f(0x1b4));class SalesforceRetrieverService{constructor(_0x27a6bd){const _0x21a37e=a242_0x4a863f;this['salesforceService']=_0x27a6bd,this['logger']=new core_1[(_0x21a37e(0x1b2))](SalesforceRetrieverService[_0x21a37e(0x1a8)]),this[_0x21a37e(0x1ab)]=0xbb8,this[_0x21a37e(0x18b)]=0x1f4;}async[a242_0x4a863f(0x19c)](_0x32ca63){const _0x5a55ab=a242_0x4a863f;this[_0x5a55ab(0x189)][_0x5a55ab(0x18f)](_0x5a55ab(0x19a),_0x32ca63['length']);const _0x49ebab=typedi_1[_0x5a55ab(0x1a2)][_0x5a55ab(0x183)](salesforce_query_service_1[_0x5a55ab(0x1af)]),_0x7a6cff=_0x32ca63['map'](_0x2d365b=>'\x27'+_0x2d365b+'\x27'),_0x343d6f=[];while(_0x7a6cff[_0x5a55ab(0x1ae)]){const _0x38d737=_0x7a6cff[_0x5a55ab(0x191)](0x0,this['COMPONENTS_PER_QUERY']),_0x1b7e4c=_0x49ebab[_0x5a55ab(0x1a4)](queries_1[_0x5a55ab(0x190)][_0x5a55ab(0x1a6)]('%parent_ids%',_0x38d737[_0x5a55ab(0x1a3)]())),_0x2f47fd=_0x49ebab[_0x5a55ab(0x1a4)](queries_1['GET_COMPONENT_HISTORIES_BY_IDS'][_0x5a55ab(0x1a6)](_0x5a55ab(0x182),_0x38d737[_0x5a55ab(0x1a3)]()))[_0x5a55ab(0x19f)](_0x696423=>_0x696423['map'](_0x934a1d=>flosum_component_history_dto_1['FlosumComponentHistoryDto'][_0x5a55ab(0x1a9)](_0x934a1d))),[_0x49b0db,_0x2877a6]=await Promise[_0x5a55ab(0x18c)]([_0x1b7e4c,_0x2f47fd]);for(const _0xbfbea of _0x2877a6){const _0x5971b3=_0x49b0db['find'](_0x279e39=>_0x279e39['ParentId']===_0xbfbea['id']);_0x5971b3&&_0x343d6f[_0x5a55ab(0x195)]({'fileType':_0x5971b3[_0x5a55ab(0x192)],'fileName':_0xbfbea[_0x5a55ab(0x194)],'attachmentId':_0x5971b3['Id']});}}return _0x343d6f;}async[a242_0x4a863f(0x185)](_0xb0c2dd){const _0x2744da=a242_0x4a863f,_0x32b332=await this[_0x2744da(0x19c)](_0xb0c2dd);this[_0x2744da(0x189)][_0x2744da(0x18f)]('manually\x20retrieving\x20components\x20from\x20salesforce');const _0x256736=[];for(const _0x1d0f77 of _0x32b332){const _0x3e4277=await this['salesforceService'][_0x2744da(0x1b1)](_0x1d0f77['attachmentId'],!![]);_0x256736[_0x2744da(0x195)]({'body':_0x3e4277[_0x2744da(0x1aa)](_0x2744da(0x1a0)),'fileName':_0x1d0f77[_0x2744da(0x186)],'fileType':_0x1d0f77[_0x2744da(0x1b3)]}),this[_0x2744da(0x189)][_0x2744da(0x18f)]('manually\x20retrieved\x20%d/%d\x20components',_0x256736['length'],_0xb0c2dd[_0x2744da(0x1ae)]);}return _0x256736;}async[a242_0x4a863f(0x196)](_0x274061){const _0x247d52=a242_0x4a863f,_0x52de9e=[..._0x274061],_0x14b5cc=[],_0x1a36fb=[];while(_0x52de9e[_0x247d52(0x1ae)]){const _0x258b2c=_0x52de9e['splice'](0x0,this[_0x247d52(0x1ab)]),_0x58c1ea=await this[_0x247d52(0x1a7)]['retrieveComponents'](_0x258b2c);_0x258b2c[_0x247d52(0x1ae)]!==_0x58c1ea['ids'][_0x247d52(0x1ae)]?(_0x52de9e[_0x247d52(0x195)](..._0x58c1ea[_0x247d52(0x184)]),_0x14b5cc[_0x247d52(0x195)](..._0x58c1ea['components'])):_0x1a36fb[_0x247d52(0x195)](..._0x258b2c),this[_0x247d52(0x189)]['log'](_0x247d52(0x1a1),_0x274061['length']-_0x52de9e['length'],_0x274061[_0x247d52(0x1ae)]);}if(_0x1a36fb[_0x247d52(0x1ae)]){const _0x486e09=await this[_0x247d52(0x185)](_0x1a36fb);_0x14b5cc[_0x247d52(0x195)](..._0x486e09);}return _0x14b5cc;}}exports['SalesforceRetrieverService']=SalesforceRetrieverService;function a242_0x3ec6(){const _0x1dc69b=['Logger','fileType','../dto/flosum-component-history.dto','22983345RgYVsO','%ids%','get','ids','retrieveLastComponents','fileName','__importDefault','3110556ezayje','logger','90VYnxuA','COMPONENTS_PER_QUERY','all','apply','31632BYRpbG','info','GET_ATTACHMENT_BY_PARENT_IDS_QUERY','splice','Name','(((.+)+)+)+$','filename','push','run','../queries','typedi','constructor','manually\x20retrieving\x20component\x20ids\x20from\x20history\x20ids\x20(%d)','../../../../core','retrieveComponentIdsFromHistoryIds','458530gnwOoy','1218164UORtde','then','base64','retrieved\x20%d/%d\x20components\x20from\x20salesforce\x20rest','default','join','query','2546132QFOYXb','replace','salesforceService','name','fromSalesforce','toString','COMPONENTS_PER_REQUEST','__esModule','2765iYmKkT','length','SalesforceQueryService','1470039KbNtAr','retrieveAttachment'];a242_0x3ec6=function(){return _0x1dc69b;};return a242_0x3ec6();}