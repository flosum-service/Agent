const a85_0x271f15=a85_0x41b9;function a85_0x41b9(_0x33ce06,_0x41113c){const _0x1bc1a5=a85_0x50b2();return a85_0x41b9=function(_0x3fd643,_0xd9fd37){_0x3fd643=_0x3fd643-0xfb;let _0x50b2bd=_0x1bc1a5[_0x3fd643];return _0x50b2bd;},a85_0x41b9(_0x33ce06,_0x41113c);}(function(_0x58c917,_0xdcfe06){const _0x5b01e5=a85_0x41b9,_0x154b28=_0x58c917();while(!![]){try{const _0x9c48c=-parseInt(_0x5b01e5(0x125))/0x1+-parseInt(_0x5b01e5(0x103))/0x2+-parseInt(_0x5b01e5(0x10b))/0x3*(parseInt(_0x5b01e5(0xfc))/0x4)+-parseInt(_0x5b01e5(0x11a))/0x5+-parseInt(_0x5b01e5(0x100))/0x6*(-parseInt(_0x5b01e5(0xff))/0x7)+-parseInt(_0x5b01e5(0x127))/0x8+parseInt(_0x5b01e5(0x116))/0x9;if(_0x9c48c===_0xdcfe06)break;else _0x154b28['push'](_0x154b28['shift']());}catch(_0x5515a8){_0x154b28['push'](_0x154b28['shift']());}}}(a85_0x50b2,0xeee3a));function a85_0x50b2(){const _0x42ae5f=['301mEnteO','209610ddkIso','Component__r','push','3265094athEcd','ParentId','toString','TEST\x20CLASSES','base64','defineProperty','metadataLogId','Body','3ySXmqT','Zip','Component_Name__c','attachmentsId','SALESFORCE_API_VERSION','search','../../git/parsers/utils/zip','dir','find','ComponentsApi','test','53945343NHVvih','fetchAttachments','files','../utils/components-api','6031815WQHYRd','fetchTestClasses','fetchAttachmentsDetailsById','map','string','apply','unzip','@istest','/services/data/','No\x20component\x20by\x20attachment\x20id','fetchComponentsDetailsByComponentsHistory','1476475SszCLw','removeNamespacePrefix','2801160atBjiW','from','then','post','keys','7408448aMciCJ','(((.+)+)+)+$','/sobjects/Attachment'];a85_0x50b2=function(){return _0x42ae5f;};return a85_0x50b2();}const a85_0xd9fd37=(function(){let _0x27ce86=!![];return function(_0x392de8,_0x1a131e){const _0x1171ba=_0x27ce86?function(){const _0x36d493=a85_0x41b9;if(_0x1a131e){const _0x38b1e8=_0x1a131e[_0x36d493(0x11f)](_0x392de8,arguments);return _0x1a131e=null,_0x38b1e8;}}:function(){};return _0x27ce86=![],_0x1171ba;};}()),a85_0x3fd643=a85_0xd9fd37(this,function(){const _0x1253c5=a85_0x41b9;return a85_0x3fd643[_0x1253c5(0x105)]()[_0x1253c5(0x110)](_0x1253c5(0xfd))['toString']()['constructor'](a85_0x3fd643)[_0x1253c5(0x110)]('(((.+)+)+)+$');});a85_0x3fd643();'use strict';Object[a85_0x271f15(0x108)](exports,'__esModule',{'value':!![]}),exports[a85_0x271f15(0x11b)]=void 0x0;const constants_1=require('../../../constants'),zip_1=require(a85_0x271f15(0x111)),components_api_1=require(a85_0x271f15(0x119)),fetch_attachments_1=require('../../shared/utils/fetch-attachments'),BINARY_FIELDS=[a85_0x271f15(0x10a)],ATTACHMENT_NAME=a85_0x271f15(0x106),ATTACHMENT_DESCRIPTION=a85_0x271f15(0x106);async function fetchTestClasses(_0x3d2357,_0x271555){const _0x488dcf=a85_0x271f15,_0x500481=await(0x0,fetch_attachments_1[_0x488dcf(0x11c)])(_0x271555,_0x3d2357[_0x488dcf(0x10e)]),_0x1f7de7=await components_api_1['ComponentsApi'][_0x488dcf(0x124)](_0x271555,_0x500481[_0x488dcf(0x11d)](({ParentId:_0x36e490})=>_0x36e490))[_0x488dcf(0x129)](_0x166123=>components_api_1[_0x488dcf(0x114)][_0x488dcf(0x126)](_0x166123)),_0x3e6a94=await retrieveTestClasses(_0x271555,_0x500481,_0x1f7de7),_0x276514={'ParentId':_0x3d2357[_0x488dcf(0x109)],'Name':ATTACHMENT_NAME,'Description':ATTACHMENT_DESCRIPTION,'Body':Buffer[_0x488dcf(0x128)](_0x3e6a94['join']('\x0a'))[_0x488dcf(0x105)](_0x488dcf(0x107))};await _0x271555[_0x488dcf(0x12a)](_0x488dcf(0x122)+constants_1[_0x488dcf(0x10f)]+_0x488dcf(0xfe),_0x276514);}exports[a85_0x271f15(0x11b)]=fetchTestClasses;async function retrieveTestClasses(_0x4b609e,_0xc5f725,_0x294074){const _0x2e4ea6=a85_0x271f15,_0x1db0a3=[],_0x482fd6=await(0x0,fetch_attachments_1['retrieveAttachments'])(_0xc5f725,_0x4b609e),_0x2c729a=_0x482fd6[_0x2e4ea6(0x11d)](_0x5f451b=>_0x5f451b['id']);return await getTestClassesNames(_0x4b609e,_0x2c729a,_0x294074,_0xc5f725)[_0x2e4ea6(0x129)](_0x3ab421=>{const _0x4e345a=_0x2e4ea6;_0x1db0a3[_0x4e345a(0x102)](..._0x3ab421);}),_0x1db0a3;}async function getTestClassesNames(_0x12d024,_0x44bb6d,_0x5de43d,_0x537f9a){const _0x4cceb9=a85_0x271f15,_0x27b8da=await(0x0,fetch_attachments_1[_0x4cceb9(0x117)])(_0x12d024,BINARY_FIELDS,_0x44bb6d),_0xe45221=[],_0x1aae30=_0x537f9a['reduce']((_0x23bcd8,_0x5b0d37)=>{const _0x276c87=_0x4cceb9;var _0x1d9a02;const _0x26f2e4=(_0x1d9a02=_0x5de43d[_0x276c87(0x113)](_0x1b11b2=>_0x1b11b2['Id']===_0x5b0d37[_0x276c87(0x104)]))===null||_0x1d9a02===void 0x0?void 0x0:_0x1d9a02[_0x276c87(0x101)][_0x276c87(0x10d)];if(!_0x26f2e4)throw new Error(_0x276c87(0x123));return{..._0x23bcd8,[_0x5b0d37['Id']]:_0x26f2e4};},{});for(const _0x56a5b0 of _0x27b8da){const _0x4f6916=await zip_1[_0x4cceb9(0x10c)][_0x4cceb9(0x120)](_0x56a5b0['values'][_0x4cceb9(0x10a)]);for(const _0x1f4f43 of Object[_0x4cceb9(0xfb)](_0x4f6916[_0x4cceb9(0x118)])){if(!_0x4f6916[_0x4cceb9(0x118)][_0x1f4f43][_0x4cceb9(0x112)]){const _0x125dd0=await _0x4f6916[_0x4cceb9(0x118)][_0x1f4f43]['async'](_0x4cceb9(0x11e)),_0x3fcade=new RegExp(_0x4cceb9(0x121),'i');if(_0x3fcade[_0x4cceb9(0x115)](_0x125dd0)){const _0x730fcd=_0x1aae30[_0x56a5b0['id']];if(!_0x730fcd)throw new Error(_0x4cceb9(0x123));_0xe45221['push'](_0x730fcd);}}}}return _0xe45221;}