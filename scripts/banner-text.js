// @tweakable Banner text configuration
const bannerTextConfig = {
  /* @tweakable Controls whether the close button is visible */
  showCloseButton: false,

  /* @tweakable Animation duration for showing/hiding banner text */
  animationDuration: 300, // milliseconds
  
  /* @tweakable Vertical translation distance when hiding/showing */
  verticalTranslationDistance: 20, // pixels

  /* @tweakable Auto-hide banner text after a certain duration (in milliseconds) */
  autoHideDuration: null, // Set to null to disable, or a number of milliseconds

  /* @tweakable Opacity levels for banner text */
  opacityLevels: {
    visible: 1,
    hidden: 0
  }
};

document.addEventListener('DOMContentLoaded', () => {
  let isBannerTextVisible = true;
  const bannerTextBelow = document.querySelector('.banner-text-below');
  
  // Optional: Add auto-hide functionality if duration is set
  if (bannerTextConfig.autoHideDuration) {
    setTimeout(() => {
      bannerTextBelow.style.transition = `opacity ${bannerTextConfig.animationDuration}ms ease, transform ${bannerTextConfig.animationDuration}ms ease`;
      bannerTextBelow.style.opacity = bannerTextConfig.opacityLevels.hidden;
      bannerTextBelow.style.transform = `translateY(-${bannerTextConfig.verticalTranslationDistance}px)`;
      isBannerTextVisible = false;
    }, bannerTextConfig.autoHideDuration);
  }

  // Remove the close button logic since it's now hidden/removed
});