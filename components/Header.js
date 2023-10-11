export function Header() {
  const container = document.createElement("header");

  container.setAttribute(
    "class",
    "absolute top-0 left-0 right-0 bg-black text-white"
  );

  container.innerHTML = `
    <div class="container mx-auto h-20 flex justify-between items-center">
      <div id="logo">
        <span class="text-2xl font-black">Gyar</span>
      </div>
      <nav class="absolute top-20 left-0 right-0 lg:static flex pl-4 bg-black translate-x-full lg:translate-x-0 duration-300">
        <ul class="flex flex-col lg:flex-row gap-4 pb-4 lg:pb-0 lg:gap-20 font-semibold">
          <li><a href="/#about" class="hover:text-gray-300">About</a></li>
          <li><a href="/#projects" class="hover:text-gray-300">Projects</a></li>
          <li><a href="/#contact" class="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
      <div id="mobile-nav" type="button" class="lg:hidden">
        <button id="btn-nav">
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M4 12H20M4 8H20M4 16H12"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  `;

  return container;
}
