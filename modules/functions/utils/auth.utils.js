const a107_0x289f86=a107_0x6661;(function(_0x50dfdd,_0x37a390){const _0x521673=a107_0x6661,_0x182117=_0x50dfdd();while(!![]){try{const _0x530399=parseInt(_0x521673(0x165))/0x1+-parseInt(_0x521673(0x16f))/0x2+-parseInt(_0x521673(0x16d))/0x3+parseInt(_0x521673(0x164))/0x4*(parseInt(_0x521673(0x160))/0x5)+-parseInt(_0x521673(0x16a))/0x6+-parseInt(_0x521673(0x15d))/0x7+parseInt(_0x521673(0x166))/0x8;if(_0x530399===_0x37a390)break;else _0x182117['push'](_0x182117['shift']());}catch(_0x186f7d){_0x182117['push'](_0x182117['shift']());}}}(a107_0x5dd9,0x548e8));function a107_0x6661(_0x8dc8ae,_0x11c6dc){const _0x233d5=a107_0x5dd9();return a107_0x6661=function(_0x38a7bb,_0xa314c9){_0x38a7bb=_0x38a7bb-0x158;let _0x5dd9e4=_0x233d5[_0x38a7bb];return _0x5dd9e4;},a107_0x6661(_0x8dc8ae,_0x11c6dc);}const a107_0xa314c9=(function(){let _0x16a522=!![];return function(_0x4b948a,_0x4a3d66){const _0xa0f280=_0x16a522?function(){const _0x4706a6=a107_0x6661;if(_0x4a3d66){const _0x4977d0=_0x4a3d66[_0x4706a6(0x15a)](_0x4b948a,arguments);return _0x4a3d66=null,_0x4977d0;}}:function(){};return _0x16a522=![],_0xa0f280;};}()),a107_0x38a7bb=a107_0xa314c9(this,function(){const _0x338a80=a107_0x6661;return a107_0x38a7bb[_0x338a80(0x158)]()['search'](_0x338a80(0x16b))[_0x338a80(0x158)]()['constructor'](a107_0x38a7bb)[_0x338a80(0x15c)](_0x338a80(0x16b));});a107_0x38a7bb();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x1a2419){const _0x57676b=a107_0x6661;return _0x1a2419&&_0x1a2419[_0x57676b(0x168)]?_0x1a2419:{'default':_0x1a2419};};function a107_0x5dd9(){const _0x4ad469=['787760KoQmGx','updateAccessToken','SALESFORCE_TOKEN','/services/oauth2/token','toString','refresh_token','apply','access_token','search','1737155kpbGsE','AuthUtils','One\x20of\x20the\x20parameters\x20is\x20missing','490bTkSXw','split','axios','defineProperty','5620nRXHSt','605525CUIrrq','4348048AIsGgU','getAuthParameters','__esModule','trim','415332UcvYzu','(((.+)+)+)+$','default','687330sjOMja','env'];a107_0x5dd9=function(){return _0x4ad469;};return a107_0x5dd9();}Object[a107_0x289f86(0x163)](exports,a107_0x289f86(0x168),{'value':!![]}),exports[a107_0x289f86(0x15e)]=void 0x0;const axios_1=__importDefault(require(a107_0x289f86(0x162)));class AuthUtils{static async[a107_0x289f86(0x170)](_0x4f72f0,_0x19b42c,_0x4d099a,_0x413b05){const _0x470846=a107_0x289f86,{data:_0xa34a27}=await axios_1[_0x470846(0x16c)]['post'](_0x4f72f0+_0x470846(0x172),null,{'params':{'grant_type':_0x470846(0x159),'refresh_token':_0x19b42c,'client_id':_0x4d099a,'client_secret':_0x413b05}});return _0xa34a27[_0x470846(0x15b)];}static[a107_0x289f86(0x167)](_0x3be2d3){const _0x59e4f8=a107_0x289f86,_0x55c1b3=process[_0x59e4f8(0x16e)][_0x59e4f8(0x171)];if(!_0x55c1b3)throw new Error('Salesforce\x20token\x20missing');const [_0x535d71,_0x46acee,_0x40ae8a,_0x5111f8]=_0x55c1b3[_0x59e4f8(0x169)]()[_0x59e4f8(0x161)]('\x20');if(!_0x535d71||!_0x46acee||!_0x40ae8a||!_0x5111f8)throw new Error(_0x59e4f8(0x15f));return{'instanceUrl':_0x3be2d3,'refreshToken':_0x535d71,'clientId':_0x46acee,'clientSecret':_0x40ae8a};}}exports[a107_0x289f86(0x15e)]=AuthUtils;