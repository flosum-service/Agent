const a313_0x8d5c3c=a313_0x25e8;function a313_0x1152(){const _0x14bd87=['../../../../configs/path','17759hIuPBi','__esModule','__importDefault','apply','666643uGZkNo','3487290SecxtM','../../constants','log','constructor','2EdaPaz','warning','13103090mkLsIY','INFO','default','../../../shared/utils/csv.utils','initMessage','catch','systemLogger','1605hocWDT','join','defineProperty','(((.+)+)+)+$','1758huTWFq','appendFile','982890ZZjsyI','logPath','stringify','header','5115240VpFYIo','WARNING','error','2228PqTwlE','appendToLog','../../../../constants/job','search','message','getTime'];a313_0x1152=function(){return _0x14bd87;};return a313_0x1152();}(function(_0x37ebc8,_0x30d638){const _0x20248b=a313_0x25e8,_0x48cd3a=_0x37ebc8();while(!![]){try{const _0x33c09e=parseInt(_0x20248b(0x8f))/0x1*(-parseInt(_0x20248b(0x94))/0x2)+-parseInt(_0x20248b(0x9d))/0x3*(-parseInt(_0x20248b(0xaa))/0x4)+parseInt(_0x20248b(0x90))/0x5+-parseInt(_0x20248b(0xa1))/0x6*(-parseInt(_0x20248b(0xb1))/0x7)+parseInt(_0x20248b(0xa7))/0x8+parseInt(_0x20248b(0xa3))/0x9+-parseInt(_0x20248b(0x96))/0xa;if(_0x33c09e===_0x30d638)break;else _0x48cd3a['push'](_0x48cd3a['shift']());}catch(_0x573d99){_0x48cd3a['push'](_0x48cd3a['shift']());}}}(a313_0x1152,0x7c9f9));function a313_0x25e8(_0x404bc3,_0x140356){const _0x22e482=a313_0x1152();return a313_0x25e8=function(_0xb3e8a9,_0x3554ad){_0xb3e8a9=_0xb3e8a9-0x8f;let _0x1152d0=_0x22e482[_0xb3e8a9];return _0x1152d0;},a313_0x25e8(_0x404bc3,_0x140356);}const a313_0x3554ad=(function(){let _0xf0ba6a=!![];return function(_0x176bff,_0x25163b){const _0x194306=_0xf0ba6a?function(){const _0x3129f4=a313_0x25e8;if(_0x25163b){const _0x3fa0f8=_0x25163b[_0x3129f4(0xb4)](_0x176bff,arguments);return _0x25163b=null,_0x3fa0f8;}}:function(){};return _0xf0ba6a=![],_0x194306;};}()),a313_0xb3e8a9=a313_0x3554ad(this,function(){const _0x6ef097=a313_0x25e8;return a313_0xb3e8a9['toString']()[_0x6ef097(0xad)]('(((.+)+)+)+$')['toString']()[_0x6ef097(0x93)](a313_0xb3e8a9)['search'](_0x6ef097(0xa0));});a313_0xb3e8a9();'use strict';var __importDefault=this&&this[a313_0x8d5c3c(0xb3)]||function(_0x312669){const _0x55b92b=a313_0x8d5c3c;return _0x312669&&_0x312669[_0x55b92b(0xb2)]?_0x312669:{'default':_0x312669};};Object[a313_0x8d5c3c(0x9f)](exports,'__esModule',{'value':!![]});const promises_1=require('fs/promises'),path_1=__importDefault(require('path')),csv_utils_1=__importDefault(require(a313_0x8d5c3c(0x99))),job_1=require(a313_0x8d5c3c(0xac)),constants_1=require(a313_0x8d5c3c(0x91)),path_2=require(a313_0x8d5c3c(0xb0));class Logger{constructor(_0x2ca692,_0x5f2c72){const _0x25be0d=a313_0x8d5c3c;this[_0x25be0d(0x9c)]=_0x5f2c72,this[_0x25be0d(0x9a)]=!![],this[_0x25be0d(0xa4)]=path_1[_0x25be0d(0x98)][_0x25be0d(0x9e)](path_2['dataPath'],constants_1['RETRIEVE_METADATA_FOLDER_NAME'],_0x2ca692,job_1['JOB_LOG_DETAILS_FILENAME']);}async['appendToLog'](_0x795534){const _0x57f4e7=a313_0x8d5c3c,_0x1def0b={'header':![]};this[_0x57f4e7(0x9a)]&&(_0x1def0b[_0x57f4e7(0xa6)]=!![],this[_0x57f4e7(0x9a)]=![]);const _0x52d8a6=await csv_utils_1[_0x57f4e7(0x98)][_0x57f4e7(0xa5)]([_0x795534],_0x1def0b);await(0x0,promises_1[_0x57f4e7(0xa2)])(this[_0x57f4e7(0xa4)],_0x52d8a6)[_0x57f4e7(0x9b)](_0x23180f=>this[_0x57f4e7(0x9c)][_0x57f4e7(0xa9)](_0x23180f[_0x57f4e7(0xae)]));}async[a313_0x8d5c3c(0x92)](_0xda66da){const _0x401d2f=a313_0x8d5c3c;this[_0x401d2f(0x9c)][_0x401d2f(0x92)](_0xda66da),await this[_0x401d2f(0xab)]({'date':new Date()['getTime'](),'type':_0x401d2f(0x97),'message':_0xda66da});}async['error'](_0x444b03){const _0x304f77=a313_0x8d5c3c;this[_0x304f77(0x9c)]['error'](_0x444b03),await this[_0x304f77(0xab)]({'date':new Date()[_0x304f77(0xaf)](),'type':'ERROR','message':_0x444b03});}async[a313_0x8d5c3c(0x95)](_0x83bd26){const _0x4b27e4=a313_0x8d5c3c;this[_0x4b27e4(0x9c)][_0x4b27e4(0x92)](_0x83bd26),await this[_0x4b27e4(0xab)]({'date':new Date()[_0x4b27e4(0xaf)](),'type':_0x4b27e4(0xa8),'message':_0x83bd26});}}exports[a313_0x8d5c3c(0x98)]=Logger;