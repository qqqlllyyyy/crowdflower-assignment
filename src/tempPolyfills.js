// This file is needed if you want to use 'enzyme' for testing
// Without warning msg
const raf = (global.requestAnimationFrame = cb => {
  setTimeout(cb, 0);
});

export default raf;
