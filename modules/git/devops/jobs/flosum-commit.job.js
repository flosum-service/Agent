const a105_0x5c3898=a105_0x6b33;(function(_0xa74f2b,_0xa0ffef){const _0x4e5990=a105_0x6b33,_0x3b9001=_0xa74f2b();while(!![]){try{const _0x225620=parseInt(_0x4e5990(0x11f))/0x1*(-parseInt(_0x4e5990(0xfa))/0x2)+-parseInt(_0x4e5990(0xeb))/0x3+parseInt(_0x4e5990(0xf9))/0x4*(-parseInt(_0x4e5990(0x11a))/0x5)+parseInt(_0x4e5990(0x120))/0x6+-parseInt(_0x4e5990(0x125))/0x7*(-parseInt(_0x4e5990(0xf5))/0x8)+-parseInt(_0x4e5990(0x11e))/0x9+parseInt(_0x4e5990(0xfd))/0xa;if(_0x225620===_0xa0ffef)break;else _0x3b9001['push'](_0x3b9001['shift']());}catch(_0x456ba7){_0x3b9001['push'](_0x3b9001['shift']());}}}(a105_0x1dad,0x44fbe));const a105_0x1b2bac=(function(){let _0x6b328b=!![];return function(_0x3144e6,_0x40d7fb){const _0x3c130f=_0x6b328b?function(){const _0x39a09f=a105_0x6b33;if(_0x40d7fb){const _0x1b9385=_0x40d7fb[_0x39a09f(0xf4)](_0x3144e6,arguments);return _0x40d7fb=null,_0x1b9385;}}:function(){};return _0x6b328b=![],_0x3c130f;};}()),a105_0x251a1d=a105_0x1b2bac(this,function(){const _0x50bea7=a105_0x6b33;return a105_0x251a1d[_0x50bea7(0xe7)]()['search'](_0x50bea7(0x12b))[_0x50bea7(0xe7)]()['constructor'](a105_0x251a1d)[_0x50bea7(0x110)]('(((.+)+)+)+$');});a105_0x251a1d();'use strict';var __decorate=this&&this[a105_0x5c3898(0x10b)]||function(_0x1879b2,_0x101ca3,_0x4f9e64,_0xb67000){const _0x5e72be=a105_0x5c3898;var _0x36a6bc=arguments[_0x5e72be(0x12f)],_0x510a71=_0x36a6bc<0x3?_0x101ca3:_0xb67000===null?_0xb67000=Object[_0x5e72be(0x111)](_0x101ca3,_0x4f9e64):_0xb67000,_0x5e17d3;if(typeof Reflect===_0x5e72be(0xe6)&&typeof Reflect[_0x5e72be(0x12c)]==='function')_0x510a71=Reflect[_0x5e72be(0x12c)](_0x1879b2,_0x101ca3,_0x4f9e64,_0xb67000);else{for(var _0x533b39=_0x1879b2['length']-0x1;_0x533b39>=0x0;_0x533b39--)if(_0x5e17d3=_0x1879b2[_0x533b39])_0x510a71=(_0x36a6bc<0x3?_0x5e17d3(_0x510a71):_0x36a6bc>0x3?_0x5e17d3(_0x101ca3,_0x4f9e64,_0x510a71):_0x5e17d3(_0x101ca3,_0x4f9e64))||_0x510a71;}return _0x36a6bc>0x3&&_0x510a71&&Object['defineProperty'](_0x101ca3,_0x4f9e64,_0x510a71),_0x510a71;},__metadata=this&&this[a105_0x5c3898(0x122)]||function(_0x39c262,_0x193609){const _0x210c2d=a105_0x5c3898;if(typeof Reflect===_0x210c2d(0xe6)&&typeof Reflect['metadata']==='function')return Reflect[_0x210c2d(0xf7)](_0x39c262,_0x193609);},__importDefault=this&&this['__importDefault']||function(_0x41458f){return _0x41458f&&_0x41458f['__esModule']?_0x41458f:{'default':_0x41458f};},FlosumCommitJob_1;Object[a105_0x5c3898(0xec)](exports,a105_0x5c3898(0x140),{'value':!![]}),exports[a105_0x5c3898(0x133)]=void 0x0;function a105_0x6b33(_0x477e53,_0x574071){const _0x40b71e=a105_0x1dad();return a105_0x6b33=function(_0x251a1d,_0x1b2bac){_0x251a1d=_0x251a1d-0xe2;let _0x1dadeb=_0x40b71e[_0x251a1d];return _0x1dadeb;},a105_0x6b33(_0x477e53,_0x574071);}const core_1=require(a105_0x5c3898(0xf3)),salesforce_service_1=require(a105_0x5c3898(0x109)),typedi_1=require(a105_0x5c3898(0xe5)),errors_1=require('../../../../constants/errors'),bad_request_error_1=require(a105_0x5c3898(0xf0)),salesforce_retriever_service_1=require(a105_0x5c3898(0x10e)),salesforce_sync_service_1=require(a105_0x5c3898(0x100)),commit_components_dto_1=require('../dto/commit-components.dto'),commit_components_job_1=require(a105_0x5c3898(0x10f)),constants_1=require(a105_0x5c3898(0x107)),shortid_1=__importDefault(require('shortid')),providers_tokens_1=require(a105_0x5c3898(0xe3));let FlosumCommitJob=FlosumCommitJob_1=class FlosumCommitJob{constructor(_0x1dab94,_0x969e1,_0x2432ac){const _0x277a6f=a105_0x5c3898;this[_0x277a6f(0x119)]=_0x1dab94,this[_0x277a6f(0x116)]=_0x969e1,this[_0x277a6f(0x114)]=_0x2432ac,this[_0x277a6f(0x12a)]=new core_1['Logger'](FlosumCommitJob_1[_0x277a6f(0x108)]);}async[a105_0x5c3898(0xe2)](){const _0x3656c0=a105_0x5c3898;try{if(this[_0x3656c0(0x11b)]['syncRepositoryId'])this[_0x3656c0(0x112)]=await this[_0x3656c0(0x114)][_0x3656c0(0x10d)](this[_0x3656c0(0x11b)][_0x3656c0(0xef)]);else this[_0x3656c0(0x11b)][_0x3656c0(0x101)]&&(this['repositoryData']=await this['salesforceSync']['getBranchRecord'](this[_0x3656c0(0x11b)][_0x3656c0(0x101)]));}catch(_0x1ee11f){throw new bad_request_error_1[(_0x3656c0(0xff))](errors_1[_0x3656c0(0x13c)]);}}async[a105_0x5c3898(0x144)](){const _0x1b9835=a105_0x5c3898;if(!this[_0x1b9835(0x11b)]['commitAttachmentId'])return[];await this[_0x1b9835(0x119)][_0x1b9835(0x117)](constants_1['FLOSUM_ATTACHMENT'],this[_0x1b9835(0x11b)][_0x1b9835(0x128)],{'Name':(0x0,shortid_1[_0x1b9835(0x146)])()});const _0x398d8b=await this[_0x1b9835(0x119)][_0x1b9835(0x129)](this['commitData']['commitAttachmentId'])[_0x1b9835(0x103)](_0x267ab4=>_0x267ab4[_0x1b9835(0x106)]('\x20')['map'](_0x48a072=>_0x48a072[_0x1b9835(0x134)]()));await this['salesforceService'][_0x1b9835(0x11d)](this['commitData'][_0x1b9835(0x128)]);const _0x3d875d=new salesforce_retriever_service_1[(_0x1b9835(0x148))](this[_0x1b9835(0x119)]);return await _0x3d875d[_0x1b9835(0x102)](_0x398d8b);}async[a105_0x5c3898(0x113)](){const _0x12d078=a105_0x5c3898;if(!this[_0x12d078(0x11b)][_0x12d078(0x121)])return[];await this[_0x12d078(0x119)][_0x12d078(0x117)](constants_1[_0x12d078(0x12e)],this['commitData'][_0x12d078(0x121)],{'Name':(0x0,shortid_1[_0x12d078(0x146)])()});const _0x562b5b=await this[_0x12d078(0x119)]['retrieveAttachment'](this[_0x12d078(0x11b)][_0x12d078(0x121)]);return await this[_0x12d078(0x119)][_0x12d078(0x11d)](this[_0x12d078(0x11b)][_0x12d078(0x121)]),_0x562b5b;}async['getCommitDto'](){const _0x130ca5=a105_0x5c3898,_0x239f60=new commit_components_dto_1[(_0x130ca5(0x142))](),[_0x3bd81,_0x2a6f7a]=await Promise['all']([this[_0x130ca5(0x144)](),this[_0x130ca5(0x113)]()]);return _0x239f60['message']=this[_0x130ca5(0x11b)][_0x130ca5(0x138)],_0x239f60[_0x130ca5(0x104)]=this[_0x130ca5(0x11b)][_0x130ca5(0x104)],_0x239f60[_0x130ca5(0x137)]={'writed':_0x3bd81,'deleted':_0x2a6f7a},_0x239f60[_0x130ca5(0x10a)]=this[_0x130ca5(0x12d)]['isConvertToSfdx'],_0x239f60[_0x130ca5(0x147)]=this[_0x130ca5(0xe9)],_0x239f60[_0x130ca5(0x132)]=this[_0x130ca5(0x132)],_0x239f60['provider']=this[_0x130ca5(0x12d)]['gitProvider'],_0x239f60;}async[a105_0x5c3898(0xe4)](_0x582d3c=![]){const _0x225cdd=a105_0x5c3898;if(_0x582d3c)await this['salesforceSync']['updateRemoteState'](this[_0x225cdd(0x112)],{});else{const _0x4534a4=await this[_0x225cdd(0xe9)][_0x225cdd(0x13a)][_0x225cdd(0x126)](this[_0x225cdd(0x132)][_0x225cdd(0x108)]);this['sfLogger']['log'](this[_0x225cdd(0x135)]+_0x225cdd(0xf8));const _0x45a0a1={[this[_0x225cdd(0xe9)][_0x225cdd(0xe8)]]:{'lastCommit':_0x4534a4[_0x225cdd(0x13b)]}};await this[_0x225cdd(0x114)][_0x225cdd(0x131)](this['repositoryData'],_0x45a0a1);}}async[a105_0x5c3898(0x136)](){const _0x3679ae=a105_0x5c3898,_0x5ad121=await this['getCommitDto']();await this[_0x3679ae(0x114)][_0x3679ae(0x145)](this[_0x3679ae(0x112)],'In\x20Progress'),await this[_0x3679ae(0x116)][_0x3679ae(0x102)](_0x5ad121,this['prefix']),await this['updateLastCommit'](),await this[_0x3679ae(0x114)][_0x3679ae(0x145)](this[_0x3679ae(0x112)],'Completed');}async['handleCommitJobError'](_0x424d89){const _0x3518fa=a105_0x5c3898;try{this[_0x3518fa(0xf6)][_0x3518fa(0x10c)](''+_0x424d89),await this[_0x3518fa(0xf6)][_0x3518fa(0xed)](),await this[_0x3518fa(0xe4)](!![]),await this[_0x3518fa(0x114)][_0x3518fa(0x145)](this['repositoryData'],_0x3518fa(0x115));}catch(_0x3b4bec){this[_0x3518fa(0x12a)][_0x3518fa(0x10c)](_0x3b4bec);}}async[a105_0x5c3898(0x102)](_0x198cc9){const _0x44a871=a105_0x5c3898;try{this[_0x44a871(0x11b)]=_0x198cc9,this['gitApiService']=typedi_1[_0x44a871(0x13f)][_0x44a871(0x105)](providers_tokens_1[_0x44a871(0xfb)]['gitApiService']),this[_0x44a871(0x130)]=typedi_1[_0x44a871(0x13f)][_0x44a871(0x105)](providers_tokens_1['Tokens'][_0x44a871(0x139)]),this[_0x44a871(0x12d)]=typedi_1[_0x44a871(0x13f)][_0x44a871(0x105)](providers_tokens_1[_0x44a871(0xfb)][_0x44a871(0x12d)]),await this[_0x44a871(0xe2)](),this[_0x44a871(0xe9)]=await this[_0x44a871(0x130)][_0x44a871(0x126)](this[_0x44a871(0x112)][_0x44a871(0xee)]),this[_0x44a871(0x132)]=await this[_0x44a871(0xe9)][_0x44a871(0x13a)][_0x44a871(0x126)](this[_0x44a871(0x112)][_0x44a871(0xea)]),this[_0x44a871(0xf6)]=typedi_1['Container'][_0x44a871(0x105)](providers_tokens_1[_0x44a871(0xfb)][_0x44a871(0x12a)]),this[_0x44a871(0x135)]=_0x44a871(0xf2)+this[_0x44a871(0x12d)][_0x44a871(0x13e)][_0x44a871(0x13d)]()+_0x44a871(0x124)+this[_0x44a871(0x112)][_0x44a871(0xee)]+_0x44a871(0x141)+this[_0x44a871(0x112)]['branchName']+_0x44a871(0x118)+FlosumCommitJob_1[_0x44a871(0x108)]+']';if(!this[_0x44a871(0x112)])throw new bad_request_error_1[(_0x44a871(0xff))](errors_1[_0x44a871(0x127)]);await this[_0x44a871(0xf6)][_0x44a871(0x11c)](this[_0x44a871(0x135)]+_0x44a871(0xf1))['send'](),await this[_0x44a871(0x136)]()['catch'](_0x312e5b=>this['handleCommitJobError'](_0x312e5b));}catch(_0x285644){this['commitData']=undefined,this[_0x44a871(0x12a)][_0x44a871(0x10c)](_0x285644);throw _0x285644;}}};function a105_0x1dad(){const _0x247542=['name','../../salesforce/services/salesforce.service','convertToSFDX','__decorate','error','getRepositoryRecord','../../salesforce/services/salesforce-retriever.service','./commit-components.job','search','getOwnPropertyDescriptor','repositoryData','getComponentsToDelete','salesforceSync','Error','commitJob','patchObject',']\x20[','salesforceService','189200EiREMO','commitData','log','deleteAttachment','1822986PEVOYt','2iOEuEA','3284148OFadyp','deleteAttachmentId','__metadata','design:paramtypes',']\x20[Repository:\x20','466851bxEPjA','getOne','ERR_UNKNOWN_SYNC_RECORD_ID','commitAttachmentId','retrieveAttachment','logger','(((.+)+)+)+$','decorate','config','FLOSUM_ATTACHMENT','length','repoService','updateRemoteState','branch','FlosumCommitJob','trim','prefix','exec','components','message','gitRepoService','branches','sha','ERR_INVALID_SYNC_RECORD_ID','toUpperCase','gitProvider','Container','__esModule',']\x20[Branch:\x20','CommitComponentsDto','SalesforceSyncService','getComponentsToWrite','setStatus','default','repo','SalesforceRetrieverService','fetchRepositoryData','../../providers/providers.tokens','updateLastCommit','typedi','object','toString','gitUrl','repository','branchName','930477kBidji','defineProperty','send','repositoryName','syncRepositoryId','../../../../core/errors/bad-request.error','\x20Start\x20Flosum\x20commit\x20job.','[FLOSUM\x20->\x20GIT]\x20[','../../../../core','apply','8HgIheV','sfLogger','metadata','\x20Update\x20remote\x20state.','52uJidDh','542600qMaiGG','Tokens','Service','12157400jOsBfC','SalesforceService','BadRequestError','../../salesforce/services/salesforce-sync.service','syncBranchId','run','then','user','get','split','../../../../constants'];a105_0x1dad=function(){return _0x247542;};return a105_0x1dad();}FlosumCommitJob=FlosumCommitJob_1=__decorate([(0x0,typedi_1[a105_0x5c3898(0xfc)])({'transient':!![]}),__metadata(a105_0x5c3898(0x123),[salesforce_service_1[a105_0x5c3898(0xfe)],commit_components_job_1['CommitComponentsJob'],salesforce_sync_service_1[a105_0x5c3898(0x143)]])],FlosumCommitJob),exports[a105_0x5c3898(0x133)]=FlosumCommitJob;