function a335_0xda58(){const _0x34cc58=['2564130krpsbE','FsUtils','__esModule','isExistsPath','executeInterpreter','get','constructor','readdir','name','getJobsIds','18eZLsBT','JOB_LOG_STATE_FILENAME','set','close','default','sortJobsIds','476548ESLBBz','4YpVJRA','(((.+)+)+)+$','../../../core','path','907749WoHwnI','join','__importDefault','once','./spawn.utils','search','runJob','map','push','from','birthtime','385204fbZlXs','stat','log','fs/promises','keys','2120425EnvsWG','Logger','apply','2342672UZdSVx','3119207TzRyHY','@flosum/utils','isDirectory','../../../constants/job','objectToArgsList','toString'];a335_0xda58=function(){return _0x34cc58;};return a335_0xda58();}const a335_0x1e9f71=a335_0x3cc4;(function(_0x2f6afa,_0x1dec08){const _0x3d7505=a335_0x3cc4,_0x52e95e=_0x2f6afa();while(!![]){try{const _0x48c24d=-parseInt(_0x3d7505(0xde))/0x1+parseInt(_0x3d7505(0xce))/0x2+-parseInt(_0x3d7505(0xd3))/0x3*(parseInt(_0x3d7505(0xcf))/0x4)+parseInt(_0x3d7505(0xe3))/0x5+parseInt(_0x3d7505(0xbe))/0x6+parseInt(_0x3d7505(0xb8))/0x7+parseInt(_0x3d7505(0xe6))/0x8*(-parseInt(_0x3d7505(0xc8))/0x9);if(_0x48c24d===_0x1dec08)break;else _0x52e95e['push'](_0x52e95e['shift']());}catch(_0x2e61b3){_0x52e95e['push'](_0x52e95e['shift']());}}}(a335_0xda58,0x3fee4));function a335_0x3cc4(_0x577a40,_0x52570d){const _0x45149e=a335_0xda58();return a335_0x3cc4=function(_0x5c341e,_0x476a56){_0x5c341e=_0x5c341e-0xb8;let _0xda58=_0x45149e[_0x5c341e];return _0xda58;},a335_0x3cc4(_0x577a40,_0x52570d);}const a335_0x476a56=(function(){let _0x1f7b03=!![];return function(_0x5a7c26,_0x407287){const _0x422b5b=_0x1f7b03?function(){const _0x5cacda=a335_0x3cc4;if(_0x407287){const _0x4bae02=_0x407287[_0x5cacda(0xe5)](_0x5a7c26,arguments);return _0x407287=null,_0x4bae02;}}:function(){};return _0x1f7b03=![],_0x422b5b;};}()),a335_0x5c341e=a335_0x476a56(this,function(){const _0x1ce527=a335_0x3cc4;return a335_0x5c341e[_0x1ce527(0xbd)]()[_0x1ce527(0xd8)](_0x1ce527(0xd0))[_0x1ce527(0xbd)]()[_0x1ce527(0xc4)](a335_0x5c341e)[_0x1ce527(0xd8)](_0x1ce527(0xd0));});a335_0x5c341e();'use strict';var __importDefault=this&&this[a335_0x1e9f71(0xd5)]||function(_0x5cfe6f){return _0x5cfe6f&&_0x5cfe6f['__esModule']?_0x5cfe6f:{'default':_0x5cfe6f};};Object['defineProperty'](exports,a335_0x1e9f71(0xc0),{'value':!![]});const path_1=__importDefault(require(a335_0x1e9f71(0xd2))),spawn_utils_1=require(a335_0x1e9f71(0xd7)),core_1=require(a335_0x1e9f71(0xd1)),shortid_1=__importDefault(require('shortid')),utils_1=require(a335_0x1e9f71(0xb9)),promises_1=require(a335_0x1e9f71(0xe1)),job_1=require(a335_0x1e9f71(0xbb));class JobUtils{static['generateJobId'](){const _0x36e4f2=a335_0x1e9f71;return(0x0,shortid_1[_0x36e4f2(0xcc)])();}static[a335_0x1e9f71(0xd9)](_0x1c4ff6,_0x5c6499){return new Promise((_0xfce984,_0x3dcd1a)=>{const _0xac5fee=a335_0x3cc4,{jobStorePath:_0x5e6838,jobId:_0x38d5ca}=_0x5c6499,_0x14a4cd=(0x0,spawn_utils_1[_0xac5fee(0xc2)])(_0x1c4ff6,...(0x0,spawn_utils_1[_0xac5fee(0xbc)])({'jobStorePath':_0x5e6838,'jobId':_0x38d5ca})),_0x1fde75=new core_1[(_0xac5fee(0xe4))](_0x38d5ca);_0x14a4cd[_0xac5fee(0xd6)](_0xac5fee(0xcb),_0x254060=>{const _0x44d124=_0xac5fee,_0x46f0a0='Job\x20has\x20been\x20closed\x20with\x20status\x20code:\x20'+_0x254060;_0x1fde75[_0x44d124(0xe0)](_0x46f0a0),_0x254060===0x0?_0xfce984(_0x46f0a0):_0x3dcd1a(new Error(_0x46f0a0));});});}static async[a335_0x1e9f71(0xc7)](_0x5b6ed7){const _0x21ab87=a335_0x1e9f71;if(!await utils_1[_0x21ab87(0xbf)][_0x21ab87(0xc1)](_0x5b6ed7))return[];const _0x5a8f4a=await(0x0,promises_1[_0x21ab87(0xc5)])(_0x5b6ed7,{'withFileTypes':!![]}),_0x51e6f8=_0x5a8f4a['filter'](_0x223ce5=>_0x223ce5[_0x21ab87(0xba)]())[_0x21ab87(0xda)](_0x116aa9=>_0x116aa9[_0x21ab87(0xc6)]),_0x27de52=[];for(const _0x400dc6 of _0x51e6f8){const _0x4d8609=path_1['default'][_0x21ab87(0xd4)](_0x5b6ed7,_0x400dc6,job_1[_0x21ab87(0xc9)]);await utils_1['FsUtils'][_0x21ab87(0xc1)](_0x4d8609)&&_0x27de52[_0x21ab87(0xdb)](_0x400dc6);}return _0x27de52;}static async[a335_0x1e9f71(0xcd)](_0x5f056f,_0x539ee6){const _0x541fa5=a335_0x1e9f71,_0x42b2fa=new Map();for(const _0x19c750 of _0x539ee6){const _0x356021=await(0x0,promises_1[_0x541fa5(0xdf)])(path_1[_0x541fa5(0xcc)][_0x541fa5(0xd4)](_0x5f056f,_0x19c750));_0x42b2fa[_0x541fa5(0xca)](_0x356021,_0x19c750);}return Array[_0x541fa5(0xdc)](_0x42b2fa[_0x541fa5(0xe2)]())['sort']((_0x5c3e60,_0x544d69)=>_0x544d69[_0x541fa5(0xdd)]-_0x5c3e60[_0x541fa5(0xdd)])[_0x541fa5(0xda)](_0x3b4d13=>_0x42b2fa[_0x541fa5(0xc3)](_0x3b4d13));}}exports['default']=JobUtils;