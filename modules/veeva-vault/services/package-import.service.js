const a336_0x53fc0d=a336_0x5b60;(function(_0x97cb89,_0x46c1d4){const _0x40bcbc=a336_0x5b60,_0x3e7cc4=_0x97cb89();while(!![]){try{const _0x457426=parseInt(_0x40bcbc(0x206))/0x1+-parseInt(_0x40bcbc(0x1e0))/0x2*(parseInt(_0x40bcbc(0x1b2))/0x3)+-parseInt(_0x40bcbc(0x1e7))/0x4*(parseInt(_0x40bcbc(0x1ba))/0x5)+parseInt(_0x40bcbc(0x1d0))/0x6+parseInt(_0x40bcbc(0x1f8))/0x7+-parseInt(_0x40bcbc(0x203))/0x8+parseInt(_0x40bcbc(0x1f1))/0x9*(parseInt(_0x40bcbc(0x1ef))/0xa);if(_0x457426===_0x46c1d4)break;else _0x3e7cc4['push'](_0x3e7cc4['shift']());}catch(_0x4fa680){_0x3e7cc4['push'](_0x3e7cc4['shift']());}}}(a336_0x4980,0x640f6));const a336_0x3f0f36=(function(){let _0x3a5fba=!![];return function(_0x448ed4,_0x28fd25){const _0x8fca4=_0x3a5fba?function(){if(_0x28fd25){const _0x3f0caa=_0x28fd25['apply'](_0x448ed4,arguments);return _0x28fd25=null,_0x3f0caa;}}:function(){};return _0x3a5fba=![],_0x8fca4;};}()),a336_0x3ba872=a336_0x3f0f36(this,function(){const _0x5a5ac3=a336_0x5b60;return a336_0x3ba872[_0x5a5ac3(0x1d8)]()[_0x5a5ac3(0x208)](_0x5a5ac3(0x1e5))[_0x5a5ac3(0x1d8)]()[_0x5a5ac3(0x1fb)](a336_0x3ba872)[_0x5a5ac3(0x208)]('(((.+)+)+)+$');});a336_0x3ba872();function a336_0x5b60(_0x55835,_0x342bef){const _0x4f622f=a336_0x4980();return a336_0x5b60=function(_0x3ba872,_0x3f0f36){_0x3ba872=_0x3ba872-0x1ab;let _0x4980be=_0x4f622f[_0x3ba872];return _0x4980be;},a336_0x5b60(_0x55835,_0x342bef);}'use strict';var __importDefault=this&&this[a336_0x53fc0d(0x1d3)]||function(_0x4abf70){return _0x4abf70&&_0x4abf70['__esModule']?_0x4abf70:{'default':_0x4abf70};};Object[a336_0x53fc0d(0x1eb)](exports,a336_0x53fc0d(0x1bc),{'value':!![]}),exports['PackageImportService']=void 0x0;function a336_0x4980(){const _0x3ff120=['length','148773zRuAdS','../classes/errors/veeva-error','deployment_status__v','status','updateVeevaConnection','responseStatus','ENDPOINT_DEPLOY_PACKAGE','_saveLog','804105RagPKW','Package\x20not\x20verified','__esModule','formPackageComponentList','../utils/veeva-auth.utils','createReadStream','PackageImportService','append','VeevaError','Validation.log','VERIFIED','VeevaResponseStatus','../dtos/package-component.dto','Deploy\x20Log','SUCCESS','reduce','getJobDetailUrl','find','log','deployPackage','fillPackageDeploymentAction','filename','4588134YTtcQo','get','links','__importDefault','Get\x20validation\x20details.','VeevaPackageStatus','_logger','Import\x20package','toString','getDeployDetailsAndSaveLog','PackageComponentDto','filter','text','ENDPOINT_EXPORT_IMPORT_PACKAGE','VeevaConstants','errors','22HvhcZO','convertDeploymentAction','includes','Cannot\x20find\x20deployment\x20results','endsWith','(((.+)+)+)+$','replace','12zfMtFr','post','default','../utils/array.utils','defineProperty','getLogResultText','importVpk','packageComponentList','249890lXrtvd','data','90XNrCtg','put','{package_id}','file','groupUniqueToMap','ArrayUtils','../enums/status.enums','2844009HXYwpW','_connection','multipart/form-data','constructor','vaultPackage','DEPLOYED_WITH_WARNINGS','../dtos/package-details.dto','responseDetails','Wait\x20Executing\x20job','href','url','3707120dJVhfq','_veevaService','artifacts','480334WWhaSP','PackageComponentStatus','search','getValidationDetailsAndSaveLog','getJobResult','packageId','DEPLOYED','../constants/veeva.constants','Deploy\x20package','Deployment.log','isDeployed','PackageDetailsDto'];a336_0x4980=function(){return _0x3ff120;};return a336_0x4980();}const veeva_constants_1=require(a336_0x53fc0d(0x1ac)),status_enums_1=require(a336_0x53fc0d(0x1f7)),veeva_error_1=require(a336_0x53fc0d(0x1b3)),form_data_1=__importDefault(require('form-data')),fs_1=require('fs'),veeva_auth_utils_1=require(a336_0x53fc0d(0x1be)),package_details_dto_1=require(a336_0x53fc0d(0x1fe)),package_component_dto_1=require(a336_0x53fc0d(0x1c6)),array_utils_1=require(a336_0x53fc0d(0x1ea));class PackageImportService{constructor({veevaService:_0x364431,connection:_0x339b4c,logger:_0x334f9b,saveLog:_0x1ab7bc}){const _0x22ff02=a336_0x53fc0d;this[_0x22ff02(0x204)]=_0x364431,this[_0x22ff02(0x1f9)]=_0x339b4c,this[_0x22ff02(0x1d6)]=_0x334f9b,this[_0x22ff02(0x1b9)]=_0x1ab7bc;}async[a336_0x53fc0d(0x1ed)](_0xf741c0,_0x24cfb7=0x1){const _0x826faf=a336_0x53fc0d;this[_0x826faf(0x1d6)][_0x826faf(0x1cc)](_0x826faf(0x1d7));const _0x3e3e86=new form_data_1[(_0x826faf(0x1e9))]();_0x3e3e86[_0x826faf(0x1c1)](_0x826faf(0x1f4),(0x0,fs_1[_0x826faf(0x1bf)])(_0xf741c0));const _0x4480ff=await this[_0x826faf(0x1f9)][_0x826faf(0x1f2)](veeva_constants_1[_0x826faf(0x1de)][_0x826faf(0x1dd)],_0x3e3e86,{'headers':{'Content-Type':_0x826faf(0x1fa)}}),_0x363513=_0x4480ff[_0x826faf(0x1f0)];if(_0x363513[_0x826faf(0x1b7)]===status_enums_1[_0x826faf(0x1c5)][_0x826faf(0x1c8)])return _0x363513[_0x826faf(0x202)];else{if(_0x24cfb7>0x0)return await(0x0,veeva_auth_utils_1[_0x826faf(0x1b6)])(this[_0x826faf(0x1f9)]),await this['importVpk'](_0xf741c0,_0x24cfb7-0x1);throw new veeva_error_1[(_0x826faf(0x1c2))](_0x363513[_0x826faf(0x1df)]);}}async[a336_0x53fc0d(0x1cd)](_0x120aea){const _0x15e732=a336_0x53fc0d;this[_0x15e732(0x1d6)][_0x15e732(0x1cc)](_0x15e732(0x1ad));const _0x382698=await this[_0x15e732(0x1f9)]['post'](veeva_constants_1[_0x15e732(0x1de)][_0x15e732(0x1b8)][_0x15e732(0x1e6)]('{package_id}',_0x120aea)),_0x4326eb=await _0x382698['data'];if(_0x4326eb['responseStatus']===status_enums_1[_0x15e732(0x1c5)]['SUCCESS'])return _0x4326eb[_0x15e732(0x202)];else throw new veeva_error_1[(_0x15e732(0x1c2))](_0x4326eb['errors']);}async[a336_0x53fc0d(0x1ca)](_0x114c04){const _0x1d2190=a336_0x53fc0d;this[_0x1d2190(0x1d6)]['log'](_0x1d2190(0x200));const [_0x276d4a]=await this[_0x1d2190(0x204)][_0x1d2190(0x20a)]([_0x114c04]);return _0x276d4a[_0x1d2190(0x1d2)][_0x1d2190(0x1cb)](_0x115c8d=>_0x115c8d['rel']===_0x1d2190(0x205))[_0x1d2190(0x201)];}async[a336_0x53fc0d(0x209)](_0xf4d667){const _0x379918=a336_0x53fc0d;this['_logger'][_0x379918(0x1cc)](_0x379918(0x1d4));const {data:_0x21dafe}=await this[_0x379918(0x1f9)][_0x379918(0x1d1)](_0xf4d667);if(_0x21dafe['responseStatus']===status_enums_1[_0x379918(0x1c5)]['SUCCESS']){const _0x32232e=new package_details_dto_1[(_0x379918(0x1b0))](),{log:_0x1b4354,id:_0x2ea103,package_status:_0x1418ca,package_steps:_0xf7587a}=_0x21dafe[_0x379918(0x1fc)],_0x483781=_0x1b4354[_0x379918(0x1db)](_0x5339f9=>_0x5339f9[_0x379918(0x1cf)][_0x379918(0x1e4)](_0x379918(0x1c3))),_0x10f438=await this[_0x379918(0x1ec)](_0x483781[0x0][_0x379918(0x202)]);await this['_saveLog'](_0x10f438,'Validation\x20Log'),_0x32232e[_0x379918(0x20b)]=_0x2ea103,_0x32232e[_0x379918(0x1ee)]=this[_0x379918(0x1bd)](_0xf7587a),await this[_0x379918(0x1ce)](_0x32232e);if(_0x1418ca!==status_enums_1[_0x379918(0x1d5)][_0x379918(0x1c4)])throw new Error(_0x379918(0x1bb));return _0x32232e;}else throw new veeva_error_1[(_0x379918(0x1c2))](_0x21dafe['errors']);}async[a336_0x53fc0d(0x1d9)](_0x4fe763,_0x46e5e3){const _0x739842=a336_0x53fc0d;var _0x45e5e2;this['_logger']['log']('Get\x20deploy\x20result');const {data:_0x309b33}=await this['_connection'][_0x739842(0x1d1)](_0x4fe763);if(_0x309b33[_0x739842(0x1b7)]===status_enums_1[_0x739842(0x1c5)]['SUCCESS']){const {responseDetails:{deployment_log:_0x4a4535,package_status__v:_0xe369be},package_steps:_0x5dd516}=_0x309b33,_0x4f1454=_0x4a4535[_0x739842(0x1db)](_0x528556=>_0x528556[_0x739842(0x1cf)][_0x739842(0x1e4)](_0x739842(0x1ae))),_0x2bef4e=await this[_0x739842(0x1ec)](_0x4f1454[0x0][_0x739842(0x202)]);await this[_0x739842(0x1b9)](_0x2bef4e,_0x739842(0x1c7)),_0x46e5e3[_0x739842(0x1af)]=[status_enums_1[_0x739842(0x1d5)][_0x739842(0x1ab)],status_enums_1[_0x739842(0x1d5)][_0x739842(0x1fd)]][_0x739842(0x1e2)](_0xe369be);const _0x85b833=array_utils_1[_0x739842(0x1f6)][_0x739842(0x1f5)](this[_0x739842(0x1bd)](_0x5dd516),({uniqueName:_0x5005a9})=>_0x5005a9);for(const _0x412718 of _0x46e5e3[_0x739842(0x1ee)]){const _0xa69a7c=(_0x45e5e2=_0x85b833[_0x739842(0x1d1)](_0x412718['uniqueName']))===null||_0x45e5e2===void 0x0?void 0x0:_0x45e5e2['status'];_0xa69a7c&&(_0x412718[_0x739842(0x1b5)]=_0xa69a7c);}_0x46e5e3[_0x739842(0x1ee)]=_0x46e5e3[_0x739842(0x1ee)][_0x739842(0x1db)](_0x1fca43=>_0x1fca43[_0x739842(0x1b5)]!==status_enums_1[_0x739842(0x207)][_0x739842(0x1c4)]);if(!_0x46e5e3[_0x739842(0x1ee)][_0x739842(0x1b1)])throw new Error(_0x739842(0x1e3));return _0x46e5e3;}else throw new veeva_error_1[(_0x739842(0x1c2))](_0x309b33[_0x739842(0x1df)]);}async[a336_0x53fc0d(0x1ec)](_0x45836){const _0x15ddc3=a336_0x53fc0d,{data:_0x37c38d}=await this[_0x15ddc3(0x1f9)][_0x15ddc3(0x1d1)](_0x45836,{'responseType':_0x15ddc3(0x1dc)});return _0x37c38d;}[a336_0x53fc0d(0x1bd)](_0x4f4c02){const _0x121e25=a336_0x53fc0d;return _0x4f4c02[_0x121e25(0x1c9)]((_0x3cd062,_0x6a0384)=>{const _0x1458cc=_0x121e25,_0x52f8bb=_0x6a0384['package_components']['map'](_0x516c8f=>new package_component_dto_1[(_0x1458cc(0x1da))]({'status':_0x6a0384[_0x1458cc(0x1b4)],'stepName':_0x6a0384['name__v'],'component':_0x516c8f}));return[..._0x3cd062,..._0x52f8bb];},[]);}async['fillPackageDeploymentAction'](_0x1923f0){const _0x1eaa77=a336_0x53fc0d,{data:_0x341c26}=await this[_0x1eaa77(0x1f9)][_0x1eaa77(0x1e8)](veeva_constants_1[_0x1eaa77(0x1de)]['ENDPOINT_VALIDATE_PACKAGE'][_0x1eaa77(0x1e6)](_0x1eaa77(0x1f3),_0x1923f0[_0x1eaa77(0x20b)]));if(_0x341c26['responseStatus']===status_enums_1[_0x1eaa77(0x1c5)][_0x1eaa77(0x1c8)]){const {package_steps:_0x4cbc8e}=_0x341c26[_0x1eaa77(0x1ff)],_0x41ea48=array_utils_1['ArrayUtils']['groupToMap'](_0x1923f0[_0x1eaa77(0x1ee)],({stepName:_0x379caf})=>_0x379caf);for(const {name__v:_0x27cf9d,deployment_action:_0x398f72}of _0x4cbc8e){for(const _0x1c3d5a of _0x41ea48[_0x1eaa77(0x1d1)](_0x27cf9d)||[]){_0x1c3d5a['deploymentAction']=package_component_dto_1[_0x1eaa77(0x1da)][_0x1eaa77(0x1e1)](_0x398f72);}}}else throw new veeva_error_1[(_0x1eaa77(0x1c2))](_0x341c26[_0x1eaa77(0x1df)]);}async['import'](_0x48723f){const _0x4ba3dd=a336_0x53fc0d,_0xc07dd1=await this['importVpk'](_0x48723f),_0x3647e7=await this[_0x4ba3dd(0x1ca)](_0xc07dd1),_0x31f43=await this[_0x4ba3dd(0x209)](_0x3647e7),_0x102752=await this[_0x4ba3dd(0x1cd)](_0x31f43['packageId']),_0x4acbed=await this[_0x4ba3dd(0x1ca)](_0x102752);return this[_0x4ba3dd(0x1d9)](_0x4acbed,_0x31f43);}}exports[a336_0x53fc0d(0x1c0)]=PackageImportService;