const a258_0x2c94db=a258_0xbacb;(function(_0x14e882,_0x27137a){const _0x1b8e47=a258_0xbacb,_0x5902b1=_0x14e882();while(!![]){try{const _0x4577f1=parseInt(_0x1b8e47(0xfe))/0x1*(parseInt(_0x1b8e47(0xfb))/0x2)+parseInt(_0x1b8e47(0x106))/0x3*(-parseInt(_0x1b8e47(0x110))/0x4)+-parseInt(_0x1b8e47(0x12e))/0x5*(parseInt(_0x1b8e47(0xf7))/0x6)+parseInt(_0x1b8e47(0x102))/0x7+-parseInt(_0x1b8e47(0xfc))/0x8*(-parseInt(_0x1b8e47(0x112))/0x9)+parseInt(_0x1b8e47(0x117))/0xa*(-parseInt(_0x1b8e47(0x10c))/0xb)+parseInt(_0x1b8e47(0x109))/0xc*(-parseInt(_0x1b8e47(0xff))/0xd);if(_0x4577f1===_0x27137a)break;else _0x5902b1['push'](_0x5902b1['shift']());}catch(_0x49deba){_0x5902b1['push'](_0x5902b1['shift']());}}}(a258_0x2f54,0x81cb5));const a258_0x51dc10=(function(){let _0x2052ac=!![];return function(_0x3c4a2c,_0x52e1c2){const _0xe16da3=_0x2052ac?function(){const _0x4804ca=a258_0xbacb;if(_0x52e1c2){const _0x294359=_0x52e1c2[_0x4804ca(0x122)](_0x3c4a2c,arguments);return _0x52e1c2=null,_0x294359;}}:function(){};return _0x2052ac=![],_0xe16da3;};}()),a258_0x1cdb87=a258_0x51dc10(this,function(){const _0x144020=a258_0xbacb;return a258_0x1cdb87[_0x144020(0x12c)]()[_0x144020(0x11a)](_0x144020(0x12d))[_0x144020(0x12c)]()[_0x144020(0x124)](a258_0x1cdb87)['search'](_0x144020(0x12d));});a258_0x1cdb87();function a258_0xbacb(_0x4cb925,_0x47af31){const _0x50db5a=a258_0x2f54();return a258_0xbacb=function(_0x1cdb87,_0x51dc10){_0x1cdb87=_0x1cdb87-0xf4;let _0x2f54af=_0x50db5a[_0x1cdb87];return _0x2f54af;},a258_0xbacb(_0x4cb925,_0x47af31);}'use strict';Object[a258_0x2c94db(0x101)](exports,a258_0x2c94db(0x129),{'value':!![]}),exports[a258_0x2c94db(0x120)]=void 0x0;const utils_1=require(a258_0x2c94db(0x103)),status_enums_1=require(a258_0x2c94db(0xf4)),veeva_error_1=require(a258_0x2c94db(0x10b));function a258_0x2f54(){const _0x2fcb69=['9BBiQJa','CANCELLED','push','VeevaResponseStatus','JOB_STATUS_TIMEOUT','20ZDNXFk','ERRORS_ENCOUNTERED','delete','search','VeevaJobStatus','flat','data','get','VeevaError','VeevaService','createVeevaObjectRecords','apply','MISSED_SCHEDULE','constructor','Unknown\x20Job\x20status\x20:\x20\x27','application/json','chunkArray','sleep','__esModule','length','log','toString','(((.+)+)+)+$','310BaNPWM','../enums/status.enums','status','post','5724EEbXKH','map','SUCCESS','QUEUEING','220ufnyfq','5231608vjxwpd','Check\x20Retrieval\x20Status:\x20Not\x20Completed.\x20Next\x20check\x20after\x2010\x20seconds.','9454iaVCWp','7393633tLduOr','errors','defineProperty','5275767pEFtJk','../../shared/utils','executeVQL','CREATE_RECORDS_LIMIT','57VjLdcS','all','responseStatus','24jDlagM','Deleting\x20','../classes/errors/veeva-error','1845173vnOLKu','getJobResult','executeManyVQL','DELETE_RECORDS_LIMIT','80804kIUnok','\x20records'];a258_0x2f54=function(){return _0x2fcb69;};return a258_0x2f54();}class VeevaService{static async[a258_0x2c94db(0x10e)](_0x429aef,_0x3ebf48){const _0x26b317=a258_0x2c94db,_0x54f762=[];for(const _0x4aa2cf of _0x429aef){_0x54f762[_0x26b317(0x114)](this[_0x26b317(0x104)](_0x4aa2cf,_0x3ebf48));}const _0x245bfa=await Promise[_0x26b317(0x107)](_0x54f762);return _0x245bfa[_0x26b317(0x11c)]();}static async[a258_0x2c94db(0x104)](_0x5c5da0,_0x9450a1){const _0x450495=a258_0x2c94db,_0x262196=[];do{const _0x59ee83=await _0x9450a1['get'](_0x5c5da0),_0x26d0b2=_0x59ee83['data'];if(_0x26d0b2[_0x450495(0x108)]===status_enums_1['VeevaResponseStatus']['SUCCESS']){const {responseDetails:{next_page:_0x11256a},data:_0x1ee247}=_0x26d0b2;_0x5c5da0=_0x11256a||null,_0x262196[_0x450495(0x114)](..._0x1ee247);}else throw new veeva_error_1[(_0x450495(0x11f))](_0x26d0b2[_0x450495(0x100)]);}while(_0x5c5da0);return _0x262196;}static async[a258_0x2c94db(0x121)](_0x1f0c88,_0x48bd45,_0x5ed11b,_0x3914dc){const _0x675e37=a258_0x2c94db,_0x48152d=[],_0x45697b=(0x0,utils_1[_0x675e37(0x127)])(_0x5ed11b,VeevaService[_0x675e37(0x105)]),_0x305bc2=_0x5ed11b[_0x675e37(0x12a)];let _0x3cf0b7=0x0;for(const _0x3c1a07 of _0x45697b){_0x3cf0b7+=_0x3c1a07[_0x675e37(0x12a)],_0x3914dc[_0x675e37(0x12b)]('Creating\x20'+_0x3cf0b7+'/'+_0x305bc2+'\x20records.');const _0x30b365=await _0x48bd45[_0x675e37(0xf6)](_0x1f0c88,_0x3c1a07),_0xaaedae=_0x30b365['data'];if(_0xaaedae[_0x675e37(0x108)]===status_enums_1[_0x675e37(0x115)][_0x675e37(0xf9)])for(const {responseStatus:_0x5cc858,data:_0x466482}of _0xaaedae[_0x675e37(0x11d)]){if(_0x5cc858===status_enums_1[_0x675e37(0x115)][_0x675e37(0xf9)])_0x48152d[_0x675e37(0x114)](_0x466482['id']);else throw new veeva_error_1[(_0x675e37(0x11f))](_0xaaedae['errors']);}else throw new veeva_error_1[(_0x675e37(0x11f))](_0xaaedae[_0x675e37(0x100)]);}return _0x48152d;}static async['deleteVeevaObjectRecords'](_0x3da599,_0x4c205b,_0x324386,_0x48afa3){const _0x397d63=a258_0x2c94db,_0x3b496f=_0x324386[_0x397d63(0xf8)](_0x596ae6=>({'id':_0x596ae6})),_0x5ae20c=(0x0,utils_1['chunkArray'])(_0x3b496f,VeevaService['DELETE_RECORDS_LIMIT']);let _0x583ded=0x0;for(const _0x2deb59 of _0x5ae20c){_0x583ded+=_0x2deb59[_0x397d63(0x12a)],_0x48afa3['log'](_0x397d63(0x10a)+_0x583ded+'/'+_0x324386['length']+_0x397d63(0x111));const {data:_0x942bca}=await _0x4c205b[_0x397d63(0x119)](_0x3da599,{'headers':{'Content-Type':_0x397d63(0x126)},'data':_0x2deb59});if(_0x942bca[_0x397d63(0x108)]===status_enums_1[_0x397d63(0x115)][_0x397d63(0xf9)])for(const _0xae09c2 of _0x942bca['data']){const {responseStatus:_0x45d6dd,errors:_0x3ab5fd}=_0xae09c2;if(_0x45d6dd!==status_enums_1[_0x397d63(0x115)][_0x397d63(0xf9)])throw new veeva_error_1[(_0x397d63(0x11f))](_0x3ab5fd);}else throw new veeva_error_1[(_0x397d63(0x11f))](_0x942bca['errors']);}}static async[a258_0x2c94db(0x10d)](_0x2b07a5,_0x1a86a6,_0x1fd7c1){const _0xe1e91=a258_0x2c94db,_0x5c22b5=[];do{_0x1fd7c1[_0xe1e91(0x12b)](_0xe1e91(0xfd)),await(0x0,utils_1[_0xe1e91(0x128)])(VeevaService[_0xe1e91(0x116)]);const _0x335364=[];for(const _0x326b6b of _0x2b07a5){const {data:_0xfbad79}=await _0x1a86a6[_0xe1e91(0x11e)](_0x326b6b);if(_0xfbad79[_0xe1e91(0x108)]===status_enums_1[_0xe1e91(0x115)][_0xe1e91(0xf9)]){const {data:_0xbbee01}=_0xfbad79;switch(_0xbbee01['status']){case status_enums_1[_0xe1e91(0x11b)][_0xe1e91(0xf9)]:case status_enums_1[_0xe1e91(0x11b)][_0xe1e91(0x118)]:_0x5c22b5['push'](_0xbbee01);break;case status_enums_1[_0xe1e91(0x11b)][_0xe1e91(0xfa)]:case status_enums_1[_0xe1e91(0x11b)][_0xe1e91(0x113)]:case status_enums_1[_0xe1e91(0x11b)][_0xe1e91(0x123)]:throw new Error('Cannot\x20retrieve\x20job.\x20Job\x20status:\x20'+_0xbbee01[_0xe1e91(0xf5)]);case status_enums_1[_0xe1e91(0x11b)]['QUEUED']:case status_enums_1['VeevaJobStatus']['RUNNING']:case status_enums_1['VeevaJobStatus']['SCHEDULED']:_0x335364[_0xe1e91(0x114)](_0x326b6b);break;default:throw new Error(_0xe1e91(0x125)+_0xbbee01[_0xe1e91(0xf5)]+'\x27');}}else throw new veeva_error_1[(_0xe1e91(0x11f))](_0xfbad79['errors']);}_0x2b07a5=_0x335364;}while(_0x2b07a5[_0xe1e91(0x12a)]);return _0x5c22b5;}}exports['VeevaService']=VeevaService,VeevaService['JOB_STATUS_TIMEOUT']=0x2710,VeevaService[a258_0x2c94db(0x105)]=0x1f4,VeevaService[a258_0x2c94db(0x10f)]=0x1f4;