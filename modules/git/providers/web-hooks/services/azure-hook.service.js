function a248_0x5f37(_0x1c7dad,_0x1b8637){const _0x3e4c31=a248_0x5813();return a248_0x5f37=function(_0x562118,_0x422884){_0x562118=_0x562118-0x193;let _0x581371=_0x3e4c31[_0x562118];return _0x581371;},a248_0x5f37(_0x1c7dad,_0x1b8637);}const a248_0x1a4fb9=a248_0x5f37;(function(_0x4f3dc0,_0x412c3c){const _0x10b82b=a248_0x5f37,_0x300377=_0x4f3dc0();while(!![]){try{const _0x527f78=parseInt(_0x10b82b(0x1a3))/0x1+-parseInt(_0x10b82b(0x1b6))/0x2+parseInt(_0x10b82b(0x1b1))/0x3+parseInt(_0x10b82b(0x1b8))/0x4*(parseInt(_0x10b82b(0x1b4))/0x5)+parseInt(_0x10b82b(0x194))/0x6+parseInt(_0x10b82b(0x1a4))/0x7*(parseInt(_0x10b82b(0x196))/0x8)+-parseInt(_0x10b82b(0x1a5))/0x9;if(_0x527f78===_0x412c3c)break;else _0x300377['push'](_0x300377['shift']());}catch(_0x21d0a8){_0x300377['push'](_0x300377['shift']());}}}(a248_0x5813,0x5f35a));function a248_0x5813(){const _0x851cd2=['1100946OyehyI','HookDto','4FKxFEb','GitHookService','defineProperty','createRequest','filter','2032296zHDZKE','projectId','64acKMoq','BadRequestError','organization','AzureHookService','request','/_apis/hooks/subscriptions/','post','fromAzure','../dto/hook.dto','NotFoundError','apply','api','/_apis/hooks/subscriptions','652520zlADTa','42413mlOKjH','11457297ePdgrI','delete','get','getAll','../../../../../core/errors/bad-request.error','credentials','toString','value','search','(((.+)+)+)+$','patch','constructor','1954596USGHiy','getProjectId','./git-hook.service','2611220rLZNLS','../../../../../core/errors/not-found.error'];a248_0x5813=function(){return _0x851cd2;};return a248_0x5813();}const a248_0x422884=(function(){let _0x312e56=!![];return function(_0x38002b,_0x6bee25){const _0x3bf7bd=_0x312e56?function(){const _0x28797c=a248_0x5f37;if(_0x6bee25){const _0x38ed7a=_0x6bee25[_0x28797c(0x1a0)](_0x38002b,arguments);return _0x6bee25=null,_0x38ed7a;}}:function(){};return _0x312e56=![],_0x3bf7bd;};}()),a248_0x562118=a248_0x422884(this,function(){const _0x475a1b=a248_0x5f37;return a248_0x562118['toString']()[_0x475a1b(0x1ad)]('(((.+)+)+)+$')[_0x475a1b(0x1ab)]()[_0x475a1b(0x1b0)](a248_0x562118)['search'](_0x475a1b(0x1ae));});a248_0x562118();'use strict';Object[a248_0x1a4fb9(0x1ba)](exports,'__esModule',{'value':!![]}),exports[a248_0x1a4fb9(0x199)]=void 0x0;const bad_request_error_1=require(a248_0x1a4fb9(0x1a9)),not_found_error_1=require(a248_0x1a4fb9(0x1b5)),hook_dto_1=require(a248_0x1a4fb9(0x19e)),git_hook_service_1=require(a248_0x1a4fb9(0x1b3));class AzureHookService extends git_hook_service_1[a248_0x1a4fb9(0x1b9)]{constructor(_0x5a4b50,_0x289817,_0x28bc0e,_0x40684d){const _0x56b4b8=a248_0x1a4fb9;super(_0x5a4b50),this[_0x56b4b8(0x195)]=_0x289817,this[_0x56b4b8(0x1a1)]=_0x28bc0e,this[_0x56b4b8(0x1aa)]=_0x40684d,this[_0x56b4b8(0x19a)]=this['createRequest']();}get['organization'](){const _0xc90ec9=a248_0x1a4fb9;return this[_0xc90ec9(0x1aa)]['organization'];}[a248_0x1a4fb9(0x1bb)](){const _0x37bbf3=a248_0x1a4fb9;return this[_0x37bbf3(0x1a1)][_0x37bbf3(0x1bb)]();}[a248_0x1a4fb9(0x1b2)](){const _0x570306=a248_0x1a4fb9;return this[_0x570306(0x195)];}async['create'](_0x20e53e){const _0x39e45d=a248_0x1a4fb9;try{const _0x553350=await this[_0x39e45d(0x19a)][_0x39e45d(0x19c)](this[_0x39e45d(0x198)]+'/_apis/hooks/subscriptions',_0x20e53e);return hook_dto_1[_0x39e45d(0x1b7)][_0x39e45d(0x19d)](_0x553350);}catch(_0xc2953d){throw new bad_request_error_1[(_0x39e45d(0x197))](_0xc2953d);}}async['getOne'](_0x53ac32){const _0x52bbe4=a248_0x1a4fb9;try{const _0x106000=await this[_0x52bbe4(0x19a)][_0x52bbe4(0x1a7)](this[_0x52bbe4(0x198)]+'/_apis/hooks/subscriptions/'+_0x53ac32);return hook_dto_1[_0x52bbe4(0x1b7)][_0x52bbe4(0x19d)](_0x106000);}catch(_0x3a7722){throw new not_found_error_1[(_0x52bbe4(0x19f))](_0x3a7722);}}async[a248_0x1a4fb9(0x1a8)](){const _0x4aa23f=a248_0x1a4fb9;try{const _0x459097=await this[_0x4aa23f(0x19a)][_0x4aa23f(0x1a7)](this[_0x4aa23f(0x198)]+_0x4aa23f(0x1a2));return _0x459097[_0x4aa23f(0x1ac)][_0x4aa23f(0x193)](_0x861f7f=>{const _0x364d0f=_0x4aa23f;var _0x36970c;return((_0x36970c=_0x861f7f===null||_0x861f7f===void 0x0?void 0x0:_0x861f7f['publisherInputs'])===null||_0x36970c===void 0x0?void 0x0:_0x36970c[_0x364d0f(0x195)])===this[_0x364d0f(0x195)];})['map'](_0x26ccb2=>hook_dto_1[_0x4aa23f(0x1b7)][_0x4aa23f(0x19d)](_0x26ccb2));}catch(_0x3f4b10){throw new not_found_error_1['NotFoundError'](_0x3f4b10);}}async['update'](_0xac60df,_0x42b263){const _0x1c1137=a248_0x1a4fb9;try{const _0x3952bd=await this[_0x1c1137(0x19a)][_0x1c1137(0x1af)](this[_0x1c1137(0x198)]+'/_apis/hooks/subscriptions/'+_0xac60df,_0x42b263);return hook_dto_1[_0x1c1137(0x1b7)]['fromGithub'](_0x3952bd);}catch(_0x167324){throw new bad_request_error_1['BadRequestError'](_0x167324);}}async[a248_0x1a4fb9(0x1a6)](_0x574fad){const _0x367346=a248_0x1a4fb9;try{await this[_0x367346(0x19a)][_0x367346(0x1a6)](this[_0x367346(0x198)]+_0x367346(0x19b)+_0x574fad);}catch(_0x3889ad){throw new bad_request_error_1[(_0x367346(0x197))](_0x3889ad);}}}exports['AzureHookService']=AzureHookService;