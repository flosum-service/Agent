const a93_0x1a47f8=a93_0x57a7;(function(_0x1422f4,_0x118f5e){const _0x41f543=a93_0x57a7,_0x537679=_0x1422f4();while(!![]){try{const _0x58bb12=-parseInt(_0x41f543(0x1cd))/0x1+-parseInt(_0x41f543(0x1af))/0x2+parseInt(_0x41f543(0x1b5))/0x3+parseInt(_0x41f543(0x1d0))/0x4+-parseInt(_0x41f543(0x1b2))/0x5*(parseInt(_0x41f543(0x1b8))/0x6)+parseInt(_0x41f543(0x1bb))/0x7+parseInt(_0x41f543(0x1b4))/0x8*(parseInt(_0x41f543(0x1c7))/0x9);if(_0x58bb12===_0x118f5e)break;else _0x537679['push'](_0x537679['shift']());}catch(_0x3c434f){_0x537679['push'](_0x537679['shift']());}}}(a93_0x4eef,0xc413f));const a93_0x406f56=(function(){let _0x5610fc=!![];return function(_0x331ee1,_0x1334cf){const _0x4b81c1=_0x5610fc?function(){const _0x237eb3=a93_0x57a7;if(_0x1334cf){const _0x6d0cc4=_0x1334cf[_0x237eb3(0x1cb)](_0x331ee1,arguments);return _0x1334cf=null,_0x6d0cc4;}}:function(){};return _0x5610fc=![],_0x4b81c1;};}()),a93_0x1774d8=a93_0x406f56(this,function(){const _0x2d7670=a93_0x57a7;return a93_0x1774d8['toString']()[_0x2d7670(0x1c3)](_0x2d7670(0x1b1))[_0x2d7670(0x1ad)]()[_0x2d7670(0x1d1)](a93_0x1774d8)['search'](_0x2d7670(0x1b1));});function a93_0x4eef(){const _0x3db746=['constructor','default','exit','./childs.utils','toString','__esModule','349810xVcbZG','then','(((.+)+)+)+$','5TwnQuj','../salesforce/services/salesforce-logger-v3.service','4640776Roylee','2777121nfIwtr','connectionId','run','8877186gBjBYs','../devops/services/sync.service','defineProperty','10257702hnLXzm','prepareToJob','reflect-metadata','__importDefault','get','setCredentials','../providers/providers.tokens','../salesforce/services/salesforce.credentials-service','search','utf-8','Tokens','parse','9tXREbu','Unresolved\x20socket\x20path','loggerId','typedi','apply','SalesforceCredentialsService','1556889WWPyiR','logger','SalesforceLogger3','4173080TCYvPA'];a93_0x4eef=function(){return _0x3db746;};return a93_0x4eef();}a93_0x1774d8();'use strict';function a93_0x57a7(_0x1cfae5,_0xf885c0){const _0x9b1ca3=a93_0x4eef();return a93_0x57a7=function(_0x1774d8,_0x406f56){_0x1774d8=_0x1774d8-0x1ac;let _0x4eef67=_0x9b1ca3[_0x1774d8];return _0x4eef67;},a93_0x57a7(_0x1cfae5,_0xf885c0);}var __importDefault=this&&this[a93_0x1a47f8(0x1be)]||function(_0x32833a){const _0x4ceb34=a93_0x1a47f8;return _0x32833a&&_0x32833a[_0x4ceb34(0x1ae)]?_0x32833a:{'default':_0x32833a};};Object[a93_0x1a47f8(0x1ba)](exports,'__esModule',{'value':!![]});const fs_1=require('fs');require(a93_0x1a47f8(0x1bd));const typedi_1=__importDefault(require(a93_0x1a47f8(0x1ca)));require('../../../common/env');const sync_service_1=require(a93_0x1a47f8(0x1b9)),childs_utils_1=require(a93_0x1a47f8(0x1ac)),salesforce_credentials_service_1=require(a93_0x1a47f8(0x1c2)),providers_tokens_1=require(a93_0x1a47f8(0x1c1)),salesforce_logger_v3_service_1=require(a93_0x1a47f8(0x1b3)),prepare_to_job_1=require('./prepare-to-job'),socketPath=childs_utils_1['getSocketPath']();if(!socketPath)throw new Error(a93_0x1a47f8(0x1c8));const message=fs_1['readFileSync'](socketPath,{'encoding':a93_0x1a47f8(0x1c4)}),{data}=JSON[a93_0x1a47f8(0x1c6)](message),execute=async _0x30455b=>{const _0x446e54=a93_0x1a47f8;salesforce_credentials_service_1[_0x446e54(0x1cc)][_0x446e54(0x1c0)](),typedi_1['default']['set'](providers_tokens_1[_0x446e54(0x1c5)][_0x446e54(0x1ce)],new salesforce_logger_v3_service_1[(_0x446e54(0x1cf))](_0x30455b[_0x446e54(0x1c9)])),await prepare_to_job_1[_0x446e54(0x1bc)](_0x30455b[_0x446e54(0x1b6)]);const _0x2958b7=typedi_1[_0x446e54(0x1d2)][_0x446e54(0x1bf)](sync_service_1['SyncService']);await _0x2958b7[_0x446e54(0x1b7)]();};execute(data)[a93_0x1a47f8(0x1b0)](()=>process[a93_0x1a47f8(0x1d3)](0x0))['catch'](()=>process['exit'](0x0));