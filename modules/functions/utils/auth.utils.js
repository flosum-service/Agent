const a89_0x1b6da5=a89_0x5735;(function(_0x5ec41b,_0x2da736){const _0x668640=a89_0x5735,_0x20dd70=_0x5ec41b();while(!![]){try{const _0x4b3b2e=-parseInt(_0x668640(0x1b2))/0x1+parseInt(_0x668640(0x1a3))/0x2+parseInt(_0x668640(0x1bb))/0x3+parseInt(_0x668640(0x1af))/0x4+-parseInt(_0x668640(0x1b0))/0x5*(-parseInt(_0x668640(0x1b4))/0x6)+-parseInt(_0x668640(0x1b8))/0x7*(parseInt(_0x668640(0x1ba))/0x8)+-parseInt(_0x668640(0x1a6))/0x9*(-parseInt(_0x668640(0x1a2))/0xa);if(_0x4b3b2e===_0x2da736)break;else _0x20dd70['push'](_0x20dd70['shift']());}catch(_0x2cf3ef){_0x20dd70['push'](_0x20dd70['shift']());}}}(a89_0x31a9,0xde3b4));const a89_0x4b391d=(function(){let _0x10ce86=!![];return function(_0x51e4a5,_0xfb3539){const _0x4e5656=_0x10ce86?function(){if(_0xfb3539){const _0x185099=_0xfb3539['apply'](_0x51e4a5,arguments);return _0xfb3539=null,_0x185099;}}:function(){};return _0x10ce86=![],_0x4e5656;};}()),a89_0x38f3ca=a89_0x4b391d(this,function(){const _0x49ff2b=a89_0x5735;return a89_0x38f3ca['toString']()['search'](_0x49ff2b(0x1a8))[_0x49ff2b(0x1ac)]()[_0x49ff2b(0x1a9)](a89_0x38f3ca)[_0x49ff2b(0x1ae)]('(((.+)+)+)+$');});a89_0x38f3ca();'use strict';var __importDefault=this&&this[a89_0x1b6da5(0x1a5)]||function(_0x5f535c){return _0x5f535c&&_0x5f535c['__esModule']?_0x5f535c:{'default':_0x5f535c};};Object[a89_0x1b6da5(0x1a7)](exports,a89_0x1b6da5(0x1bc),{'value':!![]}),exports[a89_0x1b6da5(0x1b5)]=void 0x0;const axios_1=__importDefault(require(a89_0x1b6da5(0x1b7)));function a89_0x31a9(){const _0x2f7a7a=['axios','7wwDNIF','refresh_token','11806680nXfkFF','4987887eEuuBV','__esModule','752420PkqZQm','358948lRSLQX','/services/oauth2/token','__importDefault','9hQCvud','defineProperty','(((.+)+)+)+$','constructor','One\x20of\x20the\x20parameters\x20is\x20missing','split','toString','SALESFORCE_TOKEN','search','3321816wPhJYE','3369830tRhvlL','default','1709636laAsrg','updateAccessToken','12gVaFjd','AuthUtils','env'];a89_0x31a9=function(){return _0x2f7a7a;};return a89_0x31a9();}function a89_0x5735(_0x2ebc19,_0x567c7a){const _0x55247f=a89_0x31a9();return a89_0x5735=function(_0x38f3ca,_0x4b391d){_0x38f3ca=_0x38f3ca-0x1a2;let _0x31a92b=_0x55247f[_0x38f3ca];return _0x31a92b;},a89_0x5735(_0x2ebc19,_0x567c7a);}class AuthUtils{static async[a89_0x1b6da5(0x1b3)](_0x2082c3,_0x4e5af1,_0x1f4e9f,_0x1cb701){const _0x4fbf05=a89_0x1b6da5,{data:_0x14118d}=await axios_1[_0x4fbf05(0x1b1)]['post'](_0x2082c3+_0x4fbf05(0x1a4),null,{'params':{'grant_type':_0x4fbf05(0x1b9),'refresh_token':_0x4e5af1,'client_id':_0x1f4e9f,'client_secret':_0x1cb701}});return _0x14118d['access_token'];}static['getAuthParameters'](_0x3bbbbe){const _0x5add84=a89_0x1b6da5,_0x1a37da=process[_0x5add84(0x1b6)][_0x5add84(0x1ad)];if(!_0x1a37da)throw new Error('Salesforce\x20token\x20missing');const [_0x22cdc0,_0x1a8f99,_0x1b5852,_0xfe408d]=_0x1a37da['trim']()[_0x5add84(0x1ab)]('\x20');if(!_0x22cdc0||!_0x1a8f99||!_0x1b5852||!_0xfe408d)throw new Error(_0x5add84(0x1aa));return{'instanceUrl':_0x3bbbbe,'refreshToken':_0x22cdc0,'clientId':_0x1a8f99,'clientSecret':_0x1b5852};}}exports[a89_0x1b6da5(0x1b5)]=AuthUtils;