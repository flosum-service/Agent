const a105_0x13e7d7=a105_0x1b64;function a105_0x1b64(_0x113598,_0x25f36b){const _0x2bbb08=a105_0x4c92();return a105_0x1b64=function(_0x46d4d2,_0x3d865e){_0x46d4d2=_0x46d4d2-0xb7;let _0x4c924a=_0x2bbb08[_0x46d4d2];return _0x4c924a;},a105_0x1b64(_0x113598,_0x25f36b);}function a105_0x4c92(){const _0xb0570d=['MAX_ZIP_SIZE','1812180QKbTfF','readFile','__importDefault','isAuthorizationError','defineProperty','8QdQxxa','retrieveZip','/sobjects/Attachment','SFDXUtils','../utils/sfdx.utils','length','77QtJlzF','1574451wVCnag','apply','updateAccessToken','uuid','getEntry','-u\x20','2709732GKEzFt','post','--jobid\x20','force:mdapi:retrieve:report\x20','1863995JtxlEU','BACKUP\x20ZIP','12xAkHpf','clientId','search','catch','3wbVXyl','169gHtKxf','ComponentsApi','src','default','refreshToken','(((.+)+)+)+$','path','SFDX','../../git/internal/fs.internal','2397829PeFEYk','461930yJnSok','Body','getEntries','adm-zip','splitZip','--json\x20','exists','../utils/auth.utils','accessToken','/services/data/v','toBuffer','../../git/salesforce/utils/sfdx.utils','mkdir','base64','spawn','__esModule','join','instanceUrl','clientSecret','.temp/','constructor','2iFekad','setInstanceUrl','getData','691870bBvUAl','fs/promises'];a105_0x4c92=function(){return _0xb0570d;};return a105_0x4c92();}(function(_0x30600d,_0x2311df){const _0x2d813b=a105_0x1b64,_0x284251=_0x30600d();while(!![]){try{const _0x285771=-parseInt(_0x2d813b(0xee))/0x1*(parseInt(_0x2d813b(0xeb))/0x2)+-parseInt(_0x2d813b(0xcb))/0x3*(parseInt(_0x2d813b(0xc1))/0x4)+-parseInt(_0x2d813b(0xc5))/0x5+parseInt(_0x2d813b(0xc7))/0x6*(parseInt(_0x2d813b(0xd5))/0x7)+-parseInt(_0x2d813b(0xf6))/0x8*(parseInt(_0x2d813b(0xbb))/0x9)+parseInt(_0x2d813b(0xd6))/0xa*(-parseInt(_0x2d813b(0xba))/0xb)+-parseInt(_0x2d813b(0xf1))/0xc*(-parseInt(_0x2d813b(0xcc))/0xd);if(_0x285771===_0x2311df)break;else _0x284251['push'](_0x284251['shift']());}catch(_0x4802f5){_0x284251['push'](_0x284251['shift']());}}}(a105_0x4c92,0x63959));const a105_0x3d865e=(function(){let _0x39cbb8=!![];return function(_0x4f4847,_0x4c12c6){const _0x2f4e04=_0x39cbb8?function(){const _0x235c31=a105_0x1b64;if(_0x4c12c6){const _0xefb3d3=_0x4c12c6[_0x235c31(0xbc)](_0x4f4847,arguments);return _0x4c12c6=null,_0xefb3d3;}}:function(){};return _0x39cbb8=![],_0x2f4e04;};}()),a105_0x46d4d2=a105_0x3d865e(this,function(){const _0x3adf5f=a105_0x1b64;return a105_0x46d4d2['toString']()['search'](_0x3adf5f(0xd1))['toString']()[_0x3adf5f(0xea)](a105_0x46d4d2)[_0x3adf5f(0xc9)](_0x3adf5f(0xd1));});a105_0x46d4d2();'use strict';var __importDefault=this&&this[a105_0x13e7d7(0xf3)]||function(_0xb6e734){const _0x4622b8=a105_0x13e7d7;return _0xb6e734&&_0xb6e734[_0x4622b8(0xe5)]?_0xb6e734:{'default':_0xb6e734};};Object[a105_0x13e7d7(0xf5)](exports,a105_0x13e7d7(0xe5),{'value':!![]}),exports[a105_0x13e7d7(0xf7)]=void 0x0;const promises_1=require(a105_0x13e7d7(0xef)),sfdx_utils_1=require(a105_0x13e7d7(0xe1)),fs_internal_1=require(a105_0x13e7d7(0xd4)),sfdx_utils_2=require(a105_0x13e7d7(0xb8)),auth_utils_1=require(a105_0x13e7d7(0xdd)),adm_zip_1=__importDefault(require(a105_0x13e7d7(0xd9))),uuid_1=require(a105_0x13e7d7(0xbe)),components_api_1=require('../utils/components-api'),path_1=require(a105_0x13e7d7(0xd2));async function retrieveZip({backupAsyncId:_0x1ee86e,credentials:_0x63b301,metadataLogId:_0x21a197,apiVersion:_0x147175},_0x2875e1){const _0x3f7225=a105_0x13e7d7;var _0x3123a2;const _0x347a8b=(0x0,uuid_1['v4'])();try{!await fs_internal_1['FS'][_0x3f7225(0xdc)](_0x3f7225(0xe9)+_0x347a8b)&&await(0x0,promises_1[_0x3f7225(0xe2)])(_0x3f7225(0xe9)+_0x347a8b,{'recursive':!![]});await sfdx_utils_2['SFDXUtils']['createSFDXProject'](_0x1ee86e,_0x347a8b),await sfdx_utils_2[_0x3f7225(0xb7)][_0x3f7225(0xec)](_0x63b301[_0x3f7225(0xe7)],_0x1ee86e,_0x347a8b),await retrieveReport(_0x1ee86e,_0x63b301,_0x347a8b);const _0x54d96a=new adm_zip_1[(_0x3f7225(0xcf))](await(0x0,promises_1[_0x3f7225(0xf2)])(_0x3f7225(0xe9)+_0x347a8b+'/'+_0x1ee86e+'/unpackaged.zip')),_0x1e38e4=new adm_zip_1[(_0x3f7225(0xcf))]();for(const {entryName:_0x947ae8}of _0x54d96a[_0x3f7225(0xd8)]()){const _0x6c771f=(_0x3123a2=_0x54d96a[_0x3f7225(0xbf)](_0x947ae8))===null||_0x3123a2===void 0x0?void 0x0:_0x3123a2[_0x3f7225(0xed)]();_0x1e38e4['addFile']((0x0,path_1[_0x3f7225(0xe6)])(_0x3f7225(0xce),_0x947ae8),_0x6c771f);}const _0xd00654=_0x1e38e4[_0x3f7225(0xe0)]()['toString'](_0x3f7225(0xe3))[_0x3f7225(0xb9)];if(_0xd00654>=components_api_1[_0x3f7225(0xf0)]){const [_0x1391a6,_0x21438e]=await components_api_1[_0x3f7225(0xcd)][_0x3f7225(0xda)](_0x1e38e4,_0xd00654),_0x2e2fa8={'ParentId':_0x21a197,'Name':_0x3f7225(0xc6),'Description':_0x3f7225(0xc6),'Body':_0x1391a6['toBuffer']()['toString'](_0x3f7225(0xe3))};await _0x2875e1[_0x3f7225(0xc2)](_0x3f7225(0xdf)+_0x147175+_0x3f7225(0xf8),_0x2e2fa8),_0x2e2fa8[_0x3f7225(0xd7)]=_0x21438e['toBuffer']()['toString']('base64'),await _0x2875e1['post'](_0x3f7225(0xdf)+_0x147175+_0x3f7225(0xf8),_0x2e2fa8);}else{const _0x1203c7={'ParentId':_0x21a197,'Name':'BACKUP\x20ZIP','Description':_0x3f7225(0xc6),'Body':_0x1e38e4[_0x3f7225(0xe0)]()['toString'](_0x3f7225(0xe3))};await _0x2875e1[_0x3f7225(0xc2)](_0x3f7225(0xdf)+_0x147175+'/sobjects/Attachment',_0x1203c7);}}catch(_0x3bdfdf){throw _0x3bdfdf;}finally{await(0x0,promises_1['rm'])(_0x3f7225(0xe9)+_0x347a8b+'/'+_0x1ee86e,{'recursive':!![]});}}exports[a105_0x13e7d7(0xf7)]=retrieveZip;async function retrieveReport(_0x493680,_0x308665,_0x24ac25){const _0x4c2389=a105_0x13e7d7,_0x570b78=_0x4c2389(0xc4)+_0x4c2389(0xdb)+(_0x4c2389(0xc3)+_0x493680+'\x20')+('-r\x20.temp/'+_0x24ac25+'/'+_0x493680+'\x20')+(_0x4c2389(0xc0)+_0x308665[_0x4c2389(0xde)]);await sfdx_utils_1[_0x4c2389(0xd3)][_0x4c2389(0xe4)](_0x570b78)[_0x4c2389(0xca)](async _0x419787=>{const _0x270ad5=_0x4c2389;if(sfdx_utils_2[_0x270ad5(0xb7)][_0x270ad5(0xf4)](_0x419787))return _0x308665[_0x270ad5(0xde)]=await auth_utils_1['AuthUtils'][_0x270ad5(0xbd)](_0x308665['instanceUrl'],_0x308665[_0x270ad5(0xd0)],_0x308665[_0x270ad5(0xc8)],_0x308665[_0x270ad5(0xe8)]),retrieveReport(_0x493680,_0x308665,_0x24ac25);throw _0x419787;});}