/**
 * Draws an SVG path animation using GSAP library.
 */
const drawSvg = () => {
  const path = document.querySelector('#path')
  if (!path) return

  const length = path.getTotalLength()

  path.style.strokeDasharray = length
  path.style.strokeDashoffset = length

  gsap.to(path, {
    strokeDashoffset: 0,
    duration: 3,
    ease: 'power1.inOut',
    repeat: 1,
  })
}
drawSvg()

gsap.registerPlugin(ScrollTrigger)

/** Dịch chuyển mask-trasn theo trục ox  */
ScrollTrigger.create({
  trigger: '#introduce',
  start: 'bottom-=50px bottom',
  end: 'bottom bottom',
  scrub: true,
  // markers: true,
  onEnter: () => gsap.to('#mask-trasn', { x: '30%', duration: 1 }),
  onLeaveBack: () => gsap.to('#mask-trasn', { x: '-100%', duration: 1 }),
})

/** Dịch chuyển mask-trasn theo trục ox sang trái và đổi bg-img khi đén about  */
ScrollTrigger.create({
  trigger: '#about',
  start: 'top top',
  end: 'top+=100vh top',
  scrub: true,
  // markers: true,
  onEnter: () => {
    gsap.to('#mask-trasn', { x: '-100%', duration: 1 })
    document.querySelector('#bg-image').style.backgroundImage =
      "url('https://wpc-patterns.jp/wp-content/themes/wpc-patterns/assets/images/page/about_bg01_pc.webp')"
  },
  onLeaveBack: () => {
    gsap.to('#mask-trasn', { x: '30%', duration: 1 }) // Di chuyển phần tử về 30%
    document.querySelector('#bg-image').style.backgroundImage =
      "https://wpc-patterns.jp/wp-content/themes/wpc-patterns/assets/images/page/top_concept_bg02_pc.webp')"
  },
})

/** Dịch chuyển mask-trasn theo trục ox sang phải  cách bottom 200px của about  */
ScrollTrigger.create({
  trigger: '#about',
  start: 'bottom+=200px bottom',
  end: 'bottom+=200px bottom',
  // markers: true,
  scrub: true,
  onEnter: () => gsap.to('#mask-trasn', { x: '30%', duration: 1 }),
  onLeaveBack: () => gsap.to('#mask-trasn', { x: '-100%', duration: 1 }),
})

ScrollTrigger.create({
  trigger: '#about',
  start: 'top center', // Bắt đầu khi phần tử #about chạm đến giữa viewport
  end: 'bottom center', // Kết thúc khi phần tử #about rời khỏi giữa viewport
  // markers: true,
  scrub: true,
  onEnter: () => {
    document.querySelector('#bg-image').style.backgroundImage =
      "url('https://wpc-patterns.jp/wp-content/themes/wpc-patterns/assets/images/page/about_bg01_pc.webp')"
  },
  onLeaveBack: () => {
    document.querySelector('#bg-image').style.backgroundImage =
      "url('https://wpc-patterns.jp/wp-content/themes/wpc-patterns/assets/images/page/top_concept_bg02_pc.webp')"
  },
})

/** Cuộng ngang các panel của section news */

const panels = gsap.utils.toArray('#news .panel')
const panelsContainer = document.querySelector('#news')

gsap.to(panels, {
  xPercent: -100 * (panels.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '#news',
    pin: true,
    // markers: true,
    start: 'top 100px',
    scrub: 1,
    snap: {
      snapTo: 1 / (panels.length - 1),
      inertia: true,
      duration: { min: 0.3, max: 0.3 },
    },
    end: () => `+=${panelsContainer.scrollWidth - window.innerWidth}`,
  },
})

/** Hiệu ứng lên xuống 40px của các thẻ */

gsap.fromTo(
  panels,
  { y: 0 },
  {
    y: (index) => (index % 2 === 0 ? -40 : 40),
    ease: 'power1.out',
    stagger: 0.2,
    scrollTrigger: {
      trigger: '#news',
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      toggleActions: 'play none none reverse',
    },
  },
)

/** Hiệu ứng hiện chữ dần dần từ dưới lên trên cho tất cả các class section-heading */

document.querySelectorAll('.section-heading').forEach((heading) => {
  gsap.fromTo(
    heading,
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: 'power2.out',
      delay: 0.5,
      scrollTrigger: {
        trigger: heading,
        start: 'top 85%',
        end: 'top 60%',
        scrub: 1,
      },
    },
  )
})

/** Tạo hiệu ứng cho các phần tử có class .card-wrapper */

