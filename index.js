const a54_0x1edb02=a54_0x3742;(function(_0x294744,_0x11ab77){const _0x4a7496=a54_0x3742,_0x50d24c=_0x294744();while(!![]){try{const _0x9fc844=parseInt(_0x4a7496(0x106))/0x1+-parseInt(_0x4a7496(0x112))/0x2+parseInt(_0x4a7496(0x128))/0x3*(-parseInt(_0x4a7496(0x111))/0x4)+-parseInt(_0x4a7496(0x121))/0x5*(parseInt(_0x4a7496(0x11d))/0x6)+-parseInt(_0x4a7496(0x122))/0x7*(-parseInt(_0x4a7496(0x124))/0x8)+parseInt(_0x4a7496(0x110))/0x9*(parseInt(_0x4a7496(0x10d))/0xa)+-parseInt(_0x4a7496(0x119))/0xb*(-parseInt(_0x4a7496(0x10f))/0xc);if(_0x9fc844===_0x11ab77)break;else _0x50d24c['push'](_0x50d24c['shift']());}catch(_0x1ebc99){_0x50d24c['push'](_0x50d24c['shift']());}}}(a54_0xbcc1,0xd12f7));const a54_0x5eb3fd=(function(){let _0x500943=!![];return function(_0x3aeb4e,_0x46d402){const _0x559856=_0x500943?function(){const _0xe7bd32=a54_0x3742;if(_0x46d402){const _0x369c8a=_0x46d402[_0xe7bd32(0x104)](_0x3aeb4e,arguments);return _0x46d402=null,_0x369c8a;}}:function(){};return _0x500943=![],_0x559856;};}()),a54_0x4ed66c=a54_0x5eb3fd(this,function(){const _0x4b6fc5=a54_0x3742;return a54_0x4ed66c['toString']()['search'](_0x4b6fc5(0x127))['toString']()[_0x4b6fc5(0x11a)](a54_0x4ed66c)['search'](_0x4b6fc5(0x127));});function a54_0xbcc1(){const _0x346171=['__esModule','12CyiYuz','8784tAwicH','4uIMTsB','1724484hLUcHv','./pre-bootstrap','__importDefault','Server','RetrieveMetadataController','DataMaskingController','./common/env','28770126ktbLpY','constructor','get','./modules/retrieve-metadata/retrieve-metadata.controller','36uUJYjJ','./modules/proxy/proxy.controller','run','./core/server','776170zzqrMC','14tLqSwP','typedi','1728488GYXpVJ','startScheduler','InfoController','(((.+)+)+)+$','5058063XympUH','useControllers','./modules/git/git.controller','./modules/git/salesforce/services/salesforce.credentials-service','FunctionsController','./modules/b2c/b2c.controller','./modules/retention-policy/classes/data-masking-retention-policy','preBootstrap','apply','./modules/functions/functions.controller','427094qgbKvh','./modules/info/info.controller','GitController','env','setCredentials','default','B2CController','8830uqxXyw'];a54_0xbcc1=function(){return _0x346171;};return a54_0xbcc1();}a54_0x4ed66c();function a54_0x3742(_0x2c2d4c,_0x296bf2){const _0x161a5d=a54_0xbcc1();return a54_0x3742=function(_0x4ed66c,_0x5eb3fd){_0x4ed66c=_0x4ed66c-0x103;let _0xbcc137=_0x161a5d[_0x4ed66c];return _0xbcc137;},a54_0x3742(_0x2c2d4c,_0x296bf2);}'use strict';var __importDefault=this&&this[a54_0x1edb02(0x114)]||function(_0x40bb66){const _0x1fce6=a54_0x1edb02;return _0x40bb66&&_0x40bb66[_0x1fce6(0x10e)]?_0x40bb66:{'default':_0x40bb66};};Object['defineProperty'](exports,a54_0x1edb02(0x10e),{'value':!![]}),require('reflect-metadata'),require(a54_0x1edb02(0x118));const typedi_1=__importDefault(require(a54_0x1edb02(0x123))),server_1=require(a54_0x1edb02(0x120)),proxy_controller_1=require(a54_0x1edb02(0x11e)),info_controller_1=require(a54_0x1edb02(0x107)),pre_bootstrap_1=require(a54_0x1edb02(0x113)),salesforce_credentials_service_1=require(a54_0x1edb02(0x12b)),git_controller_1=require(a54_0x1edb02(0x12a)),functions_controller_1=require(a54_0x1edb02(0x105)),veeva_vault_controller_1=require('./modules/veeva-vault/veeva-vault.controller'),data_masking_controller_1=require('./modules/data-masking/data-masking.controller'),retention_policy_service_1=require('./modules/retention-policy/services/retention-policy.service'),data_masking_retention_policy_1=require(a54_0x1edb02(0x12e)),retrieve_metadata_controller_1=require(a54_0x1edb02(0x11c)),tracking_metadata_controller_1=require('./modules/tracking-metadata/tracking-metadata.controller'),b2c_controller_1=require(a54_0x1edb02(0x12d)),PORT=process[a54_0x1edb02(0x109)]['PORT']?parseInt(process[a54_0x1edb02(0x109)]['PORT']):0xbb8;async function bootstrap(){const _0xa6aba4=a54_0x1edb02,_0x43af13=typedi_1[_0xa6aba4(0x10b)][_0xa6aba4(0x11b)](server_1[_0xa6aba4(0x115)]);salesforce_credentials_service_1['SalesforceCredentialsService'][_0xa6aba4(0x10a)](),_0x43af13[_0xa6aba4(0x129)](proxy_controller_1['ProxyController'],info_controller_1[_0xa6aba4(0x126)],functions_controller_1[_0xa6aba4(0x12c)],git_controller_1[_0xa6aba4(0x108)],veeva_vault_controller_1['VeevaVaultController'],data_masking_controller_1[_0xa6aba4(0x117)],retrieve_metadata_controller_1[_0xa6aba4(0x116)],tracking_metadata_controller_1['TrackingMetadataController'],b2c_controller_1[_0xa6aba4(0x10c)]),await _0x43af13[_0xa6aba4(0x11f)](PORT);const _0xe46994=new retention_policy_service_1['RetentionPolicyService']([new data_masking_retention_policy_1['DataMaskingRetentionPolicy']()]);_0xe46994[_0xa6aba4(0x125)]();}(0x0,pre_bootstrap_1[a54_0x1edb02(0x103)])()['then'](bootstrap);