const a55_0x486102=a55_0x38b4;(function(_0x1ecae6,_0xc254c9){const _0x72ce14=a55_0x38b4,_0x7bf36=_0x1ecae6();while(!![]){try{const _0x21896a=-parseInt(_0x72ce14(0x160))/0x1*(-parseInt(_0x72ce14(0x15b))/0x2)+-parseInt(_0x72ce14(0x15c))/0x3*(parseInt(_0x72ce14(0x158))/0x4)+parseInt(_0x72ce14(0x15d))/0x5*(parseInt(_0x72ce14(0x169))/0x6)+parseInt(_0x72ce14(0x154))/0x7+parseInt(_0x72ce14(0x15e))/0x8*(parseInt(_0x72ce14(0x165))/0x9)+parseInt(_0x72ce14(0x155))/0xa+parseInt(_0x72ce14(0x157))/0xb*(-parseInt(_0x72ce14(0x168))/0xc);if(_0x21896a===_0xc254c9)break;else _0x7bf36['push'](_0x7bf36['shift']());}catch(_0x342110){_0x7bf36['push'](_0x7bf36['shift']());}}}(a55_0x4b3d,0xcaa74));const a55_0x4f9357=(function(){let _0x2a1c6f=!![];return function(_0x3765a0,_0x41a6b2){const _0x4b73c0=_0x2a1c6f?function(){const _0x47b612=a55_0x38b4;if(_0x41a6b2){const _0x3cf032=_0x41a6b2[_0x47b612(0x16b)](_0x3765a0,arguments);return _0x41a6b2=null,_0x3cf032;}}:function(){};return _0x2a1c6f=![],_0x4b73c0;};}()),a55_0x17df1a=a55_0x4f9357(this,function(){const _0x26d43e=a55_0x38b4;return a55_0x17df1a['toString']()[_0x26d43e(0x162)](_0x26d43e(0x161))[_0x26d43e(0x167)]()['constructor'](a55_0x17df1a)[_0x26d43e(0x162)]('(((.+)+)+)+$');});function a55_0x38b4(_0x242b51,_0x29aa50){const _0x3996ea=a55_0x4b3d();return a55_0x38b4=function(_0x17df1a,_0x4f9357){_0x17df1a=_0x17df1a-0x152;let _0x4b3dff=_0x3996ea[_0x17df1a];return _0x4b3dff;},a55_0x38b4(_0x242b51,_0x29aa50);}function a55_0x4b3d(){const _0x5b059e=['9844996SJoECO','9223520LfXVUy','Branch\x20not\x20found','143tPbhGh','12YdetPQ','../../internal/git.internal','../../../core/errors/not-found.error','43294pNbmAb','269889dCTZny','2565vMzxFk','16NAfzag','create','19MyrsJd','(((.+)+)+)+$','search','__esModule','repository','1089684BFQlrD','Git','toString','3243804joqoyt','19086vofQaN','init\x20branch','apply','GitBranchService','name','getOne','getAll','../../../core/errors/bad-request.error','getRepositoryBranches','BadRequestError'];a55_0x4b3d=function(){return _0x5b059e;};return a55_0x4b3d();}a55_0x17df1a();'use strict';Object['defineProperty'](exports,a55_0x486102(0x163),{'value':!![]}),exports[a55_0x486102(0x16c)]=void 0x0;const bad_request_error_1=require(a55_0x486102(0x170)),not_found_error_1=require(a55_0x486102(0x15a)),git_internal_1=require(a55_0x486102(0x159));class GitBranchService{constructor(_0x4df096){const _0x2a34c7=a55_0x486102;this[_0x2a34c7(0x164)]=_0x4df096;}async[a55_0x486102(0x15f)](_0xd37cfe){const _0x16d9b1=a55_0x486102;try{return await git_internal_1['Git']['createEmptyBranch'](this['repository'],_0xd37cfe[_0x16d9b1(0x16d)],_0x16d9b1(0x16a)),this[_0x16d9b1(0x16e)](_0xd37cfe[_0x16d9b1(0x16d)]);}catch(_0x18e9c3){throw new bad_request_error_1[(_0x16d9b1(0x153))](_0x18e9c3);}}async['getOne'](_0x4b8ce1){const _0x6da72f=a55_0x486102;try{const _0x454a8b=await this[_0x6da72f(0x16f)](),_0x37c747=_0x454a8b['find'](_0x1be54c=>_0x1be54c[_0x6da72f(0x16d)]===_0x4b8ce1);if(!_0x37c747)throw new Error(_0x6da72f(0x156));return _0x37c747;}catch(_0x186421){throw new not_found_error_1['NotFoundError'](_0x186421);}}async['getAll'](){const _0x3544c4=a55_0x486102;try{const _0x3d855e=await git_internal_1[_0x3544c4(0x166)][_0x3544c4(0x152)](this[_0x3544c4(0x164)]);return _0x3d855e;}catch(_0x30bc9d){throw new bad_request_error_1[(_0x3544c4(0x153))](_0x30bc9d);}}}exports[a55_0x486102(0x16c)]=GitBranchService;