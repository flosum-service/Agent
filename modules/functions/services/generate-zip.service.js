const a104_0x3224aa=a104_0x2ab4;(function(_0xac1c05,_0x2c622a){const _0x2c3fe5=a104_0x2ab4,_0x49290b=_0xac1c05();while(!![]){try{const _0x2ad915=parseInt(_0x2c3fe5(0x179))/0x1*(parseInt(_0x2c3fe5(0x185))/0x2)+parseInt(_0x2c3fe5(0x1be))/0x3+parseInt(_0x2c3fe5(0x1ad))/0x4*(-parseInt(_0x2c3fe5(0x1b1))/0x5)+parseInt(_0x2c3fe5(0x1cd))/0x6+-parseInt(_0x2c3fe5(0x176))/0x7+parseInt(_0x2c3fe5(0x17b))/0x8+-parseInt(_0x2c3fe5(0x1d2))/0x9;if(_0x2ad915===_0x2c622a)break;else _0x49290b['push'](_0x49290b['shift']());}catch(_0x378327){_0x49290b['push'](_0x49290b['shift']());}}}(a104_0x2d52,0xb3cf8));const a104_0x274348=(function(){let _0x13d309=!![];return function(_0x3a5e05,_0x137402){const _0x4e5179=_0x13d309?function(){const _0x4b3685=a104_0x2ab4;if(_0x137402){const _0x35c893=_0x137402[_0x4b3685(0x189)](_0x3a5e05,arguments);return _0x137402=null,_0x35c893;}}:function(){};return _0x13d309=![],_0x4e5179;};}()),a104_0x2d9146=a104_0x274348(this,function(){const _0x12db46=a104_0x2ab4;return a104_0x2d9146[_0x12db46(0x1b0)]()['search'](_0x12db46(0x1c2))['toString']()['constructor'](a104_0x2d9146)['search']('(((.+)+)+)+$');});a104_0x2d9146();function a104_0x2d52(){const _0x146048=['src','__importDefault','../utils/components-api','4FKcgUB','default','UTF-8','toString','1316365qfojyy','.temp','orgId','destructiveChangesPre.xml','then','get','Component__r','uuid','type','indexOf','../../git/writers/mdapi.writer','fetchAttachmentBody','length','1938153qwABhN','MDApiWriter','buildObject','MAX_ZIP_SIZE','(((.+)+)+)+$','async','createZip','substring','reduce','text','find','FOLDER_TO_METADATA_TYPE_MAP','push','join','DeclarativeFilterOptions','316494DdHjuD','../utils/extract-component-permissions','filter','DEFLATE','writeFile','2242224imqvzf','file','fs/promises','PartialRetrieve','6990739ntsgqm','body','http://soap.sforce.com/2006/04/metadata','1009273lySkmP','removeNamespacePrefix','4316136iMQHFZ','permissionsets','/services/data/v','Zip','DEPLOYZIP','1.0','every','fetchComponentsDetailsByComponentsHistory','generateAndDeployZip','toBuffer','2zXGVPk','addLocalFolder','PERMISSION_SET','defineProperty','apply','keys','cwd','extractComponentPermissions','map','xml2js','set','unzip','ParentId','Body','ComponentsApi','fileType','base64','../../shared/utils/fetch-attachments','__esModule','fileName','splitZip','Name','replace','components','exists','Logger','MetadataConstants','values','files','MetadataType','Component_Name__c','Builder','/sobjects/Attachment','post','BUILD','dir','adm-zip'];a104_0x2d52=function(){return _0x146048;};return a104_0x2d52();}'use strict';var __importDefault=this&&this[a104_0x3224aa(0x1ab)]||function(_0x491d60){return _0x491d60&&_0x491d60['__esModule']?_0x491d60:{'default':_0x491d60};};Object[a104_0x3224aa(0x188)](exports,a104_0x3224aa(0x197),{'value':!![]}),exports[a104_0x3224aa(0x183)]=void 0x0;const path_1=__importDefault(require('path')),extract_component_permissions_1=require(a104_0x3224aa(0x1ce)),logger_1=require('../classes/logger'),xml2js_1=require(a104_0x3224aa(0x18e)),zip_1=require('../../git/parsers/utils/zip'),mdapi_writer_1=require(a104_0x3224aa(0x1bb)),fs_internal_1=require('../../git/internal/fs.internal'),promises_1=require(a104_0x3224aa(0x174)),components_api_1=require(a104_0x3224aa(0x1ac)),adm_zip_1=__importDefault(require(a104_0x3224aa(0x1a9))),uuid_1=require(a104_0x3224aa(0x1b8)),fetch_attachments_1=require(a104_0x3224aa(0x196)),salesforce_1=require('@flosum/salesforce'),DESTRUCTIVE_CHANGES_PER_NAME=a104_0x3224aa(0x1b4),DESTRUCTIVE_CHANGES_POST_NAME='destructiveChangesPost.xml',DEPLOY_DIR_NAME=a104_0x3224aa(0x17f),PERMISSION_SET_FOLDER_NAME=a104_0x3224aa(0x17c);async function generateAndDeployZip({attachmentsId:_0x5f5391,isExtractComponentsPermissionSets:_0x4da941,isExtractComponentsProfiles:_0x13a7ac,preDestructiveAttachmentId:_0x216ae8,postDestructiveAttachmentId:_0x4f166d,branchId:_0x21a6dc,credentials:_0x6a726f,metadataLogId:_0x48bc52,environments:_0x515c26,metaTypes:_0x467ba1,apiVersion:_0x163b74},_0x47aa40,_0x59bc2a){const _0x299651=a104_0x3224aa;var _0x2cc1c0;const _0x2a45a0=(0x0,uuid_1['v4'])();try{const _0x2e25a9=await(0x0,fetch_attachments_1['fetchAttachmentsDetailsById'])(_0x47aa40,_0x5f5391),_0x3afcf7=_0x2e25a9[_0x299651(0x1c6)]((_0x4c8e69,_0x23c5cb)=>({..._0x4c8e69,[_0x23c5cb['Id']]:_0x23c5cb['Name']}),{}),_0xc58610=await getComponents(_0x2e25a9,_0x47aa40,_0x3afcf7),_0x2081b2=await components_api_1[_0x299651(0x193)][_0x299651(0x182)](_0x47aa40,_0x2e25a9[_0x299651(0x18d)](({ParentId:_0xd52fa})=>_0xd52fa),_0x163b74)['then'](_0x2cf805=>components_api_1[_0x299651(0x193)][_0x299651(0x17a)](_0x2cf805));if(_0x13a7ac){const _0x4eed6d=_0xc58610[_0x299651(0x1cf)](({fileType:_0x1ef0cc})=>_0x1ef0cc==='Profile');await removePermission(_0x4eed6d,_0x2081b2);}const _0x4d5153=_0xc58610[_0x299651(0x1cf)](({fileType:_0x20e567})=>_0x20e567==='PermissionSet');if(_0x4d5153[_0x299651(0x1bd)]&&_0x4da941){await removePermission(_0x4d5153,_0x2081b2);const {items:_0x797704}=await retrieveTargetPermissionSets(_0x4d5153,_0x163b74,_0x59bc2a);await mergePermissionSets(_0x4d5153,((_0x2cc1c0=_0x797704['PermissionSet'])===null||_0x2cc1c0===void 0x0?void 0x0:_0x2cc1c0[_0x299651(0x19c)])||[]);}await replaceEnvironments(_0x467ba1,_0x515c26,_0xc58610),await writeZip(_0xc58610,_0x2a45a0),await generateAndWritePackageXML(_0x2e25a9,_0x2081b2,_0x2a45a0,_0x163b74);_0x216ae8&&await saveDestructiveChanges(_0x47aa40,_0x216ae8,DESTRUCTIVE_CHANGES_PER_NAME,_0x2a45a0);_0x4f166d&&await saveDestructiveChanges(_0x47aa40,_0x4f166d,DESTRUCTIVE_CHANGES_POST_NAME,_0x2a45a0);const _0x22d9c6=(await createDeployZip(_0x2a45a0)[_0x299651(0x1b5)](_0x3d8d5c=>{return _0x3d8d5c;}))[_0x299651(0x184)]()[_0x299651(0x1b0)](_0x299651(0x195)),_0x437a71=_0x22d9c6[_0x299651(0x1bd)];if(_0x437a71>=components_api_1[_0x299651(0x1c1)]){const _0x2835a2=await createDeployZip(_0x2a45a0),[_0x9368c,_0x2157e9]=await components_api_1['ComponentsApi'][_0x299651(0x199)](_0x2835a2,_0x437a71),_0xcada99=await insertZip(_0x47aa40,_0x21a6dc,_0x6a726f['orgId'],_0x48bc52,_0x9368c[_0x299651(0x184)]()[_0x299651(0x1b0)]('base64'),_0x163b74),_0x307848=await insertZip(_0x47aa40,_0x21a6dc,_0x6a726f[_0x299651(0x1b3)],_0x48bc52,_0x2157e9[_0x299651(0x184)]()[_0x299651(0x1b0)](_0x299651(0x195)),_0x163b74);return _0xcada99+','+_0x307848;}else return await insertZip(_0x47aa40,_0x21a6dc,_0x6a726f[_0x299651(0x1b3)],_0x48bc52,_0x22d9c6,_0x163b74);}catch(_0x3e8f32){throw _0x3e8f32;}finally{if(await fs_internal_1['FS'][_0x299651(0x19d)](path_1[_0x299651(0x1ae)][_0x299651(0x1cb)](process[_0x299651(0x18b)](),_0x299651(0x1b2),_0x2a45a0)))await(0x0,promises_1['rm'])(path_1['default'][_0x299651(0x1cb)](process[_0x299651(0x18b)](),_0x299651(0x1b2),_0x2a45a0),{'recursive':!![]});}}exports['generateAndDeployZip']=generateAndDeployZip;async function getComponents(_0xc3d77e,_0x39abae,_0x4ca051){const _0x277f18=a104_0x3224aa,_0x1e43e5=[],_0x8d5e06=await(0x0,fetch_attachments_1['retrieveAttachments'])(_0xc3d77e,_0x39abae);return await getComponentFromZip(_0x8d5e06,_0x4ca051)[_0x277f18(0x1b5)](_0x11e9a0=>{const _0x3e5c0c=_0x277f18;_0x1e43e5[_0x3e5c0c(0x1ca)](..._0x11e9a0);}),_0x1e43e5;}async function getComponentFromZip(_0x488376,_0x4fbafd){const _0x531597=a104_0x3224aa,_0x2e3807=[];for(const _0x2ebe65 of _0x488376){const _0x3cc1a3=await zip_1[_0x531597(0x17e)][_0x531597(0x190)](_0x2ebe65[_0x531597(0x1a0)][_0x531597(0x192)]);for(const _0x13b6bc in _0x3cc1a3['files']){!_0x3cc1a3[_0x531597(0x1a1)][_0x13b6bc][_0x531597(0x1a8)]&&_0x2e3807[_0x531597(0x1ca)]({'fileName':_0x13b6bc[_0x531597(0x1c5)](_0x13b6bc[_0x531597(0x1ba)]('/')+0x1),'fileType':_0x4fbafd[_0x2ebe65['id']],'body':_0x2ebe65[_0x531597(0x1a0)][_0x531597(0x192)]});}}return _0x2e3807;}async function removePermission(_0x47b239,_0x1acac4){const _0x2dbfec=a104_0x3224aa;for(const _0x293245 of _0x47b239){const _0x3b9474=await zip_1[_0x2dbfec(0x17e)][_0x2dbfec(0x190)](_0x293245[_0x2dbfec(0x177)]),_0x37311e=[];for(const _0x4e1bab in _0x3b9474[_0x2dbfec(0x1a1)]){!_0x3b9474['files'][_0x4e1bab][_0x2dbfec(0x1a8)]&&_0x37311e['push']({'fileName':_0x4e1bab,'body':await _0x3b9474[_0x2dbfec(0x1a1)][_0x4e1bab][_0x2dbfec(0x1c3)](_0x2dbfec(0x1c7))});}const _0x2307b0=await(0x0,extract_component_permissions_1[_0x2dbfec(0x18c)])(_0x37311e[0x0][_0x2dbfec(0x177)]['toString'](),_0x1acac4,_0x293245['fileType']),_0x4a96a4=new xml2js_1[(_0x2dbfec(0x1a4))]({'xmldec':{'version':_0x2dbfec(0x180),'encoding':_0x2dbfec(0x1af)}}),_0x2d6461=_0x4a96a4[_0x2dbfec(0x1c0)](_0x2307b0),_0x475e50=zip_1[_0x2dbfec(0x17e)]['createZip']();_0x475e50[_0x2dbfec(0x173)](_0x37311e[0x0]['fileName'],_0x2d6461),_0x293245['body']=await _0x475e50['generateAsync']({'type':_0x2dbfec(0x195),'compression':'DEFLATE','compressionOptions':{'level':0x6}});}}async function retrieveTargetPermissionSets(_0x3857ba,_0x16ecc6,_0x4fde3d){const _0x4f33ea=a104_0x3224aa,_0x220370=_0x3857ba['map'](_0x1947e1=>PERMISSION_SET_FOLDER_NAME+'/'+_0x1947e1[_0x4f33ea(0x198)])['join'](';'),_0x10c412=[{'field':_0x4f33ea(0x198),'option':salesforce_1[_0x4f33ea(0x1cc)]['IN'],'value':_0x220370}],_0x4debc0=new logger_1[(_0x4f33ea(0x19e))]();return new salesforce_1[(_0x4f33ea(0x175))](_0x16ecc6,_0x4fde3d,_0x4debc0,_0x10c412,null,[salesforce_1[_0x4f33ea(0x1a2)][_0x4f33ea(0x187)]])['execute']();}async function mergePermissionSets(_0x423f30,_0x27c984){const _0x7f99de=a104_0x3224aa,_0x459208=_0x27c984['reduce']((_0x4eb8b3,_0x5a8b50)=>_0x4eb8b3[_0x7f99de(0x18f)](_0x5a8b50['listMetadataItem'][_0x7f99de(0x198)],_0x5a8b50),new Map());for(const _0x5d05b5 of _0x423f30){const _0x5eee67=PERMISSION_SET_FOLDER_NAME+'/'+_0x5d05b5['fileName'],_0x3c3ffc=_0x459208[_0x7f99de(0x1b6)](_0x5eee67);if(!_0x3c3ffc)continue;const _0x1f5dd2=await zip_1[_0x7f99de(0x17e)][_0x7f99de(0x190)](_0x5d05b5[_0x7f99de(0x177)]),_0x5876de=await _0x1f5dd2[_0x7f99de(0x1a1)][_0x5eee67][_0x7f99de(0x1c3)]('text'),_0xbbd432=_0x3c3ffc[_0x7f99de(0x1a1)][_0x5eee67][_0x7f99de(0x1b0)](),_0x770a7c=await(0x0,extract_component_permissions_1['mergeComponentPermissions'])(_0x5876de,_0xbbd432,_0x5d05b5[_0x7f99de(0x194)]),_0x474259=zip_1['Zip'][_0x7f99de(0x1c4)]();_0x474259[_0x7f99de(0x173)](_0x5eee67,_0x770a7c),_0x5d05b5[_0x7f99de(0x177)]=await _0x474259['generateAsync']({'type':_0x7f99de(0x195),'compression':'DEFLATE','compressionOptions':{'level':0x6}});}}async function replaceEnvironments(_0x3f7de2,_0x58d07a,_0x495067){const _0x2e04a6=a104_0x3224aa;for(const _0x407d2d of _0x495067){if(_0x3f7de2[_0x2e04a6(0x181)](_0x188480=>_0x188480!==_0x407d2d[_0x2e04a6(0x194)]))continue;const _0x62028c=await zip_1[_0x2e04a6(0x17e)][_0x2e04a6(0x190)](_0x407d2d['body']);for(const _0x73f1a9 in _0x62028c[_0x2e04a6(0x1a1)]){if(!_0x62028c[_0x2e04a6(0x1a1)][_0x73f1a9][_0x2e04a6(0x1a8)]){let _0x34f30c=await _0x62028c[_0x2e04a6(0x1a1)][_0x73f1a9][_0x2e04a6(0x1c3)](_0x2e04a6(0x1c7));for(const _0x1b417a of Object[_0x2e04a6(0x18a)](_0x58d07a)){const _0x4c0d9b=new RegExp('%%'+_0x1b417a+'%%','g');_0x34f30c=_0x34f30c[_0x2e04a6(0x19b)](_0x4c0d9b,_0x58d07a[_0x1b417a]);}_0x62028c[_0x2e04a6(0x173)](_0x73f1a9,_0x34f30c);}}_0x407d2d['body']=await _0x62028c['generateAsync']({'type':_0x2e04a6(0x195),'compression':_0x2e04a6(0x1d0),'compressionOptions':{'level':0x6}});}}async function writeZip(_0x3001e1,_0x4f6cd9){const _0x1db159=a104_0x3224aa,_0x161ac8=new mdapi_writer_1[(_0x1db159(0x1bf))]({'components':_0x3001e1,'sourceDir':path_1[_0x1db159(0x1ae)][_0x1db159(0x1cb)](process[_0x1db159(0x18b)](),'.temp',_0x4f6cd9,DEPLOY_DIR_NAME,'src'),'skipChildErrors':![]});await _0x161ac8['execute']();}async function generateAndWritePackageXML(_0x41046d,_0x4414ea,_0x54e742,_0x414586){const _0x1b79b0=a104_0x3224aa,_0x35c94d=getComponentsTypeAndName(_0x41046d,_0x4414ea),_0x353c3a=[...new Set(_0x35c94d[_0x1b79b0(0x18d)](_0x225175=>_0x225175[_0x1b79b0(0x1b9)]))],_0x3ed59f={'Package':{'$':{'xmlns':_0x1b79b0(0x178)},'types':[],'version':''+_0x414586}};for(const _0x51768c of _0x353c3a){const _0x2f2b59=_0x35c94d[_0x1b79b0(0x1cf)](_0x2fb8b5=>_0x2fb8b5[_0x1b79b0(0x1b9)]===_0x51768c)[_0x1b79b0(0x18d)](_0x43c675=>_0x43c675['name']),_0x96ad62={'members':_0x2f2b59,'name':_0x51768c};_0x3ed59f['Package']['types'][_0x1b79b0(0x1ca)](_0x96ad62);}const _0x155d9b=new xml2js_1[(_0x1b79b0(0x1a4))]({'xmldec':{'version':'1.0','encoding':_0x1b79b0(0x1af)}}),_0x4b5f48=_0x155d9b['buildObject'](_0x3ed59f);await fs_internal_1['FS'][_0x1b79b0(0x1d1)](path_1[_0x1b79b0(0x1ae)][_0x1b79b0(0x1cb)](process[_0x1b79b0(0x18b)](),_0x1b79b0(0x1b2),_0x54e742,DEPLOY_DIR_NAME,_0x1b79b0(0x1aa),'package.xml'),_0x4b5f48);}function getComponentsTypeAndName(_0xe1d55c,_0x4b0b96){const _0x4e307f=a104_0x3224aa;return _0xe1d55c[_0x4e307f(0x1c6)]((_0x32b970,_0x58fc69)=>{const _0x5cbcbd=_0x4e307f,_0x85df9c=_0x4b0b96[_0x5cbcbd(0x1c8)](_0xcb4c98=>_0xcb4c98['Id']===_0x58fc69[_0x5cbcbd(0x191)]);return _0x85df9c&&_0x32b970['push']({'name':_0x85df9c[_0x5cbcbd(0x1b7)][_0x5cbcbd(0x1a3)],'type':salesforce_1[_0x5cbcbd(0x19f)][_0x5cbcbd(0x1c9)][_0x58fc69[_0x5cbcbd(0x19a)]]||_0x58fc69[_0x5cbcbd(0x19a)]}),_0x32b970;},[]);}async function saveDestructiveChanges(_0x3bae4f,_0x249adc,_0x3dd2b5,_0x4a80d0){const _0x52a61a=a104_0x3224aa,_0x2df05a=(await(0x0,fetch_attachments_1[_0x52a61a(0x1bc)])(_0x3bae4f,_0x249adc))['toString']();await fs_internal_1['FS'][_0x52a61a(0x1d1)](path_1[_0x52a61a(0x1ae)][_0x52a61a(0x1cb)](process[_0x52a61a(0x18b)](),'.temp',_0x4a80d0,DEPLOY_DIR_NAME,_0x52a61a(0x1aa),_0x3dd2b5),_0x2df05a);}async function createDeployZip(_0x4cd239){const _0x5eb109=a104_0x3224aa,_0xd8ef08=new adm_zip_1['default']();return await _0xd8ef08[_0x5eb109(0x186)](path_1['default'][_0x5eb109(0x1cb)](process['cwd'](),'.temp',_0x4cd239,DEPLOY_DIR_NAME)),_0xd8ef08;}function a104_0x2ab4(_0x55d9e0,_0x27a682){const _0x4b18fd=a104_0x2d52();return a104_0x2ab4=function(_0x2d9146,_0x274348){_0x2d9146=_0x2d9146-0x173;let _0x2d524c=_0x4b18fd[_0x2d9146];return _0x2d524c;},a104_0x2ab4(_0x55d9e0,_0x27a682);}async function insertZip(_0x196bda,_0x47af9e,_0x37ed32,_0x411a84,_0x5c41e6,_0x5c5386){const _0x228b6a=a104_0x3224aa,_0x1a335d={'ParentId':_0x47af9e,'Name':_0x228b6a(0x1a7)+_0x37ed32,'Description':_0x228b6a(0x1a7)+_0x411a84,'Body':_0x5c41e6},{data:_0x48087b}=await _0x196bda[_0x228b6a(0x1a6)](_0x228b6a(0x17d)+_0x5c5386+_0x228b6a(0x1a5),_0x1a335d);return _0x48087b['id'];}