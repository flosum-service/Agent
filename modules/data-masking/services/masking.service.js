const a81_0x127381=a81_0x49a2;function a81_0x49a2(_0x581f52,_0x208e9a){const _0x1f9023=a81_0x4a97();return a81_0x49a2=function(_0x51c975,_0x5e37ef){_0x51c975=_0x51c975-0x80;let _0x4a9795=_0x1f9023[_0x51c975];return _0x4a9795;},a81_0x49a2(_0x581f52,_0x208e9a);}(function(_0x9060c4,_0x1c117d){const _0x215426=a81_0x49a2,_0x389ee4=_0x9060c4();while(!![]){try{const _0x2d966c=parseInt(_0x215426(0xba))/0x1*(-parseInt(_0x215426(0x90))/0x2)+parseInt(_0x215426(0x9c))/0x3*(parseInt(_0x215426(0x8e))/0x4)+parseInt(_0x215426(0x95))/0x5+-parseInt(_0x215426(0x9b))/0x6+parseInt(_0x215426(0xae))/0x7+parseInt(_0x215426(0xb2))/0x8*(-parseInt(_0x215426(0xb5))/0x9)+-parseInt(_0x215426(0xa5))/0xa*(-parseInt(_0x215426(0xa3))/0xb);if(_0x2d966c===_0x1c117d)break;else _0x389ee4['push'](_0x389ee4['shift']());}catch(_0x4f23b5){_0x389ee4['push'](_0x389ee4['shift']());}}}(a81_0x4a97,0x5271b));const a81_0x5e37ef=(function(){let _0x5a78b1=!![];return function(_0x17fd0a,_0x5b0c86){const _0x421076=_0x5a78b1?function(){const _0x51f35d=a81_0x49a2;if(_0x5b0c86){const _0x564037=_0x5b0c86[_0x51f35d(0xa4)](_0x17fd0a,arguments);return _0x5b0c86=null,_0x564037;}}:function(){};return _0x5a78b1=![],_0x421076;};}()),a81_0x51c975=a81_0x5e37ef(this,function(){const _0xea49b5=a81_0x49a2;return a81_0x51c975[_0xea49b5(0xc5)]()[_0xea49b5(0xb0)](_0xea49b5(0x9f))[_0xea49b5(0xc5)]()[_0xea49b5(0xbd)](a81_0x51c975)['search']('(((.+)+)+)+$');});a81_0x51c975();'use strict';var __createBinding=this&&this['__createBinding']||(Object['create']?function(_0x2ed1fe,_0x26208e,_0x5aceda,_0x55e5fa){const _0x42a8c6=a81_0x49a2;if(_0x55e5fa===undefined)_0x55e5fa=_0x5aceda;var _0x31b141=Object[_0x42a8c6(0xa2)](_0x26208e,_0x5aceda);(!_0x31b141||('get'in _0x31b141?!_0x26208e[_0x42a8c6(0xb7)]:_0x31b141[_0x42a8c6(0x96)]||_0x31b141[_0x42a8c6(0xa6)]))&&(_0x31b141={'enumerable':!![],'get':function(){return _0x26208e[_0x5aceda];}}),Object[_0x42a8c6(0xab)](_0x2ed1fe,_0x55e5fa,_0x31b141);}:function(_0x158895,_0x2d5bd0,_0x4c7a56,_0x2f8dc1){if(_0x2f8dc1===undefined)_0x2f8dc1=_0x4c7a56;_0x158895[_0x2f8dc1]=_0x2d5bd0[_0x4c7a56];}),__setModuleDefault=this&&this[a81_0x127381(0xbc)]||(Object[a81_0x127381(0x97)]?function(_0x426279,_0x22f701){const _0x3c1314=a81_0x127381;Object['defineProperty'](_0x426279,_0x3c1314(0xc2),{'enumerable':!![],'value':_0x22f701});}:function(_0x853ed4,_0x958ee0){const _0x4d9892=a81_0x127381;_0x853ed4[_0x4d9892(0xc2)]=_0x958ee0;}),__importStar=this&&this['__importStar']||function(_0x4d7848){const _0x39a284=a81_0x127381;if(_0x4d7848&&_0x4d7848[_0x39a284(0xb7)])return _0x4d7848;var _0x444fbd={};if(_0x4d7848!=null){for(var _0x445a88 in _0x4d7848)if(_0x445a88!=='default'&&Object[_0x39a284(0x9a)][_0x39a284(0x98)]['call'](_0x4d7848,_0x445a88))__createBinding(_0x444fbd,_0x4d7848,_0x445a88);}return __setModuleDefault(_0x444fbd,_0x4d7848),_0x444fbd;},__importDefault=this&&this[a81_0x127381(0x87)]||function(_0x106bd7){const _0x5b848c=a81_0x127381;return _0x106bd7&&_0x106bd7[_0x5b848c(0xb7)]?_0x106bd7:{'default':_0x106bd7};};Object[a81_0x127381(0xab)](exports,a81_0x127381(0xb7),{'value':!![]}),exports[a81_0x127381(0x89)]=void 0x0;const path_1=__importStar(require('path')),fs_utils_1=require(a81_0x127381(0xb1)),promises_1=require(a81_0x127381(0x99)),logger_job_state_1=require(a81_0x127381(0xb3)),logger_enums_1=require(a81_0x127381(0x9e)),sync_1=require('csv-parse/sync'),utils_1=require(a81_0x127381(0x91)),not_found_error_1=require('../../../core/errors/not-found.error'),job_1=require('../../../constants/job'),job_utils_1=__importDefault(require(a81_0x127381(0x8a))),constants_1=require(a81_0x127381(0xb6)),path_2=require(a81_0x127381(0x94));class MaskingService{static async['createMaskingJob'](_0x46fb49){const _0x35e6f4=a81_0x127381,_0x391947=job_utils_1['default'][_0x35e6f4(0xaa)](),_0x276a05=(0x0,path_1[_0x35e6f4(0xa0)])(MaskingService[_0x35e6f4(0xac)],_0x391947);await(0x0,fs_utils_1[_0x35e6f4(0xc6)])(_0x276a05),await(0x0,promises_1['writeFile'])(_0x276a05+'/'+job_1[_0x35e6f4(0xb9)],JSON[_0x35e6f4(0xb4)]({'details':_0x46fb49}));const _0x1b9e82=await new logger_job_state_1['LoggerJobState'](_0x276a05,_0x391947)['init']([]);await _0x1b9e82[_0x35e6f4(0xaf)]();const _0x87ec98=path_1[_0x35e6f4(0xc2)][_0x35e6f4(0xa0)](__dirname,job_1[_0x35e6f4(0xa1)]);return job_utils_1[_0x35e6f4(0xc2)][_0x35e6f4(0xc3)](_0x87ec98,{'jobStorePath':_0x276a05,'jobId':_0x391947})[_0x35e6f4(0x81)](_0xebd87d=>this[_0x35e6f4(0x9d)](_0x276a05,_0x391947,_0xebd87d)),{'jobId':_0x391947};}static async['getJobs'](_0x5c92a5,_0x651e7){const _0x4ab378=a81_0x127381,_0x250792=await job_utils_1['default'][_0x4ab378(0x8f)](MaskingService[_0x4ab378(0xac)]),_0x6924f=await job_utils_1[_0x4ab378(0xc2)][_0x4ab378(0xa7)](MaskingService['maskingFolderPath'],_0x250792),_0x2ee381=_0x6924f['slice'](_0x651e7,_0x651e7+_0x5c92a5),_0x35ec16=[];for(const _0x35e37f of _0x2ee381){const _0x534bc0=await this['getJobState'](_0x35e37f,![]);_0x35ec16[_0x4ab378(0xa8)](_0x534bc0);}return _0x35ec16;}static async[a81_0x127381(0xc4)](_0x2e6b16,_0x46e4b4){const _0x3b9197=a81_0x127381,_0x4edd2f=await this[_0x3b9197(0x85)](_0x2e6b16,job_1[_0x3b9197(0x93)],constants_1[_0x3b9197(0xbb)]),_0x385ad3=JSON[_0x3b9197(0xb8)](_0x4edd2f),_0x43bd2f={'id':_0x385ad3['id'],'status':_0x385ad3['status'],'createdDate':_0x385ad3[_0x3b9197(0xbf)],'completedDate':_0x385ad3[_0x3b9197(0x82)],'successful':_0x385ad3['successful'],'failed':_0x385ad3[_0x3b9197(0xc1)]};return _0x46e4b4?_0x385ad3:_0x43bd2f;}static async[a81_0x127381(0x8b)](_0x4a85b3){const _0x39e56a=a81_0x127381,_0x3dcdc6=await this[_0x39e56a(0x85)](_0x4a85b3,job_1['JOB_LOG_DETAILS_FILENAME'],constants_1[_0x39e56a(0x86)]);return(0x0,sync_1['parse'])(_0x3dcdc6,{'columns':!![]});}static async['getLog'](_0x2b8c33,_0x23b2fa,_0x591d59){const _0xfc6808=a81_0x127381,_0xe8c0a1=(0x0,path_1[_0xfc6808(0xa0)])(MaskingService[_0xfc6808(0xac)],_0x2b8c33),_0x4b1c92=(0x0,path_1[_0xfc6808(0xa0)])(_0xe8c0a1,_0x23b2fa);if(!await utils_1[_0xfc6808(0x92)][_0xfc6808(0xa9)](_0xe8c0a1))throw new not_found_error_1['NotFoundError'](_0xfc6808(0xad));if(!await utils_1[_0xfc6808(0x92)][_0xfc6808(0xa9)](_0x4b1c92))throw new not_found_error_1[(_0xfc6808(0x84))](_0x591d59+_0xfc6808(0x8c));return(0x0,promises_1[_0xfc6808(0x8d)])(_0x4b1c92,{'encoding':'utf-8'});}static async[a81_0x127381(0x9d)](_0x4c96fb,_0x597580,_0x37c54){const _0x3a6ec4=a81_0x127381,_0x287be0=await new logger_job_state_1['LoggerJobState'](_0x4c96fb,_0x597580)['init']([]);_0x287be0[_0x3a6ec4(0x88)](logger_enums_1[_0x3a6ec4(0x80)][_0x3a6ec4(0xc0)]),_0x287be0['setJobError'](_0x37c54[_0x3a6ec4(0x83)]),await _0x287be0['kill']();}}exports['MaskingService']=MaskingService,MaskingService[a81_0x127381(0xac)]=path_1[a81_0x127381(0xc2)][a81_0x127381(0xa0)](path_2[a81_0x127381(0xbe)],constants_1['DATA_MASKING_FOLDER_NAME']);function a81_0x4a97(){const _0x364392=['stringify','4313880PxiObC','../constants','__esModule','parse','MANIFEST_FILENAME','16477LhPdgq','JOB_LOG_STATE_NAME','__setModuleDefault','constructor','dataPath','createdDate','FAILED','failed','default','runJob','getJobState','toString','makeDir','JobStatus','catch','completedDate','message','NotFoundError','getLog','JOB_LOG_DETAILS_NAME','__importDefault','setJobStatus','MaskingService','../../shared/utils/job.utils','getJobDetails','\x20not\x20found.','readFile','120872TCvByp','getJobsIds','22tkQNJb','@flosum/utils','FsUtils','JOB_LOG_STATE_FILENAME','../../../configs/path','1069200FmpLDj','writable','create','hasOwnProperty','fs/promises','prototype','2298900HtifDE','51puxlbd','logErrorStartJob','../job/enums/logger.enums','(((.+)+)+)+$','join','JOB_PATH','getOwnPropertyDescriptor','3024967ckGZqx','apply','10QjQkdF','configurable','sortJobsIds','push','isExistsPath','generateJobId','defineProperty','maskingFolderPath','Job\x20Id\x20not\x20found.','2652055NtIWPs','kill','search','../../shared/utils/fs.utils','8qDHkLT','../job/classes/logger/logger-job-state'];a81_0x4a97=function(){return _0x364392;};return a81_0x4a97();}