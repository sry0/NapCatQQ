function _0x6c24(){const _0x1aba3c=['otSvN','mcaXD','8116776pqsjHu','aaAWb','addKernelGroupListener','initDataListener','startNT','onBuddyListChange','diMJB','base64','24qOhInA','homedir','constructor','mkdirSync','NodeIKernelLoginListener','floor','initSession\x20failed','addKernelLoginListener','LLCkd','\x20has\x20no\x20method\x20','NodeIKernelGroupListener','session','initWithDeskTopConfig','onLoginFailed','hFHZK','initConfig','resolve','onMemberInfoChange','jmtiZ','getQRCodePicture','hex','uin','getNextMemberList','packet_sent','YXjuQ','clientType','addKernelProfileListener','delete','5792283aHOjny','ijign','onLoginSuccessFuncList','catch','loginService','hVCIh','onLoginSuccess','onMemberListChange','Tgpal','onRecvMsg','devUid','NZKTC','NodeIKernelMsgListener','LocalLoginInfoList','ProfileListener','getMsgService','now','onSelfStatusChanged','onKickedOffLine','登录失败(onQRCodeSessionFailed)','WjLcU','onSessionInitComplete','FMfzq','initSession','lRcrH','init\x20failed\x20','length','onLineDev','pngBase64QrcodeData','proxyHandler','infos','data:image/png;base64,','NodeIKernelSessionListener','btKgx','getBuddyService','onUserLoggedIn','4598ZEiDPT','curVersion','consoleLogLevel','xvRjf','140022013','-v2.db','getBuddyList','UbWth','loginListener','675712kqxNqF','qpajM','启动失败:\x20','dataPath','then','onQRCodeLoginSucceed','getLoginList','uid','xbcOD','update','rspUe',')已登录,无法重复登录','NodeIKernelProfileListener','find','NodeIKernelBuddyListener','errMsg','YqsEN','read','EZJFS','assign','YbVPI','last_message_time','3043524YzGUBQ','GQULU','NodeIDispatcherAdapter','util','cxLsA','passwordLogin','./NapCat/data','DqOZe','has','groupCode','groupMemberList_MainWindow','zzpqU','memberCount','JToTV','HBYpQ','967350pcgYkh','pPWTm','bGveb','数据库初始化失败','NodeIQQNTWrapperEngine','BtJEw','GDEDN','get','快速登录不可用','message_received','3261189KhGNpR','快速登录失败\x20','addListener','onQRCodeSessionFailed','fUkli','createMemberListScene','quickLoginWithUin','undefined','384EovBGY','账号设备(','result','quickLogin','fileLog','本账号数据/缓存目录：','IBlDJ','map','rHDzb','dataPathGlobal','onProfileDetailInfoChanged','addKernelMsgListener','from','nXZgM','NodeIQQNTWrapperSession','./.config/QQ','qrLogin','GroupListener','init','getProfileService','fileLogLevel','set','qrcodeUrl','tioVy','NodeIDependsAdapter','xXmrY','NodeIGlobalAdapter','kWdyw','BuddyListener','iwQMn','loginErrorInfo','rZLmJ','./nt_qq/global','登录失败(onLoginFailed)','getGroupService','isQuickLogin','enEew','isDelete','split','engine','getNTUserDataInfoConfig','digest','zyhlp','_GW_B','tEJFf','ehEEt','jcbgz','md5','message_sent','replace','RdOcK','Windows\x2010\x20Pro','packet_received','name','sceneId'];_0x6c24=function(){return _0x1aba3c;};return _0x6c24();}const _0x1cb4e3=_0x1dae;(function(_0x1fa25a,_0x55774e){const _0xf4eb40=_0x1dae,_0x191466=_0x1fa25a();while(!![]){try{const _0x48f86b=parseInt(_0xf4eb40(0xe4))/0x1*(parseInt(_0xf4eb40(0x124))/0x2)+parseInt(_0xf4eb40(0x11c))/0x3+-parseInt(_0xf4eb40(0x103))/0x4+parseInt(_0xf4eb40(0x112))/0x5*(-parseInt(_0xf4eb40(0x165))/0x6)+-parseInt(_0xf4eb40(0xc0))/0x7+parseInt(_0xf4eb40(0xed))/0x8+parseInt(_0xf4eb40(0x15d))/0x9;if(_0x48f86b===_0x55774e)break;else _0x191466['push'](_0x191466['shift']());}catch(_0x20233a){_0x191466['push'](_0x191466['shift']());}}}(_0x6c24,0x91039));import _0x45da6a from'@/core/wrapper';import{BuddyListener,GroupListener,LoginListener,MsgListener,ProfileListener,SessionListener}from'@/core/listeners';import{DependsAdapter,DispatcherAdapter,GlobalAdapter}from'@/core/adapters';import _0x44ffea from'node:path';import _0x3e6f4e from'node:os';import _0x468d27 from'node:fs';import{appid,qqVersionConfigInfo}from'@/common/utils/QQBasicInfo';import{hostname,systemVersion}from'@/common/utils/system';import{genSessionConfig}from'@/core/sessionConfig';import{dbUtil}from'@/common/utils/db';import{sleep}from'@/common/utils/helper';import _0x53843c from'node:crypto';function _0x1dae(_0x42ed22,_0x55406b){const _0x6c24bb=_0x6c24();return _0x1dae=function(_0x1dae0f,_0x1463ce){_0x1dae0f=_0x1dae0f-0xb0;let _0x4dddfc=_0x6c24bb[_0x1dae0f];return _0x4dddfc;},_0x1dae(_0x42ed22,_0x55406b);}import{rawFriends,friends,groupMembers,groups,selfInfo,stat}from'@/core/data';import{NTEventDispatch}from'@/common/utils/EventTask';import{enableConsoleLog,enableFileLog,log,logDebug,logError,setLogLevel,setLogSelfInfo}from'@/common/utils/log';import{napCatConfig}from'@/core/utils/config';export class NapCatCore{[_0x1cb4e3(0x170)];['util'];['engine'];['loginListener'];[_0x1cb4e3(0xc4)];[_0x1cb4e3(0xc2)]=[];[_0x1cb4e3(0xdd)]={'get'(target,prop,receiver){const _0x7b0b44=_0x1cb4e3,QVLmQn={'tEJFf':function(callee,param1){return callee(param1);}};if(typeof target[prop]===_0x7b0b44(0x123))return(...args)=>{const _0x46cc26=_0x7b0b44;QVLmQn[_0x46cc26(0x150)](logDebug,target[_0x46cc26(0x167)][_0x46cc26(0x159)]+_0x46cc26(0x16e)+prop);};return Reflect['get'](target,prop,receiver);}};constructor(){const _0x80f2bd=_0x1cb4e3,_0x2ffacf={'JToTV':function(_0x2ebc07,_0x205ae0){return _0x2ebc07(_0x205ae0);},'QmQIl':function(_0x2fe158,_0x922c00){return _0x2fe158+_0x922c00;},'ijign':'当前账号(','btKgx':_0x80f2bd(0xf8),'YXjuQ':function(_0x27fec6,_0x5d71cf,_0x3ef18a){return _0x27fec6(_0x5d71cf,_0x3ef18a);},'pPWTm':_0x80f2bd(0x115),'WjLcU':function(_0xe36252,_0x5c71d8){return _0xe36252(_0x5c71d8);},'hISIK':_0x80f2bd(0x109),'lRcrH':function(_0x32cf78,_0x26e95c,_0x13f9fd){return _0x32cf78(_0x26e95c,_0x13f9fd);},'YqsEN':_0x80f2bd(0x129),'GQULU':function(_0x4c195e,_0x3882d7){return _0x4c195e instanceof _0x3882d7;},'xvRjf':function(_0x41ac06,_0x4987da,_0x2e7c0f){return _0x41ac06(_0x4987da,_0x2e7c0f);},'hVCIh':_0x80f2bd(0xd3),'ehEEt':function(_0xb80df4,_0x30f4cb){return _0xb80df4==_0x30f4cb;},'ugUxm':function(_0x4760a,_0x29ac43){return _0x4760a==_0x29ac43;},'tioVy':_0x80f2bd(0x145)};this[_0x80f2bd(0x14b)]=new _0x45da6a[(_0x80f2bd(0x116))](),this[_0x80f2bd(0x106)]=new _0x45da6a['NodeQQNTWrapperUtil'](),this['loginService']=new _0x45da6a['NodeIKernelLoginService'](),this[_0x80f2bd(0x170)]=new _0x45da6a[(_0x80f2bd(0x132))](),this[_0x80f2bd(0xec)]=new LoginListener(),this[_0x80f2bd(0xec)][_0x80f2bd(0xe3)]=_0x4fb94f=>{const _0x3ca876=_0x80f2bd;_0x2ffacf[_0x3ca876(0x110)](logError,_0x2ffacf['QmQIl'](_0x2ffacf[_0x3ca876(0xc1)]+_0x4fb94f,_0x2ffacf[_0x3ca876(0xe1)]));},this[_0x80f2bd(0xb3)](),this[_0x80f2bd(0xec)][_0x80f2bd(0xf2)]=_0x28fe19=>{const _0x1f6986=_0x80f2bd,_0x316d75={'kWdyw':function(_0xa5dc16,_0x321e6a){const _0x328621=_0x1dae;return _0x2ffacf[_0x328621(0x104)](_0xa5dc16,_0x321e6a);},'enEew':function(_0x359b13,_0xe611d1,_0x4657f6){return _0x359b13(_0xe611d1,_0x4657f6);}};this[_0x1f6986(0xd7)](_0x28fe19[_0x1f6986(0xb9)],_0x28fe19[_0x1f6986(0xf4)])['then'](_0x15409b=>{const _0x57a9d3=_0x1f6986,_0x29ee3d={'YbVPI':function(_0x1d48ae,_0x51405b,_0x489735){const _0x1b980a=_0x1dae;return _0x2ffacf[_0x1b980a(0xbc)](_0x1d48ae,_0x51405b,_0x489735);},'zzpqU':_0x2ffacf[_0x57a9d3(0x113)]};selfInfo[_0x57a9d3(0xb9)]=_0x28fe19[_0x57a9d3(0xb9)],selfInfo[_0x57a9d3(0xf4)]=_0x28fe19[_0x57a9d3(0xf4)],napCatConfig[_0x57a9d3(0xfe)](),setLogLevel(napCatConfig[_0x57a9d3(0x138)],napCatConfig[_0x57a9d3(0xe6)]),_0x2ffacf[_0x57a9d3(0xd4)](enableFileLog,napCatConfig[_0x57a9d3(0x128)]),_0x2ffacf[_0x57a9d3(0xd4)](enableConsoleLog,napCatConfig['consoleLog']),setLogSelfInfo(selfInfo);const _0x3b6721=_0x44ffea[_0x57a9d3(0xb4)](this[_0x57a9d3(0xf0)],_0x2ffacf['hISIK']);_0x468d27[_0x57a9d3(0x168)](_0x3b6721,{'recursive':!![]}),_0x2ffacf[_0x57a9d3(0xd8)](logDebug,_0x2ffacf[_0x57a9d3(0xfd)],_0x3b6721),dbUtil[_0x57a9d3(0x136)](_0x44ffea['resolve'](_0x3b6721,'./'+_0x28fe19['uin']+_0x57a9d3(0xe9)))[_0x57a9d3(0xf1)](()=>{const _0xff2bbc=_0x57a9d3,_0x1c5b73={'jcbgz':function(_0x5c9826,_0x554573,_0x1b5721){return _0x5c9826(_0x554573,_0x1b5721);},'rZLmJ':function(_0x570f03,_0x28d798){const _0x103c84=_0x1dae;return _0x316d75[_0x103c84(0x13f)](_0x570f03,_0x28d798);}};this['initDataListener'](),this[_0xff2bbc(0xc2)][_0xff2bbc(0x12b)](_0x225d42=>{const _0x42171f=_0xff2bbc,_0x4d89fc={'qpajM':function(_0x3cf7f3,_0x5579c8,_0xee3c7f){const _0x2bb7fa=_0x1dae;return _0x1c5b73[_0x2bb7fa(0x152)](_0x3cf7f3,_0x5579c8,_0xee3c7f);},'mcaXD':function(_0x28844b,_0x22b3ef){const _0x13279f=_0x1dae;return _0x1c5b73[_0x13279f(0x143)](_0x28844b,_0x22b3ef);}};new Promise((_0x558703,_0x4edd57)=>{const _0x8a1aac=_0x1dae,_0x2bddd1=_0x4d89fc[_0x8a1aac(0xee)](_0x225d42,_0x28fe19['uin'],_0x28fe19[_0x8a1aac(0xf4)]);_0x4d89fc[_0x8a1aac(0x15c)](_0x2bddd1,Promise)&&_0x2bddd1[_0x8a1aac(0xf1)](_0x558703)[_0x8a1aac(0xc3)](_0x4edd57);})[_0x42171f(0xf1)]();});})[_0x57a9d3(0xc3)](_0x5b0f99=>{const _0x5c9280=_0x57a9d3;_0x29ee3d[_0x5c9280(0x101)](logError,_0x29ee3d[_0x5c9280(0x10e)],_0x5b0f99);});})[_0x1f6986(0xc3)](_0x3f9b0b=>{const _0x178b8c=_0x1f6986;_0x316d75[_0x178b8c(0x148)](logError,_0x178b8c(0x16b),_0x3f9b0b);throw new Error(_0x178b8c(0xef)+JSON['stringify'](_0x3f9b0b));});},this[_0x80f2bd(0xec)][_0x80f2bd(0x11f)]=(_0x5c0550,_0x13f24f,_0x4967a1)=>{const _0x585d98=_0x80f2bd;_0x2ffacf[_0x585d98(0xe7)](logError,_0x2ffacf[_0x585d98(0xc5)],_0x4967a1),_0x2ffacf[_0x585d98(0x151)](_0x5c0550,0x1)&&_0x2ffacf['ugUxm'](_0x13f24f,0x3)&&this[_0x585d98(0xc4)]['getQRCodePicture']();},this['loginListener'][_0x80f2bd(0xb1)]=_0x2921ce=>{const _0x4421f9=_0x80f2bd;_0x2ffacf[_0x4421f9(0xd8)](logError,_0x2ffacf[_0x4421f9(0x13b)],_0x2921ce);},this['loginListener']=new Proxy(this[_0x80f2bd(0xec)],this[_0x80f2bd(0xdd)]),this[_0x80f2bd(0xc4)][_0x80f2bd(0x16c)](new _0x45da6a[(_0x80f2bd(0x169))](this[_0x80f2bd(0xec)]));}get[_0x1cb4e3(0xf0)](){const _0x302a84=_0x1cb4e3,_0x56a7e1={'Tgpal':_0x302a84(0x133)};let _0x13b2db=this['util'][_0x302a84(0x14c)]();return!_0x13b2db&&(_0x13b2db=_0x44ffea[_0x302a84(0xb4)](_0x3e6f4e[_0x302a84(0x166)](),_0x56a7e1[_0x302a84(0xc8)]),_0x468d27[_0x302a84(0x168)](_0x13b2db,{'recursive':!![]})),_0x13b2db;}get[_0x1cb4e3(0x12d)](){const _0x4b7bb3=_0x1cb4e3,_0x2dc512={'BYBWT':_0x4b7bb3(0x144)};return _0x44ffea['resolve'](this[_0x4b7bb3(0xf0)],_0x2dc512['BYBWT']);}[_0x1cb4e3(0xb3)](){const _0x41b3fc=_0x1cb4e3;this[_0x41b3fc(0x14b)][_0x41b3fc(0xb0)]({'base_path_prefix':'','platform_type':0x3,'app_type':0x4,'app_version':qqVersionConfigInfo[_0x41b3fc(0xe5)],'os_version':_0x41b3fc(0x157),'use_xlog':!![],'qua':'V1_WIN_NQ_'+qqVersionConfigInfo[_0x41b3fc(0xe5)][_0x41b3fc(0x155)]('-','_')+_0x41b3fc(0x14f),'global_path_config':{'desktopGlobalPath':this[_0x41b3fc(0x12d)]},'thumb_config':{'maxSide':0x144,'minSide':0x30,'longLimit':0x6,'density':0x2}},new _0x45da6a[(_0x41b3fc(0x13e))](new GlobalAdapter())),this[_0x41b3fc(0xc4)][_0x41b3fc(0xb3)]({'machineId':'','appid':appid,'platVer':systemVersion,'commonPath':this[_0x41b3fc(0x12d)],'clientVer':qqVersionConfigInfo[_0x41b3fc(0xe5)],'hostName':hostname});}['initSession'](_0x53a452,_0xb6a79){const _0x51ca8d={'iwQMn':function(_0x4de9bd,_0x383ac8){return _0x4de9bd(_0x383ac8);},'NZKTC':function(_0x150e20,_0x39bc6,_0x495e50,_0x2a75e1){return _0x150e20(_0x39bc6,_0x495e50,_0x2a75e1);},'SWNRx':function(_0x31b8de,_0x21f489){return _0x31b8de+_0x21f489;}};return new Promise(async(_0x7af55f,_0x2376e2)=>{const _0xcd28e7=_0x1dae,_0x18ab5=await _0x51ca8d[_0xcd28e7(0xcb)](genSessionConfig,_0x53a452,_0xb6a79,this[_0xcd28e7(0xf0)]),_0x2dab9b=new SessionListener();_0x2dab9b[_0xcd28e7(0xd5)]=_0x21f468=>{const _0x5c1fa8=_0xcd28e7;if(_0x21f468===0x0)return _0x51ca8d[_0x5c1fa8(0x141)](_0x7af55f,0x0);_0x51ca8d[_0x5c1fa8(0x141)](_0x2376e2,_0x21f468);},this['session'][_0xcd28e7(0x136)](_0x18ab5,new _0x45da6a[(_0xcd28e7(0x13c))](new DependsAdapter()),new _0x45da6a[(_0xcd28e7(0x105))](new DispatcherAdapter()),new _0x45da6a[(_0xcd28e7(0xe0))](_0x2dab9b));try{this[_0xcd28e7(0x170)]['startNT'](0x0);}catch(_0x4f9bb9){try{this[_0xcd28e7(0x170)][_0xcd28e7(0x161)]();}catch(_0x41e57c){_0x51ca8d[_0xcd28e7(0x141)](_0x2376e2,_0x51ca8d['SWNRx'](_0xcd28e7(0xd9),_0x41e57c));}}});}[_0x1cb4e3(0x160)](){const _0x139356=_0x1cb4e3,_0x5f3744={'rspUe':function(_0x4b4f3f,_0x3c19d3){return _0x4b4f3f(_0x3c19d3);},'EZJFS':function(_0x10633f,_0x2db5a5){return _0x10633f+_0x2db5a5;},'LcBlj':function(_0x5383d8,_0x1ac96a){return _0x5383d8+_0x1ac96a;},'zyhlp':_0x139356(0x125),'yesBh':function(_0x180acb,_0x2eb37d){return _0x180acb+_0x2eb37d;},'xztuR':function(_0x5cfa73,_0xa63ba5){return _0x5cfa73+_0xa63ba5;},'DqOZe':'[KickedOffLine]\x20[','diMJB':function(_0x52d511,_0x1d86ac){return _0x52d511/_0x1d86ac;},'jmtiZ':function(_0x4b54ac,_0x3e8947){return _0x4b54ac/_0x3e8947;},'FMfzq':function(_0x58f02a,_0x5f58ac){return _0x58f02a===_0x5f58ac;},'LLCkd':_0x139356(0x10d),'vaZiK':function(_0x27dcc4,_0x158dde){return _0x27dcc4===_0x158dde;}},_0x13e742=new MsgListener();_0x13e742[_0x139356(0xdb)]=_0x7bf6b4=>{const _0x100a84=_0x139356,_0x5f3823={'bGveb':function(_0x3bab55,_0x2309e0){const _0x3d7bad=_0x1dae;return _0x5f3744[_0x3d7bad(0xf7)](_0x3bab55,_0x2309e0);},'hFHZK':function(_0x4d5592,_0x50fb91){const _0x33e84f=_0x1dae;return _0x5f3744[_0x33e84f(0xff)](_0x4d5592,_0x50fb91);},'ePIHY':function(_0x4f598b,_0x336c6e){return _0x5f3744['LcBlj'](_0x4f598b,_0x336c6e);},'xbcOD':_0x5f3744[_0x100a84(0x14e)],'otSvN':')\x20在线状态变更'};_0x7bf6b4[_0x100a84(0x12b)](_0x29ffc1=>{const _0xcf8154=_0x100a84;_0x29ffc1[_0xcf8154(0xbd)]===0x2&&_0x5f3823[_0xcf8154(0x114)](log,_0x5f3823[_0xcf8154(0xb2)](_0x5f3823['ePIHY'](_0x5f3823[_0xcf8154(0xf5)],_0x29ffc1[_0xcf8154(0xca)]),_0x5f3823[_0xcf8154(0x15b)]));});},_0x13e742[_0x139356(0xd2)]=_0x43b3e2=>{const _0x99bbd9=_0x139356;log(_0x5f3744['yesBh'](_0x5f3744['xztuR'](_0x5f3744[_0x99bbd9(0x10a)],_0x43b3e2['tipsTitle'])+']\x20',_0x43b3e2['tipsDesc']));},_0x13e742['onAddSendMsg']=_0xeda5d1=>{const _0x2bcc0f=_0x139356;stat[_0x2bcc0f(0xbb)]+=0x1,stat[_0x2bcc0f(0x154)]+=0x1,stat[_0x2bcc0f(0x102)]=Math[_0x2bcc0f(0x16a)](_0x5f3744[_0x2bcc0f(0x163)](Date[_0x2bcc0f(0xd0)](),0x3e8));},_0x13e742[_0x139356(0xc9)]=_0x1c9b91=>{const _0x30e499=_0x139356;stat[_0x30e499(0x158)]+=0x1,stat[_0x30e499(0x11b)]+=_0x1c9b91[_0x30e499(0xda)],stat[_0x30e499(0x102)]=Math[_0x30e499(0x16a)](_0x5f3744[_0x30e499(0xb6)](Date[_0x30e499(0xd0)](),0x3e8));},_0x13e742['onRecvSysMsg']=(..._0x191d30)=>{const _0x5b2972=_0x139356;stat[_0x5b2972(0x158)]+=0x1;},this[_0x139356(0x11e)](_0x13e742);const _0x47c588=new BuddyListener();_0x47c588[_0x139356(0x162)]=_0x227ba6=>{const _0x234526=_0x139356;rawFriends[_0x234526(0xda)]=0x0,rawFriends['push'](..._0x227ba6);for(const _0x3bc3c3 of _0x227ba6){for(const _0x43c0f9 of _0x3bc3c3['buddyList']){const _0x3e0896=friends[_0x234526(0x119)](_0x43c0f9['uid']);_0x3e0896?Object['assign'](_0x3e0896,_0x43c0f9):friends[_0x234526(0x139)](_0x43c0f9['uid'],_0x43c0f9);}}},this[_0x139356(0x11e)](_0x47c588),this[_0x139356(0x170)][_0x139356(0xe2)]()[_0x139356(0xea)](!![])[_0x139356(0xf1)](_0x422e6a=>{});const _0x329ec8=new ProfileListener();_0x329ec8[_0x139356(0x12e)]=_0x5d884c=>{const _0x45c348=_0x139356;_0x5f3744[_0x45c348(0xd6)](_0x5d884c[_0x45c348(0xf4)],selfInfo['uid'])&&Object[_0x45c348(0x100)](selfInfo,_0x5d884c);},_0x329ec8[_0x139356(0xd1)]=_0x5f17b9=>{},this[_0x139356(0x11e)](_0x329ec8);const _0x206a7b=new GroupListener();_0x206a7b['onGroupListUpdate']=(_0xa27f21,_0x47c16e)=>{const _0x4637fa=_0x139356;_0x47c16e[_0x4637fa(0x12b)](_0x2fdb2b=>{const _0xdcaaa2=_0x4637fa,_0xa41939=groups[_0xdcaaa2(0x119)](_0x2fdb2b[_0xdcaaa2(0x10c)]);_0xa41939&&_0x5f3744[_0xdcaaa2(0xd6)](_0x2fdb2b['memberCount'],_0xa41939[_0xdcaaa2(0x10f)])?Object['assign'](_0xa41939,_0x2fdb2b):groups[_0xdcaaa2(0x139)](_0x2fdb2b[_0xdcaaa2(0x10c)],_0x2fdb2b);const _0x4d84f6=this[_0xdcaaa2(0x170)]['getGroupService']()[_0xdcaaa2(0x121)](_0x2fdb2b['groupCode'],_0x5f3744[_0xdcaaa2(0x16d)]);this[_0xdcaaa2(0x170)][_0xdcaaa2(0x146)]()[_0xdcaaa2(0xba)](_0x4d84f6,undefined,0xbb8)[_0xdcaaa2(0xf1)](_0x293251=>{});});},_0x206a7b[_0x139356(0xc7)]=_0xd43ae8=>{const _0x186c2a=_0x139356,_0x200c6f=_0xd43ae8[_0x186c2a(0x15a)][_0x186c2a(0x14a)]('_')[0x0];if(groupMembers[_0x186c2a(0x10b)](_0x200c6f)){const _0x4b9ca0=groupMembers[_0x186c2a(0x119)](_0x200c6f);_0xd43ae8['infos']['forEach']((_0x57c868,_0x49bb54)=>{const _0x338e1c=_0x186c2a,_0xaa6408=_0x4b9ca0['get'](_0x49bb54);_0xaa6408?Object[_0x338e1c(0x100)](_0xaa6408,_0x57c868):_0x4b9ca0[_0x338e1c(0x139)](_0x49bb54,_0x57c868),_0x57c868[_0x338e1c(0x149)]&&_0x4b9ca0[_0x338e1c(0xbf)](_0x49bb54);});}else groupMembers[_0x186c2a(0x139)](_0x200c6f,_0xd43ae8[_0x186c2a(0xde)]);},_0x206a7b[_0x139356(0xb5)]=(_0x4b43f7,_0x3e0cea,_0x329b9e)=>{const _0x5b3fd3=_0x139356;_0x5f3744['vaZiK'](_0x3e0cea,0x0)&&_0x329b9e[_0x5b3fd3(0x119)](selfInfo[_0x5b3fd3(0xf4)])?.[_0x5b3fd3(0x149)]&&setTimeout(()=>{const _0x29cb3b=_0x5b3fd3;groups[_0x29cb3b(0xbf)](_0x4b43f7);},0x1388);const _0x4a0a22=groupMembers[_0x5b3fd3(0x119)](_0x4b43f7);_0x4a0a22?_0x329b9e['forEach']((_0x1cc044,_0x4d64a4)=>{const _0x574355=_0x5b3fd3,_0x4580f3=_0x4a0a22['get'](_0x4d64a4);_0x4580f3?Object[_0x574355(0x100)](_0x4580f3,_0x1cc044):_0x4a0a22[_0x574355(0x139)](_0x4d64a4,_0x1cc044),_0x1cc044['isDelete']&&_0x4a0a22[_0x574355(0xbf)](_0x4d64a4);}):groupMembers[_0x5b3fd3(0x139)](_0x4b43f7,_0x329b9e);},this[_0x139356(0x11e)](_0x206a7b);}[_0x1cb4e3(0x11e)](_0x4c6bc3){const _0x53333e=_0x1cb4e3,_0x4d7bab={'jYReB':_0x53333e(0x140),'bwohs':_0x53333e(0x135),'RdOcK':'MsgListener','pBxmw':_0x53333e(0xce)};_0x4c6bc3=new Proxy(_0x4c6bc3,this[_0x53333e(0xdd)]);switch(_0x4c6bc3['constructor'][_0x53333e(0x159)]){case _0x4d7bab['jYReB']:{return this[_0x53333e(0x170)][_0x53333e(0xe2)]()['addKernelBuddyListener'](new _0x45da6a[(_0x53333e(0xfb))](_0x4c6bc3));}case _0x4d7bab['bwohs']:{return this[_0x53333e(0x170)][_0x53333e(0x146)]()[_0x53333e(0x15f)](new _0x45da6a[(_0x53333e(0x16f))](_0x4c6bc3));}case _0x4d7bab[_0x53333e(0x156)]:{return this[_0x53333e(0x170)][_0x53333e(0xcf)]()[_0x53333e(0x12f)](new _0x45da6a[(_0x53333e(0xcc))](_0x4c6bc3));}case _0x4d7bab['pBxmw']:{return this[_0x53333e(0x170)][_0x53333e(0x137)]()[_0x53333e(0xbe)](new _0x45da6a[(_0x53333e(0xf9))](_0x4c6bc3));}default:return-0x1;}}[_0x1cb4e3(0xc6)](_0x9db6a7){const _0x4a010d=_0x1cb4e3;NTEventDispatch[_0x4a010d(0x136)]({'ListenerMap':_0x45da6a,'WrapperSession':this[_0x4a010d(0x170)]}),this['onLoginSuccessFuncList']['push'](_0x9db6a7);}async[_0x1cb4e3(0x127)](_0x4559bf){const _0x426b66=_0x1cb4e3,_0x54d720={'IBlDJ':function(_0x1d0b39,_0x170abc){return _0x1d0b39!==_0x170abc;},'GDEDN':function(_0x1213e9,_0x3cc426){return _0x1213e9(_0x3cc426);},'aaAWb':function(_0x3cd9fd,_0xd3f231){return _0x3cd9fd+_0xd3f231;},'nXZgM':_0x426b66(0x11d)},_0x5e5e17=await this['loginService'][_0x426b66(0xf3)]();if(_0x54d720[_0x426b66(0x12a)](_0x5e5e17['result'],0x0))throw new Error('没有可快速登录的QQ号');const _0x2e5b66=_0x5e5e17[_0x426b66(0xcd)][_0x426b66(0xfa)](_0x42cbc8=>_0x42cbc8['uin']===_0x4559bf);if(!_0x2e5b66||!_0x2e5b66?.[_0x426b66(0x147)])throw new Error(_0x4559bf+_0x426b66(0x11a));await _0x54d720[_0x426b66(0x118)](sleep,0x3e8);const _0xcf0ba1=await this[_0x426b66(0xc4)][_0x426b66(0x122)](_0x4559bf);if(!_0xcf0ba1[_0x426b66(0x126)])throw new Error(_0x54d720[_0x426b66(0x15e)](_0x54d720[_0x426b66(0x131)],_0xcf0ba1[_0x426b66(0x142)][_0x426b66(0xfc)]));return _0xcf0ba1;}async[_0x1cb4e3(0x134)](_0x20932c){const _0x275a51=_0x1cb4e3,_0x5d04fa={'cxLsA':_0x275a51(0xdf),'BtJEw':_0x275a51(0x164),'xXmrY':function(_0x59ba82,_0x4247d6,_0x3a05b8,_0x1d0996){return _0x59ba82(_0x4247d6,_0x3a05b8,_0x1d0996);}};return new Promise((_0x1f1a2b,_0x2c62f6)=>{const _0x241d26=_0x275a51;this[_0x241d26(0xec)]['onQRCodeGetPicture']=_0x175361=>{const _0xb2aa2d=_0x241d26,_0x35302e=_0x175361[_0xb2aa2d(0xdc)]['split'](_0x5d04fa[_0xb2aa2d(0x107)])[0x1],_0x4dd88f=Buffer[_0xb2aa2d(0x130)](_0x35302e,_0x5d04fa[_0xb2aa2d(0x117)]);_0x5d04fa[_0xb2aa2d(0x13d)](_0x20932c,_0x175361[_0xb2aa2d(0x13a)],_0x175361['pngBase64QrcodeData'],_0x4dd88f);},this[_0x241d26(0xc4)][_0x241d26(0xb7)]();});}async['passwordLogin'](_0x52e07c,_0x2db65e,_0x59a88b,_0x1e0d18,_0x16c432){const _0x33f080=_0x1cb4e3,_0x439fa7={'rHDzb':_0x33f080(0x153),'EXXey':_0x33f080(0xb8),'aYrxb':function(_0x82ec73,_0x2484f0){return _0x82ec73&&_0x2484f0;},'HBYpQ':function(_0x446a93,_0x4319f1){return _0x446a93||_0x4319f1;},'dgpBI':function(_0x1f5dd1,_0x70d150){return _0x1f5dd1||_0x70d150;},'doxLy':function(_0x549bf7,_0x4f988c){return _0x549bf7(_0x4f988c);},'UbWth':'140022008','fUkli':_0x33f080(0xe8)},_0xba4d5e=_0x53843c['createHash'](_0x439fa7[_0x33f080(0x12c)])[_0x33f080(0xf6)](_0x2db65e)[_0x33f080(0x14d)](_0x439fa7['EXXey']),_0x5dfd0a={'uin':_0x52e07c,'passwordMd5':_0xba4d5e,'step':_0x439fa7['aYrxb'](_0x59a88b,_0x1e0d18)&&_0x16c432?0x1:0x0,'newDeviceLoginSig':'','proofWaterSig':_0x439fa7[_0x33f080(0x111)](_0x59a88b,''),'proofWaterRand':_0x439fa7[_0x33f080(0x111)](_0x1e0d18,''),'proofWaterSid':_0x439fa7['dgpBI'](_0x16c432,'')};await this[_0x33f080(0xc4)][_0x33f080(0xf3)](),await _0x439fa7['doxLy'](sleep,0x3e8);const _0x46a50f=await this[_0x33f080(0xc4)][_0x33f080(0x108)](_0x5dfd0a);switch(_0x46a50f[_0x33f080(0x126)]){case'0':{break;}case _0x439fa7[_0x33f080(0xeb)]:{break;}case'4':case _0x439fa7[_0x33f080(0x120)]:default:}}async['getQuickLoginList'](){const _0x175d8e=_0x1cb4e3,_0x13e0dc=await this[_0x175d8e(0xc4)][_0x175d8e(0xf3)]();return _0x13e0dc;}}export const napCatCore=new NapCatCore();