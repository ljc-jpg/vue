const util = {
    dom: '/api',
    login: 'http://127.0.0.1:8762/cas-server/login',
    casIndex: 'http://127.0.0.1:8762/cas-server/index',
    goodsIndex: 'http://127.0.0.1:8762/goods-server/index',
    setCookie: function (name: string, value: string) {
        document.cookie = name + "=" + escape(value) + ";path=/";
    },
    getCookie: function (name: string) {
        let arr;
        let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) {
            return unescape(arr[2]);
        } else {
            return null;
        }
    },
};

export default util;
