const a369_0x369afd=a369_0x510e;function a369_0x510e(_0x1dd0b9,_0x51e1b9){const _0xc5dcd0=a369_0x1b14();return a369_0x510e=function(_0x211ac2,_0x6ce9ee){_0x211ac2=_0x211ac2-0x1a5;let _0x1b14d1=_0xc5dcd0[_0x211ac2];return _0x1b14d1;},a369_0x510e(_0x1dd0b9,_0x51e1b9);}(function(_0xfb4459,_0x2c0427){const _0xcc553=a369_0x510e,_0x5f59ff=_0xfb4459();while(!![]){try{const _0x24249c=parseInt(_0xcc553(0x1b8))/0x1*(parseInt(_0xcc553(0x1b7))/0x2)+-parseInt(_0xcc553(0x1b2))/0x3+parseInt(_0xcc553(0x1ab))/0x4+-parseInt(_0xcc553(0x1af))/0x5+-parseInt(_0xcc553(0x1bd))/0x6*(parseInt(_0xcc553(0x1c1))/0x7)+-parseInt(_0xcc553(0x1ad))/0x8*(parseInt(_0xcc553(0x1b5))/0x9)+parseInt(_0xcc553(0x1bc))/0xa;if(_0x24249c===_0x2c0427)break;else _0x5f59ff['push'](_0x5f59ff['shift']());}catch(_0x238f8b){_0x5f59ff['push'](_0x5f59ff['shift']());}}}(a369_0x1b14,0x9a00b));const a369_0x6ce9ee=(function(){let _0x379927=!![];return function(_0x30bf31,_0x4ac644){const _0x39aa1a=_0x379927?function(){if(_0x4ac644){const _0x3f1c40=_0x4ac644['apply'](_0x30bf31,arguments);return _0x4ac644=null,_0x3f1c40;}}:function(){};return _0x379927=![],_0x39aa1a;};}()),a369_0x211ac2=a369_0x6ce9ee(this,function(){const _0x128db6=a369_0x510e;return a369_0x211ac2[_0x128db6(0x1be)]()[_0x128db6(0x1bb)]('(((.+)+)+)+$')[_0x128db6(0x1be)]()['constructor'](a369_0x211ac2)['search'](_0x128db6(0x1a5));});a369_0x211ac2();'use strict';Object['defineProperty'](exports,a369_0x369afd(0x1b1),{'value':!![]}),exports[a369_0x369afd(0x1ba)]=void 0x0;const veeva_component_dto_1=require(a369_0x369afd(0x1aa));function a369_0x1b14(){const _0x26ad4f=['7110355sbCdWE','(((.+)+)+)+$','reduce','formQuery','retrieve','inactive__v','../../../dtos/veeva-component.dto','3096876gPWKHT','log','25616iLzIhd','logger','4477525GbHmlQ','formComponents','__esModule','2681763lDBBBN','getQueries','Retrieve\x20collection\x20metadata\x20of\x20components','2538DycHEx','includes','107132duNfth','23Uonpzn','filterAndLogByStatus','BaseVeevaComponentRetriever','search','23327130oXQwlX','6YvkxJb','toString','\x0a\x20\x20\x20\x20\x20\x20\x20\x20SELECT\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20component_modified_date__sys,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20component_name__v,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20component_type__v,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20status__v\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20vault_component__v\x0a\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20','veevaService'];a369_0x1b14=function(){return _0x26ad4f;};return a369_0x1b14();}class BaseVeevaComponentRetriever{constructor({value:_0x508f2d,veevaService:_0x2a0eb2,logger:_0x2cac1a}){const _0x3154d0=a369_0x369afd;this['value']=_0x508f2d,this[_0x3154d0(0x1c0)]=_0x2a0eb2,this[_0x3154d0(0x1ae)]=_0x2cac1a;}[a369_0x369afd(0x1a7)](_0x4aa366){const _0x71672e=a369_0x369afd;return _0x71672e(0x1bf)+_0x4aa366;}[a369_0x369afd(0x1b9)](_0x3d2425){const _0x205d2d=a369_0x369afd;return _0x3d2425[_0x205d2d(0x1a6)]((_0x3beaa6,_0x845118)=>{const _0x246533=_0x205d2d,{name:_0x4b7362,type:_0x302f08,status:_0x235b1c}=_0x845118;return _0x235b1c[_0x246533(0x1b6)](_0x246533(0x1a9))?this['logger']['log']('Cannot\x20retrieve\x20component\x20with\x20inactive\x20status.\x20Component:\x20'+_0x302f08+'.'+_0x4b7362):_0x3beaa6['push'](_0x845118),_0x3beaa6;},[]);}[a369_0x369afd(0x1b0)](_0x49d106){return _0x49d106['map'](_0x452419=>new veeva_component_dto_1['VeevaComponentDto'](_0x452419));}async[a369_0x369afd(0x1a8)](){const _0x1eb161=a369_0x369afd;this[_0x1eb161(0x1ae)][_0x1eb161(0x1ac)](_0x1eb161(0x1b4));const _0x3ea273=this[_0x1eb161(0x1b3)](),_0x1fbbf6=await this[_0x1eb161(0x1c0)]['executeManyVQL'](_0x3ea273),_0x19ff83=this[_0x1eb161(0x1b0)](_0x1fbbf6);return this[_0x1eb161(0x1b9)](_0x19ff83);}}exports[a369_0x369afd(0x1ba)]=BaseVeevaComponentRetriever;