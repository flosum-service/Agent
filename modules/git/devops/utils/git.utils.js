const a121_0x45a1c3=a121_0x2847;(function(_0x197f8a,_0x589604){const _0x3f7d75=a121_0x2847,_0x3d4df0=_0x197f8a();while(!![]){try{const _0x6c183a=parseInt(_0x3f7d75(0x167))/0x1+parseInt(_0x3f7d75(0x158))/0x2+-parseInt(_0x3f7d75(0x159))/0x3*(parseInt(_0x3f7d75(0x168))/0x4)+parseInt(_0x3f7d75(0x14a))/0x5+-parseInt(_0x3f7d75(0x162))/0x6+parseInt(_0x3f7d75(0x169))/0x7*(-parseInt(_0x3f7d75(0x155))/0x8)+parseInt(_0x3f7d75(0x15f))/0x9*(parseInt(_0x3f7d75(0x15e))/0xa);if(_0x6c183a===_0x589604)break;else _0x3d4df0['push'](_0x3d4df0['shift']());}catch(_0x6e81f4){_0x3d4df0['push'](_0x3d4df0['shift']());}}}(a121_0x36cd,0xcd439));const a121_0x3f76f8=(function(){let _0x379791=!![];return function(_0x3e3a0b,_0x5d079d){const _0x2cec36=_0x379791?function(){const _0x2cc639=a121_0x2847;if(_0x5d079d){const _0x4f75a6=_0x5d079d[_0x2cc639(0x154)](_0x3e3a0b,arguments);return _0x5d079d=null,_0x4f75a6;}}:function(){};return _0x379791=![],_0x2cec36;};}()),a121_0x3caf19=a121_0x3f76f8(this,function(){const _0x4114ef=a121_0x2847;return a121_0x3caf19[_0x4114ef(0x156)]()[_0x4114ef(0x160)]('(((.+)+)+)+$')[_0x4114ef(0x156)]()[_0x4114ef(0x15b)](a121_0x3caf19)['search']('(((.+)+)+)+$');});function a121_0x2847(_0x11fb3d,_0x590480){const _0x4a6953=a121_0x36cd();return a121_0x2847=function(_0x3caf19,_0x3f76f8){_0x3caf19=_0x3caf19-0x13d;let _0x36cd5a=_0x4a6953[_0x3caf19];return _0x36cd5a;},a121_0x2847(_0x11fb3d,_0x590480);}function a121_0x36cd(){const _0x2e8ce1=['1354913TlmnpT','status','../../../shared/utils','../../internal/fs.internal','nothing\x20to\x20commit','clone','uniqueId','catch','GIT_STATUS_CHECK_INTERVAL','Shell','remote','Git','includes','setCredentials','message','6062725EkURvB','__esModule','dir','exec','../../internal/git.internal','describeCommit','shortid','cd\x20','sleep','getCurrentHash','apply','48NVCnFR','toString','clearDir','2973628Wlenth','2145321CHXqJG','defineProperty','constructor','removeDir','git','1370wrsBeb','37116VIKCjO','search','name','9220062OOdrwU','baseDir','MAX_GIT_STATUS_CHECK','default','push','989552UVuqtW','4tCiLOK'];a121_0x36cd=function(){return _0x2e8ce1;};return a121_0x36cd();}a121_0x3caf19();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x9c465c){const _0x1b5736=a121_0x2847;return _0x9c465c&&_0x9c465c[_0x1b5736(0x14b)]?_0x9c465c:{'default':_0x9c465c};};Object[a121_0x45a1c3(0x15a)](exports,'__esModule',{'value':!![]}),exports['GitUtils']=void 0x0;const fs_internal_1=require(a121_0x45a1c3(0x13e)),git_internal_1=require(a121_0x45a1c3(0x14e)),shell_internal_1=require('../../internal/shell.internal'),utils_1=require(a121_0x45a1c3(0x13d)),shortid_1=__importDefault(require(a121_0x45a1c3(0x150)));class GitUtils{constructor(_0x34c097){const _0x1fff6e=a121_0x45a1c3;this[_0x1fff6e(0x145)]=_0x34c097,this['MAX_GIT_STATUS_CHECK']=0xa,this[_0x1fff6e(0x143)]=0xbb8,this[_0x1fff6e(0x141)]=(0x0,shortid_1[_0x1fff6e(0x165)])();}get[a121_0x45a1c3(0x14c)](){const _0x4f5b14=a121_0x45a1c3;return this['git'][_0x4f5b14(0x163)];}async[a121_0x45a1c3(0x140)](_0x454065,_0x441380){const _0x51e709=a121_0x45a1c3;this[_0x51e709(0x15d)]=await git_internal_1[_0x51e709(0x146)][_0x51e709(0x140)](this['remote'],''+this[_0x51e709(0x141)],_0x454065);}async['checkoutTo'](_0x829811){const _0x401513=a121_0x45a1c3;await this[_0x401513(0x15d)]['checkout'](_0x829811);}[a121_0x45a1c3(0x153)](){const _0xcfa132=a121_0x45a1c3;return this['git'][_0xcfa132(0x153)]();}[a121_0x45a1c3(0x14f)](_0xceb740){const _0x3162f3=a121_0x45a1c3;return this[_0x3162f3(0x15d)]['describeCommit'](_0xceb740);}async['commitAndPush'](_0x11182e,_0x8ff8a5,_0xe66c2e){const _0x5b59bd=a121_0x45a1c3;await this[_0x5b59bd(0x15d)]['add']('.');const _0x3d0c6c=await this[_0x5b59bd(0x15d)][_0x5b59bd(0x16a)]()[_0x5b59bd(0x142)](_0x2a7680=>_0x2a7680[_0x5b59bd(0x149)]||_0x2a7680);if(_0x3d0c6c[_0x5b59bd(0x147)](_0x5b59bd(0x13f)))return;await this[_0x5b59bd(0x15d)][_0x5b59bd(0x148)](_0x8ff8a5[_0x5b59bd(0x161)],_0x8ff8a5['email']);try{await this[_0x5b59bd(0x15d)]['commit'](_0x11182e);}catch(_0x5d9304){let _0x5c4540=0x0;do{_0x5c4540++;const _0x553137=await this['git']['status']()[_0x5b59bd(0x142)](_0x182283=>_0x182283['message']||_0x182283);if(_0x553137[_0x5b59bd(0x147)](_0x5b59bd(0x13f))){_0x5c4540=0x0;break;}await(0x0,utils_1[_0x5b59bd(0x152)])(this[_0x5b59bd(0x143)]);}while(_0x5c4540<this[_0x5b59bd(0x164)]);if(_0x5c4540===this[_0x5b59bd(0x164)])throw _0x5d9304;}await this['git'][_0x5b59bd(0x166)](_0xe66c2e);}async[a121_0x45a1c3(0x157)](){const _0x97231b=a121_0x45a1c3;await shell_internal_1[_0x97231b(0x144)][_0x97231b(0x14d)](_0x97231b(0x151)+this[_0x97231b(0x14c)]+'\x20&&\x20git\x20rm\x20-rf\x20.\x20&&\x20git\x20clean\x20.\x20-fxd')['catch'](()=>void 0x0);}async[a121_0x45a1c3(0x15c)](){await fs_internal_1['FS']['removeDir'](this['dir']);}}exports['GitUtils']=GitUtils;