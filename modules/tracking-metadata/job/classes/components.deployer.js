const a339_0x57d0c0=a339_0x4d14;(function(_0x37666f,_0x18b92f){const _0x35d0c5=a339_0x4d14,_0x544be6=_0x37666f();while(!![]){try{const _0xacc280=-parseInt(_0x35d0c5(0x152))/0x1+-parseInt(_0x35d0c5(0x188))/0x2*(parseInt(_0x35d0c5(0x177))/0x3)+parseInt(_0x35d0c5(0x14e))/0x4+parseInt(_0x35d0c5(0x169))/0x5*(parseInt(_0x35d0c5(0x178))/0x6)+parseInt(_0x35d0c5(0x192))/0x7+parseInt(_0x35d0c5(0x18d))/0x8*(parseInt(_0x35d0c5(0x198))/0x9)+-parseInt(_0x35d0c5(0x19d))/0xa;if(_0xacc280===_0x18b92f)break;else _0x544be6['push'](_0x544be6['shift']());}catch(_0x44ba1c){_0x544be6['push'](_0x544be6['shift']());}}}(a339_0x17e2,0x39e04));const a339_0x11eba9=(function(){let _0x1a80b4=!![];return function(_0x138671,_0x40fbbc){const _0x29a1c9=_0x1a80b4?function(){if(_0x40fbbc){const _0x1e8107=_0x40fbbc['apply'](_0x138671,arguments);return _0x40fbbc=null,_0x1e8107;}}:function(){};return _0x1a80b4=![],_0x29a1c9;};}()),a339_0x31d3da=a339_0x11eba9(this,function(){const _0x4e3088=a339_0x4d14;return a339_0x31d3da[_0x4e3088(0x19e)]()['search'](_0x4e3088(0x17e))['toString']()[_0x4e3088(0x154)](a339_0x31d3da)[_0x4e3088(0x16a)](_0x4e3088(0x17e));});a339_0x31d3da();'use strict';function a339_0x17e2(){const _0x2216c3=['length','Name__c','from','Process\x20completed\x20for\x20','Source_Member_Id__c','sourceMemberId','fullName','successDeployedCounter','populateAttachmentId','Component_Type__c','error','CompositeConstants','fileName','binaryRecordsSizeChunk','3690ZvpRvt','search','logger','file','stream','targetOrgId','\x20components','attachmentsToDeployChunk','update','Retrieved','revisionCounter','deployOrgComponents','deploy','execute','3EPEEtx','1038eUnBQz','ATTACHMENT_OBJECT_NAME','binary','jszip','Folder__c','changedBy','(((.+)+)+)+$','RestSimpleDeployData','handleDeployResult','type','isReachedMaxChunk','../../../../constants','../../constants','BINARY_FIELD_NAME','__importDefault','addAttachmentToChunk','553392ILWMOe','Readable','defineProperty','Status__c','apiVersion','1024pbVBcy','Is_Deleted__c','componentId','nodebuffer','Last_Updated_By__c','2523521uFWpgE','FLOSUM_NAMESPACE','then','__esModule','records','log','20817PBNuss','isNameObsolete','resetChunks','ComponentsDeployer','instance','938160FdGgbH','toString','byteLength','addOrgComponentToChunk','Is_Retrieved__c','trackingSettingId','has','@flosum/salesforce','generateAsync','createZip','application/zip','deployAttachments','349476kwbqfp','Revision_Counter__c','Attachment_ID__c','orgComponentsToDeployChunk','264038vxtMqj','ORG_COMPONENT_OBJECT_NAME','constructor','MAX_BODY_SIZE','push','Label__c','OrganisationName__c','_final','Tracking_Setting__c'];a339_0x17e2=function(){return _0x2216c3;};return a339_0x17e2();}var __importDefault=this&&this[a339_0x57d0c0(0x186)]||function(_0x54fc21){const _0xdf3189=a339_0x57d0c0;return _0x54fc21&&_0x54fc21[_0xdf3189(0x195)]?_0x54fc21:{'default':_0x54fc21};};Object[a339_0x57d0c0(0x18a)](exports,a339_0x57d0c0(0x195),{'value':!![]}),exports[a339_0x57d0c0(0x19b)]=void 0x0;const salesforce_1=require(a339_0x57d0c0(0x1a4)),constants_1=require(a339_0x57d0c0(0x184)),stream_1=require(a339_0x57d0c0(0x16d)),jszip_1=__importDefault(require(a339_0x57d0c0(0x17b))),constants_2=require(a339_0x57d0c0(0x183)),MAX_COMPOSITE_CHUNK_COUNT=0xc8,EXTERNAL_ID_FIELD='Id',ATTACHMENT_FIELD_NAME=constants_2['FLOSUM_NAMESPACE']+a339_0x57d0c0(0x150),CONTENT_TYPE=a339_0x57d0c0(0x1a7);class ComponentsDeployer extends stream_1['Writable']{constructor({apiVersion:_0x485ce0,instance:_0x16e109,logger:_0x4a6f04,targetOrgId:_0x4bc1ea,trackingSettingId:_0x159ef8}){const _0x2f07d1=a339_0x57d0c0;super({'objectMode':!![]}),this['attachmentsToDeployChunk']={'records':[],'binary':[]},this[_0x2f07d1(0x168)]=0x0,this[_0x2f07d1(0x151)]=[],this[_0x2f07d1(0x162)]=0x0,this[_0x2f07d1(0x18c)]=_0x485ce0,this[_0x2f07d1(0x19c)]=_0x16e109,this['logger']=_0x4a6f04,this['targetOrgId']=_0x4bc1ea,this[_0x2f07d1(0x1a2)]=_0x159ef8;}async['deploy'](){const _0x3ed517=a339_0x57d0c0;await this[_0x3ed517(0x1a8)]()[_0x3ed517(0x194)](_0x5bd2ee=>this[_0x3ed517(0x163)](_0x5bd2ee))[_0x3ed517(0x194)](()=>this[_0x3ed517(0x174)]())[_0x3ed517(0x194)](_0x3ce3f0=>this[_0x3ed517(0x180)](_0x3ce3f0)),this[_0x3ed517(0x19a)]();}['deployAttachments'](){const _0x537a55=a339_0x57d0c0,_0x23ac8d=new salesforce_1['CompositeBinaryDeployData']({'instance':this['instance'],'objectName':constants_1['ATTACHMENT_OBJECT_NAME'],'externalIdField':EXTERNAL_ID_FIELD,'allOrNone':![],'api':this[_0x537a55(0x18c)]});return _0x23ac8d[_0x537a55(0x176)](this[_0x537a55(0x170)]);}[a339_0x57d0c0(0x174)](){const _0x25fc49=a339_0x57d0c0,_0x476a41=new salesforce_1[(_0x25fc49(0x17f))]({'instance':this[_0x25fc49(0x19c)],'objectName':constants_1[_0x25fc49(0x153)],'api':this[_0x25fc49(0x18c)],'allOrNone':![],'externalIdField':'Id'});return _0x476a41[_0x25fc49(0x176)]({'records':this['orgComponentsToDeployChunk']});}async[a339_0x57d0c0(0x180)](_0x582baf){const _0x55cc36=a339_0x57d0c0;for(const {success:_0x1f2507,error:_0x59d718}of _0x582baf){if(_0x1f2507){this['successDeployedCounter']++;continue;}_0x59d718&&this['logger'][_0x55cc36(0x165)](_0x59d718);}}['isReachedMaxChunk'](_0x4eb512){const _0x4d5094=a339_0x57d0c0;return _0x4eb512+this[_0x4d5094(0x168)]>=salesforce_1[_0x4d5094(0x166)][_0x4d5094(0x155)]||this[_0x4d5094(0x170)][_0x4d5094(0x196)][_0x4d5094(0x15b)]===MAX_COMPOSITE_CHUNK_COUNT;}[a339_0x57d0c0(0x19a)](){const _0x5cccd6=a339_0x57d0c0;this['binaryRecordsSizeChunk']=0x0,this['attachmentsToDeployChunk']={'records':[],'binary':[]},this[_0x5cccd6(0x151)]=[];}[a339_0x57d0c0(0x163)](_0x4d3139){const _0xc3c6f0=a339_0x57d0c0;for(const _0x16d34e in _0x4d3139){this[_0xc3c6f0(0x151)][_0x16d34e][ATTACHMENT_FIELD_NAME]=_0x4d3139[_0x16d34e]['id'];}}async[a339_0x57d0c0(0x187)](_0x34b929,_0x563bb8){const _0x27efd7=a339_0x57d0c0,{listMetadataItem:_0x5c04a7,sourceMemberRecord:_0x4ea50c}=_0x34b929,_0x7533bb={'attributes':{'type':constants_1[_0x27efd7(0x179)],'binaryPartName':_0x5c04a7[_0x27efd7(0x161)],'binaryPartNameAlias':constants_1[_0x27efd7(0x185)]},'Id':_0x4ea50c['attachmentId'],'Name':_0x5c04a7[_0x27efd7(0x161)],'Description':_0x5c04a7['type'],'ContentType':CONTENT_TYPE,'ParentId':this[_0x27efd7(0x16e)],'Body':_0x5c04a7['fullName']},_0x469cb0={'binaryFieldName':constants_1[_0x27efd7(0x185)],'name':_0x5c04a7[_0x27efd7(0x161)],'value':stream_1[_0x27efd7(0x189)][_0x27efd7(0x15d)](_0x563bb8)};this[_0x27efd7(0x170)][_0x27efd7(0x196)][_0x27efd7(0x156)](_0x7533bb),this[_0x27efd7(0x170)][_0x27efd7(0x17a)][_0x27efd7(0x156)](_0x469cb0);}[a339_0x57d0c0(0x1a6)](_0x66cceb){const _0xd30278=a339_0x57d0c0,_0x50abf9=new jszip_1['default']();for(const _0x4fdd06 in _0x66cceb){_0x50abf9[_0xd30278(0x16c)](_0x4fdd06,_0x66cceb[_0x4fdd06]);}return _0x50abf9[_0xd30278(0x1a5)]({'type':_0xd30278(0x190)});}['addOrgComponentToChunk'](_0x133dd7,_0x13279e){const _0x276cc7=a339_0x57d0c0,_0x2389a0={'attributes':{'type':constants_1[_0x276cc7(0x153)]},'Id':_0x13279e[_0x276cc7(0x18f)],[constants_2[_0x276cc7(0x193)]+_0x276cc7(0x18e)]:_0x13279e[_0x276cc7(0x199)],[constants_2[_0x276cc7(0x193)]+_0x276cc7(0x14f)]:_0x13279e[_0x276cc7(0x173)],[constants_2[_0x276cc7(0x193)]+_0x276cc7(0x15f)]:_0x13279e[_0x276cc7(0x160)],[constants_2[_0x276cc7(0x193)]+_0x276cc7(0x191)]:_0x13279e[_0x276cc7(0x17d)],[constants_2[_0x276cc7(0x193)]+'API_Name__c']:_0x133dd7[_0x276cc7(0x161)],[constants_2[_0x276cc7(0x193)]+_0x276cc7(0x15c)]:_0x133dd7['fullName'],[constants_2[_0x276cc7(0x193)]+_0x276cc7(0x164)]:_0x133dd7[_0x276cc7(0x181)],[constants_2[_0x276cc7(0x193)]+_0x276cc7(0x157)]:_0x133dd7[_0x276cc7(0x167)],[constants_2[_0x276cc7(0x193)]+_0x276cc7(0x17c)]:constants_1['METADATA_FOLDER_MAP'][_0x276cc7(0x1a3)](_0x133dd7[_0x276cc7(0x181)])||null,[constants_2[_0x276cc7(0x193)]+_0x276cc7(0x1a1)]:!![],[constants_2[_0x276cc7(0x193)]+_0x276cc7(0x158)]:this[_0x276cc7(0x16e)],[constants_2[_0x276cc7(0x193)]+_0x276cc7(0x15a)]:this['trackingSettingId'],[constants_2['FLOSUM_NAMESPACE']+_0x276cc7(0x18b)]:_0x276cc7(0x172)};this[_0x276cc7(0x151)][_0x276cc7(0x156)](_0x2389a0);}async['_write'](_0x2ebd8b,_0x4be165,_0x465605){const _0x3eda5e=a339_0x57d0c0;try{const {listMetadataItem:_0x477ef2,sourceMemberRecord:_0x562eee,files:_0x14fb06}=_0x2ebd8b,_0x434c22=await this[_0x3eda5e(0x1a6)](_0x14fb06),_0x1cf308=Buffer[_0x3eda5e(0x19f)](_0x434c22);this[_0x3eda5e(0x182)](_0x1cf308)&&await this[_0x3eda5e(0x175)](),this[_0x3eda5e(0x168)]+=_0x1cf308,await this[_0x3eda5e(0x187)](_0x2ebd8b,_0x434c22),this[_0x3eda5e(0x1a0)](_0x477ef2,_0x562eee),_0x465605();}catch(_0x18c4d8){_0x465605(_0x18c4d8);}}async[a339_0x57d0c0(0x159)](_0x566124){const _0x5528c6=a339_0x57d0c0;try{this[_0x5528c6(0x170)][_0x5528c6(0x196)][_0x5528c6(0x15b)]&&this[_0x5528c6(0x151)][_0x5528c6(0x15b)]&&await this[_0x5528c6(0x175)](),this[_0x5528c6(0x16b)][_0x5528c6(0x197)](_0x5528c6(0x15e)+this[_0x5528c6(0x162)]+_0x5528c6(0x16f)),await this[_0x5528c6(0x16b)][_0x5528c6(0x171)](),_0x566124();}catch(_0xbbf916){_0x566124(_0xbbf916);}}}function a339_0x4d14(_0x100566,_0x5a39e1){const _0x1a445b=a339_0x17e2();return a339_0x4d14=function(_0x31d3da,_0x11eba9){_0x31d3da=_0x31d3da-0x14e;let _0x17e2e1=_0x1a445b[_0x31d3da];return _0x17e2e1;},a339_0x4d14(_0x100566,_0x5a39e1);}exports[a339_0x57d0c0(0x19b)]=ComponentsDeployer;