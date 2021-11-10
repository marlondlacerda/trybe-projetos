const borderStyles = document.querySelector('.buttons-container').childNodes;
const btnDownload = document.querySelector('.download');
const container = document.querySelector('#meme-image-container');
const inputImg = document.querySelector('#meme-insert');
const inputText = document.querySelector('#text-input');
const localText = document.querySelectorAll('input[name="localText"]');
const memeImage = document.querySelector('#meme-image');
const memeText = document.querySelector('#meme-text');
const preMemes = document.querySelector('#meme-templates').childNodes;
const save = document.querySelector('.save');

inputText.addEventListener('input', () => {
  memeText.innerHTML = inputText.value;
});

// source https://www.webtrickshome.com/forum/how-to-display-uploaded-image-in-html-using-javascript
inputImg.addEventListener('input', ({ target }) => {
  memeImage.src = URL.createObjectURL(target.files[0]);
});

borderStyles.forEach((element) => {
  element.addEventListener('click', ({target: { value }}) => {
    container.style.border = value;
  })
})

preMemes.forEach((element) => {
  element.addEventListener('click', () => {
    memeImage.src = element.src;
  });
});

// source https://dev.to/cjuniordev/transformando-html-em-imagens-2k5e
save.addEventListener('click', () => {
  // eslint-disable-next-line no-undef
  html2canvas(document.querySelector('#meme-image-container')).then((canvas) => {
    btnDownload.href = canvas.toDataURL('image/png');
    btnDownload.download = 'minha-imagem';
    btnDownload.click();
  });
});

localText.forEach((element) => {
  element.addEventListener('click', () => {
    memeText.style.top = element.value;
  });
});
