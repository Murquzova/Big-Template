const data = document.querySelector('.red-module span');
let day = new Date().getDate();
let week = new Date().getDay();
let month = new Date().getMonth();
let hefte = [
  'Sunday ',
  'Monday',
  'Tuesday ',
  'Wednesday ',
  'Thursday ',
  'Friday ',
  'Saturday ',
];
let ay = [
  'Jan',
  'Feb',
  'Mar ',
  'Apr',
  'May ',
  'Jun ',
  'Jul ',
  'Aug ',
  'Sep ',
  'Oct ',
  'Nov ',
  'Dec ',
];
data.innerHTML = `${hefte[week]}, ${ay[month]} ${day}`;

let text_array = [
  {
    text: 'The clock is ticking for e-cig companies underage',
  },
  {
    text: 'A wonderful serenity has taken possession of my',
  },
  {
    text: 'They’re back! Kennedy Darling, LeCras named ',
  },
  {
    text: 'The clock is ticking for e-cig companies to block ',
  },
  {
    text: 'Netcix cuts out the chill with an integrated personal',
  },
  {
    text: 'Tourism in Dubai boom tourist favorite place ',
  },
  {
    text: 'Beats did announce something, after all work',
  },
  {
    text: 'Easy teriyaki chicken broccoli',
  },
];

const span_slaide = document.querySelector('.left_side span');
const right_arrow = document.querySelector('.arrows .fa-right');
const left_arrow = document.querySelector('.arrows .fa-left');

let index = 0;
let set_int;
right_arrow.addEventListener('click', function () {
  index++;
  Slayd(index);
});
left_arrow.addEventListener('click', function () {
  index--;
  Slayd(index);
});

function Slayd(i) {
  if (i < 0) {
    i = text_array.length - 1;
  }
  if (i > text_array.length - 1) {
    i = 0;
  }
  index = i;
  span_slaide.innerHTML = text_array[index].text;
}

To_List();
function To_List() {
  set_int = setInterval(function () {
    index++;
    if (index < 0) {
      index = text_array.length - 1;
    }
    if (index > text_array.length - 1) {
      index = 0;
    }
    Slayd(index);
  }, 1000);
}

right_arrow.addEventListener('mouseover', function () {
  clearInterval(set_int);
});
right_arrow.addEventListener('mouseleave', function () {
  To_List();
});
left_arrow.addEventListener('mouseover', function () {
  clearInterval(set_int);
});
left_arrow.addEventListener('mouseleave', function () {
  To_List();
});

const li_s = document.querySelectorAll('.left_side_bottom ul li');
const a_link = document.querySelectorAll('.left_side_bottom ul li a');
const hamburger = document.querySelector('.hamburger ');
const hamburger_x = document.querySelector('.left_side_bottom i ');
const x = document.querySelector('.left_side_bottom');
hamburger.addEventListener('click', function () {
  document.body.classList.toggle('after_translate_burger_menu');
  li_s.forEach((b) => {
    b.classList.remove('active');
  });
  document.querySelector('.ust_body').classList.toggle('ust');
});

hamburger_x.addEventListener('click', function () {
  document.body.classList.toggle('after_translate_burger_menu');
  document.querySelector('.ust_body').classList.toggle('ust');
});

a_link.forEach((a) => {
  a.addEventListener('click', function () {
    li_s.forEach((b) => {
      b.classList.remove('active');
    });
    a.parentElement.classList.add('active');
  });
});

if (window.matchMedia('(max-width:995px)').matches) {
  a_link.forEach((a) => {
    a.addEventListener('click', function () {
      li_s.forEach((b) => {
        b.classList.remove('active');
      });
    });
  });
}

$('.main-body-left').slick({
  speed: 1000,
  easing: 'ease',
  infinite: true,
  initialSlide: 1,
});

const lists_five = document.querySelectorAll('.list_five ul li');
const five = document.querySelectorAll('.five');
const five_main = document.querySelectorAll('.five_main');

lists_five.forEach((a) => {
  a.addEventListener('click', function () {
    lists_five.forEach((b) => {
      b.classList.remove('li_active');
    });
    a.classList.add('li_active');
  });
});

