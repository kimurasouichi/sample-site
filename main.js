import "./style.scss";
import { gsap } from "gsap";
// import { PopupManager } from "my-popup-lib";
// new PopupManager(5);
import "my-accordion-lib";
import "scroll-menu";
import $ from "jquery";
import "jquery-scrollify";
import "lightbox2";
import "lightbox2/dist/css/lightbox.min.css";

$.scrollify({
  section: ".animation-box, .hero", //1ページスクロールさせたいエリアクラス名

  interstitialSection: "header, footer",
  easing: "swing", // 他にもswing/linearやeaseOutExpoといったjQueryのeasing指定可能
  scrollSpeed: 500, // スクロール時の速度
});

import * as myTextAnimationLib from "my-scroll-animation-lib";
myTextAnimationLib.createTextLineAnimation(
  ".js-container-1",
  ".js-container-1"
);

myTextAnimationLib.createTextLineAnimation(
  ".js-container-2",
  ".js-container-2"
);
myTextAnimationLib.createTextLineAnimation(
  ".js-container-3",
  ".js-container-3"
);

gsap.set([".js-1 span"], {
  display: "inline-block",
});

gsap
  .timeline()
  .to("#global-container", {
    backgroundColor: "#1f1f1f",
    delay: 1,
  })
  .from(".js-1 span span", {
    filter: "blur(3px)",
    opacity: 0,
    scale: 2,
    ease: "power2.out",
    stagger: {
      amount: 0.5,
      from: "center",
    },
  });
