
$(document).ready(function () {
    $("div").hide();
    $("p").click(function () {
        $(this).next().slideToggle();
    });
});

function r_knowledge(i) {
    fetch(`http://localhost:5501/api/get_list_r_knowledge/${i}`)
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById("rknowledge").querySelector("ul");
            list.innerHTML = "";
            data.forEach(item => {
                const new_item = document.createElement("li");
                new_item.textContent = item.name;
                new_item.onclick = () => select_item(item.id);
                list.appendChild(new_item);
            });
        })
        .catch(error => console.error(error));
}

select_item = function (i) {
    const iframe = document.getElementById("file");
    iframe.setAttribute("src", "./pdf/[" + i.toString() + "].pdf");

    r_knowledge(i);
}

function searchAPI() {
    const input = document.getElementById("keySearch");
    const searchText = input.value;

    fetch(`http://localhost:5501/api/search/${searchText}`)
        .then(response => response.text())
        .then(result => {
            if (result<=23 && result>=1) {
                select_item(result);
                console.log(result);
            } else {
                alert("Không tìm được tài liệu")
            }
        })
        .catch(error => console.error(error));
}
