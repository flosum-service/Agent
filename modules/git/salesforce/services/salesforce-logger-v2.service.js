const a275_0x31c23d=a275_0x44d1;(function(_0xf938b0,_0x54583a){const _0xbd9247=a275_0x44d1,_0x3ec252=_0xf938b0();while(!![]){try{const _0x300faf=parseInt(_0xbd9247(0x211))/0x1*(-parseInt(_0xbd9247(0x1e5))/0x2)+parseInt(_0xbd9247(0x202))/0x3+-parseInt(_0xbd9247(0x1ef))/0x4+parseInt(_0xbd9247(0x1f6))/0x5+-parseInt(_0xbd9247(0x1fb))/0x6*(parseInt(_0xbd9247(0x1e6))/0x7)+-parseInt(_0xbd9247(0x1fd))/0x8*(-parseInt(_0xbd9247(0x1e3))/0x9)+parseInt(_0xbd9247(0x1ea))/0xa;if(_0x300faf===_0x54583a)break;else _0x3ec252['push'](_0x3ec252['shift']());}catch(_0x5041a8){_0x3ec252['push'](_0x3ec252['shift']());}}}(a275_0x2cac,0x579ec));const a275_0x19ae29=(function(){let _0x1976f8=!![];return function(_0x1fa172,_0x3bb1ac){const _0x3e2f55=_0x1976f8?function(){if(_0x3bb1ac){const _0x33bbce=_0x3bb1ac['apply'](_0x1fa172,arguments);return _0x3bb1ac=null,_0x33bbce;}}:function(){};return _0x1976f8=![],_0x3e2f55;};}()),a275_0xfc61a5=a275_0x19ae29(this,function(){const _0x1cea68=a275_0x44d1;return a275_0xfc61a5[_0x1cea68(0x1ee)]()[_0x1cea68(0x210)](_0x1cea68(0x1f0))[_0x1cea68(0x1ee)]()['constructor'](a275_0xfc61a5)[_0x1cea68(0x210)](_0x1cea68(0x1f0));});a275_0xfc61a5();'use strict';var __importDefault=this&&this[a275_0x31c23d(0x201)]||function(_0x2343ea){const _0x24541d=a275_0x31c23d;return _0x2343ea&&_0x2343ea[_0x24541d(0x204)]?_0x2343ea:{'default':_0x2343ea};};function a275_0x44d1(_0x5c6e4b,_0x1d7cb0){const _0x2cd3bc=a275_0x2cac();return a275_0x44d1=function(_0xfc61a5,_0x19ae29){_0xfc61a5=_0xfc61a5-0x1e1;let _0x2cacf1=_0x2cd3bc[_0xfc61a5];return _0x2cacf1;},a275_0x44d1(_0x5c6e4b,_0x1d7cb0);}Object['defineProperty'](exports,a275_0x31c23d(0x204),{'value':!![]}),exports[a275_0x31c23d(0x20d)]=void 0x0;const typedi_1=__importDefault(require(a275_0x31c23d(0x20a))),constants_1=require(a275_0x31c23d(0x1eb)),core_1=require(a275_0x31c23d(0x1fe)),salesforce_error_1=require(a275_0x31c23d(0x1fa)),create_request_util_1=require(a275_0x31c23d(0x1e7)),salesforce_auth_service_1=require(a275_0x31c23d(0x206)),salesforce_rest_service_1=require('./salesforce-rest.service');class SalesforceLogger2{constructor(_0x26acd4,_0x37951a){const _0x20e59f=a275_0x31c23d;this['loggerId']=_0x26acd4,this[_0x20e59f(0x1e9)]=_0x37951a,this['request']=(0x0,create_request_util_1['createSalesforceRequest'])(typedi_1[_0x20e59f(0x20c)]['get'](salesforce_auth_service_1[_0x20e59f(0x1fc)])),this[_0x20e59f(0x20f)]=new core_1[(_0x20e59f(0x212))](SalesforceLogger2[_0x20e59f(0x1e8)]),this[_0x20e59f(0x208)]=[];}[a275_0x31c23d(0x205)](_0x251d27){this['loggerId']=_0x251d27;}['getLoggerId'](){const _0x188ea9=a275_0x31c23d;return this[_0x188ea9(0x203)]||'';}[a275_0x31c23d(0x1ff)](){const _0x4d6ece=a275_0x31c23d;return this[_0x4d6ece(0x1e9)]||'';}async[a275_0x31c23d(0x20e)](){const _0x59f24b=a275_0x31c23d;try{if(!this[_0x59f24b(0x203)])return;const _0x2bed94=this[_0x59f24b(0x208)][_0x59f24b(0x207)](0x0)['map'](_0x15d0a2=>''+(this[_0x59f24b(0x1e9)]||'')+_0x15d0a2);this[_0x59f24b(0x203)]&&_0x2bed94[_0x59f24b(0x1f1)]&&await this[_0x59f24b(0x1f3)][_0x59f24b(0x1f2)](_0x59f24b(0x1f7)+(constants_1[_0x59f24b(0x1ec)]?'':_0x59f24b(0x1e1))+_0x59f24b(0x1f8),{'messages':_0x2bed94,'loggerId':this[_0x59f24b(0x203)]});}catch(_0x285bc1){throw new salesforce_error_1[(_0x59f24b(0x1ed))](_0x285bc1);}}['log'](_0x18b690){const _0xc46f30=a275_0x31c23d;return this[_0xc46f30(0x20f)][_0xc46f30(0x209)](_0xc46f30(0x1e4),_0x18b690),this[_0xc46f30(0x208)][_0xc46f30(0x20b)](_0x18b690),this;}static async['createLogger'](){const _0x365297=a275_0x31c23d;try{const _0x5c10b0=typedi_1[_0x365297(0x20c)][_0x365297(0x1f9)](salesforce_rest_service_1[_0x365297(0x200)]),_0x42294a=await _0x5c10b0[_0x365297(0x1f2)](constants_1[_0x365297(0x1e2)]+_0x365297(0x1f5),{});return new SalesforceLogger2(_0x42294a);}catch(_0x2aeddc){throw new salesforce_error_1[(_0x365297(0x1ed))](_0x2aeddc);}}async['removeLogger'](){const _0x1dd27b=a275_0x31c23d;try{if(!this[_0x1dd27b(0x203)])return;const _0x25da4a=typedi_1['default'][_0x1dd27b(0x1f9)](salesforce_rest_service_1[_0x1dd27b(0x200)]);await _0x25da4a[_0x1dd27b(0x1f4)](constants_1[_0x1dd27b(0x1e2)]+_0x1dd27b(0x1f5),this['loggerId']),this[_0x1dd27b(0x203)]='',this['messages']=[];}catch(_0x575a83){throw new salesforce_error_1[(_0x1dd27b(0x1ed))](_0x575a83);}}}function a275_0x2cac(){const _0x42731b=['SalesforceLogger2','send','logger','search','7707gfhheS','Logger','/flosum_git','FLOSUM_GIT_NAMESPACE','216SyWXYy','[message]\x20%s','162gNbWQL','7UOkFmO','../utils/create-request.util','name','prefix','13348710GdXxMa','../../../../constants','IGNORE_FLOSUM_GIT_NAMESPACE','SalesforceError','toString','2012904LVkMwo','(((.+)+)+)+$','length','post','request','delete','Log__c','333755uDMSeW','services/apexrest','/logger','get','../errors/salesforce.error','2361228lOvzao','SalesforceAuthService','14336dMoBJn','../../../../core','getPrefix','SalesforceRestService','__importDefault','1305879YJMsLN','loggerId','__esModule','setLoggerId','./salesforce-auth.service','splice','messages','log','typedi','push','default'];a275_0x2cac=function(){return _0x42731b;};return a275_0x2cac();}exports[a275_0x31c23d(0x20d)]=SalesforceLogger2;