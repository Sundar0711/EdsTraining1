export default function decorate(block) {
 
  const rows = [...block.children];
 
  rows.forEach((row) => {
    row.classList.add('transport-row');
  });
 
  const image = block.querySelector('picture');
  if (image) {
    image.closest('div').classList.add('transport-image');
  }
 
}