let actnum = document.getElementById('num').innerHTML;

$("#plus").click(() => {
    $("#num").text(++actnum);
});

$("#minus").click(() => {
    $("#num").text(--actnum);
});