const a356_0x3b7ee0=a356_0x3551;(function(_0x5956d9,_0x23cbf2){const _0x5b2be0=a356_0x3551,_0x1031e3=_0x5956d9();while(!![]){try{const _0x2740a7=-parseInt(_0x5b2be0(0xec))/0x1+parseInt(_0x5b2be0(0xfb))/0x2+-parseInt(_0x5b2be0(0xef))/0x3+parseInt(_0x5b2be0(0xf6))/0x4*(-parseInt(_0x5b2be0(0x106))/0x5)+-parseInt(_0x5b2be0(0x102))/0x6*(parseInt(_0x5b2be0(0x110))/0x7)+-parseInt(_0x5b2be0(0x10c))/0x8+-parseInt(_0x5b2be0(0xe2))/0x9*(-parseInt(_0x5b2be0(0xe3))/0xa);if(_0x2740a7===_0x23cbf2)break;else _0x1031e3['push'](_0x1031e3['shift']());}catch(_0x2ea865){_0x1031e3['push'](_0x1031e3['shift']());}}}(a356_0x2a7c,0xab17c));const a356_0x39629f=(function(){let _0x57e027=!![];return function(_0xf7efbc,_0x34fc55){const _0x17197b=_0x57e027?function(){if(_0x34fc55){const _0x3b01cc=_0x34fc55['apply'](_0xf7efbc,arguments);return _0x34fc55=null,_0x3b01cc;}}:function(){};return _0x57e027=![],_0x17197b;};}()),a356_0x1b5004=a356_0x39629f(this,function(){const _0x541c=a356_0x3551;return a356_0x1b5004[_0x541c(0xfe)]()['search'](_0x541c(0x103))[_0x541c(0xfe)]()[_0x541c(0xf9)](a356_0x1b5004)['search'](_0x541c(0x103));});a356_0x1b5004();'use strict';Object[a356_0x3b7ee0(0xf2)](exports,a356_0x3b7ee0(0xe5),{'value':!![]}),exports['DependencyService']=void 0x0;function a356_0x3551(_0x26711f,_0x9107e3){const _0x1e43c6=a356_0x2a7c();return a356_0x3551=function(_0x1b5004,_0x39629f){_0x1b5004=_0x1b5004-0xe2;let _0x2a7c72=_0x1e43c6[_0x1b5004];return _0x2a7c72;},a356_0x3551(_0x26711f,_0x9107e3);}const veeva_service_1=require(a356_0x3b7ee0(0xe4)),status_enums_1=require('../enums/status.enums'),salesforce_service_1=require('./salesforce.service'),empty_logger_1=require(a356_0x3b7ee0(0x118)),flosum_component_veeva_component_retriever_1=require(a356_0x3b7ee0(0xf7)),id_veeva_component_retriever_1=require('../classes/retrievers/veeva-components/id.veeva-component.retriever'),source_id_veeva_component_relationship_retriever_1=require(a356_0x3b7ee0(0xeb)),branch_flosum_component_retriever_1=require(a356_0x3b7ee0(0x114));class DependencyService{constructor(_0x2dbffb,_0x5ca535,_0x242a93){const _0x1a3250=a356_0x3b7ee0;this['_connectionSalesforce']=_0x5ca535,this[_0x1a3250(0x101)]=_0x242a93,this[_0x1a3250(0x119)]=_0x2dbffb[_0x1a3250(0x104)];const _0x187ae8=new empty_logger_1[(_0x1a3250(0xf5))]();this[_0x1a3250(0x112)]=new veeva_service_1['VeevaService']({'connection':this[_0x1a3250(0x101)],'logger':_0x187ae8}),this[_0x1a3250(0x111)]=new salesforce_service_1[(_0x1a3250(0xe7))]({'connection':this['_connectionSalesforce']});}get['baseVeevaComponentRetrieverOptions'](){const _0x589e52=a356_0x3b7ee0;return{'veevaService':this[_0x589e52(0x112)],'logger':new empty_logger_1[(_0x589e52(0xf5))]()};}async[a356_0x3b7ee0(0xea)](){const _0x5d3e72=a356_0x3b7ee0,_0x7c5d02=await this[_0x5d3e72(0xf1)](),_0x1f9685=await this[_0x5d3e72(0x100)](_0x7c5d02),_0x137f7c=await this['getDependencyVeevaComponents'](_0x1f9685),_0xa8cdb7=_0x137f7c[_0x5d3e72(0xfd)](_0x502395=>_0x502395[_0x5d3e72(0x105)]),_0x4788ab=await this['getVeevaComponentsById'](_0xa8cdb7),_0x398b32=DependencyService[_0x5d3e72(0xee)](_0x1f9685,_0x4788ab,_0x137f7c);return{'responseStatus':status_enums_1[_0x5d3e72(0xf4)][_0x5d3e72(0x113)],'data':_0x398b32};}async[a356_0x3b7ee0(0xf1)](){const _0x12e3f2=a356_0x3b7ee0,_0x458cd2=await new branch_flosum_component_retriever_1[(_0x12e3f2(0x109))]({'value':this[_0x12e3f2(0x119)],'salesforceService':this[_0x12e3f2(0x111)]})['retrieve']();if(!_0x458cd2['length'])throw new Error('No\x20veeva\x20components\x20found\x20in\x20branch');return _0x458cd2;}async[a356_0x3b7ee0(0x100)](_0x147048){const _0x269c8a=a356_0x3b7ee0,_0x488415=await new flosum_component_veeva_component_retriever_1[(_0x269c8a(0xf3))]({'value':_0x147048,...this[_0x269c8a(0x117)]})[_0x269c8a(0x107)]();if(!_0x488415[_0x269c8a(0x10d)])throw new Error(_0x269c8a(0xed));return _0x488415;}async['getVeevaComponentsById'](_0x4c1708){const _0x3c0394=a356_0x3b7ee0,_0x207829=await new id_veeva_component_retriever_1[(_0x3c0394(0xe9))]({'value':_0x4c1708,...this['baseVeevaComponentRetrieverOptions']})[_0x3c0394(0x107)]();if(!_0x207829[_0x3c0394(0x10d)])throw new Error(_0x3c0394(0x10e));return _0x207829;}async[a356_0x3b7ee0(0xe6)](_0x725786){const _0x359cab=a356_0x3b7ee0,_0x2f45c2=await new source_id_veeva_component_relationship_retriever_1[(_0x359cab(0x108))]({'value':_0x725786['map'](({id:_0x17b92f})=>_0x17b92f),'veevaService':this[_0x359cab(0x112)]})[_0x359cab(0x107)]();if(!_0x2f45c2['length'])throw new Error('No\x20relationship\x20found\x20in\x20Veeva');return _0x2f45c2;}static[a356_0x3b7ee0(0xee)](_0x4c857f,_0x78aaaa,_0x299679){const _0x1d1d06=a356_0x3b7ee0,_0x44e40c={},_0x1d9283=_0x4c857f[_0x1d1d06(0x116)]((_0x48ad0c,_0xb5952d)=>_0x48ad0c[_0x1d1d06(0xe8)](_0xb5952d['id'],_0xb5952d),new Map()),_0x466b22=_0x78aaaa['reduce']((_0x3fdf79,_0x50852f)=>_0x3fdf79['set'](_0x50852f['id'],_0x50852f),new Map());for(const _0x50a036 of _0x299679){const _0x2e2343=_0x1d9283[_0x1d1d06(0xf0)](_0x50a036['sourceComponentId'])&&_0x466b22['has'](_0x50a036['targetComponentId']);if(!_0x2e2343)continue;const _0x2067e9=_0x1d9283[_0x1d1d06(0xf8)](_0x50a036[_0x1d1d06(0xfc)]),_0xbdee7c=_0x466b22[_0x1d1d06(0xf8)](_0x50a036[_0x1d1d06(0x105)]);!_0x44e40c[_0x2067e9['name']+':'+_0x2067e9[_0x1d1d06(0xfa)]]&&(_0x44e40c[_0x2067e9[_0x1d1d06(0x10a)]+':'+_0x2067e9[_0x1d1d06(0xfa)]]={'dependencies':[],'label':_0x2067e9[_0x1d1d06(0x10a)]+'\x20('+_0x2067e9[_0x1d1d06(0xfa)]+')','type':_0x2067e9[_0x1d1d06(0xfa)],'name':_0x2067e9[_0x1d1d06(0x10a)]}),_0x44e40c[_0x2067e9['name']+':'+_0x2067e9[_0x1d1d06(0xfa)]][_0x1d1d06(0xff)][_0x1d1d06(0x115)]({'label':_0xbdee7c['name']+'\x20('+_0xbdee7c['type']+')','name':_0xbdee7c[_0x1d1d06(0x10a)],'type':_0xbdee7c[_0x1d1d06(0xfa)],'lastUpdate':_0xbdee7c[_0x1d1d06(0x10b)],'isMissing':!_0x1d9283[_0x1d1d06(0xf0)](_0x50a036[_0x1d1d06(0x105)])});}return _0x44e40c;}}exports[a356_0x3b7ee0(0x10f)]=DependencyService;function a356_0x2a7c(){const _0x28d29d=['AppResponseStatus','EmptyLogger','1362732zdAbuB','../classes/retrievers/veeva-components/flosum-component.veeva-component.retriever','get','constructor','type','2218884LjPKqM','sourceComponentId','map','toString','dependencies','getVeevaComponentsByFlosumComponents','_connectionVeeva','8349096mSlLrV','(((.+)+)+)+$','branchId','targetComponentId','15eeIFPr','retrieve','SourceIdVeevaComponentRelationshipRetriever','BranchFlosumComponentRetriever','name','lastModifiedDate','3972904uNGMhE','length','No\x20dependency\x20components\x20found\x20in\x20Veeva','DependencyService','7jVCasd','_salesforceService','_veevaService','SUCCESS','../classes/retrievers/flosum-components/branch.flosum-component.retriever','push','reduce','baseVeevaComponentRetrieverOptions','../classes/loggers/empty.logger','_branchId','9KOWUQc','47617030zvCBLS','./veeva.service','__esModule','getDependencyVeevaComponents','SalesforceService','set','IdVeevaComponentRetriever','execute','../classes/retrievers/veeva-component-relationships/source-id.veeva-component-relationship.retriever','1101401aKBnxN','No\x20components\x20found\x20in\x20Veeva','createDataResult','3476310cQWrkl','has','getFlosumComponents','defineProperty','FlosumComponentVeevaComponentRetriever'];a356_0x2a7c=function(){return _0x28d29d;};return a356_0x2a7c();}