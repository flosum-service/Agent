const a237_0x598e33=a237_0x3d05;(function(_0x2970dd,_0x2dc293){const _0x33b49b=a237_0x3d05,_0x1d1789=_0x2970dd();while(!![]){try{const _0x3facd3=-parseInt(_0x33b49b(0x1c4))/0x1*(-parseInt(_0x33b49b(0x1a7))/0x2)+parseInt(_0x33b49b(0x19a))/0x3*(parseInt(_0x33b49b(0x18f))/0x4)+parseInt(_0x33b49b(0x1bc))/0x5*(-parseInt(_0x33b49b(0x1a9))/0x6)+-parseInt(_0x33b49b(0x19b))/0x7+-parseInt(_0x33b49b(0x198))/0x8*(-parseInt(_0x33b49b(0x193))/0x9)+parseInt(_0x33b49b(0x1b4))/0xa+-parseInt(_0x33b49b(0x1c3))/0xb*(-parseInt(_0x33b49b(0x18b))/0xc);if(_0x3facd3===_0x2dc293)break;else _0x1d1789['push'](_0x1d1789['shift']());}catch(_0x1241b7){_0x1d1789['push'](_0x1d1789['shift']());}}}(a237_0x17d7,0x8d5e9));const a237_0xc0a40a=(function(){let _0x591058=!![];return function(_0x4726c4,_0xf48c3e){const _0xca0c15=_0x591058?function(){const _0xd2b494=a237_0x3d05;if(_0xf48c3e){const _0x2c13a4=_0xf48c3e[_0xd2b494(0x1c5)](_0x4726c4,arguments);return _0xf48c3e=null,_0x2c13a4;}}:function(){};return _0x591058=![],_0xca0c15;};}()),a237_0x1bceaf=a237_0xc0a40a(this,function(){const _0x5a2cf9=a237_0x3d05;return a237_0x1bceaf[_0x5a2cf9(0x182)]()['search'](_0x5a2cf9(0x1bd))[_0x5a2cf9(0x182)]()[_0x5a2cf9(0x1ab)](a237_0x1bceaf)['search'](_0x5a2cf9(0x1bd));});a237_0x1bceaf();function a237_0x3d05(_0x27b899,_0x16ba98){const _0x3d0910=a237_0x17d7();return a237_0x3d05=function(_0x1bceaf,_0xc0a40a){_0x1bceaf=_0x1bceaf-0x182;let _0x17d722=_0x3d0910[_0x1bceaf];return _0x17d722;},a237_0x3d05(_0x27b899,_0x16ba98);}'use strict';var __decorate=this&&this['__decorate']||function(_0x32ba1c,_0x4cb0f0,_0x5b5a3a,_0x2d5ba1){const _0x144e52=a237_0x3d05;var _0x18dc47=arguments[_0x144e52(0x192)],_0x20efe6=_0x18dc47<0x3?_0x4cb0f0:_0x2d5ba1===null?_0x2d5ba1=Object[_0x144e52(0x1c0)](_0x4cb0f0,_0x5b5a3a):_0x2d5ba1,_0x13c6b3;if(typeof Reflect===_0x144e52(0x187)&&typeof Reflect['decorate']==='function')_0x20efe6=Reflect[_0x144e52(0x1bb)](_0x32ba1c,_0x4cb0f0,_0x5b5a3a,_0x2d5ba1);else{for(var _0xc3be37=_0x32ba1c['length']-0x1;_0xc3be37>=0x0;_0xc3be37--)if(_0x13c6b3=_0x32ba1c[_0xc3be37])_0x20efe6=(_0x18dc47<0x3?_0x13c6b3(_0x20efe6):_0x18dc47>0x3?_0x13c6b3(_0x4cb0f0,_0x5b5a3a,_0x20efe6):_0x13c6b3(_0x4cb0f0,_0x5b5a3a))||_0x20efe6;}return _0x18dc47>0x3&&_0x20efe6&&Object[_0x144e52(0x1a3)](_0x4cb0f0,_0x5b5a3a,_0x20efe6),_0x20efe6;},__metadata=this&&this['__metadata']||function(_0x17c1b5,_0x5c370c){const _0x3ca5ff=a237_0x3d05;if(typeof Reflect===_0x3ca5ff(0x187)&&typeof Reflect[_0x3ca5ff(0x189)]===_0x3ca5ff(0x1b1))return Reflect['metadata'](_0x17c1b5,_0x5c370c);},__param=this&&this[a237_0x598e33(0x194)]||function(_0x9bd3c7,_0x4cc077){return function(_0x5d274e,_0x5809c2){_0x4cc077(_0x5d274e,_0x5809c2,_0x9bd3c7);};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a237_0x598e33(0x18a)]=void 0x0;const bad_request_error_1=require(a237_0x598e33(0x1ad)),not_found_error_1=require('../../../../../core/errors/not-found.error'),azure_api_service_1=require(a237_0x598e33(0x190)),typedi_1=require(a237_0x598e33(0x1bf)),api_error_1=require(a237_0x598e33(0x19c)),git_internal_1=require(a237_0x598e33(0x184)),repo_class_1=require(a237_0x598e33(0x183)),git_repo_service_1=require(a237_0x598e33(0x199)),azure_credentials_dto_1=require(a237_0x598e33(0x1a0)),providers_tokens_1=require(a237_0x598e33(0x1a2));let AzureRepoService=class AzureRepoService extends git_repo_service_1['GitRepoService']{constructor(_0x45a47f,_0x42ac0a){const _0x51488b=a237_0x598e33;super(_0x45a47f),this[_0x51488b(0x1b6)]=_0x45a47f,this['organization']=_0x42ac0a[_0x51488b(0x19d)],this[_0x51488b(0x1ae)]=_0x42ac0a[_0x51488b(0x1ae)],this['credentials']=_0x42ac0a,this[_0x51488b(0x1b8)][_0x51488b(0x1af)][_0x51488b(0x1ba)]=this['request'][_0x51488b(0x1af)]['baseURL']+'/'+this[_0x51488b(0x19d)]+'/'+this[_0x51488b(0x1ae)]+_0x51488b(0x185);}async['create'](_0x58e834){const _0x2d5a66=a237_0x598e33;try{const _0x4358da=await this[_0x2d5a66(0x1b8)][_0x2d5a66(0x1c1)](_0x2d5a66(0x1b9),_0x58e834),_0xc1e865=repo_class_1[_0x2d5a66(0x1b7)][_0x2d5a66(0x19f)](_0x4358da,this[_0x2d5a66(0x1b6)],this[_0x2d5a66(0x1b3)]);return _0x58e834[_0x2d5a66(0x1b2)]&&await git_internal_1[_0x2d5a66(0x1a6)][_0x2d5a66(0x18c)](_0xc1e865,_0x58e834[_0x2d5a66(0x1a1)]||{'name':_0x2d5a66(0x1be)},'',this[_0x2d5a66(0x1b3)]),this[_0x2d5a66(0x1ac)](_0xc1e865[_0x2d5a66(0x197)]);}catch(_0x356b9f){if(_0x356b9f instanceof api_error_1[_0x2d5a66(0x195)])throw _0x356b9f;throw new bad_request_error_1[(_0x2d5a66(0x1a4))](_0x356b9f);}}async['getOne'](_0x5eaf48){const _0x3b9b61=a237_0x598e33;try{const _0x4ce7f0=await this[_0x3b9b61(0x1b8)][_0x3b9b61(0x186)]('repositories/'+_0x5eaf48);return repo_class_1['Repo'][_0x3b9b61(0x19f)](_0x4ce7f0,this['api'],this[_0x3b9b61(0x1b3)]);}catch(_0x9ac9e7){if(_0x9ac9e7 instanceof api_error_1['ApiError'])throw _0x9ac9e7;throw new not_found_error_1['NotFoundError'](_0x9ac9e7);}}async['getAll'](){const _0x28a23f=a237_0x598e33;try{const _0x4b136e=await this['request'][_0x28a23f(0x186)](_0x28a23f(0x1b9));return _0x4b136e[_0x28a23f(0x1b0)][_0x28a23f(0x18e)](_0x1dfc36=>repo_class_1['Repo'][_0x28a23f(0x19f)](_0x1dfc36,this['api'],this['credentials']));}catch(_0x29a0a7){if(_0x29a0a7 instanceof api_error_1[_0x28a23f(0x195)])throw _0x29a0a7;throw new not_found_error_1[(_0x28a23f(0x1aa))](_0x29a0a7);}}async['update'](_0x2ac6a0,_0x53f4e7){const _0x22486c=a237_0x598e33;try{const _0x30aa67=await this[_0x22486c(0x1ac)](_0x2ac6a0),_0x281079=await this[_0x22486c(0x1b8)][_0x22486c(0x18d)](_0x30aa67[_0x22486c(0x1c2)],_0x53f4e7);return repo_class_1[_0x22486c(0x1b7)][_0x22486c(0x19f)](_0x281079,this[_0x22486c(0x1b6)],this[_0x22486c(0x1b3)]);}catch(_0x299ad2){if(_0x299ad2 instanceof api_error_1[_0x22486c(0x195)])throw _0x299ad2;throw new bad_request_error_1[(_0x22486c(0x1a4))](_0x299ad2);}}async[a237_0x598e33(0x19e)](_0x43f28e){const _0x58b692=a237_0x598e33;try{const _0x11782b=await this['request'][_0x58b692(0x186)](_0x58b692(0x1a8)+_0x43f28e);await this[_0x58b692(0x1b8)][_0x58b692(0x19e)](_0x58b692(0x1a8)+_0x11782b['id']);}catch(_0x1d84bd){if(_0x1d84bd instanceof api_error_1['ApiError'])throw _0x1d84bd;throw new not_found_error_1[(_0x58b692(0x1aa))](_0x1d84bd);}}};function a237_0x17d7(){const _0xd87484=['getOwnPropertyDescriptor','post','apiUrl','22whjIWH','216367LQLABO','apply','toString','../repo.class','../../../internal/git.internal','/_apis/git','get','object','Tokens','metadata','AzureRepoService','2874612TggFjU','createEmptyBranch','patch','map','44BjTKBt','../../api/azure-api.service','Service','length','3798oLZRPk','__param','ApiError','design:paramtypes','name','712MGzWPC','./git-repo.service','285831PYxapT','7894355ntPnvq','../../../../../core/errors/api.error','organization','delete','fromAzure','../../credentials/dto/azure-credentials.dto','defaultBranch','../../providers.tokens','defineProperty','BadRequestError','AzureApiService','Git','4GzDEQS','repositories/','16998mEmDxB','NotFoundError','constructor','getOne','../../../../../core/errors/bad-request.error','project','defaults','value','function','autoInit','credentials','4204560CYujbA','AzureCredentialsDto','api','Repo','request','repositories','baseURL','decorate','1255LtQXmy','(((.+)+)+)+$','master','typedi'];a237_0x17d7=function(){return _0xd87484;};return a237_0x17d7();}AzureRepoService=__decorate([(0x0,typedi_1[a237_0x598e33(0x191)])(),__param(0x1,(0x0,typedi_1['Inject'])(providers_tokens_1[a237_0x598e33(0x188)][a237_0x598e33(0x1b3)])),__metadata(a237_0x598e33(0x196),[azure_api_service_1[a237_0x598e33(0x1a5)],azure_credentials_dto_1[a237_0x598e33(0x1b5)]])],AzureRepoService),exports[a237_0x598e33(0x18a)]=AzureRepoService;