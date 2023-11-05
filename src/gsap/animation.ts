import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';

export function smoothScroll() {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  const imageWrapper = gsap.utils.toArray('.image-wrapper');
  const images = gsap.utils.toArray<Element>('.image');
  const modal = document.querySelector('.modal');
  const modalButton = document.querySelector('.modal-button');
  let isOpen = false;

  const smoother = ScrollSmoother.create({
    smooth: 2,
    effects: true,
    smoothTouch: .1,
    onUpdate: (smoother) => {
      gsap.to(imageWrapper, {
        skewY: smoother.getVelocity() / 100
      })
    }
  });
  smoother.effects(images, {
    speed: 'auto',
  });

  modalButton?.addEventListener('click', () => {
    isOpen = !isOpen;
    gsap.to(modal, {
      autoAlpha: isOpen ? 1 : 0,
    });
    smoother.paused(isOpen);
  });
}
export function hoveredImage(targetImage: string, targetDescription: string) {
  gsap.registerPlugin(ScrollTrigger);
  const image = document.querySelector(targetImage)!;
  const description = document.querySelector(targetDescription)!;

  const hoveredImg = gsap.to(targetImage, {
    opacity: .5,
    duration: .5,
    ease: 'expo',
    paused: true
  });
  const hoverDescription = gsap.to(targetDescription, {
    zIndex: 10,
    opacity: 1,
    paused: true
  });
  image.addEventListener('mouseenter', () => {
    hoverDescription.play();
    hoveredImg.play();
  });
  image.addEventListener('mouseout', () => {
    hoverDescription.reverse();
    hoveredImg.reverse();
  });
  description.addEventListener('mouseenter', () => {
    hoveredImg.play();
    hoverDescription.play();
  })
}