let indicator = document.querySelectorAll('.indicator button');
let lightbox = document.querySelector('#lightbox');
let block = document.querySelector('#block'); // 라이트박스 배경
let lightboxContents = document.querySelectorAll(".lightbox-contents");

// lightbox 표시
function lightbox_open(num){
    lightbox.setAttribute('class', 'active');
    block.setAttribute('class', 'active');

    for (let i = 0; i < lightboxContents.length; i++) {
      lightboxContents[i].style.display = 'none'
    }
    lightboxContents[num - 1].style.display = '';

    change_img(num);
    indicator[num-1].focus();	
}

// lightbox close
function lightbox_close(){
    lightbox.removeAttribute('class');
    block.removeAttribute('class');
}

// 이미지 전환 표시 함수
function change_img(val){
  let imgs = document.querySelectorAll('figure > img');

  for(let i = 0; i < imgs.length; i++){
    imgs[i].removeAttribute('class');
  }
  imgs[val - 1].setAttribute('class', 'active');

  for (let i = 0; i < lightboxContents.length; i++) {
    lightboxContents[i].style.display = 'none'
  }
  lightboxContents[val - 1].style.display = '';
}	