const a267_0x55135c=a267_0x2ea0;(function(_0x50e08f,_0x752610){const _0x339cdf=a267_0x2ea0,_0x403997=_0x50e08f();while(!![]){try{const _0x4019d5=-parseInt(_0x339cdf(0x159))/0x1+parseInt(_0x339cdf(0x16e))/0x2+parseInt(_0x339cdf(0x15f))/0x3+parseInt(_0x339cdf(0x160))/0x4+-parseInt(_0x339cdf(0x175))/0x5*(-parseInt(_0x339cdf(0x163))/0x6)+-parseInt(_0x339cdf(0x164))/0x7*(parseInt(_0x339cdf(0x171))/0x8)+-parseInt(_0x339cdf(0x14d))/0x9*(parseInt(_0x339cdf(0x157))/0xa);if(_0x4019d5===_0x752610)break;else _0x403997['push'](_0x403997['shift']());}catch(_0x2f6298){_0x403997['push'](_0x403997['shift']());}}}(a267_0x3c9e,0x98d07));const a267_0xcc711a=(function(){let _0x3ded19=!![];return function(_0x479727,_0x42312c){const _0x4db0ca=_0x3ded19?function(){const _0x1cb912=a267_0x2ea0;if(_0x42312c){const _0x3e9736=_0x42312c[_0x1cb912(0x16f)](_0x479727,arguments);return _0x42312c=null,_0x3e9736;}}:function(){};return _0x3ded19=![],_0x4db0ca;};}()),a267_0x1ae729=a267_0xcc711a(this,function(){const _0x1d3595=a267_0x2ea0;return a267_0x1ae729[_0x1d3595(0x176)]()[_0x1d3595(0x16c)](_0x1d3595(0x16d))[_0x1d3595(0x176)]()[_0x1d3595(0x165)](a267_0x1ae729)[_0x1d3595(0x16c)]('(((.+)+)+)+$');});a267_0x1ae729();'use strict';var __importDefault=this&&this[a267_0x55135c(0x174)]||function(_0x473fdb){return _0x473fdb&&_0x473fdb['__esModule']?_0x473fdb:{'default':_0x473fdb};};Object[a267_0x55135c(0x167)](exports,'__esModule',{'value':!![]});const logger_enums_1=require(a267_0x55135c(0x15a)),path_1=__importDefault(require(a267_0x55135c(0x14f))),promises_1=require(a267_0x55135c(0x16b)),utils_1=require(a267_0x55135c(0x162)),job_1=require(a267_0x55135c(0x170));function a267_0x2ea0(_0x140d6f,_0x2674b1){const _0xc2c10c=a267_0x3c9e();return a267_0x2ea0=function(_0x1ae729,_0xcc711a){_0x1ae729=_0x1ae729-0x142;let _0x3c9e6c=_0xc2c10c[_0x1ae729];return _0x3c9e6c;},a267_0x2ea0(_0x140d6f,_0x2674b1);}class StateManager{constructor(_0x2b676d){const _0x42ea18=a267_0x55135c;this[_0x42ea18(0x161)]=StateManager[_0x42ea18(0x15b)](_0x2b676d);}static['getJobStatePath'](_0x21becb){const _0x41aa26=a267_0x55135c;return path_1[_0x41aa26(0x154)][_0x41aa26(0x166)](_0x21becb,job_1[_0x41aa26(0x146)]);}static async[a267_0x55135c(0x156)](_0xec35b2,_0x151baf){const _0xce256a=a267_0x55135c,_0x119228=StateManager['getJobStatePath'](_0xec35b2),_0x4cf149={'id':_0x151baf,'status':logger_enums_1['JobStatus'][_0xce256a(0x148)],'createdDate':null,'completedDate':null,'error':null,'warnings':[]};await(0x0,promises_1[_0xce256a(0x172)])(_0x119228,JSON[_0xce256a(0x143)](_0x4cf149));}static async[a267_0x55135c(0x15c)](_0x4b0604){const _0x4663eb=a267_0x55135c,_0x36132f=StateManager[_0x4663eb(0x15b)](_0x4b0604);if(await utils_1[_0x4663eb(0x152)][_0x4663eb(0x155)](_0x36132f))return(0x0,promises_1[_0x4663eb(0x169)])(_0x36132f,_0x4663eb(0x151))[_0x4663eb(0x14a)](JSON['parse']);throw new Error(_0x4663eb(0x153));}async[a267_0x55135c(0x14e)](){const _0x421a66=a267_0x55135c;await(0x0,promises_1[_0x421a66(0x172)])(this[_0x421a66(0x161)],JSON[_0x421a66(0x143)](this[_0x421a66(0x144)]));}async[a267_0x55135c(0x173)](){const _0x279c77=a267_0x55135c;return this[_0x279c77(0x144)]=await(0x0,promises_1['readFile'])(this[_0x279c77(0x161)],_0x279c77(0x151))['then'](JSON['parse']),this;}async[a267_0x55135c(0x15e)](){const _0x8b131c=a267_0x55135c;this['jobState'][_0x8b131c(0x14b)]=logger_enums_1[_0x8b131c(0x150)][_0x8b131c(0x14c)],this['jobState'][_0x8b131c(0x149)]=new Date()[_0x8b131c(0x15d)](),await this['update']();}async['setCompleted'](){const _0x578555=a267_0x55135c;this[_0x578555(0x144)][_0x578555(0x14b)]=logger_enums_1[_0x578555(0x150)][_0x578555(0x158)],this['jobState'][_0x578555(0x142)]=new Date()[_0x578555(0x15d)](),await this[_0x578555(0x14e)]();}async[a267_0x55135c(0x145)]({message:_0x36e3b1}){const _0x2637c3=a267_0x55135c;this[_0x2637c3(0x144)][_0x2637c3(0x14b)]=logger_enums_1[_0x2637c3(0x150)][_0x2637c3(0x168)],this['jobState'][_0x2637c3(0x142)]=new Date()[_0x2637c3(0x15d)](),this[_0x2637c3(0x144)]['error']=_0x36e3b1,await this[_0x2637c3(0x14e)]();}[a267_0x55135c(0x147)](_0x151037){const _0x1b31fd=a267_0x55135c;return this[_0x1b31fd(0x144)][_0x1b31fd(0x16a)]['push'](_0x151037),this[_0x1b31fd(0x14e)]();}}function a267_0x3c9e(){const _0x26549f=['1024968HInuFr','constructor','join','defineProperty','FAILED','readFile','warnings','fs/promises','search','(((.+)+)+)+$','1243582rGdcyY','apply','../../../../constants/job','64EcITjR','writeFile','init','__importDefault','35atXZNh','toString','completedDate','stringify','jobState','setError','JOB_LOG_STATE_FILENAME','addWarning','QUEUED','createdDate','then','status','IN_PROGRESS','5679VUCyjJ','update','path','JobStatus','utf-8','FsUtils','Job\x20not\x20found.','default','isExistsPath','create','15700RmgCLw','COMPLETED','332934YbfNNE','../enums/logger.enums','getJobStatePath','getJobState','getTime','setInProgress','1523826QeZbAV','4294940ATYBVo','statePath','@flosum/utils','786390SnnFgu'];a267_0x3c9e=function(){return _0x26549f;};return a267_0x3c9e();}exports[a267_0x55135c(0x154)]=StateManager;