const a57_0x33889f=a57_0x4b1c;(function(_0x4c912d,_0x330be2){const _0x93a04c=a57_0x4b1c,_0x342711=_0x4c912d();while(!![]){try{const _0x1026cf=-parseInt(_0x93a04c(0xdd))/0x1+parseInt(_0x93a04c(0xc6))/0x2*(-parseInt(_0x93a04c(0xd5))/0x3)+-parseInt(_0x93a04c(0xe6))/0x4+-parseInt(_0x93a04c(0xe3))/0x5*(-parseInt(_0x93a04c(0xe1))/0x6)+-parseInt(_0x93a04c(0xd0))/0x7+-parseInt(_0x93a04c(0xd3))/0x8*(-parseInt(_0x93a04c(0xe0))/0x9)+parseInt(_0x93a04c(0xd2))/0xa*(parseInt(_0x93a04c(0xdf))/0xb);if(_0x1026cf===_0x330be2)break;else _0x342711['push'](_0x342711['shift']());}catch(_0x23844b){_0x342711['push'](_0x342711['shift']());}}}(a57_0x595a,0x87b1b));function a57_0x595a(){const _0x20526f=['159jgYlZo','_isLoggerInit','getTime','__esModule','init','Error:\x20','_messages','stringify','95829DqCBzw','isLoggerInit','19239kerqwa','252HVGgWC','84FgHSnc','BaseLogger','300185gcaakz','filePath','toString','3650320NXYInk','_jobPath','(((.+)+)+)+$','join','constructor','defineProperty','start','appendFile','getCsvMessages','LoggerDetails','352oXOOqf','messages','write','isNeedHeaders','apply','JOB_LOG_DETAILS_FILENAME','__importDefault','writeFile','search','default','4214777nlptIB','path','7610QpdFCg','1184FHrjnJ','exception'];a57_0x595a=function(){return _0x20526f;};return a57_0x595a();}function a57_0x4b1c(_0x32fe0e,_0x462e9c){const _0x807702=a57_0x595a();return a57_0x4b1c=function(_0x39757b,_0x592539){_0x39757b=_0x39757b-0xbd;let _0x595ab6=_0x807702[_0x39757b];return _0x595ab6;},a57_0x4b1c(_0x32fe0e,_0x462e9c);}const a57_0x592539=(function(){let _0x5252f9=!![];return function(_0x2aedf1,_0x94093b){const _0x4bc377=_0x5252f9?function(){const _0x37a365=a57_0x4b1c;if(_0x94093b){const _0x29948e=_0x94093b[_0x37a365(0xca)](_0x2aedf1,arguments);return _0x94093b=null,_0x29948e;}}:function(){};return _0x5252f9=![],_0x4bc377;};}()),a57_0x39757b=a57_0x592539(this,function(){const _0x435df7=a57_0x4b1c;return a57_0x39757b[_0x435df7(0xe5)]()['search'](_0x435df7(0xbe))[_0x435df7(0xe5)]()[_0x435df7(0xc0)](a57_0x39757b)[_0x435df7(0xce)]('(((.+)+)+)+$');});a57_0x39757b();'use strict';var __importDefault=this&&this[a57_0x33889f(0xcc)]||function(_0x439d62){return _0x439d62&&_0x439d62['__esModule']?_0x439d62:{'default':_0x439d62};};Object[a57_0x33889f(0xc1)](exports,a57_0x33889f(0xd8),{'value':!![]}),exports[a57_0x33889f(0xc5)]=void 0x0;const path_1=__importDefault(require(a57_0x33889f(0xd1))),base_logger_1=require('./base-logger'),promises_1=require('fs/promises'),sync_1=require('csv-stringify/sync'),job_1=require('../../../../../constants/job');class LoggerDetails extends base_logger_1[a57_0x33889f(0xe2)]{constructor(){const _0xf5be4a=a57_0x33889f;super(...arguments),this[_0xf5be4a(0xdb)]=[],this[_0xf5be4a(0xc9)]=!![],this['_isLoggerInit']=![];}get[a57_0x33889f(0xde)](){const _0x3b0a96=a57_0x33889f;return this[_0x3b0a96(0xd6)];}set[a57_0x33889f(0xde)](_0x473dbf){const _0x4dc3bf=a57_0x33889f;this[_0x4dc3bf(0xd6)]=_0x473dbf;}get[a57_0x33889f(0xc7)](){const _0x22cf89=a57_0x33889f;if(!this[_0x22cf89(0xde)])throw new Error('Logger\x20Job\x20State\x20wasn\x27t\x20init');return this[_0x22cf89(0xdb)];}get[a57_0x33889f(0xe4)](){const _0x31efed=a57_0x33889f;return path_1[_0x31efed(0xcf)][_0x31efed(0xbf)](this[_0x31efed(0xbd)],job_1[_0x31efed(0xcb)]);}async[a57_0x33889f(0xd9)](){const _0x5a747a=a57_0x33889f;return await(0x0,promises_1[_0x5a747a(0xcd)])(this[_0x5a747a(0xe4)],''),await this[_0x5a747a(0xc2)](),this[_0x5a747a(0xde)]=!![],this;}['log'](_0x6b5f30,_0xdc7bfa){const _0x4dd884=a57_0x33889f,_0x3fdf15={'message':_0x6b5f30,'date':new Date()[_0x4dd884(0xd7)](),'objectName':_0xdc7bfa};this[_0x4dd884(0xc7)]['push'](_0x3fdf15),this['updateLoggerState']();}[a57_0x33889f(0xd4)](_0x8ad8bd,_0x472383){const _0x27e231=a57_0x33889f;this['log'](_0x27e231(0xda)+_0x8ad8bd,_0x472383);}async[a57_0x33889f(0xc8)](){const _0x543f9e=a57_0x33889f,_0x74d472=this[_0x543f9e(0xc4)]();this[_0x543f9e(0xdb)]=[],await(0x0,promises_1[_0x543f9e(0xc3)])(this[_0x543f9e(0xe4)],_0x74d472);}[a57_0x33889f(0xc4)](){const _0x3a654c=a57_0x33889f,_0x2175db=(0x0,sync_1[_0x3a654c(0xdc)])(this[_0x3a654c(0xdb)],{'header':this[_0x3a654c(0xc9)]});return this[_0x3a654c(0xc9)]=![],_0x2175db;}}exports[a57_0x33889f(0xc5)]=LoggerDetails;