const a119_0x4dc33c=a119_0x53ad;function a119_0x3048(){const _0x21ca78=['combineRequestWithResponse','body','toString','graphErrors','(((.+)+)+)+$','constructor','message','183485KwAeVq','defineProperty','__esModule','search','length','132YRZooD','push','1196044UqHNmt','5655580dRdFQR','23647696dSjiNO','apply','compositeRequest','errors','toJSON','1757188ULITrL','CompositeGraphError','2139618wOUWXy','graphs','graphId','3449856vLtpxu'];a119_0x3048=function(){return _0x21ca78;};return a119_0x3048();}(function(_0x5d2830,_0x599ecf){const _0x1d29b8=a119_0x53ad,_0x51ceda=_0x5d2830();while(!![]){try{const _0x2cff9f=-parseInt(_0x1d29b8(0x14f))/0x1+-parseInt(_0x1d29b8(0x13d))/0x2+parseInt(_0x1d29b8(0x140))/0x3+parseInt(_0x1d29b8(0x13b))/0x4+parseInt(_0x1d29b8(0x148))/0x5*(-parseInt(_0x1d29b8(0x14d))/0x6)+-parseInt(_0x1d29b8(0x150))/0x7+parseInt(_0x1d29b8(0x136))/0x8;if(_0x2cff9f===_0x599ecf)break;else _0x51ceda['push'](_0x51ceda['shift']());}catch(_0x491d94){_0x51ceda['push'](_0x51ceda['shift']());}}}(a119_0x3048,0xa2214));const a119_0x210094=(function(){let _0x14e106=!![];return function(_0x3e850a,_0x4f3455){const _0x418d55=_0x14e106?function(){const _0xb794a5=a119_0x53ad;if(_0x4f3455){const _0x2f6d33=_0x4f3455[_0xb794a5(0x137)](_0x3e850a,arguments);return _0x4f3455=null,_0x2f6d33;}}:function(){};return _0x14e106=![],_0x418d55;};}()),a119_0x892dbd=a119_0x210094(this,function(){const _0x1bf6bb=a119_0x53ad;return a119_0x892dbd[_0x1bf6bb(0x143)]()[_0x1bf6bb(0x14b)]('(((.+)+)+)+$')[_0x1bf6bb(0x143)]()[_0x1bf6bb(0x146)](a119_0x892dbd)[_0x1bf6bb(0x14b)](_0x1bf6bb(0x145));});function a119_0x53ad(_0x141a5f,_0x11a177){const _0x4808f0=a119_0x3048();return a119_0x53ad=function(_0x892dbd,_0x210094){_0x892dbd=_0x892dbd-0x136;let _0x304887=_0x4808f0[_0x892dbd];return _0x304887;},a119_0x53ad(_0x141a5f,_0x11a177);}a119_0x892dbd();'use strict';Object[a119_0x4dc33c(0x149)](exports,a119_0x4dc33c(0x14a),{'value':!![]}),exports['CompositeGraphError']=void 0x0;const salesforce_error_1=require('./salesforce.error');class CompositeGraphError extends salesforce_error_1['SalesforceError']{constructor(_0x2cc4d7,_0xbcb70e,_0x573a41){const _0x5c8dcd=a119_0x4dc33c;super(_0x2cc4d7),this[_0x5c8dcd(0x144)]=[],this['combineRequestWithResponse'](_0xbcb70e,_0x573a41);}[a119_0x4dc33c(0x141)](_0x41323f,_0x46c321){const _0xa9dedf=a119_0x4dc33c;for(const _0x55e41e of _0x41323f){const _0x3d52eb=_0x55e41e[_0xa9dedf(0x138)],_0x1cb6bb=_0x46c321[_0xa9dedf(0x13e)]['find'](_0x1469b8=>_0x1469b8[_0xa9dedf(0x13f)]===_0x55e41e['graphId']);if(_0x1cb6bb){const _0x25f8a3={'graphId':_0x55e41e[_0xa9dedf(0x13f)],'errors':[]};for(let _0x29eb3f=0x0;_0x29eb3f<_0x3d52eb[_0xa9dedf(0x14c)];_0x29eb3f++){const _0x573d69=_0x3d52eb[_0x29eb3f],_0x19ff7f=_0x1cb6bb['graphResponse']['compositeResponse'][_0x29eb3f];_0x25f8a3[_0xa9dedf(0x139)][_0xa9dedf(0x14e)]({'method':_0x573d69['method'],'url':_0x573d69['url'],'requestBody':_0x573d69['body'],'responseBody':_0x19ff7f[_0xa9dedf(0x142)]});}this[_0xa9dedf(0x144)]['push'](_0x25f8a3);}}}[a119_0x4dc33c(0x13a)](){const _0x3958c5=a119_0x4dc33c;return{'message':this[_0x3958c5(0x147)],'errors':this[_0x3958c5(0x144)]};}}exports[a119_0x4dc33c(0x13c)]=CompositeGraphError;