function a63_0xad39(_0x3a0f75,_0x580f88){const _0x2fe6ae=a63_0x6ecd();return a63_0xad39=function(_0x3b2147,_0x367003){_0x3b2147=_0x3b2147-0x16a;let _0x6ecdce=_0x2fe6ae[_0x3b2147];return _0x6ecdce;},a63_0xad39(_0x3a0f75,_0x580f88);}const a63_0x5014ef=a63_0xad39;(function(_0x47bcdc,_0x2e39fd){const _0x173462=a63_0xad39,_0x426f34=_0x47bcdc();while(!![]){try{const _0x512b1a=-parseInt(_0x173462(0x17e))/0x1*(-parseInt(_0x173462(0x17f))/0x2)+parseInt(_0x173462(0x185))/0x3+-parseInt(_0x173462(0x174))/0x4*(-parseInt(_0x173462(0x171))/0x5)+-parseInt(_0x173462(0x180))/0x6*(parseInt(_0x173462(0x16b))/0x7)+parseInt(_0x173462(0x18c))/0x8+-parseInt(_0x173462(0x16d))/0x9+parseInt(_0x173462(0x183))/0xa*(-parseInt(_0x173462(0x189))/0xb);if(_0x512b1a===_0x2e39fd)break;else _0x426f34['push'](_0x426f34['shift']());}catch(_0xab66ae){_0x426f34['push'](_0x426f34['shift']());}}}(a63_0x6ecd,0x4350e));const a63_0x367003=(function(){let _0x1ebddb=!![];return function(_0x5b0562,_0x506674){const _0x43d3c8=_0x1ebddb?function(){const _0x937325=a63_0xad39;if(_0x506674){const _0x286eb9=_0x506674[_0x937325(0x18e)](_0x5b0562,arguments);return _0x506674=null,_0x286eb9;}}:function(){};return _0x1ebddb=![],_0x43d3c8;};}()),a63_0x3b2147=a63_0x367003(this,function(){const _0x445537=a63_0xad39;return a63_0x3b2147[_0x445537(0x191)]()[_0x445537(0x184)](_0x445537(0x186))[_0x445537(0x191)]()[_0x445537(0x170)](a63_0x3b2147)[_0x445537(0x184)]('(((.+)+)+)+$');});a63_0x3b2147();'use strict';var _a;Object[a63_0x5014ef(0x181)](exports,a63_0x5014ef(0x179),{'value':!![]}),exports[a63_0x5014ef(0x187)]=void 0x0;const base_deploy_1=require('./base-deploy'),utils_1=require(a63_0x5014ef(0x16c)),BATCH_DEPLOY_PARALLEL_COUNT=(_a=process['env']['DATA_MASKING_BATCH_DEPLOY_PARALLEL_COUNT'])!==null&&_a!==void 0x0?_a:'';class BaseBulkDeploy extends base_deploy_1[a63_0x5014ef(0x178)]{constructor(){const _0x20fb1b=a63_0x5014ef;super(...arguments),this[_0x20fb1b(0x18d)]=0x0,this[_0x20fb1b(0x17a)]=[];}async[a63_0x5014ef(0x17c)](_0x15824e){const _0x26c29d=a63_0x5014ef;this[_0x26c29d(0x17b)][_0x26c29d(0x18a)]&&await this[_0x26c29d(0x172)]();if(this['deployments']['length']){const _0x4c58c9=(await Promise[_0x26c29d(0x182)](this[_0x26c29d(0x17a)]))['flat']();this[_0x26c29d(0x17a)]=[],await this[_0x26c29d(0x175)](_0x4c58c9);}await this['deployer']['close'](),_0x15824e();}async[a63_0x5014ef(0x172)](){const _0x433a2d=a63_0x5014ef,_0x4aefb1=this[_0x433a2d(0x173)](this[_0x433a2d(0x17b)]);this[_0x433a2d(0x17a)][_0x433a2d(0x188)](_0x4aefb1),this[_0x433a2d(0x17b)]=[],this[_0x433a2d(0x18d)]=0x0;if(this[_0x433a2d(0x17a)][_0x433a2d(0x18a)]>=BaseBulkDeploy[_0x433a2d(0x190)]){const _0x14a316=(await Promise[_0x433a2d(0x182)](this[_0x433a2d(0x17a)]))[_0x433a2d(0x16e)]();this['deployments']=[],await this[_0x433a2d(0x175)](_0x14a316);}}[a63_0x5014ef(0x17d)](_0x192552){const _0x570569=a63_0x5014ef,_0x4ad236=utils_1['CsvUtils'][_0x570569(0x177)](_0x192552);return!this[_0x570569(0x18f)]&&(this['headerCsvSize']=utils_1['CsvUtils'][_0x570569(0x16f)](Object[_0x570569(0x18b)](_0x192552))),_0x4ad236+this[_0x570569(0x18f)]+this[_0x570569(0x18d)]>=BaseBulkDeploy[_0x570569(0x176)];}}function a63_0x6ecd(){const _0x3340e5=['16259RhfuKH','48uXdZhK','6xRULkH','defineProperty','all','10ObtqeA','search','1620792EltBHT','(((.+)+)+)+$','BaseBulkDeploy','push','13474439GHCxaW','length','keys','3963360BvFftd','recordsCsvSize','apply','headerCsvSize','CONCURRENT_DEPLOYMENT_COUNT','toString','MAX_RECORDS_CHUNK_COUNT','1843975pJkqVQ','@flosum/utils','802503qiazBw','flat','calculateHeaderSize','constructor','7885mwfQVJ','executeDeploy','deployRecords','1084fkXWHC','handleDeployResults','MAX_CSV_RECORDS_CHUNK_SIZE','calculateRecordSize','BaseDeploy','__esModule','deployments','records','finish','isExceedCSVSizeLimit'];a63_0x6ecd=function(){return _0x3340e5;};return a63_0x6ecd();}exports[a63_0x5014ef(0x187)]=BaseBulkDeploy,BaseBulkDeploy[a63_0x5014ef(0x190)]=+BATCH_DEPLOY_PARALLEL_COUNT||0x14,BaseBulkDeploy[a63_0x5014ef(0x16a)]=0x2710,BaseBulkDeploy[a63_0x5014ef(0x176)]=0x989680;