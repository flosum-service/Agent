const a102_0x57efe9=a102_0x50bb;function a102_0x50bb(_0x22c285,_0x36bcd1){const _0x47be8a=a102_0x4f10();return a102_0x50bb=function(_0x2cc2c0,_0x21d1e5){_0x2cc2c0=_0x2cc2c0-0xd0;let _0x4f1049=_0x47be8a[_0x2cc2c0];return _0x4f1049;},a102_0x50bb(_0x22c285,_0x36bcd1);}(function(_0x5768fb,_0x28336e){const _0x20b2c6=a102_0x50bb,_0x9707dd=_0x5768fb();while(!![]){try{const _0x93a7cf=-parseInt(_0x20b2c6(0xd7))/0x1*(-parseInt(_0x20b2c6(0x110))/0x2)+parseInt(_0x20b2c6(0x101))/0x3+-parseInt(_0x20b2c6(0xe9))/0x4*(parseInt(_0x20b2c6(0xfb))/0x5)+parseInt(_0x20b2c6(0x100))/0x6*(-parseInt(_0x20b2c6(0xe6))/0x7)+-parseInt(_0x20b2c6(0xee))/0x8*(parseInt(_0x20b2c6(0x103))/0x9)+parseInt(_0x20b2c6(0xd5))/0xa*(-parseInt(_0x20b2c6(0x10a))/0xb)+-parseInt(_0x20b2c6(0xf2))/0xc*(-parseInt(_0x20b2c6(0xf3))/0xd);if(_0x93a7cf===_0x28336e)break;else _0x9707dd['push'](_0x9707dd['shift']());}catch(_0xd99c5d){_0x9707dd['push'](_0x9707dd['shift']());}}}(a102_0x4f10,0xa8f33));const a102_0x21d1e5=(function(){let _0x36bc73=!![];return function(_0x508fb4,_0x51019c){const _0x184193=_0x36bc73?function(){const _0x45ea57=a102_0x50bb;if(_0x51019c){const _0x154a26=_0x51019c[_0x45ea57(0x10d)](_0x508fb4,arguments);return _0x51019c=null,_0x154a26;}}:function(){};return _0x36bc73=![],_0x184193;};}()),a102_0x2cc2c0=a102_0x21d1e5(this,function(){const _0x26208a=a102_0x50bb;return a102_0x2cc2c0['toString']()['search'](_0x26208a(0xed))[_0x26208a(0xfa)]()[_0x26208a(0xe1)](a102_0x2cc2c0)[_0x26208a(0x10b)]('(((.+)+)+)+$');});a102_0x2cc2c0();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x483d05){const _0x4c6751=a102_0x50bb;return _0x483d05&&_0x483d05[_0x4c6751(0xdc)]?_0x483d05:{'default':_0x483d05};};Object['defineProperty'](exports,a102_0x57efe9(0xdc),{'value':!![]}),exports[a102_0x57efe9(0xe0)]=void 0x0;const promises_1=require(a102_0x57efe9(0xde)),sfdx_utils_1=require(a102_0x57efe9(0xd4)),sfdx_utils_2=require(a102_0x57efe9(0xe5)),auth_utils_1=require('../utils/auth.utils'),path_1=__importDefault(require(a102_0x57efe9(0xdf))),fs_internal_1=require(a102_0x57efe9(0xff)),uuid_1=require('uuid'),adm_zip_1=__importDefault(require(a102_0x57efe9(0xdb))),fetch_attachments_1=require(a102_0x57efe9(0x10f)),DESTRUCTIVE_CHANGES_POST_NAME=a102_0x57efe9(0xe7),DEPLOY_ZIP_NAME=a102_0x57efe9(0xf4);async function deployComponents({attachmentId:_0xf3695e,credentials:_0x26aa49,postDestructiveAttachmentId:_0x4a5838,deployOptions:_0x5ee4e3},_0x4ba1fe){const _0x191020=a102_0x57efe9,_0x31a849=(0x0,uuid_1['v4'])();try{const _0xe41368=_0xf3695e[_0x191020(0xf8)](','),_0x43dabf=new adm_zip_1[(_0x191020(0x10c))]();for(const _0x44f3bc of _0xe41368){await(0x0,fetch_attachments_1[_0x191020(0xd8)])(_0x4ba1fe,_0x44f3bc)[_0x191020(0xfe)](_0x170c85=>{const _0x164162=_0x191020;var _0x5ab0ed;const _0x280b7d=new adm_zip_1[(_0x164162(0x10c))](_0x170c85);for(const _0x501761 of _0x280b7d[_0x164162(0xe2)]()){_0x43dabf[_0x164162(0xfd)](_0x501761[_0x164162(0x106)],(_0x5ab0ed=_0x280b7d[_0x164162(0xef)](_0x501761[_0x164162(0x106)]))===null||_0x5ab0ed===void 0x0?void 0x0:_0x5ab0ed[_0x164162(0x10e)]());}});}!await fs_internal_1['FS'][_0x191020(0x111)](_0x191020(0x105)+_0x31a849)&&await(0x0,promises_1['mkdir'])(_0x191020(0x105)+_0x31a849,{'recursive':!![]});await sfdx_utils_2[_0x191020(0xe3)][_0x191020(0xd0)](_0xf3695e,_0x31a849),await sfdx_utils_2['SFDXUtils']['setInstanceUrl'](_0x26aa49[_0x191020(0xd6)],_0xf3695e,_0x31a849);if(_0x4a5838){const _0xdc7fbf=await(0x0,fetch_attachments_1['fetchAttachmentBody'])(_0x4ba1fe,_0x4a5838);_0x43dabf['addFile'](DESTRUCTIVE_CHANGES_POST_NAME,_0xdc7fbf),await(0x0,promises_1['writeFile'])(process[_0x191020(0xd3)]()+_0x191020(0xd2)+_0x31a849+'/'+DEPLOY_ZIP_NAME,_0x43dabf[_0x191020(0xec)]());}else await(0x0,promises_1[_0x191020(0x108)])(process[_0x191020(0xd3)]()+_0x191020(0xd2)+_0x31a849+'/'+DEPLOY_ZIP_NAME,_0x43dabf[_0x191020(0xec)]());const _0x47e4ce=await deploy(_0x26aa49,_0x5ee4e3,_0x31a849);return JSON[_0x191020(0x109)](_0x47e4ce)[_0x191020(0xeb)]['id'];}catch(_0x1c34a9){throw _0x1c34a9;}finally{await(0x0,promises_1['rm'])(path_1[_0x191020(0x10c)]['join'](process['cwd'](),_0x191020(0xd1),_0x31a849),{'recursive':!![]});}}function a102_0x4f10(){const _0x1cd0b6=['652081IAwKbw','fetchAttachmentBody','AuthUtils','purgeOnDelete','adm-zip','__esModule','SFDX','fs/promises','path','deployComponents','constructor','getEntries','SFDXUtils','runTests','../utils/sfdx.utils','926135ZCsEhW','destructiveChangesPost.xml','\x20-l\x20','1665724xKdsQQ','testLevel','result','toBuffer','(((.+)+)+)+$','8592qQgpVW','getEntry','clientSecret','join','11999796gxUaVm','26SxMdyT','deploy.zip','clientId','\x20-c','isAuthorizationError','split','catch','toString','10wAxjLy','\x20-g','addFile','then','../../git/internal/fs.internal','42WOZWrU','2688381OzYlLW','accessToken','8289JezTWT','refreshToken','.temp/','entryName','ignoreWarnings','writeFile','parse','45694rUBHKj','search','default','apply','getData','../../shared/utils/fetch-attachments','2ZmWQmk','exists','createSFDXProject','.temp','/.temp/','cwd','../../git/salesforce/utils/sfdx.utils','260eKYCmv','instanceUrl'];a102_0x4f10=function(){return _0x1cd0b6;};return a102_0x4f10();}exports[a102_0x57efe9(0xe0)]=deployComponents;function deploy(_0x943c55,_0x227a1d,_0x8618ad){const _0x81fc0a=a102_0x57efe9,_0x4d471a=path_1[_0x81fc0a(0x10c)][_0x81fc0a(0xf1)](process['cwd'](),_0x81fc0a(0xd1),_0x8618ad,DEPLOY_ZIP_NAME);let _0x24bc7f='-f\x20'+_0x4d471a+'\x20-u\x20'+_0x943c55['accessToken'];return _0x24bc7f+=_0x227a1d['checkOnly']?_0x81fc0a(0xf6):'',_0x24bc7f+=_0x227a1d[_0x81fc0a(0xea)]?_0x81fc0a(0xe8)+_0x227a1d[_0x81fc0a(0xea)]:'',_0x24bc7f+=_0x227a1d['runTests']?'\x20-r\x20'+_0x227a1d[_0x81fc0a(0xe4)]:'',_0x24bc7f+=_0x227a1d[_0x81fc0a(0x107)]?_0x81fc0a(0xfc):'',_0x24bc7f+=_0x227a1d[_0x81fc0a(0xda)]?'\x20-purgeondelete':'',sfdx_utils_1[_0x81fc0a(0xdd)]['spawn']('force:mdapi:deploy\x20--json\x20'+_0x24bc7f)[_0x81fc0a(0xf9)](async _0xea8848=>{const _0x21c474=_0x81fc0a;if(sfdx_utils_2[_0x21c474(0xe3)][_0x21c474(0xf7)](_0xea8848))return _0x943c55[_0x21c474(0x102)]=await auth_utils_1[_0x21c474(0xd9)]['updateAccessToken'](_0x943c55[_0x21c474(0xd6)],_0x943c55[_0x21c474(0x104)],_0x943c55[_0x21c474(0xf5)],_0x943c55[_0x21c474(0xf0)]),deploy(_0x943c55,_0x227a1d,_0x8618ad);throw _0xea8848;});}