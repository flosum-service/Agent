const a352_0x16ff9d=a352_0x17f6;(function(_0x298d53,_0x56b570){const _0x314a0c=a352_0x17f6,_0x35dc3f=_0x298d53();while(!![]){try{const _0x3f6500=parseInt(_0x314a0c(0x19f))/0x1+-parseInt(_0x314a0c(0x1a2))/0x2*(parseInt(_0x314a0c(0x19a))/0x3)+-parseInt(_0x314a0c(0x1ac))/0x4*(parseInt(_0x314a0c(0x199))/0x5)+-parseInt(_0x314a0c(0x1b0))/0x6*(parseInt(_0x314a0c(0x1ad))/0x7)+parseInt(_0x314a0c(0x1a5))/0x8*(-parseInt(_0x314a0c(0x1c1))/0x9)+parseInt(_0x314a0c(0x1b6))/0xa*(-parseInt(_0x314a0c(0x1be))/0xb)+parseInt(_0x314a0c(0x1b4))/0xc*(parseInt(_0x314a0c(0x1bc))/0xd);if(_0x3f6500===_0x56b570)break;else _0x35dc3f['push'](_0x35dc3f['shift']());}catch(_0x3c2964){_0x35dc3f['push'](_0x35dc3f['shift']());}}}(a352_0x2810,0x1b3cf));function a352_0x2810(){const _0x547de6=['instance_url','/services/oauth2/token','https://test.salesforce.com','auth','4jxKUIZ','7cJmWsn','__esModule','defineProperty','399306tqxeWq','__importDefault','BaseVeevaAuth','SalesforceAuth','12QOFvdi','constructor','48080vXSJan','env','apply','axios','../../../shared/utils','getNewAccessToken','5344859qPUbBT','One\x20of\x20the\x20parameters\x20in\x20Salesforce\x20Token\x20is\x20missing','55gRBVEf','Salesforce\x20token\x20missing','getLoginUrl','1719uwXIzP','post','288595vEOwDX','3hVDcxT','split','Sandbox','toString','./base-veeva-auth','200627eojNdM','default','refresh_token','280148YodGOv','https://login.salesforce.com','trim','8872pdWxiV','(((.+)+)+)+$','joinURL'];a352_0x2810=function(){return _0x547de6;};return a352_0x2810();}const a352_0x2b139b=(function(){let _0x2d241e=!![];return function(_0x3233c7,_0x4588a7){const _0x4f3eb6=_0x2d241e?function(){const _0x51e5d9=a352_0x17f6;if(_0x4588a7){const _0x5f4ed5=_0x4588a7[_0x51e5d9(0x1b8)](_0x3233c7,arguments);return _0x4588a7=null,_0x5f4ed5;}}:function(){};return _0x2d241e=![],_0x4f3eb6;};}()),a352_0x371398=a352_0x2b139b(this,function(){const _0x2bf9b4=a352_0x17f6;return a352_0x371398[_0x2bf9b4(0x19d)]()['search'](_0x2bf9b4(0x1a6))[_0x2bf9b4(0x19d)]()[_0x2bf9b4(0x1b5)](a352_0x371398)['search']('(((.+)+)+)+$');});a352_0x371398();'use strict';var __importDefault=this&&this[a352_0x16ff9d(0x1b1)]||function(_0x234c5d){const _0xf1df43=a352_0x16ff9d;return _0x234c5d&&_0x234c5d[_0xf1df43(0x1ae)]?_0x234c5d:{'default':_0x234c5d};};Object[a352_0x16ff9d(0x1af)](exports,a352_0x16ff9d(0x1ae),{'value':!![]}),exports[a352_0x16ff9d(0x1b3)]=void 0x0;const axios_1=__importDefault(require(a352_0x16ff9d(0x1b9))),utils_1=require(a352_0x16ff9d(0x1ba)),base_veeva_auth_1=require(a352_0x16ff9d(0x19e));function a352_0x17f6(_0x212d2c,_0x21a7c1){const _0x35c05a=a352_0x2810();return a352_0x17f6=function(_0x371398,_0x2b139b){_0x371398=_0x371398-0x198;let _0x2810ff=_0x35c05a[_0x371398];return _0x2810ff;},a352_0x17f6(_0x212d2c,_0x21a7c1);}class SalesforceAuth extends base_veeva_auth_1[a352_0x16ff9d(0x1b2)]{constructor(_0x4545a9){const _0x159070=a352_0x16ff9d;super(_0x4545a9),this[_0x159070(0x1ab)]=_0x4545a9;}async[a352_0x16ff9d(0x1bb)](){const {accessToken:_0x9998ab}=await SalesforceAuth['getAuthDetails']();return _0x9998ab;}static async['getAuthDetails'](){const _0x465fe3=a352_0x16ff9d,_0x5f1182=process[_0x465fe3(0x1b7)]['SALESFORCE_TOKEN'];if(!_0x5f1182)throw new Error(_0x465fe3(0x1bf));const [_0x21a5ff,_0x2e5dd4,_0x368b49,_0x2dea16]=_0x5f1182[_0x465fe3(0x1a4)]()[_0x465fe3(0x19b)]('\x20');if(!_0x21a5ff||!_0x2e5dd4||!_0x368b49||!_0x2dea16)throw new Error(_0x465fe3(0x1bd));const _0x547cca=SalesforceAuth[_0x465fe3(0x1c0)](_0x2dea16),{data:_0x550b00}=await axios_1[_0x465fe3(0x1a0)][_0x465fe3(0x198)]((0x0,utils_1[_0x465fe3(0x1a7)])(_0x547cca,_0x465fe3(0x1a9)),null,{'params':{'grant_type':_0x465fe3(0x1a1),'refresh_token':_0x21a5ff,'client_id':_0x2e5dd4,'client_secret':_0x368b49}});return{'instanceUrl':_0x550b00[_0x465fe3(0x1a8)],'accessToken':_0x550b00['access_token']};}static['getLoginUrl'](_0x10821b){const _0x3a947e=a352_0x16ff9d;switch(_0x10821b){case _0x3a947e(0x19c):return _0x3a947e(0x1aa);case'Production':return _0x3a947e(0x1a3);default:throw new Error('Unknown\x20Salesforce\x20Organization\x20type:\x20'+_0x10821b);}}}exports['SalesforceAuth']=SalesforceAuth;