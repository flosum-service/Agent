const a247_0x13a1c7=a247_0xfd5f;(function(_0x31ce88,_0x33e2a3){const _0x10ba49=a247_0xfd5f,_0x974663=_0x31ce88();while(!![]){try{const _0x108957=-parseInt(_0x10ba49(0x13e))/0x1*(parseInt(_0x10ba49(0x150))/0x2)+parseInt(_0x10ba49(0x15f))/0x3*(parseInt(_0x10ba49(0x15d))/0x4)+-parseInt(_0x10ba49(0x14b))/0x5+parseInt(_0x10ba49(0x144))/0x6+parseInt(_0x10ba49(0x142))/0x7+-parseInt(_0x10ba49(0x141))/0x8+-parseInt(_0x10ba49(0x13d))/0x9*(-parseInt(_0x10ba49(0x14f))/0xa);if(_0x108957===_0x33e2a3)break;else _0x974663['push'](_0x974663['shift']());}catch(_0xe1f4e6){_0x974663['push'](_0x974663['shift']());}}}(a247_0x4976,0x9674d));const a247_0x4eb1cd=(function(){let _0x19ca18=!![];return function(_0x386174,_0x1e2834){const _0x5a10b6=_0x19ca18?function(){const _0x48bbb8=a247_0xfd5f;if(_0x1e2834){const _0x29565a=_0x1e2834[_0x48bbb8(0x155)](_0x386174,arguments);return _0x1e2834=null,_0x29565a;}}:function(){};return _0x19ca18=![],_0x5a10b6;};}()),a247_0x1987a2=a247_0x4eb1cd(this,function(){const _0x58ea2d=a247_0xfd5f;return a247_0x1987a2[_0x58ea2d(0x165)]()[_0x58ea2d(0x145)](_0x58ea2d(0x157))[_0x58ea2d(0x165)]()[_0x58ea2d(0x152)](a247_0x1987a2)[_0x58ea2d(0x145)](_0x58ea2d(0x157));});a247_0x1987a2();function a247_0xfd5f(_0x1395c1,_0x5ab57a){const _0x3a216d=a247_0x4976();return a247_0xfd5f=function(_0x1987a2,_0x4eb1cd){_0x1987a2=_0x1987a2-0x13d;let _0x497679=_0x3a216d[_0x1987a2];return _0x497679;},a247_0xfd5f(_0x1395c1,_0x5ab57a);}'use strict';Object[a247_0x13a1c7(0x13f)](exports,'__esModule',{'value':!![]}),exports[a247_0x13a1c7(0x149)]=void 0x0;const bad_request_error_1=require(a247_0x13a1c7(0x14d)),not_found_error_1=require(a247_0x13a1c7(0x156)),hook_dto_1=require(a247_0x13a1c7(0x14a)),git_hook_service_1=require(a247_0x13a1c7(0x14e));class AzureHookService extends git_hook_service_1['GitHookService']{constructor(_0x4a856c,_0xe1c9de,_0x1a00b1,_0x3b949e){const _0x1ae8ec=a247_0x13a1c7;super(_0x4a856c),this[_0x1ae8ec(0x162)]=_0xe1c9de,this[_0x1ae8ec(0x15c)]=_0x1a00b1,this[_0x1ae8ec(0x14c)]=_0x3b949e,this['request']=this[_0x1ae8ec(0x161)]();}get[a247_0x13a1c7(0x143)](){const _0x41d746=a247_0x13a1c7;return this[_0x41d746(0x14c)][_0x41d746(0x143)];}[a247_0x13a1c7(0x161)](){const _0x25912e=a247_0x13a1c7;return this[_0x25912e(0x15c)][_0x25912e(0x161)]();}[a247_0x13a1c7(0x159)](){const _0x260960=a247_0x13a1c7;return this[_0x260960(0x162)];}async[a247_0x13a1c7(0x164)](_0xf825ca){const _0x95221d=a247_0x13a1c7;try{const _0x5b7a31=await this['request']['post'](this[_0x95221d(0x143)]+_0x95221d(0x146),_0xf825ca);return hook_dto_1[_0x95221d(0x163)][_0x95221d(0x140)](_0x5b7a31);}catch(_0x50129f){throw new bad_request_error_1[(_0x95221d(0x148))](_0x50129f);}}async[a247_0x13a1c7(0x147)](_0x53d506){const _0xee8173=a247_0x13a1c7;try{const _0x3aef06=await this[_0xee8173(0x151)][_0xee8173(0x15e)](this[_0xee8173(0x143)]+_0xee8173(0x160)+_0x53d506);return hook_dto_1['HookDto'][_0xee8173(0x140)](_0x3aef06);}catch(_0x2dec44){throw new not_found_error_1['NotFoundError'](_0x2dec44);}}async['getAll'](){const _0x589463=a247_0x13a1c7;try{const _0x1fc630=await this[_0x589463(0x151)]['get'](this[_0x589463(0x143)]+'/_apis/hooks/subscriptions');return _0x1fc630['value']['filter'](_0x487e26=>{const _0x342194=_0x589463;var _0x5c7644;return((_0x5c7644=_0x487e26===null||_0x487e26===void 0x0?void 0x0:_0x487e26[_0x342194(0x15b)])===null||_0x5c7644===void 0x0?void 0x0:_0x5c7644[_0x342194(0x162)])===this['projectId'];})['map'](_0x857d76=>hook_dto_1['HookDto'][_0x589463(0x140)](_0x857d76));}catch(_0x509727){throw new not_found_error_1[(_0x589463(0x158))](_0x509727);}}async[a247_0x13a1c7(0x154)](_0x38a7d3,_0x55a9c5){const _0x551673=a247_0x13a1c7;try{const _0x2a9fc9=await this['request']['patch'](this['organization']+_0x551673(0x160)+_0x38a7d3,_0x55a9c5);return hook_dto_1[_0x551673(0x163)][_0x551673(0x15a)](_0x2a9fc9);}catch(_0x5ce9e1){throw new bad_request_error_1[(_0x551673(0x148))](_0x5ce9e1);}}async['delete'](_0x125d8e){const _0x4577fd=a247_0x13a1c7;try{await this[_0x4577fd(0x151)][_0x4577fd(0x153)](this['organization']+_0x4577fd(0x160)+_0x125d8e);}catch(_0x441f81){throw new bad_request_error_1[(_0x4577fd(0x148))](_0x441f81);}}}function a247_0x4976(){const _0x47b377=['81NogKCR','31803kOUTZu','defineProperty','fromAzure','8634208XVaRUr','2176167tDCYBZ','organization','616488pRGhzl','search','/_apis/hooks/subscriptions','getOne','BadRequestError','AzureHookService','../dto/hook.dto','3410240IHNgQC','credentials','../../../../../core/errors/bad-request.error','./git-hook.service','1784510hCEghY','38SSPeHU','request','constructor','delete','update','apply','../../../../../core/errors/not-found.error','(((.+)+)+)+$','NotFoundError','getProjectId','fromGithub','publisherInputs','api','132712QyWsOr','get','87xujCGH','/_apis/hooks/subscriptions/','createRequest','projectId','HookDto','create','toString'];a247_0x4976=function(){return _0x47b377;};return a247_0x4976();}exports[a247_0x13a1c7(0x149)]=AzureHookService;