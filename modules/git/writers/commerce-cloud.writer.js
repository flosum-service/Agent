function a302_0x56e8(){const _0x1aaaf8=['readZip','default','CommerceCloudWriter','Have\x20to\x20write\x20%d\x20files','../internal/fs.internal','splice','logger','defineProperty','__esModule','toString','path','65IZbzJY','192966PuUhCV','constructor','components','exists','214ACAqYX','2824yNudKu','MAX_WRITES_PER_TICK','13895dvjUvl','sourceDir','(((.+)+)+)+$','3299697YJbKVa','5881275VKBXzI','join','12932380TUQLZt','writeFile','4332WaqFgo','__importDefault','./base.writer','length','apply','name','map','3413100ebsdiL','log','search','execute'];a302_0x56e8=function(){return _0x1aaaf8;};return a302_0x56e8();}const a302_0x19d470=a302_0x2e21;(function(_0xbe8d4c,_0x3922f8){const _0x418287=a302_0x2e21,_0x51744d=_0xbe8d4c();while(!![]){try{const _0xf94415=parseInt(_0x418287(0x105))/0x1*(-parseInt(_0x418287(0xfa))/0x2)+parseInt(_0x418287(0x100))/0x3+parseInt(_0x418287(0x10c))/0x4+parseInt(_0x418287(0xf5))/0x5*(parseInt(_0x418287(0xf6))/0x6)+-parseInt(_0x418287(0xfd))/0x7*(parseInt(_0x418287(0xfb))/0x8)+parseInt(_0x418287(0x101))/0x9+-parseInt(_0x418287(0x103))/0xa;if(_0xf94415===_0x3922f8)break;else _0x51744d['push'](_0x51744d['shift']());}catch(_0x201d7a){_0x51744d['push'](_0x51744d['shift']());}}}(a302_0x56e8,0x8a7eb));const a302_0x179957=(function(){let _0x1e0f26=!![];return function(_0x455e65,_0xb42525){const _0x1bdce0=_0x1e0f26?function(){const _0x9c8c20=a302_0x2e21;if(_0xb42525){const _0x395c9a=_0xb42525[_0x9c8c20(0x109)](_0x455e65,arguments);return _0xb42525=null,_0x395c9a;}}:function(){};return _0x1e0f26=![],_0x1bdce0;};}()),a302_0x3e423a=a302_0x179957(this,function(){const _0xb86370=a302_0x2e21;return a302_0x3e423a[_0xb86370(0xf3)]()[_0xb86370(0x10e)]('(((.+)+)+)+$')[_0xb86370(0xf3)]()[_0xb86370(0xf7)](a302_0x3e423a)[_0xb86370(0x10e)](_0xb86370(0xff));});a302_0x3e423a();'use strict';var __importDefault=this&&this[a302_0x19d470(0x106)]||function(_0xa1ddf0){const _0x247d94=a302_0x19d470;return _0xa1ddf0&&_0xa1ddf0[_0x247d94(0x118)]?_0xa1ddf0:{'default':_0xa1ddf0};};Object[a302_0x19d470(0x117)](exports,a302_0x19d470(0x118),{'value':!![]}),exports[a302_0x19d470(0x112)]=void 0x0;const path_1=__importDefault(require(a302_0x19d470(0xf4))),base_writer_1=require(a302_0x19d470(0x107)),fs_internal_1=require(a302_0x19d470(0x114));function a302_0x2e21(_0x5e6896,_0x499631){const _0x536688=a302_0x56e8();return a302_0x2e21=function(_0x3e423a,_0x179957){_0x3e423a=_0x3e423a-0xf3;let _0x56e869=_0x536688[_0x3e423a];return _0x56e869;},a302_0x2e21(_0x5e6896,_0x499631);}class CommerceCloudWriter extends base_writer_1['BaseWriter']{constructor({components:_0x47092f,sourceDir:_0x31c3bc}){const _0x25ed25=a302_0x19d470;super({'components':_0x47092f,'sourceDir':_0x31c3bc},CommerceCloudWriter[_0x25ed25(0x10a)]),this[_0x25ed25(0xfc)]=0x64;}async[a302_0x19d470(0x10f)](){const _0x509a42=a302_0x19d470;!await fs_internal_1['FS'][_0x509a42(0xf9)](this[_0x509a42(0xfe)])&&await fs_internal_1['FS']['makeDir'](this[_0x509a42(0xfe)]);this[_0x509a42(0x116)][_0x509a42(0x10d)](_0x509a42(0x113),this[_0x509a42(0xf8)][_0x509a42(0x108)]);while(this[_0x509a42(0xf8)][_0x509a42(0x108)]){const _0x2a6b27=this[_0x509a42(0xf8)][_0x509a42(0x115)](0x0,this['MAX_WRITES_PER_TICK']);for(const _0x2e0e31 of _0x2a6b27){const _0x265307=await this[_0x509a42(0x110)](_0x2e0e31['body'],!![]),_0x278259=_0x265307[_0x509a42(0x10b)](async({filename:_0x482ad2,body:_0x3f82c0})=>{const _0x5cd656=_0x509a42;return fs_internal_1['FS'][_0x5cd656(0x104)](path_1[_0x5cd656(0x111)][_0x5cd656(0x102)](this['sourceDir'],_0x482ad2),_0x3f82c0);});await Promise['all'](_0x278259);}}}}exports[a302_0x19d470(0x112)]=CommerceCloudWriter;