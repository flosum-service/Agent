const a271_0xb5b4b6=a271_0x5e87;(function(_0x51185b,_0x4390e0){const _0x5effb1=a271_0x5e87,_0xc5e365=_0x51185b();while(!![]){try{const _0x420b3c=-parseInt(_0x5effb1(0x99))/0x1+parseInt(_0x5effb1(0x9f))/0x2+parseInt(_0x5effb1(0xaa))/0x3*(parseInt(_0x5effb1(0xb0))/0x4)+-parseInt(_0x5effb1(0xb7))/0x5*(-parseInt(_0x5effb1(0x9e))/0x6)+-parseInt(_0x5effb1(0xb3))/0x7*(parseInt(_0x5effb1(0x97))/0x8)+-parseInt(_0x5effb1(0xad))/0x9*(-parseInt(_0x5effb1(0xae))/0xa)+-parseInt(_0x5effb1(0xa8))/0xb;if(_0x420b3c===_0x4390e0)break;else _0xc5e365['push'](_0xc5e365['shift']());}catch(_0x32bbf2){_0xc5e365['push'](_0xc5e365['shift']());}}}(a271_0xcaac,0x24ce8));function a271_0xcaac(){const _0x2f64da=['161FJbimY','log','jobStorePath','catch','505hNkuNK','__esModule','jobId','toString','argv','./classes/state-manger','104128pjnBGY','../../../core','12819YVSdVx','apply','slice','Retrieve\x20metadata\x20job\x20has\x20been\x20completed','Retrieve\x20metadata\x20job\x20has\x20been\x20started','8508uaKNvs','413884BbMabc','message','default','search','(((.+)+)+)+$','./classes/retrieve-metadata','init','exit','error','829257EhvfAY','setInProgress','78153aohBUR','setCompleted','minimist','521271DlucnV','10GSTkhw','execute','20WKbmRp','Job','setError'];a271_0xcaac=function(){return _0x2f64da;};return a271_0xcaac();}const a271_0x1c2eb3=(function(){let _0x5a1f11=!![];return function(_0x24e90f,_0x4bd6b1){const _0x609fab=_0x5a1f11?function(){const _0x20b5de=a271_0x5e87;if(_0x4bd6b1){const _0x244fc0=_0x4bd6b1[_0x20b5de(0x9a)](_0x24e90f,arguments);return _0x4bd6b1=null,_0x244fc0;}}:function(){};return _0x5a1f11=![],_0x609fab;};}()),a271_0x1fc9e2=a271_0x1c2eb3(this,function(){const _0x3acd0a=a271_0x5e87;return a271_0x1fc9e2[_0x3acd0a(0xba)]()[_0x3acd0a(0xa2)](_0x3acd0a(0xa3))[_0x3acd0a(0xba)]()['constructor'](a271_0x1fc9e2)[_0x3acd0a(0xa2)](_0x3acd0a(0xa3));});a271_0x1fc9e2();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x7ee1){return _0x7ee1&&_0x7ee1['__esModule']?_0x7ee1:{'default':_0x7ee1};};Object['defineProperty'](exports,a271_0xb5b4b6(0xb8),{'value':!![]}),exports['Job']=void 0x0;const minimist_1=__importDefault(require(a271_0xb5b4b6(0xac))),state_manger_1=__importDefault(require(a271_0xb5b4b6(0x96))),core_1=require(a271_0xb5b4b6(0x98)),logger_1=__importDefault(require('./classes/logger')),retrieve_metadata_1=__importDefault(require(a271_0xb5b4b6(0xa4)));class Job{constructor(){const _0x5eb9df=a271_0xb5b4b6,{jobId:_0x1b6f39,jobStorePath:_0xe86bec}=(0x0,minimist_1['default'])(process[_0x5eb9df(0x95)][_0x5eb9df(0x9b)](0x2));this['jobStorePath']=_0xe86bec,this['jobId']=_0x1b6f39;}async['execute'](){const _0x316062=a271_0xb5b4b6,_0x17e16d=new core_1['Logger'](this[_0x316062(0xb9)]),_0x235897=new logger_1[(_0x316062(0xa1))](this[_0x316062(0xb9)],_0x17e16d),_0x858bf1=await new state_manger_1[(_0x316062(0xa1))](this[_0x316062(0xb5)])[_0x316062(0xa5)]();await _0x235897[_0x316062(0xb4)](_0x316062(0x9d));try{await _0x858bf1[_0x316062(0xa9)](),await new retrieve_metadata_1[(_0x316062(0xa1))](this['jobStorePath'],_0x235897,_0x858bf1)[_0x316062(0xaf)](),await _0x858bf1[_0x316062(0xab)](),await _0x235897[_0x316062(0xb4)](_0x316062(0x9c));}catch(_0x5e011e){await _0x858bf1[_0x316062(0xb2)](_0x5e011e),await _0x235897['error']('Retrieve\x20metadata\x20job\x20has\x20been\x20failed'),await _0x235897[_0x316062(0xa7)](_0x5e011e[_0x316062(0xa0)]);}}}function a271_0x5e87(_0x5c8760,_0x23589d){const _0x2a7111=a271_0xcaac();return a271_0x5e87=function(_0x1fc9e2,_0x1c2eb3){_0x1fc9e2=_0x1fc9e2-0x95;let _0xcaacaa=_0x2a7111[_0x1fc9e2];return _0xcaacaa;},a271_0x5e87(_0x5c8760,_0x23589d);}exports[a271_0xb5b4b6(0xb1)]=Job,new Job()['execute']()['then'](()=>process[a271_0xb5b4b6(0xa6)](0x0))[a271_0xb5b4b6(0xb6)](()=>process['exit'](0x1));