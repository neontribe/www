const colours = ['#54FCFD', '#9013FE', '#48E6B6', '#FB37F1', '#FDF958']

window.entries = []

window.entries.push({
  title: 'Mind of my Own',
  image: 'ourwork-momo.jpg',
  quote: `I give Mind Of My Own 5 stars because it makes me feel happier” - Krystal, young person`,
  description: `We work with Mind of My Own to help young people participate fully in their care and make it easier to speak up anytime they want. We’ve built apps that make this happen, 
    leading on many aspects of the process from early user research and UX design to product management and software development. From a small project funded by The Nominet Trust, 
    Mind Of My Own has grown into a sustainable business with suite of 4 tools used by children and young people and organisations across the UK and abroad. Our work is currently 
    focused on software development for improvements and additions and on supporting information security. We’re proud of our role in helping Mind Of My Own win awards, including best 
    Public Sector Product in ScotlandIS Digital Technology Awards 2018; A Children and Young People Now Award in 2017 and The Observer’s New Radicals Award for Social Innovation as well as the crucial ISO 270001 standard.`,
  problem: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,
  solution: `Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat`,
  destination: 'https://www.mindofmyown.org.uk',
})

window.entries.push({
  title: 'Alexander Rose',
  image: 'ourwork-arc.jpg',
  quote: `“My diet has got a lot better, my child’s diet has got a lot better and we’ve been doing a lot more home cooking since we’ve been using the vouchers” - Project Participant, Lambeth`,
  description: `Neontribe are helping Alexandra Rose Charity develop a series of digital tools so that they can scale up the number of areas, markets and families included in their award winning 
    fruit and veg project for families in or at risk of food poverty. We’ve been handling user research, design and software development to create a comprehensive system, one component at a time. 
    Individual elements have so far been funded by the Paul Hamlyn Foundation and Comic Relief via the Tech for Good programme; The Esmee Fairburn Foundation and the Alexandra Rose Charity’s own resources.`,
  problem: `dolore magna aliquyam erat, sed diam voluptua.`,
  solution: `Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat`,
  destination: 'https://www.alexandrarose.org.uk',
})

window.entries.push({
  title: 'seAp',
  image: 'ourwork-seap.jpg',
  quote: `“Thanks to everyone for all your hard work – it’s been great fun and I’ve learned loads from all of you. I am eternally grateful to Comic Relief and LEF for giving us 
    the opportunity to work with such an inspirational and expert team. I wish I had you all with me permanently!” - Liz Fenton, seAp`,
  description: `A national advocacy charity, seAp, approached us in 2014 to create a virtual advocate tool that would help people through the confusing and intimidating process 
    of applying for benefits. The problem that seAp needed to solve was that they had a limited number of volunteers who couldn’t support the growing number people needing their 
    advocacy services. With funding from Comic Relief and the Legal Education Foundation we built two virtual advocating tools: one to help support people through the process of 
    applying for Personal Independence Payment (PIP), and the other to help people prepare for Employment and Support Allowance (ESA). `,
  problem: `dolore magna aliquyam erat, sed diam voluptua.`,
  solution: `Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat`,
  destination: 'www.c-app.org.uk',
})

window.entries.push({
  title: 'The Haven',
  image: 'ourwork-haven.jpg',
  quote: `“That’s me, it took me 5 years to leave… I didn’t know I could get help” - Woman living in a refuge, during usability testing of “You Matter”`,
  description: `As part of the Comic Relief’s tech vs abuse initiative Neontribe and The Haven (Wolverhampton) worked with survivors to create a digital 
    tool which helps women realise they are in an abusive relationship and dispel their fears about taking action. We’ve led the user research, ux design and software 
    development and created a small collection of illustrated stories and bite size information that women from diverse ethnic backgrounds should be able to identify with. 
    We went into a live beta in 2018 and The Haven were thrilled to get their first call from someone who said “I wasn’t sure it was abuse, then I used your app, and now I’d like to speak to someone” the first day a Facebook advert promoted the tool.`,
  problem: `dolore magna aliquyam erat, sed diam voluptua.`,
  solution: `Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat`,
  destination: 'www.youmatterhaven.org.uk',
})

