const a403_0x7b5b8c=a403_0x34fa;(function(_0x1e287e,_0xa00208){const _0x38c3f2=a403_0x34fa,_0x23d0f3=_0x1e287e();while(!![]){try{const _0x58712c=parseInt(_0x38c3f2(0xe4))/0x1+-parseInt(_0x38c3f2(0x10a))/0x2*(parseInt(_0x38c3f2(0x132))/0x3)+parseInt(_0x38c3f2(0xec))/0x4*(parseInt(_0x38c3f2(0xd7))/0x5)+parseInt(_0x38c3f2(0x11d))/0x6*(parseInt(_0x38c3f2(0x113))/0x7)+parseInt(_0x38c3f2(0x131))/0x8*(-parseInt(_0x38c3f2(0xf3))/0x9)+-parseInt(_0x38c3f2(0x101))/0xa+parseInt(_0x38c3f2(0xf9))/0xb;if(_0x58712c===_0xa00208)break;else _0x23d0f3['push'](_0x23d0f3['shift']());}catch(_0x4e6944){_0x23d0f3['push'](_0x23d0f3['shift']());}}}(a403_0x534b,0x3f4bd));const a403_0x380c54=(function(){let _0x3cee74=!![];return function(_0x1a9e20,_0xd54060){const _0x9f61ee=_0x3cee74?function(){const _0x2cdd91=a403_0x34fa;if(_0xd54060){const _0x2e5dde=_0xd54060[_0x2cdd91(0xff)](_0x1a9e20,arguments);return _0xd54060=null,_0x2e5dde;}}:function(){};return _0x3cee74=![],_0x9f61ee;};}()),a403_0x4ca4bb=a403_0x380c54(this,function(){const _0x3dc6c9=a403_0x34fa;return a403_0x4ca4bb[_0x3dc6c9(0xe1)]()[_0x3dc6c9(0x110)](_0x3dc6c9(0x104))['toString']()[_0x3dc6c9(0x108)](a403_0x4ca4bb)[_0x3dc6c9(0x110)](_0x3dc6c9(0x104));});function a403_0x34fa(_0x324bcf,_0x12bf77){const _0x1fc7e6=a403_0x534b();return a403_0x34fa=function(_0x4ca4bb,_0x380c54){_0x4ca4bb=_0x4ca4bb-0xd6;let _0x534b30=_0x1fc7e6[_0x4ca4bb];return _0x534b30;},a403_0x34fa(_0x324bcf,_0x12bf77);}a403_0x4ca4bb();'use strict';var __importDefault=this&&this[a403_0x7b5b8c(0x137)]||function(_0x5da59c){return _0x5da59c&&_0x5da59c['__esModule']?_0x5da59c:{'default':_0x5da59c};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a403_0x7b5b8c(0x11b)]=void 0x0;const veeva_constants_1=require('../constants/veeva.constants'),status_enums_1=require(a403_0x7b5b8c(0x11c)),veeva_error_1=require(a403_0x7b5b8c(0x111)),form_data_1=__importDefault(require(a403_0x7b5b8c(0x127))),fs_1=require('fs'),veeva_auth_utils_1=require(a403_0x7b5b8c(0xdd)),package_details_dto_1=require(a403_0x7b5b8c(0xdb)),package_component_dto_1=require(a403_0x7b5b8c(0xdc)),array_utils_1=require(a403_0x7b5b8c(0x100));function a403_0x534b(){const _0x190525=['toString','vaultPackage','replace','390969aJkRxm','getJobDetailUrl','updateVeevaConnection','filter','Deploy\x20Log','responseDetails','name__v','deploymentAction','4qZRAlV','Package\x20not\x20verified','VeevaResponseStatus','append','packageComponentList','ENDPOINT_EXPORT_IMPORT_PACKAGE','errors','1989612IASAmG','formPackageComponentList','VeevaError','uniqueName','ArrayUtils','getDeployDetailsAndSaveLog','4441393ztSClp','_veevaService','deployment_status__v','default','importVpk','PackageComponentDto','apply','../utils/array.utils','3713950pLJdXn','Deployment.log','Wait\x20Executing\x20job','(((.+)+)+)+$','Get\x20deploy\x20result','VeevaConstants','file','constructor','map','120044boTWaU','reduce','Cannot\x20find\x20deployment\x20results','SUCCESS','links','VeevaPackageStatus','search','../classes/errors/veeva-error','rel','231GGXbmX','data','fillPackageDeploymentAction','responseStatus','convertDeploymentAction','deployPackage','get','Import\x20package','PackageImportService','../enums/status.enums','3384fRkqZo','_connection','includes','PackageComponentStatus','package_components','_saveLog','DEPLOYED','put','groupToMap','groupUniqueToMap','form-data','post','Validation\x20Log','isDeployed','createReadStream','url','VERIFIED','{package_id}','log','filename','8irxfWV','3dNWgJQ','Validation.log','endsWith','Deploy\x20package','href','__importDefault','find','492010TnyHmu','packageId','DEPLOYED_WITH_WARNINGS','ENDPOINT_DEPLOY_PACKAGE','../dtos/package-details.dto','../dtos/package-component.dto','../utils/veeva-auth.utils','status','import','_logger'];a403_0x534b=function(){return _0x190525;};return a403_0x534b();}class PackageImportService{constructor({veevaService:_0x2a83c8,connection:_0x108c9d,logger:_0x5da406,saveLog:_0x2de41b}){const _0x29d3a6=a403_0x7b5b8c;this['_veevaService']=_0x2a83c8,this[_0x29d3a6(0x11e)]=_0x108c9d,this[_0x29d3a6(0xe0)]=_0x5da406,this[_0x29d3a6(0x122)]=_0x2de41b;}async['importVpk'](_0x18c7b0,_0x282515=0x1){const _0x4a3d76=a403_0x7b5b8c;this[_0x4a3d76(0xe0)][_0x4a3d76(0x12f)](_0x4a3d76(0x11a));const _0x49f347=new form_data_1[(_0x4a3d76(0xfc))]();_0x49f347[_0x4a3d76(0xef)](_0x4a3d76(0x107),(0x0,fs_1[_0x4a3d76(0x12b)])(_0x18c7b0));const _0x4b1bde=await this[_0x4a3d76(0x11e)][_0x4a3d76(0x124)](veeva_constants_1[_0x4a3d76(0x106)][_0x4a3d76(0xf1)],_0x49f347,{'headers':{'Content-Type':'multipart/form-data'}}),_0x10abd2=_0x4b1bde[_0x4a3d76(0x114)];if(_0x10abd2[_0x4a3d76(0x116)]===status_enums_1[_0x4a3d76(0xee)][_0x4a3d76(0x10d)])return _0x10abd2[_0x4a3d76(0x12c)];else{if(_0x282515>0x0)return await(0x0,veeva_auth_utils_1[_0x4a3d76(0xe6)])(this['_connection']),await this['importVpk'](_0x18c7b0,_0x282515-0x1);throw new veeva_error_1[(_0x4a3d76(0xf5))](_0x10abd2[_0x4a3d76(0xf2)]);}}async[a403_0x7b5b8c(0x118)](_0x436077){const _0x3718cb=a403_0x7b5b8c;this[_0x3718cb(0xe0)][_0x3718cb(0x12f)](_0x3718cb(0x135));const _0x224632=await this[_0x3718cb(0x11e)][_0x3718cb(0x128)](veeva_constants_1[_0x3718cb(0x106)][_0x3718cb(0xda)][_0x3718cb(0xe3)](_0x3718cb(0x12e),_0x436077)),_0x3d2086=await _0x224632[_0x3718cb(0x114)];if(_0x3d2086[_0x3718cb(0x116)]===status_enums_1[_0x3718cb(0xee)][_0x3718cb(0x10d)])return _0x3d2086[_0x3718cb(0x12c)];else throw new veeva_error_1[(_0x3718cb(0xf5))](_0x3d2086['errors']);}async['getJobDetailUrl'](_0x5d9b6f){const _0x5b83df=a403_0x7b5b8c;this[_0x5b83df(0xe0)][_0x5b83df(0x12f)](_0x5b83df(0x103));const [_0x1c9af8]=await this[_0x5b83df(0xfa)]['getJobResult']([_0x5d9b6f]);return _0x1c9af8[_0x5b83df(0x10e)][_0x5b83df(0xd6)](_0x45cf17=>_0x45cf17[_0x5b83df(0x112)]==='artifacts')[_0x5b83df(0x136)];}async['getValidationDetailsAndSaveLog'](_0x4aa218){const _0x708e80=a403_0x7b5b8c;this['_logger'][_0x708e80(0x12f)]('Get\x20validation\x20details.');const {data:_0x42bb1f}=await this[_0x708e80(0x11e)][_0x708e80(0x119)](_0x4aa218);if(_0x42bb1f[_0x708e80(0x116)]===status_enums_1['VeevaResponseStatus'][_0x708e80(0x10d)]){const _0x12d4dc=new package_details_dto_1['PackageDetailsDto'](),{log:_0x5dc3ae,id:_0x1bad35,package_status:_0x16cc12,package_steps:_0x274555}=_0x42bb1f[_0x708e80(0xe2)],_0x494f4b=_0x5dc3ae[_0x708e80(0xe7)](_0x35868b=>_0x35868b['filename']['endsWith'](_0x708e80(0x133))),_0x5540cd=await this['getLogResultText'](_0x494f4b[0x0]['url']);await this[_0x708e80(0x122)](_0x5540cd,_0x708e80(0x129)),_0x12d4dc['packageId']=_0x1bad35,_0x12d4dc['packageComponentList']=this['formPackageComponentList'](_0x274555),await this['fillPackageDeploymentAction'](_0x12d4dc);if(_0x16cc12!==status_enums_1[_0x708e80(0x10f)][_0x708e80(0x12d)])throw new Error(_0x708e80(0xed));return _0x12d4dc;}else throw new veeva_error_1[(_0x708e80(0xf5))](_0x42bb1f[_0x708e80(0xf2)]);}async[a403_0x7b5b8c(0xf8)](_0x4c9b50,_0x562807){const _0x488991=a403_0x7b5b8c;var _0x379605;this[_0x488991(0xe0)]['log'](_0x488991(0x105));const {data:_0x1f4cd2}=await this[_0x488991(0x11e)]['get'](_0x4c9b50);if(_0x1f4cd2[_0x488991(0x116)]===status_enums_1[_0x488991(0xee)][_0x488991(0x10d)]){const {responseDetails:{deployment_log:_0xc9e453,package_status__v:_0xec5832},package_steps:_0x4e7187}=_0x1f4cd2,_0x7ad86e=_0xc9e453[_0x488991(0xe7)](_0x173855=>_0x173855[_0x488991(0x130)][_0x488991(0x134)](_0x488991(0x102))),_0x5e0940=await this['getLogResultText'](_0x7ad86e[0x0][_0x488991(0x12c)]);await this[_0x488991(0x122)](_0x5e0940,_0x488991(0xe8)),_0x562807[_0x488991(0x12a)]=[status_enums_1[_0x488991(0x10f)][_0x488991(0x123)],status_enums_1[_0x488991(0x10f)][_0x488991(0xd9)]][_0x488991(0x11f)](_0xec5832);const _0x3ea739=array_utils_1[_0x488991(0xf7)][_0x488991(0x126)](this['formPackageComponentList'](_0x4e7187),({uniqueName:_0x5453dc})=>_0x5453dc);for(const _0x3c7293 of _0x562807['packageComponentList']){const _0x33e439=(_0x379605=_0x3ea739['get'](_0x3c7293[_0x488991(0xf6)]))===null||_0x379605===void 0x0?void 0x0:_0x379605[_0x488991(0xde)];_0x33e439&&(_0x3c7293[_0x488991(0xde)]=_0x33e439);}_0x562807[_0x488991(0xf0)]=_0x562807[_0x488991(0xf0)][_0x488991(0xe7)](_0x1ec5fb=>_0x1ec5fb['status']!==status_enums_1[_0x488991(0x120)][_0x488991(0x12d)]);if(!_0x562807['packageComponentList']['length'])throw new Error(_0x488991(0x10c));return _0x562807;}else throw new veeva_error_1[(_0x488991(0xf5))](_0x1f4cd2[_0x488991(0xf2)]);}async['getLogResultText'](_0x39ae83){const _0x48d580=a403_0x7b5b8c,{data:_0x38114b}=await this[_0x48d580(0x11e)][_0x48d580(0x119)](_0x39ae83,{'responseType':'text'});return _0x38114b;}[a403_0x7b5b8c(0xf4)](_0x370222){const _0x114133=a403_0x7b5b8c;return _0x370222[_0x114133(0x10b)]((_0x5f0fbe,_0x5d5c74)=>{const _0xe7eeb8=_0x114133,_0x408469=_0x5d5c74[_0xe7eeb8(0x121)][_0xe7eeb8(0x109)](_0x4beb99=>new package_component_dto_1[(_0xe7eeb8(0xfe))]({'status':_0x5d5c74[_0xe7eeb8(0xfb)],'stepName':_0x5d5c74[_0xe7eeb8(0xea)],'component':_0x4beb99}));return[..._0x5f0fbe,..._0x408469];},[]);}async[a403_0x7b5b8c(0x115)](_0x33f06d){const _0x2ff73f=a403_0x7b5b8c,{data:_0x5bfebd}=await this[_0x2ff73f(0x11e)][_0x2ff73f(0x128)](veeva_constants_1['VeevaConstants']['ENDPOINT_VALIDATE_PACKAGE']['replace']('{package_id}',_0x33f06d[_0x2ff73f(0xd8)]));if(_0x5bfebd[_0x2ff73f(0x116)]===status_enums_1[_0x2ff73f(0xee)][_0x2ff73f(0x10d)]){const {package_steps:_0x13b9a8}=_0x5bfebd[_0x2ff73f(0xe9)],_0x5b91de=array_utils_1[_0x2ff73f(0xf7)][_0x2ff73f(0x125)](_0x33f06d[_0x2ff73f(0xf0)],({stepName:_0x367ffa})=>_0x367ffa);for(const {name__v:_0x52c38a,deployment_action:_0x255818}of _0x13b9a8){for(const _0xa56b4e of _0x5b91de[_0x2ff73f(0x119)](_0x52c38a)||[]){_0xa56b4e[_0x2ff73f(0xeb)]=package_component_dto_1['PackageComponentDto'][_0x2ff73f(0x117)](_0x255818);}}}else throw new veeva_error_1[(_0x2ff73f(0xf5))](_0x5bfebd[_0x2ff73f(0xf2)]);}async[a403_0x7b5b8c(0xdf)](_0x81fbf1){const _0x519994=a403_0x7b5b8c,_0xd6c47c=await this[_0x519994(0xfd)](_0x81fbf1),_0x29d969=await this[_0x519994(0xe5)](_0xd6c47c),_0x2de5dc=await this['getValidationDetailsAndSaveLog'](_0x29d969),_0x4e9f4d=await this[_0x519994(0x118)](_0x2de5dc['packageId']),_0x5e73af=await this[_0x519994(0xe5)](_0x4e9f4d);return this['getDeployDetailsAndSaveLog'](_0x5e73af,_0x2de5dc);}}exports['PackageImportService']=PackageImportService;