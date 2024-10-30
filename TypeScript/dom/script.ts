const links = document.querySelectorAll('.link');

links.forEach((link) => {
  if (link instanceof HTMLElement) {
    alterarCor(link);
  }
})

function alterarCor(link: HTMLElement) {
  link.style.color = '#0f0';
  link.style.border = '1px solid #0ff'
}