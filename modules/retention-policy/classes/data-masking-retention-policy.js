const a259_0x3b7270=a259_0x5c3d;(function(_0x47c058,_0x5196a7){const _0x1e47d5=a259_0x5c3d,_0x132a88=_0x47c058();while(!![]){try{const _0x1a9be6=-parseInt(_0x1e47d5(0x12c))/0x1*(-parseInt(_0x1e47d5(0x139))/0x2)+parseInt(_0x1e47d5(0x121))/0x3*(parseInt(_0x1e47d5(0x12d))/0x4)+-parseInt(_0x1e47d5(0x12f))/0x5*(parseInt(_0x1e47d5(0x135))/0x6)+-parseInt(_0x1e47d5(0x129))/0x7*(-parseInt(_0x1e47d5(0x125))/0x8)+-parseInt(_0x1e47d5(0x119))/0x9+-parseInt(_0x1e47d5(0x13f))/0xa*(parseInt(_0x1e47d5(0x13d))/0xb)+-parseInt(_0x1e47d5(0x11e))/0xc;if(_0x1a9be6===_0x5196a7)break;else _0x132a88['push'](_0x132a88['shift']());}catch(_0x476dda){_0x132a88['push'](_0x132a88['shift']());}}}(a259_0x4af6,0x83e89));const a259_0x3f352d=(function(){let _0xf10ede=!![];return function(_0x340ec9,_0x2caf23){const _0x27dd0a=_0xf10ede?function(){const _0x2cffa1=a259_0x5c3d;if(_0x2caf23){const _0xd6de68=_0x2caf23[_0x2cffa1(0x13a)](_0x340ec9,arguments);return _0x2caf23=null,_0xd6de68;}}:function(){};return _0xf10ede=![],_0x27dd0a;};}()),a259_0xf59cd4=a259_0x3f352d(this,function(){const _0xeeff53=a259_0x5c3d;return a259_0xf59cd4[_0xeeff53(0x132)]()['search'](_0xeeff53(0x11c))[_0xeeff53(0x132)]()[_0xeeff53(0x12a)](a259_0xf59cd4)['search'](_0xeeff53(0x11c));});a259_0xf59cd4();'use strict';var __importDefault=this&&this[a259_0x3b7270(0x143)]||function(_0x2e12b8){const _0x4cc0db=a259_0x3b7270;return _0x2e12b8&&_0x2e12b8[_0x4cc0db(0x11b)]?_0x2e12b8:{'default':_0x2e12b8};};Object['defineProperty'](exports,a259_0x3b7270(0x11b),{'value':!![]}),exports[a259_0x3b7270(0x136)]=void 0x0;function a259_0x4af6(){const _0x10a89d=['deleteJob','157612aTBQWd','constructor','../../../constants/job','183969IfuFrg','237500hjhHSH','readFile','5955tolfRZ','../../data-masking/services/masking.service','logger','toString','isExpiredDate','getTime','714LTVIxc','DataMaskingRetentionPolicy','join','getJobsIds','2hHlFkk','apply','utf-8','default','1299628tHPwtA','filterExpiredJobs','10nkjLoK','getJobCompletedDate','EXPIRED_RANGE_DATE','@flosum/utils','__importDefault','JOB_LOG_STATE_FILENAME','615357mHPSfH','maskingFolderPath','__esModule','(((.+)+)+)+$','parse','3723516fmXfhW','../../shared/utils/job.utils','execute','15CBJbXs','error','MaskingService','name','248PYqxSL','../../../core','FsUtils'];a259_0x4af6=function(){return _0x10a89d;};return a259_0x4af6();}const promises_1=require('fs/promises'),core_1=require(a259_0x3b7270(0x126)),utils_1=require(a259_0x3b7270(0x142)),job_1=require(a259_0x3b7270(0x12b)),job_utils_1=__importDefault(require(a259_0x3b7270(0x11f))),masking_service_1=require(a259_0x3b7270(0x130)),path_1=__importDefault(require('path'));function a259_0x5c3d(_0x5b3461,_0x3dfc5e){const _0x48935d=a259_0x4af6();return a259_0x5c3d=function(_0xf59cd4,_0x3f352d){_0xf59cd4=_0xf59cd4-0x119;let _0x4af6c0=_0x48935d[_0xf59cd4];return _0x4af6c0;},a259_0x5c3d(_0x5b3461,_0x3dfc5e);}class DataMaskingRetentionPolicy{constructor(){const _0x530755=a259_0x3b7270;this[_0x530755(0x141)]=0x9a7ec800,this[_0x530755(0x131)]=new core_1['Logger'](DataMaskingRetentionPolicy[_0x530755(0x124)]);}async[a259_0x3b7270(0x120)](){const _0x4e6332=a259_0x3b7270;try{const _0x31f785=await job_utils_1['default'][_0x4e6332(0x138)](masking_service_1[_0x4e6332(0x123)][_0x4e6332(0x11a)]),_0xaeaaa4=await this[_0x4e6332(0x13e)](_0x31f785);for(const _0xad437a of _0xaeaaa4){await this[_0x4e6332(0x128)](_0xad437a);}}catch(_0x3cc7f2){this[_0x4e6332(0x131)][_0x4e6332(0x122)](_0x3cc7f2);}}async[a259_0x3b7270(0x13e)](_0x5239bb){const _0x3ba69c=a259_0x3b7270,_0x13d301=[];for(const _0x44bf29 of _0x5239bb){const _0xd9b254=await this[_0x3ba69c(0x140)](_0x44bf29),_0x2bc97a=_0xd9b254&&this['isExpiredDate'](_0xd9b254);_0x2bc97a&&_0x13d301['push'](_0x44bf29);}return _0x13d301;}async['getJobCompletedDate'](_0x1e7a52){const _0x185861=a259_0x3b7270;var _0x38222b;const _0x3e7b10=path_1[_0x185861(0x13c)][_0x185861(0x137)](masking_service_1[_0x185861(0x123)][_0x185861(0x11a)],_0x1e7a52,job_1[_0x185861(0x144)]);if(!await utils_1[_0x185861(0x127)]['isExistsPath'](_0x3e7b10))return null;const _0x194104=await(0x0,promises_1[_0x185861(0x12e)])(_0x3e7b10,{'encoding':_0x185861(0x13b)});return(_0x38222b=JSON[_0x185861(0x11d)](_0x194104)['completedDate'])!==null&&_0x38222b!==void 0x0?_0x38222b:null;}[a259_0x3b7270(0x133)](_0x411c3f){const _0x11f589=a259_0x3b7270;return new Date()[_0x11f589(0x134)]()-_0x411c3f>this[_0x11f589(0x141)];}['deleteJob'](_0x2fd458){const _0x124964=a259_0x3b7270,_0x3b7a7b=path_1[_0x124964(0x13c)][_0x124964(0x137)](masking_service_1['MaskingService']['maskingFolderPath'],_0x2fd458);return(0x0,promises_1['rm'])(_0x3b7a7b,{'recursive':!![],'force':!![]});}}exports['DataMaskingRetentionPolicy']=DataMaskingRetentionPolicy;