const a107_0x128eed=a107_0x22a8;(function(_0x51f661,_0x32278d){const _0x343d4=a107_0x22a8,_0x94ae71=_0x51f661();while(!![]){try{const _0x42175a=-parseInt(_0x343d4(0x149))/0x1*(-parseInt(_0x343d4(0x13d))/0x2)+-parseInt(_0x343d4(0x13e))/0x3+parseInt(_0x343d4(0x137))/0x4+-parseInt(_0x343d4(0x146))/0x5+-parseInt(_0x343d4(0x136))/0x6*(parseInt(_0x343d4(0x138))/0x7)+-parseInt(_0x343d4(0x133))/0x8+parseInt(_0x343d4(0x139))/0x9;if(_0x42175a===_0x32278d)break;else _0x94ae71['push'](_0x94ae71['shift']());}catch(_0x1b5e04){_0x94ae71['push'](_0x94ae71['shift']());}}}(a107_0x7b99,0xbb29d));function a107_0x7b99(){const _0x3b0db3=['5609520JSwFPV','/services/oauth2/token','split','(((.+)+)+)+$','278SEQODg','2482395LqabbZ','defineProperty','search','default','AuthUtils','toString','refresh_token','SALESFORCE_TOKEN','97040FWkmvC','trim','post','8523kdCfsY','One\x20of\x20the\x20parameters\x20is\x20missing','__esModule','55408GOwjaQ','getAuthParameters','Salesforce\x20token\x20missing','1352226FbOWUk','2855708NzjdXK','28tmFFXu'];a107_0x7b99=function(){return _0x3b0db3;};return a107_0x7b99();}const a107_0x165f58=(function(){let _0x164cce=!![];return function(_0x472d45,_0x1509cc){const _0x5b6cb5=_0x164cce?function(){if(_0x1509cc){const _0xfe8fb0=_0x1509cc['apply'](_0x472d45,arguments);return _0x1509cc=null,_0xfe8fb0;}}:function(){};return _0x164cce=![],_0x5b6cb5;};}()),a107_0x4f1f0b=a107_0x165f58(this,function(){const _0x2a43df=a107_0x22a8;return a107_0x4f1f0b[_0x2a43df(0x143)]()[_0x2a43df(0x140)](_0x2a43df(0x13c))['toString']()['constructor'](a107_0x4f1f0b)[_0x2a43df(0x140)](_0x2a43df(0x13c));});a107_0x4f1f0b();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x62c28){const _0x54a690=a107_0x22a8;return _0x62c28&&_0x62c28[_0x54a690(0x132)]?_0x62c28:{'default':_0x62c28};};Object[a107_0x128eed(0x13f)](exports,a107_0x128eed(0x132),{'value':!![]}),exports[a107_0x128eed(0x142)]=void 0x0;function a107_0x22a8(_0x42f89c,_0x11a10f){const _0x34c2de=a107_0x7b99();return a107_0x22a8=function(_0x4f1f0b,_0x165f58){_0x4f1f0b=_0x4f1f0b-0x131;let _0x7b99b2=_0x34c2de[_0x4f1f0b];return _0x7b99b2;},a107_0x22a8(_0x42f89c,_0x11a10f);}const axios_1=__importDefault(require('axios'));class AuthUtils{static async['updateAccessToken'](_0x190766,_0x538b3e,_0x568cb8,_0x5a1e01){const _0xc27213=a107_0x128eed,{data:_0x3457a2}=await axios_1[_0xc27213(0x141)][_0xc27213(0x148)](_0x190766+_0xc27213(0x13a),null,{'params':{'grant_type':_0xc27213(0x144),'refresh_token':_0x538b3e,'client_id':_0x568cb8,'client_secret':_0x5a1e01}});return _0x3457a2['access_token'];}static[a107_0x128eed(0x134)](_0x4900bb){const _0x3ad4dd=a107_0x128eed,_0x905483=process['env'][_0x3ad4dd(0x145)];if(!_0x905483)throw new Error(_0x3ad4dd(0x135));const [_0x246456,_0x4372dd,_0x58d314,_0x30b16d]=_0x905483[_0x3ad4dd(0x147)]()[_0x3ad4dd(0x13b)]('\x20');if(!_0x246456||!_0x4372dd||!_0x58d314||!_0x30b16d)throw new Error(_0x3ad4dd(0x131));return{'instanceUrl':_0x4900bb,'refreshToken':_0x246456,'clientId':_0x4372dd,'clientSecret':_0x58d314};}}exports[a107_0x128eed(0x142)]=AuthUtils;