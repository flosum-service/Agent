const a352_0x25ecba=a352_0x5b06;(function(_0x4c85ad,_0x127678){const _0x5b1bb3=a352_0x5b06,_0x50055e=_0x4c85ad();while(!![]){try{const _0x4b9e29=parseInt(_0x5b1bb3(0x175))/0x1*(parseInt(_0x5b1bb3(0x193))/0x2)+-parseInt(_0x5b1bb3(0x18a))/0x3*(parseInt(_0x5b1bb3(0x176))/0x4)+-parseInt(_0x5b1bb3(0x181))/0x5+parseInt(_0x5b1bb3(0x18b))/0x6*(parseInt(_0x5b1bb3(0x182))/0x7)+parseInt(_0x5b1bb3(0x194))/0x8*(parseInt(_0x5b1bb3(0x172))/0x9)+parseInt(_0x5b1bb3(0x173))/0xa+parseInt(_0x5b1bb3(0x17a))/0xb;if(_0x4b9e29===_0x127678)break;else _0x50055e['push'](_0x50055e['shift']());}catch(_0x4b91f5){_0x50055e['push'](_0x50055e['shift']());}}}(a352_0x46f8,0xedb44));const a352_0x12c6f1=(function(){let _0x5e2994=!![];return function(_0x60048f,_0x5b9ae4){const _0x4181e6=_0x5e2994?function(){const _0x4cd8f0=a352_0x5b06;if(_0x5b9ae4){const _0x114a30=_0x5b9ae4[_0x4cd8f0(0x191)](_0x60048f,arguments);return _0x5b9ae4=null,_0x114a30;}}:function(){};return _0x5e2994=![],_0x4181e6;};}()),a352_0x3c8bf9=a352_0x12c6f1(this,function(){const _0x493658=a352_0x5b06;return a352_0x3c8bf9[_0x493658(0x196)]()[_0x493658(0x184)](_0x493658(0x174))['toString']()[_0x493658(0x17e)](a352_0x3c8bf9)[_0x493658(0x184)](_0x493658(0x174));});function a352_0x5b06(_0x212c03,_0x2b370f){const _0x702747=a352_0x46f8();return a352_0x5b06=function(_0x3c8bf9,_0x12c6f1){_0x3c8bf9=_0x3c8bf9-0x171;let _0x46f825=_0x702747[_0x3c8bf9];return _0x46f825;},a352_0x5b06(_0x212c03,_0x2b370f);}a352_0x3c8bf9();'use strict';var __importDefault=this&&this[a352_0x25ecba(0x188)]||function(_0x35ea2d){const _0xb3a9be=a352_0x25ecba;return _0x35ea2d&&_0x35ea2d[_0xb3a9be(0x18f)]?_0x35ea2d:{'default':_0x35ea2d};};Object[a352_0x25ecba(0x17f)](exports,a352_0x25ecba(0x18f),{'value':!![]}),exports[a352_0x25ecba(0x177)]=void 0x0;const axios_1=__importDefault(require(a352_0x25ecba(0x195))),utils_1=require(a352_0x25ecba(0x192)),base_veeva_auth_1=require(a352_0x25ecba(0x180));class SalesforceAuth extends base_veeva_auth_1['BaseVeevaAuth']{constructor(_0x3522ce){const _0x1cc5d8=a352_0x25ecba;super(_0x3522ce),this[_0x1cc5d8(0x17c)]=_0x3522ce;}async[a352_0x25ecba(0x171)](){const _0x389ae6=a352_0x25ecba,{accessToken:_0xf980b0}=await SalesforceAuth[_0x389ae6(0x17d)]();return _0xf980b0;}static async[a352_0x25ecba(0x17d)](){const _0x1ac2a5=a352_0x25ecba,_0xf03359=process[_0x1ac2a5(0x183)]['SALESFORCE_TOKEN'];if(!_0xf03359)throw new Error(_0x1ac2a5(0x178));const [_0x49d751,_0x20b006,_0x3f3662,_0x3d377c]=_0xf03359['trim']()['split']('\x20');if(!_0x49d751||!_0x20b006||!_0x3f3662||!_0x3d377c)throw new Error(_0x1ac2a5(0x17b));const _0x3de160=SalesforceAuth['getLoginUrl'](_0x3d377c),{data:_0x345548}=await axios_1[_0x1ac2a5(0x179)][_0x1ac2a5(0x18c)]((0x0,utils_1[_0x1ac2a5(0x18d)])(_0x3de160,_0x1ac2a5(0x189)),null,{'params':{'grant_type':_0x1ac2a5(0x190),'refresh_token':_0x49d751,'client_id':_0x20b006,'client_secret':_0x3f3662}});return{'instanceUrl':_0x345548[_0x1ac2a5(0x185)],'accessToken':_0x345548[_0x1ac2a5(0x187)]};}static['getLoginUrl'](_0x50ea1e){const _0x2aa7d3=a352_0x25ecba;switch(_0x50ea1e){case'Sandbox':return _0x2aa7d3(0x186);case'Production':return'https://login.salesforce.com';default:throw new Error(_0x2aa7d3(0x18e)+_0x50ea1e);}}}function a352_0x46f8(){const _0x2b13af=['../../../shared/utils','1868008geSnPs','184PNKvhO','axios','toString','getNewAccessToken','660321LpHauV','5489640QzvtMN','(((.+)+)+)+$','1FhdzkA','4oPPUEI','SalesforceAuth','Salesforce\x20token\x20missing','default','8773787oxPhBU','One\x20of\x20the\x20parameters\x20in\x20Salesforce\x20Token\x20is\x20missing','auth','getAuthDetails','constructor','defineProperty','./base-veeva-auth','8645350drJWry','427889hstnbm','env','search','instance_url','https://test.salesforce.com','access_token','__importDefault','/services/oauth2/token','5446527fbBfMJ','54tdZZMe','post','joinURL','Unknown\x20Salesforce\x20Organization\x20type:\x20','__esModule','refresh_token','apply'];a352_0x46f8=function(){return _0x2b13af;};return a352_0x46f8();}exports[a352_0x25ecba(0x177)]=SalesforceAuth;