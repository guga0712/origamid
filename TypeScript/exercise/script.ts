const link = document.querySelector('a')
console.log(link)

if (link instanceof HTMLAnchorElement) {
  link.href = link.href.replace('http://', 'https://');
}