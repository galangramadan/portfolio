export function UnderDevelopment() {
  const container = document.createElement("div");

  container.setAttribute("id", "not-found");
  container.setAttribute(
    "class",
    "mx-auto h-screen flex flex-col justify-center items-center gap-4 lg:gap-12"
  );

  container.innerHTML = `
    <h1 class="text-3xl lg:text-5xl text-center font-semibold">This page is under development.</h1>
    <p class="text-2xl lg:text-3xl font-medium">Still working on it...</p>
    <p class="font-medium">Back to <a href="/" class="font-bold">home</a>
  `;

  return container;
}
