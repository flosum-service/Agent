const a237_0xfd396b=a237_0xf4bb;(function(_0xc0c559,_0x3ba6ca){const _0x486d4b=a237_0xf4bb,_0x5a9626=_0xc0c559();while(!![]){try{const _0x5ddad4=-parseInt(_0x486d4b(0x92))/0x1*(parseInt(_0x486d4b(0x84))/0x2)+-parseInt(_0x486d4b(0x7b))/0x3*(-parseInt(_0x486d4b(0x9a))/0x4)+-parseInt(_0x486d4b(0x81))/0x5*(parseInt(_0x486d4b(0x8c))/0x6)+-parseInt(_0x486d4b(0x80))/0x7*(parseInt(_0x486d4b(0x8e))/0x8)+parseInt(_0x486d4b(0x93))/0x9+parseInt(_0x486d4b(0x8a))/0xa*(parseInt(_0x486d4b(0x7c))/0xb)+-parseInt(_0x486d4b(0x82))/0xc;if(_0x5ddad4===_0x3ba6ca)break;else _0x5a9626['push'](_0x5a9626['shift']());}catch(_0x2811b3){_0x5a9626['push'](_0x5a9626['shift']());}}}(a237_0x48ee,0x6463d));function a237_0xf4bb(_0x26ff15,_0x1d0ca6){const _0xfa7a3=a237_0x48ee();return a237_0xf4bb=function(_0x5088cb,_0x3a0d96){_0x5088cb=_0x5088cb-0x6a;let _0x48ee94=_0xfa7a3[_0x5088cb];return _0x48ee94;},a237_0xf4bb(_0x26ff15,_0x1d0ca6);}const a237_0x3a0d96=(function(){let _0x53ba89=!![];return function(_0x69f078,_0x74e011){const _0x133119=_0x53ba89?function(){const _0x3b44bd=a237_0xf4bb;if(_0x74e011){const _0x2525e9=_0x74e011[_0x3b44bd(0x76)](_0x69f078,arguments);return _0x74e011=null,_0x2525e9;}}:function(){};return _0x53ba89=![],_0x133119;};}()),a237_0x5088cb=a237_0x3a0d96(this,function(){const _0x1e43d9=a237_0xf4bb;return a237_0x5088cb[_0x1e43d9(0x6e)]()['search'](_0x1e43d9(0x94))[_0x1e43d9(0x6e)]()[_0x1e43d9(0x87)](a237_0x5088cb)[_0x1e43d9(0x78)](_0x1e43d9(0x94));});a237_0x5088cb();function a237_0x48ee(){const _0x41a196=['../errors/salesforce.error','getPrefix','SalesforceLogger2','__esModule','FLOSUM_GIT_NAMESPACE','5332OjZiFc','log','splice','../utils/create-request.util','default','Log__c','toString','name','./salesforce-auth.service','/logger','setLoggerId','prefix','Logger','request','apply','SalesforceRestService','search','[message]\x20%s','post','1095pUUAWP','451dDYmRk','IGNORE_FLOSUM_GIT_NAMESPACE','delete','messages','6433NrXzpV','84965MMtTRt','3664476IIdWUp','getLoggerId','8ZyaiqX','SalesforceError','get','constructor','map','createSalesforceRequest','158090dwpjAt','/flosum_git','102wnZvZM','length','3336BQmFgs','loggerId','logger','SalesforceAuthService','136694FahRUb','7206624Xlwlku','(((.+)+)+)+$'];a237_0x48ee=function(){return _0x41a196;};return a237_0x48ee();}'use strict';var __importDefault=this&&this['__importDefault']||function(_0x592bb4){const _0x160504=a237_0xf4bb;return _0x592bb4&&_0x592bb4[_0x160504(0x98)]?_0x592bb4:{'default':_0x592bb4};};Object['defineProperty'](exports,a237_0xfd396b(0x98),{'value':!![]}),exports[a237_0xfd396b(0x97)]=void 0x0;const typedi_1=__importDefault(require('typedi')),constants_1=require('../../../../constants'),core_1=require('../../../../core'),salesforce_error_1=require(a237_0xfd396b(0x95)),create_request_util_1=require(a237_0xfd396b(0x6b)),salesforce_auth_service_1=require(a237_0xfd396b(0x70)),salesforce_rest_service_1=require('./salesforce-rest.service');class SalesforceLogger2{constructor(_0x577bc7,_0x2438fd){const _0x85b40f=a237_0xfd396b;this[_0x85b40f(0x8f)]=_0x577bc7,this['prefix']=_0x2438fd,this[_0x85b40f(0x75)]=(0x0,create_request_util_1[_0x85b40f(0x89)])(typedi_1['default'][_0x85b40f(0x86)](salesforce_auth_service_1[_0x85b40f(0x91)])),this[_0x85b40f(0x90)]=new core_1[(_0x85b40f(0x74))](SalesforceLogger2[_0x85b40f(0x6f)]),this[_0x85b40f(0x7f)]=[];}[a237_0xfd396b(0x72)](_0x2e8b7c){const _0x328155=a237_0xfd396b;this[_0x328155(0x8f)]=_0x2e8b7c;}[a237_0xfd396b(0x83)](){const _0x69ed6a=a237_0xfd396b;return this[_0x69ed6a(0x8f)]||'';}[a237_0xfd396b(0x96)](){return this['prefix']||'';}async['send'](){const _0x24aa1e=a237_0xfd396b;try{if(!this[_0x24aa1e(0x8f)])return;const _0x18f113=this['messages'][_0x24aa1e(0x6a)](0x0)[_0x24aa1e(0x88)](_0x30654b=>''+(this[_0x24aa1e(0x73)]||'')+_0x30654b);this[_0x24aa1e(0x8f)]&&_0x18f113[_0x24aa1e(0x8d)]&&await this['request'][_0x24aa1e(0x7a)]('services/apexrest'+(constants_1[_0x24aa1e(0x7d)]?'':_0x24aa1e(0x8b))+_0x24aa1e(0x71),{'messages':_0x18f113,'loggerId':this[_0x24aa1e(0x8f)]});}catch(_0x155ab8){throw new salesforce_error_1['SalesforceError'](_0x155ab8);}}[a237_0xfd396b(0x9b)](_0xc6d123){const _0xc6a6e6=a237_0xfd396b;return this[_0xc6a6e6(0x90)][_0xc6a6e6(0x9b)](_0xc6a6e6(0x79),_0xc6d123),this[_0xc6a6e6(0x7f)]['push'](_0xc6d123),this;}static async['createLogger'](){const _0x1f8552=a237_0xfd396b;try{const _0x44180c=typedi_1['default'][_0x1f8552(0x86)](salesforce_rest_service_1[_0x1f8552(0x77)]),_0x33614f=await _0x44180c[_0x1f8552(0x7a)](constants_1[_0x1f8552(0x99)]+_0x1f8552(0x6d),{});return new SalesforceLogger2(_0x33614f);}catch(_0x422463){throw new salesforce_error_1[(_0x1f8552(0x85))](_0x422463);}}async['removeLogger'](){const _0x36ed0a=a237_0xfd396b;try{if(!this[_0x36ed0a(0x8f)])return;const _0x261088=typedi_1[_0x36ed0a(0x6c)]['get'](salesforce_rest_service_1['SalesforceRestService']);await _0x261088[_0x36ed0a(0x7e)](constants_1[_0x36ed0a(0x99)]+_0x36ed0a(0x6d),this[_0x36ed0a(0x8f)]),this['loggerId']='',this['messages']=[];}catch(_0x304158){throw new salesforce_error_1[(_0x36ed0a(0x85))](_0x304158);}}}exports['SalesforceLogger2']=SalesforceLogger2;