const a176_0x3bb20d=a176_0x1d3a;(function(_0x3ae94f,_0x4332ee){const _0x5efc0e=a176_0x1d3a,_0x3c9d24=_0x3ae94f();while(!![]){try{const _0x2ebd4a=parseInt(_0x5efc0e(0xf7))/0x1+-parseInt(_0x5efc0e(0xe0))/0x2+parseInt(_0x5efc0e(0xec))/0x3+parseInt(_0x5efc0e(0xe7))/0x4*(-parseInt(_0x5efc0e(0xed))/0x5)+-parseInt(_0x5efc0e(0xef))/0x6*(-parseInt(_0x5efc0e(0xf9))/0x7)+-parseInt(_0x5efc0e(0xfb))/0x8*(parseInt(_0x5efc0e(0xf6))/0x9)+parseInt(_0x5efc0e(0xdf))/0xa;if(_0x2ebd4a===_0x4332ee)break;else _0x3c9d24['push'](_0x3c9d24['shift']());}catch(_0x553d3d){_0x3c9d24['push'](_0x3c9d24['shift']());}}}(a176_0x2264,0x3afaf));const a176_0x1a6ea3=(function(){let _0x19e8b9=!![];return function(_0x93d0b9,_0x6ebf7d){const _0x3dca05=_0x19e8b9?function(){const _0x4999ef=a176_0x1d3a;if(_0x6ebf7d){const _0x187282=_0x6ebf7d[_0x4999ef(0xe9)](_0x93d0b9,arguments);return _0x6ebf7d=null,_0x187282;}}:function(){};return _0x19e8b9=![],_0x3dca05;};}()),a176_0x429562=a176_0x1a6ea3(this,function(){const _0x44e34f=a176_0x1d3a;return a176_0x429562[_0x44e34f(0xe2)]()[_0x44e34f(0xf5)]('(((.+)+)+)+$')[_0x44e34f(0xe2)]()[_0x44e34f(0xee)](a176_0x429562)[_0x44e34f(0xf5)](_0x44e34f(0xf8));});a176_0x429562();function a176_0x2264(){const _0x15cba4=['1237380qsfqtk','2166680cqAuog','constructor','1500vqtjDG','__esModule','Git','BadRequestError','credentials','getAll','search','5058cKsQDJ','85080gklGtJ','(((.+)+)+)+$','3451fJifGe','defineProperty','5064EIdCyI','6466060ryZDeR','473462GoroyQ','../../../../../core/errors/bad-request.error','toString','getRepositoryBranches','Branch\x20not\x20found','name','getOne','4uXicPK','repository','apply','init\x20branch','GitBranchService'];a176_0x2264=function(){return _0x15cba4;};return a176_0x2264();}'use strict';Object[a176_0x3bb20d(0xfa)](exports,a176_0x3bb20d(0xf0),{'value':!![]}),exports[a176_0x3bb20d(0xeb)]=void 0x0;const bad_request_error_1=require(a176_0x3bb20d(0xe1)),not_found_error_1=require('../../../../../core/errors/not-found.error'),git_internal_1=require('../../../internal/git.internal');function a176_0x1d3a(_0x43a11d,_0x48aeee){const _0x2084dd=a176_0x2264();return a176_0x1d3a=function(_0x429562,_0x1a6ea3){_0x429562=_0x429562-0xdf;let _0x22649e=_0x2084dd[_0x429562];return _0x22649e;},a176_0x1d3a(_0x43a11d,_0x48aeee);}class GitBranchService{constructor(_0x14ca74,_0x3b2014){const _0x2ab4e2=a176_0x3bb20d;this[_0x2ab4e2(0xe8)]=_0x14ca74,this[_0x2ab4e2(0xf3)]=_0x3b2014;}async['create'](_0x1dcac7){const _0x4fa089=a176_0x3bb20d;try{return await git_internal_1[_0x4fa089(0xf1)]['createEmptyBranch'](this[_0x4fa089(0xe8)],_0x1dcac7[_0x4fa089(0xe5)],_0x4fa089(0xea),this[_0x4fa089(0xf3)]),this[_0x4fa089(0xe6)](_0x1dcac7['name']);}catch(_0x1a24a1){throw new bad_request_error_1[(_0x4fa089(0xf2))](_0x1a24a1);}}async[a176_0x3bb20d(0xe6)](_0x255bb8){const _0x42a7a9=a176_0x3bb20d;try{const _0x11b4a8=await this['getAll'](),_0x388289=_0x11b4a8['find'](_0x5eea83=>_0x5eea83[_0x42a7a9(0xe5)]===_0x255bb8);if(!_0x388289)throw new Error(_0x42a7a9(0xe4));return _0x388289;}catch(_0x1ae8a3){throw new not_found_error_1['NotFoundError'](_0x1ae8a3);}}async[a176_0x3bb20d(0xf4)](){const _0x245b16=a176_0x3bb20d;try{const _0x5a66f9=await git_internal_1[_0x245b16(0xf1)][_0x245b16(0xe3)](this['repository'],this['credentials']);return _0x5a66f9;}catch(_0x26b49c){throw new bad_request_error_1['BadRequestError'](_0x26b49c);}}}exports[a176_0x3bb20d(0xeb)]=GitBranchService;