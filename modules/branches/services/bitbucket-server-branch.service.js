const a54_0x1da4de=a54_0x50a7;(function(_0x28d525,_0x25a0e7){const _0x4d6546=a54_0x50a7,_0x2a33c6=_0x28d525();while(!![]){try{const _0x4da22e=-parseInt(_0x4d6546(0x124))/0x1+-parseInt(_0x4d6546(0x120))/0x2*(parseInt(_0x4d6546(0x127))/0x3)+-parseInt(_0x4d6546(0x128))/0x4+parseInt(_0x4d6546(0x137))/0x5*(-parseInt(_0x4d6546(0x132))/0x6)+-parseInt(_0x4d6546(0x13b))/0x7+parseInt(_0x4d6546(0x138))/0x8+parseInt(_0x4d6546(0x12f))/0x9;if(_0x4da22e===_0x25a0e7)break;else _0x2a33c6['push'](_0x2a33c6['shift']());}catch(_0x52caa2){_0x2a33c6['push'](_0x2a33c6['shift']());}}}(a54_0xecb2,0x9bbf1));const a54_0x3e8deb=(function(){let _0x53bfd1=!![];return function(_0x59b066,_0x5cb50a){const _0x96c3f7=_0x53bfd1?function(){const _0x4bd636=a54_0x50a7;if(_0x5cb50a){const _0x46fb9a=_0x5cb50a[_0x4bd636(0x11f)](_0x59b066,arguments);return _0x5cb50a=null,_0x46fb9a;}}:function(){};return _0x53bfd1=![],_0x96c3f7;};}()),a54_0x1397c0=a54_0x3e8deb(this,function(){const _0x28fa48=a54_0x50a7;return a54_0x1397c0[_0x28fa48(0x121)]()['search'](_0x28fa48(0x13c))['toString']()[_0x28fa48(0x123)](a54_0x1397c0)[_0x28fa48(0x13a)](_0x28fa48(0x13c));});a54_0x1397c0();'use strict';var __importDefault=this&&this[a54_0x1da4de(0x12b)]||function(_0x2a01aa){return _0x2a01aa&&_0x2a01aa['__esModule']?_0x2a01aa:{'default':_0x2a01aa};};Object[a54_0x1da4de(0x12c)](exports,a54_0x1da4de(0x122),{'value':!![]}),exports['BitbucketServerBranchService']=void 0x0;const bad_request_error_1=require(a54_0x1da4de(0x12d)),typedi_1=__importDefault(require(a54_0x1da4de(0x11c))),bitbucket_server_api_service_1=require(a54_0x1da4de(0x126)),git_branch_service_1=require(a54_0x1da4de(0x129));class BitbucketServerBranchService extends git_branch_service_1['GitBranchService']{constructor(_0x5db16e){const _0x4201c5=a54_0x1da4de;super(_0x5db16e),this[_0x4201c5(0x133)]=this[_0x4201c5(0x11d)]();}[a54_0x1da4de(0x11d)](){const _0x5ea510=a54_0x1da4de,_0x374e4e=typedi_1['default'][_0x5ea510(0x136)](bitbucket_server_api_service_1[_0x5ea510(0x11e)]);return _0x374e4e[_0x5ea510(0x11d)](this[_0x5ea510(0x135)]['apiUrl']);}async[a54_0x1da4de(0x125)](_0xfc84c3){const _0xf8abff=a54_0x1da4de;try{await this['getOne'](_0xfc84c3);const _0x2aecdc=this[_0xf8abff(0x135)]['apiUrl'][_0xf8abff(0x130)](_0xf8abff(0x139),_0xf8abff(0x134));await this[_0xf8abff(0x133)][_0xf8abff(0x125)](_0x2aecdc+_0xf8abff(0x12e),{'data':{'name':'refs/heads/'+_0xfc84c3,'dryRun':![]}});}catch(_0x41046b){throw new bad_request_error_1[(_0xf8abff(0x12a))](_0x41046b);}}}function a54_0x50a7(_0x1caa3c,_0x728c2a){const _0x1f7dc5=a54_0xecb2();return a54_0x50a7=function(_0x1397c0,_0x3e8deb){_0x1397c0=_0x1397c0-0x11c;let _0xecb2a0=_0x1f7dc5[_0x1397c0];return _0xecb2a0;},a54_0x50a7(_0x1caa3c,_0x728c2a);}function a54_0xecb2(){const _0x4ee734=['constructor','476109LvNwzP','delete','../../git-api/services/bitbucket-server-api.service','30zDfGCy','2529888XUmyFd','./git-branch.service','BadRequestError','__importDefault','defineProperty','../../../core/errors/bad-request.error','/branches','27286191iqKMhk','replace','BitbucketServerBranchService','100830hEsRXs','request','/branch-utils/','repository','get','290vGrCyQ','9142576CREoKi','/api/','search','1680161EkGdEB','(((.+)+)+)+$','typedi','createRequest','BitbucketServerApiService','apply','242678ZORsEj','toString','__esModule'];a54_0xecb2=function(){return _0x4ee734;};return a54_0xecb2();}exports[a54_0x1da4de(0x131)]=BitbucketServerBranchService;