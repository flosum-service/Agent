const a364_0x4ed7f3=a364_0x372c;(function(_0x3569ba,_0x557169){const _0x2651c7=a364_0x372c,_0x13875d=_0x3569ba();while(!![]){try{const _0x4f148b=parseInt(_0x2651c7(0x1ca))/0x1*(parseInt(_0x2651c7(0x1bf))/0x2)+-parseInt(_0x2651c7(0x1d5))/0x3+-parseInt(_0x2651c7(0x1dc))/0x4*(parseInt(_0x2651c7(0x1c4))/0x5)+parseInt(_0x2651c7(0x1e5))/0x6+parseInt(_0x2651c7(0x1cd))/0x7*(-parseInt(_0x2651c7(0x1d0))/0x8)+-parseInt(_0x2651c7(0x1e4))/0x9+parseInt(_0x2651c7(0x1c3))/0xa*(parseInt(_0x2651c7(0x1c8))/0xb);if(_0x4f148b===_0x557169)break;else _0x13875d['push'](_0x13875d['shift']());}catch(_0x19e094){_0x13875d['push'](_0x13875d['shift']());}}}(a364_0x4461,0xf3013));const a364_0x19e7b5=(function(){let _0xf85f4=!![];return function(_0x120103,_0x4c7c67){const _0x598b36=_0xf85f4?function(){const _0xf0d54=a364_0x372c;if(_0x4c7c67){const _0x4e761a=_0x4c7c67[_0xf0d54(0x1d2)](_0x120103,arguments);return _0x4c7c67=null,_0x4e761a;}}:function(){};return _0xf85f4=![],_0x598b36;};}()),a364_0x4f12e2=a364_0x19e7b5(this,function(){const _0x59cb11=a364_0x372c;return a364_0x4f12e2[_0x59cb11(0x1e7)]()[_0x59cb11(0x1d7)](_0x59cb11(0x1de))[_0x59cb11(0x1e7)]()[_0x59cb11(0x1da)](a364_0x4f12e2)[_0x59cb11(0x1d7)](_0x59cb11(0x1de));});function a364_0x372c(_0x8e5a46,_0x563d54){const _0x42b658=a364_0x4461();return a364_0x372c=function(_0x4f12e2,_0x19e7b5){_0x4f12e2=_0x4f12e2-0x1bc;let _0x446118=_0x42b658[_0x4f12e2];return _0x446118;},a364_0x372c(_0x8e5a46,_0x563d54);}a364_0x4f12e2();'use strict';var __importDefault=this&&this[a364_0x4ed7f3(0x1cc)]||function(_0x1e8464){const _0x1b3e99=a364_0x4ed7f3;return _0x1e8464&&_0x1e8464[_0x1b3e99(0x1dd)]?_0x1e8464:{'default':_0x1e8464};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a364_0x4ed7f3(0x1bd)]=void 0x0;const form_data_1=__importDefault(require(a364_0x4ed7f3(0x1e1))),fs_1=require('fs'),veeva_constants_1=require('../constants/veeva.constants'),veeva_auth_utils_1=require(a364_0x4ed7f3(0x1c6)),veeva_error_1=require(a364_0x4ed7f3(0x1e3)),status_enums_1=require('../enums/status.enums');class VpkService{constructor({connection:_0x435399}){const _0x2cf28c=a364_0x4ed7f3;this[_0x2cf28c(0x1c2)]=_0x435399;}async['generate'](_0x4d0e81,_0x281a3d=0x1){const _0x543562=a364_0x4ed7f3;var _0x4b8651;const _0x48baae=new form_data_1[(_0x543562(0x1d6))]();_0x48baae[_0x543562(0x1cb)](_0x543562(0x1e0),(0x0,fs_1[_0x543562(0x1d3)])(_0x4d0e81));const _0x127f25=await this[_0x543562(0x1c2)][_0x543562(0x1e2)](veeva_constants_1[_0x543562(0x1c5)][_0x543562(0x1c0)],_0x48baae,{'responseType':_0x543562(0x1e6),'headers':{'Content-Type':'multipart/form-data'}}),_0xbcb958=(_0x4b8651=_0x127f25[_0x543562(0x1d4)][_0x543562(0x1d8)])===null||_0x4b8651===void 0x0?void 0x0:_0x4b8651[_0x543562(0x1d9)](_0x543562(0x1c7));if(!_0xbcb958)return _0x127f25[_0x543562(0x1bc)];else{const _0x22e08a=JSON[_0x543562(0x1d1)](_0x127f25[_0x543562(0x1bc)]);if(_0x281a3d>0x0)return await(0x0,veeva_auth_utils_1[_0x543562(0x1df)])(this[_0x543562(0x1c2)]),await this['generate'](_0x4d0e81,_0x281a3d-0x1);throw new veeva_error_1[(_0x543562(0x1be))](_0x22e08a['errors']);}}async[a364_0x4ed7f3(0x1ce)](_0x4fc965,_0x250ab7=0x1){const _0x13fc62=a364_0x4ed7f3,_0x25b2fb=new form_data_1[(_0x13fc62(0x1d6))]();_0x25b2fb[_0x13fc62(0x1cb)](_0x13fc62(0x1e0),(0x0,fs_1[_0x13fc62(0x1d3)])(_0x4fc965));const _0x3d2421=await this[_0x13fc62(0x1c2)][_0x13fc62(0x1e2)](veeva_constants_1[_0x13fc62(0x1c5)][_0x13fc62(0x1c9)],_0x25b2fb,{'headers':{'Content-Type':'multipart/form-data'}}),_0x14c219=_0x3d2421[_0x13fc62(0x1bc)];if(_0x14c219[_0x13fc62(0x1c1)]===status_enums_1[_0x13fc62(0x1db)][_0x13fc62(0x1cf)])return _0x14c219;else{if(_0x250ab7>0x0)return await(0x0,veeva_auth_utils_1['updateVeevaConnection'])(this[_0x13fc62(0x1c2)]),await this[_0x13fc62(0x1ce)](_0x4fc965,_0x250ab7-0x1);throw new veeva_error_1[(_0x13fc62(0x1be))](_0x14c219['errors']);}}}exports[a364_0x4ed7f3(0x1bd)]=VpkService;function a364_0x4461(){const _0x3e507b=['responseStatus','_connection','7650GGDYdL','15EHbKjp','VeevaConstants','../utils/veeva-auth.utils','application/json','7799nCFKyM','ENDPOINT_VALIDATE_VPK','1040813JfAeda','append','__importDefault','1449myDkiW','validate','SUCCESS','25416SaNyVO','parse','apply','createReadStream','headers','1707144VEGjxM','default','search','content-type','includes','constructor','VeevaResponseStatus','941368zuuUPv','__esModule','(((.+)+)+)+$','updateVeevaConnection','file','form-data','post','../classes/errors/veeva-error','566604SOQMYJ','8446908WbAGDh','arraybuffer','toString','data','VpkService','VeevaError','2dllrhm','ENDPOINT_EXPORT_IMPORT_PACKAGE'];a364_0x4461=function(){return _0x3e507b;};return a364_0x4461();}