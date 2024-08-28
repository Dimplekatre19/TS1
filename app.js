var cl = console.log;
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var addbtn = document.getElementById("addbtn");
var add = function (n1, n2) {
    return n1 + n2;
};
addbtn.addEventListener("click", function () {
    cl(add(+num1.value, +num2.value));
});
