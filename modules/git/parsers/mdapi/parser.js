function a150_0x1f91(_0x1a6191,_0x29ceca){const _0x54202f=a150_0x59bc();return a150_0x1f91=function(_0x10a301,_0x460326){_0x10a301=_0x10a301-0x1d1;let _0x59bc23=_0x54202f[_0x10a301];return _0x59bc23;},a150_0x1f91(_0x1a6191,_0x29ceca);}function a150_0x59bc(){const _0x18c3c1=['apply','../../devops/utils/git-commit.utils','6530150LvYxhB','createChildComponentsFromParent','-meta.xml','../../internal/fs.internal','defineProperty','__importDefault','filePath','reduce','isSFDXProject','path','BUNDLED_FOLDERS_REGEXP','115960xiWyAH','error','259OnvxIb','Settings','../data/settings-types-list','push','10605390ERlCog','Cannot\x20parse\x20childs\x20in\x20','type','calculateCRC32','exists','values','init','paths','MDApiParser','dir','Component\x20\x22','../utils/crc32','../utils','isDir','isPathsEquals','filter','parse','Xml','toString','experiences','META_EXPERIENCES_EXTENSION','find','crc','startsWith','2521647Qfdvqm','Logger','hasChildNodes','readBundledFiles','convertToCleanPaths','../data/child-types-map','waveTemplates','2332455kcyomY','join','readDir','27708AMRztT','utf-8','name','__esModule','extractFilenameFromPath','error\x20occurred\x20when\x20parsing\x20file/folder\x20%s.\x20Original\x20error:\x20','package.xml','split','test','29713FZPWcu','search','CustomLabels','map','META_EXTENSION','includes','(((.+)+)+)+$','constructor','readChildComponents','logger','default','readFile','../utils/xml','1265TTHNhE','files','36lKfrLV','../../../../core','readComponentFiles','catch','relative','all'];a150_0x59bc=function(){return _0x18c3c1;};return a150_0x59bc();}const a150_0xcdc6b4=a150_0x1f91;(function(_0x4f2a71,_0x29982a){const _0x2e02a1=a150_0x1f91,_0x1a7303=_0x4f2a71();while(!![]){try{const _0x5cbd92=parseInt(_0x2e02a1(0x1f7))/0x1*(parseInt(_0x2e02a1(0x206))/0x2)+parseInt(_0x2e02a1(0x1eb))/0x3+parseInt(_0x2e02a1(0x1ee))/0x4*(-parseInt(_0x2e02a1(0x204))/0x5)+parseInt(_0x2e02a1(0x21f))/0x6+parseInt(_0x2e02a1(0x21b))/0x7*(parseInt(_0x2e02a1(0x219))/0x8)+-parseInt(_0x2e02a1(0x1e4))/0x9+-parseInt(_0x2e02a1(0x20e))/0xa;if(_0x5cbd92===_0x29982a)break;else _0x1a7303['push'](_0x1a7303['shift']());}catch(_0xc955c0){_0x1a7303['push'](_0x1a7303['shift']());}}}(a150_0x59bc,0xe32a6));const a150_0x460326=(function(){let _0xa3349b=!![];return function(_0x98a85c,_0x7f779b){const _0x46d074=_0xa3349b?function(){const _0x2b27aa=a150_0x1f91;if(_0x7f779b){const _0x2a7b4c=_0x7f779b[_0x2b27aa(0x20c)](_0x98a85c,arguments);return _0x7f779b=null,_0x2a7b4c;}}:function(){};return _0xa3349b=![],_0x46d074;};}()),a150_0x10a301=a150_0x460326(this,function(){const _0x244669=a150_0x1f91;return a150_0x10a301['toString']()[_0x244669(0x1f8)](_0x244669(0x1fd))[_0x244669(0x1de)]()[_0x244669(0x1fe)](a150_0x10a301)[_0x244669(0x1f8)](_0x244669(0x1fd));});a150_0x10a301();'use strict';var __importDefault=this&&this[a150_0xcdc6b4(0x213)]||function(_0x4d992b){const _0x1e6cfc=a150_0xcdc6b4;return _0x4d992b&&_0x4d992b[_0x1e6cfc(0x1f1)]?_0x4d992b:{'default':_0x4d992b};};Object[a150_0xcdc6b4(0x212)](exports,a150_0xcdc6b4(0x1f1),{'value':!![]}),exports[a150_0xcdc6b4(0x1d4)]=void 0x0;const fs_internal_1=require(a150_0xcdc6b4(0x211)),utils_1=require(a150_0xcdc6b4(0x1d8)),path_1=require(a150_0xcdc6b4(0x217)),xml_1=require(a150_0xcdc6b4(0x203)),child_types_map_1=__importDefault(require(a150_0xcdc6b4(0x1e9))),constants_1=require('../../../../constants'),core_1=require(a150_0xcdc6b4(0x207)),git_commit_utils_1=require(a150_0xcdc6b4(0x20d)),crc32_1=require(a150_0xcdc6b4(0x1d7)),folder_types_1=__importDefault(require('../data/folder-types')),settings_types_list_1=__importDefault(require(a150_0xcdc6b4(0x21d))),CHILD_XML_KEYS=Object[a150_0xcdc6b4(0x1d1)](child_types_map_1['default']);class MDApiParser{constructor(_0x43fcff,_0xe83174,_0x36171c){const _0x4da536=a150_0xcdc6b4;this[_0x4da536(0x1d5)]=_0x43fcff,this[_0x4da536(0x216)]=_0x36171c,this[_0x4da536(0x200)]=new core_1[(_0x4da536(0x1e5))](MDApiParser[_0x4da536(0x1f0)]),this[_0x4da536(0x1fb)]=_0x4da536(0x210),this[_0x4da536(0x1e0)]='.site-meta.xml',this[_0x4da536(0x1d3)]=_0xe83174;}async[a150_0xcdc6b4(0x1ff)](_0x3d2edc){const _0x91d1ab=a150_0xcdc6b4;try{const _0xe01965=await xml_1[_0x91d1ab(0x1dd)][_0x91d1ab(0x1dc)](Object['values'](_0x3d2edc[_0x91d1ab(0x205)])[0x0][_0x91d1ab(0x1de)](_0x91d1ab(0x1ef))),_0x1dce68=CHILD_XML_KEYS[_0x91d1ab(0x1db)](_0x5a0fd1=>xml_1[_0x91d1ab(0x1dd)][_0x91d1ab(0x1e6)](_0xe01965,_0x5a0fd1))[_0x91d1ab(0x215)]((_0x5c072f,_0xa74b36)=>[..._0x5c072f,...xml_1[_0x91d1ab(0x1dd)]['getChildsByName'](_0xe01965,_0xa74b36)],[]);return(0x0,utils_1[_0x91d1ab(0x20f)])(_0x3d2edc,_0xe01965,_0x1dce68);}catch(_0x3c7f33){throw new Error(_0x91d1ab(0x220)+_0x3d2edc['name']+'\x20['+_0x3d2edc[_0x91d1ab(0x221)]+']');}}async[a150_0xcdc6b4(0x1e7)](_0x111a5d){const _0x4e0f1b=a150_0xcdc6b4,_0x22ae0b=(0x0,path_1['join'])(this['dir'],_0x111a5d),_0x164475=_0x111a5d+(_0x111a5d['startsWith'](_0x4e0f1b(0x1df))?this[_0x4e0f1b(0x1e0)]:this[_0x4e0f1b(0x1fb)]),_0x20a07e=await fs_internal_1['FS'][_0x4e0f1b(0x1ed)](_0x22ae0b,!![]),_0x296bfe=await fs_internal_1['FS'][_0x4e0f1b(0x202)]((0x0,path_1[_0x4e0f1b(0x1ec)])(this[_0x4e0f1b(0x1d5)],_0x164475),!![])[_0x4e0f1b(0x209)](()=>null),_0x377ef0={};for(const _0x3c0c47 of _0x20a07e){_0x377ef0[(0x0,path_1[_0x4e0f1b(0x20a)])(this[_0x4e0f1b(0x1d5)],_0x3c0c47)]=await fs_internal_1['FS'][_0x4e0f1b(0x202)](_0x3c0c47,!![]);}return _0x296bfe&&(_0x377ef0[(0x0,path_1[_0x4e0f1b(0x20a)])(this[_0x4e0f1b(0x1d5)],_0x164475)]=_0x296bfe),_0x377ef0;}async['readComponentFiles'](_0x34fb8f){const _0x5c8b5d=a150_0xcdc6b4;let _0x49162e=_0x34fb8f+this['META_EXTENSION'];if(constants_1['BUNDLED_FOLDERS_REGEXP']['test'](_0x34fb8f))return this['readBundledFiles'](_0x34fb8f);if(await fs_internal_1['FS'][_0x5c8b5d(0x1d9)]((0x0,path_1['join'])(this[_0x5c8b5d(0x1d5)],_0x34fb8f))||await fs_internal_1['FS'][_0x5c8b5d(0x223)]((0x0,path_1['join'])(this[_0x5c8b5d(0x1d5)],_0x49162e))){const _0xb4b752=await fs_internal_1['FS'][_0x5c8b5d(0x202)]((0x0,path_1[_0x5c8b5d(0x1ec)])(this[_0x5c8b5d(0x1d5)],_0x49162e),!![]),_0x8b4ba0=await(0x0,utils_1['extractComponentTypeFromFiles'])({'files':{[_0x49162e]:_0xb4b752}})[_0x5c8b5d(0x209)](()=>null);if(_0x8b4ba0&&folder_types_1[_0x5c8b5d(0x201)][_0x5c8b5d(0x1fc)](_0x8b4ba0))return{[_0x49162e]:await fs_internal_1['FS'][_0x5c8b5d(0x202)]((0x0,path_1[_0x5c8b5d(0x1ec)])(this[_0x5c8b5d(0x1d5)],_0x49162e),!![])};}if(!(0x0,path_1['extname'])(_0x34fb8f)&&this[_0x5c8b5d(0x216)]){const _0x585243=_0x34fb8f[_0x5c8b5d(0x1f5)]('/')[0x0],_0x136bda=(await fs_internal_1['FS']['readDir']((0x0,path_1[_0x5c8b5d(0x1ec)])(this['dir'],_0x585243)))[_0x5c8b5d(0x1e1)](_0x3f9ae7=>(0x0,git_commit_utils_1[_0x5c8b5d(0x1da)])(_0x3f9ae7,(0x0,path_1['join'])(this[_0x5c8b5d(0x1d5)],_0x34fb8f)));if(!_0x136bda)throw new Error(_0x5c8b5d(0x1d6)+_0x34fb8f+'\x22\x20not\x20found\x20in\x20\x22'+_0x585243+'\x22');_0x34fb8f=(0x0,path_1['relative'])(this[_0x5c8b5d(0x1d5)],_0x136bda),_0x49162e=_0x34fb8f+this['META_EXTENSION'];}const [_0x3dadb6,_0x568d0f]=await Promise[_0x5c8b5d(0x20b)]([fs_internal_1['FS'][_0x5c8b5d(0x202)]((0x0,path_1['join'])(this[_0x5c8b5d(0x1d5)],_0x34fb8f),!![])['catch'](()=>null),fs_internal_1['FS']['readFile']((0x0,path_1['join'])(this[_0x5c8b5d(0x1d5)],_0x49162e),!![])[_0x5c8b5d(0x209)](()=>null)]);return{..._0x3dadb6?{[_0x34fb8f]:_0x3dadb6}:{},..._0x568d0f?{[_0x49162e]:_0x568d0f}:{}};}async[a150_0xcdc6b4(0x1d2)](){const _0x5f4ec1=a150_0xcdc6b4,_0x558d7d=[...this[_0x5f4ec1(0x1d3)]];if(this['isSFDXProject'])for(const _0x43f26f of _0x558d7d){if(constants_1[_0x5f4ec1(0x218)][_0x5f4ec1(0x1f6)](_0x43f26f))continue;if(await fs_internal_1['FS'][_0x5f4ec1(0x1d9)]((0x0,path_1['join'])(this[_0x5f4ec1(0x1d5)],_0x43f26f))){const _0x479bbf=await fs_internal_1['FS']['readDir']((0x0,path_1[_0x5f4ec1(0x1ec)])(this[_0x5f4ec1(0x1d5)],_0x43f26f),!![]);_0x558d7d[_0x5f4ec1(0x21e)](..._0x479bbf[_0x5f4ec1(0x1fa)](_0x5abf32=>(0x0,path_1['relative'])(this[_0x5f4ec1(0x1d5)],_0x5abf32)));}}this[_0x5f4ec1(0x1d3)]=(0x0,utils_1[_0x5f4ec1(0x1e8)])(_0x558d7d);}async[a150_0xcdc6b4(0x1dc)](){const _0x1d4ecf=a150_0xcdc6b4;await this[_0x1d4ecf(0x1d2)]();const _0x436d4b=[];for(const _0xcc7522 of this[_0x1d4ecf(0x1d3)]){if(_0xcc7522['endsWith'](_0x1d4ecf(0x1f4)))continue;const _0x137230={};try{_0x137230[_0x1d4ecf(0x205)]=await this[_0x1d4ecf(0x208)](_0xcc7522),_0x137230[_0x1d4ecf(0x214)]=constants_1[_0x1d4ecf(0x218)][_0x1d4ecf(0x1f6)](_0xcc7522)?_0xcc7522:(0x0,utils_1['extractFileNameFromFiles'])({'files':_0x137230[_0x1d4ecf(0x205)]}),_0xcc7522[_0x1d4ecf(0x1e3)](_0x1d4ecf(0x1ea))?_0x137230[_0x1d4ecf(0x221)]='WaveTemplateBundle':_0x137230[_0x1d4ecf(0x221)]=await(0x0,utils_1['extractComponentTypeFromFiles'])({'files':_0x137230[_0x1d4ecf(0x205)]});}catch(_0x3752e9){this[_0x1d4ecf(0x200)][_0x1d4ecf(0x21a)](_0x1d4ecf(0x1f3),_0xcc7522,_0x3752e9);continue;}_0x137230['name']=(0x0,utils_1[_0x1d4ecf(0x1f2)])(_0xcc7522),_0x137230[_0x1d4ecf(0x1e2)]=(0x0,crc32_1[_0x1d4ecf(0x222)])(_0x137230);if((0x0,utils_1['isParentComponent'])(_0x137230)){const _0x2722e6=await this[_0x1d4ecf(0x1ff)](_0x137230);_0x436d4b[_0x1d4ecf(0x21e)](..._0x2722e6);}if(_0x137230[_0x1d4ecf(0x221)]===_0x1d4ecf(0x1f9))continue;settings_types_list_1[_0x1d4ecf(0x201)]['includes'](_0x137230[_0x1d4ecf(0x221)])&&(_0x137230[_0x1d4ecf(0x221)]=_0x1d4ecf(0x21c)),_0x436d4b[_0x1d4ecf(0x21e)](_0x137230);}return _0x436d4b;}}exports['MDApiParser']=MDApiParser;