const a100_0x58f2ef=a100_0x2b12;(function(_0x3e7431,_0x3a5854){const _0x59b4d8=a100_0x2b12,_0x120b3d=_0x3e7431();while(!![]){try{const _0x36c4df=-parseInt(_0x59b4d8(0xb5))/0x1*(parseInt(_0x59b4d8(0xa8))/0x2)+-parseInt(_0x59b4d8(0x93))/0x3*(parseInt(_0x59b4d8(0x96))/0x4)+-parseInt(_0x59b4d8(0xb8))/0x5+-parseInt(_0x59b4d8(0xb9))/0x6*(parseInt(_0x59b4d8(0x9a))/0x7)+parseInt(_0x59b4d8(0xab))/0x8+parseInt(_0x59b4d8(0xc3))/0x9+-parseInt(_0x59b4d8(0xaf))/0xa*(-parseInt(_0x59b4d8(0xb2))/0xb);if(_0x36c4df===_0x3a5854)break;else _0x120b3d['push'](_0x120b3d['shift']());}catch(_0x3fa3a0){_0x120b3d['push'](_0x120b3d['shift']());}}}(a100_0x5381,0xf2d04));const a100_0x74078a=(function(){let _0x1bcba6=!![];return function(_0x3bcad4,_0x22be16){const _0x391761=_0x1bcba6?function(){const _0x40340f=a100_0x2b12;if(_0x22be16){const _0x1ab220=_0x22be16[_0x40340f(0xc2)](_0x3bcad4,arguments);return _0x22be16=null,_0x1ab220;}}:function(){};return _0x1bcba6=![],_0x391761;};}()),a100_0x4df09e=a100_0x74078a(this,function(){const _0x1a6be7=a100_0x2b12;return a100_0x4df09e['toString']()['search'](_0x1a6be7(0x92))[_0x1a6be7(0xc5)]()[_0x1a6be7(0x99)](a100_0x4df09e)[_0x1a6be7(0xaa)](_0x1a6be7(0x92));});a100_0x4df09e();'use strict';var __importDefault=this&&this[a100_0x58f2ef(0xae)]||function(_0x79282b){const _0x5ce22a=a100_0x58f2ef;return _0x79282b&&_0x79282b[_0x5ce22a(0x9c)]?_0x79282b:{'default':_0x79282b};};Object[a100_0x58f2ef(0xb1)](exports,a100_0x58f2ef(0x9c),{'value':!![]}),exports['extractComponentTypeFromFiles']=exports[a100_0x58f2ef(0xbd)]=exports[a100_0x58f2ef(0xb3)]=exports[a100_0x58f2ef(0xce)]=exports[a100_0x58f2ef(0x95)]=exports[a100_0x58f2ef(0xb7)]=exports[a100_0x58f2ef(0x9e)]=exports[a100_0x58f2ef(0x90)]=exports[a100_0x58f2ef(0xac)]=void 0x0;const constants_1=require(a100_0x58f2ef(0xc7)),path_1=__importDefault(require(a100_0x58f2ef(0xb6))),child_types_map_1=__importDefault(require(a100_0x58f2ef(0x8b))),parent_xml_types_1=__importDefault(require(a100_0x58f2ef(0x8c))),xml_1=require('./xml'),crc_32_1=__importDefault(require(a100_0x58f2ef(0x8a))),parent_xml_types_map_1=__importDefault(require(a100_0x58f2ef(0xbb)));function convertToCleanPaths(_0x35cde4){const _0x3d3db7=a100_0x58f2ef,_0x253f7b=_0x35cde4[_0x3d3db7(0xba)](_0x3e9eeb=>_0x3e9eeb[_0x3d3db7(0x98)](constants_1['META_XML_EXTENSION'])),_0x5d6508=_0x253f7b[_0x3d3db7(0xa2)](_0x254f7a=>_0x254f7a[_0x3d3db7(0xa7)](new RegExp(constants_1['META_XML_EXTENSION']+'$'),'')),_0x55a2b2=_0x35cde4[_0x3d3db7(0xba)](_0x1b208a=>!_0x253f7b[_0x3d3db7(0x8d)](_0x1b208a));return[...new Set([..._0x55a2b2,..._0x5d6508])];}exports[a100_0x58f2ef(0xac)]=convertToCleanPaths;function getChildComponentTypeByChildNodeName(_0x5f3538){const _0x3c5949=a100_0x58f2ef,_0x29dc18=Object['entries'](child_types_map_1['default'])[_0x3c5949(0xc1)](([_0x59cc9d,_0x333ab8])=>_0x333ab8===_0x5f3538);if(!_0x29dc18)throw new Error(_0x3c5949(0xa9)+_0x5f3538);return _0x29dc18[0x0];}exports[a100_0x58f2ef(0x90)]=getChildComponentTypeByChildNodeName;function extractFilenameFromPath(_0x75d478){const _0x242385=a100_0x58f2ef,_0x6be476=_0x75d478[_0x242385(0xcc)]('/'),_0x3e0265=path_1[_0x242385(0x94)][_0x242385(0x89)](_0x75d478,path_1[_0x242385(0x94)][_0x242385(0xcd)](_0x75d478));if(_0x6be476[_0x242385(0xa5)]>0x2)return _0x6be476[_0x6be476[_0x242385(0xa5)]-0x2]+'/'+_0x3e0265;return _0x3e0265;}exports[a100_0x58f2ef(0x9e)]=extractFilenameFromPath;function isParentComponent({type:_0x127061}){const _0x2b756c=a100_0x58f2ef;return parent_xml_types_1[_0x2b756c(0x94)]['includes'](_0x127061);}exports['isParentComponent']=isParentComponent;function isParentComponentFile(_0x4b507a){const _0xacb8be=a100_0x58f2ef,_0x1d97f3=path_1[_0xacb8be(0x94)]['parse'](_0x4b507a);return Object[_0xacb8be(0xbe)](parent_xml_types_map_1['default'])[_0xacb8be(0x97)](_0x394c50=>_0x1d97f3['dir'][_0xacb8be(0x98)](_0x394c50));}exports[a100_0x58f2ef(0x95)]=isParentComponentFile;function calculateCRC32(_0x46a71f){const _0x2c6f82=a100_0x58f2ef,_0x3a178e=Object[_0x2c6f82(0x9d)](_0x46a71f['files'])[_0x2c6f82(0xad)]();switch(_0x3a178e[_0x2c6f82(0xa5)]){case 0x1:{const [_0x3a7523]=_0x3a178e,_0x2a591e=_0x46a71f[_0x2c6f82(0xca)][_0x3a7523];return crc_32_1['default'][_0x2c6f82(0x8f)](_0x2a591e[_0x2c6f82(0xc5)](_0x2c6f82(0xa6)),0x20)[_0x2c6f82(0xc5)]();}case 0x2:{const [_0x1a4de2,_0x5e75fb]=_0x3a178e,_0x504216=_0x46a71f[_0x2c6f82(0xca)][_0x1a4de2],_0x33a4e5=_0x46a71f[_0x2c6f82(0xca)][_0x5e75fb];return crc_32_1['default'][_0x2c6f82(0x8f)](_0x504216[_0x2c6f82(0xc5)](_0x2c6f82(0xa6)),0x20)[_0x2c6f82(0xc5)]()+'\x20'+crc_32_1[_0x2c6f82(0x94)]['str'](_0x33a4e5[_0x2c6f82(0xc5)](_0x2c6f82(0xa6)),0x20)['toString']();}default:{let _0x31cc55=0x0;if(_0x3a178e[_0x2c6f82(0xa5)]>0x0)_0x31cc55=crc_32_1[_0x2c6f82(0x94)][_0x2c6f82(0x8f)](_0x46a71f[_0x2c6f82(0xca)][_0x3a178e[0x0]][_0x2c6f82(0xc5)]('utf-8'),0x20);for(let _0x53dec9=0x1;_0x53dec9<_0x3a178e[_0x2c6f82(0xa5)];_0x53dec9++){const _0x10e404=crc_32_1[_0x2c6f82(0x94)]['str'](_0x46a71f[_0x2c6f82(0xca)][_0x3a178e[_0x53dec9]][_0x2c6f82(0xc5)]('utf-8'),0x20);_0x31cc55=Math[_0x2c6f82(0xc4)]((_0x10e404+_0x31cc55)/0x2);}return _0x31cc55[_0x2c6f82(0xc5)]();}}}exports[a100_0x58f2ef(0xce)]=calculateCRC32;function createChildComponentsFromParent(_0x55d53c,_0x17fab5,_0xf89d18){const _0x5742e1=a100_0x58f2ef,_0x127afb=[];for(const _0x27397f of _0xf89d18){const _0x5a976f=xml_1[_0x5742e1(0xc6)][_0x5742e1(0x8e)](xml_1[_0x5742e1(0xc6)]['createEmptyRootNodeFrom'](_0x17fab5),_0x27397f['nodeName'],_0x27397f['nodeData']),_0x4487fe={};_0x4487fe[_0x5742e1(0xc0)]=_0x55d53c[_0x5742e1(0xc0)],_0x4487fe[_0x5742e1(0x91)]=getChildComponentTypeByChildNodeName(_0x27397f['nodeName']),_0x55d53c[_0x5742e1(0x91)]===_0x5742e1(0xc9)?_0x4487fe['name']=_0x27397f[_0x5742e1(0xb4)][_0x5742e1(0xb0)][0x0]:_0x4487fe[_0x5742e1(0xcb)]=_0x55d53c[_0x5742e1(0xcb)]+'.'+_0x27397f[_0x5742e1(0xb4)][_0x5742e1(0xb0)][0x0],_0x4487fe['files']={[Object[_0x5742e1(0x9d)](_0x55d53c['files'])[0x0]]:Buffer[_0x5742e1(0xa4)](xml_1[_0x5742e1(0xc6)][_0x5742e1(0xa0)](_0x5a976f,![]))},_0x4487fe[_0x5742e1(0x9b)]=calculateCRC32(_0x4487fe),_0x127afb[_0x5742e1(0xc8)](_0x4487fe);}return _0x127afb;}exports['createChildComponentsFromParent']=createChildComponentsFromParent;function a100_0x5381(){const _0x3ea0a2=['sort','__importDefault','10bvwAjP','fullName','defineProperty','30857662vNLmVR','createChildComponentsFromParent','nodeData','389343UEUPsA','path','isParentComponent','6384745edFGdM','695694HpqEhX','filter','../data/parent-xml-types-map','Cannot\x20identify\x20component\x20type.\x20At\x20file\x20[','extractFileNameFromFiles','values','join','filePath','find','apply','13466043oUXqzi','round','toString','Xml','../../../constants','push','CustomLabels','files','name','split','extname','calculateCRC32','basename','crc-32','../data/child-types-map','../data/parent-xml-types','includes','addChildNode','str','getChildComponentTypeByChildNodeName','type','(((.+)+)+)+$','55920TXKUUK','default','isParentComponentFile','220jmSpNj','some','endsWith','constructor','49DOrhEA','crc','__esModule','keys','extractFilenameFromPath','parse','convertToString','extractComponentTypeFromFiles','map',']\x20index\x20in\x20(','from','length','utf-8','replace','8TmUunC','Unknown\x20child\x20type\x20for\x20','search','10914072JtGxUm','convertToCleanPaths'];a100_0x5381=function(){return _0x3ea0a2;};return a100_0x5381();}function a100_0x2b12(_0x3fd898,_0x247e88){const _0x46a4fb=a100_0x5381();return a100_0x2b12=function(_0x4df09e,_0x74078a){_0x4df09e=_0x4df09e-0x89;let _0x53816b=_0x46a4fb[_0x4df09e];return _0x53816b;},a100_0x2b12(_0x3fd898,_0x247e88);}function extractFileNameFromFiles({files:_0x4470b2}){const _0xbc7d4=a100_0x58f2ef;var _0x63ef6e;const _0xe439f4=Object['keys'](_0x4470b2);return((_0x63ef6e=_0xe439f4[0x0])===null||_0x63ef6e===void 0x0?void 0x0:_0x63ef6e[_0xbc7d4(0xa7)](constants_1['META_XML_EXTENSION'],''))||'';}exports[a100_0x58f2ef(0xbd)]=extractFileNameFromFiles;async function extractComponentTypeFromFiles({files:_0x573e06}){const _0x1f112e=a100_0x58f2ef,_0xe53987=Object[_0x1f112e(0x9d)](_0x573e06),_0x1282f8=_0xe53987[_0x1f112e(0xc1)](_0x191ba4=>_0x191ba4[_0x1f112e(0x98)](constants_1['META_XML_EXTENSION']))||_0xe53987[0x0];try{const _0x508dcc=await xml_1[_0x1f112e(0xc6)][_0x1f112e(0x9f)](_0x573e06[_0x1282f8][_0x1f112e(0xc5)](_0x1f112e(0xa6))),_0x449ebe=Object[_0x1f112e(0x9d)](_0x508dcc)[0x0];if(!_0x449ebe)throw new Error();return _0x449ebe;}catch(_0x3c7326){throw new Error(_0x1f112e(0xbc)+_0xe53987['indexOf'](_0x1282f8)+_0x1f112e(0xa3)+_0xe53987[_0x1f112e(0xbf)](',\x20')+')');}}exports[a100_0x58f2ef(0xa1)]=extractComponentTypeFromFiles;