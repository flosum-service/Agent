const a403_0x37b51a=a403_0x2940;(function(_0x3cd9ee,_0x3837a){const _0x4fd166=a403_0x2940,_0x17cac2=_0x3cd9ee();while(!![]){try{const _0x5a5031=parseInt(_0x4fd166(0xca))/0x1+-parseInt(_0x4fd166(0xf4))/0x2+parseInt(_0x4fd166(0xc6))/0x3*(parseInt(_0x4fd166(0xc5))/0x4)+-parseInt(_0x4fd166(0xea))/0x5+-parseInt(_0x4fd166(0xcc))/0x6+-parseInt(_0x4fd166(0xfa))/0x7*(parseInt(_0x4fd166(0x103))/0x8)+parseInt(_0x4fd166(0xf9))/0x9;if(_0x5a5031===_0x3837a)break;else _0x17cac2['push'](_0x17cac2['shift']());}catch(_0xdf03f6){_0x17cac2['push'](_0x17cac2['shift']());}}}(a403_0x1143,0xea346));const a403_0x150c81=(function(){let _0x3df72e=!![];return function(_0x1bfd3c,_0x1073de){const _0x261e49=_0x3df72e?function(){const _0x30c64d=a403_0x2940;if(_0x1073de){const _0x577d91=_0x1073de[_0x30c64d(0xd8)](_0x1bfd3c,arguments);return _0x1073de=null,_0x577d91;}}:function(){};return _0x3df72e=![],_0x261e49;};}()),a403_0x4699b9=a403_0x150c81(this,function(){const _0x975e98=a403_0x2940;return a403_0x4699b9[_0x975e98(0xe9)]()[_0x975e98(0xc2)]('(((.+)+)+)+$')['toString']()['constructor'](a403_0x4699b9)[_0x975e98(0xc2)]('(((.+)+)+)+$');});a403_0x4699b9();'use strict';function a403_0x2940(_0x2cb7a8,_0x38837c){const _0x2e2e0b=a403_0x1143();return a403_0x2940=function(_0x4699b9,_0x150c81){_0x4699b9=_0x4699b9-0xbd;let _0x11438d=_0x2e2e0b[_0x4699b9];return _0x11438d;},a403_0x2940(_0x2cb7a8,_0x38837c);}var __importDefault=this&&this[a403_0x37b51a(0xf1)]||function(_0x599344){return _0x599344&&_0x599344['__esModule']?_0x599344:{'default':_0x599344};};Object[a403_0x37b51a(0xf0)](exports,a403_0x37b51a(0xec),{'value':!![]}),exports[a403_0x37b51a(0xdf)]=void 0x0;function a403_0x1143(){const _0x1304e4=['values','packageName','package_component__v','application/x-www-form-urlencoded','push','migration__sys','Removing\x20components\x20from\x20outbound\x20packages.','Create\x20Export\x20outbound\x20packages.','16jjVthT','deletePackageComponents','createExportOutboundPackages','jszip','Deleting\x20outbound\x20packages.','from','retrieveVPKList','VeevaConstants','search','set','createVeevaObjectRecords','1992216XTYXYP','3ocVcVK','reduce','links','_logger','1155613yvuSEY','VeevaError','5815980bFlWsf','map','application/json','fill','ceil','createOutboundPackages','parse','Retrieve\x20Outbound\x20Package\x20zip\x20list','responseStatus','Getting\x20names\x20of\x20outbound\x20packages','default','\x0a\x20\x20\x20\x20\x20\x20\x20\x20SELECT\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20name__v\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20outbound_package__v\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20id\x20CONTAINS\x20(\x27','apply','executeVQL','deleteVeevaObjectRecords','join','content-type','MAXIMUM_SIZE_OF_PACKAGE','deleteOutboundPackages','PackageExportService','_connection','createPackageComponents','_veevaService','rel','Creating\x20outbound\x20packages','SUCCESS','getPackageNames','artifacts','name__v','toString','992765QQBEay','../enums/status.enums','__esModule','all','getEndpointArtifactList','\x27,\x27','defineProperty','__importDefault','includes','export','2236170CwdEfg','log','get','Adding\x20components\x20to\x20outbound\x20package','outbound_package__v','26848269CsEtDh','4870383IOfwaZ'];a403_0x1143=function(){return _0x1304e4;};return a403_0x1143();}const veeva_constants_1=require('../constants/veeva.constants'),jszip_1=__importDefault(require(a403_0x37b51a(0xbd))),status_enums_1=require(a403_0x37b51a(0xeb)),veeva_error_1=require('../classes/errors/veeva-error');class PackageExportService{constructor({veevaService:_0x1931e6,connection:_0x19ab95,logger:_0x2e0da5}){const _0x5e4696=a403_0x37b51a;this[_0x5e4696(0xe2)]=_0x1931e6,this[_0x5e4696(0xe0)]=_0x19ab95,this['_logger']=_0x2e0da5;}async[a403_0x37b51a(0xd1)](_0x5573be,_0x192d00){const _0x4091cf=a403_0x37b51a;this[_0x4091cf(0xc9)]['log'](_0x4091cf(0xe4));const _0x246bf6=veeva_constants_1[_0x4091cf(0xc1)]['ENDPOINT_CREATE_RECORDS']+_0x4091cf(0xf8),_0xb37782=new Array(_0x5573be)[_0x4091cf(0xcf)]({'summary__v':_0x192d00,'object_type__v.api__name__v':_0x4091cf(0x100)});return await this['_veevaService'][_0x4091cf(0xc4)](_0x246bf6,_0xb37782);}async[a403_0x37b51a(0xe1)](_0x5961c6,_0x20f1a5){const _0x10e4cd=a403_0x37b51a;this[_0x10e4cd(0xc9)]['log'](_0x10e4cd(0xf7));const _0x5212eb=veeva_constants_1['VeevaConstants']['ENDPOINT_CREATE_RECORDS']+'package_component__v',_0x412e9a=_0x5961c6[_0x10e4cd(0xcd)]((_0x45711d,_0x29e6b6)=>({'vault_component__v':_0x45711d['id'],'outbound_package__v':_0x20f1a5[Math[_0x10e4cd(0xd0)]((_0x29e6b6+0x1)/veeva_constants_1[_0x10e4cd(0xc1)][_0x10e4cd(0xdd)])-0x1]}));return await this['_veevaService'][_0x10e4cd(0xc4)](_0x5212eb,_0x412e9a);}async[a403_0x37b51a(0xe6)](_0x321bbc){const _0x1dbd0e=a403_0x37b51a;this[_0x1dbd0e(0xc9)][_0x1dbd0e(0xf5)](_0x1dbd0e(0xd5));const _0x37f04c=_0x1dbd0e(0xd7)+_0x321bbc[_0x1dbd0e(0xdb)](_0x1dbd0e(0xef))+'\x27)',_0x707b9c=await this[_0x1dbd0e(0xe2)][_0x1dbd0e(0xd9)](_0x37f04c);return _0x707b9c[_0x1dbd0e(0xc7)]((_0x50b544,_0x79aaec)=>_0x50b544[_0x1dbd0e(0xc3)](_0x79aaec['id'],_0x79aaec[_0x1dbd0e(0xe8)]),new Map());}async[a403_0x37b51a(0x105)](_0x310697){const _0x4e9a47=a403_0x37b51a;this[_0x4e9a47(0xc9)][_0x4e9a47(0xf5)](_0x4e9a47(0x102));const _0x8dcfc7=[],_0x470ffc=_0x310697['map'](_0x20ef09=>{const _0x51ff82=_0x4e9a47;return this['_connection']['post'](veeva_constants_1[_0x51ff82(0xc1)]['ENDPOINT_EXPORT_IMPORT_PACKAGE'],encodeURI(_0x51ff82(0xfc))+'='+encodeURI(_0x20ef09),{'headers':{'Content-Type':_0x51ff82(0xfe)}});}),_0x3c9f30=await Promise[_0x4e9a47(0xed)](_0x470ffc);for(const {data:_0xcfc80b}of _0x3c9f30){if(_0xcfc80b[_0x4e9a47(0xd4)]===status_enums_1['VeevaResponseStatus'][_0x4e9a47(0xe5)]){const {url:_0x4fe841}=_0xcfc80b;_0x8dcfc7['push'](_0x4fe841);}else throw new veeva_error_1[(_0x4e9a47(0xcb))](_0xcfc80b['errors']);}return _0x8dcfc7;}async[a403_0x37b51a(0xee)](_0x31012d){const _0x1771fd=a403_0x37b51a;this[_0x1771fd(0xc9)][_0x1771fd(0xf5)]('Retrieve\x20Jobs\x20Status');const _0x5ea315=[],_0x5e68b9=await this['_veevaService']['getJobResult'](_0x31012d);for(const _0x2d6e59 of _0x5e68b9){const _0x3a21ff=_0x2d6e59[_0x1771fd(0xc8)]['filter'](_0x14b8ae=>_0x14b8ae[_0x1771fd(0xe3)]===_0x1771fd(0xe7))[_0x1771fd(0xcd)](_0x2ac244=>_0x2ac244['href']);_0x5ea315[_0x1771fd(0xff)](..._0x3a21ff);}return _0x5ea315;}async[a403_0x37b51a(0xc0)](_0x131620){const _0x477179=a403_0x37b51a;var _0x5df747;const _0x40afc6=[];this[_0x477179(0xc9)][_0x477179(0xf5)](_0x477179(0xd3));for(const _0x460fe1 of _0x131620){const {data:_0x47cd1c,headers:_0x1867f3}=await this[_0x477179(0xe0)][_0x477179(0xf6)](_0x460fe1,{'responseType':'arraybuffer'}),_0x3beb4e=(_0x5df747=_0x1867f3[_0x477179(0xdc)])===null||_0x5df747===void 0x0?void 0x0:_0x5df747[_0x477179(0xf2)](_0x477179(0xce));if(!_0x3beb4e){const _0x2619bd=_0x47cd1c,_0x508b9f=new jszip_1[(_0x477179(0xd6))]();await _0x508b9f['loadAsync'](_0x2619bd),_0x40afc6[_0x477179(0xff)](_0x508b9f);}else{const _0x53a60c=JSON[_0x477179(0xd2)](_0x47cd1c);throw new veeva_error_1['VeevaError'](_0x53a60c['errors']);}}return _0x40afc6;}async['deletePackageComponents'](_0x2bfcb9){const _0x4fb9eb=a403_0x37b51a;this['_logger'][_0x4fb9eb(0xf5)](_0x4fb9eb(0x101));const _0x146e89=veeva_constants_1[_0x4fb9eb(0xc1)]['ENDPOINT_CREATE_RECORDS']+_0x4fb9eb(0xfd);await this[_0x4fb9eb(0xe2)][_0x4fb9eb(0xda)](_0x146e89,_0x2bfcb9);}async[a403_0x37b51a(0xde)](_0x216469){const _0x474d3=a403_0x37b51a;this[_0x474d3(0xc9)]['log'](_0x474d3(0xbe));const _0x16ea04=veeva_constants_1['VeevaConstants']['ENDPOINT_CREATE_RECORDS']+_0x474d3(0xf8);await this[_0x474d3(0xe2)][_0x474d3(0xda)](_0x16ea04,_0x216469);}async[a403_0x37b51a(0xf3)](_0x211d78,_0x41b15b){const _0x465f62=a403_0x37b51a,_0x1b2fe1=await this[_0x465f62(0xd1)](Math['ceil'](_0x211d78['length']/veeva_constants_1[_0x465f62(0xc1)][_0x465f62(0xdd)]),_0x41b15b),_0x3eb6cf=await this[_0x465f62(0xe1)](_0x211d78,_0x1b2fe1),_0x25f0d6=await this[_0x465f62(0xe6)](_0x1b2fe1),_0x313e92=await this[_0x465f62(0x105)](Array[_0x465f62(0xbf)](_0x25f0d6[_0x465f62(0xfb)]())),_0x1160a0=await this[_0x465f62(0xee)](_0x313e92),_0x4a4807=await this[_0x465f62(0xc0)](_0x1160a0);return await this[_0x465f62(0x104)](_0x3eb6cf),await this[_0x465f62(0xde)](_0x1b2fe1),_0x4a4807;}}exports['PackageExportService']=PackageExportService;