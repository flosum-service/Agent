const a304_0x2387b2=a304_0x1bbc;(function(_0x21be35,_0xa85326){const _0x6d9ec6=a304_0x1bbc,_0x4252c4=_0x21be35();while(!![]){try{const _0x2acdb5=-parseInt(_0x6d9ec6(0x16d))/0x1*(-parseInt(_0x6d9ec6(0x196))/0x2)+-parseInt(_0x6d9ec6(0x1b0))/0x3+parseInt(_0x6d9ec6(0x1a4))/0x4*(-parseInt(_0x6d9ec6(0x182))/0x5)+parseInt(_0x6d9ec6(0x19a))/0x6+parseInt(_0x6d9ec6(0x1b9))/0x7+parseInt(_0x6d9ec6(0x192))/0x8*(-parseInt(_0x6d9ec6(0x1a3))/0x9)+parseInt(_0x6d9ec6(0x1a7))/0xa*(parseInt(_0x6d9ec6(0x186))/0xb);if(_0x2acdb5===_0xa85326)break;else _0x4252c4['push'](_0x4252c4['shift']());}catch(_0x301c7a){_0x4252c4['push'](_0x4252c4['shift']());}}}(a304_0x5b05,0xa7922));const a304_0x4fcace=(function(){let _0x2f9e72=!![];return function(_0x260f3f,_0x22e96c){const _0x4213cc=_0x2f9e72?function(){const _0x152e8e=a304_0x1bbc;if(_0x22e96c){const _0x22eb64=_0x22e96c[_0x152e8e(0x187)](_0x260f3f,arguments);return _0x22e96c=null,_0x22eb64;}}:function(){};return _0x2f9e72=![],_0x4213cc;};}()),a304_0x519ef4=a304_0x4fcace(this,function(){const _0x39d7a0=a304_0x1bbc;return a304_0x519ef4[_0x39d7a0(0x1a0)]()[_0x39d7a0(0x19e)](_0x39d7a0(0x17d))['toString']()[_0x39d7a0(0x1b5)](a304_0x519ef4)[_0x39d7a0(0x19e)](_0x39d7a0(0x17d));});a304_0x519ef4();function a304_0x1bbc(_0xa1ff39,_0x9e62ee){const _0xf3458b=a304_0x5b05();return a304_0x1bbc=function(_0x519ef4,_0x4fcace){_0x519ef4=_0x519ef4-0x165;let _0x5b0586=_0xf3458b[_0x519ef4];return _0x5b0586;},a304_0x1bbc(_0xa1ff39,_0x9e62ee);}'use strict';var __importDefault=this&&this['__importDefault']||function(_0x816caf){return _0x816caf&&_0x816caf['__esModule']?_0x816caf:{'default':_0x816caf};};Object[a304_0x2387b2(0x18f)](exports,a304_0x2387b2(0x193),{'value':!![]}),exports[a304_0x2387b2(0x1aa)]=void 0x0;const minimist_1=__importDefault(require('minimist')),core_1=require(a304_0x2387b2(0x19d)),salesforce_1=require(a304_0x2387b2(0x183)),auth_manager_1=require('../../shared/managers/auth.manager'),logger_1=require(a304_0x2387b2(0x17e)),promises_1=require('stream/promises'),promises_2=require('fs/promises'),path_1=__importDefault(require(a304_0x2387b2(0x18e))),metadata_retriever_1=require(a304_0x2387b2(0x16a)),components_deployer_1=require(a304_0x2387b2(0x166)),source_member_retriever_1=require(a304_0x2387b2(0x1ac)),source_member_handler_1=require('./classes/source-member.handler'),metadata_logger_1=require(a304_0x2387b2(0x190)),job_1=require(a304_0x2387b2(0x1ae)),constants_1=require(a304_0x2387b2(0x1ad)),constants_2=require(a304_0x2387b2(0x1ab)),{jobId,jobStorePath}=(0x0,minimist_1[a304_0x2387b2(0x1af)])(process['argv'][a304_0x2387b2(0x17c)](0x2)),systemLogger=new core_1[(a304_0x2387b2(0x188))](jobId);function a304_0x5b05(){const _0x361c38=['utf-8','ComponentsDeployer','MetadataRetriever','./classes/components.deployer','then','init','create','./classes/metadata.retriever','initMetadataLogger','metadataLogger','1xDbXcc','message','join','error','AuthManager','Job\x20Error:\x20','targetOrgCredentials','metadataLogId','Tracking\x20setting\x20updated','COMPLETED','getSourceMemberRetriever','IN_PROGRESS','FLOSUM_NAMESPACE','updateTrackingSetting','Tracking\x20components\x20job\x20has\x20been\x20failed','slice','(((.+)+)+)+$','./classes/logger/logger','jobId','Tracking\x20components\x20job\x20has\x20been\x20completed','apiVersion','75695GlUKWX','@flosum/salesforce','logger','readFile','88uMiHjJ','apply','Logger','flosumOrgCredentials','flosumInstance','targetOrgId','execute','jobStorePath','path','defineProperty','./classes/metadata-logger','Tracking_Setting__c','64BrcCiZ','__esModule','initLogger','catch','1114266kbRgXa','getMetadataRetriever','targetInstance','SourceMemberHandler','4739820iEQdXD','initInstances','lastRetrieveDate','../../../core','search','EXCEPTION','toString','update','startDate','1284057mwFvyH','204lrVUwi','log','metadataTypes','937850giMNOG','parse','createTrackingSettingRecord','Job','../constants','./classes/source-member.retriever','../../../constants','../../../constants/job','default','1716891QYvrev','getComponentsDeployer','getTime','trackingSettingId','AxiosInstanceUtils','constructor','success','pipeline','initManifest','7523299TkNgJp','SourceMemberRetriever','RestSimpleDeployData','timeZone','getSourceMemberHandler','LogStatus'];a304_0x5b05=function(){return _0x361c38;};return a304_0x5b05();}class Job{constructor(){const _0x332da3=a304_0x2387b2;this[_0x332da3(0x18d)]=jobStorePath,this[_0x332da3(0x17f)]=jobId;}async[a304_0x2387b2(0x1b8)](){const _0x2c8348=a304_0x2387b2,_0xcd99f8=path_1[_0x2c8348(0x1af)][_0x2c8348(0x16f)](this['jobStorePath'],job_1['MANIFEST_FILENAME']),_0x4b2521=await(0x0,promises_2[_0x2c8348(0x185)])(_0xcd99f8,{'encoding':_0x2c8348(0x1bf)})[_0x2c8348(0x167)](JSON[_0x2c8348(0x1a8)])[_0x2c8348(0x167)](({details:_0x4d933b})=>_0x4d933b);await(0x0,promises_2['rm'])(_0xcd99f8,{'recursive':!![],'force':!![]}),this[_0x2c8348(0x181)]=_0x4b2521['apiVersion'],this[_0x2c8348(0x189)]=_0x4b2521[_0x2c8348(0x189)],this[_0x2c8348(0x173)]=_0x4b2521[_0x2c8348(0x173)],this['targetOrgId']=_0x4b2521[_0x2c8348(0x18b)],this['trackingSettingId']=_0x4b2521['trackingSettingId'],this[_0x2c8348(0x19c)]=_0x4b2521[_0x2c8348(0x19c)],this[_0x2c8348(0x1a6)]=_0x4b2521[_0x2c8348(0x1a6)],this[_0x2c8348(0x1bc)]=_0x4b2521[_0x2c8348(0x1bc)];}async['initInstances'](){const _0xfe313d=a304_0x2387b2;this[_0xfe313d(0x18a)]=await salesforce_1['AxiosInstanceUtils'][_0xfe313d(0x169)](new auth_manager_1[(_0xfe313d(0x171))](this['flosumOrgCredentials']),[],{'maxContentLength':Infinity,'maxBodyLength':Infinity}),this[_0xfe313d(0x198)]=await salesforce_1[_0xfe313d(0x1b4)][_0xfe313d(0x169)](new auth_manager_1[(_0xfe313d(0x171))](this[_0xfe313d(0x173)]),[],{'maxContentLength':Infinity,'maxBodyLength':Infinity});}async[a304_0x2387b2(0x16b)](){const _0x49c80b=a304_0x2387b2;this[_0x49c80b(0x16c)]=new metadata_logger_1['MetadataLogger']({'apiVersion':this[_0x49c80b(0x181)],'instance':this['flosumInstance'],'targetOrgId':this[_0x49c80b(0x18b)],'trackingSettingId':this['trackingSettingId'],'startDate':this['startDate']}),this[_0x49c80b(0x174)]=await this[_0x49c80b(0x16c)][_0x49c80b(0x168)]();}['initLogger'](){const _0x106d21=a304_0x2387b2;this[_0x106d21(0x184)]=new logger_1[(_0x106d21(0x188))]({'systemLogger':systemLogger,'apiVersion':this['apiVersion'],'instance':this[_0x106d21(0x18a)],'metadataLogId':this[_0x106d21(0x174)],'timeZone':this[_0x106d21(0x1bc)]});}['getSourceMemberRetriever'](){const _0x4b8e3a=a304_0x2387b2;return new source_member_retriever_1[(_0x4b8e3a(0x1ba))]({'apiVersion':this[_0x4b8e3a(0x181)],'instance':this['targetInstance'],'logger':this[_0x4b8e3a(0x184)],'lastRetrieveDate':this[_0x4b8e3a(0x19c)],'currentRetrieveDate':this[_0x4b8e3a(0x1a2)],'metadataTypes':this[_0x4b8e3a(0x1a6)]});}[a304_0x2387b2(0x1bd)](){const _0x34bbbb=a304_0x2387b2;return new source_member_handler_1[(_0x34bbbb(0x199))]({'instance':this['flosumInstance'],'apiVersion':this['apiVersion'],'logger':this[_0x34bbbb(0x184)],'targetOrgId':this[_0x34bbbb(0x18b)]});}[a304_0x2387b2(0x197)](){const _0x36449d=a304_0x2387b2;return new metadata_retriever_1[(_0x36449d(0x165))]({'instance':this[_0x36449d(0x198)],'apiVersion':this[_0x36449d(0x181)],'logger':this['logger'],'metadataTypes':this[_0x36449d(0x1a6)]});}['getComponentsDeployer'](){const _0x48b8ed=a304_0x2387b2;return new components_deployer_1[(_0x48b8ed(0x1c0))]({'instance':this[_0x48b8ed(0x18a)],'logger':this['logger'],'apiVersion':this[_0x48b8ed(0x181)],'targetOrgId':this[_0x48b8ed(0x18b)],'trackingSettingId':this['trackingSettingId']});}[a304_0x2387b2(0x1a9)](){const _0x9e9fc2=a304_0x2387b2;return{'attributes':{'type':constants_1['FLOSUM_NAMESPACE']+_0x9e9fc2(0x191)},'Id':this[_0x9e9fc2(0x1b3)],[constants_1[_0x9e9fc2(0x179)]+'Is_Processed__c']:![],[constants_1[_0x9e9fc2(0x179)]+'Last_Start_Retrieval__c']:this[_0x9e9fc2(0x1a2)]};}async[a304_0x2387b2(0x17a)](){const _0x5827ff=a304_0x2387b2,_0x27dd78=this[_0x5827ff(0x1a9)](),_0x17159d=new salesforce_1[(_0x5827ff(0x1bb))]({'instance':this[_0x5827ff(0x18a)],'objectName':constants_1[_0x5827ff(0x179)]+'Tracking_Setting__c','api':this[_0x5827ff(0x181)],'allOrNone':![],'externalIdField':'Id'}),_0x29bc4f=await _0x17159d['execute']({'records':[_0x27dd78]}),_0x5aded0=_0x29bc4f['at'](0x0);(_0x5aded0===null||_0x5aded0===void 0x0?void 0x0:_0x5aded0[_0x5827ff(0x1b6)])?this[_0x5827ff(0x184)][_0x5827ff(0x1a5)](_0x5827ff(0x175)):this[_0x5827ff(0x184)][_0x5827ff(0x1a5)]('Tracking\x20setting\x20not\x20updated\x20\x0a\x20'+(_0x5aded0===null||_0x5aded0===void 0x0?void 0x0:_0x5aded0[_0x5827ff(0x170)]));}async['execute'](){const _0x4811b1=a304_0x2387b2;await this[_0x4811b1(0x1b8)](),this[_0x4811b1(0x1a2)]=new Date()[_0x4811b1(0x1b2)]();try{await this[_0x4811b1(0x19b)](),await this[_0x4811b1(0x16b)](),this[_0x4811b1(0x194)](),this[_0x4811b1(0x184)][_0x4811b1(0x1a5)]('Tracking\x20components\x20job\x20has\x20been\x20started\x20with\x20id:\x20'+this[_0x4811b1(0x17f)]),this[_0x4811b1(0x16c)]['status']=constants_2['LogStatus'][_0x4811b1(0x178)],await this[_0x4811b1(0x16c)][_0x4811b1(0x1a1)](),await this[_0x4811b1(0x184)][_0x4811b1(0x1a1)]();const _0x3a5f9f=this[_0x4811b1(0x177)](),_0x15827b=this['getSourceMemberHandler'](),_0x49ad53=this[_0x4811b1(0x197)](),_0x1d7a8d=this[_0x4811b1(0x1b1)]();await(0x0,promises_1[_0x4811b1(0x1b7)])(_0x3a5f9f,_0x15827b,_0x49ad53,_0x1d7a8d),this['logger'][_0x4811b1(0x1a5)](_0x4811b1(0x180)),this[_0x4811b1(0x16c)]['status']=constants_2['LogStatus'][_0x4811b1(0x176)];}catch(_0x1ce6b0){this['logger'][_0x4811b1(0x170)](_0x4811b1(0x17b)),this[_0x4811b1(0x184)]['error'](_0x1ce6b0[_0x4811b1(0x16e)]),this[_0x4811b1(0x16c)]['status']=constants_2[_0x4811b1(0x1be)][_0x4811b1(0x19f)];}finally{await this[_0x4811b1(0x17a)](),await this[_0x4811b1(0x184)]['update'](),await this[_0x4811b1(0x16c)]['update']();}}}exports['Job']=Job,new Job()[a304_0x2387b2(0x18c)]()[a304_0x2387b2(0x167)](()=>process['exit'](0x0))[a304_0x2387b2(0x195)](_0x1494fb=>{const _0x4ae4d9=a304_0x2387b2;systemLogger[_0x4ae4d9(0x170)](_0x4ae4d9(0x172)+_0x1494fb[_0x4ae4d9(0x16e)]),process['exit'](0x1);});