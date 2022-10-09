const btnContainer = document.querySelector('.myBtnContainer');
const btns = btnContainer.querySelectorAll('.catalog-btn');
const menuButton = document.querySelector('.m-menu')
const menu = document.querySelector('.menu')

for (var i = 0; i < btns.length; i++) {
  console.log("jkdhdjkgh");
  btns[i].addEventListener('click', function() {
    const current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}

menuButton.addEventListener('click', () => {
  console.log("ejfhhefh");
  menu.classList.toggle("is-open")
})