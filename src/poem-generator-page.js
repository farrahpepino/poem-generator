document.addEventListener("DOMContentLoaded", function () {
  function displayPoem(response) {
    console.log("poem generated");
  }

  function generatePoem(event) {
    event.preventDefault();

    new Typewriter("#verse", {
      strings: "La tombe dit à la rose",
      autoStart: true,
      delay: 1,
      cursor: "",
    });

    let key = "010at9ca97fd6359640c0357507fb1co";
    let prompt = "Generate a poem";
    let context = "Make sure it is unique";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

    console.log("generating poem...");
    axios.get(apiUrl).then(displayPoem);
  }

  let poemFormElement = document.querySelector("#generate-poem");
  poemFormElement.addEventListener("submit", generatePoem);
});
