const a159_0x9b68e7=a159_0x2664;(function(_0x5e91b4,_0x4bb6fb){const _0x182d29=a159_0x2664,_0x141043=_0x5e91b4();while(!![]){try{const _0x16a459=-parseInt(_0x182d29(0xe9))/0x1+-parseInt(_0x182d29(0xef))/0x2+parseInt(_0x182d29(0x108))/0x3*(-parseInt(_0x182d29(0xf3))/0x4)+-parseInt(_0x182d29(0xf9))/0x5*(parseInt(_0x182d29(0x103))/0x6)+-parseInt(_0x182d29(0x101))/0x7+-parseInt(_0x182d29(0x107))/0x8*(parseInt(_0x182d29(0xfa))/0x9)+-parseInt(_0x182d29(0xf8))/0xa*(-parseInt(_0x182d29(0xee))/0xb);if(_0x16a459===_0x4bb6fb)break;else _0x141043['push'](_0x141043['shift']());}catch(_0x5fe905){_0x141043['push'](_0x141043['shift']());}}}(a159_0x1418,0x9cedf));const a159_0x24863c=(function(){let _0x479421=!![];return function(_0x18720d,_0x4a6679){const _0x1671f3=_0x479421?function(){const _0x1f0db7=a159_0x2664;if(_0x4a6679){const _0x2a626f=_0x4a6679[_0x1f0db7(0x100)](_0x18720d,arguments);return _0x4a6679=null,_0x2a626f;}}:function(){};return _0x479421=![],_0x1671f3;};}()),a159_0x317681=a159_0x24863c(this,function(){const _0xa7825c=a159_0x2664;return a159_0x317681['toString']()[_0xa7825c(0xfe)]('(((.+)+)+)+$')[_0xa7825c(0xfb)]()[_0xa7825c(0xe8)](a159_0x317681)[_0xa7825c(0xfe)](_0xa7825c(0xf6));});a159_0x317681();function a159_0x2664(_0x59971b,_0x784376){const _0x37933f=a159_0x1418();return a159_0x2664=function(_0x317681,_0x24863c){_0x317681=_0x317681-0xe7;let _0x1418de=_0x37933f[_0x317681];return _0x1418de;},a159_0x2664(_0x59971b,_0x784376);}'use strict';function a159_0x1418(){const _0x5a285b=['search','./gitlab-api.service','apply','6589548RfMOFN','Github','24WMgrQq','get','GithubApiService','./bitbucket-api.service','16bRbudY','3Qjazvu','defineProperty','GitlabApiService','GithubServer','constructor','164701QIwjsH','Bitbucket','../types/git-provider','createFromProvider','GitProvider','11jLMugs','1136492HPkdzk','./github-api.service','AzureApiService','Unknown\x20git\x20provider\x20\x27','1390544qPZigr','BitbucketApiService','./azure-api.service','(((.+)+)+)+$','ServicesFactory','44895880DMeWhI','1096855LEHRXr','4263183apWRyP','toString','BitbucketServer','Azure'];a159_0x1418=function(){return _0x5a285b;};return a159_0x1418();}Object[a159_0x9b68e7(0x109)](exports,'__esModule',{'value':!![]}),exports['ServicesFactory']=void 0x0;const git_provider_1=require(a159_0x9b68e7(0xeb)),gitlab_api_service_1=require(a159_0x9b68e7(0xff)),github_api_service_1=require(a159_0x9b68e7(0xf0)),azure_api_service_1=require(a159_0x9b68e7(0xf5)),bitbucket_api_service_1=require(a159_0x9b68e7(0x106)),bitbucket_server_api_service_1=require('./bitbucket-server-api.service'),PROVIDER_SERVICES_MAP={[git_provider_1[a159_0x9b68e7(0xed)]['Gitlab']]:gitlab_api_service_1['GitlabApiService'],[git_provider_1[a159_0x9b68e7(0xed)]['GitlabServer']]:gitlab_api_service_1[a159_0x9b68e7(0x10a)],[git_provider_1[a159_0x9b68e7(0xed)][a159_0x9b68e7(0x102)]]:github_api_service_1[a159_0x9b68e7(0x105)],[git_provider_1[a159_0x9b68e7(0xed)][a159_0x9b68e7(0xe7)]]:github_api_service_1[a159_0x9b68e7(0x105)],[git_provider_1[a159_0x9b68e7(0xed)][a159_0x9b68e7(0xea)]]:bitbucket_api_service_1[a159_0x9b68e7(0xf4)],[git_provider_1[a159_0x9b68e7(0xed)][a159_0x9b68e7(0xfc)]]:bitbucket_server_api_service_1['BitbucketServerApiService'],[git_provider_1[a159_0x9b68e7(0xed)][a159_0x9b68e7(0xfd)]]:azure_api_service_1[a159_0x9b68e7(0xf1)],[git_provider_1[a159_0x9b68e7(0xed)]['AzureServer']]:azure_api_service_1[a159_0x9b68e7(0xf1)]};class ServicesFactory{static[a159_0x9b68e7(0xec)](_0x35db0d,_0x14cf03){const _0x140dc5=a159_0x9b68e7;if(!(_0x14cf03 in PROVIDER_SERVICES_MAP))throw new Error(_0x140dc5(0xf2)+_0x14cf03+'\x27');return _0x35db0d[_0x140dc5(0x104)](PROVIDER_SERVICES_MAP[_0x14cf03]);}}exports[a159_0x9b68e7(0xf7)]=ServicesFactory;