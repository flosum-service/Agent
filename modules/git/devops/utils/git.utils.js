const a121_0x565e76=a121_0x3b84;(function(_0x344eb7,_0x554c06){const _0x2dbde6=a121_0x3b84,_0x2468ba=_0x344eb7();while(!![]){try{const _0x1b012b=-parseInt(_0x2dbde6(0x202))/0x1+-parseInt(_0x2dbde6(0x1f6))/0x2+parseInt(_0x2dbde6(0x1fc))/0x3+-parseInt(_0x2dbde6(0x1f8))/0x4*(-parseInt(_0x2dbde6(0x1d8))/0x5)+-parseInt(_0x2dbde6(0x1ef))/0x6+-parseInt(_0x2dbde6(0x1e8))/0x7+parseInt(_0x2dbde6(0x1e1))/0x8;if(_0x1b012b===_0x554c06)break;else _0x2468ba['push'](_0x2468ba['shift']());}catch(_0x2ddeb3){_0x2468ba['push'](_0x2468ba['shift']());}}}(a121_0x556b,0x2547c));const a121_0x33ac30=(function(){let _0x5c13ea=!![];return function(_0x2d2632,_0x5d73b0){const _0x273650=_0x5c13ea?function(){const _0x38390d=a121_0x3b84;if(_0x5d73b0){const _0x2d3cb6=_0x5d73b0[_0x38390d(0x1f4)](_0x2d2632,arguments);return _0x5d73b0=null,_0x2d3cb6;}}:function(){};return _0x5c13ea=![],_0x273650;};}()),a121_0x113121=a121_0x33ac30(this,function(){const _0x3846c4=a121_0x3b84;return a121_0x113121[_0x3846c4(0x1fa)]()[_0x3846c4(0x1fd)](_0x3846c4(0x1eb))[_0x3846c4(0x1fa)]()[_0x3846c4(0x1f0)](a121_0x113121)[_0x3846c4(0x1fd)](_0x3846c4(0x1eb));});a121_0x113121();'use strict';function a121_0x3b84(_0x3e39e9,_0x162dd2){const _0x705e84=a121_0x556b();return a121_0x3b84=function(_0x113121,_0x33ac30){_0x113121=_0x113121-0x1d6;let _0x556bf4=_0x705e84[_0x113121];return _0x556bf4;},a121_0x3b84(_0x3e39e9,_0x162dd2);}var __importDefault=this&&this['__importDefault']||function(_0x5380da){const _0x471a0b=a121_0x3b84;return _0x5380da&&_0x5380da[_0x471a0b(0x1fb)]?_0x5380da:{'default':_0x5380da};};Object['defineProperty'](exports,a121_0x565e76(0x1fb),{'value':!![]}),exports[a121_0x565e76(0x200)]=void 0x0;const fs_internal_1=require(a121_0x565e76(0x1e6)),git_internal_1=require('../../internal/git.internal'),shell_internal_1=require(a121_0x565e76(0x1db)),utils_1=require('../../../shared/utils'),shortid_1=__importDefault(require(a121_0x565e76(0x1df)));class GitUtils{constructor(_0x23aa06){const _0x4b7a4a=a121_0x565e76;this[_0x4b7a4a(0x1e4)]=_0x23aa06,this[_0x4b7a4a(0x1d9)]=0xa,this[_0x4b7a4a(0x1e5)]=0xbb8,this['uniqueId']=(0x0,shortid_1[_0x4b7a4a(0x1f5)])();}get[a121_0x565e76(0x1d6)](){const _0x545965=a121_0x565e76;return this[_0x545965(0x1d7)][_0x545965(0x1e2)];}async[a121_0x565e76(0x1ec)](_0x29164c,_0x578331){const _0x8ff332=a121_0x565e76;this[_0x8ff332(0x1d7)]=await git_internal_1[_0x8ff332(0x1de)][_0x8ff332(0x1ec)](this[_0x8ff332(0x1e4)],''+this[_0x8ff332(0x1f3)],_0x29164c);}async[a121_0x565e76(0x1f1)](_0x1be1e8){await this['git']['checkout'](_0x1be1e8);}[a121_0x565e76(0x1e3)](){const _0x2375d6=a121_0x565e76;return this[_0x2375d6(0x1d7)][_0x2375d6(0x1e3)]();}[a121_0x565e76(0x1dc)](_0x2fd2a8){const _0x20eb71=a121_0x565e76;return this[_0x20eb71(0x1d7)]['describeCommit'](_0x2fd2a8);}async[a121_0x565e76(0x1dd)](_0x35092f,_0x385aec,_0xa43240){const _0x4fd1cb=a121_0x565e76;await this[_0x4fd1cb(0x1d7)][_0x4fd1cb(0x1da)]('.');const _0x486b16=await this[_0x4fd1cb(0x1d7)][_0x4fd1cb(0x1ff)]()['catch'](_0x2ea654=>_0x2ea654['message']||_0x2ea654);if(_0x486b16[_0x4fd1cb(0x203)]('nothing\x20to\x20commit'))return;await this['git'][_0x4fd1cb(0x1f7)](_0x385aec['name'],_0x385aec['email']);try{await this['git']['commit'](_0x35092f);}catch(_0x4ba677){let _0x4eb84f=0x0;do{_0x4eb84f++;const _0x3025d4=await this[_0x4fd1cb(0x1d7)]['status']()[_0x4fd1cb(0x1fe)](_0x1299d2=>_0x1299d2[_0x4fd1cb(0x201)]||_0x1299d2);if(_0x3025d4['includes'](_0x4fd1cb(0x1f2))){_0x4eb84f=0x0;break;}await(0x0,utils_1[_0x4fd1cb(0x1e9)])(this[_0x4fd1cb(0x1e5)]);}while(_0x4eb84f<this[_0x4fd1cb(0x1d9)]);if(_0x4eb84f===this[_0x4fd1cb(0x1d9)])throw _0x4ba677;}await this['git'][_0x4fd1cb(0x1e7)](_0xa43240);}async[a121_0x565e76(0x1ea)](){const _0x583bf6=a121_0x565e76;await shell_internal_1[_0x583bf6(0x1e0)]['exec'](_0x583bf6(0x1f9)+this['dir']+_0x583bf6(0x1ed))['catch'](()=>void 0x0);}async[a121_0x565e76(0x1ee)](){const _0x2b8902=a121_0x565e76;await fs_internal_1['FS'][_0x2b8902(0x1ee)](this['dir']);}}function a121_0x556b(){const _0x1c33ab=['apply','default','397570uZlVBv','setCredentials','23992hRVxCQ','cd\x20','toString','__esModule','682881fjzxHJ','search','catch','status','GitUtils','message','152357zPZvPU','includes','dir','git','155hrWUSs','MAX_GIT_STATUS_CHECK','add','../../internal/shell.internal','describeCommit','commitAndPush','Git','shortid','Shell','3414856ZjcVtO','baseDir','getCurrentHash','remote','GIT_STATUS_CHECK_INTERVAL','../../internal/fs.internal','push','1920310sQKXyt','sleep','clearDir','(((.+)+)+)+$','clone','\x20&&\x20git\x20rm\x20-rf\x20.\x20&&\x20git\x20clean\x20.\x20-fxd','removeDir','373500bZQdVq','constructor','checkoutTo','nothing\x20to\x20commit','uniqueId'];a121_0x556b=function(){return _0x1c33ab;};return a121_0x556b();}exports[a121_0x565e76(0x200)]=GitUtils;