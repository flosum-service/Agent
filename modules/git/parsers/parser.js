const a182_0x6c624c=a182_0x44b9;(function(_0x19937d,_0x3e30e5){const _0x533b96=a182_0x44b9,_0x36e527=_0x19937d();while(!![]){try{const _0x5d9c24=parseInt(_0x533b96(0x221))/0x1+-parseInt(_0x533b96(0x214))/0x2+parseInt(_0x533b96(0x1f4))/0x3*(-parseInt(_0x533b96(0x22d))/0x4)+-parseInt(_0x533b96(0x239))/0x5+parseInt(_0x533b96(0x218))/0x6+parseInt(_0x533b96(0x1f9))/0x7+parseInt(_0x533b96(0x20c))/0x8;if(_0x5d9c24===_0x3e30e5)break;else _0x36e527['push'](_0x36e527['shift']());}catch(_0x106baf){_0x36e527['push'](_0x36e527['shift']());}}}(a182_0x4ff0,0x4cd04));const a182_0x2334ee=(function(){let _0x3145e5=!![];return function(_0x851cc5,_0x378842){const _0x5bba47=_0x3145e5?function(){const _0x4d92d1=a182_0x44b9;if(_0x378842){const _0x281b24=_0x378842[_0x4d92d1(0x21e)](_0x851cc5,arguments);return _0x378842=null,_0x281b24;}}:function(){};return _0x3145e5=![],_0x5bba47;};}()),a182_0x50cbcd=a182_0x2334ee(this,function(){const _0x51d154=a182_0x44b9;return a182_0x50cbcd[_0x51d154(0x20d)]()['search']('(((.+)+)+)+$')[_0x51d154(0x20d)]()[_0x51d154(0x226)](a182_0x50cbcd)['search'](_0x51d154(0x21c));});a182_0x50cbcd();'use strict';var __importDefault=this&&this[a182_0x6c624c(0x22c)]||function(_0x290c92){const _0x452208=a182_0x6c624c;return _0x290c92&&_0x290c92[_0x452208(0x22f)]?_0x290c92:{'default':_0x290c92};};function a182_0x44b9(_0x2030f7,_0x256fb6){const _0x58ff37=a182_0x4ff0();return a182_0x44b9=function(_0x50cbcd,_0x2334ee){_0x50cbcd=_0x50cbcd-0x1eb;let _0x4ff01e=_0x58ff37[_0x50cbcd];return _0x4ff01e;},a182_0x44b9(_0x2030f7,_0x256fb6);}Object['defineProperty'](exports,a182_0x6c624c(0x22f),{'value':!![]}),exports[a182_0x6c624c(0x231)]=void 0x0;const fs_internal_1=require(a182_0x6c624c(0x222)),utils_1=require(a182_0x6c624c(0x20a)),path_1=require(a182_0x6c624c(0x236)),xml_1=require(a182_0x6c624c(0x1f8)),child_types_map_1=__importDefault(require('./data/child-types-map')),constants_1=require('../../../constants'),core_1=require(a182_0x6c624c(0x1fb)),git_commit_utils_1=require(a182_0x6c624c(0x1f3)),crc32_1=require(a182_0x6c624c(0x23a)),folder_types_1=__importDefault(require(a182_0x6c624c(0x232))),settings_types_list_1=__importDefault(require(a182_0x6c624c(0x200))),CHILD_XML_KEYS=Object[a182_0x6c624c(0x1fd)](child_types_map_1['default']);class MDApiParser{constructor(_0x513e5f,_0x5af08f,_0x29414e){const _0xe70cea=a182_0x6c624c;this[_0xe70cea(0x20e)]=_0x513e5f,this[_0xe70cea(0x219)]=_0x29414e,this[_0xe70cea(0x21b)]=new core_1[(_0xe70cea(0x210))](MDApiParser[_0xe70cea(0x1ec)]),this[_0xe70cea(0x205)]=_0xe70cea(0x20f),this[_0xe70cea(0x22a)]=_0xe70cea(0x216),this[_0xe70cea(0x234)]=_0x5af08f;}async[a182_0x6c624c(0x1f0)](_0x3a947d){const _0x1aaac8=a182_0x6c624c;try{const _0x4c98f3=await xml_1[_0x1aaac8(0x202)][_0x1aaac8(0x235)](Object[_0x1aaac8(0x1fd)](_0x3a947d['files'])[0x0][_0x1aaac8(0x20d)](_0x1aaac8(0x1ee))),_0x2b94e4=CHILD_XML_KEYS[_0x1aaac8(0x237)](_0x26bb8f=>xml_1[_0x1aaac8(0x202)]['hasChildNodes'](_0x4c98f3,_0x26bb8f))['reduce']((_0x2c6a13,_0x2e88fd)=>[..._0x2c6a13,...xml_1['Xml'][_0x1aaac8(0x21d)](_0x4c98f3,_0x2e88fd)],[]);return(0x0,utils_1[_0x1aaac8(0x1f6)])(_0x3a947d,_0x4c98f3,_0x2b94e4);}catch(_0x5570ca){throw new Error(_0x1aaac8(0x220)+_0x3a947d[_0x1aaac8(0x1ec)]+'\x20['+_0x3a947d[_0x1aaac8(0x224)]+']');}}async[a182_0x6c624c(0x1f2)](_0x36dede){const _0x17d3b9=a182_0x6c624c,_0xa87bd9=(0x0,path_1[_0x17d3b9(0x21f)])(this['dir'],_0x36dede),_0x4a5a52=_0x36dede+(_0x36dede[_0x17d3b9(0x1fe)](_0x17d3b9(0x211))?this[_0x17d3b9(0x22a)]:this[_0x17d3b9(0x205)]),_0x4150f9=await fs_internal_1['FS'][_0x17d3b9(0x213)](_0xa87bd9,!![]),_0x3bb5ed=await fs_internal_1['FS'][_0x17d3b9(0x21a)]((0x0,path_1['join'])(this[_0x17d3b9(0x20e)],_0x4a5a52),!![])[_0x17d3b9(0x206)](()=>null),_0xe439bf={};for(const _0x530bb1 of _0x4150f9){_0xe439bf[(0x0,path_1['relative'])(this[_0x17d3b9(0x20e)],_0x530bb1)]=await fs_internal_1['FS'][_0x17d3b9(0x21a)](_0x530bb1,!![]);}return _0x3bb5ed&&(_0xe439bf[(0x0,path_1[_0x17d3b9(0x1ff)])(this[_0x17d3b9(0x20e)],_0x4a5a52)]=_0x3bb5ed),_0xe439bf;}async['readComponentFiles'](_0x29b5b4){const _0x372ada=a182_0x6c624c;let _0x3561ba=_0x29b5b4+this['META_EXTENSION'];if(constants_1[_0x372ada(0x208)][_0x372ada(0x23b)](_0x29b5b4))return this[_0x372ada(0x1f2)](_0x29b5b4);if(await fs_internal_1['FS'][_0x372ada(0x23c)]((0x0,path_1[_0x372ada(0x21f)])(this[_0x372ada(0x20e)],_0x29b5b4))||await fs_internal_1['FS']['exists']((0x0,path_1[_0x372ada(0x21f)])(this[_0x372ada(0x20e)],_0x3561ba))){const _0x428eb2=await fs_internal_1['FS'][_0x372ada(0x21a)]((0x0,path_1['join'])(this[_0x372ada(0x20e)],_0x3561ba),!![]),_0x1e8b9a=await(0x0,utils_1[_0x372ada(0x1eb)])({'files':{[_0x3561ba]:_0x428eb2}})['catch'](()=>null);if(_0x1e8b9a&&folder_types_1[_0x372ada(0x238)][_0x372ada(0x1ed)](_0x1e8b9a))return{[_0x3561ba]:await fs_internal_1['FS'][_0x372ada(0x21a)]((0x0,path_1['join'])(this[_0x372ada(0x20e)],_0x3561ba),!![])};}if(!(0x0,path_1[_0x372ada(0x1f1)])(_0x29b5b4)&&this[_0x372ada(0x219)]){const _0x1e8b1d=_0x29b5b4['split']('/')[0x0],_0x286bf4=(await fs_internal_1['FS'][_0x372ada(0x213)]((0x0,path_1['join'])(this[_0x372ada(0x20e)],_0x1e8b1d)))[_0x372ada(0x203)](_0x3b09d2=>(0x0,git_commit_utils_1['isPathsEquals'])(_0x3b09d2,(0x0,path_1[_0x372ada(0x21f)])(this[_0x372ada(0x20e)],_0x29b5b4)));if(!_0x286bf4)throw new Error(_0x372ada(0x223)+_0x29b5b4+_0x372ada(0x1fa)+_0x1e8b1d+'\x22');_0x29b5b4=(0x0,path_1[_0x372ada(0x1ff)])(this[_0x372ada(0x20e)],_0x286bf4),_0x3561ba=_0x29b5b4+this[_0x372ada(0x205)];}const [_0x178270,_0x30c9f8]=await Promise[_0x372ada(0x230)]([fs_internal_1['FS'][_0x372ada(0x21a)]((0x0,path_1[_0x372ada(0x21f)])(this[_0x372ada(0x20e)],_0x29b5b4),!![])['catch'](()=>null),fs_internal_1['FS'][_0x372ada(0x21a)]((0x0,path_1[_0x372ada(0x21f)])(this[_0x372ada(0x20e)],_0x3561ba),!![])[_0x372ada(0x206)](()=>null)]);return{..._0x178270?{[_0x29b5b4]:_0x178270}:{},..._0x30c9f8?{[_0x3561ba]:_0x30c9f8}:{}};}async['init'](){const _0x223c7d=a182_0x6c624c,_0x2e76b8=[...this[_0x223c7d(0x234)]];if(this[_0x223c7d(0x219)])for(const _0x19a48b of _0x2e76b8){if(constants_1['BUNDLED_FOLDERS_REGEXP'][_0x223c7d(0x23b)](_0x19a48b))continue;if(await fs_internal_1['FS'][_0x223c7d(0x23c)]((0x0,path_1['join'])(this[_0x223c7d(0x20e)],_0x19a48b))){const _0x7c6d55=await fs_internal_1['FS'][_0x223c7d(0x213)]((0x0,path_1[_0x223c7d(0x21f)])(this[_0x223c7d(0x20e)],_0x19a48b),!![]);_0x2e76b8[_0x223c7d(0x22e)](..._0x7c6d55[_0x223c7d(0x227)](_0x443b70=>(0x0,path_1['relative'])(this[_0x223c7d(0x20e)],_0x443b70)));}}this[_0x223c7d(0x234)]=(0x0,utils_1[_0x223c7d(0x204)])(_0x2e76b8);}async[a182_0x6c624c(0x235)](){const _0x2ef431=a182_0x6c624c;await this[_0x2ef431(0x233)]();const _0x6110e8=[];for(const _0x47c05f of this['paths']){if(_0x47c05f[_0x2ef431(0x1fc)](_0x2ef431(0x209)))continue;const _0x59755a={};try{_0x59755a[_0x2ef431(0x1ef)]=await this[_0x2ef431(0x201)](_0x47c05f),_0x59755a[_0x2ef431(0x207)]=constants_1[_0x2ef431(0x208)][_0x2ef431(0x23b)](_0x47c05f)?_0x47c05f:(0x0,utils_1[_0x2ef431(0x229)])({'files':_0x59755a[_0x2ef431(0x1ef)]}),_0x47c05f[_0x2ef431(0x1fe)](_0x2ef431(0x22b))?_0x59755a[_0x2ef431(0x224)]=_0x2ef431(0x217):_0x59755a[_0x2ef431(0x224)]=await(0x0,utils_1[_0x2ef431(0x1eb)])({'files':_0x59755a[_0x2ef431(0x1ef)]});}catch(_0x3beeb6){this['logger']['error'](_0x2ef431(0x1f5),_0x47c05f,_0x3beeb6);continue;}_0x59755a[_0x2ef431(0x1ec)]=(0x0,utils_1[_0x2ef431(0x215)])(_0x47c05f),_0x59755a[_0x2ef431(0x212)]=(0x0,crc32_1[_0x2ef431(0x1f7)])(_0x59755a);if((0x0,utils_1[_0x2ef431(0x228)])(_0x59755a)){const _0x2ac04e=await this['readChildComponents'](_0x59755a);_0x6110e8[_0x2ef431(0x22e)](..._0x2ac04e);}if(_0x59755a['type']===_0x2ef431(0x225))continue;settings_types_list_1[_0x2ef431(0x238)][_0x2ef431(0x1ed)](_0x59755a[_0x2ef431(0x224)])&&(_0x59755a[_0x2ef431(0x224)]=_0x2ef431(0x20b)),_0x6110e8[_0x2ef431(0x22e)](_0x59755a);}return _0x6110e8;}}function a182_0x4ff0(){const _0x1d421c=['apply','join','Cannot\x20parse\x20childs\x20in\x20','236274KrKPzT','../internal/fs.internal','Component\x20\x22','type','CustomLabels','constructor','map','isParentComponent','extractFileNameFromFiles','META_EXPERIENCES_EXTENSION','waveTemplates','__importDefault','175732IVBqZg','push','__esModule','all','MDApiParser','./data/folder-types','init','paths','parse','path','filter','default','379230gTlpQf','./utils/crc32','test','isDir','extractComponentTypeFromFiles','name','includes','utf-8','files','readChildComponents','extname','readBundledFiles','../devops/utils/git-commit.utils','3uwaySV','error\x20occurred\x20when\x20parsing\x20file/folder\x20%s.\x20Original\x20error:\x20','createChildComponentsFromParent','calculateCRC32','./utils/xml','381864Bjuaqb','\x22\x20not\x20found\x20in\x20\x22','../../../core','endsWith','values','startsWith','relative','./data/settings-types-list','readComponentFiles','Xml','find','convertToCleanPaths','META_EXTENSION','catch','filePath','BUNDLED_FOLDERS_REGEXP','package.xml','./utils','Settings','679920WTlRhG','toString','dir','-meta.xml','Logger','experiences','crc','readDir','1011480ZXXdsC','extractFilenameFromPath','.site-meta.xml','WaveTemplateBundle','3385986SYbAAY','isSFDXProject','readFile','logger','(((.+)+)+)+$','getChildsByName'];a182_0x4ff0=function(){return _0x1d421c;};return a182_0x4ff0();}exports[a182_0x6c624c(0x231)]=MDApiParser;