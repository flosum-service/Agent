const a84_0x31f6d4=a84_0x5e2c;(function(_0x3b55e7,_0x27cfc0){const _0x393a38=a84_0x5e2c,_0x3bff21=_0x3b55e7();while(!![]){try{const _0x28feca=-parseInt(_0x393a38(0x196))/0x1+-parseInt(_0x393a38(0x1a3))/0x2*(parseInt(_0x393a38(0x19d))/0x3)+parseInt(_0x393a38(0x171))/0x4+-parseInt(_0x393a38(0x19e))/0x5*(-parseInt(_0x393a38(0x1a2))/0x6)+-parseInt(_0x393a38(0x1b7))/0x7*(parseInt(_0x393a38(0x190))/0x8)+-parseInt(_0x393a38(0x194))/0x9+parseInt(_0x393a38(0x174))/0xa*(parseInt(_0x393a38(0x1b2))/0xb);if(_0x28feca===_0x27cfc0)break;else _0x3bff21['push'](_0x3bff21['shift']());}catch(_0x59dcbf){_0x3bff21['push'](_0x3bff21['shift']());}}}(a84_0x5a87,0xd5394));const a84_0x51c9a5=(function(){let _0x2ed5ec=!![];return function(_0x48fdd0,_0x12948a){const _0x269ece=_0x2ed5ec?function(){if(_0x12948a){const _0x4b7a88=_0x12948a['apply'](_0x48fdd0,arguments);return _0x12948a=null,_0x4b7a88;}}:function(){};return _0x2ed5ec=![],_0x269ece;};}()),a84_0x39199e=a84_0x51c9a5(this,function(){const _0x51fbc8=a84_0x5e2c;return a84_0x39199e[_0x51fbc8(0x18f)]()[_0x51fbc8(0x17b)]('(((.+)+)+)+$')[_0x51fbc8(0x18f)]()[_0x51fbc8(0x167)](a84_0x39199e)[_0x51fbc8(0x17b)](_0x51fbc8(0x1aa));});a84_0x39199e();'use strict';var __importDefault=this&&this[a84_0x31f6d4(0x193)]||function(_0x31e204){return _0x31e204&&_0x31e204['__esModule']?_0x31e204:{'default':_0x31e204};};function a84_0x5e2c(_0x198c84,_0x2ae9a3){const _0x2ce504=a84_0x5a87();return a84_0x5e2c=function(_0x39199e,_0x51c9a5){_0x39199e=_0x39199e-0x166;let _0x5a87cf=_0x2ce504[_0x39199e];return _0x5a87cf;},a84_0x5e2c(_0x198c84,_0x2ae9a3);}Object[a84_0x31f6d4(0x185)](exports,'__esModule',{'value':!![]}),exports['Git']=void 0x0;const constants_1=require(a84_0x31f6d4(0x18a)),core_1=require(a84_0x31f6d4(0x1b1)),path_1=__importDefault(require('path')),typedi_1=__importDefault(require(a84_0x31f6d4(0x16a))),branch_dto_1=require(a84_0x31f6d4(0x1ad)),auth_settings_service_1=require(a84_0x31f6d4(0x198)),utils_1=require(a84_0x31f6d4(0x1a5)),fs_internal_1=require(a84_0x31f6d4(0x1b6)),internal_utils_1=require(a84_0x31f6d4(0x1af)),shell_internal_1=require('./shell.internal');class Git{constructor(_0x10ece8){const _0x5308d5=a84_0x31f6d4;this[_0x5308d5(0x177)]=_0x10ece8;}get[a84_0x31f6d4(0x187)](){const _0x845fbc=a84_0x31f6d4;return this[_0x845fbc(0x177)];}async[a84_0x31f6d4(0x188)](_0x4aaebd,_0x4d720c){const _0x3a342f=a84_0x31f6d4;Git[_0x3a342f(0x175)][_0x3a342f(0x16c)](_0x3a342f(0x18c),_0x4aaebd,_0x4d720c),await shell_internal_1[_0x3a342f(0x191)][_0x3a342f(0x181)](_0x3a342f(0x184)+this[_0x3a342f(0x177)]+_0x3a342f(0x1ae)+_0x4aaebd+_0x3a342f(0x1a9)+_0x4d720c+'\x22');}async[a84_0x31f6d4(0x197)](..._0x22890b){const _0xb5e0d3=a84_0x31f6d4;await shell_internal_1['Shell']['exec'](_0xb5e0d3(0x184)+this[_0xb5e0d3(0x177)]+_0xb5e0d3(0x16f)+_0x22890b['join']('\x20'));}async[a84_0x31f6d4(0x180)](){const _0x46a4ab=a84_0x31f6d4;return shell_internal_1['Shell'][_0x46a4ab(0x181)](_0x46a4ab(0x184)+this[_0x46a4ab(0x177)]+'\x20&&\x20git\x20status');}async[a84_0x31f6d4(0x1a6)](_0x5183e8){const _0x273539=a84_0x31f6d4;Git[_0x273539(0x175)][_0x273539(0x16c)]('commit\x20message\x20\x22%s\x22',_0x5183e8),await shell_internal_1[_0x273539(0x191)][_0x273539(0x181)](_0x273539(0x184)+this[_0x273539(0x177)]+'\x20&&\x20git\x20commit\x20-m\x20\x22'+_0x5183e8+'\x22');}async['push'](_0x69e628){const _0x2814f0=a84_0x31f6d4;Git['logger'][_0x2814f0(0x16c)](_0x2814f0(0x19a),_0x69e628),await shell_internal_1['Shell'][_0x2814f0(0x181)](_0x2814f0(0x184)+this[_0x2814f0(0x177)]+_0x2814f0(0x192)+_0x69e628+_0x2814f0(0x189));}async[a84_0x31f6d4(0x182)](_0x133f10){const _0x1c693c=a84_0x31f6d4;Git[_0x1c693c(0x175)]['log'](_0x1c693c(0x173),_0x133f10),await shell_internal_1[_0x1c693c(0x191)][_0x1c693c(0x181)](_0x1c693c(0x184)+this[_0x1c693c(0x177)]+'\x20&&\x20git\x20checkout\x20'+_0x133f10);}async[a84_0x31f6d4(0x1ab)](){const _0x1924af=a84_0x31f6d4,_0x1f4ee8=await shell_internal_1[_0x1924af(0x191)][_0x1924af(0x181)](_0x1924af(0x184)+this[_0x1924af(0x177)]+_0x1924af(0x19b));return _0x1f4ee8[_0x1924af(0x1a1)]('\x0a','');}async[a84_0x31f6d4(0x1a0)](_0x3bd0fc){const _0x3bebd6=a84_0x31f6d4;Git['logger'][_0x3bebd6(0x16c)]('describe\x20commit\x20%s',_0x3bd0fc);const _0x4f79d8=await shell_internal_1[_0x3bebd6(0x191)][_0x3bebd6(0x181)]('cd\x20'+this['_repoPath']+_0x3bebd6(0x176)+_0x3bd0fc);return{'author':internal_utils_1['extractAuthorFromCommitDescribe'](_0x4f79d8),'email':internal_utils_1['extractEmailFromCommitDescribe'](_0x4f79d8),'message':internal_utils_1[_0x3bebd6(0x172)](_0x4f79d8),'changes':internal_utils_1[_0x3bebd6(0x183)](_0x4f79d8)};}static async[a84_0x31f6d4(0x178)](_0x14e4a0,_0x2ff434,_0x4fc8a4){const _0x14a996=a84_0x31f6d4,_0x190a9c=path_1[_0x14a996(0x1b0)][_0x14a996(0x1a8)](this['DEFAULT_CLONE_PATH'],_0x2ff434),_0x2957d3=new Git(_0x190a9c);return Git[_0x14a996(0x175)][_0x14a996(0x16c)](_0x14a996(0x17f),_0x4fc8a4,_0x14e4a0,_0x190a9c),await fs_internal_1['FS']['removeDir'](_0x190a9c),await shell_internal_1[_0x14a996(0x191)][_0x14a996(0x181)](_0x14a996(0x166)+_0x4fc8a4+'\x20--single-branch\x20'+_0x14e4a0+'\x20'+_0x190a9c),_0x2957d3;}static async[a84_0x31f6d4(0x18d)](_0x115a62){const _0x1670e7=a84_0x31f6d4,_0x6a32a4=/(?:([a-f0-9]+)\s+((?:HEAD|refs\/heads\/).*))/,{gitCredentials:_0x2e459d}=typedi_1['default'][_0x1670e7(0x199)](auth_settings_service_1[_0x1670e7(0x195)]),_0x385b17=_0x115a62['gitUrl'][_0x1670e7(0x1a1)](/http(s)?\:\/\/(.+@)?/,utils_1[_0x1670e7(0x169)](_0x115a62['gitUrl'])+_0x1670e7(0x186)+_0x2e459d+'@'),_0x5cb6fb=await shell_internal_1[_0x1670e7(0x191)][_0x1670e7(0x181)](_0x1670e7(0x19f)+_0x385b17),_0x29d559=_0x5cb6fb[_0x1670e7(0x1b4)]('\x0a')['filter'](_0x446373=>_0x6a32a4[_0x1670e7(0x16d)](_0x446373))[_0x1670e7(0x1a4)](_0x642be8=>{const _0x5ca6e3=_0x1670e7,[,_0x4e220a,_0x3b1013]=_0x642be8[_0x5ca6e3(0x1ac)](_0x6a32a4),_0x3ab4e8=new branch_dto_1[(_0x5ca6e3(0x19c))]();return _0x3ab4e8[_0x5ca6e3(0x16b)]=_0x4e220a,_0x3ab4e8[_0x5ca6e3(0x1b9)]=_0x3b1013['replace'](_0x5ca6e3(0x168),''),_0x3ab4e8;});return _0x29d559;}static async['createEmptyBranch'](_0x3b9f21,_0x3f2f22,_0x24fbfc='init\x20repository'){const _0x31b3d8=a84_0x31f6d4,{gitCredentials:_0x3e8fbc}=typedi_1[_0x31b3d8(0x1b0)][_0x31b3d8(0x199)](auth_settings_service_1['AuthSettingsService']),_0xfaacab=_0x3b9f21[_0x31b3d8(0x18e)][_0x31b3d8(0x1a1)](/http(s)?\:\/\/(.+@)?/,utils_1[_0x31b3d8(0x169)](_0x3b9f21[_0x31b3d8(0x18e)])+'://'+_0x3e8fbc+'@'),_0x4a2394=path_1[_0x31b3d8(0x1b0)][_0x31b3d8(0x1a8)](this[_0x31b3d8(0x17a)],_0x3b9f21[_0x31b3d8(0x1b9)]);Git[_0x31b3d8(0x175)][_0x31b3d8(0x16c)](_0x31b3d8(0x1b5),_0x3b9f21[_0x31b3d8(0x1b9)],_0x3f2f22,_0x4a2394,_0xfaacab),await fs_internal_1['FS']['removeDir'](_0x4a2394),await fs_internal_1['FS']['makeDir'](_0x4a2394);const _0x425dc6=new Git(_0x4a2394);await shell_internal_1['Shell'][_0x31b3d8(0x181)](_0x31b3d8(0x184)+_0x425dc6[_0x31b3d8(0x187)]+_0x31b3d8(0x179)),await shell_internal_1['Shell'][_0x31b3d8(0x181)]('cd\x20'+_0x425dc6[_0x31b3d8(0x187)]+_0x31b3d8(0x17d)+_0xfaacab),await _0x425dc6[_0x31b3d8(0x188)](constants_1['DEFAULT_GIT_USER_NAME'],constants_1[_0x31b3d8(0x170)]),await shell_internal_1['Shell'][_0x31b3d8(0x181)](_0x31b3d8(0x184)+_0x425dc6[_0x31b3d8(0x187)]+'\x20&&\x20git\x20checkout\x20--orphan\x20'+_0x3f2f22),await shell_internal_1['Shell'][_0x31b3d8(0x181)](_0x31b3d8(0x184)+_0x425dc6[_0x31b3d8(0x187)]+_0x31b3d8(0x1b3)+_0x24fbfc+_0x31b3d8(0x18b)),await _0x425dc6['push'](_0x3f2f22),Git[_0x31b3d8(0x175)][_0x31b3d8(0x16c)]('clean\x20up\x20repository\x20directory\x20after\x20creating\x20branch'),await fs_internal_1['FS'][_0x31b3d8(0x16e)](_0x425dc6[_0x31b3d8(0x187)]);}}exports[a84_0x31f6d4(0x1b8)]=Git,Git['DEFAULT_CLONE_PATH']=path_1[a84_0x31f6d4(0x1b0)][a84_0x31f6d4(0x1a8)](process['cwd'](),a84_0x31f6d4(0x17e),a84_0x31f6d4(0x1a7)),Git[a84_0x31f6d4(0x175)]=new core_1[(a84_0x31f6d4(0x17c))](Git['name']);function a84_0x5a87(){const _0x505b3d=['search','Logger','\x20&&\x20git\x20remote\x20add\x20origin\x20','.temp','clone\x20repository\x20branch\x20%s\x20from\x20%s\x20to\x20%s','status','exec','checkout','extractChangesFromCommitDescribe','cd\x20','defineProperty','://','baseDir','setCredentials','\x20--quiet','../../constants','\x22\x20--allow-empty','set\x20credentials\x20%s\x20(%s)','getRepositoryBranches','gitUrl','toString','8FpPVHM','Shell','\x20&&\x20git\x20push\x20origin\x20','__importDefault','6103539qyNGIF','AuthSettingsService','1203328wHeTTW','add','../shared/services/auth-settings.service','get','push\x20changes\x20to\x20%s','\x20&&\x20git\x20rev-parse\x20HEAD','BranchDto','294qWIjiw','7310590gldDQj','git\x20ls-remote\x20','describeCommit','replace','6lgypfA','26690bCZYNO','map','../shared/utils','commit','git','join','\x22\x20&&\x20git\x20config\x20--local\x20user.email\x20\x22','(((.+)+)+)+$','getCurrentHash','match','../branches/dto/branch.dto','\x20&&\x20git\x20config\x20--local\x20user.name\x20\x22','./internal.utils','default','../../core','10619136SstzfM','\x20&&\x20git\x20commit\x20-m\x20\x22','split','create\x20empty\x20branch\x20at\x20%s\x20name\x20%s\x20[%s]\x20%s','./fs.internal','10358460QwNoYW','Git','name','git\x20clone\x20-b\x20','constructor','refs/heads/','getProtocol','typedi','sha','log','test','removeDir','\x20&&\x20git\x20add\x20','DEFAULT_GIT_USER_EMAIL','4736828syEldM','extractMessageFromCommitDescribe','checkout\x20to\x20%s','30wLvLHk','logger','\x20&&\x20git\x20show\x20--pretty=format:\x22Author:\x20%an%nEmail:\x20%ae%nMessage:\x20%s\x22\x20--name-status\x20','_repoPath','clone','\x20&&\x20git\x20init','DEFAULT_CLONE_PATH'];a84_0x5a87=function(){return _0x505b3d;};return a84_0x5a87();}