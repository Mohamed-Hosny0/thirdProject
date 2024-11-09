var btns = document.querySelectorAll(".btn1");

btns.forEach(function (btn) {
    btn.onclick = function () {
        alert("The Text Has Been Copied");
        btn.innerText = "Copied!";
    };
});


