export const preloader = () => {
  const preload = document.querySelector('.preloader');
  preload.classList.add('preloader-show');
  window.addEventListener('load', () => {
    setTimeout(()=>{
      preload.classList.remove('preloader-show');
    }, 1000)
  });
}