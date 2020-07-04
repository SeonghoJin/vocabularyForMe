let paras = document.getElementsByTagName("p");

for (p of paras) {
    p.innerHTML = p.innerHTML.replace("Chrome", "<span class=\"ext-hi\">Chrome</span>");
}

let highlights = document.getElementsByClassName("ext-hi");

for (h of highlights) {
    h.setAttribute("style", "background-color: #ffaaaa");
}