window.entries.push({
  title: 'Allegiant Air',
  image: 'ourwork-allegiant.jpg',
  quote: `“The work you did to make the site accessible without a blip in revenue was like landing a jumbo on an aircraft carrier. Amazing” - Scott Allard, CTO, Allegiant Air`,
  description: `We work with our colleagues at Lola Tech to build, maintain and update a responsive and reliable website for a major American airline, Allegiant Air. Currently, 
    Lola Tech and Neontribe are developing Allegiant's all-new stack that will replace the last version we built, which is now 7 years old. Our focus is on rebuilding the top two layers of the system, 
    including the flight, hotel and vehicle hire bookings and customer profile management interfaces. We’re excited to be using Next.js and GraphQL to improve performance and maintainability, 
    and we’re looking forward to building the next generation of customer-facing features once the new approach has bedded in. We are proud of our role in making Allegiant’s website compliant with the Americans with Disability Act before new federal regulations came into action in 2018.`,
  problem: `dolore magna aliquyam erat, sed diam voluptua.`,
  solution: `Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat`,
  destination: 'https://www.allegiantair.com',
})

const entriesEl = document.getElementById('entries')
if (entriesEl) {
  document.getElementById('entries').innerHTML = window.entries
    .map(
      (entry, index) => `
    <div class="w-100">
    <img class="fl mr3 mb2" src="./${
      entry.image
    }" alt="screenshot of mind of our own app" /> 
    <h3 class="text">${entry.title}</h3>
    <p class="fw7">${entry.quote}</p>
    <p>
        ${entry.description}
        <a
        href="${entry.destination}"
        class="nowrap link"
        onmouseover="this.firstElementChild.style.borderBottomColor = '${
          colours[index % colours.length]
        }'"
        onmouseout="this.firstElementChild.style.borderBottomColor = null"
        onfocus="this.firstElementChild.style.borderBottomColor = '${
          colours[index % colours.length]
        }'"
        onblur="this.firstElementChild.style.borderBottomColor = null"
        >
        <span class="our-work-entry-link" data-color="${
          colours[index % colours.length]
        }">
            ${
              entry.destination.indexOf('://') !== -1
                ? entry.destination.split('://')[1]
                : entry.destination
            }
        </span>
        <span style="color: ${colours[index % colours.length]};">&rarr;</span>
        </a>
    </p>
    <div class="cb">
        <div>
        <h4 class="our-work-entry-problem text fl ma0">Problem:</h3>
        <p>${entry.problem}</p>
        </div>
        <div>
        <h4 class="our-work-entry-solution text fl ma0">Solution:</h3>
        <p>${entry.solution}</p>
        </div>
    </div>
    </div>

`
    )
    .join('')
}
const focusable = document.querySelectorAll(
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
)

focusable.forEach((element, index) => {
  element.addEventListener('focus', event => {
    const color = colours[index % colours.length]
    event.target.style.borderColor = color
    event.target.style.boxShadow = `0 0 8px ${color}`
  })

  element.addEventListener('blur', event => {
    event.target.style.borderColor = null
    event.target.style.boxShadow = null
  })
})

