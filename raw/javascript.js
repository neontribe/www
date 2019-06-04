//  Todo: add arrow color and border color on focus/hover
var profilesEl = document.getElementById('profiles');
if (profilesEl && window.profiles) {
  profilesEl.innerHTML = window.profiles
    .map(function(profile) {
      return `
        <div class="fl pa2">
            <button type="button" class="flip-button" onclick="flip(this)">
                <span class="flip-container">
                    <span class="flipper">
                        <span class="front relative flex flex-column items-center">
                            <img class="tribe-image" src="${
                              profile.image
                            }" alt="" />
                            <span class="absolute bottom-1 flex justify-center right-0 top-0 w-100">
                                <span class="text-name absolute bottom--1 right-0 fw7" data-syncProps="borderTopColor">
                                ${profile.name}
                                <span class="arrowblack">&rarr;</span>
                                <br><span>
                                ${profile.skills
                                  .map(
                                    skill => `
                                      <span class="text-skills ">
                                            ${skill}
                                        </span>
                                    `
                                  )
                                  .join('|')}
                            </span>
                            </span>
                        </span>
                    </span>
                    <span class="back">
                        <h4>${profile.name}</h4>
                        <div class="mb2">
                                ${profile.skills
                                  .map(
                                    skill => `
                                      <span class="text-skills b-ns">
                                            ${skill}
                                        </span>
                                `
                                  )
                                  .join('|')}
                            </div>
                        <div class="smallparagraph">${profile.description}</div>
                    </span>
                </span>
            </button>
        </div>
        `;
    })
    .join('');
}

window.flip = el => {
  Array.from(document.getElementsByClassName('flip-button'))
    .filter(item => {
      return item !== el;
    })
    .forEach(item => {
      item.classList.remove('active');
    });
  el.classList.toggle('active');
};

Array.from(document.getElementsByClassName('slides')).forEach(el => {
  el.style.width = `calc(100% * ${el.childElementCount})`;
});

window.goTo = (carouselEl, index) => {
  const slidesEl = carouselEl.querySelector('.slides');
  const slideCount = slidesEl.childElementCount;
  slidesEl.setAttribute('data-active-index', index);
  slidesEl.style.transform = `translateX(calc((100% / -${slideCount}) * ${index}))`;
};

window.prev = carouselEl => {
  const slidesEl = carouselEl.querySelector('.slides');
  const slideCount = slidesEl.childElementCount;
  const slideIndex = parseInt(slidesEl.getAttribute('data-active-index'), 10);
  var nextSlideIndex = slideIndex - 1;
  if (nextSlideIndex < 0) {
    nextSlideIndex = slideCount - 1;
  }

  window.goTo(carouselEl, nextSlideIndex);
};

window.next = carouselEl => {
  const slidesEl = carouselEl.querySelector('.slides');
  const slideCount = slidesEl.childElementCount;
  const slideIndex = parseInt(slidesEl.getAttribute('data-active-index'), 10);
  var nextSlideIndex = slideIndex + 1;
  if (nextSlideIndex >= slideCount) {
    nextSlideIndex = 0;
  }

  window.goTo(carouselEl, nextSlideIndex);
};

var acc = document.getElementsByClassName('accordion');

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle('active');

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}

// howwework -------------------------------------------------------------------------------------------------------------------

window.toggleWorkEntry = function(el) {
  const entryEl = el.closest('.work-entry');
  const article = entryEl.querySelector('article');

  document.querySelectorAll('.work-entry').forEach(entry => {
    if (entryEl !== entry) {
      entry.querySelector('article').setAttribute('aria-hidden', 'true');
    } else {
      entry.querySelector('article').toggleAttribute('aria-hidden');
    }
  });
};

function getEntryTemplate(entry) {
  return `
        <div class="work-entry mb3">
            <div class="work-entry-${entry.title
              .split(' ')
              .join('-')
              .toLowerCase()} work-entry-bg-image pa3" onclick="toggleWorkEntry(this)" style="background-image: url('${
    entry.bannerimage
  }')">
                <h3 class="text mb2">${entry.title}</h3>
                <p class="text">${entry.description}</p>
                <button type="button" class="visually-hidden" onclick="toggleWorkEntry(this)">View problem and solution for ${
                  entry.title
                }</button>
            </div>
            <article class="pa3" aria-hidden>
                <div class="mb2 text">
                <img src="${entry.image}" class="fl mr3 mb2" alt="${
    entry.imagedescription
  }" />
                <h3 class="mb1">${entry.title}</h3>
                <a href="${
                  entry.destination
                }" class="pl3 pr3 text link-small">${
    entry.destination.split('://')[1]
  } <span class="arrowpink">&rarr;</span></a>
                    <p>Problem: ${entry.problem} </p>
                    <p>Solution: ${entry.solution}</p>
                </div>
            </article>
        </div>
    `;
}

if (document.getElementById('our-work') && window.entries) {
  document.getElementById('our-work').innerHTML = window.entries
    .filter(entry => entry.type !== 'talk')
    .map(getEntryTemplate)
    .join('');
}
if (document.getElementById('our-talks') && window.entries) {
  document.getElementById('our-talks').innerHTML = window.entries
    .filter(entry => entry.type === 'talk')
    .map(getEntryTemplate)
    .join('');
}
