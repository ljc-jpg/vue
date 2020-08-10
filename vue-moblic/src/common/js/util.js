export default {
  dom: '/api',
  login: 'http://127.0.0.1:8762/cas-server/login',
  casIndex: 'http://127.0.0.1:8762/cas-server/index',
  goodsIndex: 'http://127.0.0.1:8762/goods-server/index',
  setCookie: function (name, value) {
    document.cookie = name + "=" + escape(value) + ";path=/";
  },
  getCookie: function (name) {
    let arr;
    let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
      return unescape(arr[2]);
    } else {
      return null;
    }
  },
  requestFormData: function (path, type, data, successCallback, errorCallback, async, oUrl) {
    let sUrl = this.dom + oUrl + path;
    console.log(sUrl)
    $.ajax({
      url: sUrl,
      type: type,
      data: data,
      contentType: "application/json",
      dataType: "json",
      xhrFields: {
        withCredentials: true
      },
      crossDomain: true,
      async: async,
      beforeSend: function (XMLHttpRequest) {
        XMLHttpRequest.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      },
      success: function (data, textStatus, request) {
        if (data && data.code == 401) {
          location.href = this.login;
        } else if (successCallback !== null) {
          successCallback(data, textStatus, request);
        }
      },
      error: function (xhr, type, exception) {
        if (xhr && xhr.responseText) {
          let resp = xhr.responseText;
          if (resp.indexOf('window.location.href') > 0 || resp.indexOf('401') > 0) {
            window.location.href = this.login;
          } else {
            errorCallback(xhr, type, exception);
          }
        } else {
          errorCallback(xhr, type, exception);
        }
      }
    });
  }

};
