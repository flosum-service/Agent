const a56_0x2ef937=a56_0x2aec;(function(_0x247f17,_0xf57ad5){const _0x2c2736=a56_0x2aec,_0x3946ab=_0x247f17();while(!![]){try{const _0x471229=parseInt(_0x2c2736(0xe4))/0x1*(-parseInt(_0x2c2736(0xcd))/0x2)+-parseInt(_0x2c2736(0xd5))/0x3+parseInt(_0x2c2736(0xd3))/0x4*(-parseInt(_0x2c2736(0xe5))/0x5)+parseInt(_0x2c2736(0xdf))/0x6*(parseInt(_0x2c2736(0xcb))/0x7)+-parseInt(_0x2c2736(0xe8))/0x8+-parseInt(_0x2c2736(0xd2))/0x9*(parseInt(_0x2c2736(0xe6))/0xa)+parseInt(_0x2c2736(0xd7))/0xb*(parseInt(_0x2c2736(0xdb))/0xc);if(_0x471229===_0xf57ad5)break;else _0x3946ab['push'](_0x3946ab['shift']());}catch(_0x15365b){_0x3946ab['push'](_0x3946ab['shift']());}}}(a56_0x202b,0xb05ac));const a56_0x3bfa46=(function(){let _0x5cd285=!![];return function(_0x363af3,_0x1e63f6){const _0x2712a2=_0x5cd285?function(){const _0x2b4ee9=a56_0x2aec;if(_0x1e63f6){const _0x5239cd=_0x1e63f6[_0x2b4ee9(0xd9)](_0x363af3,arguments);return _0x1e63f6=null,_0x5239cd;}}:function(){};return _0x5cd285=![],_0x2712a2;};}()),a56_0x5387d2=a56_0x3bfa46(this,function(){const _0x1434d6=a56_0x2aec;return a56_0x5387d2['toString']()[_0x1434d6(0xdd)](_0x1434d6(0xe3))['toString']()[_0x1434d6(0xe0)](a56_0x5387d2)['search'](_0x1434d6(0xe3));});function a56_0x2aec(_0x396b23,_0xf14389){const _0x1cc8c4=a56_0x202b();return a56_0x2aec=function(_0x5387d2,_0x3bfa46){_0x5387d2=_0x5387d2-0xca;let _0x202bb6=_0x1cc8c4[_0x5387d2];return _0x202bb6;},a56_0x2aec(_0x396b23,_0xf14389);}a56_0x5387d2();function a56_0x202b(){const _0x503ffd=['2440688DLWsGA','BadRequestError','89514HLTYRW','../../git-api/services/github-api.service','968fNPuIC','defineProperty','apply','request','364884EGxtIb','apiUrl','search','GithubBranchService','2983062shCNLh','constructor','repository','__esModule','(((.+)+)+)+$','174voEMfq','5LkKbOV','30brTeiz','../../../core/errors/bad-request.error','11270416oshMqJ','GitBranchService','14HdEEKx','__importDefault','8464tdyOoh','default','createRequest','git/refs/heads/','delete','487926EdwQPp'];a56_0x202b=function(){return _0x503ffd;};return a56_0x202b();}'use strict';var __importDefault=this&&this[a56_0x2ef937(0xcc)]||function(_0x2d0ba4){const _0x375a3c=a56_0x2ef937;return _0x2d0ba4&&_0x2d0ba4[_0x375a3c(0xe2)]?_0x2d0ba4:{'default':_0x2d0ba4};};Object[a56_0x2ef937(0xd8)](exports,a56_0x2ef937(0xe2),{'value':!![]}),exports[a56_0x2ef937(0xde)]=void 0x0;const bad_request_error_1=require(a56_0x2ef937(0xe7)),github_api_service_1=require(a56_0x2ef937(0xd6)),typedi_1=__importDefault(require('typedi')),git_branch_service_1=require('./git-branch.service');class GithubBranchService extends git_branch_service_1[a56_0x2ef937(0xca)]{constructor(_0x361f9b){const _0x2bf5a1=a56_0x2ef937;super(_0x361f9b),this[_0x2bf5a1(0xda)]=this[_0x2bf5a1(0xcf)]();}[a56_0x2ef937(0xcf)](){const _0x10c044=a56_0x2ef937,_0x4add55=typedi_1[_0x10c044(0xce)]['get'](github_api_service_1['GithubApiService']);return _0x4add55[_0x10c044(0xcf)](this[_0x10c044(0xe1)][_0x10c044(0xdc)]);}async[a56_0x2ef937(0xd1)](_0x16ce72){const _0x4891a5=a56_0x2ef937;try{await this['request'][_0x4891a5(0xd1)](_0x4891a5(0xd0)+_0x16ce72);}catch(_0x1a31f9){throw new bad_request_error_1[(_0x4891a5(0xd4))](_0x1a31f9);}}}exports[a56_0x2ef937(0xde)]=GithubBranchService;