const a405_0x24e761=a405_0x2298;(function(_0x1bee07,_0x30fd13){const _0x5eb236=a405_0x2298,_0x2c87ab=_0x1bee07();while(!![]){try{const _0x18c31f=-parseInt(_0x5eb236(0xd8))/0x1+parseInt(_0x5eb236(0x6f))/0x2+parseInt(_0x5eb236(0xec))/0x3+parseInt(_0x5eb236(0x85))/0x4*(parseInt(_0x5eb236(0x75))/0x5)+parseInt(_0x5eb236(0xb2))/0x6+-parseInt(_0x5eb236(0x7a))/0x7+-parseInt(_0x5eb236(0x90))/0x8*(parseInt(_0x5eb236(0x8b))/0x9);if(_0x18c31f===_0x30fd13)break;else _0x2c87ab['push'](_0x2c87ab['shift']());}catch(_0x201ac6){_0x2c87ab['push'](_0x2c87ab['shift']());}}}(a405_0x10c5,0x9e444));const a405_0x5a102a=(function(){let _0x335b94=!![];return function(_0x59bfdc,_0x5c561c){const _0x24f8ba=_0x335b94?function(){if(_0x5c561c){const _0x3f449c=_0x5c561c['apply'](_0x59bfdc,arguments);return _0x5c561c=null,_0x3f449c;}}:function(){};return _0x335b94=![],_0x24f8ba;};}()),a405_0x47613f=a405_0x5a102a(this,function(){const _0x2c56b9=a405_0x2298;return a405_0x47613f[_0x2c56b9(0xad)]()[_0x2c56b9(0xac)]('(((.+)+)+)+$')['toString']()[_0x2c56b9(0x96)](a405_0x47613f)[_0x2c56b9(0xac)](_0x2c56b9(0xf2));});a405_0x47613f();'use strict';var __importDefault=this&&this[a405_0x24e761(0xd5)]||function(_0x323769){const _0x59ea38=a405_0x24e761;return _0x323769&&_0x323769[_0x59ea38(0xb3)]?_0x323769:{'default':_0x323769};};Object['defineProperty'](exports,a405_0x24e761(0xb3),{'value':!![]}),exports[a405_0x24e761(0xa1)]=void 0x0;const veeva_service_1=require('./veeva.service'),salesforce_service_1=require(a405_0x24e761(0x79)),package_import_service_1=require(a405_0x24e761(0xf7)),id_deployment_result_retriever_1=require('../classes/retrievers/deployment-results/id.deployment-result.retriever'),flosum_constants_1=require(a405_0x24e761(0xf5)),fetch_attachments_1=require(a405_0x24e761(0x8e)),constants_1=require(a405_0x24e761(0xdd)),zip_creator_rollback_1=require('../classes/rollback/zip-creator.rollback'),shortid_1=__importDefault(require('shortid')),promises_1=require(a405_0x24e761(0xea)),vpk_service_1=require(a405_0x24e761(0xd7)),status_enums_1=require('../enums/status.enums'),salesforce_dml_error_1=require(a405_0x24e761(0xee)),metadata_log_dto_1=require(a405_0x24e761(0x88)),core_1=require(a405_0x24e761(0xf3));class RollbackService{constructor({connectionSalesforce:_0x330e89,connectionVeeva:_0x31f1d7,logger:_0xafd645,tempFolder:_0x513a9f,instanceUrl:_0x1de84b,timeZone:_0x267183,metadataLogId:_0x561d49,attachmentLogId:_0x50c65b,parentMetadataLogId:_0x1c6130,componentIds:_0x18861d}){const _0x23d5cf=a405_0x24e761;this[_0x23d5cf(0x73)]=_0x330e89,this[_0x23d5cf(0xf8)]=_0x31f1d7,this[_0x23d5cf(0xce)]=_0xafd645,this['_tempFolder']=_0x513a9f,this[_0x23d5cf(0xbd)]=_0x1de84b,this['_timeZone']=_0x267183,this['_metadataLogId']=_0x561d49,this[_0x23d5cf(0xe3)]=_0x50c65b,this[_0x23d5cf(0xa5)]=_0x1c6130,this['_componentIds']=_0x18861d,this[_0x23d5cf(0xdf)]=new core_1[(_0x23d5cf(0xbb))](_0x23d5cf(0xa7)),this[_0x23d5cf(0x7d)]=new veeva_service_1[(_0x23d5cf(0xa0))]({'connection':_0x31f1d7,'logger':_0xafd645}),this[_0x23d5cf(0xa4)]=new salesforce_service_1[(_0x23d5cf(0x80))]({'connection':_0x330e89}),this[_0x23d5cf(0xb4)]=new package_import_service_1[(_0x23d5cf(0xb8))]({'veevaService':this['_veevaService'],'connection':_0x31f1d7,'logger':_0xafd645,'saveLog':this['saveLog'][_0x23d5cf(0xc0)](this)}),this[_0x23d5cf(0x8a)]=new vpk_service_1[(_0x23d5cf(0xa9))]({'connection':_0x31f1d7});}async[a405_0x24e761(0xb9)](_0x3f7865,_0xb7d62b){const _0x458c0d=a405_0x24e761;this[_0x458c0d(0xce)]['log'](_0x458c0d(0x8c));const _0x294103={'Body':Buffer['from'](_0x3f7865)[_0x458c0d(0xad)](_0x458c0d(0xeb)),'ContentType':'text/plain','ParentId':this['_metadataLogId'],'Name':_0xb7d62b};await this[_0x458c0d(0x73)]['post'](flosum_constants_1[_0x458c0d(0xd0)][_0x458c0d(0x82)]+'/Attachment',_0x294103);}async[a405_0x24e761(0x8d)](){const _0x6cd24a=a405_0x24e761;this[_0x6cd24a(0xce)][_0x6cd24a(0x92)](_0x6cd24a(0x86));const [_0x4f44a7]=await this['_salesforceService'][_0x6cd24a(0xc2)](_0x6cd24a(0x6b)+constants_1['FLOSUM_NAMESPACE']+_0x6cd24a(0x6d)+constants_1[_0x6cd24a(0xef)]+_0x6cd24a(0xc9)+constants_1[_0x6cd24a(0xef)]+_0x6cd24a(0xf9)+constants_1[_0x6cd24a(0xef)]+_0x6cd24a(0x87)+this[_0x6cd24a(0xd6)]+_0x6cd24a(0x8f));return new metadata_log_dto_1[(_0x6cd24a(0xc5))](_0x4f44a7);}async['retrieveDeploymentResults'](){const _0x117a3f=a405_0x24e761;this[_0x117a3f(0xce)][_0x117a3f(0x92)](_0x117a3f(0xb5));const _0x15ea89=await new id_deployment_result_retriever_1[(_0x117a3f(0x77))]({'salesforceService':this[_0x117a3f(0xa4)],'value':this[_0x117a3f(0xab)]})[_0x117a3f(0xd4)]();if(!_0x15ea89['length'])throw new Error(_0x117a3f(0x99));return _0x15ea89;}async[a405_0x24e761(0xd2)](){const _0x5369f5=a405_0x24e761;this[_0x5369f5(0xce)][_0x5369f5(0x92)]('Retrieve\x20Backup');const _0x5cb956=await this[_0x5369f5(0xa4)][_0x5369f5(0xc2)](_0x5369f5(0xcc)+this['_parentMetadataLogId']+_0x5369f5(0xe5)+flosum_constants_1[_0x5369f5(0xd0)][_0x5369f5(0xbe)]+_0x5369f5(0x8f)),_0x389925=await(0x0,fetch_attachments_1[_0x5369f5(0x81)])(this['_connectionSalesforce'],[_0x5cb956[0x0]['Id']]),_0x374a24=await(0x0,fetch_attachments_1['retrieveAttachments'])(_0x389925,this['_connectionSalesforce']);if(!_0x374a24[_0x5369f5(0xd1)])throw new Error(_0x5369f5(0xa3));return _0x374a24[0x0][_0x5369f5(0x74)][_0x5369f5(0x7c)];}async[a405_0x24e761(0x68)](_0x5db10c){const _0x2dd549=a405_0x24e761;this['_logger']['log'](_0x2dd549(0x76));const _0x5e3d88=await this['retrieveBackup'](),_0x589957=await new zip_creator_rollback_1[(_0x2dd549(0x78))]({'rollbackName':this[_0x2dd549(0x93)][_0x2dd549(0xae)],'backup':_0x5e3d88,'deploymentResults':_0x5db10c})['create'](),_0x36c3bf=this[_0x2dd549(0xc3)]+'/'+(0x0,shortid_1['default'])()+_0x2dd549(0xdb);return await(0x0,promises_1[_0x2dd549(0xe1)])(_0x36c3bf,_0x589957),_0x36c3bf;}async[a405_0x24e761(0xdc)](_0x38aa42){const _0x231034=a405_0x24e761;this['_logger'][_0x231034(0x92)](_0x231034(0x97));const _0x43d0c2=await this['_vpkService'][_0x231034(0xf0)](_0x38aa42),_0x563b25=this['_tempFolder']+_0x231034(0x9d)+_0x38aa42[_0x231034(0x9a)](_0x38aa42['lastIndexOf']('/')+0x1);return await(0x0,promises_1[_0x231034(0xe1)])(_0x563b25,_0x43d0c2),await this[_0x231034(0x8a)][_0x231034(0xe4)](_0x563b25),_0x563b25;}[a405_0x24e761(0xcd)](_0x319abc){const _0x506355=a405_0x24e761;return this[_0x506355(0xce)][_0x506355(0x92)](_0x506355(0xbc)),_0x319abc[_0x506355(0xde)](_0xada1b4=>{const _0x3349f4=_0x506355;return this[_0x3349f4(0xce)]['log'](_0xada1b4[_0x3349f4(0x9c)]+'.'+_0xada1b4[_0x3349f4(0xae)]+_0x3349f4(0xc4)+_0xada1b4[_0x3349f4(0xda)]),{[constants_1[_0x3349f4(0xef)]+_0x3349f4(0x7b)]:_0x3349f4(0xe9),[constants_1[_0x3349f4(0xef)]+_0x3349f4(0xcb)]:_0xada1b4[_0x3349f4(0xda)]===status_enums_1[_0x3349f4(0x70)][_0x3349f4(0x72)]?'Success':_0x3349f4(0xc8),[constants_1[_0x3349f4(0xef)]+_0x3349f4(0x9b)]:_0xada1b4[_0x3349f4(0xaa)],[constants_1[_0x3349f4(0xef)]+_0x3349f4(0xc7)]:_0xada1b4[_0x3349f4(0xae)],[constants_1[_0x3349f4(0xef)]+_0x3349f4(0x94)]:_0xada1b4[_0x3349f4(0x9c)],[constants_1[_0x3349f4(0xef)]+_0x3349f4(0xf6)]:_0xada1b4[_0x3349f4(0x71)],[constants_1[_0x3349f4(0xef)]+'Org__c']:this[_0x3349f4(0x93)][_0x3349f4(0xb0)],[constants_1[_0x3349f4(0xef)]+'Metadata_Log__c']:this[_0x3349f4(0xd6)]};});}async['saveDeploymentResults'](_0x33b32e){const _0x5a470f=a405_0x24e761;this[_0x5a470f(0xce)][_0x5a470f(0x92)](_0x5a470f(0xe2));const _0x5f41ee=await this[_0x5a470f(0xa4)]['insertMultipleRecords'](constants_1['FLOSUM_NAMESPACE']+_0x5a470f(0xa2),_0x33b32e),_0x23df57=_0x5f41ee[_0x5a470f(0xbf)](_0x3b3c53=>!_0x3b3c53[_0x5a470f(0xf1)])[_0x5a470f(0xde)](_0x3c9328=>_0x3c9328['errors'])[_0x5a470f(0x83)]();if(_0x23df57[_0x5a470f(0xd1)])throw new salesforce_dml_error_1[(_0x5a470f(0xe7))](_0x23df57);}async[a405_0x24e761(0x69)](_0x168912){const _0x265efa=a405_0x24e761;if(!this[_0x265efa(0x93)]){this[_0x265efa(0xdf)]['error'](_0x168912);return;}this[_0x265efa(0xce)]['logError'](_0x168912),await this[_0x265efa(0xce)][_0x265efa(0xc6)](),await this[_0x265efa(0x91)](![],!![],'');}async[a405_0x24e761(0x91)](_0x2ddfbc,_0x5d534f,_0x2d82db){const _0x366231=a405_0x24e761,{id:_0x605541,organizationId:_0x54be6b,branchId:_0x60344f,organizationName:_0x22ba4a}=this[_0x366231(0x93)],_0x30e488='<a\x20href='+this[_0x366231(0xbd)]+'/'+_0x605541+_0x366231(0xd9)+_0x366231(0xb6)+_0x366231(0xb1),_0x556fda=_0x366231(0xa6)+this[_0x366231(0xbd)]+'/'+_0x54be6b+'\x20>'+_0x22ba4a+_0x366231(0xaf),_0x599f5f=_0x30e488+_0x366231(0x6c)+_0x556fda+'\x20has\x20been\x20created.',_0x3be569={[constants_1['FLOSUM_NAMESPACE']+_0x366231(0x9f)]:_0x599f5f,[constants_1[_0x366231(0xef)]+_0x366231(0x98)]:new Date(),[constants_1[_0x366231(0xef)]+_0x366231(0xcf)]:_0x60344f,[constants_1[_0x366231(0xef)]+_0x366231(0x7e)]:_0x366231(0xe8),[constants_1['FLOSUM_NAMESPACE']+_0x366231(0xc1)]:_0x366231(0xca),[constants_1[_0x366231(0xef)]+'TargetId__c']:_0x54be6b},_0x3e44c6={[constants_1[_0x366231(0xef)]+_0x366231(0x84)]:!_0x2ddfbc,[constants_1['FLOSUM_NAMESPACE']+_0x366231(0x89)]:_0x2ddfbc,[constants_1[_0x366231(0xef)]+_0x366231(0xcb)]:_0x5d534f?status_enums_1['MetadataLogStatus'][_0x366231(0x6a)]:status_enums_1['MetadataLogStatus'][_0x366231(0xb7)],[constants_1[_0x366231(0xef)]+_0x366231(0xe6)]:!![],[constants_1[_0x366231(0xef)]+_0x366231(0x67)]:_0x2d82db};await this['_connectionSalesforce'][_0x366231(0xba)](flosum_constants_1[_0x366231(0xd0)]['ENDPOINT_UPSERT_RECORD']+'/'+constants_1[_0x366231(0xef)]+_0x366231(0x95)+this[_0x366231(0xd6)],_0x3e44c6),await this[_0x366231(0x73)][_0x366231(0x7f)](flosum_constants_1[_0x366231(0xd0)]['ENDPOINT_UPSERT_RECORD']+'/'+constants_1[_0x366231(0xef)]+_0x366231(0xe0),_0x3be569),this[_0x366231(0xce)]['log'](_0x366231(0xd3)+(_0x2ddfbc?'successfully':_0x366231(0xf4))+'.'),await this['_logger'][_0x366231(0xc6)]();}async[a405_0x24e761(0x6e)](){const _0x41d092=a405_0x24e761;try{this[_0x41d092(0x93)]=await this[_0x41d092(0x8d)]();const _0x51e23f=await this['retrieveDeploymentResults']();await this['_logger'][_0x41d092(0xc6)]();const _0x377dd4=await this['createZip'](_0x51e23f),_0xa06974=await this[_0x41d092(0xdc)](_0x377dd4);await this[_0x41d092(0xce)]['updateLog']();const _0x3674b2=await this[_0x41d092(0xb4)]['import'](_0xa06974);await this[_0x41d092(0xce)]['updateLog']();const _0x2f7571=this[_0x41d092(0xcd)](_0x3674b2[_0x41d092(0xa8)]);await this[_0x41d092(0x9e)](_0x2f7571),await this['finishRollback'](_0x3674b2['isDeployed'],![],_0x3674b2['packageId']);}catch(_0x5b7ccf){await this['finishRollbackWithError'](_0x5b7ccf)[_0x41d092(0xed)](_0x190304=>this[_0x41d092(0xdf)]['error'](_0x190304));}}}function a405_0x10c5(){const _0x38c066=['SalesforceDmlError','Branch','Deployment\x20Result','fs/promises','base64','2535888lSNvEu','catch','../classes/errors/salesforce-dml-error','FLOSUM_NAMESPACE','generate','success','(((.+)+)+)+$','../../../core','with\x20error','../constants/flosum.constants','Veeva_Step_Name__c','./package-import.service','_connectionVeeva','Branch__c\x0a\x20\x20\x20\x20\x20\x20FROM\x20','External_Deployment_Id__c','createZip','finishRollbackWithError','EXCEPTION','\x0a\x20\x20\x20\x20\x20\x20SELECT\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Id,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Name,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','\x20of\x20branch\x20to\x20Organization\x20','Organisation__c,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','execute','505436pvOiJL','PackageComponentStatus','stepName','DEPLOYED','_connectionSalesforce','values','5LweXxN','Create\x20zip\x20from\x20backup','IdDeploymentResultRetriever','ZipCreatorRollback','./salesforce.service','1552607hKTCsJ','Type__c','Body','_veevaService','Activity_Item__c','post','SalesforceService','fetchAttachmentsDetailsById','ENDPOINT_UPSERT_RECORD','flat','Is_Error__c','684572YILKyl','Retrieve\x20Metadata\x20Log\x20info','Metadata_Log__c\x0a\x20\x20\x20\x20\x20\x20WHERE\x20Id\x20=\x20\x27','../dtos/metadata-log.dto','Succeed__c','_vpkService','514953PRZHbh','Save\x20log','retrieveMetadataLog','../../shared/utils/fetch-attachments','\x27\x0a\x20\x20\x20\x20','40iYkPCQ','finishRollback','log','_metadataLog','Component_Type__c','Metadata_Log__c/','constructor','Create\x20Vpk\x20package','Date__c','Cannot\x20find\x20Deployment\x20Results','slice','Result__c','type','/vpk__','saveDeploymentResults','Action__c','VeevaService','RollbackService','Deployment_Result__c','Cannot\x20find\x20Backup\x20Zip','_salesforceService','_parentMetadataLogId','<a\x20href=','veeva-rollback','packageComponentList','VpkService','deploymentAction','_componentIds','search','toString','name','</a>','organizationId','\x20</a>','226254DqYIjT','__esModule','_packageImportService','Retrieve\x20Deployment\x20Results','Veeva\x20Rollback\x20(Deployment)','COMPLETED','PackageImportService','saveLog','patch','Logger','Form\x20Deployment\x20Results','_instanceUrl','BACKUP_ZIP_NAME','filter','bind','Activity_Type__c','retrieveRecords','_tempFolder','\x20:\x20','MetadataLogDto','updateLog','Component_Name__c','Failure','Organisation__r.Name,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','Deployment','Status__c','\x0a\x20\x20\x20\x20\x20\x20SELECT\x20Id\x0a\x20\x20\x20\x20\x20\x20FROM\x20Attachment\x0a\x20\x20\x20\x20\x20\x20WHERE\x20ParentId\x20=\x20\x27','formFlosumDeploymentResults','_logger','Branch__c','FlosumConstants','length','retrieveBackup','Rollback\x20completed\x20','retrieve','__importDefault','_metadataLogId','./vpk.service','150720opLmmy','\x20>\x20','status','.zip','createVpk','../../../constants','map','_systemLogger','Log__c','writeFile','Save\x20Deployment\x20Results','_attachmentLogId','validate','\x27\x20AND\x20Name\x20=\x20\x27','Job_Completed__c'];a405_0x10c5=function(){return _0x38c066;};return a405_0x10c5();}function a405_0x2298(_0x418f6e,_0x420cfc){const _0x4b0b74=a405_0x10c5();return a405_0x2298=function(_0x47613f,_0x5a102a){_0x47613f=_0x47613f-0x67;let _0x10c562=_0x4b0b74[_0x47613f];return _0x10c562;},a405_0x2298(_0x418f6e,_0x420cfc);}exports[a405_0x24e761(0xa1)]=RollbackService;