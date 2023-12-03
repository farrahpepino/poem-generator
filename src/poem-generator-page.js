document.addEventListener("DOMContentLoaded", function () {
  function generatePoem(event) {
    event.preventDefault();

    new Typewriter("#verse", {
      strings: "La tombe dit à la rose",
      autoStart: true,
      delay: 1,
      cursor: "",
    });
  }

  let poemFormElement = document.querySelector("#generate-poem");
  poemFormElement.addEventListener("submit", generatePoem);

  // let apiKey =
  // let apiUrl =
  // axios.get().then
});
