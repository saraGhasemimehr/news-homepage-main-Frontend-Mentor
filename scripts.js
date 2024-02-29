/*
document.querySelector('.mobile-menu img').addEventListener('click', function() {
  document.querySelector('.mobile-menu-container').style.display = 'flex';
  document.querySelector('.mobile-menu img').style.display = 'none';
  document.querySelector('.mobile-menu').style.display = 'block'; 
});

document.querySelector('.mobile-menu-container img').addEventListener('click', function() {
  document.querySelector('.mobile-menu-container').style.display = 'none';
  document.querySelector('.mobile-menu img').style.display = 'block';
});
*/

let isMobileMenuOpen = false;

document.querySelector('.mobile-menu img').addEventListener('click', function() {
  document.querySelector('.mobile-menu-container').style.display = 'flex';
  document.querySelector('.mobile-menu-items').style.display = 'block';
  document.querySelector('.mobile-menu img').style.display = 'none';
  isMobileMenuOpen = true;
});

document.querySelector('.mobile-menu-container img').addEventListener('click', function() {
  document.querySelector('.mobile-menu-container').style.display = 'none';
  document.querySelector('.mobile-menu img').style.display = 'block';
  isMobileMenuOpen = false;
});

window.addEventListener('resize', function() {
  if (!isMobileMenuOpen) {
    document.querySelector('.mobile-menu img').style.display = 'block';
  }
});


