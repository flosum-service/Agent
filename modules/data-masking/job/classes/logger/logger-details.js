const a74_0x441d1a=a74_0x8b03;(function(_0x5ec501,_0x30dda9){const _0x34d7e2=a74_0x8b03,_0x4120b5=_0x5ec501();while(!![]){try{const _0x9b27eb=-parseInt(_0x34d7e2(0x18f))/0x1*(parseInt(_0x34d7e2(0x191))/0x2)+parseInt(_0x34d7e2(0x170))/0x3*(-parseInt(_0x34d7e2(0x18c))/0x4)+-parseInt(_0x34d7e2(0x17b))/0x5*(parseInt(_0x34d7e2(0x16f))/0x6)+parseInt(_0x34d7e2(0x178))/0x7+-parseInt(_0x34d7e2(0x181))/0x8*(-parseInt(_0x34d7e2(0x172))/0x9)+parseInt(_0x34d7e2(0x18d))/0xa+parseInt(_0x34d7e2(0x187))/0xb;if(_0x9b27eb===_0x30dda9)break;else _0x4120b5['push'](_0x4120b5['shift']());}catch(_0x3ce33d){_0x4120b5['push'](_0x4120b5['shift']());}}}(a74_0x4638,0x8cc39));const a74_0x2c0147=(function(){let _0x18c23e=!![];return function(_0x576c7e,_0x5720fb){const _0x35bb1e=_0x18c23e?function(){const _0x38c903=a74_0x8b03;if(_0x5720fb){const _0x4f3347=_0x5720fb[_0x38c903(0x189)](_0x576c7e,arguments);return _0x5720fb=null,_0x4f3347;}}:function(){};return _0x18c23e=![],_0x35bb1e;};}()),a74_0x2541ed=a74_0x2c0147(this,function(){const _0x243def=a74_0x8b03;return a74_0x2541ed['toString']()['search'](_0x243def(0x183))[_0x243def(0x190)]()[_0x243def(0x180)](a74_0x2541ed)['search'](_0x243def(0x183));});function a74_0x8b03(_0x29e9a2,_0x791178){const _0x44da66=a74_0x4638();return a74_0x8b03=function(_0x2541ed,_0x2c0147){_0x2541ed=_0x2541ed-0x169;let _0x4638a1=_0x44da66[_0x2541ed];return _0x4638a1;},a74_0x8b03(_0x29e9a2,_0x791178);}function a74_0x4638(){const _0x1e8d3b=['450YZnhiG','toString','82HPJFvt','exception','_isLoggerInit','log','fs/promises','getCsvMessages','updateLoggerState','init','LoggerDetails','723666TUXTiH','167478ZSWeuW','defineProperty','1494KGDgNn','stringify','default','push','getTime','isLoggerInit','827351DwlwWB','Error:\x20','filePath','10qmkpFI','write','__esModule','_jobPath','../../../../../constants/job','constructor','160reeMdp','isNeedHeaders','(((.+)+)+)+$','BaseLogger','__importDefault','path','7579055pYRlZh','join','apply','_messages','start','4lofpZu','815490qFlVCN','JOB_LOG_DETAILS_FILENAME'];a74_0x4638=function(){return _0x1e8d3b;};return a74_0x4638();}a74_0x2541ed();'use strict';var __importDefault=this&&this[a74_0x441d1a(0x185)]||function(_0x4a755b){const _0x458403=a74_0x441d1a;return _0x4a755b&&_0x4a755b[_0x458403(0x17d)]?_0x4a755b:{'default':_0x4a755b};};Object[a74_0x441d1a(0x171)](exports,'__esModule',{'value':!![]}),exports[a74_0x441d1a(0x16e)]=void 0x0;const path_1=__importDefault(require(a74_0x441d1a(0x186))),base_logger_1=require('./base-logger'),promises_1=require(a74_0x441d1a(0x16a)),sync_1=require('csv-stringify/sync'),job_1=require(a74_0x441d1a(0x17f));class LoggerDetails extends base_logger_1[a74_0x441d1a(0x184)]{constructor(){const _0x15cec9=a74_0x441d1a;super(...arguments),this['_messages']=[],this[_0x15cec9(0x182)]=!![],this[_0x15cec9(0x193)]=![];}get[a74_0x441d1a(0x177)](){const _0x51df83=a74_0x441d1a;return this[_0x51df83(0x193)];}set[a74_0x441d1a(0x177)](_0x2fe62d){this['_isLoggerInit']=_0x2fe62d;}get['messages'](){const _0xa85aec=a74_0x441d1a;if(!this['isLoggerInit'])throw new Error('Logger\x20Job\x20State\x20wasn\x27t\x20init');return this[_0xa85aec(0x18a)];}get['filePath'](){const _0x26f58f=a74_0x441d1a;return path_1[_0x26f58f(0x174)][_0x26f58f(0x188)](this[_0x26f58f(0x17e)],job_1[_0x26f58f(0x18e)]);}async[a74_0x441d1a(0x16d)](){const _0x3310e3=a74_0x441d1a;return await(0x0,promises_1['writeFile'])(this[_0x3310e3(0x17a)],''),await this[_0x3310e3(0x18b)](),this[_0x3310e3(0x177)]=!![],this;}[a74_0x441d1a(0x169)](_0x488859,_0x53e1e6){const _0x27c36d=a74_0x441d1a,_0x2c2354={'message':_0x488859,'date':new Date()[_0x27c36d(0x176)](),'objectName':_0x53e1e6};this['messages'][_0x27c36d(0x175)](_0x2c2354),this[_0x27c36d(0x16c)]();}[a74_0x441d1a(0x192)](_0x28ee46,_0x22d534){const _0x306098=a74_0x441d1a;this[_0x306098(0x169)](_0x306098(0x179)+_0x28ee46,_0x22d534);}async[a74_0x441d1a(0x17c)](){const _0x2b1bac=a74_0x441d1a,_0x4312be=this[_0x2b1bac(0x16b)]();this[_0x2b1bac(0x18a)]=[],await(0x0,promises_1['appendFile'])(this['filePath'],_0x4312be);}[a74_0x441d1a(0x16b)](){const _0x3816be=a74_0x441d1a,_0x2fce61=(0x0,sync_1[_0x3816be(0x173)])(this[_0x3816be(0x18a)],{'header':this[_0x3816be(0x182)]});return this[_0x3816be(0x182)]=![],_0x2fce61;}}exports['LoggerDetails']=LoggerDetails;