function a252_0x4129(_0x5538d0,_0x20ffc6){const _0x3e9527=a252_0x4007();return a252_0x4129=function(_0x13fc82,_0x2b7591){_0x13fc82=_0x13fc82-0x1d2;let _0x40070c=_0x3e9527[_0x13fc82];return _0x40070c;},a252_0x4129(_0x5538d0,_0x20ffc6);}const a252_0x759de5=a252_0x4129;(function(_0x261f2d,_0x5ee83f){const _0x3118a1=a252_0x4129,_0x4901e6=_0x261f2d();while(!![]){try{const _0x4061aa=-parseInt(_0x3118a1(0x1da))/0x1+parseInt(_0x3118a1(0x1ea))/0x2*(-parseInt(_0x3118a1(0x1e7))/0x3)+-parseInt(_0x3118a1(0x1d2))/0x4*(parseInt(_0x3118a1(0x1d5))/0x5)+-parseInt(_0x3118a1(0x1f7))/0x6*(-parseInt(_0x3118a1(0x1d9))/0x7)+-parseInt(_0x3118a1(0x1e6))/0x8+parseInt(_0x3118a1(0x1e8))/0x9*(-parseInt(_0x3118a1(0x1f6))/0xa)+parseInt(_0x3118a1(0x1df))/0xb*(parseInt(_0x3118a1(0x1d7))/0xc);if(_0x4061aa===_0x5ee83f)break;else _0x4901e6['push'](_0x4901e6['shift']());}catch(_0x5c9884){_0x4901e6['push'](_0x4901e6['shift']());}}}(a252_0x4007,0x22e3c));function a252_0x4007(){const _0x425d03=['put','HookDto','GitHookService','fromGitlab','GitlabHookService','836904ysLbeg','3sBLjGB','1988865bxfUQB','getAll','155080vIRouS','../../../../../core/errors/not-found.error','apply','get','BadRequestError','hooks/','update','hooks','request','delete','../../../../../core/errors/bad-request.error','search','10IScSrI','144arqcOj','./git-hook.service','api','20lPpmaA','createRequest','toString','278305AHsCwW','create','1485600QKizKA','post','48223OrShPo','207585tlJmmt','defineProperty','(((.+)+)+)+$','NotFoundError','getOne','77QtSRfx','repository'];a252_0x4007=function(){return _0x425d03;};return a252_0x4007();}const a252_0x2b7591=(function(){let _0x1a3789=!![];return function(_0x2530b1,_0x125694){const _0x3c3158=_0x1a3789?function(){const _0x20f146=a252_0x4129;if(_0x125694){const _0x47aab1=_0x125694[_0x20f146(0x1ec)](_0x2530b1,arguments);return _0x125694=null,_0x47aab1;}}:function(){};return _0x1a3789=![],_0x3c3158;};}()),a252_0x13fc82=a252_0x2b7591(this,function(){const _0xcebaf8=a252_0x4129;return a252_0x13fc82[_0xcebaf8(0x1d4)]()[_0xcebaf8(0x1f5)]('(((.+)+)+)+$')[_0xcebaf8(0x1d4)]()['constructor'](a252_0x13fc82)[_0xcebaf8(0x1f5)](_0xcebaf8(0x1dc));});a252_0x13fc82();'use strict';Object[a252_0x759de5(0x1db)](exports,'__esModule',{'value':!![]}),exports[a252_0x759de5(0x1e5)]=void 0x0;const bad_request_error_1=require(a252_0x759de5(0x1f4)),not_found_error_1=require(a252_0x759de5(0x1eb)),hook_dto_1=require('../dto/hook.dto'),git_hook_service_1=require(a252_0x759de5(0x1f8));class GitlabHookService extends git_hook_service_1[a252_0x759de5(0x1e3)]{constructor(_0xc4997d,_0x17183f){const _0xc827c6=a252_0x759de5;super(_0xc4997d),this[_0xc827c6(0x1f9)]=_0x17183f,this[_0xc827c6(0x1f2)]=this['createRequest']();}[a252_0x759de5(0x1d3)](){const _0x3c2222=a252_0x759de5;return this[_0x3c2222(0x1f9)][_0x3c2222(0x1d3)](this[_0x3c2222(0x1e0)]['apiUrl']);}async[a252_0x759de5(0x1d6)](_0x2269d6){const _0x3b0e2a=a252_0x759de5;try{const _0x26ca54=await this['request'][_0x3b0e2a(0x1d8)](_0x3b0e2a(0x1f1),_0x2269d6);return hook_dto_1[_0x3b0e2a(0x1e2)]['fromGitlab'](_0x26ca54);}catch(_0x4d95a5){throw new bad_request_error_1[(_0x3b0e2a(0x1ee))](_0x4d95a5);}}async[a252_0x759de5(0x1de)](_0x163fde){const _0x19e38d=a252_0x759de5;try{const _0x1bbb27=await this[_0x19e38d(0x1f2)][_0x19e38d(0x1ed)](_0x19e38d(0x1ef)+_0x163fde);return hook_dto_1[_0x19e38d(0x1e2)][_0x19e38d(0x1e4)](_0x1bbb27);}catch(_0x4499e1){throw new not_found_error_1[(_0x19e38d(0x1dd))](_0x4499e1);}}async[a252_0x759de5(0x1e9)](){const _0x58652c=a252_0x759de5;try{const _0x55efde=await this[_0x58652c(0x1f2)][_0x58652c(0x1ed)]('hooks');return _0x55efde['map'](_0x1af1eb=>hook_dto_1[_0x58652c(0x1e2)][_0x58652c(0x1e4)](_0x1af1eb));}catch(_0x291836){throw new not_found_error_1[(_0x58652c(0x1dd))](_0x291836);}}async[a252_0x759de5(0x1f0)](_0x403c41,_0x4428ee){const _0x2c3136=a252_0x759de5;try{const _0x319709=await this[_0x2c3136(0x1f2)][_0x2c3136(0x1e1)]('hooks/'+_0x403c41,_0x4428ee);return hook_dto_1[_0x2c3136(0x1e2)][_0x2c3136(0x1e4)](_0x319709);}catch(_0x2870fe){throw new not_found_error_1['NotFoundError'](_0x2870fe);}}async[a252_0x759de5(0x1f3)](_0x4c6a66){const _0x5ee058=a252_0x759de5;try{await this[_0x5ee058(0x1f2)][_0x5ee058(0x1f3)](_0x5ee058(0x1ef)+_0x4c6a66);}catch(_0x39b33d){throw new not_found_error_1[(_0x5ee058(0x1dd))](_0x39b33d);}}}exports[a252_0x759de5(0x1e5)]=GitlabHookService;