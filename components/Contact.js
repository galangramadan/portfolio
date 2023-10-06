export function Contact() {
  const container = document.createElement("section");

  container.setAttribute("id", "contact");
  container.setAttribute("class", "container mx-auto");
  container.innerHTML = `
    <h3 class="text-3xl font-bold">Contact</h3>
    <p class="mt-4 font-medium">
      My inbox is always open. You can contact me if you have any questions
      related to business, collaboration, or just want to say hi.
    </p>
    <div class="py-20 flex justify-center items-center">
      <a href="mailto:galangynr@outlook.com" class="px-4 py-2 border-2 border-black rounded-full font-semibold">
        Get in touch
      </a>
    </div>
  `;

  return container;
}
