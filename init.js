function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = decodeURI(window.location.search).substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}

//#region manage by program
// eslint-disable-next-line prettier/prettier
var apps=[{"id":1,"cid":6,"name":"证照拍","pkg":"com.haidong.chengdu.AlmightyIDPhoto","privacies":["0","1.1.0"],"agreements":["0"]},{"id":2,"cid":7,"name":"捷速录音转文字","pkg":"com.fengsu.voicetranscribe","privacies":["0","1.3.0"],"agreements":["0"]},{"id":3,"cid":2,"name":"一键抠图","pkg":"com.shuojie.easyphoto","qiyu_appid":"9f6be7423510fa866bf322613deaf43d","qiyu_robot_id":170049,"qiyu_group_id":264295913,"qiyu_question_id":4484264,"privacies":["1.0.0.0","1.2.0.0","1.3.0.0","1.7.0.0"],"agreements":["0","1.2.0.0"]},{"id":4,"cid":3,"name":"手机录屏助手","pkg":"com.hudun.androidhudunvideo","qiyu_appid":"9f6be7423510fa866bf322613deaf43d","qiyu_robot_id":170049,"qiyu_group_id":264295913,"qiyu_question_id":4486231,"privacies":["2.2.3"]},{"id":5,"cid":4,"name":"极速数据恢复","pkg":"cn.hd.fast.datarecovery","qiyu_appid":"ab6cc4595e1e0dc5aa84c4de7b0ec28b","qiyu_robot_id":1153941,"qiyu_group_id":948471,"qiyu_question_id":39107,"privacies":["1.6.4"],"agreements":["0"]},{"id":6,"name":"手机数据恢复精灵","pkg":"cn.hundun.datarecovery","qiyu_appid":"ab6cc4595e1e0dc5aa84c4de7b0ec28b","qiyu_robot_id":1153941,"qiyu_group_id":948471,"qiyu_question_id":39107,"privacies":["0","10.1.0","10.1.2"],"agreements":["0"]},{"id":7,"name":"去玩相册","pkg":"com.hudun.qwalbum","privacies":["0","1.0.0","1.0.5","1.2.0","1.2.6","1.4.0.0","1.5.0","1.7.0.0"],"agreements":["0","1.4.0.0"]},{"id":8,"cid":3,"name":"去玩相册","pkg":"com.dongqi.qwalbum","privacy_pid":7,"agreement_pid":7,"qiyu_appid":"9f6be7423510fa866bf322613deaf43d","qiyu_robot_id":170049,"qiyu_group_id":264295913,"qiyu_question_id":4488026},{"id":9,"name":"迅捷视频转换器","pkg":"com.hudun.androidvideochanger","qiyu_appid":"9f6be7423510fa866bf322613deaf43d","qiyu_robot_id":170049,"qiyu_group_id":264295913,"qiyu_question_id":4486075,"privacies":["0","1.1.8","1.2.0","2.0.0"]},{"id":10,"name":"迅捷CAD转换器","pkg":"com.hudun.cadconvert","qiyu_appid":"9f6be7423510fa866bf322613deaf43d","qiyu_robot_id":170049,"qiyu_group_id":1049844,"qiyu_question_id":1209046,"privacies":["0","1.0.6"]},{"id":11,"name":"语音翻译器","pkg":"com.hudun.voicecovert","qiyu_appid":"9f6be7423510fa866bf322613deaf43d","qiyu_robot_id":170049,"qiyu_group_id":1049844,"qiyu_question_id":4484231,"privacies":["0","1.1.8","2.0.0"]},{"id":12,"name":"迅捷论文查重","pkg":"com.hudun.paper","qiyu_appid":"9f6be7423510fa866bf322613deaf43d","qiyu_robot_id":170049,"qiyu_group_id":1049844,"qiyu_question_id":4486218,"privacies":["0","1.3.3"]},{"id":13,"cid":2,"name":"一键视频","pkg":"com.hudun.oneclickvideo","qiyu_appid":"9f6be7423510fa866bf322613deaf43d","qiyu_robot_id":170049,"qiyu_group_id":264295913,"qiyu_question_id":4485219,"privacies":["0","2.7.1","2.7.4","2.7.5","3.0.0.0"]},{"id":14,"cid":2,"name":"Logo设计软件","pkg":"cn.hudun.androidlogodesign","qiyu_appid":"9f6be7423510fa866bf322613deaf43d","qiyu_robot_id":170049,"qiyu_group_id":1049844,"qiyu_question_id":4485209,"privacies":["0","1.4.9"]},{"id":15,"cid":1,"name":"文字转语音助手","pkg":"com.hudun.androidtexttospeech","qiyu_appid":"9f6be7423510fa866bf322613deaf43d","qiyu_robot_id":170049,"qiyu_group_id":1049844,"qiyu_question_id":4486243,"privacies":["0","2.0.2","3.0.0"],"agreements":["3.0.0"]},{"id":16,"cid":3,"name":"录音转文字助手","pkg":"com.hudun.androidrecorder","qiyu_appid":"9f6be7423510fa866bf322613deaf43d","qiyu_robot_id":170049,"qiyu_group_id":1049844,"qiyu_question_id":4484066,"privacies":["0","5.2.1","5.2.2","5.3.1","5.9.2","6.3.1"]},{"id":17,"cid":1,"name":"清爽视频编辑","pkg":"com.hudun.videoedit","qiyu_appid":"9f6be7423510fa866bf322613deaf43d","qiyu_robot_id":170049,"qiyu_group_id":264295913,"qiyu_question_id":44883144,"privacies":["0","5.1.1","5.3.0","5.9.5"]},{"id":18,"cid":1,"name":"扫描超人","pkg":"com.hudun.scannerman","qiyu_appid":"9f6be7423510fa866bf322613deaf43d","qiyu_robot_id":170049,"qiyu_group_id":1049844,"qiyu_question_id":4487140,"privacies":["0","2.5.1"]},{"id":19,"name":"迅捷PDF转换器","pkg":"com.hudun.androidpdfchanger","qiyu_appid":"9f6be7423510fa866bf322613deaf43d","qiyu_robot_id":170049,"qiyu_group_id":1049844,"qiyu_question_id":4485148,"privacies":["0","5.5.0","5.5.5"]},{"id":21,"cid":1,"name":"迅捷录屏大师","pkg":"com.hudun.recorder","qiyu_appid":"9f6be7423510fa866bf322613deaf43d","qiyu_robot_id":170049,"qiyu_group_id":264295913,"qiyu_question_id":4483145,"privacies":["0","3.2.4","3.2.5","3.3.1"]},{"id":22,"cid":1,"name":"迅捷视频剪辑","pkg":"com.fresh.light","qiyu_appid":"9f6be7423510fa866bf322613deaf43d","qiyu_robot_id":170049,"qiyu_group_id":264295913,"qiyu_question_id":4486076,"privacies":["2.5.1","2.6.3"],"agreements":["0"]},{"id":23,"cid":1,"name":"迅捷文字识别","pkg":"com.hudun.androidimageocr","qiyu_appid":"9f6be7423510fa866bf322613deaf43d","qiyu_robot_id":170049,"qiyu_group_id":1049844,"qiyu_question_id":4487087,"privacies":["0","5.2.20","5.3.00","5.5.00"]},{"id":24,"cid":1,"name":"快投屏TV版","pkg":"com.hudun.aircast.tv","privacies":["1.5.13"]},{"id":25,"cid":1,"name":"快投屏","pkg":"com.hudun.aircast","qiyu_appid":"9f6be7423510fa866bf322613deaf43d","qiyu_robot_id":170049,"qiyu_group_id":264295913,"qiyu_question_id":4485065,"privacies":["0","1.5.18","1.5.19"],"agreements":["0"]},{"id":26,"cid":1,"name":"快投屏","pkg":"com.hudun.aircast.sender","privacy_pid":25,"agreement_pid":25,"qiyu_appid":"9f6be7423510fa866bf322613deaf43d","qiyu_robot_id":170049,"qiyu_group_id":264295913,"qiyu_question_id":4485065},{"id":27,"cid":3,"name":"无痕去水印","pkg":"com.hudun.androidwatermark","qiyu_appid":"9f6be7423510fa866bf322613deaf43d","qiyu_robot_id":170049,"qiyu_group_id":264295913,"qiyu_question_id":4486220,"privacies":["0","2.5.4","3.1.0","3.3.1"]},{"id":28,"cid":2,"name":"清爽PDF转换器","pkg":"com.hudun.pdfswitchmaster","qiyu_appid":"9f6be7423510fa866bf322613deaf43d","qiyu_robot_id":170049,"qiyu_group_id":1049844,"qiyu_question_id":4485148,"privacies":["0","1.3.0"]},{"id":29,"cid":2,"name":"智能证件照相机","pkg":"cn.hudun.idphoto","qiyu_appid":"9f6be7423510fa866bf322613deaf43d","qiyu_robot_id":170049,"qiyu_group_id":1049844,"qiyu_question_id":4485145,"privacies":["0","3.4.5","3.5.0","3.8.0.0","3.8.1.0"],"agreements":["0"]},{"id":31,"cid":1,"name":"迅捷思维导图","pkg":"com.hudun.swdt","qiyu_appid":"9f6be7423510fa866bf322613deaf43d","qiyu_robot_id":170049,"qiyu_group_id":1049844,"qiyu_question_id":4486230,"privacies":["1.0.0","1.1.0"]},{"id":32,"cid":3,"name":"证照拍","pkg":"com.hudun.identificationphoto","privacies":["1.1.0"],"agreements":["1.1.0"]},{"id":33,"cid":3,"name":"证照拍","pkg":"com.dongqi.capture","qiyu_appid":"9f6be7423510fa866bf322613deaf43d","qiyu_robot_id":170049,"qiyu_group_id":1049844,"qiyu_question_id":4488022,"privacies":["1.0.0","1.5.0.0"],"agreements":["1.0.0"]},{"id":34,"cid":2,"name":"音频编辑转换器","pkg":"com.shuojie.audioeditor","qiyu_appid":"9f6be7423510fa866bf322613deaf43d","qiyu_robot_id":170049,"qiyu_group_id":264295913,"qiyu_question_id":4486282,"privacies":["1.0.0","1.1.0"],"agreements":["1.0.0","1.1.0"]},{"id":35,"cid":3,"name":"清爽视频编辑器","pkg":"com.hdgame.xjvideoeditor","privacies":["5.7.0"],"agreements":["0.0.1"]},{"id":36,"cid":8,"name":"指尖文字识别","pkg":"com.leopard.photodistinguish","privacies":["1.3.0"],"agreements":["0.0.1"]},{"id":37,"cid":4,"name":"指尖PDF转换器","pkg":"com.weidou.speedconverter","privacies":["1.9.0"],"agreements":["0.0.1"]},{"id":38,"cid":10,"name":"迅捷录屏大师","pkg":"com.yanyan.RecordScreenAssistant","privacies":["2.11.0"],"agreements":["0.0.1"]},{"id":39,"cid":3,"name":"语音翻译器","pkg":"com.xfcentre.voiceconverter","privacies":["2.2.1"],"agreements":["0.0.1"]},{"id":40,"cid":3,"name":"智能翻译官","pkg":"com.dongqi.intelligenttranslator","qiyu_appid":"9f6be7423510fa866bf322613deaf43d","qiyu_robot_id":170049,"qiyu_group_id":1049844,"qiyu_question_id":4484289,"privacies":["1.0.0.0"]},{"id":41,"cid":2,"name":"音频编辑转换器","pkg":"com.lijietech.audioeditor","privacies":["1.0.0","1.1.0.0"],"agreements":["1.0.0"]},{"id":42,"cid":3,"name":"无痕去水印","pkg":"pc.whqsy","agreements":["0.0.1"]},{"id":43,"name":"照片视频","pkg":"com.hudun.androidphotovideo","qiyu_appid":"9f6be7423510fa866bf322613deaf43d","qiyu_robot_id":170049,"qiyu_group_id":264295913,"qiyu_question_id":4486219},{"id":44,"name":"OCR图片文字识别","pkg":"com.hudun.androidtxtocr","qiyu_appid":"9f6be7423510fa866bf322613deaf43d","qiyu_robot_id":170049,"qiyu_group_id":1049844,"qiyu_question_id":4487087},{"id":47,"cid":2,"name":"掌上识别王","pkg":"com.shuojie.recognize","qiyu_appid":"9f6be7423510fa866bf322613deaf43d","qiyu_robot_id":170049,"qiyu_group_id":1049844,"qiyu_question_id":4484288,"privacies":["1.0.0.0","1.3.0.0","1.7.0.0"]},{"id":48,"cid":3,"name":"指尖PDF转换器","pkg":"com.dongqi.fingertippdf","privacies":["1.0.0.0"]},{"id":49,"cid":6,"name":"一键录音","pkg":"com.haidong.audio.conver","qiyu_appid":"9f6be7423510fa866bf322613deaf43d","qiyu_robot_id":170049,"qiyu_group_id":1049844,"qiyu_question_id":4488085,"privacies":["1.0.0","1.1.0","1.2.0"],"agreements":["1.0.0"]},{"id":50,"cid":3,"name":"驾照科目一宝典","pkg":"com.fengsuxinxi.driverlicense","qiyu_appid":"9f6be7423510fa866bf322613deaf43d","qiyu_robot_id":170049,"qiyu_group_id":1049844,"qiyu_question_id":4483277,"privacies":["1.0.0","1.0.3"],"agreements":["1.0.0"]},{"id":52,"cid":2,"name":"极速ZIP解压缩","pkg":"com.shuojie.filecompress","qiyu_appid":"9f6be7423510fa866bf322613deaf43d","qiyu_robot_id":170049,"qiyu_group_id":1049844,"qiyu_question_id":4485277,"privacies":["1.0.0","1.2.0.0"],"agreements":["1.0.0","1.2.0.0"]},{"id":53,"cid":1,"name":"迅捷图片转换器","pkg":"com.hudun.pictureconvert","qiyu_appid":"9f6be7423510fa866bf322613deaf43d","qiyu_robot_id":170049,"qiyu_group_id":1049844,"qiyu_question_id":4483281,"privacies":["1.0.0","2.0.0","2.1.0"],"agreements":["1.0.0","2.0.0"]},{"id":54,"cid":4,"name":"全能一寸证件照","pkg":"com.weidu.camera","qiyu_appid":"9f6be7423510fa866bf322613deaf43d","qiyu_robot_id":170049,"qiyu_group_id":1049844,"qiyu_question_id":4486287,"privacies":["1.0.0.0","1.2.1.0"],"agreements":["1.0.0.0"]},{"id":56,"cid":3,"name":"提词全能王","pkg":"com.dongqi.teleprompter","privacies":["1.0.0"],"agreements":["1.0.0"]},{"id":62,"cid":2,"name":"智能修复老照片","pkg":"com.lijie.photorepair","privacies":["1.0.0"],"agreements":["1.0.0"]},{"id":63,"cid":8,"name":"图片转换器","pkg":"com.lingbao.photoconverter"},{"id":64,"cid":6,"name":"一键视频","pkg":"com.haidong.onekeyvideo","privacies":["1.0.0"],"agreements":["1.0.0"]},{"id":65,"cid":8,"name":"智能修复老照片","pkg":"com.lingbao.photorepaint","qiyu_appid":"9f6be7423510fa866bf322613deaf43d","qiyu_robot_id":170049,"qiyu_group_id":1049844,"qiyu_question_id":4488086,"privacies":["1.0.0.0"],"agreements":["1.0.0.0"]},{"id":66,"cid":11,"name":"文字转语音助手","pkg":"com.gongfei.texttovoice","privacies":["1.0.0"],"agreements":["1.0.0"]},{"id":67,"cid":8,"name":"一键录音","pkg":"com.lingbao.audiototext","privacies":["1.0.0","1.2.0"],"agreements":["1.0.0"]},{"id":68,"cid":10,"name":"logo设计软件","pkg":"com.yanyan.logodesign","privacies":["1.0.0"],"agreements":["1.0.0"]},{"id":69,"cid":4,"name":"投屏宝","pkg":"com.weidu.nkktp","qiyu_appid":"9f6be7423510fa866bf322613deaf43d","qiyu_robot_id":170049,"qiyu_group_id":264295913,"qiyu_question_id":4488062,"privacies":["1.0.0","1.1.0","1.2.0.0"],"agreements":["1.0.0"]},{"id":70,"cid":4,"name":"投屏宝","pkg":"pc.tpb","agreements":["0.0.1"]},{"id":71,"cid":12,"name":"投屏宝","pkg":"com.liufeng.broadcastscreen","privacies":["1.0.0"],"agreements":["1.0.0"]}]
// eslint-disable-next-line prettier/prettier
var companys=[{"id":1,"name":"互盾","fullname":"上海互盾信息科技有限公司","date":"2013年06月20日","address":"上海市宝山区一二八纪念路968号1205-A132室，联系电话021-56456318","agreement_prefix":"https://api.shoujihuifu.com/wap_pay/privacy/hudun/zh/user-agreement.html","privacy_prefix":"https://api.shoujihuifu.com/wap_pay/privacy/individual/zh/privacy.html"},{"id":2,"name":"砾捷","fullname":"上海砾捷信息科技有限公司","date":"2019年05月15日","address":"上海市宝山区逸仙路1277号18幢3层318-03室，联系电话400-888-2257","agreement_prefix":"https://api.shoujihuifu.com/wap_pay/privacy/shuojie/zh/user-agreement.html","privacy_prefix":"https://api.shoujihuifu.com/wap_pay/privacy/shuojie/zh/privacy.html"},{"id":3,"name":"动起","fullname":"上海动起信息科技有限公司","date":"2017年09月15日","address":"上海市崇明区长兴镇潘园公路1800号3号楼16659室（上海泰和经济发展区），联系电话400-007-6365","agreement_prefix":"https://api.shoujihuifu.com/wap_pay/privacy/dongqi/zh/user-agreement.html","privacy_prefix":"https://api.shoujihuifu.com/wap_pay/privacy/dongqi/zh/privacy.html"},{"id":4,"name":"为都","fullname":"上海为都信息科技有限公司","date":"2017年09月15日","address":"上海市崇明区长兴镇潘园公路1800号3号楼70078室（上海泰和经济发展区）","agreement_prefix":"https://api.shoujihuifu.com/wap_pay/privacy/weidu/zh/user-agreement.html","privacy_prefix":"https://api.shoujihuifu.com/wap_pay/privacy/weidu/zh/privacy.html"},{"id":6,"name":"嗨动","fullname":"成都嗨动信息科技有限公司","date":"2021年03月03日","address":"四川省成都市成华区二仙桥东路15号3栋116号","agreement_prefix":"https://h5.haidongxinxi.com/app/haidong/user.html","privacy_prefix":"https://h5.haidongxinxi.com/app/haidong/privacy.html"},{"id":7,"name":"风速","fullname":"重庆风速信息科技有限公司","date":"2020年11月18日","address":"重庆市九龙坡区谢家湾正街51号11-2号","agreement_prefix":"https://h5.fengsuxinxi.com/app/fengsu/user.html","privacy_prefix":"https://h5.fengsuxinxi.com/app/fengsu/privacy.html"},{"id":8,"name":"灵豹","fullname":"上海灵豹信息科技有限公司","date":"2018年07月18日","address":"上海市宝山区陆翔路111弄6号306室，联系电话021-56456318","agreement_prefix":"https://api.shoujihuifu.com/wap_pay/privacy/lingbao/zh/user-agreement.html","privacy_prefix":"https://api.shoujihuifu.com/wap_pay/privacy/lingbao/zh/privacy.html"},{"id":10,"name":"毛艳艳","fullname":"毛艳艳","date":"2019年08月14日","address":null,"agreement_prefix":"https://api.shoujihuifu.com/wap_pay/privacy/individual/zh/user-agreement.html","privacy_prefix":"https://api.shoujihuifu.com/wap_pay/privacy/individual/zh/privacy.html"},{"id":11,"name":"共飞","fullname":"上海共飞信息科技有限公司","date":"2019年08月15日","address":"上海市崇明区陈家镇层海路888号3号楼1层（上海智慧岛数据产业园）","agreement_prefix":"https://h5.gongfeikeji.com/app/gongfei/user.html","privacy_prefix":"https://h5.gongfeikeji.com/app/gongfei/privacy.html"},{"id":12,"name":"陈刘凤","fullname":"陈刘凤","date":null,"address":null,"agreement_prefix":"https://h5.51xiasheji.com/app/chenliufeng/user.html","privacy_prefix":"https://h5.51xiasheji.com/app/chenliufeng/privacy.html"}]
//#endregion manage by program
var soft_name = getQueryString("soft_name") || "";
var package_id = getQueryString("packageId") || "";
var platform = getQueryString("platform");
var version = getQueryString("version");
if (!platform) platform = "";
platform = platform.toLowerCase();
// IOS不带版本号默认使用最新版本 android默认使用最老版本
if (!version) version = platform == "ios" ? "999.0.0" : "0.0.1";
var nameAlias = {
	极速PDF转换器: "迅捷PDF转换器"
};
var app;
if (!app && package_id) {
	for (var i = 0; i < apps.length; i++) {
		var item = apps[i];
		if (item.pkg == package_id) {
			app = item;
			break;
		}
	}
}
if (!app && platform != "ios") {
	var sname = nameAlias[soft_name] || soft_name;
	for (var i = 0; i < apps.length; i++) {
		var item = apps[i];
		if (item.name == sname) {
			app = item;
			break;
		}
	}
}
var company;
if (app) {
	app.privacy_pkg = app.pkg;
	app.agreement_pkg = app.pkg;
	app.privacy_name = app.name;
	app.agreement_name = app.name;
	for (var i = 0; i < companys.length; i++) {
		var row = companys[i];
		if (row.id == app.cid) {
			company = row;
			break;
		}
	}
	while (app.privacy_pid) {
		for (var i = 0; i < apps.length; i++) {
			var row = apps[i];
			if (row.id == app.privacy_pid) {
				app.privacy_pid = row.privacy_pid;
				app.privacy_pkg = row.pkg;
				app.privacy_name = row.name;
				app.privacies = row.privacies;
				break;
			}
		}
	}
	if (app.privacies) {
		var v = "";
		for (var i = 0; i < app.privacies.length; i++) {
			var t = app.privacies[i];
			if (versionCompare(t, version) <= 0 && versionCompare(v, t) <= 0) {
				v = t;
			}
		}
		if (v) {
			app.privacy = "/wap_pay/privacy/hudun/zh/privacy/" + app.privacy_pkg + "/" + v + ".html";
		}
	}
	while (app.agreement_pid) {
		for (var i = 0; i < apps.length; i++) {
			var row = apps[i];
			if (row.id == app.agreement_pid) {
				app.agreement_pid = row.agreement_pid;
				app.agreement_pkg = row.pkg;
				app.agreement_name = row.name;
				app.agreements = row.agreements;
				break;
			}
		}
	}
	if (app.agreements) {
		var v = "";
		for (var i = 0; i < app.agreements.length; i++) {
			var t = app.agreements[i];
			if (versionCompare(t, version) <= 0 && versionCompare(v, t) <= 0) {
				v = t;
			}
		}
		if (v) {
			app.agreement =
				"/wap_pay/privacy/hudun/zh/agreement/" + app.agreement_pkg + "/" + v + ".html";
		}
	}
	console.log(app.privacy);
}
if (!company) {
	// 根据URL确定公司
	if (/hudun/.test(location.pathname)) company = companys[0];
	else if (/shuojie/.test(location.pathname)) company = companys[1];
	else if (/dongqi/.test(location.pathname)) company = companys[2];
	else if (/weidu/.test(location.pathname)) company = companys[3];
	else if (/haidong/.test(location.pathname)) company = companys[4];
	else if (/fengsu/.test(location.pathname)) company = companys[5];
	else if (/lingbao/.test(location.pathname)) company = companys[6];
	else if (/individual/.test(location.pathname)) company = companys[7];
	else if (/gongfei/.test(location.pathname)) company = companys[8];
	else company = companys[0];
}
function versionCompare(a, b) {
	var aa = a.split(".");
	var bb = b.split(".");
	var len = Math.max(aa.length, bb.length);
	for (var i = 0; i < len; i++) {
		var t = (+aa[i] || 0) - (+bb[i] || 0);
		if (t) return t;
	}
	return 0;
}
