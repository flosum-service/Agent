const a149_0x1b0dfc=a149_0x4b33;function a149_0x4b33(_0x2d6f36,_0x2da396){const _0x37c18c=a149_0x2db1();return a149_0x4b33=function(_0x42fe90,_0x496f4c){_0x42fe90=_0x42fe90-0x7f;let _0x2db1e1=_0x37c18c[_0x42fe90];return _0x2db1e1;},a149_0x4b33(_0x2d6f36,_0x2da396);}(function(_0x4eced5,_0x40b1a1){const _0x532d14=a149_0x4b33,_0x42b638=_0x4eced5();while(!![]){try{const _0x57641a=parseInt(_0x532d14(0x8f))/0x1*(parseInt(_0x532d14(0x87))/0x2)+parseInt(_0x532d14(0x98))/0x3+parseInt(_0x532d14(0x95))/0x4+-parseInt(_0x532d14(0x9f))/0x5*(-parseInt(_0x532d14(0x84))/0x6)+-parseInt(_0x532d14(0x9a))/0x7*(parseInt(_0x532d14(0x80))/0x8)+parseInt(_0x532d14(0x8c))/0x9*(-parseInt(_0x532d14(0x90))/0xa)+parseInt(_0x532d14(0x81))/0xb*(parseInt(_0x532d14(0x83))/0xc);if(_0x57641a===_0x40b1a1)break;else _0x42b638['push'](_0x42b638['shift']());}catch(_0x2eb7d0){_0x42b638['push'](_0x42b638['shift']());}}}(a149_0x2db1,0x91219));const a149_0x496f4c=(function(){let _0x4a0177=!![];return function(_0x4c5da7,_0x58629e){const _0x590aa0=_0x4a0177?function(){const _0x3e0892=a149_0x4b33;if(_0x58629e){const _0x2a94f5=_0x58629e[_0x3e0892(0x9e)](_0x4c5da7,arguments);return _0x58629e=null,_0x2a94f5;}}:function(){};return _0x4a0177=![],_0x590aa0;};}()),a149_0x42fe90=a149_0x496f4c(this,function(){const _0x4eaa04=a149_0x4b33;return a149_0x42fe90[_0x4eaa04(0x94)]()[_0x4eaa04(0x9d)]('(((.+)+)+)+$')['toString']()[_0x4eaa04(0x8b)](a149_0x42fe90)[_0x4eaa04(0x9d)](_0x4eaa04(0x88));});a149_0x42fe90();'use strict';Object['defineProperty'](exports,a149_0x1b0dfc(0x85),{'value':!![]}),exports[a149_0x1b0dfc(0x82)]=exports[a149_0x1b0dfc(0x91)]=exports['extractMessageFromCommitDescribe']=exports[a149_0x1b0dfc(0x97)]=exports[a149_0x1b0dfc(0x8d)]=void 0x0;const internal_server_error_1=require('../../../core/errors/internal-server.error'),GIT_AUTHOR_REGEXP=/Author\:\s(.+)$/m,GIT_EMAIL_REGEXP=/Email\:\s(.+)$/m,GIT_MESSAGE_REGEXP=/Message\:\s(.+)$/m,GIT_CHANGE_REGEXP=/^(D|M|A)\s+([^\n]+)/;function extractAuthorFromCommitDescribe(_0x4a98ca){const _0x3abc5a=a149_0x1b0dfc,_0x491a73=_0x4a98ca[_0x3abc5a(0x86)](GIT_AUTHOR_REGEXP);if(!_0x491a73)return'';return _0x491a73[0x1];}exports[a149_0x1b0dfc(0x8d)]=extractAuthorFromCommitDescribe;function extractEmailFromCommitDescribe(_0x36aa3f){const _0xa5a3df=_0x36aa3f['match'](GIT_EMAIL_REGEXP);if(!_0xa5a3df)return'';return _0xa5a3df[0x1];}exports['extractEmailFromCommitDescribe']=extractEmailFromCommitDescribe;function extractMessageFromCommitDescribe(_0x3e62ba){const _0x4b59fc=a149_0x1b0dfc,_0x5efe0a=_0x3e62ba[_0x4b59fc(0x86)](GIT_MESSAGE_REGEXP);if(!_0x5efe0a)return'';return _0x5efe0a[0x1];}exports[a149_0x1b0dfc(0x9c)]=extractMessageFromCommitDescribe;function extractChangesFromCommitDescribe(_0x3b1f58){const _0x1ae398=a149_0x1b0dfc,_0x4ffe03={'added':[],'modified':[],'removed':[]};return _0x3b1f58['split']('\x0a')[_0x1ae398(0x8a)](_0x5a22b7=>_0x5a22b7[_0x1ae398(0x86)](GIT_CHANGE_REGEXP))['filter'](_0xa08ac6=>!!_0xa08ac6)['forEach'](([,_0x191b1f,_0x393ef5])=>{const _0x46e7f6=_0x1ae398;switch(_0x191b1f){case'A':_0x4ffe03[_0x46e7f6(0x9b)]['push'](_0x393ef5);break;case'M':_0x4ffe03['modified'][_0x46e7f6(0x7f)](_0x393ef5);break;case'D':_0x4ffe03[_0x46e7f6(0x8e)][_0x46e7f6(0x7f)](_0x393ef5);break;}}),_0x4ffe03;}function a149_0x2db1(){const _0x17c162=['pull\x20request','extractEmailFromCommitDescribe','513621ZdVCcs','Switched','229957cuIHJO','added','extractMessageFromCommitDescribe','search','apply','1123885ECPFge','push','248DpvaZr','77IRMKJf','parseGitError','756084xLYKfN','30QoZZIX','__esModule','match','60JBMqJQ','(((.+)+)+)+$','warning:','map','constructor','9SBvYIj','extractAuthorFromCommitDescribe','removed','11359LzdCro','10976530bJZFdE','extractChangesFromCommitDescribe','includes','message','toString','2534320cFECYe'];a149_0x2db1=function(){return _0x17c162;};return a149_0x2db1();}exports[a149_0x1b0dfc(0x91)]=extractChangesFromCommitDescribe;function parseGitError(_0x480456){const _0x49d18f=a149_0x1b0dfc,_0x5dbd4b=_0x480456[_0x49d18f(0x93)]||_0x480456;if(_0x5dbd4b[_0x49d18f(0x92)]('merge')||_0x5dbd4b[_0x49d18f(0x92)](_0x49d18f(0x96))||_0x5dbd4b['includes']('Warning!')||_0x5dbd4b[_0x49d18f(0x92)](_0x49d18f(0x89))||_0x5dbd4b[_0x49d18f(0x92)](_0x49d18f(0x99)))return _0x5dbd4b;throw new internal_server_error_1['InternalServerError'](_0x480456);}exports[a149_0x1b0dfc(0x82)]=parseGitError;