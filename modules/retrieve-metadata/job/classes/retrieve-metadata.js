const a267_0x33629c=a267_0x11b2;function a267_0x24fd(){const _0x45ab9e=['defineProperty','join','toString','\x27\x20size\x20\x27','fs/promises','create','1553382nTPrcz','generateAsync','components','object-sizeof','init','(((.+)+)+)+$','fileName','./retrieve-factory','AuthManager','jobStorePath','execute','@flosum/salesforce','__esModule','7188300PjTYNj','retrieveResultsPath','30906896ZUPTBa','DEFLATE','push','apply','1164873QyaLLB','search','__importDefault','default','7210fXHZTR','Item\x20\x27','items','3270150LrqRFu','writeChunk','RETRIEVE_RESULT_FOLDER_NAME','makeDir','stateManager','../../../shared/utils/fs.utils','writeFile','../../../shared/managers/auth.manager','.json','metadataFolder','AxiosInstanceUtils','./manifest-manger','length','base64','528zKBNzs','addWarning','9197440mbUyWY'];a267_0x24fd=function(){return _0x45ab9e;};return a267_0x24fd();}(function(_0x1a6f96,_0x29a4a9){const _0x3b74d2=a267_0x11b2,_0x4c3e0e=_0x1a6f96();while(!![]){try{const _0x4dd5e0=-parseInt(_0x3b74d2(0xb3))/0x1+-parseInt(_0x3b74d2(0xd1))/0x2+-parseInt(_0x3b74d2(0xba))/0x3+-parseInt(_0x3b74d2(0xc8))/0x4*(parseInt(_0x3b74d2(0xb7))/0x5)+-parseInt(_0x3b74d2(0xde))/0x6+parseInt(_0x3b74d2(0xca))/0x7+parseInt(_0x3b74d2(0xaf))/0x8;if(_0x4dd5e0===_0x29a4a9)break;else _0x4c3e0e['push'](_0x4c3e0e['shift']());}catch(_0x1ee5d2){_0x4c3e0e['push'](_0x4c3e0e['shift']());}}}(a267_0x24fd,0xb8e1a));const a267_0x2012af=(function(){let _0xc03a70=!![];return function(_0x30297f,_0x5c408e){const _0x5549be=_0xc03a70?function(){const _0x3426f1=a267_0x11b2;if(_0x5c408e){const _0x5174b4=_0x5c408e[_0x3426f1(0xb2)](_0x30297f,arguments);return _0x5c408e=null,_0x5174b4;}}:function(){};return _0xc03a70=![],_0x5549be;};}()),a267_0x2a20d9=a267_0x2012af(this,function(){const _0x22d6fa=a267_0x11b2;return a267_0x2a20d9[_0x22d6fa(0xcd)]()[_0x22d6fa(0xb4)](_0x22d6fa(0xd6))[_0x22d6fa(0xcd)]()['constructor'](a267_0x2a20d9)[_0x22d6fa(0xb4)](_0x22d6fa(0xd6));});a267_0x2a20d9();'use strict';var __importDefault=this&&this[a267_0x33629c(0xb5)]||function(_0x3048f6){return _0x3048f6&&_0x3048f6['__esModule']?_0x3048f6:{'default':_0x3048f6};};Object[a267_0x33629c(0xcb)](exports,a267_0x33629c(0xdd),{'value':!![]});const salesforce_1=require(a267_0x33629c(0xdc)),manifest_manger_1=__importDefault(require(a267_0x33629c(0xc5))),path_1=__importDefault(require('path')),promises_1=require(a267_0x33629c(0xcf)),fs_utils_1=require(a267_0x33629c(0xbf)),object_sizeof_1=__importDefault(require(a267_0x33629c(0xd4))),retrieve_factory_1=__importDefault(require(a267_0x33629c(0xd8))),auth_manager_1=require(a267_0x33629c(0xc1)),constants_1=require('../../constants'),shortid_1=__importDefault(require('shortid')),jszip_1=__importDefault(require('jszip'));class RetrieveMetadata{constructor(_0xcf2fed,_0x281848,_0x49ed51){const _0x91c2e=a267_0x33629c;this[_0x91c2e(0xda)]=_0xcf2fed,this['logger']=_0x281848,this[_0x91c2e(0xbe)]=_0x49ed51,this['metadataFolder']=path_1[_0x91c2e(0xb6)][_0x91c2e(0xcc)](this['jobStorePath'],constants_1[_0x91c2e(0xbc)]),this[_0x91c2e(0xdf)]=path_1['default'][_0x91c2e(0xcc)](this[_0x91c2e(0xda)],constants_1['RETRIEVE_RESULTS_IDS_FILENAME']);}async[a267_0x33629c(0xbb)](_0x3ab67f){const _0x2dda9e=a267_0x33629c,_0x31af4a=(0x0,shortid_1[_0x2dda9e(0xb6)])();return await(0x0,promises_1[_0x2dda9e(0xc0)])(path_1[_0x2dda9e(0xb6)][_0x2dda9e(0xcc)](this[_0x2dda9e(0xc3)],_0x31af4a+_0x2dda9e(0xc2)),JSON['stringify'](_0x3ab67f)),_0x31af4a;}async[a267_0x33629c(0xdb)](){const _0x122c8b=a267_0x33629c,{credentials:_0x33d1c3,declarativeFilter:_0x2861fd,metadataTypes:_0x50743c,maxChunkSize:_0xa91b40,maxChunkItems:_0x1a1be4,apiVersion:_0x609102}=await new manifest_manger_1['default'](this[_0x122c8b(0xda)])[_0x122c8b(0xd5)](),_0x383a94=await salesforce_1[_0x122c8b(0xc4)][_0x122c8b(0xd0)](new auth_manager_1[(_0x122c8b(0xd9))](_0x33d1c3),[],{'maxContentLength':Infinity,'maxBodyLength':Infinity}),_0x3bced2=await retrieve_factory_1[_0x122c8b(0xb6)][_0x122c8b(0xd0)](_0x383a94,this['logger'],_0x2861fd,_0x50743c,_0x609102)[_0x122c8b(0xdb)]();await(0x0,fs_utils_1[_0x122c8b(0xbd)])(this[_0x122c8b(0xc3)]);let _0x4d2d54=[];const _0x54e5e6=[];let _0x18a431=0x0;for(const _0x13b471 in _0x3bced2['items']){for(const {listMetadataItem:_0x34aaea,files:_0x421f7d}of _0x3bced2[_0x122c8b(0xb9)][_0x13b471][_0x122c8b(0xd3)]){const _0x4f3edd=new jszip_1[(_0x122c8b(0xb6))]();for(const _0x228b0a in _0x421f7d){await _0x4f3edd['file'](_0x228b0a,_0x421f7d[_0x228b0a]);}const _0xe01363=await _0x4f3edd[_0x122c8b(0xd2)]({'type':_0x122c8b(0xc7),'compression':_0x122c8b(0xb0),'compressionOptions':{'level':0x9}}),_0x4a69f4={..._0x34aaea,'zip':_0xe01363},_0x72073c=(0x0,object_sizeof_1[_0x122c8b(0xb6)])(_0x4a69f4);if(_0x72073c>_0xa91b40){await this[_0x122c8b(0xbe)][_0x122c8b(0xc9)](_0x122c8b(0xb8)+_0x34aaea[_0x122c8b(0xd7)]+_0x122c8b(0xce)+_0x72073c+'\x27\x20exceed\x20limit\x20\x27'+_0xa91b40+'\x27');continue;}if(_0x18a431+_0x72073c>_0xa91b40||_0x4d2d54[_0x122c8b(0xc6)]>=_0x1a1be4){const _0x348ba6=await this[_0x122c8b(0xbb)](_0x4d2d54);_0x54e5e6[_0x122c8b(0xb1)](_0x348ba6),_0x18a431=0x0,_0x4d2d54=[];}_0x4d2d54[_0x122c8b(0xb1)](_0x4a69f4),_0x18a431+=_0x72073c;}}if(_0x4d2d54[_0x122c8b(0xc6)]){const _0x7cd9f5=await this['writeChunk'](_0x4d2d54);_0x54e5e6[_0x122c8b(0xb1)](_0x7cd9f5);}await(0x0,promises_1[_0x122c8b(0xc0)])(this[_0x122c8b(0xdf)],JSON['stringify'](_0x54e5e6));}}function a267_0x11b2(_0x40a2b3,_0x5d0971){const _0x4e5539=a267_0x24fd();return a267_0x11b2=function(_0x2a20d9,_0x2012af){_0x2a20d9=_0x2a20d9-0xaf;let _0x24fd60=_0x4e5539[_0x2a20d9];return _0x24fd60;},a267_0x11b2(_0x40a2b3,_0x5d0971);}exports[a267_0x33629c(0xb6)]=RetrieveMetadata;