const a132_0x34e130=a132_0x43e2;(function(_0x19327d,_0x58c89c){const _0x45a3dd=a132_0x43e2,_0x6ecdd2=_0x19327d();while(!![]){try{const _0x213243=parseInt(_0x45a3dd(0x161))/0x1*(-parseInt(_0x45a3dd(0x174))/0x2)+parseInt(_0x45a3dd(0x168))/0x3+-parseInt(_0x45a3dd(0x17c))/0x4+parseInt(_0x45a3dd(0x172))/0x5+-parseInt(_0x45a3dd(0x178))/0x6+-parseInt(_0x45a3dd(0x176))/0x7*(parseInt(_0x45a3dd(0x15b))/0x8)+parseInt(_0x45a3dd(0x17f))/0x9;if(_0x213243===_0x58c89c)break;else _0x6ecdd2['push'](_0x6ecdd2['shift']());}catch(_0x16475c){_0x6ecdd2['push'](_0x6ecdd2['shift']());}}}(a132_0x27ef,0xd0f67));const a132_0x4428cd=(function(){let _0x40264d=!![];return function(_0x4bb33e,_0x1cd279){const _0x3423ae=_0x40264d?function(){const _0x326a07=a132_0x43e2;if(_0x1cd279){const _0xc5ebf9=_0x1cd279[_0x326a07(0x16a)](_0x4bb33e,arguments);return _0x1cd279=null,_0xc5ebf9;}}:function(){};return _0x40264d=![],_0x3423ae;};}()),a132_0x295096=a132_0x4428cd(this,function(){const _0x37429d=a132_0x43e2;return a132_0x295096[_0x37429d(0x15d)]()[_0x37429d(0x169)](_0x37429d(0x177))[_0x37429d(0x15d)]()[_0x37429d(0x17d)](a132_0x295096)['search'](_0x37429d(0x177));});a132_0x295096();function a132_0x43e2(_0x25a39a,_0x346702){const _0x194f6e=a132_0x27ef();return a132_0x43e2=function(_0x295096,_0x4428cd){_0x295096=_0x295096-0x15b;let _0x27efcb=_0x194f6e[_0x295096];return _0x27efcb;},a132_0x43e2(_0x25a39a,_0x346702);}'use strict';var __importDefault=this&&this['__importDefault']||function(_0x29dbaa){const _0x141502=a132_0x43e2;return _0x29dbaa&&_0x29dbaa[_0x141502(0x173)]?_0x29dbaa:{'default':_0x29dbaa};};function a132_0x27ef(){const _0x5a9427=['SalesforceLogger3','setCredentials','../salesforce/services/salesforce.credentials-service','../salesforce/services/salesforce-logger-v3.service','3154572iblSpN','search','apply','./prepare-to-job','DisableSyncService','prepareToJob','../../../common/env','exit','getSocketPath','default','4128110FkBZOB','__esModule','6yvnVZO','defineProperty','2430589doenDt','(((.+)+)+)+$','7710096AJXkXG','logger','readFileSync','reflect-metadata','4797372SDsQiw','constructor','parse','36670410CwYqZa','32IQXeNH','run','toString','../devops/services/disable-sync.service','utf-8','catch','407486gVkBNI','./childs.utils','SalesforceCredentialsService'];a132_0x27ef=function(){return _0x5a9427;};return a132_0x27ef();}Object[a132_0x34e130(0x175)](exports,a132_0x34e130(0x173),{'value':!![]});const fs_1=require('fs');require(a132_0x34e130(0x17b));const typedi_1=__importDefault(require('typedi'));require(a132_0x34e130(0x16e));const disable_sync_service_1=require(a132_0x34e130(0x15e)),childs_utils_1=require(a132_0x34e130(0x162)),salesforce_credentials_service_1=require(a132_0x34e130(0x166)),providers_tokens_1=require('../providers/providers.tokens'),salesforce_logger_v3_service_1=require(a132_0x34e130(0x167)),prepare_to_job_1=require(a132_0x34e130(0x16b)),socketPath=(0x0,childs_utils_1[a132_0x34e130(0x170)])();if(!socketPath)throw new Error('Unresolved\x20socket\x20path');const message=(0x0,fs_1[a132_0x34e130(0x17a)])(socketPath,{'encoding':a132_0x34e130(0x15f)}),{data}=JSON[a132_0x34e130(0x17e)](message),execute=async _0x593dbc=>{const _0x311993=a132_0x34e130;salesforce_credentials_service_1[_0x311993(0x163)][_0x311993(0x165)](),typedi_1['default']['set'](providers_tokens_1['Tokens'][_0x311993(0x179)],new salesforce_logger_v3_service_1[(_0x311993(0x164))](_0x593dbc['loggerId'])),await(0x0,prepare_to_job_1[_0x311993(0x16d)])(_0x593dbc['connectionId']);const _0x5135a0=typedi_1[_0x311993(0x171)]['get'](disable_sync_service_1[_0x311993(0x16c)]);await _0x5135a0[_0x311993(0x15c)]();};execute(data)['then'](()=>process['exit'](0x0))[a132_0x34e130(0x160)](()=>process[a132_0x34e130(0x16f)](0x0));