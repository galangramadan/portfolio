export function NotFound() {
  const container = document.createElement("div");

  container.setAttribute("id", "not-found");
  container.setAttribute(
    "class",
    "mx-auto h-screen flex flex-col justify-center items-center gap-4 lg:gap-12"
  );

  container.innerHTML = `
    <h1 class="text-3xl lg:text-5xl text-center font-semibold">Oops, Page not found!</h1>
    <p class="text-5xl lg:text-7xl font-bold">404</p>
    <p class="font-medium">Back to <a href="/" class="font-bold">home</a>
  `;

  return container;
}
