const a227_0x413a0a=a227_0x1ce0;function a227_0xbcaf(){const _0xa3d28c=['apply','defineProperty','456798GNDpSX','constructor','__decorate','before','__metadata','569504VPOWCN','Middleware','object','2174893EKLHBH','4ifHFgx','decorate','context','handle','Tokens','set','__esModule','getOwnPropertyDescriptor','container','9ylxvoh','function','729876rBDKPH','headers','ERR_UNKNOWN_GIT_SERVICE','gitProvider','SalesforceService','search','GitConnectionMiddleware','x-connection-id','CredentialsFactory','255784tZzYID','toString','2750770oWpIAX','credentials','metadata','3860160EbkBYv','5OFTWfW','length','../../../../core','../providers.tokens','ServicesFactory','(((.+)+)+)+$','provider','../../salesforce/services/salesforce.service','salesforceService'];a227_0xbcaf=function(){return _0xa3d28c;};return a227_0xbcaf();}(function(_0x1cfa15,_0x2c0e18){const _0x13298f=a227_0x1ce0,_0xd2f07=_0x1cfa15();while(!![]){try{const _0x416815=-parseInt(_0x13298f(0xd8))/0x1+parseInt(_0x13298f(0xc0))/0x2+parseInt(_0x13298f(0xe9))/0x3*(parseInt(_0x13298f(0xc4))/0x4)+-parseInt(_0x13298f(0xde))/0x5*(-parseInt(_0x13298f(0xcf))/0x6)+parseInt(_0x13298f(0xc3))/0x7+-parseInt(_0x13298f(0xdd))/0x8+parseInt(_0x13298f(0xcd))/0x9*(parseInt(_0x13298f(0xda))/0xa);if(_0x416815===_0x2c0e18)break;else _0xd2f07['push'](_0xd2f07['shift']());}catch(_0x53970d){_0xd2f07['push'](_0xd2f07['shift']());}}}(a227_0xbcaf,0x63278));const a227_0x588205=(function(){let _0x4cab2f=!![];return function(_0x3105a6,_0x15aa42){const _0x4e3fd1=_0x4cab2f?function(){const _0x32493b=a227_0x1ce0;if(_0x15aa42){const _0x5bd794=_0x15aa42[_0x32493b(0xe7)](_0x3105a6,arguments);return _0x15aa42=null,_0x5bd794;}}:function(){};return _0x4cab2f=![],_0x4e3fd1;};}()),a227_0x116770=a227_0x588205(this,function(){const _0x74b940=a227_0x1ce0;return a227_0x116770[_0x74b940(0xd9)]()[_0x74b940(0xd4)]('(((.+)+)+)+$')[_0x74b940(0xd9)]()[_0x74b940(0xbc)](a227_0x116770)[_0x74b940(0xd4)](_0x74b940(0xe3));});a227_0x116770();function a227_0x1ce0(_0xb3f2ab,_0x27418e){const _0x2551ce=a227_0xbcaf();return a227_0x1ce0=function(_0x116770,_0x588205){_0x116770=_0x116770-0xbc;let _0xbcaf66=_0x2551ce[_0x116770];return _0xbcaf66;},a227_0x1ce0(_0xb3f2ab,_0x27418e);}'use strict';var __decorate=this&&this[a227_0x413a0a(0xbd)]||function(_0x3f2777,_0xe3754e,_0x62f7d6,_0x2eb089){const _0x545953=a227_0x413a0a;var _0x40ac5b=arguments[_0x545953(0xdf)],_0x5217ae=_0x40ac5b<0x3?_0xe3754e:_0x2eb089===null?_0x2eb089=Object[_0x545953(0xcb)](_0xe3754e,_0x62f7d6):_0x2eb089,_0x312c28;if(typeof Reflect===_0x545953(0xc2)&&typeof Reflect[_0x545953(0xc5)]===_0x545953(0xce))_0x5217ae=Reflect[_0x545953(0xc5)](_0x3f2777,_0xe3754e,_0x62f7d6,_0x2eb089);else{for(var _0x13f78e=_0x3f2777[_0x545953(0xdf)]-0x1;_0x13f78e>=0x0;_0x13f78e--)if(_0x312c28=_0x3f2777[_0x13f78e])_0x5217ae=(_0x40ac5b<0x3?_0x312c28(_0x5217ae):_0x40ac5b>0x3?_0x312c28(_0xe3754e,_0x62f7d6,_0x5217ae):_0x312c28(_0xe3754e,_0x62f7d6))||_0x5217ae;}return _0x40ac5b>0x3&&_0x5217ae&&Object[_0x545953(0xe8)](_0xe3754e,_0x62f7d6,_0x5217ae),_0x5217ae;},__metadata=this&&this[a227_0x413a0a(0xbf)]||function(_0x13c547,_0x49454c){const _0x442582=a227_0x413a0a;if(typeof Reflect===_0x442582(0xc2)&&typeof Reflect[_0x442582(0xdc)]===_0x442582(0xce))return Reflect[_0x442582(0xdc)](_0x13c547,_0x49454c);};Object['defineProperty'](exports,a227_0x413a0a(0xca),{'value':!![]}),exports[a227_0x413a0a(0xd5)]=void 0x0;const core_1=require(a227_0x413a0a(0xe0)),salesforce_service_1=require(a227_0x413a0a(0xe5)),providers_tokens_1=require(a227_0x413a0a(0xe1)),credentials_factory_1=require('../credentials/credentials.factory'),git_api_factory_1=require('../api/git-api.factory'),errors_1=require('../../../../constants/errors');let GitConnectionMiddleware=class GitConnectionMiddleware{constructor(_0x3289bd){this['salesforceService']=_0x3289bd;}async[a227_0x413a0a(0xc7)](_0x150d6e,_0x564fd2){const _0x3c6c76=a227_0x413a0a,_0x20c107=_0x150d6e[_0x3c6c76(0xd0)][_0x3c6c76(0xd6)]||null;if(!_0x20c107||!_0x150d6e[_0x3c6c76(0xc6)][_0x3c6c76(0xcc)])throw new Error(errors_1[_0x3c6c76(0xd1)]);const _0x13ff04=await this[_0x3c6c76(0xe6)]['fetchConnection'](_0x20c107);if(!_0x13ff04)throw new Error(errors_1['ERR_UNKNOWN_GIT_SERVICE']);const _0x743aa2=await credentials_factory_1[_0x3c6c76(0xd7)]['createFromConnection'](_0x13ff04),_0x17d3a5=_0x150d6e[_0x3c6c76(0xc6)][_0x3c6c76(0xcc)];_0x17d3a5[_0x3c6c76(0xc9)](providers_tokens_1[_0x3c6c76(0xc8)][_0x3c6c76(0xe4)],_0x13ff04[_0x3c6c76(0xd2)]),_0x17d3a5[_0x3c6c76(0xc9)](providers_tokens_1['Tokens'][_0x3c6c76(0xdb)],_0x743aa2),_0x150d6e[_0x3c6c76(0xc6)][_0x3c6c76(0xe4)]=git_api_factory_1[_0x3c6c76(0xe2)]['createFromProvider'](_0x17d3a5,_0x13ff04[_0x3c6c76(0xd2)]);}};GitConnectionMiddleware=__decorate([(0x0,core_1[a227_0x413a0a(0xc1)])(a227_0x413a0a(0xbe)),__metadata('design:paramtypes',[salesforce_service_1[a227_0x413a0a(0xd3)]])],GitConnectionMiddleware),exports[a227_0x413a0a(0xd5)]=GitConnectionMiddleware;