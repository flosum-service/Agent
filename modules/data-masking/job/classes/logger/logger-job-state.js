function a76_0x227d(_0x178a4d,_0x85c109){const _0x3dbd5e=a76_0x3874();return a76_0x227d=function(_0x13f7d5,_0x3d22fa){_0x13f7d5=_0x13f7d5-0x152;let _0x3874b5=_0x3dbd5e[_0x13f7d5];return _0x3874b5;},a76_0x227d(_0x178a4d,_0x85c109);}const a76_0x4210b1=a76_0x227d;(function(_0x3e1f17,_0x2c4405){const _0x10dcd5=a76_0x227d,_0x2e50c2=_0x3e1f17();while(!![]){try{const _0x4abe54=parseInt(_0x10dcd5(0x15c))/0x1+parseInt(_0x10dcd5(0x170))/0x2+-parseInt(_0x10dcd5(0x152))/0x3+-parseInt(_0x10dcd5(0x164))/0x4*(parseInt(_0x10dcd5(0x16e))/0x5)+parseInt(_0x10dcd5(0x162))/0x6*(-parseInt(_0x10dcd5(0x17e))/0x7)+-parseInt(_0x10dcd5(0x18d))/0x8+parseInt(_0x10dcd5(0x174))/0x9*(parseInt(_0x10dcd5(0x158))/0xa);if(_0x4abe54===_0x2c4405)break;else _0x2e50c2['push'](_0x2e50c2['shift']());}catch(_0x4ee071){_0x2e50c2['push'](_0x2e50c2['shift']());}}}(a76_0x3874,0xe885a));const a76_0x3d22fa=(function(){let _0x2639be=!![];return function(_0xe1908a,_0x1427af){const _0x3795c4=_0x2639be?function(){const _0x5ef50b=a76_0x227d;if(_0x1427af){const _0x57c4b6=_0x1427af[_0x5ef50b(0x155)](_0xe1908a,arguments);return _0x1427af=null,_0x57c4b6;}}:function(){};return _0x2639be=![],_0x3795c4;};}()),a76_0x13f7d5=a76_0x3d22fa(this,function(){const _0x138385=a76_0x227d;return a76_0x13f7d5[_0x138385(0x154)]()[_0x138385(0x16c)](_0x138385(0x15e))[_0x138385(0x154)]()['constructor'](a76_0x13f7d5)['search'](_0x138385(0x15e));});a76_0x13f7d5();function a76_0x3874(){const _0x38b266=['updateLoggerState','setObjectStatus','\x27\x20in\x20statistic','1781826CoEpok','getJobState','64RLMfQd','setJobStatus','COMPLETED','defineProperty','start','fs/promises','QUEUED','getTime','search','./base-logger','346550cfIDwF','FAILED','537232tdKBKL','jobState','parse','utf-8','5966559IjgldY','filePath','writeFile','_jobState','__importDefault','default','LoggerJobState','getObjectState','JOB_LOG_STATE_FILENAME','Cannot\x20find\x20object\x20\x27','7wmFUIw','successful','path','error','isExistsPath','init','isLoggerInit','@flosum/utils','name','initJobState','../../../../../constants/job','JobStatus','processed','_isLoggerInit','FsUtils','10623328MtRiXU','3174666PZMzzk','write','toString','apply','__esModule','failed','50rewbvZ','initObjectStatistics','_jobPath','setJobError','1161108cKwYtA','_jobId','(((.+)+)+)+$'];a76_0x3874=function(){return _0x38b266;};return a76_0x3874();}'use strict';var __importDefault=this&&this[a76_0x4210b1(0x178)]||function(_0x165713){const _0x194aa6=a76_0x4210b1;return _0x165713&&_0x165713[_0x194aa6(0x156)]?_0x165713:{'default':_0x165713};};Object[a76_0x4210b1(0x167)](exports,'__esModule',{'value':!![]}),exports[a76_0x4210b1(0x17a)]=void 0x0;const path_1=__importDefault(require(a76_0x4210b1(0x180))),logger_enums_1=require('../../enums/logger.enums'),base_logger_1=require(a76_0x4210b1(0x16d)),promises_1=require(a76_0x4210b1(0x169)),job_detail_1=require('../../job-detail'),utils_1=require(a76_0x4210b1(0x185)),job_1=require(a76_0x4210b1(0x188));class LoggerJobState extends base_logger_1['BaseLogger']{constructor(){const _0x5c48a0=a76_0x4210b1;super(...arguments),this[_0x5c48a0(0x18b)]=![];}get['isLoggerInit'](){return this['_isLoggerInit'];}set[a76_0x4210b1(0x184)](_0x1685b7){const _0x49741e=a76_0x4210b1;this[_0x49741e(0x18b)]=_0x1685b7;}get[a76_0x4210b1(0x171)](){const _0x31ebc9=a76_0x4210b1;if(!this[_0x31ebc9(0x184)])throw new Error('Logger\x20Job\x20State\x20wasn\x27t\x20init');return this[_0x31ebc9(0x177)];}get[a76_0x4210b1(0x175)](){const _0x346b18=a76_0x4210b1;return path_1[_0x346b18(0x179)]['join'](this[_0x346b18(0x15a)],job_1[_0x346b18(0x17c)]);}async[a76_0x4210b1(0x183)](_0x3e9f09){const _0x56d4c4=a76_0x4210b1;return this['_jobState']=await this[_0x56d4c4(0x163)](),this[_0x56d4c4(0x177)][_0x56d4c4(0x18a)]=this[_0x56d4c4(0x159)](_0x3e9f09),await this[_0x56d4c4(0x153)](),await this[_0x56d4c4(0x168)](),this['isLoggerInit']=!![],this;}[a76_0x4210b1(0x160)](_0x21de5a,_0x1e126f){const _0x33fbc1=a76_0x4210b1;this[_0x33fbc1(0x17b)](_0x21de5a)['status']=_0x1e126f,this[_0x33fbc1(0x15f)]();}[a76_0x4210b1(0x165)](_0x3052ca){const _0x545026=a76_0x4210b1;this[_0x545026(0x171)]['status']=_0x3052ca,[logger_enums_1['JobStatus'][_0x545026(0x16f)],logger_enums_1[_0x545026(0x189)][_0x545026(0x166)]]['includes'](_0x3052ca)&&(this['jobState']['completedDate']=new Date()['getTime']()),this[_0x545026(0x15f)]();}[a76_0x4210b1(0x15b)](_0x13062f){const _0x266781=a76_0x4210b1;this[_0x266781(0x171)][_0x266781(0x181)]=_0x13062f,this[_0x266781(0x15f)]();}['updateObjectProcess'](_0x56c54a,_0x542ba0,_0x2e4d4f){const _0x54a448=a76_0x4210b1,_0x27a8be=this[_0x54a448(0x17b)](_0x56c54a);_0x27a8be['successful']+=_0x542ba0,_0x27a8be[_0x54a448(0x157)]+=_0x2e4d4f,this[_0x54a448(0x171)][_0x54a448(0x17f)]+=_0x542ba0,this[_0x54a448(0x171)][_0x54a448(0x157)]+=_0x2e4d4f,this['updateLoggerState']();}[a76_0x4210b1(0x17b)](_0x4d184d){const _0x4d5ff9=a76_0x4210b1;var _0x2dfb33;const _0x4ee333=(_0x2dfb33=this[_0x4d5ff9(0x171)]['processed'])===null||_0x2dfb33===void 0x0?void 0x0:_0x2dfb33['find'](_0x55108e=>_0x55108e[_0x4d5ff9(0x186)]===_0x4d184d);if(!_0x4ee333)throw new Error(_0x4d5ff9(0x17d)+_0x4d184d+_0x4d5ff9(0x161));return _0x4ee333;}async[a76_0x4210b1(0x163)](){const _0x3b9024=a76_0x4210b1;if(!await utils_1[_0x3b9024(0x18c)][_0x3b9024(0x182)](this[_0x3b9024(0x175)]))return this[_0x3b9024(0x187)]();const _0x251bd7=await(0x0,promises_1['readFile'])(job_detail_1['jobStorePath']+'/'+job_1[_0x3b9024(0x17c)],{'encoding':_0x3b9024(0x173)});return JSON[_0x3b9024(0x172)](_0x251bd7);}[a76_0x4210b1(0x187)](){const _0x5643d9=a76_0x4210b1;return{'id':this[_0x5643d9(0x15d)],'status':logger_enums_1[_0x5643d9(0x189)][_0x5643d9(0x16a)],'processed':[],'createdDate':new Date()[_0x5643d9(0x16b)](),'successful':0x0,'failed':0x0};}[a76_0x4210b1(0x159)](_0x570a37){return _0x570a37['map'](_0xfbfbb4=>({'name':_0xfbfbb4,'status':logger_enums_1['ObjectStatus']['QUEUED'],'failed':0x0,'successful':0x0}));}[a76_0x4210b1(0x153)](){const _0x3fd36b=a76_0x4210b1;return(0x0,promises_1[_0x3fd36b(0x176)])(this[_0x3fd36b(0x175)],JSON['stringify'](this['_jobState']));}}exports[a76_0x4210b1(0x17a)]=LoggerJobState;