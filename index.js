function a48_0x22ee(){const _0x1ceba6=['11KixiBb','125984QCzpSF','16IdElMh','loadSettings','./modules/shared/info.controller','./modules/repos/repos.controller','useControllers','typedi','28NLDIvf','__esModule','SalesforceLoggerMiddleware','406fKlZUj','useMiddlewares','30363bzoDCy','AppSettingsService','(((.+)+)+)+$','./modules/shared/services/app-settings.service','__importDefault','334524QaeHog','port','10rKHyUu','3209067IXhySl','1007802pJvWnw','InfoController','apply','search','455990FImbwL','ProviderMiddleware','default','toString','then','get','./core/server','172999jDzYcT','./modules/proxy/proxy.controller'];a48_0x22ee=function(){return _0x1ceba6;};return a48_0x22ee();}const a48_0x8d906a=a48_0x22dc;(function(_0x588d1a,_0x460ab6){const _0x10250d=a48_0x22dc,_0x12eec8=_0x588d1a();while(!![]){try{const _0xd6cd59=parseInt(_0x10250d(0x1b1))/0x1+parseInt(_0x10250d(0x1b5))/0x2*(-parseInt(_0x10250d(0x1c0))/0x3)+parseInt(_0x10250d(0x1bb))/0x4*(-parseInt(_0x10250d(0x1aa))/0x5)+parseInt(_0x10250d(0x1a6))/0x6+parseInt(_0x10250d(0x1be))/0x7*(parseInt(_0x10250d(0x1b4))/0x8)+parseInt(_0x10250d(0x1a5))/0x9*(parseInt(_0x10250d(0x1a4))/0xa)+-parseInt(_0x10250d(0x1b3))/0xb*(-parseInt(_0x10250d(0x1a2))/0xc);if(_0xd6cd59===_0x460ab6)break;else _0x12eec8['push'](_0x12eec8['shift']());}catch(_0x4d793a){_0x12eec8['push'](_0x12eec8['shift']());}}}(a48_0x22ee,0xe078c));const a48_0xe25500=(function(){let _0x1edf40=!![];return function(_0x272e29,_0x2956fb){const _0x480f0c=_0x1edf40?function(){const _0x11dc3c=a48_0x22dc;if(_0x2956fb){const _0x3220ee=_0x2956fb[_0x11dc3c(0x1a8)](_0x272e29,arguments);return _0x2956fb=null,_0x3220ee;}}:function(){};return _0x1edf40=![],_0x480f0c;};}()),a48_0x1ddd92=a48_0xe25500(this,function(){const _0x1fd214=a48_0x22dc;return a48_0x1ddd92[_0x1fd214(0x1ad)]()[_0x1fd214(0x1a9)](_0x1fd214(0x19f))['toString']()['constructor'](a48_0x1ddd92)[_0x1fd214(0x1a9)](_0x1fd214(0x19f));});a48_0x1ddd92();'use strict';var __importDefault=this&&this[a48_0x8d906a(0x1a1)]||function(_0x4fcae0){const _0x295d6b=a48_0x8d906a;return _0x4fcae0&&_0x4fcae0[_0x295d6b(0x1bc)]?_0x4fcae0:{'default':_0x4fcae0};};Object['defineProperty'](exports,a48_0x8d906a(0x1bc),{'value':!![]}),require('reflect-metadata'),require('./modules/config');const typedi_1=__importDefault(require(a48_0x8d906a(0x1ba))),server_1=require(a48_0x8d906a(0x1b0)),proxy_controller_1=require(a48_0x8d906a(0x1b2)),repos_controller_1=require(a48_0x8d906a(0x1b8)),settings_config_service_1=require('./modules/shared/services/settings-config.service'),web_hooks_controller_1=require('./modules/web-hooks/web-hooks.controller'),app_settings_service_1=require(a48_0x8d906a(0x1a0)),provider_middleware_1=require('./modules/shared/provider.middleware'),pre_bootstrap_1=require('./pre-bootstrap'),salesforce_logger_middleware_1=require('./modules/shared/salesforce-logger.middleware'),info_controller_1=require(a48_0x8d906a(0x1b7));function a48_0x22dc(_0x4e8fef,_0x593bf1){const _0x3a3261=a48_0x22ee();return a48_0x22dc=function(_0x1ddd92,_0xe25500){_0x1ddd92=_0x1ddd92-0x19e;let _0x22eef1=_0x3a3261[_0x1ddd92];return _0x22eef1;},a48_0x22dc(_0x4e8fef,_0x593bf1);}async function bootstrap(){const _0x1af2d3=a48_0x8d906a;await settings_config_service_1['SettingsConfigService'][_0x1af2d3(0x1b6)]();const _0x32d7c3=typedi_1['default'][_0x1af2d3(0x1af)](server_1['Server']),_0xf8bd7=typedi_1[_0x1af2d3(0x1ac)][_0x1af2d3(0x1af)](app_settings_service_1[_0x1af2d3(0x19e)]);_0x32d7c3[_0x1af2d3(0x1bf)](provider_middleware_1[_0x1af2d3(0x1ab)],salesforce_logger_middleware_1[_0x1af2d3(0x1bd)]),_0x32d7c3[_0x1af2d3(0x1b9)](repos_controller_1['ReposController'],proxy_controller_1['ProxyController'],web_hooks_controller_1['WebHooksController'],info_controller_1[_0x1af2d3(0x1a7)]),await _0x32d7c3['run'](_0xf8bd7[_0x1af2d3(0x1a3)]);}pre_bootstrap_1['preBootstrap']()[a48_0x8d906a(0x1ae)](bootstrap);