const a75_0x58964e=a75_0x5b17;(function(_0x5189af,_0x2764f5){const _0x11984f=a75_0x5b17,_0x5798bd=_0x5189af();while(!![]){try{const _0x3490c9=-parseInt(_0x11984f(0x192))/0x1+parseInt(_0x11984f(0x156))/0x2+parseInt(_0x11984f(0x15a))/0x3*(-parseInt(_0x11984f(0x188))/0x4)+parseInt(_0x11984f(0x172))/0x5*(-parseInt(_0x11984f(0x155))/0x6)+parseInt(_0x11984f(0x157))/0x7*(parseInt(_0x11984f(0x177))/0x8)+parseInt(_0x11984f(0x15b))/0x9*(-parseInt(_0x11984f(0x167))/0xa)+parseInt(_0x11984f(0x18e))/0xb;if(_0x3490c9===_0x2764f5)break;else _0x5798bd['push'](_0x5798bd['shift']());}catch(_0x2b8c4e){_0x5798bd['push'](_0x5798bd['shift']());}}}(a75_0x4bf5,0xe113c));const a75_0x20ddc4=(function(){let _0x2ff049=!![];return function(_0x20b77a,_0x312904){const _0x190ceb=_0x2ff049?function(){if(_0x312904){const _0x3cf155=_0x312904['apply'](_0x20b77a,arguments);return _0x312904=null,_0x3cf155;}}:function(){};return _0x2ff049=![],_0x190ceb;};}()),a75_0x5a35eb=a75_0x20ddc4(this,function(){const _0x40de34=a75_0x5b17;return a75_0x5a35eb[_0x40de34(0x165)]()[_0x40de34(0x15d)]('(((.+)+)+)+$')['toString']()[_0x40de34(0x16c)](a75_0x5a35eb)[_0x40de34(0x15d)]('(((.+)+)+)+$');});a75_0x5a35eb();'use strict';function a75_0x5b17(_0x41f1e4,_0x1368c9){const _0x207feb=a75_0x4bf5();return a75_0x5b17=function(_0x5a35eb,_0x20ddc4){_0x5a35eb=_0x5a35eb-0x155;let _0x4bf569=_0x207feb[_0x5a35eb];return _0x4bf569;},a75_0x5b17(_0x41f1e4,_0x1368c9);}var __importDefault=this&&this['__importDefault']||function(_0x4de048){const _0x5d7f92=a75_0x5b17;return _0x4de048&&_0x4de048[_0x5d7f92(0x15c)]?_0x4de048:{'default':_0x4de048};};Object['defineProperty'](exports,a75_0x58964e(0x15c),{'value':!![]}),exports[a75_0x58964e(0x164)]=void 0x0;const path_1=__importDefault(require(a75_0x58964e(0x17c))),logger_enums_1=require(a75_0x58964e(0x17f)),base_logger_1=require('./base-logger'),promises_1=require(a75_0x58964e(0x194)),job_detail_1=require(a75_0x58964e(0x166)),utils_1=require(a75_0x58964e(0x17b)),job_1=require(a75_0x58964e(0x161));class LoggerJobState extends base_logger_1[a75_0x58964e(0x170)]{constructor(){super(...arguments),this['_isLoggerInit']=![];}get[a75_0x58964e(0x18a)](){const _0x22b296=a75_0x58964e;return this[_0x22b296(0x182)];}set['isLoggerInit'](_0x102343){const _0x1e06e9=a75_0x58964e;this[_0x1e06e9(0x182)]=_0x102343;}get[a75_0x58964e(0x191)](){const _0x4ad464=a75_0x58964e;if(!this[_0x4ad464(0x18a)])throw new Error(_0x4ad464(0x17a));return this[_0x4ad464(0x183)];}get[a75_0x58964e(0x193)](){const _0x379efc=a75_0x58964e;return path_1[_0x379efc(0x190)][_0x379efc(0x171)](this[_0x379efc(0x16b)],job_1[_0x379efc(0x178)]);}async[a75_0x58964e(0x16e)](_0x906a9d){const _0x398eb3=a75_0x58964e;return this[_0x398eb3(0x183)]=await this[_0x398eb3(0x18b)](),this[_0x398eb3(0x183)][_0x398eb3(0x181)]=this['initObjectStatistics'](_0x906a9d),await this[_0x398eb3(0x195)](),await this['start'](),this[_0x398eb3(0x18a)]=!![],this;}['setObjectStatus'](_0xc28c32,_0x25504a){const _0x49ee5a=a75_0x58964e;this[_0x49ee5a(0x158)](_0xc28c32)[_0x49ee5a(0x15e)]=_0x25504a,this[_0x49ee5a(0x185)]();}['setJobStatus'](_0x1fc67c){const _0x101a01=a75_0x58964e;this[_0x101a01(0x191)][_0x101a01(0x15e)]=_0x1fc67c,[logger_enums_1[_0x101a01(0x163)][_0x101a01(0x160)],logger_enums_1[_0x101a01(0x163)][_0x101a01(0x17d)]][_0x101a01(0x174)](_0x1fc67c)&&(this[_0x101a01(0x191)][_0x101a01(0x162)]=new Date()[_0x101a01(0x186)]()),this[_0x101a01(0x185)]();}[a75_0x58964e(0x189)](_0x356f26){const _0x5a6c43=a75_0x58964e;this[_0x5a6c43(0x191)]['error']=_0x356f26,this['updateLoggerState']();}['updateObjectProcess'](_0xba6c0f,_0x2097e2,_0xb2fd12){const _0x5654af=a75_0x58964e,_0x3d153f=this[_0x5654af(0x158)](_0xba6c0f);_0x3d153f[_0x5654af(0x16d)]+=_0x2097e2,_0x3d153f['failed']+=_0xb2fd12,this[_0x5654af(0x191)][_0x5654af(0x16d)]+=_0x2097e2,this[_0x5654af(0x191)]['failed']+=_0xb2fd12,this[_0x5654af(0x185)]();}[a75_0x58964e(0x158)](_0x4b58b1){const _0x4da788=a75_0x58964e;var _0x2ab3cc;const _0xeb8ba6=(_0x2ab3cc=this[_0x4da788(0x191)][_0x4da788(0x181)])===null||_0x2ab3cc===void 0x0?void 0x0:_0x2ab3cc[_0x4da788(0x18d)](_0x1399a1=>_0x1399a1[_0x4da788(0x15f)]===_0x4b58b1);if(!_0xeb8ba6)throw new Error(_0x4da788(0x184)+_0x4b58b1+_0x4da788(0x169));return _0xeb8ba6;}async[a75_0x58964e(0x18b)](){const _0xdb1bb6=a75_0x58964e;if(!await utils_1[_0xdb1bb6(0x176)][_0xdb1bb6(0x173)](this[_0xdb1bb6(0x193)]))return this['initJobState']();const _0x4e5552=await(0x0,promises_1[_0xdb1bb6(0x18f)])(job_detail_1[_0xdb1bb6(0x18c)]+'/'+job_1['JOB_LOG_STATE_FILENAME'],{'encoding':_0xdb1bb6(0x17e)});return JSON[_0xdb1bb6(0x16f)](_0x4e5552);}[a75_0x58964e(0x168)](){const _0x519997=a75_0x58964e;return{'id':this[_0x519997(0x16a)],'status':logger_enums_1[_0x519997(0x163)][_0x519997(0x179)],'processed':[],'createdDate':new Date()[_0x519997(0x186)](),'successful':0x0,'failed':0x0};}[a75_0x58964e(0x159)](_0x25c663){const _0x5d641a=a75_0x58964e;return _0x25c663[_0x5d641a(0x180)](_0x4596b1=>({'name':_0x4596b1,'status':logger_enums_1[_0x5d641a(0x175)][_0x5d641a(0x179)],'failed':0x0,'successful':0x0}));}['write'](){const _0x35382d=a75_0x58964e;return(0x0,promises_1[_0x35382d(0x187)])(this[_0x35382d(0x193)],JSON['stringify'](this[_0x35382d(0x183)]));}}function a75_0x4bf5(){const _0x1e1f88=['status','name','FAILED','../../../../../constants/job','completedDate','JobStatus','LoggerJobState','toString','../../job-detail','7890kwYGhv','initJobState','\x27\x20in\x20statistic','_jobId','_jobPath','constructor','successful','init','parse','BaseLogger','join','65kXpuxi','isExistsPath','includes','ObjectStatus','FsUtils','8vhGeiE','JOB_LOG_STATE_FILENAME','QUEUED','Logger\x20Job\x20State\x20wasn\x27t\x20init','@flosum/utils','path','COMPLETED','utf-8','../../enums/logger.enums','map','processed','_isLoggerInit','_jobState','Cannot\x20find\x20object\x20\x27','updateLoggerState','getTime','writeFile','256WsRGbn','setJobError','isLoggerInit','getJobState','jobStorePath','find','32204975DelBEw','readFile','default','jobState','1055307fAfpKU','filePath','fs/promises','write','491448tvevjo','558820opjZxS','7520870VMThTi','getObjectState','initObjectStatistics','21192WNZTmD','8982WbcUIG','__esModule','search'];a75_0x4bf5=function(){return _0x1e1f88;};return a75_0x4bf5();}exports['LoggerJobState']=LoggerJobState;