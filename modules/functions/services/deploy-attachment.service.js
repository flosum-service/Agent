const a102_0x495bd9=a102_0x5376;function a102_0x4ca2(){const _0x5b9b55=['SFDXUtils','destructiveChangesPost.xml','__esModule','15LuwKdw','defineProperty','2917286yyITxE','/.temp/','uuid','exists','deploy.zip','3IRiJqr','(((.+)+)+)+$','default','join','__importDefault','7604002vVMcye','writeFile','\x20-l\x20','runTests','addFile','purgeOnDelete','spawn','search','createSFDXProject','instanceUrl','setInstanceUrl','624336UYlSaj','updateAccessToken','apply','.temp','\x20-r\x20','3493712yYGopT','6805728ihvmkt','\x20-g','../utils/sfdx.utils','AuthUtils','../../shared/utils/fetch-attachments','clientId','../../git/salesforce/utils/sfdx.utils','accessToken','cwd','isAuthorizationError','adm-zip','.temp/','testLevel','\x20-c','toString','../utils/auth.utils','then','SFDX','refreshToken','mkdir','../../git/internal/fs.internal','deployComponents','entryName','parse','463090lkYigK','723312bMjvLr'];a102_0x4ca2=function(){return _0x5b9b55;};return a102_0x4ca2();}(function(_0x49ab6b,_0x29a4a){const _0x2cb132=a102_0x5376,_0x4dcc59=_0x49ab6b();while(!![]){try{const _0x1c4430=parseInt(_0x2cb132(0x99))/0x1+parseInt(_0x2cb132(0xa0))/0x2*(-parseInt(_0x2cb132(0xa5))/0x3)+-parseInt(_0x2cb132(0xb5))/0x4*(parseInt(_0x2cb132(0x9e))/0x5)+parseInt(_0x2cb132(0x9a))/0x6+parseInt(_0x2cb132(0xaa))/0x7+parseInt(_0x2cb132(0xba))/0x8+parseInt(_0x2cb132(0xbb))/0x9;if(_0x1c4430===_0x29a4a)break;else _0x4dcc59['push'](_0x4dcc59['shift']());}catch(_0x22e17e){_0x4dcc59['push'](_0x4dcc59['shift']());}}}(a102_0x4ca2,0xe4803));const a102_0x1f37e2=(function(){let _0x273315=!![];return function(_0x250940,_0x5b052c){const _0x5997f8=_0x273315?function(){const _0x42452a=a102_0x5376;if(_0x5b052c){const _0x3f9cb0=_0x5b052c[_0x42452a(0xb7)](_0x250940,arguments);return _0x5b052c=null,_0x3f9cb0;}}:function(){};return _0x273315=![],_0x5997f8;};}()),a102_0x145546=a102_0x1f37e2(this,function(){const _0x50e4f7=a102_0x5376;return a102_0x145546[_0x50e4f7(0xc9)]()[_0x50e4f7(0xb1)](_0x50e4f7(0xa6))['toString']()['constructor'](a102_0x145546)[_0x50e4f7(0xb1)]('(((.+)+)+)+$');});a102_0x145546();'use strict';var __importDefault=this&&this[a102_0x495bd9(0xa9)]||function(_0x2f46cc){return _0x2f46cc&&_0x2f46cc['__esModule']?_0x2f46cc:{'default':_0x2f46cc};};Object[a102_0x495bd9(0x9f)](exports,a102_0x495bd9(0x9d),{'value':!![]}),exports[a102_0x495bd9(0x96)]=void 0x0;const promises_1=require('fs/promises'),sfdx_utils_1=require(a102_0x495bd9(0xc1)),sfdx_utils_2=require(a102_0x495bd9(0xbd)),auth_utils_1=require(a102_0x495bd9(0xca)),path_1=__importDefault(require('path')),fs_internal_1=require(a102_0x495bd9(0x95)),uuid_1=require(a102_0x495bd9(0xa2)),adm_zip_1=__importDefault(require(a102_0x495bd9(0xc5))),fetch_attachments_1=require(a102_0x495bd9(0xbf)),DESTRUCTIVE_CHANGES_POST_NAME=a102_0x495bd9(0x9c),DEPLOY_ZIP_NAME=a102_0x495bd9(0xa4);function a102_0x5376(_0x5caa55,_0x36c990){const _0x560f37=a102_0x4ca2();return a102_0x5376=function(_0x145546,_0x1f37e2){_0x145546=_0x145546-0x94;let _0x4ca29b=_0x560f37[_0x145546];return _0x4ca29b;},a102_0x5376(_0x5caa55,_0x36c990);}async function deployComponents({attachmentId:_0x4e4165,credentials:_0x3a968c,postDestructiveAttachmentId:_0x3a459e,deployOptions:_0x575474},_0x344523){const _0x2d0de0=a102_0x495bd9,_0x5a37e8=(0x0,uuid_1['v4'])();try{const _0x2765bf=_0x4e4165['split'](','),_0x2bbba5=new adm_zip_1[(_0x2d0de0(0xa7))]();for(const _0x3944a0 of _0x2765bf){await(0x0,fetch_attachments_1['fetchAttachmentBody'])(_0x344523,_0x3944a0)[_0x2d0de0(0xcb)](_0x55c21e=>{const _0x4df842=_0x2d0de0;var _0x43ee9a;const _0xf53f66=new adm_zip_1['default'](_0x55c21e);for(const _0x516346 of _0xf53f66['getEntries']()){_0x2bbba5[_0x4df842(0xae)](_0x516346[_0x4df842(0x97)],(_0x43ee9a=_0xf53f66['getEntry'](_0x516346['entryName']))===null||_0x43ee9a===void 0x0?void 0x0:_0x43ee9a['getData']());}});}!await fs_internal_1['FS'][_0x2d0de0(0xa3)](_0x2d0de0(0xc6)+_0x5a37e8)&&await(0x0,promises_1[_0x2d0de0(0x94)])(_0x2d0de0(0xc6)+_0x5a37e8,{'recursive':!![]});await sfdx_utils_2['SFDXUtils'][_0x2d0de0(0xb2)](_0x4e4165,_0x5a37e8),await sfdx_utils_2[_0x2d0de0(0x9b)][_0x2d0de0(0xb4)](_0x3a968c[_0x2d0de0(0xb3)],_0x4e4165,_0x5a37e8);if(_0x3a459e){const _0x5c0391=await(0x0,fetch_attachments_1['fetchAttachmentBody'])(_0x344523,_0x3a459e);_0x2bbba5[_0x2d0de0(0xae)](DESTRUCTIVE_CHANGES_POST_NAME,_0x5c0391),await(0x0,promises_1[_0x2d0de0(0xab)])(process[_0x2d0de0(0xc3)]()+_0x2d0de0(0xa1)+_0x5a37e8+'/'+DEPLOY_ZIP_NAME,_0x2bbba5['toBuffer']());}else await(0x0,promises_1[_0x2d0de0(0xab)])(process[_0x2d0de0(0xc3)]()+_0x2d0de0(0xa1)+_0x5a37e8+'/'+DEPLOY_ZIP_NAME,_0x2bbba5['toBuffer']());const _0x21bece=await deploy(_0x3a968c,_0x575474,_0x5a37e8);return JSON[_0x2d0de0(0x98)](_0x21bece)['result']['id'];}catch(_0x5a03e2){throw _0x5a03e2;}finally{await(0x0,promises_1['rm'])(path_1[_0x2d0de0(0xa7)][_0x2d0de0(0xa8)](process[_0x2d0de0(0xc3)](),_0x2d0de0(0xb8),_0x5a37e8),{'recursive':!![]});}}exports['deployComponents']=deployComponents;function deploy(_0x2e65e7,_0x14df13,_0x3c62ca){const _0x1d8fea=a102_0x495bd9,_0x63ad10=path_1['default']['join'](process[_0x1d8fea(0xc3)](),_0x1d8fea(0xb8),_0x3c62ca,DEPLOY_ZIP_NAME);let _0x36c01c='-f\x20'+_0x63ad10+'\x20-u\x20'+_0x2e65e7[_0x1d8fea(0xc2)];return _0x36c01c+=_0x14df13['checkOnly']?_0x1d8fea(0xc8):'',_0x36c01c+=_0x14df13[_0x1d8fea(0xc7)]?_0x1d8fea(0xac)+_0x14df13['testLevel']:'',_0x36c01c+=_0x14df13[_0x1d8fea(0xad)]?_0x1d8fea(0xb9)+_0x14df13['runTests']:'',_0x36c01c+=_0x14df13['ignoreWarnings']?_0x1d8fea(0xbc):'',_0x36c01c+=_0x14df13[_0x1d8fea(0xaf)]?'\x20-purgeondelete':'',sfdx_utils_1[_0x1d8fea(0xcc)][_0x1d8fea(0xb0)]('force:mdapi:deploy\x20--json\x20'+_0x36c01c)['catch'](async _0x307380=>{const _0x5acc9d=_0x1d8fea;if(sfdx_utils_2[_0x5acc9d(0x9b)][_0x5acc9d(0xc4)](_0x307380))return _0x2e65e7[_0x5acc9d(0xc2)]=await auth_utils_1[_0x5acc9d(0xbe)][_0x5acc9d(0xb6)](_0x2e65e7[_0x5acc9d(0xb3)],_0x2e65e7[_0x5acc9d(0xcd)],_0x2e65e7[_0x5acc9d(0xc0)],_0x2e65e7['clientSecret']),deploy(_0x2e65e7,_0x14df13,_0x3c62ca);throw _0x307380;});}