const a217_0x19de7b=a217_0x3fed;(function(_0x50ece3,_0x277a53){const _0x505fac=a217_0x3fed,_0x142afc=_0x50ece3();while(!![]){try{const _0x51aaeb=-parseInt(_0x505fac(0x1d1))/0x1+parseInt(_0x505fac(0x1bf))/0x2*(-parseInt(_0x505fac(0x1d3))/0x3)+-parseInt(_0x505fac(0x1bc))/0x4*(-parseInt(_0x505fac(0x1bb))/0x5)+parseInt(_0x505fac(0x1cb))/0x6+-parseInt(_0x505fac(0x1be))/0x7+parseInt(_0x505fac(0x1b2))/0x8+parseInt(_0x505fac(0x1c0))/0x9;if(_0x51aaeb===_0x277a53)break;else _0x142afc['push'](_0x142afc['shift']());}catch(_0xb39e2d){_0x142afc['push'](_0x142afc['shift']());}}}(a217_0x4230,0xa0580));const a217_0x10d282=(function(){let _0x144e06=!![];return function(_0x384644,_0x40956f){const _0x2dc199=_0x144e06?function(){const _0x2b0415=a217_0x3fed;if(_0x40956f){const _0x1ea24b=_0x40956f[_0x2b0415(0x1b8)](_0x384644,arguments);return _0x40956f=null,_0x1ea24b;}}:function(){};return _0x144e06=![],_0x2dc199;};}()),a217_0x191c96=a217_0x10d282(this,function(){const _0xcbafd3=a217_0x3fed;return a217_0x191c96[_0xcbafd3(0x1c1)]()[_0xcbafd3(0x1cc)](_0xcbafd3(0x1b7))[_0xcbafd3(0x1c1)]()[_0xcbafd3(0x1af)](a217_0x191c96)['search']('(((.+)+)+)+$');});a217_0x191c96();'use strict';Object[a217_0x19de7b(0x1b6)](exports,a217_0x19de7b(0x1bd),{'value':!![]}),exports[a217_0x19de7b(0x1b1)]=void 0x0;const bad_request_error_1=require(a217_0x19de7b(0x1c7)),not_found_error_1=require(a217_0x19de7b(0x1cf)),hook_dto_1=require('../dto/hook.dto'),git_hook_service_1=require(a217_0x19de7b(0x1b5));function a217_0x4230(){const _0x160086=['apiUrl','map','../../../../../core/errors/not-found.error','NotFoundError','674880cHwMSx','post','2811507uEZYTD','HookDto','get','webhooks/','constructor','getAll','BitbucketServerHookService','2276072InMgdI','values','update','./git-hook.service','defineProperty','(((.+)+)+)+$','apply','delete','GitHookService','5hgxRMz','1662692sIPTCR','__esModule','7517608Ckctvy','2mZmpps','13830813MunEeo','toString','webhooks','BadRequestError','repository','request','fromBitbucketServer','../../../../../core/errors/bad-request.error','put','createRequest','getOne','6634932nWxeIZ','search'];a217_0x4230=function(){return _0x160086;};return a217_0x4230();}function a217_0x3fed(_0x3d0e2b,_0xbe312b){const _0x1ffa0a=a217_0x4230();return a217_0x3fed=function(_0x191c96,_0x10d282){_0x191c96=_0x191c96-0x1ac;let _0x42307d=_0x1ffa0a[_0x191c96];return _0x42307d;},a217_0x3fed(_0x3d0e2b,_0xbe312b);}class BitbucketServerHookService extends git_hook_service_1[a217_0x19de7b(0x1ba)]{constructor(_0x3ff449,_0x4657f0){const _0x5eeddb=a217_0x19de7b;super(_0x3ff449),this['api']=_0x4657f0,this[_0x5eeddb(0x1c5)]=this[_0x5eeddb(0x1c9)]();}[a217_0x19de7b(0x1c9)](){const _0x1bfd7d=a217_0x19de7b;return this['api']['createRequest'](this[_0x1bfd7d(0x1c4)][_0x1bfd7d(0x1cd)]);}async['create'](_0x301845){const _0x33bea2=a217_0x19de7b;try{const _0x4f9de9=await this[_0x33bea2(0x1c5)][_0x33bea2(0x1d2)](_0x33bea2(0x1c2),_0x301845);return hook_dto_1['HookDto']['fromBitbucketServer'](_0x4f9de9);}catch(_0x1bfb8c){throw new bad_request_error_1[(_0x33bea2(0x1c3))](_0x1bfb8c);}}async[a217_0x19de7b(0x1ca)](_0x37c18b){const _0x1f9db5=a217_0x19de7b;try{const _0x1f7907=await this[_0x1f9db5(0x1c5)][_0x1f9db5(0x1ad)](_0x1f9db5(0x1ae)+_0x37c18b);return hook_dto_1[_0x1f9db5(0x1ac)][_0x1f9db5(0x1c6)](_0x1f7907);}catch(_0x1501a2){throw new not_found_error_1[(_0x1f9db5(0x1d0))](_0x1501a2);}}async[a217_0x19de7b(0x1b0)](){const _0x2c42f5=a217_0x19de7b;try{const _0x26b199=await this[_0x2c42f5(0x1c5)]['get'](_0x2c42f5(0x1c2));return _0x26b199[_0x2c42f5(0x1b3)][_0x2c42f5(0x1ce)](_0x4a1526=>hook_dto_1[_0x2c42f5(0x1ac)][_0x2c42f5(0x1c6)](_0x4a1526));}catch(_0xd8fec8){throw new not_found_error_1[(_0x2c42f5(0x1d0))](_0xd8fec8);}}async[a217_0x19de7b(0x1b4)](_0x3eff18,_0x46f944){const _0x1011d2=a217_0x19de7b;try{const _0x2701fa=await this['request'][_0x1011d2(0x1c8)]('webhooks/'+_0x3eff18,_0x46f944);return hook_dto_1[_0x1011d2(0x1ac)]['fromBitbucketServer'](_0x2701fa);}catch(_0x3b3f0c){throw new not_found_error_1[(_0x1011d2(0x1d0))](_0x3b3f0c);}}async[a217_0x19de7b(0x1b9)](_0x18978d){const _0x2e54b6=a217_0x19de7b;try{await this[_0x2e54b6(0x1c5)][_0x2e54b6(0x1b9)]('webhooks/'+_0x18978d);}catch(_0x3287d6){throw new not_found_error_1['NotFoundError'](_0x3287d6);}}}exports[a217_0x19de7b(0x1b1)]=BitbucketServerHookService;