var a73_0x2b332a=a73_0x39cc;function a73_0x3405(){var _0x1cfe8f=['prototype','object','query','12258krPZDa','Controller','length','4147515QWuOkg','offset','data-masking','478SiKEKw','createMaskingJob','453541PpPRzz','toString','job','search','limit','DataMaskingController','jobId','decorate','__metadata','Post','job/:jobId/log','2712FjbCcm','Get','body','defineProperty','apply','MaskingService','__esModule','createJob','20QRVbCZ','2867011CiOoQE','metadata','80PQwWKd','param','1431138YdTSXF','constructor','__decorate','getJobState','__param','../../core/errors/bad-request.error','path','design:paramtypes','getLog','design:type','job/:jobId','design:returntype','Param\x20\x27limit\x27\x20is\x20missed','47GlyHex','127664MsFBPf','function','getJobs'];a73_0x3405=function(){return _0x1cfe8f;};return a73_0x3405();}(function(_0x54413e,_0x59f317){var _0x185e24=a73_0x39cc,_0x2ebcda=_0x54413e();while(!![]){try{var _0x3f9d9f=-parseInt(_0x185e24(0x1b2))/0x1*(parseInt(_0x185e24(0x1bf))/0x2)+parseInt(_0x185e24(0x1bc))/0x3+-parseInt(_0x185e24(0x1b3))/0x4*(parseInt(_0x185e24(0x1a0))/0x5)+-parseInt(_0x185e24(0x1a5))/0x6+-parseInt(_0x185e24(0x1a1))/0x7+-parseInt(_0x185e24(0x198))/0x8*(-parseInt(_0x185e24(0x1b9))/0x9)+parseInt(_0x185e24(0x1a3))/0xa*(-parseInt(_0x185e24(0x1c1))/0xb);if(_0x3f9d9f===_0x59f317)break;else _0x2ebcda['push'](_0x2ebcda['shift']());}catch(_0x34b170){_0x2ebcda['push'](_0x2ebcda['shift']());}}}(a73_0x3405,0xb1956));var a73_0x266aca=(function(){var _0x2993ce=!![];return function(_0x5ef976,_0x50ac9d){var _0x4e41b4=_0x2993ce?function(){var _0x31973a=a73_0x39cc;if(_0x50ac9d){var _0x12152e=_0x50ac9d[_0x31973a(0x19c)](_0x5ef976,arguments);return _0x50ac9d=null,_0x12152e;}}:function(){};return _0x2993ce=![],_0x4e41b4;};}()),a73_0x149db8=a73_0x266aca(this,function(){var _0x502676=a73_0x39cc;return a73_0x149db8[_0x502676(0x1c2)]()[_0x502676(0x1c4)]('(((.+)+)+)+$')[_0x502676(0x1c2)]()[_0x502676(0x1a6)](a73_0x149db8)[_0x502676(0x1c4)]('(((.+)+)+)+$');});a73_0x149db8();'use strict';var __decorate=this&&this[a73_0x2b332a(0x1a7)]||function(_0x4db93b,_0x1d6e96,_0x16a372,_0x4c803d){var _0xe67315=a73_0x2b332a,_0x63349=arguments[_0xe67315(0x1bb)],_0x4eebbd=_0x63349<0x3?_0x1d6e96:_0x4c803d===null?_0x4c803d=Object['getOwnPropertyDescriptor'](_0x1d6e96,_0x16a372):_0x4c803d,_0x4016d4;if(typeof Reflect===_0xe67315(0x1b7)&&typeof Reflect[_0xe67315(0x194)]===_0xe67315(0x1b4))_0x4eebbd=Reflect[_0xe67315(0x194)](_0x4db93b,_0x1d6e96,_0x16a372,_0x4c803d);else{for(var _0xda5a44=_0x4db93b[_0xe67315(0x1bb)]-0x1;_0xda5a44>=0x0;_0xda5a44--)if(_0x4016d4=_0x4db93b[_0xda5a44])_0x4eebbd=(_0x63349<0x3?_0x4016d4(_0x4eebbd):_0x63349>0x3?_0x4016d4(_0x1d6e96,_0x16a372,_0x4eebbd):_0x4016d4(_0x1d6e96,_0x16a372))||_0x4eebbd;}return _0x63349>0x3&&_0x4eebbd&&Object[_0xe67315(0x19b)](_0x1d6e96,_0x16a372,_0x4eebbd),_0x4eebbd;},__metadata=this&&this[a73_0x2b332a(0x195)]||function(_0x5e512f,_0x46559b){var _0x84b7cf=a73_0x2b332a;if(typeof Reflect==='object'&&typeof Reflect[_0x84b7cf(0x1a2)]===_0x84b7cf(0x1b4))return Reflect[_0x84b7cf(0x1a2)](_0x5e512f,_0x46559b);},__param=this&&this[a73_0x2b332a(0x1a9)]||function(_0x78bcfb,_0xe6fa2e){return function(_0x4a3f79,_0x144849){_0xe6fa2e(_0x4a3f79,_0x144849,_0x78bcfb);};};Object[a73_0x2b332a(0x19b)](exports,a73_0x2b332a(0x19e),{'value':!![]}),exports[a73_0x2b332a(0x192)]=void 0x0;function a73_0x39cc(_0x40848e,_0x5ba03d){var _0xdb5c5d=a73_0x3405();return a73_0x39cc=function(_0x149db8,_0x266aca){_0x149db8=_0x149db8-0x192;var _0x3405ff=_0xdb5c5d[_0x149db8];return _0x3405ff;},a73_0x39cc(_0x40848e,_0x5ba03d);}const core_1=require('../../core'),masking_service_1=require('./services/masking.service'),bad_request_error_1=require(a73_0x2b332a(0x1aa));let DataMaskingController=class DataMaskingController{async[a73_0x2b332a(0x19f)](_0x49fcf8){var _0x38e91b=a73_0x2b332a;return masking_service_1[_0x38e91b(0x19d)][_0x38e91b(0x1c0)](_0x49fcf8);}async[a73_0x2b332a(0x1b5)](_0x49e5b6,_0x2bc3b6){var _0x2a32a2=a73_0x2b332a;if(!_0x49e5b6)throw new bad_request_error_1['BadRequestError'](_0x2a32a2(0x1b1));return masking_service_1['MaskingService'][_0x2a32a2(0x1b5)](+_0x49e5b6,+(_0x2bc3b6||0x0));}async[a73_0x2b332a(0x1a8)](_0x2d89cc,_0x2f4884){var _0x1908ba=a73_0x2b332a;return masking_service_1['MaskingService'][_0x1908ba(0x1a8)](_0x2d89cc,_0x2f4884==='true');}async[a73_0x2b332a(0x1ad)](_0x3684c8){return masking_service_1['MaskingService']['getJobDetails'](_0x3684c8);}};__decorate([(0x0,core_1[a73_0x2b332a(0x196)])(a73_0x2b332a(0x1c3)),__param(0x0,core_1[a73_0x2b332a(0x1a4)][a73_0x2b332a(0x19a)]()),__metadata('design:type',Function),__metadata('design:paramtypes',[Object]),__metadata(a73_0x2b332a(0x1b0),Promise)],DataMaskingController[a73_0x2b332a(0x1b6)],a73_0x2b332a(0x19f),null),__decorate([(0x0,core_1['Get'])(a73_0x2b332a(0x1c3)),__param(0x0,core_1[a73_0x2b332a(0x1a4)][a73_0x2b332a(0x1b8)](a73_0x2b332a(0x1c5))),__param(0x1,core_1[a73_0x2b332a(0x1a4)]['query'](a73_0x2b332a(0x1bd))),__metadata('design:type',Function),__metadata(a73_0x2b332a(0x1ac),[String,String]),__metadata('design:returntype',Promise)],DataMaskingController[a73_0x2b332a(0x1b6)],a73_0x2b332a(0x1b5),null),__decorate([(0x0,core_1[a73_0x2b332a(0x199)])(a73_0x2b332a(0x1af)),__param(0x0,core_1['param']['path'](a73_0x2b332a(0x193))),__param(0x1,core_1[a73_0x2b332a(0x1a4)]['query']('includeDetails')),__metadata(a73_0x2b332a(0x1ae),Function),__metadata(a73_0x2b332a(0x1ac),[String,String]),__metadata(a73_0x2b332a(0x1b0),Promise)],DataMaskingController[a73_0x2b332a(0x1b6)],'getJobState',null),__decorate([(0x0,core_1[a73_0x2b332a(0x199)])(a73_0x2b332a(0x197)),__param(0x0,core_1[a73_0x2b332a(0x1a4)][a73_0x2b332a(0x1ab)](a73_0x2b332a(0x193))),__metadata(a73_0x2b332a(0x1ae),Function),__metadata('design:paramtypes',[String]),__metadata(a73_0x2b332a(0x1b0),Promise)],DataMaskingController['prototype'],a73_0x2b332a(0x1ad),null),DataMaskingController=__decorate([(0x0,core_1[a73_0x2b332a(0x1ba)])(a73_0x2b332a(0x1be)),(0x0,core_1['Version'])('v1')],DataMaskingController),exports[a73_0x2b332a(0x192)]=DataMaskingController;