const a310_0xbdcb06=a310_0x5418;(function(_0x1b676e,_0x37fa22){const _0x3cf3b9=a310_0x5418,_0x1432b5=_0x1b676e();while(!![]){try{const _0xbd4283=-parseInt(_0x3cf3b9(0x81))/0x1*(-parseInt(_0x3cf3b9(0x8f))/0x2)+-parseInt(_0x3cf3b9(0x84))/0x3+parseInt(_0x3cf3b9(0xa9))/0x4+-parseInt(_0x3cf3b9(0x8d))/0x5*(-parseInt(_0x3cf3b9(0x78))/0x6)+parseInt(_0x3cf3b9(0xba))/0x7+parseInt(_0x3cf3b9(0xa4))/0x8*(-parseInt(_0x3cf3b9(0x9f))/0x9)+parseInt(_0x3cf3b9(0x72))/0xa*(-parseInt(_0x3cf3b9(0x8b))/0xb);if(_0xbd4283===_0x37fa22)break;else _0x1432b5['push'](_0x1432b5['shift']());}catch(_0x1c4240){_0x1432b5['push'](_0x1432b5['shift']());}}}(a310_0x5290,0x240ca));const a310_0x1c4997=(function(){let _0x1a9d16=!![];return function(_0x49ae9f,_0x139e49){const _0x56aac7=_0x1a9d16?function(){if(_0x139e49){const _0xedcb00=_0x139e49['apply'](_0x49ae9f,arguments);return _0x139e49=null,_0xedcb00;}}:function(){};return _0x1a9d16=![],_0x56aac7;};}()),a310_0x2382a7=a310_0x1c4997(this,function(){const _0xe0b4c9=a310_0x5418;return a310_0x2382a7[_0xe0b4c9(0x9a)]()[_0xe0b4c9(0xa8)](_0xe0b4c9(0x6d))[_0xe0b4c9(0x9a)]()[_0xe0b4c9(0x92)](a310_0x2382a7)['search'](_0xe0b4c9(0x6d));});a310_0x2382a7();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x434a3c){return _0x434a3c&&_0x434a3c['__esModule']?_0x434a3c:{'default':_0x434a3c};};Object[a310_0xbdcb06(0xac)](exports,a310_0xbdcb06(0x82),{'value':!![]}),exports[a310_0xbdcb06(0xa1)]=void 0x0;const salesforce_1=require(a310_0xbdcb06(0x74)),constants_1=require(a310_0xbdcb06(0xa2)),stream_1=require(a310_0xbdcb06(0x6c)),jszip_1=__importDefault(require(a310_0xbdcb06(0x87))),constants_2=require(a310_0xbdcb06(0x88)),MAX_COMPOSITE_CHUNK_COUNT=0xc8,EXTERNAL_ID_FIELD='Id',ATTACHMENT_FIELD_NAME=constants_2[a310_0xbdcb06(0x6e)]+a310_0xbdcb06(0xb6),CONTENT_TYPE='application/zip';function a310_0x5290(){const _0x3ab944=['search','80628QfrBIX','logger','then','defineProperty','Source_Member_Id__c','isNameObsolete','records','resetChunks','attachmentId','Tracking_Setting__c','BINARY_FIELD_NAME','default','addAttachmentToChunk','Attachment_ID__c','targetOrgId','Name__c','file','948640BaGpRm','attachmentsToDeployChunk','stream','(((.+)+)+)+$','FLOSUM_NAMESPACE','Is_Deleted__c','generateAsync','push','10sYGeqj','revisionCounter','@flosum/salesforce','trackingSettingId','from','error','346074teGrRS','createZip','Is_Retrieved__c','successDeployedCounter','addOrgComponentToChunk','binaryRecordsSizeChunk','execute','Status__c','ATTACHMENT_OBJECT_NAME','1IJmPeT','__esModule','Last_Updated_By__c','148344GnCQuj','deployOrgComponents','byteLength','jszip','../../../../constants','_write','orgComponentsToDeployChunk','1019733SpWhmW','CompositeBinaryDeployData','15SRfljB','instance','220506qRlxbs','fullName','METADATA_FOLDER_MAP','constructor','OrganisationName__c','ORG_COMPONENT_OBJECT_NAME','Revision_Counter__c','handleDeployResult','deploy','Writable','API_Name__c','toString','Folder__c','populateAttachmentId','isReachedMaxChunk','RestSimpleDeployData','306SIjhAS','CompositeConstants','ComponentsDeployer','../../constants','componentId','35096AzcOdt','length','log','deployAttachments'];a310_0x5290=function(){return _0x3ab944;};return a310_0x5290();}class ComponentsDeployer extends stream_1[a310_0xbdcb06(0x98)]{constructor({apiVersion:_0x21715f,instance:_0x3a92df,logger:_0x85fedf,targetOrgId:_0x5f3bbb,trackingSettingId:_0x3235f1}){const _0x27470e=a310_0xbdcb06;super({'objectMode':!![]}),this[_0x27470e(0xbb)]={'records':[],'binary':[]},this[_0x27470e(0x7d)]=0x0,this[_0x27470e(0x8a)]=[],this['successDeployedCounter']=0x0,this['apiVersion']=_0x21715f,this[_0x27470e(0x8e)]=_0x3a92df,this[_0x27470e(0xaa)]=_0x85fedf,this[_0x27470e(0xb7)]=_0x5f3bbb,this[_0x27470e(0x75)]=_0x3235f1;}async[a310_0xbdcb06(0x97)](){const _0x13875b=a310_0xbdcb06;await this['deployAttachments']()[_0x13875b(0xab)](_0x412244=>this[_0x13875b(0x9c)](_0x412244))['then'](()=>this['deployOrgComponents']())[_0x13875b(0xab)](_0x257154=>this[_0x13875b(0x96)](_0x257154)),this[_0x13875b(0xb0)]();}[a310_0xbdcb06(0xa7)](){const _0x43ccb4=a310_0xbdcb06,_0x1bbb41=new salesforce_1[(_0x43ccb4(0x8c))]({'instance':this[_0x43ccb4(0x8e)],'objectName':constants_1[_0x43ccb4(0x80)],'externalIdField':EXTERNAL_ID_FIELD,'allOrNone':![],'api':this['apiVersion']});return _0x1bbb41[_0x43ccb4(0x7e)](this[_0x43ccb4(0xbb)]);}[a310_0xbdcb06(0x85)](){const _0x4386b2=a310_0xbdcb06,_0x2be52c=new salesforce_1[(_0x4386b2(0x9e))]({'instance':this['instance'],'objectName':constants_1[_0x4386b2(0x94)],'api':this['apiVersion'],'allOrNone':![],'externalIdField':'Id'});return _0x2be52c['execute']({'records':this[_0x4386b2(0x8a)]});}async[a310_0xbdcb06(0x96)](_0x20fdae){const _0x576f65=a310_0xbdcb06;for(const {success:_0x3e9f77,error:_0x700ed1}of _0x20fdae){if(_0x3e9f77){this[_0x576f65(0x7b)]++;continue;}_0x700ed1&&this[_0x576f65(0xaa)][_0x576f65(0x77)](_0x700ed1);}}[a310_0xbdcb06(0x9d)](_0xd87edd){const _0xca0735=a310_0xbdcb06;return _0xd87edd+this['binaryRecordsSizeChunk']>=salesforce_1[_0xca0735(0xa0)]['MAX_BODY_SIZE']||this[_0xca0735(0xbb)]['records'][_0xca0735(0xa5)]===MAX_COMPOSITE_CHUNK_COUNT;}[a310_0xbdcb06(0xb0)](){const _0x1dec5d=a310_0xbdcb06;this['binaryRecordsSizeChunk']=0x0,this['attachmentsToDeployChunk']={'records':[],'binary':[]},this[_0x1dec5d(0x8a)]=[];}[a310_0xbdcb06(0x9c)](_0x12435f){const _0x2cf8e2=a310_0xbdcb06;for(const _0x194a2d in _0x12435f){this[_0x2cf8e2(0x8a)][_0x194a2d][ATTACHMENT_FIELD_NAME]=_0x12435f[_0x194a2d]['id'];}}async[a310_0xbdcb06(0xb5)](_0x359677,_0x2cd8c1){const _0x29ce14=a310_0xbdcb06,{listMetadataItem:_0x1518f7,sourceMemberRecord:_0x22bfc3}=_0x359677,_0x152b41={'attributes':{'type':constants_1[_0x29ce14(0x80)],'binaryPartName':_0x1518f7[_0x29ce14(0x90)],'binaryPartNameAlias':constants_1[_0x29ce14(0xb3)]},'Id':_0x22bfc3[_0x29ce14(0xb1)],'Name':_0x1518f7[_0x29ce14(0x90)],'Description':_0x1518f7['type'],'ContentType':CONTENT_TYPE,'ParentId':this['targetOrgId'],'Body':_0x1518f7[_0x29ce14(0x90)]},_0x3428f1={'binaryFieldName':constants_1['BINARY_FIELD_NAME'],'name':_0x1518f7[_0x29ce14(0x90)],'value':stream_1['Readable'][_0x29ce14(0x76)](_0x2cd8c1)};this[_0x29ce14(0xbb)][_0x29ce14(0xaf)][_0x29ce14(0x71)](_0x152b41),this[_0x29ce14(0xbb)]['binary'][_0x29ce14(0x71)](_0x3428f1);}[a310_0xbdcb06(0x79)](_0x9d2dfb){const _0x1c646f=a310_0xbdcb06,_0x27dafe=new jszip_1[(_0x1c646f(0xb4))]();for(const _0x339706 in _0x9d2dfb){_0x27dafe[_0x1c646f(0xb9)](_0x339706,_0x9d2dfb[_0x339706]);}return _0x27dafe[_0x1c646f(0x70)]({'type':'nodebuffer'});}[a310_0xbdcb06(0x7c)](_0x2972dd,_0x6a8b58){const _0x39cf21=a310_0xbdcb06,_0x416d02={'attributes':{'type':constants_1[_0x39cf21(0x94)]},'Id':_0x6a8b58[_0x39cf21(0xa3)],[constants_2['FLOSUM_NAMESPACE']+_0x39cf21(0x6f)]:_0x6a8b58[_0x39cf21(0xae)],[constants_2['FLOSUM_NAMESPACE']+_0x39cf21(0x95)]:_0x6a8b58[_0x39cf21(0x73)],[constants_2[_0x39cf21(0x6e)]+_0x39cf21(0xad)]:_0x6a8b58['sourceMemberId'],[constants_2[_0x39cf21(0x6e)]+_0x39cf21(0x83)]:_0x6a8b58['changedBy'],[constants_2[_0x39cf21(0x6e)]+_0x39cf21(0x99)]:_0x2972dd[_0x39cf21(0x90)],[constants_2['FLOSUM_NAMESPACE']+_0x39cf21(0xb8)]:_0x2972dd[_0x39cf21(0x90)],[constants_2[_0x39cf21(0x6e)]+'Component_Type__c']:_0x2972dd['type'],[constants_2[_0x39cf21(0x6e)]+'Label__c']:_0x2972dd['fileName'],[constants_2[_0x39cf21(0x6e)]+_0x39cf21(0x9b)]:constants_1[_0x39cf21(0x91)]['has'](_0x2972dd['type'])||null,[constants_2['FLOSUM_NAMESPACE']+_0x39cf21(0x7a)]:!![],[constants_2[_0x39cf21(0x6e)]+_0x39cf21(0x93)]:this[_0x39cf21(0xb7)],[constants_2[_0x39cf21(0x6e)]+_0x39cf21(0xb2)]:this[_0x39cf21(0x75)],[constants_2[_0x39cf21(0x6e)]+_0x39cf21(0x7f)]:'Retrieved'};this[_0x39cf21(0x8a)][_0x39cf21(0x71)](_0x416d02);}async[a310_0xbdcb06(0x89)](_0x330360,_0x1b00fd,_0x27c6ef){const _0x4f4e05=a310_0xbdcb06;try{const {listMetadataItem:_0x472b74,sourceMemberRecord:_0xf280b1,files:_0x9c088f}=_0x330360,_0x10c7f2=await this['createZip'](_0x9c088f),_0x2f6ecf=Buffer[_0x4f4e05(0x86)](_0x10c7f2);this[_0x4f4e05(0x9d)](_0x2f6ecf)&&await this[_0x4f4e05(0x97)](),this[_0x4f4e05(0x7d)]+=_0x2f6ecf,await this[_0x4f4e05(0xb5)](_0x330360,_0x10c7f2),this['addOrgComponentToChunk'](_0x472b74,_0xf280b1),_0x27c6ef();}catch(_0x4f7c18){_0x27c6ef(_0x4f7c18);}}async['_final'](_0x5232a){const _0x49ba51=a310_0xbdcb06;try{this[_0x49ba51(0xbb)][_0x49ba51(0xaf)][_0x49ba51(0xa5)]&&this[_0x49ba51(0x8a)][_0x49ba51(0xa5)]&&await this['deploy'](),this['logger'][_0x49ba51(0xa6)]('Process\x20completed\x20for\x20'+this[_0x49ba51(0x7b)]+'\x20components'),await this[_0x49ba51(0xaa)]['update'](),_0x5232a();}catch(_0x43a88d){_0x5232a(_0x43a88d);}}}function a310_0x5418(_0x59171f,_0x41326b){const _0xb9a5c2=a310_0x5290();return a310_0x5418=function(_0x2382a7,_0x1c4997){_0x2382a7=_0x2382a7-0x6c;let _0x529099=_0xb9a5c2[_0x2382a7];return _0x529099;},a310_0x5418(_0x59171f,_0x41326b);}exports['ComponentsDeployer']=ComponentsDeployer;