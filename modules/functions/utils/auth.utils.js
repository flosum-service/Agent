const a105_0x243a7c=a105_0x4f67;(function(_0x119c45,_0x50f071){const _0x4680d8=a105_0x4f67,_0xe4abd3=_0x119c45();while(!![]){try{const _0x24722b=parseInt(_0x4680d8(0xbb))/0x1+parseInt(_0x4680d8(0xb0))/0x2+parseInt(_0x4680d8(0xaf))/0x3+-parseInt(_0x4680d8(0xb3))/0x4*(parseInt(_0x4680d8(0xa8))/0x5)+parseInt(_0x4680d8(0xbc))/0x6+parseInt(_0x4680d8(0xb9))/0x7*(parseInt(_0x4680d8(0xb4))/0x8)+-parseInt(_0x4680d8(0xb8))/0x9;if(_0x24722b===_0x50f071)break;else _0xe4abd3['push'](_0xe4abd3['shift']());}catch(_0x3b1cbf){_0xe4abd3['push'](_0xe4abd3['shift']());}}}(a105_0x27df,0x1e07f));const a105_0x512986=(function(){let _0x94cd3b=!![];return function(_0x34210c,_0x1d2c80){const _0x3835aa=_0x94cd3b?function(){const _0x1fdd6a=a105_0x4f67;if(_0x1d2c80){const _0x17cb39=_0x1d2c80[_0x1fdd6a(0xa7)](_0x34210c,arguments);return _0x1d2c80=null,_0x17cb39;}}:function(){};return _0x94cd3b=![],_0x3835aa;};}()),a105_0x1cac31=a105_0x512986(this,function(){const _0x39b2e9=a105_0x4f67;return a105_0x1cac31['toString']()[_0x39b2e9(0xa9)](_0x39b2e9(0xa3))['toString']()[_0x39b2e9(0xae)](a105_0x1cac31)['search'](_0x39b2e9(0xa3));});a105_0x1cac31();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x3de6bb){const _0x4753af=a105_0x4f67;return _0x3de6bb&&_0x3de6bb[_0x4753af(0xb2)]?_0x3de6bb:{'default':_0x3de6bb};};Object[a105_0x243a7c(0xa2)](exports,'__esModule',{'value':!![]}),exports['AuthUtils']=void 0x0;function a105_0x4f67(_0x299922,_0x452c95){const _0x31f73f=a105_0x27df();return a105_0x4f67=function(_0x1cac31,_0x512986){_0x1cac31=_0x1cac31-0xa2;let _0x27df3c=_0x31f73f[_0x1cac31];return _0x27df3c;},a105_0x4f67(_0x299922,_0x452c95);}const axios_1=__importDefault(require(a105_0x243a7c(0xb1)));class AuthUtils{static async[a105_0x243a7c(0xa4)](_0x4ff31b,_0x1a4de8,_0x3da3e1,_0x1645c0){const _0x138c0a=a105_0x243a7c,{data:_0x3b74da}=await axios_1[_0x138c0a(0xa5)][_0x138c0a(0xa6)](_0x4ff31b+_0x138c0a(0xb7),null,{'params':{'grant_type':_0x138c0a(0xab),'refresh_token':_0x1a4de8,'client_id':_0x3da3e1,'client_secret':_0x1645c0}});return _0x3b74da[_0x138c0a(0xac)];}static[a105_0x243a7c(0xb5)](_0x14ddce){const _0x1c58ea=a105_0x243a7c,_0x59c8ef=process['env']['SALESFORCE_TOKEN'];if(!_0x59c8ef)throw new Error(_0x1c58ea(0xb6));const [_0x324c2b,_0x4e9b4e,_0x4c0284,_0x230a2f]=_0x59c8ef[_0x1c58ea(0xad)]()[_0x1c58ea(0xba)]('\x20');if(!_0x324c2b||!_0x4e9b4e||!_0x4c0284||!_0x230a2f)throw new Error('One\x20of\x20the\x20parameters\x20is\x20missing');return{'instanceUrl':_0x14ddce,'refreshToken':_0x324c2b,'clientId':_0x4e9b4e,'clientSecret':_0x4c0284};}}exports[a105_0x243a7c(0xaa)]=AuthUtils;function a105_0x27df(){const _0x55d0c3=['__esModule','168988bCveqa','344KLKTYT','getAuthParameters','Salesforce\x20token\x20missing','/services/oauth2/token','4398471rtiXQE','819QcmyjO','split','108542NqAgPY','1253862ePdffq','defineProperty','(((.+)+)+)+$','updateAccessToken','default','post','apply','10LiMnFm','search','AuthUtils','refresh_token','access_token','trim','constructor','445896YHTppe','450076hAqwJF','axios'];a105_0x27df=function(){return _0x55d0c3;};return a105_0x27df();}