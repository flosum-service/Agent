const a130_0x4f07a4=a130_0x27bc;(function(_0x1bcaf7,_0x1ae18e){const _0xce462=a130_0x27bc,_0x53ab5e=_0x1bcaf7();while(!![]){try{const _0x510cb0=-parseInt(_0xce462(0x180))/0x1*(parseInt(_0xce462(0x18a))/0x2)+parseInt(_0xce462(0x175))/0x3*(-parseInt(_0xce462(0x186))/0x4)+parseInt(_0xce462(0x181))/0x5+-parseInt(_0xce462(0x173))/0x6+-parseInt(_0xce462(0x18f))/0x7*(parseInt(_0xce462(0x187))/0x8)+-parseInt(_0xce462(0x174))/0x9*(parseInt(_0xce462(0x17d))/0xa)+-parseInt(_0xce462(0x196))/0xb*(-parseInt(_0xce462(0x197))/0xc);if(_0x510cb0===_0x1ae18e)break;else _0x53ab5e['push'](_0x53ab5e['shift']());}catch(_0x5dc5ec){_0x53ab5e['push'](_0x53ab5e['shift']());}}}(a130_0x1516,0xe7424));function a130_0x1516(){const _0x32a464=['262530WtqOwc','BranchesFactory','AzureBranchService','Github','GitProvider','8cXMmgD','8mCdrov','createFromContext','BitbucketServerBranchService','44BiNQKK','../providers.tokens','toString','./services/gitlab-branch.service','Azure','6818406VaKXXz','./services/azure-branch.service','(((.+)+)+)+$','__esModule','apply','AzureServer','search','627PnqFGw','897060MwttOB','GitlabBranchService','BitbucketBranchService','3838656lQhfmq','7101fQlaBP','929505gZDxTa','./services/bitbucket-server-branch.service','./services/bitbucket-branch.service','container','Tokens','get','./services/github-branch.service','Bitbucket','810QQfOSb','GithubServer','GithubBranchService','48586jPaaJu'];a130_0x1516=function(){return _0x32a464;};return a130_0x1516();}const a130_0x2ac7d2=(function(){let _0x51382f=!![];return function(_0x50511f,_0x558e38){const _0x54e553=_0x51382f?function(){const _0x177e7b=a130_0x27bc;if(_0x558e38){const _0x4ea7d2=_0x558e38[_0x177e7b(0x193)](_0x50511f,arguments);return _0x558e38=null,_0x4ea7d2;}}:function(){};return _0x51382f=![],_0x54e553;};}()),a130_0x2250f1=a130_0x2ac7d2(this,function(){const _0xf5f6c3=a130_0x27bc;return a130_0x2250f1[_0xf5f6c3(0x18c)]()[_0xf5f6c3(0x195)]('(((.+)+)+)+$')[_0xf5f6c3(0x18c)]()['constructor'](a130_0x2250f1)['search'](_0xf5f6c3(0x191));});function a130_0x27bc(_0x3a40a2,_0x4da0b2){const _0x42f920=a130_0x1516();return a130_0x27bc=function(_0x2250f1,_0x2ac7d2){_0x2250f1=_0x2250f1-0x172;let _0x151670=_0x42f920[_0x2250f1];return _0x151670;},a130_0x27bc(_0x3a40a2,_0x4da0b2);}a130_0x2250f1();'use strict';Object['defineProperty'](exports,a130_0x4f07a4(0x192),{'value':!![]}),exports[a130_0x4f07a4(0x182)]=void 0x0;const git_provider_1=require('../types/git-provider'),azure_branch_service_1=require(a130_0x4f07a4(0x190)),bitbucket_branch_service_1=require(a130_0x4f07a4(0x177)),bitbucket_server_branch_service_1=require(a130_0x4f07a4(0x176)),github_branch_service_1=require(a130_0x4f07a4(0x17b)),gitlab_branch_service_1=require(a130_0x4f07a4(0x18d)),providers_tokens_1=require(a130_0x4f07a4(0x18b)),PROVIDER_BRANCHES_MAP={[git_provider_1[a130_0x4f07a4(0x185)][a130_0x4f07a4(0x18e)]]:azure_branch_service_1[a130_0x4f07a4(0x183)],[git_provider_1[a130_0x4f07a4(0x185)][a130_0x4f07a4(0x194)]]:azure_branch_service_1[a130_0x4f07a4(0x183)],[git_provider_1['GitProvider'][a130_0x4f07a4(0x17c)]]:bitbucket_branch_service_1[a130_0x4f07a4(0x172)],[git_provider_1['GitProvider']['BitbucketServer']]:bitbucket_server_branch_service_1[a130_0x4f07a4(0x189)],[git_provider_1[a130_0x4f07a4(0x185)][a130_0x4f07a4(0x184)]]:github_branch_service_1[a130_0x4f07a4(0x17f)],[git_provider_1['GitProvider'][a130_0x4f07a4(0x17e)]]:github_branch_service_1[a130_0x4f07a4(0x17f)],[git_provider_1[a130_0x4f07a4(0x185)]['Gitlab']]:gitlab_branch_service_1[a130_0x4f07a4(0x198)],[git_provider_1[a130_0x4f07a4(0x185)]['GitlabServer']]:gitlab_branch_service_1[a130_0x4f07a4(0x198)]};class BranchesFactory{static async[a130_0x4f07a4(0x188)](_0x4917ac){const _0x298bcf=a130_0x4f07a4;return _0x4917ac[_0x298bcf(0x178)][_0x298bcf(0x17a)](PROVIDER_BRANCHES_MAP[_0x4917ac[_0x298bcf(0x178)][_0x298bcf(0x17a)](providers_tokens_1[_0x298bcf(0x179)]['provider'])]);}}exports[a130_0x4f07a4(0x182)]=BranchesFactory;