export function About() {
  const container = document.createElement("section");

  container.setAttribute("id", "about");
  container.setAttribute(
    "class",
    "container mx-auto flex flex-col pt-12 lg:pt-20"
  );

  container.innerHTML = `
    <div>
      <h1 class="text-4xl lg:text-5xl font-black">Galang <span class="text-gray-600">Ramadan</span></h1>
      <p class="text-2xl lg:text-3xl font-bold pt-4 text-gray-600">Code <span class="text-black">Artisan</span></p>
    </div>
    <div class="pt-10 font-medium">
      <p>
        I'm a web developer. I like exploring things, especially in backend development.
        I actively seek out challenging projects that provide opportunities to broaden my horizons.
        Currently on the lookout for a full-time opportunity, whether it's as a full-stack or back-end web developer.
        Here are some technologies i've been working with recently:
      </p>
      <div class="flex flex-col lg:flex-row lg:gap-20 pt-4">
        <div class="tech-list">
          <ul>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Java</li>
            <li>PHP</li>
          </ul>
        </div>
        <div class="tech-list">
          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>Express</li>
            <li>Spring Boot</li>
          </ul>
        </div>
        <div class="tech-list">
          <ul>
            <li>MySQL</li>
            <li>Nginx</li>
          </ul>
        </div>
      </div>
    </div>
  `;

  return container;
}
