const a320_0x425fcd=a320_0x50d0;(function(_0x340111,_0x4a6090){const _0x59e5ad=a320_0x50d0,_0x40aa05=_0x340111();while(!![]){try{const _0x3bc64f=parseInt(_0x59e5ad(0x1c9))/0x1+-parseInt(_0x59e5ad(0x1ab))/0x2*(parseInt(_0x59e5ad(0x1b0))/0x3)+-parseInt(_0x59e5ad(0x1cb))/0x4*(-parseInt(_0x59e5ad(0x1c0))/0x5)+parseInt(_0x59e5ad(0x1bf))/0x6+-parseInt(_0x59e5ad(0x1aa))/0x7*(-parseInt(_0x59e5ad(0x1b7))/0x8)+-parseInt(_0x59e5ad(0x1c3))/0x9+-parseInt(_0x59e5ad(0x1b4))/0xa;if(_0x3bc64f===_0x4a6090)break;else _0x40aa05['push'](_0x40aa05['shift']());}catch(_0x3c7a32){_0x40aa05['push'](_0x40aa05['shift']());}}}(a320_0x16dd,0xac9a4));const a320_0x1c5ee1=(function(){let _0x3f8e7d=!![];return function(_0x49afb3,_0x25cec3){const _0x1b53c9=_0x3f8e7d?function(){if(_0x25cec3){const _0x17d468=_0x25cec3['apply'](_0x49afb3,arguments);return _0x25cec3=null,_0x17d468;}}:function(){};return _0x3f8e7d=![],_0x1b53c9;};}()),a320_0x89babf=a320_0x1c5ee1(this,function(){const _0x31c67c=a320_0x50d0;return a320_0x89babf['toString']()[_0x31c67c(0x1b6)]('(((.+)+)+)+$')[_0x31c67c(0x1ac)]()[_0x31c67c(0x1c4)](a320_0x89babf)[_0x31c67c(0x1b6)]('(((.+)+)+)+$');});a320_0x89babf();'use strict';var __importDefault=this&&this['__importDefault']||function(_0xc992c6){const _0x4f91a1=a320_0x50d0;return _0xc992c6&&_0xc992c6[_0x4f91a1(0x1cc)]?_0xc992c6:{'default':_0xc992c6};};Object['defineProperty'](exports,a320_0x425fcd(0x1cc),{'value':!![]}),exports[a320_0x425fcd(0x1b1)]=void 0x0;function a320_0x50d0(_0x288eb6,_0x29afe9){const _0x79da47=a320_0x16dd();return a320_0x50d0=function(_0x89babf,_0x1c5ee1){_0x89babf=_0x89babf-0x1aa;let _0x16dd7f=_0x79da47[_0x89babf];return _0x16dd7f;},a320_0x50d0(_0x288eb6,_0x29afe9);}const job_utils_1=__importDefault(require(a320_0x425fcd(0x1c8))),path_1=__importDefault(require(a320_0x425fcd(0x1b2))),fs_utils_1=require(a320_0x425fcd(0x1b5)),job_1=require('../../../constants/job'),path_2=require(a320_0x425fcd(0x1ad)),constants_1=require(a320_0x425fcd(0x1c5)),promises_1=require(a320_0x425fcd(0x1bc)),core_1=require('../../../core');function a320_0x16dd(){const _0x3600ef=['getManifestPath','452FSdHCT','__esModule','7OLkFCA','1798ezTSQp','toString','../../../configs/path','catch','TRACKING_METADATA_FOLDER_NAME','27lWwSos','TrackingMetadataService','path','join','23609850PZzjTQ','../../shared/utils/fs.utils','search','3450728uauhYG','runJob','makeDir','dataPath','createManifest','fs/promises','MANIFEST_FILENAME','Logger','7892544TRnsQj','16695MUiSWO','default','stringify','527841dicDAZ','constructor','../constants','error','writeFile','../../shared/utils/job.utils','1010633pRnLio'];a320_0x16dd=function(){return _0x3600ef;};return a320_0x16dd();}class TrackingMetadataService{static async['createJob'](_0x3555ba){const _0x23ee63=a320_0x425fcd,_0x4d6155=job_utils_1[_0x23ee63(0x1c1)]['generateJobId'](),_0x2c6f59=path_1[_0x23ee63(0x1c1)][_0x23ee63(0x1b3)](TrackingMetadataService['trackingMetadataFolder'],_0x4d6155);await(0x0,fs_utils_1[_0x23ee63(0x1b9)])(_0x2c6f59),await this[_0x23ee63(0x1bb)](_0x2c6f59,_0x3555ba);const _0xb066b=path_1[_0x23ee63(0x1c1)][_0x23ee63(0x1b3)](__dirname,job_1['JOB_PATH']),_0x426fc3=new core_1[(_0x23ee63(0x1be))](_0x4d6155);return job_utils_1[_0x23ee63(0x1c1)][_0x23ee63(0x1b8)](_0xb066b,{'jobStorePath':_0x2c6f59,'jobId':_0x4d6155})[_0x23ee63(0x1ae)](async _0x2793df=>{const _0x5748f8=_0x23ee63;_0x426fc3[_0x5748f8(0x1c6)](_0x2793df);}),{'jobId':_0x4d6155};}static async[a320_0x425fcd(0x1bb)](_0x5c85f1,_0x33da63){const _0x3ae14b=a320_0x425fcd,_0x188d14=this['getManifestPath'](_0x5c85f1);return(0x0,promises_1[_0x3ae14b(0x1c7)])(_0x188d14,JSON[_0x3ae14b(0x1c2)]({'details':_0x33da63}));}static[a320_0x425fcd(0x1ca)](_0x1f5bda){const _0x408fa9=a320_0x425fcd;return path_1[_0x408fa9(0x1c1)][_0x408fa9(0x1b3)](_0x1f5bda,job_1[_0x408fa9(0x1bd)]);}}exports[a320_0x425fcd(0x1b1)]=TrackingMetadataService,TrackingMetadataService['trackingMetadataFolder']=path_1[a320_0x425fcd(0x1c1)][a320_0x425fcd(0x1b3)](path_2[a320_0x425fcd(0x1ba)],constants_1[a320_0x425fcd(0x1af)]);