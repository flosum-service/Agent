const a83_0x3ac14d=a83_0x354e;(function(_0x29889f,_0x257980){const _0x5cb096=a83_0x354e,_0x3f37e3=_0x29889f();while(!![]){try{const _0xc50de3=parseInt(_0x5cb096(0x178))/0x1+parseInt(_0x5cb096(0x166))/0x2+-parseInt(_0x5cb096(0x17c))/0x3+-parseInt(_0x5cb096(0x168))/0x4+parseInt(_0x5cb096(0x17d))/0x5*(-parseInt(_0x5cb096(0x16d))/0x6)+-parseInt(_0x5cb096(0x17f))/0x7*(-parseInt(_0x5cb096(0x169))/0x8)+parseInt(_0x5cb096(0x174))/0x9*(-parseInt(_0x5cb096(0x17e))/0xa);if(_0xc50de3===_0x257980)break;else _0x3f37e3['push'](_0x3f37e3['shift']());}catch(_0x527c2d){_0x3f37e3['push'](_0x3f37e3['shift']());}}}(a83_0x30af,0x55ad4));const a83_0xcb98cc=(function(){let _0x3458a6=!![];return function(_0x598167,_0x4fd47c){const _0x33afea=_0x3458a6?function(){const _0x2b8e34=a83_0x354e;if(_0x4fd47c){const _0x8d2296=_0x4fd47c[_0x2b8e34(0x187)](_0x598167,arguments);return _0x4fd47c=null,_0x8d2296;}}:function(){};return _0x3458a6=![],_0x33afea;};}()),a83_0x15935b=a83_0xcb98cc(this,function(){const _0x182de2=a83_0x354e;return a83_0x15935b['toString']()['search']('(((.+)+)+)+$')[_0x182de2(0x165)]()[_0x182de2(0x177)](a83_0x15935b)[_0x182de2(0x183)](_0x182de2(0x171));});a83_0x15935b();function a83_0x354e(_0x329264,_0x1c91a4){const _0x356b68=a83_0x30af();return a83_0x354e=function(_0x15935b,_0xcb98cc){_0x15935b=_0x15935b-0x165;let _0x30af56=_0x356b68[_0x15935b];return _0x30af56;},a83_0x354e(_0x329264,_0x1c91a4);}'use strict';function a83_0x30af(){const _0x1f34d2=['605401KYBrMS','recordsCsvSize','stringify','BulkV1Deploy','483906IInFKf','387605tkHKFW','817670mRxgnw','4529vMIjCU','length','__esModule','deployer','search','NULL_CSV_VALUE','executeDeploy','BaseBulkDeploy','apply','toString','287430jNxgHj','SimpleBulkv1DeployData','336380YUBklU','4072NrILpU','execute','castRecord','@flosum/salesforce','12UTUHmI','isExceedCSVSizeLimit','push','#N/A','(((.+)+)+)+$','csv-stringify/sync','records','36ANxPaw','defineProperty','@flosum/utils','constructor'];a83_0x30af=function(){return _0x1f34d2;};return a83_0x30af();}Object[a83_0x3ac14d(0x175)](exports,a83_0x3ac14d(0x181),{'value':!![]}),exports[a83_0x3ac14d(0x17b)]=void 0x0;const salesforce_1=require(a83_0x3ac14d(0x16c)),sync_1=require(a83_0x3ac14d(0x172)),base_bulk_deploy_1=require('./base-bulk-deploy'),utils_1=require(a83_0x3ac14d(0x176));class BulkV1Deploy extends base_bulk_deploy_1[a83_0x3ac14d(0x186)]{constructor(_0x46d3a1){const _0x516fdd=a83_0x3ac14d;super(_0x46d3a1),this[_0x516fdd(0x182)]=new salesforce_1[(_0x516fdd(0x167))](this['baseDeployPayload']);}async[a83_0x3ac14d(0x16f)](_0x5ab6d5,_0x2e1f4d,_0xf07422){const _0x17d527=a83_0x3ac14d,_0x1982fa=this[_0x17d527(0x16b)](_0x5ab6d5),_0x1de194=this[_0x17d527(0x173)][_0x17d527(0x180)]>=base_bulk_deploy_1['BaseBulkDeploy']['MAX_RECORDS_CHUNK_COUNT']||this[_0x17d527(0x16e)](_0x1982fa);_0x1de194&&await this[_0x17d527(0x185)](),this[_0x17d527(0x179)]+=utils_1['CsvUtils']['calculateRecordSize'](_0x5ab6d5),this[_0x17d527(0x173)]['push'](_0x1982fa),_0xf07422();}['deployRecords'](_0x4997ad){const _0x103184=a83_0x3ac14d,_0x3d7e97=(0x0,sync_1[_0x103184(0x17a)])(_0x4997ad,{'header':!![]});return this[_0x103184(0x182)][_0x103184(0x16a)](_0x3d7e97);}['castRecord'](_0xd68443){const _0x3e4bb5=a83_0x3ac14d,_0x47d7bc={};for(const _0x352225 in _0xd68443){_0xd68443[_0x352225]===null?_0x47d7bc[_0x352225]=BulkV1Deploy[_0x3e4bb5(0x184)]:_0x47d7bc[_0x352225]=_0xd68443[_0x352225];}return _0x47d7bc;}}exports[a83_0x3ac14d(0x17b)]=BulkV1Deploy,BulkV1Deploy['NULL_CSV_VALUE']=a83_0x3ac14d(0x170);