window.addEventListener("load", async () => {
  let main = document.querySelector(".main");
  let loader = document.querySelector(".loader");
  gsap.to((".loader p"),{
      opacity:0.5,
      duration:0.5,
      repeat:-1,
      yoyo:true
    });
  setTimeout(() => {
    loader.style.cssText ="transform:translateY(-100%);transition:1s all ease;";
    setTimeout(() => {
      loader.remove();
      main.style.cssText = "display:block;transition:1s all ease";
    }, 1000);
  }, 1500);
});

setTimeout(() => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
    lerp: 0.9,
  });
}, 2700);

setTimeout(() => {
  function animations() {
    var time = gsap.timeline();
    time
      .from(".nav", {
        y: "-10",
        opacity: 0,
        duration: 1.3,
        ease: Expo.easeInOut,
      })
      .to(".elem", {
        y: 0,
        ease: Expo.easeInOut,
        delay: -1,
        duration: 1,
        stagger: 0.2,
      });
  }
  const trailLength = 100;
  const trail = [];

  for (let i = 0; i < trailLength; i++) {
    const dot = document.createElement("div");
    dot.className = "trail-dot";
    document.body.appendChild(dot);
    trail.push({ el: dot, x: 0, y: 0 });
  }

  let mouseX = window.innerWidth / 16;
  let mouseY = window.innerHeight / 16;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    let x = mouseX;
    let y = mouseY;

    trail.forEach((dot, i) => {
      // const next = trail[i + 1] || trail[i];
      dot.x += (x - dot.x) * 0.9;
      dot.y += (y - dot.y) * 0.9;
      dot.el.style.left = `${dot.x}px`;
      dot.el.style.top = `${dot.y}px`;
      dot.el.style.opacity = 1 - i / trail.length;

      x = dot.x;
      y = dot.y;
    });

    requestAnimationFrame(animate);
  }

  animate();
  animations();

  let arr = document.querySelectorAll(".elements");
  arr.forEach((ele) => {
    var rotate = 0;
    var diffR = 0;

    ele.addEventListener("mouseleave", (event) => {
      gsap.to(ele.querySelector("img"), {
        opacity: 0,
      });
      gsap.to(ele.querySelector("h1"), {
        opacity: 1,
        x: 0,
      });
    });

    ele.addEventListener("mousemove", (event) => {
      var diff = event.clientY - ele.getBoundingClientRect().top - 100;
      diffR = event.clientX - rotate;
      rotate = event.clientX;
      gsap.to(ele.querySelector("img"), {
        opacity: 1,
        ease: Power1,
        top: diff,
        left: event.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffR),
      });
      gsap.to(ele.querySelector("h1"), {
        x: 100,
        opacity: 0.4,
      });
    });
  });

  const para = document.querySelector(".aboutText>p");
  console.log(para);

  para.innerHTML = para.innerText
    .split(" ")
    .map((word) => `<span class="word">${word}</span>`)
    .join(" ");

  document.querySelectorAll(".word").forEach((span) => {
    span.addEventListener("mouseenter", () => {
      span.style.cssText = "color:grey;opacity:0.8;transition:all 0.1s linear";
    });
    span.addEventListener("mouseleave", () => {
      span.style.color = "";
      span.style.fontWeight = "";
    });
  });
}, 2499);
