const a133_0x3a23fb=a133_0x4ce8;function a133_0x4ce8(_0x435df6,_0x56d730){const _0x4fe827=a133_0x5cad();return a133_0x4ce8=function(_0x295db7,_0x502aaa){_0x295db7=_0x295db7-0x16a;let _0x5cad3f=_0x4fe827[_0x295db7];return _0x5cad3f;},a133_0x4ce8(_0x435df6,_0x56d730);}(function(_0x49b495,_0x26ed2c){const _0x13d712=a133_0x4ce8,_0x4dbca0=_0x49b495();while(!![]){try{const _0x2735a2=-parseInt(_0x13d712(0x16f))/0x1+parseInt(_0x13d712(0x188))/0x2+-parseInt(_0x13d712(0x187))/0x3+parseInt(_0x13d712(0x17d))/0x4*(-parseInt(_0x13d712(0x18f))/0x5)+parseInt(_0x13d712(0x180))/0x6*(parseInt(_0x13d712(0x173))/0x7)+parseInt(_0x13d712(0x170))/0x8*(parseInt(_0x13d712(0x171))/0x9)+parseInt(_0x13d712(0x18b))/0xa;if(_0x2735a2===_0x26ed2c)break;else _0x4dbca0['push'](_0x4dbca0['shift']());}catch(_0x17cabe){_0x4dbca0['push'](_0x4dbca0['shift']());}}}(a133_0x5cad,0x37dbe));const a133_0x502aaa=(function(){let _0x300f8a=!![];return function(_0x1f1fd7,_0x553fc0){const _0x45f6ed=_0x300f8a?function(){const _0x38324f=a133_0x4ce8;if(_0x553fc0){const _0x1f2242=_0x553fc0[_0x38324f(0x17e)](_0x1f1fd7,arguments);return _0x553fc0=null,_0x1f2242;}}:function(){};return _0x300f8a=![],_0x45f6ed;};}()),a133_0x295db7=a133_0x502aaa(this,function(){const _0x20b1bc=a133_0x4ce8;return a133_0x295db7[_0x20b1bc(0x179)]()[_0x20b1bc(0x174)](_0x20b1bc(0x16e))['toString']()[_0x20b1bc(0x183)](a133_0x295db7)[_0x20b1bc(0x174)](_0x20b1bc(0x16e));});a133_0x295db7();'use strict';var __decorate=this&&this['__decorate']||function(_0x1a7388,_0x1f409c,_0x14902e,_0x5098a5){const _0x8eb9fb=a133_0x4ce8;var _0x53d6ef=arguments[_0x8eb9fb(0x18c)],_0x274e5c=_0x53d6ef<0x3?_0x1f409c:_0x5098a5===null?_0x5098a5=Object[_0x8eb9fb(0x16a)](_0x1f409c,_0x14902e):_0x5098a5,_0x38dcea;if(typeof Reflect===_0x8eb9fb(0x16c)&&typeof Reflect[_0x8eb9fb(0x182)]===_0x8eb9fb(0x181))_0x274e5c=Reflect['decorate'](_0x1a7388,_0x1f409c,_0x14902e,_0x5098a5);else{for(var _0x2b4d95=_0x1a7388['length']-0x1;_0x2b4d95>=0x0;_0x2b4d95--)if(_0x38dcea=_0x1a7388[_0x2b4d95])_0x274e5c=(_0x53d6ef<0x3?_0x38dcea(_0x274e5c):_0x53d6ef>0x3?_0x38dcea(_0x1f409c,_0x14902e,_0x274e5c):_0x38dcea(_0x1f409c,_0x14902e))||_0x274e5c;}return _0x53d6ef>0x3&&_0x274e5c&&Object[_0x8eb9fb(0x17c)](_0x1f409c,_0x14902e,_0x274e5c),_0x274e5c;},__metadata=this&&this[a133_0x3a23fb(0x189)]||function(_0x4055bf,_0x2872eb){const _0x1617f5=a133_0x3a23fb;if(typeof Reflect==='object'&&typeof Reflect[_0x1617f5(0x190)]===_0x1617f5(0x181))return Reflect[_0x1617f5(0x190)](_0x4055bf,_0x2872eb);};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a133_0x3a23fb(0x17f)]=void 0x0;const typedi_1=require('typedi'),constants_1=require('../../../constants'),salesforce_error_1=require(a133_0x3a23fb(0x172)),create_request_util_1=require(a133_0x3a23fb(0x16d)),salesforce_auth_service_1=require(a133_0x3a23fb(0x17b));let SalesforceQueryService=class SalesforceQueryService{constructor(_0x3bca68){const _0x1d2e11=a133_0x3a23fb;this['request']=create_request_util_1[_0x1d2e11(0x18a)](_0x3bca68);}['parseSoqlString'](_0x38d6d1){const _0xe6c3e6=a133_0x3a23fb;return _0x38d6d1[_0xe6c3e6(0x178)](/\%namespace\%/g,constants_1[_0xe6c3e6(0x18d)])['replace'](/\%flosum_namespace\%/g,constants_1['FLOSUM_NAMESPACE']);}['getRequest'](){return this['request'];}async[a133_0x3a23fb(0x185)](_0xb10f1e){const _0x3c307d=a133_0x3a23fb;try{const _0x1feae7=encodeURI(this[_0x3c307d(0x186)](_0xb10f1e)),_0x267e69=_0x3c307d(0x17a)+constants_1['SALESFORCE_API_VERSION']+_0x3c307d(0x18e)+_0x1feae7,{data:_0x342662}=await this['request'][_0x3c307d(0x176)](_0x267e69),_0x12d0cd=_0x342662['records'];let _0x568e37=_0x342662[_0x3c307d(0x184)];while(_0x568e37){const {data:_0x2ea541}=await this[_0x3c307d(0x177)]['get'](_0x568e37);_0x568e37=_0x2ea541[_0x3c307d(0x184)],_0x12d0cd['push'](..._0x2ea541['records']);}return _0x12d0cd;}catch(_0x4e2814){throw new salesforce_error_1[(_0x3c307d(0x16b))](_0x4e2814);}}};function a133_0x5cad(){const _0x5269cb=['../errors/salesforce.error','502747dligYG','search','design:paramtypes','get','request','replace','toString','services/data/','./salesforce-auth.service','defineProperty','371048eAJcwy','apply','SalesforceQueryService','30qGFGBi','function','decorate','constructor','nextRecordsUrl','query','parseSoqlString','1296591ShOUMh','785594uzMacY','__metadata','createSalesforceRequest','3561840gTgHmP','length','FLOSUM_GIT_NAMESPACE','/query/?q=','10SszOoY','metadata','getOwnPropertyDescriptor','SalesforceError','object','../utils/create-request.util','(((.+)+)+)+$','397628zJySFl','1088488iHAlIO','9tqlFKC'];a133_0x5cad=function(){return _0x5269cb;};return a133_0x5cad();}SalesforceQueryService=__decorate([typedi_1['Service'](),__metadata(a133_0x3a23fb(0x175),[salesforce_auth_service_1['SalesforceAuthService']])],SalesforceQueryService),exports['SalesforceQueryService']=SalesforceQueryService;