const a252_0x54b362=a252_0xbc22;(function(_0x1bb512,_0x468345){const _0x532601=a252_0xbc22,_0x17cf1c=_0x1bb512();while(!![]){try{const _0x4e44f8=-parseInt(_0x532601(0x1e2))/0x1+parseInt(_0x532601(0x1d7))/0x2*(-parseInt(_0x532601(0x1da))/0x3)+parseInt(_0x532601(0x1d3))/0x4*(-parseInt(_0x532601(0x1d6))/0x5)+parseInt(_0x532601(0x1e5))/0x6*(parseInt(_0x532601(0x1db))/0x7)+-parseInt(_0x532601(0x1ee))/0x8+parseInt(_0x532601(0x1ec))/0x9+parseInt(_0x532601(0x1df))/0xa*(parseInt(_0x532601(0x1d2))/0xb);if(_0x4e44f8===_0x468345)break;else _0x17cf1c['push'](_0x17cf1c['shift']());}catch(_0x431fc2){_0x17cf1c['push'](_0x17cf1c['shift']());}}}(a252_0x167f,0x80eca));const a252_0x10a46f=(function(){let _0x3f3811=!![];return function(_0x35921f,_0xe77038){const _0xf48bbb=_0x3f3811?function(){if(_0xe77038){const _0x3526b0=_0xe77038['apply'](_0x35921f,arguments);return _0xe77038=null,_0x3526b0;}}:function(){};return _0x3f3811=![],_0xf48bbb;};}()),a252_0x59de62=a252_0x10a46f(this,function(){const _0x5d3981=a252_0xbc22;return a252_0x59de62[_0x5d3981(0x1e0)]()[_0x5d3981(0x1c9)]('(((.+)+)+)+$')[_0x5d3981(0x1e0)]()[_0x5d3981(0x1e8)](a252_0x59de62)[_0x5d3981(0x1c9)](_0x5d3981(0x1de));});a252_0x59de62();'use strict';Object[a252_0x54b362(0x1d9)](exports,a252_0x54b362(0x1d0),{'value':!![]}),exports['GitlabHookService']=void 0x0;const bad_request_error_1=require(a252_0x54b362(0x1d4)),not_found_error_1=require(a252_0x54b362(0x1d1)),hook_dto_1=require(a252_0x54b362(0x1ed)),git_hook_service_1=require(a252_0x54b362(0x1dd));function a252_0x167f(){const _0x1ffb6b=['constructor','hooks/','repository','GitlabHookService','3251106FfNgGK','../dto/hook.dto','8156872UbCZHa','search','api','getAll','fromGitlab','get','delete','post','__esModule','../../../../../core/errors/not-found.error','6215KYnoyh','2201524UDlLwM','../../../../../core/errors/bad-request.error','HookDto','5jTDbbH','144766rvmJkB','create','defineProperty','6sVhWvH','7TZekJR','NotFoundError','./git-hook.service','(((.+)+)+)+$','17800LfjTHq','toString','hooks','59530ESWPuc','map','request','5612556ckpiqp','createRequest','update'];a252_0x167f=function(){return _0x1ffb6b;};return a252_0x167f();}function a252_0xbc22(_0x26b29f,_0x168fd0){const _0x3ba1fd=a252_0x167f();return a252_0xbc22=function(_0x59de62,_0x10a46f){_0x59de62=_0x59de62-0x1c9;let _0x167fa0=_0x3ba1fd[_0x59de62];return _0x167fa0;},a252_0xbc22(_0x26b29f,_0x168fd0);}class GitlabHookService extends git_hook_service_1['GitHookService']{constructor(_0x2e1ecf,_0x5aa8ef){const _0x29957b=a252_0x54b362;super(_0x2e1ecf),this[_0x29957b(0x1ca)]=_0x5aa8ef,this[_0x29957b(0x1e4)]=this[_0x29957b(0x1e6)]();}[a252_0x54b362(0x1e6)](){const _0x311195=a252_0x54b362;return this[_0x311195(0x1ca)][_0x311195(0x1e6)](this[_0x311195(0x1ea)]['apiUrl']);}async[a252_0x54b362(0x1d8)](_0x5ab7c8){const _0x2c18a9=a252_0x54b362;try{const _0x42fdd3=await this['request'][_0x2c18a9(0x1cf)](_0x2c18a9(0x1e1),_0x5ab7c8);return hook_dto_1['HookDto']['fromGitlab'](_0x42fdd3);}catch(_0x4b4a47){throw new bad_request_error_1['BadRequestError'](_0x4b4a47);}}async['getOne'](_0x42a186){const _0x104f96=a252_0x54b362;try{const _0x11f926=await this[_0x104f96(0x1e4)][_0x104f96(0x1cd)](_0x104f96(0x1e9)+_0x42a186);return hook_dto_1[_0x104f96(0x1d5)][_0x104f96(0x1cc)](_0x11f926);}catch(_0x24fa3d){throw new not_found_error_1[(_0x104f96(0x1dc))](_0x24fa3d);}}async[a252_0x54b362(0x1cb)](){const _0x32e3fb=a252_0x54b362;try{const _0x32aee7=await this[_0x32e3fb(0x1e4)]['get'](_0x32e3fb(0x1e1));return _0x32aee7[_0x32e3fb(0x1e3)](_0x2bcf6a=>hook_dto_1[_0x32e3fb(0x1d5)][_0x32e3fb(0x1cc)](_0x2bcf6a));}catch(_0x216f0){throw new not_found_error_1[(_0x32e3fb(0x1dc))](_0x216f0);}}async[a252_0x54b362(0x1e7)](_0x1fdca6,_0x1a5433){const _0x39b564=a252_0x54b362;try{const _0x501bab=await this['request']['put']('hooks/'+_0x1fdca6,_0x1a5433);return hook_dto_1['HookDto'][_0x39b564(0x1cc)](_0x501bab);}catch(_0xf49688){throw new not_found_error_1[(_0x39b564(0x1dc))](_0xf49688);}}async[a252_0x54b362(0x1ce)](_0x474b5b){const _0x184f17=a252_0x54b362;try{await this['request'][_0x184f17(0x1ce)](_0x184f17(0x1e9)+_0x474b5b);}catch(_0x40a3b4){throw new not_found_error_1['NotFoundError'](_0x40a3b4);}}}exports[a252_0x54b362(0x1eb)]=GitlabHookService;