function a150_0x4fb9(_0x3e6f23,_0x53eb7c){const _0x38a3c6=a150_0x26be();return a150_0x4fb9=function(_0x1eb836,_0x362597){_0x1eb836=_0x1eb836-0x13d;let _0x26bec8=_0x38a3c6[_0x1eb836];return _0x26bec8;},a150_0x4fb9(_0x3e6f23,_0x53eb7c);}const a150_0x49e240=a150_0x4fb9;(function(_0x3e74e3,_0xe79c20){const _0x37bc4d=a150_0x4fb9,_0x2815d5=_0x3e74e3();while(!![]){try{const _0x52a421=parseInt(_0x37bc4d(0x163))/0x1*(-parseInt(_0x37bc4d(0x154))/0x2)+-parseInt(_0x37bc4d(0x14d))/0x3+parseInt(_0x37bc4d(0x15a))/0x4*(parseInt(_0x37bc4d(0x158))/0x5)+parseInt(_0x37bc4d(0x142))/0x6+-parseInt(_0x37bc4d(0x165))/0x7*(parseInt(_0x37bc4d(0x145))/0x8)+-parseInt(_0x37bc4d(0x14b))/0x9+parseInt(_0x37bc4d(0x14c))/0xa;if(_0x52a421===_0xe79c20)break;else _0x2815d5['push'](_0x2815d5['shift']());}catch(_0x4907e2){_0x2815d5['push'](_0x2815d5['shift']());}}}(a150_0x26be,0xddaf1));const a150_0x362597=(function(){let _0x4e1e05=!![];return function(_0x42af4,_0x45fb76){const _0x17e9c3=_0x4e1e05?function(){const _0x1d384a=a150_0x4fb9;if(_0x45fb76){const _0x4157e9=_0x45fb76[_0x1d384a(0x144)](_0x42af4,arguments);return _0x45fb76=null,_0x4157e9;}}:function(){};return _0x4e1e05=![],_0x17e9c3;};}()),a150_0x1eb836=a150_0x362597(this,function(){const _0x24ded3=a150_0x4fb9;return a150_0x1eb836[_0x24ded3(0x15e)]()[_0x24ded3(0x156)](_0x24ded3(0x13e))['toString']()[_0x24ded3(0x166)](a150_0x1eb836)[_0x24ded3(0x156)](_0x24ded3(0x13e));});function a150_0x26be(){const _0x310010=['search','../../internal/fs.internal','2283860bgwxkC','package.xml','4wDCUVp','defineProperty','create\x20empty\x20package.xml\x20at\x20%s','goto\x20%s\x20folder\x20and\x20convert\x20mdapi\x20from\x20%s','toString','__esModule','cd\x20','writeFile','Logger','2dcdtxN','includes','189YZTfvn','constructor','SFDX','exec','(((.+)+)+)+$','../../internal/shell.internal','catch','\x20&&\x20sfdx\x20force:project:create\x20-t\x20empty\x20-n\x20','3952806rxCDOR','Shell','apply','145336UhlqFk','default','sourceToMdapi','message','readdir','force-app','8641917xWvbzn','22315020XYcGTc','322584LHqBXu','log','createEmptyPackageXml','sfdx','CLI','mdapiToSource','join','880808rFGgMw','goto\x20%s\x20folder\x20and\x20convert\x20source\x20to\x20%s'];a150_0x26be=function(){return _0x310010;};return a150_0x26be();}a150_0x1eb836();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x38a8b6){const _0x380662=a150_0x4fb9;return _0x38a8b6&&_0x38a8b6[_0x380662(0x15f)]?_0x38a8b6:{'default':_0x38a8b6};};Object[a150_0x49e240(0x15b)](exports,a150_0x49e240(0x15f),{'value':!![]}),exports[a150_0x49e240(0x167)]=void 0x0;const core_1=require('../../../core'),fs_internal_1=require(a150_0x49e240(0x157)),shell_internal_1=require(a150_0x49e240(0x13f)),fs_1=require('fs'),path_1=__importDefault(require('path')),logger=new core_1[(a150_0x49e240(0x162))](a150_0x49e240(0x150));class SFDX{static async[a150_0x49e240(0x152)](_0x2c3715,_0x137d1d){const _0xd42acb=a150_0x49e240;logger[_0xd42acb(0x14e)](_0xd42acb(0x15d),_0x137d1d,_0x2c3715),await shell_internal_1[_0xd42acb(0x143)][_0xd42acb(0x13d)]('cd\x20'+_0x137d1d+'\x20&&\x20sfdx\x20force:mdapi:convert\x20-r\x20'+_0x2c3715)['catch'](_0x32a12d=>{const _0x5cc9c9=_0xd42acb,_0x488208=_0x32a12d['message']||_0x32a12d;if(_0x488208[_0x5cc9c9(0x164)](_0x5cc9c9(0x151)))return;throw _0x32a12d;});}static async[a150_0x49e240(0x147)](_0x368c21,_0x512550){const _0x38ae13=a150_0x49e240;logger[_0x38ae13(0x14e)](_0x38ae13(0x155),_0x368c21,_0x512550),await shell_internal_1[_0x38ae13(0x143)][_0x38ae13(0x13d)](_0x38ae13(0x160)+_0x368c21+'\x20&&\x20sfdx\x20force:source:convert\x20-d\x20'+_0x512550)[_0x38ae13(0x140)](_0x51467e=>{const _0x580331=_0x38ae13,_0x4eec57=_0x51467e[_0x580331(0x148)]||_0x51467e;if(_0x4eec57['includes'](_0x580331(0x151)))return;throw _0x51467e;});}static async['createEmptyProject'](_0xf00161,_0x36439d){const _0x10ddb3=a150_0x49e240;await shell_internal_1['Shell']['exec'](_0x10ddb3(0x160)+_0xf00161+_0x10ddb3(0x141)+_0x36439d);}static async[a150_0x49e240(0x14f)](_0x1c502b){const _0x69957f=a150_0x49e240,_0x3b1616=path_1[_0x69957f(0x146)][_0x69957f(0x153)](_0x1c502b,_0x69957f(0x159));logger[_0x69957f(0x14e)](_0x69957f(0x15c),_0x3b1616),await fs_internal_1['FS'][_0x69957f(0x161)](_0x3b1616,'<Package\x20xmlns=\x22http://soap.sforce.com/2006/04/metadata\x22><version>52.0</version></Package>');}static async['isSFDXProject'](_0x28da55){return new Promise(_0x261417=>{const _0x578359=a150_0x4fb9;fs_1[_0x578359(0x149)](_0x28da55,(_0x38303a,_0x201406)=>{const _0x2cb650=_0x578359;_0x261417(!_0x38303a&&_0x201406[_0x2cb650(0x164)](_0x2cb650(0x14a)));});});}}exports[a150_0x49e240(0x167)]=SFDX;