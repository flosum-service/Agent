'use strict';const a109_0x5f1a76=a109_0x1ab0;(function(_0x4c1c05,_0x4d730d){const _0x32a42a=a109_0x1ab0,_0x210ac4=_0x4c1c05();while(!![]){try{const _0x22974b=-parseInt(_0x32a42a(0x121))/0x1+-parseInt(_0x32a42a(0x110))/0x2*(parseInt(_0x32a42a(0x114))/0x3)+-parseInt(_0x32a42a(0x11b))/0x4+-parseInt(_0x32a42a(0xfc))/0x5+-parseInt(_0x32a42a(0x129))/0x6+parseInt(_0x32a42a(0x103))/0x7+-parseInt(_0x32a42a(0x100))/0x8*(-parseInt(_0x32a42a(0x119))/0x9);if(_0x22974b===_0x4d730d)break;else _0x210ac4['push'](_0x210ac4['shift']());}catch(_0x3d1143){_0x210ac4['push'](_0x210ac4['shift']());}}}(a109_0x5358,0x94d52));Object[a109_0x5f1a76(0x117)](exports,'__esModule',{'value':!![]}),exports['mergeComponentPermissions']=exports[a109_0x5f1a76(0x104)]=void 0x0;const xml_1=require(a109_0x5f1a76(0xf6)),xml2js_1=require(a109_0x5f1a76(0xf2)),PERMISSIONS_MAP=new Map([[a109_0x5f1a76(0x11e),'apexClass'],[a109_0x5f1a76(0x128),'apexPage'],[a109_0x5f1a76(0x108),'tab'],[a109_0x5f1a76(0x118),a109_0x5f1a76(0xf1)],[a109_0x5f1a76(0xf5),a109_0x5f1a76(0xf0)],[a109_0x5f1a76(0x10c),a109_0x5f1a76(0x10b)],[a109_0x5f1a76(0xf4),a109_0x5f1a76(0x101)],['customMetadataTypeAccesses','name'],[a109_0x5f1a76(0x102),a109_0x5f1a76(0x123)],['applicationVisibilities',a109_0x5f1a76(0x10d)],[a109_0x5f1a76(0x115),a109_0x5f1a76(0x109)],['customPermissions',a109_0x5f1a76(0x123)],[a109_0x5f1a76(0x112),a109_0x5f1a76(0xfb)],[a109_0x5f1a76(0x124),a109_0x5f1a76(0x107)],[a109_0x5f1a76(0x111),'recordType'],[a109_0x5f1a76(0x11d),'field']]);var UNREMOVE_PERMISSION;(function(_0x3d5243){const _0xb9de2=a109_0x5f1a76,_0x2cf9f9=(function(){let _0x4dfe8c=!![];return function(_0x4ab9f3,_0x236ab6){const _0x2ad3b3=_0x4dfe8c?function(){if(_0x236ab6){const _0x5c4df8=_0x236ab6['apply'](_0x4ab9f3,arguments);return _0x236ab6=null,_0x5c4df8;}}:function(){};return _0x4dfe8c=![],_0x2ad3b3;};}()),_0x432aff=_0x2cf9f9(this,function(){const _0x107697=a109_0x1ab0;return _0x432aff[_0x107697(0x105)]()[_0x107697(0x127)](_0x107697(0xfd))['toString']()[_0x107697(0xfe)](_0x432aff)[_0x107697(0x127)](_0x107697(0xfd));});_0x432aff(),_0x3d5243[_0xb9de2(0x126)]=_0xb9de2(0x126),_0x3d5243[_0xb9de2(0x12c)]=_0xb9de2(0x12c),_0x3d5243['custom']=_0xb9de2(0xff),_0x3d5243[_0xb9de2(0xf7)]=_0xb9de2(0xf7);}(UNREMOVE_PERMISSION||(UNREMOVE_PERMISSION={})));const prepareDeleteComponent={'Profile':_0x4e42c0=>{const _0x755ed2=a109_0x5f1a76;var _0x236a9c,_0x4e2e7f;return(_0x236a9c=_0x4e42c0[_0x755ed2(0x120)])===null||_0x236a9c===void 0x0?!![]:delete _0x236a9c[_0x755ed2(0x125)],(_0x4e2e7f=_0x4e42c0[_0x755ed2(0x120)])===null||_0x4e2e7f===void 0x0?!![]:delete _0x4e2e7f['loginIpRanges'],_0x4e42c0;},'PermissionSet':_0x7a34ea=>{const _0x4b2567=a109_0x5f1a76;var _0x5b2d6a,_0x2431d6;return(_0x5b2d6a=_0x7a34ea[_0x4b2567(0x10e)])===null||_0x5b2d6a===void 0x0?!![]:delete _0x5b2d6a[_0x4b2567(0x125)],(_0x2431d6=_0x7a34ea[_0x4b2567(0x10e)])===null||_0x2431d6===void 0x0?!![]:delete _0x2431d6[_0x4b2567(0x10f)],_0x7a34ea;}};async function extractComponentPermissions(_0x8c0dfa,_0x2614e6,_0x4d7dd5){const _0x5d4d55=a109_0x5f1a76,_0x33fccb=await getReadyComponent(_0x8c0dfa,_0x4d7dd5),_0x3f4feb=_0x33fccb[_0x4d7dd5];if(!_0x3f4feb)return _0x33fccb;for(const _0x5a6935 in _0x3f4feb){if(UNREMOVE_PERMISSION[_0x5a6935])continue;const _0x2586de=_0x3f4feb[_0x5a6935],_0x5f0a97=getValidPermission(_0x2586de,_0x5a6935,_0x2614e6);_0x5f0a97[_0x5d4d55(0x11a)]?_0x3f4feb[_0x5a6935]=_0x5f0a97:delete _0x3f4feb[_0x5a6935];}return _0x33fccb[_0x4d7dd5]['$']={'xmlns':_0x5d4d55(0x12a)},_0x33fccb;}exports['extractComponentPermissions']=extractComponentPermissions;function a109_0x1ab0(_0x4491ed,_0x192ee6){const _0x54df32=a109_0x5358();return a109_0x1ab0=function(_0x4a292c,_0x227868){_0x4a292c=_0x4a292c-0xf0;let _0x535831=_0x54df32[_0x4a292c];return _0x535831;},a109_0x1ab0(_0x4491ed,_0x192ee6);}async function mergeComponentPermissions(_0x2db968,_0x3ec953,_0x2f2f9d){const _0x3e255b=a109_0x5f1a76,_0x194041=await xml_1[_0x3e255b(0x122)][_0x3e255b(0x11c)](_0x2db968),_0x3be0bb=await xml_1[_0x3e255b(0x122)]['parse'](_0x3ec953),_0x25570c=_0x194041[_0x2f2f9d],_0x54ebc3=_0x3be0bb[_0x2f2f9d];if(!_0x25570c)return _0x3ec953;for(const _0x3b6ddb in _0x25570c){const _0x338770=PERMISSIONS_MAP['get'](_0x3b6ddb);if(!_0x338770||!_0x54ebc3[_0x3b6ddb]){_0x54ebc3[_0x3b6ddb]=_0x25570c[_0x3b6ddb];continue;}for(const _0x3b3d0a of _0x25570c[_0x3b6ddb]){const _0x472a54=_0x54ebc3[_0x3b6ddb]['findIndex'](_0x19fe6b=>_0x3b3d0a[_0x338770][0x0]===_0x19fe6b[_0x338770][0x0]);_0x472a54!==-0x1?_0x54ebc3[_0x3b6ddb][_0x472a54]=_0x3b3d0a:_0x54ebc3[_0x3b6ddb][_0x3e255b(0xf8)](_0x3b3d0a);}}_0x3be0bb[_0x2f2f9d]['$']={'xmlns':_0x3e255b(0x12a)};const _0x2e0981=new xml2js_1['Builder']({'xmldec':{'version':_0x3e255b(0x12b),'encoding':_0x3e255b(0x10a)}});return _0x2e0981[_0x3e255b(0x11f)](_0x3be0bb);}exports[a109_0x5f1a76(0xfa)]=mergeComponentPermissions;function a109_0x5358(){const _0x32ad97=['parse','fieldPermissions','classAccesses','buildObject','Profile','849012xCYpnx','Xml','name','layoutAssignments','userPermissions','hasActivationRequired','search','pageAccesses','2452494WBlSwf','http://soap.sforce.com/2006/04/metadata','1.0','label','content','tab','xml2js','Component_Name__c','objectPermissions','profileActionOverrides','../../git/parsers/utils/xml','description','push','recordType','mergeComponentPermissions','flow','4302835uEUZRZ','(((.+)+)+)+$','constructor','custom','4627464geqQtD','object','customSettingAccesses','5246857seVGWd','extractComponentPermissions','toString','get','layout','tabSettings','externalDataSource','UTF-8','dataCategoryGroup','categoryGroupVisibilities','application','PermissionSet','loginIpRanges','360iaurFR','recordTypeVisibilities','flowAccesses','isArray','6318TYUTeZ','externalDataSourceAccesses','includes','defineProperty','tabVisibilities','54ZVCyln','length','4452492zuishC'];a109_0x5358=function(){return _0x32ad97;};return a109_0x5358();}function getValidPermission(_0x28fbe7,_0x70c565,_0x250b55){const _0x3374f4=a109_0x5f1a76;let _0x53cb58=[];if(_0x70c565===_0x3374f4(0x124))_0x53cb58=getValidLayout(_0x28fbe7,_0x70c565,_0x250b55);else{const _0x16a5f4=Array[_0x3374f4(0x113)](_0x28fbe7)?_0x28fbe7:[_0x28fbe7];for(const _0x2adebf of _0x16a5f4){isValidPermission(_0x2adebf,_0x70c565,_0x250b55)&&_0x53cb58[_0x3374f4(0xf8)](_0x2adebf);}}return _0x53cb58;}function isValidPermission(_0x2050ad,_0xd0378f,_0xff537f){const _0x494e82=a109_0x5f1a76,_0x3a3bb8=PERMISSIONS_MAP[_0x494e82(0x106)](_0xd0378f);return _0x2050ad[_0x3a3bb8]&&_0xff537f['some'](_0x2b8144=>_0x2b8144['Component__r'][_0x494e82(0xf3)][_0x494e82(0x116)](_0x2050ad[_0x3a3bb8]));}function getValidLayout(_0x476f68,_0x82e73,_0xe52cb5){const _0xa87dc8=a109_0x5f1a76,_0x2a06b9=[],_0xd9917d=Array[_0xa87dc8(0x113)](_0x476f68)?_0x476f68:[_0x476f68];for(const _0xe9e2a4 in _0xd9917d){isValidPermission(_0xd9917d[_0xe9e2a4],_0x82e73,_0xe52cb5)&&(!_0xd9917d[_0xe9e2a4][_0xa87dc8(0xf9)]&&_0x2a06b9[_0xa87dc8(0xf8)](_0xd9917d[_0xe9e2a4]),isValidPermission(_0xd9917d[_0xe9e2a4],_0xa87dc8(0x111),_0xe52cb5)&&_0x2a06b9['push'](_0xd9917d[_0xe9e2a4]));}return _0x2a06b9;}async function getReadyComponent(_0x5c6409,_0x580986){const _0x5e265f=a109_0x5f1a76,_0x4ef94c=await xml_1[_0x5e265f(0x122)][_0x5e265f(0x11c)](_0x5c6409);return prepareDeleteComponent[_0x580986](_0x4ef94c);}