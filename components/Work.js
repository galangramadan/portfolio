export function Work() {
  const container = document.createElement("section");

  container.setAttribute("id", "work");
  container.setAttribute("class", "container mx-auto");

  container.innerHTML = `
    <h3 class="text-center text-3xl font-bold">Work</h3>
    <p class="text-center mt-4 font-medium">
      Here are some things i've built.
    </p>
    <div class="pt-12">
      <h5 class="font-bold text-xl lg:w-3/5 lg:text-center">Vaca</h5>
    <div class="flex flex-col lg:flex-row gap-4 pt-6">
      <img
        src="/images/vaca.png"
        alt="vaca"
        class="rounded-lg shadow-lg lg:w-3/5"
      />
      <div class="flex flex-col justify-center lg:w-2/5">
        <div class="card-description">
          <p class="text-center">
            A website that provides ebook subscription services.
          </p>
          <ul class="w-full flex justify-center gap-4 text-sm">
            <li>Next.js</li>
            <li>Express</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div class="flex justify-center gap-10 pt-10">
          <span>Link repo</span>
          <span>Link web</span>
        </div>
      </div>
    </div>
  `;

  return container;
}
