const a185_0x571509=a185_0x2b5b;(function(_0x2e7d47,_0x48b637){const _0x58573a=a185_0x2b5b,_0x25851f=_0x2e7d47();while(!![]){try{const _0x5f4c3e=-parseInt(_0x58573a(0x1e9))/0x1+parseInt(_0x58573a(0x1e3))/0x2*(-parseInt(_0x58573a(0x1d0))/0x3)+parseInt(_0x58573a(0x1d3))/0x4*(-parseInt(_0x58573a(0x1c1))/0x5)+parseInt(_0x58573a(0x1d1))/0x6+parseInt(_0x58573a(0x1e1))/0x7*(parseInt(_0x58573a(0x1c8))/0x8)+-parseInt(_0x58573a(0x1cf))/0x9+-parseInt(_0x58573a(0x1c5))/0xa*(-parseInt(_0x58573a(0x1ee))/0xb);if(_0x5f4c3e===_0x48b637)break;else _0x25851f['push'](_0x25851f['shift']());}catch(_0x45d5c3){_0x25851f['push'](_0x25851f['shift']());}}}(a185_0x3924,0x7a0c6));const a185_0x585977=(function(){let _0x48d167=!![];return function(_0x12989e,_0x271834){const _0x54870d=_0x48d167?function(){const _0x142a68=a185_0x2b5b;if(_0x271834){const _0x319cf8=_0x271834[_0x142a68(0x1c2)](_0x12989e,arguments);return _0x271834=null,_0x319cf8;}}:function(){};return _0x48d167=![],_0x54870d;};}()),a185_0x59baca=a185_0x585977(this,function(){const _0xfb602e=a185_0x2b5b;return a185_0x59baca[_0xfb602e(0x1c6)]()['search']('(((.+)+)+)+$')[_0xfb602e(0x1c6)]()[_0xfb602e(0x1c4)](a185_0x59baca)[_0xfb602e(0x1ca)]('(((.+)+)+)+$');});a185_0x59baca();'use strict';var __importDefault=this&&this[a185_0x571509(0x1f2)]||function(_0x16229e){const _0x402cce=a185_0x571509;return _0x16229e&&_0x16229e[_0x402cce(0x1de)]?_0x16229e:{'default':_0x16229e};};Object[a185_0x571509(0x1cc)](exports,a185_0x571509(0x1de),{'value':!![]}),exports['SalesforceLogger2']=void 0x0;const typedi_1=__importDefault(require(a185_0x571509(0x1d5))),constants_1=require(a185_0x571509(0x1cd)),core_1=require(a185_0x571509(0x1cb)),salesforce_error_1=require(a185_0x571509(0x1ea)),create_request_util_1=require('../utils/create-request.util'),salesforce_auth_service_1=require(a185_0x571509(0x1ed)),salesforce_rest_service_1=require('./salesforce-rest.service');function a185_0x2b5b(_0x2453f2,_0x21a078){const _0x2dd47b=a185_0x3924();return a185_0x2b5b=function(_0x59baca,_0x585977){_0x59baca=_0x59baca-0x1be;let _0x392464=_0x2dd47b[_0x59baca];return _0x392464;},a185_0x2b5b(_0x2453f2,_0x21a078);}class SalesforceLogger2{constructor(_0x26ac1c,_0x20a76e){const _0x34eb64=a185_0x571509;this['loggerId']=_0x26ac1c,this[_0x34eb64(0x1d4)]=_0x20a76e,this[_0x34eb64(0x1d7)]=create_request_util_1[_0x34eb64(0x1eb)](typedi_1[_0x34eb64(0x1c3)][_0x34eb64(0x1db)](salesforce_auth_service_1[_0x34eb64(0x1e8)])),this[_0x34eb64(0x1e7)]=new core_1[(_0x34eb64(0x1d8))](SalesforceLogger2[_0x34eb64(0x1d9)]),this[_0x34eb64(0x1df)]=[];}[a185_0x571509(0x1e4)](_0x332bdc){const _0x4ef306=a185_0x571509;this[_0x4ef306(0x1d2)]=_0x332bdc;}[a185_0x571509(0x1d6)](){return this['loggerId']||'';}[a185_0x571509(0x1c0)](){const _0x40cde6=a185_0x571509;return this[_0x40cde6(0x1d4)]||'';}async[a185_0x571509(0x1be)](){const _0x47637d=a185_0x571509;try{if(!this[_0x47637d(0x1d2)])return;const _0x23b5ff=this[_0x47637d(0x1df)]['splice'](0x0)['map'](_0x40cb7b=>''+(this[_0x47637d(0x1d4)]||'')+_0x40cb7b);this[_0x47637d(0x1d2)]&&_0x23b5ff[_0x47637d(0x1dc)]&&await this['request'][_0x47637d(0x1ce)](_0x47637d(0x1e5)+(constants_1[_0x47637d(0x1e0)]?'':_0x47637d(0x1f0))+_0x47637d(0x1f1),{'messages':_0x23b5ff,'loggerId':this[_0x47637d(0x1d2)]});}catch(_0xc2d7fc){throw new salesforce_error_1[(_0x47637d(0x1e6))](_0xc2d7fc);}}['log'](_0x9daf5e){const _0x3da0d4=a185_0x571509;return this['logger'][_0x3da0d4(0x1ef)](_0x3da0d4(0x1dd),_0x9daf5e),this[_0x3da0d4(0x1df)][_0x3da0d4(0x1da)](_0x9daf5e),this;}static async['createLogger'](){const _0x42bd13=a185_0x571509;try{const _0x526997=typedi_1['default']['get'](salesforce_rest_service_1['SalesforceRestService']),_0x2d45dc=await _0x526997[_0x42bd13(0x1ce)](constants_1[_0x42bd13(0x1c7)]+'Log__c',{});return new SalesforceLogger2(_0x2d45dc);}catch(_0x179c30){throw new salesforce_error_1['SalesforceError'](_0x179c30);}}async[a185_0x571509(0x1ec)](){const _0xdfbb40=a185_0x571509;try{if(!this[_0xdfbb40(0x1d2)])return;const _0x55ed39=typedi_1['default'][_0xdfbb40(0x1db)](salesforce_rest_service_1['SalesforceRestService']);await _0x55ed39[_0xdfbb40(0x1bf)](constants_1['FLOSUM_GIT_NAMESPACE']+_0xdfbb40(0x1e2),this[_0xdfbb40(0x1d2)]),this[_0xdfbb40(0x1d2)]='',this[_0xdfbb40(0x1df)]=[];}catch(_0x43e2c7){throw new salesforce_error_1['SalesforceError'](_0x43e2c7);}}}exports[a185_0x571509(0x1c9)]=SalesforceLogger2;function a185_0x3924(){const _0x3ec5bc=['loggerId','46216BqvSUC','prefix','typedi','getLoggerId','request','Logger','name','push','get','length','[message]\x20%s','__esModule','messages','IGNORE_FLOSUM_GIT_NAMESPACE','21FNePjk','Log__c','2pgGMWU','setLoggerId','services/apexrest','SalesforceError','logger','SalesforceAuthService','659848AlApHW','../errors/salesforce.error','createSalesforceRequest','removeLogger','./salesforce-auth.service','11YMDqvr','log','/flosum_git','/logger','__importDefault','send','delete','getPrefix','175iIfcgz','apply','default','constructor','17057080zFojOq','toString','FLOSUM_GIT_NAMESPACE','2410648RJrxyj','SalesforceLogger2','search','../../../../core','defineProperty','../../../../constants','post','8910090dlekrD','2644482xLXtCc','4955706gWTpQT'];a185_0x3924=function(){return _0x3ec5bc;};return a185_0x3924();}