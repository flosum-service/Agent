function a83_0x1189(_0x5d7f18,_0x36de9a){const _0x496766=a83_0x2683();return a83_0x1189=function(_0x376fb6,_0x2cf4e0){_0x376fb6=_0x376fb6-0x108;let _0x2683e3=_0x496766[_0x376fb6];return _0x2683e3;},a83_0x1189(_0x5d7f18,_0x36de9a);}const a83_0x47056d=a83_0x1189;(function(_0x33ddd0,_0x50ce64){const _0x2a274c=a83_0x1189,_0x23d5ed=_0x33ddd0();while(!![]){try{const _0x35ee58=-parseInt(_0x2a274c(0x10f))/0x1*(parseInt(_0x2a274c(0x11c))/0x2)+parseInt(_0x2a274c(0x122))/0x3+-parseInt(_0x2a274c(0x11e))/0x4*(-parseInt(_0x2a274c(0x123))/0x5)+parseInt(_0x2a274c(0x10b))/0x6+parseInt(_0x2a274c(0x10e))/0x7*(-parseInt(_0x2a274c(0x11f))/0x8)+-parseInt(_0x2a274c(0x117))/0x9+parseInt(_0x2a274c(0x10a))/0xa;if(_0x35ee58===_0x50ce64)break;else _0x23d5ed['push'](_0x23d5ed['shift']());}catch(_0x20de26){_0x23d5ed['push'](_0x23d5ed['shift']());}}}(a83_0x2683,0x69fd6));const a83_0x2cf4e0=(function(){let _0xcb86e4=!![];return function(_0x74669a,_0x336d66){const _0x2ce833=_0xcb86e4?function(){const _0x84452c=a83_0x1189;if(_0x336d66){const _0x163893=_0x336d66[_0x84452c(0x118)](_0x74669a,arguments);return _0x336d66=null,_0x163893;}}:function(){};return _0xcb86e4=![],_0x2ce833;};}()),a83_0x376fb6=a83_0x2cf4e0(this,function(){const _0x41534c=a83_0x1189;return a83_0x376fb6[_0x41534c(0x108)]()[_0x41534c(0x126)](_0x41534c(0x109))[_0x41534c(0x108)]()[_0x41534c(0x127)](a83_0x376fb6)[_0x41534c(0x126)](_0x41534c(0x109));});a83_0x376fb6();'use strict';Object[a83_0x47056d(0x10d)](exports,a83_0x47056d(0x119),{'value':!![]}),exports['BulkV1DeleteDeploy']=void 0x0;const salesforce_1=require(a83_0x47056d(0x113)),sync_1=require(a83_0x47056d(0x115)),base_bulk_deploy_1=require(a83_0x47056d(0x11b)),utils_1=require(a83_0x47056d(0x125));class BulkV1DeleteDeploy extends base_bulk_deploy_1[a83_0x47056d(0x124)]{constructor(_0x2c628a){const _0x3a730f=a83_0x47056d;super(_0x2c628a),this['deployer']=new salesforce_1[(_0x3a730f(0x11d))](this['baseDeployPayload']);}async['push'](_0x38a77c,_0x1add08,_0x75c5e1){const _0x5a6ba1=a83_0x47056d,_0x5d56dc=this[_0x5a6ba1(0x116)][_0x5a6ba1(0x121)]>=base_bulk_deploy_1[_0x5a6ba1(0x124)]['MAX_RECORDS_CHUNK_COUNT']||this['isExceedCSVSizeLimit'](_0x38a77c);_0x5d56dc&&await this[_0x5a6ba1(0x112)](),this['recordsCsvSize']+=utils_1['CsvUtils'][_0x5a6ba1(0x11a)](_0x38a77c),this[_0x5a6ba1(0x116)][_0x5a6ba1(0x120)](_0x38a77c),_0x75c5e1();}[a83_0x47056d(0x110)](_0x3ef7a0){const _0x458c59=a83_0x47056d,_0xf170d0=(0x0,sync_1[_0x458c59(0x10c)])(_0x3ef7a0,{'header':!![]});return this['deployer'][_0x458c59(0x111)](_0xf170d0);}}function a83_0x2683(){const _0x551fde=['BaseBulkDeploy','@flosum/utils','search','constructor','toString','(((.+)+)+)+$','6754950yflLrH','1137702glCtdT','stringify','defineProperty','1668387welMDs','3eTReMA','deployRecords','execute','executeDeploy','@flosum/salesforce','BulkV1DeleteDeploy','csv-stringify/sync','records','4859586jTlAOP','apply','__esModule','calculateRecordSize','./base-bulk-deploy','92586nSPzKg','DeleteBulkv1DeployData','1749652qdLuXh','24TYUOWy','push','length','1576395qVbrtw','5DfnFWY'];a83_0x2683=function(){return _0x551fde;};return a83_0x2683();}exports[a83_0x47056d(0x114)]=BulkV1DeleteDeploy;