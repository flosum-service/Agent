const a72_0x290af2=a72_0x14c1;function a72_0x14c1(_0xb74af4,_0x3ed295){const _0x4a24e5=a72_0x1d95();return a72_0x14c1=function(_0x302737,_0xb1d55){_0x302737=_0x302737-0x14b;let _0x1d9538=_0x4a24e5[_0x302737];return _0x1d9538;},a72_0x14c1(_0xb74af4,_0x3ed295);}(function(_0x260978,_0x295b77){const _0x186a24=a72_0x14c1,_0x2e2ced=_0x260978();while(!![]){try{const _0x3e8577=-parseInt(_0x186a24(0x164))/0x1+-parseInt(_0x186a24(0x163))/0x2*(parseInt(_0x186a24(0x161))/0x3)+parseInt(_0x186a24(0x16a))/0x4*(-parseInt(_0x186a24(0x16d))/0x5)+parseInt(_0x186a24(0x162))/0x6*(-parseInt(_0x186a24(0x15e))/0x7)+-parseInt(_0x186a24(0x16b))/0x8+parseInt(_0x186a24(0x14c))/0x9+-parseInt(_0x186a24(0x15d))/0xa*(-parseInt(_0x186a24(0x166))/0xb);if(_0x3e8577===_0x295b77)break;else _0x2e2ced['push'](_0x2e2ced['shift']());}catch(_0x5a4f23){_0x2e2ced['push'](_0x2e2ced['shift']());}}}(a72_0x1d95,0xc7103));const a72_0xb1d55=(function(){let _0x436b7a=!![];return function(_0x1a53dc,_0x16600b){const _0x215518=_0x436b7a?function(){if(_0x16600b){const _0x5694b5=_0x16600b['apply'](_0x1a53dc,arguments);return _0x16600b=null,_0x5694b5;}}:function(){};return _0x436b7a=![],_0x215518;};}()),a72_0x302737=a72_0xb1d55(this,function(){const _0x4d6c6a=a72_0x14c1;return a72_0x302737['toString']()['search'](_0x4d6c6a(0x14d))[_0x4d6c6a(0x16e)]()[_0x4d6c6a(0x15f)](a72_0x302737)[_0x4d6c6a(0x155)]('(((.+)+)+)+$');});a72_0x302737();'use strict';var __importDefault=this&&this[a72_0x290af2(0x167)]||function(_0x2e8665){const _0x511ee1=a72_0x290af2;return _0x2e8665&&_0x2e8665[_0x511ee1(0x170)]?_0x2e8665:{'default':_0x2e8665};};function a72_0x1d95(){const _0x15a3e6=['toString','../../shared/utils','__esModule','Agent','proxy','7781958sZQfch','(((.+)+)+)+$','getHeaders','default','request','appSettings','rejectUnauthorized','createRequest','requestCooldown','search','use','options','requestWrapper','../../../constants','numberOfRequestsInQueue','interceptors','defineProperty','261550FayvVW','544152eIGHps','constructor','../../shared/utils/request','183mZVbtX','6JwavAw','48082PVYZuR','286221faIMqS','GitApiService','1001DlVkVw','__importDefault','MAX_REQUEST_PER_HOUR','https-proxy-agent/dist/agent','50308CfNBVR','1873704HRPFCB','create','145YZZecr'];a72_0x1d95=function(){return _0x15a3e6;};return a72_0x1d95();}Object[a72_0x290af2(0x15c)](exports,a72_0x290af2(0x170),{'value':!![]}),exports['GitApiService']=void 0x0;const constants_1=require(a72_0x290af2(0x159)),request_1=require(a72_0x290af2(0x160)),axios_1=__importDefault(require('axios')),https_1=__importDefault(require('https')),agent_1=__importDefault(require(a72_0x290af2(0x169))),utils_1=require(a72_0x290af2(0x16f));class GitApiService{constructor(_0x2dc74e){const _0xcfbd3f=a72_0x290af2;this[_0xcfbd3f(0x151)]=_0x2dc74e,this[_0xcfbd3f(0x15a)]=0x0,this[_0xcfbd3f(0x168)]=-0x1,this[_0xcfbd3f(0x150)]=this[_0xcfbd3f(0x153)]();}get[a72_0x290af2(0x154)](){const _0x4b65db=a72_0x290af2;return 0x3c*0x3c*0x3e8/this[_0x4b65db(0x168)];}['createRequest'](_0x49e088){const _0x55c4e6=a72_0x290af2;let _0x358d6a=new https_1[(_0x55c4e6(0x14f))][(_0x55c4e6(0x171))]({'rejectUnauthorized':![]});this[_0x55c4e6(0x151)][_0x55c4e6(0x14b)]&&(_0x358d6a=new agent_1[(_0x55c4e6(0x14f))](this[_0x55c4e6(0x151)][_0x55c4e6(0x14b)]),_0x358d6a[_0x55c4e6(0x157)][_0x55c4e6(0x152)]=![]);const _0x39d25c=axios_1['default'][_0x55c4e6(0x16c)]({'baseURL':_0x49e088||constants_1['GIT_API_LINKS'][this[_0x55c4e6(0x151)]['provider']],'headers':this[_0x55c4e6(0x14e)](),'httpsAgent':_0x358d6a});return _0x39d25c[_0x55c4e6(0x15b)][_0x55c4e6(0x150)][_0x55c4e6(0x156)](async _0x221c1b=>{const _0x42d30d=_0x55c4e6,_0x22843d=this[_0x42d30d(0x15a)]++*this['requestCooldown'];return await utils_1['sleep'](_0x22843d),this['numberOfRequestsInQueue']-=0x1,_0x221c1b;}),request_1[_0x55c4e6(0x158)](_0x39d25c);}}exports[a72_0x290af2(0x165)]=GitApiService;