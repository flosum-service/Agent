const a408_0xf334d2=a408_0x4c84;(function(_0x5ef7c7,_0x4f001f){const _0x31a588=a408_0x4c84,_0x3a7451=_0x5ef7c7();while(!![]){try{const _0x171d16=-parseInt(_0x31a588(0x90))/0x1*(parseInt(_0x31a588(0x92))/0x2)+-parseInt(_0x31a588(0xa3))/0x3+parseInt(_0x31a588(0x93))/0x4*(-parseInt(_0x31a588(0x9a))/0x5)+parseInt(_0x31a588(0x9c))/0x6*(parseInt(_0x31a588(0x8e))/0x7)+parseInt(_0x31a588(0x8d))/0x8+-parseInt(_0x31a588(0x91))/0x9*(-parseInt(_0x31a588(0xac))/0xa)+-parseInt(_0x31a588(0xa5))/0xb*(-parseInt(_0x31a588(0xb5))/0xc);if(_0x171d16===_0x4f001f)break;else _0x3a7451['push'](_0x3a7451['shift']());}catch(_0x5c8846){_0x3a7451['push'](_0x3a7451['shift']());}}}(a408_0x415c,0x864d8));const a408_0x5aaee8=(function(){let _0xea2af2=!![];return function(_0x5ebf27,_0x11b5f2){const _0x1bdaf1=_0xea2af2?function(){const _0x30aadf=a408_0x4c84;if(_0x11b5f2){const _0x1b4877=_0x11b5f2[_0x30aadf(0xaf)](_0x5ebf27,arguments);return _0x11b5f2=null,_0x1b4877;}}:function(){};return _0xea2af2=![],_0x1bdaf1;};}()),a408_0x57112b=a408_0x5aaee8(this,function(){const _0x2add1b=a408_0x4c84;return a408_0x57112b[_0x2add1b(0xa6)]()[_0x2add1b(0xad)]('(((.+)+)+)+$')[_0x2add1b(0xa6)]()[_0x2add1b(0x9d)](a408_0x57112b)[_0x2add1b(0xad)](_0x2add1b(0xb0));});function a408_0x4c84(_0x42a44d,_0x140f6d){const _0x483a1e=a408_0x415c();return a408_0x4c84=function(_0x57112b,_0x5aaee8){_0x57112b=_0x57112b-0x8d;let _0x415c1e=_0x483a1e[_0x57112b];return _0x415c1e;},a408_0x4c84(_0x42a44d,_0x140f6d);}a408_0x57112b();function a408_0x415c(){const _0x3b0be4=['ENDPOINT_VALIDATE_VPK','post','1266984qJmZsR','2513sXwNDN','VeevaResponseStatus','1zWmKpB','72AAOLrL','384882ghLFex','114836oQDUhq','generate','VpkService','arraybuffer','includes','updateVeevaConnection','validate','85XAmahj','data','3882ZyKjWy','constructor','defineProperty','headers','errors','multipart/form-data','file','1803291tyqbBA','../enums/status.enums','55SuNdYF','toString','application/json','parse','../utils/veeva-auth.utils','__esModule','ENDPOINT_EXPORT_IMPORT_PACKAGE','206530TzTJjw','search','SUCCESS','apply','(((.+)+)+)+$','../classes/errors/veeva-error','VeevaConstants','createReadStream','__importDefault','3061980jDzpcr','VeevaError','_connection'];a408_0x415c=function(){return _0x3b0be4;};return a408_0x415c();}'use strict';var __importDefault=this&&this[a408_0xf334d2(0xb4)]||function(_0x20d3b2){const _0x189e7a=a408_0xf334d2;return _0x20d3b2&&_0x20d3b2[_0x189e7a(0xaa)]?_0x20d3b2:{'default':_0x20d3b2};};Object[a408_0xf334d2(0x9e)](exports,a408_0xf334d2(0xaa),{'value':!![]}),exports[a408_0xf334d2(0x95)]=void 0x0;const form_data_1=__importDefault(require('form-data')),fs_1=require('fs'),veeva_constants_1=require('../constants/veeva.constants'),veeva_auth_utils_1=require(a408_0xf334d2(0xa9)),veeva_error_1=require(a408_0xf334d2(0xb1)),status_enums_1=require(a408_0xf334d2(0xa4));class VpkService{constructor({connection:_0x1e9257}){const _0x1b2310=a408_0xf334d2;this[_0x1b2310(0xb7)]=_0x1e9257;}async['generate'](_0x125f88,_0x3dafb4=0x1){const _0x3d350b=a408_0xf334d2;var _0xa73f84;const _0x2a7f19=new form_data_1['default']();_0x2a7f19['append'](_0x3d350b(0xa2),(0x0,fs_1[_0x3d350b(0xb3)])(_0x125f88));const _0x18c6af=await this['_connection'][_0x3d350b(0xb9)](veeva_constants_1[_0x3d350b(0xb2)][_0x3d350b(0xab)],_0x2a7f19,{'responseType':_0x3d350b(0x96),'headers':{'Content-Type':_0x3d350b(0xa1)}}),_0x11d579=(_0xa73f84=_0x18c6af[_0x3d350b(0x9f)]['content-type'])===null||_0xa73f84===void 0x0?void 0x0:_0xa73f84[_0x3d350b(0x97)](_0x3d350b(0xa7));if(!_0x11d579)return _0x18c6af[_0x3d350b(0x9b)];else{const _0x38fc29=JSON[_0x3d350b(0xa8)](_0x18c6af['data']);if(_0x3dafb4>0x0)return await(0x0,veeva_auth_utils_1[_0x3d350b(0x98)])(this[_0x3d350b(0xb7)]),await this[_0x3d350b(0x94)](_0x125f88,_0x3dafb4-0x1);throw new veeva_error_1[(_0x3d350b(0xb6))](_0x38fc29[_0x3d350b(0xa0)]);}}async[a408_0xf334d2(0x99)](_0x23c3cc,_0x5bc500=0x1){const _0x3edcbc=a408_0xf334d2,_0x3b06bb=new form_data_1['default']();_0x3b06bb['append'](_0x3edcbc(0xa2),(0x0,fs_1[_0x3edcbc(0xb3)])(_0x23c3cc));const _0x4381e1=await this[_0x3edcbc(0xb7)][_0x3edcbc(0xb9)](veeva_constants_1[_0x3edcbc(0xb2)][_0x3edcbc(0xb8)],_0x3b06bb,{'headers':{'Content-Type':'multipart/form-data'}}),_0x23bca4=_0x4381e1[_0x3edcbc(0x9b)];if(_0x23bca4['responseStatus']===status_enums_1[_0x3edcbc(0x8f)][_0x3edcbc(0xae)])return _0x23bca4;else{if(_0x5bc500>0x0)return await(0x0,veeva_auth_utils_1[_0x3edcbc(0x98)])(this[_0x3edcbc(0xb7)]),await this[_0x3edcbc(0x99)](_0x23c3cc,_0x5bc500-0x1);throw new veeva_error_1[(_0x3edcbc(0xb6))](_0x23bca4[_0x3edcbc(0xa0)]);}}}exports[a408_0xf334d2(0x95)]=VpkService;