const a248_0x4dc768=a248_0x265d;(function(_0x57314f,_0x1b7ab9){const _0x2c07c2=a248_0x265d,_0x13d421=_0x57314f();while(!![]){try{const _0x370b4e=-parseInt(_0x2c07c2(0x12e))/0x1+parseInt(_0x2c07c2(0x134))/0x2*(parseInt(_0x2c07c2(0x130))/0x3)+-parseInt(_0x2c07c2(0x135))/0x4+parseInt(_0x2c07c2(0x14d))/0x5+parseInt(_0x2c07c2(0x13b))/0x6*(parseInt(_0x2c07c2(0x14b))/0x7)+parseInt(_0x2c07c2(0x13e))/0x8+parseInt(_0x2c07c2(0x149))/0x9*(-parseInt(_0x2c07c2(0x126))/0xa);if(_0x370b4e===_0x1b7ab9)break;else _0x13d421['push'](_0x13d421['shift']());}catch(_0x2b797a){_0x13d421['push'](_0x13d421['shift']());}}}(a248_0x3551,0xb6432));const a248_0x5ef222=(function(){let _0x36d4ed=!![];return function(_0x5466da,_0xc939b3){const _0xf36863=_0x36d4ed?function(){if(_0xc939b3){const _0x4cae7b=_0xc939b3['apply'](_0x5466da,arguments);return _0xc939b3=null,_0x4cae7b;}}:function(){};return _0x36d4ed=![],_0xf36863;};}()),a248_0x4e7e4b=a248_0x5ef222(this,function(){const _0xeeee50=a248_0x265d;return a248_0x4e7e4b[_0xeeee50(0x132)]()['search'](_0xeeee50(0x129))[_0xeeee50(0x132)]()['constructor'](a248_0x4e7e4b)[_0xeeee50(0x14c)](_0xeeee50(0x129));});a248_0x4e7e4b();'use strict';function a248_0x3551(){const _0x19b47e=['./git-hook.service','312344MEIdrG','organization','5709PnOuYh','createRequest','toString','NotFoundError','194vnpWCR','3865184AltrxO','fromAzure','post','BadRequestError','AzureHookService','request','126ZCPnko','getAll','fromGithub','6435816JMYOTa','/_apis/hooks/subscriptions','map','credentials','get','delete','create','publisherInputs','projectId','defineProperty','HookDto','99fbynbH','GitHookService','63735QOIFid','search','6135210TGHEdS','update','347390gUkiiM','__esModule','api','(((.+)+)+)+$','getProjectId','../../../../../core/errors/not-found.error','/_apis/hooks/subscriptions/'];a248_0x3551=function(){return _0x19b47e;};return a248_0x3551();}Object[a248_0x4dc768(0x147)](exports,a248_0x4dc768(0x127),{'value':!![]}),exports[a248_0x4dc768(0x139)]=void 0x0;function a248_0x265d(_0x1d560c,_0x8e56ae){const _0x46a55a=a248_0x3551();return a248_0x265d=function(_0x4e7e4b,_0x5ef222){_0x4e7e4b=_0x4e7e4b-0x125;let _0x3551f7=_0x46a55a[_0x4e7e4b];return _0x3551f7;},a248_0x265d(_0x1d560c,_0x8e56ae);}const bad_request_error_1=require('../../../../../core/errors/bad-request.error'),not_found_error_1=require(a248_0x4dc768(0x12b)),hook_dto_1=require('../dto/hook.dto'),git_hook_service_1=require(a248_0x4dc768(0x12d));class AzureHookService extends git_hook_service_1[a248_0x4dc768(0x14a)]{constructor(_0x476aa9,_0x3285b7,_0x1806b2,_0x2d6f26){const _0x5a82ea=a248_0x4dc768;super(_0x476aa9),this[_0x5a82ea(0x146)]=_0x3285b7,this[_0x5a82ea(0x128)]=_0x1806b2,this[_0x5a82ea(0x141)]=_0x2d6f26,this['request']=this[_0x5a82ea(0x131)]();}get[a248_0x4dc768(0x12f)](){const _0x241efe=a248_0x4dc768;return this[_0x241efe(0x141)]['organization'];}[a248_0x4dc768(0x131)](){const _0x45fe95=a248_0x4dc768;return this[_0x45fe95(0x128)]['createRequest']();}[a248_0x4dc768(0x12a)](){return this['projectId'];}async[a248_0x4dc768(0x144)](_0x5168b6){const _0x166a16=a248_0x4dc768;try{const _0x1a4333=await this['request'][_0x166a16(0x137)](this['organization']+'/_apis/hooks/subscriptions',_0x5168b6);return hook_dto_1[_0x166a16(0x148)]['fromAzure'](_0x1a4333);}catch(_0x26e099){throw new bad_request_error_1[(_0x166a16(0x138))](_0x26e099);}}async['getOne'](_0x31a992){const _0x5a46b5=a248_0x4dc768;try{const _0x4a0fad=await this[_0x5a46b5(0x13a)][_0x5a46b5(0x142)](this['organization']+_0x5a46b5(0x12c)+_0x31a992);return hook_dto_1['HookDto'][_0x5a46b5(0x136)](_0x4a0fad);}catch(_0x5bd0f3){throw new not_found_error_1[(_0x5a46b5(0x133))](_0x5bd0f3);}}async[a248_0x4dc768(0x13c)](){const _0x530fa0=a248_0x4dc768;try{const _0x38da13=await this[_0x530fa0(0x13a)][_0x530fa0(0x142)](this['organization']+_0x530fa0(0x13f));return _0x38da13['value']['filter'](_0x470097=>{const _0x76feeb=_0x530fa0;var _0x5a13e7;return((_0x5a13e7=_0x470097===null||_0x470097===void 0x0?void 0x0:_0x470097[_0x76feeb(0x145)])===null||_0x5a13e7===void 0x0?void 0x0:_0x5a13e7['projectId'])===this[_0x76feeb(0x146)];})[_0x530fa0(0x140)](_0xbd08a4=>hook_dto_1['HookDto'][_0x530fa0(0x136)](_0xbd08a4));}catch(_0x2a4687){throw new not_found_error_1[(_0x530fa0(0x133))](_0x2a4687);}}async[a248_0x4dc768(0x125)](_0x42cd66,_0x5e9452){const _0xf5c4b9=a248_0x4dc768;try{const _0x4c5fc3=await this['request']['patch'](this[_0xf5c4b9(0x12f)]+_0xf5c4b9(0x12c)+_0x42cd66,_0x5e9452);return hook_dto_1[_0xf5c4b9(0x148)][_0xf5c4b9(0x13d)](_0x4c5fc3);}catch(_0x2b03e6){throw new bad_request_error_1['BadRequestError'](_0x2b03e6);}}async[a248_0x4dc768(0x143)](_0x17225a){const _0x1ef6f4=a248_0x4dc768;try{await this[_0x1ef6f4(0x13a)][_0x1ef6f4(0x143)](this[_0x1ef6f4(0x12f)]+_0x1ef6f4(0x12c)+_0x17225a);}catch(_0x5ae781){throw new bad_request_error_1['BadRequestError'](_0x5ae781);}}}exports[a248_0x4dc768(0x139)]=AzureHookService;