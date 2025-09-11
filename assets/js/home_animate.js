/*global $, jQuery, alert*/
$(function () {
  $('.page__style').on('scroll', AOS.refreshHard);

  //   TweenMax.to('.overlay h4', 2, {
  //     opacity: 0,
  //     y: -60,
  //     ease: Expo.easeInOut,
  //   });

  //   TweenMax.to('.overlay p', 2, {
  //     delay: 0.3,
  //     opacity: 0,
  //     y: -60,
  //     ease: Expo.easeInOut,
  //   });

  //   TweenMax.to('.overlay', 2, {
  //     delay: 2,
  //     top: '-100%',
  //     ease: Expo.easeInOut,
  //   });

  //   TweenMax.from('.mylogo', 1, {
  //     delay: 5.5,
  //     opacity: 0,
  //     ease: Expo.easeInOut,
  //   });

  //   TweenMax.from('.menu-burger', 1, {
  //     delay: 6.5,
  //     opacity: 0,
  //     ease: Expo.easeInOut,
  //   });

  //   TweenMax.from('.privacy-policy-link', 1, {
  //     delay: 8.5,
  //     opacity: 0,
  //     ease: Expo.easeInOut,
  //   });

  //   TweenMax.staggerFrom(
  //     '.menu-social-links-container ul li',
  //     1,
  //     {
  //       delay: 7.5,
  //       opacity: 0,
  //       x: -100,
  //       ease: Expo.easeInOut,
  //     },
  //     0.08
  //   );

  //   TweenMax.from('.slideshow__slide', 1, {
  //     delay: 9.5,
  //     opacity: 0,
  //     ease: Expo.easeInOut,
  //   });

  //   TweenMax.from('.c-header-home_footer', 1, {
  //     delay: 10.5,
  //     opacity: 0,
  //     ease: Expo.easeInOut,
  //   });

  TweenMax.to('.overlay h4', 2, {
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut,
  });

  TweenMax.to('.overlay p', 2, {
    delay: 0.3,
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut,
  });

  TweenMax.to('.overlay', 2, {
    delay: 2,
    top: '-100%',
    ease: Expo.easeInOut,
  });

  TweenMax.from('.mylogo', 1, {
    delay: 3,
    opacity: 0,
    ease: Expo.easeInOut,
  });

  TweenMax.from('.menu-burger', 1, {
    delay: 3.4,
    opacity: 0,
    ease: Expo.easeInOut,
  });

  TweenMax.from('.privacy-policy-link', 1, {
    delay: 3.8,
    opacity: 0,
    ease: Expo.easeInOut,
  });

  TweenMax.staggerFrom(
    '.menu-social-links-container ul li',
    1,
    {
      delay: 3.2,
      opacity: 0,
      x: -100,
      ease: Expo.easeInOut,
    },
    0.08
  );

  TweenMax.from('.slideshow__slide', 1, {
    delay: 5,
    opacity: 0,
    ease: Expo.easeInOut,
  });

  TweenMax.from('.c-header-home_footer', 1, {
    delay: 5.4,
    opacity: 0,
    ease: Expo.easeInOut,
  });
});
