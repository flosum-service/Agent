const a209_0x41c597=a209_0xff08;(function(_0x3bbc6b,_0x574c47){const _0x566ece=a209_0xff08,_0x4ac69e=_0x3bbc6b();while(!![]){try{const _0x366e4c=parseInt(_0x566ece(0x1e2))/0x1*(-parseInt(_0x566ece(0x1d6))/0x2)+parseInt(_0x566ece(0x1d8))/0x3*(parseInt(_0x566ece(0x1c0))/0x4)+parseInt(_0x566ece(0x1d5))/0x5+parseInt(_0x566ece(0x1c9))/0x6+parseInt(_0x566ece(0x1e1))/0x7+parseInt(_0x566ece(0x1d1))/0x8+-parseInt(_0x566ece(0x1cb))/0x9;if(_0x366e4c===_0x574c47)break;else _0x4ac69e['push'](_0x4ac69e['shift']());}catch(_0x3903f6){_0x4ac69e['push'](_0x4ac69e['shift']());}}}(a209_0x3e4b,0x84749));function a209_0xff08(_0x3d16fb,_0xb44820){const _0x340530=a209_0x3e4b();return a209_0xff08=function(_0xca52cb,_0x1d7829){_0xca52cb=_0xca52cb-0x1bf;let _0x3e4b78=_0x340530[_0xca52cb];return _0x3e4b78;},a209_0xff08(_0x3d16fb,_0xb44820);}const a209_0x1d7829=(function(){let _0x54c3e1=!![];return function(_0x410f90,_0x5df921){const _0x5aaa3b=_0x54c3e1?function(){const _0x3b60f3=a209_0xff08;if(_0x5df921){const _0x5a831f=_0x5df921[_0x3b60f3(0x1e0)](_0x410f90,arguments);return _0x5df921=null,_0x5a831f;}}:function(){};return _0x54c3e1=![],_0x5aaa3b;};}()),a209_0xca52cb=a209_0x1d7829(this,function(){const _0x460244=a209_0xff08;return a209_0xca52cb['toString']()[_0x460244(0x1cf)]('(((.+)+)+)+$')['toString']()[_0x460244(0x1e9)](a209_0xca52cb)[_0x460244(0x1cf)](_0x460244(0x1c1));});a209_0xca52cb();function a209_0x3e4b(){const _0x3cc1db=['1273468cYVDhS','1YTIkKu','value','BadRequestError','update','getOne','../dto/hook.dto','GitHookService','constructor','request','52YWinFJ','(((.+)+)+)+$','createRequest','credentials','projectId','publisherInputs','patch','create','filter','2168610ykYtsp','/_apis/hooks/subscriptions','16840908dntMIZ','map','delete','defineProperty','search','__esModule','4979816xLBfjZ','post','organization','NotFoundError','1073770bRttNg','55880CnaGMX','HookDto','244869XoatJB','fromAzure','get','getProjectId','fromGithub','/_apis/hooks/subscriptions/','AzureHookService','api','apply'];a209_0x3e4b=function(){return _0x3cc1db;};return a209_0x3e4b();}'use strict';Object[a209_0x41c597(0x1ce)](exports,a209_0x41c597(0x1d0),{'value':!![]}),exports[a209_0x41c597(0x1de)]=void 0x0;const bad_request_error_1=require('../../../../../core/errors/bad-request.error'),not_found_error_1=require('../../../../../core/errors/not-found.error'),hook_dto_1=require(a209_0x41c597(0x1e7)),git_hook_service_1=require('./git-hook.service');class AzureHookService extends git_hook_service_1[a209_0x41c597(0x1e8)]{constructor(_0x5801da,_0x2255bf,_0x843bc6,_0x560c60){const _0x1df1cb=a209_0x41c597;super(_0x5801da),this[_0x1df1cb(0x1c4)]=_0x2255bf,this[_0x1df1cb(0x1df)]=_0x843bc6,this['credentials']=_0x560c60,this['request']=this[_0x1df1cb(0x1c2)]();}get[a209_0x41c597(0x1d3)](){const _0x37cc76=a209_0x41c597;return this[_0x37cc76(0x1c3)]['organization'];}[a209_0x41c597(0x1c2)](){const _0xa6e869=a209_0x41c597;return this[_0xa6e869(0x1df)][_0xa6e869(0x1c2)]();}[a209_0x41c597(0x1db)](){const _0x3dd017=a209_0x41c597;return this[_0x3dd017(0x1c4)];}async[a209_0x41c597(0x1c7)](_0x468893){const _0x29a65b=a209_0x41c597;try{const _0x4122c1=await this['request'][_0x29a65b(0x1d2)](this['organization']+'/_apis/hooks/subscriptions',_0x468893);return hook_dto_1[_0x29a65b(0x1d7)][_0x29a65b(0x1d9)](_0x4122c1);}catch(_0x2c0641){throw new bad_request_error_1['BadRequestError'](_0x2c0641);}}async[a209_0x41c597(0x1e6)](_0x5899e4){const _0x2ed2b2=a209_0x41c597;try{const _0x591417=await this[_0x2ed2b2(0x1bf)][_0x2ed2b2(0x1da)](this[_0x2ed2b2(0x1d3)]+'/_apis/hooks/subscriptions/'+_0x5899e4);return hook_dto_1[_0x2ed2b2(0x1d7)][_0x2ed2b2(0x1d9)](_0x591417);}catch(_0x4a6009){throw new not_found_error_1[(_0x2ed2b2(0x1d4))](_0x4a6009);}}async['getAll'](){const _0x184e81=a209_0x41c597;try{const _0x3378a0=await this['request'][_0x184e81(0x1da)](this[_0x184e81(0x1d3)]+_0x184e81(0x1ca));return _0x3378a0[_0x184e81(0x1e3)][_0x184e81(0x1c8)](_0x253817=>{const _0x5c4ca5=_0x184e81;var _0x313b18;return((_0x313b18=_0x253817===null||_0x253817===void 0x0?void 0x0:_0x253817[_0x5c4ca5(0x1c5)])===null||_0x313b18===void 0x0?void 0x0:_0x313b18['projectId'])===this[_0x5c4ca5(0x1c4)];})[_0x184e81(0x1cc)](_0x429193=>hook_dto_1[_0x184e81(0x1d7)][_0x184e81(0x1d9)](_0x429193));}catch(_0x2e69ab){throw new not_found_error_1['NotFoundError'](_0x2e69ab);}}async[a209_0x41c597(0x1e5)](_0x5779a4,_0x27f288){const _0x2125cd=a209_0x41c597;try{const _0x42b0ff=await this['request'][_0x2125cd(0x1c6)](this['organization']+_0x2125cd(0x1dd)+_0x5779a4,_0x27f288);return hook_dto_1['HookDto'][_0x2125cd(0x1dc)](_0x42b0ff);}catch(_0x1cd2e5){throw new bad_request_error_1[(_0x2125cd(0x1e4))](_0x1cd2e5);}}async['delete'](_0x37870a){const _0x1b59ed=a209_0x41c597;try{await this['request'][_0x1b59ed(0x1cd)](this[_0x1b59ed(0x1d3)]+_0x1b59ed(0x1dd)+_0x37870a);}catch(_0x18819e){throw new bad_request_error_1['BadRequestError'](_0x18819e);}}}exports[a209_0x41c597(0x1de)]=AzureHookService;