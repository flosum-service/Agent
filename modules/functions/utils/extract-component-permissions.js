'use strict';const a109_0x7f0364=a109_0x44b8;(function(_0x7ad885,_0x76d8a5){const _0x1400ff=a109_0x44b8,_0x7bb7f1=_0x7ad885();while(!![]){try{const _0xd1dff1=parseInt(_0x1400ff(0xf6))/0x1+parseInt(_0x1400ff(0xfe))/0x2*(-parseInt(_0x1400ff(0xda))/0x3)+-parseInt(_0x1400ff(0xeb))/0x4+parseInt(_0x1400ff(0xef))/0x5*(-parseInt(_0x1400ff(0xdb))/0x6)+parseInt(_0x1400ff(0xd3))/0x7+-parseInt(_0x1400ff(0xff))/0x8+parseInt(_0x1400ff(0xc8))/0x9*(parseInt(_0x1400ff(0xdd))/0xa);if(_0xd1dff1===_0x76d8a5)break;else _0x7bb7f1['push'](_0x7bb7f1['shift']());}catch(_0x39d40c){_0x7bb7f1['push'](_0x7bb7f1['shift']());}}}(a109_0x11a4,0x67a11));Object[a109_0x7f0364(0xd1)](exports,a109_0x7f0364(0x102),{'value':!![]}),exports[a109_0x7f0364(0xdc)]=exports[a109_0x7f0364(0xed)]=void 0x0;const xml_1=require(a109_0x7f0364(0xf8)),xml2js_1=require('xml2js'),PERMISSIONS_MAP=new Map([['classAccesses',a109_0x7f0364(0xd6)],['pageAccesses','apexPage'],[a109_0x7f0364(0xe5),a109_0x7f0364(0xd9)],[a109_0x7f0364(0xd7),'tab'],[a109_0x7f0364(0xf7),a109_0x7f0364(0x101)],[a109_0x7f0364(0xd2),a109_0x7f0364(0xcb)],[a109_0x7f0364(0xea),'object'],[a109_0x7f0364(0xcc),'name'],['customSettingAccesses',a109_0x7f0364(0xf9)],[a109_0x7f0364(0xc9),a109_0x7f0364(0xde)],['externalDataSourceAccesses','externalDataSource'],['customPermissions',a109_0x7f0364(0xf9)],['flowAccesses','flow'],[a109_0x7f0364(0xf1),a109_0x7f0364(0xdf)],[a109_0x7f0364(0xf2),a109_0x7f0364(0xfb)],[a109_0x7f0364(0xca),a109_0x7f0364(0xd5)]]);var UNREMOVE_PERMISSION;(function(_0x196e53){const _0x174e18=a109_0x7f0364,_0x39e5c5=(function(){let _0x13c8d3=!![];return function(_0x4f49a9,_0x3a8df9){const _0x5d4668=_0x13c8d3?function(){const _0x3ab243=a109_0x44b8;if(_0x3a8df9){const _0x5788f7=_0x3a8df9[_0x3ab243(0xee)](_0x4f49a9,arguments);return _0x3a8df9=null,_0x5788f7;}}:function(){};return _0x13c8d3=![],_0x5d4668;};}()),_0x311591=_0x39e5c5(this,function(){const _0x8f081e=a109_0x44b8;return _0x311591[_0x8f081e(0xd8)]()[_0x8f081e(0xec)](_0x8f081e(0xfd))[_0x8f081e(0xd8)]()[_0x8f081e(0xe1)](_0x311591)[_0x8f081e(0xec)]('(((.+)+)+)+$');});_0x311591(),_0x196e53[_0x174e18(0xcd)]='hasActivationRequired',_0x196e53['label']=_0x174e18(0xf5),_0x196e53['custom']=_0x174e18(0xd0),_0x196e53['description']=_0x174e18(0xc7);}(UNREMOVE_PERMISSION||(UNREMOVE_PERMISSION={})));const prepareDeleteComponent={'Profile':_0x28350c=>{const _0x85aac0=a109_0x7f0364;var _0x1a7d69,_0x569848;return(_0x1a7d69=_0x28350c[_0x85aac0(0xe9)])===null||_0x1a7d69===void 0x0?!![]:delete _0x1a7d69[_0x85aac0(0xe8)],(_0x569848=_0x28350c[_0x85aac0(0xe9)])===null||_0x569848===void 0x0?!![]:delete _0x569848[_0x85aac0(0xcf)],_0x28350c;},'PermissionSet':_0x2af04b=>{const _0x5048bb=a109_0x7f0364;var _0x5642ef,_0x10dd9c;return(_0x5642ef=_0x2af04b['PermissionSet'])===null||_0x5642ef===void 0x0?!![]:delete _0x5642ef['userPermissions'],(_0x10dd9c=_0x2af04b[_0x5048bb(0xe3)])===null||_0x10dd9c===void 0x0?!![]:delete _0x10dd9c[_0x5048bb(0xcf)],_0x2af04b;}};async function extractComponentPermissions(_0x2c7519,_0x11d0be,_0x1c0454){const _0x37713f=a109_0x7f0364,_0x51b104=await getReadyComponent(_0x2c7519,_0x1c0454),_0x58b555=_0x51b104[_0x1c0454];if(!_0x58b555)return _0x51b104;for(const _0x544cad in _0x58b555){if(UNREMOVE_PERMISSION[_0x544cad])continue;const _0x3ac419=_0x58b555[_0x544cad],_0xc6f0af=getValidPermission(_0x3ac419,_0x544cad,_0x11d0be);_0xc6f0af[_0x37713f(0xf4)]?_0x58b555[_0x544cad]=_0xc6f0af:delete _0x58b555[_0x544cad];}return _0x51b104[_0x1c0454]['$']={'xmlns':_0x37713f(0xc6)},_0x51b104;}function a109_0x11a4(){const _0x485bd7=['8817Ojltcx','6tozSbX','mergeComponentPermissions','20128520nvMjvm','application','layout','Component__r','constructor','isArray','PermissionSet','Builder','tabSettings','UTF-8','findIndex','userPermissions','Profile','objectPermissions','3021176RouxSr','search','extractComponentPermissions','apply','1735155QHvKyh','1.0','layoutAssignments','recordTypeVisibilities','Xml','length','label','270871pMzbrO','profileActionOverrides','../../git/parsers/utils/xml','name','get','recordType','includes','(((.+)+)+)+$','426JwyrAp','5252672eJjCrk','parse','content','__esModule','push','http://soap.sforce.com/2006/04/metadata','description','9iKTXqk','applicationVisibilities','fieldPermissions','dataCategoryGroup','customMetadataTypeAccesses','hasActivationRequired','Component_Name__c','loginIpRanges','custom','defineProperty','categoryGroupVisibilities','3679606jEcXyb','buildObject','field','apexClass','tabVisibilities','toString','tab'];a109_0x11a4=function(){return _0x485bd7;};return a109_0x11a4();}exports[a109_0x7f0364(0xed)]=extractComponentPermissions;async function mergeComponentPermissions(_0xb95572,_0x59489d,_0x3e8d03){const _0x48b4fa=a109_0x7f0364,_0x1fde4c=await xml_1['Xml'][_0x48b4fa(0x100)](_0xb95572),_0x2619e7=await xml_1['Xml'][_0x48b4fa(0x100)](_0x59489d),_0x302943=_0x1fde4c[_0x3e8d03],_0x54c4ee=_0x2619e7[_0x3e8d03];if(!_0x302943)return _0x59489d;for(const _0x292930 in _0x302943){const _0x33b277=PERMISSIONS_MAP[_0x48b4fa(0xfa)](_0x292930);if(!_0x33b277||!_0x54c4ee[_0x292930]){_0x54c4ee[_0x292930]=_0x302943[_0x292930];continue;}for(const _0x3c3dad of _0x302943[_0x292930]){const _0x555030=_0x54c4ee[_0x292930][_0x48b4fa(0xe7)](_0x40f68e=>_0x3c3dad[_0x33b277][0x0]===_0x40f68e[_0x33b277][0x0]);_0x555030!==-0x1?_0x54c4ee[_0x292930][_0x555030]=_0x3c3dad:_0x54c4ee[_0x292930][_0x48b4fa(0x103)](_0x3c3dad);}}_0x2619e7[_0x3e8d03]['$']={'xmlns':_0x48b4fa(0xc6)};const _0xcb4ded=new xml2js_1[(_0x48b4fa(0xe4))]({'xmldec':{'version':_0x48b4fa(0xf0),'encoding':_0x48b4fa(0xe6)}});return _0xcb4ded[_0x48b4fa(0xd4)](_0x2619e7);}exports[a109_0x7f0364(0xdc)]=mergeComponentPermissions;function a109_0x44b8(_0x2bde44,_0x409c6e){const _0x4af74d=a109_0x11a4();return a109_0x44b8=function(_0x3f8ebf,_0x214152){_0x3f8ebf=_0x3f8ebf-0xc6;let _0x11a4d4=_0x4af74d[_0x3f8ebf];return _0x11a4d4;},a109_0x44b8(_0x2bde44,_0x409c6e);}function getValidPermission(_0x1e859c,_0x540f19,_0x2c3bac){const _0x473f48=a109_0x7f0364;let _0x2a7c44=[];if(_0x540f19==='layoutAssignments')_0x2a7c44=getValidLayout(_0x1e859c,_0x540f19,_0x2c3bac);else{const _0x307b7a=Array[_0x473f48(0xe2)](_0x1e859c)?_0x1e859c:[_0x1e859c];for(const _0x17c301 of _0x307b7a){isValidPermission(_0x17c301,_0x540f19,_0x2c3bac)&&_0x2a7c44[_0x473f48(0x103)](_0x17c301);}}return _0x2a7c44;}function isValidPermission(_0x238b4d,_0x30c665,_0x461057){const _0x301b7f=a109_0x7f0364,_0x21535f=PERMISSIONS_MAP[_0x301b7f(0xfa)](_0x30c665);return _0x238b4d[_0x21535f]&&_0x461057['some'](_0x449451=>_0x449451[_0x301b7f(0xe0)][_0x301b7f(0xce)][_0x301b7f(0xfc)](_0x238b4d[_0x21535f]));}function getValidLayout(_0x12b5a1,_0x235410,_0x1aaf12){const _0x550f93=a109_0x7f0364,_0x5e5dcc=[],_0x51d931=Array['isArray'](_0x12b5a1)?_0x12b5a1:[_0x12b5a1];for(const _0x1aa2d2 in _0x51d931){isValidPermission(_0x51d931[_0x1aa2d2],_0x235410,_0x1aaf12)&&(!_0x51d931[_0x1aa2d2][_0x550f93(0xfb)]&&_0x5e5dcc[_0x550f93(0x103)](_0x51d931[_0x1aa2d2]),isValidPermission(_0x51d931[_0x1aa2d2],_0x550f93(0xf2),_0x1aaf12)&&_0x5e5dcc[_0x550f93(0x103)](_0x51d931[_0x1aa2d2]));}return _0x5e5dcc;}async function getReadyComponent(_0x35a52c,_0x4e6600){const _0x45341a=a109_0x7f0364,_0xd7adb8=await xml_1[_0x45341a(0xf3)][_0x45341a(0x100)](_0x35a52c);return prepareDeleteComponent[_0x4e6600](_0xd7adb8);}