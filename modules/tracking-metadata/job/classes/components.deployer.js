const a339_0x1eaafb=a339_0x57e5;(function(_0x4e69df,_0x5a0573){const _0x57af2c=a339_0x57e5,_0x39648f=_0x4e69df();while(!![]){try{const _0x107125=parseInt(_0x57af2c(0x1e4))/0x1*(parseInt(_0x57af2c(0x1f6))/0x2)+-parseInt(_0x57af2c(0x1c6))/0x3*(parseInt(_0x57af2c(0x1ca))/0x4)+-parseInt(_0x57af2c(0x1d3))/0x5+-parseInt(_0x57af2c(0x1eb))/0x6+parseInt(_0x57af2c(0x1ab))/0x7+parseInt(_0x57af2c(0x1da))/0x8+-parseInt(_0x57af2c(0x1d1))/0x9*(parseInt(_0x57af2c(0x1e0))/0xa);if(_0x107125===_0x5a0573)break;else _0x39648f['push'](_0x39648f['shift']());}catch(_0x4f4531){_0x39648f['push'](_0x39648f['shift']());}}}(a339_0x32e6,0x5710f));function a339_0x32e6(){const _0x4b1a59=['orgComponentsToDeployChunk','51znLdsL','jszip','from','FLOSUM_NAMESPACE','41852tiEvWf','defineProperty','@flosum/salesforce','componentId','populateAttachmentId','apiVersion','deployOrgComponents','201672TwCEqa','BINARY_FIELD_NAME','1479525nZgSfq','targetOrgId','generateAsync','revisionCounter','binaryRecordsSizeChunk','MAX_BODY_SIZE','execute','1569568hfbjeC','type','logger','fileName','addAttachmentToChunk','search','20qtacGg','Retrieved','ORG_COMPONENT_OBJECT_NAME','binary','3lpmhqH','fullName','Process\x20completed\x20for\x20','ComponentsDeployer','push','__importDefault','deploy','2292876zqyfmk','CompositeBinaryDeployData','__esModule','handleDeployResult','length','log','records','addOrgComponentToChunk','Is_Deleted__c','\x20components','METADATA_FOLDER_MAP','424882bSOaWu','Source_Member_Id__c','2966894utUjpp','toString','stream','API_Name__c','Tracking_Setting__c','Component_Type__c','nodebuffer','instance','_final','default','Readable','then','../../constants','_write','Attachment_ID__c','has','deployAttachments','(((.+)+)+)+$','successDeployedCounter','createZip','constructor','Is_Retrieved__c','apply','error','attachmentsToDeployChunk','Revision_Counter__c'];a339_0x32e6=function(){return _0x4b1a59;};return a339_0x32e6();}function a339_0x57e5(_0x83f626,_0x50ed98){const _0x365913=a339_0x32e6();return a339_0x57e5=function(_0x42f1fd,_0x3af266){_0x42f1fd=_0x42f1fd-0x1ab;let _0x32e6ea=_0x365913[_0x42f1fd];return _0x32e6ea;},a339_0x57e5(_0x83f626,_0x50ed98);}const a339_0x3af266=(function(){let _0x206c03=!![];return function(_0x3fd53c,_0x39c010){const _0x2e6bc1=_0x206c03?function(){const _0x574d33=a339_0x57e5;if(_0x39c010){const _0x1e8bfc=_0x39c010[_0x574d33(0x1c1)](_0x3fd53c,arguments);return _0x39c010=null,_0x1e8bfc;}}:function(){};return _0x206c03=![],_0x2e6bc1;};}()),a339_0x42f1fd=a339_0x3af266(this,function(){const _0x2d800a=a339_0x57e5;return a339_0x42f1fd[_0x2d800a(0x1ac)]()[_0x2d800a(0x1df)](_0x2d800a(0x1bc))['toString']()[_0x2d800a(0x1bf)](a339_0x42f1fd)[_0x2d800a(0x1df)](_0x2d800a(0x1bc));});a339_0x42f1fd();'use strict';var __importDefault=this&&this[a339_0x1eaafb(0x1e9)]||function(_0x3bc44d){const _0x4e21b5=a339_0x1eaafb;return _0x3bc44d&&_0x3bc44d[_0x4e21b5(0x1ed)]?_0x3bc44d:{'default':_0x3bc44d};};Object[a339_0x1eaafb(0x1cb)](exports,a339_0x1eaafb(0x1ed),{'value':!![]}),exports['ComponentsDeployer']=void 0x0;const salesforce_1=require(a339_0x1eaafb(0x1cc)),constants_1=require(a339_0x1eaafb(0x1b7)),stream_1=require(a339_0x1eaafb(0x1ad)),jszip_1=__importDefault(require(a339_0x1eaafb(0x1c7))),constants_2=require('../../../../constants'),MAX_COMPOSITE_CHUNK_COUNT=0xc8,EXTERNAL_ID_FIELD='Id',ATTACHMENT_FIELD_NAME=constants_2[a339_0x1eaafb(0x1c9)]+a339_0x1eaafb(0x1b9),CONTENT_TYPE='application/zip';class ComponentsDeployer extends stream_1['Writable']{constructor({apiVersion:_0x5ebffe,instance:_0x402337,logger:_0x5d5e6b,targetOrgId:_0x1c1727,trackingSettingId:_0x219b50}){const _0x169d67=a339_0x1eaafb;super({'objectMode':!![]}),this['attachmentsToDeployChunk']={'records':[],'binary':[]},this[_0x169d67(0x1d7)]=0x0,this['orgComponentsToDeployChunk']=[],this['successDeployedCounter']=0x0,this[_0x169d67(0x1cf)]=_0x5ebffe,this['instance']=_0x402337,this[_0x169d67(0x1dc)]=_0x5d5e6b,this[_0x169d67(0x1d4)]=_0x1c1727,this['trackingSettingId']=_0x219b50;}async[a339_0x1eaafb(0x1ea)](){const _0x1efb10=a339_0x1eaafb;await this[_0x1efb10(0x1bb)]()['then'](_0x6972ea=>this['populateAttachmentId'](_0x6972ea))[_0x1efb10(0x1b6)](()=>this[_0x1efb10(0x1d0)]())[_0x1efb10(0x1b6)](_0x289745=>this[_0x1efb10(0x1ee)](_0x289745)),this['resetChunks']();}[a339_0x1eaafb(0x1bb)](){const _0xb606e4=a339_0x1eaafb,_0x286f8b=new salesforce_1[(_0xb606e4(0x1ec))]({'instance':this[_0xb606e4(0x1b2)],'objectName':constants_1['ATTACHMENT_OBJECT_NAME'],'externalIdField':EXTERNAL_ID_FIELD,'allOrNone':![],'api':this[_0xb606e4(0x1cf)]});return _0x286f8b['execute'](this[_0xb606e4(0x1c3)]);}[a339_0x1eaafb(0x1d0)](){const _0x560937=a339_0x1eaafb,_0x13892c=new salesforce_1['RestSimpleDeployData']({'instance':this[_0x560937(0x1b2)],'objectName':constants_1['ORG_COMPONENT_OBJECT_NAME'],'api':this[_0x560937(0x1cf)],'allOrNone':![],'externalIdField':'Id'});return _0x13892c[_0x560937(0x1d9)]({'records':this[_0x560937(0x1c5)]});}async[a339_0x1eaafb(0x1ee)](_0x1a9028){const _0x4e2c26=a339_0x1eaafb;for(const {success:_0x3b6b1b,error:_0x719435}of _0x1a9028){if(_0x3b6b1b){this[_0x4e2c26(0x1bd)]++;continue;}_0x719435&&this[_0x4e2c26(0x1dc)][_0x4e2c26(0x1c2)](_0x719435);}}['isReachedMaxChunk'](_0x118fb4){const _0x1fc5b7=a339_0x1eaafb;return _0x118fb4+this['binaryRecordsSizeChunk']>=salesforce_1['CompositeConstants'][_0x1fc5b7(0x1d8)]||this[_0x1fc5b7(0x1c3)][_0x1fc5b7(0x1f1)][_0x1fc5b7(0x1ef)]===MAX_COMPOSITE_CHUNK_COUNT;}['resetChunks'](){const _0x134296=a339_0x1eaafb;this[_0x134296(0x1d7)]=0x0,this['attachmentsToDeployChunk']={'records':[],'binary':[]},this[_0x134296(0x1c5)]=[];}[a339_0x1eaafb(0x1ce)](_0xaf9a3a){for(const _0x251e8e in _0xaf9a3a){this['orgComponentsToDeployChunk'][_0x251e8e][ATTACHMENT_FIELD_NAME]=_0xaf9a3a[_0x251e8e]['id'];}}async[a339_0x1eaafb(0x1de)](_0x5e985c,_0x5f5436){const _0x11f1d3=a339_0x1eaafb,{listMetadataItem:_0x4fbf5e,sourceMemberRecord:_0x5cccc2}=_0x5e985c,_0xd268dd={'attributes':{'type':constants_1['ATTACHMENT_OBJECT_NAME'],'binaryPartName':_0x4fbf5e[_0x11f1d3(0x1e5)],'binaryPartNameAlias':constants_1[_0x11f1d3(0x1d2)]},'Id':_0x5cccc2['attachmentId'],'Name':_0x4fbf5e[_0x11f1d3(0x1e5)],'Description':_0x4fbf5e[_0x11f1d3(0x1db)],'ContentType':CONTENT_TYPE,'ParentId':this[_0x11f1d3(0x1d4)],'Body':_0x4fbf5e[_0x11f1d3(0x1e5)]},_0x5ae375={'binaryFieldName':constants_1[_0x11f1d3(0x1d2)],'name':_0x4fbf5e['fullName'],'value':stream_1[_0x11f1d3(0x1b5)][_0x11f1d3(0x1c8)](_0x5f5436)};this[_0x11f1d3(0x1c3)]['records'][_0x11f1d3(0x1e8)](_0xd268dd),this['attachmentsToDeployChunk'][_0x11f1d3(0x1e3)][_0x11f1d3(0x1e8)](_0x5ae375);}[a339_0x1eaafb(0x1be)](_0x41ad85){const _0xaecb3c=a339_0x1eaafb,_0x5181bc=new jszip_1[(_0xaecb3c(0x1b4))]();for(const _0x255203 in _0x41ad85){_0x5181bc['file'](_0x255203,_0x41ad85[_0x255203]);}return _0x5181bc[_0xaecb3c(0x1d5)]({'type':_0xaecb3c(0x1b1)});}['addOrgComponentToChunk'](_0x323ccf,_0x430ef1){const _0x5099fd=a339_0x1eaafb,_0x2762a4={'attributes':{'type':constants_1[_0x5099fd(0x1e2)]},'Id':_0x430ef1[_0x5099fd(0x1cd)],[constants_2[_0x5099fd(0x1c9)]+_0x5099fd(0x1f3)]:_0x430ef1['isNameObsolete'],[constants_2[_0x5099fd(0x1c9)]+_0x5099fd(0x1c4)]:_0x430ef1[_0x5099fd(0x1d6)],[constants_2['FLOSUM_NAMESPACE']+_0x5099fd(0x1f7)]:_0x430ef1['sourceMemberId'],[constants_2[_0x5099fd(0x1c9)]+'Last_Updated_By__c']:_0x430ef1['changedBy'],[constants_2[_0x5099fd(0x1c9)]+_0x5099fd(0x1ae)]:_0x323ccf[_0x5099fd(0x1e5)],[constants_2[_0x5099fd(0x1c9)]+'Name__c']:_0x323ccf[_0x5099fd(0x1e5)],[constants_2[_0x5099fd(0x1c9)]+_0x5099fd(0x1b0)]:_0x323ccf[_0x5099fd(0x1db)],[constants_2[_0x5099fd(0x1c9)]+'Label__c']:_0x323ccf[_0x5099fd(0x1dd)],[constants_2[_0x5099fd(0x1c9)]+'Folder__c']:constants_1[_0x5099fd(0x1f5)][_0x5099fd(0x1ba)](_0x323ccf[_0x5099fd(0x1db)])||null,[constants_2[_0x5099fd(0x1c9)]+_0x5099fd(0x1c0)]:!![],[constants_2[_0x5099fd(0x1c9)]+'OrganisationName__c']:this[_0x5099fd(0x1d4)],[constants_2['FLOSUM_NAMESPACE']+_0x5099fd(0x1af)]:this['trackingSettingId'],[constants_2[_0x5099fd(0x1c9)]+'Status__c']:_0x5099fd(0x1e1)};this[_0x5099fd(0x1c5)][_0x5099fd(0x1e8)](_0x2762a4);}async[a339_0x1eaafb(0x1b8)](_0x545463,_0x5b408f,_0x5c9303){const _0x37ee6e=a339_0x1eaafb;try{const {listMetadataItem:_0x489849,sourceMemberRecord:_0x1f99c4,files:_0x4c5343}=_0x545463,_0x280edd=await this[_0x37ee6e(0x1be)](_0x4c5343),_0x1f5650=Buffer['byteLength'](_0x280edd);this['isReachedMaxChunk'](_0x1f5650)&&await this[_0x37ee6e(0x1ea)](),this[_0x37ee6e(0x1d7)]+=_0x1f5650,await this['addAttachmentToChunk'](_0x545463,_0x280edd),this[_0x37ee6e(0x1f2)](_0x489849,_0x1f99c4),_0x5c9303();}catch(_0x2b91f6){_0x5c9303(_0x2b91f6);}}async[a339_0x1eaafb(0x1b3)](_0x5b288a){const _0x29187f=a339_0x1eaafb;try{this[_0x29187f(0x1c3)][_0x29187f(0x1f1)]['length']&&this[_0x29187f(0x1c5)]['length']&&await this['deploy'](),this[_0x29187f(0x1dc)][_0x29187f(0x1f0)](_0x29187f(0x1e6)+this[_0x29187f(0x1bd)]+_0x29187f(0x1f4)),await this[_0x29187f(0x1dc)]['update'](),_0x5b288a();}catch(_0x472af9){_0x5b288a(_0x472af9);}}}exports[a339_0x1eaafb(0x1e7)]=ComponentsDeployer;