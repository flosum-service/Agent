const a161_0xa22123=a161_0x4aea;(function(_0x507501,_0x53b510){const _0x4aa5c4=a161_0x4aea,_0x53364b=_0x507501();while(!![]){try{const _0x5a792e=parseInt(_0x4aa5c4(0x181))/0x1*(-parseInt(_0x4aa5c4(0x179))/0x2)+-parseInt(_0x4aa5c4(0x17e))/0x3+parseInt(_0x4aa5c4(0x19b))/0x4*(-parseInt(_0x4aa5c4(0x17f))/0x5)+-parseInt(_0x4aa5c4(0x191))/0x6*(parseInt(_0x4aa5c4(0x17b))/0x7)+-parseInt(_0x4aa5c4(0x190))/0x8+-parseInt(_0x4aa5c4(0x18b))/0x9+parseInt(_0x4aa5c4(0x18c))/0xa;if(_0x5a792e===_0x53b510)break;else _0x53364b['push'](_0x53364b['shift']());}catch(_0x53a4c0){_0x53364b['push'](_0x53364b['shift']());}}}(a161_0x31f5,0xa2990));function a161_0x4aea(_0x331421,_0x59dffc){const _0x17ea72=a161_0x31f5();return a161_0x4aea=function(_0x2eaa35,_0x118b1f){_0x2eaa35=_0x2eaa35-0x178;let _0x31f5b0=_0x17ea72[_0x2eaa35];return _0x31f5b0;},a161_0x4aea(_0x331421,_0x59dffc);}const a161_0x118b1f=(function(){let _0x5bbc29=!![];return function(_0x11cbe2,_0x59fbc8){const _0x5974de=_0x5bbc29?function(){const _0x5a5389=a161_0x4aea;if(_0x59fbc8){const _0x58b113=_0x59fbc8[_0x5a5389(0x189)](_0x11cbe2,arguments);return _0x59fbc8=null,_0x58b113;}}:function(){};return _0x5bbc29=![],_0x5974de;};}()),a161_0x2eaa35=a161_0x118b1f(this,function(){const _0x2fcc83=a161_0x4aea;return a161_0x2eaa35['toString']()[_0x2fcc83(0x186)](_0x2fcc83(0x178))[_0x2fcc83(0x198)]()[_0x2fcc83(0x17a)](a161_0x2eaa35)[_0x2fcc83(0x186)](_0x2fcc83(0x178));});a161_0x2eaa35();'use strict';function a161_0x31f5(){const _0x2587e3=['./xml-v2','toString','Logger','parseMarketingCloudComponent','4koMBsm','(((.+)+)+)+$','26nEcvNP','constructor','231RtMqMe','MARKETING_CLOUD_JSON_COMPONENT_TYPES','Results','161436vEHisW','6446905TatHha','path','99617OmhuLf','sep','XmlV2','../../../../core','componentName','search','split','includes','apply','../data/marketing-cloud-types','11070594yQHHCs','59375600XucxUP','fileProperties','isMarketingCloudComponent','fileName','9410976hujJkF','41256lsIRlS','name','parse','__esModule','Error\x20during\x20parse\x20Marketing\x20Cloud\x20component\x20file\x20%s,\x20original\x20error:\x20%s','key'];a161_0x31f5=function(){return _0x2587e3;};return a161_0x31f5();}Object['defineProperty'](exports,a161_0xa22123(0x194),{'value':!![]}),exports[a161_0xa22123(0x18e)]=exports[a161_0xa22123(0x19a)]=void 0x0;const xml_v2_1=require(a161_0xa22123(0x197)),path_1=require(a161_0xa22123(0x180)),marketing_cloud_types_1=require(a161_0xa22123(0x18a)),core_1=require(a161_0xa22123(0x184));async function parseMarketingCloudComponent(_0x2b618a,_0x17c21d){const _0x4f4ffe=a161_0xa22123,_0x13b018=new core_1[(_0x4f4ffe(0x199))](parseMarketingCloudComponent[_0x4f4ffe(0x192)]),[_0x435885,_0x2e30d3]=_0x2b618a['split'](path_1[_0x4f4ffe(0x182)]);try{if(marketing_cloud_types_1[_0x4f4ffe(0x17c)][_0x4f4ffe(0x188)](_0x435885))return parseJSONComponent(_0x435885,_0x2e30d3,_0x17c21d);if(marketing_cloud_types_1['MARKETING_CLOUD_XML_COMPONENT_TYPES']['includes'](_0x435885))return await parseXMLComponent(_0x435885,_0x2e30d3,_0x17c21d);}catch(_0x4edecf){_0x13b018['error'](_0x4f4ffe(0x195),_0x2b618a,_0x4edecf);}return{'componentType':_0x435885,'componentName':_0x2e30d3,'key':''};}exports['parseMarketingCloudComponent']=parseMarketingCloudComponent;function parseJSONComponent(_0x20ffda,_0x49fd80,_0x2a4f76){const _0x3fb410=a161_0xa22123;var _0x53df02;const _0x50ef73={'componentType':_0x20ffda,'componentName':_0x49fd80,'key':''},_0x1e9306=JSON[_0x3fb410(0x193)](_0x2a4f76[_0x3fb410(0x198)]());_0x50ef73[_0x3fb410(0x196)]=_0x1e9306===null||_0x1e9306===void 0x0?void 0x0:_0x1e9306['id'];const _0x991cf4=((_0x53df02=_0x1e9306===null||_0x1e9306===void 0x0?void 0x0:_0x1e9306[_0x3fb410(0x18d)])===null||_0x53df02===void 0x0?void 0x0:_0x53df02[_0x3fb410(0x18f)])||(_0x1e9306===null||_0x1e9306===void 0x0?void 0x0:_0x1e9306[_0x3fb410(0x192)]);return _0x991cf4&&_0x49fd80!==_0x991cf4&&(_0x50ef73[_0x3fb410(0x185)]=_0x991cf4+'\x20('+_0x49fd80+')'),_0x50ef73;}async function parseXMLComponent(_0x969dac,_0x3f556d,_0x13a0ad){const _0x1a2d7c=a161_0xa22123;var _0x5d55a3,_0x411a1d;const _0x574c40={'componentType':_0x969dac,'componentName':_0x3f556d,'key':''},_0x39148f=await xml_v2_1[_0x1a2d7c(0x183)][_0x1a2d7c(0x193)](_0x13a0ad['toString']());_0x574c40['key']=(_0x5d55a3=_0x39148f===null||_0x39148f===void 0x0?void 0x0:_0x39148f[_0x1a2d7c(0x17d)])===null||_0x5d55a3===void 0x0?void 0x0:_0x5d55a3['CustomerKey'];const _0x316a0b=(_0x411a1d=_0x39148f===null||_0x39148f===void 0x0?void 0x0:_0x39148f[_0x1a2d7c(0x17d)])===null||_0x411a1d===void 0x0?void 0x0:_0x411a1d['Name'];return _0x316a0b&&_0x3f556d!==_0x316a0b&&(_0x574c40['componentName']=_0x316a0b+'\x20('+_0x3f556d+')'),_0x574c40;}function isMarketingCloudComponent(_0x3979b7){const _0x37cee5=a161_0xa22123,_0x2f0afc=_0x3979b7[_0x37cee5(0x187)](path_1[_0x37cee5(0x182)])[0x0];return marketing_cloud_types_1[_0x37cee5(0x17c)][_0x37cee5(0x188)](_0x2f0afc)||marketing_cloud_types_1['MARKETING_CLOUD_XML_COMPONENT_TYPES'][_0x37cee5(0x188)](_0x2f0afc);}exports[a161_0xa22123(0x18e)]=isMarketingCloudComponent;