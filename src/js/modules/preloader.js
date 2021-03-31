export const preloader = () => {
  const preload = document.querySelector('.preloader');
  preload.classList.add('preloader-show');
  window.addEventListener('load', () => {
      preload.classList.remove('preloader-show');
  });
}