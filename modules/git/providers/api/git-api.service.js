const a166_0x181933=a166_0x25ee;(function(_0x84543b,_0xe7f190){const _0x509793=a166_0x25ee,_0x26e4e4=_0x84543b();while(!![]){try{const _0x49c030=-parseInt(_0x509793(0xd8))/0x1+parseInt(_0x509793(0xd2))/0x2*(-parseInt(_0x509793(0xdc))/0x3)+parseInt(_0x509793(0xd3))/0x4+parseInt(_0x509793(0xd9))/0x5+parseInt(_0x509793(0xdf))/0x6+parseInt(_0x509793(0xdd))/0x7*(parseInt(_0x509793(0xd7))/0x8)+-parseInt(_0x509793(0xce))/0x9;if(_0x49c030===_0xe7f190)break;else _0x26e4e4['push'](_0x26e4e4['shift']());}catch(_0x21d3b6){_0x26e4e4['push'](_0x26e4e4['shift']());}}}(a166_0x5cca,0x8b8bd));const a166_0x4c56a9=(function(){let _0x1fa1fa=!![];return function(_0x1bf3c1,_0x1ec5e9){const _0x208557=_0x1fa1fa?function(){const _0x173811=a166_0x25ee;if(_0x1ec5e9){const _0x3a9715=_0x1ec5e9[_0x173811(0xda)](_0x1bf3c1,arguments);return _0x1ec5e9=null,_0x3a9715;}}:function(){};return _0x1fa1fa=![],_0x208557;};}()),a166_0x5cedb5=a166_0x4c56a9(this,function(){const _0x1e91a6=a166_0x25ee;return a166_0x5cedb5[_0x1e91a6(0xe1)]()[_0x1e91a6(0xd0)](_0x1e91a6(0xcd))[_0x1e91a6(0xe1)]()[_0x1e91a6(0xe2)](a166_0x5cedb5)['search'](_0x1e91a6(0xcd));});function a166_0x25ee(_0x4dbf15,_0x5dd6d4){const _0x4a9586=a166_0x5cca();return a166_0x25ee=function(_0x5cedb5,_0x4c56a9){_0x5cedb5=_0x5cedb5-0xcb;let _0x5cca58=_0x4a9586[_0x5cedb5];return _0x5cca58;},a166_0x25ee(_0x4dbf15,_0x5dd6d4);}a166_0x5cedb5();'use strict';var __importDefault=this&&this[a166_0x181933(0xde)]||function(_0x3684e9){const _0x34b045=a166_0x181933;return _0x3684e9&&_0x3684e9[_0x34b045(0xcf)]?_0x3684e9:{'default':_0x3684e9};};Object[a166_0x181933(0xe0)](exports,a166_0x181933(0xcf),{'value':!![]}),exports['GitApiService']=void 0x0;const axios_1=__importDefault(require(a166_0x181933(0xe5))),promises_1=require(a166_0x181933(0xcb)),request_1=require('../../../shared/utils/request');class GitApiService{constructor(_0x36d125,_0xc3300b){const _0x3fe558=a166_0x181933;this['provider']=_0x36d125,this[_0x3fe558(0xd5)]=_0xc3300b,this['numberOfRequestsInQueue']=0x0,this[_0x3fe558(0xd6)]=-0x1,this['request']=this['createRequest']();}get[a166_0x181933(0xe7)](){const _0x175d5e=a166_0x181933;return 0x3c*0x3c*0x3e8/this[_0x175d5e(0xd6)];}[a166_0x181933(0xdb)](_0x1b8156){const _0x1c2151=a166_0x181933,_0x497a3c=axios_1['default'][_0x1c2151(0xe6)]({'baseURL':_0x1b8156||this[_0x1c2151(0xd5)]['getBaseUrl'](),'headers':this['getHeaders'](),...(0x0,request_1['proxyOptions'])()});return _0x497a3c[_0x1c2151(0xcc)][_0x1c2151(0xd1)]['use'](async _0x2ecf6d=>{const _0x4f213e=_0x1c2151,_0x17c861=this['numberOfRequestsInQueue']++*this['requestInterval'];return await(0x0,promises_1['setTimeout'])(_0x17c861),this[_0x4f213e(0xe3)]-=0x1,_0x2ecf6d;}),(0x0,request_1[_0x1c2151(0xd4)])(_0x497a3c);}}function a166_0x5cca(){const _0x2c69f1=['MAX_REQUEST_PER_HOUR','56WOyWNp','170872JPFxZa','2185750RbhKNf','apply','createRequest','200472IjYHgd','812315aQVfvX','__importDefault','5583582HwRSDA','defineProperty','toString','constructor','numberOfRequestsInQueue','GitApiService','axios','create','requestInterval','timers/promises','interceptors','(((.+)+)+)+$','14377545WSeOan','__esModule','search','request','8CNiJcZ','1708768CVaVui','requestWrapper','credentials'];a166_0x5cca=function(){return _0x2c69f1;};return a166_0x5cca();}exports[a166_0x181933(0xe4)]=GitApiService;