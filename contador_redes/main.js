const d = document;
const $counters = d.querySelectorAll(".counter"),
  speed = 100;

const counters = () => {
  $counters.forEach((counter) => {
    const updateCount = () => {
      const $target = +counter.getAttribute("data-target"),
        $count = +counter.innerText;
      const inc = $target / speed;

      if ($count < $target) {
        counter.innerHTML = $count + inc;
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = $target;
      }
    };
    updateCount();
  });
};

d.addEventListener("DOMContentLoaded", counters());
