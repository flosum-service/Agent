const a208_0x4c6de5=a208_0x4933;(function(_0x38c05c,_0xffaa1b){const _0x5707b4=a208_0x4933,_0x506677=_0x38c05c();while(!![]){try{const _0x4be263=-parseInt(_0x5707b4(0x10f))/0x1+parseInt(_0x5707b4(0x11a))/0x2+-parseInt(_0x5707b4(0x119))/0x3+-parseInt(_0x5707b4(0x115))/0x4+parseInt(_0x5707b4(0x111))/0x5*(parseInt(_0x5707b4(0x11f))/0x6)+parseInt(_0x5707b4(0x11c))/0x7+parseInt(_0x5707b4(0x10c))/0x8;if(_0x4be263===_0xffaa1b)break;else _0x506677['push'](_0x506677['shift']());}catch(_0x3a78c5){_0x506677['push'](_0x506677['shift']());}}}(a208_0x1558,0xdf296));const a208_0x2c0a0f=(function(){let _0x59db32=!![];return function(_0xa59e5,_0x40b89e){const _0x50af9a=_0x59db32?function(){const _0x222a74=a208_0x4933;if(_0x40b89e){const _0x4b07b6=_0x40b89e[_0x222a74(0x10d)](_0xa59e5,arguments);return _0x40b89e=null,_0x4b07b6;}}:function(){};return _0x59db32=![],_0x50af9a;};}()),a208_0x9efea3=a208_0x2c0a0f(this,function(){const _0x1aa952=a208_0x4933;return a208_0x9efea3[_0x1aa952(0x10a)]()['search'](_0x1aa952(0x113))[_0x1aa952(0x10a)]()['constructor'](a208_0x9efea3)[_0x1aa952(0x112)](_0x1aa952(0x113));});function a208_0x1558(){const _0x2c1cf2=['name','3675924YdmVeA','2763190tBVslG','getAll','7271922ZhkHxq','Git','create','6WTucxT','repository','init\x20branch','getRepositoryBranches','../../../../../core/errors/bad-request.error','toString','getOne','13551584VBwzIC','apply','GitBranchService','1546867kIVWXB','NotFoundError','2591140iPXSqN','search','(((.+)+)+)+$','defineProperty','3785488IAtFwK','credentials','Branch\x20not\x20found'];a208_0x1558=function(){return _0x2c1cf2;};return a208_0x1558();}function a208_0x4933(_0x1724e6,_0x1f502e){const _0x3976a6=a208_0x1558();return a208_0x4933=function(_0x9efea3,_0x2c0a0f){_0x9efea3=_0x9efea3-0x108;let _0x155826=_0x3976a6[_0x9efea3];return _0x155826;},a208_0x4933(_0x1724e6,_0x1f502e);}a208_0x9efea3();'use strict';Object[a208_0x4c6de5(0x114)](exports,'__esModule',{'value':!![]}),exports['GitBranchService']=void 0x0;const bad_request_error_1=require(a208_0x4c6de5(0x109)),not_found_error_1=require('../../../../../core/errors/not-found.error'),git_internal_1=require('../../../internal/git.internal');class GitBranchService{constructor(_0x3462a4,_0x1a3386){const _0x142f2f=a208_0x4c6de5;this['repository']=_0x3462a4,this[_0x142f2f(0x116)]=_0x1a3386;}async[a208_0x4c6de5(0x11e)](_0x3ae21e){const _0x30adde=a208_0x4c6de5;try{return await git_internal_1[_0x30adde(0x11d)]['createEmptyBranch'](this[_0x30adde(0x120)],_0x3ae21e,_0x30adde(0x121),this[_0x30adde(0x116)]),this['getOne'](_0x3ae21e[_0x30adde(0x118)]);}catch(_0x134a5c){throw new bad_request_error_1['BadRequestError'](_0x134a5c);}}async[a208_0x4c6de5(0x10b)](_0x4437a5){const _0x4f275b=a208_0x4c6de5;try{const _0x533805=await this[_0x4f275b(0x11b)](),_0x15cbb8=_0x533805['find'](_0x42aa1f=>_0x42aa1f[_0x4f275b(0x118)]===_0x4437a5);if(!_0x15cbb8)throw new Error(_0x4f275b(0x117));return _0x15cbb8;}catch(_0x3fb870){throw new not_found_error_1[(_0x4f275b(0x110))](_0x3fb870);}}async[a208_0x4c6de5(0x11b)](){const _0x1c57d9=a208_0x4c6de5;try{const _0x54bec2=await git_internal_1[_0x1c57d9(0x11d)][_0x1c57d9(0x108)](this['repository'],this[_0x1c57d9(0x116)]);return _0x54bec2;}catch(_0x1e719e){throw new bad_request_error_1['BadRequestError'](_0x1e719e);}}}exports[a208_0x4c6de5(0x10e)]=GitBranchService;