const a344_0xec3d53=a344_0x2419;function a344_0x2419(_0x5db70b,_0x182724){const _0x50df06=a344_0xb505();return a344_0x2419=function(_0x26d87a,_0x565dd0){_0x26d87a=_0x26d87a-0xff;let _0xb505ef=_0x50df06[_0x26d87a];return _0xb505ef;},a344_0x2419(_0x5db70b,_0x182724);}(function(_0x43bc74,_0x3ae592){const _0x7747e3=a344_0x2419,_0x57de40=_0x43bc74();while(!![]){try{const _0x25b884=parseInt(_0x7747e3(0x122))/0x1+parseInt(_0x7747e3(0x10d))/0x2*(-parseInt(_0x7747e3(0x129))/0x3)+-parseInt(_0x7747e3(0x111))/0x4+parseInt(_0x7747e3(0x11e))/0x5+-parseInt(_0x7747e3(0xff))/0x6*(parseInt(_0x7747e3(0x103))/0x7)+-parseInt(_0x7747e3(0x10f))/0x8*(parseInt(_0x7747e3(0x100))/0x9)+parseInt(_0x7747e3(0x120))/0xa;if(_0x25b884===_0x3ae592)break;else _0x57de40['push'](_0x57de40['shift']());}catch(_0x5f40c7){_0x57de40['push'](_0x57de40['shift']());}}}(a344_0xb505,0xb9087));const a344_0x565dd0=(function(){let _0x487f65=!![];return function(_0x1cf729,_0x3f6df3){const _0x21b1a5=_0x487f65?function(){const _0x499650=a344_0x2419;if(_0x3f6df3){const _0x1f0aad=_0x3f6df3[_0x499650(0x123)](_0x1cf729,arguments);return _0x3f6df3=null,_0x1f0aad;}}:function(){};return _0x487f65=![],_0x21b1a5;};}()),a344_0x26d87a=a344_0x565dd0(this,function(){const _0x43c7cd=a344_0x2419;return a344_0x26d87a['toString']()['search'](_0x43c7cd(0x101))['toString']()['constructor'](a344_0x26d87a)['search'](_0x43c7cd(0x101));});a344_0x26d87a();'use strict';Object[a344_0xec3d53(0x116)](exports,a344_0xec3d53(0x128),{'value':!![]}),exports[a344_0xec3d53(0x12a)]=void 0x0;const stream_1=require(a344_0xec3d53(0x10e)),salesforce_1=require(a344_0xec3d53(0x117)),constants_1=require(a344_0xec3d53(0x130)),constants_2=require('../../../../constants'),MAX_CHUNK_SIZE=0xfa0,REVISION_COUNTER_FIELD_NAME=a344_0xec3d53(0x138),IS_NAME_OBSOLETE='IsNameObsolete',MEMBER_ID_FIELD_NAME=a344_0xec3d53(0x112),MEMBER_TYPE_FIELD_NAME=a344_0xec3d53(0x12e),MEMBER_NAME=a344_0xec3d53(0x10c),CHANGED_BY_FIELD_NAME=a344_0xec3d53(0x114),SOURCE_MEMBER_ID_FIELD_NAME=constants_2[a344_0xec3d53(0x126)]+'Source_Member_Id__c',ORGANIZATION_NAME_FIELD=constants_2[a344_0xec3d53(0x126)]+'OrganisationName__c',REVISION_COUNTER_CUSTOM_FIELD_NAME=constants_2[a344_0xec3d53(0x126)]+a344_0xec3d53(0x136),ORG_COMPONENT_SELECT_FIELDS=['Id',constants_2[a344_0xec3d53(0x126)]+a344_0xec3d53(0x136),constants_2[a344_0xec3d53(0x126)]+a344_0xec3d53(0x127),constants_2[a344_0xec3d53(0x126)]+a344_0xec3d53(0x109),constants_2[a344_0xec3d53(0x126)]+a344_0xec3d53(0x12d),constants_2[a344_0xec3d53(0x126)]+a344_0xec3d53(0x134),constants_2[a344_0xec3d53(0x126)]+a344_0xec3d53(0x10a),constants_2[a344_0xec3d53(0x126)]+a344_0xec3d53(0x12c),constants_2[a344_0xec3d53(0x126)]+a344_0xec3d53(0x12f)];class SourceMemberHandler extends stream_1[a344_0xec3d53(0x137)]{constructor({apiVersion:_0x53f089,instance:_0x5220e9,targetOrgId:_0x492a16,logger:_0x1ce652}){const _0xb1f26=a344_0xec3d53;super({'objectMode':!![]}),this[_0xb1f26(0x113)]=new Map(),this['handledMembersCounter']=0x0,this[_0xb1f26(0x11d)]=_0x53f089,this['instance']=_0x5220e9,this[_0xb1f26(0x106)]=_0x492a16,this[_0xb1f26(0x12b)]=_0x1ce652;}[a344_0xec3d53(0x131)](){const _0x25b4b2=a344_0xec3d53;return new salesforce_1['QueryBuilder']()[_0x25b4b2(0x11f)](...ORG_COMPONENT_SELECT_FIELDS)['from'](constants_1['ORG_COMPONENT_OBJECT_NAME'])[_0x25b4b2(0x108)](SOURCE_MEMBER_ID_FIELD_NAME+_0x25b4b2(0x11b),{'sourceMemberIds':[...this[_0x25b4b2(0x113)]['keys']()]})[_0x25b4b2(0x110)](ORGANIZATION_NAME_FIELD+'\x20=\x20:targetOrgId',{'targetOrgId':this[_0x25b4b2(0x106)]});}async[a344_0xec3d53(0x115)](){const _0x3274c2=a344_0xec3d53,_0x58a23b=new salesforce_1[(_0x3274c2(0x105))]({'api':this[_0x3274c2(0x11d)],'queryBuilder':this['buildOrgComponentQuery'](),'instance':this[_0x3274c2(0x104)],'isTooling':![]}),_0x581660=new Map();do{const {records:_0x23c49f}=await _0x58a23b[_0x3274c2(0x102)]();for(const _0x31fa5f of _0x23c49f){_0x581660['set'](_0x31fa5f[SOURCE_MEMBER_ID_FIELD_NAME],_0x31fa5f);}}while(!_0x58a23b[_0x3274c2(0x132)]());return _0x581660;}async[a344_0xec3d53(0x135)](_0xbc9f60){const _0x1b220e=a344_0xec3d53;this['sourceMemberRecords'][_0x1b220e(0x121)](_0xbc9f60['Id'],_0xbc9f60),this[_0x1b220e(0x113)][_0x1b220e(0x125)]===MAX_CHUNK_SIZE&&await this['handle']();}async[a344_0xec3d53(0x124)](){const _0x13c5fe=a344_0xec3d53,_0x232294=await this[_0x13c5fe(0x115)]();for(const [_0x20e5a3,_0x2c331f]of this[_0x13c5fe(0x113)]){const _0x45e8ed=_0x232294[_0x13c5fe(0x119)](_0x20e5a3);if(_0x45e8ed&&_0x2c331f[REVISION_COUNTER_FIELD_NAME]===_0x45e8ed[REVISION_COUNTER_CUSTOM_FIELD_NAME])continue;const _0x362cdb={'sourceMemberId':_0x2c331f['Id'],'componentId':(_0x45e8ed===null||_0x45e8ed===void 0x0?void 0x0:_0x45e8ed['Id'])||null,'attachmentId':(_0x45e8ed===null||_0x45e8ed===void 0x0?void 0x0:_0x45e8ed[_0x13c5fe(0x12c)])||null,'metadataId':_0x2c331f[MEMBER_ID_FIELD_NAME],'metadataType':_0x2c331f[MEMBER_TYPE_FIELD_NAME],'metadataName':_0x2c331f[MEMBER_NAME],'isNameObsolete':_0x2c331f[IS_NAME_OBSOLETE],'revisionCounter':_0x2c331f[REVISION_COUNTER_FIELD_NAME],'changedBy':_0x2c331f[CHANGED_BY_FIELD_NAME]};this[_0x13c5fe(0x11c)]++,this['push'](_0x362cdb);}this[_0x13c5fe(0x113)]=new Map();}async[a344_0xec3d53(0x118)](_0x52bc81,_0x820128,_0x3f3499){try{await this['addToChunk'](_0x52bc81),_0x3f3499();}catch(_0x381b6c){_0x3f3499(_0x381b6c);}}async[a344_0xec3d53(0x10b)](_0x39c578){const _0x22e786=a344_0xec3d53;try{this[_0x22e786(0x113)]['size']&&await this[_0x22e786(0x124)](),this[_0x22e786(0x12b)][_0x22e786(0x133)](_0x22e786(0x11a)+this[_0x22e786(0x11c)]+'\x20components'),await this[_0x22e786(0x12b)][_0x22e786(0x107)](),_0x39c578();}catch(_0x1b6f6a){_0x39c578(_0x1b6f6a);}}}function a344_0xb505(){const _0x230cb6=['Transform','RevisionCounter','6ShKAIh','801puIZlH','(((.+)+)+)+$','execute','8759338tTIRMN','instance','CompositeRetrieveData','targetOrgId','update','where','API_Name__c','OrganisationName__c','_flush','MemberName','4pgtaKq','stream','27192TRZXoa','andWhere','836044NdPCin','MemberIdOrName','sourceMemberRecords','ChangedBy','getComponentFromFlosum','defineProperty','@flosum/salesforce','_transform','get','Changes\x20found\x20for\x20','\x20IN\x20(:sourceMemberIds)','handledMembersCounter','api','4799340aDyNuQ','select','21291360uoRFZH','set','314817vEdFGq','apply','handle','size','FLOSUM_NAMESPACE','Component_Type__c','__esModule','1324605nOcWpC','SourceMemberHandler','logger','Attachment_ID__c','Name__c','MemberType','Folder__c','../../constants','buildOrgComponentQuery','getIsDone','log','Source_Member_Id__c','addToChunk','Revision_Counter__c'];a344_0xb505=function(){return _0x230cb6;};return a344_0xb505();}exports[a344_0xec3d53(0x12a)]=SourceMemberHandler;