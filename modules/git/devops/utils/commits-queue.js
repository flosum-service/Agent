function a116_0x1070(_0x3784da,_0x4206ba){const _0x29bcb1=a116_0x2793();return a116_0x1070=function(_0x57be0e,_0x2de810){_0x57be0e=_0x57be0e-0x15b;let _0x2793b2=_0x29bcb1[_0x57be0e];return _0x2793b2;},a116_0x1070(_0x3784da,_0x4206ba);}const a116_0x5c8776=a116_0x1070;(function(_0x167e9f,_0x54d765){const _0xdc6d9c=a116_0x1070,_0x474fed=_0x167e9f();while(!![]){try{const _0x3e9809=parseInt(_0xdc6d9c(0x171))/0x1+parseInt(_0xdc6d9c(0x173))/0x2+parseInt(_0xdc6d9c(0x163))/0x3*(parseInt(_0xdc6d9c(0x165))/0x4)+-parseInt(_0xdc6d9c(0x164))/0x5*(parseInt(_0xdc6d9c(0x172))/0x6)+-parseInt(_0xdc6d9c(0x16a))/0x7+-parseInt(_0xdc6d9c(0x170))/0x8+parseInt(_0xdc6d9c(0x15f))/0x9*(parseInt(_0xdc6d9c(0x16b))/0xa);if(_0x3e9809===_0x54d765)break;else _0x474fed['push'](_0x474fed['shift']());}catch(_0x416d39){_0x474fed['push'](_0x474fed['shift']());}}}(a116_0x2793,0x9d580));const a116_0x2de810=(function(){let _0x1c7470=!![];return function(_0x41c079,_0x49f13d){const _0x2a7e65=_0x1c7470?function(){if(_0x49f13d){const _0x3a758e=_0x49f13d['apply'](_0x41c079,arguments);return _0x49f13d=null,_0x3a758e;}}:function(){};return _0x1c7470=![],_0x2a7e65;};}()),a116_0x57be0e=a116_0x2de810(this,function(){const _0x4b7cf4=a116_0x1070;return a116_0x57be0e[_0x4b7cf4(0x160)]()[_0x4b7cf4(0x16c)](_0x4b7cf4(0x15b))[_0x4b7cf4(0x160)]()[_0x4b7cf4(0x169)](a116_0x57be0e)['search'](_0x4b7cf4(0x15b));});a116_0x57be0e();function a116_0x2793(){const _0x243fce=['constructor','8872017mbxzOb','2460HZdCFl','search','Run\x20commit\x20job\x20\x22%s\x22','childName','log','7633248jhjSVa','2923ZPYiqk','917646Luesjl','2210878VcfnaS','../../jobs/child','(((.+)+)+)+$','CommitsQueue','commit\x20job\x20done\x20for\x20%s','run','65196jgXprz','toString','queue','execute','1110579RRLVXc','25dmZRgQ','8RDqdoE','currentJobs','defineProperty','logger'];a116_0x2793=function(){return _0x243fce;};return a116_0x2793();}'use strict';Object[a116_0x5c8776(0x167)](exports,'__esModule',{'value':!![]}),exports[a116_0x5c8776(0x15c)]=void 0x0;const child_1=require(a116_0x5c8776(0x174));class CommitsQueue{constructor(_0x992401){const _0x4938b6=a116_0x5c8776;this[_0x4938b6(0x16e)]=_0x992401,this[_0x4938b6(0x161)]={},this['currentJobs']={};}async[a116_0x5c8776(0x15e)](_0x19fed2){const _0x4bffc4=a116_0x5c8776;if(this['currentJobs'][_0x19fed2]||!this[_0x4bffc4(0x161)][_0x19fed2])return;const _0x1f3ac5=this[_0x4bffc4(0x161)][_0x19fed2]['shift']();if(_0x1f3ac5){this['logger'][_0x4bffc4(0x16f)](_0x4bffc4(0x16d),_0x19fed2);try{const _0x4b2c32=new child_1['Child'](this['childName']);this[_0x4bffc4(0x166)][_0x19fed2]=_0x4b2c32,await _0x4b2c32[_0x4bffc4(0x162)]({'data':_0x1f3ac5},!![]),delete this[_0x4bffc4(0x166)][_0x19fed2];}catch(_0x5a2159){this[_0x4bffc4(0x161)][_0x19fed2]=[],delete this[_0x4bffc4(0x166)][_0x19fed2];}this[_0x4bffc4(0x168)][_0x4bffc4(0x16f)](_0x4bffc4(0x15d),_0x19fed2),this[_0x4bffc4(0x15e)](_0x19fed2);}}}exports[a116_0x5c8776(0x15c)]=CommitsQueue;