$('.main_3_slaider').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  speed: 500,
  easing: 'ease',
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnFocus: true,
  pauseOnHover: true,
  draggable: false,
  touchMove: false,
  waitForAnimate: true,
  responsive: [
    {
      breakpoint: 670,
      settings: {
        vertical: true,
        verticalSwiping: false,
      },
    },
  ],
});

$('.four-main-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: true,
  arrows: false,
  speed: 500,
  easing: 'ease',
  autoplay: false,
  autoplaySpeed: 3000,
  pauseOnFocus: true,
  pauseOnHover: true,
  draggable: false,
  touchMove: false,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 670,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        vertical: true,
        verticalSwiping: false,
      },
    },
  ],
});

$('.video-slaider').slick({
  arrows: false,
  dots: false,
  adaptiveHeight: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 300,
  easing: 'linier',
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3500,
  pauseOnFocus: true,
  pauseOnHover: true,
  draggable: false,
  touchMove: false,
});

$('.vertical_slide').slick({
  arrows: false,
  dots: false,
  adaptiveHeight: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 800,
  easing: 'ease',
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1500,
  waitForAnimate: false,
  centerMode: false,
  variableWidth: false,
  vertical: true,
  verticalSwiping: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  draggable: false,
  touchMove: false,
});

$('.three-main-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
  speed: 500,
  easing: 'ease',
  autoplay: false,
  autoplaySpeed: 3000,
  pauseOnFocus: true,
  pauseOnHover: true,
  draggable: false,
  touchMove: false,
  responsive: [
    {
      breakpoint: 994,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        vertical: true,
        verticalSwiping: false,
      },
    },
  ],
});

let scrollTop = 0;

window.addEventListener('scroll', function () {
  scrollTop = window.scrollY;
  if (scrollTop >= 300) {
    document.querySelector('.bottom_news').classList.add('scrolled-nav');
    if (window.matchMedia('(max-width:1192px)').matches) {
      document
        .querySelector('.right_side_bottom > ul')
        .classList.add('row-list');
    }
    document.querySelector('.again-top-scroll').classList.add('dis_bl');
  } else if (scrollTop < 300) {
    document.querySelector('.bottom_news').classList.remove('scrolled-nav');
    document.querySelector('.again-top-scroll').classList.remove('dis_bl');
  }
  if (window.matchMedia('(max-width:515px)').matches) {
    document.querySelector('.bottom_news').classList.remove('scrolled-nav');
  }
  document
    .querySelector('.again-top-scroll')
    .addEventListener('click', function () {
      document.documentElement.scrollTop = 0;
    });
});

let massiv = [
  {
    img: 1,
    words: ` Netcix cuts out the chill with an integrated
    personal.`,
  },
  {
    img: 2,
    words: ` The clock is ticking for e-cig companies underage`,
  },
  {
    img: 3,
    words: ` They’re back! Kennedy Darling, LeCras named `,
  },
  {
    img: 4,
    words: ` The clock is ticking for e-cig companies underage`,
  },
  {
    img: 5,
    words: ` A wonderful serenity has taken possession of my`,
  },
  {
    img: 6,
    words: ` Netcix cuts out the chill with an integrated
    personal.`,
  },
  {
    img: 7,
    words: ` A wonderful serenity has taken possession of my`,
  },
  {
    img: 8,
    words: ` They’re back! Kennedy Darling, LeCras named `,
  },
  {
    img: 9,
    words: ` The clock is ticking for e-cig companies underage`,
  },
  {
    img: 10,
    words: ` Netcix cuts out the chill with an integrated
    personal.`,
  },
  {
    img: 11,
    words: ` The clock is ticking for e-cig companies underage`,
  },
  {
    img: 12,
    words: ` They’re back! Kennedy Darling, LeCras named `,
  },
];
const listi = document.querySelectorAll('.atl_div_mini>ul>li');
const alt_div_blok = document.querySelector('.alt_div_blok');
for (let i = 0; i < listi.length; i++) {
  listi[i].addEventListener('mouseover', function () {
    listi.forEach((a) => {
      a.classList.remove('li_active_2');
    });
    listi[i].classList.add('li_active_2');
    alt_div_blok.innerHTML = '';
    for (let j = i * 3; j < i * 3 + 3; j++) {
      alt_div_blok.innerHTML += `
      <div class="main-body-top-cont9">
      <div>
        <img src="img/tech${massiv[j].img}.jpg" alt="" />
      </div>
      <div class="text-pod-img9">
        <h1>
          ${massiv[j].words}
        </h1>
      </div>
      </div> 
      `;
    }
  });
}

