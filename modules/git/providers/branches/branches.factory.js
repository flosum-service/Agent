const a131_0x34bd8a=a131_0x4d9b;function a131_0x4d9b(_0x1b8c26,_0x362b52){const _0x530935=a131_0x1e04();return a131_0x4d9b=function(_0x2f4304,_0x240142){_0x2f4304=_0x2f4304-0x87;let _0x1e04ed=_0x530935[_0x2f4304];return _0x1e04ed;},a131_0x4d9b(_0x1b8c26,_0x362b52);}function a131_0x1e04(){const _0x24a3a4=['AzureServer','112298nSEJfm','Azure','AzureBranchService','defineProperty','toString','6qlnxnS','GitProvider','constructor','createFromContext','BranchesFactory','BitbucketServer','8PWpbMx','(((.+)+)+)+$','./services/gitlab-branch.service','Github','search','5007190VjdFIf','87dHSHir','4284795sWlOFU','get','Bitbucket','apply','../types/git-provider','__esModule','GithubServer','container','11UaDuLm','GithubBranchService','./services/github-branch.service','GitlabServer','942596DQJUOL','provider','./services/bitbucket-branch.service','GitlabBranchService','8CjAHRw','2334024iaYWMb','../providers.tokens','./services/azure-branch.service','BitbucketBranchService','4050788gLDFsm','8871489vqGRCS'];a131_0x1e04=function(){return _0x24a3a4;};return a131_0x1e04();}(function(_0x2546d8,_0x448a0f){const _0x57c981=a131_0x4d9b,_0x331e37=_0x2546d8();while(!![]){try{const _0x44b52d=parseInt(_0x57c981(0x9b))/0x1+-parseInt(_0x57c981(0xa7))/0x2*(parseInt(_0x57c981(0x8e))/0x3)+-parseInt(_0x57c981(0x9f))/0x4*(-parseInt(_0x57c981(0x8f))/0x5)+-parseInt(_0x57c981(0xac))/0x6*(-parseInt(_0x57c981(0xa4))/0x7)+-parseInt(_0x57c981(0x88))/0x8*(parseInt(_0x57c981(0xa5))/0x9)+parseInt(_0x57c981(0x8d))/0xa*(parseInt(_0x57c981(0x97))/0xb)+-parseInt(_0x57c981(0xa0))/0xc;if(_0x44b52d===_0x448a0f)break;else _0x331e37['push'](_0x331e37['shift']());}catch(_0x7799b){_0x331e37['push'](_0x331e37['shift']());}}}(a131_0x1e04,0xe268d));const a131_0x240142=(function(){let _0x26de0d=!![];return function(_0x56882e,_0x1c695d){const _0x5a32ec=_0x26de0d?function(){const _0xcb7b06=a131_0x4d9b;if(_0x1c695d){const _0x5ca927=_0x1c695d[_0xcb7b06(0x92)](_0x56882e,arguments);return _0x1c695d=null,_0x5ca927;}}:function(){};return _0x26de0d=![],_0x5a32ec;};}()),a131_0x2f4304=a131_0x240142(this,function(){const _0x2ebcaf=a131_0x4d9b;return a131_0x2f4304[_0x2ebcaf(0xab)]()[_0x2ebcaf(0x8c)](_0x2ebcaf(0x89))[_0x2ebcaf(0xab)]()[_0x2ebcaf(0xae)](a131_0x2f4304)[_0x2ebcaf(0x8c)]('(((.+)+)+)+$');});a131_0x2f4304();'use strict';Object[a131_0x34bd8a(0xaa)](exports,a131_0x34bd8a(0x94),{'value':!![]}),exports[a131_0x34bd8a(0xb0)]=void 0x0;const git_provider_1=require(a131_0x34bd8a(0x93)),azure_branch_service_1=require(a131_0x34bd8a(0xa2)),bitbucket_branch_service_1=require(a131_0x34bd8a(0x9d)),bitbucket_server_branch_service_1=require('./services/bitbucket-server-branch.service'),github_branch_service_1=require(a131_0x34bd8a(0x99)),gitlab_branch_service_1=require(a131_0x34bd8a(0x8a)),providers_tokens_1=require(a131_0x34bd8a(0xa1)),PROVIDER_BRANCHES_MAP={[git_provider_1[a131_0x34bd8a(0xad)][a131_0x34bd8a(0xa8)]]:azure_branch_service_1['AzureBranchService'],[git_provider_1['GitProvider'][a131_0x34bd8a(0xa6)]]:azure_branch_service_1[a131_0x34bd8a(0xa9)],[git_provider_1[a131_0x34bd8a(0xad)][a131_0x34bd8a(0x91)]]:bitbucket_branch_service_1[a131_0x34bd8a(0xa3)],[git_provider_1['GitProvider'][a131_0x34bd8a(0x87)]]:bitbucket_server_branch_service_1['BitbucketServerBranchService'],[git_provider_1[a131_0x34bd8a(0xad)][a131_0x34bd8a(0x8b)]]:github_branch_service_1['GithubBranchService'],[git_provider_1[a131_0x34bd8a(0xad)][a131_0x34bd8a(0x95)]]:github_branch_service_1[a131_0x34bd8a(0x98)],[git_provider_1[a131_0x34bd8a(0xad)]['Gitlab']]:gitlab_branch_service_1['GitlabBranchService'],[git_provider_1[a131_0x34bd8a(0xad)][a131_0x34bd8a(0x9a)]]:gitlab_branch_service_1[a131_0x34bd8a(0x9e)]};class BranchesFactory{static async[a131_0x34bd8a(0xaf)](_0x3d4bb9){const _0x56ec21=a131_0x34bd8a;return _0x3d4bb9[_0x56ec21(0x96)][_0x56ec21(0x90)](PROVIDER_BRANCHES_MAP[_0x3d4bb9[_0x56ec21(0x96)]['get'](providers_tokens_1['Tokens'][_0x56ec21(0x9c)])]);}}exports['BranchesFactory']=BranchesFactory;