gsap.fromTo(
  '.card-wrapper',
  {
    opacity: 0,
    y: 100,
  },
  {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: 'power2.out',
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.card-wrapper',
      start: 'top 85%',
      end: 'top 60%',
      scrub: 1,
    },
  },
)
/** Hiệu ứng hiện từng  chữ  từ dưới lên trên cho tất cả các class main-heading */
document.querySelectorAll('.main-heading').forEach((heading) => {
  let splitHeading = new SplitText(heading, { type: 'chars' })
  gsap.fromTo(
    splitHeading.chars,
    {
      y: 200,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: 'power2.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: heading,
        start: 'top 85%',
        end: 'top 60%',
        scrub: 1,
        toggleActions: 'restart pause resume reset',
      },
    },
  )
})

/** Hiệu ứng hiện logo  */

gsap.to('#logo', {
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: '#logo',
    start: 'top top',
    end: 'bottom top ',
    scrub: true,
    onEnter: () => gsap.to('#logo', { opacity: 1, duration: 1 }),
    onLeaveBack: () => gsap.to('#logo', { opacity: 0, duration: 1 }),
  },
})

/** Chuyển đổi từ section menu sang introduce khi cuộn được 10px */

ScrollTrigger.create({
  trigger: '#menu',
  start: 'top top',
  end: '+=10',
  // markers: true,

  onEnter: () => {
    gsap.to('#menu', { opacity: 0, duration: 0 })
    gsap.to('#introduce', { opacity: 1 })
    gsap.to('#mask-big', { x: 0, duration: 1 })
    gsap.to('.menu-content', { opacity: 0, duration: 0 })
  },

  onLeaveBack: () => {
    gsap.to('#menu', { opacity: 1, duration: 0 })
    gsap.to('#introduce', { opacity: 0 })
    gsap.to('#mask-big', { x: '-100%', duration: 1 })
    gsap.to('.menu-content', { opacity: 1, duration: 0 })
  },
})

// Thiết lập trạng thái ban đầu
gsap.set('#introduce', { opacity: 0 })

gsap.to('.quarter-circle', {
  top: '-100%',
  right: '-100%',
  duration: 1,
  scrollTrigger: {
    trigger: 'quarter-circle',
    start: 'top top',
    end: '+=50px',
    scrub: 1,
  },
})

const sections = gsap.utils.toArray('#paren .section-heading')

sections.forEach((section, index) => {
  if (index === 0) {
    ScrollTrigger.create({
      trigger: section,
      start: 'top 30%',
      end: 'top 30%',
      toggleActions: 'play none none reverse',
      // markers: true,
      onEnter: () => {
        gsap.to(section, { opacity: 0, duration: 0.05 }),
          (document.querySelector('#bg-image').style.backgroundImage =
            "url('https://wpc-patterns.jp/wp-content/themes/wpc-patterns/assets/images/page/top_concept_bg02_pc.webp')")
      },

      onLeaveBack: () => {
        gsap.to(section, { opacity: 1, duration: 0.05 })
        document.querySelector('#bg-image').style.backgroundImage =
          "url('https://wpc-patterns.jp/wp-content/themes/wpc-patterns/assets/images/page/top_concept_bg01_pc.webp')"
      },
    })
  }
})
// dich chuyen mask-big-ngang paren
ScrollTrigger.create({
  trigger: '#paren',
  start: 'top 100px',
  end: 'top 100px',
  // markers: true,
  onUpdate: (self) => {
    const scrollY = self.scroll()
    const triggerEnd = self.end

    if (scrollY >= triggerEnd) {
      gsap.to('#mask-big-ngang', { y: -50, duration: 1 })
    } else {
      gsap.to('#mask-big-ngang', { y: 180 })
    }
  },
})
// dich chuyen mask-big-ngang trở về lại chỗ cũ
ScrollTrigger.create({
  trigger: '#items',
  start: 'bottom bottom',
  end: 'bottom top',
  // markers: true,
  onUpdate: (self) => {
    const scrollY = self.scroll()
    const triggerEnd = self.end

    if (scrollY >= triggerEnd) {
      gsap.to('#mask-big-ngang', { y: 180, duration: 1 })
    } else {
      gsap.to('#mask-big-ngang', { y: -50 })
    }
  },
})

const aboutContent = gsap.utils.toArray('#about p')

aboutContent.forEach((section, index) => {
  if (index === 0 || index === 1) {
    ScrollTrigger.create({
      trigger: section,
      start: 'top 35%',
      end: 'top 35%',
      toggleActions: 'play none none reverse',
      // markers: true,
      onEnter: () => {
        gsap.to(section, { opacity: 0, duration: 0.05 })
      },
      onLeaveBack: () => {
        gsap.to(section, { opacity: 1, duration: 0.05 })
      },
    })
  }
})

