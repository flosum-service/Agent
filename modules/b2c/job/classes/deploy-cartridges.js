function a59_0x27d6(_0x11ac3f,_0x5e2487){const _0x44f0a6=a59_0x9960();return a59_0x27d6=function(_0x19b435,_0x175133){_0x19b435=_0x19b435-0x77;let _0x9960dd=_0x44f0a6[_0x19b435];return _0x9960dd;},a59_0x27d6(_0x11ac3f,_0x5e2487);}const a59_0x532780=a59_0x27d6;(function(_0x199cb1,_0x3c0ddc){const _0x580e59=a59_0x27d6,_0x4e560e=_0x199cb1();while(!![]){try{const _0x51647f=-parseInt(_0x580e59(0xa1))/0x1*(-parseInt(_0x580e59(0x99))/0x2)+-parseInt(_0x580e59(0x7b))/0x3*(-parseInt(_0x580e59(0x7f))/0x4)+parseInt(_0x580e59(0x85))/0x5+-parseInt(_0x580e59(0x87))/0x6*(parseInt(_0x580e59(0x82))/0x7)+-parseInt(_0x580e59(0x8a))/0x8*(-parseInt(_0x580e59(0x91))/0x9)+-parseInt(_0x580e59(0x98))/0xa+-parseInt(_0x580e59(0x92))/0xb*(parseInt(_0x580e59(0x8e))/0xc);if(_0x51647f===_0x3c0ddc)break;else _0x4e560e['push'](_0x4e560e['shift']());}catch(_0x62de9d){_0x4e560e['push'](_0x4e560e['shift']());}}}(a59_0x9960,0xcf8ac));const a59_0x175133=(function(){let _0x81adf9=!![];return function(_0x176037,_0x4bf2bf){const _0x588c70=_0x81adf9?function(){const _0x411270=a59_0x27d6;if(_0x4bf2bf){const _0x187b0a=_0x4bf2bf[_0x411270(0x93)](_0x176037,arguments);return _0x4bf2bf=null,_0x187b0a;}}:function(){};return _0x81adf9=![],_0x588c70;};}()),a59_0x19b435=a59_0x175133(this,function(){const _0x153b7d=a59_0x27d6;return a59_0x19b435[_0x153b7d(0x90)]()[_0x153b7d(0x79)](_0x153b7d(0xa7))['toString']()['constructor'](a59_0x19b435)['search'](_0x153b7d(0xa7));});a59_0x19b435();'use strict';var __importDefault=this&&this[a59_0x532780(0x81)]||function(_0x406b3a){const _0x17746f=a59_0x532780;return _0x406b3a&&_0x406b3a[_0x17746f(0x96)]?_0x406b3a:{'default':_0x406b3a};};Object[a59_0x532780(0xa3)](exports,'__esModule',{'value':!![]});const utils_1=require('./utils'),path_1=__importDefault(require(a59_0x532780(0x9a))),adm_zip_1=__importDefault(require(a59_0x532780(0x95))),SFCC=require(a59_0x532780(0x9b));class DeployCartridges{constructor(_0x492acc,_0x15e638,_0x562575,_0x27a117,_0x2de9b7){const _0x36a666=a59_0x532780;this[_0x36a666(0x9e)]=_0x492acc,this[_0x36a666(0x7a)]=_0x15e638,this['codeVersion']=_0x562575,this[_0x36a666(0x88)]=_0x27a117,this[_0x36a666(0xa2)]=_0x2de9b7;const {instanceUrl:_0x1796ed,clientId:_0x2d790d,clientSecret:_0x44c875}=this[_0x36a666(0x7a)];this['instanceUrl']=_0x1796ed,this[_0x36a666(0xa4)]=_0x2d790d,this['clientSecret']=_0x44c875;}async['deployCartridges'](){const _0x11780e=a59_0x532780,_0x5d66ee=this[_0x11780e(0x94)]+_0x11780e(0x9f),_0x465a07=await this[_0x11780e(0x7e)](_0x5d66ee);await this[_0x11780e(0xa2)][_0x11780e(0x8f)](_0x11780e(0xa5)+_0x5d66ee+'\x27\x20=>\x20\x27'+this['instanceUrl']+_0x11780e(0x77)+this[_0x11780e(0x94)]+'\x27.'),await this[_0x11780e(0x84)](_0x465a07);}async['createZipFile'](_0x137e73){const _0xccd58b=a59_0x532780,_0x5c887c=path_1[_0xccd58b(0x83)][_0xccd58b(0x8b)](this['jobPath'],'cartridges'),_0x460216=path_1[_0xccd58b(0x83)][_0xccd58b(0x8b)](_0x5c887c,_0x137e73);await this[_0xccd58b(0xa2)][_0xccd58b(0x8f)]('Compressing\x20cartridges\x20=>\x20\x27'+_0x137e73+'\x27.');const _0x5cf1d5=new adm_zip_1[(_0xccd58b(0x83))]();return await(0x0,utils_1[_0xccd58b(0xa0)])(_0x5cf1d5,_0x5c887c,''+this[_0xccd58b(0x94)]),await(0x0,utils_1[_0xccd58b(0x86)])(_0x5cf1d5,_0x460216),_0x460216;}async[a59_0x532780(0xa6)](){return new Promise((_0x5aef7e,_0x25a745)=>{const _0x46e94d=a59_0x27d6;SFCC[_0x46e94d(0x7c)][_0x46e94d(0x7c)](this[_0x46e94d(0xa4)],this[_0x46e94d(0xa9)],(_0x2821eb,_0x4b6e95)=>{_0x4b6e95&&_0x5aef7e(_0x4b6e95),_0x2821eb&&_0x25a745(_0x2821eb);});});}async[a59_0x532780(0x84)](_0x5e6121){return new Promise((_0x8fc6e4,_0x34bd62)=>{const _0x41427e=a59_0x27d6;SFCC[_0x41427e(0x89)][_0x41427e(0x84)](this[_0x41427e(0x80)],_0x5e6121,this['accessToken'],{},_0x399396=>{_0x399396?_0x34bd62(_0x399396):_0x8fc6e4();});});}async[a59_0x532780(0xa8)](){return new Promise((_0x5989ed,_0x3c5f58)=>{const _0x530acb=a59_0x27d6;SFCC[_0x530acb(0x89)]['activate'](this[_0x530acb(0x80)],this[_0x530acb(0x94)],this[_0x530acb(0x78)],_0x14ad52=>{_0x14ad52?_0x3c5f58(_0x14ad52):_0x5989ed();});});}async[a59_0x532780(0x97)](){const _0x190ac8=a59_0x532780;this[_0x190ac8(0x78)]=await this[_0x190ac8(0xa6)](),await this[_0x190ac8(0xa2)][_0x190ac8(0x8f)]('Access\x20token\x20has\x20'+(!this[_0x190ac8(0x78)]?_0x190ac8(0x9c):'')+_0x190ac8(0x8d)),await this[_0x190ac8(0xaa)](),this[_0x190ac8(0x88)]&&await this[_0x190ac8(0x7d)]();}async[a59_0x532780(0x7d)](){const _0x24d714=a59_0x532780;await this[_0x24d714(0xa2)][_0x24d714(0x8f)](_0x24d714(0x9d)[_0x24d714(0x8c)](0x32,'=')),await this[_0x24d714(0xa2)][_0x24d714(0x8f)]('Activating\x20\x27'+this[_0x24d714(0x94)]+'\x27\x20code\x20version.'),await this[_0x24d714(0xa8)]();}}exports[a59_0x532780(0x83)]=DeployCartridges;function a59_0x9960(){const _0x3a74f1=['been\x20recived.','12xDVxaF','log','toString','39384lhdwJe','14195753lhsbzE','apply','codeVersion','adm-zip','__esModule','execute','6284060ukJoaW','1794PffNGG','path','sfcc-ci','not\x20','======\x20Activate\x20\x20','jobPath','.zip','addLocalFolderAsync','591iWRzyp','logger','defineProperty','clientId','Deploying\x20\x27','getAccessToken','(((.+)+)+)+$','activate','clientSecret','deployCartridges','/cartridges/','accessToken','search','credentials','3766911FMcyxV','auth','activateCodeVersion','createZipFile','4aOZXXX','instanceUrl','__importDefault','7MFyazo','default','deploy','7170000KXGMIn','writeZip','4883706SaDdkq','isActivateCodeVersion','code','664IoCXFB','join','padEnd'];a59_0x9960=function(){return _0x3a74f1;};return a59_0x9960();}