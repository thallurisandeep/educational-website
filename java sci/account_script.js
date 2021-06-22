document.addEventListener('DOMContentLoaded', (event) => {

    document.getElementById("login").onclick = function () {
        if (document.getElementById("login-drop-down-menu").classList.contains("popup"))
            document.getElementById("login-drop-down-menu").classList.remove("popup");
        else if (!document.getElementById("login-drop-down-menu").classList.contains("popup"))
            document.getElementById("login-drop-down-menu").classList.add("popup");
    };

    //__________|__________|__________| Scroll |__________|__________|__________\\
    document.addEventListener('scroll', (event) => {

        //_____| LogIn Drop Down Menu Toggle |_____\\
        if (document.getElementById("login-drop-down-menu").classList.contains("popup"))
            document.getElementById("login-drop-down-menu").classList.remove("popup");

    });

});
