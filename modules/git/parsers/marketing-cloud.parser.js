const a181_0x3863a0=a181_0x1122;(function(_0x1e79f7,_0x2bdb32){const _0x5f4931=a181_0x1122,_0x27e833=_0x1e79f7();while(!![]){try{const _0x4ea925=parseInt(_0x5f4931(0x13f))/0x1*(parseInt(_0x5f4931(0x14e))/0x2)+-parseInt(_0x5f4931(0x14a))/0x3+parseInt(_0x5f4931(0x134))/0x4*(parseInt(_0x5f4931(0x149))/0x5)+parseInt(_0x5f4931(0x153))/0x6+-parseInt(_0x5f4931(0x13e))/0x7*(parseInt(_0x5f4931(0x151))/0x8)+-parseInt(_0x5f4931(0x144))/0x9*(parseInt(_0x5f4931(0x12f))/0xa)+-parseInt(_0x5f4931(0x14c))/0xb*(-parseInt(_0x5f4931(0x137))/0xc);if(_0x4ea925===_0x2bdb32)break;else _0x27e833['push'](_0x27e833['shift']());}catch(_0x503e1a){_0x27e833['push'](_0x27e833['shift']());}}}(a181_0x2b27,0x38fc2));const a181_0x527554=(function(){let _0x681434=!![];return function(_0x69187e,_0xe2ff4b){const _0x36578a=_0x681434?function(){if(_0xe2ff4b){const _0x1c0e22=_0xe2ff4b['apply'](_0x69187e,arguments);return _0xe2ff4b=null,_0x1c0e22;}}:function(){};return _0x681434=![],_0x36578a;};}()),a181_0x1a2d2f=a181_0x527554(this,function(){const _0x557374=a181_0x1122;return a181_0x1a2d2f[_0x557374(0x139)]()[_0x557374(0x13a)](_0x557374(0x14b))['toString']()['constructor'](a181_0x1a2d2f)[_0x557374(0x13a)](_0x557374(0x14b));});function a181_0x2b27(){const _0x113105=['1026RHRsAf','__esModule','execute','readComponent','crc','120RBnATc','762711xHbncg','(((.+)+)+)+$','5849888qHGNpj','path','2OTyPGC','componentType','calculateCRC32','3479992xFqMGM','Error\x20occurred\x20when\x20parsing\x20file/folder\x20%s.\x20Original\x20error:\x20','1042860pgNbOd','9960rHDCKm','./utils/crc32','BaseParser','error','catch','15572sBTCUD','name','sep','12ODgzvU','componentName','toString','search','logger','../internal/fs.internal','defineProperty','7NPSCPt','237140IxKqeO','paths','readFile','MarketingCloudParser','parseMarketingCloudComponent'];a181_0x2b27=function(){return _0x113105;};return a181_0x2b27();}a181_0x1a2d2f();'use strict';Object[a181_0x3863a0(0x13d)](exports,a181_0x3863a0(0x145),{'value':!![]}),exports[a181_0x3863a0(0x142)]=void 0x0;function a181_0x1122(_0x2b62c7,_0x375b3a){const _0x5594fc=a181_0x2b27();return a181_0x1122=function(_0x1a2d2f,_0x527554){_0x1a2d2f=_0x1a2d2f-0x12f;let _0x2b2781=_0x5594fc[_0x1a2d2f];return _0x2b2781;},a181_0x1122(_0x2b62c7,_0x375b3a);}const base_parser_1=require('./base.parser'),fs_internal_1=require(a181_0x3863a0(0x13c)),crc32_1=require(a181_0x3863a0(0x130)),path_1=require(a181_0x3863a0(0x14d)),marketing_cloud_1=require('./utils/marketing-cloud');class MarketingCloudParser extends base_parser_1[a181_0x3863a0(0x131)]{constructor({sourceDir:_0x34f84c,paths:_0x256bb0}){const _0x415912=a181_0x3863a0;super({'sourceDir':_0x34f84c,'paths':_0x256bb0},MarketingCloudParser[_0x415912(0x135)]);}async[a181_0x3863a0(0x147)](_0x2ef94f){const _0x4065ed=a181_0x3863a0,_0x4709a0=(0x0,path_1['join'])(this['sourceDir'],_0x2ef94f),_0x4984e9=await fs_internal_1['FS'][_0x4065ed(0x141)](_0x4709a0,!![]);return _0x4984e9;}async[a181_0x3863a0(0x146)](){const _0x3b60b7=a181_0x3863a0,_0x373be9=this[_0x3b60b7(0x140)][0x0],[_0x197c66,_0x5a2a97]=_0x373be9['split'](path_1[_0x3b60b7(0x136)]),_0x2baa7d=await this[_0x3b60b7(0x147)](_0x373be9)[_0x3b60b7(0x133)](_0x58be0d=>this[_0x3b60b7(0x13b)][_0x3b60b7(0x132)](_0x3b60b7(0x152),_0x373be9,_0x58be0d));if(!_0x2baa7d)return[];const _0x22e60c=await(0x0,marketing_cloud_1[_0x3b60b7(0x143)])(_0x373be9,_0x2baa7d)['catch'](_0x5e6e76=>this['logger'][_0x3b60b7(0x132)](_0x3b60b7(0x152),_0x373be9,_0x5e6e76)),_0x16a90d={'files':{[_0x373be9]:_0x2baa7d},'filePath':_0x373be9,'type':(_0x22e60c===null||_0x22e60c===void 0x0?void 0x0:_0x22e60c[_0x3b60b7(0x14f)])||_0x197c66,'name':(_0x22e60c===null||_0x22e60c===void 0x0?void 0x0:_0x22e60c[_0x3b60b7(0x138)])||_0x5a2a97,'marketingCloudKey':_0x22e60c===null||_0x22e60c===void 0x0?void 0x0:_0x22e60c['key']},_0x41f7dc=(0x0,crc32_1[_0x3b60b7(0x150)])(_0x16a90d);return _0x16a90d[_0x3b60b7(0x148)]=_0x41f7dc,[_0x16a90d];}}exports[a181_0x3863a0(0x142)]=MarketingCloudParser;