const profiles = [
  {
    name: 'Bruce Wayne',
    image: './thetribe1.png',
    title: 'Back-end Developer',
    description:
      'At vero eos et accusam et justo duo dolores et ea rebumumy sed tempor et et invidunt justo labore Stet clita ea et gubergren. Rebumumy sed tempor. At vero eos et accusam et',
    skills: ['CSS', 'Javascript', 'Python'],
  },
  {
    name: 'Bruce Wayne',
    image: './thetribe1.png',
    title: 'Back-end Developer',
    description:
      'At vero eos et accusam et justo duo dolores et ea rebumumy sed tempor et et invidunt justo labore Stet clita ea et gubergren. Rebumumy sed tempor. At vero eos et accusam et',
    skills: ['Design', 'Typography', 'Layout'],
  },
  {
    name: 'Bruce Wayne',
    image: './thetribe1.png',
    title: 'Back-end Developer',
    description:
      'At vero eos et accusam et justo duo dolores et ea rebumumy sed tempor et et invidunt justo labore Stet clita ea et gubergren. Rebumumy sed tempor. At vero eos et accusam et',
    skills: ['CSS', 'Javascript', 'Python'],
  },
  {
    name: 'Bruce Wayne',
    image: './thetribe1.png',
    title: 'Back-end Developer',
    description:
      'At vero eos et accusam et justo duo dolores et ea rebumumy sed tempor et et invidunt justo labore Stet clita ea et gubergren. Rebumumy sed tempor. At vero eos et accusam et',
    skills: ['Design', 'Typography', 'Layout'],
  },
  {
    name: 'Bruce Wayne',
    image: './thetribe1.png',
    title: 'Back-end Developer',
    description:
      'At vero eos et accusam et justo duo dolores et ea rebumumy sed tempor et et invidunt justo labore Stet clita ea et gubergren. Rebumumy sed tempor. At vero eos et accusam et',
    skills: ['CSS', 'Javascript', 'Python'],
  },
  {
    name: 'Bruce Wayne',
    image: './thetribe1.png',
    title: 'Back-end Developer',
    description:
      'At vero eos et accusam et justo duo dolores et ea rebumumy sed tempor et et invidunt justo labore Stet clita ea et gubergren. Rebumumy sed tempor. At vero eos et accusam et',
    skills: ['Design', 'Typography', 'Layout'],
  },
  {
    name: 'Bruce Wayne',
    image: './thetribe1.png',
    title: 'Back-end Developer',
    description:
      'At vero eos et accusam et justo duo dolores et ea rebumumy sed tempor et et invidunt justo labore Stet clita ea et gubergren. Rebumumy sed tempor. At vero eos et accusam et',
    skills: ['CSS', 'Javascript', 'Python'],
  },
  {
    name: 'Bruce Wayne',
    image: './thetribe1.png',
    title: 'Back-end Developer',
    description:
      'At vero eos et accusam et justo duo dolores et ea rebumumy sed tempor et et invidunt justo labore Stet clita ea et gubergren. Rebumumy sed tempor. At vero eos et accusam et',
    skills: ['Design', 'Typography', 'Layout'],
  },
  {
    name: 'Bruce Wayne',
    image: './thetribe1.png',
    title: 'Back-end Developer',
    description:
      'At vero eos et accusam et justo duo dolores et ea rebumumy sed tempor et et invidunt justo labore Stet clita ea et gubergren. Rebumumy sed tempor. At vero eos et accusam et',
    skills: ['CSS', 'Javascript', 'Python'],
  },
  {
    name: 'Bruce Wayne',
    image: './thetribe1.png',
    title: 'Back-end Developer',
    description:
      'At vero eos et accusam et justo duo dolores et ea rebumumy sed tempor et et invidunt justo labore Stet clita ea et gubergren. Rebumumy sed tempor. At vero eos et accusam et',
    skills: ['Design', 'Typography', 'Layout'],
  },
  {
    name: 'Bruce Wayne',
    image: './thetribe1.png',
    title: 'Back-end Developer',
    description:
      'At vero eos et accusam et justo duo dolores et ea rebumumy sed tempor et et invidunt justo labore Stet clita ea et gubergren. Rebumumy sed tempor. At vero eos et accusam et',
    skills: ['CSS', 'Javascript', 'Python'],
  },
  {
    name: 'Bruce Wayne',
    image: './thetribe1.png',
    title: 'Back-end Developer',
    description:
      'At vero eos et accusam et justo duo dolores et ea rebumumy sed tempor et et invidunt justo labore Stet clita ea et gubergren. Rebumumy sed tempor. At vero eos et accusam et',
    skills: ['Design', 'Typography', 'Layout'],
  },
  {
    name: 'Bruce Wayne',
    image: './thetribe1.png',
    title: 'Back-end Developer',
    description:
      'At vero eos et accusam et justo duo dolores et ea rebumumy sed tempor et et invidunt justo labore Stet clita ea et gubergren. Rebumumy sed tempor. At vero eos et accusam et',
    skills: ['CSS', 'Javascript', 'Python'],
  },
  {
    name: 'Bruce Wayne',
    image: './thetribe1.png',
    title: 'Back-end Developer',
    description:
      'At vero eos et accusam et justo duo dolores et ea rebumumy sed tempor et et invidunt justo labore Stet clita ea et gubergren. Rebumumy sed tempor. At vero eos et accusam et',
    skills: ['Design', 'Typography', 'Layout'],
  },
  {
    name: 'Bruce Wayne',
    image: './thetribe1.png',
    title: 'Back-end Developer',
    description:
      'At vero eos et accusam et justo duo dolores et ea rebumumy sed tempor et et invidunt justo labore Stet clita ea et gubergren. Rebumumy sed tempor. At vero eos et accusam et',
    skills: ['CSS', 'Javascript', 'Python'],
  },
  {
    name: 'Bruce Wayne',
    image: './thetribe1.png',
    title: 'Back-end Developer',
    description:
      'At vero eos et accusam et justo duo dolores et ea rebumumy sed tempor et et invidunt justo labore Stet clita ea et gubergren. Rebumumy sed tempor. At vero eos et accusam et',
    skills: ['Design', 'Typography', 'Layout'],
  },
  {
    name: 'Bruce Wayne',
    image: './thetribe1.png',
    title: 'Back-end Developer',
    description:
      'At vero eos et accusam et justo duo dolores et ea rebumumy sed tempor et et invidunt justo labore Stet clita ea et gubergren. Rebumumy sed tempor. At vero eos et accusam et',
    skills: ['CSS', 'Javascript', 'Python'],
  },
  {
    name: 'Bruce Wayne',
    image: './thetribe1.png',
    title: 'Back-end Developer',
    description:
      'At vero eos et accusam et justo duo dolores et ea rebumumy sed tempor et et invidunt justo labore Stet clita ea et gubergren. Rebumumy sed tempor. At vero eos et accusam et',
    skills: ['Design', 'Typography', 'Layout'],
  },
]

