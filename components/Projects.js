export function Projects() {
  const container = document.createElement("section");

  container.setAttribute("id", "projects");
  container.setAttribute("class", "container mx-auto");

  container.innerHTML = `
    <h3 class="text-3xl font-bold">Projects</h3>
    <p class="mt-4 font-medium">
      I code some random things when I feel like it.
      Here are some things I've built, some of them are collaborative projects.
    </p>
    <div class="flex flex-col items-center lg:flex-row flex-wrap lg:justify-between gap-20 lg:gap-8 mt-8">
      <div class="max-w-md rounded overflow-hidden shadow-lg">
        <img src="/images/vaca.png" alt="vaca" class="w-full">
        <div class="px-6 py-4">
          <h5 class="font-bold text-xl mb-2">Vaca</h5>
          <p class="text-gray-700 text-base">
            A website that provides ebook subscription service.
          </p>
        </div>
        <div class="px-6 py-4">
          <a href="https://book-stores-tan.vercel.app" target="_blank" class="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 hover:bg-black hover:text-white mr-2 mt-2">Demo</a>
          <a href="https://github.com/rifqyarifani/book-stores" target="_blank" class="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 hover:bg-black hover:text-white mr-2 mt-2">Github (frontend)</a>
          <a href="https://github.com/galangramadan/vaca" target="_blank" class="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 hover:bg-black hover:text-white mr-2 mt-2">Github (backend)</a>
        </div>
        <div class="px-6 py-4">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">#Typescript</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">#Javascript</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">#Next.js</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">#Express</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">#MySQL</span>
        </div>
      </div>
      <div class="max-w-md rounded overflow-hidden shadow-lg">
        <img src="/images/diarywebapp.png" alt="diarywebapp" class="w-full">
        <div class="px-6 py-4">
          <h5 class="font-bold text-xl mb-2">Diary web</h5>
          <p class="text-gray-700 text-base">
            It's the first ever website I've deployed.
            Its main feature is to write a diary.
            Although it's still far from good and lacks features, this project is the one that made me love programming.
          </p>
        </div>
        <div class="px-6 py-4">
          <a href="https://diarywebapp.netlify.app" target="_blank" class="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 hover:bg-black hover:text-white mr-2 mt-2">Demo</a>
          <a href="https://github.com/galangramadan/diary-website-app" target="_blank" class="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 hover:bg-black hover:text-white mr-2 mt-2">Github</a>
        </div>
        <div class="px-6 py-4">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">#Javascript</span>
        </div>
      </div>
      <div class="max-w-md rounded overflow-hidden shadow-lg">
        <img src="/images/aetreya.png" alt="aetreya" class="w-full">
        <div class="px-6 py-4">
          <h5 class="font-bold text-xl mb-2">Aetreya</h5>
          <p class="text-gray-700 text-base">
            Aetreya is a website for newbie programmers.
            The main feature is a forum to display projects, look for people to collaborate on projects, and have discussions related to programming.
          </p>
        </div>
        <div class="px-6 py-4">
          <a href="https://github.com/Aetreya/aetreya-web" target="_blank" class="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 hover:bg-black hover:text-white mr-2 mt-2">Github</a>
        </div>
        <div class="px-6 py-4">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">#Java</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">#Typescript</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">#SpringBoot</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">#React</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">#MySQL</span>
        </div>
      </div>
      <div class="max-w-md rounded overflow-hidden shadow-lg">
        <img src="/images/portfolio.PNG" alt="portfolio" class="w-full">
        <div class="px-6 py-4">
          <h5 class="font-bold text-xl mb-2">Personal Portfolio</h5>
          <p class="text-gray-700 text-base">
            It's my personal portfolio website.
            I'm building it as simply as possible, adopting an SPA concept with only javascript and setting up the server on my own.
            I'm planning to continue developing it, especially the server, to run a few of my personal projects in the future.
          </p>
        </div>
        <div class="px-6 py-4">
          <a href="https://github.com/galangramadan/portfolio" target="_blank" class="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 hover:bg-black hover:text-white mr-2 mt-2">Github</a>
        </div>
        <div class="px-6 py-4">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">#Javascript</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">#Nginx</span>
        </div>
      </div>
      <div class="py-4 flex justify-center items-center w-full">
      <a href="/projects/all" class="px-4 py-2 border-2 border-white bg-black text-white hover:border-black hover:text-black hover:bg-white rounded-full font-semibold">
        See more ->
      </a>
    </div>
    </div>
  `;

  return container;
}
