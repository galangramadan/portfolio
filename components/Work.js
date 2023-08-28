export function Work() {
  const container = document.createElement("section");

  container.setAttribute("id", "work");
  container.setAttribute("class", "container mx-auto");

  container.innerHTML = `
    <h3 class="text-center text-3xl font-bold">Work</h3>
    <p class="text-center mt-4 font-medium">
      Here are some things i've built.
    </p>
    <h5 class="font-bold text-xl lg:w-3/5 lg:text-center pt-12">Vaca</h5>
    <div class="flex flex-col lg:flex-row gap-4 pt-6 font-medium">
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
        </div>
        <ul class="w-full flex justify-center gap-4 text-sm font-normal pt-8">
          <li>Next.js</li>
          <li>Express</li>
          <li>MySQL</li>
        </ul>
        <div class="flex justify-center gap-10 pt-8">
          <span>Link repo</span>
          <span>Link web</span>
        </div>
      </div>
    </div>
    <h5 class="font-bold text-xl lg:w-3/5 lg:text-center lg:ml-auto pt-12">Diary web</h5>
    <div class="flex flex-col lg:flex-row-reverse gap-4 pt-6 font-medium">
      <img
        src="/images/diarywebapp.png"
        alt="diarywebapp"
        class="rounded-lg shadow-lg lg:w-3/5"
      />
      <div class="flex flex-col justify-center lg:w-2/5">
        <div class="card-description">
          <p class="text-center">
            It's the first ever website I've deployed. You can create an account and write your diary there. Although it's still far from good and lacks features, this project is the one that made me love programming.
          </p>
        </div>
        <ul class="w-full flex justify-center gap-4 text-sm font-normal pt-8">
          <li>Javascript</li>
        </ul>
        <div class="flex justify-center gap-10 pt-8">
          <span>Link repo</span>
          <span>Link web</span>
        </div>
      </div>
    </div>
  `;

  return container;
}
