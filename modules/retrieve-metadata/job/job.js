const a275_0x37e233=a275_0x1bd7;(function(_0x2a1226,_0x515d62){const _0xdc2550=a275_0x1bd7,_0x243d1f=_0x2a1226();while(!![]){try{const _0x90a304=parseInt(_0xdc2550(0x144))/0x1*(-parseInt(_0xdc2550(0x135))/0x2)+parseInt(_0xdc2550(0x127))/0x3+-parseInt(_0xdc2550(0x142))/0x4+-parseInt(_0xdc2550(0x12e))/0x5*(-parseInt(_0xdc2550(0x13e))/0x6)+-parseInt(_0xdc2550(0x134))/0x7+parseInt(_0xdc2550(0x141))/0x8*(parseInt(_0xdc2550(0x128))/0x9)+parseInt(_0xdc2550(0x125))/0xa;if(_0x90a304===_0x515d62)break;else _0x243d1f['push'](_0x243d1f['shift']());}catch(_0x34adc8){_0x243d1f['push'](_0x243d1f['shift']());}}}(a275_0x1045,0x99da0));const a275_0x2a943b=(function(){let _0x57be8a=!![];return function(_0x9e2064,_0x2cf119){const _0x5f39d7=_0x57be8a?function(){if(_0x2cf119){const _0x26d046=_0x2cf119['apply'](_0x9e2064,arguments);return _0x2cf119=null,_0x26d046;}}:function(){};return _0x57be8a=![],_0x5f39d7;};}()),a275_0x5c88d7=a275_0x2a943b(this,function(){const _0x2a5122=a275_0x1bd7;return a275_0x5c88d7[_0x2a5122(0x137)]()['search'](_0x2a5122(0x126))[_0x2a5122(0x137)]()['constructor'](a275_0x5c88d7)['search'](_0x2a5122(0x126));});a275_0x5c88d7();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x1e53d4){return _0x1e53d4&&_0x1e53d4['__esModule']?_0x1e53d4:{'default':_0x1e53d4};};function a275_0x1bd7(_0x4bb966,_0x510990){const _0x3c3de5=a275_0x1045();return a275_0x1bd7=function(_0x5c88d7,_0x2a943b){_0x5c88d7=_0x5c88d7-0x122;let _0x104578=_0x3c3de5[_0x5c88d7];return _0x104578;},a275_0x1bd7(_0x4bb966,_0x510990);}Object[a275_0x37e233(0x130)](exports,a275_0x37e233(0x13f),{'value':!![]}),exports[a275_0x37e233(0x124)]=void 0x0;const minimist_1=__importDefault(require(a275_0x37e233(0x13c))),state_manger_1=__importDefault(require(a275_0x37e233(0x12c))),core_1=require(a275_0x37e233(0x13d)),logger_1=__importDefault(require('./classes/logger')),retrieve_metadata_1=__importDefault(require('./classes/retrieve-metadata'));class Job{constructor(){const _0x3d192f=a275_0x37e233,{jobId:_0x5f0490,jobStorePath:_0x11aa18}=(0x0,minimist_1[_0x3d192f(0x12a)])(process[_0x3d192f(0x140)]['slice'](0x2));this[_0x3d192f(0x12b)]=_0x11aa18,this[_0x3d192f(0x13a)]=_0x5f0490;}async[a275_0x37e233(0x123)](){const _0xeb1453=a275_0x37e233,_0x3461ea=new core_1[(_0xeb1453(0x143))](this[_0xeb1453(0x13a)]),_0x45b09f=new logger_1[(_0xeb1453(0x12a))](this['jobId'],_0x3461ea),_0x4ba320=await new state_manger_1[(_0xeb1453(0x12a))](this[_0xeb1453(0x12b)])[_0xeb1453(0x132)]();await _0x45b09f[_0xeb1453(0x138)](_0xeb1453(0x129));try{await _0x4ba320['setInProgress'](),await new retrieve_metadata_1[(_0xeb1453(0x12a))](this[_0xeb1453(0x12b)],_0x45b09f,_0x4ba320)[_0xeb1453(0x123)](),await _0x4ba320[_0xeb1453(0x122)](),await _0x45b09f[_0xeb1453(0x138)](_0xeb1453(0x131));}catch(_0x58711c){await _0x4ba320[_0xeb1453(0x12f)](_0x58711c),await _0x45b09f[_0xeb1453(0x136)](_0xeb1453(0x12d)),await _0x45b09f['error'](_0x58711c[_0xeb1453(0x13b)]);}}}function a275_0x1045(){const _0x1965d9=['Retrieve\x20metadata\x20job\x20has\x20been\x20started','default','jobStorePath','../../shared/managers/state-manger','Retrieve\x20metadata\x20job\x20has\x20been\x20failed','185XKVPjy','setError','defineProperty','Retrieve\x20metadata\x20job\x20has\x20been\x20completed','init','catch','7966595EfLxDy','4QdIbYx','error','toString','log','exit','jobId','message','minimist','../../../core','199428dAcRKc','__esModule','argv','8kwgzCc','4624012BSGkbR','Logger','587227xQlucw','setCompleted','execute','Job','21259440QJqHQN','(((.+)+)+)+$','1891653mDglXF','1011753YavHIo'];a275_0x1045=function(){return _0x1965d9;};return a275_0x1045();}exports[a275_0x37e233(0x124)]=Job,new Job()[a275_0x37e233(0x123)]()['then'](()=>process[a275_0x37e233(0x139)](0x0))[a275_0x37e233(0x133)](()=>process[a275_0x37e233(0x139)](0x1));