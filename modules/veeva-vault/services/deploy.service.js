function a402_0x533a(){const _0x4522f4=['generate','DEPLOYED','generateAsync','</a>','status','Component_Name__c','VpkService','componentType','_vpkService','../enums/status.enums','text/plain','/vpk__','_logger','_timeZone','_attachmentLogId','toLowerCase','6JjCTsh','componentName','TargetId__c','catch','<a\x20href=','Activity_Type__c','Result__c','_deploymentName','jszip','fetchAttachmentsDetailsByParentId','_salesforceService','Component_Type__c','2666700jvViUA','reduce','Save\x20Deployment\x20Results','./veeva.service','Save\x20log','_organisationId','../classes/retrievers/veeva-components/flosum-component.veeva-component.retriever','retrieve','_componentIdList','BACKUP_ZIP_NAME','execute','Is_Error__c','post','./package-import.service','name','componentIdList','logError','DeployService','_tempFolder','attachmentLogId','map','saveLog','BranchComponentHistoryFlosumComponentRetriever','SalesforceService','log','get','finishDeployWithError','../classes/errors/salesforce-dml-error','Activity_Item__c','componentHistoryId','External_Deployment_Id__c','1133952zxiIEx','Cannot\x20Backup\x20more\x20than\x20200\x20components.','_systemLogger','./salesforce.service','Join\x20all\x20mdl\x20into\x20one\x20zip','updateLog','packageId','_connectionVeeva','../constants/flosum.constants','base64','../../../constants','(((.+)+)+)+$','set','Cannot\x20retrieve\x20all\x20components.','Metadata_Log__c','Body','Type__c','Status__c','Retrieving\x20components','FLOSUM_NAMESPACE','COMPLETED','\x20has\x20been\x20created.','type','from','application/zip','error','createZip','./package-export.service','4021623yIdDTt','_instanceUrl','_branchId','deploymentName','_metadataLogId','PackageExportService','length','9026058NJwbqb','VeevaService','PackageImportService','saveDeploymentResults','11516421lomWgU','Deployment','default','metadataLogId','packageComponentList','Form\x20Deployment\x20Results','deploymentAction','Branch','errors','Veeva_Step_Name__c','FlosumComponentVeevaComponentRetriever','8sRbkBK','_packageExportService','../../shared/utils/fetch-attachments','\x20>\x20','createBackup','lastIndexOf','__importDefault','../classes/retrievers/flosum-components/branch-component-history.flosum-component.retriever','Succeed__c','shortid','validate','4776428nyokfS','__esModule','.zip','Cannot\x20retrievers\x20all\x20attachments','filter','Job_Completed__c','Action__c','Date__c','flat','apply','getFlosumComponents','createVpk','SalesforceDmlError','Log__c','_veevaService','toString','stepName','finishDeploy','Logger','Create\x20vpk\x20package','Success','253526oiEEZV','Retrieving\x20attachments','Save\x20Backup\x20to\x20Salesforce','slice','./vpk.service','search','with\x20error','Veeva\x20Deployment','import','formFlosumDeploymentResults','writeFile','../classes/deploy/zip-creator.deploy','_connectionSalesforce','FlosumConstants','insertMultipleRecords','patch','saveBackup','bind','Component_History__c','ENDPOINT_UPSERT_RECORD','_packageImportService','/Attachment'];a402_0x533a=function(){return _0x4522f4;};return a402_0x533a();}const a402_0x37d187=a402_0xa3ad;(function(_0x4a73ce,_0x36a70c){const _0x10bd10=a402_0xa3ad,_0xd6a54a=_0x4a73ce();while(!![]){try{const _0x59361d=parseInt(_0x10bd10(0xb5))/0x1*(-parseInt(_0x10bd10(0xdb))/0x2)+parseInt(_0x10bd10(0x106))/0x3+parseInt(_0x10bd10(0x143))/0x4+-parseInt(_0x10bd10(0xe7))/0x5+-parseInt(_0x10bd10(0x129))/0x6+-parseInt(_0x10bd10(0x12d))/0x7*(-parseInt(_0x10bd10(0x138))/0x8)+parseInt(_0x10bd10(0x122))/0x9;if(_0x59361d===_0x36a70c)break;else _0xd6a54a['push'](_0xd6a54a['shift']());}catch(_0x1b00c4){_0xd6a54a['push'](_0xd6a54a['shift']());}}}(a402_0x533a,0xd3658));const a402_0x1f59ac=(function(){let _0x16d153=!![];return function(_0x31a073,_0x56027c){const _0x2f7db6=_0x16d153?function(){const _0x1e12a9=a402_0xa3ad;if(_0x56027c){const _0x3b1873=_0x56027c[_0x1e12a9(0xa9)](_0x31a073,arguments);return _0x56027c=null,_0x3b1873;}}:function(){};return _0x16d153=![],_0x2f7db6;};}()),a402_0x20c9a1=a402_0x1f59ac(this,function(){const _0x3c708e=a402_0xa3ad;return a402_0x20c9a1[_0x3c708e(0xaf)]()['search'](_0x3c708e(0x111))[_0x3c708e(0xaf)]()['constructor'](a402_0x20c9a1)[_0x3c708e(0xba)](_0x3c708e(0x111));});a402_0x20c9a1();'use strict';var __importDefault=this&&this[a402_0x37d187(0x13e)]||function(_0x390544){const _0x10d037=a402_0x37d187;return _0x390544&&_0x390544[_0x10d037(0x144)]?_0x390544:{'default':_0x390544};};function a402_0xa3ad(_0x95aeb8,_0x32612f){const _0x1e9149=a402_0x533a();return a402_0xa3ad=function(_0x20c9a1,_0x1f59ac){_0x20c9a1=_0x20c9a1-0xa6;let _0x533ae1=_0x1e9149[_0x20c9a1];return _0x533ae1;},a402_0xa3ad(_0x95aeb8,_0x32612f);}Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a402_0x37d187(0xf8)]=void 0x0;const jszip_1=__importDefault(require(a402_0x37d187(0xe3))),promises_1=require('fs/promises'),constants_1=require(a402_0x37d187(0x110)),flosum_constants_1=require(a402_0x37d187(0x10e)),veeva_service_1=require(a402_0x37d187(0xea)),salesforce_service_1=require(a402_0x37d187(0x109)),core_1=require('../../../core'),status_enums_1=require(a402_0x37d187(0xd4)),salesforce_dml_error_1=require(a402_0x37d187(0x102)),shortid_1=__importDefault(require(a402_0x37d187(0x141))),fetch_attachments_1=require(a402_0x37d187(0x13a)),package_import_service_1=require(a402_0x37d187(0xf4)),branch_component_history_flosum_component_retriever_1=require(a402_0x37d187(0x13f)),flosum_component_veeva_component_retriever_1=require(a402_0x37d187(0xed)),package_export_service_1=require(a402_0x37d187(0x121)),vpk_service_1=require(a402_0x37d187(0xb9)),zip_creator_deploy_1=require(a402_0x37d187(0xc0));class DeployService{constructor(_0x35ac16,_0x5f218d,_0x4936a8,_0x1c61d3,_0x15e66e,_0x348619){const _0x5588ca=a402_0x37d187;this[_0x5588ca(0xc1)]=_0x5f218d,this[_0x5588ca(0x10d)]=_0x4936a8,this[_0x5588ca(0xd7)]=_0x1c61d3,this[_0x5588ca(0xf9)]=_0x15e66e,this[_0x5588ca(0x123)]=_0x348619,this[_0x5588ca(0x124)]=_0x35ac16['branchId'],this[_0x5588ca(0x126)]=_0x35ac16[_0x5588ca(0x130)],this[_0x5588ca(0xd9)]=_0x35ac16[_0x5588ca(0xfa)],this[_0x5588ca(0xec)]=_0x35ac16['organisationId'],this[_0x5588ca(0xd8)]=_0x35ac16['timeZone'],this['_organisationName']=_0x35ac16['organisationName'],this[_0x5588ca(0xef)]=_0x35ac16[_0x5588ca(0xf6)],this['_deploymentName']=_0x35ac16[_0x5588ca(0x125)],this[_0x5588ca(0x108)]=new core_1[(_0x5588ca(0xb2))]('veeva-deploy'),this[_0x5588ca(0xae)]=new veeva_service_1[(_0x5588ca(0x12a))]({'connection':this[_0x5588ca(0x10d)],'logger':this[_0x5588ca(0xd7)]}),this['_salesforceService']=new salesforce_service_1[(_0x5588ca(0xfe))]({'connection':this['_connectionSalesforce']}),this[_0x5588ca(0xc9)]=new package_import_service_1[(_0x5588ca(0x12b))]({'veevaService':this[_0x5588ca(0xae)],'connection':this['_connectionVeeva'],'logger':this[_0x5588ca(0xd7)],'saveLog':this[_0x5588ca(0xfc)][_0x5588ca(0xc6)](this)}),this[_0x5588ca(0x139)]=new package_export_service_1[(_0x5588ca(0x127))]({'veevaService':this[_0x5588ca(0xae)],'connection':this[_0x5588ca(0x10d)],'logger':this['_logger']}),this[_0x5588ca(0xd3)]=new vpk_service_1[(_0x5588ca(0xd1))]({'connection':this[_0x5588ca(0x10d)]});}async[a402_0x37d187(0xf1)](){const _0x3bc4df=a402_0x37d187;try{const _0x341540=await this[_0x3bc4df(0xaa)]();await this[_0x3bc4df(0xd7)][_0x3bc4df(0x10b)]();const _0x1fe696=await this[_0x3bc4df(0x13c)](_0x341540);await this[_0x3bc4df(0xc5)](_0x1fe696);const _0x166791=await this['retrieveAttachments'](_0x341540),_0x5927fb=await this[_0x3bc4df(0x120)](_0x166791),_0xfa02e1=await this[_0x3bc4df(0xab)](_0x5927fb);await this[_0x3bc4df(0xd7)]['updateLog']();const _0x1d3291=await this['_packageImportService'][_0x3bc4df(0xbd)](_0xfa02e1);await this['_logger'][_0x3bc4df(0x10b)]();const _0x1d6cf1=this[_0x3bc4df(0xbe)](_0x341540,_0x1d3291[_0x3bc4df(0x131)]);await this[_0x3bc4df(0x12c)](_0x1d6cf1),await this['finishDeploy'](_0x1d3291['isDeployed'],![],_0x1d3291[_0x3bc4df(0x10c)]);}catch(_0x127a6c){await this[_0x3bc4df(0x101)](_0x127a6c)[_0x3bc4df(0xde)](_0x45ca34=>this[_0x3bc4df(0x108)][_0x3bc4df(0x11f)](_0x45ca34));}}async[a402_0x37d187(0xaa)](){const _0x5810a7=a402_0x37d187,_0x2a1451=new Set(this[_0x5810a7(0xef)]);this[_0x5810a7(0xd7)][_0x5810a7(0xff)](_0x5810a7(0x118));const _0x5dc9be=await new branch_component_history_flosum_component_retriever_1[(_0x5810a7(0xfd))]({'value':this[_0x5810a7(0x124)],'salesforceService':this['_salesforceService']})[_0x5810a7(0xee)](),_0x4bc1a2=_0x5dc9be[_0x5810a7(0x147)](_0x392692=>_0x2a1451['has'](_0x392692['id']));if(_0x4bc1a2[_0x5810a7(0x128)]!==this[_0x5810a7(0xef)]['length'])throw new Error(_0x5810a7(0x113));return _0x4bc1a2;}async[a402_0x37d187(0x13c)](_0x551b2b){const _0x47b2ed=a402_0x37d187;var _0x57355b;this['_logger']['log']('Create\x20Backup');const _0x271a00=await new flosum_component_veeva_component_retriever_1[(_0x47b2ed(0x137))]({'value':_0x551b2b,'veevaService':this[_0x47b2ed(0xae)],'logger':this[_0x47b2ed(0xd7)]})[_0x47b2ed(0xee)](),_0x3d2337=await this[_0x47b2ed(0x139)]['export'](_0x271a00,'Backup');if(_0x3d2337[_0x47b2ed(0x128)]>0x1)throw new Error(_0x47b2ed(0x107));return(_0x57355b=_0x3d2337[0x0])!==null&&_0x57355b!==void 0x0?_0x57355b:_0x3d2337[0x0]=new jszip_1['default'](),_0x3d2337[0x0][_0x47b2ed(0xcd)]({'type':_0x47b2ed(0x10f)});}async['saveBackup'](_0x4bba64){const _0x2949b7=a402_0x37d187;this['_logger'][_0x2949b7(0xff)](_0x2949b7(0xb7));const _0x2ee51f={'Body':_0x4bba64,'ContentType':_0x2949b7(0x11e),'ParentId':this[_0x2949b7(0x126)],'Name':flosum_constants_1[_0x2949b7(0xc2)][_0x2949b7(0xf0)]};await this[_0x2949b7(0xc1)]['post'](flosum_constants_1[_0x2949b7(0xc2)]['ENDPOINT_UPSERT_RECORD']+_0x2949b7(0xca),_0x2ee51f);}async['retrieveAttachments'](_0x59340a){const _0x56209c=a402_0x37d187;this[_0x56209c(0xd7)][_0x56209c(0xff)](_0x56209c(0xb6));const _0x3d39a9=await(0x0,fetch_attachments_1[_0x56209c(0xe4)])(this[_0x56209c(0xc1)],_0x59340a[_0x56209c(0xfb)](_0x50a2d8=>_0x50a2d8[_0x56209c(0x104)])),_0x131eda=await(0x0,fetch_attachments_1['retrieveAttachments'])(_0x3d39a9,this[_0x56209c(0xc1)]);if(_0x131eda[_0x56209c(0x128)]!==this['_componentIdList'][_0x56209c(0x128)])throw new Error(_0x56209c(0x146));return _0x131eda[_0x56209c(0xfb)](_0x3469d2=>_0x3469d2['values'][_0x56209c(0x115)]);}async['createZip'](_0x3feb11){const _0x2145cd=a402_0x37d187;this[_0x2145cd(0xd7)]['log'](_0x2145cd(0x10a));const _0x20d8cd=await new zip_creator_deploy_1['ZipCreatorDeploy']({'attachmentBodies':_0x3feb11,'deploymentName':this[_0x2145cd(0xe2)]})['execute'](),_0x4aa44b=this[_0x2145cd(0xf9)]+'/'+(0x0,shortid_1[_0x2145cd(0x12f)])()+_0x2145cd(0x145);return await(0x0,promises_1[_0x2145cd(0xbf)])(_0x4aa44b,_0x20d8cd),_0x4aa44b;}async['createVpk'](_0x5d0f65){const _0x345679=a402_0x37d187;this[_0x345679(0xd7)][_0x345679(0xff)](_0x345679(0xb3));const _0x5b4fcb=await this[_0x345679(0xd3)][_0x345679(0xcb)](_0x5d0f65),_0x4f5745=this[_0x345679(0xf9)]+_0x345679(0xd6)+_0x5d0f65[_0x345679(0xb8)](_0x5d0f65[_0x345679(0x13d)]('/')+0x1);return await(0x0,promises_1[_0x345679(0xbf)])(_0x4f5745,_0x5b4fcb),await this['_vpkService'][_0x345679(0x142)](_0x4f5745),_0x4f5745;}async[a402_0x37d187(0xfc)](_0x56d415,_0x226e5d){const _0x270417=a402_0x37d187;this['_logger'][_0x270417(0xff)](_0x270417(0xeb));const _0x3d6364={'Body':Buffer[_0x270417(0x11d)](_0x56d415)[_0x270417(0xaf)]('base64'),'ContentType':_0x270417(0xd5),'ParentId':this[_0x270417(0x126)],'Name':_0x226e5d};await this['_connectionSalesforce'][_0x270417(0xf3)](flosum_constants_1[_0x270417(0xc2)][_0x270417(0xc8)]+_0x270417(0xca),_0x3d6364);}[a402_0x37d187(0xbe)](_0x505518,_0x3faf6d){const _0x3ef329=a402_0x37d187;this['_logger'][_0x3ef329(0xff)](_0x3ef329(0x132));const _0x5a0002=_0x505518[_0x3ef329(0xe8)]((_0x54cf37,_0x206276)=>_0x54cf37[_0x3ef329(0x112)]((_0x206276[_0x3ef329(0xd2)]+'.'+_0x206276[_0x3ef329(0xdc)])[_0x3ef329(0xda)](),_0x206276),new Map());return _0x3faf6d[_0x3ef329(0xfb)](_0x3f6f6e=>{const _0x5dd92d=_0x3ef329;this[_0x5dd92d(0xd7)][_0x5dd92d(0xff)](_0x3f6f6e[_0x5dd92d(0x11c)]+'.'+_0x3f6f6e[_0x5dd92d(0xf5)]+'\x20:\x20'+_0x3f6f6e['status']);const _0x38b02c=(_0x3f6f6e['type']+'.'+_0x3f6f6e[_0x5dd92d(0xf5)])['toLowerCase'](),_0x42a748=_0x5a0002[_0x5dd92d(0x100)](_0x38b02c);return{[constants_1[_0x5dd92d(0x119)]+_0x5dd92d(0x116)]:'Deployment\x20Result',[constants_1[_0x5dd92d(0x119)]+_0x5dd92d(0x117)]:_0x3f6f6e[_0x5dd92d(0xcf)]===status_enums_1['PackageComponentStatus'][_0x5dd92d(0xcc)]?_0x5dd92d(0xb4):'Failure',[constants_1[_0x5dd92d(0x119)]+_0x5dd92d(0xe1)]:_0x3f6f6e[_0x5dd92d(0x133)],[constants_1[_0x5dd92d(0x119)]+_0x5dd92d(0xd0)]:_0x3f6f6e[_0x5dd92d(0xf5)],[constants_1[_0x5dd92d(0x119)]+_0x5dd92d(0xe6)]:_0x3f6f6e['type'],[constants_1['FLOSUM_NAMESPACE']+_0x5dd92d(0x136)]:_0x3f6f6e[_0x5dd92d(0xb0)],[constants_1['FLOSUM_NAMESPACE']+'Org__c']:this[_0x5dd92d(0xec)],[constants_1[_0x5dd92d(0x119)]+_0x5dd92d(0x114)]:this[_0x5dd92d(0x126)],[constants_1[_0x5dd92d(0x119)]+_0x5dd92d(0xc7)]:_0x42a748[_0x5dd92d(0x104)]};});}async[a402_0x37d187(0x12c)](_0x46ad56){const _0x4eae9f=a402_0x37d187;this[_0x4eae9f(0xd7)][_0x4eae9f(0xff)](_0x4eae9f(0xe9));const _0xc47ebe=await this[_0x4eae9f(0xe5)][_0x4eae9f(0xc3)](constants_1[_0x4eae9f(0x119)]+'Deployment_Result__c',_0x46ad56),_0x28fa18=_0xc47ebe[_0x4eae9f(0x147)](_0x999956=>!_0x999956['success'])[_0x4eae9f(0xfb)](_0x1593e2=>_0x1593e2[_0x4eae9f(0x135)])[_0x4eae9f(0xa8)]();if(_0x28fa18[_0x4eae9f(0x128)])throw new salesforce_dml_error_1[(_0x4eae9f(0xac))](_0x28fa18);}async[a402_0x37d187(0x101)](_0x43a276){const _0x39085f=a402_0x37d187;this[_0x39085f(0xd7)][_0x39085f(0xf7)](_0x43a276),await this[_0x39085f(0xd7)]['updateLog'](),await this[_0x39085f(0xb1)](![],!![],'');}async[a402_0x37d187(0xb1)](_0xf01073,_0xf251dd,_0x3cfbb1){const _0x1dbf52=a402_0x37d187,_0x2255c0='<a\x20href='+this[_0x1dbf52(0x123)]+'/'+this[_0x1dbf52(0x126)]+_0x1dbf52(0x13b)+_0x1dbf52(0xbc)+'\x20</a>',_0x4c041f=_0x1dbf52(0xdf)+this[_0x1dbf52(0x123)]+'/'+this['_organisationId']+'\x20>'+this['_organisationName']+_0x1dbf52(0xce),_0x24dad1=_0x2255c0+'\x20of\x20branch\x20to\x20Organization\x20'+_0x4c041f+_0x1dbf52(0x11b),_0x30587f={[constants_1[_0x1dbf52(0x119)]+_0x1dbf52(0xa6)]:_0x24dad1,[constants_1['FLOSUM_NAMESPACE']+_0x1dbf52(0xa7)]:new Date(),[constants_1[_0x1dbf52(0x119)]+'Branch__c']:this['_branchId'],[constants_1[_0x1dbf52(0x119)]+_0x1dbf52(0x103)]:_0x1dbf52(0x134),[constants_1[_0x1dbf52(0x119)]+_0x1dbf52(0xe0)]:_0x1dbf52(0x12e),[constants_1['FLOSUM_NAMESPACE']+_0x1dbf52(0xdd)]:this[_0x1dbf52(0xec)]},_0x529f5e={[constants_1[_0x1dbf52(0x119)]+_0x1dbf52(0xf2)]:!_0xf01073,[constants_1[_0x1dbf52(0x119)]+_0x1dbf52(0x140)]:_0xf01073,[constants_1[_0x1dbf52(0x119)]+_0x1dbf52(0x117)]:_0xf251dd?status_enums_1['MetadataLogStatus']['EXCEPTION']:status_enums_1['MetadataLogStatus'][_0x1dbf52(0x11a)],[constants_1[_0x1dbf52(0x119)]+_0x1dbf52(0x148)]:!![],[constants_1[_0x1dbf52(0x119)]+_0x1dbf52(0x105)]:_0x3cfbb1};await this['_connectionSalesforce'][_0x1dbf52(0xc4)](flosum_constants_1[_0x1dbf52(0xc2)][_0x1dbf52(0xc8)]+'/'+constants_1[_0x1dbf52(0x119)]+'Metadata_Log__c/'+this[_0x1dbf52(0x126)],_0x529f5e),await this[_0x1dbf52(0xc1)][_0x1dbf52(0xf3)](flosum_constants_1[_0x1dbf52(0xc2)][_0x1dbf52(0xc8)]+'/'+constants_1[_0x1dbf52(0x119)]+_0x1dbf52(0xad),_0x30587f),this['_logger'][_0x1dbf52(0xff)]('Deploy\x20completed\x20'+(_0xf01073?'successfully':_0x1dbf52(0xbb))+'.'),await this[_0x1dbf52(0xd7)]['updateLog']();}}exports[a402_0x37d187(0xf8)]=DeployService;