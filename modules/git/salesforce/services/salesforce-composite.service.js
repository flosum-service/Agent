const a273_0x14ae38=a273_0x254d;(function(_0x14e4de,_0x3e674b){const _0x3b82d3=a273_0x254d,_0x979bb4=_0x14e4de();while(!![]){try{const _0x146c57=parseInt(_0x3b82d3(0x1bd))/0x1+parseInt(_0x3b82d3(0x1cc))/0x2+parseInt(_0x3b82d3(0x1b3))/0x3+-parseInt(_0x3b82d3(0x1ab))/0x4*(parseInt(_0x3b82d3(0x1be))/0x5)+parseInt(_0x3b82d3(0x1b8))/0x6+-parseInt(_0x3b82d3(0x1a7))/0x7+parseInt(_0x3b82d3(0x1b4))/0x8*(-parseInt(_0x3b82d3(0x1c0))/0x9);if(_0x146c57===_0x3e674b)break;else _0x979bb4['push'](_0x979bb4['shift']());}catch(_0xc4e16c){_0x979bb4['push'](_0x979bb4['shift']());}}}(a273_0x45a2,0x1cb25));const a273_0x3fe528=(function(){let _0x11cdb7=!![];return function(_0x223d39,_0x4d717b){const _0x3a14de=_0x11cdb7?function(){const _0x2adf8d=a273_0x254d;if(_0x4d717b){const _0x26e87e=_0x4d717b[_0x2adf8d(0x1a9)](_0x223d39,arguments);return _0x4d717b=null,_0x26e87e;}}:function(){};return _0x11cdb7=![],_0x3a14de;};}()),a273_0x5aa6b9=a273_0x3fe528(this,function(){const _0x4650b9=a273_0x254d;return a273_0x5aa6b9[_0x4650b9(0x1af)]()['search'](_0x4650b9(0x1ae))[_0x4650b9(0x1af)]()[_0x4650b9(0x1b0)](a273_0x5aa6b9)[_0x4650b9(0x1b1)](_0x4650b9(0x1ae));});a273_0x5aa6b9();'use strict';function a273_0x254d(_0x369056,_0x9dcea3){const _0x436956=a273_0x45a2();return a273_0x254d=function(_0x5aa6b9,_0x3fe528){_0x5aa6b9=_0x5aa6b9-0x1a7;let _0x45a279=_0x436956[_0x5aa6b9];return _0x45a279;},a273_0x254d(_0x369056,_0x9dcea3);}var __decorate=this&&this['__decorate']||function(_0xcee66a,_0x2bf493,_0x56d76f,_0xb38bab){const _0x23390e=a273_0x254d;var _0x39d231=arguments[_0x23390e(0x1c3)],_0x2ffbcd=_0x39d231<0x3?_0x2bf493:_0xb38bab===null?_0xb38bab=Object[_0x23390e(0x1a8)](_0x2bf493,_0x56d76f):_0xb38bab,_0x59ee5e;if(typeof Reflect==='object'&&typeof Reflect[_0x23390e(0x1ac)]===_0x23390e(0x1cb))_0x2ffbcd=Reflect['decorate'](_0xcee66a,_0x2bf493,_0x56d76f,_0xb38bab);else{for(var _0x68eb7=_0xcee66a['length']-0x1;_0x68eb7>=0x0;_0x68eb7--)if(_0x59ee5e=_0xcee66a[_0x68eb7])_0x2ffbcd=(_0x39d231<0x3?_0x59ee5e(_0x2ffbcd):_0x39d231>0x3?_0x59ee5e(_0x2bf493,_0x56d76f,_0x2ffbcd):_0x59ee5e(_0x2bf493,_0x56d76f))||_0x2ffbcd;}return _0x39d231>0x3&&_0x2ffbcd&&Object[_0x23390e(0x1b7)](_0x2bf493,_0x56d76f,_0x2ffbcd),_0x2ffbcd;},__metadata=this&&this[a273_0x14ae38(0x1ce)]||function(_0x5133bb,_0x3b8538){const _0x4aeab8=a273_0x14ae38;if(typeof Reflect===_0x4aeab8(0x1bf)&&typeof Reflect[_0x4aeab8(0x1c4)]===_0x4aeab8(0x1cb))return Reflect[_0x4aeab8(0x1c4)](_0x5133bb,_0x3b8538);};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a273_0x14ae38(0x1c6)]=void 0x0;const constants_1=require(a273_0x14ae38(0x1c9)),typedi_1=require(a273_0x14ae38(0x1ad)),composite_graph_error_1=require(a273_0x14ae38(0x1c8)),salesforce_error_1=require(a273_0x14ae38(0x1bb)),create_request_util_1=require('../utils/create-request.util'),salesforce_auth_service_1=require(a273_0x14ae38(0x1b5));let SalesforceCompositeService=class SalesforceCompositeService{constructor(_0x27dca9){const _0x49fce8=a273_0x14ae38;this[_0x49fce8(0x1b2)]=(0x0,create_request_util_1[_0x49fce8(0x1c7)])(_0x27dca9);}async[a273_0x14ae38(0x1ca)](_0x546d4e){const _0x3ce29a=a273_0x14ae38;try{const {data:_0x28465c}=await this[_0x3ce29a(0x1b2)][_0x3ce29a(0x1aa)]('/services/data/'+constants_1['SALESFORCE_API_VERSION']+_0x3ce29a(0x1ba),{'graphs':_0x546d4e},{'maxBodyLength':constants_1[_0x3ce29a(0x1bc)]});if(!_0x28465c[_0x3ce29a(0x1c2)][_0x3ce29a(0x1b6)](_0x3f35d0=>_0x3f35d0[_0x3ce29a(0x1c1)]))throw new composite_graph_error_1['CompositeGraphError'](_0x3ce29a(0x1cf),_0x546d4e,_0x28465c);return _0x28465c;}catch(_0x4f4d8d){if(_0x4f4d8d instanceof salesforce_error_1['SalesforceError'])throw _0x4f4d8d;throw new salesforce_error_1[(_0x3ce29a(0x1cd))](_0x4f4d8d);}}};function a273_0x45a2(){const _0x1af2fe=['constructor','search','request','659190sVqomy','2917864eWTAGb','./salesforce-auth.service','every','defineProperty','235554FKVaSY','design:paramtypes','/composite/graph','../errors/salesforce.error','SALESFORCE_MAX_REQUEST_SIZE_BYTES','217329akLgVn','5iTldVE','object','9cuvhTK','isSuccessful','graphs','length','metadata','SalesforceAuthService','SalesforceCompositeService','createSalesforceRequest','../errors/composite-graph.error','../../../../constants','executeGraphs','function','155470YulpRL','SalesforceError','__metadata','Unsuccessful\x20composite\x20request','307118BdBtOe','getOwnPropertyDescriptor','apply','post','111620Vfezth','decorate','typedi','(((.+)+)+)+$','toString'];a273_0x45a2=function(){return _0x1af2fe;};return a273_0x45a2();}SalesforceCompositeService=__decorate([(0x0,typedi_1['Service'])(),__metadata(a273_0x14ae38(0x1b9),[salesforce_auth_service_1[a273_0x14ae38(0x1c5)]])],SalesforceCompositeService),exports[a273_0x14ae38(0x1c6)]=SalesforceCompositeService;