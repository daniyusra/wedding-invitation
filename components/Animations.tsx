import {keyframes } from "@chakra-ui/react";

const slideToTopFull = keyframes`
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
  from {
    transform: translateY(0);
    opacity: 1;
  }
`;


const slideToBottomFull = keyframes`
  to {
    transform: translateY(100%);
    opacity: 0;
  }
  from {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideToRightFull = keyframes`
  to {
    transform: translateX(100%);
    opacity: 0;
  }
  from {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  to {
    opacity: 0;
  }
  from {
    opacity: 1;
  }
`;

const slideToTopFullAnimation = `${slideToTopFull} 1s ease forwards`;
const slideToBottomFullAnimation = `${slideToBottomFull} 1s ease forwards`;
const slideToRightFullAnimation = `${slideToRightFull} 1s ease forwards`;
const fadeOutAnimation = `${fadeOut} 300ms linear forwards`;
const slideFromTopFullAnimation = `${slideToTopFull} 1s ease backwards`;
const slideFromBottomFullAnimation = `${slideToBottomFull} 1s ease backwards`;
const fadeInAnimation = `${fadeOut} 300ms linear backwards`;

export {slideToBottomFullAnimation, slideToTopFullAnimation, slideToRightFullAnimation, fadeOutAnimation, slideFromBottomFullAnimation, slideFromTopFullAnimation, fadeInAnimation};
