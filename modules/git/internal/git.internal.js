const a149_0x136451=a149_0x4c8e;function a149_0x1245(){const _0x426bf4=['./internal.utils','\x20&&\x20git\x20checkout\x20--orphan\x20','\x20&&\x20git\x20init','\x20&&\x20git\x20checkout\x20','505044BSkGLZ','16SUoxoS','(((.+)+)+)+$','log','162635sVeDXg','.temp','extractMessageFromCommitDescribe','Logger','\x20--quiet','makeDir','BranchDto','@flosum/utils','defineProperty','default','apply','471261hhgNyK','Describe\x20commit\x20%s','DEFAULT_GIT_USER_NAME','getGitShellAuthorizationString','getCurrentHash','410834HKMTwR','path','match','baseDir','getRepositoryBranches','\x20&&\x20git\x20commit\x20-m\x20\x22','replace','getProtocol','\x20--refs','add','then','git\x20clone\x20-b\x20','checkout','5331220PXeVpk','1IvLYyh','email','INITIAL_COMMIT','../../shared/utils','\x22\x20&&\x20git\x20config\x20--local\x20user.email\x20\x22','cwd','getRemoteHash','\x20&&\x20git\x20show\x20--pretty=format:\x22Author:\x20%an%nEmail:\x20%ae%nMessage:\x20%s\x22\x20--name-status\x20','3424800hvDgle','setCredentials','split','map','820125UlkUig','\x20&&\x20git\x20status','ChildProcessUtils','name','extractAuthorFromCommitDescribe','refs/heads/','\x20&&\x20git\x20push\x20origin\x20','DEFAULT_CLONE_PATH','search','Commit\x20message\x20\x22%s\x22','\x20&&\x20git\x20config\x20--local\x20user.name\x20\x22','\x20&&\x20git\x20add\x20','sha','\x20&&\x20git\x20remote\x20add\x20origin\x20','createEmptyBranch','extractEmailFromCommitDescribe','spawnPromise','push','\x20--single-branch\x20','logger','constructor','Clone\x20repository\x20branch\x20%s\x20to\x20%s','git\x20ls-remote\x20','__importDefault','cd\x20','://','clone','Checkout\x20to\x20%s','__esModule','Create\x20empty\x20branch\x20at\x20%s\x20name\x20%s\x20[%s]','\x22\x20--allow-empty','join','../../../core','24AhAuPl','Push\x20changes\x20to\x20%s','gitUrl','Git','\x20&&\x20git\x20rev-parse\x20HEAD','../../../constants','removeDir','_repoPath','./fs.internal'];a149_0x1245=function(){return _0x426bf4;};return a149_0x1245();}(function(_0x3a0faa,_0x57486c){const _0x1a91de=a149_0x4c8e,_0x4a73b5=_0x3a0faa();while(!![]){try{const _0x5c3a44=parseInt(_0x1a91de(0xa7))/0x1*(-parseInt(_0x1a91de(0xf5))/0x2)+parseInt(_0x1a91de(0xb3))/0x3+parseInt(_0x1a91de(0xe2))/0x4*(-parseInt(_0x1a91de(0xe5))/0x5)+-parseInt(_0x1a91de(0xd4))/0x6*(-parseInt(_0x1a91de(0xf0))/0x7)+-parseInt(_0x1a91de(0xaf))/0x8+-parseInt(_0x1a91de(0xe1))/0x9+parseInt(_0x1a91de(0xa6))/0xa;if(_0x5c3a44===_0x57486c)break;else _0x4a73b5['push'](_0x4a73b5['shift']());}catch(_0xc378cf){_0x4a73b5['push'](_0x4a73b5['shift']());}}}(a149_0x1245,0x3e830));const a149_0x40fc7d=(function(){let _0x35d702=!![];return function(_0x2dfd14,_0x479063){const _0xc5e363=_0x35d702?function(){const _0x402e96=a149_0x4c8e;if(_0x479063){const _0x313cd2=_0x479063[_0x402e96(0xef)](_0x2dfd14,arguments);return _0x479063=null,_0x313cd2;}}:function(){};return _0x35d702=![],_0xc5e363;};}()),a149_0x21f5a9=a149_0x40fc7d(this,function(){const _0x2ff1be=a149_0x4c8e;return a149_0x21f5a9['toString']()['search'](_0x2ff1be(0xe3))['toString']()[_0x2ff1be(0xc7)](a149_0x21f5a9)[_0x2ff1be(0xbb)](_0x2ff1be(0xe3));});function a149_0x4c8e(_0x5137ee,_0x287f45){const _0x49ce0f=a149_0x1245();return a149_0x4c8e=function(_0x21f5a9,_0x40fc7d){_0x21f5a9=_0x21f5a9-0xa1;let _0x1245cb=_0x49ce0f[_0x21f5a9];return _0x1245cb;},a149_0x4c8e(_0x5137ee,_0x287f45);}a149_0x21f5a9();'use strict';var __importDefault=this&&this[a149_0x136451(0xca)]||function(_0x339a4f){const _0x521342=a149_0x136451;return _0x339a4f&&_0x339a4f[_0x521342(0xcf)]?_0x339a4f:{'default':_0x339a4f};};Object[a149_0x136451(0xed)](exports,a149_0x136451(0xcf),{'value':!![]}),exports[a149_0x136451(0xd7)]=void 0x0;const constants_1=require(a149_0x136451(0xd9)),core_1=require(a149_0x136451(0xd3)),path_1=__importDefault(require(a149_0x136451(0xf6))),branch_dto_1=require('../providers/branches/dto/branch.dto'),utils_1=require(a149_0x136451(0xaa)),fs_internal_1=require(a149_0x136451(0xdc)),internal_utils_1=require(a149_0x136451(0xdd)),utils_2=require(a149_0x136451(0xec));class Git{constructor(_0x3f042c){const _0x32b72c=a149_0x136451;this[_0x32b72c(0xdb)]=_0x3f042c;}get[a149_0x136451(0xf8)](){return this['_repoPath'];}async[a149_0x136451(0xb0)](_0x5761f3,_0x51814d){const _0x3defa3=a149_0x136451;await utils_2['ChildProcessUtils'][_0x3defa3(0xc3)](_0x3defa3(0xcb)+this['_repoPath']+_0x3defa3(0xbd)+_0x5761f3+_0x3defa3(0xab)+_0x51814d+'\x22','');}async[a149_0x136451(0xa2)](..._0x4cda52){const _0xd51e38=a149_0x136451;await utils_2[_0xd51e38(0xb5)][_0xd51e38(0xc3)](_0xd51e38(0xcb)+this['_repoPath']+_0xd51e38(0xbe)+_0x4cda52[_0xd51e38(0xd2)]('\x20'),'');}async['status'](){const _0x4abc87=a149_0x136451;return utils_2[_0x4abc87(0xb5)][_0x4abc87(0xc3)](_0x4abc87(0xcb)+this[_0x4abc87(0xdb)]+_0x4abc87(0xb4),'');}async['commit'](_0x311ea9){const _0x46dc1a=a149_0x136451;Git[_0x46dc1a(0xc6)]['log'](_0x46dc1a(0xbc),_0x311ea9),await utils_2[_0x46dc1a(0xb5)][_0x46dc1a(0xc3)](_0x46dc1a(0xcb)+this[_0x46dc1a(0xdb)]+_0x46dc1a(0xfa)+_0x311ea9+'\x22','');}async['push'](_0x2f8b1d){const _0x4373f4=a149_0x136451;Git[_0x4373f4(0xc6)][_0x4373f4(0xe4)](_0x4373f4(0xd5),_0x2f8b1d),await utils_2[_0x4373f4(0xb5)][_0x4373f4(0xc3)]('cd\x20'+this[_0x4373f4(0xdb)]+_0x4373f4(0xb9)+_0x2f8b1d+_0x4373f4(0xe9),'');}async[a149_0x136451(0xa5)](_0x25f788){const _0x4be844=a149_0x136451;Git['logger'][_0x4be844(0xe4)](_0x4be844(0xce),_0x25f788),await utils_2[_0x4be844(0xb5)][_0x4be844(0xc3)](_0x4be844(0xcb)+this[_0x4be844(0xdb)]+_0x4be844(0xe0)+_0x25f788,'');}async[a149_0x136451(0xf4)](){const _0x1b6dc1=a149_0x136451,_0x17f82c=await utils_2[_0x1b6dc1(0xb5)][_0x1b6dc1(0xc3)]('cd\x20'+this[_0x1b6dc1(0xdb)]+_0x1b6dc1(0xd8),'');return _0x17f82c['replace']('\x0a','');}async['describeCommit'](_0x434fc4){const _0x3e02cc=a149_0x136451;Git[_0x3e02cc(0xc6)][_0x3e02cc(0xe4)](_0x3e02cc(0xf1),_0x434fc4);const _0x531056=await utils_2[_0x3e02cc(0xb5)][_0x3e02cc(0xc3)](_0x3e02cc(0xcb)+this['_repoPath']+_0x3e02cc(0xae)+_0x434fc4,'');return{'author':(0x0,internal_utils_1[_0x3e02cc(0xb7)])(_0x531056),'email':(0x0,internal_utils_1[_0x3e02cc(0xc2)])(_0x531056),'message':(0x0,internal_utils_1[_0x3e02cc(0xe7)])(_0x531056),'changes':(0x0,internal_utils_1['extractChangesFromCommitDescribe'])(_0x531056)};}static async[a149_0x136451(0xad)](_0x2c567a,_0x8fbfdc){const _0x5bf100=a149_0x136451,[_0x5acd1c]=await utils_2[_0x5bf100(0xb5)][_0x5bf100(0xc3)](_0x5bf100(0xc9)+_0x2c567a+'\x20'+_0x8fbfdc+_0x5bf100(0xa1),'')[_0x5bf100(0xa3)](_0x208e8f=>_0x208e8f[_0x5bf100(0xfb)](/\s/g,'\x20')['split']('\x20'));return _0x5acd1c;}static async[a149_0x136451(0xcd)](_0x2d357d,_0x256800,_0x43332f){const _0xe3b433=a149_0x136451,_0x4884e4=path_1[_0xe3b433(0xee)][_0xe3b433(0xd2)](this['DEFAULT_CLONE_PATH'],_0x256800),_0x3b4f87=new Git(_0x4884e4);return Git[_0xe3b433(0xc6)][_0xe3b433(0xe4)](_0xe3b433(0xc8),_0x43332f,_0x4884e4),await fs_internal_1['FS'][_0xe3b433(0xda)](_0x4884e4),await utils_2[_0xe3b433(0xb5)][_0xe3b433(0xc3)](_0xe3b433(0xa4)+_0x43332f+_0xe3b433(0xc5)+_0x2d357d+'\x20'+_0x4884e4,''),_0x3b4f87;}static async[a149_0x136451(0xf9)](_0x33c940,_0x4dd606){const _0x4dcb6f=a149_0x136451,_0x25ea06=/(?:([a-f0-9]+)\s+((?:HEAD|refs\/heads\/).*))/,_0x8bd5fe=_0x33c940[_0x4dcb6f(0xd6)][_0x4dcb6f(0xfb)](/http(s)?:\/\/(.+@)?/,(0x0,utils_1[_0x4dcb6f(0xfc)])(_0x33c940[_0x4dcb6f(0xd6)])+_0x4dcb6f(0xcc)+_0x4dd606[_0x4dcb6f(0xf3)]()+'@'),_0x4d667b=await utils_2[_0x4dcb6f(0xb5)]['spawnPromise'](_0x4dcb6f(0xc9)+_0x8bd5fe,'');return _0x4d667b[_0x4dcb6f(0xb1)]('\x0a')['filter'](_0x4438c6=>_0x25ea06['test'](_0x4438c6))[_0x4dcb6f(0xb2)](_0x2e7b22=>{const _0x354ef6=_0x4dcb6f,[,_0x31852a,_0x216d00]=_0x2e7b22[_0x354ef6(0xf7)](_0x25ea06),_0x1f01a0=new branch_dto_1[(_0x354ef6(0xeb))]();return _0x1f01a0[_0x354ef6(0xbf)]=_0x31852a,_0x1f01a0[_0x354ef6(0xb6)]=_0x216d00[_0x354ef6(0xfb)](_0x354ef6(0xb8),''),_0x1f01a0;});}static async[a149_0x136451(0xc1)](_0x3f1d12,_0x24df30,_0x510d64,_0x139c5c){const _0x4c8dfb=a149_0x136451;var _0x6d6c69,_0x266986;const _0x294756=_0x3f1d12['gitUrl'][_0x4c8dfb(0xfb)](/http(s)?:\/\/(.+@)?/,(0x0,utils_1[_0x4c8dfb(0xfc)])(_0x3f1d12[_0x4c8dfb(0xd6)])+_0x4c8dfb(0xcc)+_0x139c5c['getGitShellAuthorizationString']()+'@'),_0x140d4d=path_1[_0x4c8dfb(0xee)]['join'](this[_0x4c8dfb(0xba)],_0x3f1d12[_0x4c8dfb(0xb6)]);Git[_0x4c8dfb(0xc6)]['log'](_0x4c8dfb(0xd0),_0x3f1d12['name'],_0x24df30[_0x4c8dfb(0xb6)],_0x140d4d),await fs_internal_1['FS'][_0x4c8dfb(0xda)](_0x140d4d),await fs_internal_1['FS'][_0x4c8dfb(0xea)](_0x140d4d);const _0x1e7a5e=new Git(_0x140d4d);await utils_2[_0x4c8dfb(0xb5)][_0x4c8dfb(0xc3)](_0x4c8dfb(0xcb)+_0x1e7a5e[_0x4c8dfb(0xf8)]+_0x4c8dfb(0xdf),''),await utils_2[_0x4c8dfb(0xb5)][_0x4c8dfb(0xc3)](_0x4c8dfb(0xcb)+_0x1e7a5e[_0x4c8dfb(0xf8)]+_0x4c8dfb(0xc0)+_0x294756,''),await _0x1e7a5e[_0x4c8dfb(0xb0)](((_0x6d6c69=_0x24df30['user'])===null||_0x6d6c69===void 0x0?void 0x0:_0x6d6c69[_0x4c8dfb(0xb6)])||constants_1[_0x4c8dfb(0xf2)],((_0x266986=_0x24df30['user'])===null||_0x266986===void 0x0?void 0x0:_0x266986[_0x4c8dfb(0xa8)])||constants_1['DEFAULT_GIT_USER_EMAIL']),await utils_2[_0x4c8dfb(0xb5)][_0x4c8dfb(0xc3)](_0x4c8dfb(0xcb)+_0x1e7a5e[_0x4c8dfb(0xf8)]+_0x4c8dfb(0xde)+_0x24df30[_0x4c8dfb(0xb6)],''),await utils_2[_0x4c8dfb(0xb5)][_0x4c8dfb(0xc3)]('cd\x20'+_0x1e7a5e[_0x4c8dfb(0xf8)]+_0x4c8dfb(0xfa)+(_0x510d64||constants_1[_0x4c8dfb(0xa9)])+_0x4c8dfb(0xd1),''),await _0x1e7a5e[_0x4c8dfb(0xc4)](_0x24df30['name']),Git[_0x4c8dfb(0xc6)][_0x4c8dfb(0xe4)]('Clean\x20up\x20repository\x20directory\x20after\x20creating\x20branch'),await fs_internal_1['FS'][_0x4c8dfb(0xda)](_0x1e7a5e[_0x4c8dfb(0xf8)]);}}exports['Git']=Git,Git[a149_0x136451(0xba)]=path_1['default']['join'](process[a149_0x136451(0xac)](),a149_0x136451(0xe6),'git'),Git['logger']=new core_1[(a149_0x136451(0xe8))](Git[a149_0x136451(0xb6)]);