window.onload = function() {
    getCookieData();
}

function login(){
    var usernameVal= $("#Username").val();
    var passwordVal= $("#Password").val();
    document.cookie ='Username='+usernameVal+';Password='+passwordVal+';max-age=15552000';
    getCookieData();
}

function logout(){
    document.cookie = "Username=; Password=; max-age=0";
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
    $('#UsernameCookie').val(username);
    $('#PasswordCookie').val(password);
    }
};


