function a244_0x19a0(){const _0x2b114d=['6911910kEepsK','SalesforceComponentsManager','proceedComponentMeta','1595628UYzCBK','ParentId','Logger','FLOSUM_NAMESPACE','./salesforce-git-sync.service','../../../../core','version','DEFLATE','prepareComponentRecord','CRC32__c','7qgyTkX','../utils/composite.utils','createZip','__importDefault','createDeleteRequest','Branch','Last_Modified_By__c','createPostRequest','847HfCTyz','isVlocityComponent','Body','find','branchId','delete','Deletion_By_Agent__c','../errors/salesforce.error','proceededComponentsMeta','12777mObkEI','gitSync','reference','3605184ktbezA','logger','362820JobklS','Repository__c','SalesforceGitSyncService','componentsToDelete','insert','update','File_Name__c',']\x20-\x20meta\x20not\x20found','../utils/flosum-naming.utils','request','prepareCommitManifest','generateAsync','default','keys','constructor','Is_From_Agent__c','Committed_On__c','1551636nPDOQj','toString','filePath','apply','Description','RecordTypeId','extractFieldsFromRecord','get','FLOSUM_COMPONENT_HISTORY','ContentType','push','(((.+)+)+)+$','componentName','Repository','Source__c','file','prepareComponentHistoryRecord','application/zip','type','Vlocity_Component__c','map','Last_Modified_Date__c','recordTypes','prepareComponentAttachmentRecord','repositoryId','name','Could\x20not\x20proceed\x20component\x20','__esModule','Component_Name__c','576xqItAs','crc','.id}','FLOSUM_ATTACHMENT','files','body','username','createPatchRequest','componentType','componentId','Last_Updated_By__c','Name','Version__c','Vlocity_Component_Name__c','FLOSUM_COMPONENT','SalesforceError','FLOSUM_COMMIT_MANIFEST','423786AjTMSr','search','FLOSUM_GIT_NAMESPACE','5TiIbEF','Component_Type__c'];a244_0x19a0=function(){return _0x2b114d;};return a244_0x19a0();}const a244_0x4f62d0=a244_0x3c52;(function(_0x66a74c,_0x431382){const _0x5c2989=a244_0x3c52,_0x5af07d=_0x66a74c();while(!![]){try{const _0x11d897=parseInt(_0x5c2989(0x120))/0x1+parseInt(_0x5c2989(0x10f))/0x2*(parseInt(_0x5c2989(0x143))/0x3)+-parseInt(_0x5c2989(0x159))/0x4*(-parseInt(_0x5c2989(0x123))/0x5)+parseInt(_0x5c2989(0x125))/0x6+parseInt(_0x5c2989(0x132))/0x7*(parseInt(_0x5c2989(0x146))/0x8)+-parseInt(_0x5c2989(0x128))/0x9+parseInt(_0x5c2989(0x148))/0xa*(-parseInt(_0x5c2989(0x13a))/0xb);if(_0x11d897===_0x431382)break;else _0x5af07d['push'](_0x5af07d['shift']());}catch(_0x3e0f8b){_0x5af07d['push'](_0x5af07d['shift']());}}}(a244_0x19a0,0xa38da));const a244_0x4e9ca3=(function(){let _0x2b8311=!![];return function(_0x408154,_0x1568ac){const _0x1c4340=_0x2b8311?function(){const _0x26137f=a244_0x3c52;if(_0x1568ac){const _0xb49a7b=_0x1568ac[_0x26137f(0x15c)](_0x408154,arguments);return _0x1568ac=null,_0xb49a7b;}}:function(){};return _0x2b8311=![],_0x1c4340;};}()),a244_0x3dbdcd=a244_0x4e9ca3(this,function(){const _0x18076b=a244_0x3c52;return a244_0x3dbdcd[_0x18076b(0x15a)]()[_0x18076b(0x121)](_0x18076b(0xfd))[_0x18076b(0x15a)]()[_0x18076b(0x156)](a244_0x3dbdcd)[_0x18076b(0x121)]('(((.+)+)+)+$');});a244_0x3dbdcd();'use strict';var __importDefault=this&&this[a244_0x4f62d0(0x135)]||function(_0x3dbe11){const _0xb78341=a244_0x4f62d0;return _0x3dbe11&&_0x3dbe11[_0xb78341(0x10d)]?_0x3dbe11:{'default':_0x3dbe11};};Object['defineProperty'](exports,a244_0x4f62d0(0x10d),{'value':!![]}),exports['SalesforceComponentsManager']=void 0x0;const constants_1=require('../../../../constants'),core_1=require(a244_0x4f62d0(0x12d)),zip_1=require('../../parsers/utils/zip'),typedi_1=__importDefault(require('typedi')),salesforce_error_1=require(a244_0x4f62d0(0x141)),composite_utils_1=require(a244_0x4f62d0(0x133)),flosum_naming_utils_1=require(a244_0x4f62d0(0x150)),salesforce_git_sync_service_1=require(a244_0x4f62d0(0x12c));function a244_0x3c52(_0x385a50,_0x460ab7){const _0x32b6e2=a244_0x19a0();return a244_0x3c52=function(_0x3dbdcd,_0x4e9ca3){_0x3dbdcd=_0x3dbdcd-0xfa;let _0x19a0c8=_0x32b6e2[_0x3dbdcd];return _0x19a0c8;},a244_0x3c52(_0x385a50,_0x460ab7);}class SalesforceComponentsManager{constructor(_0x530502,_0x4ffc76,_0x433e4f,_0x3cab13,_0x3c0148){const _0x5e38e3=a244_0x4f62d0;this['repositoryId']=_0x530502,this[_0x5e38e3(0x13e)]=_0x4ffc76,this[_0x5e38e3(0x115)]=_0x433e4f,this[_0x5e38e3(0x108)]=_0x3cab13,this[_0x5e38e3(0x142)]=_0x3c0148,this[_0x5e38e3(0x147)]=new core_1[(_0x5e38e3(0x12a))](SalesforceComponentsManager[_0x5e38e3(0x10b)]),this[_0x5e38e3(0x144)]=typedi_1[_0x5e38e3(0x154)][_0x5e38e3(0x160)](salesforce_git_sync_service_1[_0x5e38e3(0x14a)]);}[a244_0x4f62d0(0x127)](_0x55b038,_0x1e5c73){const _0x5e159b=a244_0x4f62d0,_0x179f52=(0x0,flosum_naming_utils_1[_0x5e159b(0x15f)])(_0x55b038,[_0x5e159b(0x124),_0x5e159b(0x10e),'Version__c']);this['proceededComponentsMeta'][_0x5e159b(0xfc)]({'componentId':'','reference':_0x1e5c73,'version':_0x179f52[_0x5e159b(0x11b)],'componentName':_0x179f52[_0x5e159b(0x10e)],'componentType':_0x179f52[_0x5e159b(0x124)]});}[a244_0x4f62d0(0x152)](_0x2afe2f,_0x3cb0da){const _0x47d5ef=a244_0x4f62d0,{request:_0x558af0}=(0x0,composite_utils_1['createPostRequest'])(constants_1['FLOSUM_COMMIT_MANIFEST'],{[constants_1[_0x47d5ef(0x12b)]+'Commit__c']:_0x2afe2f,[constants_1[_0x47d5ef(0x12b)]+'Component_History__c']:_0x3cb0da});return _0x558af0;}async[a244_0x4f62d0(0x109)](_0x2d66b4,_0x344122){const _0x14e921=a244_0x4f62d0,_0x3b0424={},_0x3af15c=zip_1['Zip'][_0x14e921(0x134)]();for(const _0x2ac72f of Object[_0x14e921(0x155)](_0x2d66b4[_0x14e921(0x113)])){_0x3af15c[_0x14e921(0x101)](_0x2ac72f,_0x2d66b4[_0x14e921(0x113)][_0x2ac72f],{'createFolders':!![]});}return _0x3b0424[_0x14e921(0xfb)]=_0x14e921(0x103),_0x3b0424[_0x14e921(0x11a)]=_0x2d66b4[_0x14e921(0x104)],_0x3b0424[_0x14e921(0x15d)]=_0x2d66b4[_0x14e921(0x104)],_0x3b0424[_0x14e921(0x129)]=_0x344122,_0x3b0424[_0x14e921(0x13c)]=await _0x3af15c[_0x14e921(0x153)]({'type':'base64','compression':_0x14e921(0x12f),'compressionOptions':{'level':0x6}}),_0x3b0424;}[a244_0x4f62d0(0x102)](_0x4644cc,_0x4087e0,_0x212ffc){const _0x239c4e=a244_0x4f62d0,_0x15c22e=new Date()['toISOString'](),_0xd271bd={};return _0xd271bd[constants_1[_0x239c4e(0x12b)]+'Component__c']=_0x4087e0,_0xd271bd[constants_1['FLOSUM_NAMESPACE']+_0x239c4e(0x131)]=_0x4644cc[_0x239c4e(0x110)],_0xd271bd[constants_1[_0x239c4e(0x12b)]+'Changed_On__c']=_0x15c22e,_0xd271bd[constants_1[_0x239c4e(0x12b)]+'Changed_By__c']=this[_0x239c4e(0x115)],_0xd271bd[constants_1[_0x239c4e(0x12b)]+'Version__c']=_0x212ffc?_0x212ffc+0x1:0x1,_0xd271bd[constants_1[_0x239c4e(0x122)]+_0x239c4e(0x157)]=!![],_0xd271bd;}[a244_0x4f62d0(0x130)](_0x2a30b5,_0x4f118b){const _0x3e42af=a244_0x4f62d0;var _0x4aacba,_0x13496f;const _0x58d81a=new Date()['toISOString'](),_0x37422f={};return!_0x4f118b?(this[_0x3e42af(0x13e)]?(_0x37422f[constants_1['FLOSUM_NAMESPACE']+'Branch__c']=this[_0x3e42af(0x13e)],_0x37422f[constants_1[_0x3e42af(0x12b)]+_0x3e42af(0x100)]=_0x3e42af(0x137),_0x37422f[_0x3e42af(0x15e)]=(_0x4aacba=this[_0x3e42af(0x108)][_0x3e42af(0x13d)](_0x8fb263=>_0x8fb263[_0x3e42af(0x10b)]===_0x3e42af(0x137)))===null||_0x4aacba===void 0x0?void 0x0:_0x4aacba['id']):(_0x37422f[constants_1[_0x3e42af(0x12b)]+_0x3e42af(0x149)]=this[_0x3e42af(0x10a)],_0x37422f[constants_1[_0x3e42af(0x12b)]+_0x3e42af(0x100)]=_0x3e42af(0xff),_0x37422f[_0x3e42af(0x15e)]=(_0x13496f=this[_0x3e42af(0x108)][_0x3e42af(0x13d)](_0x4fb7d6=>_0x4fb7d6[_0x3e42af(0x10b)]===_0x3e42af(0xff)))===null||_0x13496f===void 0x0?void 0x0:_0x13496f['id']),_0x37422f[constants_1[_0x3e42af(0x12b)]+_0x3e42af(0x11b)]=0x1):_0x37422f[constants_1[_0x3e42af(0x12b)]+'Version__c']=_0x4f118b[_0x3e42af(0x12e)]+0x1,_0x37422f[constants_1[_0x3e42af(0x12b)]+_0x3e42af(0x124)]=_0x2a30b5[_0x3e42af(0x104)],_0x37422f[constants_1[_0x3e42af(0x12b)]+'Component_Name__c']=_0x2a30b5[_0x3e42af(0x10b)],_0x37422f[constants_1[_0x3e42af(0x12b)]+_0x3e42af(0x14e)]=_0x2a30b5[_0x3e42af(0x15b)],_0x37422f[constants_1[_0x3e42af(0x12b)]+_0x3e42af(0x119)]=this[_0x3e42af(0x115)],_0x37422f[constants_1[_0x3e42af(0x12b)]+_0x3e42af(0x138)]=this[_0x3e42af(0x115)],_0x37422f[constants_1[_0x3e42af(0x12b)]+_0x3e42af(0x107)]=_0x58d81a,_0x37422f[constants_1['FLOSUM_NAMESPACE']+_0x3e42af(0x158)]=_0x58d81a,_0x37422f[constants_1['FLOSUM_NAMESPACE']+_0x3e42af(0x131)]=_0x2a30b5[_0x3e42af(0x110)],_0x37422f[constants_1['FLOSUM_NAMESPACE']+_0x3e42af(0x11c)]=_0x2a30b5['vlocityComponentName'],_0x37422f[constants_1[_0x3e42af(0x12b)]+_0x3e42af(0x105)]=_0x2a30b5[_0x3e42af(0x13b)],_0x37422f[constants_1[_0x3e42af(0x12b)]+'MC_Key__c']=_0x2a30b5['marketingCloudKey'],_0x37422f;}['getProceededComponentsMeta'](){const _0x5ad7a6=a244_0x4f62d0;return this[_0x5ad7a6(0x142)];}async[a244_0x4f62d0(0x14c)](_0x20932f,_0x315c3c){const _0x72756a=a244_0x4f62d0,_0xf73455=[];for(const _0x4d2246 of _0x20932f){const _0x202431=(0x0,composite_utils_1[_0x72756a(0x139)])(constants_1[_0x72756a(0x11d)],this[_0x72756a(0x130)](_0x4d2246)),_0x22f53c=(0x0,composite_utils_1['createPostRequest'])(constants_1['FLOSUM_COMPONENT_HISTORY'],this[_0x72756a(0x102)](_0x4d2246,'@{'+_0x202431[_0x72756a(0x145)]+'.id}')),_0x48154a=(0x0,composite_utils_1[_0x72756a(0x139)])(constants_1[_0x72756a(0x112)],await this['prepareComponentAttachmentRecord'](_0x4d2246,'@{'+_0x22f53c[_0x72756a(0x145)]+_0x72756a(0x111)));this[_0x72756a(0x127)](_0x202431[_0x72756a(0x151)][_0x72756a(0x114)],_0x202431[_0x72756a(0x145)]),_0xf73455[_0x72756a(0xfc)](_0x202431['request'],_0x22f53c[_0x72756a(0x151)],_0x48154a[_0x72756a(0x151)]),_0x315c3c&&_0xf73455['push'](this[_0x72756a(0x152)](_0x315c3c,'@{'+_0x22f53c[_0x72756a(0x145)]+'.id}'));}return _0xf73455;}async[a244_0x4f62d0(0x14d)](_0x2fe3d2,_0x1da509=''){const _0x4882c1=a244_0x4f62d0,_0x1cc887=[];for(const {component:_0x211b39,meta:_0x11ca2d}of _0x2fe3d2){if(!_0x11ca2d['id']){const _0xb87cb7=this[_0x4882c1(0x142)][_0x4882c1(0x13d)](_0x45fcfc=>_0x45fcfc['componentName']===_0x211b39[_0x4882c1(0x10b)]&&_0x45fcfc[_0x4882c1(0x117)]===_0x211b39[_0x4882c1(0x104)]);if(!_0xb87cb7)throw new salesforce_error_1[(_0x4882c1(0x11e))](new Error(_0x4882c1(0x10c)+_0x211b39[_0x4882c1(0x10b)]+'\x20['+_0x211b39[_0x4882c1(0x104)]+_0x4882c1(0x14f)));_0x11ca2d['id']=_0xb87cb7[_0x4882c1(0x118)];}const _0x25cd0b=(0x0,composite_utils_1[_0x4882c1(0x116)])(constants_1[_0x4882c1(0x11d)],_0x11ca2d['id'],this[_0x4882c1(0x130)](_0x211b39,_0x11ca2d)),_0x34036a=(0x0,composite_utils_1[_0x4882c1(0x139)])(constants_1[_0x4882c1(0xfa)],this[_0x4882c1(0x102)](_0x211b39,_0x11ca2d['id'],_0x11ca2d[_0x4882c1(0x12e)])),_0xc9492c=(0x0,composite_utils_1[_0x4882c1(0x139)])(constants_1[_0x4882c1(0x112)],await this[_0x4882c1(0x109)](_0x211b39,'@{'+_0x34036a[_0x4882c1(0x145)]+_0x4882c1(0x111)));this[_0x4882c1(0x127)](_0x25cd0b[_0x4882c1(0x151)][_0x4882c1(0x114)],_0x25cd0b[_0x4882c1(0x145)]),_0x1cc887[_0x4882c1(0xfc)](_0x25cd0b[_0x4882c1(0x151)],_0x34036a[_0x4882c1(0x151)],_0xc9492c[_0x4882c1(0x151)]),_0x1da509&&_0x1cc887[_0x4882c1(0xfc)](this['prepareCommitManifest'](_0x1da509,'@{'+_0x34036a[_0x4882c1(0x145)]+_0x4882c1(0x111)));}return _0x1cc887;}async[a244_0x4f62d0(0x13f)](_0x38fe0a,_0xb007fa=![]){const _0x199fb3=a244_0x4f62d0,_0x57dd94={'manifests':[],'componentsToDelete':[],'componentsToUpdate':[]},_0x85843f=[];for(const _0x4d00a1 of _0x38fe0a){if(_0x4d00a1['id'])_0x85843f['push'](_0x4d00a1['id']);else{const _0x34211d=this['proceededComponentsMeta'][_0x199fb3(0x13d)](_0x432725=>_0x432725[_0x199fb3(0xfe)]===_0x4d00a1[_0x199fb3(0x10b)]&&_0x432725[_0x199fb3(0x117)]===_0x4d00a1[_0x199fb3(0x104)]);if(!_0x34211d||!_0x34211d[_0x199fb3(0x118)])continue;_0x85843f[_0x199fb3(0xfc)](_0x34211d[_0x199fb3(0x118)]);}}if(_0xb007fa){const _0x3ce80c=await this[_0x199fb3(0x144)]['fetchCommitManifestsByComponentIds'](_0x85843f);_0x57dd94['manifests']=_0x3ce80c[_0x199fb3(0x106)](_0x59fb22=>(0x0,composite_utils_1[_0x199fb3(0x136)])(constants_1[_0x199fb3(0x11f)],_0x59fb22)[_0x199fb3(0x151)]);}return _0x57dd94['componentsToUpdate']=_0x85843f['map'](_0x5ca465=>(0x0,composite_utils_1[_0x199fb3(0x116)])(constants_1[_0x199fb3(0x11d)],_0x5ca465,{[constants_1[_0x199fb3(0x122)]+_0x199fb3(0x140)]:!![]})[_0x199fb3(0x151)]),_0x57dd94[_0x199fb3(0x14b)]=_0x85843f[_0x199fb3(0x106)](_0x4d6650=>(0x0,composite_utils_1[_0x199fb3(0x136)])(constants_1[_0x199fb3(0x11d)],_0x4d6650)['request']),_0x57dd94;}}exports[a244_0x4f62d0(0x126)]=SalesforceComponentsManager;