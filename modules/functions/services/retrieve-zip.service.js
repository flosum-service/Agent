const a105_0x55a6e3=a105_0x2318;(function(_0xa1282d,_0x1ef9d0){const _0x300605=a105_0x2318,_0x463695=_0xa1282d();while(!![]){try{const _0xfcaee=parseInt(_0x300605(0x176))/0x1+-parseInt(_0x300605(0x161))/0x2+-parseInt(_0x300605(0x157))/0x3*(-parseInt(_0x300605(0x166))/0x4)+parseInt(_0x300605(0x171))/0x5+parseInt(_0x300605(0x163))/0x6+parseInt(_0x300605(0x156))/0x7*(-parseInt(_0x300605(0x16b))/0x8)+-parseInt(_0x300605(0x14f))/0x9;if(_0xfcaee===_0x1ef9d0)break;else _0x463695['push'](_0x463695['shift']());}catch(_0x1d7a9e){_0x463695['push'](_0x463695['shift']());}}}(a105_0x2b12,0xb8deb));const a105_0x33044a=(function(){let _0x480559=!![];return function(_0x26a677,_0x17de9d){const _0x473d65=_0x480559?function(){const _0x6251c3=a105_0x2318;if(_0x17de9d){const _0x2cc115=_0x17de9d[_0x6251c3(0x168)](_0x26a677,arguments);return _0x17de9d=null,_0x2cc115;}}:function(){};return _0x480559=![],_0x473d65;};}()),a105_0x3f1af5=a105_0x33044a(this,function(){const _0x45f79c=a105_0x2318;return a105_0x3f1af5['toString']()[_0x45f79c(0x17a)](_0x45f79c(0x159))[_0x45f79c(0x16d)]()['constructor'](a105_0x3f1af5)[_0x45f79c(0x17a)](_0x45f79c(0x159));});a105_0x3f1af5();'use strict';function a105_0x2b12(){const _0x525635=['fs/promises','adm-zip','2032DypYMN','createSFDXProject','apply','join','force:mdapi:retrieve:report\x20','11936WOnULp','catch','toString','MAX_ZIP_SIZE','--jobid\x20','SFDXUtils','2455495xaJvvM','setInstanceUrl','clientId','__esModule','readFile','1119116zwLgvm','../../git/internal/fs.internal','clientSecret','-u\x20','search','base64','/services/data/v','uuid','__importDefault','Body','path','src','toBuffer','isAuthorizationError','length','spawn','retrieveZip','getEntries','.temp/','8993790uuNsZZ','defineProperty','SFDX','addFile','refreshToken','--json\x20','/unpackaged.zip','5551wNqEPn','3579nHISUN','default','(((.+)+)+)+$','splitZip','BACKUP\x20ZIP','../../git/salesforce/utils/sfdx.utils','/sobjects/Attachment','-r\x20.temp/','accessToken','instanceUrl','587650MFyUWd','post','6103554ikrzVg'];a105_0x2b12=function(){return _0x525635;};return a105_0x2b12();}function a105_0x2318(_0xf2a758,_0x184afb){const _0x39ee9a=a105_0x2b12();return a105_0x2318=function(_0x3f1af5,_0x33044a){_0x3f1af5=_0x3f1af5-0x141;let _0x2b1263=_0x39ee9a[_0x3f1af5];return _0x2b1263;},a105_0x2318(_0xf2a758,_0x184afb);}var __importDefault=this&&this[a105_0x55a6e3(0x144)]||function(_0x4772c2){const _0x409bf3=a105_0x55a6e3;return _0x4772c2&&_0x4772c2[_0x409bf3(0x174)]?_0x4772c2:{'default':_0x4772c2};};Object[a105_0x55a6e3(0x150)](exports,a105_0x55a6e3(0x174),{'value':!![]}),exports[a105_0x55a6e3(0x14c)]=void 0x0;const promises_1=require(a105_0x55a6e3(0x164)),sfdx_utils_1=require(a105_0x55a6e3(0x15c)),fs_internal_1=require(a105_0x55a6e3(0x177)),sfdx_utils_2=require('../utils/sfdx.utils'),auth_utils_1=require('../utils/auth.utils'),adm_zip_1=__importDefault(require(a105_0x55a6e3(0x165))),uuid_1=require(a105_0x55a6e3(0x143)),components_api_1=require('../utils/components-api'),path_1=require(a105_0x55a6e3(0x146));async function retrieveZip({backupAsyncId:_0x14d30f,credentials:_0x1bfaca,metadataLogId:_0x372427,apiVersion:_0x838d5e},_0x160b4f){const _0x1625e6=a105_0x55a6e3;var _0x39575c;const _0x728313=(0x0,uuid_1['v4'])();try{!await fs_internal_1['FS']['exists'](_0x1625e6(0x14e)+_0x728313)&&await(0x0,promises_1['mkdir'])(_0x1625e6(0x14e)+_0x728313,{'recursive':!![]});await sfdx_utils_2[_0x1625e6(0x170)][_0x1625e6(0x167)](_0x14d30f,_0x728313),await sfdx_utils_2['SFDXUtils'][_0x1625e6(0x172)](_0x1bfaca[_0x1625e6(0x160)],_0x14d30f,_0x728313),await retrieveReport(_0x14d30f,_0x1bfaca,_0x728313);const _0xf554d6=new adm_zip_1['default'](await(0x0,promises_1[_0x1625e6(0x175)])('.temp/'+_0x728313+'/'+_0x14d30f+_0x1625e6(0x155))),_0xb8b1d5=new adm_zip_1[(_0x1625e6(0x158))]();for(const {entryName:_0x2ed2d6}of _0xf554d6[_0x1625e6(0x14d)]()){const _0x4f3074=(_0x39575c=_0xf554d6['getEntry'](_0x2ed2d6))===null||_0x39575c===void 0x0?void 0x0:_0x39575c['getData']();_0xb8b1d5[_0x1625e6(0x152)]((0x0,path_1[_0x1625e6(0x169)])(_0x1625e6(0x147),_0x2ed2d6),_0x4f3074);}const _0x64e811=_0xb8b1d5[_0x1625e6(0x148)]()['toString'](_0x1625e6(0x141))[_0x1625e6(0x14a)];if(_0x64e811>=components_api_1[_0x1625e6(0x16e)]){const [_0x1fd22d,_0x126231]=await components_api_1['ComponentsApi'][_0x1625e6(0x15a)](_0xb8b1d5,_0x64e811),_0x421b45={'ParentId':_0x372427,'Name':_0x1625e6(0x15b),'Description':_0x1625e6(0x15b),'Body':_0x1fd22d[_0x1625e6(0x148)]()[_0x1625e6(0x16d)]('base64')};await _0x160b4f[_0x1625e6(0x162)](_0x1625e6(0x142)+_0x838d5e+'/sobjects/Attachment',_0x421b45),_0x421b45[_0x1625e6(0x145)]=_0x126231[_0x1625e6(0x148)]()['toString'](_0x1625e6(0x141)),await _0x160b4f[_0x1625e6(0x162)](_0x1625e6(0x142)+_0x838d5e+_0x1625e6(0x15d),_0x421b45);}else{const _0x363ae6={'ParentId':_0x372427,'Name':'BACKUP\x20ZIP','Description':_0x1625e6(0x15b),'Body':_0xb8b1d5[_0x1625e6(0x148)]()[_0x1625e6(0x16d)](_0x1625e6(0x141))};await _0x160b4f[_0x1625e6(0x162)](_0x1625e6(0x142)+_0x838d5e+_0x1625e6(0x15d),_0x363ae6);}}catch(_0x20bcbf){throw _0x20bcbf;}finally{await(0x0,promises_1['rm'])(_0x1625e6(0x14e)+_0x728313+'/'+_0x14d30f,{'recursive':!![]});}}exports[a105_0x55a6e3(0x14c)]=retrieveZip;async function retrieveReport(_0x52bc8a,_0xf824b7,_0x4f709b){const _0x21bcd1=a105_0x55a6e3,_0x266326=_0x21bcd1(0x16a)+_0x21bcd1(0x154)+(_0x21bcd1(0x16f)+_0x52bc8a+'\x20')+(_0x21bcd1(0x15e)+_0x4f709b+'/'+_0x52bc8a+'\x20')+(_0x21bcd1(0x179)+_0xf824b7['accessToken']);await sfdx_utils_1[_0x21bcd1(0x151)][_0x21bcd1(0x14b)](_0x266326)[_0x21bcd1(0x16c)](async _0x52bbe2=>{const _0x29b65b=_0x21bcd1;if(sfdx_utils_2['SFDXUtils'][_0x29b65b(0x149)](_0x52bbe2))return _0xf824b7[_0x29b65b(0x15f)]=await auth_utils_1['AuthUtils']['updateAccessToken'](_0xf824b7[_0x29b65b(0x160)],_0xf824b7[_0x29b65b(0x153)],_0xf824b7[_0x29b65b(0x173)],_0xf824b7[_0x29b65b(0x178)]),retrieveReport(_0x52bc8a,_0xf824b7,_0x4f709b);throw _0x52bbe2;});}