// Ambient "data network" background — subtle nodes + connecting lines,
// themed for an information-systems / data profile.
(function () {
  const canvas = document.getElementById("bg-network");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let w, h, nodes;
  const NODE_COUNT_DENSITY = 14000; // px^2 per node
  const LINK_DIST = 130;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    const count = Math.max(18, Math.min(70, Math.floor((w * h) / NODE_COUNT_DENSITY)));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
    }));
  }

  function step() {
    ctx.clearRect(0, 0, w, h);

    for (const n of nodes) {
      if (!prefersReducedMotion) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }
    }

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINK_DIST) {
          ctx.strokeStyle = `rgba(46, 111, 142, ${0.16 * (1 - dist / LINK_DIST)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    for (const n of nodes) {
      ctx.beginPath();
      ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(79, 179, 169, 0.55)";
      ctx.fill();
    }

    requestAnimationFrame(step);
  }

  window.addEventListener("resize", resize);
  resize();
  step();
})();
