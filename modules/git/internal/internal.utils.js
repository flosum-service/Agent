const a149_0xa17e4=a149_0x3420;(function(_0x44e8c4,_0x4ed919){const _0x54e0ab=a149_0x3420,_0x519566=_0x44e8c4();while(!![]){try{const _0x28c44b=parseInt(_0x54e0ab(0x16b))/0x1+-parseInt(_0x54e0ab(0x16d))/0x2+parseInt(_0x54e0ab(0x16a))/0x3+-parseInt(_0x54e0ab(0x166))/0x4*(-parseInt(_0x54e0ab(0x185))/0x5)+parseInt(_0x54e0ab(0x175))/0x6*(parseInt(_0x54e0ab(0x17f))/0x7)+-parseInt(_0x54e0ab(0x178))/0x8+-parseInt(_0x54e0ab(0x17d))/0x9;if(_0x28c44b===_0x4ed919)break;else _0x519566['push'](_0x519566['shift']());}catch(_0x38645a){_0x519566['push'](_0x519566['shift']());}}}(a149_0x31da,0x4c9b8));const a149_0x38c0d2=(function(){let _0x5a7ed0=!![];return function(_0x1890ca,_0x254d94){const _0x359751=_0x5a7ed0?function(){const _0x1bbc32=a149_0x3420;if(_0x254d94){const _0x4362cd=_0x254d94[_0x1bbc32(0x17c)](_0x1890ca,arguments);return _0x254d94=null,_0x4362cd;}}:function(){};return _0x5a7ed0=![],_0x359751;};}()),a149_0x592a1b=a149_0x38c0d2(this,function(){const _0x1407aa=a149_0x3420;return a149_0x592a1b[_0x1407aa(0x167)]()[_0x1407aa(0x173)](_0x1407aa(0x183))[_0x1407aa(0x167)]()[_0x1407aa(0x176)](a149_0x592a1b)['search'](_0x1407aa(0x183));});a149_0x592a1b();'use strict';Object[a149_0xa17e4(0x163)](exports,a149_0xa17e4(0x179),{'value':!![]}),exports[a149_0xa17e4(0x174)]=exports[a149_0xa17e4(0x17b)]=exports[a149_0xa17e4(0x177)]=exports[a149_0xa17e4(0x169)]=exports['extractAuthorFromCommitDescribe']=void 0x0;const internal_server_error_1=require(a149_0xa17e4(0x16e)),GIT_AUTHOR_REGEXP=/Author\:\s(.+)$/m,GIT_EMAIL_REGEXP=/Email\:\s(.+)$/m,GIT_MESSAGE_REGEXP=/Message\:\s(.+)$/m,GIT_CHANGE_REGEXP=/^(D|M|A)\s+([^\n]+)/;function extractAuthorFromCommitDescribe(_0x4556e9){const _0x4d1625=a149_0xa17e4,_0x478ee1=_0x4556e9[_0x4d1625(0x184)](GIT_AUTHOR_REGEXP);if(!_0x478ee1)return'';return _0x478ee1[0x1];}exports[a149_0xa17e4(0x164)]=extractAuthorFromCommitDescribe;function a149_0x31da(){const _0x11dcec=['parseGitError','6ZzWtBO','constructor','extractMessageFromCommitDescribe','310080KXmzQt','__esModule','pull\x20request','extractChangesFromCommitDescribe','apply','649917jOFKvo','includes','161672aENQtf','split','Warning!','push','(((.+)+)+)+$','match','35relVmj','defineProperty','extractAuthorFromCommitDescribe','message','245840zNjxyN','toString','Switched','extractEmailFromCommitDescribe','381486CBUmRd','75372KvDhvf','removed','462186gtEMua','../../../core/errors/internal-server.error','modified','filter','warning:','added','search'];a149_0x31da=function(){return _0x11dcec;};return a149_0x31da();}function a149_0x3420(_0x24be26,_0x12a5dd){const _0x5cec02=a149_0x31da();return a149_0x3420=function(_0x592a1b,_0x38c0d2){_0x592a1b=_0x592a1b-0x163;let _0x31da93=_0x5cec02[_0x592a1b];return _0x31da93;},a149_0x3420(_0x24be26,_0x12a5dd);}function extractEmailFromCommitDescribe(_0x3c02f0){const _0x2a3d45=_0x3c02f0['match'](GIT_EMAIL_REGEXP);if(!_0x2a3d45)return'';return _0x2a3d45[0x1];}exports[a149_0xa17e4(0x169)]=extractEmailFromCommitDescribe;function extractMessageFromCommitDescribe(_0x58f212){const _0x34460f=_0x58f212['match'](GIT_MESSAGE_REGEXP);if(!_0x34460f)return'';return _0x34460f[0x1];}exports[a149_0xa17e4(0x177)]=extractMessageFromCommitDescribe;function extractChangesFromCommitDescribe(_0x1ff926){const _0x232fe1=a149_0xa17e4,_0x539445={'added':[],'modified':[],'removed':[]};return _0x1ff926[_0x232fe1(0x180)]('\x0a')['map'](_0x5f1785=>_0x5f1785[_0x232fe1(0x184)](GIT_CHANGE_REGEXP))[_0x232fe1(0x170)](_0x30ea13=>!!_0x30ea13)['forEach'](([,_0x55a61a,_0x437542])=>{const _0x42be32=_0x232fe1;switch(_0x55a61a){case'A':_0x539445[_0x42be32(0x172)][_0x42be32(0x182)](_0x437542);break;case'M':_0x539445[_0x42be32(0x16f)][_0x42be32(0x182)](_0x437542);break;case'D':_0x539445[_0x42be32(0x16c)][_0x42be32(0x182)](_0x437542);break;}}),_0x539445;}exports[a149_0xa17e4(0x17b)]=extractChangesFromCommitDescribe;function parseGitError(_0x535ca4){const _0x52893c=a149_0xa17e4,_0xf643ad=_0x535ca4[_0x52893c(0x165)]||_0x535ca4;if(_0xf643ad['includes']('merge')||_0xf643ad[_0x52893c(0x17e)](_0x52893c(0x17a))||_0xf643ad[_0x52893c(0x17e)](_0x52893c(0x181))||_0xf643ad[_0x52893c(0x17e)](_0x52893c(0x171))||_0xf643ad[_0x52893c(0x17e)](_0x52893c(0x168)))return _0xf643ad;throw new internal_server_error_1['InternalServerError'](_0x535ca4);}exports[a149_0xa17e4(0x174)]=parseGitError;