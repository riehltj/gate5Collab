const list = document.querySelectorAll('.other-dropdown');
for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function () {

        var item = list[i]
        var val = item.options[item.selectedIndex].value;
        if (val == "other") {
            item.nextSibling.nextSibling.style.display = "inline";
        } else {
            item.nextSibling.nextSibling.style.display = "none";
        }
        return
    });
}