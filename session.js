function checkLogin() {

    var isLogin = sessionStorage.getItem("isLogin");

    var user = sessionStorage.getItem("user");
    user = user.split(",");

    var username = user[1];
    var ad=user[0];

    if (isLogin == "true") {

        document.getElementById("btn_div").style.display = "none";
        document.getElementById("header_sag").innerHTML = "Kullanıcı: " + username + "&nbsp;&nbsp";
        document.getElementById("logout_Btn").style.display = "block";
        document.getElementById("portal_btn").style.display="block";

        document.getElementById("sayfa").innerHTML="<i>Merhaba</i>" + " " +  "<i>"+ ad + "</i>";
        

    }

};

function logout() {

    var isLogin = sessionStorage.getItem("isLogin");

    isLogin = false;

    sessionStorage.setItem("isLogin", isLogin);
    document.getElementById("logout_Btn").style.display = "none";

    location.reload();
    document.location.href="index.html"
   

};

function logout1() {

    var isLogin = sessionStorage.getItem("isLogin");

    isLogin = false;

    sessionStorage.setItem("isLogin", isLogin);
    document.getElementById("logout_Btn").style.display = "none";

    document.location.href="index.html"
   

};