ScrollTrigger.create({
  trigger: '#paren',
  start: 'top 50%',
  end: 'top 50%',
  // markers: true,
  onUpdate: (self) => {
    const scrollY = self.scroll()
    const triggerEnd = self.end

    if (scrollY >= triggerEnd) {
      gsap.to('#mask-big-ngang', { y: -50, duration: 1 })
    } else {
      gsap.to('#mask-big-ngang', { y: 180 })
    }
  },
})

ScrollTrigger.create({
  trigger: '#about-heading',
  start: 'top 0px',
  end: 'bottom 150px',
  // markers: true,
  onUpdate: (self) => {
    // Kiểm tra vị trí cuộn và điều chỉnh phần tử hiện tại
    const scrollY = self.scroll()
    const triggerEnd = self.end

    if (scrollY >= triggerEnd) {
      gsap.to('#mask-big-ngang', { y: -50, duration: 1 })
    } else {
      gsap.to('#mask-big-ngang', { y: 180 })
    }
  },
})

ScrollTrigger.create({
  trigger: '#instagram',
  start: 'top bottom',
  end: 'bottom-=50vh bottom',
  // markers: true,
  onUpdate: (self) => {
    const scrollY = self.scroll()
    const triggerEnd = self.end

    let yOffset
    if (window.matchMedia('(min-width: 1536px)').matches) {
      // 2xl
      yOffset = '65%'
    } else if (window.matchMedia('(min-width: 1280px)').matches) {
      // xl
      yOffset = '55%'
    } else if (window.matchMedia('(min-width: 1024px)').matches) {
      // lg
      yOffset = '50%'
    } else if (window.matchMedia('(min-width: 768px)').matches) {
      // md
      yOffset = '40%'
    } else {
      // xs
      yOffset = '30%'
    }

    if (scrollY >= triggerEnd) {
      gsap.to('#mask-trang-ngang', { y: yOffset, duration: 1 })
    } else {
      gsap.to('#mask-trang-ngang', { y: '100%' })
    }
  },
})

document.querySelectorAll('.card-wrapper').forEach((card) => {
  card.addEventListener('mouseenter', () => {
    gsap.fromTo(
      '.hover-text',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
    )
  })

  card.addEventListener('mouseleave', () => {
    gsap.to('.hover-text', {
      y: 30,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.in',
    })
  })
})

// Hiệu ứng của subMenu
const subMenu = document.querySelector('#sub-menu')
const menuIcon = document.querySelector('#menu-icon')
const menuIconImg = document.querySelector('#menu-icon-img')
const menuWrapper = document.querySelector('.menu-wrapper')
const quarterCircle = document.querySelector('.quarter-circle')
const subMenuContent = document.querySelector('.sub-menu-content')

let isSubMenuVisible = false

function toggleSubMenu() {
  if (isSubMenuVisible) {
    gsap.to(subMenu, {
      x: '100%',
      y: '-100%',
      borderRadius: '50%',
      backgroundColor: '#f5f1e9',
      duration: 1,
      ease: 'power2.out',
      onComplete: () => {
        subMenu.classList.add('hidden')
      },
    })
    gsap.to(menuIcon, {
      backgroundColor: 'rgb(220 38 38)',
      duration: 1,
      ease: 'power2.out',
    })
    gsap.to(menuIconImg, {
      duration: 0,
      ease: 'power2.out',
      onComplete: () => {
        menuIconImg.src = 'assets/images/menu.svg'
      },
    })
    gsap.to(menuWrapper, {
      zIndex: 1002,
      duration: 0,
    })
    gsap.to(quarterCircle, {
      zIndex: 1001,
      duration: 0,
    })
    document.body.classList.remove('no-scroll')
    subMenuContent.classList.remove('block')
    subMenuContent.classList.add('hidden')
  } else {
    subMenu.classList.remove('hidden')
    document.body.classList.add('no-scroll')
    gsap.to(subMenu, {
      backgroundColor: 'rgb(220 38 38)',
      x: '0%',
      y: '0%',
      borderRadius: '0%',
      duration: 0.4,
      ease: 'power2.out',
    })
    gsap.to(menuIcon, {
      backgroundColor: '#f5f1e9',
      duration: 0.4,
      ease: 'power2.out',
    })
    gsap.to(menuIconImg, {
      duration: 0,
      ease: 'power2.out',
      onComplete: () => {
        menuIconImg.src = 'assets/images/x.svg'
      },
    })
    gsap.to(menuWrapper, {
      zIndex: 10002,
      duration: 0,
    })
    gsap.to(quarterCircle, {
      zIndex: 9,
      duration: 0,
    })
    gsap.to(subMenuContent, {
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      delay: 0.5,
      onStart: () => {
        subMenuContent.classList.remove('hidden')
        subMenuContent.classList.add('block')
      },
    })
  }

  isSubMenuVisible = !isSubMenuVisible
}

document.querySelector('#menu-icon').addEventListener('click', toggleSubMenu)
