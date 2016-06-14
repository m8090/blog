
/*

 * ajax 请求处理函数

 * 

 */

function ajaxGetJson(url, callback, data) {

	ajax(url, callback, data, 'GET');

}



function ajaxGetHtml(url, callback, data) {

	ajax(url, callback, data, 'GET');

}



function ajaxPostJson(url, callback, data) {

	ajax(url, callback, data, 'POST');

}



function ajaxPostJsonAsync(url, callback, data) {

	ajax(url, callback, data, 'POST');

}



function ajaxPostJsonSync(url, callback, data) {

	ajaxSync(url, callback, data, 'POST');

}



function ajaxPostHtml(url, callback, data) {

	ajax(url, callback, data, 'POST');

}



function ajaxLoad(selector, url, callback, data) {

	ajaxGetHtml(url, function(result, status) {

		$(selector).empty();

		$(selector).html(result);

		if (callback)

			callback(result, status);

	}, data);

}



function ajax(url, callback, data, type) {

	$.ajax({

		url : url,

		data : data,

		type : type,

		async: true,

		cache : false,

		success : function(result, status) {

			if (result.authorized) {

				if (result.invalidLogin) {

					location.href=basePath()+"/index.shtml";

					return;

				}else {

					//showLoginBox();

					location.href=basePath()+"/login.shtml";

				}

			} else {

				if (callback)

					callback(result, status);

			}

		}

	});

}



function ajaxSync(url, callback, data, type) {

	$.ajax({

		url : url,

		data : data,

		async: false,

		type : type,

		cache : false,

		success : function(result, status) {

			if (result.authorized) {

				if (result.invalidLogin) {

					location.href=basePath()+"/index.shtml";

					return;

				}else {

					location.href=basePath()+"/login.shtml";

					//showLoginBox();

				}

			} else {

				if (callback)

					callback(result, status);

			}

		}

	});

}



function realizationList(uid, type) {

	var tmpUrl = "";

	if(type=='LIST'){

		tmpUrl = "https://www.itoumi.com/bxt/index.html";

	}else if(type=='DAYDAYGOLDENINDEX'){

		tmpUrl = "https://www.itoumi.com/sxb/index.html";

	}else if(type=='SHOW'){

		tmpUrl = "https://www.itoumi.com/bxt/showAssets.html";

	}else if(type=='DAYDAYGOLDEN'){

		tmpUrl = "https://www.itoumi.com/sxb/showAssets.html";

	}

	var newWin = window.open(tmpUrl,"_blank");

	ajaxPostJson(basePath() + "/realization/revenueList.jspx", function(data,

			status) {

		newWin.location.href=data.URL;

	}, {

		'userId' : uid,

		'type' : type

	});


}