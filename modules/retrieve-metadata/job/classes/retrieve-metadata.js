const a315_0x428b43=a315_0x5233;(function(_0x5194eb,_0x33d22f){const _0x11aa88=a315_0x5233,_0x544643=_0x5194eb();while(!![]){try{const _0x38bc4a=parseInt(_0x11aa88(0x1dd))/0x1+-parseInt(_0x11aa88(0x1d4))/0x2+parseInt(_0x11aa88(0x1d1))/0x3+parseInt(_0x11aa88(0x1f2))/0x4*(-parseInt(_0x11aa88(0x1eb))/0x5)+-parseInt(_0x11aa88(0x1c9))/0x6*(-parseInt(_0x11aa88(0x1e6))/0x7)+-parseInt(_0x11aa88(0x1d9))/0x8+parseInt(_0x11aa88(0x1ec))/0x9;if(_0x38bc4a===_0x33d22f)break;else _0x544643['push'](_0x544643['shift']());}catch(_0x7802c6){_0x544643['push'](_0x544643['shift']());}}}(a315_0x2ca6,0x45602));const a315_0x2445be=(function(){let _0x59e5d7=!![];return function(_0x16c2e6,_0x5390e3){const _0x4b87e6=_0x59e5d7?function(){const _0x240b58=a315_0x5233;if(_0x5390e3){const _0x109c67=_0x5390e3[_0x240b58(0x1f8)](_0x16c2e6,arguments);return _0x5390e3=null,_0x109c67;}}:function(){};return _0x59e5d7=![],_0x4b87e6;};}()),a315_0x46aea5=a315_0x2445be(this,function(){const _0x3d5692=a315_0x5233;return a315_0x46aea5[_0x3d5692(0x1df)]()['search']('(((.+)+)+)+$')[_0x3d5692(0x1df)]()['constructor'](a315_0x46aea5)[_0x3d5692(0x1d3)](_0x3d5692(0x1ee));});a315_0x46aea5();'use strict';var __importDefault=this&&this[a315_0x428b43(0x1ce)]||function(_0x4d4b97){const _0x47be18=a315_0x428b43;return _0x4d4b97&&_0x4d4b97[_0x47be18(0x1d5)]?_0x4d4b97:{'default':_0x4d4b97};};Object[a315_0x428b43(0x1f3)](exports,'__esModule',{'value':!![]});function a315_0x2ca6(){const _0x1c081c=['7ELulgG','./retrieve-factory','execute','create','logger','703810AKRxnh','8272935imykQu','writeChunk','(((.+)+)+)+$','items','.json','\x27\x20exceed\x20limit\x20\x27','12GrurVV','defineProperty','@flosum/salesforce','fs/promises','AuthManager','Item\x20\x27','apply','jobStorePath','AxiosInstanceUtils','push','base64','2261874zBACqi','RETRIEVE_RESULT_FOLDER_NAME','fileName','default','makeDir','__importDefault','DEFLATE','stateManager','93510irRDgA','writeFile','search','1001468SIQKdk','__esModule','RETRIEVE_RESULTS_IDS_FILENAME','metadataFolder','../../constants','3889984rCnAtv','file','join','../../../shared/managers/auth.manager','366066FXYEzZ','./manifest-manger','toString','generateAsync','retrieveResultsPath','stringify','init','../../../shared/utils/fs.utils','object-sizeof'];a315_0x2ca6=function(){return _0x1c081c;};return a315_0x2ca6();}const salesforce_1=require(a315_0x428b43(0x1f4)),manifest_manger_1=__importDefault(require(a315_0x428b43(0x1de))),path_1=__importDefault(require('path')),promises_1=require(a315_0x428b43(0x1f5)),fs_utils_1=require(a315_0x428b43(0x1e4)),object_sizeof_1=__importDefault(require(a315_0x428b43(0x1e5))),retrieve_factory_1=__importDefault(require(a315_0x428b43(0x1e7))),auth_manager_1=require(a315_0x428b43(0x1dc)),constants_1=require(a315_0x428b43(0x1d8)),shortid_1=__importDefault(require('shortid')),jszip_1=__importDefault(require('jszip'));function a315_0x5233(_0x35cdb3,_0x507f90){const _0x501dca=a315_0x2ca6();return a315_0x5233=function(_0x46aea5,_0x2445be){_0x46aea5=_0x46aea5-0x1c8;let _0x2ca66a=_0x501dca[_0x46aea5];return _0x2ca66a;},a315_0x5233(_0x35cdb3,_0x507f90);}class RetrieveMetadata{constructor(_0x3cd21c,_0x16ae55,_0xc5c669){const _0x2a4285=a315_0x428b43;this[_0x2a4285(0x1f9)]=_0x3cd21c,this[_0x2a4285(0x1ea)]=_0x16ae55,this[_0x2a4285(0x1d0)]=_0xc5c669,this['metadataFolder']=path_1[_0x2a4285(0x1cc)]['join'](this[_0x2a4285(0x1f9)],constants_1[_0x2a4285(0x1ca)]),this[_0x2a4285(0x1e1)]=path_1[_0x2a4285(0x1cc)][_0x2a4285(0x1db)](this[_0x2a4285(0x1f9)],constants_1[_0x2a4285(0x1d6)]);}async['writeChunk'](_0x46acb4){const _0x2e43d6=a315_0x428b43,_0x362319=(0x0,shortid_1['default'])();return await(0x0,promises_1[_0x2e43d6(0x1d2)])(path_1[_0x2e43d6(0x1cc)]['join'](this['metadataFolder'],_0x362319+_0x2e43d6(0x1f0)),JSON[_0x2e43d6(0x1e2)](_0x46acb4)),_0x362319;}async[a315_0x428b43(0x1e8)](){const _0x5d328b=a315_0x428b43,{credentials:_0x3e4f20,declarativeFilter:_0x1e75ef,metadataTypes:_0x176d82,maxChunkSize:_0x39d2e3,maxChunkItems:_0x585fef,apiVersion:_0x53f529}=await new manifest_manger_1['default'](this[_0x5d328b(0x1f9)])[_0x5d328b(0x1e3)](),_0x49eee6=await salesforce_1[_0x5d328b(0x1fa)]['create'](new auth_manager_1[(_0x5d328b(0x1f6))](_0x3e4f20),[],{'maxContentLength':Infinity,'maxBodyLength':Infinity}),_0x539c9f=await retrieve_factory_1[_0x5d328b(0x1cc)][_0x5d328b(0x1e9)](_0x49eee6,this['logger'],_0x1e75ef,_0x176d82,_0x53f529)[_0x5d328b(0x1e8)]();await(0x0,fs_utils_1[_0x5d328b(0x1cd)])(this[_0x5d328b(0x1d7)]);let _0x55064b=[];const _0x58d65f=[];let _0x59c3c3=0x0;for(const _0x53d0ee in _0x539c9f['items']){for(const {listMetadataItem:_0x33f6ba,files:_0x267bbd}of _0x539c9f[_0x5d328b(0x1ef)][_0x53d0ee]['components']){const _0x38797c=new jszip_1[(_0x5d328b(0x1cc))]();for(const _0x386cae in _0x267bbd){await _0x38797c[_0x5d328b(0x1da)](_0x386cae,_0x267bbd[_0x386cae]);}const _0xe165bf=await _0x38797c[_0x5d328b(0x1e0)]({'type':_0x5d328b(0x1c8),'compression':_0x5d328b(0x1cf),'compressionOptions':{'level':0x9}}),_0x311d33={..._0x33f6ba,'zip':_0xe165bf},_0x4c1c12=(0x0,object_sizeof_1[_0x5d328b(0x1cc)])(_0x311d33);if(_0x4c1c12>_0x39d2e3){await this[_0x5d328b(0x1d0)]['addWarning'](_0x5d328b(0x1f7)+_0x33f6ba[_0x5d328b(0x1cb)]+'\x27\x20size\x20\x27'+_0x4c1c12+_0x5d328b(0x1f1)+_0x39d2e3+'\x27');continue;}if(_0x59c3c3+_0x4c1c12>_0x39d2e3||_0x55064b['length']>=_0x585fef){const _0x582633=await this['writeChunk'](_0x55064b);_0x58d65f[_0x5d328b(0x1fb)](_0x582633),_0x59c3c3=0x0,_0x55064b=[];}_0x55064b['push'](_0x311d33),_0x59c3c3+=_0x4c1c12;}}if(_0x55064b['length']){const _0xef3efe=await this[_0x5d328b(0x1ed)](_0x55064b);_0x58d65f[_0x5d328b(0x1fb)](_0xef3efe);}await(0x0,promises_1[_0x5d328b(0x1d2)])(this[_0x5d328b(0x1e1)],JSON[_0x5d328b(0x1e2)](_0x58d65f));}}exports[a315_0x428b43(0x1cc)]=RetrieveMetadata;