const a188_0xda6261=a188_0x5ac1;(function(_0x564354,_0x5ac232){const _0x42d4d6=a188_0x5ac1,_0x48200a=_0x564354();while(!![]){try{const _0x1d1d68=-parseInt(_0x42d4d6(0x1ff))/0x1+parseInt(_0x42d4d6(0x204))/0x2*(parseInt(_0x42d4d6(0x202))/0x3)+parseInt(_0x42d4d6(0x1ed))/0x4+parseInt(_0x42d4d6(0x1f8))/0x5*(parseInt(_0x42d4d6(0x206))/0x6)+-parseInt(_0x42d4d6(0x1ec))/0x7+parseInt(_0x42d4d6(0x203))/0x8+parseInt(_0x42d4d6(0x200))/0x9*(parseInt(_0x42d4d6(0x1fc))/0xa);if(_0x1d1d68===_0x5ac232)break;else _0x48200a['push'](_0x48200a['shift']());}catch(_0x45157e){_0x48200a['push'](_0x48200a['shift']());}}}(a188_0x5d80,0xea47c));const a188_0x2f3ef8=(function(){let _0x2bb773=!![];return function(_0x54391e,_0x8cad57){const _0x38feaa=_0x2bb773?function(){const _0x32eedb=a188_0x5ac1;if(_0x8cad57){const _0x42dd1c=_0x8cad57[_0x32eedb(0x201)](_0x54391e,arguments);return _0x8cad57=null,_0x42dd1c;}}:function(){};return _0x2bb773=![],_0x38feaa;};}()),a188_0x3e0236=a188_0x2f3ef8(this,function(){const _0x55a0c9=a188_0x5ac1;return a188_0x3e0236[_0x55a0c9(0x1f9)]()[_0x55a0c9(0x1f7)]('(((.+)+)+)+$')[_0x55a0c9(0x1f9)]()[_0x55a0c9(0x1ea)](a188_0x3e0236)[_0x55a0c9(0x1f7)](_0x55a0c9(0x1eb));});a188_0x3e0236();'use strict';Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports['isMarketingCloudComponent']=exports[a188_0xda6261(0x1fd)]=void 0x0;const xml_v2_1=require('./xml-v2'),path_1=require(a188_0xda6261(0x1fa)),marketing_cloud_types_1=require(a188_0xda6261(0x1ee)),core_1=require('../../../../core');async function parseMarketingCloudComponent(_0x46d09e,_0x3ecd90){const _0xd1d883=a188_0xda6261,_0x2c434b=new core_1[(_0xd1d883(0x20b))](parseMarketingCloudComponent[_0xd1d883(0x1f4)]),[_0xf0e180,_0x5c2d0b]=_0x46d09e[_0xd1d883(0x1f5)](path_1[_0xd1d883(0x1f6)]);try{if(marketing_cloud_types_1[_0xd1d883(0x207)][_0xd1d883(0x1f2)](_0xf0e180))return parseJSONComponent(_0xf0e180,_0x5c2d0b,_0x3ecd90);if(marketing_cloud_types_1['MARKETING_CLOUD_XML_COMPONENT_TYPES'][_0xd1d883(0x1f2)](_0xf0e180))return await parseXMLComponent(_0xf0e180,_0x5c2d0b,_0x3ecd90);}catch(_0x1cb0d9){_0x2c434b[_0xd1d883(0x209)]('Error\x20during\x20parse\x20Marketing\x20Cloud\x20component\x20file\x20%s,\x20original\x20error:\x20%s',_0x46d09e,_0x1cb0d9);}return{'componentType':_0xf0e180,'componentName':_0x5c2d0b,'key':''};}exports[a188_0xda6261(0x1fd)]=parseMarketingCloudComponent;function a188_0x5ac1(_0x19a8eb,_0xc65837){const _0x2dca15=a188_0x5d80();return a188_0x5ac1=function(_0x3e0236,_0x2f3ef8){_0x3e0236=_0x3e0236-0x1ea;let _0x5d806a=_0x2dca15[_0x3e0236];return _0x5d806a;},a188_0x5ac1(_0x19a8eb,_0xc65837);}function parseJSONComponent(_0x18f552,_0x1a7e66,_0x77f868){const _0x412325=a188_0xda6261;var _0x22c61b;const _0x11a6f4={'componentType':_0x18f552,'componentName':_0x1a7e66,'key':''},_0xbf459a=JSON[_0x412325(0x1fb)](_0x77f868['toString']());_0x11a6f4['key']=_0xbf459a===null||_0xbf459a===void 0x0?void 0x0:_0xbf459a['id'];const _0x253125=((_0x22c61b=_0xbf459a===null||_0xbf459a===void 0x0?void 0x0:_0xbf459a['fileProperties'])===null||_0x22c61b===void 0x0?void 0x0:_0x22c61b[_0x412325(0x1ef)])||(_0xbf459a===null||_0xbf459a===void 0x0?void 0x0:_0xbf459a['name']);return _0x253125&&_0x1a7e66!==_0x253125&&(_0x11a6f4['componentName']=_0x253125+'\x20('+_0x1a7e66+')'),_0x11a6f4;}async function parseXMLComponent(_0x1c6900,_0x1953a7,_0x3f4c0b){const _0x131030=a188_0xda6261;var _0x4fb920,_0x355c78;const _0x13b282={'componentType':_0x1c6900,'componentName':_0x1953a7,'key':''},_0x25b6bf=await xml_v2_1['XmlV2'][_0x131030(0x1fb)](_0x3f4c0b[_0x131030(0x1f9)]());_0x13b282[_0x131030(0x208)]=(_0x4fb920=_0x25b6bf===null||_0x25b6bf===void 0x0?void 0x0:_0x25b6bf[_0x131030(0x205)])===null||_0x4fb920===void 0x0?void 0x0:_0x4fb920[_0x131030(0x1f1)];const _0x2ae9fb=(_0x355c78=_0x25b6bf===null||_0x25b6bf===void 0x0?void 0x0:_0x25b6bf[_0x131030(0x205)])===null||_0x355c78===void 0x0?void 0x0:_0x355c78[_0x131030(0x1f3)];return _0x2ae9fb&&_0x1953a7!==_0x2ae9fb&&(_0x13b282[_0x131030(0x1fe)]=_0x2ae9fb+'\x20('+_0x1953a7+')'),_0x13b282;}function isMarketingCloudComponent(_0x2056ca){const _0x2a9bdb=a188_0xda6261,_0x2f2894=_0x2056ca[_0x2a9bdb(0x1f5)](path_1[_0x2a9bdb(0x1f6)])[0x0];return marketing_cloud_types_1[_0x2a9bdb(0x207)][_0x2a9bdb(0x1f2)](_0x2f2894)||marketing_cloud_types_1[_0x2a9bdb(0x20a)][_0x2a9bdb(0x1f2)](_0x2f2894);}function a188_0x5d80(){const _0x1bbd8f=['130SvmAAi','parseMarketingCloudComponent','componentName','1630364tmctQs','176589MDcHuj','apply','27957rsPWWJ','8398696sfAFLN','118PPRwbV','Results','216TcUIkz','MARKETING_CLOUD_JSON_COMPONENT_TYPES','key','error','MARKETING_CLOUD_XML_COMPONENT_TYPES','Logger','constructor','(((.+)+)+)+$','11141298FxKWUl','5173052KVERiN','../data/marketing-cloud-types','fileName','isMarketingCloudComponent','CustomerKey','includes','Name','name','split','sep','search','143555FgXmjl','toString','path','parse'];a188_0x5d80=function(){return _0x1bbd8f;};return a188_0x5d80();}exports[a188_0xda6261(0x1f0)]=isMarketingCloudComponent;