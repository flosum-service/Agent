const a412_0x51f782=a412_0x29f4;(function(_0x30bb79,_0x47c4e8){const _0x17754b=a412_0x29f4,_0x9f36ed=_0x30bb79();while(!![]){try{const _0x3447c1=parseInt(_0x17754b(0xcf))/0x1*(parseInt(_0x17754b(0xc4))/0x2)+-parseInt(_0x17754b(0xc8))/0x3*(parseInt(_0x17754b(0xb0))/0x4)+-parseInt(_0x17754b(0xb1))/0x5*(parseInt(_0x17754b(0xc5))/0x6)+parseInt(_0x17754b(0xc6))/0x7*(parseInt(_0x17754b(0xc3))/0x8)+parseInt(_0x17754b(0xb8))/0x9+-parseInt(_0x17754b(0xb4))/0xa+parseInt(_0x17754b(0xd3))/0xb*(parseInt(_0x17754b(0xb9))/0xc);if(_0x3447c1===_0x47c4e8)break;else _0x9f36ed['push'](_0x9f36ed['shift']());}catch(_0x28ff7a){_0x9f36ed['push'](_0x9f36ed['shift']());}}}(a412_0x4b9d,0x34d4d));const a412_0x327a2f=(function(){let _0x306b96=!![];return function(_0x258dbb,_0x7aab93){const _0x8cafcf=_0x306b96?function(){const _0x5bdc2f=a412_0x29f4;if(_0x7aab93){const _0x30a190=_0x7aab93[_0x5bdc2f(0xbb)](_0x258dbb,arguments);return _0x7aab93=null,_0x30a190;}}:function(){};return _0x306b96=![],_0x8cafcf;};}()),a412_0x24efe3=a412_0x327a2f(this,function(){const _0xb267d6=a412_0x29f4;return a412_0x24efe3[_0xb267d6(0xd2)]()[_0xb267d6(0xc1)](_0xb267d6(0xcc))[_0xb267d6(0xd2)]()['constructor'](a412_0x24efe3)['search'](_0xb267d6(0xcc));});function a412_0x29f4(_0x1edc46,_0x50d70d){const _0x494233=a412_0x4b9d();return a412_0x29f4=function(_0x24efe3,_0x327a2f){_0x24efe3=_0x24efe3-0xa8;let _0x4b9d6b=_0x494233[_0x24efe3];return _0x4b9d6b;},a412_0x29f4(_0x1edc46,_0x50d70d);}a412_0x24efe3();'use strict';var __importDefault=this&&this[a412_0x51f782(0xb3)]||function(_0x445302){const _0x56e8d6=a412_0x51f782;return _0x445302&&_0x445302[_0x56e8d6(0xc0)]?_0x445302:{'default':_0x445302};};Object[a412_0x51f782(0xb5)](exports,a412_0x51f782(0xc0),{'value':!![]}),exports[a412_0x51f782(0xd0)]=void 0x0;const axios_1=__importDefault(require(a412_0x51f782(0xb7))),axios_retry_1=__importDefault(require(a412_0x51f782(0xcb))),veeva_request_error_1=require(a412_0x51f782(0xa9)),flosum_constants_1=require(a412_0x51f782(0xb2)),DELAY=0x9c4,MAX_BODY_LENGTH=0x6400000,MAX_CONTENT_LENGTH=0x6400000;function createSalesforceRequest(_0x21de08){const _0x512225=a412_0x51f782,{auth:_0x330caf}=_0x21de08,_0x27e75f=axios_1[_0x512225(0xa8)][_0x512225(0xac)]();return(0x0,axios_retry_1[_0x512225(0xa8)])(_0x27e75f,{'retries':0x3,'retryDelay'(_0x59dfb1){return _0x59dfb1*DELAY;}}),_0x27e75f['interceptors'][_0x512225(0xc2)]['use'](_0x147582=>{const _0x118b83=_0x512225;return _0x147582['headers'][_0x118b83(0xbf)]=_0x118b83(0xbe),_0x147582[_0x118b83(0xab)]['authorization']='Bearer\x20'+_0x330caf[_0x118b83(0xba)],_0x147582[_0x118b83(0xbd)]=_0x330caf[_0x118b83(0xce)],_0x147582[_0x118b83(0xaa)]=MAX_BODY_LENGTH,_0x147582[_0x118b83(0xca)]=MAX_CONTENT_LENGTH,_0x147582;}),_0x27e75f[_0x512225(0xc9)][_0x512225(0xcd)]['use'](undefined,async _0x45f416=>{const _0x24cd17=_0x512225;var _0x18a168,_0x3f9684;if(_0x45f416['isAxiosError']&&_0x45f416[_0x24cd17(0xc7)]){if(((_0x18a168=_0x45f416[_0x24cd17(0xcd)])===null||_0x18a168===void 0x0?void 0x0:_0x18a168[_0x24cd17(0xd1)])===0x191)return await _0x21de08['updateAccessToken'](),_0x27e75f(_0x45f416[_0x24cd17(0xc7)]);}const _0x59104c=((_0x3f9684=_0x45f416===null||_0x45f416===void 0x0?void 0x0:_0x45f416[_0x24cd17(0xcd)])===null||_0x3f9684===void 0x0?void 0x0:_0x3f9684[_0x24cd17(0xbc)])||_0x45f416[_0x24cd17(0xaf)]||flosum_constants_1[_0x24cd17(0xad)][_0x24cd17(0xb6)];throw new veeva_request_error_1[(_0x24cd17(0xae))](_0x59104c);}),_0x27e75f;}exports[a412_0x51f782(0xd0)]=createSalesforceRequest;function a412_0x4b9d(){const _0x24a2ae=['createSalesforceRequest','status','toString','484oprAAE','default','../classes/errors/veeva-request-error','maxBodyLength','headers','create','FlosumConstants','VeevaRequestError','message','668LLbzvp','842795AgCwrL','../constants/flosum.constants','__importDefault','1280750bCGqNK','defineProperty','SALESFORCE_UNDEFINED_ERROR','axios','1058580rskmEO','65448ZcAIFh','accessToken','apply','data','baseURL','application/json','accept','__esModule','search','request','56tpbjBx','40268Wjdwvl','12ZfKpAI','319683IuUyyV','config','1731EeIfzi','interceptors','maxContentLength','axios-retry','(((.+)+)+)+$','response','instanceUrl','5XytJtk'];a412_0x4b9d=function(){return _0x24a2ae;};return a412_0x4b9d();}