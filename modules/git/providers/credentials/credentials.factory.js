const a181_0x330299=a181_0x5f12;(function(_0x157af0,_0x142a80){const _0x2944d3=a181_0x5f12,_0x571386=_0x157af0();while(!![]){try{const _0x10646a=-parseInt(_0x2944d3(0x145))/0x1+parseInt(_0x2944d3(0x13e))/0x2*(-parseInt(_0x2944d3(0x142))/0x3)+-parseInt(_0x2944d3(0x15b))/0x4*(parseInt(_0x2944d3(0x13d))/0x5)+-parseInt(_0x2944d3(0x150))/0x6*(-parseInt(_0x2944d3(0x159))/0x7)+parseInt(_0x2944d3(0x15f))/0x8+-parseInt(_0x2944d3(0x151))/0x9*(parseInt(_0x2944d3(0x14f))/0xa)+parseInt(_0x2944d3(0x13f))/0xb*(parseInt(_0x2944d3(0x14d))/0xc);if(_0x10646a===_0x142a80)break;else _0x571386['push'](_0x571386['shift']());}catch(_0x158988){_0x571386['push'](_0x571386['shift']());}}}(a181_0xb35e,0x52257));const a181_0x4b757c=(function(){let _0x117197=!![];return function(_0x58c7f9,_0x4c7326){const _0x53926a=_0x117197?function(){const _0x25f610=a181_0x5f12;if(_0x4c7326){const _0x199e31=_0x4c7326[_0x25f610(0x144)](_0x58c7f9,arguments);return _0x4c7326=null,_0x199e31;}}:function(){};return _0x117197=![],_0x53926a;};}()),a181_0x18909a=a181_0x4b757c(this,function(){const _0x20cc77=a181_0x5f12;return a181_0x18909a[_0x20cc77(0x154)]()[_0x20cc77(0x140)](_0x20cc77(0x15d))[_0x20cc77(0x154)]()[_0x20cc77(0x149)](a181_0x18909a)['search'](_0x20cc77(0x15d));});a181_0x18909a();function a181_0x5f12(_0x48d01f,_0x78e936){const _0x519097=a181_0xb35e();return a181_0x5f12=function(_0x18909a,_0x4b757c){_0x18909a=_0x18909a-0x13c;let _0xb35e71=_0x519097[_0x18909a];return _0xb35e71;},a181_0x5f12(_0x48d01f,_0x78e936);}function a181_0xb35e(){const _0x28dd05=['envVariables','AzureServer','./dto/github-server-credentials.dto','fromConnectionEnvVariables','class-validator','76295xCmnWd','10azqZLi','11GhpyWD','search','GitProvider','234312EybrUO','GithubCredentialsDto','apply','418813sGmpiD','Github','AzureCredentialsDto','../types/git-provider','constructor','./dto/bitbucket-server-credentials.dto','./dto/azure-credentials.dto','GitlabServerCredentialsDto','1906824EOqedV','GithubServer','353640VybVYd','1907004uwifhG','36FplsZx','__esModule','BitbucketServerCredentialsDto','toString','Gitlab','../../../../core/errors/unprocessable-entity.error','Unknown\x20git\x20provider\x20\x27','CredentialsFactory','14uUfuPR','BitbucketServer','44DCHcRp','GithubServerCredentialsDto','(((.+)+)+)+$','gitProvider','5284312voTyzQ','GitlabCredentialsDto','BitbucketCredentialsDto','defineProperty','UnprocessableEntityError'];a181_0xb35e=function(){return _0x28dd05;};return a181_0xb35e();}'use strict';Object[a181_0x330299(0x162)](exports,a181_0x330299(0x152),{'value':!![]}),exports[a181_0x330299(0x158)]=void 0x0;const git_provider_1=require(a181_0x330299(0x148)),azure_credentials_dto_1=require(a181_0x330299(0x14b)),azure_server_credentials_dto_1=require('./dto/azure-server-credentials.dto'),bitbucket_credentials_dto_1=require('./dto/bitbucket-credentials.dto'),bitbucket_server_credentials_dto_1=require(a181_0x330299(0x14a)),github_credentials_dto_1=require('./dto/github-credentials.dto'),github_server_credentials_dto_1=require(a181_0x330299(0x166)),gitlab_credentials_dto_1=require('./dto/gitlab-credentials.dto'),gitlab_server_credentials_dto_1=require('./dto/gitlab-server-credentials.dto'),class_validator_1=require(a181_0x330299(0x13c)),unprocessable_entity_error_1=require(a181_0x330299(0x156)),PROVIDER_CREDENTIALS_MAP={[git_provider_1[a181_0x330299(0x141)]['Azure']]:azure_credentials_dto_1[a181_0x330299(0x147)],[git_provider_1['GitProvider'][a181_0x330299(0x165)]]:azure_server_credentials_dto_1['AzureServerCredentialsDto'],[git_provider_1['GitProvider']['Bitbucket']]:bitbucket_credentials_dto_1[a181_0x330299(0x161)],[git_provider_1[a181_0x330299(0x141)][a181_0x330299(0x15a)]]:bitbucket_server_credentials_dto_1[a181_0x330299(0x153)],[git_provider_1[a181_0x330299(0x141)][a181_0x330299(0x146)]]:github_credentials_dto_1[a181_0x330299(0x143)],[git_provider_1[a181_0x330299(0x141)][a181_0x330299(0x14e)]]:github_server_credentials_dto_1[a181_0x330299(0x15c)],[git_provider_1[a181_0x330299(0x141)][a181_0x330299(0x155)]]:gitlab_credentials_dto_1[a181_0x330299(0x160)],[git_provider_1[a181_0x330299(0x141)]['GitlabServer']]:gitlab_server_credentials_dto_1[a181_0x330299(0x14c)]};class CredentialsFactory{static async['createFromConnection'](_0x1ef60b){const _0x431694=a181_0x330299;if(!(_0x1ef60b[_0x431694(0x15e)]in PROVIDER_CREDENTIALS_MAP))throw new Error(_0x431694(0x157)+_0x1ef60b[_0x431694(0x15e)]+'\x27');const _0x29279d=PROVIDER_CREDENTIALS_MAP[_0x1ef60b[_0x431694(0x15e)]],_0x2d62fa=_0x29279d[_0x431694(0x167)](_0x1ef60b[_0x431694(0x164)]),_0x249e05=await(0x0,class_validator_1['validate'])(_0x2d62fa);if(_0x249e05['length'])throw new unprocessable_entity_error_1[(_0x431694(0x163))](_0x249e05);return _0x2d62fa;}}exports[a181_0x330299(0x158)]=CredentialsFactory;