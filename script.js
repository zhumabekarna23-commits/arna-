function sendMessage() {
  let input = document.getElementById("input").value;

  if (input === "") {
    document.getElementById("response").innerText = "Бос жазба!";
    return;
  }

  document.getElementById("response").innerText =
    "Сен жаздың: " + input;
}
