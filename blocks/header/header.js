export default function decorate(block) {
  block.classList.add('header');
 
  const topbar = document.createElement('div');
  topbar.className = 'topbar';
  topbar.innerHTML = `
    <div>3rd floor, Shiromoni, Gopalpur New York | +928 556 728 349 | transpo83@example.com</div>
    <div>Service | Open hours: 24/7</div>
  `;
 
  const navbar = document.createElement('div');
  navbar.className = 'navbar';
  navbar.innerHTML = `
    <div class="logo">Transpo</div>
    <div class="menu-toggle">☰</div>
    <ul class="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Service</a></li>
      <li><a href="#">Pages</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#" class="quote-btn">Request To Quote</a></li>
    </ul>
  `;
 
  block.innerHTML = '';
  block.append(topbar, navbar);
 
  const toggle = block.querySelector('.menu-toggle');
  const navLinks = block.querySelector('.nav-links');
 
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}
 