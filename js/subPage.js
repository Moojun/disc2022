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


/* Calendar */
let date = new Date();

const renderCalender = () => {
  const viewYear = date.getFullYear();
  const viewMonth = date.getMonth();

  console.log('viewYear : ' + viewYear + ', viewMonth : ' + viewMonth);

  document.querySelector('.year-month').textContent = `${viewYear}년 ${viewMonth + 1}월`;

  const prevLast = new Date(viewYear, viewMonth, 0);
  const thisLast = new Date(viewYear, viewMonth + 1, 0);

  const PLDate = prevLast.getDate();
  const PLDay = prevLast.getDay();

  const TLDate = thisLast.getDate();
  const TLDay = thisLast.getDay();

  const prevDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1);
  const nextDates = [];

  if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }

  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i);
  }

  const dates = prevDates.concat(thisDates, nextDates);
  const firstDateIndex = dates.indexOf(1);
  const lastDateIndex = dates.lastIndexOf(TLDate);

  dates.forEach((date, i) => {
    const condition = i >= firstDateIndex && i < lastDateIndex + 1
                      ? 'this'
                      : 'other';
    dates[i] = `<div class="date"><span class=${condition}>${date}<br></span></div>`;
  });

  document.querySelector('.dates').innerHTML = dates.join('');

  const today = new Date();
  if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
    for (let date of document.querySelectorAll('.this')) {
      if (+date.innerText === today.getDate()) {
        date.classList.add('today');
        break;
      }
    }
  }

  let text = document.querySelector('#text-part');
  let date2 = new Date();
  let todayMonth = date2.getMonth() + 1;

  let textObj = {};  // Object 선언

  let useObj = {};

  document.querySelectorAll('.date').forEach((date, i) => {
    //console.log(i + date);
    date.onclick = (e) => {
        let schedule = prompt("Enter the schedule")
        // e.target.firstChild.innerHTML += "<span class='birth'>" + schedule + "</span>"

        if ((textObj[todayMonth + "/" + i] == null)) {
          textObj[todayMonth + "/" + i] = "";
        }

        if (schedule == null) {
          return;
        }
        textObj[todayMonth + "/" + i] += "<li>" + schedule + "</li>";

        //Object Key 오름차순 정렬
        let out1 = Object.fromEntries(
          Object.entries(textObj).sort(([a],[b]) => a < b? -1: 1 )
        );

        text.innerHTML = "";
        // text.innerHTML += JSON.stringify(out1);

        for (objkey in out1) {
          text.innerHTML += (objkey + "<br>" + out1[objkey] + "<br>");
         
        }
      }

  });

};

renderCalender();

const prevMonth = () => {
  date.setDate(1);
  date.setMonth(date.getMonth() - 1);
  renderCalender();
}

const nextMonth = () => {
  date.setDate(1);
  date.setMonth(date.getMonth() + 1);
  renderCalender();
}

const goToday = () => {
  date = new Date();
  renderCalender();
};


