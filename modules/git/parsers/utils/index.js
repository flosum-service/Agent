const a157_0x192f30=a157_0xbd0d;(function(_0x378f21,_0x2d2515){const _0xcf4ee9=a157_0xbd0d,_0x311a1a=_0x378f21();while(!![]){try{const _0x528726=-parseInt(_0xcf4ee9(0x1d3))/0x1*(-parseInt(_0xcf4ee9(0x1ad))/0x2)+-parseInt(_0xcf4ee9(0x19f))/0x3+parseInt(_0xcf4ee9(0x1b8))/0x4*(-parseInt(_0xcf4ee9(0x1d6))/0x5)+parseInt(_0xcf4ee9(0x1de))/0x6*(parseInt(_0xcf4ee9(0x1b2))/0x7)+parseInt(_0xcf4ee9(0x1b4))/0x8*(-parseInt(_0xcf4ee9(0x19e))/0x9)+parseInt(_0xcf4ee9(0x1a0))/0xa+-parseInt(_0xcf4ee9(0x1af))/0xb*(-parseInt(_0xcf4ee9(0x1d7))/0xc);if(_0x528726===_0x2d2515)break;else _0x311a1a['push'](_0x311a1a['shift']());}catch(_0x17ca8f){_0x311a1a['push'](_0x311a1a['shift']());}}}(a157_0x5bae,0x30497));const a157_0x41ebfe=(function(){let _0x1dd3dc=!![];return function(_0x5e61cf,_0x29302){const _0x394461=_0x1dd3dc?function(){const _0x43e1c0=a157_0xbd0d;if(_0x29302){const _0x256ff4=_0x29302[_0x43e1c0(0x1d0)](_0x5e61cf,arguments);return _0x29302=null,_0x256ff4;}}:function(){};return _0x1dd3dc=![],_0x394461;};}()),a157_0x3a2569=a157_0x41ebfe(this,function(){const _0xbf9012=a157_0xbd0d;return a157_0x3a2569[_0xbf9012(0x1a3)]()['search'](_0xbf9012(0x1c1))[_0xbf9012(0x1a3)]()[_0xbf9012(0x1d5)](a157_0x3a2569)[_0xbf9012(0x1c0)](_0xbf9012(0x1c1));});a157_0x3a2569();'use strict';var __importDefault=this&&this[a157_0x192f30(0x1b3)]||function(_0x55cb1b){const _0x15dd4d=a157_0x192f30;return _0x55cb1b&&_0x55cb1b[_0x15dd4d(0x1cc)]?_0x55cb1b:{'default':_0x55cb1b};};Object[a157_0x192f30(0x1c4)](exports,a157_0x192f30(0x1cc),{'value':!![]}),exports[a157_0x192f30(0x1dd)]=exports[a157_0x192f30(0x1da)]=exports['extractFileNameFromFiles']=exports[a157_0x192f30(0x1bd)]=exports[a157_0x192f30(0x1e0)]=exports[a157_0x192f30(0x1bb)]=exports[a157_0x192f30(0x1aa)]=exports['extractFilenameFromPath']=exports[a157_0x192f30(0x1ce)]=exports[a157_0x192f30(0x1ae)]=exports[a157_0x192f30(0x1bf)]=void 0x0;const constants_1=require(a157_0x192f30(0x1c9)),path_1=__importDefault(require(a157_0x192f30(0x19c))),child_types_map_1=__importDefault(require('../data/child-types-map')),parent_xml_types_1=__importDefault(require('../data/parent-xml-types')),xml_v2_1=require('./xml-v2'),crc_32_1=__importDefault(require(a157_0x192f30(0x1e3))),parent_xml_types_map_1=__importDefault(require(a157_0x192f30(0x1b1))),fs_internal_1=require(a157_0x192f30(0x1ab));function convertToCleanPaths(_0x2dfd34){const _0x7b1b70=a157_0x192f30,_0x2b22ee=_0x2dfd34['filter'](_0x730680=>_0x730680[_0x7b1b70(0x1a6)](constants_1['META_XML_EXTENSION'])),_0x10fe31=_0x2b22ee[_0x7b1b70(0x1dc)](_0x32989e=>_0x32989e[_0x7b1b70(0x1a1)](new RegExp(constants_1[_0x7b1b70(0x1ba)]+'$'),'')),_0x3c4b8f=_0x2dfd34[_0x7b1b70(0x1c7)](_0x15cb4d=>!_0x2b22ee[_0x7b1b70(0x1a8)](_0x15cb4d));return[...new Set([..._0x3c4b8f,..._0x10fe31])];}exports[a157_0x192f30(0x1bf)]=convertToCleanPaths;function filterParserPaths(_0x12b344){const _0x2c7039=a157_0x192f30,_0x497a56=[...new Set(_0x12b344[_0x2c7039(0x1c7)](_0x37dc49=>!_0x37dc49[_0x2c7039(0x1a6)](constants_1[_0x2c7039(0x1ba)])))],_0x39f4f3=_0x12b344[_0x2c7039(0x1c7)](_0x4770ce=>_0x4770ce[_0x2c7039(0x1a6)](constants_1['META_XML_EXTENSION']))[_0x2c7039(0x1c7)](_0x40ddda=>!_0x497a56['includes'](_0x40ddda[_0x2c7039(0x1a1)](constants_1[_0x2c7039(0x1ba)],'')));return[..._0x39f4f3,..._0x497a56];}exports[a157_0x192f30(0x1ae)]=filterParserPaths;function getChildComponentTypeByChildNodeName(_0x33aeac){const _0x4c25a3=a157_0x192f30,_0x454d10=Object['entries'](child_types_map_1['default'])[_0x4c25a3(0x1d9)](([_0x3c9953,_0x18c455])=>_0x18c455===_0x33aeac);if(!_0x454d10)throw new Error(_0x4c25a3(0x1ac)+_0x33aeac);return _0x454d10[0x0];}exports[a157_0x192f30(0x1ce)]=getChildComponentTypeByChildNodeName;function extractFilenameFromPath(_0x2ee108){const _0x25fc18=a157_0x192f30,_0x1b0825=_0x2ee108['split'](path_1[_0x25fc18(0x19d)]['sep']),_0x3be6f0=path_1[_0x25fc18(0x19d)][_0x25fc18(0x1d4)](_0x2ee108[_0x25fc18(0x1a1)](constants_1['META_XML_EXTENSION'],''),path_1[_0x25fc18(0x19d)]['extname'](_0x2ee108));if(_0x1b0825[_0x25fc18(0x1df)]>0x2)return _0x1b0825[_0x1b0825[_0x25fc18(0x1df)]-0x2]+'/'+_0x3be6f0;return _0x3be6f0;}exports[a157_0x192f30(0x1c8)]=extractFilenameFromPath;function isParentComponent({type:_0x249e89}){const _0xc3f415=a157_0x192f30;return parent_xml_types_1[_0xc3f415(0x19d)]['includes'](_0x249e89);}exports['isParentComponent']=isParentComponent;function isParentComponentFile(_0x405ae6){const _0x4368d8=a157_0x192f30,_0x1476c1=path_1['default'][_0x4368d8(0x19a)](_0x405ae6);return Object[_0x4368d8(0x1be)](parent_xml_types_map_1[_0x4368d8(0x19d)])[_0x4368d8(0x1b7)](_0xf6aa9d=>_0x1476c1[_0x4368d8(0x1c2)][_0x4368d8(0x1a6)](_0xf6aa9d));}exports[a157_0x192f30(0x1bb)]=isParentComponentFile;function calculateCRC32(_0x116cf4){const _0x3e12a0=a157_0x192f30,_0xef960=Object[_0x3e12a0(0x1cf)](_0x116cf4[_0x3e12a0(0x1a4)])['sort']();switch(_0xef960[_0x3e12a0(0x1df)]){case 0x1:{const [_0x472eef]=_0xef960,_0x30eb12=_0x116cf4[_0x3e12a0(0x1a4)][_0x472eef];return crc_32_1[_0x3e12a0(0x19d)][_0x3e12a0(0x1d8)](_0x30eb12[_0x3e12a0(0x1a3)]('utf-8'),0x20)[_0x3e12a0(0x1a3)]();}case 0x2:{const [_0x158b7e,_0x3a2b1f]=_0xef960,_0x1060cb=_0x116cf4['files'][_0x158b7e],_0x3ac82f=_0x116cf4[_0x3e12a0(0x1a4)][_0x3a2b1f];return crc_32_1[_0x3e12a0(0x19d)][_0x3e12a0(0x1d8)](_0x1060cb['toString'](_0x3e12a0(0x1e1)),0x20)[_0x3e12a0(0x1a3)]()+'\x20'+crc_32_1[_0x3e12a0(0x19d)]['str'](_0x3ac82f['toString'](_0x3e12a0(0x1e1)),0x20)['toString']();}default:{let _0x4ac24e=0x0;if(_0xef960[_0x3e12a0(0x1df)]>0x0)_0x4ac24e=crc_32_1[_0x3e12a0(0x19d)]['str'](_0x116cf4[_0x3e12a0(0x1a4)][_0xef960[0x0]]['toString'](_0x3e12a0(0x1e1)),0x20);for(let _0x4e6fd4=0x1;_0x4e6fd4<_0xef960[_0x3e12a0(0x1df)];_0x4e6fd4++){const _0xb73b3f=crc_32_1[_0x3e12a0(0x19d)]['str'](_0x116cf4[_0x3e12a0(0x1a4)][_0xef960[_0x4e6fd4]][_0x3e12a0(0x1a3)](_0x3e12a0(0x1e1)),0x20);_0x4ac24e=Math[_0x3e12a0(0x1d1)]((_0xb73b3f+_0x4ac24e)/0x2);}return _0x4ac24e['toString']();}}}exports['calculateCRC32']=calculateCRC32;function createChildComponentsFromParent(_0x34b464,_0x2153b8,_0x8d9c51){const _0x34d03d=a157_0x192f30,_0x147e67=[];for(const _0xabdcb8 of _0x8d9c51){const _0x2fa2fc=xml_v2_1['XmlV2'][_0x34d03d(0x1a2)](xml_v2_1[_0x34d03d(0x1db)]['createEmptyRootNodeFrom'](_0x2153b8),_0xabdcb8['nodeName'],_0xabdcb8[_0x34d03d(0x1b6)]),_0x52f4de={};_0x52f4de[_0x34d03d(0x1c3)]=_0x34b464['filePath'],_0x52f4de[_0x34d03d(0x1b5)]=getChildComponentTypeByChildNodeName(_0xabdcb8[_0x34d03d(0x1d2)]),_0x34b464[_0x34d03d(0x1b5)]===_0x34d03d(0x1b9)?_0x52f4de[_0x34d03d(0x1c5)]=_0xabdcb8[_0x34d03d(0x1b6)][_0x34d03d(0x1cd)]:_0x52f4de[_0x34d03d(0x1c5)]=_0x34b464['name']+'.'+_0xabdcb8[_0x34d03d(0x1b6)][_0x34d03d(0x1cd)],_0x52f4de[_0x34d03d(0x1a4)]={[Object[_0x34d03d(0x1cf)](_0x34b464['files'])[0x0]]:Buffer['from'](xml_v2_1[_0x34d03d(0x1db)][_0x34d03d(0x1e2)](_0x2fa2fc,![]))},_0x52f4de[_0x34d03d(0x19b)]=calculateCRC32(_0x52f4de),_0x147e67[_0x34d03d(0x1b0)](_0x52f4de);}return _0x147e67;}exports[a157_0x192f30(0x1bd)]=createChildComponentsFromParent;function extractFileNameFromFiles({files:_0x41a976}){const _0x51ce63=a157_0x192f30;var _0x37cb24;const _0x2cf0b6=Object[_0x51ce63(0x1cf)](_0x41a976);return((_0x37cb24=_0x2cf0b6[0x0])===null||_0x37cb24===void 0x0?void 0x0:_0x37cb24['replace'](constants_1[_0x51ce63(0x1ba)],''))||'';}exports['extractFileNameFromFiles']=extractFileNameFromFiles;async function extractComponentTypeFromFiles({files:_0x298ef1}){const _0x278f6e=a157_0x192f30,_0x49a244=Object[_0x278f6e(0x1cf)](_0x298ef1),_0x5ab682=_0x49a244[_0x278f6e(0x1d9)](_0x93dda0=>_0x93dda0[_0x278f6e(0x1a6)](constants_1[_0x278f6e(0x1ba)]))||_0x49a244[0x0];try{const _0x432b60=await xml_v2_1[_0x278f6e(0x1db)]['parse'](_0x298ef1[_0x5ab682][_0x278f6e(0x1a3)]('utf-8')),_0x4db3d0=Object[_0x278f6e(0x1cf)](_0x432b60)[0x0];if(!_0x4db3d0)throw new Error();return _0x4db3d0;}catch(_0x1aea0b){throw new Error('Cannot\x20identify\x20component\x20type.\x20At\x20file\x20['+_0x49a244[_0x278f6e(0x199)](_0x5ab682)+_0x278f6e(0x1cb)+_0x49a244[_0x278f6e(0x1ca)](',\x20')+')');}}function a157_0x5bae(){const _0x34ecd3=['replace','addChildNode','toString','files','[./-]{1}','endsWith','readDir','includes','relative','isParentComponent','../../internal/fs.internal','Unknown\x20child\x20type\x20for\x20','232082byCXYC','filterParserPaths','1001275dBCklP','push','../data/parent-xml-types-map','660149TbwIoc','__importDefault','2252936Dazaag','type','nodeData','some','2588oSSTeE','CustomLabels','META_XML_EXTENSION','isParentComponentFile','dirname','createChildComponentsFromParent','values','convertToCleanPaths','search','(((.+)+)+)+$','dir','filePath','defineProperty','name','match','filter','extractFilenameFromPath','../../../../constants','join',']\x20index\x20in\x20(','__esModule','fullName','getChildComponentTypeByChildNodeName','keys','apply','round','nodeName','1vWbxga','basename','constructor','1910TMZyPh','72dQhuTF','str','find','extractComponentTypeFromFiles','XmlV2','map','readFilesByFilename','6qUnKIm','length','calculateCRC32','utf-8','convertToString','crc-32','indexOf','parse','crc','path','default','9HUesxO','104448shGlLg','48720DQccNd'];a157_0x5bae=function(){return _0x34ecd3;};return a157_0x5bae();}function a157_0xbd0d(_0xc5b72b,_0x1703a9){const _0x1bca40=a157_0x5bae();return a157_0xbd0d=function(_0x3a2569,_0x41ebfe){_0x3a2569=_0x3a2569-0x199;let _0x5bae73=_0x1bca40[_0x3a2569];return _0x5bae73;},a157_0xbd0d(_0xc5b72b,_0x1703a9);}exports[a157_0x192f30(0x1da)]=extractComponentTypeFromFiles;async function readFilesByFilename(_0x2c24b3,_0x5b9992){const _0x27a366=a157_0x192f30,_0x42a0ae=path_1[_0x27a366(0x19d)][_0x27a366(0x1bc)](_0x2c24b3),_0x1f6cc2=path_1[_0x27a366(0x19d)]['join'](_0x5b9992,_0x42a0ae),_0x2a23a8=await fs_internal_1['FS'][_0x27a366(0x1a7)](_0x1f6cc2,!![]),_0x924ed1=_0x2a23a8['map'](_0x3578c4=>path_1[_0x27a366(0x19d)][_0x27a366(0x1a9)](_0x5b9992,_0x3578c4)),_0x5e1b1b=new RegExp('^'+_0x2c24b3+_0x27a366(0x1a5));return _0x924ed1[_0x27a366(0x1c7)](_0x34c753=>_0x34c753[_0x27a366(0x1c6)](_0x5e1b1b));}exports[a157_0x192f30(0x1dd)]=readFilesByFilename;