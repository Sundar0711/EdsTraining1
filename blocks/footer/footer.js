export default function decorate(block) {
 
  const cols = [...block.children];
 
  if (cols.length) {
    block.classList.add('footer-container');
  }
 
  const gallery = cols[3];
 
  if (gallery) {
    gallery.classList.add('footer-gallery');
  }
 
  const bottom = document.createElement('div');
  bottom.className = 'footer-bottom';
 
  bottom.innerHTML = `
    <p>Copyright © transpo all rights reserved.</p>
    <div>
      <a href="#">Home</a>
      <a href="#">News</a>
      <a href="#">Contact</a>
    </div>
  `;
 
  block.append(bottom);
 
}