const a323_0x24edfc=a323_0x5f61;(function(_0x43268,_0x1c2728){const _0xc1d938=a323_0x5f61,_0x22bb98=_0x43268();while(!![]){try{const _0x58738e=-parseInt(_0xc1d938(0x82))/0x1+parseInt(_0xc1d938(0x74))/0x2*(parseInt(_0xc1d938(0x75))/0x3)+parseInt(_0xc1d938(0x6d))/0x4*(-parseInt(_0xc1d938(0x6e))/0x5)+parseInt(_0xc1d938(0x6b))/0x6+-parseInt(_0xc1d938(0x7d))/0x7+-parseInt(_0xc1d938(0x72))/0x8+parseInt(_0xc1d938(0x6f))/0x9*(parseInt(_0xc1d938(0x81))/0xa);if(_0x58738e===_0x1c2728)break;else _0x22bb98['push'](_0x22bb98['shift']());}catch(_0x466ecb){_0x22bb98['push'](_0x22bb98['shift']());}}}(a323_0x9ee0,0x72976));const a323_0x1ecce8=(function(){let _0x3ae3a9=!![];return function(_0x46f268,_0x46ef8f){const _0x48b08c=_0x3ae3a9?function(){const _0xc3efba=a323_0x5f61;if(_0x46ef8f){const _0x591971=_0x46ef8f[_0xc3efba(0x78)](_0x46f268,arguments);return _0x46ef8f=null,_0x591971;}}:function(){};return _0x3ae3a9=![],_0x48b08c;};}()),a323_0x46046e=a323_0x1ecce8(this,function(){const _0x1aec1f=a323_0x5f61;return a323_0x46046e[_0x1aec1f(0x71)]()[_0x1aec1f(0x76)]('(((.+)+)+)+$')[_0x1aec1f(0x71)]()[_0x1aec1f(0x6c)](a323_0x46046e)[_0x1aec1f(0x76)](_0x1aec1f(0x70));});a323_0x46046e();function a323_0x5f61(_0x17d6b6,_0x341b5d){const _0x4d3f0f=a323_0x9ee0();return a323_0x5f61=function(_0x46046e,_0x1ecce8){_0x46046e=_0x46046e-0x6a;let _0x9ee02d=_0x4d3f0f[_0x46046e];return _0x9ee02d;},a323_0x5f61(_0x17d6b6,_0x341b5d);}'use strict';Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports['BaseVeevaComponentRelationshipRetriever']=void 0x0;const veeva_component_relationship_dto_1=require('../../../dtos/veeva-component-relationship.dto');function a323_0x9ee0(){const _0x3b953c=['501233nDpBBB','value','1993656ksMZkU','constructor','4THvNOC','1285770tKNQWk','8442nWORiB','(((.+)+)+)+$','toString','5423128GdvFoW','retrieve','248JfRiZh','12384fuuDCC','search','reduce','apply','BaseVeevaComponentRelationshipRetriever','\x0a\x20\x20\x20\x20\x20\x20\x20\x20SELECT\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20name__v,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20source_component__sys,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20target_component__sys,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20target_component_name__sys,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20created_date__v\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20vault_component_relationship__sys\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20','formComponents','set','2175586JQpGcF','map','deleteDuplicates','values','14630VsDseH'];a323_0x9ee0=function(){return _0x3b953c;};return a323_0x9ee0();}class BaseVeevaComponentRelationshipRetriever{constructor({value:_0x4db8aa,veevaService:_0x136777}){const _0x5416be=a323_0x5f61;this[_0x5416be(0x6a)]=_0x4db8aa,this['veevaService']=_0x136777;}['formQuery'](_0x4ce8d6){const _0x45b5e0=a323_0x5f61;return _0x45b5e0(0x7a)+_0x4ce8d6;}['deleteDuplicates'](_0xeded0d){const _0x5c9fe7=a323_0x5f61,_0x232d0f=_0xeded0d[_0x5c9fe7(0x77)]((_0x1baf90,_0x38f1df)=>_0x1baf90[_0x5c9fe7(0x7c)](_0x38f1df['sourceComponentId']+'.'+_0x38f1df['targetComponentId'],_0x38f1df),new Map());return[..._0x232d0f[_0x5c9fe7(0x80)]()];}[a323_0x24edfc(0x7b)](_0x13b9f4){const _0x17f011=a323_0x24edfc;return _0x13b9f4[_0x17f011(0x7e)](_0x47bd82=>new veeva_component_relationship_dto_1['VeevaComponentRelationshipDto'](_0x47bd82));}async[a323_0x24edfc(0x73)](){const _0x2deaa6=a323_0x24edfc,_0x5721ee=this['getQueries'](),_0x198ecb=await this['veevaService']['executeManyVQL'](_0x5721ee),_0x52cfd6=this[_0x2deaa6(0x7b)](_0x198ecb);return this[_0x2deaa6(0x7f)](_0x52cfd6);}}exports[a323_0x24edfc(0x79)]=BaseVeevaComponentRelationshipRetriever;