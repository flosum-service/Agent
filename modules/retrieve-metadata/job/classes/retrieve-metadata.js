function a272_0x2f76(_0x241d3b,_0xc5c4b){const _0x3e4958=a272_0x5ee1();return a272_0x2f76=function(_0x28ab4d,_0x5d9d0c){_0x28ab4d=_0x28ab4d-0x14b;let _0x5ee161=_0x3e4958[_0x28ab4d];return _0x5ee161;},a272_0x2f76(_0x241d3b,_0xc5c4b);}const a272_0x2b517f=a272_0x2f76;(function(_0x2177d8,_0x5beb83){const _0x4ac6cf=a272_0x2f76,_0x4a9677=_0x2177d8();while(!![]){try{const _0x36aa05=parseInt(_0x4ac6cf(0x14b))/0x1*(-parseInt(_0x4ac6cf(0x161))/0x2)+parseInt(_0x4ac6cf(0x17a))/0x3+parseInt(_0x4ac6cf(0x15a))/0x4*(-parseInt(_0x4ac6cf(0x14d))/0x5)+-parseInt(_0x4ac6cf(0x167))/0x6+parseInt(_0x4ac6cf(0x176))/0x7+parseInt(_0x4ac6cf(0x17c))/0x8+parseInt(_0x4ac6cf(0x14e))/0x9*(-parseInt(_0x4ac6cf(0x15c))/0xa);if(_0x36aa05===_0x5beb83)break;else _0x4a9677['push'](_0x4a9677['shift']());}catch(_0x498ce6){_0x4a9677['push'](_0x4a9677['shift']());}}}(a272_0x5ee1,0xa6ebf));const a272_0x5d9d0c=(function(){let _0x1e0411=!![];return function(_0x3408b4,_0x1ef6a5){const _0x46dfeb=_0x1e0411?function(){const _0x3b927b=a272_0x2f76;if(_0x1ef6a5){const _0x39886e=_0x1ef6a5[_0x3b927b(0x154)](_0x3408b4,arguments);return _0x1ef6a5=null,_0x39886e;}}:function(){};return _0x1e0411=![],_0x46dfeb;};}()),a272_0x28ab4d=a272_0x5d9d0c(this,function(){const _0x9d5366=a272_0x2f76;return a272_0x28ab4d[_0x9d5366(0x162)]()['search']('(((.+)+)+)+$')[_0x9d5366(0x162)]()['constructor'](a272_0x28ab4d)['search']('(((.+)+)+)+$');});a272_0x28ab4d();function a272_0x5ee1(){const _0x7df634=['path','default','makeDir','file','RETRIEVE_RESULT_FOLDER_NAME','items','fs/promises','4878090exoRwC','AuthManager','jszip','object-sizeof','2326332tGkXLP','shortid','8179992ZWMgmd','437LnfHtl','metadataFolder','5neydsr','8397IgcrlE','../../../shared/managers/auth.manager','\x27\x20size\x20\x27','stateManager','push','generateAsync','apply','RETRIEVE_RESULTS_IDS_FILENAME','components','create','base64','@flosum/salesforce','255100dgkUfP','AxiosInstanceUtils','3650NlzpDZ','./manifest-manger','.json','join','length','346lFHTQl','toString','stringify','../../constants','writeFile','logger','7987086nPGJuB','addWarning','jobStorePath','\x27\x20exceed\x20limit\x20\x27','retrieveResultsPath','init','writeChunk','execute'];a272_0x5ee1=function(){return _0x7df634;};return a272_0x5ee1();}'use strict';var __importDefault=this&&this['__importDefault']||function(_0xeb1ba7){return _0xeb1ba7&&_0xeb1ba7['__esModule']?_0xeb1ba7:{'default':_0xeb1ba7};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const salesforce_1=require(a272_0x2b517f(0x159)),manifest_manger_1=__importDefault(require(a272_0x2b517f(0x15d))),path_1=__importDefault(require(a272_0x2b517f(0x16f))),promises_1=require(a272_0x2b517f(0x175)),fs_utils_1=require('../../../shared/utils/fs.utils'),object_sizeof_1=__importDefault(require(a272_0x2b517f(0x179))),retrieve_factory_1=__importDefault(require('./retrieve-factory')),auth_manager_1=require(a272_0x2b517f(0x14f)),constants_1=require(a272_0x2b517f(0x164)),shortid_1=__importDefault(require(a272_0x2b517f(0x17b))),jszip_1=__importDefault(require(a272_0x2b517f(0x178)));class RetrieveMetadata{constructor(_0x4618ed,_0x18e91f,_0x2070e3){const _0x437f1a=a272_0x2b517f;this['jobStorePath']=_0x4618ed,this[_0x437f1a(0x166)]=_0x18e91f,this[_0x437f1a(0x151)]=_0x2070e3,this[_0x437f1a(0x14c)]=path_1[_0x437f1a(0x170)][_0x437f1a(0x15f)](this[_0x437f1a(0x169)],constants_1[_0x437f1a(0x173)]),this[_0x437f1a(0x16b)]=path_1[_0x437f1a(0x170)]['join'](this[_0x437f1a(0x169)],constants_1[_0x437f1a(0x155)]);}async[a272_0x2b517f(0x16d)](_0x5352c7){const _0x538354=a272_0x2b517f,_0x23e3a9=(0x0,shortid_1[_0x538354(0x170)])();return await(0x0,promises_1['writeFile'])(path_1['default'][_0x538354(0x15f)](this[_0x538354(0x14c)],_0x23e3a9+_0x538354(0x15e)),JSON[_0x538354(0x163)](_0x5352c7)),_0x23e3a9;}async['execute'](){const _0x4696c5=a272_0x2b517f,{credentials:_0x2b2ad8,declarativeFilter:_0x3f2d79,metadataTypes:_0x4152e0,maxChunkSize:_0x310ff1,maxChunkItems:_0x5cc15f,apiVersion:_0x388aca}=await new manifest_manger_1[(_0x4696c5(0x170))](this[_0x4696c5(0x169)])[_0x4696c5(0x16c)](),_0x2e602b=await salesforce_1[_0x4696c5(0x15b)][_0x4696c5(0x157)](new auth_manager_1[(_0x4696c5(0x177))](_0x2b2ad8),[],{'maxContentLength':Infinity,'maxBodyLength':Infinity}),_0x1dfc45=await retrieve_factory_1[_0x4696c5(0x170)][_0x4696c5(0x157)](_0x2e602b,this[_0x4696c5(0x166)],_0x3f2d79,_0x4152e0,_0x388aca)[_0x4696c5(0x16e)]();await(0x0,fs_utils_1[_0x4696c5(0x171)])(this[_0x4696c5(0x14c)]);let _0x335e0e=[];const _0x17e11c=[];let _0x37ddf0=0x0;for(const _0x19fd19 in _0x1dfc45[_0x4696c5(0x174)]){for(const {listMetadataItem:_0xed82e3,files:_0x7b184b}of _0x1dfc45['items'][_0x19fd19][_0x4696c5(0x156)]){const _0x4d3f9c=new jszip_1[(_0x4696c5(0x170))]();for(const _0xcb3088 in _0x7b184b){await _0x4d3f9c[_0x4696c5(0x172)](_0xcb3088,_0x7b184b[_0xcb3088]);}const _0x224ca4=await _0x4d3f9c[_0x4696c5(0x153)]({'type':_0x4696c5(0x158),'compression':'DEFLATE','compressionOptions':{'level':0x9}}),_0x378e45={..._0xed82e3,'zip':_0x224ca4},_0xda074a=(0x0,object_sizeof_1[_0x4696c5(0x170)])(_0x378e45);if(_0xda074a>_0x310ff1){await this['stateManager'][_0x4696c5(0x168)]('Item\x20\x27'+_0xed82e3['fileName']+_0x4696c5(0x150)+_0xda074a+_0x4696c5(0x16a)+_0x310ff1+'\x27');continue;}if(_0x37ddf0+_0xda074a>_0x310ff1||_0x335e0e['length']>=_0x5cc15f){const _0x597250=await this[_0x4696c5(0x16d)](_0x335e0e);_0x17e11c['push'](_0x597250),_0x37ddf0=0x0,_0x335e0e=[];}_0x335e0e[_0x4696c5(0x152)](_0x378e45),_0x37ddf0+=_0xda074a;}}if(_0x335e0e[_0x4696c5(0x160)]){const _0x2dff68=await this[_0x4696c5(0x16d)](_0x335e0e);_0x17e11c['push'](_0x2dff68);}await(0x0,promises_1[_0x4696c5(0x165)])(this[_0x4696c5(0x16b)],JSON['stringify'](_0x17e11c));}}exports[a272_0x2b517f(0x170)]=RetrieveMetadata;