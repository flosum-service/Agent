const a222_0x2264b4=a222_0x390b;(function(_0x38c7b1,_0x841d37){const _0x4edc91=a222_0x390b,_0x57409b=_0x38c7b1();while(!![]){try{const _0x558aa2=-parseInt(_0x4edc91(0x8f))/0x1*(parseInt(_0x4edc91(0x7f))/0x2)+-parseInt(_0x4edc91(0xaf))/0x3+parseInt(_0x4edc91(0x9b))/0x4*(-parseInt(_0x4edc91(0xb0))/0x5)+parseInt(_0x4edc91(0x98))/0x6*(-parseInt(_0x4edc91(0x9a))/0x7)+parseInt(_0x4edc91(0xad))/0x8*(-parseInt(_0x4edc91(0xaa))/0x9)+parseInt(_0x4edc91(0x92))/0xa*(-parseInt(_0x4edc91(0x87))/0xb)+parseInt(_0x4edc91(0x8b))/0xc;if(_0x558aa2===_0x841d37)break;else _0x57409b['push'](_0x57409b['shift']());}catch(_0x3aab45){_0x57409b['push'](_0x57409b['shift']());}}}(a222_0x1ba7,0x3a1a7));const a222_0x101383=(function(){let _0x265fe8=!![];return function(_0x1b3c42,_0x59b14d){const _0x565bbc=_0x265fe8?function(){if(_0x59b14d){const _0x23b189=_0x59b14d['apply'](_0x1b3c42,arguments);return _0x59b14d=null,_0x23b189;}}:function(){};return _0x265fe8=![],_0x565bbc;};}()),a222_0x2dd7df=a222_0x101383(this,function(){const _0x1ee2e0=a222_0x390b;return a222_0x2dd7df[_0x1ee2e0(0x95)]()[_0x1ee2e0(0x94)]('(((.+)+)+)+$')[_0x1ee2e0(0x95)]()[_0x1ee2e0(0x99)](a222_0x2dd7df)[_0x1ee2e0(0x94)](_0x1ee2e0(0x80));});a222_0x2dd7df();function a222_0x390b(_0x3b8d91,_0x209e01){const _0x5727fd=a222_0x1ba7();return a222_0x390b=function(_0x2dd7df,_0x101383){_0x2dd7df=_0x2dd7df-0x7f;let _0x1ba7f9=_0x5727fd[_0x2dd7df];return _0x1ba7f9;},a222_0x390b(_0x3b8d91,_0x209e01);}'use strict';var __importDefault=this&&this[a222_0x2264b4(0xa6)]||function(_0x2c06ff){const _0x347623=a222_0x2264b4;return _0x2c06ff&&_0x2c06ff[_0x347623(0xa5)]?_0x2c06ff:{'default':_0x2c06ff};};Object[a222_0x2264b4(0xa8)](exports,a222_0x2264b4(0xa5),{'value':!![]}),exports[a222_0x2264b4(0x90)]=void 0x0;const fs_1=require('fs'),path_1=__importDefault(require(a222_0x2264b4(0xa0))),core_1=require(a222_0x2264b4(0x9c)),fs_internal_1=require(a222_0x2264b4(0x91)),cross_spawn_1=__importDefault(require(a222_0x2264b4(0xa1))),logger=new core_1[(a222_0x2264b4(0xac))](a222_0x2264b4(0x9f));class SFDX{static[a222_0x2264b4(0xa3)](_0x5065e3,_0x5554af,_0xedb7fd={}){return new Promise((_0x3aed20,_0x5a422a)=>{const _0xa1a57d=a222_0x390b;var _0x41f0f5,_0x27c4cd;let _0x3ee984='',_0x46f63a='';logger[_0xa1a57d(0x86)](_0xa1a57d(0x83),_0x5065e3,_0x5554af);const _0x173262=(0x0,cross_spawn_1[_0xa1a57d(0x85)])(_0x5065e3,_0x5554af[_0xa1a57d(0xa2)]('\x20'),_0xedb7fd);_0x173262['on'](_0xa1a57d(0x8a),_0x59e514=>{_0x5a422a(_0x59e514);}),(_0x41f0f5=_0x173262['stdout'])===null||_0x41f0f5===void 0x0?void 0x0:_0x41f0f5['on'](_0xa1a57d(0x8d),_0x4b9d98=>{_0x3ee984+=_0x4b9d98;}),(_0x27c4cd=_0x173262[_0xa1a57d(0x9e)])===null||_0x27c4cd===void 0x0?void 0x0:_0x27c4cd['on'](_0xa1a57d(0x8d),_0x113cc5=>{const _0x4bd7a2=_0xa1a57d;if(_0x113cc5[_0x4bd7a2(0x89)]('Warning:\x20'))return;_0x46f63a+=_0x113cc5;}),_0x173262['on'](_0xa1a57d(0xa9),(_0x277d2,_0x4ce554)=>{_0x277d2||_0x4ce554?_0x5a422a(new Error(_0x46f63a||_0x3ee984)):_0x3aed20(_0x3ee984);});});}static async[a222_0x2264b4(0x97)](_0x1ea8c3,_0x599c36){const _0x43edfe=a222_0x2264b4;logger[_0x43edfe(0x81)](_0x43edfe(0xae),_0x599c36,_0x1ea8c3),await this['spawnPromise'](_0x43edfe(0x9f),_0x43edfe(0x8e)+_0x1ea8c3,{'cwd':_0x599c36});}static async[a222_0x2264b4(0x82)](_0x176d3a,_0x279e0e){const _0x3df59a=a222_0x2264b4;logger[_0x3df59a(0x81)]('goto\x20%s\x20folder\x20and\x20convert\x20source\x20to\x20%s',_0x176d3a,_0x279e0e),await this[_0x3df59a(0xa3)](_0x3df59a(0x9f),_0x3df59a(0x8c)+_0x279e0e,{'cwd':_0x176d3a});}static async[a222_0x2264b4(0xa4)](_0x3315c3,_0x307aec){const _0x1af28c=a222_0x2264b4;await this['spawnPromise'](_0x1af28c(0x9f),'force:project:create\x20-t\x20empty\x20-n\x20'+_0x307aec,{'cwd':_0x3315c3});}static async[a222_0x2264b4(0x9d)](_0x2972eb){const _0x5a1daa=a222_0x2264b4,_0x5c22e7=path_1['default'][_0x5a1daa(0x96)](_0x2972eb,_0x5a1daa(0x84));logger['log']('create\x20empty\x20package.xml\x20at\x20%s',_0x5c22e7),await fs_internal_1['FS']['writeFile'](_0x5c22e7,_0x5a1daa(0xab));}static async[a222_0x2264b4(0x88)](_0x183821){return new Promise(_0x1629fd=>{const _0x5270a5=a222_0x390b;(0x0,fs_1[_0x5270a5(0xa7)])(_0x183821,(_0x3b5c9c,_0x28c8ae)=>{const _0x1ffb58=_0x5270a5;_0x1629fd(!_0x3b5c9c&&(_0x28c8ae[_0x1ffb58(0x89)]('force-app')||_0x28c8ae[_0x1ffb58(0x89)]('config')||_0x28c8ae['includes'](_0x1ffb58(0x93))));});});}}function a222_0x1ba7(){const _0x4d4ee6=['sfdx-project.json','search','toString','join','mdapiToSource','18MSjfRT','constructor','965069soBUpx','524QMNERu','../../../../core','createEmptyPackageXml','stderr','sfdx','path','cross-spawn','split','spawnPromise','createEmptyProject','__esModule','__importDefault','readdir','defineProperty','close','1732095eAcGHG','<Package\x20xmlns=\x22http://soap.sforce.com/2006/04/metadata\x22><version>54.0</version></Package>','Logger','8FwEMSl','goto\x20%s\x20folder\x20and\x20convert\x20mdapi\x20from\x20%s','1282443UODtpF','7735ODkcwi','134EwbVSY','(((.+)+)+)+$','log','sourceToMdapi','spawn\x20%s\x20[%s]','package.xml','default','info','22YfsDgz','isSFDXProject','includes','error','25097688SuqHpu','force:source:convert\x20-d\x20','data','force:mdapi:convert\x20-r\x20','5209qfHXEw','SFDX','../../internal/fs.internal','1341430daZIsx'];a222_0x1ba7=function(){return _0x4d4ee6;};return a222_0x1ba7();}exports['SFDX']=SFDX;