const a116_0x4daeb5=a116_0xaaff;(function(_0x49a803,_0x20d435){const _0x1cdae7=a116_0xaaff,_0x46decc=_0x49a803();while(!![]){try{const _0x42158f=-parseInt(_0x1cdae7(0x73))/0x1+parseInt(_0x1cdae7(0xa7))/0x2+-parseInt(_0x1cdae7(0x80))/0x3+-parseInt(_0x1cdae7(0x77))/0x4+-parseInt(_0x1cdae7(0x71))/0x5+-parseInt(_0x1cdae7(0x94))/0x6+-parseInt(_0x1cdae7(0x7b))/0x7*(-parseInt(_0x1cdae7(0x92))/0x8);if(_0x42158f===_0x20d435)break;else _0x46decc['push'](_0x46decc['shift']());}catch(_0x4832ea){_0x46decc['push'](_0x46decc['shift']());}}}(a116_0x68e2,0x4e17c));const a116_0xafa259=(function(){let _0x21a66d=!![];return function(_0x1966c2,_0x531332){const _0x29af16=_0x21a66d?function(){const _0x531407=a116_0xaaff;if(_0x531332){const _0x17d1c9=_0x531332[_0x531407(0x86)](_0x1966c2,arguments);return _0x531332=null,_0x17d1c9;}}:function(){};return _0x21a66d=![],_0x29af16;};}()),a116_0x19dd04=a116_0xafa259(this,function(){const _0x455313=a116_0xaaff;return a116_0x19dd04[_0x455313(0x9d)]()['search']('(((.+)+)+)+$')[_0x455313(0x9d)]()[_0x455313(0x89)](a116_0x19dd04)['search'](_0x455313(0x9f));});a116_0x19dd04();'use strict';var __importDefault=this&&this[a116_0x4daeb5(0x82)]||function(_0xa838c){const _0x5b4223=a116_0x4daeb5;return _0xa838c&&_0xa838c[_0x5b4223(0x78)]?_0xa838c:{'default':_0xa838c};};function a116_0xaaff(_0x2fefe5,_0x58008e){const _0x61c1b5=a116_0x68e2();return a116_0xaaff=function(_0x19dd04,_0xafa259){_0x19dd04=_0x19dd04-0x6d;let _0x68e246=_0x61c1b5[_0x19dd04];return _0x68e246;},a116_0xaaff(_0x2fefe5,_0x58008e);}Object[a116_0x4daeb5(0x99)](exports,a116_0x4daeb5(0x78),{'value':!![]}),exports[a116_0x4daeb5(0x6e)]=void 0x0;const fs_internal_1=require(a116_0x4daeb5(0x7f)),core_1=require(a116_0x4daeb5(0x8a)),xml_1=require(a116_0x4daeb5(0x91)),child_types_1=__importDefault(require('../data/child-types')),child_types_map_1=__importDefault(require(a116_0x4daeb5(0x6d))),path_1=__importDefault(require(a116_0x4daeb5(0xa1)));function a116_0x68e2(){const _0x8e75ab=['../../../../core','Unknown\x20child\x20type\x20','components','remove\x20child\x20component\x20%s\x20[%s]','start','fileName','join','../utils/xml','176iUALDS','remove\x20component\x20directory\x20%s\x20[%s]','659016JELRTw','length','site-meta.xml','removeParent','removeChild','defineProperty','remote\x20empty\x20parent\x20component\x20file\x20%s\x20[%s]','parentComponents','keys','toString','META_EXPERIENCE_BUNDLE','(((.+)+)+)+$','catch','path','makeDir','readFile','ExperienceBundle','MAX_WRITES_PER_TICK','exists','437254RtCGXe','../data/child-types-map','MDApiRemover','META_EXTENSION','split','258685yntwjf','name','66171Qhfesn','log','includes','Xml','2159808MITRpZ','__esModule','removeFile','parse','436534RHJhwQ','remove\x20parent\x20component\x20%s\x20[%s]','logger','isEmptyXml','../../internal/fs.internal','1509081munXBT','isDir','__importDefault','type','default','removeAt','apply','sourceDir','pop','constructor'];a116_0x68e2=function(){return _0x8e75ab;};return a116_0x68e2();}class MDApiRemover{constructor(_0xc1132,_0x553d40){const _0x209781=a116_0x4daeb5;this['components']=_0xc1132,this[_0x209781(0x87)]=_0x553d40,this[_0x209781(0x6f)]='-meta.xml',this[_0x209781(0x9e)]=_0x209781(0x96),this[_0x209781(0xa5)]=0x64,this[_0x209781(0x7d)]=new core_1['Logger'](MDApiRemover[_0x209781(0x72)]),this[_0x209781(0x9b)]={};}async['removeParent'](_0x37a23a){const _0x2444b2=a116_0x4daeb5,_0xbc52ce=path_1[_0x2444b2(0x84)][_0x2444b2(0x90)](this[_0x2444b2(0x87)],_0x37a23a[_0x2444b2(0xa1)]),_0x1267d4=path_1[_0x2444b2(0x84)][_0x2444b2(0x90)](this[_0x2444b2(0x87)],''+_0x37a23a['path']+this['META_EXTENSION']);this['parentComponents'][_0x37a23a[_0x2444b2(0xa1)]]&&delete this[_0x2444b2(0x9b)][_0x37a23a[_0x2444b2(0xa1)]];const _0x44e944=await fs_internal_1['FS'][_0x2444b2(0x81)](_0xbc52ce)[_0x2444b2(0xa0)](()=>![]);if(_0x44e944){this[_0x2444b2(0x7d)]['log'](_0x2444b2(0x93),_0xbc52ce,_0x37a23a[_0x2444b2(0x83)]),await fs_internal_1['FS']['removeDir'](_0xbc52ce);_0x37a23a[_0x2444b2(0x83)]===_0x2444b2(0xa4)?await fs_internal_1['FS']['removeFile'](''+_0xbc52ce+this[_0x2444b2(0x9e)])['catch'](()=>void 0x0):(this['logger']['log']('remove\x20component\x20directory\x20%s\x20[%s]\x20meta\x20file',_0xbc52ce,_0x37a23a[_0x2444b2(0x83)]),await fs_internal_1['FS'][_0x2444b2(0x79)](''+_0xbc52ce+this[_0x2444b2(0x6f)])['catch'](()=>void 0x0));return;}this[_0x2444b2(0x7d)][_0x2444b2(0x74)]('remove\x20component\x20\x20%s\x20[%s]',_0xbc52ce,_0x37a23a[_0x2444b2(0x83)]),await Promise['all']([fs_internal_1['FS'][_0x2444b2(0x79)](_0xbc52ce),fs_internal_1['FS'][_0x2444b2(0x79)](_0x1267d4)]);}async['removeChild'](_0xaaa25d){const _0x22459d=a116_0x4daeb5,{fileName:_0x221495,type:_0xa3b46,path:_0x1d2125}=_0xaaa25d,_0x4d37ea=child_types_map_1[_0x22459d(0x84)][_0xa3b46];if(!_0x4d37ea)throw new Error(_0x22459d(0x8b)+_0xa3b46);if(!this['parentComponents'][_0x1d2125]){const _0x35810f=path_1[_0x22459d(0x84)][_0x22459d(0x90)](this[_0x22459d(0x87)],_0x1d2125),_0x6db960=await fs_internal_1['FS'][_0x22459d(0xa6)](_0x35810f);if(!_0x6db960)return;const _0x30aca6=await fs_internal_1['FS'][_0x22459d(0xa3)](_0x35810f);this['parentComponents'][_0x1d2125]=await xml_1[_0x22459d(0x76)][_0x22459d(0x7a)](_0x30aca6);}const _0x688a83=this['parentComponents'][_0x1d2125],_0x145681=_0x221495[_0x22459d(0x70)]('.')[_0x22459d(0x88)]();xml_1[_0x22459d(0x76)][_0x22459d(0x85)](_0x688a83,_0x4d37ea,_0x145681||_0x221495),xml_1['Xml'][_0x22459d(0x7e)](_0x688a83)?(this[_0x22459d(0x7d)]['log'](_0x22459d(0x9a),_0xaaa25d[_0x22459d(0xa1)],_0xaaa25d['fileName']),await this[_0x22459d(0x97)](_0xaaa25d),delete this[_0x22459d(0x9b)][_0x1d2125]):this['parentComponents'][_0x1d2125]=_0x688a83;}async[a116_0x4daeb5(0x8e)](){const _0xb0619a=a116_0x4daeb5;!await fs_internal_1['FS'][_0xb0619a(0xa6)](this['sourceDir'])&&await fs_internal_1['FS'][_0xb0619a(0xa2)](this[_0xb0619a(0x87)]);for(const _0x4dd1fc of this[_0xb0619a(0x8c)]){!child_types_1[_0xb0619a(0x84)][_0xb0619a(0x75)](_0x4dd1fc['type'])?(this[_0xb0619a(0x7d)][_0xb0619a(0x74)](_0xb0619a(0x7c),_0x4dd1fc[_0xb0619a(0x8f)],_0x4dd1fc['type']),await this[_0xb0619a(0x97)](_0x4dd1fc)):(this[_0xb0619a(0x7d)][_0xb0619a(0x74)](_0xb0619a(0x8d),_0x4dd1fc[_0xb0619a(0x8f)],_0x4dd1fc[_0xb0619a(0x83)]),await this[_0xb0619a(0x98)](_0x4dd1fc));}const _0x242d1d=Object[_0xb0619a(0x9c)](this[_0xb0619a(0x9b)]);this[_0xb0619a(0x7d)][_0xb0619a(0x74)]('have\x20to\x20update\x20%d\x20files',this[_0xb0619a(0x8c)][_0xb0619a(0x95)]);while(_0x242d1d[_0xb0619a(0x95)]){const _0x244b48=_0x242d1d['splice'](0x0,this[_0xb0619a(0xa5)]);for(const _0x1ab8b6 of _0x244b48){await fs_internal_1['FS']['writeFile'](path_1[_0xb0619a(0x84)][_0xb0619a(0x90)](this[_0xb0619a(0x87)],_0x1ab8b6),xml_1[_0xb0619a(0x76)]['convertToString'](this['parentComponents'][_0x1ab8b6]));}}this[_0xb0619a(0x9b)]={};}}exports['MDApiRemover']=MDApiRemover;