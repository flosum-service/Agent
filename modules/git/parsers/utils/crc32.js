const a159_0x26030f=a159_0xe982;function a159_0x51be(){const _0x4dba69=['3075456oChsoQ','lastIndexOf','forEach','sort','push','experiences/','3054678noHtAH','__importDefault','type','5416075sjIxNn','buf','1964592wuICXI','startsWith','includes','str','(((.+)+)+)+$','calculateCRC32','slice','join','defineProperty','search','files','673681PNfqib','keys','filePath','add','7gXZWSu','1566380QRMBwh','2791592hFOJdC','ContentAsset','lwc/','constructor','default','length','toString','crc-32','../data/vlocity-types','waveTemplates/','split','__esModule'];a159_0x51be=function(){return _0x4dba69;};return a159_0x51be();}(function(_0x1a7324,_0x264a10){const _0x38106d=a159_0xe982,_0x5502c4=_0x1a7324();while(!![]){try{const _0x471154=-parseInt(_0x38106d(0x11f))/0x1+-parseInt(_0x38106d(0x124))/0x2+parseInt(_0x38106d(0x137))/0x3+-parseInt(_0x38106d(0x131))/0x4+parseInt(_0x38106d(0x13a))/0x5+parseInt(_0x38106d(0x13c))/0x6+-parseInt(_0x38106d(0x123))/0x7*(-parseInt(_0x38106d(0x125))/0x8);if(_0x471154===_0x264a10)break;else _0x5502c4['push'](_0x5502c4['shift']());}catch(_0xe6c110){_0x5502c4['push'](_0x5502c4['shift']());}}}(a159_0x51be,0x86c97));function a159_0xe982(_0x4e4f23,_0x2d945b){const _0x223a0e=a159_0x51be();return a159_0xe982=function(_0x36f1c2,_0x3bf3f6){_0x36f1c2=_0x36f1c2-0x11c;let _0x51bec8=_0x223a0e[_0x36f1c2];return _0x51bec8;},a159_0xe982(_0x4e4f23,_0x2d945b);}const a159_0x3bf3f6=(function(){let _0xcc14eb=!![];return function(_0x2215bd,_0x29df96){const _0x44eabb=_0xcc14eb?function(){if(_0x29df96){const _0x251639=_0x29df96['apply'](_0x2215bd,arguments);return _0x29df96=null,_0x251639;}}:function(){};return _0xcc14eb=![],_0x44eabb;};}()),a159_0x36f1c2=a159_0x3bf3f6(this,function(){const _0x2dae7d=a159_0xe982;return a159_0x36f1c2['toString']()[_0x2dae7d(0x11d)](_0x2dae7d(0x140))[_0x2dae7d(0x12b)]()[_0x2dae7d(0x128)](a159_0x36f1c2)[_0x2dae7d(0x11d)](_0x2dae7d(0x140));});a159_0x36f1c2();'use strict';var __importDefault=this&&this[a159_0x26030f(0x138)]||function(_0x4a602f){return _0x4a602f&&_0x4a602f['__esModule']?_0x4a602f:{'default':_0x4a602f};};Object[a159_0x26030f(0x11c)](exports,a159_0x26030f(0x130),{'value':!![]}),exports[a159_0x26030f(0x141)]=void 0x0;const crc_32_1=__importDefault(require(a159_0x26030f(0x12c))),vlocity_types_1=require(a159_0x26030f(0x12d)),componentTypeProcessFunctionMap={'AuraDefinitionBundle':bundleTypesProcessor,'LightningComponentBundle':bundleTypesProcessor,'ExperienceBundle':bundleTypesProcessor,'WaveTemplateBundle':bundleTypesProcessor},BINARY_COMPONENTS=['StaticResource',a159_0x26030f(0x126)];function bundleTypesProcessor(_0x19a0a3){const _0x2914db=a159_0x26030f,_0x3c2564=[],_0x15b448=new Set();Object[_0x2914db(0x120)](_0x19a0a3['files'])[_0x2914db(0x134)]()[_0x2914db(0x133)](_0x18c0ed=>{const _0x4d776c=_0x2914db,_0x4d0509=getAuraName(_0x18c0ed);if(_0x4d0509&&_0x4d0509===_0x19a0a3[_0x4d776c(0x121)]){const _0x26ab24=_0x19a0a3['files'][_0x18c0ed],_0x59ed6e=getCrcWithData(_0x26ab24);_0x59ed6e&&_0x3c2564[_0x4d776c(0x135)](_0x59ed6e);}else _0x15b448[_0x4d776c(0x122)](_0x18c0ed);});const _0x2bfa12=calculateResultCRC32(_0x3c2564);return''+_0x2bfa12;}function calculateCRC32ForEachFile(_0x2266ab){const _0x5d08f9=a159_0x26030f,_0x45c8cb=[],_0x5634a9=BINARY_COMPONENTS[_0x5d08f9(0x13e)](_0x2266ab[_0x5d08f9(0x139)]);return Object[_0x5d08f9(0x120)](_0x2266ab[_0x5d08f9(0x11e)])['sort']()['forEach'](_0x3f0fc2=>{const _0x2c43ba=_0x5d08f9,_0x3ef547=_0x2266ab[_0x2c43ba(0x11e)][_0x3f0fc2],_0x504ac6=getCrcWithData(_0x3ef547,_0x5634a9);_0x504ac6&&_0x45c8cb[_0x2c43ba(0x135)](_0x504ac6);}),_0x45c8cb;}function calculateResultCRC32(_0xb3c9a0){const _0x17c259=a159_0x26030f;let _0x409487=0x0;_0xb3c9a0[_0x17c259(0x12a)]&&(_0x409487=_0xb3c9a0[0x0]);if(_0xb3c9a0[_0x17c259(0x12a)]<0x1a)for(let _0x5e0eac=0x1;_0x5e0eac<_0xb3c9a0['length'];_0x5e0eac++){_0x409487=Math['round']((_0xb3c9a0[_0x5e0eac]+_0x409487)/0x2);}else{for(let _0x2c2f6d=0x1;_0x2c2f6d<_0xb3c9a0[_0x17c259(0x12a)];_0x2c2f6d++){_0x409487=Math['round'](_0xb3c9a0[_0x2c2f6d]+_0x409487);}_0x409487=Math['round'](_0x409487/_0xb3c9a0[_0x17c259(0x12a)]);}return _0x409487;}function otherComponentsProcessor(_0x258471){const _0x56cf85=a159_0x26030f;return calculateCRC32ForEachFile(_0x258471)[_0x56cf85(0x143)]('\x20');}function vlocityComponentsProcessor(_0x1b8b34){const _0x3c8286=calculateCRC32ForEachFile(_0x1b8b34),_0x32d22b=calculateResultCRC32(_0x3c8286);return''+_0x32d22b;}function getPosition(_0x3d4297,_0xa44d01,_0x5f21b7){const _0x47d0a3=a159_0x26030f;return _0x3d4297[_0x47d0a3(0x12f)](_0xa44d01,_0x5f21b7)[_0x47d0a3(0x143)](_0xa44d01)[_0x47d0a3(0x12a)];}function getAuraName(_0x448c97){const _0x4d9ac5=a159_0x26030f;if(!_0x448c97)return null;if(!_0x448c97[_0x4d9ac5(0x13d)]('aura/')&&!_0x448c97[_0x4d9ac5(0x13d)](_0x4d9ac5(0x127))&&!_0x448c97[_0x4d9ac5(0x13d)](_0x4d9ac5(0x136))&&!_0x448c97[_0x4d9ac5(0x13d)](_0x4d9ac5(0x12e)))return null;if(_0x448c97['lastIndexOf']('/')>0x5&&_0x448c97[_0x4d9ac5(0x132)]('/')!==_0x448c97[_0x4d9ac5(0x12a)]-0x1){let _0x17bd51=_0x448c97[_0x4d9ac5(0x142)](0x0,getPosition(_0x448c97,'/',0x2));if(_0x448c97[_0x4d9ac5(0x13d)](_0x4d9ac5(0x136))||_0x448c97[_0x4d9ac5(0x13d)]('waveTemplates/'))return _0x17bd51[_0x4d9ac5(0x132)]('/')!==-0x1&&(_0x17bd51=_0x17bd51[_0x4d9ac5(0x142)](0x0,_0x17bd51[_0x4d9ac5(0x132)]('/'))),_0x17bd51;return _0x17bd51;}return null;}function getCrcWithData(_0x206fd3,_0x3c2320=![]){const _0x26f7ff=a159_0x26030f;if(_0x3c2320)return crc_32_1[_0x26f7ff(0x129)][_0x26f7ff(0x13b)](_0x206fd3,0x20);return crc_32_1[_0x26f7ff(0x129)][_0x26f7ff(0x13f)](_0x206fd3[_0x26f7ff(0x12b)](),0x20);}function calculateCRC32(_0x35d71c){const _0x1c82f4=a159_0x26030f;if(componentTypeProcessFunctionMap[_0x35d71c['type']])return componentTypeProcessFunctionMap[_0x35d71c[_0x1c82f4(0x139)]](_0x35d71c);if(vlocity_types_1['VLOCITY_COMPONENT_TYPES'][_0x1c82f4(0x13e)](_0x35d71c['type']))return vlocityComponentsProcessor(_0x35d71c);return otherComponentsProcessor(_0x35d71c);}exports[a159_0x26030f(0x141)]=calculateCRC32;