function a48_0xd2d1(_0x34ad6a,_0x5b66c4){const _0x2bbad9=a48_0x3936();return a48_0xd2d1=function(_0xe78e58,_0x1e53d7){_0xe78e58=_0xe78e58-0xfb;let _0x39367e=_0x2bbad9[_0xe78e58];return _0x39367e;},a48_0xd2d1(_0x34ad6a,_0x5b66c4);}const a48_0x28a7a0=a48_0xd2d1;(function(_0x1e5704,_0x447a10){const _0x36c74a=a48_0xd2d1,_0x1b3946=_0x1e5704();while(!![]){try{const _0x3fd1d4=-parseInt(_0x36c74a(0xfc))/0x1+parseInt(_0x36c74a(0x105))/0x2+parseInt(_0x36c74a(0x100))/0x3*(-parseInt(_0x36c74a(0x114))/0x4)+-parseInt(_0x36c74a(0x115))/0x5+parseInt(_0x36c74a(0x121))/0x6*(parseInt(_0x36c74a(0x10d))/0x7)+parseInt(_0x36c74a(0xfe))/0x8+parseInt(_0x36c74a(0x118))/0x9;if(_0x3fd1d4===_0x447a10)break;else _0x1b3946['push'](_0x1b3946['shift']());}catch(_0x153779){_0x1b3946['push'](_0x1b3946['shift']());}}}(a48_0x3936,0x78505));const a48_0x1e53d7=(function(){let _0x4507d6=!![];return function(_0x3e3199,_0x3b808b){const _0x175cf=_0x4507d6?function(){const _0x513eac=a48_0xd2d1;if(_0x3b808b){const _0x13757d=_0x3b808b[_0x513eac(0x11e)](_0x3e3199,arguments);return _0x3b808b=null,_0x13757d;}}:function(){};return _0x4507d6=![],_0x175cf;};}()),a48_0xe78e58=a48_0x1e53d7(this,function(){const _0x49c0c3=a48_0xd2d1;return a48_0xe78e58[_0x49c0c3(0xfd)]()[_0x49c0c3(0x10c)](_0x49c0c3(0x107))[_0x49c0c3(0xfd)]()[_0x49c0c3(0x11c)](a48_0xe78e58)[_0x49c0c3(0x10c)](_0x49c0c3(0x107));});a48_0xe78e58();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x4770f1){const _0xb7b141=a48_0xd2d1;return _0x4770f1&&_0x4770f1[_0xb7b141(0x112)]?_0x4770f1:{'default':_0x4770f1};};Object[a48_0x28a7a0(0x106)](exports,a48_0x28a7a0(0x112),{'value':!![]}),require(a48_0x28a7a0(0x101)),require(a48_0x28a7a0(0x10f));const typedi_1=__importDefault(require(a48_0x28a7a0(0x109))),server_1=require(a48_0x28a7a0(0x10a)),proxy_controller_1=require(a48_0x28a7a0(0xff)),repos_controller_1=require(a48_0x28a7a0(0x119)),settings_config_service_1=require(a48_0x28a7a0(0x10b)),web_hooks_controller_1=require(a48_0x28a7a0(0x113)),app_settings_service_1=require(a48_0x28a7a0(0x11d)),provider_middleware_1=require('./modules/shared/provider.middleware'),pre_bootstrap_1=require(a48_0x28a7a0(0x102)),salesforce_logger_middleware_1=require(a48_0x28a7a0(0x111)),info_controller_1=require(a48_0x28a7a0(0x116));function a48_0x3936(){const _0x3b6fe1=['759146RTgpYk','defineProperty','(((.+)+)+)+$','Server','typedi','./core/server','./modules/shared/services/settings-config.service','search','7AIsDZO','default','./modules/config','WebHooksController','./modules/shared/salesforce-logger.middleware','__esModule','./modules/web-hooks/web-hooks.controller','59428YPEnfV','1468710siySlN','./modules/shared/info.controller','useMiddlewares','12922380VXZYYJ','./modules/repos/repos.controller','InfoController','preBootstrap','constructor','./modules/shared/services/app-settings.service','apply','get','useControllers','1015626DPdvBb','SettingsConfigService','port','714805LKeZzV','toString','2195160WUNLGA','./modules/proxy/proxy.controller','153VMnEAJ','reflect-metadata','./pre-bootstrap','run','ProxyController'];a48_0x3936=function(){return _0x3b6fe1;};return a48_0x3936();}async function bootstrap(){const _0x50afc0=a48_0x28a7a0;await settings_config_service_1[_0x50afc0(0x122)]['loadSettings']();const _0x3ae680=typedi_1[_0x50afc0(0x10e)][_0x50afc0(0x11f)](server_1[_0x50afc0(0x108)]),_0x4fb95b=typedi_1[_0x50afc0(0x10e)][_0x50afc0(0x11f)](app_settings_service_1['AppSettingsService']);_0x3ae680[_0x50afc0(0x117)](provider_middleware_1['ProviderMiddleware'],salesforce_logger_middleware_1['SalesforceLoggerMiddleware']),_0x3ae680[_0x50afc0(0x120)](repos_controller_1['ReposController'],proxy_controller_1[_0x50afc0(0x104)],web_hooks_controller_1[_0x50afc0(0x110)],info_controller_1[_0x50afc0(0x11a)]),await _0x3ae680[_0x50afc0(0x103)](_0x4fb95b[_0x50afc0(0xfb)]);}pre_bootstrap_1[a48_0x28a7a0(0x11b)]()['then'](bootstrap);