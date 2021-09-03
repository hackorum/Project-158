AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" },
  },
  init: function () {
    this.handleMouseEnter();
    this.handleMouseLeave();
  },
  handleMouseEnter: function () {
    this.el.addEventListener("mouseenter", () => {
      const id = this.el.getAttribute("id");
      const comicNames = [
        "spiderman",
        "superman",
        "captain-aero",
        "outer-space",
      ];
      if (comicNames.includes(id)) {
        const posterContainer = document.querySelector("#posters-container");
        posterContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", { color: "orange" });
      }
    });
  },
  handleMouseLeave: function () {
    this.el.addEventListener("mouseleave", () => {
      const { selectedItemId } = this.data;
      if (selectedItemId) {
        const el = document.querySelector(`#${selectedItemId}`);
        const id = el.getAttribute("id");
        if (id == selectedItemId) {
          el.setAttribute("material", { color: "dodgerblue" });
        }
      }
    });
  },
});
