const a164_0x3e290a=a164_0x48f1;(function(_0x1cbae4,_0x30265a){const _0x2f11bd=a164_0x48f1,_0x4afb65=_0x1cbae4();while(!![]){try{const _0x216c1f=-parseInt(_0x2f11bd(0x1cb))/0x1+-parseInt(_0x2f11bd(0x1b3))/0x2*(-parseInt(_0x2f11bd(0x1b5))/0x3)+parseInt(_0x2f11bd(0x1af))/0x4*(-parseInt(_0x2f11bd(0x1a5))/0x5)+-parseInt(_0x2f11bd(0x1a8))/0x6+parseInt(_0x2f11bd(0x1be))/0x7+parseInt(_0x2f11bd(0x1b2))/0x8*(-parseInt(_0x2f11bd(0x1b4))/0x9)+parseInt(_0x2f11bd(0x1ae))/0xa*(parseInt(_0x2f11bd(0x1cc))/0xb);if(_0x216c1f===_0x30265a)break;else _0x4afb65['push'](_0x4afb65['shift']());}catch(_0x13f5fd){_0x4afb65['push'](_0x4afb65['shift']());}}}(a164_0x1770,0xe9df2));function a164_0x48f1(_0x5239aa,_0x484d14){const _0x2c467b=a164_0x1770();return a164_0x48f1=function(_0x3f78f6,_0x19271f){_0x3f78f6=_0x3f78f6-0x1a5;let _0x177098=_0x2c467b[_0x3f78f6];return _0x177098;},a164_0x48f1(_0x5239aa,_0x484d14);}function a164_0x1770(){const _0x4876fa=['Azure','GitProvider','./services/gitlab-branch.service','createFromContext','909781hMQSKP','77SeoWQf','10pxCbzr','./services/github-branch.service','AzureServer','6251046NBgqjF','(((.+)+)+)+$','./services/bitbucket-branch.service','BranchesFactory','./services/bitbucket-server-branch.service','constructor','2227360UHpIaI','1277284qyrtaH','GitlabBranchService','toString','32auAsWK','2NxiUSr','106569oMIbwO','3685833FyIMCM','Bitbucket','GitlabServer','Github','__esModule','get','BitbucketBranchService','container','Tokens','5654621EAZmUD','search','provider','../types/git-provider','GithubBranchService','apply','AzureBranchService','./services/azure-branch.service','../providers.tokens'];a164_0x1770=function(){return _0x4876fa;};return a164_0x1770();}const a164_0x19271f=(function(){let _0x3a27a7=!![];return function(_0x5454f9,_0x56b698){const _0x455384=_0x3a27a7?function(){const _0x4bdee6=a164_0x48f1;if(_0x56b698){const _0x18fd82=_0x56b698[_0x4bdee6(0x1c3)](_0x5454f9,arguments);return _0x56b698=null,_0x18fd82;}}:function(){};return _0x3a27a7=![],_0x455384;};}()),a164_0x3f78f6=a164_0x19271f(this,function(){const _0x519ea5=a164_0x48f1;return a164_0x3f78f6[_0x519ea5(0x1b1)]()[_0x519ea5(0x1bf)](_0x519ea5(0x1a9))[_0x519ea5(0x1b1)]()[_0x519ea5(0x1ad)](a164_0x3f78f6)[_0x519ea5(0x1bf)](_0x519ea5(0x1a9));});a164_0x3f78f6();'use strict';Object['defineProperty'](exports,a164_0x3e290a(0x1b9),{'value':!![]}),exports['BranchesFactory']=void 0x0;const git_provider_1=require(a164_0x3e290a(0x1c1)),azure_branch_service_1=require(a164_0x3e290a(0x1c5)),bitbucket_branch_service_1=require(a164_0x3e290a(0x1aa)),bitbucket_server_branch_service_1=require(a164_0x3e290a(0x1ac)),github_branch_service_1=require(a164_0x3e290a(0x1a6)),gitlab_branch_service_1=require(a164_0x3e290a(0x1c9)),providers_tokens_1=require(a164_0x3e290a(0x1c6)),PROVIDER_BRANCHES_MAP={[git_provider_1[a164_0x3e290a(0x1c8)][a164_0x3e290a(0x1c7)]]:azure_branch_service_1[a164_0x3e290a(0x1c4)],[git_provider_1['GitProvider'][a164_0x3e290a(0x1a7)]]:azure_branch_service_1[a164_0x3e290a(0x1c4)],[git_provider_1[a164_0x3e290a(0x1c8)][a164_0x3e290a(0x1b6)]]:bitbucket_branch_service_1[a164_0x3e290a(0x1bb)],[git_provider_1['GitProvider']['BitbucketServer']]:bitbucket_server_branch_service_1['BitbucketServerBranchService'],[git_provider_1[a164_0x3e290a(0x1c8)][a164_0x3e290a(0x1b8)]]:github_branch_service_1['GithubBranchService'],[git_provider_1[a164_0x3e290a(0x1c8)]['GithubServer']]:github_branch_service_1[a164_0x3e290a(0x1c2)],[git_provider_1[a164_0x3e290a(0x1c8)]['Gitlab']]:gitlab_branch_service_1[a164_0x3e290a(0x1b0)],[git_provider_1[a164_0x3e290a(0x1c8)][a164_0x3e290a(0x1b7)]]:gitlab_branch_service_1['GitlabBranchService']};class BranchesFactory{static async[a164_0x3e290a(0x1ca)](_0x19fb13){const _0x3720e0=a164_0x3e290a;return _0x19fb13['container'][_0x3720e0(0x1ba)](PROVIDER_BRANCHES_MAP[_0x19fb13[_0x3720e0(0x1bc)][_0x3720e0(0x1ba)](providers_tokens_1[_0x3720e0(0x1bd)][_0x3720e0(0x1c0)])]);}}exports[a164_0x3e290a(0x1ab)]=BranchesFactory;