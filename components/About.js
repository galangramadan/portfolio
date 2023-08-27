export function About() {
  const container = document.createElement("section");

  container.setAttribute("id", "about");
  container.setAttribute(
    "class",
    "container mx-auto flex flex-col lg:flex-row pt-44 lg:pt-72 lg:pb-20"
  );

  container.innerHTML = `
    <div class="lg:w-1/2">
      <h1 class="text-4xl lg:text-5xl font-black">Galang Ramadan</h1>
      <p class="text-2xl font-bold">Web developer</p>
    </div>
    <div class="pt-20 lg:pt-0 lg:w-1/2 font-medium">
      <p>
        Back-end development enthusiast. Passionate about combining beautiful
        code with excellent performance.
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
