$("button").on("click", (event) => {
    console.log("Yeah, you clicked me");
});

$("#second").click(() => {
    $("#first").text("Second one was clicked");
});

$('#third').click(() => {
    $("button").css("background", "purple");
  $("button").css("color", "white");
  $("button").css("font-size", "20px");
  $("button").css("border", "0");
  $("button").css("border-radius", "5px");
});