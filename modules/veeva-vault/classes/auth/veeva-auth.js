const a309_0x522743=a309_0x4087;(function(_0x3797b1,_0x1d95ef){const _0x574033=a309_0x4087,_0x11be81=_0x3797b1();while(!![]){try{const _0x2f1564=-parseInt(_0x574033(0xe3))/0x1+-parseInt(_0x574033(0xbf))/0x2*(parseInt(_0x574033(0xcd))/0x3)+parseInt(_0x574033(0xe1))/0x4+parseInt(_0x574033(0xe0))/0x5*(parseInt(_0x574033(0xc7))/0x6)+parseInt(_0x574033(0xc0))/0x7+parseInt(_0x574033(0xbc))/0x8+parseInt(_0x574033(0xce))/0x9;if(_0x2f1564===_0x1d95ef)break;else _0x11be81['push'](_0x11be81['shift']());}catch(_0xd3e8c7){_0x11be81['push'](_0x11be81['shift']());}}}(a309_0x55f7,0x592db));const a309_0x1892cf=(function(){let _0x55c9e5=!![];return function(_0x4628fb,_0x1b6d7d){const _0x35ae6a=_0x55c9e5?function(){const _0xea1d7f=a309_0x4087;if(_0x1b6d7d){const _0x5b6871=_0x1b6d7d[_0xea1d7f(0xcf)](_0x4628fb,arguments);return _0x1b6d7d=null,_0x5b6871;}}:function(){};return _0x55c9e5=![],_0x35ae6a;};}()),a309_0x3728d4=a309_0x1892cf(this,function(){const _0x306674=a309_0x4087;return a309_0x3728d4[_0x306674(0xd0)]()['search'](_0x306674(0xd1))[_0x306674(0xd0)]()['constructor'](a309_0x3728d4)[_0x306674(0xcc)](_0x306674(0xd1));});a309_0x3728d4();function a309_0x4087(_0x510508,_0x3bc96f){const _0x48d156=a309_0x55f7();return a309_0x4087=function(_0x3728d4,_0x1892cf){_0x3728d4=_0x3728d4-0xba;let _0x55f7cf=_0x48d156[_0x3728d4];return _0x55f7cf;},a309_0x4087(_0x510508,_0x3bc96f);}'use strict';var __importDefault=this&&this[a309_0x522743(0xc3)]||function(_0x501fa2){const _0x5a94fe=a309_0x522743;return _0x501fa2&&_0x501fa2[_0x5a94fe(0xd9)]?_0x501fa2:{'default':_0x501fa2};};Object[a309_0x522743(0xc5)](exports,a309_0x522743(0xd9),{'value':!![]}),exports[a309_0x522743(0xdf)]=void 0x0;const veeva_constants_1=require(a309_0x522743(0xda)),axios_1=__importDefault(require(a309_0x522743(0xdb))),status_enums_1=require('../../enums/status.enums'),utils_1=require(a309_0x522743(0xca)),app_constants_1=require('../../constants/app.constants'),base_veeva_auth_1=require(a309_0x522743(0xbe));class VeevaAuth extends base_veeva_auth_1[a309_0x522743(0xd7)]{constructor(_0x47d6e6,_0x19cace=0x0){const _0x5dfd93=a309_0x522743;super(_0x47d6e6),this[_0x5dfd93(0xbd)]=_0x47d6e6,this['attemptsOfUpdateToken']=_0x19cace;}async['getNewAccessToken'](_0x5f0d98=this['attemptsOfUpdateToken']){const _0x554967=a309_0x522743;var _0x246928,_0x2f2fb2;const _0x230026=this[_0x554967(0xbd)][_0x554967(0xd8)]+veeva_constants_1[_0x554967(0xc2)][_0x554967(0xc6)],_0xe5946d=new URLSearchParams();_0xe5946d[_0x554967(0xba)]('username',this[_0x554967(0xbd)][_0x554967(0xc8)]),_0xe5946d['append']('password',this[_0x554967(0xbd)][_0x554967(0xc9)]);const {data:_0xcde233}=await axios_1[_0x554967(0xd2)][_0x554967(0xd6)](_0x230026,_0xe5946d,{'headers':{'Content-Type':_0x554967(0xbb)}});if(_0xcde233[_0x554967(0xe2)]===status_enums_1[_0x554967(0xdc)]['SUCCESS'])return _0xcde233[_0x554967(0xd5)];else{const _0x4a8191=(_0x246928=_0xcde233['errors'])===null||_0x246928===void 0x0?void 0x0:_0x246928[_0x554967(0xdd)](_0x16829b=>_0x16829b[_0x554967(0xd4)]===veeva_constants_1['VeevaConstants'][_0x554967(0xcb)]);if(_0x4a8191&&_0x5f0d98>0x0)return await(0x0,utils_1['sleep'])(VeevaAuth['LOGIN_TIMEOUT']),await this['getNewAccessToken'](_0x5f0d98-0x1);else throw new Error(((_0x2f2fb2=_0xcde233[_0x554967(0xc1)][0x0])===null||_0x2f2fb2===void 0x0?void 0x0:_0x2f2fb2[_0x554967(0xc4)])||app_constants_1[_0x554967(0xd3)]['UNDEFINED_ERROR']);}}}function a309_0x55f7(){const _0x5eb1cf=['password','../../../shared/utils','API_LIMIT_EXCEEDED','search','9SmGRdU','6842178AIrrdX','apply','toString','(((.+)+)+)+$','default','AppConstants','type','sessionId','post','BaseVeevaAuth','instanceUrl','__esModule','../../constants/veeva.constants','axios','VeevaResponseStatus','some','LOGIN_TIMEOUT','VeevaAuth','275BqfsBp','27252GkhIAg','responseStatus','656998CHWMnb','append','application/x-www-form-urlencoded','1315856mrTNOi','auth','./base-veeva-auth','269002RUDSNj','848603Omrlfn','errors','VeevaConstants','__importDefault','message','defineProperty','ENDPOINT_AUTH','40692HHDwTB','username'];a309_0x55f7=function(){return _0x5eb1cf;};return a309_0x55f7();}exports[a309_0x522743(0xdf)]=VeevaAuth,VeevaAuth[a309_0x522743(0xde)]=0x3e8*0x3c;