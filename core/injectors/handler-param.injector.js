const a24_0x497977=a24_0x31c0;(function(_0x2b95a1,_0x38b8ad){const _0x58787f=a24_0x31c0,_0x828b1d=_0x2b95a1();while(!![]){try{const _0x42a1a7=-parseInt(_0x58787f(0xc5))/0x1+-parseInt(_0x58787f(0xc9))/0x2*(parseInt(_0x58787f(0xbf))/0x3)+-parseInt(_0x58787f(0xc6))/0x4*(parseInt(_0x58787f(0xb4))/0x5)+parseInt(_0x58787f(0xb5))/0x6*(parseInt(_0x58787f(0xab))/0x7)+parseInt(_0x58787f(0xbc))/0x8+-parseInt(_0x58787f(0xbe))/0x9*(parseInt(_0x58787f(0xb8))/0xa)+parseInt(_0x58787f(0xca))/0xb;if(_0x42a1a7===_0x38b8ad)break;else _0x828b1d['push'](_0x828b1d['shift']());}catch(_0x28d5b0){_0x828b1d['push'](_0x828b1d['shift']());}}}(a24_0x4e4c,0x2f21c));const a24_0x897abb=(function(){let _0x12d611=!![];return function(_0x4a78eb,_0xda9708){const _0xaa1611=_0x12d611?function(){const _0x4f656b=a24_0x31c0;if(_0xda9708){const _0x4dbc9b=_0xda9708[_0x4f656b(0xa9)](_0x4a78eb,arguments);return _0xda9708=null,_0x4dbc9b;}}:function(){};return _0x12d611=![],_0xaa1611;};}()),a24_0x4180a2=a24_0x897abb(this,function(){const _0x24fa87=a24_0x31c0;return a24_0x4180a2[_0x24fa87(0xb3)]()[_0x24fa87(0xba)](_0x24fa87(0xbd))[_0x24fa87(0xb3)]()['constructor'](a24_0x4180a2)['search'](_0x24fa87(0xbd));});a24_0x4180a2();'use strict';Object[a24_0x497977(0xb2)](exports,a24_0x497977(0xa7),{'value':!![]}),exports['handlerParamInjector']=void 0x0;const constants_1=require('../constants');async function injectParam(_0x59be6a,_0x337bb9,_0x453e32){const _0x2be4d9=a24_0x497977;var _0x36b8d2,_0x56d2be;const _0xe0935c=Reflect[_0x2be4d9(0xc8)](constants_1[_0x2be4d9(0xc0)],_0x59be6a),_0x36cd54=(_0x36b8d2=_0x337bb9[_0x2be4d9(0xc4)])===null||_0x36b8d2===void 0x0?void 0x0:_0x36b8d2[_0x2be4d9(0xb9)],_0x5c90f7=((_0x56d2be=_0x337bb9[_0x2be4d9(0xc4)])===null||_0x56d2be===void 0x0?void 0x0:_0x56d2be['pipes'])||[];let _0x2b3892=_0x36cd54?_0x453e32[_0x36cd54]:_0x453e32;for(const _0x55c94d of _0x5c90f7){_0x55c94d[_0x2be4d9(0xc2)]&&await _0x55c94d[_0x2be4d9(0xbb)](_0x2b3892,_0xe0935c[_0x337bb9[_0x2be4d9(0xc1)]]),_0x55c94d[_0x2be4d9(0xa6)]&&(_0x2b3892=await _0x55c94d[_0x2be4d9(0xad)](_0x2b3892,_0xe0935c[_0x337bb9[_0x2be4d9(0xc1)]]));}return _0x2b3892;}async function injectCustomParam(_0x3782d1,_0x1a17d6){const _0x37cbb7=a24_0x497977;return _0x3782d1['value']&&_0x3782d1[_0x37cbb7(0xa8)](_0x1a17d6,_0x3782d1[_0x37cbb7(0xc4)]);}async function handlerParamInjector(_0x253cbe,_0x507d1c,_0x427888,_0x37d760){const _0x4af07e=a24_0x497977,_0x4e17e8=Reflect[_0x4af07e(0xb1)](constants_1[_0x4af07e(0xb7)],_0x253cbe)||[],_0x1e4a9d=[];for(const _0x285048 of _0x4e17e8[_0x4af07e(0xaa)]((_0x77ac27,_0x3d2d82)=>_0x77ac27[_0x4af07e(0xc1)]-_0x3d2d82[_0x4af07e(0xc1)])){switch(_0x285048[_0x4af07e(0xae)]){case 0x0:_0x1e4a9d[_0x4af07e(0xb6)](_0x507d1c[_0x4af07e(0xac)]);break;case 0x4:_0x1e4a9d[_0x4af07e(0xb6)](_0x507d1c);break;case 0x5:_0x1e4a9d['push'](_0x427888);break;case 0x6:_0x1e4a9d['push'](_0x37d760);break;case 0x1:_0x1e4a9d[_0x4af07e(0xb6)](await injectParam(_0x253cbe,_0x285048,_0x507d1c[_0x4af07e(0xb0)]));break;case 0x2:_0x1e4a9d[_0x4af07e(0xb6)](await injectParam(_0x253cbe,_0x285048,_0x507d1c[_0x4af07e(0xc7)]));break;case 0x3:_0x1e4a9d['push'](await injectParam(_0x253cbe,_0x285048,_0x507d1c[_0x4af07e(0xaf)]));break;case 0x7:_0x1e4a9d[_0x4af07e(0xb6)](await injectCustomParam(_0x285048,_0x507d1c['context']));break;default:continue;}}return _0x1e4a9d;}function a24_0x31c0(_0x49ceac,_0x45a1a4){const _0x48e78d=a24_0x4e4c();return a24_0x31c0=function(_0x4180a2,_0x897abb){_0x4180a2=_0x4180a2-0xa6;let _0x4e4cfe=_0x48e78d[_0x4180a2];return _0x4e4cfe;},a24_0x31c0(_0x49ceac,_0x45a1a4);}exports[a24_0x497977(0xc3)]=handlerParamInjector;function a24_0x4e4c(){const _0x7d6a79=['data','49982YyyzQk','463364Wkoyne','params','getMetadata','2ZcCHLl','4785671ZGAQzi','transformable','__esModule','value','apply','sort','63FJnnlR','context','transform','type','query','body','getOwnMetadata','defineProperty','toString','5OXHMAu','45330npApJI','push','META_HANDLER_ARGS','60FnuPlr','name','search','validate','1948624IfwIRn','(((.+)+)+)+$','527454slqBKC','108369wgRqju','META_HANDLER_PARAMTYPES','index','validatable','handlerParamInjector'];a24_0x4e4c=function(){return _0x7d6a79;};return a24_0x4e4c();}