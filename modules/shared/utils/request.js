const a227_0x120458=a227_0x54a1;(function(_0x47f151,_0x38fffc){const _0x14c35d=a227_0x54a1,_0x4c6adf=_0x47f151();while(!![]){try{const _0x44700f=-parseInt(_0x14c35d(0xfa))/0x1+-parseInt(_0x14c35d(0xfd))/0x2+parseInt(_0x14c35d(0xe3))/0x3*(parseInt(_0x14c35d(0x105))/0x4)+-parseInt(_0x14c35d(0xe5))/0x5+-parseInt(_0x14c35d(0x103))/0x6*(parseInt(_0x14c35d(0xf5))/0x7)+parseInt(_0x14c35d(0xec))/0x8*(parseInt(_0x14c35d(0xfc))/0x9)+parseInt(_0x14c35d(0x108))/0xa;if(_0x44700f===_0x38fffc)break;else _0x4c6adf['push'](_0x4c6adf['shift']());}catch(_0x4fb3cc){_0x4c6adf['push'](_0x4c6adf['shift']());}}}(a227_0x14ec,0xdea9c));const a227_0x2801b8=(function(){let _0x28f637=!![];return function(_0x43a8cb,_0x14dfe3){const _0xe11ad8=_0x28f637?function(){const _0xd1a5a4=a227_0x54a1;if(_0x14dfe3){const _0x67a305=_0x14dfe3[_0xd1a5a4(0xf1)](_0x43a8cb,arguments);return _0x14dfe3=null,_0x67a305;}}:function(){};return _0x28f637=![],_0xe11ad8;};}()),a227_0x2f6bd1=a227_0x2801b8(this,function(){const _0x374ea2=a227_0x54a1;return a227_0x2f6bd1[_0x374ea2(0xfe)]()['search']('(((.+)+)+)+$')[_0x374ea2(0xfe)]()['constructor'](a227_0x2f6bd1)[_0x374ea2(0xe6)]('(((.+)+)+)+$');});a227_0x2f6bd1();function a227_0x54a1(_0x2aad87,_0x2b3683){const _0x5df3da=a227_0x14ec();return a227_0x54a1=function(_0x2f6bd1,_0x2801b8){_0x2f6bd1=_0x2f6bd1-0xe3;let _0x14ece0=_0x5df3da[_0x2f6bd1];return _0x14ece0;},a227_0x54a1(_0x2aad87,_0x2b3683);}'use strict';var __importDefault=this&&this[a227_0x120458(0xee)]||function(_0x83dcb7){const _0x511d9d=a227_0x120458;return _0x83dcb7&&_0x83dcb7[_0x511d9d(0xea)]?_0x83dcb7:{'default':_0x83dcb7};};Object[a227_0x120458(0x100)](exports,a227_0x120458(0xea),{'value':!![]}),exports['requestWrapper']=exports[a227_0x120458(0x106)]=void 0x0;const errors_1=require(a227_0x120458(0xef)),internal_server_error_1=require(a227_0x120458(0x101)),bad_request_error_1=require('../../../core/errors/bad-request.error'),too_many_requests_error_1=require('../../../core/errors/too-many-requests.error'),request_error_1=require(a227_0x120458(0xf8)),agent_1=__importDefault(require('https-proxy-agent/dist/agent'));function proxyOptions(){const _0x1edac8=a227_0x120458;let _0x990490=undefined;return process[_0x1edac8(0xf0)][_0x1edac8(0xf4)]&&(_0x990490=new agent_1[(_0x1edac8(0xe4))](process[_0x1edac8(0xf0)]['HTTP_PROXY']),_0x990490[_0x1edac8(0xe9)][_0x1edac8(0x107)]=![]),{'proxy':![],'httpsAgent':_0x990490};}function a227_0x14ec(){const _0x213b1c=['../errors/request.error','use','1010282oNUJrr','RequestError','1314KMTgPQ','772214lSdUFI','toString','string','defineProperty','../../../core/errors/internal-server.error','ENOTFOUND','9012UBRGdu','error','88AlRkpA','proxyOptions','rejectUnauthorized','34387260nSPRpx','33780OpjQWi','default','6022935xkCugL','search','code','data','options','__esModule','ERR_SOCKET_CLOSED','24816jmjITc','message','__importDefault','../../../constants/errors','env','apply','InternalServerError','response','HTTP_PROXY','2919IHBQBw','ERR_GIT_SERVICE_UNAVAILABLE','TooManyRequests'];a227_0x14ec=function(){return _0x213b1c;};return a227_0x14ec();}exports[a227_0x120458(0x106)]=proxyOptions;function requestWrapper(_0x872d){const _0x475b9b=a227_0x120458;return _0x872d['interceptors'][_0x475b9b(0xf3)][_0x475b9b(0xf9)](_0x158233=>_0x158233[_0x475b9b(0xe8)],_0x48ac87=>{const _0x32fef9=_0x475b9b;var _0x1c641e,_0x4b70c6,_0x4166b1;if((_0x48ac87===null||_0x48ac87===void 0x0?void 0x0:_0x48ac87[_0x32fef9(0xe7)])===_0x32fef9(0x102)||(_0x48ac87===null||_0x48ac87===void 0x0?void 0x0:_0x48ac87[_0x32fef9(0xe7)])==='ECONNREFUSED')throw new internal_server_error_1[(_0x32fef9(0xf2))](errors_1[_0x32fef9(0xf6)]);if((_0x48ac87===null||_0x48ac87===void 0x0?void 0x0:_0x48ac87[_0x32fef9(0xe7)])===_0x32fef9(0xeb))throw new bad_request_error_1['BadRequestError']('Socket\x20is\x20closed.\x20Connection\x20to\x20remote\x20server\x20was\x20closed\x20without\x20any\x20reason/error.');if(((_0x1c641e=_0x48ac87[_0x32fef9(0xf3)])===null||_0x1c641e===void 0x0?void 0x0:_0x1c641e['status'])===0x1ad)throw new too_many_requests_error_1[(_0x32fef9(0xf7))](_0x48ac87);const _0x338381=((_0x4b70c6=_0x48ac87===null||_0x48ac87===void 0x0?void 0x0:_0x48ac87['response'])===null||_0x4b70c6===void 0x0?void 0x0:_0x4b70c6[_0x32fef9(0xe8)])||{},_0x20bb08=_0x338381[_0x32fef9(0xed)]||typeof _0x338381[_0x32fef9(0x104)]===_0x32fef9(0xff)?_0x338381[_0x32fef9(0x104)]:((_0x4166b1=_0x338381[_0x32fef9(0x104)])===null||_0x4166b1===void 0x0?void 0x0:_0x4166b1['message'])||_0x48ac87[_0x32fef9(0xed)];throw new request_error_1[(_0x32fef9(0xfb))](_0x20bb08,_0x338381);}),_0x872d;}exports['requestWrapper']=requestWrapper;