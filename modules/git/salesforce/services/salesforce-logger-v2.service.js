function a275_0x3315(){const _0xc391bd=['262376iqWMHW','createSalesforceRequest','(((.+)+)+)+$','request','splice','1430640cMigyH','map','Log__c','loggerId','delete','removeLogger','12uaCpNG','getLoggerId','length','./salesforce-rest.service','get','./salesforce-auth.service','924718PdgTfG','default','../utils/create-request.util','post','typedi','SalesforceLogger2','SalesforceRestService','2684860njNvJU','/flosum_git','SalesforceAuthService','search','SalesforceError','45ymORLJ','constructor','push','FLOSUM_GIT_NAMESPACE','__importDefault','log','toString','defineProperty','createLogger','setLoggerId','1IZrYKI','messages','__esModule','Logger','IGNORE_FLOSUM_GIT_NAMESPACE','name','logger','1027615bYmrIH','services/apexrest','693324aJpXXv','2696799wwDWZv','../../../../constants'];a275_0x3315=function(){return _0xc391bd;};return a275_0x3315();}const a275_0x40805c=a275_0x1fdc;(function(_0x5baf78,_0x53ce93){const _0x15ebdf=a275_0x1fdc,_0x399122=_0x5baf78();while(!![]){try{const _0x610c5a=parseInt(_0x15ebdf(0xe7))/0x1*(-parseInt(_0x15ebdf(0x104))/0x2)+-parseInt(_0x15ebdf(0xf0))/0x3+-parseInt(_0x15ebdf(0xf8))/0x4+parseInt(_0x15ebdf(0xee))/0x5*(-parseInt(_0x15ebdf(0xfe))/0x6)+parseInt(_0x15ebdf(0xf1))/0x7+-parseInt(_0x15ebdf(0xf3))/0x8+parseInt(_0x15ebdf(0xdd))/0x9*(parseInt(_0x15ebdf(0x10b))/0xa);if(_0x610c5a===_0x53ce93)break;else _0x399122['push'](_0x399122['shift']());}catch(_0x4e5d4e){_0x399122['push'](_0x399122['shift']());}}}(a275_0x3315,0x38d0d));const a275_0x1f372=(function(){let _0x46eb7c=!![];return function(_0x4341df,_0x1b8614){const _0x41a296=_0x46eb7c?function(){if(_0x1b8614){const _0x31275e=_0x1b8614['apply'](_0x4341df,arguments);return _0x1b8614=null,_0x31275e;}}:function(){};return _0x46eb7c=![],_0x41a296;};}()),a275_0x286c4a=a275_0x1f372(this,function(){const _0x4dbd9b=a275_0x1fdc;return a275_0x286c4a[_0x4dbd9b(0xe3)]()['search'](_0x4dbd9b(0xf5))[_0x4dbd9b(0xe3)]()[_0x4dbd9b(0xde)](a275_0x286c4a)[_0x4dbd9b(0x10e)]('(((.+)+)+)+$');});a275_0x286c4a();'use strict';var __importDefault=this&&this[a275_0x40805c(0xe1)]||function(_0x3a0130){return _0x3a0130&&_0x3a0130['__esModule']?_0x3a0130:{'default':_0x3a0130};};Object[a275_0x40805c(0xe4)](exports,a275_0x40805c(0xe9),{'value':!![]}),exports[a275_0x40805c(0x109)]=void 0x0;const typedi_1=__importDefault(require(a275_0x40805c(0x108))),constants_1=require(a275_0x40805c(0xf2)),core_1=require('../../../../core'),salesforce_error_1=require('../errors/salesforce.error'),create_request_util_1=require(a275_0x40805c(0x106)),salesforce_auth_service_1=require(a275_0x40805c(0x103)),salesforce_rest_service_1=require(a275_0x40805c(0x101));class SalesforceLogger2{constructor(_0x5a61af,_0x29fb61){const _0x59bb29=a275_0x40805c;this[_0x59bb29(0xfb)]=_0x5a61af,this['prefix']=_0x29fb61,this[_0x59bb29(0xf6)]=(0x0,create_request_util_1[_0x59bb29(0xf4)])(typedi_1[_0x59bb29(0x105)][_0x59bb29(0x102)](salesforce_auth_service_1[_0x59bb29(0x10d)])),this[_0x59bb29(0xed)]=new core_1[(_0x59bb29(0xea))](SalesforceLogger2[_0x59bb29(0xec)]),this[_0x59bb29(0xe8)]=[];}[a275_0x40805c(0xe6)](_0x1d889e){const _0x5676e4=a275_0x40805c;this[_0x5676e4(0xfb)]=_0x1d889e;}[a275_0x40805c(0xff)](){const _0x2d2ffb=a275_0x40805c;return this[_0x2d2ffb(0xfb)]||'';}['getPrefix'](){return this['prefix']||'';}async['send'](){const _0x4f3259=a275_0x40805c;try{if(!this[_0x4f3259(0xfb)])return;const _0x5c24fa=this[_0x4f3259(0xe8)][_0x4f3259(0xf7)](0x0)[_0x4f3259(0xf9)](_0x3cdea1=>''+(this['prefix']||'')+_0x3cdea1);this[_0x4f3259(0xfb)]&&_0x5c24fa[_0x4f3259(0x100)]&&await this[_0x4f3259(0xf6)][_0x4f3259(0x107)](_0x4f3259(0xef)+(constants_1[_0x4f3259(0xeb)]?'':_0x4f3259(0x10c))+'/logger',{'messages':_0x5c24fa,'loggerId':this[_0x4f3259(0xfb)]});}catch(_0xeec963){throw new salesforce_error_1[(_0x4f3259(0x10f))](_0xeec963);}}['log'](_0x4f0c25){const _0x45655b=a275_0x40805c;return this[_0x45655b(0xed)][_0x45655b(0xe2)]('[message]\x20%s',_0x4f0c25),this[_0x45655b(0xe8)][_0x45655b(0xdf)](_0x4f0c25),this;}static async[a275_0x40805c(0xe5)](){const _0x37c7b4=a275_0x40805c;try{const _0x503bbd=typedi_1[_0x37c7b4(0x105)][_0x37c7b4(0x102)](salesforce_rest_service_1[_0x37c7b4(0x10a)]),_0x42d672=await _0x503bbd[_0x37c7b4(0x107)](constants_1[_0x37c7b4(0xe0)]+_0x37c7b4(0xfa),{});return new SalesforceLogger2(_0x42d672);}catch(_0xd54719){throw new salesforce_error_1[(_0x37c7b4(0x10f))](_0xd54719);}}async[a275_0x40805c(0xfd)](){const _0x10b932=a275_0x40805c;try{if(!this[_0x10b932(0xfb)])return;const _0x59791e=typedi_1[_0x10b932(0x105)]['get'](salesforce_rest_service_1['SalesforceRestService']);await _0x59791e[_0x10b932(0xfc)](constants_1[_0x10b932(0xe0)]+_0x10b932(0xfa),this['loggerId']),this[_0x10b932(0xfb)]='',this[_0x10b932(0xe8)]=[];}catch(_0xc94e0e){throw new salesforce_error_1[(_0x10b932(0x10f))](_0xc94e0e);}}}function a275_0x1fdc(_0x51c2e5,_0x3d485f){const _0x2b2d8f=a275_0x3315();return a275_0x1fdc=function(_0x286c4a,_0x1f372){_0x286c4a=_0x286c4a-0xdd;let _0x3315f5=_0x2b2d8f[_0x286c4a];return _0x3315f5;},a275_0x1fdc(_0x51c2e5,_0x3d485f);}exports[a275_0x40805c(0x109)]=SalesforceLogger2;