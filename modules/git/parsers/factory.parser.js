const a153_0x7c2dc=a153_0x14f0;(function(_0x8b8378,_0x57c1d0){const _0x123c15=a153_0x14f0,_0x28b964=_0x8b8378();while(!![]){try{const _0x29c9ca=-parseInt(_0x123c15(0xd3))/0x1+parseInt(_0x123c15(0xd2))/0x2+parseInt(_0x123c15(0xe4))/0x3+-parseInt(_0x123c15(0xd0))/0x4*(-parseInt(_0x123c15(0xe1))/0x5)+-parseInt(_0x123c15(0xd8))/0x6*(-parseInt(_0x123c15(0xdc))/0x7)+-parseInt(_0x123c15(0xdd))/0x8*(parseInt(_0x123c15(0xe6))/0x9)+-parseInt(_0x123c15(0xc8))/0xa*(parseInt(_0x123c15(0xca))/0xb);if(_0x29c9ca===_0x57c1d0)break;else _0x28b964['push'](_0x28b964['shift']());}catch(_0x237c92){_0x28b964['push'](_0x28b964['shift']());}}}(a153_0x4ed4,0xc77c5));function a153_0x4ed4(){const _0x2c6892=['1072518BTItJu','RecordTypes','toString','./mdapi-parser-v2','21XQPISf','4666928qGsWRY','constructor','defineProperty','(((.+)+)+)+$','490hZHnFR','./utils/vlocity','MarketingCloudParser','4005357JdRHhr','MARKETING_CLOUD','9unyqUV','130JFfJlV','VlocityParser','1736647HLOCGz','DEFAULT','FactoryParser','./marketing-cloud.parser','./commerce-cloud.parser','COMMERCE_CLOUD','46532bhumwB','__esModule','2651090PwLJCM','884097SkRBXs','create','WRONG_RECORD_TYPE_ERROR_MESSAGE','apply','./vlocity-parser'];a153_0x4ed4=function(){return _0x2c6892;};return a153_0x4ed4();}const a153_0x25b827=(function(){let _0x5d01ef=!![];return function(_0x56bf5d,_0x459517){const _0x55b4a4=_0x5d01ef?function(){const _0x19b841=a153_0x14f0;if(_0x459517){const _0x12b832=_0x459517[_0x19b841(0xd6)](_0x56bf5d,arguments);return _0x459517=null,_0x12b832;}}:function(){};return _0x5d01ef=![],_0x55b4a4;};}()),a153_0x5841ed=a153_0x25b827(this,function(){const _0x3af1b7=a153_0x14f0;return a153_0x5841ed[_0x3af1b7(0xda)]()['search'](_0x3af1b7(0xe0))[_0x3af1b7(0xda)]()[_0x3af1b7(0xde)](a153_0x5841ed)['search'](_0x3af1b7(0xe0));});a153_0x5841ed();'use strict';Object[a153_0x7c2dc(0xdf)](exports,a153_0x7c2dc(0xd1),{'value':!![]}),exports['FactoryParser']=void 0x0;const mdapi_parser_v2_1=require(a153_0x7c2dc(0xdb)),vlocity_parser_1=require(a153_0x7c2dc(0xd7)),marketing_cloud_parser_1=require(a153_0x7c2dc(0xcd)),vlocity_1=require(a153_0x7c2dc(0xe2)),constants_1=require('../devops/constants/constants'),messages_1=require('../devops/errors/messages'),commerce_cloud_parser_1=require(a153_0x7c2dc(0xce));function a153_0x14f0(_0x543876,_0x494252){const _0x155ab8=a153_0x4ed4();return a153_0x14f0=function(_0x5841ed,_0x25b827){_0x5841ed=_0x5841ed-0xc8;let _0x4ed430=_0x155ab8[_0x5841ed];return _0x4ed430;},a153_0x14f0(_0x543876,_0x494252);}class FactoryParser{static[a153_0x7c2dc(0xd4)]({recordType:_0x29ddc4,sourceDir:_0xefd8b2,paths:_0x1334a6}){const _0x367f1d=a153_0x7c2dc;switch(_0x29ddc4){case constants_1[_0x367f1d(0xd9)][_0x367f1d(0xcf)]:{return new commerce_cloud_parser_1['CommerceCloudParser']({'sourceDir':_0xefd8b2,'paths':_0x1334a6});}case constants_1[_0x367f1d(0xd9)][_0x367f1d(0xe5)]:{return new marketing_cloud_parser_1[(_0x367f1d(0xe3))]({'sourceDir':_0xefd8b2,'paths':_0x1334a6});}case constants_1[_0x367f1d(0xd9)][_0x367f1d(0xcb)]:{if((0x0,vlocity_1['isVlocityComponent'])(_0x1334a6[0x0]))return new vlocity_parser_1[(_0x367f1d(0xc9))]({'sourceDir':_0xefd8b2,'paths':_0x1334a6});return new mdapi_parser_v2_1['MDApiParserV2']({'sourceDir':_0xefd8b2,'paths':_0x1334a6});}default:{throw new Error(messages_1[_0x367f1d(0xd5)]+_0x29ddc4);}}}}exports[a153_0x7c2dc(0xcc)]=FactoryParser;