const a91_0x1987c1=a91_0x179a;(function(_0x40b940,_0x2d2166){const _0x2f2b62=a91_0x179a,_0x386aa2=_0x40b940();while(!![]){try{const _0x4674f9=-parseInt(_0x2f2b62(0x1a8))/0x1+-parseInt(_0x2f2b62(0x176))/0x2*(-parseInt(_0x2f2b62(0x1af))/0x3)+parseInt(_0x2f2b62(0x1a6))/0x4*(parseInt(_0x2f2b62(0x193))/0x5)+parseInt(_0x2f2b62(0x199))/0x6+-parseInt(_0x2f2b62(0x184))/0x7+parseInt(_0x2f2b62(0x18e))/0x8+parseInt(_0x2f2b62(0x185))/0x9*(-parseInt(_0x2f2b62(0x1b7))/0xa);if(_0x4674f9===_0x2d2166)break;else _0x386aa2['push'](_0x386aa2['shift']());}catch(_0x3893e4){_0x386aa2['push'](_0x386aa2['shift']());}}}(a91_0x1eef,0x2f4ae));const a91_0x771139=(function(){let _0x348fa0=!![];return function(_0x470bab,_0x2ec513){const _0x14c9ef=_0x348fa0?function(){const _0x1eff85=a91_0x179a;if(_0x2ec513){const _0x479206=_0x2ec513[_0x1eff85(0x1b0)](_0x470bab,arguments);return _0x2ec513=null,_0x479206;}}:function(){};return _0x348fa0=![],_0x14c9ef;};}()),a91_0x3ee9b0=a91_0x771139(this,function(){const _0x3ab0a4=a91_0x179a;return a91_0x3ee9b0[_0x3ab0a4(0x181)]()[_0x3ab0a4(0x174)](_0x3ab0a4(0x1a7))[_0x3ab0a4(0x181)]()[_0x3ab0a4(0x19d)](a91_0x3ee9b0)['search'](_0x3ab0a4(0x1a7));});function a91_0x179a(_0x53c06f,_0x41e547){const _0x12fcbc=a91_0x1eef();return a91_0x179a=function(_0x3ee9b0,_0x771139){_0x3ee9b0=_0x3ee9b0-0x171;let _0x1eef1c=_0x12fcbc[_0x3ee9b0];return _0x1eef1c;},a91_0x179a(_0x53c06f,_0x41e547);}a91_0x3ee9b0();'use strict';var __importDefault=this&&this[a91_0x1987c1(0x190)]||function(_0x2a47e5){const _0x1a5059=a91_0x1987c1;return _0x2a47e5&&_0x2a47e5[_0x1a5059(0x1ae)]?_0x2a47e5:{'default':_0x2a47e5};};Object['defineProperty'](exports,a91_0x1987c1(0x1ae),{'value':!![]}),exports[a91_0x1987c1(0x192)]=void 0x0;const promises_1=require(a91_0x1987c1(0x179)),salesforce_1=require(a91_0x1987c1(0x191)),steps_creator_1=require(a91_0x1987c1(0x197)),logger_enums_1=require(a91_0x1987c1(0x188)),logger_details_1=require(a91_0x1987c1(0x171)),logger_job_state_1=require(a91_0x1987c1(0x1b6)),job_1=require(a91_0x1987c1(0x1ad)),path_1=__importDefault(require('path')),auth_manager_1=require('../../shared/managers/auth.manager'),constants_1=require('../constants'),job_detail_1=require('./job-detail');function a91_0x1eef(){const _0x2af805=['(((.+)+)+)+$','85032aLUvfW','message','kill','exception','IN_PROGRESS','../../../constants/job','__esModule','123WlPoLQ','apply','writeFile','initAutomationProcess','disableAutomationProcess','setJobStatus','jobId','./classes/logger/logger-job-state','1084970XgOVVj','AxiosInstanceUtils','details','_loggerJobState','_request','./classes/logger/logger-details','getManifest','jobStorePath','search','getManagerAutomationProcessOptions','12952pZWLvc','systemLogger','catch','fs/promises','enableAutomationProcess','execute','setJobError','ManagerAutomationProcess','parse','default','join','toString','Disable\x20automation\x20process','keys','751863tFckes','45fnfOoX','Enable\x20automation\x20process','disableAutomation','./enums/logger.enums','then','AuthManager','MANIFEST_FILENAME','push','_steps','1411160vajOie','init','__importDefault','@flosum/salesforce','MaskingJob','35EoHVoV','_maskingManifest','disable','Finish\x20Masking\x20Process','./classes/step/steps-creator','_managerAutomationProcess','2240916ILGrfG','log','exit','AUTOMATION_PROCESS_METADATA_BACKUP_FILENAME','constructor','_isEnableAutomationProcessError','JobStatus','error','utf-8','Start\x20Masking\x20Process','masking','COMPLETED','_loggerDetails','64708PAUtPW'];a91_0x1eef=function(){return _0x2af805;};return a91_0x1eef();}class MaskingJob{constructor(){const _0x88f163=a91_0x1987c1;this[_0x88f163(0x19e)]=![];}async['initAutomationProcess'](){const _0x404dda=a91_0x1987c1,{objectRules:_0x245d6a}=this[_0x404dda(0x194)];this[_0x404dda(0x198)]=new salesforce_1[(_0x404dda(0x17d))](this[_0x404dda(0x175)](_0x245d6a));}async[a91_0x1987c1(0x1a3)](){const _0x1cf101=a91_0x1987c1;job_detail_1['systemLogger'][_0x1cf101(0x19a)]('Start\x20Masking\x20Process'),this['_loggerDetails'][_0x1cf101(0x19a)](_0x1cf101(0x1a2));const {objectRules:_0x5cea90,libraries:_0x11d0d2}=this[_0x1cf101(0x194)];this[_0x1cf101(0x18d)]=await new steps_creator_1['StepsCreator']({'loggerDetails':this[_0x1cf101(0x1a5)],'loggerJobState':this[_0x1cf101(0x1ba)],'libraries':_0x11d0d2,'objectRules':_0x5cea90,'request':this['_request']})['create']();for(const _0x31d8cc of this['_steps']){await _0x31d8cc[_0x1cf101(0x17b)]();}}['getManagerAutomationProcessOptions'](_0x2c434e){const _0x33fc9a=a91_0x1987c1,_0x5f585e=[],_0x46d3ab=[],_0x4b6d12=[],_0x4ab733=[],_0x2c94da=[];for(const _0x11b5e7 in _0x2c434e){const {isDisableProcessBuilder:_0x376401,isDisableTrigger:_0x426bb1,isDisableValidationRule:_0x3b28ba,isDisableWorkflow:_0x35aa8a,isDisableLookupFilter:_0x9d5d24}=_0x2c434e[_0x11b5e7][_0x33fc9a(0x187)];_0x376401&&_0x4b6d12[_0x33fc9a(0x18c)](_0x11b5e7),_0x426bb1&&_0x5f585e[_0x33fc9a(0x18c)](_0x11b5e7),_0x3b28ba&&_0x4ab733[_0x33fc9a(0x18c)](_0x11b5e7),_0x35aa8a&&_0x46d3ab['push'](_0x11b5e7),_0x9d5d24&&_0x2c94da['push'](_0x11b5e7);}return{'instance':this[_0x33fc9a(0x1bb)],'saveSourceMetadataBackup':this['saveSourceAutomationProcessesBackup'],'triggersObjects':_0x5f585e,'validationRulesObjects':_0x4ab733,'workflowsObjects':_0x46d3ab,'flowsAndProcessBuilderObjects':_0x4b6d12,'lookupFiltersObjects':_0x2c94da};}async[a91_0x1987c1(0x1b3)](){const _0x202583=a91_0x1987c1;job_detail_1[_0x202583(0x177)][_0x202583(0x19a)](_0x202583(0x182)),this[_0x202583(0x1a5)][_0x202583(0x19a)](_0x202583(0x182)),await this['_managerAutomationProcess'][_0x202583(0x195)]();}async[a91_0x1987c1(0x17a)](){const _0x3a524b=a91_0x1987c1;!this[_0x3a524b(0x19e)]&&(job_detail_1[_0x3a524b(0x177)][_0x3a524b(0x19a)](_0x3a524b(0x186)),this[_0x3a524b(0x1a5)][_0x3a524b(0x19a)](_0x3a524b(0x186)),await this[_0x3a524b(0x198)]['enable']()[_0x3a524b(0x178)](_0x5f495d=>{const _0xcac800=_0x3a524b;this[_0xcac800(0x19e)]=!![];throw _0x5f495d;}));}async[a91_0x1987c1(0x172)](){const _0x178ef2=a91_0x1987c1,_0x2c7f99=await(0x0,promises_1['readFile'])(path_1[_0x178ef2(0x17f)][_0x178ef2(0x180)](job_detail_1[_0x178ef2(0x173)],job_1[_0x178ef2(0x18b)]),{'encoding':_0x178ef2(0x1a1)});return await(0x0,promises_1['rm'])(path_1['default'][_0x178ef2(0x180)](job_detail_1[_0x178ef2(0x173)],job_1[_0x178ef2(0x18b)]),{'recursive':!![],'force':!![]}),JSON[_0x178ef2(0x17e)](_0x2c7f99)[_0x178ef2(0x1b9)];}['saveSourceAutomationProcessesBackup'](_0x301ff8){const _0x4e8d3e=a91_0x1987c1;return(0x0,promises_1[_0x4e8d3e(0x1b1)])(path_1[_0x4e8d3e(0x17f)]['join'](job_detail_1[_0x4e8d3e(0x173)],constants_1[_0x4e8d3e(0x19c)]),_0x301ff8);}async[a91_0x1987c1(0x17b)](){const _0x4422d9=a91_0x1987c1;this['_maskingManifest']=await this[_0x4422d9(0x172)]();const {objectRules:_0x3af1ce,credentials:_0x17906c}=this['_maskingManifest'];this[_0x4422d9(0x1a5)]=await new logger_details_1['LoggerDetails'](job_detail_1['jobStorePath'],job_detail_1[_0x4422d9(0x1b5)])[_0x4422d9(0x18f)](),this[_0x4422d9(0x1ba)]=await new logger_job_state_1['LoggerJobState'](job_detail_1[_0x4422d9(0x173)],job_detail_1[_0x4422d9(0x1b5)])[_0x4422d9(0x18f)](Object[_0x4422d9(0x183)](_0x3af1ce));try{this[_0x4422d9(0x1ba)]['setJobStatus'](logger_enums_1['JobStatus'][_0x4422d9(0x1ac)]),this[_0x4422d9(0x1bb)]=await salesforce_1[_0x4422d9(0x1b8)]['create'](new auth_manager_1[(_0x4422d9(0x18a))](_0x17906c),[],{'headers':{'Accept-Encoding':'gzip'}}),await this[_0x4422d9(0x1b2)](),await this[_0x4422d9(0x1b3)](),await this[_0x4422d9(0x1a3)](),await this[_0x4422d9(0x17a)](),this[_0x4422d9(0x1ba)][_0x4422d9(0x1b4)](logger_enums_1[_0x4422d9(0x19f)][_0x4422d9(0x1a4)]);}catch(_0x25acf7){await this[_0x4422d9(0x17a)]()[_0x4422d9(0x178)](_0x3e35cc=>{const _0x2c85df=_0x4422d9;job_detail_1[_0x2c85df(0x177)][_0x2c85df(0x1a0)](_0x3e35cc['message']);}),this['_loggerDetails'][_0x4422d9(0x1ab)](_0x25acf7[_0x4422d9(0x1a9)]),this['_loggerJobState']['setJobStatus'](logger_enums_1[_0x4422d9(0x19f)]['FAILED']),this['_loggerJobState'][_0x4422d9(0x17c)](_0x25acf7[_0x4422d9(0x1a9)]),job_detail_1[_0x4422d9(0x177)][_0x4422d9(0x1a0)](_0x25acf7[_0x4422d9(0x1a9)]);}finally{this[_0x4422d9(0x1a5)][_0x4422d9(0x19a)]('Finish\x20Masking\x20Process'),job_detail_1[_0x4422d9(0x177)][_0x4422d9(0x19a)](_0x4422d9(0x196)),await this[_0x4422d9(0x1ba)][_0x4422d9(0x1aa)](),await this[_0x4422d9(0x1a5)][_0x4422d9(0x1aa)]();}}}exports[a91_0x1987c1(0x192)]=MaskingJob,new MaskingJob()[a91_0x1987c1(0x17b)]()[a91_0x1987c1(0x189)](()=>process[a91_0x1987c1(0x19b)](0x0))[a91_0x1987c1(0x178)](()=>process[a91_0x1987c1(0x19b)](0x1));