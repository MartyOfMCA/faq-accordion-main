let expandedFaqContent;

document.querySelectorAll(".faq__header__action").forEach((item) => {
  item.addEventListener("click", (event) => {
    const currentFaqContent = item.parentNode.parentNode.children[1];

    // Collapse all open faqs if any of them is expanded.
    if (expandedFaqContent && expandedFaqContent !== currentFaqContent) {
      // Show the plus toggle icon for the previous faq.
      toggleFaq(expandedFaqContent.parentNode.children[0].children[1]);
      collapseOtherFaqs();
    }

    // Store the expanded faq content so consecutive calls can trigger a collapse.
    expandedFaqContent = item.parentNode.parentNode.children[1];
    toggleFaq(item);
  });
});

function toggleFaq(faqActions) {
  const plus = faqActions.children[0];
  const minus = faqActions.children[1];

  // Expand the faq
  if (minus.classList.value.includes("hide")) {
    minus.classList.remove("hide");
    plus.classList.add("hide");
    expandedFaqContent.classList.remove("hide");
  } else {
    // Collapse the faq.
    minus.classList.add("hide");
    plus.classList.remove("hide");
    expandedFaqContent.classList.add("hide");

    // All faqs are collapsed now.
    expandedFaqContent = undefined;
  }
}

function collapseOtherFaqs() {
  // Collapse all faq contents.
  document.querySelectorAll(".faq__content").forEach((faqContent) => {
    faqContent.classList.add("hide");
  });
}
