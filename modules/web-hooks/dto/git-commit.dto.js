const a177_0x140249=a177_0x3dfa;(function(_0x2257ca,_0x262efe){const _0x202153=a177_0x3dfa,_0x295cd7=_0x2257ca();while(!![]){try{const _0x1d26ee=parseInt(_0x202153(0x1ae))/0x1*(parseInt(_0x202153(0x1b6))/0x2)+parseInt(_0x202153(0x1c4))/0x3+parseInt(_0x202153(0x1a7))/0x4*(-parseInt(_0x202153(0x1ad))/0x5)+-parseInt(_0x202153(0x1c7))/0x6*(-parseInt(_0x202153(0x1a6))/0x7)+parseInt(_0x202153(0x1c9))/0x8+-parseInt(_0x202153(0x1b2))/0x9+-parseInt(_0x202153(0x1dd))/0xa*(parseInt(_0x202153(0x1ac))/0xb);if(_0x1d26ee===_0x262efe)break;else _0x295cd7['push'](_0x295cd7['shift']());}catch(_0x17bd88){_0x295cd7['push'](_0x295cd7['shift']());}}}(a177_0x1f47,0xd2adc));const a177_0xcf59e=(function(){let _0x3aada8=!![];return function(_0x4cce5a,_0x54997a){const _0x27e787=_0x3aada8?function(){if(_0x54997a){const _0x249c9f=_0x54997a['apply'](_0x4cce5a,arguments);return _0x54997a=null,_0x249c9f;}}:function(){};return _0x3aada8=![],_0x27e787;};}()),a177_0x372ee6=a177_0xcf59e(this,function(){const _0x1415bf=a177_0x3dfa;return a177_0x372ee6['toString']()['search']('(((.+)+)+)+$')['toString']()[_0x1415bf(0x1df)](a177_0x372ee6)[_0x1415bf(0x1d0)](_0x1415bf(0x1cd));});a177_0x372ee6();function a177_0x1f47(){const _0x4fc3eb=['constructor','refs/heads/','GitCommitDto','fromGithub','branch','eventType','.git','29918Wfnrze','12IdWEQS','find','x-event-key','headers','push','1562WvWKBW','1346005dAIlUO','1614178CVUzog','hash','clone','resource','12660840LBhsry','pushedBy','fromGitlab','replace','2WTraTu','ERR_UNKNOWN','clone_url','actor','git_http_url','ref','displayName','name','remoteUrl','x-github-event','fromBitbucket','new','repository','repo:refs_changed','4839879yFhFCQ','toHash','startsWith','1878AejQpF','refUpdates','3293968gEhiML','fromBitbucketServer','Push\x20Hook','BadRequestError','(((.+)+)+)+$','commitId','repositoryGit','search','req','changes','fromAzure','username','__esModule','refId','links','body','../../../constants/errors','target','git.push','map','133780Rqufvk','commits'];a177_0x1f47=function(){return _0x4fc3eb;};return a177_0x1f47();}function a177_0x3dfa(_0x4dc715,_0x1abd56){const _0x20bd69=a177_0x1f47();return a177_0x3dfa=function(_0x372ee6,_0xcf59e){_0x372ee6=_0x372ee6-0x1a6;let _0x1f47f1=_0x20bd69[_0x372ee6];return _0x1f47f1;},a177_0x3dfa(_0x4dc715,_0x1abd56);}'use strict';Object['defineProperty'](exports,a177_0x140249(0x1d5),{'value':!![]}),exports[a177_0x140249(0x1e1)]=void 0x0;const errors_1=require(a177_0x140249(0x1d9)),bad_request_error_1=require('../../../core/errors/bad-request.error');class GitCommitDto{constructor(){this['force']=![];}static[a177_0x140249(0x1ca)](_0x16ed0b){const _0x24ca69=a177_0x140249;var _0x3c9b17,_0x273046;if(_0x16ed0b['req'][_0x24ca69(0x1aa)][_0x24ca69(0x1a9)]!==_0x24ca69(0x1c3))throw new bad_request_error_1[(_0x24ca69(0x1cc))](errors_1[_0x24ca69(0x1b7)]);const _0x156827=new GitCommitDto(),_0xa31eaa=_0x16ed0b['req']['body'];return _0x156827['repository']=_0xa31eaa[_0x24ca69(0x1c2)][_0x24ca69(0x1bd)],_0x156827['branch']=_0xa31eaa[_0x24ca69(0x1d2)][0x0][_0x24ca69(0x1d6)]['replace']('refs/heads/',''),_0x156827['repositoryGit']=(_0x273046=(_0x3c9b17=_0xa31eaa[_0x24ca69(0x1c2)]['links'][_0x24ca69(0x1b0)])===null||_0x3c9b17===void 0x0?void 0x0:_0x3c9b17[_0x24ca69(0x1a8)](_0x555503=>_0x555503[_0x24ca69(0x1bd)][_0x24ca69(0x1c6)]('http')))===null||_0x273046===void 0x0?void 0x0:_0x273046['href'],_0x156827[_0x24ca69(0x1d4)]=_0xa31eaa[_0x24ca69(0x1b9)]['displayName'],_0x156827[_0x24ca69(0x1de)]=_0xa31eaa[_0x24ca69(0x1d2)][_0x24ca69(0x1dc)](_0x344946=>({'id':_0x344946[_0x24ca69(0x1c5)]})),_0x156827;}static[a177_0x140249(0x1c0)](_0x173cc5){const _0x2ecb0a=a177_0x140249;if(_0x173cc5[_0x2ecb0a(0x1d1)][_0x2ecb0a(0x1aa)][_0x2ecb0a(0x1a9)]!=='repo:push')throw new bad_request_error_1[(_0x2ecb0a(0x1cc))](errors_1[_0x2ecb0a(0x1b7)]);const _0x1942c1=new GitCommitDto(),_0x40c0fa=_0x173cc5[_0x2ecb0a(0x1d1)][_0x2ecb0a(0x1d8)];return _0x1942c1[_0x2ecb0a(0x1c2)]=_0x40c0fa[_0x2ecb0a(0x1c2)][_0x2ecb0a(0x1bd)],_0x1942c1['branch']=_0x40c0fa[_0x2ecb0a(0x1ab)][_0x2ecb0a(0x1d2)][0x0][_0x2ecb0a(0x1c1)][_0x2ecb0a(0x1bd)][_0x2ecb0a(0x1b5)](_0x2ecb0a(0x1e0),''),_0x1942c1[_0x2ecb0a(0x1cf)]=_0x40c0fa[_0x2ecb0a(0x1c2)][_0x2ecb0a(0x1d7)]['html']['href']+_0x2ecb0a(0x1e5),_0x1942c1[_0x2ecb0a(0x1d4)]='',_0x1942c1[_0x2ecb0a(0x1de)]=_0x40c0fa[_0x2ecb0a(0x1ab)][_0x2ecb0a(0x1d2)][_0x2ecb0a(0x1dc)](_0x3cf6f8=>({'id':_0x3cf6f8[_0x2ecb0a(0x1c1)][_0x2ecb0a(0x1da)][_0x2ecb0a(0x1af)]})),_0x1942c1;}static[a177_0x140249(0x1d3)](_0x265415){const _0xb16426=a177_0x140249;if(_0x265415[_0xb16426(0x1d1)][_0xb16426(0x1d8)][_0xb16426(0x1e4)]!==_0xb16426(0x1db))throw new bad_request_error_1[(_0xb16426(0x1cc))](errors_1[_0xb16426(0x1b7)]);const _0x48f872=new GitCommitDto(),_0x99785d=_0x265415['req']['body'][_0xb16426(0x1b1)];return _0x48f872[_0xb16426(0x1c2)]=_0x99785d[_0xb16426(0x1c2)][_0xb16426(0x1bd)],_0x48f872['branch']=_0x99785d[_0xb16426(0x1c8)][0x0][_0xb16426(0x1bd)][_0xb16426(0x1b5)](_0xb16426(0x1e0),''),_0x48f872['repositoryGit']=_0x99785d[_0xb16426(0x1c2)][_0xb16426(0x1be)],_0x48f872[_0xb16426(0x1d4)]=_0x99785d[_0xb16426(0x1b3)][_0xb16426(0x1bc)],_0x48f872[_0xb16426(0x1de)]=_0x99785d[_0xb16426(0x1de)][_0xb16426(0x1dc)](_0x3a45c3=>({'id':_0x3a45c3[_0xb16426(0x1ce)]})),_0x48f872;}static[a177_0x140249(0x1b4)](_0xf365aa){const _0x287c20=a177_0x140249;if(_0xf365aa[_0x287c20(0x1d1)]['headers']['x-gitlab-event']!==_0x287c20(0x1cb))throw new bad_request_error_1['BadRequestError'](errors_1[_0x287c20(0x1b7)]);const _0x12a100=new GitCommitDto(),_0x49e273=_0xf365aa[_0x287c20(0x1d1)]['body'];return _0x12a100[_0x287c20(0x1c2)]=_0x49e273[_0x287c20(0x1c2)][_0x287c20(0x1bd)],_0x12a100[_0x287c20(0x1e3)]=_0x49e273['ref']['replace']('refs/heads/',''),_0x12a100[_0x287c20(0x1cf)]=_0x49e273['repository'][_0x287c20(0x1ba)],_0x12a100[_0x287c20(0x1d4)]=_0x49e273['user_username'],_0x12a100['commits']=_0x49e273[_0x287c20(0x1de)][_0x287c20(0x1dc)](_0x3cfcf9=>({'id':_0x3cfcf9['id']})),_0x12a100;}static[a177_0x140249(0x1e2)](_0x8ae0b5){const _0x2eb2e3=a177_0x140249;if(_0x8ae0b5['req'][_0x2eb2e3(0x1aa)][_0x2eb2e3(0x1bf)]!==_0x2eb2e3(0x1ab))throw new bad_request_error_1[(_0x2eb2e3(0x1cc))](errors_1[_0x2eb2e3(0x1b7)]);const _0x44e4b6=new GitCommitDto(),_0x18803b=_0x8ae0b5[_0x2eb2e3(0x1d1)]['body'];return _0x44e4b6[_0x2eb2e3(0x1c2)]=_0x18803b[_0x2eb2e3(0x1c2)][_0x2eb2e3(0x1bd)],_0x44e4b6['branch']=_0x18803b[_0x2eb2e3(0x1bb)]['replace']('refs/heads/',''),_0x44e4b6[_0x2eb2e3(0x1cf)]=_0x18803b[_0x2eb2e3(0x1c2)][_0x2eb2e3(0x1b8)],_0x44e4b6[_0x2eb2e3(0x1d4)]=_0x18803b['pusher'][_0x2eb2e3(0x1bd)],_0x44e4b6[_0x2eb2e3(0x1de)]=_0x18803b[_0x2eb2e3(0x1de)]['map'](_0x1bd5b8=>({'id':_0x1bd5b8['id']})),_0x44e4b6;}}exports[a177_0x140249(0x1e1)]=GitCommitDto;