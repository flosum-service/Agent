const a138_0x2d31fb=a138_0x59b8;(function(_0x1048f2,_0xf05473){const _0x2a8088=a138_0x59b8,_0x3d9297=_0x1048f2();while(!![]){try{const _0x8f43e0=-parseInt(_0x2a8088(0x1f2))/0x1+-parseInt(_0x2a8088(0x1f1))/0x2*(parseInt(_0x2a8088(0x1e5))/0x3)+-parseInt(_0x2a8088(0x201))/0x4*(parseInt(_0x2a8088(0x20a))/0x5)+-parseInt(_0x2a8088(0x1ee))/0x6*(parseInt(_0x2a8088(0x1ff))/0x7)+-parseInt(_0x2a8088(0x203))/0x8+-parseInt(_0x2a8088(0x20c))/0x9+parseInt(_0x2a8088(0x1e7))/0xa;if(_0x8f43e0===_0xf05473)break;else _0x3d9297['push'](_0x3d9297['shift']());}catch(_0x3b71f6){_0x3d9297['push'](_0x3d9297['shift']());}}}(a138_0x3345,0x2d054));function a138_0x59b8(_0x448979,_0x550646){const _0xdf6441=a138_0x3345();return a138_0x59b8=function(_0x2ffdfe,_0x5ae5cb){_0x2ffdfe=_0x2ffdfe-0x1e4;let _0x334532=_0xdf6441[_0x2ffdfe];return _0x334532;},a138_0x59b8(_0x448979,_0x550646);}const a138_0x5ae5cb=(function(){let _0x1be2c8=!![];return function(_0x37fae3,_0x3c0232){const _0x45823f=_0x1be2c8?function(){const _0x4d9531=a138_0x59b8;if(_0x3c0232){const _0x148874=_0x3c0232[_0x4d9531(0x1f7)](_0x37fae3,arguments);return _0x3c0232=null,_0x148874;}}:function(){};return _0x1be2c8=![],_0x45823f;};}()),a138_0x2ffdfe=a138_0x5ae5cb(this,function(){const _0x554b8e=a138_0x59b8;return a138_0x2ffdfe[_0x554b8e(0x1f9)]()[_0x554b8e(0x1eb)](_0x554b8e(0x200))[_0x554b8e(0x1f9)]()[_0x554b8e(0x1e6)](a138_0x2ffdfe)[_0x554b8e(0x1eb)](_0x554b8e(0x200));});a138_0x2ffdfe();'use strict';var __decorate=this&&this[a138_0x2d31fb(0x1f0)]||function(_0x343eab,_0x5de4fe,_0x371c45,_0x5b9f21){const _0x2c6d5f=a138_0x2d31fb;var _0x15475c=arguments[_0x2c6d5f(0x1f4)],_0x3aa950=_0x15475c<0x3?_0x5de4fe:_0x5b9f21===null?_0x5b9f21=Object['getOwnPropertyDescriptor'](_0x5de4fe,_0x371c45):_0x5b9f21,_0xc6b0bc;if(typeof Reflect===_0x2c6d5f(0x1ed)&&typeof Reflect['decorate']==='function')_0x3aa950=Reflect[_0x2c6d5f(0x1fc)](_0x343eab,_0x5de4fe,_0x371c45,_0x5b9f21);else{for(var _0x10608d=_0x343eab[_0x2c6d5f(0x1f4)]-0x1;_0x10608d>=0x0;_0x10608d--)if(_0xc6b0bc=_0x343eab[_0x10608d])_0x3aa950=(_0x15475c<0x3?_0xc6b0bc(_0x3aa950):_0x15475c>0x3?_0xc6b0bc(_0x5de4fe,_0x371c45,_0x3aa950):_0xc6b0bc(_0x5de4fe,_0x371c45))||_0x3aa950;}return _0x15475c>0x3&&_0x3aa950&&Object[_0x2c6d5f(0x209)](_0x5de4fe,_0x371c45,_0x3aa950),_0x3aa950;},__metadata=this&&this['__metadata']||function(_0x4a5a96,_0x3e5fd3){const _0x5e8df8=a138_0x2d31fb;if(typeof Reflect===_0x5e8df8(0x1ed)&&typeof Reflect[_0x5e8df8(0x1e4)]===_0x5e8df8(0x1f6))return Reflect['metadata'](_0x4a5a96,_0x3e5fd3);};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports['ProvidersFactory']=void 0x0;const typedi_1=require(a138_0x2d31fb(0x1ec)),errors_1=require(a138_0x2d31fb(0x1f3)),credentials_factory_1=require('../../providers/credentials/credentials.factory'),providers_tokens_1=require(a138_0x2d31fb(0x1ef)),git_api_factory_1=require(a138_0x2d31fb(0x1fd)),bad_request_error_1=require(a138_0x2d31fb(0x1ea)),salesforce_service_1=require(a138_0x2d31fb(0x208));let ProvidersFactory=class ProvidersFactory{constructor(_0x343577){const _0xce0a02=a138_0x2d31fb;this[_0xce0a02(0x202)]=_0x343577;}async['createFromConnection'](_0x31d69d){const _0x59e793=a138_0x2d31fb,_0x507ee3=await this[_0x59e793(0x202)]['fetchConnection'](_0x31d69d);if(!_0x507ee3)throw new Error(errors_1[_0x59e793(0x1f8)]);typedi_1[_0x59e793(0x204)]['set'](providers_tokens_1[_0x59e793(0x20b)][_0x59e793(0x1fb)],_0x507ee3);const _0x542dcb=await credentials_factory_1[_0x59e793(0x207)]['createFromConnection'](_0x507ee3);typedi_1[_0x59e793(0x204)][_0x59e793(0x205)](providers_tokens_1[_0x59e793(0x20b)][_0x59e793(0x20d)],_0x507ee3[_0x59e793(0x1e9)]),typedi_1[_0x59e793(0x204)]['set'](providers_tokens_1[_0x59e793(0x20b)]['credentials'],_0x542dcb);const _0x195d46=git_api_factory_1[_0x59e793(0x1fe)][_0x59e793(0x1fa)](typedi_1[_0x59e793(0x204)],_0x507ee3[_0x59e793(0x1e9)]);if(!await _0x195d46['isLoggedIn']())throw new bad_request_error_1[(_0x59e793(0x1f5))](errors_1[_0x59e793(0x1f8)]);return _0x195d46;}};ProvidersFactory=__decorate([(0x0,typedi_1[a138_0x2d31fb(0x206)])(),__metadata('design:paramtypes',[salesforce_service_1['SalesforceService']])],ProvidersFactory),exports[a138_0x2d31fb(0x1e8)]=ProvidersFactory;function a138_0x3345(){const _0x28fbdf=['Tokens','1959678kYVkKc','provider','metadata','226890dixaUP','constructor','13384430JhgwQr','ProvidersFactory','gitProvider','../../../../core/errors/bad-request.error','search','typedi','object','168GBVPfn','../../providers/providers.tokens','__decorate','4ZuleFT','180388LQZXrW','../../../../constants/errors','length','BadRequestError','function','apply','ERR_UNKNOWN_GIT_SERVICE','toString','createFromProvider','config','decorate','../../providers/api/git-api.factory','ServicesFactory','22204QjzIvo','(((.+)+)+)+$','175404UHLGqQ','salesforceService','2021816yTpzDq','Container','set','Service','CredentialsFactory','../../salesforce/services/salesforce.service','defineProperty','30VeQSxk'];a138_0x3345=function(){return _0x28fbdf;};return a138_0x3345();}