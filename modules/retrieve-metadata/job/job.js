const a272_0x330121=a272_0x485f;(function(_0x427648,_0x507536){const _0x1098fa=a272_0x485f,_0x13f455=_0x427648();while(!![]){try{const _0x5f38c1=parseInt(_0x1098fa(0x19f))/0x1*(parseInt(_0x1098fa(0x19c))/0x2)+-parseInt(_0x1098fa(0x1a1))/0x3+-parseInt(_0x1098fa(0x1a7))/0x4*(parseInt(_0x1098fa(0x1ad))/0x5)+parseInt(_0x1098fa(0x195))/0x6+-parseInt(_0x1098fa(0x194))/0x7+parseInt(_0x1098fa(0x1ac))/0x8*(-parseInt(_0x1098fa(0x1a3))/0x9)+parseInt(_0x1098fa(0x198))/0xa;if(_0x5f38c1===_0x507536)break;else _0x13f455['push'](_0x13f455['shift']());}catch(_0x4c7116){_0x13f455['push'](_0x13f455['shift']());}}}(a272_0xf930,0xee86e));const a272_0x49e795=(function(){let _0x5e0c3b=!![];return function(_0x2ebc4e,_0x42965f){const _0x50e467=_0x5e0c3b?function(){if(_0x42965f){const _0x519557=_0x42965f['apply'](_0x2ebc4e,arguments);return _0x42965f=null,_0x519557;}}:function(){};return _0x5e0c3b=![],_0x50e467;};}()),a272_0x175283=a272_0x49e795(this,function(){const _0x4e0034=a272_0x485f;return a272_0x175283[_0x4e0034(0x1a4)]()[_0x4e0034(0x192)](_0x4e0034(0x1a6))[_0x4e0034(0x1a4)]()['constructor'](a272_0x175283)[_0x4e0034(0x192)](_0x4e0034(0x1a6));});function a272_0x485f(_0xeb4ae7,_0x200db9){const _0x1c34b9=a272_0xf930();return a272_0x485f=function(_0x175283,_0x49e795){_0x175283=_0x175283-0x18f;let _0xf9302d=_0x1c34b9[_0x175283];return _0xf9302d;},a272_0x485f(_0xeb4ae7,_0x200db9);}a272_0x175283();'use strict';var __importDefault=this&&this[a272_0x330121(0x1a2)]||function(_0x75a9a5){const _0x5c5ef7=a272_0x330121;return _0x75a9a5&&_0x75a9a5[_0x5c5ef7(0x1b1)]?_0x75a9a5:{'default':_0x75a9a5};};function a272_0xf930(){const _0x391b17=['Retrieve\x20metadata\x20job\x20has\x20been\x20completed','init','./classes/retrieve-metadata','search','../../../core','1207927DzQZKM','2905158rTjrSd','default','./classes/logger','20197970xucgEH','then','jobStorePath','Job','34iHPXgn','catch','minimist','108613QKSoKl','slice','4807170tbokvj','__importDefault','27pzVefp','toString','Retrieve\x20metadata\x20job\x20has\x20been\x20started','(((.+)+)+)+$','1997796MOnfTy','./classes/state-manger','exit','message','log','2930680OnlApb','5EmQphT','error','Logger','setInProgress','__esModule','execute'];a272_0xf930=function(){return _0x391b17;};return a272_0xf930();}Object['defineProperty'](exports,a272_0x330121(0x1b1),{'value':!![]}),exports[a272_0x330121(0x19b)]=void 0x0;const minimist_1=__importDefault(require(a272_0x330121(0x19e))),state_manger_1=__importDefault(require(a272_0x330121(0x1a8))),core_1=require(a272_0x330121(0x193)),logger_1=__importDefault(require(a272_0x330121(0x197))),retrieve_metadata_1=__importDefault(require(a272_0x330121(0x191)));class Job{constructor(){const _0x3cc528=a272_0x330121,{jobId:_0x395308,jobStorePath:_0x45a996}=(0x0,minimist_1['default'])(process['argv'][_0x3cc528(0x1a0)](0x2));this[_0x3cc528(0x19a)]=_0x45a996,this['jobId']=_0x395308;}async[a272_0x330121(0x1b2)](){const _0x4ffc27=a272_0x330121,_0x565d0a=new core_1[(_0x4ffc27(0x1af))](this['jobId']),_0x2ed6b8=new logger_1[(_0x4ffc27(0x196))](this['jobId'],_0x565d0a),_0x4308c7=await new state_manger_1[(_0x4ffc27(0x196))](this[_0x4ffc27(0x19a)])[_0x4ffc27(0x190)]();await _0x2ed6b8[_0x4ffc27(0x1ab)](_0x4ffc27(0x1a5));try{await _0x4308c7[_0x4ffc27(0x1b0)](),await new retrieve_metadata_1['default'](this[_0x4ffc27(0x19a)],_0x2ed6b8,_0x4308c7)['execute'](),await _0x4308c7['setCompleted'](),await _0x2ed6b8[_0x4ffc27(0x1ab)](_0x4ffc27(0x18f));}catch(_0x23886f){await _0x4308c7['setError'](_0x23886f),await _0x2ed6b8[_0x4ffc27(0x1ae)]('Retrieve\x20metadata\x20job\x20has\x20been\x20failed'),await _0x2ed6b8[_0x4ffc27(0x1ae)](_0x23886f[_0x4ffc27(0x1aa)]);}}}exports[a272_0x330121(0x19b)]=Job,new Job()[a272_0x330121(0x1b2)]()[a272_0x330121(0x199)](()=>process['exit'](0x0))[a272_0x330121(0x19d)](()=>process[a272_0x330121(0x1a9)](0x1));