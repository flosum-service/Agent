const a104_0x4da789=a104_0x3c77;function a104_0x3c77(_0xc46960,_0x40eaec){const _0x32ffe3=a104_0x5701();return a104_0x3c77=function(_0x2f9d89,_0x4b5a39){_0x2f9d89=_0x2f9d89-0x160;let _0x5701b8=_0x32ffe3[_0x2f9d89];return _0x5701b8;},a104_0x3c77(_0xc46960,_0x40eaec);}(function(_0x2c658d,_0x2b5e64){const _0x39039d=a104_0x3c77,_0x26f3a9=_0x2c658d();while(!![]){try{const _0x36efa1=-parseInt(_0x39039d(0x16d))/0x1+parseInt(_0x39039d(0x1ad))/0x2*(parseInt(_0x39039d(0x172))/0x3)+parseInt(_0x39039d(0x199))/0x4*(parseInt(_0x39039d(0x160))/0x5)+-parseInt(_0x39039d(0x195))/0x6+-parseInt(_0x39039d(0x186))/0x7+parseInt(_0x39039d(0x161))/0x8*(-parseInt(_0x39039d(0x177))/0x9)+parseInt(_0x39039d(0x171))/0xa*(parseInt(_0x39039d(0x1bc))/0xb);if(_0x36efa1===_0x2b5e64)break;else _0x26f3a9['push'](_0x26f3a9['shift']());}catch(_0x253bfc){_0x26f3a9['push'](_0x26f3a9['shift']());}}}(a104_0x5701,0x837b7));const a104_0x4b5a39=(function(){let _0x2c150e=!![];return function(_0x20bee6,_0x165f06){const _0x1c9bc2=_0x2c150e?function(){const _0x349a20=a104_0x3c77;if(_0x165f06){const _0x15a260=_0x165f06[_0x349a20(0x1a0)](_0x20bee6,arguments);return _0x165f06=null,_0x15a260;}}:function(){};return _0x2c150e=![],_0x1c9bc2;};}()),a104_0x2f9d89=a104_0x4b5a39(this,function(){const _0x563a20=a104_0x3c77;return a104_0x2f9d89[_0x563a20(0x18e)]()[_0x563a20(0x17e)]('(((.+)+)+)+$')[_0x563a20(0x18e)]()[_0x563a20(0x19e)](a104_0x2f9d89)[_0x563a20(0x17e)]('(((.+)+)+)+$');});a104_0x2f9d89();'use strict';var __decorate=this&&this['__decorate']||function(_0x375d36,_0x25368a,_0x4ff842,_0x383d40){const _0x385c6e=a104_0x3c77;var _0x5caf7a=arguments['length'],_0x394df2=_0x5caf7a<0x3?_0x25368a:_0x383d40===null?_0x383d40=Object[_0x385c6e(0x19b)](_0x25368a,_0x4ff842):_0x383d40,_0x5350fa;if(typeof Reflect===_0x385c6e(0x197)&&typeof Reflect[_0x385c6e(0x18d)]===_0x385c6e(0x1a5))_0x394df2=Reflect['decorate'](_0x375d36,_0x25368a,_0x4ff842,_0x383d40);else{for(var _0x1fb191=_0x375d36[_0x385c6e(0x1c9)]-0x1;_0x1fb191>=0x0;_0x1fb191--)if(_0x5350fa=_0x375d36[_0x1fb191])_0x394df2=(_0x5caf7a<0x3?_0x5350fa(_0x394df2):_0x5caf7a>0x3?_0x5350fa(_0x25368a,_0x4ff842,_0x394df2):_0x5350fa(_0x25368a,_0x4ff842))||_0x394df2;}return _0x5caf7a>0x3&&_0x394df2&&Object[_0x385c6e(0x16e)](_0x25368a,_0x4ff842,_0x394df2),_0x394df2;},__metadata=this&&this[a104_0x4da789(0x189)]||function(_0x378a10,_0x225c6b){const _0x1bbc30=a104_0x4da789;if(typeof Reflect===_0x1bbc30(0x197)&&typeof Reflect[_0x1bbc30(0x1c7)]===_0x1bbc30(0x1a5))return Reflect[_0x1bbc30(0x1c7)](_0x378a10,_0x225c6b);},__importDefault=this&&this[a104_0x4da789(0x1a3)]||function(_0x3751d7){const _0x1e2fb8=a104_0x4da789;return _0x3751d7&&_0x3751d7[_0x1e2fb8(0x1b8)]?_0x3751d7:{'default':_0x3751d7};},FlosumCommitJob_1;Object[a104_0x4da789(0x16e)](exports,a104_0x4da789(0x1b8),{'value':!![]}),exports[a104_0x4da789(0x183)]=void 0x0;const core_1=require(a104_0x4da789(0x18c)),salesforce_service_1=require(a104_0x4da789(0x1c2)),typedi_1=require(a104_0x4da789(0x17b)),errors_1=require('../../../../constants/errors'),bad_request_error_1=require(a104_0x4da789(0x164)),salesforce_retriever_service_1=require(a104_0x4da789(0x1ac)),salesforce_sync_service_1=require('../../salesforce/services/salesforce-sync.service'),commit_components_dto_1=require(a104_0x4da789(0x1a7)),commit_components_job_1=require(a104_0x4da789(0x175)),constants_1=require(a104_0x4da789(0x1a9)),shortid_1=__importDefault(require('shortid')),providers_tokens_1=require(a104_0x4da789(0x1a4));let FlosumCommitJob=FlosumCommitJob_1=class FlosumCommitJob{constructor(_0x4dd1df,_0x331c2a,_0x42fbfe){const _0xf88215=a104_0x4da789;this[_0xf88215(0x17c)]=_0x4dd1df,this['commitJob']=_0x331c2a,this[_0xf88215(0x17f)]=_0x42fbfe,this[_0xf88215(0x16c)]=new core_1[(_0xf88215(0x198))](FlosumCommitJob_1[_0xf88215(0x181)]);}async[a104_0x4da789(0x169)](){const _0x19667a=a104_0x4da789;try{if(this[_0x19667a(0x1ca)][_0x19667a(0x1c3)])this[_0x19667a(0x165)]=await this[_0x19667a(0x17f)][_0x19667a(0x178)](this[_0x19667a(0x1ca)][_0x19667a(0x1c3)]);else this[_0x19667a(0x1ca)][_0x19667a(0x185)]&&(this[_0x19667a(0x165)]=await this[_0x19667a(0x17f)][_0x19667a(0x1b4)](this['commitData'][_0x19667a(0x185)]));}catch(_0x3c5683){throw new bad_request_error_1[(_0x19667a(0x19c))](errors_1['ERR_INVALID_SYNC_RECORD_ID']);}}async[a104_0x4da789(0x184)](){const _0x5c0b7d=a104_0x4da789;if(!this[_0x5c0b7d(0x1ca)][_0x5c0b7d(0x1b9)])return[];await this[_0x5c0b7d(0x17c)][_0x5c0b7d(0x191)](constants_1[_0x5c0b7d(0x1bd)],this[_0x5c0b7d(0x1ca)][_0x5c0b7d(0x1b9)],{'Name':(0x0,shortid_1[_0x5c0b7d(0x174)])()});const _0x4ce5b2=await this[_0x5c0b7d(0x17c)][_0x5c0b7d(0x1a2)](this[_0x5c0b7d(0x1ca)][_0x5c0b7d(0x1b9)])['then'](_0x5de371=>_0x5de371['split']('\x20')[_0x5c0b7d(0x179)](_0x52c9c5=>_0x52c9c5[_0x5c0b7d(0x1c1)]()));await this['salesforceService'][_0x5c0b7d(0x1ae)](this[_0x5c0b7d(0x1ca)][_0x5c0b7d(0x1b9)]);const _0x1afc36=new salesforce_retriever_service_1['SalesforceRetrieverService'](this[_0x5c0b7d(0x17c)]);return await _0x1afc36[_0x5c0b7d(0x1b6)](_0x4ce5b2);}async['getComponentsToDelete'](){const _0x174167=a104_0x4da789;if(!this[_0x174167(0x1ca)][_0x174167(0x1c5)])return[];await this[_0x174167(0x17c)][_0x174167(0x191)](constants_1[_0x174167(0x1bd)],this[_0x174167(0x1ca)][_0x174167(0x1c5)],{'Name':(0x0,shortid_1[_0x174167(0x174)])()});const _0xe64f54=await this['salesforceService']['retrieveAttachment'](this['commitData'][_0x174167(0x1c5)]);return await this[_0x174167(0x17c)][_0x174167(0x1ae)](this[_0x174167(0x1ca)][_0x174167(0x1c5)]),_0xe64f54;}async[a104_0x4da789(0x1bb)](){const _0x44580f=a104_0x4da789,_0x145700=new commit_components_dto_1[(_0x44580f(0x168))](),[_0x491a5c,_0x30899d]=await Promise[_0x44580f(0x19a)]([this[_0x44580f(0x184)](),this[_0x44580f(0x192)]()]);return _0x145700[_0x44580f(0x1af)]=this['commitData'][_0x44580f(0x1af)],_0x145700[_0x44580f(0x1c4)]=this[_0x44580f(0x1ca)][_0x44580f(0x1c4)],_0x145700[_0x44580f(0x1ab)]={'writed':_0x491a5c,'deleted':_0x30899d},_0x145700[_0x44580f(0x16f)]=this[_0x44580f(0x187)][_0x44580f(0x176)],_0x145700[_0x44580f(0x1c6)]=this[_0x44580f(0x1ba)],_0x145700[_0x44580f(0x1b2)]=this['branch'],_0x145700['provider']=this['config'][_0x44580f(0x1a8)],_0x145700;}async[a104_0x4da789(0x17d)](_0x3e2bdb=![]){const _0x2b31bf=a104_0x4da789;if(_0x3e2bdb)await this[_0x2b31bf(0x17f)][_0x2b31bf(0x188)](this[_0x2b31bf(0x165)],{});else{const _0xaa525c=await this[_0x2b31bf(0x1ba)]['branches'][_0x2b31bf(0x1be)](this[_0x2b31bf(0x1b2)][_0x2b31bf(0x181)]);this[_0x2b31bf(0x1b3)][_0x2b31bf(0x162)](this[_0x2b31bf(0x1a6)]+_0x2b31bf(0x193));const _0x2accf4={[this[_0x2b31bf(0x1ba)]['gitUrl']]:{'lastCommit':_0xaa525c[_0x2b31bf(0x1cb)]}};await this[_0x2b31bf(0x17f)][_0x2b31bf(0x188)](this['repositoryData'],_0x2accf4);}}async['exec'](){const _0x10ba24=a104_0x4da789,_0x4499a0=await this[_0x10ba24(0x1bb)]();await this[_0x10ba24(0x17f)][_0x10ba24(0x1c8)](this[_0x10ba24(0x165)],_0x10ba24(0x1b5)),await this['commitJob']['run'](_0x4499a0,this['prefix']),await this[_0x10ba24(0x17d)](),await this[_0x10ba24(0x17f)][_0x10ba24(0x1c8)](this['repositoryData'],_0x10ba24(0x190));}async['handleCommitJobError'](_0x2395ae){const _0x2254e4=a104_0x4da789;try{this['sfLogger'][_0x2254e4(0x1aa)](''+_0x2395ae),await this[_0x2254e4(0x1b3)][_0x2254e4(0x1c0)](),await this[_0x2254e4(0x17d)](!![]),await this[_0x2254e4(0x17f)]['setStatus'](this[_0x2254e4(0x165)],_0x2254e4(0x1b0));}catch(_0x5d9b9c){this['logger'][_0x2254e4(0x1aa)](_0x5d9b9c);}}async['run'](_0x514e16){const _0x18a108=a104_0x4da789;try{this[_0x18a108(0x1ca)]=_0x514e16,this[_0x18a108(0x18f)]=typedi_1[_0x18a108(0x163)]['get'](providers_tokens_1[_0x18a108(0x17a)][_0x18a108(0x18f)]),this['repoService']=typedi_1[_0x18a108(0x163)][_0x18a108(0x16a)](providers_tokens_1[_0x18a108(0x17a)][_0x18a108(0x166)]),this[_0x18a108(0x187)]=typedi_1[_0x18a108(0x163)][_0x18a108(0x16a)](providers_tokens_1[_0x18a108(0x17a)]['config']),await this[_0x18a108(0x169)](),this[_0x18a108(0x1ba)]=await this[_0x18a108(0x1a1)][_0x18a108(0x1be)](this[_0x18a108(0x165)]['repositoryName']),this[_0x18a108(0x1b2)]=await this[_0x18a108(0x1ba)]['branches'][_0x18a108(0x1be)](this[_0x18a108(0x165)]['branchName']),this[_0x18a108(0x1b3)]=typedi_1['Container'][_0x18a108(0x16a)](providers_tokens_1['Tokens'][_0x18a108(0x16c)]),this[_0x18a108(0x1a6)]=_0x18a108(0x173)+this['config'][_0x18a108(0x1a8)][_0x18a108(0x196)]()+_0x18a108(0x18a)+this[_0x18a108(0x165)][_0x18a108(0x18b)]+']\x20[Branch:\x20'+this[_0x18a108(0x165)][_0x18a108(0x16b)]+_0x18a108(0x182)+FlosumCommitJob_1['name']+']';if(!this['repositoryData'])throw new bad_request_error_1[(_0x18a108(0x19c))](errors_1[_0x18a108(0x19d)]);await this[_0x18a108(0x1b3)][_0x18a108(0x162)](this[_0x18a108(0x1a6)]+'\x20Start\x20Flosum\x20commit\x20job.')[_0x18a108(0x1c0)](),await this[_0x18a108(0x19f)]()[_0x18a108(0x167)](_0x18c018=>this[_0x18a108(0x1bf)](_0x18c018));}catch(_0x4112e6){this['commitData']=undefined,this[_0x18a108(0x16c)]['error'](_0x4112e6);throw _0x4112e6;}}};function a104_0x5701(){const _0x1674c5=['branch','sfLogger','getBranchRecord','In\x20Progress','run','Service','__esModule','commitAttachmentId','repository','getCommitDto','44XsOTVa','FLOSUM_ATTACHMENT','getOne','handleCommitJobError','send','trim','../../salesforce/services/salesforce.service','syncRepositoryId','user','deleteAttachmentId','repo','metadata','setStatus','length','commitData','sha','4236065eFgkYP','8nFXzeh','log','Container','../../../../core/errors/bad-request.error','repositoryData','gitRepoService','catch','CommitComponentsDto','fetchRepositoryData','get','branchName','logger','727419qWQeYb','defineProperty','convertToSFDX','CommitComponentsJob','5050510YIFDmO','750HjydIG','[FLOSUM\x20->\x20GIT]\x20[','default','./commit-components.job','isConvertToSfdx','459054uHnjsr','getRepositoryRecord','map','Tokens','typedi','salesforceService','updateLastCommit','search','salesforceSync','design:paramtypes','name',']\x20[','FlosumCommitJob','getComponentsToWrite','syncBranchId','5718622SDkzHA','config','updateRemoteState','__metadata',']\x20[Repository:\x20','repositoryName','../../../../core','decorate','toString','gitApiService','Completed','patchObject','getComponentsToDelete','\x20Update\x20remote\x20state.','SalesforceService','5761470VXApye','toUpperCase','object','Logger','4znCNrZ','all','getOwnPropertyDescriptor','BadRequestError','ERR_UNKNOWN_SYNC_RECORD_ID','constructor','exec','apply','repoService','retrieveAttachment','__importDefault','../../providers/providers.tokens','function','prefix','../dto/commit-components.dto','gitProvider','../../../../constants','error','components','../../salesforce/services/salesforce-retriever.service','1814cNtuNI','deleteAttachment','message','Error','SalesforceSyncService'];a104_0x5701=function(){return _0x1674c5;};return a104_0x5701();}FlosumCommitJob=FlosumCommitJob_1=__decorate([(0x0,typedi_1[a104_0x4da789(0x1b7)])({'transient':!![]}),__metadata(a104_0x4da789(0x180),[salesforce_service_1[a104_0x4da789(0x194)],commit_components_job_1[a104_0x4da789(0x170)],salesforce_sync_service_1[a104_0x4da789(0x1b1)]])],FlosumCommitJob),exports[a104_0x4da789(0x183)]=FlosumCommitJob;