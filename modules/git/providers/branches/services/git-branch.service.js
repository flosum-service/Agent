function a209_0x37d0(_0x1145f9,_0x547bd9){const _0x30f0d9=a209_0x49fb();return a209_0x37d0=function(_0x5452f4,_0x1f2bb8){_0x5452f4=_0x5452f4-0xed;let _0x49fb51=_0x30f0d9[_0x5452f4];return _0x49fb51;},a209_0x37d0(_0x1145f9,_0x547bd9);}const a209_0x2ebf27=a209_0x37d0;(function(_0xa5d119,_0x1454a0){const _0x45b225=a209_0x37d0,_0x2e8e97=_0xa5d119();while(!![]){try{const _0x21f369=parseInt(_0x45b225(0xf6))/0x1+parseInt(_0x45b225(0x10d))/0x2*(-parseInt(_0x45b225(0x10b))/0x3)+parseInt(_0x45b225(0xf8))/0x4*(-parseInt(_0x45b225(0x105))/0x5)+-parseInt(_0x45b225(0xff))/0x6+parseInt(_0x45b225(0x104))/0x7*(parseInt(_0x45b225(0xfa))/0x8)+parseInt(_0x45b225(0xfe))/0x9*(-parseInt(_0x45b225(0x108))/0xa)+parseInt(_0x45b225(0x102))/0xb;if(_0x21f369===_0x1454a0)break;else _0x2e8e97['push'](_0x2e8e97['shift']());}catch(_0xd82f71){_0x2e8e97['push'](_0x2e8e97['shift']());}}}(a209_0x49fb,0xce7d2));const a209_0x1f2bb8=(function(){let _0xc04546=!![];return function(_0x5b56c5,_0x1919d1){const _0x38ee4d=_0xc04546?function(){const _0x4c32e7=a209_0x37d0;if(_0x1919d1){const _0x1461a5=_0x1919d1[_0x4c32e7(0xef)](_0x5b56c5,arguments);return _0x1919d1=null,_0x1461a5;}}:function(){};return _0xc04546=![],_0x38ee4d;};}()),a209_0x5452f4=a209_0x1f2bb8(this,function(){const _0x3e1916=a209_0x37d0;return a209_0x5452f4[_0x3e1916(0xf7)]()[_0x3e1916(0xf1)](_0x3e1916(0xf5))[_0x3e1916(0xf7)]()[_0x3e1916(0x10a)](a209_0x5452f4)[_0x3e1916(0xf1)](_0x3e1916(0xf5));});a209_0x5452f4();function a209_0x49fb(){const _0x2b5c7b=['name','constructor','74202JaJshw','find','2gdKUcJ','NotFoundError','Git','apply','getOne','search','../../../../../core/errors/not-found.error','init\x20branch','../../../../../core/errors/bad-request.error','(((.+)+)+)+$','600189xPUnvk','toString','4bVqMqb','credentials','3232408XIzSJo','repository','Branch\x20not\x20found','getAll','9aMQwWx','9716646xRsqaA','defineProperty','__esModule','24662550IiAIFr','createEmptyBranch','14ZWSQYJ','4104485PynICZ','getRepositoryBranches','GitBranchService','3394910wfUbiW'];a209_0x49fb=function(){return _0x2b5c7b;};return a209_0x49fb();}'use strict';Object[a209_0x2ebf27(0x100)](exports,a209_0x2ebf27(0x101),{'value':!![]}),exports['GitBranchService']=void 0x0;const bad_request_error_1=require(a209_0x2ebf27(0xf4)),not_found_error_1=require(a209_0x2ebf27(0xf2)),git_internal_1=require('../../../internal/git.internal');class GitBranchService{constructor(_0x2a17a1,_0x30b288){const _0x2cca3c=a209_0x2ebf27;this[_0x2cca3c(0xfb)]=_0x2a17a1,this['credentials']=_0x30b288;}async['create'](_0x121a35){const _0x3c07f8=a209_0x2ebf27;try{return await git_internal_1[_0x3c07f8(0xee)][_0x3c07f8(0x103)](this['repository'],_0x121a35,_0x3c07f8(0xf3),this[_0x3c07f8(0xf9)]),this[_0x3c07f8(0xf0)](_0x121a35[_0x3c07f8(0x109)]);}catch(_0x577d36){throw new bad_request_error_1['BadRequestError'](_0x577d36);}}async[a209_0x2ebf27(0xf0)](_0x507f91){const _0x49513=a209_0x2ebf27;try{const _0x468cdf=await this['getAll'](),_0x3bb658=_0x468cdf[_0x49513(0x10c)](_0x40c034=>_0x40c034['name']===_0x507f91);if(!_0x3bb658)throw new Error(_0x49513(0xfc));return _0x3bb658;}catch(_0x23c838){throw new not_found_error_1[(_0x49513(0xed))](_0x23c838);}}async[a209_0x2ebf27(0xfd)](){const _0x3f8707=a209_0x2ebf27;try{const _0xf0b67e=await git_internal_1[_0x3f8707(0xee)][_0x3f8707(0x106)](this[_0x3f8707(0xfb)],this[_0x3f8707(0xf9)]);return _0xf0b67e;}catch(_0xba806c){throw new bad_request_error_1['BadRequestError'](_0xba806c);}}}exports[a209_0x2ebf27(0x107)]=GitBranchService;