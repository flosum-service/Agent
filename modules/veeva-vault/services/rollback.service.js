const a393_0x499033=a393_0x565e;(function(_0x50236c,_0x5a3f9a){const _0x465099=a393_0x565e,_0x382e2a=_0x50236c();while(!![]){try{const _0x54e726=-parseInt(_0x465099(0xe4))/0x1*(-parseInt(_0x465099(0xf1))/0x2)+parseInt(_0x465099(0xfd))/0x3+parseInt(_0x465099(0xb5))/0x4*(parseInt(_0x465099(0x10b))/0x5)+-parseInt(_0x465099(0xdf))/0x6*(-parseInt(_0x465099(0x107))/0x7)+parseInt(_0x465099(0x112))/0x8*(parseInt(_0x465099(0xcf))/0x9)+-parseInt(_0x465099(0xb2))/0xa+-parseInt(_0x465099(0xac))/0xb*(parseInt(_0x465099(0xbd))/0xc);if(_0x54e726===_0x5a3f9a)break;else _0x382e2a['push'](_0x382e2a['shift']());}catch(_0x46a047){_0x382e2a['push'](_0x382e2a['shift']());}}}(a393_0x2529,0x31c2d));function a393_0x565e(_0x45e566,_0x992790){const _0x31c207=a393_0x2529();return a393_0x565e=function(_0x332cea,_0x408e1f){_0x332cea=_0x332cea-0xab;let _0x252926=_0x31c207[_0x332cea];return _0x252926;},a393_0x565e(_0x45e566,_0x992790);}const a393_0x408e1f=(function(){let _0x59e10b=!![];return function(_0xc490ec,_0x404559){const _0x10856b=_0x59e10b?function(){if(_0x404559){const _0x4858bd=_0x404559['apply'](_0xc490ec,arguments);return _0x404559=null,_0x4858bd;}}:function(){};return _0x59e10b=![],_0x10856b;};}()),a393_0x332cea=a393_0x408e1f(this,function(){const _0x4fb3f9=a393_0x565e;return a393_0x332cea[_0x4fb3f9(0xed)]()[_0x4fb3f9(0x12e)]('(((.+)+)+)+$')[_0x4fb3f9(0xed)]()[_0x4fb3f9(0xb9)](a393_0x332cea)[_0x4fb3f9(0x12e)](_0x4fb3f9(0xc8));});a393_0x332cea();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x50c68a){return _0x50c68a&&_0x50c68a['__esModule']?_0x50c68a:{'default':_0x50c68a};};Object[a393_0x499033(0xd4)](exports,a393_0x499033(0x12a),{'value':!![]}),exports[a393_0x499033(0xd1)]=void 0x0;const veeva_service_1=require(a393_0x499033(0xc4)),salesforce_service_1=require(a393_0x499033(0xe5)),package_import_service_1=require('./package-import.service'),id_deployment_result_retriever_1=require(a393_0x499033(0x11a)),flosum_constants_1=require(a393_0x499033(0xc9)),fetch_attachments_1=require(a393_0x499033(0x116)),constants_1=require('../../../constants'),zip_creator_rollback_1=require('../classes/rollback/zip-creator.rollback'),shortid_1=__importDefault(require(a393_0x499033(0x126))),promises_1=require('fs/promises'),vpk_service_1=require(a393_0x499033(0xc1)),status_enums_1=require(a393_0x499033(0x11c)),salesforce_dml_error_1=require(a393_0x499033(0xd7)),metadata_log_dto_1=require(a393_0x499033(0xbc)),core_1=require(a393_0x499033(0xc3));class RollbackService{constructor({connectionSalesforce:_0x5b713b,connectionVeeva:_0x2da068,logger:_0x1418d7,tempFolder:_0x3f8fc6,instanceUrl:_0x37f263,timeZone:_0x47b071,metadataLogId:_0x8e1e2e,attachmentLogId:_0x477499,parentMetadataLogId:_0xc58397,componentIds:_0x57ca8b}){const _0x427fc3=a393_0x499033;this[_0x427fc3(0x134)]=_0x5b713b,this['_connectionVeeva']=_0x2da068,this[_0x427fc3(0xd6)]=_0x1418d7,this[_0x427fc3(0xe2)]=_0x3f8fc6,this[_0x427fc3(0xaf)]=_0x37f263,this[_0x427fc3(0xe0)]=_0x47b071,this['_metadataLogId']=_0x8e1e2e,this[_0x427fc3(0xf5)]=_0x477499,this[_0x427fc3(0xff)]=_0xc58397,this[_0x427fc3(0xe9)]=_0x57ca8b,this[_0x427fc3(0x120)]=new core_1[(_0x427fc3(0xcc))](_0x427fc3(0xd8)),this['_veevaService']=new veeva_service_1['VeevaService']({'connection':_0x2da068,'logger':_0x1418d7}),this['_salesforceService']=new salesforce_service_1[(_0x427fc3(0x12f))]({'connection':_0x5b713b}),this[_0x427fc3(0x11b)]=new package_import_service_1['PackageImportService']({'veevaService':this[_0x427fc3(0xc7)],'connection':_0x2da068,'logger':_0x1418d7,'saveLog':this[_0x427fc3(0xdd)]['bind'](this)}),this[_0x427fc3(0xdb)]=new vpk_service_1[(_0x427fc3(0x125))]({'connection':_0x2da068});}async['saveLog'](_0x34e15b,_0x26c29d){const _0xb2c71c=a393_0x499033;this[_0xb2c71c(0xd6)][_0xb2c71c(0xd2)]('Save\x20log');const _0x38437c={'Body':Buffer['from'](_0x34e15b)[_0xb2c71c(0xed)](_0xb2c71c(0xf4)),'ContentType':_0xb2c71c(0x105),'ParentId':this['_metadataLogId'],'Name':_0x26c29d};await this[_0xb2c71c(0x134)][_0xb2c71c(0xe8)](flosum_constants_1[_0xb2c71c(0xae)][_0xb2c71c(0x122)]+_0xb2c71c(0xd0),_0x38437c);}async['retrieveMetadataLog'](){const _0x3f0d0f=a393_0x499033;this[_0x3f0d0f(0xd6)]['log'](_0x3f0d0f(0x131));const [_0x533079]=await this[_0x3f0d0f(0x123)][_0x3f0d0f(0xe1)](_0x3f0d0f(0xe6)+constants_1['FLOSUM_NAMESPACE']+_0x3f0d0f(0xd5)+constants_1[_0x3f0d0f(0xec)]+_0x3f0d0f(0x106)+constants_1[_0x3f0d0f(0xec)]+_0x3f0d0f(0xba)+constants_1[_0x3f0d0f(0xec)]+_0x3f0d0f(0xf9)+this[_0x3f0d0f(0x11f)]+_0x3f0d0f(0xfc));return new metadata_log_dto_1[(_0x3f0d0f(0xfa))](_0x533079);}async[a393_0x499033(0x135)](){const _0x54453a=a393_0x499033;this[_0x54453a(0xd6)][_0x54453a(0xd2)](_0x54453a(0xe7));const _0x11335d=await new id_deployment_result_retriever_1[(_0x54453a(0xcb))]({'salesforceService':this[_0x54453a(0x123)],'value':this[_0x54453a(0xe9)]})['retrieve']();if(!_0x11335d[_0x54453a(0x118)])throw new Error('Cannot\x20find\x20Deployment\x20Results');return _0x11335d;}async[a393_0x499033(0xb4)](){const _0x30217c=a393_0x499033;this[_0x30217c(0xd6)][_0x30217c(0xd2)](_0x30217c(0xf0));const _0x9d6ccf=await this[_0x30217c(0x123)][_0x30217c(0xe1)](_0x30217c(0xc6)+this[_0x30217c(0xff)]+_0x30217c(0x10c)+flosum_constants_1['FlosumConstants'][_0x30217c(0x117)]+'\x27\x0a\x20\x20\x20\x20'),_0x17539f=await(0x0,fetch_attachments_1[_0x30217c(0x108)])(this['_connectionSalesforce'],[_0x9d6ccf[0x0]['Id']]),_0x9c0942=await(0x0,fetch_attachments_1[_0x30217c(0xb6)])(_0x17539f,this[_0x30217c(0x134)]);if(!_0x9c0942[_0x30217c(0x118)])throw new Error(_0x30217c(0xe3));return _0x9c0942[0x0][_0x30217c(0xbe)]['Body'];}async[a393_0x499033(0xef)](_0x13fcd9){const _0x5072b7=a393_0x499033;this['_logger']['log']('Create\x20zip\x20from\x20backup');const _0x950f22=await this[_0x5072b7(0xb4)](),_0x361ca2=await new zip_creator_rollback_1[(_0x5072b7(0x10a))]({'rollbackName':this['_metadataLog']['name'],'backup':_0x950f22,'deploymentResults':_0x13fcd9})[_0x5072b7(0x12d)](),_0x1428c2=this[_0x5072b7(0xe2)]+'/'+(0x0,shortid_1['default'])()+_0x5072b7(0x10f);return await(0x0,promises_1[_0x5072b7(0x104)])(_0x1428c2,_0x361ca2),_0x1428c2;}async['createVpk'](_0x85d1a3){const _0x147a0c=a393_0x499033;this[_0x147a0c(0xd6)][_0x147a0c(0xd2)]('Create\x20Vpk\x20package');const _0x217249=await this[_0x147a0c(0xdb)][_0x147a0c(0xc5)](_0x85d1a3),_0x16c4d5=this[_0x147a0c(0xe2)]+_0x147a0c(0x121)+_0x85d1a3['slice'](_0x85d1a3[_0x147a0c(0x114)]('/')+0x1);return await(0x0,promises_1[_0x147a0c(0x104)])(_0x16c4d5,_0x217249),await this[_0x147a0c(0xdb)]['validate'](_0x16c4d5),_0x16c4d5;}[a393_0x499033(0xd3)](_0x338cda){const _0x180e39=a393_0x499033;return this[_0x180e39(0xd6)][_0x180e39(0xd2)](_0x180e39(0xf8)),_0x338cda['map'](_0x34129f=>{const _0x149f9a=_0x180e39;return this['_logger'][_0x149f9a(0xd2)](_0x34129f['type']+'.'+_0x34129f[_0x149f9a(0xb3)]+_0x149f9a(0xd9)+_0x34129f[_0x149f9a(0xb0)]),{[constants_1[_0x149f9a(0xec)]+'Type__c']:'Deployment\x20Result',[constants_1[_0x149f9a(0xec)]+'Status__c']:_0x34129f['status']===status_enums_1['PackageComponentStatus']['DEPLOYED']?_0x149f9a(0x110):_0x149f9a(0x12b),[constants_1[_0x149f9a(0xec)]+_0x149f9a(0x11d)]:_0x34129f['deploymentAction'],[constants_1['FLOSUM_NAMESPACE']+_0x149f9a(0xab)]:_0x34129f[_0x149f9a(0xb3)],[constants_1[_0x149f9a(0xec)]+_0x149f9a(0x113)]:_0x34129f['type'],[constants_1[_0x149f9a(0xec)]+'Veeva_Step_Name__c']:_0x34129f['stepName'],[constants_1[_0x149f9a(0xec)]+_0x149f9a(0xfe)]:this['_metadataLog'][_0x149f9a(0xf2)],[constants_1[_0x149f9a(0xec)]+_0x149f9a(0xb7)]:this['_metadataLogId']};});}async[a393_0x499033(0xf3)](_0x382fc6){const _0x19328a=a393_0x499033;this[_0x19328a(0xd6)][_0x19328a(0xd2)](_0x19328a(0x102));const _0x521c7f=await this[_0x19328a(0x123)][_0x19328a(0x119)](constants_1[_0x19328a(0xec)]+'Deployment_Result__c',_0x382fc6),_0x521a25=_0x521c7f[_0x19328a(0xde)](_0x3fc528=>!_0x3fc528[_0x19328a(0x127)])[_0x19328a(0x115)](_0x5eceee=>_0x5eceee[_0x19328a(0x132)])[_0x19328a(0xce)]();if(_0x521a25['length'])throw new salesforce_dml_error_1['SalesforceDmlError'](_0x521a25);}async[a393_0x499033(0x129)](_0x112ada){const _0x9a0958=a393_0x499033;if(!this[_0x9a0958(0x103)]){this['_systemLogger']['error'](_0x112ada);return;}this[_0x9a0958(0xd6)][_0x9a0958(0x124)](_0x112ada),await this[_0x9a0958(0xd6)]['updateLog'](),await this[_0x9a0958(0xcd)](![],!![],'');}async['finishRollback'](_0x452c5e,_0x34b90d,_0x33fcc6){const _0x315e6a=a393_0x499033,{id:_0x46ebc1,organizationId:_0x82c844,branchId:_0x541679,organizationName:_0x51a5e0}=this['_metadataLog'],_0x1d6076='<a\x20href='+this[_0x315e6a(0xaf)]+'/'+_0x46ebc1+'\x20>\x20'+_0x315e6a(0x10e)+_0x315e6a(0xca),_0x4cd86c=_0x315e6a(0x100)+this[_0x315e6a(0xaf)]+'/'+_0x82c844+'\x20>'+_0x51a5e0+'</a>',_0x2aa1e7=_0x1d6076+_0x315e6a(0xda)+_0x4cd86c+_0x315e6a(0x130),_0x2bd7b9={[constants_1[_0x315e6a(0xec)]+'Action__c']:_0x2aa1e7,[constants_1[_0x315e6a(0xec)]+_0x315e6a(0x136)]:new Date(),[constants_1[_0x315e6a(0xec)]+_0x315e6a(0xf7)]:_0x541679,[constants_1['FLOSUM_NAMESPACE']+_0x315e6a(0xc2)]:'Branch',[constants_1['FLOSUM_NAMESPACE']+_0x315e6a(0x11e)]:_0x315e6a(0xeb),[constants_1[_0x315e6a(0xec)]+'TargetId__c']:_0x82c844},_0x3e7042={[constants_1[_0x315e6a(0xec)]+_0x315e6a(0xb8)]:!_0x452c5e,[constants_1[_0x315e6a(0xec)]+'Succeed__c']:_0x452c5e,[constants_1[_0x315e6a(0xec)]+'Status__c']:_0x34b90d?status_enums_1['MetadataLogStatus'][_0x315e6a(0x12c)]:status_enums_1['MetadataLogStatus'][_0x315e6a(0x128)],[constants_1[_0x315e6a(0xec)]+_0x315e6a(0xc0)]:!![],[constants_1[_0x315e6a(0xec)]+_0x315e6a(0x109)]:_0x33fcc6};await this[_0x315e6a(0x134)][_0x315e6a(0xfb)](flosum_constants_1[_0x315e6a(0xae)]['ENDPOINT_UPSERT_RECORD']+'/'+constants_1['FLOSUM_NAMESPACE']+'Metadata_Log__c/'+this['_metadataLogId'],_0x3e7042),await this['_connectionSalesforce'][_0x315e6a(0xe8)](flosum_constants_1[_0x315e6a(0xae)][_0x315e6a(0x122)]+'/'+constants_1[_0x315e6a(0xec)]+_0x315e6a(0xbb),_0x2bd7b9),this[_0x315e6a(0xd6)][_0x315e6a(0xd2)]('Rollback\x20completed\x20'+(_0x452c5e?_0x315e6a(0x133):_0x315e6a(0xad))+'.'),await this[_0x315e6a(0xd6)]['updateLog']();}async[a393_0x499033(0x10d)](){const _0x5788ce=a393_0x499033;try{this[_0x5788ce(0x103)]=await this['retrieveMetadataLog']();const _0x249bc0=await this[_0x5788ce(0x135)]();await this['_logger'][_0x5788ce(0x111)]();const _0x605e9f=await this[_0x5788ce(0xef)](_0x249bc0),_0x21bf55=await this[_0x5788ce(0xea)](_0x605e9f);await this[_0x5788ce(0xd6)][_0x5788ce(0x111)]();const _0x52ae75=await this['_packageImportService'][_0x5788ce(0xb1)](_0x21bf55);await this[_0x5788ce(0xd6)][_0x5788ce(0x111)]();const _0x1dcd44=this[_0x5788ce(0xd3)](_0x52ae75[_0x5788ce(0xf6)]);await this[_0x5788ce(0xf3)](_0x1dcd44),await this[_0x5788ce(0xcd)](_0x52ae75[_0x5788ce(0x101)],![],_0x52ae75[_0x5788ce(0xee)]);}catch(_0x73e6e){await this[_0x5788ce(0x129)](_0x73e6e)[_0x5788ce(0xdc)](_0x54e1d0=>this[_0x5788ce(0x120)][_0x5788ce(0xbf)](_0x54e1d0));}}}function a393_0x2529(){const _0x21575f=['\x27\x0a\x20\x20\x20\x20','772710EqQNGr','Org__c','_parentMetadataLogId','<a\x20href=','isDeployed','Save\x20Deployment\x20Results','_metadataLog','writeFile','text/plain','Organisation__r.Name,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','903203CTCtqJ','fetchAttachmentsDetailsById','External_Deployment_Id__c','ZipCreatorRollback','5mkaDdL','\x27\x20AND\x20Name\x20=\x20\x27','execute','Veeva\x20Rollback\x20(Deployment)','.zip','Success','updateLog','1920XfYbpd','Component_Type__c','lastIndexOf','map','../../shared/utils/fetch-attachments','BACKUP_ZIP_NAME','length','insertMultipleRecords','../classes/retrievers/deployment-results/id.deployment-result.retriever','_packageImportService','../enums/status.enums','Result__c','Activity_Type__c','_metadataLogId','_systemLogger','/vpk__','ENDPOINT_UPSERT_RECORD','_salesforceService','logError','VpkService','shortid','success','COMPLETED','finishRollbackWithError','__esModule','Failure','EXCEPTION','create','search','SalesforceService','\x20has\x20been\x20created.','Retrieve\x20Metadata\x20Log\x20info','errors','successfully','_connectionSalesforce','retrieveDeploymentResults','Date__c','Component_Name__c','649lZMpZG','with\x20error','FlosumConstants','_instanceUrl','status','import','1183300NlDaSa','name','retrieveBackup','373784VYQUGf','retrieveAttachments','Metadata_Log__c','Is_Error__c','constructor','Branch__c\x0a\x20\x20\x20\x20\x20\x20FROM\x20','Log__c','../dtos/metadata-log.dto','139092AKrejy','values','error','Job_Completed__c','./vpk.service','Activity_Item__c','../../../core','./veeva.service','generate','\x0a\x20\x20\x20\x20\x20\x20SELECT\x20Id\x0a\x20\x20\x20\x20\x20\x20FROM\x20Attachment\x0a\x20\x20\x20\x20\x20\x20WHERE\x20ParentId\x20=\x20\x27','_veevaService','(((.+)+)+)+$','../constants/flosum.constants','\x20</a>','IdDeploymentResultRetriever','Logger','finishRollback','flat','11367GUuJSp','/Attachment','RollbackService','log','formFlosumDeploymentResults','defineProperty','Organisation__c,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','_logger','../classes/errors/salesforce-dml-error','veeva-rollback','\x20:\x20','\x20of\x20branch\x20to\x20Organization\x20','_vpkService','catch','saveLog','filter','6xYOufA','_timeZone','retrieveRecords','_tempFolder','Cannot\x20find\x20Backup\x20Zip','5MZdCNs','./salesforce.service','\x0a\x20\x20\x20\x20\x20\x20SELECT\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Id,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Name,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','Retrieve\x20Deployment\x20Results','post','_componentIds','createVpk','Deployment','FLOSUM_NAMESPACE','toString','packageId','createZip','Retrieve\x20Backup','89142ACniFI','organizationId','saveDeploymentResults','base64','_attachmentLogId','packageComponentList','Branch__c','Form\x20Deployment\x20Results','Metadata_Log__c\x0a\x20\x20\x20\x20\x20\x20WHERE\x20Id\x20=\x20\x27','MetadataLogDto','patch'];a393_0x2529=function(){return _0x21575f;};return a393_0x2529();}exports[a393_0x499033(0xd1)]=RollbackService;