const a195_0x3c65e5=a195_0x226a;(function(_0x3f3c83,_0x2ac68f){const _0x33a513=a195_0x226a,_0x3551eb=_0x3f3c83();while(!![]){try{const _0x28ce62=-parseInt(_0x33a513(0x24c))/0x1*(-parseInt(_0x33a513(0x200))/0x2)+-parseInt(_0x33a513(0x242))/0x3*(-parseInt(_0x33a513(0x1f3))/0x4)+-parseInt(_0x33a513(0x220))/0x5+-parseInt(_0x33a513(0x219))/0x6+-parseInt(_0x33a513(0x22d))/0x7+parseInt(_0x33a513(0x227))/0x8*(-parseInt(_0x33a513(0x21e))/0x9)+-parseInt(_0x33a513(0x224))/0xa*(-parseInt(_0x33a513(0x20a))/0xb);if(_0x28ce62===_0x2ac68f)break;else _0x3551eb['push'](_0x3551eb['shift']());}catch(_0x1c50ff){_0x3551eb['push'](_0x3551eb['shift']());}}}(a195_0xc726,0xcf875));const a195_0x369991=(function(){let _0x256ecc=!![];return function(_0x578eb7,_0x2670d5){const _0x328df6=_0x256ecc?function(){const _0x576f4d=a195_0x226a;if(_0x2670d5){const _0x252bcb=_0x2670d5[_0x576f4d(0x221)](_0x578eb7,arguments);return _0x2670d5=null,_0x252bcb;}}:function(){};return _0x256ecc=![],_0x328df6;};}()),a195_0x2a51a4=a195_0x369991(this,function(){const _0x6a7862=a195_0x226a;return a195_0x2a51a4[_0x6a7862(0x20f)]()[_0x6a7862(0x24f)](_0x6a7862(0x213))['toString']()[_0x6a7862(0x235)](a195_0x2a51a4)['search'](_0x6a7862(0x213));});function a195_0xc726(){const _0x34080d=['374967ZQzVAt','.id}','94615XcXOJQ','apply','ContentType','repositoryId','70BzoPbO','SalesforceError','__esModule','8hlelZm','../utils/composite.utils','Repository','Component_History__c',']\x20-\x20meta\x20not\x20found','prepareComponentRecord','6307406ejESGB','reference','Source__c','Version__c','find','recordTypes','fetchCommitManifestsByComponentIds','proceededComponentsMeta','constructor','DEFLATE','../utils/flosum-naming.utils','Is_From_Agent__c','insert','FLOSUM_NAMESPACE','createDeleteRequest','get','Last_Modified_Date__c','Component_Name__c','push','request','createZip','3ZucQPu','FLOSUM_COMPONENT','files','Repository__c','../../../../constants','Deletion_By_Agent__c','Description','../errors/salesforce.error','Last_Modified_By__c','default','17WdjapE','prepareCommitManifest','CRC32__c','search','crc','FLOSUM_COMPONENT_HISTORY','type','componentId','version','componentName','manifests','file','base64','filePath','1410496clIbpw','defineProperty','toISOString','prepareComponentHistoryRecord','body','map','branchId','createPostRequest','Committed_On__c','../../parsers/utils/zip','FLOSUM_COMMIT_MANIFEST','createPatchRequest','ParentId','17990UXoVgc','FLOSUM_GIT_NAMESPACE','SalesforceComponentsManager','generateAsync','Logger','prepareComponentAttachmentRecord','componentType','Component_Type__c','Branch__c','name','2973047LggPTg','File_Name__c','keys','RecordTypeId','username','toString','Changed_By__c','Body','typedi','(((.+)+)+)+$','Changed_On__c','../../../../core','Last_Updated_By__c','getProceededComponentsMeta','gitSync','3514782zFykUR','./salesforce-git-sync.service','proceedComponentMeta','delete','logger'];a195_0xc726=function(){return _0x34080d;};return a195_0xc726();}a195_0x2a51a4();function a195_0x226a(_0x3e0acb,_0x385234){const _0xdbb269=a195_0xc726();return a195_0x226a=function(_0x2a51a4,_0x369991){_0x2a51a4=_0x2a51a4-0x1f3;let _0xc72640=_0xdbb269[_0x2a51a4];return _0xc72640;},a195_0x226a(_0x3e0acb,_0x385234);}'use strict';var __importDefault=this&&this['__importDefault']||function(_0xe109fb){const _0x4deaac=a195_0x226a;return _0xe109fb&&_0xe109fb[_0x4deaac(0x226)]?_0xe109fb:{'default':_0xe109fb};};Object[a195_0x3c65e5(0x1f4)](exports,a195_0x3c65e5(0x226),{'value':!![]}),exports[a195_0x3c65e5(0x202)]=void 0x0;const constants_1=require(a195_0x3c65e5(0x246)),core_1=require(a195_0x3c65e5(0x215)),zip_1=require(a195_0x3c65e5(0x1fc)),typedi_1=__importDefault(require(a195_0x3c65e5(0x212))),salesforce_error_1=require(a195_0x3c65e5(0x249)),composite_utils_1=require(a195_0x3c65e5(0x228)),flosum_naming_utils_1=require(a195_0x3c65e5(0x237)),salesforce_git_sync_service_1=require(a195_0x3c65e5(0x21a));class SalesforceComponentsManager{constructor(_0x3ebffd,_0xe9311,_0x277432,_0x426921,_0x16efd4){const _0x60c6cf=a195_0x3c65e5;this['repositoryId']=_0x3ebffd,this[_0x60c6cf(0x1f9)]=_0xe9311,this['username']=_0x277432,this[_0x60c6cf(0x232)]=_0x426921,this[_0x60c6cf(0x234)]=_0x16efd4,this[_0x60c6cf(0x21d)]=new core_1[(_0x60c6cf(0x204))](SalesforceComponentsManager['name']),this[_0x60c6cf(0x218)]=typedi_1[_0x60c6cf(0x24b)][_0x60c6cf(0x23c)](salesforce_git_sync_service_1['SalesforceGitSyncService']);}['proceedComponentMeta'](_0x4a2dd1,_0x42121d){const _0x273e51=a195_0x3c65e5,_0x57c49f=(0x0,flosum_naming_utils_1['extractFieldsFromRecord'])(_0x4a2dd1,[_0x273e51(0x207),_0x273e51(0x23e),_0x273e51(0x230)]);this[_0x273e51(0x234)][_0x273e51(0x23f)]({'componentId':'','reference':_0x42121d,'version':_0x57c49f[_0x273e51(0x230)],'componentName':_0x57c49f[_0x273e51(0x23e)],'componentType':_0x57c49f['Component_Type__c']});}[a195_0x3c65e5(0x24d)](_0x368d19,_0x424909){const _0x52c94f=a195_0x3c65e5,{request:_0x2a8f6c}=(0x0,composite_utils_1[_0x52c94f(0x1fa)])(constants_1['FLOSUM_COMMIT_MANIFEST'],{[constants_1[_0x52c94f(0x23a)]+'Commit__c']:_0x368d19,[constants_1[_0x52c94f(0x23a)]+_0x52c94f(0x22a)]:_0x424909});return _0x2a8f6c;}async[a195_0x3c65e5(0x205)](_0x338293,_0x4c71ff){const _0x22dda9=a195_0x3c65e5,_0x14f005={},_0x45ef4a=zip_1['Zip'][_0x22dda9(0x241)]();for(const _0x3a2839 of Object[_0x22dda9(0x20c)](_0x338293[_0x22dda9(0x244)])){_0x45ef4a[_0x22dda9(0x257)](_0x3a2839,_0x338293[_0x22dda9(0x244)][_0x3a2839],{'createFolders':!![]});}return _0x14f005[_0x22dda9(0x222)]='application/zip',_0x14f005['Name']=_0x338293[_0x22dda9(0x252)],_0x14f005[_0x22dda9(0x248)]=_0x338293[_0x22dda9(0x252)],_0x14f005[_0x22dda9(0x1ff)]=_0x4c71ff,_0x14f005[_0x22dda9(0x211)]=await _0x45ef4a[_0x22dda9(0x203)]({'type':_0x22dda9(0x258),'compression':_0x22dda9(0x236),'compressionOptions':{'level':0x6}}),_0x14f005;}[a195_0x3c65e5(0x1f6)](_0x35ceed,_0x2bb96c,_0x40c2e4){const _0x3a0d5c=a195_0x3c65e5,_0x918835=new Date()[_0x3a0d5c(0x1f5)](),_0x16096d={};return _0x16096d[constants_1['FLOSUM_NAMESPACE']+'Component__c']=_0x2bb96c,_0x16096d[constants_1['FLOSUM_NAMESPACE']+_0x3a0d5c(0x24e)]=_0x35ceed[_0x3a0d5c(0x250)],_0x16096d[constants_1['FLOSUM_NAMESPACE']+_0x3a0d5c(0x214)]=_0x918835,_0x16096d[constants_1[_0x3a0d5c(0x23a)]+_0x3a0d5c(0x210)]=this[_0x3a0d5c(0x20e)],_0x16096d[constants_1[_0x3a0d5c(0x23a)]+'Version__c']=_0x40c2e4?_0x40c2e4+0x1:0x1,_0x16096d[constants_1[_0x3a0d5c(0x201)]+_0x3a0d5c(0x238)]=!![],_0x16096d;}[a195_0x3c65e5(0x22c)](_0x78419a,_0x1bc6bb){const _0x41e9b3=a195_0x3c65e5;var _0x11c59c,_0x4c2cdf;const _0x405fd5=new Date()[_0x41e9b3(0x1f5)](),_0x3143fc={};return!_0x1bc6bb?(this[_0x41e9b3(0x1f9)]?(_0x3143fc[constants_1[_0x41e9b3(0x23a)]+_0x41e9b3(0x208)]=this['branchId'],_0x3143fc[constants_1[_0x41e9b3(0x23a)]+_0x41e9b3(0x22f)]='Branch',_0x3143fc[_0x41e9b3(0x20d)]=(_0x11c59c=this[_0x41e9b3(0x232)][_0x41e9b3(0x231)](_0x50f676=>_0x50f676[_0x41e9b3(0x209)]==='Branch'))===null||_0x11c59c===void 0x0?void 0x0:_0x11c59c['id']):(_0x3143fc[constants_1[_0x41e9b3(0x23a)]+_0x41e9b3(0x245)]=this[_0x41e9b3(0x223)],_0x3143fc[constants_1['FLOSUM_NAMESPACE']+'Source__c']='Repository',_0x3143fc[_0x41e9b3(0x20d)]=(_0x4c2cdf=this[_0x41e9b3(0x232)]['find'](_0x2ca103=>_0x2ca103[_0x41e9b3(0x209)]===_0x41e9b3(0x229)))===null||_0x4c2cdf===void 0x0?void 0x0:_0x4c2cdf['id']),_0x3143fc[constants_1[_0x41e9b3(0x23a)]+_0x41e9b3(0x230)]=0x1):_0x3143fc[constants_1[_0x41e9b3(0x23a)]+'Version__c']=_0x1bc6bb[_0x41e9b3(0x254)]+0x1,_0x3143fc[constants_1[_0x41e9b3(0x23a)]+'Component_Type__c']=_0x78419a[_0x41e9b3(0x252)],_0x3143fc[constants_1['FLOSUM_NAMESPACE']+'Component_Name__c']=_0x78419a[_0x41e9b3(0x209)],_0x3143fc[constants_1['FLOSUM_NAMESPACE']+_0x41e9b3(0x20b)]=_0x78419a[_0x41e9b3(0x259)],_0x3143fc[constants_1['FLOSUM_NAMESPACE']+_0x41e9b3(0x216)]=this[_0x41e9b3(0x20e)],_0x3143fc[constants_1[_0x41e9b3(0x23a)]+_0x41e9b3(0x24a)]=this[_0x41e9b3(0x20e)],_0x3143fc[constants_1['FLOSUM_NAMESPACE']+_0x41e9b3(0x23d)]=_0x405fd5,_0x3143fc[constants_1[_0x41e9b3(0x23a)]+_0x41e9b3(0x1fb)]=_0x405fd5,_0x3143fc[constants_1['FLOSUM_NAMESPACE']+_0x41e9b3(0x24e)]=_0x78419a[_0x41e9b3(0x250)],_0x3143fc;}[a195_0x3c65e5(0x217)](){const _0x1b4a1e=a195_0x3c65e5;return this[_0x1b4a1e(0x234)];}async[a195_0x3c65e5(0x239)](_0x57288d,_0x1e7f62){const _0x38fc94=a195_0x3c65e5,_0x12b3fe=[];for(const _0x3bcedb of _0x57288d){const _0x48458f=(0x0,composite_utils_1[_0x38fc94(0x1fa)])(constants_1[_0x38fc94(0x243)],this[_0x38fc94(0x22c)](_0x3bcedb)),_0x29d7d7=(0x0,composite_utils_1['createPostRequest'])(constants_1[_0x38fc94(0x251)],this[_0x38fc94(0x1f6)](_0x3bcedb,'@{'+_0x48458f[_0x38fc94(0x22e)]+_0x38fc94(0x21f))),_0x3498de=(0x0,composite_utils_1[_0x38fc94(0x1fa)])(constants_1['FLOSUM_ATTACHMENT'],await this['prepareComponentAttachmentRecord'](_0x3bcedb,'@{'+_0x29d7d7[_0x38fc94(0x22e)]+_0x38fc94(0x21f)));this[_0x38fc94(0x21b)](_0x48458f['request']['body'],_0x48458f[_0x38fc94(0x22e)]),_0x12b3fe['push'](_0x48458f['request'],_0x29d7d7[_0x38fc94(0x240)],_0x3498de[_0x38fc94(0x240)]),_0x1e7f62&&_0x12b3fe[_0x38fc94(0x23f)](this['prepareCommitManifest'](_0x1e7f62,'@{'+_0x29d7d7[_0x38fc94(0x22e)]+_0x38fc94(0x21f)));}return _0x12b3fe;}async['update'](_0x3fedf7,_0x2dc0fd=''){const _0x302e25=a195_0x3c65e5,_0x1a4262=[];for(const {component:_0x4ec06f,meta:_0x5956f8}of _0x3fedf7){if(!_0x5956f8['id']){const _0x5e9836=this[_0x302e25(0x234)]['find'](_0x48514f=>_0x48514f[_0x302e25(0x255)]===_0x4ec06f[_0x302e25(0x209)]&&_0x48514f['componentType']===_0x4ec06f[_0x302e25(0x252)]);if(!_0x5e9836)throw new salesforce_error_1[(_0x302e25(0x225))](new Error('Could\x20not\x20proceed\x20component\x20'+_0x4ec06f['name']+'\x20['+_0x4ec06f[_0x302e25(0x252)]+_0x302e25(0x22b)));_0x5956f8['id']=_0x5e9836[_0x302e25(0x253)];}const _0x1089b3=(0x0,composite_utils_1[_0x302e25(0x1fe)])(constants_1['FLOSUM_COMPONENT'],_0x5956f8['id'],this[_0x302e25(0x22c)](_0x4ec06f,_0x5956f8)),_0x32a008=(0x0,composite_utils_1[_0x302e25(0x1fa)])(constants_1[_0x302e25(0x251)],this['prepareComponentHistoryRecord'](_0x4ec06f,_0x5956f8['id'],_0x5956f8[_0x302e25(0x254)])),_0x2ddc84=(0x0,composite_utils_1['createPostRequest'])(constants_1['FLOSUM_ATTACHMENT'],await this[_0x302e25(0x205)](_0x4ec06f,'@{'+_0x32a008[_0x302e25(0x22e)]+_0x302e25(0x21f)));this[_0x302e25(0x21b)](_0x1089b3[_0x302e25(0x240)][_0x302e25(0x1f7)],_0x1089b3[_0x302e25(0x22e)]),_0x1a4262['push'](_0x1089b3['request'],_0x32a008['request'],_0x2ddc84['request']),_0x2dc0fd&&_0x1a4262['push'](this[_0x302e25(0x24d)](_0x2dc0fd,'@{'+_0x32a008[_0x302e25(0x22e)]+_0x302e25(0x21f)));}return _0x1a4262;}async[a195_0x3c65e5(0x21c)](_0x4bcdb0,_0x4fe07e=![]){const _0x40b183=a195_0x3c65e5,_0x1f7cf0={'manifests':[],'componentsToDelete':[],'componentsToUpdate':[]},_0x4d2207=[];for(const _0x447e09 of _0x4bcdb0){if(_0x447e09['id'])_0x4d2207[_0x40b183(0x23f)](_0x447e09['id']);else{const _0x5ce7b8=this[_0x40b183(0x234)]['find'](_0x1a6a35=>_0x1a6a35['componentName']===_0x447e09['name']&&_0x1a6a35[_0x40b183(0x206)]===_0x447e09[_0x40b183(0x252)]);if(!_0x5ce7b8||!_0x5ce7b8['componentId'])continue;_0x4d2207[_0x40b183(0x23f)](_0x5ce7b8[_0x40b183(0x253)]);}}if(_0x4fe07e){const _0xb62587=await this[_0x40b183(0x218)][_0x40b183(0x233)](_0x4d2207);_0x1f7cf0[_0x40b183(0x256)]=_0xb62587[_0x40b183(0x1f8)](_0x114352=>(0x0,composite_utils_1[_0x40b183(0x23b)])(constants_1[_0x40b183(0x1fd)],_0x114352)[_0x40b183(0x240)]);}return _0x1f7cf0['componentsToUpdate']=_0x4d2207[_0x40b183(0x1f8)](_0x16ca33=>(0x0,composite_utils_1[_0x40b183(0x1fe)])(constants_1[_0x40b183(0x243)],_0x16ca33,{[constants_1['FLOSUM_GIT_NAMESPACE']+_0x40b183(0x247)]:!![]})[_0x40b183(0x240)]),_0x1f7cf0['componentsToDelete']=_0x4d2207[_0x40b183(0x1f8)](_0x4ecd91=>(0x0,composite_utils_1[_0x40b183(0x23b)])(constants_1[_0x40b183(0x243)],_0x4ecd91)[_0x40b183(0x240)]),_0x1f7cf0;}}exports['SalesforceComponentsManager']=SalesforceComponentsManager;