//  Todo: add arrow color and border color on focus/hover
const profilesEl = document.getElementById('profiles')
if (profilesEl) {
  profilesEl.innerHTML = profiles
    .map(
      (profile, index) => `

    <div class="fl pa2">
        <button type="button" class="flip-button" onclick="flip(this)">
            <span class="flip-container">
                <span class="flipper">
                    <span class="front relative flex flex-column items-center">
                        <img class="tribe-image" src="${
                          profile.image
                        }" alt="" />
                        <span class="absolute bottom-1 flex justify-center right-0 top-0 w-100">
                            <span class="text-name absolute bottom--1 right-0 fw7">
                            ${profile.name}
                            <span class="arrowpink">&rarr;</span>
                        </span>
                        <span class="absolute left-0 top-1 tl">
                            ${profile.skills
                              .map(
                                skill => `
                                <div>
                                    <span class="text-name fw4 f6 mb2 tl">
                                        ${skill} 
                                    </span>
                                </div>
                            `
                              )
                              .join('')}
                        </span>
                    </span>
                </span>
                <span class="back">
                    <h4>${profile.name}</h4>
                    <div class="i f6 mb2">${profile.skills}</div>
                    <div class="smallparagraph">${profile.description}</div>
                </span>
            </span>
        </button>
    </div>
`
    )
    .join('')
}

window.flip = el => {
  Array.from(document.getElementsByClassName('flip-button'))
    .filter(item => {
      return item !== el
    })
    .forEach(item => {
      item.classList.remove('active')
    })
  el.classList.toggle('active')
}

Array.from(document.getElementsByClassName('slides')).forEach(el => {
  el.style.width = `calc(100% * ${el.childElementCount})`
})

window.goTo = (carouselEl, index) => {
  const slidesEl = carouselEl.querySelector('.slides')
  const slideCount = slidesEl.childElementCount
  slidesEl.setAttribute('data-active-index', index)
  slidesEl.style.transform = `translateX(calc((100% / -${slideCount}) * ${index}))`
}

window.prev = carouselEl => {
  const slidesEl = carouselEl.querySelector('.slides')
  const slideCount = slidesEl.childElementCount
  const slideIndex = parseInt(slidesEl.getAttribute('data-active-index'), 10)
  var nextSlideIndex = slideIndex - 1
  if (nextSlideIndex < 0) {
    nextSlideIndex = slideCount - 1
  }

  window.goTo(carouselEl, nextSlideIndex)
}

window.next = carouselEl => {
  const slidesEl = carouselEl.querySelector('.slides')
  const slideCount = slidesEl.childElementCount
  const slideIndex = parseInt(slidesEl.getAttribute('data-active-index'), 10)
  var nextSlideIndex = slideIndex + 1
  if (nextSlideIndex >= slideCount) {
    nextSlideIndex = 0
  }

  window.goTo(carouselEl, nextSlideIndex)
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
