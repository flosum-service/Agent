const a62_0x1c9640=a62_0x2adc;(function(_0x11a667,_0x23f533){const _0x42c4b6=a62_0x2adc,_0x209049=_0x11a667();while(!![]){try{const _0x6b1ff1=-parseInt(_0x42c4b6(0x1cd))/0x1+-parseInt(_0x42c4b6(0x1d2))/0x2+-parseInt(_0x42c4b6(0x1c6))/0x3*(parseInt(_0x42c4b6(0x1d0))/0x4)+-parseInt(_0x42c4b6(0x1bf))/0x5*(parseInt(_0x42c4b6(0x1be))/0x6)+-parseInt(_0x42c4b6(0x1d5))/0x7+-parseInt(_0x42c4b6(0x1d1))/0x8+parseInt(_0x42c4b6(0x1cb))/0x9;if(_0x6b1ff1===_0x23f533)break;else _0x209049['push'](_0x209049['shift']());}catch(_0x528018){_0x209049['push'](_0x209049['shift']());}}}(a62_0x1688,0xea51b));const a62_0x4f56e0=(function(){let _0x492889=!![];return function(_0x54e3a6,_0x4beb9a){const _0x596c77=_0x492889?function(){const _0xbab7ff=a62_0x2adc;if(_0x4beb9a){const _0x2d36b7=_0x4beb9a[_0xbab7ff(0x1d3)](_0x54e3a6,arguments);return _0x4beb9a=null,_0x2d36b7;}}:function(){};return _0x492889=![],_0x596c77;};}()),a62_0xa02562=a62_0x4f56e0(this,function(){const _0x40ee3f=a62_0x2adc;return a62_0xa02562[_0x40ee3f(0x1ba)]()[_0x40ee3f(0x1c9)](_0x40ee3f(0x1bb))[_0x40ee3f(0x1ba)]()['constructor'](a62_0xa02562)['search']('(((.+)+)+)+$');});a62_0xa02562();'use strict';function a62_0x2adc(_0xf0768e,_0x47c987){const _0x5b0e68=a62_0x1688();return a62_0x2adc=function(_0xa02562,_0x4f56e0){_0xa02562=_0xa02562-0x1b8;let _0x168859=_0x5b0e68[_0xa02562];return _0x168859;},a62_0x2adc(_0xf0768e,_0x47c987);}var __importDefault=this&&this['__importDefault']||function(_0x119cc7){const _0x1ec696=a62_0x2adc;return _0x119cc7&&_0x119cc7[_0x1ec696(0x1c2)]?_0x119cc7:{'default':_0x119cc7};};function a62_0x1688(){const _0x59e92f=['SettingsConfigService','1198807IgBBeR','loadSettings','loggerId','4snVajG','13330000pRsuID','2917088DnHLtl','apply','../shared/services/app-settings.service','11064298vgBpRt','run','get','toString','(((.+)+)+)+$','default','reflect-metadata','1471956iKWMzY','35PrqsAQ','SyncService','send','__esModule','update','../shared/services/settings-config.service','AppSettingsService','4478718NVKaru','message','provider','search','instanceUrl','90667566NvJZFZ'];a62_0x1688=function(){return _0x59e92f;};return a62_0x1688();}Object['defineProperty'](exports,'__esModule',{'value':!![]}),require(a62_0x1c9640(0x1bd));const typedi_1=__importDefault(require('typedi'));require('../config');const app_settings_service_1=require(a62_0x1c9640(0x1d4)),settings_config_service_1=require(a62_0x1c9640(0x1c4)),sync_service_1=require('../web-hooks/services/sync.service'),appSettings=typedi_1[a62_0x1c9640(0x1bc)][a62_0x1c9640(0x1b9)](app_settings_service_1[a62_0x1c9640(0x1c5)]);process['on'](a62_0x1c9640(0x1c7),_0x7fd0c1=>{const {data:_0x5bff9f}=JSON['parse'](_0x7fd0c1);execute(_0x5bff9f);});const execute=async _0x200e38=>{const _0x4a88f6=a62_0x1c9640;await settings_config_service_1[_0x4a88f6(0x1cc)][_0x4a88f6(0x1ce)](),appSettings[_0x4a88f6(0x1c3)]({'provider':_0x200e38[_0x4a88f6(0x1c8)]});const _0x3ef761=typedi_1[_0x4a88f6(0x1bc)][_0x4a88f6(0x1b9)](sync_service_1[_0x4a88f6(0x1c0)]);await _0x3ef761[_0x4a88f6(0x1b8)](_0x200e38['sync'],_0x200e38[_0x4a88f6(0x1cf)],_0x200e38[_0x4a88f6(0x1c8)],_0x200e38[_0x4a88f6(0x1ca)]),process[_0x4a88f6(0x1c1)]&&process['send']('done');};