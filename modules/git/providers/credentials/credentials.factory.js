function a202_0x381b(_0x2c3a46,_0x53e941){const _0x5e582a=a202_0x421c();return a202_0x381b=function(_0x3b6708,_0x43d553){_0x3b6708=_0x3b6708-0x10c;let _0x421cd4=_0x5e582a[_0x3b6708];return _0x421cd4;},a202_0x381b(_0x2c3a46,_0x53e941);}const a202_0x1c8bd6=a202_0x381b;(function(_0x51b5d3,_0x5905f8){const _0x1b429c=a202_0x381b,_0x417edf=_0x51b5d3();while(!![]){try{const _0x21784a=-parseInt(_0x1b429c(0x110))/0x1+-parseInt(_0x1b429c(0x10d))/0x2*(-parseInt(_0x1b429c(0x135))/0x3)+parseInt(_0x1b429c(0x11b))/0x4*(parseInt(_0x1b429c(0x11f))/0x5)+-parseInt(_0x1b429c(0x134))/0x6+-parseInt(_0x1b429c(0x12e))/0x7+parseInt(_0x1b429c(0x125))/0x8*(parseInt(_0x1b429c(0x118))/0x9)+parseInt(_0x1b429c(0x137))/0xa;if(_0x21784a===_0x5905f8)break;else _0x417edf['push'](_0x417edf['shift']());}catch(_0x2e2c77){_0x417edf['push'](_0x417edf['shift']());}}}(a202_0x421c,0x56c92));const a202_0x43d553=(function(){let _0x4d2b15=!![];return function(_0x24ae65,_0x1c9d1a){const _0x5f0779=_0x4d2b15?function(){if(_0x1c9d1a){const _0x4046fc=_0x1c9d1a['apply'](_0x24ae65,arguments);return _0x1c9d1a=null,_0x4046fc;}}:function(){};return _0x4d2b15=![],_0x5f0779;};}()),a202_0x3b6708=a202_0x43d553(this,function(){const _0x51ffa1=a202_0x381b;return a202_0x3b6708[_0x51ffa1(0x123)]()[_0x51ffa1(0x12b)](_0x51ffa1(0x129))[_0x51ffa1(0x123)]()['constructor'](a202_0x3b6708)[_0x51ffa1(0x12b)]('(((.+)+)+)+$');});a202_0x3b6708();function a202_0x421c(){const _0x3d554c=['Unknown\x20git\x20provider\x20\x27','(((.+)+)+)+$','./dto/github-server-credentials.dto','search','Github','GithubServerCredentialsDto','4325951ytMQmi','./dto/gitlab-credentials.dto','GithubCredentialsDto','BitbucketServerCredentialsDto','UnprocessableEntityError','BitbucketServer','677442NrUgvN','1191966iayBju','./dto/azure-credentials.dto','6260620kSwWAp','fromConnectionEnvVariables','GitProvider','Gitlab','./dto/github-credentials.dto','2LzErct','__esModule','Azure','432836dcmPuP','CredentialsFactory','createFromConnection','GitlabCredentialsDto','../../../../core/errors/unprocessable-entity.error','./dto/azure-server-credentials.dto','./dto/bitbucket-server-credentials.dto','AzureCredentialsDto','75987XiJxkN','BitbucketCredentialsDto','length','12WdwRpg','../types/git-provider','GithubServer','envVariables','390155xjgEfW','./dto/bitbucket-credentials.dto','Bitbucket','validate','toString','defineProperty','248VRsLsV','AzureServer','gitProvider'];a202_0x421c=function(){return _0x3d554c;};return a202_0x421c();}'use strict';Object[a202_0x1c8bd6(0x124)](exports,a202_0x1c8bd6(0x10e),{'value':!![]}),exports[a202_0x1c8bd6(0x111)]=void 0x0;const git_provider_1=require(a202_0x1c8bd6(0x11c)),azure_credentials_dto_1=require(a202_0x1c8bd6(0x136)),azure_server_credentials_dto_1=require(a202_0x1c8bd6(0x115)),bitbucket_credentials_dto_1=require(a202_0x1c8bd6(0x120)),bitbucket_server_credentials_dto_1=require(a202_0x1c8bd6(0x116)),github_credentials_dto_1=require(a202_0x1c8bd6(0x10c)),github_server_credentials_dto_1=require(a202_0x1c8bd6(0x12a)),gitlab_credentials_dto_1=require(a202_0x1c8bd6(0x12f)),gitlab_server_credentials_dto_1=require('./dto/gitlab-server-credentials.dto'),class_validator_1=require('class-validator'),unprocessable_entity_error_1=require(a202_0x1c8bd6(0x114)),PROVIDER_CREDENTIALS_MAP={[git_provider_1['GitProvider'][a202_0x1c8bd6(0x10f)]]:azure_credentials_dto_1[a202_0x1c8bd6(0x117)],[git_provider_1[a202_0x1c8bd6(0x139)][a202_0x1c8bd6(0x126)]]:azure_server_credentials_dto_1['AzureServerCredentialsDto'],[git_provider_1[a202_0x1c8bd6(0x139)][a202_0x1c8bd6(0x121)]]:bitbucket_credentials_dto_1[a202_0x1c8bd6(0x119)],[git_provider_1[a202_0x1c8bd6(0x139)][a202_0x1c8bd6(0x133)]]:bitbucket_server_credentials_dto_1[a202_0x1c8bd6(0x131)],[git_provider_1['GitProvider'][a202_0x1c8bd6(0x12c)]]:github_credentials_dto_1[a202_0x1c8bd6(0x130)],[git_provider_1[a202_0x1c8bd6(0x139)][a202_0x1c8bd6(0x11d)]]:github_server_credentials_dto_1[a202_0x1c8bd6(0x12d)],[git_provider_1[a202_0x1c8bd6(0x139)][a202_0x1c8bd6(0x13a)]]:gitlab_credentials_dto_1[a202_0x1c8bd6(0x113)],[git_provider_1['GitProvider']['GitlabServer']]:gitlab_server_credentials_dto_1['GitlabServerCredentialsDto']};class CredentialsFactory{static async[a202_0x1c8bd6(0x112)](_0x4512f3){const _0x49b5b7=a202_0x1c8bd6;if(!(_0x4512f3[_0x49b5b7(0x127)]in PROVIDER_CREDENTIALS_MAP))throw new Error(_0x49b5b7(0x128)+_0x4512f3[_0x49b5b7(0x127)]+'\x27');const _0x33c5c5=PROVIDER_CREDENTIALS_MAP[_0x4512f3[_0x49b5b7(0x127)]],_0x32ff3b=_0x33c5c5[_0x49b5b7(0x138)](_0x4512f3[_0x49b5b7(0x11e)]),_0x36b604=await(0x0,class_validator_1[_0x49b5b7(0x122)])(_0x32ff3b);if(_0x36b604[_0x49b5b7(0x11a)])throw new unprocessable_entity_error_1[(_0x49b5b7(0x132))](_0x36b604);return _0x32ff3b;}}exports[a202_0x1c8bd6(0x111)]=CredentialsFactory;