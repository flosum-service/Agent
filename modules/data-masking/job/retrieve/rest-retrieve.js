const a79_0x2762b9=a79_0x25fb;(function(_0x4479d0,_0x461865){const _0x1eb567=a79_0x25fb,_0x5407eb=_0x4479d0();while(!![]){try{const _0x25650a=parseInt(_0x1eb567(0x161))/0x1+parseInt(_0x1eb567(0x156))/0x2*(-parseInt(_0x1eb567(0x15e))/0x3)+parseInt(_0x1eb567(0x150))/0x4+-parseInt(_0x1eb567(0x160))/0x5+parseInt(_0x1eb567(0x15b))/0x6*(parseInt(_0x1eb567(0x153))/0x7)+-parseInt(_0x1eb567(0x15d))/0x8*(-parseInt(_0x1eb567(0x15a))/0x9)+-parseInt(_0x1eb567(0x152))/0xa;if(_0x25650a===_0x461865)break;else _0x5407eb['push'](_0x5407eb['shift']());}catch(_0x4024c1){_0x5407eb['push'](_0x5407eb['shift']());}}}(a79_0x4e00,0x5164e));function a79_0x25fb(_0x5e95be,_0x5c2b06){const _0x382edf=a79_0x4e00();return a79_0x25fb=function(_0xfe94b0,_0x2cf806){_0xfe94b0=_0xfe94b0-0x14b;let _0x4e00d5=_0x382edf[_0xfe94b0];return _0x4e00d5;},a79_0x25fb(_0x5e95be,_0x5c2b06);}const a79_0x2cf806=(function(){let _0x3ebd4d=!![];return function(_0xd1f35c,_0x171812){const _0x166ba6=_0x3ebd4d?function(){const _0x5ebb04=a79_0x25fb;if(_0x171812){const _0x2c3267=_0x171812[_0x5ebb04(0x15f)](_0xd1f35c,arguments);return _0x171812=null,_0x2c3267;}}:function(){};return _0x3ebd4d=![],_0x166ba6;};}()),a79_0xfe94b0=a79_0x2cf806(this,function(){const _0xf0e14=a79_0x25fb;return a79_0xfe94b0[_0xf0e14(0x159)]()[_0xf0e14(0x151)](_0xf0e14(0x15c))[_0xf0e14(0x159)]()[_0xf0e14(0x154)](a79_0xfe94b0)[_0xf0e14(0x151)](_0xf0e14(0x15c));});function a79_0x4e00(){const _0x436b8c=['909VoAJAt','1038jnjCPI','(((.+)+)+)+$','40952ZLRmZV','3ouRQRS','apply','1220960ooFPnK','217452JMjULG','length','MAX_RETRIEVE_RECORDS','_records','./base-retrieve','getIsDone','baseRetrievePayload','BaseRetrieve','retrieve','pull','shift','382052VjIxMF','search','7274870POuwBY','23058uitSuV','constructor','RestRetrieve','189554SEUiAY','__esModule','@flosum/salesforce','toString'];a79_0x4e00=function(){return _0x436b8c;};return a79_0x4e00();}a79_0xfe94b0();'use strict';Object['defineProperty'](exports,a79_0x2762b9(0x157),{'value':!![]}),exports[a79_0x2762b9(0x155)]=void 0x0;const base_retrieve_1=require(a79_0x2762b9(0x165)),salesforce_1=require(a79_0x2762b9(0x158));class RestRetrieve extends base_retrieve_1[a79_0x2762b9(0x14c)]{constructor(_0x2077c2){const _0x41b1ac=a79_0x2762b9;super(_0x2077c2),this[_0x41b1ac(0x164)]=[],this['retrieve']=new salesforce_1['CompositeRetrieveData']({...this[_0x41b1ac(0x14b)],'maxRecords':RestRetrieve[_0x41b1ac(0x163)]});}async[a79_0x2762b9(0x14e)](){const _0x399c4b=a79_0x2762b9;if(this[_0x399c4b(0x14d)][_0x399c4b(0x166)]()&&!this[_0x399c4b(0x164)]['length']){this['push'](null);return;}if(!this['_records'][_0x399c4b(0x162)]){const {records:_0x7fd662}=await this['retrieve']['execute']();if(!_0x7fd662['length'])return this[_0x399c4b(0x14e)]();this[_0x399c4b(0x164)]=_0x7fd662;}const _0xa31011=this[_0x399c4b(0x164)][_0x399c4b(0x14f)]();this['push'](_0xa31011);}}exports['RestRetrieve']=RestRetrieve,RestRetrieve[a79_0x2762b9(0x163)]=0x7d0;