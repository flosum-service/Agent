const a52_0x514991=a52_0xb8cc;(function(_0x1dd991,_0x590cb1){const _0x15b800=a52_0xb8cc,_0x1c5ea1=_0x1dd991();while(!![]){try{const _0x5b4576=parseInt(_0x15b800(0x161))/0x1*(parseInt(_0x15b800(0x162))/0x2)+parseInt(_0x15b800(0x168))/0x3*(parseInt(_0x15b800(0x154))/0x4)+parseInt(_0x15b800(0x164))/0x5*(-parseInt(_0x15b800(0x170))/0x6)+parseInt(_0x15b800(0x15a))/0x7+parseInt(_0x15b800(0x16e))/0x8+-parseInt(_0x15b800(0x155))/0x9*(parseInt(_0x15b800(0x152))/0xa)+-parseInt(_0x15b800(0x16d))/0xb*(parseInt(_0x15b800(0x16b))/0xc);if(_0x5b4576===_0x590cb1)break;else _0x1c5ea1['push'](_0x1c5ea1['shift']());}catch(_0x36a56e){_0x1c5ea1['push'](_0x1c5ea1['shift']());}}}(a52_0x2254,0xd5ad2));const a52_0x37d3c7=(function(){let _0x2a3ade=!![];return function(_0x1998fb,_0x53b29e){const _0x3383cc=_0x2a3ade?function(){if(_0x53b29e){const _0x5583ef=_0x53b29e['apply'](_0x1998fb,arguments);return _0x53b29e=null,_0x5583ef;}}:function(){};return _0x2a3ade=![],_0x3383cc;};}()),a52_0x5d2206=a52_0x37d3c7(this,function(){const _0x4249b0=a52_0xb8cc;return a52_0x5d2206['toString']()['search']('(((.+)+)+)+$')['toString']()[_0x4249b0(0x158)](a52_0x5d2206)[_0x4249b0(0x160)](_0x4249b0(0x15f));});a52_0x5d2206();function a52_0x2254(){const _0x102837=['getOne','(((.+)+)+)+$','search','133522JlhJpQ','2rSAHIU','GitBranchService','5kBFPYX','__esModule','request','refs/heads/','1401426IGAPYe','typedi','AzureBranchService','348624IuaVbP','../../../core/errors/bad-request.error','462pkKaAt','13673536gOMBpQ','refs','6321666pundyz','4864130WHTYDC','0000000000000000000000000000000000000000','12lOmmQt','18YGWGyN','repository','./git-branch.service','constructor','AzureApiService','6143893uHWhfk','../../git-api/services/azure-api.service','createRequest','__importDefault'];a52_0x2254=function(){return _0x102837;};return a52_0x2254();}'use strict';function a52_0xb8cc(_0x3e8f36,_0x283962){const _0x2e90f8=a52_0x2254();return a52_0xb8cc=function(_0x5d2206,_0x37d3c7){_0x5d2206=_0x5d2206-0x152;let _0x22541e=_0x2e90f8[_0x5d2206];return _0x22541e;},a52_0xb8cc(_0x3e8f36,_0x283962);}var __importDefault=this&&this[a52_0x514991(0x15d)]||function(_0x3aa1e4){return _0x3aa1e4&&_0x3aa1e4['__esModule']?_0x3aa1e4:{'default':_0x3aa1e4};};Object['defineProperty'](exports,a52_0x514991(0x165),{'value':!![]}),exports[a52_0x514991(0x16a)]=void 0x0;const bad_request_error_1=require(a52_0x514991(0x16c)),azure_api_service_1=require(a52_0x514991(0x15b)),typedi_1=__importDefault(require(a52_0x514991(0x169))),git_branch_service_1=require(a52_0x514991(0x157));class AzureBranchService extends git_branch_service_1[a52_0x514991(0x163)]{constructor(_0x41f98a){const _0x40cf13=a52_0x514991;super(_0x41f98a),this[_0x40cf13(0x166)]=this['createRequest']();}[a52_0x514991(0x15c)](){const _0x29013e=a52_0x514991,_0x285c85=typedi_1['default']['get'](azure_api_service_1[_0x29013e(0x159)]);return _0x285c85[_0x29013e(0x15c)](this[_0x29013e(0x156)]['apiUrl']);}async['delete'](_0x21c028){const _0x5ee969=a52_0x514991;try{await this[_0x5ee969(0x15e)](_0x21c028),await this[_0x5ee969(0x166)]['post'](_0x5ee969(0x16f),[{'name':_0x5ee969(0x167)+_0x21c028,'newObjectId':_0x5ee969(0x153),'oldObjectId':_0x5ee969(0x153)}]);}catch(_0x4374a3){throw new bad_request_error_1['BadRequestError'](_0x4374a3);}}}exports[a52_0x514991(0x16a)]=AzureBranchService;