const a53_0x528166=a53_0xc671;(function(_0x485547,_0x49564d){const _0xa0adbe=a53_0xc671,_0x1b35a2=_0x485547();while(!![]){try{const _0x5a3b5c=parseInt(_0xa0adbe(0x201))/0x1+parseInt(_0xa0adbe(0x200))/0x2+parseInt(_0xa0adbe(0x1f2))/0x3*(-parseInt(_0xa0adbe(0x1fd))/0x4)+parseInt(_0xa0adbe(0x207))/0x5*(parseInt(_0xa0adbe(0x213))/0x6)+parseInt(_0xa0adbe(0x216))/0x7*(-parseInt(_0xa0adbe(0x205))/0x8)+-parseInt(_0xa0adbe(0x1f3))/0x9+parseInt(_0xa0adbe(0x202))/0xa;if(_0x5a3b5c===_0x49564d)break;else _0x1b35a2['push'](_0x1b35a2['shift']());}catch(_0x919482){_0x1b35a2['push'](_0x1b35a2['shift']());}}}(a53_0x5329,0x32689));const a53_0x1331ad=(function(){let _0x27f7fb=!![];return function(_0x3abf0b,_0x393852){const _0x476aca=_0x27f7fb?function(){const _0xccb65=a53_0xc671;if(_0x393852){const _0x3ed728=_0x393852[_0xccb65(0x210)](_0x3abf0b,arguments);return _0x393852=null,_0x3ed728;}}:function(){};return _0x27f7fb=![],_0x476aca;};}()),a53_0xd9d58f=a53_0x1331ad(this,function(){const _0x2f5547=a53_0xc671;return a53_0xd9d58f[_0x2f5547(0x20e)]()[_0x2f5547(0x212)](_0x2f5547(0x20a))['toString']()[_0x2f5547(0x1fc)](a53_0xd9d58f)['search'](_0x2f5547(0x20a));});function a53_0xc671(_0x16f7f8,_0xbaae55){const _0x56a53b=a53_0x5329();return a53_0xc671=function(_0xd9d58f,_0x1331ad){_0xd9d58f=_0xd9d58f-0x1ed;let _0x53298a=_0x56a53b[_0xd9d58f];return _0x53298a;},a53_0xc671(_0x16f7f8,_0xbaae55);}function a53_0x5329(){const _0x1b0cc4=['943704ipdQjW','PORT','./modules/info/info.controller','TrackingMetadataController','RetentionPolicyService','InfoController','env','default','./pre-bootstrap','constructor','4ifxmre','defineProperty','DataMaskingController','17998AwSEoA','9660vsYpeh','1819480fThUdO','VeevaVaultController','__importDefault','320cYKuKB','./common/env','1869295hFbzKx','Server','startScheduler','(((.+)+)+)+$','typedi','./modules/retrieve-metadata/retrieve-metadata.controller','GitController','toString','RetrieveMetadataController','apply','reflect-metadata','search','6dsqdGm','run','./modules/tracking-metadata/tracking-metadata.controller','28021iPIoEc','./modules/proxy/proxy.controller','./modules/retention-policy/classes/data-masking-retention-policy','__esModule','preBootstrap','./modules/git/git.controller','309051jjvaVW'];a53_0x5329=function(){return _0x1b0cc4;};return a53_0x5329();}a53_0xd9d58f();'use strict';var __importDefault=this&&this[a53_0x528166(0x204)]||function(_0x14396c){const _0xc6fffb=a53_0x528166;return _0x14396c&&_0x14396c[_0xc6fffb(0x1ef)]?_0x14396c:{'default':_0x14396c};};Object[a53_0x528166(0x1fe)](exports,a53_0x528166(0x1ef),{'value':!![]}),require(a53_0x528166(0x211)),require(a53_0x528166(0x206));const typedi_1=__importDefault(require(a53_0x528166(0x20b))),server_1=require('./core/server'),proxy_controller_1=require(a53_0x528166(0x1ed)),info_controller_1=require(a53_0x528166(0x1f5)),pre_bootstrap_1=require(a53_0x528166(0x1fb)),salesforce_credentials_service_1=require('./modules/git/salesforce/services/salesforce.credentials-service'),git_controller_1=require(a53_0x528166(0x1f1)),functions_controller_1=require('./modules/functions/functions.controller'),veeva_vault_controller_1=require('./modules/veeva-vault/veeva-vault.controller'),data_masking_controller_1=require('./modules/data-masking/data-masking.controller'),retention_policy_service_1=require('./modules/retention-policy/services/retention-policy.service'),data_masking_retention_policy_1=require(a53_0x528166(0x1ee)),retrieve_metadata_controller_1=require(a53_0x528166(0x20c)),tracking_metadata_controller_1=require(a53_0x528166(0x215)),PORT=process[a53_0x528166(0x1f9)][a53_0x528166(0x1f4)]?parseInt(process['env']['PORT']):0xbb8;async function bootstrap(){const _0x2522b7=a53_0x528166,_0x200f57=typedi_1[_0x2522b7(0x1fa)]['get'](server_1[_0x2522b7(0x208)]);salesforce_credentials_service_1['SalesforceCredentialsService']['setCredentials'](),_0x200f57['useControllers'](proxy_controller_1['ProxyController'],info_controller_1[_0x2522b7(0x1f8)],functions_controller_1['FunctionsController'],git_controller_1[_0x2522b7(0x20d)],veeva_vault_controller_1[_0x2522b7(0x203)],data_masking_controller_1[_0x2522b7(0x1ff)],retrieve_metadata_controller_1[_0x2522b7(0x20f)],tracking_metadata_controller_1[_0x2522b7(0x1f6)]),await _0x200f57[_0x2522b7(0x214)](PORT);const _0x50a319=new retention_policy_service_1[(_0x2522b7(0x1f7))]([new data_masking_retention_policy_1['DataMaskingRetentionPolicy']()]);_0x50a319[_0x2522b7(0x209)]();}(0x0,pre_bootstrap_1[a53_0x528166(0x1f0)])()['then'](bootstrap);