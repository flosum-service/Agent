const a92_0x17c95a=a92_0x215e;function a92_0x4f1f(){const _0x3ad7ad=['27tIooDr','1388690sWJbwM','accept','isAxiosError','authorization','search','baseURL','error','303873zLXkqj','string','__importDefault','interceptors','FLOSUM_NAMESPACE','10kKzLFg','clientSecret','data','1242540odOzGM','clientId','use','accessToken','/Flosum','refreshToken','maxBodyLength','397284rWypoT','RequestError','735888rWaUCF','AuthUtils','maxContentLength','response','namespace','request','config','5OSVyEX','application/json','constructor','message','isArray','headers','axios-retry','Bearer\x20','instanceUrl','toString','default','1811138hAEsap','(((.+)+)+)+$','9087nskeaT','status','createRequest','../../../constants','11BFVwZq'];a92_0x4f1f=function(){return _0x3ad7ad;};return a92_0x4f1f();}(function(_0x10a592,_0x29bf20){const _0x5a050f=a92_0x215e,_0x14f6a4=_0x10a592();while(!![]){try{const _0x459958=-parseInt(_0x5a050f(0x140))/0x1+-parseInt(_0x5a050f(0x152))/0x2*(-parseInt(_0x5a050f(0x14d))/0x3)+-parseInt(_0x5a050f(0x15c))/0x4*(parseInt(_0x5a050f(0x133))/0x5)+parseInt(_0x5a050f(0x155))/0x6+-parseInt(_0x5a050f(0x13e))/0x7+-parseInt(_0x5a050f(0x15e))/0x8*(-parseInt(_0x5a050f(0x145))/0x9)+parseInt(_0x5a050f(0x146))/0xa*(-parseInt(_0x5a050f(0x144))/0xb);if(_0x459958===_0x29bf20)break;else _0x14f6a4['push'](_0x14f6a4['shift']());}catch(_0x2f4a70){_0x14f6a4['push'](_0x14f6a4['shift']());}}}(a92_0x4f1f,0x760a4));const a92_0x13d992=(function(){let _0x2b7f4f=!![];return function(_0x174b62,_0x4b77ed){const _0x9ab31c=_0x2b7f4f?function(){if(_0x4b77ed){const _0x1b6119=_0x4b77ed['apply'](_0x174b62,arguments);return _0x4b77ed=null,_0x1b6119;}}:function(){};return _0x2b7f4f=![],_0x9ab31c;};}()),a92_0xe24502=a92_0x13d992(this,function(){const _0x2b8ff8=a92_0x215e;return a92_0xe24502[_0x2b8ff8(0x13c)]()[_0x2b8ff8(0x14a)](_0x2b8ff8(0x13f))['toString']()[_0x2b8ff8(0x135)](a92_0xe24502)[_0x2b8ff8(0x14a)](_0x2b8ff8(0x13f));});a92_0xe24502();'use strict';var __importDefault=this&&this[a92_0x17c95a(0x14f)]||function(_0x49dd13){return _0x49dd13&&_0x49dd13['__esModule']?_0x49dd13:{'default':_0x49dd13};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a92_0x17c95a(0x142)]=exports[a92_0x17c95a(0x130)]=void 0x0;const axios_1=__importDefault(require('axios')),axios_retry_1=__importDefault(require(a92_0x17c95a(0x139))),request_error_1=require('../../shared/errors/request.error'),auth_utils_1=require('./auth.utils'),constants_1=require(a92_0x17c95a(0x143)),DELAY=0x9c4;exports['namespace']=constants_1[a92_0x17c95a(0x151)]?a92_0x17c95a(0x159):'';function createRequest(_0x5cb3e5){const _0x156310=a92_0x17c95a,_0x1f006c=axios_1[_0x156310(0x13d)]['create']();return(0x0,axios_retry_1[_0x156310(0x13d)])(_0x1f006c,{'retries':0x3,'retryDelay'(_0x137246){return _0x137246*DELAY;}}),_0x1f006c[_0x156310(0x150)][_0x156310(0x131)]['use'](_0x52536b=>{const _0x4a8490=_0x156310;return _0x52536b[_0x4a8490(0x138)][_0x4a8490(0x147)]=_0x4a8490(0x134),_0x52536b['headers'][_0x4a8490(0x149)]='Bearer\x20'+_0x5cb3e5[_0x4a8490(0x158)],_0x52536b[_0x4a8490(0x14b)]=_0x5cb3e5['instanceUrl'],_0x52536b[_0x4a8490(0x15b)]=0x6400000,_0x52536b[_0x4a8490(0x12e)]=0x6400000,_0x52536b;}),_0x1f006c[_0x156310(0x150)][_0x156310(0x12f)][_0x156310(0x157)](undefined,async _0xfc29d=>{const _0x1011a1=_0x156310;var _0x56335f,_0x3342e,_0x567ad2;if(_0xfc29d[_0x1011a1(0x148)]&&_0xfc29d[_0x1011a1(0x132)]){if(((_0x56335f=_0xfc29d[_0x1011a1(0x12f)])===null||_0x56335f===void 0x0?void 0x0:_0x56335f[_0x1011a1(0x141)])===0x191)return _0x5cb3e5[_0x1011a1(0x158)]=await auth_utils_1[_0x1011a1(0x15f)]['updateAccessToken'](_0x5cb3e5[_0x1011a1(0x13b)],_0x5cb3e5[_0x1011a1(0x15a)],_0x5cb3e5[_0x1011a1(0x156)],_0x5cb3e5[_0x1011a1(0x153)]),_0xfc29d[_0x1011a1(0x132)][_0x1011a1(0x138)][_0x1011a1(0x149)]=_0x1011a1(0x13a)+_0x5cb3e5[_0x1011a1(0x158)],_0xfc29d['config'][_0x1011a1(0x14b)]=_0x5cb3e5[_0x1011a1(0x13b)],_0x1f006c(_0xfc29d['config']);}let _0x2a1b5d=((_0x3342e=_0xfc29d===null||_0xfc29d===void 0x0?void 0x0:_0xfc29d[_0x1011a1(0x12f)])===null||_0x3342e===void 0x0?void 0x0:_0x3342e[_0x1011a1(0x154)])||{};Array[_0x1011a1(0x137)](_0x2a1b5d)&&(_0x2a1b5d=_0x2a1b5d[0x0]);const _0x28006b=_0x2a1b5d['message']||typeof _0x2a1b5d[_0x1011a1(0x14c)]===_0x1011a1(0x14e)?_0x2a1b5d['error']:((_0x567ad2=_0x2a1b5d[_0x1011a1(0x14c)])===null||_0x567ad2===void 0x0?void 0x0:_0x567ad2[_0x1011a1(0x136)])||_0xfc29d[_0x1011a1(0x136)];throw new request_error_1[(_0x1011a1(0x15d))](_0x28006b,_0x2a1b5d);}),_0x1f006c;}function a92_0x215e(_0x1b9620,_0x849bda){const _0x175161=a92_0x4f1f();return a92_0x215e=function(_0xe24502,_0x13d992){_0xe24502=_0xe24502-0x12e;let _0x4f1f60=_0x175161[_0xe24502];return _0x4f1f60;},a92_0x215e(_0x1b9620,_0x849bda);}exports['createRequest']=createRequest;