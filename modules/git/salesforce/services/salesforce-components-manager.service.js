const a273_0x1ac6d7=a273_0xff69;(function(_0x19121d,_0x22269c){const _0x3b81b6=a273_0xff69,_0x2fa236=_0x19121d();while(!![]){try{const _0x46542b=parseInt(_0x3b81b6(0x223))/0x1*(parseInt(_0x3b81b6(0x245))/0x2)+parseInt(_0x3b81b6(0x226))/0x3*(parseInt(_0x3b81b6(0x20d))/0x4)+-parseInt(_0x3b81b6(0x203))/0x5*(-parseInt(_0x3b81b6(0x200))/0x6)+parseInt(_0x3b81b6(0x219))/0x7*(-parseInt(_0x3b81b6(0x202))/0x8)+parseInt(_0x3b81b6(0x215))/0x9+parseInt(_0x3b81b6(0x250))/0xa+parseInt(_0x3b81b6(0x22b))/0xb*(-parseInt(_0x3b81b6(0x224))/0xc);if(_0x46542b===_0x22269c)break;else _0x2fa236['push'](_0x2fa236['shift']());}catch(_0x525860){_0x2fa236['push'](_0x2fa236['shift']());}}}(a273_0x843a,0x98dd8));const a273_0x530f98=(function(){let _0x19f0ed=!![];return function(_0x29944e,_0x27384c){const _0x312e50=_0x19f0ed?function(){const _0x5f9971=a273_0xff69;if(_0x27384c){const _0x5c2818=_0x27384c[_0x5f9971(0x234)](_0x29944e,arguments);return _0x27384c=null,_0x5c2818;}}:function(){};return _0x19f0ed=![],_0x312e50;};}()),a273_0x3acdd9=a273_0x530f98(this,function(){const _0x3ca5e3=a273_0xff69;return a273_0x3acdd9['toString']()[_0x3ca5e3(0x24f)](_0x3ca5e3(0x1fa))[_0x3ca5e3(0x235)]()[_0x3ca5e3(0x23c)](a273_0x3acdd9)[_0x3ca5e3(0x24f)](_0x3ca5e3(0x1fa));});function a273_0xff69(_0x5c0fa6,_0x50b22){const _0x48f5e4=a273_0x843a();return a273_0xff69=function(_0x3acdd9,_0x530f98){_0x3acdd9=_0x3acdd9-0x1ec;let _0x843a89=_0x48f5e4[_0x3acdd9];return _0x843a89;},a273_0xff69(_0x5c0fa6,_0x50b22);}a273_0x3acdd9();'use strict';var __importDefault=this&&this[a273_0x1ac6d7(0x1f6)]||function(_0x1f5147){const _0x46ac2c=a273_0x1ac6d7;return _0x1f5147&&_0x1f5147[_0x46ac2c(0x1fb)]?_0x1f5147:{'default':_0x1f5147};};Object[a273_0x1ac6d7(0x23b)](exports,a273_0x1ac6d7(0x1fb),{'value':!![]}),exports['SalesforceComponentsManager']=void 0x0;function a273_0x843a(){const _0x3fcd3d=['193653VeplMH','Changed_By__c','MC_Key__c','username','763721BKaEPN','FLOSUM_COMPONENT_HISTORY','FLOSUM_GIT_NAMESPACE','../../parsers/utils/zip','prepareCommitManifest','Source__c','Vlocity_Component__c','extractFieldsFromRecord','prepareComponentAttachmentRecord','prepareComponentHistoryRecord','122BKXlOE','5192376CBOJxv','Component_Type__c','6iTZCqB','Committed_On__c','logger','componentsToUpdate','Component_Name__c','22JwIsNw','Repository__c','createDeleteRequest','fetchCommitManifestsByComponentIds','componentId','Branch','default','vlocityComponentName','RecordTypeId','apply','toString','ContentType','Is_From_Agent__c','filePath','type','CRC32__c','defineProperty','constructor','body','Body','repositoryId','map','FLOSUM_ATTACHMENT','update','request','isVlocityComponent','4270OGmTmD','.id}','name','createPatchRequest','createPostRequest','keys','manifests','../errors/salesforce.error','../../../../constants','FLOSUM_COMPONENT','search','5951630BurrRC','reference','Branch__c','Vlocity_Component_Name__c','files','DEFLATE','Commit__c','FLOSUM_NAMESPACE','Description','branchId','componentName','../../../../core','push','Component__c','Name','__importDefault','componentType','typedi','recordTypes','(((.+)+)+)+$','__esModule','Repository','base64','proceededComponentsMeta','ParentId','2094inEoAU','Deletion_By_Agent__c','72ApvfSb','16895OzCxdl','getProceededComponentsMeta','prepareComponentRecord','FLOSUM_COMMIT_MANIFEST','Last_Updated_By__c','SalesforceError','insert','find','version','Version__c','834076TIBZMQ','marketingCloudKey','proceedComponentMeta','file','Last_Modified_Date__c','crc','SalesforceGitSyncService','gitSync'];a273_0x843a=function(){return _0x3fcd3d;};return a273_0x843a();}const constants_1=require(a273_0x1ac6d7(0x24d)),core_1=require(a273_0x1ac6d7(0x1f2)),zip_1=require(a273_0x1ac6d7(0x21c)),typedi_1=__importDefault(require(a273_0x1ac6d7(0x1f8))),salesforce_error_1=require(a273_0x1ac6d7(0x24c)),composite_utils_1=require('../utils/composite.utils'),flosum_naming_utils_1=require('../utils/flosum-naming.utils'),salesforce_git_sync_service_1=require('./salesforce-git-sync.service');class SalesforceComponentsManager{constructor(_0x39ae4b,_0x64b80,_0x567fc7,_0x40bd68,_0xd6f532){const _0x415e62=a273_0x1ac6d7;this[_0x415e62(0x23f)]=_0x39ae4b,this[_0x415e62(0x1f0)]=_0x64b80,this[_0x415e62(0x218)]=_0x567fc7,this[_0x415e62(0x1f9)]=_0x40bd68,this[_0x415e62(0x1fe)]=_0xd6f532,this[_0x415e62(0x228)]=new core_1['Logger'](SalesforceComponentsManager[_0x415e62(0x247)]),this['gitSync']=typedi_1[_0x415e62(0x231)]['get'](salesforce_git_sync_service_1[_0x415e62(0x213)]);}['proceedComponentMeta'](_0x2b560b,_0x2f4bdd){const _0x565de7=a273_0x1ac6d7,_0x462177=(0x0,flosum_naming_utils_1[_0x565de7(0x220)])(_0x2b560b,[_0x565de7(0x225),_0x565de7(0x22a),_0x565de7(0x20c)]);this[_0x565de7(0x1fe)][_0x565de7(0x1f3)]({'componentId':'','reference':_0x2f4bdd,'version':_0x462177[_0x565de7(0x20c)],'componentName':_0x462177[_0x565de7(0x22a)],'componentType':_0x462177[_0x565de7(0x225)]});}[a273_0x1ac6d7(0x21d)](_0x3590cf,_0x4d6c3e){const _0x149875=a273_0x1ac6d7,{request:_0x43f16c}=(0x0,composite_utils_1[_0x149875(0x249)])(constants_1[_0x149875(0x206)],{[constants_1[_0x149875(0x1ee)]+_0x149875(0x1ed)]:_0x3590cf,[constants_1[_0x149875(0x1ee)]+'Component_History__c']:_0x4d6c3e});return _0x43f16c;}async[a273_0x1ac6d7(0x221)](_0x2e9a6a,_0x1afb80){const _0x125f8c=a273_0x1ac6d7,_0x5a0c59={},_0x44115c=zip_1['Zip']['createZip']();for(const _0x250e6a of Object[_0x125f8c(0x24a)](_0x2e9a6a['files'])){_0x44115c[_0x125f8c(0x210)](_0x250e6a,_0x2e9a6a[_0x125f8c(0x254)][_0x250e6a],{'createFolders':!![]});}return _0x5a0c59[_0x125f8c(0x236)]='application/zip',_0x5a0c59[_0x125f8c(0x1f5)]=_0x2e9a6a[_0x125f8c(0x239)],_0x5a0c59[_0x125f8c(0x1ef)]=_0x2e9a6a[_0x125f8c(0x239)],_0x5a0c59[_0x125f8c(0x1ff)]=_0x1afb80,_0x5a0c59[_0x125f8c(0x23e)]=await _0x44115c['generateAsync']({'type':_0x125f8c(0x1fd),'compression':_0x125f8c(0x1ec),'compressionOptions':{'level':0x6}}),_0x5a0c59;}[a273_0x1ac6d7(0x222)](_0x3267c8,_0x5debff,_0x2fdbb8){const _0x2ecf29=a273_0x1ac6d7,_0x288675=new Date()['toISOString'](),_0x3d161c={};return _0x3d161c[constants_1[_0x2ecf29(0x1ee)]+_0x2ecf29(0x1f4)]=_0x5debff,_0x3d161c[constants_1[_0x2ecf29(0x1ee)]+'CRC32__c']=_0x3267c8[_0x2ecf29(0x212)],_0x3d161c[constants_1[_0x2ecf29(0x1ee)]+'Changed_On__c']=_0x288675,_0x3d161c[constants_1[_0x2ecf29(0x1ee)]+_0x2ecf29(0x216)]=this[_0x2ecf29(0x218)],_0x3d161c[constants_1[_0x2ecf29(0x1ee)]+_0x2ecf29(0x20c)]=_0x2fdbb8?_0x2fdbb8+0x1:0x1,_0x3d161c[constants_1[_0x2ecf29(0x21b)]+_0x2ecf29(0x237)]=!![],_0x3d161c;}[a273_0x1ac6d7(0x205)](_0x515996,_0x473d80){const _0x1243ba=a273_0x1ac6d7;var _0x2b47ed,_0x5d2d87;const _0x4f2a28=new Date()['toISOString'](),_0x2235d3={};return!_0x473d80?(this[_0x1243ba(0x1f0)]?(_0x2235d3[constants_1[_0x1243ba(0x1ee)]+_0x1243ba(0x252)]=this[_0x1243ba(0x1f0)],_0x2235d3[constants_1[_0x1243ba(0x1ee)]+_0x1243ba(0x21e)]='Branch',_0x2235d3[_0x1243ba(0x233)]=(_0x2b47ed=this[_0x1243ba(0x1f9)][_0x1243ba(0x20a)](_0x4e0e73=>_0x4e0e73[_0x1243ba(0x247)]===_0x1243ba(0x230)))===null||_0x2b47ed===void 0x0?void 0x0:_0x2b47ed['id']):(_0x2235d3[constants_1['FLOSUM_NAMESPACE']+_0x1243ba(0x22c)]=this[_0x1243ba(0x23f)],_0x2235d3[constants_1[_0x1243ba(0x1ee)]+'Source__c']=_0x1243ba(0x1fc),_0x2235d3[_0x1243ba(0x233)]=(_0x5d2d87=this['recordTypes'][_0x1243ba(0x20a)](_0x415e22=>_0x415e22[_0x1243ba(0x247)]==='Repository'))===null||_0x5d2d87===void 0x0?void 0x0:_0x5d2d87['id']),_0x2235d3[constants_1[_0x1243ba(0x1ee)]+_0x1243ba(0x20c)]=0x1):_0x2235d3[constants_1[_0x1243ba(0x1ee)]+'Version__c']=_0x473d80[_0x1243ba(0x20b)]+0x1,_0x2235d3[constants_1['FLOSUM_NAMESPACE']+_0x1243ba(0x225)]=_0x515996[_0x1243ba(0x239)],_0x2235d3[constants_1[_0x1243ba(0x1ee)]+_0x1243ba(0x22a)]=_0x515996[_0x1243ba(0x247)],_0x2235d3[constants_1[_0x1243ba(0x1ee)]+'File_Name__c']=_0x515996[_0x1243ba(0x238)],_0x2235d3[constants_1['FLOSUM_NAMESPACE']+_0x1243ba(0x207)]=this[_0x1243ba(0x218)],_0x2235d3[constants_1[_0x1243ba(0x1ee)]+'Last_Modified_By__c']=this[_0x1243ba(0x218)],_0x2235d3[constants_1[_0x1243ba(0x1ee)]+_0x1243ba(0x211)]=_0x4f2a28,_0x2235d3[constants_1['FLOSUM_NAMESPACE']+_0x1243ba(0x227)]=_0x4f2a28,_0x2235d3[constants_1['FLOSUM_NAMESPACE']+_0x1243ba(0x23a)]=_0x515996['crc'],_0x2235d3[constants_1['FLOSUM_NAMESPACE']+_0x1243ba(0x253)]=_0x515996[_0x1243ba(0x232)],_0x2235d3[constants_1[_0x1243ba(0x1ee)]+_0x1243ba(0x21f)]=_0x515996[_0x1243ba(0x244)],_0x2235d3[constants_1[_0x1243ba(0x1ee)]+_0x1243ba(0x217)]=_0x515996[_0x1243ba(0x20e)],_0x2235d3;}[a273_0x1ac6d7(0x204)](){const _0x5a7511=a273_0x1ac6d7;return this[_0x5a7511(0x1fe)];}async[a273_0x1ac6d7(0x209)](_0x185e94,_0xfd80a3){const _0x59afd9=a273_0x1ac6d7,_0x4080a7=[];for(const _0x53c11d of _0x185e94){const _0x2c8251=(0x0,composite_utils_1[_0x59afd9(0x249)])(constants_1[_0x59afd9(0x24e)],this['prepareComponentRecord'](_0x53c11d)),_0xf45f07=(0x0,composite_utils_1[_0x59afd9(0x249)])(constants_1[_0x59afd9(0x21a)],this[_0x59afd9(0x222)](_0x53c11d,'@{'+_0x2c8251[_0x59afd9(0x251)]+'.id}')),_0x5b57bb=(0x0,composite_utils_1[_0x59afd9(0x249)])(constants_1['FLOSUM_ATTACHMENT'],await this['prepareComponentAttachmentRecord'](_0x53c11d,'@{'+_0xf45f07[_0x59afd9(0x251)]+_0x59afd9(0x246)));this[_0x59afd9(0x20f)](_0x2c8251[_0x59afd9(0x243)][_0x59afd9(0x23d)],_0x2c8251[_0x59afd9(0x251)]),_0x4080a7[_0x59afd9(0x1f3)](_0x2c8251[_0x59afd9(0x243)],_0xf45f07[_0x59afd9(0x243)],_0x5b57bb[_0x59afd9(0x243)]),_0xfd80a3&&_0x4080a7[_0x59afd9(0x1f3)](this[_0x59afd9(0x21d)](_0xfd80a3,'@{'+_0xf45f07[_0x59afd9(0x251)]+_0x59afd9(0x246)));}return _0x4080a7;}async[a273_0x1ac6d7(0x242)](_0xc512df,_0x578318=''){const _0x24c924=a273_0x1ac6d7,_0x167928=[];for(const {component:_0x560669,meta:_0x3bb492}of _0xc512df){if(!_0x3bb492['id']){const _0x187abc=this[_0x24c924(0x1fe)][_0x24c924(0x20a)](_0x100e93=>_0x100e93[_0x24c924(0x1f1)]===_0x560669[_0x24c924(0x247)]&&_0x100e93[_0x24c924(0x1f7)]===_0x560669[_0x24c924(0x239)]);if(!_0x187abc)throw new salesforce_error_1[(_0x24c924(0x208))](new Error('Could\x20not\x20proceed\x20component\x20'+_0x560669[_0x24c924(0x247)]+'\x20['+_0x560669[_0x24c924(0x239)]+']\x20-\x20meta\x20not\x20found'));_0x3bb492['id']=_0x187abc['componentId'];}const _0x57015e=(0x0,composite_utils_1[_0x24c924(0x248)])(constants_1[_0x24c924(0x24e)],_0x3bb492['id'],this['prepareComponentRecord'](_0x560669,_0x3bb492)),_0x318fde=(0x0,composite_utils_1['createPostRequest'])(constants_1[_0x24c924(0x21a)],this[_0x24c924(0x222)](_0x560669,_0x3bb492['id'],_0x3bb492[_0x24c924(0x20b)])),_0x50cf6d=(0x0,composite_utils_1[_0x24c924(0x249)])(constants_1[_0x24c924(0x241)],await this[_0x24c924(0x221)](_0x560669,'@{'+_0x318fde[_0x24c924(0x251)]+_0x24c924(0x246)));this[_0x24c924(0x20f)](_0x57015e[_0x24c924(0x243)][_0x24c924(0x23d)],_0x57015e[_0x24c924(0x251)]),_0x167928['push'](_0x57015e[_0x24c924(0x243)],_0x318fde['request'],_0x50cf6d['request']),_0x578318&&_0x167928[_0x24c924(0x1f3)](this[_0x24c924(0x21d)](_0x578318,'@{'+_0x318fde[_0x24c924(0x251)]+_0x24c924(0x246)));}return _0x167928;}async['delete'](_0x53375d,_0x545abc=![]){const _0x2f69a9=a273_0x1ac6d7,_0x10b793={'manifests':[],'componentsToDelete':[],'componentsToUpdate':[]},_0x575313=[];for(const _0xb0bba6 of _0x53375d){if(_0xb0bba6['id'])_0x575313[_0x2f69a9(0x1f3)](_0xb0bba6['id']);else{const _0x5ccbeb=this['proceededComponentsMeta'][_0x2f69a9(0x20a)](_0x49c8a2=>_0x49c8a2['componentName']===_0xb0bba6['name']&&_0x49c8a2[_0x2f69a9(0x1f7)]===_0xb0bba6[_0x2f69a9(0x239)]);if(!_0x5ccbeb||!_0x5ccbeb[_0x2f69a9(0x22f)])continue;_0x575313[_0x2f69a9(0x1f3)](_0x5ccbeb[_0x2f69a9(0x22f)]);}}if(_0x545abc){const _0x5db534=await this[_0x2f69a9(0x214)][_0x2f69a9(0x22e)](_0x575313);_0x10b793[_0x2f69a9(0x24b)]=_0x5db534['map'](_0x352f71=>(0x0,composite_utils_1[_0x2f69a9(0x22d)])(constants_1[_0x2f69a9(0x206)],_0x352f71)[_0x2f69a9(0x243)]);}return _0x10b793[_0x2f69a9(0x229)]=_0x575313[_0x2f69a9(0x240)](_0x5196e8=>(0x0,composite_utils_1['createPatchRequest'])(constants_1['FLOSUM_COMPONENT'],_0x5196e8,{[constants_1[_0x2f69a9(0x21b)]+_0x2f69a9(0x201)]:!![]})[_0x2f69a9(0x243)]),_0x10b793['componentsToDelete']=_0x575313[_0x2f69a9(0x240)](_0x2b1015=>(0x0,composite_utils_1['createDeleteRequest'])(constants_1[_0x2f69a9(0x24e)],_0x2b1015)[_0x2f69a9(0x243)]),_0x10b793;}}exports['SalesforceComponentsManager']=SalesforceComponentsManager;