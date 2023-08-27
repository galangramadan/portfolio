export function Contact() {
  const container = document.createElement("section");

  container.setAttribute("id", "contact");
  container.setAttribute("class", "container mx-auto");
  container.innerHTML = `
    <h3 class="text-center text-3xl font-bold">Contact</h3>
    <p class="text-center mt-4 font-medium">
      My inbox is always open. You can contact me if you have any questions
      related to business, collaboration, or just want to say hi.
    </p>
    <div class="py-20 flex justify-center items-center">
      <button class="px-4 py-2 border border-black rounded-full">
        Get in touch
      </button>
    </div>
    `;

  return container;
}
