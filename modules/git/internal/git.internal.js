const a148_0x5e5f40=a148_0x1aa9;(function(_0x123f82,_0x19b9e5){const _0x25f63b=a148_0x1aa9,_0x341d89=_0x123f82();while(!![]){try{const _0x472017=-parseInt(_0x25f63b(0xae))/0x1+parseInt(_0x25f63b(0x9f))/0x2*(-parseInt(_0x25f63b(0xcf))/0x3)+parseInt(_0x25f63b(0x86))/0x4+parseInt(_0x25f63b(0x83))/0x5+parseInt(_0x25f63b(0xb9))/0x6*(-parseInt(_0x25f63b(0xb1))/0x7)+-parseInt(_0x25f63b(0x8f))/0x8+-parseInt(_0x25f63b(0xce))/0x9;if(_0x472017===_0x19b9e5)break;else _0x341d89['push'](_0x341d89['shift']());}catch(_0x4acc3b){_0x341d89['push'](_0x341d89['shift']());}}}(a148_0x1d0a,0x398a8));const a148_0x2191ad=(function(){let _0x2f0230=!![];return function(_0x17795a,_0xaa6aac){const _0x18e408=_0x2f0230?function(){if(_0xaa6aac){const _0x4ced6f=_0xaa6aac['apply'](_0x17795a,arguments);return _0xaa6aac=null,_0x4ced6f;}}:function(){};return _0x2f0230=![],_0x18e408;};}()),a148_0x725b51=a148_0x2191ad(this,function(){const _0x549060=a148_0x1aa9;return a148_0x725b51[_0x549060(0xac)]()[_0x549060(0xcb)]('(((.+)+)+)+$')[_0x549060(0xac)]()['constructor'](a148_0x725b51)['search'](_0x549060(0xba));});a148_0x725b51();'use strict';var __importDefault=this&&this[a148_0x5e5f40(0xa2)]||function(_0x56cdda){const _0x35c048=a148_0x5e5f40;return _0x56cdda&&_0x56cdda[_0x35c048(0x94)]?_0x56cdda:{'default':_0x56cdda};};Object[a148_0x5e5f40(0x87)](exports,'__esModule',{'value':!![]}),exports[a148_0x5e5f40(0x85)]=void 0x0;function a148_0x1aa9(_0x578c2c,_0x1d2d36){const _0x37d14a=a148_0x1d0a();return a148_0x1aa9=function(_0x725b51,_0x2191ad){_0x725b51=_0x725b51-0x83;let _0x1d0a7d=_0x37d14a[_0x725b51];return _0x1d0a7d;},a148_0x1aa9(_0x578c2c,_0x1d2d36);}const constants_1=require(a148_0x5e5f40(0x9e)),core_1=require(a148_0x5e5f40(0xc9)),path_1=__importDefault(require(a148_0x5e5f40(0xa3))),branch_dto_1=require(a148_0x5e5f40(0xad)),utils_1=require(a148_0x5e5f40(0xa7)),fs_internal_1=require('./fs.internal'),internal_utils_1=require(a148_0x5e5f40(0xc4)),utils_2=require(a148_0x5e5f40(0xc5));class Git{constructor(_0x161a13){const _0x3afcd5=a148_0x5e5f40;this[_0x3afcd5(0x8d)]=_0x161a13;}get[a148_0x5e5f40(0x9b)](){return this['_repoPath'];}async['setCredentials'](_0x1a2d75,_0x2b6ba0){const _0x2ebd13=a148_0x5e5f40;await utils_2[_0x2ebd13(0xb4)][_0x2ebd13(0x95)](_0x2ebd13(0xa4)+this[_0x2ebd13(0x8d)]+_0x2ebd13(0xc6)+_0x1a2d75+_0x2ebd13(0xbc)+_0x2b6ba0+'\x22','');}async[a148_0x5e5f40(0xaf)](..._0x3912e8){const _0x46e192=a148_0x5e5f40;await utils_2['ChildProcessUtils'][_0x46e192(0x95)]('cd\x20'+this[_0x46e192(0x8d)]+_0x46e192(0xb3)+_0x3912e8[_0x46e192(0xaa)]('\x20'),'');}async[a148_0x5e5f40(0xb8)](){const _0x4863d4=a148_0x5e5f40;return utils_2[_0x4863d4(0xb4)][_0x4863d4(0x95)](_0x4863d4(0xa4)+this[_0x4863d4(0x8d)]+_0x4863d4(0x98),'');}async[a148_0x5e5f40(0x9d)](_0x236298){const _0x25ad92=a148_0x5e5f40;Git['logger'][_0x25ad92(0x8c)](_0x25ad92(0xb6),_0x236298),await utils_2[_0x25ad92(0xb4)][_0x25ad92(0x95)](_0x25ad92(0xa4)+this['_repoPath']+_0x25ad92(0x8e)+_0x236298+'\x22','');}async[a148_0x5e5f40(0xc8)](_0x2002aa){const _0x34f8f6=a148_0x5e5f40;Git[_0x34f8f6(0xca)][_0x34f8f6(0x8c)](_0x34f8f6(0xc0),_0x2002aa),await utils_2[_0x34f8f6(0xb4)][_0x34f8f6(0x95)](_0x34f8f6(0xa4)+this['_repoPath']+_0x34f8f6(0xbd)+_0x2002aa+_0x34f8f6(0x93),'');}async[a148_0x5e5f40(0x97)](_0x1c40e0){const _0xcbb228=a148_0x5e5f40;Git[_0xcbb228(0xca)][_0xcbb228(0x8c)](_0xcbb228(0xb0),_0x1c40e0),await utils_2[_0xcbb228(0xb4)]['spawnPromise'](_0xcbb228(0xa4)+this[_0xcbb228(0x8d)]+_0xcbb228(0x88)+_0x1c40e0,'');}async['getCurrentHash'](){const _0x53c273=a148_0x5e5f40,_0x559e2e=await utils_2['ChildProcessUtils'][_0x53c273(0x95)](_0x53c273(0xa4)+this['_repoPath']+'\x20&&\x20git\x20rev-parse\x20HEAD','');return _0x559e2e[_0x53c273(0x92)]('\x0a','');}async['describeCommit'](_0xb21524){const _0x5a8f2e=a148_0x5e5f40;Git[_0x5a8f2e(0xca)]['log'](_0x5a8f2e(0xc3),_0xb21524);const _0x39188d=await utils_2[_0x5a8f2e(0xb4)][_0x5a8f2e(0x95)](_0x5a8f2e(0xa4)+this[_0x5a8f2e(0x8d)]+_0x5a8f2e(0xbb)+_0xb21524,'');return{'author':(0x0,internal_utils_1[_0x5a8f2e(0x9a)])(_0x39188d),'email':(0x0,internal_utils_1[_0x5a8f2e(0xbe)])(_0x39188d),'message':(0x0,internal_utils_1[_0x5a8f2e(0x84)])(_0x39188d),'changes':(0x0,internal_utils_1[_0x5a8f2e(0xd0)])(_0x39188d)};}static async['getRemoteHash'](_0x54c002,_0xcaf240){const _0x4cd16b=a148_0x5e5f40,[_0x11943d]=await utils_2[_0x4cd16b(0xb4)][_0x4cd16b(0x95)](_0x4cd16b(0xc1)+_0x54c002+'\x20'+_0xcaf240+'\x20--refs','')[_0x4cd16b(0x91)](_0x21a99c=>_0x21a99c[_0x4cd16b(0x92)](/\s/g,'\x20')['split']('\x20'));return _0x11943d;}static async[a148_0x5e5f40(0xa6)](_0x8aa291,_0x2fab7e,_0x291ebf){const _0x2e52fe=a148_0x5e5f40,_0x51cd72=path_1[_0x2e52fe(0x8a)]['join'](this['DEFAULT_CLONE_PATH'],_0x2fab7e),_0x5982c6=new Git(_0x51cd72);return Git[_0x2e52fe(0xca)]['log'](_0x2e52fe(0xc2),_0x291ebf,_0x51cd72),await fs_internal_1['FS']['removeDir'](_0x51cd72),await utils_2[_0x2e52fe(0xb4)][_0x2e52fe(0x95)](_0x2e52fe(0x99)+_0x291ebf+_0x2e52fe(0xc7)+_0x8aa291+'\x20'+_0x51cd72,''),_0x5982c6;}static async[a148_0x5e5f40(0xa5)](_0xdbac5b,_0x197cce){const _0x678d72=a148_0x5e5f40,_0x4cf5fb=/(?:([a-f0-9]+)\s+((?:HEAD|refs\/heads\/).*))/,_0x3b6a4a=_0xdbac5b[_0x678d72(0xa9)][_0x678d72(0x92)](/http(s)?:\/\/(.+@)?/,(0x0,utils_1[_0x678d72(0xa0)])(_0xdbac5b[_0x678d72(0xa9)])+_0x678d72(0xb7)+_0x197cce[_0x678d72(0xab)]()+'@'),_0x1ac8b5=await utils_2[_0x678d72(0xb4)][_0x678d72(0x95)]('git\x20ls-remote\x20'+_0x3b6a4a,'');return _0x1ac8b5[_0x678d72(0xb2)]('\x0a')[_0x678d72(0x96)](_0x3e5f82=>_0x4cf5fb[_0x678d72(0x89)](_0x3e5f82))[_0x678d72(0xb5)](_0x48a959=>{const _0xff6e24=_0x678d72,[,_0x3c608b,_0x349165]=_0x48a959[_0xff6e24(0x8b)](_0x4cf5fb),_0x99614a=new branch_dto_1['BranchDto']();return _0x99614a[_0xff6e24(0xbf)]=_0x3c608b,_0x99614a['name']=_0x349165[_0xff6e24(0x92)]('refs/heads/',''),_0x99614a;});}static async[a148_0x5e5f40(0xd1)](_0x2dd448,_0x5f393a,_0x2cce33,_0x513bcf){const _0x1df1ce=a148_0x5e5f40,_0x5a401b=_0x2dd448[_0x1df1ce(0xa9)][_0x1df1ce(0x92)](/http(s)?:\/\/(.+@)?/,(0x0,utils_1[_0x1df1ce(0xa0)])(_0x2dd448[_0x1df1ce(0xa9)])+'://'+_0x513bcf[_0x1df1ce(0xab)]()+'@'),_0x4357ee=path_1['default']['join'](this[_0x1df1ce(0x90)],_0x2dd448[_0x1df1ce(0xa8)]);Git[_0x1df1ce(0xca)]['log']('Create\x20empty\x20branch\x20at\x20%s\x20name\x20%s\x20[%s]',_0x2dd448['name'],_0x5f393a,_0x4357ee),await fs_internal_1['FS']['removeDir'](_0x4357ee),await fs_internal_1['FS']['makeDir'](_0x4357ee);const _0x388005=new Git(_0x4357ee);await utils_2['ChildProcessUtils'][_0x1df1ce(0x95)](_0x1df1ce(0xa4)+_0x388005['baseDir']+'\x20&&\x20git\x20init',''),await utils_2['ChildProcessUtils'][_0x1df1ce(0x95)]('cd\x20'+_0x388005['baseDir']+_0x1df1ce(0xcd)+_0x5a401b,''),await _0x388005['setCredentials'](constants_1['DEFAULT_GIT_USER_NAME'],constants_1['DEFAULT_GIT_USER_EMAIL']),await utils_2[_0x1df1ce(0xb4)]['spawnPromise'](_0x1df1ce(0xa4)+_0x388005[_0x1df1ce(0x9b)]+_0x1df1ce(0x9c)+_0x5f393a,''),await utils_2[_0x1df1ce(0xb4)][_0x1df1ce(0x95)]('cd\x20'+_0x388005['baseDir']+'\x20&&\x20git\x20commit\x20-m\x20\x22'+(_0x2cce33||constants_1[_0x1df1ce(0xcc)])+'\x22\x20--allow-empty',''),await _0x388005[_0x1df1ce(0xc8)](_0x5f393a),Git[_0x1df1ce(0xca)][_0x1df1ce(0x8c)](_0x1df1ce(0xa1)),await fs_internal_1['FS']['removeDir'](_0x388005[_0x1df1ce(0x9b)]);}}exports['Git']=Git,Git[a148_0x5e5f40(0x90)]=path_1[a148_0x5e5f40(0x8a)][a148_0x5e5f40(0xaa)](process['cwd'](),'.temp','git'),Git[a148_0x5e5f40(0xca)]=new core_1['Logger'](Git[a148_0x5e5f40(0xa8)]);function a148_0x1d0a(){const _0x49ef0f=['../../shared/utils','name','gitUrl','join','getGitShellAuthorizationString','toString','../providers/branches/dto/branch.dto','49488PbvqNH','add','Checkout\x20to\x20%s','159425mHgIcs','split','\x20&&\x20git\x20add\x20','ChildProcessUtils','map','Commit\x20message\x20\x22%s\x22','://','status','90LfiZpv','(((.+)+)+)+$','\x20&&\x20git\x20show\x20--pretty=format:\x22Author:\x20%an%nEmail:\x20%ae%nMessage:\x20%s\x22\x20--name-status\x20','\x22\x20&&\x20git\x20config\x20--local\x20user.email\x20\x22','\x20&&\x20git\x20push\x20origin\x20','extractEmailFromCommitDescribe','sha','Push\x20changes\x20to\x20%s','git\x20ls-remote\x20','Clone\x20repository\x20branch\x20%s\x20to\x20%s','Describe\x20commit\x20%s','./internal.utils','@flosum/utils','\x20&&\x20git\x20config\x20--local\x20user.name\x20\x22','\x20--single-branch\x20','push','../../../core','logger','search','INITIAL_COMMIT','\x20&&\x20git\x20remote\x20add\x20origin\x20','680526NkkpVz','9arYcoa','extractChangesFromCommitDescribe','createEmptyBranch','2110605rkIXAi','extractMessageFromCommitDescribe','Git','1859556LiQrHe','defineProperty','\x20&&\x20git\x20checkout\x20','test','default','match','log','_repoPath','\x20&&\x20git\x20commit\x20-m\x20\x22','1121368iqWXtf','DEFAULT_CLONE_PATH','then','replace','\x20--quiet','__esModule','spawnPromise','filter','checkout','\x20&&\x20git\x20status','git\x20clone\x20-b\x20','extractAuthorFromCommitDescribe','baseDir','\x20&&\x20git\x20checkout\x20--orphan\x20','commit','../../../constants','29616cQyMjj','getProtocol','Clean\x20up\x20repository\x20directory\x20after\x20creating\x20branch','__importDefault','path','cd\x20','getRepositoryBranches','clone'];a148_0x1d0a=function(){return _0x49ef0f;};return a148_0x1d0a();}