const a72_0x5e4e0e=a72_0x2666;(function(_0x46ee73,_0xa46004){const _0x249af8=a72_0x2666,_0x2b1641=_0x46ee73();while(!![]){try{const _0x39e7cf=parseInt(_0x249af8(0xb3))/0x1+-parseInt(_0x249af8(0xcb))/0x2*(-parseInt(_0x249af8(0xb0))/0x3)+parseInt(_0x249af8(0xb9))/0x4+parseInt(_0x249af8(0xb4))/0x5*(-parseInt(_0x249af8(0xd3))/0x6)+-parseInt(_0x249af8(0xbd))/0x7*(parseInt(_0x249af8(0xb5))/0x8)+-parseInt(_0x249af8(0xd4))/0x9+-parseInt(_0x249af8(0xaf))/0xa;if(_0x39e7cf===_0xa46004)break;else _0x2b1641['push'](_0x2b1641['shift']());}catch(_0x4e9d8f){_0x2b1641['push'](_0x2b1641['shift']());}}}(a72_0x28f9,0x3294d));const a72_0x2c9821=(function(){let _0x295a95=!![];return function(_0x3912c3,_0x66dff1){const _0x336493=_0x295a95?function(){const _0x4d3a9c=a72_0x2666;if(_0x66dff1){const _0x36c5cd=_0x66dff1[_0x4d3a9c(0xd0)](_0x3912c3,arguments);return _0x66dff1=null,_0x36c5cd;}}:function(){};return _0x295a95=![],_0x336493;};}()),a72_0x14006f=a72_0x2c9821(this,function(){const _0x51fd00=a72_0x2666;return a72_0x14006f['toString']()[_0x51fd00(0xc3)]('(((.+)+)+)+$')['toString']()[_0x51fd00(0xc5)](a72_0x14006f)[_0x51fd00(0xc3)](_0x51fd00(0xc2));});a72_0x14006f();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x2c6f34){const _0xf90e95=a72_0x2666;return _0x2c6f34&&_0x2c6f34[_0xf90e95(0xbf)]?_0x2c6f34:{'default':_0x2c6f34};};function a72_0x28f9(){const _0x3e7f37=['defineProperty','getHeaders','appSettings','apply','../../../constants','https','59310xkBHoE','387072zOXDAd','default','106830Yewyks','13761bgOJdt','../../shared/utils','provider','394107AADwWR','90OPLqSq','2502056dxymdv','requestCooldown','use','GitApiService','769280NnssSv','rejectUnauthorized','createRequest','Agent','7GVaATE','interceptors','__esModule','numberOfRequestsInQueue','options','(((.+)+)+)+$','search','sleep','constructor','https-proxy-agent/dist/agent','../../shared/utils/request','request','proxy','requestWrapper','72ybwdRw','MAX_REQUEST_PER_HOUR'];a72_0x28f9=function(){return _0x3e7f37;};return a72_0x28f9();}Object[a72_0x5e4e0e(0xcd)](exports,a72_0x5e4e0e(0xbf),{'value':!![]}),exports['GitApiService']=void 0x0;function a72_0x2666(_0x3b4c52,_0x40be5d){const _0x59e0ee=a72_0x28f9();return a72_0x2666=function(_0x14006f,_0x2c9821){_0x14006f=_0x14006f-0xaf;let _0x28f9bb=_0x59e0ee[_0x14006f];return _0x28f9bb;},a72_0x2666(_0x3b4c52,_0x40be5d);}const constants_1=require(a72_0x5e4e0e(0xd1)),request_1=require(a72_0x5e4e0e(0xc7)),axios_1=__importDefault(require('axios')),https_1=__importDefault(require(a72_0x5e4e0e(0xd2))),agent_1=__importDefault(require(a72_0x5e4e0e(0xc6))),utils_1=require(a72_0x5e4e0e(0xb1));class GitApiService{constructor(_0x1c6673){const _0x559553=a72_0x5e4e0e;this[_0x559553(0xcf)]=_0x1c6673,this[_0x559553(0xc0)]=0x0,this['MAX_REQUEST_PER_HOUR']=-0x1,this[_0x559553(0xc8)]=this[_0x559553(0xbb)]();}get['requestCooldown'](){const _0x19fbc3=a72_0x5e4e0e;return 0x3c*0x3c*0x3e8/this[_0x19fbc3(0xcc)];}['createRequest'](_0x1dc369){const _0xc74125=a72_0x5e4e0e;let _0x5f60c4=new https_1[(_0xc74125(0xd5))][(_0xc74125(0xbc))]({'rejectUnauthorized':![]});this['appSettings'][_0xc74125(0xc9)]&&(_0x5f60c4=new agent_1[(_0xc74125(0xd5))](this[_0xc74125(0xcf)][_0xc74125(0xc9)]),_0x5f60c4[_0xc74125(0xc1)][_0xc74125(0xba)]=![]);const _0xf54036=axios_1['default']['create']({'baseURL':_0x1dc369||constants_1['GIT_API_LINKS'][this[_0xc74125(0xcf)][_0xc74125(0xb2)]],'headers':this[_0xc74125(0xce)](),'httpsAgent':_0x5f60c4});return _0xf54036[_0xc74125(0xbe)][_0xc74125(0xc8)][_0xc74125(0xb7)](async _0x3bf056=>{const _0x52e8ee=_0xc74125,_0x47f381=this['numberOfRequestsInQueue']++*this[_0x52e8ee(0xb6)];return await utils_1[_0x52e8ee(0xc4)](_0x47f381),this[_0x52e8ee(0xc0)]-=0x1,_0x3bf056;}),request_1[_0xc74125(0xca)](_0xf54036);}}exports[a72_0x5e4e0e(0xb8)]=GitApiService;