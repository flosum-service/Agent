const a104_0x1b2823=a104_0x4b46;(function(_0x3ddc8d,_0x2f0dd5){const _0x5d4c20=a104_0x4b46,_0x5c61e5=_0x3ddc8d();while(!![]){try{const _0x4e7c7e=-parseInt(_0x5d4c20(0xde))/0x1+parseInt(_0x5d4c20(0x110))/0x2*(parseInt(_0x5d4c20(0x100))/0x3)+parseInt(_0x5d4c20(0xeb))/0x4+parseInt(_0x5d4c20(0xfa))/0x5+-parseInt(_0x5d4c20(0xdd))/0x6*(-parseInt(_0x5d4c20(0x108))/0x7)+-parseInt(_0x5d4c20(0xf2))/0x8*(-parseInt(_0x5d4c20(0xd7))/0x9)+parseInt(_0x5d4c20(0xec))/0xa*(-parseInt(_0x5d4c20(0x102))/0xb);if(_0x4e7c7e===_0x2f0dd5)break;else _0x5c61e5['push'](_0x5c61e5['shift']());}catch(_0x2547ac){_0x5c61e5['push'](_0x5c61e5['shift']());}}}(a104_0x4215,0x5980f));const a104_0x2d2927=(function(){let _0x90f3d3=!![];return function(_0x425594,_0x358490){const _0xe891d9=_0x90f3d3?function(){const _0x177096=a104_0x4b46;if(_0x358490){const _0x446347=_0x358490[_0x177096(0xf4)](_0x425594,arguments);return _0x358490=null,_0x446347;}}:function(){};return _0x90f3d3=![],_0xe891d9;};}()),a104_0x576b78=a104_0x2d2927(this,function(){const _0x482546=a104_0x4b46;return a104_0x576b78[_0x482546(0xfe)]()['search'](_0x482546(0xff))[_0x482546(0xfe)]()[_0x482546(0xf1)](a104_0x576b78)['search'](_0x482546(0xff));});function a104_0x4b46(_0x582edd,_0x405c4b){const _0x18447c=a104_0x4215();return a104_0x4b46=function(_0x576b78,_0x2d2927){_0x576b78=_0x576b78-0xd7;let _0x421539=_0x18447c[_0x576b78];return _0x421539;},a104_0x4b46(_0x582edd,_0x405c4b);}a104_0x576b78();'use strict';var __importDefault=this&&this[a104_0x1b2823(0xf0)]||function(_0x2e6893){const _0x51ad90=a104_0x1b2823;return _0x2e6893&&_0x2e6893[_0x51ad90(0x10c)]?_0x2e6893:{'default':_0x2e6893};};Object[a104_0x1b2823(0xf3)](exports,'__esModule',{'value':!![]}),exports['MDApiWriter']=void 0x0;function a104_0x4215(){const _0x3c5c86=['catch','78142lYgnEl','handleXmlParsingError','length','[InvalidXmlError]\x20An\x20error\x20occurred\x20while\x20proceeding\x20XML\x20','[WriteChild]\x20An\x20error\x20occurred\x20while\x20proceeding\x20component\x20','skipChildErrors','1942371PNopoC','fileName','writeFile','internalLogger','join','have\x20to\x20write\x20%d\x20files','3528EWZrUF','326200QkAMCd','MAX_WRITES_PER_TICK','all','MDApiWriter','nodebuffer','start','Logger','splice','../../../../core','Xml','map','keys','readFile','2748428fQqjUJ','10TNHEOP','writeChild','Zip','[WriteParent]\x20An\x20error\x20occured\x20while\x20proceeding\x20component\x20','__importDefault','constructor','8QmDXDv','defineProperty','apply','parse','sourceDir','readZip','default','convertToString','3120900qWoRAO','async','parentComponents','../data/child-types','toString','(((.+)+)+)+$','12JzBJNE','text','17138033riOpCZ','includes','fileType','../utils/zip','exists','makeDir','6755pjurcE','components','].\x20Original\x20error:\x20','files','__esModule','body','writeParent'];a104_0x4215=function(){return _0x3c5c86;};return a104_0x4215();}const path_1=__importDefault(require('path')),core_1=require(a104_0x1b2823(0xe6)),fs_internal_1=require('../../internal/fs.internal'),invalid_xml_error_1=require('../errors/invalid-xml.error'),xml_1=require('../utils/xml'),zip_1=require(a104_0x1b2823(0x105)),child_types_1=__importDefault(require(a104_0x1b2823(0xfd)));class MDApiWriter{constructor({components:_0xa08fc5,sourceDir:_0x4cbbb1,skipChildErrors:_0x41dc4d}){const _0x5e33de=a104_0x1b2823;this[_0x5e33de(0xdf)]=0x64,this[_0x5e33de(0xfc)]={},this[_0x5e33de(0xda)]=new core_1[(_0x5e33de(0xe4))](MDApiWriter['name']),this[_0x5e33de(0x109)]=_0xa08fc5,this[_0x5e33de(0xf6)]=_0x4cbbb1,this[_0x5e33de(0x115)]=_0x41dc4d;}async['readZip'](_0x42cdf6,_0x13d197=![]){const _0x5ff05b=a104_0x1b2823,_0x23910a=await zip_1[_0x5ff05b(0xee)]['unzip'](_0x42cdf6),_0x194f27=[];for(const _0x792e51 of Object[_0x5ff05b(0xe9)](_0x23910a[_0x5ff05b(0x10b)])){!_0x23910a[_0x5ff05b(0x10b)][_0x792e51]['dir']&&_0x194f27['push']({'filename':_0x792e51,'body':await _0x23910a[_0x5ff05b(0x10b)][_0x792e51][_0x5ff05b(0xfb)](_0x13d197?_0x5ff05b(0xe2):_0x5ff05b(0x101))});}return _0x194f27;}async['writeParent'](_0x165ab8){const _0x30a4ba=a104_0x1b2823;try{const _0x4fab38=await this[_0x30a4ba(0xf7)](_0x165ab8['body'],!![]);await Promise[_0x30a4ba(0xe0)](_0x4fab38[_0x30a4ba(0xe8)](({filename:_0x9b5f7f,body:_0x322208})=>fs_internal_1['FS'][_0x30a4ba(0xd9)](path_1[_0x30a4ba(0xf8)][_0x30a4ba(0xdb)](this[_0x30a4ba(0xf6)],_0x9b5f7f),_0x322208)));}catch(_0x47ccd1){throw new Error(_0x30a4ba(0xef)+_0x165ab8[_0x30a4ba(0xd8)]+'\x20['+_0x165ab8['fileType']+_0x30a4ba(0x10a)+_0x47ccd1);}}['handleXmlParsingError'](_0x43be7e,_0x7e9b31){const _0x3c46a9=a104_0x1b2823;throw new invalid_xml_error_1['InvalidXmlError'](_0x3c46a9(0x113)+_0x7e9b31['fileName']+'\x20['+_0x7e9b31[_0x3c46a9(0x104)]+_0x3c46a9(0x10a)+_0x43be7e);}async[a104_0x1b2823(0xed)](_0x26829e){const _0x214f0d=a104_0x1b2823,{filename:_0x83783a,body:_0x23f2f2}=(await this['readZip'](_0x26829e[_0x214f0d(0x10d)]))[0x0];try{if(!this[_0x214f0d(0xfc)][_0x83783a]){const _0x453de7=path_1['default'][_0x214f0d(0xdb)](this[_0x214f0d(0xf6)],_0x83783a);if(await fs_internal_1['FS'][_0x214f0d(0x106)](_0x453de7)){const _0x45d4e5=await fs_internal_1['FS'][_0x214f0d(0xea)](_0x453de7);this[_0x214f0d(0xfc)][_0x83783a]=await xml_1[_0x214f0d(0xe7)][_0x214f0d(0xf5)](_0x45d4e5)[_0x214f0d(0x10f)](_0x44c5cc=>this['handleXmlParsingError'](_0x44c5cc,_0x26829e));}else{this[_0x214f0d(0xfc)][_0x83783a]=await xml_1[_0x214f0d(0xe7)]['parse'](_0x23f2f2)['catch'](_0x3c4683=>this[_0x214f0d(0x111)](_0x3c4683,_0x26829e));return;}}const _0x57ee82=this[_0x214f0d(0xfc)][_0x83783a],_0x8594b6=await xml_1['Xml'][_0x214f0d(0xf5)](_0x23f2f2)[_0x214f0d(0x10f)](_0x5b4ce4=>this[_0x214f0d(0x111)](_0x5b4ce4,_0x26829e));xml_1[_0x214f0d(0xe7)]['replaceOrAppend'](_0x57ee82,_0x8594b6);}catch(_0x3a8361){if(_0x3a8361 instanceof invalid_xml_error_1['InvalidXmlError']){if(this['skipChildErrors'])return;else throw _0x3a8361;}throw new Error(_0x214f0d(0x114)+_0x26829e[_0x214f0d(0xd8)]+'\x20['+_0x26829e['fileType']+_0x214f0d(0x10a)+_0x3a8361);}}async[a104_0x1b2823(0xe3)](){const _0x136a28=a104_0x1b2823;!await fs_internal_1['FS']['exists'](this[_0x136a28(0xf6)])&&await fs_internal_1['FS'][_0x136a28(0x107)](this['sourceDir']);for(const _0xf9fdaa of this[_0x136a28(0x109)]){!child_types_1[_0x136a28(0xf8)][_0x136a28(0x103)](_0xf9fdaa[_0x136a28(0x104)])?await this[_0x136a28(0x10e)](_0xf9fdaa):await this[_0x136a28(0xed)](_0xf9fdaa);}const _0x5c2b0e=Object[_0x136a28(0xe9)](this[_0x136a28(0xfc)]);this['internalLogger']['log'](_0x136a28(0xdc),this['components'][_0x136a28(0x112)]);while(_0x5c2b0e['length']){const _0x296bca=_0x5c2b0e[_0x136a28(0xe5)](0x0,this[_0x136a28(0xdf)]);for(const _0x5310d3 of _0x296bca){await fs_internal_1['FS'][_0x136a28(0xd9)](path_1[_0x136a28(0xf8)][_0x136a28(0xdb)](this[_0x136a28(0xf6)],_0x5310d3),xml_1[_0x136a28(0xe7)][_0x136a28(0xf9)](this[_0x136a28(0xfc)][_0x5310d3]));}}this[_0x136a28(0xfc)]={};}}exports[a104_0x1b2823(0xe1)]=MDApiWriter;