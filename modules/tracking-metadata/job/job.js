const a319_0x3913dd=a319_0x17af;(function(_0x2fe2e4,_0x515144){const _0x2d8ed5=a319_0x17af,_0x249f67=_0x2fe2e4();while(!![]){try{const _0x21248f=-parseInt(_0x2d8ed5(0xcb))/0x1+parseInt(_0x2d8ed5(0xea))/0x2*(-parseInt(_0x2d8ed5(0x97))/0x3)+-parseInt(_0x2d8ed5(0xe5))/0x4*(parseInt(_0x2d8ed5(0xc2))/0x5)+-parseInt(_0x2d8ed5(0xae))/0x6+-parseInt(_0x2d8ed5(0xad))/0x7+parseInt(_0x2d8ed5(0xde))/0x8+parseInt(_0x2d8ed5(0x94))/0x9*(parseInt(_0x2d8ed5(0x9b))/0xa);if(_0x21248f===_0x515144)break;else _0x249f67['push'](_0x249f67['shift']());}catch(_0x2cc776){_0x249f67['push'](_0x249f67['shift']());}}}(a319_0x5322,0x97e63));const a319_0x187c1a=(function(){let _0x3ad99a=!![];return function(_0x2cf2df,_0x4a432d){const _0x2772e8=_0x3ad99a?function(){const _0x240a3c=a319_0x17af;if(_0x4a432d){const _0x41c823=_0x4a432d[_0x240a3c(0xd2)](_0x2cf2df,arguments);return _0x4a432d=null,_0x41c823;}}:function(){};return _0x3ad99a=![],_0x2772e8;};}()),a319_0x3023a1=a319_0x187c1a(this,function(){const _0x2a8b74=a319_0x17af;return a319_0x3023a1[_0x2a8b74(0xc6)]()[_0x2a8b74(0xa7)](_0x2a8b74(0xcd))[_0x2a8b74(0xc6)]()[_0x2a8b74(0x9f)](a319_0x3023a1)[_0x2a8b74(0xa7)](_0x2a8b74(0xcd));});a319_0x3023a1();function a319_0x5322(){const _0x37cea5=['then','slice','metadataLogId','flosumOrgCredentials','status','search','init','Job\x20Error:\x20','trackingSettingId','parse','COMPLETED','8687273vHrFoU','4947408KHYoLY','update','logger','./classes/components.deployer','Tracking\x20components\x20job\x20has\x20been\x20completed','targetInstance','getTime','getComponentsDeployer','error','../constants','utf-8','default','RestSimpleDeployData','getMetadataRetriever','../../../constants/job','Tracking\x20setting\x20not\x20updated\x20\x0a\x20','../../../constants','MetadataLogger','initInstances','./classes/source-member.handler','1085zxlrfv','ComponentsDeployer','__importDefault','getSourceMemberRetriever','toString','SourceMemberRetriever','getSourceMemberHandler','Last_Start_Retrieval__c','initManifest','827069RRaDDI','updateTrackingSetting','(((.+)+)+)+$','fs/promises','lastRetrieveDate','create','readFile','apply','AuthManager','message','../../shared/managers/auth.manager','jobId','initLogger','EXCEPTION','startDate','Is_Processed__c','FLOSUM_NAMESPACE','apiVersion','Job','3741336gGCnqP','argv','log','initMetadataLogger','Tracking_Setting__c','pipeline','Tracking\x20components\x20job\x20has\x20been\x20failed','21992CXREUH','MetadataRetriever','metadataLogger','Logger','stream/promises','78QYsfSn','./classes/logger/logger','catch','createTrackingSettingRecord','LogStatus','execute','flosumInstance','AxiosInstanceUtils','timeZone','./classes/metadata-logger','9hqjvgd','path','defineProperty','26049PQSBXT','../../../core','SourceMemberHandler','metadataTypes','45788910WaYpQn','jobStorePath','targetOrgCredentials','exit','constructor','targetOrgId','Tracking\x20setting\x20updated'];a319_0x5322=function(){return _0x37cea5;};return a319_0x5322();}'use strict';var __importDefault=this&&this[a319_0x3913dd(0xc4)]||function(_0x48f565){return _0x48f565&&_0x48f565['__esModule']?_0x48f565:{'default':_0x48f565};};Object[a319_0x3913dd(0x96)](exports,'__esModule',{'value':!![]}),exports[a319_0x3913dd(0xdd)]=void 0x0;const minimist_1=__importDefault(require('minimist')),core_1=require(a319_0x3913dd(0x98)),salesforce_1=require('@flosum/salesforce'),auth_manager_1=require(a319_0x3913dd(0xd5)),logger_1=require(a319_0x3913dd(0xeb)),promises_1=require(a319_0x3913dd(0xe9)),promises_2=require(a319_0x3913dd(0xce)),path_1=__importDefault(require(a319_0x3913dd(0x95))),metadata_retriever_1=require('./classes/metadata.retriever'),components_deployer_1=require(a319_0x3913dd(0xb1)),source_member_retriever_1=require('./classes/source-member.retriever'),source_member_handler_1=require(a319_0x3913dd(0xc1)),metadata_logger_1=require(a319_0x3913dd(0x93)),job_1=require(a319_0x3913dd(0xbc)),constants_1=require(a319_0x3913dd(0xbe)),constants_2=require(a319_0x3913dd(0xb7)),{jobId,jobStorePath}=(0x0,minimist_1[a319_0x3913dd(0xb9)])(process[a319_0x3913dd(0xdf)][a319_0x3913dd(0xa3)](0x2)),systemLogger=new core_1[(a319_0x3913dd(0xe8))](jobId);function a319_0x17af(_0x3bcc8f,_0x4aaacb){const _0x576729=a319_0x5322();return a319_0x17af=function(_0x3023a1,_0x187c1a){_0x3023a1=_0x3023a1-0x8e;let _0x5322bf=_0x576729[_0x3023a1];return _0x5322bf;},a319_0x17af(_0x3bcc8f,_0x4aaacb);}class Job{constructor(){const _0x49d42a=a319_0x3913dd;this[_0x49d42a(0x9c)]=jobStorePath,this[_0x49d42a(0xd6)]=jobId;}async[a319_0x3913dd(0xca)](){const _0x69f477=a319_0x3913dd,_0x535e84=path_1['default']['join'](this['jobStorePath'],job_1['MANIFEST_FILENAME']),_0x1ed497=await(0x0,promises_2[_0x69f477(0xd1)])(_0x535e84,{'encoding':_0x69f477(0xb8)})[_0x69f477(0xa2)](JSON[_0x69f477(0xab)])[_0x69f477(0xa2)](({details:_0x1c33ba})=>_0x1c33ba);await(0x0,promises_2['rm'])(_0x535e84,{'recursive':!![],'force':!![]}),this[_0x69f477(0xdc)]=_0x1ed497[_0x69f477(0xdc)],this[_0x69f477(0xa5)]=_0x1ed497[_0x69f477(0xa5)],this[_0x69f477(0x9d)]=_0x1ed497[_0x69f477(0x9d)],this[_0x69f477(0xa0)]=_0x1ed497[_0x69f477(0xa0)],this[_0x69f477(0xaa)]=_0x1ed497[_0x69f477(0xaa)],this[_0x69f477(0xcf)]=_0x1ed497['lastRetrieveDate'],this[_0x69f477(0x9a)]=_0x1ed497[_0x69f477(0x9a)],this[_0x69f477(0x92)]=_0x1ed497['timeZone'];}async[a319_0x3913dd(0xc0)](){const _0x1b55c2=a319_0x3913dd;this[_0x1b55c2(0x90)]=await salesforce_1[_0x1b55c2(0x91)][_0x1b55c2(0xd0)](new auth_manager_1['AuthManager'](this[_0x1b55c2(0xa5)]),[],{'maxContentLength':Infinity,'maxBodyLength':Infinity}),this[_0x1b55c2(0xb3)]=await salesforce_1[_0x1b55c2(0x91)][_0x1b55c2(0xd0)](new auth_manager_1[(_0x1b55c2(0xd3))](this['targetOrgCredentials']),[],{'maxContentLength':Infinity,'maxBodyLength':Infinity});}async[a319_0x3913dd(0xe1)](){const _0x39688c=a319_0x3913dd;this[_0x39688c(0xe7)]=new metadata_logger_1[(_0x39688c(0xbf))]({'apiVersion':this[_0x39688c(0xdc)],'instance':this[_0x39688c(0x90)],'targetOrgId':this[_0x39688c(0xa0)],'trackingSettingId':this[_0x39688c(0xaa)],'startDate':this[_0x39688c(0xd9)]}),this[_0x39688c(0xa4)]=await this['metadataLogger'][_0x39688c(0xa8)]();}[a319_0x3913dd(0xd7)](){const _0x348cae=a319_0x3913dd;this[_0x348cae(0xb0)]=new logger_1['Logger']({'systemLogger':systemLogger,'apiVersion':this[_0x348cae(0xdc)],'instance':this[_0x348cae(0x90)],'metadataLogId':this[_0x348cae(0xa4)],'timeZone':this[_0x348cae(0x92)]});}['getSourceMemberRetriever'](){const _0x4278be=a319_0x3913dd;return new source_member_retriever_1[(_0x4278be(0xc7))]({'apiVersion':this[_0x4278be(0xdc)],'instance':this[_0x4278be(0xb3)],'logger':this[_0x4278be(0xb0)],'lastRetrieveDate':this[_0x4278be(0xcf)],'currentRetrieveDate':this[_0x4278be(0xd9)],'metadataTypes':this[_0x4278be(0x9a)]});}[a319_0x3913dd(0xc8)](){const _0x12244e=a319_0x3913dd;return new source_member_handler_1[(_0x12244e(0x99))]({'instance':this[_0x12244e(0x90)],'apiVersion':this[_0x12244e(0xdc)],'logger':this['logger'],'targetOrgId':this['targetOrgId']});}[a319_0x3913dd(0xbb)](){const _0x553996=a319_0x3913dd;return new metadata_retriever_1[(_0x553996(0xe6))]({'instance':this[_0x553996(0xb3)],'apiVersion':this[_0x553996(0xdc)],'logger':this[_0x553996(0xb0)],'metadataTypes':this[_0x553996(0x9a)]});}[a319_0x3913dd(0xb5)](){const _0x4ca539=a319_0x3913dd;return new components_deployer_1[(_0x4ca539(0xc3))]({'instance':this[_0x4ca539(0x90)],'logger':this['logger'],'apiVersion':this[_0x4ca539(0xdc)],'targetOrgId':this[_0x4ca539(0xa0)],'trackingSettingId':this[_0x4ca539(0xaa)]});}[a319_0x3913dd(0xed)](){const _0x431087=a319_0x3913dd;return{'attributes':{'type':constants_1['FLOSUM_NAMESPACE']+_0x431087(0xe2)},'Id':this['trackingSettingId'],[constants_1[_0x431087(0xdb)]+_0x431087(0xda)]:![],[constants_1[_0x431087(0xdb)]+_0x431087(0xc9)]:this['startDate']};}async['updateTrackingSetting'](){const _0x3e2911=a319_0x3913dd,_0x5750ff=this[_0x3e2911(0xed)](),_0x17bfb0=new salesforce_1[(_0x3e2911(0xba))]({'instance':this[_0x3e2911(0x90)],'objectName':constants_1[_0x3e2911(0xdb)]+_0x3e2911(0xe2),'api':this[_0x3e2911(0xdc)],'allOrNone':![],'externalIdField':'Id'}),_0x124932=await _0x17bfb0[_0x3e2911(0x8f)]({'records':[_0x5750ff]}),_0x92ca8=_0x124932['at'](0x0);(_0x92ca8===null||_0x92ca8===void 0x0?void 0x0:_0x92ca8['success'])?this[_0x3e2911(0xb0)][_0x3e2911(0xe0)](_0x3e2911(0xa1)):this[_0x3e2911(0xb0)][_0x3e2911(0xe0)](_0x3e2911(0xbd)+(_0x92ca8===null||_0x92ca8===void 0x0?void 0x0:_0x92ca8['error']));}async[a319_0x3913dd(0x8f)](){const _0xdc394c=a319_0x3913dd;await this[_0xdc394c(0xca)](),this[_0xdc394c(0xd9)]=new Date()[_0xdc394c(0xb4)]();try{await this['initInstances'](),await this[_0xdc394c(0xe1)](),this[_0xdc394c(0xd7)](),this[_0xdc394c(0xb0)][_0xdc394c(0xe0)]('Tracking\x20components\x20job\x20has\x20been\x20started\x20with\x20id:\x20'+this[_0xdc394c(0xd6)]),this['metadataLogger'][_0xdc394c(0xa6)]=constants_2[_0xdc394c(0x8e)]['IN_PROGRESS'],await this[_0xdc394c(0xe7)][_0xdc394c(0xaf)](),await this[_0xdc394c(0xb0)]['update']();const _0x1d6eca=this[_0xdc394c(0xc5)](),_0xd49e06=this[_0xdc394c(0xc8)](),_0x94d36a=this[_0xdc394c(0xbb)](),_0xdbbfbe=this['getComponentsDeployer']();await(0x0,promises_1[_0xdc394c(0xe3)])(_0x1d6eca,_0xd49e06,_0x94d36a,_0xdbbfbe),this[_0xdc394c(0xb0)][_0xdc394c(0xe0)](_0xdc394c(0xb2)),this[_0xdc394c(0xe7)][_0xdc394c(0xa6)]=constants_2[_0xdc394c(0x8e)][_0xdc394c(0xac)];}catch(_0x4e7f45){this['logger']['error'](_0xdc394c(0xe4)),this[_0xdc394c(0xb0)][_0xdc394c(0xb6)](_0x4e7f45[_0xdc394c(0xd4)]),this['metadataLogger']['status']=constants_2['LogStatus'][_0xdc394c(0xd8)];}finally{await this[_0xdc394c(0xcc)](),await this[_0xdc394c(0xb0)][_0xdc394c(0xaf)](),await this[_0xdc394c(0xe7)][_0xdc394c(0xaf)]();}}}exports[a319_0x3913dd(0xdd)]=Job,new Job()[a319_0x3913dd(0x8f)]()[a319_0x3913dd(0xa2)](()=>process[a319_0x3913dd(0x9e)](0x0))[a319_0x3913dd(0xec)](_0x3b666c=>{const _0x134c22=a319_0x3913dd;systemLogger['error'](_0x134c22(0xa9)+_0x3b666c[_0x134c22(0xd4)]),process[_0x134c22(0x9e)](0x1);});