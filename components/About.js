export function About() {
  const container = document.createElement("section");

  container.setAttribute("id", "about");
  container.setAttribute(
    "class",
    "container mx-auto flex flex-col lg:flex-row pt-44 lg:pt-56 lg:pb-20"
  );

  container.innerHTML = `
    <div class="lg:w-1/2">
      <h1 class="text-4xl lg:text-5xl font-black">Galang <span class="text-gray-600">Ramadan</span></h1>
      <p class="text-2xl font-bold pt-4 text-gray-600">Code <span class="text-black">Artisan</span></p>
    </div>
    <div class="pt-20 lg:pt-0 lg:w-1/2 font-medium">
      <p>
        A dedicated web developer with a focused specialization in back-end development. Driven by a passion for continuously enhancing my skill set, I actively seek out challenging projects that provide opportunities to broaden my horizons.
      </p>
      <p class="pt-4">
        Currently on the lookout for a full-time opportunity, whether it's as a full-stack or back-end web developer.
      </p>
      <h4 class="pt-4">
        Here are some technologies i've been working with recently.
      </h4>
      <div class="flex flex-col lg:flex-row gap-4 pt-4">
        <div class="tech-list">
          <h5>Programming languages:</h5>
          <ul>
            <li>Javascript</li>
            <li>Typescript</li>
          </ul>
        </div>
        <div class="tech-list">
          <h5>Libraries and Frameworks:</h5>
          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>Express</li>
          </ul>
        </div>
        <div class="tech-list">
          <h5>Dbms:</h5>
          <ul>
            <li>MySQL</li>
          </ul>
        </div>
      </div>
    </div>
  `;

  return container;
}
