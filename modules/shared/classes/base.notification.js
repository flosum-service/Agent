const a321_0x465808=a321_0x2252;(function(_0x47a33f,_0xd3d0b){const _0x5371f3=a321_0x2252,_0x5e71a6=_0x47a33f();while(!![]){try{const _0x695f64=parseInt(_0x5371f3(0x6f))/0x1*(-parseInt(_0x5371f3(0x6e))/0x2)+-parseInt(_0x5371f3(0x80))/0x3*(-parseInt(_0x5371f3(0x71))/0x4)+parseInt(_0x5371f3(0x8b))/0x5+parseInt(_0x5371f3(0x8c))/0x6+-parseInt(_0x5371f3(0x70))/0x7+parseInt(_0x5371f3(0x6b))/0x8*(-parseInt(_0x5371f3(0x7e))/0x9)+parseInt(_0x5371f3(0x74))/0xa;if(_0x695f64===_0xd3d0b)break;else _0x5e71a6['push'](_0x5e71a6['shift']());}catch(_0x27a78d){_0x5e71a6['push'](_0x5e71a6['shift']());}}}(a321_0xefa3,0x32ba3));function a321_0xefa3(){const _0x4825a9=['default','sendMail','207EQdmCf','toString','563259ItSkhc','log','_emails','Logger','secure','messageHTML','port','authUser','error','isConfigured','catch','96150CecPUF','1189398pughLv','host','_logger','messageBody','from','execute','__esModule','messageSubject','Sending\x20email\x20notifications\x20to:\x20','53896XAsbOJ','SMTPConfigs','nodemailer','12108gWlhWb','21JIoPYj','2085482vTGSix','4hHwjkp','\x0a{{ses:openTracker}}','createTransport','3825740TDepkW','stack','constructor','defineProperty','(((.+)+)+)+$','apply','Send\x20Notification\x20Error:\x20','../../../configs/smtp.configs'];a321_0xefa3=function(){return _0x4825a9;};return a321_0xefa3();}function a321_0x2252(_0x4c296c,_0x400fd0){const _0x5f5e6=a321_0xefa3();return a321_0x2252=function(_0x391bc2,_0xc20817){_0x391bc2=_0x391bc2-0x6a;let _0xefa350=_0x5f5e6[_0x391bc2];return _0xefa350;},a321_0x2252(_0x4c296c,_0x400fd0);}const a321_0xc20817=(function(){let _0x12e0bf=!![];return function(_0x1814ad,_0x21a749){const _0x127f94=_0x12e0bf?function(){const _0x282153=a321_0x2252;if(_0x21a749){const _0x51561b=_0x21a749[_0x282153(0x79)](_0x1814ad,arguments);return _0x21a749=null,_0x51561b;}}:function(){};return _0x12e0bf=![],_0x127f94;};}()),a321_0x391bc2=a321_0xc20817(this,function(){const _0x4a01cb=a321_0x2252;return a321_0x391bc2['toString']()['search'](_0x4a01cb(0x78))[_0x4a01cb(0x7f)]()[_0x4a01cb(0x76)](a321_0x391bc2)['search']('(((.+)+)+)+$');});a321_0x391bc2();'use strict';Object[a321_0x465808(0x77)](exports,a321_0x465808(0x92),{'value':!![]});const nodemailer_1=require(a321_0x465808(0x6d)),smtp_configs_1=require(a321_0x465808(0x7b)),core_1=require('../../../core');class BaseNotification{constructor({emails:_0x279334,loggerName:_0x5b06f4}){const _0x1f53c0=a321_0x465808;this[_0x1f53c0(0x8e)]=new core_1[(_0x1f53c0(0x83))](_0x5b06f4),this[_0x1f53c0(0x82)]=_0x279334;}get[a321_0x465808(0x85)](){const _0x2f7135=a321_0x465808;let _0x27b54a=this[_0x2f7135(0x8f)];return smtp_configs_1[_0x2f7135(0x6c)]['isTrackOpenings']&&(_0x27b54a+=_0x2f7135(0x72)),_0x27b54a;}async[a321_0x465808(0x91)](){const _0x40c7bd=a321_0x465808;if(!smtp_configs_1[_0x40c7bd(0x6c)][_0x40c7bd(0x89)]){this['_logger'][_0x40c7bd(0x81)]('Email\x20notifications\x20is\x20not\x20configured.');return;}const _0x5dd170=(0x0,nodemailer_1[_0x40c7bd(0x73)])({'host':smtp_configs_1[_0x40c7bd(0x6c)][_0x40c7bd(0x8d)],'port':smtp_configs_1[_0x40c7bd(0x6c)][_0x40c7bd(0x86)],'secure':smtp_configs_1['SMTPConfigs'][_0x40c7bd(0x84)],'auth':{'user':smtp_configs_1[_0x40c7bd(0x6c)][_0x40c7bd(0x87)],'pass':smtp_configs_1[_0x40c7bd(0x6c)]['authPassword'],'type':smtp_configs_1[_0x40c7bd(0x6c)]['authType']}}),_0x62f578={'subject':this[_0x40c7bd(0x93)],'html':this[_0x40c7bd(0x85)]};this[_0x40c7bd(0x8e)][_0x40c7bd(0x81)](_0x40c7bd(0x6a)+this[_0x40c7bd(0x82)]);for(const _0x1e9be0 of this[_0x40c7bd(0x82)]){await _0x5dd170[_0x40c7bd(0x7d)]({'to':_0x1e9be0,'from':smtp_configs_1[_0x40c7bd(0x6c)][_0x40c7bd(0x90)],..._0x62f578})[_0x40c7bd(0x8a)](_0x4d4c6a=>{const _0x28a335=_0x40c7bd;this[_0x28a335(0x8e)][_0x28a335(0x88)](_0x28a335(0x7a)+_0x4d4c6a['message']+'\x20'+_0x4d4c6a[_0x28a335(0x75)]);});}}}exports[a321_0x465808(0x7c)]=BaseNotification;