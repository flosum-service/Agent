const a83_0x27b0ae=a83_0x5c30;(function(_0x3e027a,_0x480284){const _0x1d404d=a83_0x5c30,_0x6390da=_0x3e027a();while(!![]){try{const _0xce7dd7=parseInt(_0x1d404d(0x117))/0x1+parseInt(_0x1d404d(0x10c))/0x2*(parseInt(_0x1d404d(0x10a))/0x3)+-parseInt(_0x1d404d(0x121))/0x4*(parseInt(_0x1d404d(0x118))/0x5)+-parseInt(_0x1d404d(0x112))/0x6+-parseInt(_0x1d404d(0x108))/0x7*(parseInt(_0x1d404d(0x120))/0x8)+-parseInt(_0x1d404d(0x12d))/0x9*(parseInt(_0x1d404d(0x122))/0xa)+parseInt(_0x1d404d(0x11b))/0xb;if(_0xce7dd7===_0x480284)break;else _0x6390da['push'](_0x6390da['shift']());}catch(_0x54ea5c){_0x6390da['push'](_0x6390da['shift']());}}}(a83_0x3475,0x383f7));const a83_0x17db48=(function(){let _0xa63e60=!![];return function(_0xe941bd,_0x2d1316){const _0x55661c=_0xa63e60?function(){const _0x58b3fc=a83_0x5c30;if(_0x2d1316){const _0x7df453=_0x2d1316[_0x58b3fc(0x111)](_0xe941bd,arguments);return _0x2d1316=null,_0x7df453;}}:function(){};return _0xa63e60=![],_0x55661c;};}()),a83_0x17955f=a83_0x17db48(this,function(){const _0x4b578d=a83_0x5c30;return a83_0x17955f[_0x4b578d(0x114)]()['search']('(((.+)+)+)+$')[_0x4b578d(0x114)]()[_0x4b578d(0x107)](a83_0x17955f)[_0x4b578d(0x10e)](_0x4b578d(0x105));});a83_0x17955f();'use strict';function a83_0x3475(){const _0xef0474=['__importDefault','3603842biCTwt','../../git-api/services/gitlab-api.service','hooks/','./git-hook.service','GitlabHookService','2096VQrvXM','4wNVJZD','20WxdUvN','NotFoundError','getAll','createRequest','post','../../../core/errors/not-found.error','BadRequestError','getOne','repository','__esModule','defineProperty','277155ZpvPjb','typedi','request','(((.+)+)+)+$','delete','constructor','5131oIbGko','HookDto','3TzUAAY','create','752530ybHoQn','../../../core/errors/bad-request.error','search','get','../dto/hook.dto','apply','405852TrMhgb','fromGitlab','toString','update','map','46039UEKXun','991285QskVSa','hooks'];a83_0x3475=function(){return _0xef0474;};return a83_0x3475();}var __importDefault=this&&this[a83_0x27b0ae(0x11a)]||function(_0x56e6c2){const _0x4f7b7c=a83_0x27b0ae;return _0x56e6c2&&_0x56e6c2[_0x4f7b7c(0x12b)]?_0x56e6c2:{'default':_0x56e6c2};};Object[a83_0x27b0ae(0x12c)](exports,a83_0x27b0ae(0x12b),{'value':!![]}),exports['GitlabHookService']=void 0x0;const bad_request_error_1=require(a83_0x27b0ae(0x10d)),not_found_error_1=require(a83_0x27b0ae(0x127)),gitlab_api_service_1=require(a83_0x27b0ae(0x11c)),typedi_1=__importDefault(require(a83_0x27b0ae(0x12e))),hook_dto_1=require(a83_0x27b0ae(0x110)),git_hook_service_1=require(a83_0x27b0ae(0x11e));function a83_0x5c30(_0x51b130,_0x269c3c){const _0x3c47da=a83_0x3475();return a83_0x5c30=function(_0x17955f,_0x17db48){_0x17955f=_0x17955f-0x105;let _0x34753f=_0x3c47da[_0x17955f];return _0x34753f;},a83_0x5c30(_0x51b130,_0x269c3c);}class GitlabHookService extends git_hook_service_1['GitHookService']{constructor(_0x40d614){const _0x4c6f60=a83_0x27b0ae;super(_0x40d614),this[_0x4c6f60(0x12f)]=this[_0x4c6f60(0x125)]();}[a83_0x27b0ae(0x125)](){const _0xf790d6=a83_0x27b0ae,_0x20ede4=typedi_1['default'][_0xf790d6(0x10f)](gitlab_api_service_1['GitlabApiService']);return _0x20ede4[_0xf790d6(0x125)](this[_0xf790d6(0x12a)]['apiUrl']);}async[a83_0x27b0ae(0x10b)](_0x1c39f4){const _0x1314af=a83_0x27b0ae;try{const _0x5db139=await this[_0x1314af(0x12f)][_0x1314af(0x126)](_0x1314af(0x119),_0x1c39f4);return hook_dto_1[_0x1314af(0x109)][_0x1314af(0x113)](_0x5db139);}catch(_0x56f77e){throw new bad_request_error_1[(_0x1314af(0x128))](_0x56f77e);}}async[a83_0x27b0ae(0x129)](_0x65d82a){const _0x491ace=a83_0x27b0ae;try{const _0x110b0c=await this[_0x491ace(0x12f)][_0x491ace(0x10f)](_0x491ace(0x11d)+_0x65d82a);return hook_dto_1[_0x491ace(0x109)][_0x491ace(0x113)](_0x110b0c);}catch(_0xbf3d2d){throw new not_found_error_1[(_0x491ace(0x123))](_0xbf3d2d);}}async[a83_0x27b0ae(0x124)](){const _0x39b7c4=a83_0x27b0ae;try{const _0x1a807b=await this['request'][_0x39b7c4(0x10f)]('hooks');return _0x1a807b[_0x39b7c4(0x116)](_0x3c3f55=>hook_dto_1[_0x39b7c4(0x109)][_0x39b7c4(0x113)](_0x3c3f55));}catch(_0x11994d){throw new not_found_error_1[(_0x39b7c4(0x123))](_0x11994d);}}async[a83_0x27b0ae(0x115)](_0x592f91,_0x224e77){const _0x5a090e=a83_0x27b0ae;try{const _0x2ea2c6=await this[_0x5a090e(0x12f)]['put']('hooks/'+_0x592f91,_0x224e77);return hook_dto_1['HookDto'][_0x5a090e(0x113)](_0x2ea2c6);}catch(_0x396e84){throw new not_found_error_1[(_0x5a090e(0x123))](_0x396e84);}}async[a83_0x27b0ae(0x106)](_0xdfd0fe){const _0x37ee25=a83_0x27b0ae;try{await this[_0x37ee25(0x12f)]['delete'](_0x37ee25(0x11d)+_0xdfd0fe);}catch(_0x4db298){throw new not_found_error_1[(_0x37ee25(0x123))](_0x4db298);}}}exports[a83_0x27b0ae(0x11f)]=GitlabHookService;