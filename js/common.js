window.onload = function() {
    getCookieData();
}

function login(){
    var usernameVal= $("#Username").val();
    var passwordVal= $("#Password").val();
    document.cookie ='Username='+usernameVal+';max-age=15552000;';
    document.cookie ='Password='+passwordVal+';max-age=15552000;';
    getCookieData();
}

function logout(){
    document.cookie = 'Username=;';
    document.cookie = 'Password=;';
    getCookieData();
}

function getCookieData(){
    //cookie値を連想配列として取得する
    var arr = new Array();
    if(document.cookie != ''){
      var tmp = document.cookie.split('; ');
      for(var i=0;i<tmp.length;i++){
        var data = tmp[i].split('=');
        arr[data[0]] = decodeURIComponent(data[1]);
      }
    var username = arr["Username"];
    var password = arr["Password"];
    if(username != ''){
        $('#UsernameCookie').text("ユーザ名:"+username);
    }else{
        $('#UsernameCookie').text("");
    }
    if(password != ''){
        $('#PasswordCookie').text("パスワード:"+password);
    }else{
        $('#PasswordCookie').text("");
    }
}
};


