const a126_0x3aec80=a126_0x27ca;(function(_0x702fe0,_0x45ca3b){const _0x12c769=a126_0x27ca,_0x4b6172=_0x702fe0();while(!![]){try{const _0x51314a=parseInt(_0x12c769(0x89))/0x1+-parseInt(_0x12c769(0x7b))/0x2*(-parseInt(_0x12c769(0x82))/0x3)+parseInt(_0x12c769(0x79))/0x4+parseInt(_0x12c769(0x8b))/0x5*(-parseInt(_0x12c769(0x83))/0x6)+-parseInt(_0x12c769(0x6d))/0x7*(-parseInt(_0x12c769(0x84))/0x8)+-parseInt(_0x12c769(0x77))/0x9*(parseInt(_0x12c769(0x7f))/0xa)+-parseInt(_0x12c769(0x7e))/0xb;if(_0x51314a===_0x45ca3b)break;else _0x4b6172['push'](_0x4b6172['shift']());}catch(_0x1a3036){_0x4b6172['push'](_0x4b6172['shift']());}}}(a126_0x4f31,0x90f6e));const a126_0xc0c8f3=(function(){let _0x560d50=!![];return function(_0x557457,_0x7c66e1){const _0x137bdc=_0x560d50?function(){if(_0x7c66e1){const _0x3a2c6c=_0x7c66e1['apply'](_0x557457,arguments);return _0x7c66e1=null,_0x3a2c6c;}}:function(){};return _0x560d50=![],_0x137bdc;};}()),a126_0x2bd2c9=a126_0xc0c8f3(this,function(){const _0x15814a=a126_0x27ca;return a126_0x2bd2c9[_0x15814a(0x6f)]()['search'](_0x15814a(0x88))[_0x15814a(0x6f)]()[_0x15814a(0x81)](a126_0x2bd2c9)['search'](_0x15814a(0x88));});a126_0x2bd2c9();function a126_0x27ca(_0x57f2c5,_0x5687e8){const _0x524ff8=a126_0x4f31();return a126_0x27ca=function(_0x2bd2c9,_0xc0c8f3){_0x2bd2c9=_0x2bd2c9-0x6b;let _0x4f3148=_0x524ff8[_0x2bd2c9];return _0x4f3148;},a126_0x27ca(_0x57f2c5,_0x5687e8);}'use strict';var __importDefault=this&&this[a126_0x3aec80(0x74)]||function(_0x523eb5){const _0x2b8dcb=a126_0x3aec80;return _0x523eb5&&_0x523eb5[_0x2b8dcb(0x71)]?_0x523eb5:{'default':_0x523eb5};};function a126_0x4f31(){const _0x18b948=['MAX_REQUEST_PER_HOUR','3946616BTnnTb','getHeaders','2aaAmCC','create','requestWrapper','24703206LGTPEN','2651540XyXRbG','credentials','constructor','1953654EJLOZA','6cSAtmk','3134888QLkbfK','proxyOptions','defineProperty','default','(((.+)+)+)+$','716018SqGdCN','setTimeout','164690utVlCR','interceptors','request','requestInterval','14kNhPSf','axios','toString','getBaseUrl','__esModule','provider','numberOfRequestsInQueue','__importDefault','use','createRequest','9FbpIXm'];a126_0x4f31=function(){return _0x18b948;};return a126_0x4f31();}Object[a126_0x3aec80(0x86)](exports,a126_0x3aec80(0x71),{'value':!![]}),exports['GitApiService']=void 0x0;const axios_1=__importDefault(require(a126_0x3aec80(0x6e))),promises_1=require('timers/promises'),request_1=require('../../../shared/utils/request');class GitApiService{constructor(_0x42f3c1,_0x3fd844){const _0x48dbc8=a126_0x3aec80;this[_0x48dbc8(0x72)]=_0x42f3c1,this[_0x48dbc8(0x80)]=_0x3fd844,this[_0x48dbc8(0x73)]=0x0,this[_0x48dbc8(0x78)]=-0x1,this[_0x48dbc8(0x6b)]=this[_0x48dbc8(0x76)]();}get[a126_0x3aec80(0x6c)](){const _0x500953=a126_0x3aec80;return 0x3c*0x3c*0x3e8/this[_0x500953(0x78)];}[a126_0x3aec80(0x76)](_0x2c985f){const _0x25f585=a126_0x3aec80,_0x16dbb6=axios_1[_0x25f585(0x87)][_0x25f585(0x7c)]({'baseURL':_0x2c985f||this['credentials'][_0x25f585(0x70)](),'headers':this[_0x25f585(0x7a)](),...(0x0,request_1[_0x25f585(0x85)])()});return _0x16dbb6[_0x25f585(0x8c)][_0x25f585(0x6b)][_0x25f585(0x75)](async _0x39e599=>{const _0x3ed1e2=_0x25f585,_0x44eae5=this['numberOfRequestsInQueue']++*this[_0x3ed1e2(0x6c)];return await(0x0,promises_1[_0x3ed1e2(0x8a)])(_0x44eae5),this[_0x3ed1e2(0x73)]-=0x1,_0x39e599;}),(0x0,request_1[_0x25f585(0x7d)])(_0x16dbb6);}}exports['GitApiService']=GitApiService;