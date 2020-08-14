document.getElementById("input_text").addEventListener("input", destroyText);
function destroyText(e) {
  let text = e.target.value;
  if (text.length >= 43 && text[text.length - 1] == " ") {
    document.getElementById(
      "destroy_text"
    ).innerHTML = `<input class="animate__animated animate__fadeOutUp" value="${text}"/>`;
    e.target.value = "";
  }
}
