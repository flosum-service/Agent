const a153_0x129f49=a153_0x26e9;(function(_0x451e4c,_0x13d71c){const _0x9a6c97=a153_0x26e9,_0x230d2c=_0x451e4c();while(!![]){try{const _0x3256fb=parseInt(_0x9a6c97(0x1e9))/0x1+parseInt(_0x9a6c97(0x1db))/0x2+parseInt(_0x9a6c97(0x1d5))/0x3+parseInt(_0x9a6c97(0x1ed))/0x4+-parseInt(_0x9a6c97(0x1d9))/0x5+-parseInt(_0x9a6c97(0x1f7))/0x6*(parseInt(_0x9a6c97(0x1fb))/0x7)+parseInt(_0x9a6c97(0x1ea))/0x8*(-parseInt(_0x9a6c97(0x1ef))/0x9);if(_0x3256fb===_0x13d71c)break;else _0x230d2c['push'](_0x230d2c['shift']());}catch(_0x488eec){_0x230d2c['push'](_0x230d2c['shift']());}}}(a153_0x8f40,0xee495));const a153_0x39114a=(function(){let _0x1ed75f=!![];return function(_0x5f1bae,_0x2bf8a4){const _0x169f0c=_0x1ed75f?function(){if(_0x2bf8a4){const _0x37d56e=_0x2bf8a4['apply'](_0x5f1bae,arguments);return _0x2bf8a4=null,_0x37d56e;}}:function(){};return _0x1ed75f=![],_0x169f0c;};}()),a153_0x15128b=a153_0x39114a(this,function(){const _0x14c3ae=a153_0x26e9;return a153_0x15128b[_0x14c3ae(0x1e0)]()[_0x14c3ae(0x1d6)](_0x14c3ae(0x1dd))[_0x14c3ae(0x1e0)]()[_0x14c3ae(0x1f1)](a153_0x15128b)['search'](_0x14c3ae(0x1dd));});a153_0x15128b();'use strict';var __importDefault=this&&this[a153_0x129f49(0x1f6)]||function(_0x120326){const _0x40db4b=a153_0x129f49;return _0x120326&&_0x120326[_0x40db4b(0x1de)]?_0x120326:{'default':_0x120326};};Object[a153_0x129f49(0x1e7)](exports,a153_0x129f49(0x1de),{'value':!![]}),exports[a153_0x129f49(0x1fe)]=void 0x0;function a153_0x26e9(_0x26ccbb,_0x5c318c){const _0x4f10ce=a153_0x8f40();return a153_0x26e9=function(_0x15128b,_0x39114a){_0x15128b=_0x15128b-0x1d3;let _0x8f40da=_0x4f10ce[_0x15128b];return _0x8f40da;},a153_0x26e9(_0x26ccbb,_0x5c318c);}const child_process_1=require(a153_0x129f49(0x1f4)),path_1=require(a153_0x129f49(0x1df)),shortid_1=__importDefault(require('shortid')),core_1=require(a153_0x129f49(0x1fc)),fs_internal_1=require(a153_0x129f49(0x1e3)),job_1=require('../../../constants/job');class Child{constructor(_0x28453a){const _0xb9fd0=a153_0x129f49;this[_0xb9fd0(0x1df)]=_0x28453a,this[_0xb9fd0(0x1f0)]=new core_1[(_0xb9fd0(0x1fa))](Child[_0xb9fd0(0x1e8)]),this['INTERPRETER']=_0xb9fd0(0x1fd);}[a153_0x129f49(0x1da)](_0x12ba89,_0x55a85b=![]){return new Promise(async(_0x240903,_0x952899)=>{const _0x5a122b=a153_0x26e9,_0x6aec89=(0x0,shortid_1[_0x5a122b(0x1f5)])(),_0xc84e92=(0x0,path_1['join'])(process[_0x5a122b(0x1ec)](),'.sockets',_0x6aec89);await fs_internal_1['FS'][_0x5a122b(0x1d8)](_0xc84e92,JSON[_0x5a122b(0x1e1)](_0x12ba89)),this[_0x5a122b(0x1f9)]=(0x0,child_process_1['spawn'])(''+this['INTERPRETER'],(job_1['PROCESS_MAX_MEMORY_SIZE_ARG']+'\x20'+(process[_0x5a122b(0x1ee)]['NODE_ENV']===_0x5a122b(0x1d4)?_0x5a122b(0x1d7):'')+(0x0,path_1[_0x5a122b(0x1f2)])(__dirname,this[_0x5a122b(0x1df)])+'\x20--socketPath='+_0xc84e92)[_0x5a122b(0x1e2)]('\x20'),{'env':process[_0x5a122b(0x1ee)],'detached':![],'stdio':[_0x5a122b(0x1dc),'inherit','inherit']}),this['process']['once'](_0x5a122b(0x1f8),async _0x43566c=>{const _0x49e6d6=_0x5a122b;this['logger'][_0x49e6d6(0x1f8)](_0x49e6d6(0x1eb),this['path'],_0x43566c[_0x49e6d6(0x1e5)]),await fs_internal_1['FS'][_0x49e6d6(0x1e6)](_0xc84e92),this[_0x49e6d6(0x1f9)]['kill'](),_0x952899(_0x43566c);}),this[_0x5a122b(0x1f9)][_0x5a122b(0x1f3)](_0x5a122b(0x1e4),async()=>{const _0x361165=_0x5a122b;this[_0x361165(0x1f0)]['info'](_0x361165(0x1d3),this[_0x361165(0x1df)]),await fs_internal_1['FS']['removeFile'](_0xc84e92),_0x55a85b&&_0x240903();}),!_0x55a85b&&_0x240903();});}['kill'](){const _0x26dcab=a153_0x129f49;this[_0x26dcab(0x1f9)]['kill']();}}exports[a153_0x129f49(0x1fe)]=Child;function a153_0x8f40(){const _0x563b27=['5840790vUzUXs','search','-r\x20ts-node/register\x20-r\x20tsconfig-paths/register\x20','writeFile','246905lLjbcK','execute','2803564llVJAh','inherit','(((.+)+)+)+$','__esModule','path','toString','stringify','split','../internal/fs.internal','close','message','removeFile','defineProperty','name','917785nISjOZ','9137456sFkrPe','[%s]:\x20%s','cwd','7462256LlEVmJ','env','36QJxLBD','logger','constructor','join','once','child_process','default','__importDefault','189858iXplxN','error','process','Logger','119rLRtyV','../../../core','node','Child','[%s]:\x20closed','development'];a153_0x8f40=function(){return _0x563b27;};return a153_0x8f40();}