let mass = [
  {
    img: 1,
    span: 'technology',
    words: ` Netcix cuts out the chill with an integrated
    personal.`,
  },
  {
    img: 2,
    span: 'music',

    words: ` The clock is ticking for e-cig companies underage`,
  },
  {
    img: 3,
    span: 'fashion',

    words: ` They’re back! Kennedy Darling, LeCras named `,
  },
  {
    img: 4,
    span: 'video',

    words: ` The clock is ticking for e-cig companies underage`,
  },
  {
    img: 5,
    span: 'sports',

    words: ` A wonderful serenity has taken possession of my`,
  },
  {
    img: 6,
    span: 'technology',

    words: ` Netcix cuts out the chill with an integrated
    personal.`,
  },
  {
    img: 7,
    span: 'music',

    words: ` A wonderful serenity has taken possession of my`,
  },
  {
    img: 8,
    span: 'video',

    words: ` They’re back! Kennedy Darling, LeCras named `,
  },
  {
    img: 9,
    span: 'sports',

    words: ` The clock is ticking for e-cig companies underage`,
  },
  {
    img: 10,
    span: 'music',

    words: ` Netcix cuts out the chill with an integrated
    personal.`,
  },
];
const fiv = document.querySelector('.five');
const list_five_ul = document.querySelectorAll('.list_five ul li');
const five_mass = document.querySelectorAll('.five_main');
for (let i = 0; i < list_five_ul.length; i++) {
  list_five_ul[i].addEventListener('click', function () {
    fiv.innerHTML = ``;
    for (let j = i * 5; j < i * 5 + 5; j++) {
      fiv.innerHTML += `
             <div class="five_main">
                <div class="five_main_left">
                  <div class="five_hov">
                    <img src="img/tech${mass[j].img}.jpg" alt="" />
                  </div>
                </div>
                <div class="five_main_right">
                  <h4>${mass[j].span}</h4>
                  <span>${mass[j].words}</span>
                </div>
              </div>
    `;
    }
  });
}
// Page 2 Form
const form = document.querySelector('form');
let ad = document.querySelector('#name');
let email = document.querySelector('#email');
let sbj = document.querySelector('#sbj');
let message = document.querySelector('#message');
let false_div = document.querySelector('.false');
let bool = true;

form.addEventListener('submit', function (e) {
  e.preventDefault();
  bool = true;
  false_div.innerHTML = '';
  Proverka();
  if (bool) {
    document.forms.Form.reset();
    false_div.style.backgroundColor = '#d4edda';
    false_div.innerHTML = `
    <h1>Message</h1>
    <p class='p_green'>Thank you for your email.</p>`;
  }
});

function Proverka() {
  if (ad.value.trim() === '') {
    false_div.style.backgroundColor = '#f8d7da';
    false_div.innerHTML += `<p> Invalid field:  Name </p>`;
    bool = false;
  }
  if (email.value.trim() === '') {
    false_div.style.backgroundColor = '#f8d7da';
    false_div.innerHTML += `<p> Invalid field:  Email </p>`;
    bool = false;
  } else if (isEmail(email.value.trim()) === 0) {
    false_div.style.backgroundColor = '#f8d7da';
    false_div.innerHTML += `<p> Invalid field:  Email </p>`;
    bool = false;
  }
  if (sbj.value.trim() === '') {
    false_div.style.backgroundColor = '#f8d7da';
    false_div.innerHTML += `<p> Invalid field:  Subject </p>`;
    bool = false;
  }
  if (message.value.trim() === '') {
    false_div.style.backgroundColor = '#f8d7da';
    false_div.innerHTML += `<p> Invalid field:  Message </p>`;
    bool = false;
  }
}
function isEmail(email) {
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 1;
  }
  return 0;
}
