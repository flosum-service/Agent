const a327_0x45679f=a327_0x1307;(function(_0x3a31c2,_0x1fdf01){const _0xe9469b=a327_0x1307,_0x522f91=_0x3a31c2();while(!![]){try{const _0x2c63b4=parseInt(_0xe9469b(0x1cc))/0x1*(-parseInt(_0xe9469b(0x1bc))/0x2)+-parseInt(_0xe9469b(0x1d3))/0x3+parseInt(_0xe9469b(0x1c7))/0x4+parseInt(_0xe9469b(0x1c1))/0x5+-parseInt(_0xe9469b(0x1c9))/0x6*(-parseInt(_0xe9469b(0x1c8))/0x7)+-parseInt(_0xe9469b(0x1c4))/0x8+parseInt(_0xe9469b(0x1c2))/0x9*(-parseInt(_0xe9469b(0x1cd))/0xa);if(_0x2c63b4===_0x1fdf01)break;else _0x522f91['push'](_0x522f91['shift']());}catch(_0x572b32){_0x522f91['push'](_0x522f91['shift']());}}}(a327_0x28fb,0xb86f5));const a327_0x57947c=(function(){let _0x20f186=!![];return function(_0x27a888,_0xc176ea){const _0x49c738=_0x20f186?function(){const _0x16cea7=a327_0x1307;if(_0xc176ea){const _0xe0c276=_0xc176ea[_0x16cea7(0x1d0)](_0x27a888,arguments);return _0xc176ea=null,_0xe0c276;}}:function(){};return _0x20f186=![],_0x49c738;};}()),a327_0x370d51=a327_0x57947c(this,function(){const _0x531e88=a327_0x1307;return a327_0x370d51['toString']()[_0x531e88(0x1cb)](_0x531e88(0x1d2))[_0x531e88(0x1ba)]()[_0x531e88(0x1cf)](a327_0x370d51)['search']('(((.+)+)+)+$');});a327_0x370d51();'use strict';var __importDefault=this&&this[a327_0x45679f(0x1c0)]||function(_0x58b948){const _0x38af7f=a327_0x45679f;return _0x58b948&&_0x58b948[_0x38af7f(0x1bd)]?_0x58b948:{'default':_0x58b948};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a327_0x45679f(0x1be)]=void 0x0;const axios_1=__importDefault(require(a327_0x45679f(0x1d5))),salesforce_1=require(a327_0x45679f(0x1d6));function a327_0x28fb(){const _0x18ccf8=['toString','post','779314nbecsX','__esModule','AuthManager','instanceUrl','__importDefault','4462845xhxish','557343zwpQjW','access_token','8724352RZpaFw','/services/oauth2/token','default','1119852BflILh','2317847XQnnrZ','24XqlkBW','refreshToken','search','1CBtzDo','30QTDNlA','AuthorizationManager','constructor','apply','_clientId','(((.+)+)+)+$','226767pynOXD','_refreshToken','axios','@flosum/salesforce','refresh_token'];a327_0x28fb=function(){return _0x18ccf8;};return a327_0x28fb();}function a327_0x1307(_0xcaaefa,_0x170713){const _0x43c4db=a327_0x28fb();return a327_0x1307=function(_0x370d51,_0x57947c){_0x370d51=_0x370d51-0x1b9;let _0x28fb1f=_0x43c4db[_0x370d51];return _0x28fb1f;},a327_0x1307(_0xcaaefa,_0x170713);}class AuthManager extends salesforce_1[a327_0x45679f(0x1ce)]{constructor({accessToken:_0x57e4f4,refreshToken:_0x35ebe3,instanceUrl:_0x23eef4,clientId:_0x1c437e,clientSecret:_0x3c63d7}){const _0x70b86=a327_0x45679f;super({'accessToken':_0x57e4f4,'instanceUrl':_0x23eef4}),this['_clientSecret']=_0x3c63d7,this[_0x70b86(0x1d1)]=_0x1c437e,this[_0x70b86(0x1d4)]=_0x35ebe3;}async[a327_0x45679f(0x1ca)](){const _0x4e72b3=a327_0x45679f,{data:_0xb3a7a}=await axios_1[_0x4e72b3(0x1c6)][_0x4e72b3(0x1bb)](this[_0x4e72b3(0x1bf)]+_0x4e72b3(0x1c5),null,{'params':{'grant_type':_0x4e72b3(0x1b9),'refresh_token':this[_0x4e72b3(0x1d4)],'client_id':this[_0x4e72b3(0x1d1)],'client_secret':this['_clientSecret']}});return _0xb3a7a[_0x4e72b3(0x1c3)];}}exports[a327_0x45679f(0x1be)]=AuthManager;