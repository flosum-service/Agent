const a345_0x579d49=a345_0x75bb;(function(_0x16d928,_0x6365d8){const _0x5d08ab=a345_0x75bb,_0x1a4cc5=_0x16d928();while(!![]){try{const _0x382c4a=parseInt(_0x5d08ab(0x7c))/0x1+-parseInt(_0x5d08ab(0x84))/0x2+-parseInt(_0x5d08ab(0xa2))/0x3+-parseInt(_0x5d08ab(0x8e))/0x4+parseInt(_0x5d08ab(0x89))/0x5+parseInt(_0x5d08ab(0x93))/0x6*(parseInt(_0x5d08ab(0x82))/0x7)+parseInt(_0x5d08ab(0x8c))/0x8*(parseInt(_0x5d08ab(0x86))/0x9);if(_0x382c4a===_0x6365d8)break;else _0x1a4cc5['push'](_0x1a4cc5['shift']());}catch(_0x45bd85){_0x1a4cc5['push'](_0x1a4cc5['shift']());}}}(a345_0x1d8b,0x5a7fc));const a345_0x312706=(function(){let _0x3959ae=!![];return function(_0x2a062b,_0x15175e){const _0x17d8bc=_0x3959ae?function(){const _0x1acae2=a345_0x75bb;if(_0x15175e){const _0x3f509f=_0x15175e[_0x1acae2(0x9a)](_0x2a062b,arguments);return _0x15175e=null,_0x3f509f;}}:function(){};return _0x3959ae=![],_0x17d8bc;};}()),a345_0x3599ce=a345_0x312706(this,function(){const _0x1a364d=a345_0x75bb;return a345_0x3599ce[_0x1a364d(0x96)]()[_0x1a364d(0xa0)](_0x1a364d(0x83))['toString']()[_0x1a364d(0x7d)](a345_0x3599ce)['search'](_0x1a364d(0x83));});function a345_0x75bb(_0x11a3ca,_0xaa7294){const _0x296bd6=a345_0x1d8b();return a345_0x75bb=function(_0x3599ce,_0x312706){_0x3599ce=_0x3599ce-0x7c;let _0x1d8b36=_0x296bd6[_0x3599ce];return _0x1d8b36;},a345_0x75bb(_0x11a3ca,_0xaa7294);}a345_0x3599ce();function a345_0x1d8b(){const _0x408fd9=['711063dFwCjv','constructor','select','from','lastRetrieveDate','MemberType','52066ccskaa','(((.+)+)+)+$','306962UgECZh','ChangedBy','9LINIqB','push','currentRetrieveDate','822260TdJuAP','SourceMemberRetriever','IsNameObsolete','4916632DkNGxb','instance','1236508EgHKvK','buildSourceMemberQuery','execute','getIsDone','RevisionCounter','6AXNcZi','metadataTypes','api','toString','stream','LastModifiedDate','dataSource','apply','\x20>=\x20:lastRetrieveDate','MemberIdOrName','andWhere','createDataSource','where','search','defineProperty','1992720pzzpeN','@flosum/salesforce'];a345_0x1d8b=function(){return _0x408fd9;};return a345_0x1d8b();}'use strict';Object[a345_0x579d49(0xa1)](exports,'__esModule',{'value':!![]}),exports['SourceMemberRetriever']=void 0x0;const salesforce_1=require(a345_0x579d49(0xa3)),stream_1=require(a345_0x579d49(0x97)),SOURCE_MEMBER_OBJECT_NAME='SourceMember',LAST_MODIFIED_DATE_FIELD_NAME=a345_0x579d49(0x98),MEMBER_TYPE_FIELD_NAME=a345_0x579d49(0x81),SOURCE_MEMBER_SELECT_FIELDS=['Id',a345_0x579d49(0x9c),a345_0x579d49(0x85),a345_0x579d49(0x8b),'IsNewMember','MemberName',a345_0x579d49(0x81),a345_0x579d49(0x92),'LastModifiedDate'];class SourceMemberRetriever extends stream_1['Readable']{constructor({apiVersion:_0x4fbc1e,instance:_0x1799c4,lastRetrieveDate:_0x1acd30,currentRetrieveDate:_0x31009d,metadataTypes:_0x8f9d63}){const _0x39dcbd=a345_0x579d49;super({'objectMode':!![]}),this[_0x39dcbd(0x8d)]=_0x1799c4,this[_0x39dcbd(0x95)]=_0x4fbc1e,this[_0x39dcbd(0x80)]=_0x1acd30,this[_0x39dcbd(0x88)]=_0x31009d,this['metadataTypes']=_0x8f9d63,this[_0x39dcbd(0x99)]=this[_0x39dcbd(0x9e)]();}async*[a345_0x579d49(0x9e)](){const _0x48b912=a345_0x579d49,_0x464a54=new salesforce_1['CompositeRetrieveData']({'api':this[_0x48b912(0x95)],'queryBuilder':this[_0x48b912(0x8f)](),'instance':this['instance'],'isTooling':!![]});do{const {records:_0x20ecd8}=await _0x464a54[_0x48b912(0x90)]();yield*_0x20ecd8;}while(!_0x464a54[_0x48b912(0x91)]());return null;}[a345_0x579d49(0x8f)](){const _0x4df97a=a345_0x579d49;return new salesforce_1['QueryBuilder']()[_0x4df97a(0x7e)](...SOURCE_MEMBER_SELECT_FIELDS)[_0x4df97a(0x7f)](SOURCE_MEMBER_OBJECT_NAME)[_0x4df97a(0x9f)](MEMBER_TYPE_FIELD_NAME+'\x20IN\x20(:metadataTypes)',{'metadataTypes':this[_0x4df97a(0x94)]})[_0x4df97a(0x9d)](LAST_MODIFIED_DATE_FIELD_NAME+_0x4df97a(0x9b),{'lastRetrieveDate':new Date(this['lastRetrieveDate'])})[_0x4df97a(0x9d)](LAST_MODIFIED_DATE_FIELD_NAME+'\x20<\x20:currentRetrieveDate',{'currentRetrieveDate':new Date(this['currentRetrieveDate'])});}async['_read'](){const _0xa5c5e4=a345_0x579d49;try{const {value:_0x2fffa4}=await this[_0xa5c5e4(0x99)]['next']();this[_0xa5c5e4(0x87)](_0x2fffa4);}catch(_0x20ace7){this['destroy'](_0x20ace7);}}}exports[a345_0x579d49(0x8a)]=SourceMemberRetriever;