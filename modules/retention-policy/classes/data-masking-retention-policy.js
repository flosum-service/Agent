const a307_0x2b9b24=a307_0x2c0f;(function(_0x572b85,_0x227db3){const _0x862702=a307_0x2c0f,_0xe38a82=_0x572b85();while(!![]){try{const _0x410fe1=parseInt(_0x862702(0x159))/0x1+-parseInt(_0x862702(0x14b))/0x2*(-parseInt(_0x862702(0x153))/0x3)+-parseInt(_0x862702(0x16c))/0x4+-parseInt(_0x862702(0x148))/0x5*(-parseInt(_0x862702(0x149))/0x6)+-parseInt(_0x862702(0x168))/0x7+-parseInt(_0x862702(0x162))/0x8*(-parseInt(_0x862702(0x174))/0x9)+-parseInt(_0x862702(0x165))/0xa;if(_0x410fe1===_0x227db3)break;else _0xe38a82['push'](_0xe38a82['shift']());}catch(_0x3c45c5){_0xe38a82['push'](_0xe38a82['shift']());}}}(a307_0xb0d8,0x969ad));const a307_0x50b5f4=(function(){let _0x5f1b50=!![];return function(_0x2bde2d,_0x2efdc6){const _0x378e22=_0x5f1b50?function(){const _0xd26031=a307_0x2c0f;if(_0x2efdc6){const _0xe95ba8=_0x2efdc6[_0xd26031(0x151)](_0x2bde2d,arguments);return _0x2efdc6=null,_0xe95ba8;}}:function(){};return _0x5f1b50=![],_0x378e22;};}()),a307_0x3603e5=a307_0x50b5f4(this,function(){const _0x1944f4=a307_0x2c0f;return a307_0x3603e5['toString']()[_0x1944f4(0x15a)](_0x1944f4(0x160))['toString']()[_0x1944f4(0x15f)](a307_0x3603e5)[_0x1944f4(0x15a)](_0x1944f4(0x160));});a307_0x3603e5();'use strict';var __importDefault=this&&this[a307_0x2b9b24(0x14c)]||function(_0x53e371){return _0x53e371&&_0x53e371['__esModule']?_0x53e371:{'default':_0x53e371};};Object['defineProperty'](exports,a307_0x2b9b24(0x16d),{'value':!![]}),exports[a307_0x2b9b24(0x16a)]=void 0x0;function a307_0xb0d8(){const _0x2c8ad4=['FsUtils','EXPIRED_RANGE_DATE','2138003NmVKMN','../../../constants/job','DataMaskingRetentionPolicy','../../../core','4832636ZmqmPM','__esModule','getTime','join','maskingFolderPath','name','default','../../data-masking/services/masking.service','324WFrtbe','error','292525VoISqJ','126rrhcrk','Logger','2148fvotmg','__importDefault','logger','isExpiredDate','JOB_LOG_STATE_FILENAME','fs/promises','apply','MaskingService','2229LwZqhH','readFile','utf-8','path','parse','push','1186169uiZNaa','search','deleteJob','filterExpiredJobs','@flosum/utils','completedDate','constructor','(((.+)+)+)+$','execute','21664XjUyqQ','isExistsPath','getJobCompletedDate','11797790GAtrPU'];a307_0xb0d8=function(){return _0x2c8ad4;};return a307_0xb0d8();}function a307_0x2c0f(_0x3efe40,_0x2f8dea){const _0x4fb149=a307_0xb0d8();return a307_0x2c0f=function(_0x3603e5,_0x50b5f4){_0x3603e5=_0x3603e5-0x147;let _0xb0d8b7=_0x4fb149[_0x3603e5];return _0xb0d8b7;},a307_0x2c0f(_0x3efe40,_0x2f8dea);}const promises_1=require(a307_0x2b9b24(0x150)),core_1=require(a307_0x2b9b24(0x16b)),utils_1=require(a307_0x2b9b24(0x15d)),job_1=require(a307_0x2b9b24(0x169)),job_utils_1=__importDefault(require('../../shared/utils/job.utils')),masking_service_1=require(a307_0x2b9b24(0x173)),path_1=__importDefault(require(a307_0x2b9b24(0x156)));class DataMaskingRetentionPolicy{constructor(){const _0x16caf3=a307_0x2b9b24;this[_0x16caf3(0x167)]=0x9a7ec800,this['logger']=new core_1[(_0x16caf3(0x14a))](DataMaskingRetentionPolicy[_0x16caf3(0x171)]);}async[a307_0x2b9b24(0x161)](){const _0x27fa68=a307_0x2b9b24;try{const _0x5b3413=await job_utils_1['default']['getJobsIds'](masking_service_1[_0x27fa68(0x152)][_0x27fa68(0x170)]),_0x343627=await this[_0x27fa68(0x15c)](_0x5b3413);for(const _0x5a3b4c of _0x343627){await this['deleteJob'](_0x5a3b4c);}}catch(_0x4b89a4){this[_0x27fa68(0x14d)][_0x27fa68(0x147)](_0x4b89a4);}}async[a307_0x2b9b24(0x15c)](_0x3eeef4){const _0x1c3a05=a307_0x2b9b24,_0xcc84d=[];for(const _0x30cf26 of _0x3eeef4){const _0x1db18b=await this[_0x1c3a05(0x164)](_0x30cf26),_0x95fdcc=_0x1db18b&&this[_0x1c3a05(0x14e)](_0x1db18b);_0x95fdcc&&_0xcc84d[_0x1c3a05(0x158)](_0x30cf26);}return _0xcc84d;}async[a307_0x2b9b24(0x164)](_0x28e505){const _0x48fb32=a307_0x2b9b24;var _0x3837e3;const _0x13aaa9=path_1[_0x48fb32(0x172)][_0x48fb32(0x16f)](masking_service_1[_0x48fb32(0x152)][_0x48fb32(0x170)],_0x28e505,job_1[_0x48fb32(0x14f)]);if(!await utils_1[_0x48fb32(0x166)][_0x48fb32(0x163)](_0x13aaa9))return null;const _0x11c96f=await(0x0,promises_1[_0x48fb32(0x154)])(_0x13aaa9,{'encoding':_0x48fb32(0x155)});return(_0x3837e3=JSON[_0x48fb32(0x157)](_0x11c96f)[_0x48fb32(0x15e)])!==null&&_0x3837e3!==void 0x0?_0x3837e3:null;}[a307_0x2b9b24(0x14e)](_0x41114a){const _0x105ecd=a307_0x2b9b24;return new Date()[_0x105ecd(0x16e)]()-_0x41114a>this[_0x105ecd(0x167)];}[a307_0x2b9b24(0x15b)](_0x5aa76c){const _0x49f3cf=a307_0x2b9b24,_0x2d3e28=path_1[_0x49f3cf(0x172)][_0x49f3cf(0x16f)](masking_service_1[_0x49f3cf(0x152)][_0x49f3cf(0x170)],_0x5aa76c);return(0x0,promises_1['rm'])(_0x2d3e28,{'recursive':!![],'force':!![]});}}exports['DataMaskingRetentionPolicy']=DataMaskingRetentionPolicy;