'use strict';const a60_0x59b014=a60_0xcb16;(function(_0x333ed7,_0x57cf19){const _0x1b72ae=a60_0xcb16,_0x480e57=_0x333ed7();while(!![]){try{const _0x5b3dca=-parseInt(_0x1b72ae(0x1a5))/0x1+parseInt(_0x1b72ae(0x1a2))/0x2+-parseInt(_0x1b72ae(0x191))/0x3*(parseInt(_0x1b72ae(0x19e))/0x4)+parseInt(_0x1b72ae(0x1aa))/0x5*(parseInt(_0x1b72ae(0x187))/0x6)+-parseInt(_0x1b72ae(0x18d))/0x7*(parseInt(_0x1b72ae(0x1a6))/0x8)+-parseInt(_0x1b72ae(0x1a7))/0x9+parseInt(_0x1b72ae(0x1ba))/0xa;if(_0x5b3dca===_0x57cf19)break;else _0x480e57['push'](_0x480e57['shift']());}catch(_0x247868){_0x480e57['push'](_0x480e57['shift']());}}}(a60_0x30e3,0x99cfc));Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports['extractComponentPermissions']=void 0x0;const xml_1=require(a60_0x59b014(0x192)),PERMISSIONS_MAP=new Map([['classAccesses',a60_0x59b014(0x19c)],[a60_0x59b014(0x19a),a60_0x59b014(0x18f)],[a60_0x59b014(0x1a3),a60_0x59b014(0x1ac)],['tabVisibilities',a60_0x59b014(0x1ac)],['profileActionOverrides',a60_0x59b014(0x186)],[a60_0x59b014(0x1a0),a60_0x59b014(0x1b5)],['objectPermissions',a60_0x59b014(0x1b2)],[a60_0x59b014(0x1b0),'name'],[a60_0x59b014(0x197),a60_0x59b014(0x19d)],[a60_0x59b014(0x193),a60_0x59b014(0x1b8)],[a60_0x59b014(0x195),'externalDataSource'],['customPermissions','name'],[a60_0x59b014(0x1a1),'flow'],[a60_0x59b014(0x198),a60_0x59b014(0x1af)],[a60_0x59b014(0x1b1),a60_0x59b014(0x189)],[a60_0x59b014(0x1ae),a60_0x59b014(0x190)]]);var UNREMOVE_PERMISSION;(function(_0x3dcbae){const _0x2f71b1=a60_0x59b014,_0x3f4bd0=(function(){let _0x5d36e6=!![];return function(_0x2d7963,_0x208781){const _0x15907c=_0x5d36e6?function(){const _0x927c78=a60_0xcb16;if(_0x208781){const _0x41226d=_0x208781[_0x927c78(0x188)](_0x2d7963,arguments);return _0x208781=null,_0x41226d;}}:function(){};return _0x5d36e6=![],_0x15907c;};}()),_0x3d8383=_0x3f4bd0(this,function(){const _0x48bc4d=a60_0xcb16;return _0x3d8383[_0x48bc4d(0x1b7)]()[_0x48bc4d(0x1b4)](_0x48bc4d(0x18e))[_0x48bc4d(0x1b7)]()[_0x48bc4d(0x1b6)](_0x3d8383)[_0x48bc4d(0x1b4)](_0x48bc4d(0x18e));});_0x3d8383(),_0x3dcbae[_0x2f71b1(0x196)]=_0x2f71b1(0x196),_0x3dcbae[_0x2f71b1(0x185)]=_0x2f71b1(0x185),_0x3dcbae[_0x2f71b1(0x194)]=_0x2f71b1(0x194),_0x3dcbae['description']=_0x2f71b1(0x18a);}(UNREMOVE_PERMISSION||(UNREMOVE_PERMISSION={})));const prepareDeleteComponent={'Profile':_0x65b94a=>{const _0x66520=a60_0x59b014;var _0x357409,_0x1eb1e6;return(_0x357409=_0x65b94a[_0x66520(0x18c)])===null||_0x357409===void 0x0?!![]:delete _0x357409[_0x66520(0x1ab)],(_0x1eb1e6=_0x65b94a[_0x66520(0x18c)])===null||_0x1eb1e6===void 0x0?!![]:delete _0x1eb1e6[_0x66520(0x1a4)],_0x65b94a;},'PermissionSet':_0x7a6beb=>{const _0x3315bc=a60_0x59b014;var _0x5570dd,_0x25c750;return(_0x5570dd=_0x7a6beb['PermissionSet'])===null||_0x5570dd===void 0x0?!![]:delete _0x5570dd[_0x3315bc(0x1ab)],(_0x25c750=_0x7a6beb[_0x3315bc(0x1b9)])===null||_0x25c750===void 0x0?!![]:delete _0x25c750[_0x3315bc(0x1a4)],_0x7a6beb;}};async function extractComponentPermissions(_0xf9d633,_0x593cb8,_0x2b84ce){const _0x8f5ece=a60_0x59b014,_0x50c1d2=await getReadyComponent(_0xf9d633,_0x2b84ce),_0x2aafc9=_0x50c1d2[_0x2b84ce];if(!_0x2aafc9)return _0x50c1d2;for(const _0x4e4d41 in _0x2aafc9){if(UNREMOVE_PERMISSION[_0x4e4d41])continue;const _0x530d5c=_0x2aafc9[_0x4e4d41],_0x4f65b8=getValidPermission(_0x530d5c,_0x4e4d41,_0x593cb8);_0x4f65b8[_0x8f5ece(0x1b3)]?_0x2aafc9[_0x4e4d41]=_0x4f65b8:delete _0x2aafc9[_0x4e4d41];}return _0x50c1d2[_0x2b84ce]['$']={'xmlns':_0x8f5ece(0x1ad)},_0x50c1d2;}function a60_0xcb16(_0x1b3f93,_0x339c88){const _0x1b9870=a60_0x30e3();return a60_0xcb16=function(_0x451155,_0x4ff273){_0x451155=_0x451155-0x184;let _0x30e3a8=_0x1b9870[_0x451155];return _0x30e3a8;},a60_0xcb16(_0x1b3f93,_0x339c88);}exports['extractComponentPermissions']=extractComponentPermissions;function a60_0x30e3(){const _0x154473=['get','label','content','2988QKdyJk','apply','recordType','description','push','Profile','11221SLKOrp','(((.+)+)+)+$','apexPage','field','3hqhxnL','../../git/parsers/utils/xml','applicationVisibilities','custom','externalDataSourceAccesses','hasActivationRequired','customSettingAccesses','layoutAssignments','Xml','pageAccesses','Component__r','apexClass','name','2403556FvITMA','some','categoryGroupVisibilities','flowAccesses','1943204KtyoXj','tabSettings','loginIpRanges','1238480uEnpub','1048QDXotS','6671313BDzkVm','Component_Name__c','isArray','4985FcnIhV','userPermissions','tab','http://soap.sforce.com/2006/04/metadata','fieldPermissions','layout','customMetadataTypeAccesses','recordTypeVisibilities','object','length','search','dataCategoryGroup','constructor','toString','application','PermissionSet','19525230UKtlBl'];a60_0x30e3=function(){return _0x154473;};return a60_0x30e3();}function getValidPermission(_0x565c40,_0x19587e,_0x18bb76){const _0x2ba676=a60_0x59b014;let _0xfd742a=[];if(_0x19587e===_0x2ba676(0x198))_0xfd742a=getValidLayout(_0x565c40,_0x19587e,_0x18bb76);else{const _0xdf411a=Array[_0x2ba676(0x1a9)](_0x565c40)?_0x565c40:[_0x565c40];for(const _0x475daa of _0xdf411a){isValidPermission(_0x475daa,_0x19587e,_0x18bb76)&&_0xfd742a[_0x2ba676(0x18b)](_0x475daa);}}return _0xfd742a;}function isValidPermission(_0x15f12c,_0x304ff3,_0x3afcf5){const _0x2bb93d=a60_0x59b014,_0x16080b=PERMISSIONS_MAP[_0x2bb93d(0x184)](_0x304ff3);return _0x15f12c[_0x16080b]&&_0x3afcf5[_0x2bb93d(0x19f)](_0x2b0926=>_0x2b0926[_0x2bb93d(0x19b)][_0x2bb93d(0x1a8)]['includes'](_0x15f12c[_0x16080b]));}function getValidLayout(_0x15a60c,_0x1f4b0f,_0x1e2387){const _0x5c7abb=a60_0x59b014,_0x3c37d2=[],_0xc72f2e=Array[_0x5c7abb(0x1a9)](_0x15a60c)?_0x15a60c:[_0x15a60c];for(const _0x5c726a in _0xc72f2e){isValidPermission(_0xc72f2e[_0x5c726a],_0x1f4b0f,_0x1e2387)&&(!_0xc72f2e[_0x5c726a][_0x5c7abb(0x189)]&&_0x3c37d2['push'](_0xc72f2e[_0x5c726a]),isValidPermission(_0xc72f2e[_0x5c726a],'recordTypeVisibilities',_0x1e2387)&&_0x3c37d2[_0x5c7abb(0x18b)](_0xc72f2e[_0x5c726a]));}return _0x3c37d2;}async function getReadyComponent(_0x123402,_0x18b8b2){const _0x10f5c5=a60_0x59b014,_0x2a407f=await xml_1[_0x10f5c5(0x199)]['parse'](_0x123402);return prepareDeleteComponent[_0x18b8b2](_0x2a407f);}