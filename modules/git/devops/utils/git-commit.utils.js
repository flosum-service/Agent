function a120_0x32d7(){const _0xf9cb42=['390byobsS','../../../../core/errors/bad-request.error','join','META_XML_EXTENSION','76dqsRnp','Azure','(((.+)+)+)+$','isVlocityComponent','search','BadRequestError','10mECDRE','replace','split','default','GitProvider','apply','filter','toString','prepareGitChangedPaths','substr','isPathsEquals','Gitlab','sep','5983140mueYNf','21131532iffRTH','fromBitbucket','test','relative','posix','extname','8368672pnkVOd','GithubServer','63648xDCsZf','396774JTeORS','BUNDLED_FOLDERS_REGEXP','constructor','fromAzure','__importDefault','GitlabServer','startsWith','endsWith','fromGithub','provider','fromBitbucketServer','GitCommitDto','ERR_UNKNOWN_GIT_SERVICE','../../../../constants/errors','__esModule','../dto/git-commit.dto','3040695AOmVEc','defineProperty','Bitbucket','3881XRxRha','path','map','../../parsers/utils/vlocity'];a120_0x32d7=function(){return _0xf9cb42;};return a120_0x32d7();}const a120_0x4f8ef6=a120_0x5672;(function(_0x2a9264,_0x5b04a9){const _0x105bd1=a120_0x5672,_0x42381f=_0x2a9264();while(!![]){try{const _0x2137cf=-parseInt(_0x105bd1(0x94))/0x1*(parseInt(_0x105bd1(0x98))/0x2)+-parseInt(_0x105bd1(0xb8))/0x3*(parseInt(_0x105bd1(0x9c))/0x4)+-parseInt(_0x105bd1(0x91))/0x5+-parseInt(_0x105bd1(0xaf))/0x6+-parseInt(_0x105bd1(0xb9))/0x7+parseInt(_0x105bd1(0xb6))/0x8+parseInt(_0x105bd1(0xb0))/0x9*(parseInt(_0x105bd1(0xa2))/0xa);if(_0x2137cf===_0x5b04a9)break;else _0x42381f['push'](_0x42381f['shift']());}catch(_0x33b803){_0x42381f['push'](_0x42381f['shift']());}}}(a120_0x32d7,0x8bada));const a120_0x4c7dda=(function(){let _0x22a897=!![];return function(_0x14dd72,_0x355681){const _0x17f6f4=_0x22a897?function(){const _0x3019ca=a120_0x5672;if(_0x355681){const _0x2d045b=_0x355681[_0x3019ca(0xa7)](_0x14dd72,arguments);return _0x355681=null,_0x2d045b;}}:function(){};return _0x22a897=![],_0x17f6f4;};}()),a120_0x509d5d=a120_0x4c7dda(this,function(){const _0xedaf0f=a120_0x5672;return a120_0x509d5d[_0xedaf0f(0xa9)]()[_0xedaf0f(0xa0)]('(((.+)+)+)+$')[_0xedaf0f(0xa9)]()[_0xedaf0f(0xbb)](a120_0x509d5d)[_0xedaf0f(0xa0)](_0xedaf0f(0x9e));});a120_0x509d5d();'use strict';var __importDefault=this&&this[a120_0x4f8ef6(0xbd)]||function(_0x37424c){const _0x255498=a120_0x4f8ef6;return _0x37424c&&_0x37424c[_0x255498(0x8f)]?_0x37424c:{'default':_0x37424c};};Object[a120_0x4f8ef6(0x92)](exports,a120_0x4f8ef6(0x8f),{'value':!![]}),exports[a120_0x4f8ef6(0xaa)]=exports[a120_0x4f8ef6(0xac)]=exports['extractGitCommitDtoFromContext']=void 0x0;const constants_1=require('../../../../constants'),errors_1=require(a120_0x4f8ef6(0x8e)),bad_request_error_1=require(a120_0x4f8ef6(0x99)),git_provider_1=require('../../providers/types/git-provider'),git_commit_dto_1=require(a120_0x4f8ef6(0x90)),path_1=__importDefault(require(a120_0x4f8ef6(0x95))),vlocity_1=require(a120_0x4f8ef6(0x97));function extractGitCommitDtoFromContext(_0x387400,_0x5088b3){const _0x425661=a120_0x4f8ef6;let _0x1d8f42;switch(_0x5088b3){case git_provider_1[_0x425661(0xa6)]['Github']:case git_provider_1[_0x425661(0xa6)][_0x425661(0xb7)]:_0x1d8f42=git_commit_dto_1[_0x425661(0xc4)][_0x425661(0xc1)](_0x387400);break;case git_provider_1[_0x425661(0xa6)][_0x425661(0x9d)]:case git_provider_1[_0x425661(0xa6)]['AzureServer']:_0x1d8f42=git_commit_dto_1[_0x425661(0xc4)][_0x425661(0xbc)](_0x387400);break;case git_provider_1[_0x425661(0xa6)][_0x425661(0x93)]:_0x1d8f42=git_commit_dto_1[_0x425661(0xc4)][_0x425661(0xb1)](_0x387400);break;case git_provider_1[_0x425661(0xa6)]['BitbucketServer']:_0x1d8f42=git_commit_dto_1[_0x425661(0xc4)][_0x425661(0xc3)](_0x387400);break;case git_provider_1[_0x425661(0xa6)][_0x425661(0xad)]:case git_provider_1[_0x425661(0xa6)][_0x425661(0xbe)]:_0x1d8f42=git_commit_dto_1['GitCommitDto']['fromGitlab'](_0x387400);break;default:throw new bad_request_error_1[(_0x425661(0xa1))](errors_1[_0x425661(0xc5)]);}return _0x1d8f42[_0x425661(0xc2)]=_0x5088b3,_0x1d8f42;}exports['extractGitCommitDtoFromContext']=extractGitCommitDtoFromContext;function isPathsEquals(_0x126960,_0x113e71){const _0x132346=a120_0x4f8ef6;return _0x126960[_0x132346(0xa3)](path_1[_0x132346(0xa5)]['extname'](_0x126960),'')===_0x113e71[_0x132346(0xa3)](path_1['default']['extname'](_0x113e71),'');}function a120_0x5672(_0x5f5965,_0x20dcb2){const _0x25ae2f=a120_0x32d7();return a120_0x5672=function(_0x509d5d,_0x4c7dda){_0x509d5d=_0x509d5d-0x8e;let _0x32d775=_0x25ae2f[_0x509d5d];return _0x32d775;},a120_0x5672(_0x5f5965,_0x20dcb2);}exports[a120_0x4f8ef6(0xac)]=isPathsEquals;function prepareGitChangedPaths(_0x2ad731,_0x32c201=![]){const _0x32a6f8=a120_0x4f8ef6;return _0x32c201&&(_0x2ad731=_0x2ad731[_0x32a6f8(0xa8)](_0x4178ac=>_0x4178ac['startsWith'](constants_1['FORCE_APP_DEFAULT_DIR']))),[...new Set(_0x2ad731[_0x32a6f8(0x96)](_0x4909c8=>{const _0x5d6909=_0x32a6f8;if(_0x4909c8[_0x5d6909(0xbf)](constants_1['FORCE_APP_DEFAULT_DIR'])){const _0x22320e=_0x4909c8[_0x5d6909(0xa3)](constants_1['FORCE_APP_DEFAULT_DIR'],'')[_0x5d6909(0xab)](0x1),[_0x5f5da0,_0x232774]=_0x22320e[_0x5d6909(0xa4)]('/');let _0x51e425=_0x232774;return _0x51e425[_0x5d6909(0xc0)](constants_1[_0x5d6909(0x9b)])&&(_0x51e425=_0x51e425[_0x5d6909(0xa3)](constants_1[_0x5d6909(0x9b)],'')),path_1['default'][_0x5d6909(0xb5)](_0x51e425)&&(_0x51e425=_0x51e425[_0x5d6909(0xa3)](path_1[_0x5d6909(0xa5)]['extname'](_0x51e425),'')),path_1[_0x5d6909(0xa5)][_0x5d6909(0x9a)](_0x5f5da0,_0x51e425);}const _0x1148e1=path_1[_0x5d6909(0xa5)][_0x5d6909(0xb3)]('.',_0x4909c8);if(constants_1[_0x5d6909(0xba)][_0x5d6909(0xb2)](_0x1148e1)||(0x0,vlocity_1[_0x5d6909(0x9f)])(_0x1148e1)){const [_0x3cfa50,_0x58420d]=_0x1148e1[_0x5d6909(0xa4)](path_1['default'][_0x5d6909(0xae)]);return path_1['default'][_0x5d6909(0x9a)](_0x3cfa50,_0x58420d);}return _0x1148e1;}))]['map'](_0x3ece4b=>_0x3ece4b[_0x32a6f8(0xa4)](path_1[_0x32a6f8(0xa5)][_0x32a6f8(0xae)])['join'](path_1[_0x32a6f8(0xa5)][_0x32a6f8(0xb4)][_0x32a6f8(0xae)]));}exports[a120_0x4f8ef6(0xaa)]=prepareGitChangedPaths;