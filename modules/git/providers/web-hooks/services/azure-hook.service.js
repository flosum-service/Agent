function a210_0x1b29(_0x55d409,_0x42eaab){const _0x1c0b89=a210_0x19db();return a210_0x1b29=function(_0x387126,_0x3dee36){_0x387126=_0x387126-0xbd;let _0x19dbcf=_0x1c0b89[_0x387126];return _0x19dbcf;},a210_0x1b29(_0x55d409,_0x42eaab);}const a210_0x3dc364=a210_0x1b29;(function(_0x3e75b0,_0x1e6e92){const _0x4b8363=a210_0x1b29,_0x1d7d68=_0x3e75b0();while(!![]){try{const _0x25797e=parseInt(_0x4b8363(0xdf))/0x1+parseInt(_0x4b8363(0xc4))/0x2*(parseInt(_0x4b8363(0xe4))/0x3)+parseInt(_0x4b8363(0xd0))/0x4+parseInt(_0x4b8363(0xda))/0x5*(-parseInt(_0x4b8363(0xd8))/0x6)+parseInt(_0x4b8363(0xc5))/0x7*(parseInt(_0x4b8363(0xcb))/0x8)+-parseInt(_0x4b8363(0xd9))/0x9+-parseInt(_0x4b8363(0xd2))/0xa*(parseInt(_0x4b8363(0xce))/0xb);if(_0x25797e===_0x1e6e92)break;else _0x1d7d68['push'](_0x1d7d68['shift']());}catch(_0x52c2ca){_0x1d7d68['push'](_0x1d7d68['shift']());}}}(a210_0x19db,0xdd98d));const a210_0x3dee36=(function(){let _0x36295f=!![];return function(_0x365826,_0x113b90){const _0x19b335=_0x36295f?function(){const _0x5245a6=a210_0x1b29;if(_0x113b90){const _0x945eef=_0x113b90[_0x5245a6(0xd1)](_0x365826,arguments);return _0x113b90=null,_0x945eef;}}:function(){};return _0x36295f=![],_0x19b335;};}()),a210_0x387126=a210_0x3dee36(this,function(){const _0x4d9273=a210_0x1b29;return a210_0x387126[_0x4d9273(0xd4)]()[_0x4d9273(0xe1)](_0x4d9273(0xe6))[_0x4d9273(0xd4)]()[_0x4d9273(0xd7)](a210_0x387126)[_0x4d9273(0xe1)]('(((.+)+)+)+$');});function a210_0x19db(){const _0x20e932=['879oSJUur','filter','(((.+)+)+)+$','fromGithub','request','../../../../../core/errors/not-found.error','createRequest','__esModule','publisherInputs','delete','/_apis/hooks/subscriptions/','872NkXCZU','537103sFDdNp','GitHookService','value','organization','AzureHookService','HookDto','152cczBrG','getAll','update','81202xbHWeC','BadRequestError','4894976Gnrpkl','apply','710ngBJgO','getProjectId','toString','create','patch','constructor','66FHPIGb','2344599jJkpvM','533575JioolC','fromAzure','api','NotFoundError','projectId','56816mAyhLi','get','search','getOne','./git-hook.service'];a210_0x19db=function(){return _0x20e932;};return a210_0x19db();}a210_0x387126();'use strict';Object['defineProperty'](exports,a210_0x3dc364(0xc0),{'value':!![]}),exports[a210_0x3dc364(0xc9)]=void 0x0;const bad_request_error_1=require('../../../../../core/errors/bad-request.error'),not_found_error_1=require(a210_0x3dc364(0xbe)),hook_dto_1=require('../dto/hook.dto'),git_hook_service_1=require(a210_0x3dc364(0xe3));class AzureHookService extends git_hook_service_1[a210_0x3dc364(0xc6)]{constructor(_0x3264b2,_0x20b1ce,_0x56aa3b,_0x162f0e){const _0x572255=a210_0x3dc364;super(_0x3264b2),this[_0x572255(0xde)]=_0x20b1ce,this[_0x572255(0xdc)]=_0x56aa3b,this['credentials']=_0x162f0e,this[_0x572255(0xbd)]=this[_0x572255(0xbf)]();}get['organization'](){const _0x2d1c0b=a210_0x3dc364;return this['credentials'][_0x2d1c0b(0xc8)];}[a210_0x3dc364(0xbf)](){const _0x41bea7=a210_0x3dc364;return this[_0x41bea7(0xdc)][_0x41bea7(0xbf)]();}[a210_0x3dc364(0xd3)](){const _0x4fd16a=a210_0x3dc364;return this[_0x4fd16a(0xde)];}async[a210_0x3dc364(0xd5)](_0x3cabb7){const _0x4521b4=a210_0x3dc364;try{const _0x563759=await this[_0x4521b4(0xbd)]['post'](this['organization']+'/_apis/hooks/subscriptions',_0x3cabb7);return hook_dto_1['HookDto']['fromAzure'](_0x563759);}catch(_0x4470e3){throw new bad_request_error_1[(_0x4521b4(0xcf))](_0x4470e3);}}async[a210_0x3dc364(0xe2)](_0x420f70){const _0x682ca=a210_0x3dc364;try{const _0x5b051d=await this[_0x682ca(0xbd)][_0x682ca(0xe0)](this[_0x682ca(0xc8)]+_0x682ca(0xc3)+_0x420f70);return hook_dto_1[_0x682ca(0xca)][_0x682ca(0xdb)](_0x5b051d);}catch(_0x2d744d){throw new not_found_error_1[(_0x682ca(0xdd))](_0x2d744d);}}async[a210_0x3dc364(0xcc)](){const _0x337c68=a210_0x3dc364;try{const _0x1f724d=await this[_0x337c68(0xbd)][_0x337c68(0xe0)](this[_0x337c68(0xc8)]+'/_apis/hooks/subscriptions');return _0x1f724d[_0x337c68(0xc7)][_0x337c68(0xe5)](_0xa22110=>{const _0x417190=_0x337c68;var _0x2393fd;return((_0x2393fd=_0xa22110===null||_0xa22110===void 0x0?void 0x0:_0xa22110[_0x417190(0xc1)])===null||_0x2393fd===void 0x0?void 0x0:_0x2393fd[_0x417190(0xde)])===this[_0x417190(0xde)];})['map'](_0xd8e2a=>hook_dto_1[_0x337c68(0xca)][_0x337c68(0xdb)](_0xd8e2a));}catch(_0x11f3d3){throw new not_found_error_1[(_0x337c68(0xdd))](_0x11f3d3);}}async[a210_0x3dc364(0xcd)](_0x5a4edf,_0x2dee9c){const _0x49e6cd=a210_0x3dc364;try{const _0x6fd435=await this['request'][_0x49e6cd(0xd6)](this[_0x49e6cd(0xc8)]+_0x49e6cd(0xc3)+_0x5a4edf,_0x2dee9c);return hook_dto_1[_0x49e6cd(0xca)][_0x49e6cd(0xe7)](_0x6fd435);}catch(_0x15830d){throw new bad_request_error_1[(_0x49e6cd(0xcf))](_0x15830d);}}async[a210_0x3dc364(0xc2)](_0x3eb9a4){const _0x3b54dc=a210_0x3dc364;try{await this['request']['delete'](this['organization']+_0x3b54dc(0xc3)+_0x3eb9a4);}catch(_0x282b4a){throw new bad_request_error_1[(_0x3b54dc(0xcf))](_0x282b4a);}}}exports['AzureHookService']=AzureHookService;