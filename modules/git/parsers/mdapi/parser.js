const a150_0x56d911=a150_0x55b3;(function(_0x42fcf3,_0x30a054){const _0x5d800e=a150_0x55b3,_0x5928ac=_0x42fcf3();while(!![]){try{const _0x2b9e72=-parseInt(_0x5d800e(0x148))/0x1*(-parseInt(_0x5d800e(0x164))/0x2)+parseInt(_0x5d800e(0x13b))/0x3*(-parseInt(_0x5d800e(0x165))/0x4)+-parseInt(_0x5d800e(0x155))/0x5*(-parseInt(_0x5d800e(0x153))/0x6)+-parseInt(_0x5d800e(0x140))/0x7*(parseInt(_0x5d800e(0x142))/0x8)+parseInt(_0x5d800e(0x17f))/0x9+parseInt(_0x5d800e(0x147))/0xa+parseInt(_0x5d800e(0x17c))/0xb;if(_0x2b9e72===_0x30a054)break;else _0x5928ac['push'](_0x5928ac['shift']());}catch(_0x47b8a0){_0x5928ac['push'](_0x5928ac['shift']());}}}(a150_0x8a1b,0x19be8));const a150_0xf6d6b8=(function(){let _0x3ac201=!![];return function(_0x50d675,_0x22194f){const _0x4ae098=_0x3ac201?function(){const _0x2158fd=a150_0x55b3;if(_0x22194f){const _0x26fb38=_0x22194f[_0x2158fd(0x157)](_0x50d675,arguments);return _0x22194f=null,_0x26fb38;}}:function(){};return _0x3ac201=![],_0x4ae098;};}()),a150_0x98739b=a150_0xf6d6b8(this,function(){const _0x197f18=a150_0x55b3;return a150_0x98739b[_0x197f18(0x170)]()[_0x197f18(0x163)](_0x197f18(0x14f))[_0x197f18(0x170)]()[_0x197f18(0x177)](a150_0x98739b)[_0x197f18(0x163)](_0x197f18(0x14f));});a150_0x98739b();function a150_0x55b3(_0x33cd9c,_0x138fc2){const _0x3df6ad=a150_0x8a1b();return a150_0x55b3=function(_0x98739b,_0xf6d6b8){_0x98739b=_0x98739b-0x13b;let _0x8a1bae=_0x3df6ad[_0x98739b];return _0x8a1bae;},a150_0x55b3(_0x33cd9c,_0x138fc2);}'use strict';var __importDefault=this&&this[a150_0x56d911(0x146)]||function(_0x5c88e2){return _0x5c88e2&&_0x5c88e2['__esModule']?_0x5c88e2:{'default':_0x5c88e2};};Object[a150_0x56d911(0x185)](exports,'__esModule',{'value':!![]}),exports[a150_0x56d911(0x17e)]=void 0x0;const fs_internal_1=require(a150_0x56d911(0x172)),utils_1=require(a150_0x56d911(0x166)),path_1=require(a150_0x56d911(0x145)),xml_1=require(a150_0x56d911(0x161)),child_types_map_1=__importDefault(require(a150_0x56d911(0x188))),constants_1=require(a150_0x56d911(0x15d)),core_1=require(a150_0x56d911(0x17a)),git_commit_utils_1=require('../../devops/utils/git-commit.utils'),crc32_1=require('../utils/crc32'),folder_types_1=__importDefault(require(a150_0x56d911(0x15b))),settings_types_list_1=__importDefault(require(a150_0x56d911(0x151))),CHILD_XML_KEYS=Object['values'](child_types_map_1['default']);class MDApiParser{constructor(_0x2dc65b,_0x49767c,_0x52b093){const _0x164518=a150_0x56d911;this['dir']=_0x2dc65b,this[_0x164518(0x17d)]=_0x52b093,this[_0x164518(0x181)]=new core_1[(_0x164518(0x162))](MDApiParser[_0x164518(0x14e)]),this[_0x164518(0x182)]=_0x164518(0x13d),this[_0x164518(0x13c)]='.site-meta.xml',this[_0x164518(0x156)]=_0x49767c;}async[a150_0x56d911(0x16d)](_0x5ce6d9){const _0x4177f5=a150_0x56d911;try{const _0x1acab3=await xml_1['Xml'][_0x4177f5(0x15c)](Object[_0x4177f5(0x15a)](_0x5ce6d9['files'])[0x0]['toString'](_0x4177f5(0x149))),_0x4ce633=CHILD_XML_KEYS['filter'](_0x21c94a=>xml_1[_0x4177f5(0x16a)][_0x4177f5(0x178)](_0x1acab3,_0x21c94a))[_0x4177f5(0x14c)]((_0x47c1b5,_0x24359e)=>[..._0x47c1b5,...xml_1[_0x4177f5(0x16a)][_0x4177f5(0x180)](_0x1acab3,_0x24359e)],[]);return(0x0,utils_1[_0x4177f5(0x186)])(_0x5ce6d9,_0x1acab3,_0x4ce633);}catch(_0xd7acb8){throw new Error('Cannot\x20parse\x20childs\x20in\x20'+_0x5ce6d9[_0x4177f5(0x14e)]+'\x20['+_0x5ce6d9[_0x4177f5(0x174)]+']');}}async[a150_0x56d911(0x179)](_0x2ce3e6){const _0x2c2e57=a150_0x56d911,_0x4aa01e=(0x0,path_1[_0x2c2e57(0x15e)])(this[_0x2c2e57(0x189)],_0x2ce3e6),_0x429a73=_0x2ce3e6+(_0x2ce3e6[_0x2c2e57(0x17b)](_0x2c2e57(0x176))?this['META_EXPERIENCES_EXTENSION']:this[_0x2c2e57(0x182)]),_0x100fc8=await fs_internal_1['FS'][_0x2c2e57(0x160)](_0x4aa01e,!![]),_0x39c3e0=await fs_internal_1['FS'][_0x2c2e57(0x14a)]((0x0,path_1[_0x2c2e57(0x15e)])(this[_0x2c2e57(0x189)],_0x429a73),!![])['catch'](()=>null),_0x262137={};for(const _0xfacd59 of _0x100fc8){_0x262137[(0x0,path_1[_0x2c2e57(0x158)])(this[_0x2c2e57(0x189)],_0xfacd59)]=await fs_internal_1['FS']['readFile'](_0xfacd59,!![]);}return _0x39c3e0&&(_0x262137[(0x0,path_1[_0x2c2e57(0x158)])(this[_0x2c2e57(0x189)],_0x429a73)]=_0x39c3e0),_0x262137;}async[a150_0x56d911(0x16b)](_0x178770){const _0xff8a46=a150_0x56d911;let _0x1f8edb=_0x178770+this[_0xff8a46(0x182)];if(constants_1[_0xff8a46(0x167)][_0xff8a46(0x175)](_0x178770))return this[_0xff8a46(0x179)](_0x178770);if(await fs_internal_1['FS'][_0xff8a46(0x169)]((0x0,path_1['join'])(this[_0xff8a46(0x189)],_0x178770))||await fs_internal_1['FS']['exists']((0x0,path_1[_0xff8a46(0x15e)])(this['dir'],_0x1f8edb))){const _0x3df4ad=await fs_internal_1['FS'][_0xff8a46(0x14a)]((0x0,path_1[_0xff8a46(0x15e)])(this['dir'],_0x1f8edb),!![]),_0x523a62=await(0x0,utils_1['extractComponentTypeFromFiles'])({'files':{[_0x1f8edb]:_0x3df4ad}})[_0xff8a46(0x159)](()=>null);if(_0x523a62&&folder_types_1[_0xff8a46(0x171)]['includes'](_0x523a62))return{[_0x1f8edb]:await fs_internal_1['FS'][_0xff8a46(0x14a)]((0x0,path_1['join'])(this[_0xff8a46(0x189)],_0x1f8edb),!![])};}if(!(0x0,path_1[_0xff8a46(0x15f)])(_0x178770)&&this[_0xff8a46(0x17d)]){const _0x108633=_0x178770[_0xff8a46(0x152)]('/')[0x0],_0x58e908=(await fs_internal_1['FS']['readDir']((0x0,path_1[_0xff8a46(0x15e)])(this[_0xff8a46(0x189)],_0x108633)))['find'](_0x194b3a=>(0x0,git_commit_utils_1[_0xff8a46(0x187)])(_0x194b3a,(0x0,path_1[_0xff8a46(0x15e)])(this[_0xff8a46(0x189)],_0x178770)));if(!_0x58e908)throw new Error(_0xff8a46(0x168)+_0x178770+_0xff8a46(0x183)+_0x108633+'\x22');_0x178770=(0x0,path_1[_0xff8a46(0x158)])(this[_0xff8a46(0x189)],_0x58e908),_0x1f8edb=_0x178770+this[_0xff8a46(0x182)];}const [_0x388f1e,_0x5a7f1b]=await Promise[_0xff8a46(0x14d)]([fs_internal_1['FS'][_0xff8a46(0x14a)]((0x0,path_1[_0xff8a46(0x15e)])(this[_0xff8a46(0x189)],_0x178770),!![])[_0xff8a46(0x159)](()=>null),fs_internal_1['FS'][_0xff8a46(0x14a)]((0x0,path_1[_0xff8a46(0x15e)])(this[_0xff8a46(0x189)],_0x1f8edb),!![])[_0xff8a46(0x159)](()=>null)]);return{..._0x388f1e?{[_0x178770]:_0x388f1e}:{},..._0x5a7f1b?{[_0x1f8edb]:_0x5a7f1b}:{}};}async['init'](){const _0x4c1e92=a150_0x56d911,_0x2346ee=[...this[_0x4c1e92(0x156)]];if(this[_0x4c1e92(0x17d)])for(const _0x3e21a2 of _0x2346ee){if(constants_1[_0x4c1e92(0x167)][_0x4c1e92(0x175)](_0x3e21a2))continue;if(await fs_internal_1['FS'][_0x4c1e92(0x169)]((0x0,path_1[_0x4c1e92(0x15e)])(this[_0x4c1e92(0x189)],_0x3e21a2))){const _0xc088f6=await fs_internal_1['FS'][_0x4c1e92(0x160)]((0x0,path_1['join'])(this[_0x4c1e92(0x189)],_0x3e21a2),!![]);_0x2346ee['push'](..._0xc088f6[_0x4c1e92(0x143)](_0xb2e89e=>(0x0,path_1[_0x4c1e92(0x158)])(this['dir'],_0xb2e89e)));}}this[_0x4c1e92(0x156)]=(0x0,utils_1[_0x4c1e92(0x16c)])(_0x2346ee);}async[a150_0x56d911(0x15c)](){const _0x154c93=a150_0x56d911;await this[_0x154c93(0x13f)]();const _0x221d6f=[];for(const _0x26370b of this[_0x154c93(0x156)]){if(_0x26370b[_0x154c93(0x150)](_0x154c93(0x144)))continue;const _0x5560a7={};try{_0x5560a7[_0x154c93(0x13e)]=await this[_0x154c93(0x16b)](_0x26370b),_0x5560a7[_0x154c93(0x154)]=constants_1[_0x154c93(0x167)][_0x154c93(0x175)](_0x26370b)?_0x26370b:(0x0,utils_1['extractFileNameFromFiles'])({'files':_0x5560a7[_0x154c93(0x13e)]}),_0x26370b[_0x154c93(0x17b)]('waveTemplates')?_0x5560a7[_0x154c93(0x174)]='WaveTemplateBundle':_0x5560a7[_0x154c93(0x174)]=await(0x0,utils_1[_0x154c93(0x16f)])({'files':_0x5560a7['files']});}catch(_0x4b8f91){this[_0x154c93(0x181)][_0x154c93(0x14b)]('error\x20occurred\x20when\x20parsing\x20file/folder\x20%s.\x20Original\x20error:\x20',_0x26370b,_0x4b8f91);continue;}_0x5560a7[_0x154c93(0x14e)]=(0x0,utils_1['extractFilenameFromPath'])(_0x26370b),_0x5560a7[_0x154c93(0x184)]=(0x0,crc32_1['calculateCRC32'])(_0x5560a7);if((0x0,utils_1[_0x154c93(0x16e)])(_0x5560a7)){const _0x1d902e=await this[_0x154c93(0x16d)](_0x5560a7);_0x221d6f['push'](..._0x1d902e);}if(_0x5560a7[_0x154c93(0x174)]==='CustomLabels')continue;settings_types_list_1[_0x154c93(0x171)][_0x154c93(0x173)](_0x5560a7[_0x154c93(0x174)])&&(_0x5560a7[_0x154c93(0x174)]=_0x154c93(0x141)),_0x221d6f['push'](_0x5560a7);}return _0x221d6f;}}exports[a150_0x56d911(0x17e)]=MDApiParser;function a150_0x8a1b(){const _0x527fe5=['logger','META_EXTENSION','\x22\x20not\x20found\x20in\x20\x22','crc','defineProperty','createChildComponentsFromParent','isPathsEquals','../data/child-types-map','dir','597kZCxTf','META_EXPERIENCES_EXTENSION','-meta.xml','files','init','77ifeYoE','Settings','96056ADuNkd','map','package.xml','path','__importDefault','376160SmkRmI','435MnBeiX','utf-8','readFile','error','reduce','all','name','(((.+)+)+)+$','endsWith','../data/settings-types-list','split','34218wwPrGA','filePath','95yRwGtH','paths','apply','relative','catch','values','../data/folder-types','parse','../../../../constants','join','extname','readDir','../utils/xml','Logger','search','38tcFWft','3112OzlDnn','../utils','BUNDLED_FOLDERS_REGEXP','Component\x20\x22','isDir','Xml','readComponentFiles','convertToCleanPaths','readChildComponents','isParentComponent','extractComponentTypeFromFiles','toString','default','../../internal/fs.internal','includes','type','test','experiences','constructor','hasChildNodes','readBundledFiles','../../../../core','startsWith','444774RwUDos','isSFDXProject','MDApiParser','1779075rJCBgR','getChildsByName'];a150_0x8a1b=function(){return _0x527fe5;};return a150_0x8a1b();}