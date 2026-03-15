export default function decorate(block) {
 
  const picture = block.querySelector('picture');
 
  if (picture) {
    block.style.backgroundImage = `url(${picture.querySelector('img').src})`;
    picture.remove();
  }
 
  const button = block.querySelector('a');
 
  if (button) {
    button.classList.add('banner-btn');
  }
 
}