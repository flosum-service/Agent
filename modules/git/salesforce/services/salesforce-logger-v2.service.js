const a276_0x7486a8=a276_0x46cb;(function(_0x231b6a,_0x242a61){const _0x88b361=a276_0x46cb,_0x4a1b5c=_0x231b6a();while(!![]){try{const _0x41ad26=-parseInt(_0x88b361(0x1b2))/0x1+parseInt(_0x88b361(0x1a7))/0x2*(-parseInt(_0x88b361(0x18f))/0x3)+parseInt(_0x88b361(0x191))/0x4+parseInt(_0x88b361(0x1a6))/0x5+-parseInt(_0x88b361(0x1ab))/0x6*(parseInt(_0x88b361(0x1b4))/0x7)+-parseInt(_0x88b361(0x1b3))/0x8+parseInt(_0x88b361(0x1a1))/0x9;if(_0x41ad26===_0x242a61)break;else _0x4a1b5c['push'](_0x4a1b5c['shift']());}catch(_0x4746f8){_0x4a1b5c['push'](_0x4a1b5c['shift']());}}}(a276_0x39e0,0xcf9b2));const a276_0x5829e8=(function(){let _0x38af56=!![];return function(_0x4695ed,_0x2fc877){const _0x13e4d8=_0x38af56?function(){const _0x4bfab0=a276_0x46cb;if(_0x2fc877){const _0x5c2f35=_0x2fc877[_0x4bfab0(0x19e)](_0x4695ed,arguments);return _0x2fc877=null,_0x5c2f35;}}:function(){};return _0x38af56=![],_0x13e4d8;};}()),a276_0xbbefd8=a276_0x5829e8(this,function(){const _0x187c2a=a276_0x46cb;return a276_0xbbefd8[_0x187c2a(0x195)]()['search']('(((.+)+)+)+$')[_0x187c2a(0x195)]()['constructor'](a276_0xbbefd8)[_0x187c2a(0x193)](_0x187c2a(0x187));});a276_0xbbefd8();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x2297df){const _0xd55fb=a276_0x46cb;return _0x2297df&&_0x2297df[_0xd55fb(0x1a4)]?_0x2297df:{'default':_0x2297df};};Object[a276_0x7486a8(0x19a)](exports,'__esModule',{'value':!![]}),exports[a276_0x7486a8(0x1a0)]=void 0x0;const typedi_1=__importDefault(require(a276_0x7486a8(0x18d))),constants_1=require(a276_0x7486a8(0x197)),core_1=require('../../../../core'),salesforce_error_1=require(a276_0x7486a8(0x18c)),create_request_util_1=require('../utils/create-request.util'),salesforce_auth_service_1=require(a276_0x7486a8(0x196)),salesforce_rest_service_1=require(a276_0x7486a8(0x18a));class SalesforceLogger2{constructor(_0x3e5178,_0x207b97){const _0x457412=a276_0x7486a8;this[_0x457412(0x194)]=_0x3e5178,this['prefix']=_0x207b97,this['request']=(0x0,create_request_util_1[_0x457412(0x1aa)])(typedi_1[_0x457412(0x1af)][_0x457412(0x18b)](salesforce_auth_service_1[_0x457412(0x19b)])),this[_0x457412(0x1ae)]=new core_1['Logger'](SalesforceLogger2['name']),this[_0x457412(0x1a5)]=[];}[a276_0x7486a8(0x19c)](_0x34be28){const _0x1eaa86=a276_0x7486a8;this[_0x1eaa86(0x194)]=_0x34be28;}['getLoggerId'](){const _0x524329=a276_0x7486a8;return this[_0x524329(0x194)]||'';}[a276_0x7486a8(0x199)](){return this['prefix']||'';}async['send'](){const _0xb19729=a276_0x7486a8;try{if(!this[_0xb19729(0x194)])return;const _0x1e1f36=this[_0xb19729(0x1a5)][_0xb19729(0x1a2)](0x0)['map'](_0x2e2d9d=>''+(this[_0xb19729(0x192)]||'')+_0x2e2d9d);this['loggerId']&&_0x1e1f36[_0xb19729(0x18e)]&&await this[_0xb19729(0x1a9)]['post']('services/apexrest'+(constants_1[_0xb19729(0x190)]?'':_0xb19729(0x188))+'/logger',{'messages':_0x1e1f36,'loggerId':this[_0xb19729(0x194)]});}catch(_0x592168){throw new salesforce_error_1['SalesforceError'](_0x592168);}}[a276_0x7486a8(0x1a3)](_0x107af7){const _0x30010b=a276_0x7486a8;return this['logger'][_0x30010b(0x1a3)](_0x30010b(0x198),_0x107af7),this['messages'][_0x30010b(0x189)](_0x107af7),this;}static async[a276_0x7486a8(0x19f)](){const _0xd68375=a276_0x7486a8;try{const _0x366c2a=typedi_1[_0xd68375(0x1af)]['get'](salesforce_rest_service_1[_0xd68375(0x1ad)]),_0x553ce2=await _0x366c2a[_0xd68375(0x1b0)](constants_1[_0xd68375(0x1b1)]+_0xd68375(0x19d),{});return new SalesforceLogger2(_0x553ce2);}catch(_0x1b9279){throw new salesforce_error_1['SalesforceError'](_0x1b9279);}}async[a276_0x7486a8(0x1a8)](){const _0x10a004=a276_0x7486a8;try{if(!this[_0x10a004(0x194)])return;const _0x38c90b=typedi_1[_0x10a004(0x1af)][_0x10a004(0x18b)](salesforce_rest_service_1[_0x10a004(0x1ad)]);await _0x38c90b[_0x10a004(0x1ac)](constants_1['FLOSUM_GIT_NAMESPACE']+_0x10a004(0x19d),this['loggerId']),this[_0x10a004(0x194)]='',this['messages']=[];}catch(_0x5243d2){throw new salesforce_error_1['SalesforceError'](_0x5243d2);}}}exports[a276_0x7486a8(0x1a0)]=SalesforceLogger2;function a276_0x46cb(_0x4461a7,_0x407b49){const _0x2a2bbf=a276_0x39e0();return a276_0x46cb=function(_0xbbefd8,_0x5829e8){_0xbbefd8=_0xbbefd8-0x187;let _0x39e0f5=_0x2a2bbf[_0xbbefd8];return _0x39e0f5;},a276_0x46cb(_0x4461a7,_0x407b49);}function a276_0x39e0(){const _0x1f049b=['default','post','FLOSUM_GIT_NAMESPACE','979285QlZKHS','6646480BUvPjE','1548463MWDLYP','(((.+)+)+)+$','/flosum_git','push','./salesforce-rest.service','get','../errors/salesforce.error','typedi','length','78wejZIs','IGNORE_FLOSUM_GIT_NAMESPACE','3056256cVrOux','prefix','search','loggerId','toString','./salesforce-auth.service','../../../../constants','[message]\x20%s','getPrefix','defineProperty','SalesforceAuthService','setLoggerId','Log__c','apply','createLogger','SalesforceLogger2','19315035xWtIka','splice','log','__esModule','messages','5313640ZHlvjm','32894AgPIuz','removeLogger','request','createSalesforceRequest','24EkibNy','delete','SalesforceRestService','logger'];a276_0x39e0=function(){return _0x1f049b;};return a276_0x39e0();}