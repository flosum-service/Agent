const a263_0x1a38f6=a263_0x4d03;(function(_0x29dfa0,_0x1852d5){const _0x1124e0=a263_0x4d03,_0x3a274a=_0x29dfa0();while(!![]){try{const _0x474518=parseInt(_0x1124e0(0x99))/0x1+parseInt(_0x1124e0(0xbb))/0x2*(-parseInt(_0x1124e0(0xb8))/0x3)+-parseInt(_0x1124e0(0xab))/0x4*(-parseInt(_0x1124e0(0x9e))/0x5)+parseInt(_0x1124e0(0xb6))/0x6*(parseInt(_0x1124e0(0xb4))/0x7)+parseInt(_0x1124e0(0x9f))/0x8+parseInt(_0x1124e0(0xbd))/0x9*(parseInt(_0x1124e0(0xa0))/0xa)+-parseInt(_0x1124e0(0x98))/0xb;if(_0x474518===_0x1852d5)break;else _0x3a274a['push'](_0x3a274a['shift']());}catch(_0x542ff5){_0x3a274a['push'](_0x3a274a['shift']());}}}(a263_0x3d06,0x9ff4d));function a263_0x4d03(_0x17044e,_0x4ff45b){const _0x4e421a=a263_0x3d06();return a263_0x4d03=function(_0xcf9295,_0x23d3b1){_0xcf9295=_0xcf9295-0x8d;let _0x3d0601=_0x4e421a[_0xcf9295];return _0x3d0601;},a263_0x4d03(_0x17044e,_0x4ff45b);}const a263_0x23d3b1=(function(){let _0xc61ab4=!![];return function(_0x2259d6,_0x354bff){const _0x4c1d0a=_0xc61ab4?function(){if(_0x354bff){const _0x50ca78=_0x354bff['apply'](_0x2259d6,arguments);return _0x354bff=null,_0x50ca78;}}:function(){};return _0xc61ab4=![],_0x4c1d0a;};}()),a263_0xcf9295=a263_0x23d3b1(this,function(){const _0xe39392=a263_0x4d03;return a263_0xcf9295[_0xe39392(0xac)]()['search']('(((.+)+)+)+$')['toString']()['constructor'](a263_0xcf9295)[_0xe39392(0xbf)](_0xe39392(0xbc));});a263_0xcf9295();'use strict';var __decorate=this&&this[a263_0x1a38f6(0x94)]||function(_0x23b3f9,_0x3bfb97,_0x25be62,_0x2fb20b){const _0x62fd3f=a263_0x1a38f6;var _0x44bee9=arguments[_0x62fd3f(0xa7)],_0x5d5d87=_0x44bee9<0x3?_0x3bfb97:_0x2fb20b===null?_0x2fb20b=Object['getOwnPropertyDescriptor'](_0x3bfb97,_0x25be62):_0x2fb20b,_0x129c79;if(typeof Reflect==='object'&&typeof Reflect['decorate']===_0x62fd3f(0xb0))_0x5d5d87=Reflect[_0x62fd3f(0x8f)](_0x23b3f9,_0x3bfb97,_0x25be62,_0x2fb20b);else{for(var _0x50d70a=_0x23b3f9['length']-0x1;_0x50d70a>=0x0;_0x50d70a--)if(_0x129c79=_0x23b3f9[_0x50d70a])_0x5d5d87=(_0x44bee9<0x3?_0x129c79(_0x5d5d87):_0x44bee9>0x3?_0x129c79(_0x3bfb97,_0x25be62,_0x5d5d87):_0x129c79(_0x3bfb97,_0x25be62))||_0x5d5d87;}return _0x44bee9>0x3&&_0x5d5d87&&Object[_0x62fd3f(0xaa)](_0x3bfb97,_0x25be62,_0x5d5d87),_0x5d5d87;},__metadata=this&&this[a263_0x1a38f6(0x9b)]||function(_0x342453,_0x12a30f){const _0x4fd1ef=a263_0x1a38f6;if(typeof Reflect==='object'&&typeof Reflect['metadata']===_0x4fd1ef(0xb0))return Reflect['metadata'](_0x342453,_0x12a30f);},__param=this&&this[a263_0x1a38f6(0xa3)]||function(_0x51290d,_0x4b54c9){return function(_0x3348bb,_0x3d09de){_0x4b54c9(_0x3348bb,_0x3d09de,_0x51290d);};},__importDefault=this&&this[a263_0x1a38f6(0xaf)]||function(_0x51127d){return _0x51127d&&_0x51127d['__esModule']?_0x51127d:{'default':_0x51127d};};Object[a263_0x1a38f6(0xaa)](exports,a263_0x1a38f6(0xb9),{'value':!![]}),exports[a263_0x1a38f6(0x95)]=void 0x0;const errors_1=require(a263_0x1a38f6(0x97)),core_1=require('../../core'),bad_request_error_1=require(a263_0x1a38f6(0x91)),utils_1=require(a263_0x1a38f6(0xb7)),express_http_proxy_1=__importDefault(require(a263_0x1a38f6(0xa1))),https_1=__importDefault(require(a263_0x1a38f6(0xa8)));let ProxyController=class ProxyController{['handler'](_0x337e8c,_0x559428,_0x5d5dd8){const _0x1624b7=a263_0x1a38f6,{originalUrl:_0x10a609,baseUrl:_0x5d6f82}=_0x337e8c,_0x28c457=_0x337e8c['get'](_0x1624b7(0x92));if(!_0x28c457)throw new bad_request_error_1[(_0x1624b7(0x8e))](errors_1[_0x1624b7(0xad)]);const _0x13420d={'proxyReqPathResolver':()=>(0x0,utils_1[_0x1624b7(0xa6)])(_0x28c457,_0x10a609[_0x1624b7(0x9c)](_0x10a609[_0x1624b7(0xbe)](_0x5d6f82)+_0x5d6f82[_0x1624b7(0xa7)])),'proxyReqOptDecorator':_0x749901=>{const _0x1f8758=_0x1624b7;return this[_0x1f8758(0xa4)]&&(_0x749901[_0x1f8758(0xae)]=new https_1['default'][(_0x1f8758(0xb1))]({'pfx':this[_0x1f8758(0xa4)],'passphrase':this[_0x1f8758(0x90)]})),_0x749901;}};_0x337e8c[_0x1624b7(0xb5)][_0x1624b7(0x9d)]=!![],(0x0,express_http_proxy_1['default'])(_0x28c457,_0x13420d)(_0x337e8c,_0x559428,_0x5d5dd8);}};__decorate([(0x0,core_1[a263_0x1a38f6(0xb2)])('*'),__param(0x0,core_1[a263_0x1a38f6(0x8d)][a263_0x1a38f6(0x93)]()),__param(0x1,core_1[a263_0x1a38f6(0x8d)][a263_0x1a38f6(0xb3)]()),__param(0x2,core_1[a263_0x1a38f6(0x8d)]['next']()),__metadata('design:type',Function),__metadata(a263_0x1a38f6(0xba),[Object,Object,Function]),__metadata('design:returntype',void 0x0)],ProxyController[a263_0x1a38f6(0x96)],'handler',null),ProxyController=__decorate([(0x0,core_1[a263_0x1a38f6(0xa9)])(),(0x0,core_1[a263_0x1a38f6(0x9a)])('v1'),(0x0,core_1[a263_0x1a38f6(0xa2)])(a263_0x1a38f6(0xa5))],ProxyController),exports[a263_0x1a38f6(0x95)]=ProxyController;function a263_0x3d06(){const _0x91d3b=['Version','__metadata','substring','requestEnded','215hWAhOX','2134640yFrQTl','20NuSgrx','express-http-proxy','Prefix','__param','pfxCertificate','proxy','joinURL','length','https','Controller','defineProperty','88052vKyDMy','toString','ERR_NO_DESTINATION','agent','__importDefault','function','Agent','All','response','247772tVxoMR','context','138UGtVsK','../shared/utils','2913iusrFR','__esModule','design:paramtypes','2198hKrrPj','(((.+)+)+)+$','2909448THvqqD','indexOf','search','param','BadRequestError','decorate','pfxPassphrase','../../core/errors/bad-request.error','X-Destination','request','__decorate','ProxyController','prototype','../../constants/errors','14856248bGcasR','398837lGEWMM'];a263_0x3d06=function(){return _0x91d3b;};return a263_0x3d06();}