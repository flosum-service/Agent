function a29_0x52e0(){const _0x1b8783=['handlerWrapper','(((.+)+)+)+$','injecting\x20nested\x20','META_CONTROLLER','getHandlerMeta','controller-injector','4xhetsX','injectNestedController','7394470vdotjb','../utils','express','toLowerCase','getOwnMetadata','name','../wrappers/handler.wrapper','5496wnXHyD','7gcvSYZ','META_CONTROLLER_PREFIX','ControllerInjector','method','injecting\x20','2199305JFDQTu','log','constructor','7367553qCTnBl','META_CONTROLLER_VERSION','middlewares','\x20at\x20[','prefix','get','getPrototypeOf','nestedPath','\x20at\x20','filter','769107lyqlzx','injectHandlers','root','use','search','758696sVltys','META_CONTROLLER_PATH','instance','37idsdCF','middlewareInjector','inject','\x20is\x20not\x20a\x20Controller','defineProperty','../classes/logger.class','toString','./middleware.injector','handlers','router','1679622xyyvUQ','normalizePaths','path','injectMiddlewares','META_HANDLER','Logger','controllerType','__importDefault','nested','getOwnPropertyNames'];a29_0x52e0=function(){return _0x1b8783;};return a29_0x52e0();}const a29_0x3b42c7=a29_0x57f8;(function(_0xa7da6b,_0xf4103b){const _0x28da79=a29_0x57f8,_0x49a533=_0xa7da6b();while(!![]){try{const _0x2c3c6c=-parseInt(_0x28da79(0x1fa))/0x1*(parseInt(_0x28da79(0x1df))/0x2)+parseInt(_0x28da79(0x1f2))/0x3*(-parseInt(_0x28da79(0x214))/0x4)+-parseInt(_0x28da79(0x1e5))/0x5+-parseInt(_0x28da79(0x204))/0x6+parseInt(_0x28da79(0x1e0))/0x7*(parseInt(_0x28da79(0x1f7))/0x8)+parseInt(_0x28da79(0x1e8))/0x9+parseInt(_0x28da79(0x216))/0xa;if(_0x2c3c6c===_0xf4103b)break;else _0x49a533['push'](_0x49a533['shift']());}catch(_0x4c6c28){_0x49a533['push'](_0x49a533['shift']());}}}(a29_0x52e0,0x8c652));const a29_0x5728ab=(function(){let _0x331da9=!![];return function(_0x441d14,_0x283032){const _0x5daa18=_0x331da9?function(){if(_0x283032){const _0x4f18e1=_0x283032['apply'](_0x441d14,arguments);return _0x283032=null,_0x4f18e1;}}:function(){};return _0x331da9=![],_0x5daa18;};}()),a29_0x5ebf73=a29_0x5728ab(this,function(){const _0x17f776=a29_0x57f8;return a29_0x5ebf73[_0x17f776(0x200)]()[_0x17f776(0x1f6)](_0x17f776(0x20f))[_0x17f776(0x200)]()[_0x17f776(0x1e7)](a29_0x5ebf73)[_0x17f776(0x1f6)]('(((.+)+)+)+$');});a29_0x5ebf73();'use strict';var __importDefault=this&&this[a29_0x3b42c7(0x20b)]||function(_0x473d5b){return _0x473d5b&&_0x473d5b['__esModule']?_0x473d5b:{'default':_0x473d5b};};Object[a29_0x3b42c7(0x1fe)](exports,'__esModule',{'value':!![]}),exports['ControllerInjector']=void 0x0;const express_1=require(a29_0x3b42c7(0x1da)),typedi_1=__importDefault(require('typedi')),logger_class_1=require(a29_0x3b42c7(0x1ff)),constants_1=require('../constants'),utils_1=require(a29_0x3b42c7(0x1d9)),handler_wrapper_1=require(a29_0x3b42c7(0x1de)),middleware_injector_1=require(a29_0x3b42c7(0x201)),logger=new logger_class_1[(a29_0x3b42c7(0x209))](a29_0x3b42c7(0x213));function a29_0x57f8(_0x31fecf,_0x5b230e){const _0x2daa3a=a29_0x52e0();return a29_0x57f8=function(_0x5ebf73,_0x5728ab){_0x5ebf73=_0x5ebf73-0x1d9;let _0x52e0f6=_0x2daa3a[_0x5ebf73];return _0x52e0f6;},a29_0x57f8(_0x31fecf,_0x5b230e);}class ControllerInjector{constructor(_0x534778,_0x39f237){const _0x48ad2d=a29_0x3b42c7;this[_0x48ad2d(0x20a)]=_0x534778,this[_0x48ad2d(0x1f4)]=_0x39f237,this['router']=(0x0,express_1['Router'])({'mergeParams':!![]}),this[_0x48ad2d(0x1ef)]='';if(!Reflect[_0x48ad2d(0x1dc)](constants_1[_0x48ad2d(0x211)],_0x534778))throw TypeError(_0x534778[_0x48ad2d(0x1dd)]+_0x48ad2d(0x1fd));}get['handlers'](){const _0x349799=a29_0x3b42c7,_0x1174f2=Object[_0x349799(0x1ee)](this['instance']);return Object[_0x349799(0x20d)](_0x1174f2)['map'](_0x52abcd=>_0x1174f2[_0x52abcd])[_0x349799(0x1f1)](_0x24c27d=>!!Reflect[_0x349799(0x1dc)](constants_1[_0x349799(0x208)],_0x24c27d));}get['middlewares'](){const _0x587ee9=a29_0x3b42c7;return Reflect[_0x587ee9(0x1dc)](constants_1['META_CONTROLLER_MIDDLEWARES'],this['controllerType'])||[];}get[a29_0x3b42c7(0x1ec)](){const _0x4df983=a29_0x3b42c7;var _0x37b8e5;const _0x654cd0=(_0x37b8e5=Reflect['getOwnMetadata'](constants_1[_0x4df983(0x1e1)],this['controllerType']))!==null&&_0x37b8e5!==void 0x0?_0x37b8e5:constants_1['CONTROLLER_DEFAULT_PREFIX'],_0x31b11f=Reflect[_0x4df983(0x1dc)](constants_1[_0x4df983(0x1e9)],this[_0x4df983(0x20a)])||'';return this[_0x4df983(0x1ef)]?'':(0x0,utils_1[_0x4df983(0x205)])(_0x654cd0,_0x31b11f);}get[a29_0x3b42c7(0x206)](){const _0xe26b11=a29_0x3b42c7;if(this[_0xe26b11(0x1ef)])return this[_0xe26b11(0x1ef)];const _0x433f81=Reflect[_0xe26b11(0x1dc)](constants_1[_0xe26b11(0x1f8)],this['controllerType'])||'';return(0x0,utils_1[_0xe26b11(0x205)])(_0x433f81);}get[a29_0x3b42c7(0x1f9)](){const _0x19fb30=a29_0x3b42c7;return typedi_1['default'][_0x19fb30(0x1ed)](this[_0x19fb30(0x20a)]);}async['injectMiddlewares'](){const _0xb52979=a29_0x3b42c7;for(const _0x317da9 of this[_0xb52979(0x1ea)]){const _0x184714=await(0x0,middleware_injector_1[_0xb52979(0x1fb)])(_0x317da9);this[_0xb52979(0x203)][_0xb52979(0x1f5)](_0x184714);}}async[a29_0x3b42c7(0x215)](_0x4bac62){const _0x468f7a=a29_0x3b42c7,_0x3bef35=_0x4bac62[_0x468f7a(0x20c)];logger[_0x468f7a(0x1e6)](_0x468f7a(0x210)+_0x3bef35[_0x468f7a(0x1dd)]+_0x468f7a(0x1f0)+this[_0x468f7a(0x206)]+_0x4bac62['path']);const _0x6cfd09=new ControllerInjector(_0x3bef35,this);_0x6cfd09[_0x468f7a(0x1ef)]=_0x4bac62[_0x468f7a(0x206)],await _0x6cfd09['inject'](this[_0x468f7a(0x203)]);}async[a29_0x3b42c7(0x1f3)](){const _0x597de6=a29_0x3b42c7;var _0xd80cb6;for(const _0x2075ba of this[_0x597de6(0x202)]){const _0x4ed5e8=(0x0,utils_1[_0x597de6(0x212)])(_0x2075ba);if(_0x4ed5e8[_0x597de6(0x20c)])await this[_0x597de6(0x215)](_0x4ed5e8);else{const _0x379ea4=_0x4ed5e8[_0x597de6(0x1e3)][_0x597de6(0x200)]()[_0x597de6(0x1db)]();logger[_0x597de6(0x1e6)](_0x597de6(0x1e4)+this[_0x597de6(0x20a)][_0x597de6(0x1dd)]+'#'+_0x2075ba[_0x597de6(0x1dd)]+_0x597de6(0x1eb)+_0x4ed5e8[_0x597de6(0x1e3)]+']\x20'+(0x0,utils_1[_0x597de6(0x205)])(((_0xd80cb6=this[_0x597de6(0x1f4)])===null||_0xd80cb6===void 0x0?void 0x0:_0xd80cb6['path'])||'',this[_0x597de6(0x206)],_0x4ed5e8[_0x597de6(0x206)])),this[_0x597de6(0x203)][_0x379ea4](_0x4ed5e8[_0x597de6(0x206)],(0x0,handler_wrapper_1[_0x597de6(0x20e)])(_0x2075ba,this[_0x597de6(0x1f9)]));}}}async[a29_0x3b42c7(0x1fc)](_0x4da26d){const _0x3d682a=a29_0x3b42c7;!this[_0x3d682a(0x1ef)]&&logger['log']('injecting\x20'+this[_0x3d682a(0x20a)][_0x3d682a(0x1dd)]+'\x20{'+this[_0x3d682a(0x1ec)]+'}'),await this[_0x3d682a(0x207)](),await this[_0x3d682a(0x1f3)](),_0x4da26d[_0x3d682a(0x1f5)](''+this['prefix']+this[_0x3d682a(0x206)],this[_0x3d682a(0x203)]);}}exports[a29_0x3b42c7(0x1e2)]=ControllerInjector;