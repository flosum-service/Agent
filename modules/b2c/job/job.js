const a68_0x4df9f0=a68_0x1822;(function(_0x20e91e,_0x18b62a){const _0x45fa46=a68_0x1822,_0x2f9149=_0x20e91e();while(!![]){try{const _0x1cc50f=-parseInt(_0x45fa46(0x199))/0x1+-parseInt(_0x45fa46(0x19b))/0x2+parseInt(_0x45fa46(0x1b0))/0x3*(-parseInt(_0x45fa46(0x1ac))/0x4)+parseInt(_0x45fa46(0x1b3))/0x5+-parseInt(_0x45fa46(0x19c))/0x6+parseInt(_0x45fa46(0x1b1))/0x7+parseInt(_0x45fa46(0x173))/0x8;if(_0x1cc50f===_0x18b62a)break;else _0x2f9149['push'](_0x2f9149['shift']());}catch(_0xd70c8f){_0x2f9149['push'](_0x2f9149['shift']());}}}(a68_0x4bc5,0x8433c));const a68_0x2569bf=(function(){let _0x1209ca=!![];return function(_0x371e78,_0x20b3b8){const _0x50a74a=_0x1209ca?function(){const _0x139708=a68_0x1822;if(_0x20b3b8){const _0x3c389a=_0x20b3b8[_0x139708(0x1ad)](_0x371e78,arguments);return _0x20b3b8=null,_0x3c389a;}}:function(){};return _0x1209ca=![],_0x50a74a;};}()),a68_0x144193=a68_0x2569bf(this,function(){const _0x52f3b=a68_0x1822;return a68_0x144193['toString']()[_0x52f3b(0x190)](_0x52f3b(0x193))[_0x52f3b(0x170)]()[_0x52f3b(0x18f)](a68_0x144193)[_0x52f3b(0x190)](_0x52f3b(0x193));});function a68_0x4bc5(){const _0x55f9d5=['true','catch','deployCartridges','runScript','namespace','variables','padEnd','jobPath','AuthManager','__importDefault','log','constructor','search','retrieveCartridges','isExistsPath','(((.+)+)+)+$','defineProperty','slice','FLOSUM_NAMESPACE','codeVersion','path','250318hsagwP','cartridges','884328jAZDea','4682496VZFdLR','branchId','@flosum/utils','setInProgress','======\x20Deploy\x20cartridges\x20','Job\x20has\x20been\x20started.','./classes/retrieve-cartridges','__esModule','../../shared/managers/auth.manager','axiosInstance','Job\x20has\x20been\x20completed.','toLowerCase','getAxiosInstance','systemLogger','FLOSUM_SCRIPT_PATH','./classes/manifest-manager','3555548rEoAEn','apply','Job\x20has\x20been\x20failed.','exit','3eBQGac','692902DjNqkF','../../shared/managers/state-manger','46100ayTxvU','./classes/deploy-cartridges','getManifestParameters','jobId','logger','argv','IGNORE_FLOSUM_NAMESPACE','toString','getFlosumNamespace','AxiosInstanceUtils','22360632qzbWzu','apiVersion','default','init','credentials','../../../core','./classes/logger','isActivateCodeVersion','Job','error','create','setCompleted','execute','Logger','@flosum/salesforce','join','isCompileCartridges'];a68_0x4bc5=function(){return _0x55f9d5;};return a68_0x4bc5();}a68_0x144193();function a68_0x1822(_0x589517,_0x530902){const _0x4cbc9a=a68_0x4bc5();return a68_0x1822=function(_0x144193,_0x2569bf){_0x144193=_0x144193-0x16f;let _0x4bc5ac=_0x4cbc9a[_0x144193];return _0x4bc5ac;},a68_0x1822(_0x589517,_0x530902);}'use strict';var __importDefault=this&&this[a68_0x4df9f0(0x18d)]||function(_0x456748){const _0x26a04e=a68_0x4df9f0;return _0x456748&&_0x456748[_0x26a04e(0x1a3)]?_0x456748:{'default':_0x456748};};Object[a68_0x4df9f0(0x194)](exports,a68_0x4df9f0(0x1a3),{'value':!![]}),exports[a68_0x4df9f0(0x17b)]=void 0x0;const core_1=require(a68_0x4df9f0(0x178)),salesforce_1=require(a68_0x4df9f0(0x181)),auth_manager_1=require(a68_0x4df9f0(0x1a4)),constants_1=require('../constants'),utils_1=require(a68_0x4df9f0(0x19e)),minimist_1=__importDefault(require('minimist')),path_1=__importDefault(require(a68_0x4df9f0(0x198))),state_manger_1=__importDefault(require(a68_0x4df9f0(0x1b2))),logger_1=__importDefault(require(a68_0x4df9f0(0x179))),retrieve_cartridges_1=__importDefault(require(a68_0x4df9f0(0x1a2))),deploy_cartridges_1=__importDefault(require(a68_0x4df9f0(0x1b4))),run_script_1=__importDefault(require('./classes/run-script')),manifest_manager_1=__importDefault(require(a68_0x4df9f0(0x1ab))),salesforce_auth_1=__importDefault(require('./classes/salesforce-auth'));class Job{constructor(){const _0x48d62f=a68_0x4df9f0,{jobId:_0x1cd9e0,jobStorePath:_0x591a84}=(0x0,minimist_1[_0x48d62f(0x175)])(process[_0x48d62f(0x1b8)][_0x48d62f(0x195)](0x2));this[_0x48d62f(0x18b)]=_0x591a84,this[_0x48d62f(0x1b6)]=_0x1cd9e0;}async['execute'](){const _0x3a4d16=a68_0x4df9f0;this[_0x3a4d16(0x1a9)]=new core_1[(_0x3a4d16(0x180))](this[_0x3a4d16(0x1b6)]),this[_0x3a4d16(0x1b7)]=new logger_1['default'](this['jobId'],this['systemLogger']);const _0x45dcb5=await new state_manger_1[(_0x3a4d16(0x175))](this[_0x3a4d16(0x18b)])[_0x3a4d16(0x176)](),_0xb76d65=path_1[_0x3a4d16(0x175)][_0x3a4d16(0x182)](this[_0x3a4d16(0x18b)],_0x3a4d16(0x19a),constants_1[_0x3a4d16(0x1aa)]);await this[_0x3a4d16(0x1b7)][_0x3a4d16(0x18e)](_0x3a4d16(0x1a1));try{await _0x45dcb5[_0x3a4d16(0x19f)](),this[_0x3a4d16(0x1a5)]=await this[_0x3a4d16(0x1a8)](),this[_0x3a4d16(0x188)]=this[_0x3a4d16(0x171)](),await this[_0x3a4d16(0x1b5)](),await this[_0x3a4d16(0x191)](),await utils_1['FsUtils'][_0x3a4d16(0x192)](_0xb76d65)?await this['runScript']():await this[_0x3a4d16(0x186)](),await _0x45dcb5[_0x3a4d16(0x17e)](),await this[_0x3a4d16(0x1b7)][_0x3a4d16(0x18e)](_0x3a4d16(0x1a6));}catch(_0x4bd3f5){await _0x45dcb5['setError'](_0x4bd3f5),await this[_0x3a4d16(0x1b7)][_0x3a4d16(0x17c)](_0x4bd3f5['message']),await this['logger']['error'](_0x3a4d16(0x1ae));}}async[a68_0x4df9f0(0x1b5)](){const _0x21c30e=a68_0x4df9f0,{credentials:_0x56c7c8,apiVersion:_0x3a224d,branchId:_0x4fbc74,codeVersion:_0x35d513,isCompileCartridges:_0x16bde8,isActivateCodeVersion:_0x5e2024,variables:_0x5e45c7}=await new manifest_manager_1[(_0x21c30e(0x175))](this[_0x21c30e(0x18b)])[_0x21c30e(0x176)]();this[_0x21c30e(0x177)]=_0x56c7c8,this['apiVersion']=_0x3a224d,this[_0x21c30e(0x19d)]=_0x4fbc74,this['codeVersion']=_0x35d513,this[_0x21c30e(0x183)]=_0x16bde8,this[_0x21c30e(0x17a)]=_0x5e2024,this[_0x21c30e(0x189)]=_0x5e45c7;}async[a68_0x4df9f0(0x1a8)](){const _0x242762=a68_0x4df9f0,_0x4dbcf1=await salesforce_auth_1['default']['getAuthDetails']();return salesforce_1[_0x242762(0x172)][_0x242762(0x17d)](new auth_manager_1[(_0x242762(0x18c))](_0x4dbcf1),[],{'maxContentLength':Infinity,'maxBodyLength':Infinity});}async[a68_0x4df9f0(0x191)](){const _0x4bb4c9=a68_0x4df9f0;await this[_0x4bb4c9(0x1b7)][_0x4bb4c9(0x18e)]('======\x20Retrieve\x20cartridges\x20'[_0x4bb4c9(0x18a)](0x32,'=')),await new retrieve_cartridges_1[(_0x4bb4c9(0x175))](this[_0x4bb4c9(0x18b)],this[_0x4bb4c9(0x1a5)],this[_0x4bb4c9(0x174)],this['namespace'],this[_0x4bb4c9(0x19d)],this[_0x4bb4c9(0x189)],this[_0x4bb4c9(0x1b7)])['execute']();}async[a68_0x4df9f0(0x187)](){const _0x4c09dc=a68_0x4df9f0;await this['logger'][_0x4c09dc(0x18e)]('======\x20Run\x20script\x20'[_0x4c09dc(0x18a)](0x32,'=')),await new run_script_1[(_0x4c09dc(0x175))](this[_0x4c09dc(0x18b)],this[_0x4c09dc(0x177)],this[_0x4c09dc(0x197)],this['isCompileCartridges'],this['isActivateCodeVersion'],this[_0x4c09dc(0x1a9)],this['logger'])[_0x4c09dc(0x17f)]();}async[a68_0x4df9f0(0x186)](){const _0x53f4ad=a68_0x4df9f0;await this['logger'][_0x53f4ad(0x18e)](_0x53f4ad(0x1a0)[_0x53f4ad(0x18a)](0x32,'=')),await new deploy_cartridges_1['default'](this['jobPath'],this[_0x53f4ad(0x177)],this['codeVersion'],this[_0x53f4ad(0x17a)],this[_0x53f4ad(0x1b7)])[_0x53f4ad(0x17f)]();}[a68_0x4df9f0(0x171)](){const _0x1a5b0b=a68_0x4df9f0;var _0xe69ce6,_0x5f45aa;return((_0x5f45aa=(_0xe69ce6=process['env'])===null||_0xe69ce6===void 0x0?void 0x0:_0xe69ce6[_0x1a5b0b(0x16f)])===null||_0x5f45aa===void 0x0?void 0x0:_0x5f45aa[_0x1a5b0b(0x1a7)]())===_0x1a5b0b(0x184)?'':constants_1[_0x1a5b0b(0x196)];}}exports[a68_0x4df9f0(0x17b)]=Job,new Job()['execute']()['then'](()=>process[a68_0x4df9f0(0x1af)](0x0))[a68_0x4df9f0(0x185)](()=>process[a68_0x4df9f0(0x1af)](0x1));