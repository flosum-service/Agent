const a70_0x1ccaed=a70_0x123c;(function(_0x20155e,_0x257a8d){const _0x3509dd=a70_0x123c,_0x17dede=_0x20155e();while(!![]){try{const _0x597852=-parseInt(_0x3509dd(0x9e))/0x1+-parseInt(_0x3509dd(0x95))/0x2*(-parseInt(_0x3509dd(0x90))/0x3)+parseInt(_0x3509dd(0xaf))/0x4+parseInt(_0x3509dd(0xaa))/0x5+parseInt(_0x3509dd(0x89))/0x6+parseInt(_0x3509dd(0x97))/0x7+-parseInt(_0x3509dd(0x8b))/0x8;if(_0x597852===_0x257a8d)break;else _0x17dede['push'](_0x17dede['shift']());}catch(_0x5ca74c){_0x17dede['push'](_0x17dede['shift']());}}}(a70_0x354a,0x5740c));const a70_0x4d3e9d=(function(){let _0x4e9135=!![];return function(_0x349419,_0x535f03){const _0x3af2fa=_0x4e9135?function(){const _0x2e807c=a70_0x123c;if(_0x535f03){const _0xaf3079=_0x535f03[_0x2e807c(0x85)](_0x349419,arguments);return _0x535f03=null,_0xaf3079;}}:function(){};return _0x4e9135=![],_0x3af2fa;};}()),a70_0x3dffbf=a70_0x4d3e9d(this,function(){const _0x5ac13f=a70_0x123c;return a70_0x3dffbf[_0x5ac13f(0x96)]()[_0x5ac13f(0xad)](_0x5ac13f(0xa8))[_0x5ac13f(0x96)]()['constructor'](a70_0x3dffbf)['search'](_0x5ac13f(0xa8));});function a70_0x354a(){const _0x12a1cb=['../../shared/utils/job.utils','644294ZnmNIA','then','defineProperty','../constants','catch','b2cFolder','../job/classes/manifest-manager','init','getJobLog','setError','(((.+)+)+)+$','readFile','2240355KgXLIB','../../shared/managers/state-manger','path','search','JOB_LOG_DETAILS_FILENAME','895564GlCbNC','getJobState','NotFoundError','apply','FsUtils','Job\x20log\x20not\x20found.','@flosum/utils','524220TndCEp','generateJobId','3060144wOuCsW','join','../../shared/utils/csv.utils','createJob','isExistsPath','28458tGKXSp','slice','../../shared/utils/fs.utils','makeDir','default','122tWoulz','toString','323554SJlkoF','JOB_PATH','create','B2C_FOLDER_NAME','../../../configs/path','runJob'];a70_0x354a=function(){return _0x12a1cb;};return a70_0x354a();}a70_0x3dffbf();function a70_0x123c(_0x4c6900,_0x57f252){const _0x5c80bc=a70_0x354a();return a70_0x123c=function(_0x3dffbf,_0x4d3e9d){_0x3dffbf=_0x3dffbf-0x83;let _0x354a09=_0x5c80bc[_0x3dffbf];return _0x354a09;},a70_0x123c(_0x4c6900,_0x57f252);}'use strict';var __importDefault=this&&this['__importDefault']||function(_0xbc7721){return _0xbc7721&&_0xbc7721['__esModule']?_0xbc7721:{'default':_0xbc7721};};Object[a70_0x1ccaed(0xa0)](exports,'__esModule',{'value':!![]});const promises_1=require('fs/promises'),utils_1=require(a70_0x1ccaed(0x88)),not_found_error_1=require('../../../core/errors/not-found.error'),fs_utils_1=require(a70_0x1ccaed(0x92)),constants_1=require(a70_0x1ccaed(0xa1)),path_1=require(a70_0x1ccaed(0x9b)),job_1=require('../../../constants/job'),path_2=__importDefault(require(a70_0x1ccaed(0xac))),manifest_manager_1=__importDefault(require(a70_0x1ccaed(0xa4))),state_manger_1=__importDefault(require(a70_0x1ccaed(0xab))),job_utils_1=__importDefault(require(a70_0x1ccaed(0x9d))),csv_utils_1=__importDefault(require(a70_0x1ccaed(0x8d)));class B2CService{static async[a70_0x1ccaed(0x8e)](_0x5c6a3b){const _0x3d3b95=a70_0x1ccaed,_0x3db8dc=job_utils_1[_0x3d3b95(0x94)][_0x3d3b95(0x8a)](),_0x431c99=path_2['default'][_0x3d3b95(0x8c)](B2CService[_0x3d3b95(0xa3)],_0x3db8dc);await(0x0,fs_utils_1[_0x3d3b95(0x93)])(_0x431c99),await manifest_manager_1[_0x3d3b95(0x94)][_0x3d3b95(0x99)](_0x431c99,_0x5c6a3b),await state_manger_1[_0x3d3b95(0x94)][_0x3d3b95(0x99)](_0x431c99,_0x3db8dc);const _0x4cc7d5=path_2['default']['join'](__dirname,job_1[_0x3d3b95(0x98)]);return job_utils_1[_0x3d3b95(0x94)][_0x3d3b95(0x9c)](_0x4cc7d5,{'jobStorePath':_0x431c99,'jobId':_0x3db8dc})[_0x3d3b95(0xa2)](async _0x468438=>{const _0x12f734=_0x3d3b95,_0x30ad85=new state_manger_1[(_0x12f734(0x94))](_0x431c99);await _0x30ad85[_0x12f734(0xa5)](),await _0x30ad85[_0x12f734(0xa7)](_0x468438);}),{'jobId':_0x3db8dc};}static async['getJobs'](_0x12ca19,_0x34be07){const _0x29f0c4=a70_0x1ccaed,_0x5a9cca=await job_utils_1['default']['getJobsIds'](B2CService[_0x29f0c4(0xa3)]),_0x10f61a=await job_utils_1[_0x29f0c4(0x94)]['sortJobsIds'](B2CService['b2cFolder'],_0x5a9cca),_0x19c71b=_0x10f61a[_0x29f0c4(0x91)](_0x34be07,_0x34be07+_0x12ca19),_0x4ee5ee=[];for(const _0x448fc5 of _0x19c71b){const _0xfdc005=await state_manger_1[_0x29f0c4(0x94)][_0x29f0c4(0x83)](path_2[_0x29f0c4(0x94)][_0x29f0c4(0x8c)](B2CService[_0x29f0c4(0xa3)],_0x448fc5));_0x4ee5ee['push'](_0xfdc005);}return _0x4ee5ee;}static async['getJobStatus'](_0x2d0a5d){const _0x98d55f=a70_0x1ccaed;try{return state_manger_1[_0x98d55f(0x94)]['getJobState'](path_2['default'][_0x98d55f(0x8c)](B2CService[_0x98d55f(0xa3)],_0x2d0a5d));}catch(_0x4285c8){throw new not_found_error_1[(_0x98d55f(0x84))](_0x4285c8);}}static async[a70_0x1ccaed(0xa6)](_0xf7faf){const _0x591920=a70_0x1ccaed,_0x4afcf3=path_2[_0x591920(0x94)][_0x591920(0x8c)](B2CService[_0x591920(0xa3)],_0xf7faf,job_1[_0x591920(0xae)]);if(await utils_1[_0x591920(0x86)][_0x591920(0x8f)](_0x4afcf3))return(0x0,promises_1[_0x591920(0xa9)])(_0x4afcf3,{'encoding':'utf-8'})[_0x591920(0x9f)](_0x580d27=>csv_utils_1[_0x591920(0x94)]['parse'](_0x580d27,{'columns':!![]}));throw new not_found_error_1[(_0x591920(0x84))](_0x591920(0x87));}}exports[a70_0x1ccaed(0x94)]=B2CService,B2CService[a70_0x1ccaed(0xa3)]=path_2[a70_0x1ccaed(0x94)][a70_0x1ccaed(0x8c)](path_1['dataPath'],constants_1[a70_0x1ccaed(0x9a)]);