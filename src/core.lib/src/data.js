(function(_0x5ecbfe,_0x2e9f9f){const _0x4226fc=_0x2032,_0x2f8649=_0x5ecbfe();while(!![]){try{const _0x376e96=-parseInt(_0x4226fc(0xa4))/0x1+parseInt(_0x4226fc(0xa7))/0x2+-parseInt(_0x4226fc(0xa8))/0x3*(-parseInt(_0x4226fc(0xb3))/0x4)+-parseInt(_0x4226fc(0xaa))/0x5+-parseInt(_0x4226fc(0xae))/0x6+-parseInt(_0x4226fc(0xab))/0x7+parseInt(_0x4226fc(0xb1))/0x8;if(_0x376e96===_0x2e9f9f)break;else _0x2f8649['push'](_0x2f8649['shift']());}catch(_0x130222){_0x2f8649['push'](_0x2f8649['shift']());}}}(_0x5cb9,0x3a76c));import{isNumeric}from'@/common/utils/helper';import{NTQQGroupApi}from'@/core/apis';export const selfInfo={'uid':'','uin':'','nick':'','online':!![]};export const groups=new Map();function _0x2032(_0x54476b,_0x20287e){const _0x5cb908=_0x5cb9();return _0x2032=function(_0x2032b9,_0x3a5537){_0x2032b9=_0x2032b9-0xa4;let _0x561028=_0x5cb908[_0x2032b9];return _0x561028;},_0x2032(_0x54476b,_0x20287e);}export function deleteGroup(_0x52df30){const _0xe1f44f=_0x2032;groups[_0xe1f44f(0xa6)](_0x52df30),groupMembers[_0xe1f44f(0xa6)](_0x52df30);}export const groupMembers=new Map();export const friends=new Map();export const rawFriends=[];export const groupNotifies={};function _0x5cb9(){const _0x51b8fd=['from','delete','684666DBPAgK','15612ApkvAb','toString','1628775VftrYd','121947GQVaFh','forEach','length','2242284liwHYe','get','getGroupMembers','5007856twEkdo','EKGLP','344rkWecS','getGroups','values','set','uin','459501jWnwzp'];_0x5cb9=function(){return _0x51b8fd;};return _0x5cb9();}export async function getGroup(_0x3d60db){const _0x22936b=_0x2032;let _0x504ee7=groups[_0x22936b(0xaf)](_0x3d60db['toString']());if(!_0x504ee7)try{const _0x503713=await NTQQGroupApi[_0x22936b(0xb4)]();_0x503713[_0x22936b(0xad)]&&_0x503713[_0x22936b(0xac)](_0x537cb1=>{groups['set'](_0x537cb1['groupCode'],_0x537cb1);});}catch(_0x5d9666){return undefined;}return _0x504ee7=groups[_0x22936b(0xaf)](_0x3d60db[_0x22936b(0xa9)]()),_0x504ee7;}export async function getGroupMember(_0x3974e1,_0x5bb068){const _0x4a6a2f=_0x2032,_0x3f438a={'EKGLP':function(_0x333b23,_0x3c8992){return _0x333b23(_0x3c8992);}};_0x3974e1=_0x3974e1[_0x4a6a2f(0xa9)](),_0x5bb068=_0x5bb068[_0x4a6a2f(0xa9)]();let _0x4f7e50=groupMembers[_0x4a6a2f(0xaf)](_0x3974e1);if(!_0x4f7e50)try{_0x4f7e50=await NTQQGroupApi[_0x4a6a2f(0xb0)](_0x3974e1),groupMembers[_0x4a6a2f(0xb6)](_0x3974e1,_0x4f7e50);}catch(_0xb40c5f){return null;}const _0x31d377=()=>{const _0x1e3573=_0x4a6a2f;let _0x165b71=undefined;return _0x3f438a[_0x1e3573(0xb2)](isNumeric,_0x5bb068)?_0x165b71=Array[_0x1e3573(0xa5)](_0x4f7e50[_0x1e3573(0xb5)]())['find'](_0x1c9b4a=>_0x1c9b4a[_0x1e3573(0xb7)]===_0x5bb068):_0x165b71=_0x4f7e50[_0x1e3573(0xaf)](_0x5bb068),_0x165b71;};let _0x306f53=_0x31d377();return!_0x306f53&&(_0x4f7e50=await NTQQGroupApi[_0x4a6a2f(0xb0)](_0x3974e1),_0x306f53=_0x31d377()),_0x306f53;}export const tempGroupCodeMap={};export const stat={'packet_received':0x0,'packet_sent':0x0,'message_received':0x0,'message_sent':0x0,'last_message_time':0x0,'disconnect_times':0x0,'lost_times':0x0,'packet_lost':0x0};