const a237_0x55f665=a237_0x439c;(function(_0x488197,_0xd40253){const _0x4676ff=a237_0x439c,_0x562e01=_0x488197();while(!![]){try{const _0x45a44b=parseInt(_0x4676ff(0xff))/0x1+-parseInt(_0x4676ff(0xe8))/0x2*(-parseInt(_0x4676ff(0xed))/0x3)+parseInt(_0x4676ff(0xec))/0x4+parseInt(_0x4676ff(0xf0))/0x5+parseInt(_0x4676ff(0xe9))/0x6+parseInt(_0x4676ff(0xfc))/0x7+parseInt(_0x4676ff(0x10b))/0x8*(-parseInt(_0x4676ff(0x105))/0x9);if(_0x45a44b===_0xd40253)break;else _0x562e01['push'](_0x562e01['shift']());}catch(_0x45dc6b){_0x562e01['push'](_0x562e01['shift']());}}}(a237_0x6700,0xb10e8));function a237_0x6700(){const _0x5559cd=['push','SalesforceLogger2','createSalesforceRequest','SalesforceError','request','./salesforce-rest.service','default','../errors/salesforce.error','post','[message]\x20%s','9476012XKwVTg','search','logger','476974QzfBZl','messages','log','SalesforceRestService','defineProperty','length','19075563YihXuP','services/apexrest','prefix','IGNORE_FLOSUM_GIT_NAMESPACE','removeLogger','splice','16HhuxKf','getPrefix','__importDefault','SalesforceAuthService','loggerId','FLOSUM_GIT_NAMESPACE','send','constructor','Log__c','2YGOlyh','1782264PjkxiY','./salesforce-auth.service','getLoggerId','4781440wcNXBc','1930974HTjrow','get','../../../../core','4987430ostdYP','__esModule'];a237_0x6700=function(){return _0x5559cd;};return a237_0x6700();}const a237_0x117e13=(function(){let _0x171088=!![];return function(_0xc74f51,_0x30322b){const _0x541c2d=_0x171088?function(){if(_0x30322b){const _0x51e4c7=_0x30322b['apply'](_0xc74f51,arguments);return _0x30322b=null,_0x51e4c7;}}:function(){};return _0x171088=![],_0x541c2d;};}()),a237_0x25d071=a237_0x117e13(this,function(){const _0x42f7e3=a237_0x439c;return a237_0x25d071['toString']()[_0x42f7e3(0xfd)]('(((.+)+)+)+$')['toString']()[_0x42f7e3(0xe6)](a237_0x25d071)['search']('(((.+)+)+)+$');});a237_0x25d071();'use strict';function a237_0x439c(_0x387bdc,_0x12169b){const _0x32f75d=a237_0x6700();return a237_0x439c=function(_0x25d071,_0x117e13){_0x25d071=_0x25d071-0xe0;let _0x67008a=_0x32f75d[_0x25d071];return _0x67008a;},a237_0x439c(_0x387bdc,_0x12169b);}var __importDefault=this&&this[a237_0x55f665(0xe1)]||function(_0x4d4cb9){const _0x29bffe=a237_0x55f665;return _0x4d4cb9&&_0x4d4cb9[_0x29bffe(0xf1)]?_0x4d4cb9:{'default':_0x4d4cb9};};Object[a237_0x55f665(0x103)](exports,a237_0x55f665(0xf1),{'value':!![]}),exports[a237_0x55f665(0xf3)]=void 0x0;const typedi_1=__importDefault(require('typedi')),constants_1=require('../../../../constants'),core_1=require(a237_0x55f665(0xef)),salesforce_error_1=require(a237_0x55f665(0xf9)),create_request_util_1=require('../utils/create-request.util'),salesforce_auth_service_1=require(a237_0x55f665(0xea)),salesforce_rest_service_1=require(a237_0x55f665(0xf7));class SalesforceLogger2{constructor(_0x401eba,_0x3cb094){const _0x5de0db=a237_0x55f665;this[_0x5de0db(0xe3)]=_0x401eba,this[_0x5de0db(0x107)]=_0x3cb094,this[_0x5de0db(0xf6)]=(0x0,create_request_util_1[_0x5de0db(0xf4)])(typedi_1[_0x5de0db(0xf8)][_0x5de0db(0xee)](salesforce_auth_service_1[_0x5de0db(0xe2)])),this[_0x5de0db(0xfe)]=new core_1['Logger'](SalesforceLogger2['name']),this[_0x5de0db(0x100)]=[];}['setLoggerId'](_0x19001e){const _0x445395=a237_0x55f665;this[_0x445395(0xe3)]=_0x19001e;}[a237_0x55f665(0xeb)](){return this['loggerId']||'';}[a237_0x55f665(0xe0)](){const _0x581210=a237_0x55f665;return this[_0x581210(0x107)]||'';}async[a237_0x55f665(0xe5)](){const _0x228cdb=a237_0x55f665;try{if(!this[_0x228cdb(0xe3)])return;const _0x3978f2=this[_0x228cdb(0x100)][_0x228cdb(0x10a)](0x0)['map'](_0x16a5eb=>''+(this['prefix']||'')+_0x16a5eb);this[_0x228cdb(0xe3)]&&_0x3978f2[_0x228cdb(0x104)]&&await this[_0x228cdb(0xf6)][_0x228cdb(0xfa)](_0x228cdb(0x106)+(constants_1[_0x228cdb(0x108)]?'':'/flosum_git')+'/logger',{'messages':_0x3978f2,'loggerId':this[_0x228cdb(0xe3)]});}catch(_0x3fad15){throw new salesforce_error_1[(_0x228cdb(0xf5))](_0x3fad15);}}['log'](_0x15f3fd){const _0x1201ca=a237_0x55f665;return this['logger'][_0x1201ca(0x101)](_0x1201ca(0xfb),_0x15f3fd),this[_0x1201ca(0x100)][_0x1201ca(0xf2)](_0x15f3fd),this;}static async['createLogger'](){const _0x5cf251=a237_0x55f665;try{const _0x357a46=typedi_1[_0x5cf251(0xf8)]['get'](salesforce_rest_service_1['SalesforceRestService']),_0x5820e5=await _0x357a46['post'](constants_1[_0x5cf251(0xe4)]+_0x5cf251(0xe7),{});return new SalesforceLogger2(_0x5820e5);}catch(_0x126181){throw new salesforce_error_1[(_0x5cf251(0xf5))](_0x126181);}}async[a237_0x55f665(0x109)](){const _0x45ede2=a237_0x55f665;try{if(!this[_0x45ede2(0xe3)])return;const _0x162276=typedi_1[_0x45ede2(0xf8)][_0x45ede2(0xee)](salesforce_rest_service_1[_0x45ede2(0x102)]);await _0x162276['delete'](constants_1[_0x45ede2(0xe4)]+_0x45ede2(0xe7),this['loggerId']),this[_0x45ede2(0xe3)]='',this['messages']=[];}catch(_0x7edb68){throw new salesforce_error_1[(_0x45ede2(0xf5))](_0x7edb68);}}}exports['SalesforceLogger2']=SalesforceLogger2;