const a413_0x5e7742=a413_0x5262;(function(_0x571352,_0x4cd21e){const _0x160d21=a413_0x5262,_0x5a83d2=_0x571352();while(!![]){try{const _0x1c747a=-parseInt(_0x160d21(0x155))/0x1+-parseInt(_0x160d21(0x157))/0x2*(-parseInt(_0x160d21(0x158))/0x3)+-parseInt(_0x160d21(0x14c))/0x4+-parseInt(_0x160d21(0x145))/0x5+parseInt(_0x160d21(0x14d))/0x6*(-parseInt(_0x160d21(0x14e))/0x7)+parseInt(_0x160d21(0x159))/0x8+-parseInt(_0x160d21(0x14f))/0x9*(-parseInt(_0x160d21(0x152))/0xa);if(_0x1c747a===_0x4cd21e)break;else _0x5a83d2['push'](_0x5a83d2['shift']());}catch(_0x4fb647){_0x5a83d2['push'](_0x5a83d2['shift']());}}}(a413_0x1e83,0x9e019));const a413_0x128580=(function(){let _0x740357=!![];return function(_0x481063,_0x41525e){const _0x4a24b9=_0x740357?function(){const _0x504c10=a413_0x5262;if(_0x41525e){const _0x4da981=_0x41525e[_0x504c10(0x156)](_0x481063,arguments);return _0x41525e=null,_0x4da981;}}:function(){};return _0x740357=![],_0x4a24b9;};}()),a413_0x323640=a413_0x128580(this,function(){const _0x140e6f=a413_0x5262;return a413_0x323640[_0x140e6f(0x150)]()[_0x140e6f(0x14a)](_0x140e6f(0x15a))[_0x140e6f(0x150)]()[_0x140e6f(0x151)](a413_0x323640)[_0x140e6f(0x14a)](_0x140e6f(0x15a));});function a413_0x1e83(){const _0x245820=['7AsPTmH','9lkGFIA','toString','constructor','19092350dTNuao','VeevaResponseStatus','__esModule','810833QtEDFj','apply','58bzYaYC','104772KGhSzK','5350112cmROPI','(((.+)+)+)+$','3543140raDeWt','updateVeevaConnection','FAILURE','defineProperty','get','search','../constants/veeva.constants','4485388BMeZTJ','1816764KuPxfy'];a413_0x1e83=function(){return _0x245820;};return a413_0x1e83();}a413_0x323640();'use strict';Object[a413_0x5e7742(0x148)](exports,a413_0x5e7742(0x154),{'value':!![]}),exports[a413_0x5e7742(0x146)]=void 0x0;const veeva_constants_1=require(a413_0x5e7742(0x14b)),status_enums_1=require('../enums/status.enums');function a413_0x5262(_0x5f2a44,_0x93c48c){const _0x104670=a413_0x1e83();return a413_0x5262=function(_0x323640,_0x128580){_0x323640=_0x323640-0x145;let _0x1e8362=_0x104670[_0x323640];return _0x1e8362;},a413_0x5262(_0x5f2a44,_0x93c48c);}async function updateVeevaConnection(_0x474715){const _0x2df026=a413_0x5e7742,{data:_0x177373}=await _0x474715[_0x2df026(0x149)](veeva_constants_1['VeevaConstants']['ENDPOINT_AUTH_CHECK_SESSION']);if(_0x177373['responseStatus']===status_enums_1[_0x2df026(0x153)][_0x2df026(0x147)])throw new Error('Failed\x20to\x20establish\x20a\x20connection\x20with\x20Veeva');}exports['updateVeevaConnection']=updateVeevaConnection;