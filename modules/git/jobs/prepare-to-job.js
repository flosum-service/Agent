const a158_0x4eaa4a=a158_0x2d9c;(function(_0x2aa129,_0x4c53a1){const _0xe9a75d=a158_0x2d9c,_0x541c93=_0x2aa129();while(!![]){try{const _0x951c60=parseInt(_0xe9a75d(0x1c9))/0x1*(-parseInt(_0xe9a75d(0x1d4))/0x2)+parseInt(_0xe9a75d(0x1df))/0x3*(parseInt(_0xe9a75d(0x1dd))/0x4)+parseInt(_0xe9a75d(0x1d6))/0x5+parseInt(_0xe9a75d(0x1c4))/0x6*(-parseInt(_0xe9a75d(0x1d0))/0x7)+-parseInt(_0xe9a75d(0x1cd))/0x8+-parseInt(_0xe9a75d(0x1d9))/0x9*(parseInt(_0xe9a75d(0x1db))/0xa)+parseInt(_0xe9a75d(0x1c7))/0xb;if(_0x951c60===_0x4c53a1)break;else _0x541c93['push'](_0x541c93['shift']());}catch(_0x4591a5){_0x541c93['push'](_0x541c93['shift']());}}}(a158_0x300a,0x54858));function a158_0x300a(){const _0x4e26a0=['apply','constructor','ProvidersFactory','2506gVOkRo','Tokens','28150YbobGl','prepareToJob','default','9emnuPS','typedi','4141790rOoMvT','createFromContext','12XnKHvN','connectionId','603957alAuyA','__importDefault','6RNvidm','RepositoryFactory','../devops/utils/connection','22017314YuGXHC','toString','457qmewUu','createFromConnection','../providers/repositories/repository.factory','set','5271264TSSZFw','__esModule','(((.+)+)+)+$','4334771CbjMYA'];a158_0x300a=function(){return _0x4e26a0;};return a158_0x300a();}const a158_0x297126=(function(){let _0x2daee3=!![];return function(_0x338553,_0x4c3feb){const _0x16f50f=_0x2daee3?function(){const _0x4ebdb0=a158_0x2d9c;if(_0x4c3feb){const _0x3dd173=_0x4c3feb[_0x4ebdb0(0x1d1)](_0x338553,arguments);return _0x4c3feb=null,_0x3dd173;}}:function(){};return _0x2daee3=![],_0x16f50f;};}()),a158_0x1f4747=a158_0x297126(this,function(){const _0x242dad=a158_0x2d9c;return a158_0x1f4747[_0x242dad(0x1c8)]()['search'](_0x242dad(0x1cf))[_0x242dad(0x1c8)]()[_0x242dad(0x1d2)](a158_0x1f4747)['search'](_0x242dad(0x1cf));});function a158_0x2d9c(_0x6ef61b,_0x3a4c88){const _0x1569d5=a158_0x300a();return a158_0x2d9c=function(_0x1f4747,_0x297126){_0x1f4747=_0x1f4747-0x1c3;let _0x300a7c=_0x1569d5[_0x1f4747];return _0x300a7c;},a158_0x2d9c(_0x6ef61b,_0x3a4c88);}a158_0x1f4747();'use strict';var __importDefault=this&&this[a158_0x4eaa4a(0x1c3)]||function(_0x6b7895){const _0x280a89=a158_0x4eaa4a;return _0x6b7895&&_0x6b7895[_0x280a89(0x1ce)]?_0x6b7895:{'default':_0x6b7895};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports['prepareToJob']=void 0x0;const typedi_1=__importDefault(require(a158_0x4eaa4a(0x1da))),providers_tokens_1=require('../providers/providers.tokens'),connection_1=require(a158_0x4eaa4a(0x1c6)),repository_factory_1=require(a158_0x4eaa4a(0x1cb));async function prepareToJob(_0x43314b){const _0xa4595e=a158_0x4eaa4a;typedi_1[_0xa4595e(0x1d8)][_0xa4595e(0x1cc)](providers_tokens_1['Tokens'][_0xa4595e(0x1de)],_0x43314b);const _0x5ef19f=typedi_1[_0xa4595e(0x1d8)]['get'](connection_1[_0xa4595e(0x1d3)]);typedi_1[_0xa4595e(0x1d8)]['set'](providers_tokens_1['Tokens']['gitApiService'],await _0x5ef19f[_0xa4595e(0x1ca)](_0x43314b)),typedi_1[_0xa4595e(0x1d8)]['set'](providers_tokens_1[_0xa4595e(0x1d5)]['gitRepoService'],await repository_factory_1[_0xa4595e(0x1c5)][_0xa4595e(0x1dc)](typedi_1['default']));}exports[a158_0x4eaa4a(0x1d7)]=prepareToJob;