const a103_0x3be184=a103_0x54b2;(function(_0x47d9ca,_0x382b36){const _0x1cd7d2=a103_0x54b2,_0x2871b1=_0x47d9ca();while(!![]){try{const _0x7dc6f9=-parseInt(_0x1cd7d2(0x109))/0x1*(parseInt(_0x1cd7d2(0xfe))/0x2)+-parseInt(_0x1cd7d2(0xff))/0x3*(-parseInt(_0x1cd7d2(0x105))/0x4)+parseInt(_0x1cd7d2(0x104))/0x5*(parseInt(_0x1cd7d2(0x113))/0x6)+parseInt(_0x1cd7d2(0xe9))/0x7*(parseInt(_0x1cd7d2(0x107))/0x8)+parseInt(_0x1cd7d2(0xed))/0x9*(parseInt(_0x1cd7d2(0x10c))/0xa)+-parseInt(_0x1cd7d2(0x10e))/0xb*(parseInt(_0x1cd7d2(0x117))/0xc)+-parseInt(_0x1cd7d2(0xf9))/0xd;if(_0x7dc6f9===_0x382b36)break;else _0x2871b1['push'](_0x2871b1['shift']());}catch(_0x34069f){_0x2871b1['push'](_0x2871b1['shift']());}}}(a103_0x207c,0x9a1c3));const a103_0x5b0853=(function(){let _0xfd8c78=!![];return function(_0x3c3cd4,_0x8dcc6){const _0x5bb777=_0xfd8c78?function(){if(_0x8dcc6){const _0x7a9efe=_0x8dcc6['apply'](_0x3c3cd4,arguments);return _0x8dcc6=null,_0x7a9efe;}}:function(){};return _0xfd8c78=![],_0x5bb777;};}()),a103_0x21eb1f=a103_0x5b0853(this,function(){const _0x5dda9a=a103_0x54b2;return a103_0x21eb1f['toString']()[_0x5dda9a(0xec)](_0x5dda9a(0x101))['toString']()[_0x5dda9a(0x112)](a103_0x21eb1f)[_0x5dda9a(0xec)](_0x5dda9a(0x101));});a103_0x21eb1f();'use strict';function a103_0x54b2(_0x5dbb00,_0x1726d7){const _0x4c9246=a103_0x207c();return a103_0x54b2=function(_0x21eb1f,_0x5b0853){_0x21eb1f=_0x21eb1f-0xe5;let _0x207cc6=_0x4c9246[_0x21eb1f];return _0x207cc6;},a103_0x54b2(_0x5dbb00,_0x1726d7);}Object[a103_0x3be184(0x114)](exports,a103_0x3be184(0xef),{'value':!![]}),exports[a103_0x3be184(0xf8)]=void 0x0;const zip_1=require(a103_0x3be184(0xea)),components_api_1=require('../utils/components-api'),fetch_attachments_1=require(a103_0x3be184(0xfc)),BINARY_FIELDS=[a103_0x3be184(0x116)],ATTACHMENT_NAME='TEST\x20CLASSES',ATTACHMENT_DESCRIPTION=a103_0x3be184(0xf6);async function fetchTestClasses(_0x16cd78,_0x559d47){const _0x58986a=a103_0x3be184,_0x3bef1f=await(0x0,fetch_attachments_1['fetchAttachmentsDetailsById'])(_0x559d47,_0x16cd78[_0x58986a(0x10f)]),_0x18cf59=await components_api_1[_0x58986a(0xe5)]['fetchComponentsDetailsByComponentsHistory'](_0x559d47,_0x3bef1f[_0x58986a(0xe6)](({ParentId:_0x921b80})=>_0x921b80),_0x16cd78['apiVersion'])['then'](_0x13b200=>components_api_1[_0x58986a(0xe5)]['removeNamespacePrefix'](_0x13b200)),_0x4ae98d=await retrieveTestClasses(_0x559d47,_0x3bef1f,_0x18cf59),_0x4bc5ef={'ParentId':_0x16cd78[_0x58986a(0x115)],'Name':ATTACHMENT_NAME,'Description':ATTACHMENT_DESCRIPTION,'Body':Buffer['from'](_0x4ae98d[_0x58986a(0xee)]('\x0a'))[_0x58986a(0xf2)](_0x58986a(0xeb))};await _0x559d47[_0x58986a(0xfb)](_0x58986a(0xf3)+_0x16cd78[_0x58986a(0x102)]+_0x58986a(0xfa),_0x4bc5ef);}exports[a103_0x3be184(0xf8)]=fetchTestClasses;function a103_0x207c(){const _0x5d13ef=['search','634005kHCzfB','join','__esModule','Component_Name__c','values','toString','/services/data/v','string','ParentId','TEST\x20CLASSES','fetchAttachments','fetchTestClasses','33484386yCaEpU','/sobjects/Attachment','post','../../shared/utils/fetch-attachments','push','241816cUiQxk','33fUFEEc','find','(((.+)+)+)+$','apiVersion','dir','5SlkLhH','429428vunMfe','files','71144MrpvNw','reduce','1FwMqdb','unzip','keys','160YRngCB','Component__r','11RTAusy','attachmentsId','No\x20component\x20by\x20attachment\x20id','async','constructor','4042806dawPro','defineProperty','metadataLogId','Body','5025372gaidVN','@istest','Zip','ComponentsApi','map','retrieveAttachments','replace','602osvdyL','../../git/parsers/utils/zip','base64'];a103_0x207c=function(){return _0x5d13ef;};return a103_0x207c();}async function retrieveTestClasses(_0x543796,_0x28984c,_0x52ce1b){const _0x5afa6c=a103_0x3be184,_0x4fbea5=[],_0x56191f=await(0x0,fetch_attachments_1[_0x5afa6c(0xe7)])(_0x28984c,_0x543796),_0x3f508f=_0x56191f[_0x5afa6c(0xe6)](_0x283f5=>_0x283f5['id']);return await getTestClassesNames(_0x543796,_0x3f508f,_0x52ce1b,_0x28984c)['then'](_0x46f105=>{_0x4fbea5['push'](..._0x46f105);}),_0x4fbea5;}async function getTestClassesNames(_0x288f94,_0x3a43ed,_0xd950bc,_0x554bd3){const _0x2c4fa1=a103_0x3be184,_0x32fb0=await(0x0,fetch_attachments_1[_0x2c4fa1(0xf7)])(_0x288f94,BINARY_FIELDS,_0x3a43ed),_0xc3c97b=[],_0x4ee618=_0x554bd3[_0x2c4fa1(0x108)]((_0x30e693,_0x2f64b5)=>{const _0x3f8f27=_0x2c4fa1;var _0x52ad3;const _0xa60148=(_0x52ad3=_0xd950bc[_0x3f8f27(0x100)](_0x5c059d=>_0x5c059d['Id']===_0x2f64b5[_0x3f8f27(0xf5)]))===null||_0x52ad3===void 0x0?void 0x0:_0x52ad3[_0x3f8f27(0x10d)][_0x3f8f27(0xf0)];if(!_0xa60148)throw new Error(_0x3f8f27(0x110));return{..._0x30e693,[_0x2f64b5['Id']]:_0xa60148};},{});for(const _0x11d18c of _0x32fb0){const _0x1f99df=await zip_1[_0x2c4fa1(0x119)][_0x2c4fa1(0x10a)](_0x11d18c[_0x2c4fa1(0xf1)][_0x2c4fa1(0x116)]);for(const _0xd87115 of Object[_0x2c4fa1(0x10b)](_0x1f99df[_0x2c4fa1(0x106)])){if(!_0x1f99df['files'][_0xd87115][_0x2c4fa1(0x103)]){let _0x4f20af=await _0x1f99df[_0x2c4fa1(0x106)][_0xd87115][_0x2c4fa1(0x111)](_0x2c4fa1(0xf4));_0x4f20af=_0x4f20af[_0x2c4fa1(0xe8)](/\/\/.*|\/\*[\s\S]*?\*\//g,'');const _0x1835c3=new RegExp(_0x2c4fa1(0x118),'i');if(_0x1835c3['test'](_0x4f20af)){const _0x159b7b=_0x4ee618[_0x11d18c['id']];if(!_0x159b7b)throw new Error(_0x2c4fa1(0x110));_0xc3c97b[_0x2c4fa1(0xfd)](_0x159b7b);}}}}return _0xc3c97b;}