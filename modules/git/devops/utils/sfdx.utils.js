const a126_0x272e56=a126_0x462d;(function(_0x292b1e,_0x11cb5a){const _0x19b3ce=a126_0x462d,_0x3f4bcc=_0x292b1e();while(!![]){try{const _0x91e684=parseInt(_0x19b3ce(0x1cd))/0x1+parseInt(_0x19b3ce(0x1e0))/0x2*(-parseInt(_0x19b3ce(0x1e8))/0x3)+parseInt(_0x19b3ce(0x1ea))/0x4+-parseInt(_0x19b3ce(0x1e1))/0x5+-parseInt(_0x19b3ce(0x1e4))/0x6*(parseInt(_0x19b3ce(0x1cc))/0x7)+parseInt(_0x19b3ce(0x1e7))/0x8+parseInt(_0x19b3ce(0x1f2))/0x9;if(_0x91e684===_0x11cb5a)break;else _0x3f4bcc['push'](_0x3f4bcc['shift']());}catch(_0x58a609){_0x3f4bcc['push'](_0x3f4bcc['shift']());}}}(a126_0x94cf,0x5968f));const a126_0x3340c0=(function(){let _0x375665=!![];return function(_0x13e4e3,_0x226e91){const _0x2c0b33=_0x375665?function(){const _0x499057=a126_0x462d;if(_0x226e91){const _0x35e84f=_0x226e91[_0x499057(0x1e5)](_0x13e4e3,arguments);return _0x226e91=null,_0x35e84f;}}:function(){};return _0x375665=![],_0x2c0b33;};}()),a126_0x458b81=a126_0x3340c0(this,function(){const _0x7ff6fd=a126_0x462d;return a126_0x458b81[_0x7ff6fd(0x1f9)]()[_0x7ff6fd(0x1ce)](_0x7ff6fd(0x1ef))['toString']()[_0x7ff6fd(0x1f6)](a126_0x458b81)[_0x7ff6fd(0x1ce)](_0x7ff6fd(0x1ef));});a126_0x458b81();function a126_0x462d(_0x1a4a8b,_0x4566e1){const _0x2eff9e=a126_0x94cf();return a126_0x462d=function(_0x458b81,_0x3340c0){_0x458b81=_0x458b81-0x1ca;let _0x94cf94=_0x2eff9e[_0x458b81];return _0x94cf94;},a126_0x462d(_0x1a4a8b,_0x4566e1);}'use strict';function a126_0x94cf(){const _0x123e41=['../../salesforce/utils/sfdx.utils','removeDir','constructor','/*\x20','../../internal/fs.internal','toString','sfdx','dir','cp\x20-r\x20','match','mdapiToSource','/force-app\x20','MARKETING_CLOUD','copySFDXIgnoredComponents','938yHtGtm','676795dUHpXt','search','../../../../constants/sfdx','Shell','SFDX','createEmptyPackageXml','path','__esModule','copyProjectTo','../../parsers/utils/vlocity','makeDir','/sfdx-project.json','default','PROJECTS_PATH','WRONG_RECORD_TYPE_ERROR_MESSAGE','filter','__importDefault','SFDXUtils','../constants/constants','2662utxdqk','3310285WvaiBV','uniqueId','defineProperty','22992LVfrVZ','apply','cwd','199112txizVl','513qtJfrO','exec','2335360PAiZwy','shortid','readdir','join','message','(((.+)+)+)+$','fullProjectName','isVlocityComponent','4354605BwdqoT','RecordTypes'];a126_0x94cf=function(){return _0x123e41;};return a126_0x94cf();}var __importDefault=this&&this[a126_0x272e56(0x1dd)]||function(_0x19737c){const _0x4c426e=a126_0x272e56;return _0x19737c&&_0x19737c[_0x4c426e(0x1d4)]?_0x19737c:{'default':_0x19737c};};Object[a126_0x272e56(0x1e3)](exports,a126_0x272e56(0x1d4),{'value':!![]}),exports[a126_0x272e56(0x1de)]=void 0x0;const path_1=__importDefault(require(a126_0x272e56(0x1d3))),fs_internal_1=require(a126_0x272e56(0x1f8)),shell_internal_1=require('../../internal/shell.internal'),sfdx_utils_1=require(a126_0x272e56(0x1f4)),shortid_1=__importDefault(require(a126_0x272e56(0x1eb))),sfdx_1=require(a126_0x272e56(0x1cf)),promises_1=require('fs/promises'),vlocity_1=require(a126_0x272e56(0x1d6)),constants_1=require(a126_0x272e56(0x1df)),messages_1=require('../errors/messages');class SFDXUtils{constructor(){const _0x335dcc=a126_0x272e56;this[_0x335dcc(0x1da)]=path_1['default'][_0x335dcc(0x1ed)](process[_0x335dcc(0x1e6)](),'.temp',_0x335dcc(0x1fa)),this[_0x335dcc(0x1e2)]=(0x0,shortid_1[_0x335dcc(0x1d9)])();}get[a126_0x272e56(0x1f0)](){const _0x549aea=a126_0x272e56;return''+this[_0x549aea(0x1e2)];}get[a126_0x272e56(0x1fb)](){const _0x447590=a126_0x272e56;return path_1[_0x447590(0x1d9)][_0x447590(0x1ed)](this[_0x447590(0x1da)],this['fullProjectName']);}async['createProjectFrom'](_0x4b1548){const _0x3b2998=a126_0x272e56;!await fs_internal_1['FS']['exists'](this['PROJECTS_PATH'])&&await fs_internal_1['FS'][_0x3b2998(0x1d7)](this[_0x3b2998(0x1da)]);await sfdx_utils_1[_0x3b2998(0x1d1)]['createEmptyProject'](this[_0x3b2998(0x1da)],this[_0x3b2998(0x1f0)]),await sfdx_utils_1[_0x3b2998(0x1d1)][_0x3b2998(0x1d2)](_0x4b1548);try{await sfdx_utils_1['SFDX'][_0x3b2998(0x1fe)](_0x4b1548,this[_0x3b2998(0x1fb)]);}catch(_0x1fd75a){if(!_0x1fd75a[_0x3b2998(0x1ee)][_0x3b2998(0x1fd)](sfdx_1['NO_RESULTS_TO_FORMAT']))throw _0x1fd75a;}}async[a126_0x272e56(0x1d5)](_0x3ea903,_0x39677f=!![]){const _0x5229ed=a126_0x272e56;_0x39677f&&(!await fs_internal_1['FS']['exists'](_0x3ea903+_0x5229ed(0x1d8))&&(_0x39677f=![])),_0x39677f?await shell_internal_1[_0x5229ed(0x1d0)][_0x5229ed(0x1e9)]('cp\x20-r\x20'+this[_0x5229ed(0x1fb)]+_0x5229ed(0x1ff)+_0x3ea903):await shell_internal_1[_0x5229ed(0x1d0)][_0x5229ed(0x1e9)](_0x5229ed(0x1fc)+this['dir']+_0x5229ed(0x1f7)+_0x3ea903);}async['removeDir'](){const _0x3b2121=a126_0x272e56;await fs_internal_1['FS'][_0x3b2121(0x1f5)](this[_0x3b2121(0x1fb)]);}async[a126_0x272e56(0x1cb)](_0x316447,_0x498e67){const _0x52bb01=a126_0x272e56,_0x208c77=await(0x0,promises_1[_0x52bb01(0x1ec)])(_0x316447),_0x145624=_0x208c77[_0x52bb01(0x1dc)](_0x461729=>(0x0,vlocity_1[_0x52bb01(0x1f1)])(_0x461729));for(const _0x215052 of _0x145624){const _0x14aa59=path_1[_0x52bb01(0x1d9)][_0x52bb01(0x1ed)](_0x316447,_0x215052),_0x1d1d8a=path_1['default'][_0x52bb01(0x1ed)](_0x498e67,_0x215052);await(0x0,promises_1['cp'])(_0x14aa59,_0x1d1d8a,{'recursive':!![]});}}['isConvertToSfdx'](_0x77a448){const _0x3b9226=a126_0x272e56;switch(_0x77a448){case constants_1[_0x3b9226(0x1f3)]['COMMERCE_CLOUD']:case constants_1[_0x3b9226(0x1f3)][_0x3b9226(0x1ca)]:{return![];}case constants_1[_0x3b9226(0x1f3)]['DEFAULT']:{return!![];}default:{throw new Error(messages_1[_0x3b9226(0x1db)]+_0x77a448);}}}}exports[a126_0x272e56(0x1de)]=SFDXUtils;