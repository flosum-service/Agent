const a170_0x4a713b=a170_0x4d6b;(function(_0x381aa0,_0x25bc3e){const _0x3bcb40=a170_0x4d6b,_0x3e11eb=_0x381aa0();while(!![]){try{const _0x55530f=parseInt(_0x3bcb40(0x1f9))/0x1+-parseInt(_0x3bcb40(0x1fe))/0x2+-parseInt(_0x3bcb40(0x1fb))/0x3*(parseInt(_0x3bcb40(0x205))/0x4)+parseInt(_0x3bcb40(0x1f8))/0x5*(parseInt(_0x3bcb40(0x204))/0x6)+-parseInt(_0x3bcb40(0x1fa))/0x7+-parseInt(_0x3bcb40(0x210))/0x8*(-parseInt(_0x3bcb40(0x20d))/0x9)+parseInt(_0x3bcb40(0x207))/0xa;if(_0x55530f===_0x25bc3e)break;else _0x3e11eb['push'](_0x3e11eb['shift']());}catch(_0x39e47e){_0x3e11eb['push'](_0x3e11eb['shift']());}}}(a170_0x4f51,0x1cb32));const a170_0xe0f5e=(function(){let _0x3c430c=!![];return function(_0x5dbac2,_0x20c5e4){const _0xfd6c49=_0x3c430c?function(){const _0x298908=a170_0x4d6b;if(_0x20c5e4){const _0x1f7a46=_0x20c5e4[_0x298908(0x1ff)](_0x5dbac2,arguments);return _0x20c5e4=null,_0x1f7a46;}}:function(){};return _0x3c430c=![],_0xfd6c49;};}()),a170_0x1c58a6=a170_0xe0f5e(this,function(){const _0x4c2344=a170_0x4d6b;return a170_0x1c58a6['toString']()[_0x4c2344(0x209)](_0x4c2344(0x1fc))['toString']()[_0x4c2344(0x213)](a170_0x1c58a6)['search'](_0x4c2344(0x1fc));});a170_0x1c58a6();function a170_0x4f51(){const _0x16b40e=['search','../providers.tokens','Gitlab','container','261eikKfD','AzureServer','./services/bitbucket-branch.service','46616IEuVRj','AzureBranchService','./services/azure-branch.service','constructor','get','Github','BitbucketBranchService','Bitbucket','GitProvider','GitlabServer','provider','GitlabBranchService','115dIqWjC','174299BgzNAI','552069zIHSeh','3126wKtuki','(((.+)+)+)+$','../types/git-provider','413486wrkifW','apply','BitbucketServer','BitbucketServerBranchService','__esModule','GithubBranchService','23418zTarZO','124ylFJRk','Tokens','24150ZyXLDL','createFromContext'];a170_0x4f51=function(){return _0x16b40e;};return a170_0x4f51();}'use strict';Object['defineProperty'](exports,a170_0x4a713b(0x202),{'value':!![]}),exports['BranchesFactory']=void 0x0;function a170_0x4d6b(_0x9464e0,_0x35d766){const _0x597dc3=a170_0x4f51();return a170_0x4d6b=function(_0x1c58a6,_0xe0f5e){_0x1c58a6=_0x1c58a6-0x1f0;let _0x4f51ce=_0x597dc3[_0x1c58a6];return _0x4f51ce;},a170_0x4d6b(_0x9464e0,_0x35d766);}const git_provider_1=require(a170_0x4a713b(0x1fd)),azure_branch_service_1=require(a170_0x4a713b(0x212)),bitbucket_branch_service_1=require(a170_0x4a713b(0x20f)),bitbucket_server_branch_service_1=require('./services/bitbucket-server-branch.service'),github_branch_service_1=require('./services/github-branch.service'),gitlab_branch_service_1=require('./services/gitlab-branch.service'),providers_tokens_1=require(a170_0x4a713b(0x20a)),PROVIDER_BRANCHES_MAP={[git_provider_1['GitProvider']['Azure']]:azure_branch_service_1[a170_0x4a713b(0x211)],[git_provider_1[a170_0x4a713b(0x1f4)][a170_0x4a713b(0x20e)]]:azure_branch_service_1[a170_0x4a713b(0x211)],[git_provider_1['GitProvider'][a170_0x4a713b(0x1f3)]]:bitbucket_branch_service_1[a170_0x4a713b(0x1f2)],[git_provider_1['GitProvider'][a170_0x4a713b(0x200)]]:bitbucket_server_branch_service_1[a170_0x4a713b(0x201)],[git_provider_1['GitProvider'][a170_0x4a713b(0x1f1)]]:github_branch_service_1[a170_0x4a713b(0x203)],[git_provider_1[a170_0x4a713b(0x1f4)]['GithubServer']]:github_branch_service_1[a170_0x4a713b(0x203)],[git_provider_1[a170_0x4a713b(0x1f4)][a170_0x4a713b(0x20b)]]:gitlab_branch_service_1[a170_0x4a713b(0x1f7)],[git_provider_1[a170_0x4a713b(0x1f4)][a170_0x4a713b(0x1f5)]]:gitlab_branch_service_1[a170_0x4a713b(0x1f7)]};class BranchesFactory{static async[a170_0x4a713b(0x208)](_0x5c84b6){const _0x500db6=a170_0x4a713b;return _0x5c84b6[_0x500db6(0x20c)][_0x500db6(0x1f0)](PROVIDER_BRANCHES_MAP[_0x5c84b6[_0x500db6(0x20c)]['get'](providers_tokens_1[_0x500db6(0x206)][_0x500db6(0x1f6)])]);}}exports['BranchesFactory']=BranchesFactory;