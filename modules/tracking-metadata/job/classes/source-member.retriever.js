const a333_0x5553c6=a333_0x20bd;function a333_0x20bd(_0x582b06,_0x2c23ab){const _0x6c7d30=a333_0x5498();return a333_0x20bd=function(_0x3fdfd5,_0x27f10d){_0x3fdfd5=_0x3fdfd5-0x97;let _0x549856=_0x6c7d30[_0x3fdfd5];return _0x549856;},a333_0x20bd(_0x582b06,_0x2c23ab);}(function(_0x68767f,_0x4c7a87){const _0x176001=a333_0x20bd,_0x225d5b=_0x68767f();while(!![]){try{const _0x5b7799=-parseInt(_0x176001(0xbb))/0x1+parseInt(_0x176001(0xa5))/0x2+parseInt(_0x176001(0xb6))/0x3*(-parseInt(_0x176001(0xc4))/0x4)+-parseInt(_0x176001(0x9f))/0x5*(-parseInt(_0x176001(0xbe))/0x6)+-parseInt(_0x176001(0x9e))/0x7+-parseInt(_0x176001(0xa3))/0x8+-parseInt(_0x176001(0xa9))/0x9*(parseInt(_0x176001(0xb2))/0xa);if(_0x5b7799===_0x4c7a87)break;else _0x225d5b['push'](_0x225d5b['shift']());}catch(_0x501148){_0x225d5b['push'](_0x225d5b['shift']());}}}(a333_0x5498,0x82264));const a333_0x27f10d=(function(){let _0x14cf08=!![];return function(_0x10f00f,_0x2ec632){const _0x348dff=_0x14cf08?function(){if(_0x2ec632){const _0xefe564=_0x2ec632['apply'](_0x10f00f,arguments);return _0x2ec632=null,_0xefe564;}}:function(){};return _0x14cf08=![],_0x348dff;};}()),a333_0x3fdfd5=a333_0x27f10d(this,function(){const _0x162d77=a333_0x20bd;return a333_0x3fdfd5[_0x162d77(0xc1)]()[_0x162d77(0xbd)](_0x162d77(0xc0))[_0x162d77(0xc1)]()[_0x162d77(0xb4)](a333_0x3fdfd5)[_0x162d77(0xbd)]('(((.+)+)+)+$');});a333_0x3fdfd5();'use strict';function a333_0x5498(){const _0xb88669=['Readable','MemberType','LastModifiedDate','instance','currentRetrieveDate','MemberIdOrName','buildSourceMemberQuery','\x20>=\x20:lastRetrieveDate','256050uDztGZ','SourceMemberRetriever','constructor','select','39lDZXOl','@flosum/salesforce','stream','api','push','534009MUoUhL','getIsDone','search','90odokjk','lastRetrieveDate','(((.+)+)+)+$','toString','RevisionCounter','IsNameObsolete','26396yAlIqu','andWhere','IsNewMember','createDataSource','dataSource','execute','where','destroy','ChangedBy','__esModule','83062Cznlfh','295145CTbQIE','QueryBuilder','_read','\x20IN\x20(:metadataTypes)','1592328xCHyJi','CompositeRetrieveData','1673660QYdxJn','next','metadataTypes','\x20<\x20:currentRetrieveDate','126MUfuVi'];a333_0x5498=function(){return _0xb88669;};return a333_0x5498();}Object['defineProperty'](exports,a333_0x5553c6(0x9d),{'value':!![]}),exports[a333_0x5553c6(0xb3)]=void 0x0;const salesforce_1=require(a333_0x5553c6(0xb7)),stream_1=require(a333_0x5553c6(0xb8)),SOURCE_MEMBER_OBJECT_NAME='SourceMember',LAST_MODIFIED_DATE_FIELD_NAME=a333_0x5553c6(0xac),MEMBER_TYPE_FIELD_NAME='MemberType',SOURCE_MEMBER_SELECT_FIELDS=['Id',a333_0x5553c6(0xaf),a333_0x5553c6(0x9c),a333_0x5553c6(0xc3),a333_0x5553c6(0xc6),'MemberName',a333_0x5553c6(0xab),a333_0x5553c6(0xc2),a333_0x5553c6(0xac)];class SourceMemberRetriever extends stream_1[a333_0x5553c6(0xaa)]{constructor({apiVersion:_0x289119,instance:_0xb1a55f,lastRetrieveDate:_0x4b47ef,currentRetrieveDate:_0x4b1ad0,metadataTypes:_0x544e5}){const _0x5f52a6=a333_0x5553c6;super({'objectMode':!![]}),this['instance']=_0xb1a55f,this[_0x5f52a6(0xb9)]=_0x289119,this['lastRetrieveDate']=_0x4b47ef,this[_0x5f52a6(0xae)]=_0x4b1ad0,this['metadataTypes']=_0x544e5,this[_0x5f52a6(0x98)]=this['createDataSource']();}async*[a333_0x5553c6(0x97)](){const _0x1ca715=a333_0x5553c6,_0x3f06a0=new salesforce_1[(_0x1ca715(0xa4))]({'api':this[_0x1ca715(0xb9)],'queryBuilder':this[_0x1ca715(0xb0)](),'instance':this[_0x1ca715(0xad)],'isTooling':!![]});do{const {records:_0x2ffcd2}=await _0x3f06a0[_0x1ca715(0x99)]();yield*_0x2ffcd2;}while(!_0x3f06a0[_0x1ca715(0xbc)]());return null;}[a333_0x5553c6(0xb0)](){const _0x16aa34=a333_0x5553c6;return new salesforce_1[(_0x16aa34(0xa0))]()[_0x16aa34(0xb5)](...SOURCE_MEMBER_SELECT_FIELDS)['from'](SOURCE_MEMBER_OBJECT_NAME)[_0x16aa34(0x9a)](MEMBER_TYPE_FIELD_NAME+_0x16aa34(0xa2),{'metadataTypes':this[_0x16aa34(0xa7)]})[_0x16aa34(0xc5)](LAST_MODIFIED_DATE_FIELD_NAME+_0x16aa34(0xb1),{'lastRetrieveDate':new Date(this[_0x16aa34(0xbf)])})[_0x16aa34(0xc5)](LAST_MODIFIED_DATE_FIELD_NAME+_0x16aa34(0xa8),{'currentRetrieveDate':new Date(this['currentRetrieveDate'])});}async[a333_0x5553c6(0xa1)](){const _0x2d7f17=a333_0x5553c6;try{const {value:_0x5ab7ba}=await this[_0x2d7f17(0x98)][_0x2d7f17(0xa6)]();this[_0x2d7f17(0xba)](_0x5ab7ba);}catch(_0x2b71dd){this[_0x2d7f17(0x9b)](_0x2b71dd);}}}exports[a333_0x5553c6(0xb3)]=SourceMemberRetriever;