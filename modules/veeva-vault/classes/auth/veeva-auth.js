const a353_0x19830b=a353_0x15d2;(function(_0x2e849e,_0x4ff681){const _0x3037bd=a353_0x15d2,_0x4469f2=_0x2e849e();while(!![]){try{const _0x4cd01d=-parseInt(_0x3037bd(0xe6))/0x1+parseInt(_0x3037bd(0xe4))/0x2+parseInt(_0x3037bd(0x102))/0x3+-parseInt(_0x3037bd(0xe3))/0x4+-parseInt(_0x3037bd(0xf1))/0x5*(-parseInt(_0x3037bd(0xf7))/0x6)+-parseInt(_0x3037bd(0x106))/0x7+parseInt(_0x3037bd(0xec))/0x8*(parseInt(_0x3037bd(0xfd))/0x9);if(_0x4cd01d===_0x4ff681)break;else _0x4469f2['push'](_0x4469f2['shift']());}catch(_0x3890f9){_0x4469f2['push'](_0x4469f2['shift']());}}}(a353_0x17fd,0xc8ca5));const a353_0x2735d7=(function(){let _0x4177dd=!![];return function(_0x214c4e,_0x51708b){const _0x41c583=_0x4177dd?function(){if(_0x51708b){const _0x3a0f00=_0x51708b['apply'](_0x214c4e,arguments);return _0x51708b=null,_0x3a0f00;}}:function(){};return _0x4177dd=![],_0x41c583;};}()),a353_0x5ea2f5=a353_0x2735d7(this,function(){const _0x378d6a=a353_0x15d2;return a353_0x5ea2f5[_0x378d6a(0xfc)]()['search'](_0x378d6a(0xfb))[_0x378d6a(0xfc)]()[_0x378d6a(0xe5)](a353_0x5ea2f5)[_0x378d6a(0xe1)](_0x378d6a(0xfb));});function a353_0x15d2(_0x328471,_0x16acb2){const _0x565661=a353_0x17fd();return a353_0x15d2=function(_0x5ea2f5,_0x2735d7){_0x5ea2f5=_0x5ea2f5-0xe1;let _0x17fd0c=_0x565661[_0x5ea2f5];return _0x17fd0c;},a353_0x15d2(_0x328471,_0x16acb2);}a353_0x5ea2f5();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x55df38){const _0x5ce3d0=a353_0x15d2;return _0x55df38&&_0x55df38[_0x5ce3d0(0xf6)]?_0x55df38:{'default':_0x55df38};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a353_0x19830b(0xe7)]=void 0x0;function a353_0x17fd(){const _0x14b94a=['toString','5814qhfCSm','API_LIMIT_EXCEEDED','append','VeevaConstants','message','4298925gNQMMt','some','type','BaseVeevaAuth','3300829cAFfvW','search','getNewAccessToken','4924524IMDKoo','962974VncWQG','constructor','564817jkvgJe','VeevaAuth','auth','default','responseStatus','../../../shared/utils','3824TggDsu','sleep','attemptsOfUpdateToken','errors','LOGIN_TIMEOUT','8010SMvwvD','sessionId','ENDPOINT_AUTH','../../enums/status.enums','../../constants/app.constants','__esModule','3246fAUOiL','instanceUrl','./base-veeva-auth','VeevaResponseStatus','(((.+)+)+)+$'];a353_0x17fd=function(){return _0x14b94a;};return a353_0x17fd();}const veeva_constants_1=require('../../constants/veeva.constants'),axios_1=__importDefault(require('axios')),status_enums_1=require(a353_0x19830b(0xf4)),utils_1=require(a353_0x19830b(0xeb)),app_constants_1=require(a353_0x19830b(0xf5)),base_veeva_auth_1=require(a353_0x19830b(0xf9));class VeevaAuth extends base_veeva_auth_1[a353_0x19830b(0x105)]{constructor(_0x594aea,_0x3d549b=0x0){const _0x3dbcc5=a353_0x19830b;super(_0x594aea),this[_0x3dbcc5(0xe8)]=_0x594aea,this['attemptsOfUpdateToken']=_0x3d549b;}async[a353_0x19830b(0xe2)](_0x31800f=this[a353_0x19830b(0xee)]){const _0xe7cab8=a353_0x19830b;var _0x10e3ee,_0x26a070;const _0x2ffb8d=this['auth'][_0xe7cab8(0xf8)]+veeva_constants_1[_0xe7cab8(0x100)][_0xe7cab8(0xf3)],_0x4506bd=new URLSearchParams();_0x4506bd[_0xe7cab8(0xff)]('username',this[_0xe7cab8(0xe8)]['username']),_0x4506bd['append']('password',this[_0xe7cab8(0xe8)]['password']);const {data:_0x224684}=await axios_1[_0xe7cab8(0xe9)]['post'](_0x2ffb8d,_0x4506bd,{'headers':{'Content-Type':'application/x-www-form-urlencoded'}});if(_0x224684[_0xe7cab8(0xea)]===status_enums_1[_0xe7cab8(0xfa)]['SUCCESS'])return _0x224684[_0xe7cab8(0xf2)];else{const _0x2c2362=(_0x10e3ee=_0x224684[_0xe7cab8(0xef)])===null||_0x10e3ee===void 0x0?void 0x0:_0x10e3ee[_0xe7cab8(0x103)](_0x55d3ba=>_0x55d3ba[_0xe7cab8(0x104)]===veeva_constants_1['VeevaConstants'][_0xe7cab8(0xfe)]);if(_0x2c2362&&_0x31800f>0x0)return await(0x0,utils_1[_0xe7cab8(0xed)])(VeevaAuth[_0xe7cab8(0xf0)]),await this['getNewAccessToken'](_0x31800f-0x1);else throw new Error(((_0x26a070=_0x224684[_0xe7cab8(0xef)][0x0])===null||_0x26a070===void 0x0?void 0x0:_0x26a070[_0xe7cab8(0x101)])||app_constants_1['AppConstants']['UNDEFINED_ERROR']);}}}exports[a353_0x19830b(0xe7)]=VeevaAuth,VeevaAuth[a353_0x19830b(0xf0)]=0x3e8*0x3c;