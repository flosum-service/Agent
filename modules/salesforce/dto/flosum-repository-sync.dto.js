'use strict';var a116_0x3400f6=a116_0x37d5;function a116_0x452c(){var _0x39e497=['type','defineProperty','12699136MGKuic','Branch_Name__c','419pgGpgk','SyncDirection','attributes','1221505PcuLIw','121359BtgTfT','repositoryName','588kWLWPb','search','Name','branchName','16508304uyyqfz','apply','2374VSikkl','FLOSUM_NAMESPACE','16ygXzfL','toString','direction','objectType','Synchronization_Direction__c','385602FMGakO','GitToFlosum','objectId','Repository__r','status','(((.+)+)+)+$','FlosumToGit','branchId','FLOSUM_GIT_NAMESPACE','Synchronization_Status__c','7935710ddOhQA'];a116_0x452c=function(){return _0x39e497;};return a116_0x452c();}(function(_0x823a25,_0xcc37bf){var _0x4b2c20=a116_0x37d5,_0x1f8954=_0x823a25();while(!![]){try{var _0xb8c7c3=parseInt(_0x4b2c20(0x81))/0x1*(parseInt(_0x4b2c20(0x8d))/0x2)+parseInt(_0x4b2c20(0x94))/0x3+-parseInt(_0x4b2c20(0x8f))/0x4*(-parseInt(_0x4b2c20(0x84))/0x5)+-parseInt(_0x4b2c20(0x87))/0x6*(parseInt(_0x4b2c20(0x85))/0x7)+-parseInt(_0x4b2c20(0x7f))/0x8+parseInt(_0x4b2c20(0x8b))/0x9+parseInt(_0x4b2c20(0x7c))/0xa;if(_0xb8c7c3===_0xcc37bf)break;else _0x1f8954['push'](_0x1f8954['shift']());}catch(_0x52a89a){_0x1f8954['push'](_0x1f8954['shift']());}}}(a116_0x452c,0xe6974));Object[a116_0x3400f6(0x7e)](exports,'__esModule',{'value':!![]}),exports['FlosumRepositorySyncDto']=exports[a116_0x3400f6(0x82)]=void 0x0;function a116_0x37d5(_0x526214,_0x2e02f4){var _0x4edbdc=a116_0x452c();return a116_0x37d5=function(_0x183802,_0x5c4f85){_0x183802=_0x183802-0x7a;var _0x452cf4=_0x4edbdc[_0x183802];return _0x452cf4;},a116_0x37d5(_0x526214,_0x2e02f4);}const constants_1=require('../../../constants');var SyncDirection;(function(_0x45916f){var _0x3f5b07=a116_0x3400f6,_0x1448dc=(function(){var _0x45c9f2=!![];return function(_0x15939e,_0x265e14){var _0x3f5d69=_0x45c9f2?function(){var _0x319a33=a116_0x37d5;if(_0x265e14){var _0x59b281=_0x265e14[_0x319a33(0x8c)](_0x15939e,arguments);return _0x265e14=null,_0x59b281;}}:function(){};return _0x45c9f2=![],_0x3f5d69;};}()),_0x510192=_0x1448dc(this,function(){var _0x2ee85d=a116_0x37d5;return _0x510192[_0x2ee85d(0x90)]()[_0x2ee85d(0x88)](_0x2ee85d(0x99))[_0x2ee85d(0x90)]()['constructor'](_0x510192)[_0x2ee85d(0x88)](_0x2ee85d(0x99));});_0x510192(),_0x45916f[_0x45916f[_0x3f5b07(0x9a)]=0x0]=_0x3f5b07(0x9a),_0x45916f[_0x45916f[_0x3f5b07(0x95)]=0x1]='GitToFlosum';}(SyncDirection=exports[a116_0x3400f6(0x82)]||(exports[a116_0x3400f6(0x82)]={})));class FlosumRepositorySyncDto{static['fromRepositoryRecord'](_0x55ff1d){var _0xcaf803=a116_0x3400f6,_0x42177f;const _0x1b814d=new FlosumRepositorySyncDto();return _0x1b814d[_0xcaf803(0x96)]=_0x55ff1d['Id'],_0x1b814d[_0xcaf803(0x92)]=(_0x42177f=_0x55ff1d[_0xcaf803(0x83)])===null||_0x42177f===void 0x0?void 0x0:_0x42177f['type'],_0x1b814d['repositoryId']=_0x55ff1d['Id'],_0x1b814d['repositoryName']=_0x55ff1d[_0xcaf803(0x89)],_0x1b814d[_0xcaf803(0x98)]=_0x55ff1d[constants_1['FLOSUM_GIT_NAMESPACE']+_0xcaf803(0x7b)],_0x1b814d['branchName']='master',_0x1b814d['direction']=_0x55ff1d[constants_1[_0xcaf803(0x7a)]+_0xcaf803(0x93)]?SyncDirection[_0xcaf803(0x95)]:SyncDirection[_0xcaf803(0x9a)],_0x1b814d;}static['fromBranchRecord'](_0x6fdddc){var _0x12ed99=a116_0x3400f6,_0x34361f,_0x2f9001;const _0x25ea07=new FlosumRepositorySyncDto();return _0x25ea07[_0x12ed99(0x96)]=_0x6fdddc['Id'],_0x25ea07[_0x12ed99(0x92)]=(_0x34361f=_0x6fdddc[_0x12ed99(0x83)])===null||_0x34361f===void 0x0?void 0x0:_0x34361f[_0x12ed99(0x7d)],_0x25ea07[_0x12ed99(0x9b)]=_0x6fdddc['Id'],_0x25ea07['status']=_0x6fdddc[constants_1[_0x12ed99(0x7a)]+_0x12ed99(0x7b)],_0x25ea07[_0x12ed99(0x8a)]=_0x6fdddc[constants_1[_0x12ed99(0x8e)]+_0x12ed99(0x80)],_0x25ea07[_0x12ed99(0x86)]=(_0x2f9001=_0x6fdddc[constants_1[_0x12ed99(0x8e)]+_0x12ed99(0x97)])===null||_0x2f9001===void 0x0?void 0x0:_0x2f9001['Name'],_0x25ea07[_0x12ed99(0x91)]=_0x6fdddc[constants_1[_0x12ed99(0x7a)]+'Synchronization_Direction__c']?SyncDirection[_0x12ed99(0x95)]:SyncDirection[_0x12ed99(0x9a)],_0x25ea07;}}exports['FlosumRepositorySyncDto']=FlosumRepositorySyncDto;