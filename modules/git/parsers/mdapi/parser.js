function a146_0x2486(){const _0x4b736a=['package.xml','hasChildNodes','utf-8','startsWith','readDir','Cannot\x20parse\x20childs\x20in\x20','catch','507262lGxysn','Component\x20\x22','filter','apply','.site-meta.xml','../../../../constants','2045250baSYxW','readChildComponents','284ASFwxc','isPathsEquals','map','test','getChildsByName','__importDefault','9ymdEsz','3899096kcMbGR','type','find','readFile','../utils','createChildComponentsFromParent','values','1397004bvpLrr','../data/folder-types','split','458110hCiFSD','30015nEEiOn','extractComponentTypeFromFiles','parse','error','logger','paths','dir','calculateCRC32','path','CustomLabels','-meta.xml','convertToCleanPaths','\x22\x20not\x20found\x20in\x20\x22','Xml','2uGxaQG','22vPQrzO','init','../data/settings-types-list','isSFDXProject','MDApiParser','extractFilenameFromPath','join','filePath','../../devops/utils/git-commit.utils','toString','constructor','relative','crc','475874LNvpai','isParentComponent','META_EXPERIENCES_EXTENSION','push','default','files','__esModule','extname','readBundledFiles','META_EXTENSION','(((.+)+)+)+$','BUNDLED_FOLDERS_REGEXP','extractFileNameFromFiles','reduce','experiences','error\x20occurred\x20when\x20parsing\x20file/folder\x20%s.\x20Original\x20error:\x20','name','defineProperty','search','Settings','WaveTemplateBundle','isDir'];a146_0x2486=function(){return _0x4b736a;};return a146_0x2486();}const a146_0xee20cc=a146_0xc058;(function(_0x31ac28,_0x117176){const _0xc69f44=a146_0xc058,_0x1b6c7a=_0x31ac28();while(!![]){try{const _0x441a8e=-parseInt(_0xc69f44(0x92))/0x1+parseInt(_0xc69f44(0xd7))/0x2*(parseInt(_0xc69f44(0xc5))/0x3)+-parseInt(_0xc69f44(0xb7))/0x4*(-parseInt(_0xc69f44(0xc9))/0x5)+parseInt(_0xc69f44(0xb5))/0x6+parseInt(_0xc69f44(0xaf))/0x7+-parseInt(_0xc69f44(0xbe))/0x8*(parseInt(_0xc69f44(0xbd))/0x9)+parseInt(_0xc69f44(0xc8))/0xa*(-parseInt(_0xc69f44(0xd8))/0xb);if(_0x441a8e===_0x117176)break;else _0x1b6c7a['push'](_0x1b6c7a['shift']());}catch(_0x1ec0ad){_0x1b6c7a['push'](_0x1b6c7a['shift']());}}}(a146_0x2486,0x3d1e3));const a146_0x1c211e=(function(){let _0x195bfb=!![];return function(_0x3f0826,_0x3d6fbc){const _0x369cd9=_0x195bfb?function(){const _0x271378=a146_0xc058;if(_0x3d6fbc){const _0x27a57b=_0x3d6fbc[_0x271378(0xb2)](_0x3f0826,arguments);return _0x3d6fbc=null,_0x27a57b;}}:function(){};return _0x195bfb=![],_0x369cd9;};}()),a146_0x4e8d8f=a146_0x1c211e(this,function(){const _0x33c3ec=a146_0xc058;return a146_0x4e8d8f[_0x33c3ec(0x8e)]()[_0x33c3ec(0xa4)](_0x33c3ec(0x9c))['toString']()[_0x33c3ec(0x8f)](a146_0x4e8d8f)[_0x33c3ec(0xa4)](_0x33c3ec(0x9c));});function a146_0xc058(_0x5d3d03,_0x319432){const _0x435961=a146_0x2486();return a146_0xc058=function(_0x4e8d8f,_0x1c211e){_0x4e8d8f=_0x4e8d8f-0x89;let _0x24863b=_0x435961[_0x4e8d8f];return _0x24863b;},a146_0xc058(_0x5d3d03,_0x319432);}a146_0x4e8d8f();'use strict';var __importDefault=this&&this[a146_0xee20cc(0xbc)]||function(_0x43538a){const _0x598a17=a146_0xee20cc;return _0x43538a&&_0x43538a[_0x598a17(0x98)]?_0x43538a:{'default':_0x43538a};};Object[a146_0xee20cc(0xa3)](exports,a146_0xee20cc(0x98),{'value':!![]}),exports[a146_0xee20cc(0x89)]=void 0x0;const fs_internal_1=require('../../internal/fs.internal'),utils_1=require(a146_0xee20cc(0xc2)),path_1=require(a146_0xee20cc(0xd1)),xml_1=require('../utils/xml'),child_types_map_1=__importDefault(require('../data/child-types-map')),constants_1=require(a146_0xee20cc(0xb4)),core_1=require('../../../../core'),git_commit_utils_1=require(a146_0xee20cc(0x8d)),crc32_1=require('../utils/crc32'),folder_types_1=__importDefault(require(a146_0xee20cc(0xc6))),settings_types_list_1=__importDefault(require(a146_0xee20cc(0xda))),CHILD_XML_KEYS=Object[a146_0xee20cc(0xc4)](child_types_map_1[a146_0xee20cc(0x96)]);class MDApiParser{constructor(_0x1551f4,_0x553152,_0x4e81da){const _0x3530c4=a146_0xee20cc;this[_0x3530c4(0xcf)]=_0x1551f4,this[_0x3530c4(0xdb)]=_0x4e81da,this[_0x3530c4(0xcd)]=new core_1['Logger'](MDApiParser[_0x3530c4(0xa2)]),this[_0x3530c4(0x9b)]=_0x3530c4(0xd3),this['META_EXPERIENCES_EXTENSION']=_0x3530c4(0xb3),this[_0x3530c4(0xce)]=_0x553152;}async[a146_0xee20cc(0xb6)](_0x567c41){const _0x49a506=a146_0xee20cc;try{const _0x55ca85=await xml_1[_0x49a506(0xd6)][_0x49a506(0xcb)](Object[_0x49a506(0xc4)](_0x567c41[_0x49a506(0x97)])[0x0][_0x49a506(0x8e)](_0x49a506(0xaa))),_0xde34ff=CHILD_XML_KEYS[_0x49a506(0xb1)](_0x44ab60=>xml_1[_0x49a506(0xd6)][_0x49a506(0xa9)](_0x55ca85,_0x44ab60))[_0x49a506(0x9f)]((_0x4d17f7,_0xad2a9a)=>[..._0x4d17f7,...xml_1[_0x49a506(0xd6)][_0x49a506(0xbb)](_0x55ca85,_0xad2a9a)],[]);return(0x0,utils_1[_0x49a506(0xc3)])(_0x567c41,_0x55ca85,_0xde34ff);}catch(_0x303480){throw new Error(_0x49a506(0xad)+_0x567c41['name']+'\x20['+_0x567c41['type']+']');}}async[a146_0xee20cc(0x9a)](_0x5b49d9){const _0x4c9ed3=a146_0xee20cc,_0x581dac=(0x0,path_1[_0x4c9ed3(0x8b)])(this[_0x4c9ed3(0xcf)],_0x5b49d9),_0x4c18ff=_0x5b49d9+(_0x5b49d9[_0x4c9ed3(0xab)](_0x4c9ed3(0xa0))?this[_0x4c9ed3(0x94)]:this['META_EXTENSION']),_0x4a5d8c=await fs_internal_1['FS']['readDir'](_0x581dac,!![]),_0x4c32fb=await fs_internal_1['FS'][_0x4c9ed3(0xc1)]((0x0,path_1[_0x4c9ed3(0x8b)])(this[_0x4c9ed3(0xcf)],_0x4c18ff),!![])[_0x4c9ed3(0xae)](()=>null),_0x2b594e={};for(const _0x5245cc of _0x4a5d8c){_0x2b594e[(0x0,path_1[_0x4c9ed3(0x90)])(this['dir'],_0x5245cc)]=await fs_internal_1['FS'][_0x4c9ed3(0xc1)](_0x5245cc,!![]);}return _0x4c32fb&&(_0x2b594e[(0x0,path_1[_0x4c9ed3(0x90)])(this['dir'],_0x4c18ff)]=_0x4c32fb),_0x2b594e;}async['readComponentFiles'](_0x18e428){const _0x3aa69c=a146_0xee20cc;let _0x5739b4=_0x18e428+this['META_EXTENSION'];if(constants_1[_0x3aa69c(0x9d)][_0x3aa69c(0xba)](_0x18e428))return this[_0x3aa69c(0x9a)](_0x18e428);if(await fs_internal_1['FS'][_0x3aa69c(0xa7)]((0x0,path_1[_0x3aa69c(0x8b)])(this['dir'],_0x18e428))||await fs_internal_1['FS']['exists']((0x0,path_1['join'])(this[_0x3aa69c(0xcf)],_0x5739b4))){const _0x5d973d=await fs_internal_1['FS'][_0x3aa69c(0xc1)]((0x0,path_1[_0x3aa69c(0x8b)])(this['dir'],_0x5739b4),!![]),_0x7516ef=await(0x0,utils_1[_0x3aa69c(0xca)])({'files':{[_0x5739b4]:_0x5d973d}})['catch'](()=>null);if(_0x7516ef&&folder_types_1[_0x3aa69c(0x96)]['includes'](_0x7516ef))return{[_0x5739b4]:await fs_internal_1['FS']['readFile']((0x0,path_1[_0x3aa69c(0x8b)])(this[_0x3aa69c(0xcf)],_0x5739b4),!![])};}if(!(0x0,path_1[_0x3aa69c(0x99)])(_0x18e428)&&this[_0x3aa69c(0xdb)]){const _0x507af0=_0x18e428[_0x3aa69c(0xc7)]('/')[0x0],_0x534a25=(await fs_internal_1['FS'][_0x3aa69c(0xac)]((0x0,path_1[_0x3aa69c(0x8b)])(this[_0x3aa69c(0xcf)],_0x507af0)))[_0x3aa69c(0xc0)](_0x1e7d5e=>(0x0,git_commit_utils_1[_0x3aa69c(0xb8)])(_0x1e7d5e,(0x0,path_1[_0x3aa69c(0x8b)])(this[_0x3aa69c(0xcf)],_0x18e428)));if(!_0x534a25)throw new Error(_0x3aa69c(0xb0)+_0x18e428+_0x3aa69c(0xd5)+_0x507af0+'\x22');_0x18e428=(0x0,path_1[_0x3aa69c(0x90)])(this[_0x3aa69c(0xcf)],_0x534a25),_0x5739b4=_0x18e428+this[_0x3aa69c(0x9b)];}const [_0x481e18,_0x437f7a]=await Promise['all']([fs_internal_1['FS'][_0x3aa69c(0xc1)]((0x0,path_1[_0x3aa69c(0x8b)])(this[_0x3aa69c(0xcf)],_0x18e428),!![])[_0x3aa69c(0xae)](()=>null),fs_internal_1['FS'][_0x3aa69c(0xc1)]((0x0,path_1[_0x3aa69c(0x8b)])(this[_0x3aa69c(0xcf)],_0x5739b4),!![])[_0x3aa69c(0xae)](()=>null)]);return{..._0x481e18?{[_0x18e428]:_0x481e18}:{},..._0x437f7a?{[_0x5739b4]:_0x437f7a}:{}};}async['init'](){const _0x560d5c=a146_0xee20cc,_0x144e24=[...this['paths']];if(this['isSFDXProject'])for(const _0x709679 of _0x144e24){if(constants_1[_0x560d5c(0x9d)][_0x560d5c(0xba)](_0x709679))continue;if(await fs_internal_1['FS'][_0x560d5c(0xa7)]((0x0,path_1[_0x560d5c(0x8b)])(this[_0x560d5c(0xcf)],_0x709679))){const _0x1110d8=await fs_internal_1['FS'][_0x560d5c(0xac)]((0x0,path_1[_0x560d5c(0x8b)])(this[_0x560d5c(0xcf)],_0x709679),!![]);_0x144e24[_0x560d5c(0x95)](..._0x1110d8[_0x560d5c(0xb9)](_0x51fbd2=>(0x0,path_1[_0x560d5c(0x90)])(this[_0x560d5c(0xcf)],_0x51fbd2)));}}this[_0x560d5c(0xce)]=(0x0,utils_1[_0x560d5c(0xd4)])(_0x144e24);}async[a146_0xee20cc(0xcb)](){const _0xcec3da=a146_0xee20cc;await this[_0xcec3da(0xd9)]();const _0x3a4a62=[];for(const _0x29f8be of this[_0xcec3da(0xce)]){if(_0x29f8be['endsWith'](_0xcec3da(0xa8)))continue;const _0x4a0077={};try{_0x4a0077[_0xcec3da(0x97)]=await this['readComponentFiles'](_0x29f8be),_0x4a0077[_0xcec3da(0x8c)]=constants_1[_0xcec3da(0x9d)][_0xcec3da(0xba)](_0x29f8be)?_0x29f8be:(0x0,utils_1[_0xcec3da(0x9e)])({'files':_0x4a0077[_0xcec3da(0x97)]}),_0x29f8be[_0xcec3da(0xab)]('waveTemplates')?_0x4a0077[_0xcec3da(0xbf)]=_0xcec3da(0xa6):_0x4a0077[_0xcec3da(0xbf)]=await(0x0,utils_1[_0xcec3da(0xca)])({'files':_0x4a0077[_0xcec3da(0x97)]});}catch(_0x1699da){this[_0xcec3da(0xcd)][_0xcec3da(0xcc)](_0xcec3da(0xa1),_0x29f8be,_0x1699da);continue;}_0x4a0077[_0xcec3da(0xa2)]=(0x0,utils_1[_0xcec3da(0x8a)])(_0x29f8be),_0x4a0077[_0xcec3da(0x91)]=(0x0,crc32_1[_0xcec3da(0xd0)])(_0x4a0077);if((0x0,utils_1[_0xcec3da(0x93)])(_0x4a0077)){const _0x3e38ab=await this[_0xcec3da(0xb6)](_0x4a0077);_0x3a4a62['push'](..._0x3e38ab);}if(_0x4a0077[_0xcec3da(0xbf)]===_0xcec3da(0xd2))continue;settings_types_list_1[_0xcec3da(0x96)]['includes'](_0x4a0077[_0xcec3da(0xbf)])&&(_0x4a0077[_0xcec3da(0xbf)]=_0xcec3da(0xa5)),_0x3a4a62[_0xcec3da(0x95)](_0x4a0077);}return _0x3a4a62;}}exports[a146_0xee20cc(0x89)]=MDApiParser;