(() => {
  const refs = {
    openMobylBtn: document.querySelector("[data-mobyl-open]"),
    closeMobylBtn: document.querySelector("[data-mobyl-close]"),
    mobyl: document.querySelector("[data-mobyl]"),
  };

  refs.openMobylBtn.addEventListener("click", toggleMobyl);
  refs.closeMobylBtn.addEventListener("click", toggleMobyl);

  function toggleMobyl() {
    refs.mobyl.classList.toggle("is-hidden");
    }
    
})();