function a307_0x2f97(){const _0x35baba=['search','../../shared/utils/job.utils','push','completedDate','JOB_LOG_STATE_FILENAME','1617845nvMPom','443444lwiLTN','logger','@flosum/utils','139CaSfGO','constructor','18HuqaSG','../../data-masking/services/masking.service','fs/promises','apply','toString','maskingFolderPath','join','path','getJobCompletedDate','getJobsIds','execute','isExistsPath','(((.+)+)+)+$','name','9vTvOUn','__esModule','17019650ZnJUSF','getTime','../../../core','default','deleteJob','error','9476460IUFAZF','defineProperty','readFile','9821679CXFKSL','9277832yeHRzo','21946bQsHPh','EXPIRED_RANGE_DATE','isExpiredDate','parse','MaskingService','Logger','DataMaskingRetentionPolicy','FsUtils'];a307_0x2f97=function(){return _0x35baba;};return a307_0x2f97();}function a307_0x2b3f(_0x5a9d21,_0x1a10ac){const _0x33ec24=a307_0x2f97();return a307_0x2b3f=function(_0x40c07c,_0x5963ba){_0x40c07c=_0x40c07c-0x16c;let _0x2f977e=_0x33ec24[_0x40c07c];return _0x2f977e;},a307_0x2b3f(_0x5a9d21,_0x1a10ac);}const a307_0x169cd9=a307_0x2b3f;(function(_0xcba67a,_0x62ef5e){const _0x5050c8=a307_0x2b3f,_0xeabaf2=_0xcba67a();while(!![]){try{const _0x4c4cd3=parseInt(_0x5050c8(0x182))/0x1*(parseInt(_0x5050c8(0x171))/0x2)+parseInt(_0x5050c8(0x184))/0x3*(-parseInt(_0x5050c8(0x17f))/0x4)+parseInt(_0x5050c8(0x17e))/0x5+parseInt(_0x5050c8(0x16c))/0x6+-parseInt(_0x5050c8(0x16f))/0x7+parseInt(_0x5050c8(0x170))/0x8+parseInt(_0x5050c8(0x192))/0x9*(-parseInt(_0x5050c8(0x194))/0xa);if(_0x4c4cd3===_0x62ef5e)break;else _0xeabaf2['push'](_0xeabaf2['shift']());}catch(_0x426a3a){_0xeabaf2['push'](_0xeabaf2['shift']());}}}(a307_0x2f97,0xc7a3f));const a307_0x5963ba=(function(){let _0x73274=!![];return function(_0x304284,_0x533ff5){const _0x1c2163=_0x73274?function(){const _0x571383=a307_0x2b3f;if(_0x533ff5){const _0x49101b=_0x533ff5[_0x571383(0x187)](_0x304284,arguments);return _0x533ff5=null,_0x49101b;}}:function(){};return _0x73274=![],_0x1c2163;};}()),a307_0x40c07c=a307_0x5963ba(this,function(){const _0x3fc1bf=a307_0x2b3f;return a307_0x40c07c['toString']()[_0x3fc1bf(0x179)](_0x3fc1bf(0x190))[_0x3fc1bf(0x188)]()[_0x3fc1bf(0x183)](a307_0x40c07c)['search'](_0x3fc1bf(0x190));});a307_0x40c07c();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x4104ac){const _0x294d6a=a307_0x2b3f;return _0x4104ac&&_0x4104ac[_0x294d6a(0x193)]?_0x4104ac:{'default':_0x4104ac};};Object[a307_0x169cd9(0x16d)](exports,'__esModule',{'value':!![]}),exports[a307_0x169cd9(0x177)]=void 0x0;const promises_1=require(a307_0x169cd9(0x186)),core_1=require(a307_0x169cd9(0x196)),utils_1=require(a307_0x169cd9(0x181)),job_1=require('../../../constants/job'),job_utils_1=__importDefault(require(a307_0x169cd9(0x17a))),masking_service_1=require(a307_0x169cd9(0x185)),path_1=__importDefault(require(a307_0x169cd9(0x18b)));class DataMaskingRetentionPolicy{constructor(){const _0x355cd2=a307_0x169cd9;this[_0x355cd2(0x172)]=0x9a7ec800,this[_0x355cd2(0x180)]=new core_1[(_0x355cd2(0x176))](DataMaskingRetentionPolicy[_0x355cd2(0x191)]);}async[a307_0x169cd9(0x18e)](){const _0x58ff9f=a307_0x169cd9;try{const _0x3632cc=await job_utils_1['default'][_0x58ff9f(0x18d)](masking_service_1['MaskingService'][_0x58ff9f(0x189)]),_0xa1fde2=await this['filterExpiredJobs'](_0x3632cc);for(const _0x4bb71d of _0xa1fde2){await this['deleteJob'](_0x4bb71d);}}catch(_0x52d5e8){this[_0x58ff9f(0x180)][_0x58ff9f(0x199)](_0x52d5e8);}}async['filterExpiredJobs'](_0x3a7ac6){const _0x40c822=a307_0x169cd9,_0x460459=[];for(const _0x3086cd of _0x3a7ac6){const _0x38c96e=await this[_0x40c822(0x18c)](_0x3086cd),_0x4c66c1=_0x38c96e&&this['isExpiredDate'](_0x38c96e);_0x4c66c1&&_0x460459[_0x40c822(0x17b)](_0x3086cd);}return _0x460459;}async[a307_0x169cd9(0x18c)](_0x13ba74){const _0x3fef25=a307_0x169cd9;var _0x12e9c7;const _0x38a56c=path_1['default'][_0x3fef25(0x18a)](masking_service_1[_0x3fef25(0x175)][_0x3fef25(0x189)],_0x13ba74,job_1[_0x3fef25(0x17d)]);if(!await utils_1[_0x3fef25(0x178)][_0x3fef25(0x18f)](_0x38a56c))return null;const _0x375588=await(0x0,promises_1[_0x3fef25(0x16e)])(_0x38a56c,{'encoding':'utf-8'});return(_0x12e9c7=JSON[_0x3fef25(0x174)](_0x375588)[_0x3fef25(0x17c)])!==null&&_0x12e9c7!==void 0x0?_0x12e9c7:null;}[a307_0x169cd9(0x173)](_0x4ea200){const _0x394403=a307_0x169cd9;return new Date()[_0x394403(0x195)]()-_0x4ea200>this[_0x394403(0x172)];}[a307_0x169cd9(0x198)](_0x56c32a){const _0x1f408f=a307_0x169cd9,_0x249b00=path_1[_0x1f408f(0x197)]['join'](masking_service_1[_0x1f408f(0x175)]['maskingFolderPath'],_0x56c32a);return(0x0,promises_1['rm'])(_0x249b00,{'recursive':!![],'force':!![]});}}exports['DataMaskingRetentionPolicy']=DataMaskingRetentionPolicy;