const a182_0x8d744e=a182_0x40bb;(function(_0x41df22,_0x4b5b63){const _0x23ef67=a182_0x40bb,_0x277837=_0x41df22();while(!![]){try{const _0x141a1c=-parseInt(_0x23ef67(0x17e))/0x1*(parseInt(_0x23ef67(0x174))/0x2)+parseInt(_0x23ef67(0x175))/0x3*(parseInt(_0x23ef67(0x164))/0x4)+-parseInt(_0x23ef67(0x17c))/0x5+-parseInt(_0x23ef67(0x168))/0x6+-parseInt(_0x23ef67(0x184))/0x7+-parseInt(_0x23ef67(0x181))/0x8*(parseInt(_0x23ef67(0x170))/0x9)+parseInt(_0x23ef67(0x166))/0xa;if(_0x141a1c===_0x4b5b63)break;else _0x277837['push'](_0x277837['shift']());}catch(_0x5561d2){_0x277837['push'](_0x277837['shift']());}}}(a182_0x6a57,0x91627));const a182_0x353ba1=(function(){let _0x4f33b1=!![];return function(_0xb7dfc0,_0xfc9671){const _0x4a9324=_0x4f33b1?function(){if(_0xfc9671){const _0x403469=_0xfc9671['apply'](_0xb7dfc0,arguments);return _0xfc9671=null,_0x403469;}}:function(){};return _0x4f33b1=![],_0x4a9324;};}()),a182_0xf7e8fd=a182_0x353ba1(this,function(){const _0xcbe36b=a182_0x40bb;return a182_0xf7e8fd[_0xcbe36b(0x18b)]()[_0xcbe36b(0x16f)](_0xcbe36b(0x16a))['toString']()[_0xcbe36b(0x165)](a182_0xf7e8fd)[_0xcbe36b(0x16f)]('(((.+)+)+)+$');});a182_0xf7e8fd();'use strict';function a182_0x6a57(){const _0x1afc65=['58UOTwkF','72759XhvlVv','BaseParser','execute','relative','path','Error\x20occurred\x20when\x20parsing\x20file/folder\x20%s.\x20Original\x20error:\x20','defineProperty','2668335DuUfyi','./base.parser','15334ZCnwcq','find','split','654224VuBJdf','VLOCITY_DATA_PACK_EXTENSION','_DataPack.json','493045EgoxFC','calculateCRC32','logger','entries','name','extractFileNameFromFiles','Error\x20occurred\x20when\x20parsing\x20file/folder\x20%s\x20to\x20get\x20component\x20name.\x20Original\x20error:\x20','toString','endsWith','132xGkdBU','constructor','18164190cSMeFi','replace','4362906UHFnkE','log','(((.+)+)+)+$','join','__esModule','Can\x20not\x20find\x20DataPack\x20file\x20in\x20Vlocity\x20component.','VlocityParser','search','27BKKaqK','readComponent','parse','error'];a182_0x6a57=function(){return _0x1afc65;};return a182_0x6a57();}Object[a182_0x8d744e(0x17b)](exports,a182_0x8d744e(0x16c),{'value':!![]}),exports[a182_0x8d744e(0x16e)]=void 0x0;const base_parser_1=require(a182_0x8d744e(0x17d)),fs_internal_1=require('../internal/fs.internal'),crc32_1=require('./utils/crc32'),path_1=require(a182_0x8d744e(0x179));function a182_0x40bb(_0xd3f683,_0x3697af){const _0x32e95e=a182_0x6a57();return a182_0x40bb=function(_0xf7e8fd,_0x353ba1){_0xf7e8fd=_0xf7e8fd-0x163;let _0x6a575b=_0x32e95e[_0xf7e8fd];return _0x6a575b;},a182_0x40bb(_0xd3f683,_0x3697af);}class VlocityParser extends base_parser_1[a182_0x8d744e(0x176)]{constructor({sourceDir:_0x35faf4,paths:_0x281d39}){const _0x1c635f=a182_0x8d744e;super({'sourceDir':_0x35faf4,'paths':_0x281d39},VlocityParser[_0x1c635f(0x188)]),this[_0x1c635f(0x182)]=_0x1c635f(0x183);}async[a182_0x8d744e(0x171)](_0x23d421){const _0x5d60a4=a182_0x8d744e,_0x45f4de=(0x0,path_1[_0x5d60a4(0x16b)])(this['sourceDir'],_0x23d421),_0xf5b2bf=await fs_internal_1['FS']['readDir'](_0x45f4de,!![]),_0x9a2414={};for(const _0x2cfa67 of _0xf5b2bf){_0x9a2414[(0x0,path_1[_0x5d60a4(0x178)])(this['sourceDir'],_0x2cfa67)[_0x5d60a4(0x167)](/\\/g,'/')]=await fs_internal_1['FS']['readFile'](_0x2cfa67,!![]);}return _0x9a2414;}[a182_0x8d744e(0x189)]({files:_0x3c6784}){const _0x1286ff=a182_0x8d744e,_0x8f9c72=Object[_0x1286ff(0x187)](_0x3c6784)[_0x1286ff(0x17f)](([_0x3569a1])=>_0x3569a1[_0x1286ff(0x163)](this[_0x1286ff(0x182)]));if(!_0x8f9c72)throw new Error(_0x1286ff(0x16d));const _0x545ae2=JSON[_0x1286ff(0x172)](_0x8f9c72[0x1][_0x1286ff(0x18b)]());return _0x545ae2['Name'];}async[a182_0x8d744e(0x177)](){const _0x5bdd1f=a182_0x8d744e,_0x4c8ba4=this['paths'][0x0],[_0xac4874,_0x47a66e]=_0x4c8ba4[_0x5bdd1f(0x180)](path_1['sep']);let _0x31b148,_0x3f7eea=_0x47a66e;try{_0x31b148=await this[_0x5bdd1f(0x171)](_0x4c8ba4);}catch(_0x3b1646){return this[_0x5bdd1f(0x186)][_0x5bdd1f(0x173)](_0x5bdd1f(0x17a),_0x4c8ba4,_0x3b1646),[];}try{_0x3f7eea=this[_0x5bdd1f(0x189)]({'files':_0x31b148});}catch(_0xc5edce){this[_0x5bdd1f(0x186)][_0x5bdd1f(0x169)](_0x5bdd1f(0x18a),_0x4c8ba4,_0xc5edce);}const _0x8ac82f={'files':_0x31b148,'vlocityComponentName':_0x3f7eea,'filePath':_0x4c8ba4,'type':_0xac4874,'name':_0x47a66e,'crc':'','isVlocityComponent':!![]},_0x10c61d=(0x0,crc32_1[_0x5bdd1f(0x185)])(_0x8ac82f);return _0x8ac82f['crc']=_0x10c61d,[_0x8ac82f];}}exports['VlocityParser']=VlocityParser;