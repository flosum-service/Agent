function a272_0xf80e(_0x4aa7c9,_0x350010){const _0x1e146f=a272_0x1d37();return a272_0xf80e=function(_0x2aeab8,_0x5c71f7){_0x2aeab8=_0x2aeab8-0x151;let _0x1d374f=_0x1e146f[_0x2aeab8];return _0x1d374f;},a272_0xf80e(_0x4aa7c9,_0x350010);}function a272_0x1d37(){const _0x47c63d=['4011414VPSmhG','7554xkpyRn','Zip','componentsToUpdate','repositoryId','RecordTypeId','Body','Changed_By__c','121965QLFlOj','prepareComponentAttachmentRecord','261AWDbsu','getProceededComponentsMeta','Repository','../errors/salesforce.error','proceededComponentsMeta','fetchCommitManifestsByComponentIds','typedi','name','1101144PwnlNx','Description','version','../../../../core','Version__c','push','createPatchRequest','FLOSUM_ATTACHMENT','ContentType','proceedComponentMeta','Vlocity_Component_Name__c','reference','CRC32__c','Could\x20not\x20proceed\x20component\x20','__importDefault','filePath','createPostRequest','default','Repository__c','ParentId','prepareCommitManifest','toISOString','SalesforceComponentsManager','Vlocity_Component__c','find','__esModule','Last_Modified_Date__c','1745864PMMKpl','marketingCloudKey','Component_Type__c','Changed_On__c','logger','recordTypes','Branch__c','.id}','Component_Name__c','search','../utils/flosum-naming.utils','FLOSUM_NAMESPACE','Last_Updated_By__c','keys','FLOSUM_COMPONENT_HISTORY','Source__c','Deletion_By_Agent__c','username','file','Last_Modified_By__c','../../parsers/utils/zip','Name','prepareComponentHistoryRecord','(((.+)+)+)+$','delete','FLOSUM_GIT_NAMESPACE','FLOSUM_COMPONENT','474087qiXYAS','type','body','Logger','branchId','request','266139wzDzba','../../../../constants','MC_Key__c','map','Branch','prepareComponentRecord','extractFieldsFromRecord','componentId',']\x20-\x20meta\x20not\x20found','defineProperty','insert','132VihRzX','generateAsync','FLOSUM_COMMIT_MANIFEST','../utils/composite.utils','14kUyAaA','Component__c','constructor','toString','get','SalesforceError','componentType','application/zip','files','createDeleteRequest','./salesforce-git-sync.service','base64','190JZNEkR','crc'];a272_0x1d37=function(){return _0x47c63d;};return a272_0x1d37();}const a272_0x143197=a272_0xf80e;(function(_0x380cd4,_0x35e4a7){const _0x452a67=a272_0xf80e,_0x1ac680=_0x380cd4();while(!![]){try{const _0xe8a589=-parseInt(_0x452a67(0x1b3))/0x1+parseInt(_0x452a67(0x16c))/0x2*(parseInt(_0x452a67(0x175))/0x3)+-parseInt(_0x452a67(0x17d))/0x4+parseInt(_0x452a67(0x173))/0x5*(-parseInt(_0x452a67(0x159))/0x6)+-parseInt(_0x452a67(0x15d))/0x7*(-parseInt(_0x452a67(0x198))/0x8)+-parseInt(_0x452a67(0x1b9))/0x9*(-parseInt(_0x452a67(0x169))/0xa)+parseInt(_0x452a67(0x16b))/0xb;if(_0xe8a589===_0x35e4a7)break;else _0x1ac680['push'](_0x1ac680['shift']());}catch(_0x4a897c){_0x1ac680['push'](_0x1ac680['shift']());}}}(a272_0x1d37,0x63041));const a272_0x5c71f7=(function(){let _0x65911c=!![];return function(_0x3d12cc,_0x94debd){const _0x127128=_0x65911c?function(){if(_0x94debd){const _0x6f4cc7=_0x94debd['apply'](_0x3d12cc,arguments);return _0x94debd=null,_0x6f4cc7;}}:function(){};return _0x65911c=![],_0x127128;};}()),a272_0x2aeab8=a272_0x5c71f7(this,function(){const _0x673029=a272_0xf80e;return a272_0x2aeab8['toString']()['search'](_0x673029(0x1af))[_0x673029(0x160)]()[_0x673029(0x15f)](a272_0x2aeab8)[_0x673029(0x1a1)](_0x673029(0x1af));});a272_0x2aeab8();'use strict';var __importDefault=this&&this[a272_0x143197(0x18b)]||function(_0x593cd8){const _0x41dbb0=a272_0x143197;return _0x593cd8&&_0x593cd8[_0x41dbb0(0x196)]?_0x593cd8:{'default':_0x593cd8};};Object[a272_0x143197(0x157)](exports,'__esModule',{'value':!![]}),exports[a272_0x143197(0x193)]=void 0x0;const constants_1=require(a272_0x143197(0x1ba)),core_1=require(a272_0x143197(0x180)),zip_1=require(a272_0x143197(0x1ac)),typedi_1=__importDefault(require(a272_0x143197(0x17b))),salesforce_error_1=require(a272_0x143197(0x178)),composite_utils_1=require(a272_0x143197(0x15c)),flosum_naming_utils_1=require(a272_0x143197(0x1a2)),salesforce_git_sync_service_1=require(a272_0x143197(0x167));class SalesforceComponentsManager{constructor(_0x253aa7,_0x1a404c,_0x1f5697,_0x12b2cb,_0x5292ee){const _0x4d190d=a272_0x143197;this['repositoryId']=_0x253aa7,this['branchId']=_0x1a404c,this[_0x4d190d(0x1a9)]=_0x1f5697,this[_0x4d190d(0x19d)]=_0x12b2cb,this['proceededComponentsMeta']=_0x5292ee,this[_0x4d190d(0x19c)]=new core_1[(_0x4d190d(0x1b6))](SalesforceComponentsManager[_0x4d190d(0x17c)]),this['gitSync']=typedi_1[_0x4d190d(0x18e)][_0x4d190d(0x161)](salesforce_git_sync_service_1['SalesforceGitSyncService']);}[a272_0x143197(0x186)](_0x23e4bf,_0xbc6c00){const _0x25f4cd=a272_0x143197,_0x359ca2=(0x0,flosum_naming_utils_1[_0x25f4cd(0x154)])(_0x23e4bf,[_0x25f4cd(0x19a),_0x25f4cd(0x1a0),'Version__c']);this[_0x25f4cd(0x179)][_0x25f4cd(0x182)]({'componentId':'','reference':_0xbc6c00,'version':_0x359ca2[_0x25f4cd(0x181)],'componentName':_0x359ca2['Component_Name__c'],'componentType':_0x359ca2['Component_Type__c']});}[a272_0x143197(0x191)](_0x570c74,_0x2e922b){const _0x693c6e=a272_0x143197,{request:_0x39de97}=(0x0,composite_utils_1[_0x693c6e(0x18d)])(constants_1[_0x693c6e(0x15b)],{[constants_1[_0x693c6e(0x1a3)]+'Commit__c']:_0x570c74,[constants_1[_0x693c6e(0x1a3)]+'Component_History__c']:_0x2e922b});return _0x39de97;}async['prepareComponentAttachmentRecord'](_0x1cbf23,_0x4f6dc8){const _0xc69baa=a272_0x143197,_0x2cbec7={},_0x169da0=zip_1[_0xc69baa(0x16d)]['createZip']();for(const _0x3b707d of Object[_0xc69baa(0x1a5)](_0x1cbf23['files'])){_0x169da0[_0xc69baa(0x1aa)](_0x3b707d,_0x1cbf23[_0xc69baa(0x165)][_0x3b707d],{'createFolders':!![]});}return _0x2cbec7[_0xc69baa(0x185)]=_0xc69baa(0x164),_0x2cbec7[_0xc69baa(0x1ad)]=_0x1cbf23[_0xc69baa(0x1b4)],_0x2cbec7[_0xc69baa(0x17e)]=_0x1cbf23[_0xc69baa(0x1b4)],_0x2cbec7[_0xc69baa(0x190)]=_0x4f6dc8,_0x2cbec7[_0xc69baa(0x171)]=await _0x169da0[_0xc69baa(0x15a)]({'type':_0xc69baa(0x168),'compression':'DEFLATE','compressionOptions':{'level':0x6}}),_0x2cbec7;}[a272_0x143197(0x1ae)](_0x409265,_0x5ee219,_0x121671){const _0x37e3ee=a272_0x143197,_0x1329ae=new Date()[_0x37e3ee(0x192)](),_0xa4e0ad={};return _0xa4e0ad[constants_1[_0x37e3ee(0x1a3)]+_0x37e3ee(0x15e)]=_0x5ee219,_0xa4e0ad[constants_1['FLOSUM_NAMESPACE']+_0x37e3ee(0x189)]=_0x409265[_0x37e3ee(0x16a)],_0xa4e0ad[constants_1[_0x37e3ee(0x1a3)]+_0x37e3ee(0x19b)]=_0x1329ae,_0xa4e0ad[constants_1[_0x37e3ee(0x1a3)]+_0x37e3ee(0x172)]=this['username'],_0xa4e0ad[constants_1[_0x37e3ee(0x1a3)]+_0x37e3ee(0x181)]=_0x121671?_0x121671+0x1:0x1,_0xa4e0ad[constants_1[_0x37e3ee(0x1b1)]+'Is_From_Agent__c']=!![],_0xa4e0ad;}[a272_0x143197(0x153)](_0x431493,_0xe57b20){const _0x5b75e8=a272_0x143197;var _0x1fe462,_0xb43ae9;const _0x551c1d=new Date()[_0x5b75e8(0x192)](),_0xe83db8={};return!_0xe57b20?(this[_0x5b75e8(0x1b7)]?(_0xe83db8[constants_1[_0x5b75e8(0x1a3)]+_0x5b75e8(0x19e)]=this['branchId'],_0xe83db8[constants_1[_0x5b75e8(0x1a3)]+'Source__c']=_0x5b75e8(0x152),_0xe83db8[_0x5b75e8(0x170)]=(_0x1fe462=this['recordTypes'][_0x5b75e8(0x195)](_0x11c87a=>_0x11c87a[_0x5b75e8(0x17c)]===_0x5b75e8(0x152)))===null||_0x1fe462===void 0x0?void 0x0:_0x1fe462['id']):(_0xe83db8[constants_1[_0x5b75e8(0x1a3)]+_0x5b75e8(0x18f)]=this[_0x5b75e8(0x16f)],_0xe83db8[constants_1[_0x5b75e8(0x1a3)]+_0x5b75e8(0x1a7)]=_0x5b75e8(0x177),_0xe83db8[_0x5b75e8(0x170)]=(_0xb43ae9=this[_0x5b75e8(0x19d)][_0x5b75e8(0x195)](_0x59b3df=>_0x59b3df[_0x5b75e8(0x17c)]===_0x5b75e8(0x177)))===null||_0xb43ae9===void 0x0?void 0x0:_0xb43ae9['id']),_0xe83db8[constants_1['FLOSUM_NAMESPACE']+_0x5b75e8(0x181)]=0x1):_0xe83db8[constants_1['FLOSUM_NAMESPACE']+_0x5b75e8(0x181)]=_0xe57b20[_0x5b75e8(0x17f)]+0x1,_0xe83db8[constants_1[_0x5b75e8(0x1a3)]+_0x5b75e8(0x19a)]=_0x431493[_0x5b75e8(0x1b4)],_0xe83db8[constants_1[_0x5b75e8(0x1a3)]+_0x5b75e8(0x1a0)]=_0x431493[_0x5b75e8(0x17c)],_0xe83db8[constants_1[_0x5b75e8(0x1a3)]+'File_Name__c']=_0x431493[_0x5b75e8(0x18c)],_0xe83db8[constants_1[_0x5b75e8(0x1a3)]+_0x5b75e8(0x1a4)]=this['username'],_0xe83db8[constants_1['FLOSUM_NAMESPACE']+_0x5b75e8(0x1ab)]=this['username'],_0xe83db8[constants_1[_0x5b75e8(0x1a3)]+_0x5b75e8(0x197)]=_0x551c1d,_0xe83db8[constants_1['FLOSUM_NAMESPACE']+'Committed_On__c']=_0x551c1d,_0xe83db8[constants_1[_0x5b75e8(0x1a3)]+_0x5b75e8(0x189)]=_0x431493[_0x5b75e8(0x16a)],_0xe83db8[constants_1[_0x5b75e8(0x1a3)]+_0x5b75e8(0x187)]=_0x431493['vlocityComponentName'],_0xe83db8[constants_1['FLOSUM_NAMESPACE']+_0x5b75e8(0x194)]=_0x431493['isVlocityComponent'],_0xe83db8[constants_1[_0x5b75e8(0x1a3)]+_0x5b75e8(0x1bb)]=_0x431493[_0x5b75e8(0x199)],_0xe83db8;}[a272_0x143197(0x176)](){const _0x155ff7=a272_0x143197;return this[_0x155ff7(0x179)];}async[a272_0x143197(0x158)](_0x14d3ae,_0x1b3bea){const _0x201bd4=a272_0x143197,_0x2cfd0f=[];for(const _0x3cf8b3 of _0x14d3ae){const _0x5de018=(0x0,composite_utils_1[_0x201bd4(0x18d)])(constants_1[_0x201bd4(0x1b2)],this['prepareComponentRecord'](_0x3cf8b3)),_0x2764f4=(0x0,composite_utils_1[_0x201bd4(0x18d)])(constants_1[_0x201bd4(0x1a6)],this['prepareComponentHistoryRecord'](_0x3cf8b3,'@{'+_0x5de018[_0x201bd4(0x188)]+_0x201bd4(0x19f))),_0x24eb39=(0x0,composite_utils_1[_0x201bd4(0x18d)])(constants_1['FLOSUM_ATTACHMENT'],await this[_0x201bd4(0x174)](_0x3cf8b3,'@{'+_0x2764f4[_0x201bd4(0x188)]+_0x201bd4(0x19f)));this['proceedComponentMeta'](_0x5de018[_0x201bd4(0x1b8)][_0x201bd4(0x1b5)],_0x5de018['reference']),_0x2cfd0f['push'](_0x5de018['request'],_0x2764f4[_0x201bd4(0x1b8)],_0x24eb39['request']),_0x1b3bea&&_0x2cfd0f[_0x201bd4(0x182)](this[_0x201bd4(0x191)](_0x1b3bea,'@{'+_0x2764f4[_0x201bd4(0x188)]+'.id}'));}return _0x2cfd0f;}async['update'](_0x499889,_0x9615e3=''){const _0xaaf8f6=a272_0x143197,_0x323bc7=[];for(const {component:_0x4731a7,meta:_0x55e07f}of _0x499889){if(!_0x55e07f['id']){const _0x8f17aa=this['proceededComponentsMeta']['find'](_0x2e4b40=>_0x2e4b40['componentName']===_0x4731a7[_0xaaf8f6(0x17c)]&&_0x2e4b40[_0xaaf8f6(0x163)]===_0x4731a7[_0xaaf8f6(0x1b4)]);if(!_0x8f17aa)throw new salesforce_error_1[(_0xaaf8f6(0x162))](new Error(_0xaaf8f6(0x18a)+_0x4731a7[_0xaaf8f6(0x17c)]+'\x20['+_0x4731a7['type']+_0xaaf8f6(0x156)));_0x55e07f['id']=_0x8f17aa[_0xaaf8f6(0x155)];}const _0x547e3d=(0x0,composite_utils_1[_0xaaf8f6(0x183)])(constants_1[_0xaaf8f6(0x1b2)],_0x55e07f['id'],this[_0xaaf8f6(0x153)](_0x4731a7,_0x55e07f)),_0x5e473f=(0x0,composite_utils_1[_0xaaf8f6(0x18d)])(constants_1[_0xaaf8f6(0x1a6)],this['prepareComponentHistoryRecord'](_0x4731a7,_0x55e07f['id'],_0x55e07f['version'])),_0x4b687d=(0x0,composite_utils_1[_0xaaf8f6(0x18d)])(constants_1[_0xaaf8f6(0x184)],await this[_0xaaf8f6(0x174)](_0x4731a7,'@{'+_0x5e473f[_0xaaf8f6(0x188)]+_0xaaf8f6(0x19f)));this[_0xaaf8f6(0x186)](_0x547e3d[_0xaaf8f6(0x1b8)]['body'],_0x547e3d[_0xaaf8f6(0x188)]),_0x323bc7[_0xaaf8f6(0x182)](_0x547e3d[_0xaaf8f6(0x1b8)],_0x5e473f[_0xaaf8f6(0x1b8)],_0x4b687d[_0xaaf8f6(0x1b8)]),_0x9615e3&&_0x323bc7[_0xaaf8f6(0x182)](this['prepareCommitManifest'](_0x9615e3,'@{'+_0x5e473f[_0xaaf8f6(0x188)]+_0xaaf8f6(0x19f)));}return _0x323bc7;}async[a272_0x143197(0x1b0)](_0x4047c4,_0xe822f8=![]){const _0x1682f2=a272_0x143197,_0x2bb2d6={'manifests':[],'componentsToDelete':[],'componentsToUpdate':[]},_0x9c1c19=[];for(const _0x3fba3e of _0x4047c4){if(_0x3fba3e['id'])_0x9c1c19[_0x1682f2(0x182)](_0x3fba3e['id']);else{const _0x4a063b=this[_0x1682f2(0x179)]['find'](_0x5ba828=>_0x5ba828['componentName']===_0x3fba3e['name']&&_0x5ba828[_0x1682f2(0x163)]===_0x3fba3e[_0x1682f2(0x1b4)]);if(!_0x4a063b||!_0x4a063b[_0x1682f2(0x155)])continue;_0x9c1c19[_0x1682f2(0x182)](_0x4a063b[_0x1682f2(0x155)]);}}if(_0xe822f8){const _0x974426=await this['gitSync'][_0x1682f2(0x17a)](_0x9c1c19);_0x2bb2d6['manifests']=_0x974426[_0x1682f2(0x151)](_0x151613=>(0x0,composite_utils_1[_0x1682f2(0x166)])(constants_1[_0x1682f2(0x15b)],_0x151613)[_0x1682f2(0x1b8)]);}return _0x2bb2d6[_0x1682f2(0x16e)]=_0x9c1c19['map'](_0x5b6449=>(0x0,composite_utils_1[_0x1682f2(0x183)])(constants_1[_0x1682f2(0x1b2)],_0x5b6449,{[constants_1[_0x1682f2(0x1b1)]+_0x1682f2(0x1a8)]:!![]})[_0x1682f2(0x1b8)]),_0x2bb2d6['componentsToDelete']=_0x9c1c19['map'](_0x274c27=>(0x0,composite_utils_1['createDeleteRequest'])(constants_1[_0x1682f2(0x1b2)],_0x274c27)['request']),_0x2bb2d6;}}exports[a272_0x143197(0x193)]=SalesforceComponentsManager;