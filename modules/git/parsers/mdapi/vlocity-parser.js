function a152_0x90d4(){const _0x53298b=['logger','11fOkjuO','crc','Name','7wQSXQN','80BJxuhO','error\x20occurred\x20when\x20parsing\x20file/folder\x20%s.\x20Original\x20error:\x20','entries','sep','find','21thAWte','endsWith','282276YPdcuQ','search','../../internal/fs.internal','readFile','VlocityParser','2686284vYYphw','VLOCITY_DATA_PACK_EXTENSION','relative','readComponent','name','12476ATCpes','log','toString','calculateCRC32','apply','382490GMrnIR','Can\x20not\x20find\x20DataPack\x20file\x20in\x20Vlocity\x20component.','error\x20occurred\x20when\x20parsing\x20file/folder\x20%s\x20to\x20get\x20component\x20name.\x20Original\x20error:\x20','parse','dir','extractFileNameFromFiles','674SdwoER','paths','join','constructor','984865UqxFWi','path','_DataPack.json','./base.parser','1786746tMKUbj','254BkvKyJ','readDir'];a152_0x90d4=function(){return _0x53298b;};return a152_0x90d4();}const a152_0x3b7e89=a152_0x36d1;(function(_0x5bfe63,_0x3cecb0){const _0x1025cf=a152_0x36d1,_0x4c7588=_0x5bfe63();while(!![]){try{const _0x4614cb=-parseInt(_0x1025cf(0xfe))/0x1*(parseInt(_0x1025cf(0x107))/0x2)+-parseInt(_0x1025cf(0xe7))/0x3*(-parseInt(_0x1025cf(0xf3))/0x4)+parseInt(_0x1025cf(0x102))/0x5+-parseInt(_0x1025cf(0x106))/0x6*(parseInt(_0x1025cf(0xe1))/0x7)+-parseInt(_0x1025cf(0xe2))/0x8*(-parseInt(_0x1025cf(0xe9))/0x9)+-parseInt(_0x1025cf(0xf8))/0xa+parseInt(_0x1025cf(0x10a))/0xb*(parseInt(_0x1025cf(0xee))/0xc);if(_0x4614cb===_0x3cecb0)break;else _0x4c7588['push'](_0x4c7588['shift']());}catch(_0x496e75){_0x4c7588['push'](_0x4c7588['shift']());}}}(a152_0x90d4,0x51b49));const a152_0x3feacc=(function(){let _0xb65184=!![];return function(_0x4d1aa9,_0x32ec2e){const _0x4ba28f=_0xb65184?function(){const _0x289ce3=a152_0x36d1;if(_0x32ec2e){const _0x28a281=_0x32ec2e[_0x289ce3(0xf7)](_0x4d1aa9,arguments);return _0x32ec2e=null,_0x28a281;}}:function(){};return _0xb65184=![],_0x4ba28f;};}()),a152_0x5aabb2=a152_0x3feacc(this,function(){const _0x264532=a152_0x36d1;return a152_0x5aabb2['toString']()[_0x264532(0xea)]('(((.+)+)+)+$')['toString']()[_0x264532(0x101)](a152_0x5aabb2)['search']('(((.+)+)+)+$');});a152_0x5aabb2();'use strict';Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a152_0x3b7e89(0xed)]=void 0x0;const base_parser_1=require(a152_0x3b7e89(0x105)),fs_internal_1=require(a152_0x3b7e89(0xeb)),crc32_1=require('../utils/crc32'),path_1=require(a152_0x3b7e89(0x103));class VlocityParser extends base_parser_1['BaseParser']{constructor(_0x1a1fc1,_0x24c9e){const _0xea6549=a152_0x3b7e89;super(VlocityParser[_0xea6549(0xf2)],_0x1a1fc1,_0x24c9e),this[_0xea6549(0xef)]=_0xea6549(0x104);}async[a152_0x3b7e89(0xf1)](_0x134993){const _0x267805=a152_0x3b7e89,_0x5f1cf4=(0x0,path_1[_0x267805(0x100)])(this[_0x267805(0xfc)],_0x134993),_0xa5b7ab=await fs_internal_1['FS'][_0x267805(0x108)](_0x5f1cf4,!![]),_0x30446e={};for(const _0x2f2159 of _0xa5b7ab){_0x30446e[(0x0,path_1[_0x267805(0xf0)])(this[_0x267805(0xfc)],_0x2f2159)['replace'](/\\/g,'/')]=await fs_internal_1['FS'][_0x267805(0xec)](_0x2f2159,!![]);}return _0x30446e;}['extractFileNameFromFiles']({files:_0x505b0d}){const _0x2fd923=a152_0x3b7e89,_0x55ea19=Object[_0x2fd923(0xe4)](_0x505b0d)[_0x2fd923(0xe6)](([_0x348142])=>_0x348142[_0x2fd923(0xe8)](this[_0x2fd923(0xef)]));if(!_0x55ea19)throw new Error(_0x2fd923(0xf9));const _0xef5c16=JSON[_0x2fd923(0xfb)](_0x55ea19[0x1][_0x2fd923(0xf5)]());return _0xef5c16[_0x2fd923(0xe0)];}async[a152_0x3b7e89(0xfb)](){const _0x116751=a152_0x3b7e89,_0x1ac5e9=this[_0x116751(0xff)][0x0],[_0x1ca701,_0x428621]=_0x1ac5e9['split'](path_1[_0x116751(0xe5)]);let _0x26f029,_0xe0166d=_0x428621;try{_0x26f029=await this[_0x116751(0xf1)](_0x1ac5e9);}catch(_0x3d8ed9){return this[_0x116751(0x109)]['error'](_0x116751(0xe3),_0x1ac5e9,_0x3d8ed9),[];}try{_0xe0166d=this[_0x116751(0xfd)]({'files':_0x26f029});}catch(_0x45a5b5){this[_0x116751(0x109)][_0x116751(0xf4)](_0x116751(0xfa),_0x1ac5e9,_0x45a5b5);}const _0x15e7c9={'files':_0x26f029,'vlocityComponentName':_0xe0166d,'filePath':_0x1ac5e9,'type':_0x1ca701,'name':_0x428621,'crc':'','isVlocityComponent':!![]},_0x111b05=(0x0,crc32_1[_0x116751(0xf6)])(_0x15e7c9);return _0x15e7c9[_0x116751(0x10b)]=_0x111b05,[_0x15e7c9];}}function a152_0x36d1(_0x5bac79,_0x128946){const _0x1fbc8b=a152_0x90d4();return a152_0x36d1=function(_0x5aabb2,_0x3feacc){_0x5aabb2=_0x5aabb2-0xe0;let _0x90d425=_0x1fbc8b[_0x5aabb2];return _0x90d425;},a152_0x36d1(_0x5bac79,_0x128946);}exports[a152_0x3b7e89(0xed)]=VlocityParser;