export const scrollToContact = () => {
  // If we're not on the contact page, navigate to it first
  if (window.location.pathname !== "/kontakt") {
    window.location.href = "/kontakt#contact-form";
    return;
  }

  // If we're already on the contact page, scroll to the form
  const form = document.getElementById("contact-form");
  if (form) {
    form.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
