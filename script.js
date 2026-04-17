const shareButton = document.querySelector(".share-button");
const sharePanel = document.querySelector(".share-panel");
if (shareButton && sharePanel) {
  const closeSharePanel = () => {
    shareButton.setAttribute("aria-expanded", "false");
    sharePanel.hidden = true;
  };

  const openSharePanel = () => {
    shareButton.setAttribute("aria-expanded", "true");
    sharePanel.hidden = false;
  };

  shareButton.addEventListener("click", (event) => {
    event.stopPropagation();

    const isOpen = shareButton.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      closeSharePanel();
      return;
    }

    openSharePanel();
  });

  sharePanel.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  document.addEventListener("click", () => {
    closeSharePanel();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || sharePanel.hidden) {
      return;
    }

    closeSharePanel();
    shareButton.focus();
  });
}
