const a354_0x4057af=a354_0x11f2;(function(_0x13b397,_0x36a1a3){const _0x3bae4b=a354_0x11f2,_0x5b1900=_0x13b397();while(!![]){try{const _0x4fe59e=-parseInt(_0x3bae4b(0x1f3))/0x1+-parseInt(_0x3bae4b(0x205))/0x2*(parseInt(_0x3bae4b(0x20f))/0x3)+parseInt(_0x3bae4b(0x1f5))/0x4*(parseInt(_0x3bae4b(0x20d))/0x5)+parseInt(_0x3bae4b(0x1ec))/0x6*(parseInt(_0x3bae4b(0x1ee))/0x7)+-parseInt(_0x3bae4b(0x1ed))/0x8+-parseInt(_0x3bae4b(0x1e8))/0x9+parseInt(_0x3bae4b(0x1f6))/0xa;if(_0x4fe59e===_0x36a1a3)break;else _0x5b1900['push'](_0x5b1900['shift']());}catch(_0x158371){_0x5b1900['push'](_0x5b1900['shift']());}}}(a354_0x2299,0x822ba));const a354_0xd27002=(function(){let _0xbb91e4=!![];return function(_0x4777a0,_0xf053c0){const _0x30053b=_0xbb91e4?function(){const _0x22a308=a354_0x11f2;if(_0xf053c0){const _0x207106=_0xf053c0[_0x22a308(0x20b)](_0x4777a0,arguments);return _0xf053c0=null,_0x207106;}}:function(){};return _0xbb91e4=![],_0x30053b;};}()),a354_0x5d67e0=a354_0xd27002(this,function(){const _0x99e3c4=a354_0x11f2;return a354_0x5d67e0['toString']()[_0x99e3c4(0x1e7)](_0x99e3c4(0x207))[_0x99e3c4(0x204)]()['constructor'](a354_0x5d67e0)[_0x99e3c4(0x1e7)]('(((.+)+)+)+$');});a354_0x5d67e0();function a354_0x11f2(_0x2ebc18,_0x35e751){const _0x2ce954=a354_0x2299();return a354_0x11f2=function(_0x5d67e0,_0xd27002){_0x5d67e0=_0x5d67e0-0x1e7;let _0x2299f3=_0x2ce954[_0x5d67e0];return _0x2299f3;},a354_0x11f2(_0x2ebc18,_0x35e751);}function a354_0x2299(){const _0x33cfd6=['execute','5532scLiqT','12592020CKKCIj','fillFileByNames','has','./sequence-creator.deploy','loadAsync','xml2js','attachmentBodies','SequenceCreatorDeploy','MDL_EXTENSION','vaultpackage.xml','__importDefault','get','Builder','keys','toString','105902NaCiCe','deploymentName','(((.+)+)+)+$','addComponentsToMainZip','mainZip','VeevaConstants','apply','file','110oXXsxF','nodebuffer','36ajchpD','string','set','migration__v','__esModule','default','from','Flosum','parse','ZipCreatorDeploy','search','948051BjZjSi','mdlFileByName','path','dependencyFileByName','1212sPBELu','1496272bxBgrj','25095mEfixw','DEPENDENCY_EXTENSION','filter','addVaultPackageFileToMainZip','buildObject','552835sEodIQ'];a354_0x2299=function(){return _0x33cfd6;};return a354_0x2299();}'use strict';var __importDefault=this&&this[a354_0x4057af(0x200)]||function(_0x3e185d){const _0x4d97e5=a354_0x4057af;return _0x3e185d&&_0x3e185d[_0x4d97e5(0x213)]?_0x3e185d:{'default':_0x3e185d};};Object['defineProperty'](exports,a354_0x4057af(0x213),{'value':!![]}),exports[a354_0x4057af(0x218)]=void 0x0;const jszip_1=__importDefault(require('jszip')),sequence_creator_deploy_1=require(a354_0x4057af(0x1f9)),xml2js_1=require(a354_0x4057af(0x1fb)),veeva_constants_1=require('../../constants/veeva.constants'),path_1=__importDefault(require(a354_0x4057af(0x1ea))),VAULT_PACKAGE_FILENAME=a354_0x4057af(0x1ff);class ZipCreatorDeploy{constructor({attachmentBodies:_0x20eab3,deploymentName:_0x371e45}){const _0x5120c8=a354_0x4057af;this[_0x5120c8(0x1eb)]=new Map(),this[_0x5120c8(0x1e9)]=new Map(),this[_0x5120c8(0x209)]=new jszip_1[(_0x5120c8(0x214))](),this[_0x5120c8(0x1fc)]=_0x20eab3,this[_0x5120c8(0x206)]=_0x371e45;}async[a354_0x4057af(0x1f7)](){const _0x5ba176=a354_0x4057af;var _0x219c79;for(const _0x59e6e4 of this['attachmentBodies']){const _0x42d767=new jszip_1[(_0x5ba176(0x214))]();await _0x42d767[_0x5ba176(0x1fa)](_0x59e6e4,{'base64':!![]});for(const _0x589ed9 in _0x42d767['files']){const _0x18b3eb=await((_0x219c79=_0x42d767[_0x5ba176(0x20c)](_0x589ed9))===null||_0x219c79===void 0x0?void 0x0:_0x219c79['async'](_0x5ba176(0x210)));if(!_0x18b3eb)continue;const {name:_0x5f5d11,ext:_0x5dfa53}=path_1['default'][_0x5ba176(0x217)](_0x589ed9);switch(_0x5dfa53){case veeva_constants_1['VeevaConstants'][_0x5ba176(0x1ef)]:this['dependencyFileByName'][_0x5ba176(0x211)](_0x5f5d11,_0x18b3eb);break;case veeva_constants_1[_0x5ba176(0x20a)][_0x5ba176(0x1fe)]:this['mdlFileByName'][_0x5ba176(0x211)](_0x5f5d11,_0x18b3eb);break;}}}}['addComponentsToMainZip'](_0x593a95){const _0x14894b=a354_0x4057af;for(const _0x5adc9a of _0x593a95){const _0x496c63=this[_0x14894b(0x1e9)][_0x14894b(0x201)](_0x5adc9a);_0x496c63&&this['mainZip']['file'](_0x5adc9a+veeva_constants_1['VeevaConstants'][_0x14894b(0x1fe)],_0x496c63);}}[a354_0x4057af(0x1f1)](){const _0x3f0e05=a354_0x4057af,_0x31c2de=new xml2js_1[(_0x3f0e05(0x202))]({'headless':!![]}),_0x2e5d17={'vaultpackage':{'$':{'xmlns':'https://veevavault.com/'},'name':this[_0x3f0e05(0x206)],'source':{'vault':undefined,'author':_0x3f0e05(0x216)},'packagetype':_0x3f0e05(0x212),'summary':'Deploy','description':'null'}};this['mainZip'][_0x3f0e05(0x20c)](VAULT_PACKAGE_FILENAME,_0x31c2de[_0x3f0e05(0x1f2)](_0x2e5d17));}async[a354_0x4057af(0x1f4)](){const _0x16796d=a354_0x4057af;await this[_0x16796d(0x1f7)]();const _0x4884eb=Array[_0x16796d(0x215)](this['mdlFileByName'][_0x16796d(0x203)]())[_0x16796d(0x1f0)](_0x33da8b=>!this['dependencyFileByName'][_0x16796d(0x1f8)](_0x33da8b)),_0x3e439f=new sequence_creator_deploy_1[(_0x16796d(0x1fd))]({'dependencyFileByName':this[_0x16796d(0x1eb)]})[_0x16796d(0x1f4)]();return this['addComponentsToMainZip'](_0x4884eb),this[_0x16796d(0x208)](_0x3e439f),this[_0x16796d(0x1f1)](),this['mainZip']['generateAsync']({'type':_0x16796d(0x20e)});}}exports[a354_0x4057af(0x218)]=ZipCreatorDeploy;