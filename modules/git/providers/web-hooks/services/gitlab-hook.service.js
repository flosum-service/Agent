const a168_0x557caa=a168_0x433b;(function(_0xe7bdf4,_0x58e4d3){const _0x3cae89=a168_0x433b,_0x57489e=_0xe7bdf4();while(!![]){try{const _0x435a3e=parseInt(_0x3cae89(0x1a7))/0x1*(-parseInt(_0x3cae89(0x195))/0x2)+-parseInt(_0x3cae89(0x197))/0x3+-parseInt(_0x3cae89(0x1a0))/0x4*(-parseInt(_0x3cae89(0x1aa))/0x5)+-parseInt(_0x3cae89(0x199))/0x6+parseInt(_0x3cae89(0x1ac))/0x7*(parseInt(_0x3cae89(0x1b3))/0x8)+-parseInt(_0x3cae89(0x193))/0x9+parseInt(_0x3cae89(0x1b1))/0xa*(parseInt(_0x3cae89(0x1b2))/0xb);if(_0x435a3e===_0x58e4d3)break;else _0x57489e['push'](_0x57489e['shift']());}catch(_0x3e90b9){_0x57489e['push'](_0x57489e['shift']());}}}(a168_0x5e2a,0xd7dc6));const a168_0x3a25e8=(function(){let _0x516628=!![];return function(_0x48c7f9,_0x75ef34){const _0x3c302d=_0x516628?function(){const _0x3c227b=a168_0x433b;if(_0x75ef34){const _0x5100f1=_0x75ef34[_0x3c227b(0x19b)](_0x48c7f9,arguments);return _0x75ef34=null,_0x5100f1;}}:function(){};return _0x516628=![],_0x3c302d;};}()),a168_0x5b0b33=a168_0x3a25e8(this,function(){const _0x994ff3=a168_0x433b;return a168_0x5b0b33[_0x994ff3(0x1a1)]()[_0x994ff3(0x1a9)]('(((.+)+)+)+$')[_0x994ff3(0x1a1)]()[_0x994ff3(0x19c)](a168_0x5b0b33)[_0x994ff3(0x1a9)](_0x994ff3(0x19d));});function a168_0x433b(_0x1b810c,_0x472bd7){const _0x8dcc58=a168_0x5e2a();return a168_0x433b=function(_0x5b0b33,_0x3a25e8){_0x5b0b33=_0x5b0b33-0x18e;let _0x5e2ae5=_0x8dcc58[_0x5b0b33];return _0x5e2ae5;},a168_0x433b(_0x1b810c,_0x472bd7);}a168_0x5b0b33();'use strict';Object[a168_0x557caa(0x1ae)](exports,a168_0x557caa(0x1a5),{'value':!![]}),exports[a168_0x557caa(0x1a2)]=void 0x0;const bad_request_error_1=require(a168_0x557caa(0x18e)),not_found_error_1=require('../../../../../core/errors/not-found.error'),hook_dto_1=require('../dto/hook.dto'),git_hook_service_1=require('./git-hook.service');class GitlabHookService extends git_hook_service_1['GitHookService']{constructor(_0x3c72c1,_0x5cac0c){const _0x545155=a168_0x557caa;super(_0x3c72c1),this[_0x545155(0x191)]=_0x5cac0c,this[_0x545155(0x19a)]=this['createRequest']();}[a168_0x557caa(0x1b0)](){const _0x5d835c=a168_0x557caa;return this[_0x5d835c(0x191)][_0x5d835c(0x1b0)](this[_0x5d835c(0x1a8)][_0x5d835c(0x192)]);}async[a168_0x557caa(0x1b4)](_0x368bd9){const _0x221e92=a168_0x557caa;try{const _0xcce8aa=await this[_0x221e92(0x19a)][_0x221e92(0x194)](_0x221e92(0x1a6),_0x368bd9);return hook_dto_1[_0x221e92(0x19f)][_0x221e92(0x19e)](_0xcce8aa);}catch(_0x2bca9d){throw new bad_request_error_1['BadRequestError'](_0x2bca9d);}}async[a168_0x557caa(0x1ad)](_0x2cec4a){const _0x213e89=a168_0x557caa;try{const _0x31429d=await this[_0x213e89(0x19a)][_0x213e89(0x190)](_0x213e89(0x1a3)+_0x2cec4a);return hook_dto_1['HookDto']['fromGitlab'](_0x31429d);}catch(_0x1de8e1){throw new not_found_error_1[(_0x213e89(0x1a4))](_0x1de8e1);}}async[a168_0x557caa(0x18f)](){const _0x3131a5=a168_0x557caa;try{const _0x3feced=await this['request']['get'](_0x3131a5(0x1a6));return _0x3feced[_0x3131a5(0x1af)](_0x3077ac=>hook_dto_1['HookDto'][_0x3131a5(0x19e)](_0x3077ac));}catch(_0x4d88eb){throw new not_found_error_1[(_0x3131a5(0x1a4))](_0x4d88eb);}}async[a168_0x557caa(0x196)](_0x4490cd,_0x5e5837){const _0x514009=a168_0x557caa;try{const _0x5e5bdd=await this[_0x514009(0x19a)][_0x514009(0x1ab)](_0x514009(0x1a3)+_0x4490cd,_0x5e5837);return hook_dto_1[_0x514009(0x19f)]['fromGitlab'](_0x5e5bdd);}catch(_0x463d28){throw new not_found_error_1[(_0x514009(0x1a4))](_0x463d28);}}async[a168_0x557caa(0x198)](_0xbea348){const _0x4a6cf1=a168_0x557caa;try{await this[_0x4a6cf1(0x19a)][_0x4a6cf1(0x198)](_0x4a6cf1(0x1a3)+_0xbea348);}catch(_0x4c2ba1){throw new not_found_error_1['NotFoundError'](_0x4c2ba1);}}}exports['GitlabHookService']=GitlabHookService;function a168_0x5e2a(){const _0x212170=['create','../../../../../core/errors/bad-request.error','getAll','get','api','apiUrl','10513602JbmkxK','post','526568FnvikQ','update','677175gDuRij','delete','7045896uhJjYi','request','apply','constructor','(((.+)+)+)+$','fromGitlab','HookDto','136PSfapZ','toString','GitlabHookService','hooks/','NotFoundError','__esModule','hooks','4UztfnI','repository','search','87385SVwDlx','put','98tRLpHj','getOne','defineProperty','map','createRequest','217370ywNEBU','1639ApXCIm','384280ToNKgM'];a168_0x5e2a=function(){return _0x212170;};return a168_0x5e2a();}