import { scroller } from "react-scroll";

function doScroll(id) {
  scroller.scrollTo(id, {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart'
  });
}

export default doScroll;
