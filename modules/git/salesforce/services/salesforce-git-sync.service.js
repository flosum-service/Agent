const a179_0x29b144=a179_0x12d2;(function(_0x55109e,_0x1b873d){const _0x58811d=a179_0x12d2,_0xcce2d=_0x55109e();while(!![]){try{const _0x54e8cf=-parseInt(_0x58811d(0x1ed))/0x1+parseInt(_0x58811d(0x21d))/0x2+parseInt(_0x58811d(0x214))/0x3*(-parseInt(_0x58811d(0x21f))/0x4)+-parseInt(_0x58811d(0x1f2))/0x5+parseInt(_0x58811d(0x1ea))/0x6+parseInt(_0x58811d(0x1fb))/0x7+parseInt(_0x58811d(0x21c))/0x8*(parseInt(_0x58811d(0x204))/0x9);if(_0x54e8cf===_0x1b873d)break;else _0xcce2d['push'](_0xcce2d['shift']());}catch(_0x15a409){_0xcce2d['push'](_0xcce2d['shift']());}}}(a179_0x39a1,0xe9e93));const a179_0x1ad8cb=(function(){let _0x595d12=!![];return function(_0x385a79,_0x1fca8b){const _0x297016=_0x595d12?function(){const _0x1a91ec=a179_0x12d2;if(_0x1fca8b){const _0x3ab461=_0x1fca8b[_0x1a91ec(0x1ee)](_0x385a79,arguments);return _0x1fca8b=null,_0x3ab461;}}:function(){};return _0x595d12=![],_0x297016;};}()),a179_0x36de1c=a179_0x1ad8cb(this,function(){const _0x1bc595=a179_0x12d2;return a179_0x36de1c[_0x1bc595(0x223)]()[_0x1bc595(0x1f6)](_0x1bc595(0x227))[_0x1bc595(0x223)]()[_0x1bc595(0x1e2)](a179_0x36de1c)[_0x1bc595(0x1f6)](_0x1bc595(0x227));});a179_0x36de1c();'use strict';var __decorate=this&&this[a179_0x29b144(0x200)]||function(_0xf36adb,_0x56918e,_0x2a85c2,_0x2add9f){const _0x2af6ba=a179_0x29b144;var _0x4a46dd=arguments[_0x2af6ba(0x1e8)],_0x37d9ce=_0x4a46dd<0x3?_0x56918e:_0x2add9f===null?_0x2add9f=Object['getOwnPropertyDescriptor'](_0x56918e,_0x2a85c2):_0x2add9f,_0x1f2dbd;if(typeof Reflect===_0x2af6ba(0x1e9)&&typeof Reflect['decorate']===_0x2af6ba(0x219))_0x37d9ce=Reflect[_0x2af6ba(0x203)](_0xf36adb,_0x56918e,_0x2a85c2,_0x2add9f);else{for(var _0x5cad04=_0xf36adb[_0x2af6ba(0x1e8)]-0x1;_0x5cad04>=0x0;_0x5cad04--)if(_0x1f2dbd=_0xf36adb[_0x5cad04])_0x37d9ce=(_0x4a46dd<0x3?_0x1f2dbd(_0x37d9ce):_0x4a46dd>0x3?_0x1f2dbd(_0x56918e,_0x2a85c2,_0x37d9ce):_0x1f2dbd(_0x56918e,_0x2a85c2))||_0x37d9ce;}return _0x4a46dd>0x3&&_0x37d9ce&&Object[_0x2af6ba(0x20e)](_0x56918e,_0x2a85c2,_0x37d9ce),_0x37d9ce;},__metadata=this&&this[a179_0x29b144(0x1fe)]||function(_0x1acc88,_0x776a62){const _0x31a776=a179_0x29b144;if(typeof Reflect==='object'&&typeof Reflect[_0x31a776(0x1e3)]===_0x31a776(0x219))return Reflect[_0x31a776(0x1e3)](_0x1acc88,_0x776a62);};Object[a179_0x29b144(0x20e)](exports,a179_0x29b144(0x225),{'value':!![]}),exports['SalesforceGitSyncService']=void 0x0;const not_found_error_1=require('../../../../core/errors/not-found.error'),typedi_1=require('typedi'),constants_1=require(a179_0x29b144(0x206)),queries_1=require(a179_0x29b144(0x1f1)),flosum_naming_utils_1=require('../utils/flosum-naming.utils'),salesforce_query_service_1=require(a179_0x29b144(0x1f3)),salesforce_rest_service_1=require(a179_0x29b144(0x21a));let SalesforceGitSyncService=class SalesforceGitSyncService{constructor(_0x21019f,_0x75a05b){const _0x593329=a179_0x29b144;this[_0x593329(0x1ec)]=_0x21019f,this['restService']=_0x75a05b,this[_0x593329(0x20d)]=0xc8;}[a179_0x29b144(0x1fa)](_0x261afb){const _0xf074da=a179_0x29b144,_0x4c0bcc=flosum_naming_utils_1[_0xf074da(0x229)](_0x261afb,[_0xf074da(0x1e5),_0xf074da(0x22a),_0xf074da(0x1e7),'File_Name__c',_0xf074da(0x217),'Id']);return{'id':_0x4c0bcc['Id'],'name':_0x4c0bcc['Component_Name__c'],'type':_0x4c0bcc['Component_Type__c'],'fileName':_0x4c0bcc[_0xf074da(0x212)],'crc32':_0x4c0bcc[_0xf074da(0x1e7)],'version':+_0x4c0bcc[_0xf074da(0x217)]};}async[a179_0x29b144(0x210)](_0x56a2bc){const _0x9d4733=a179_0x29b144,[_0x460b0d]=await this['queryService'][_0x9d4733(0x221)](queries_1['GET_REPOSITORY_BY_NAME_QUERY'][_0x9d4733(0x1f7)]('%name%',_0x56a2bc));if(!_0x460b0d)throw new not_found_error_1[(_0x9d4733(0x1e4))]('Repository\x20\x22'+_0x56a2bc+_0x9d4733(0x226));return _0x460b0d['Id'];}async[a179_0x29b144(0x218)](_0x818fee){const _0x160f93=a179_0x29b144,[_0x4273e9]=await this[_0x160f93(0x1ec)][_0x160f93(0x221)](queries_1[_0x160f93(0x21b)][_0x160f93(0x1f7)](_0x160f93(0x209),_0x818fee));if(!_0x4273e9)throw new not_found_error_1[(_0x160f93(0x1e4))](_0x160f93(0x228)+_0x818fee+_0x160f93(0x226));return _0x4273e9['Id'];}async[a179_0x29b144(0x202)](){const _0x3a311f=a179_0x29b144,_0x50f4a8=await this[_0x3a311f(0x1ec)][_0x3a311f(0x221)](queries_1[_0x3a311f(0x1ff)]);return _0x50f4a8['map'](_0x114a32=>flosum_naming_utils_1[_0x3a311f(0x229)](_0x114a32,['Id','Name']))[_0x3a311f(0x207)](_0x3a4a28=>({'id':_0x3a4a28['Id'],'name':_0x3a4a28[_0x3a311f(0x1f8)]}));}async[a179_0x29b144(0x1e6)](_0x28087a,_0x311b4d){const _0x60543=a179_0x29b144,_0x548a14=[];while(_0x28087a[_0x60543(0x1e8)]){const _0x4142d2=queries_1[_0x60543(0x205)][_0x60543(0x1f7)](_0x60543(0x211),_0x28087a[_0x60543(0x222)](0x0,this[_0x60543(0x20d)])[_0x60543(0x207)](_0x708b14=>'\x27'+_0x708b14+'\x27')[_0x60543(0x21e)](','))[_0x60543(0x1f7)](_0x60543(0x1f5),_0x311b4d),_0x47c7eb=await this[_0x60543(0x1ec)][_0x60543(0x221)](_0x4142d2);_0x548a14[_0x60543(0x20b)](..._0x47c7eb);}return _0x548a14[_0x60543(0x207)](_0x10199e=>this['extractComponentMetadataFromRecord'](_0x10199e));}async['fetchBranchComponentsByFilenames'](_0xb4f223,_0x34053a){const _0x24daaa=a179_0x29b144,_0x32b7f3=[];while(_0xb4f223[_0x24daaa(0x1e8)]){const _0x5deb58=queries_1['GET_BRANCH_COMPONENTS_BY_FILENAMES_QUERY'][_0x24daaa(0x1f7)](_0x24daaa(0x211),_0xb4f223[_0x24daaa(0x222)](0x0,this[_0x24daaa(0x20d)])['map'](_0x55fb37=>'\x27'+_0x55fb37+'\x27')[_0x24daaa(0x21e)](','))['replace'](_0x24daaa(0x213),_0x34053a),_0xbb2196=await this['queryService'][_0x24daaa(0x221)](_0x5deb58);_0x32b7f3[_0x24daaa(0x20b)](..._0xbb2196);}return _0x32b7f3[_0x24daaa(0x207)](_0x4c8ee5=>this[_0x24daaa(0x1fa)](_0x4c8ee5));}async[a179_0x29b144(0x20c)](_0x2c6ad6){const _0x504b53=a179_0x29b144,_0x106678=queries_1['GET_REPOSITORY_COMPONENTS_QUERY'][_0x504b53(0x1f7)](_0x504b53(0x1f5),_0x2c6ad6),_0x48528b=await this[_0x504b53(0x1ec)][_0x504b53(0x221)](_0x106678);return _0x48528b[_0x504b53(0x207)](_0x1a428b=>this[_0x504b53(0x1fa)](_0x1a428b));}async[a179_0x29b144(0x1ef)](_0x2f8862){const _0x3c98d0=a179_0x29b144,_0x2f4188=queries_1[_0x3c98d0(0x20f)][_0x3c98d0(0x1f7)](_0x3c98d0(0x213),_0x2f8862),_0x2f55cf=await this['queryService'][_0x3c98d0(0x221)](_0x2f4188);return _0x2f55cf[_0x3c98d0(0x207)](_0x1887fa=>this['extractComponentMetadataFromRecord'](_0x1887fa));}async[a179_0x29b144(0x1f4)](_0x575c07){const _0x38aaed=a179_0x29b144,_0x3474f0=[..._0x575c07],_0x2078bd=[];while(_0x3474f0[_0x38aaed(0x1e8)]){const _0x2a030d=queries_1[_0x38aaed(0x1f0)][_0x38aaed(0x1f7)](_0x38aaed(0x1eb),_0x3474f0[_0x38aaed(0x222)](0x0,this[_0x38aaed(0x20d)])[_0x38aaed(0x207)](_0x125f19=>'\x27'+_0x125f19+'\x27')[_0x38aaed(0x21e)](',')),_0x48097d=await this['queryService'][_0x38aaed(0x221)](_0x2a030d);_0x2078bd[_0x38aaed(0x20b)](..._0x48097d[_0x38aaed(0x207)](_0x495a7e=>_0x495a7e['Id']));}return _0x2078bd;}async[a179_0x29b144(0x1fc)](_0x51fffe,_0x1baa11){const _0x5a845c=a179_0x29b144;return this[_0x5a845c(0x215)][_0x5a845c(0x1f9)](constants_1[_0x5a845c(0x1fd)],{[constants_1['FLOSUM_NAMESPACE']+'Repository__c']:_0x1baa11,[constants_1['FLOSUM_NAMESPACE']+'Commit_Name__c']:_0x51fffe[_0x5a845c(0x216)](0x0,0xff),[constants_1[_0x5a845c(0x220)]+'Status__c']:'Completed',[constants_1[_0x5a845c(0x224)]+'Is_From_Agent__c']:!![]});}};SalesforceGitSyncService=__decorate([typedi_1[a179_0x29b144(0x20a)](),__metadata(a179_0x29b144(0x208),[salesforce_query_service_1[a179_0x29b144(0x201)],salesforce_rest_service_1['SalesforceRestService']])],SalesforceGitSyncService),exports['SalesforceGitSyncService']=SalesforceGitSyncService;function a179_0x12d2(_0x195812,_0x992e69){const _0x515ae6=a179_0x39a1();return a179_0x12d2=function(_0x36de1c,_0x1ad8cb){_0x36de1c=_0x36de1c-0x1e2;let _0x39a1b0=_0x515ae6[_0x36de1c];return _0x39a1b0;},a179_0x12d2(_0x195812,_0x992e69);}function a179_0x39a1(){const _0x119e98=['extractFieldsFromRecord','Component_Type__c','constructor','metadata','NotFoundError','Component_Name__c','fetchRepositoryComponentsByFilenames','CRC32__c','length','object','10438866BhEScB','%componentIds%','queryService','1889082CAfRoT','apply','fetchBranchComponents','GET_COMMIT_MANIFESTS_BY_COMPONENT_IDS','../queries','8649470QaoZxu','./salesforce-query.service','fetchCommitManifestsByComponentIds','%repositoryId%','search','replace','Name','post','extractComponentMetadataFromRecord','3751713IJhOGb','createCommit','FLOSUM_COMMIT','__metadata','GET_COMPONENT_RECORD_TYPES_QUERY','__decorate','SalesforceQueryService','getComponentRecordTypes','decorate','26106615uxWRMD','GET_REPOSITORY_COMPONENTS_BY_FILENAMES_QUERY','../../../../constants','map','design:paramtypes','%name%','Service','push','fetchRepositoryComponents','MAX_QUERY_ARRAY_ITEMS','defineProperty','GET_BRANCH_COMPONENTS_QUERY','getRepositoryIdByName','%fileNames%','File_Name__c','%branchId%','4149972TfahIE','restService','substr','Version__c','getBranchIdByName','function','./salesforce-rest.service','GET_BRANCH_BY_NAME_QUERY','8etGixa','1567788XUgJFR','join','4kAlFIf','FLOSUM_NAMESPACE','query','splice','toString','FLOSUM_GIT_NAMESPACE','__esModule','\x22\x20not\x20found\x20in\x20flosum.','(((.+)+)+)+$','Branch\x20\x22'];a179_0x39a1=function(){return _0x119e98;};return a179_0x39a1();}