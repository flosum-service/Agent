const a56_0x2da0ae=a56_0x41df;(function(_0x2b3282,_0x468448){const _0x4a46f8=a56_0x41df,_0x57b345=_0x2b3282();while(!![]){try{const _0x59ecbe=-parseInt(_0x4a46f8(0x10b))/0x1+-parseInt(_0x4a46f8(0x102))/0x2+-parseInt(_0x4a46f8(0x119))/0x3*(-parseInt(_0x4a46f8(0x111))/0x4)+parseInt(_0x4a46f8(0x116))/0x5+-parseInt(_0x4a46f8(0x110))/0x6+-parseInt(_0x4a46f8(0x107))/0x7*(parseInt(_0x4a46f8(0x10f))/0x8)+parseInt(_0x4a46f8(0x109))/0x9*(parseInt(_0x4a46f8(0x108))/0xa);if(_0x59ecbe===_0x468448)break;else _0x57b345['push'](_0x57b345['shift']());}catch(_0x1f26f2){_0x57b345['push'](_0x57b345['shift']());}}}(a56_0x5a5a,0x53257));function a56_0x5a5a(){const _0x1f9988=['git/refs/heads/','849772picoIW','13566310tIPmWb','9qcyxiD','apiUrl','173557eCgZTP','GithubBranchService','./git-branch.service','request','32BQmZOv','804828qnHcwX','12GoPoVr','GitBranchService','BadRequestError','search','get','1533800dHDWWf','createRequest','constructor','46479RmLiIk','delete','__importDefault','toString','../../../core/errors/bad-request.error','(((.+)+)+)+$','1152048XWsDTi','__esModule','repository','typedi'];a56_0x5a5a=function(){return _0x1f9988;};return a56_0x5a5a();}const a56_0x469905=(function(){let _0x312319=!![];return function(_0x3b9239,_0x3c9c5f){const _0x4f47c7=_0x312319?function(){if(_0x3c9c5f){const _0x389580=_0x3c9c5f['apply'](_0x3b9239,arguments);return _0x3c9c5f=null,_0x389580;}}:function(){};return _0x312319=![],_0x4f47c7;};}()),a56_0x17351d=a56_0x469905(this,function(){const _0x3f4039=a56_0x41df;return a56_0x17351d[_0x3f4039(0xff)]()[_0x3f4039(0x114)](_0x3f4039(0x101))['toString']()[_0x3f4039(0x118)](a56_0x17351d)['search'](_0x3f4039(0x101));});function a56_0x41df(_0x404080,_0x33683b){const _0x53c12f=a56_0x5a5a();return a56_0x41df=function(_0x17351d,_0x469905){_0x17351d=_0x17351d-0xff;let _0x5a5a18=_0x53c12f[_0x17351d];return _0x5a5a18;},a56_0x41df(_0x404080,_0x33683b);}a56_0x17351d();'use strict';var __importDefault=this&&this[a56_0x2da0ae(0x11b)]||function(_0x3af4c8){const _0x22472d=a56_0x2da0ae;return _0x3af4c8&&_0x3af4c8[_0x22472d(0x103)]?_0x3af4c8:{'default':_0x3af4c8};};Object['defineProperty'](exports,a56_0x2da0ae(0x103),{'value':!![]}),exports['GithubBranchService']=void 0x0;const bad_request_error_1=require(a56_0x2da0ae(0x100)),github_api_service_1=require('../../git-api/services/github-api.service'),typedi_1=__importDefault(require(a56_0x2da0ae(0x105))),git_branch_service_1=require(a56_0x2da0ae(0x10d));class GithubBranchService extends git_branch_service_1[a56_0x2da0ae(0x112)]{constructor(_0x347c7f){const _0x29341f=a56_0x2da0ae;super(_0x347c7f),this[_0x29341f(0x10e)]=this[_0x29341f(0x117)]();}[a56_0x2da0ae(0x117)](){const _0x48d889=a56_0x2da0ae,_0x337563=typedi_1['default'][_0x48d889(0x115)](github_api_service_1['GithubApiService']);return _0x337563[_0x48d889(0x117)](this[_0x48d889(0x104)][_0x48d889(0x10a)]);}async[a56_0x2da0ae(0x11a)](_0x2148ee){const _0x56d124=a56_0x2da0ae;try{await this['request']['delete'](_0x56d124(0x106)+_0x2148ee);}catch(_0x1ec7d5){throw new bad_request_error_1[(_0x56d124(0x113))](_0x1ec7d5);}}}exports[a56_0x2da0ae(0x10c)]=GithubBranchService;