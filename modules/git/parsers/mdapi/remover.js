function a151_0x29ba(_0x3beaa3,_0x22713a){const _0x3531dd=a151_0x4a34();return a151_0x29ba=function(_0x49224b,_0x1bd328){_0x49224b=_0x49224b-0xbc;let _0x4a3401=_0x3531dd[_0x49224b];return _0x4a3401;},a151_0x29ba(_0x3beaa3,_0x22713a);}const a151_0x5180a4=a151_0x29ba;(function(_0x194cdd,_0x394d8b){const _0x19dbad=a151_0x29ba,_0x22f0b7=_0x194cdd();while(!![]){try{const _0x13e1e8=parseInt(_0x19dbad(0xf7))/0x1+parseInt(_0x19dbad(0xdb))/0x2+-parseInt(_0x19dbad(0xda))/0x3*(parseInt(_0x19dbad(0xf5))/0x4)+parseInt(_0x19dbad(0xc3))/0x5*(parseInt(_0x19dbad(0xf2))/0x6)+parseInt(_0x19dbad(0xc5))/0x7+-parseInt(_0x19dbad(0xcf))/0x8*(-parseInt(_0x19dbad(0xc9))/0x9)+parseInt(_0x19dbad(0xf0))/0xa*(-parseInt(_0x19dbad(0xe4))/0xb);if(_0x13e1e8===_0x394d8b)break;else _0x22f0b7['push'](_0x22f0b7['shift']());}catch(_0x5ee907){_0x22f0b7['push'](_0x22f0b7['shift']());}}}(a151_0x4a34,0x6e908));const a151_0x1bd328=(function(){let _0x1cd147=!![];return function(_0x2ca632,_0xfa9dd1){const _0x33abec=_0x1cd147?function(){const _0xc9201c=a151_0x29ba;if(_0xfa9dd1){const _0x44148a=_0xfa9dd1[_0xc9201c(0xf9)](_0x2ca632,arguments);return _0xfa9dd1=null,_0x44148a;}}:function(){};return _0x1cd147=![],_0x33abec;};}()),a151_0x49224b=a151_0x1bd328(this,function(){const _0x527f97=a151_0x29ba;return a151_0x49224b[_0x527f97(0xe1)]()[_0x527f97(0xc4)](_0x527f97(0xdc))[_0x527f97(0xe1)]()[_0x527f97(0xdd)](a151_0x49224b)[_0x527f97(0xc4)]('(((.+)+)+)+$');});a151_0x49224b();'use strict';var __importDefault=this&&this[a151_0x5180a4(0xe9)]||function(_0x535f3d){return _0x535f3d&&_0x535f3d['__esModule']?_0x535f3d:{'default':_0x535f3d};};Object[a151_0x5180a4(0xf4)](exports,a151_0x5180a4(0xe3),{'value':!![]}),exports[a151_0x5180a4(0xe7)]=void 0x0;const fs_internal_1=require(a151_0x5180a4(0xce)),core_1=require(a151_0x5180a4(0xed)),xml_v2_1=require(a151_0x5180a4(0xd9)),child_types_1=__importDefault(require(a151_0x5180a4(0xd3))),child_types_map_1=__importDefault(require(a151_0x5180a4(0xe8))),path_1=__importDefault(require('path'));class MDApiRemover{constructor(_0x181237,_0xa06808){const _0x52ba99=a151_0x5180a4;this[_0x52ba99(0xd6)]=_0x181237,this[_0x52ba99(0xd8)]=_0xa06808,this['META_EXTENSION']=_0x52ba99(0xc1),this[_0x52ba99(0xe5)]=_0x52ba99(0xca),this[_0x52ba99(0xdf)]=0x64,this[_0x52ba99(0xea)]=new core_1[(_0x52ba99(0xfb))](MDApiRemover[_0x52ba99(0xbc)]),this[_0x52ba99(0xc7)]={};}async[a151_0x5180a4(0xd2)](_0x3ef915){const _0x1741ec=a151_0x5180a4,_0x381116=path_1[_0x1741ec(0xf8)][_0x1741ec(0xf6)](this[_0x1741ec(0xd8)],_0x3ef915[_0x1741ec(0xbd)]),_0x373429=path_1['default']['join'](this['sourceDir'],''+_0x3ef915['path']+this['META_EXTENSION']);this[_0x1741ec(0xc7)][_0x3ef915['path']]&&delete this[_0x1741ec(0xc7)][_0x3ef915[_0x1741ec(0xbd)]];const _0x2c09a3=await fs_internal_1['FS'][_0x1741ec(0xc8)](_0x381116)[_0x1741ec(0xc2)](()=>![]);if(_0x2c09a3){this[_0x1741ec(0xea)][_0x1741ec(0xef)](_0x1741ec(0xd5),_0x381116,_0x3ef915['type']),await fs_internal_1['FS']['removeDir'](_0x381116);_0x3ef915[_0x1741ec(0xd4)]==='ExperienceBundle'?await fs_internal_1['FS'][_0x1741ec(0xd0)](''+_0x381116+this[_0x1741ec(0xe5)])[_0x1741ec(0xc2)](()=>void 0x0):(this[_0x1741ec(0xea)][_0x1741ec(0xef)](_0x1741ec(0xcd),_0x381116,_0x3ef915[_0x1741ec(0xd4)]),await fs_internal_1['FS'][_0x1741ec(0xd0)](''+_0x381116+this[_0x1741ec(0xc0)])[_0x1741ec(0xc2)](()=>void 0x0));return;}this[_0x1741ec(0xea)]['log']('remove\x20component\x20\x20%s\x20[%s]',_0x381116,_0x3ef915[_0x1741ec(0xd4)]),await Promise[_0x1741ec(0xee)]([fs_internal_1['FS'][_0x1741ec(0xd0)](_0x381116),fs_internal_1['FS']['removeFile'](_0x373429)]);}async['removeChild'](_0x1ab749){const _0x404197=a151_0x5180a4,{fileName:_0x77d0e,type:_0x5b01ed,path:_0x55ff28}=_0x1ab749,_0x5caab3=child_types_map_1[_0x404197(0xf8)][_0x5b01ed];if(!_0x5caab3)throw new Error('Unknown\x20child\x20type\x20'+_0x5b01ed);if(!this[_0x404197(0xc7)][_0x55ff28]){const _0x43d441=path_1[_0x404197(0xf8)][_0x404197(0xf6)](this['sourceDir'],_0x55ff28),_0x5ac757=await fs_internal_1['FS']['exists'](_0x43d441);if(!_0x5ac757)return;const _0x86ff4c=await fs_internal_1['FS']['readFile'](_0x43d441);this[_0x404197(0xc7)][_0x55ff28]=await xml_v2_1['XmlV2']['parse'](_0x86ff4c);}const _0x1e7ebc=this['parentComponents'][_0x55ff28],_0x57dfc5=_0x77d0e[_0x404197(0xde)]('.')[_0x404197(0xd7)]();xml_v2_1['XmlV2'][_0x404197(0xcc)](_0x1e7ebc,_0x5caab3,_0x57dfc5||_0x77d0e),xml_v2_1[_0x404197(0xec)]['isEmptyXml'](_0x1e7ebc)?(this[_0x404197(0xea)][_0x404197(0xef)](_0x404197(0xf1),_0x1ab749[_0x404197(0xbd)],_0x1ab749['fileName']),await this['removeParent'](_0x1ab749),delete this[_0x404197(0xc7)][_0x55ff28]):this[_0x404197(0xc7)][_0x55ff28]=_0x1e7ebc;}async[a151_0x5180a4(0xd1)](){const _0x18280f=a151_0x5180a4;!await fs_internal_1['FS'][_0x18280f(0xc6)](this[_0x18280f(0xd8)])&&await fs_internal_1['FS'][_0x18280f(0xe0)](this[_0x18280f(0xd8)]);for(const _0x21b29d of this[_0x18280f(0xd6)]){!child_types_1[_0x18280f(0xf8)][_0x18280f(0xcb)](_0x21b29d[_0x18280f(0xd4)])?(this[_0x18280f(0xea)][_0x18280f(0xef)]('remove\x20parent\x20component\x20%s\x20[%s]',_0x21b29d['fileName'],_0x21b29d['type']),await this[_0x18280f(0xd2)](_0x21b29d)):(this[_0x18280f(0xea)][_0x18280f(0xef)](_0x18280f(0xfc),_0x21b29d[_0x18280f(0xfa)],_0x21b29d[_0x18280f(0xd4)]),await this[_0x18280f(0xe2)](_0x21b29d));}const _0x4150c0=Object[_0x18280f(0xf3)](this[_0x18280f(0xc7)]);this['logger']['log'](_0x18280f(0xbe),this[_0x18280f(0xd6)][_0x18280f(0xe6)]);while(_0x4150c0['length']){const _0x2ccdad=_0x4150c0[_0x18280f(0xeb)](0x0,this[_0x18280f(0xdf)]);for(const _0x5f559f of _0x2ccdad){await fs_internal_1['FS'][_0x18280f(0xbf)](path_1[_0x18280f(0xf8)][_0x18280f(0xf6)](this[_0x18280f(0xd8)],_0x5f559f),xml_v2_1['XmlV2'][_0x18280f(0xfd)](this[_0x18280f(0xc7)][_0x5f559f]));}}this[_0x18280f(0xc7)]={};}}function a151_0x4a34(){const _0x12307e=['have\x20to\x20update\x20%d\x20files','writeFile','META_EXTENSION','-meta.xml','catch','25HEDAXS','search','5248831JVhVzs','exists','parentComponents','isDir','1148751gSCKBz','site-meta.xml','includes','removeAt','remove\x20component\x20directory\x20%s\x20[%s]\x20meta\x20file','../../internal/fs.internal','40dwltkR','removeFile','start','removeParent','../data/child-types','type','remove\x20component\x20directory\x20%s\x20[%s]','components','pop','sourceDir','../utils/xml-v2','2654352NZhSuK','1268960phWdYq','(((.+)+)+)+$','constructor','split','MAX_WRITES_PER_TICK','makeDir','toString','removeChild','__esModule','22UwUKGv','META_EXPERIENCE_BUNDLE','length','MDApiRemover','../data/child-types-map','__importDefault','logger','splice','XmlV2','../../../../core','all','log','10210040wPsguN','remove\x20empty\x20parent\x20component\x20file\x20%s\x20[%s]','851952RLVUMg','keys','defineProperty','4EWHoMy','join','647196kELpBt','default','apply','fileName','Logger','remove\x20child\x20component\x20%s\x20[%s]','convertToString','name','path'];a151_0x4a34=function(){return _0x12307e;};return a151_0x4a34();}exports['MDApiRemover']=MDApiRemover;