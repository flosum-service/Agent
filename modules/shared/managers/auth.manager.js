const a326_0x24070d=a326_0x4fed;(function(_0x31f976,_0x349925){const _0x28b1eb=a326_0x4fed,_0x2240b6=_0x31f976();while(!![]){try{const _0x5e3f76=-parseInt(_0x28b1eb(0x1da))/0x1+parseInt(_0x28b1eb(0x1d7))/0x2*(parseInt(_0x28b1eb(0x1dd))/0x3)+-parseInt(_0x28b1eb(0x1f3))/0x4+-parseInt(_0x28b1eb(0x1e5))/0x5*(-parseInt(_0x28b1eb(0x1f1))/0x6)+-parseInt(_0x28b1eb(0x1e8))/0x7+-parseInt(_0x28b1eb(0x1eb))/0x8*(parseInt(_0x28b1eb(0x1f2))/0x9)+parseInt(_0x28b1eb(0x1ea))/0xa*(parseInt(_0x28b1eb(0x1d8))/0xb);if(_0x5e3f76===_0x349925)break;else _0x2240b6['push'](_0x2240b6['shift']());}catch(_0x17bd33){_0x2240b6['push'](_0x2240b6['shift']());}}}(a326_0x20f2,0x428ac));function a326_0x4fed(_0x114c85,_0x3d8242){const _0x1d4278=a326_0x20f2();return a326_0x4fed=function(_0x585215,_0x2133ac){_0x585215=_0x585215-0x1d7;let _0x20f253=_0x1d4278[_0x585215];return _0x20f253;},a326_0x4fed(_0x114c85,_0x3d8242);}const a326_0x2133ac=(function(){let _0x4cdeb4=!![];return function(_0x14fc1f,_0x1920c7){const _0x3bc7cd=_0x4cdeb4?function(){const _0x450940=a326_0x4fed;if(_0x1920c7){const _0x4bef9e=_0x1920c7[_0x450940(0x1e7)](_0x14fc1f,arguments);return _0x1920c7=null,_0x4bef9e;}}:function(){};return _0x4cdeb4=![],_0x3bc7cd;};}()),a326_0x585215=a326_0x2133ac(this,function(){const _0x202edb=a326_0x4fed;return a326_0x585215['toString']()['search'](_0x202edb(0x1e0))[_0x202edb(0x1e6)]()[_0x202edb(0x1ee)](a326_0x585215)['search'](_0x202edb(0x1e0));});function a326_0x20f2(){const _0xb98c0f=['_refreshToken','2058mUGtyL','90jpQigz','1976896pZptvv','refresh_token','738752fQzPHc','6583170VtJqOF','@flosum/salesforce','119652JimdnD','axios','_clientSecret','3lpMNwV','AuthManager','refreshToken','(((.+)+)+)+$','/services/oauth2/token','access_token','_clientId','instanceUrl','3130XdZnaj','toString','apply','310114dnBuBf','post','10fGNQSB','201464GIGpki','default','defineProperty','constructor','__importDefault'];a326_0x20f2=function(){return _0xb98c0f;};return a326_0x20f2();}a326_0x585215();'use strict';var __importDefault=this&&this[a326_0x24070d(0x1ef)]||function(_0x5b1798){return _0x5b1798&&_0x5b1798['__esModule']?_0x5b1798:{'default':_0x5b1798};};Object[a326_0x24070d(0x1ed)](exports,'__esModule',{'value':!![]}),exports[a326_0x24070d(0x1de)]=void 0x0;const axios_1=__importDefault(require(a326_0x24070d(0x1db))),salesforce_1=require(a326_0x24070d(0x1d9));class AuthManager extends salesforce_1['AuthorizationManager']{constructor({accessToken:_0x6ed182,refreshToken:_0x5c530d,instanceUrl:_0x4024f7,clientId:_0x9915b,clientSecret:_0x46cc55}){const _0x3eccbd=a326_0x24070d;super({'accessToken':_0x6ed182,'instanceUrl':_0x4024f7}),this[_0x3eccbd(0x1dc)]=_0x46cc55,this[_0x3eccbd(0x1e3)]=_0x9915b,this[_0x3eccbd(0x1f0)]=_0x5c530d;}async[a326_0x24070d(0x1df)](){const _0x4bf6ae=a326_0x24070d,{data:_0x4eb4c9}=await axios_1[_0x4bf6ae(0x1ec)][_0x4bf6ae(0x1e9)](this[_0x4bf6ae(0x1e4)]+_0x4bf6ae(0x1e1),null,{'params':{'grant_type':_0x4bf6ae(0x1f4),'refresh_token':this[_0x4bf6ae(0x1f0)],'client_id':this[_0x4bf6ae(0x1e3)],'client_secret':this[_0x4bf6ae(0x1dc)]}});return _0x4eb4c9[_0x4bf6ae(0x1e2)];}}exports[a326_0x24070d(0x1de)]=AuthManager;