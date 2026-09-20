/* ============================================================
   ZENITH PORTFOLIO — JavaScript v3
   Pixel-perfect rebuild inspired by careers.kimi.ai
   White playing-card orbital ring + fan carousel
   ============================================================ */
'use strict';

// ══════════════════════════════════════════════════════════════
// PROJECT DATA — Real + Dummy projects
// ══════════════════════════════════════════════════════════════
const PROJECTS = [
  // ── Full Stack (Live Platforms + Commercial) ──────────────
  {
    id: 'ddelice',
    name: "D'Delice Restaurant",
    cat: 'fullstack',
    catLabel: 'Full Stack',
    desc: "Luxury gastronomy web platform featuring immersive visual storytelling, interactive tasting menu, reservation engine, and fluid micro-animations. Built with Next.js and deployed on Vercel.",
    quote: 'Love at first bite — and first click.',
    stack: ['Next.js', 'React', 'TailwindCSS', 'Framer Motion', 'Vercel'],
    url: 'https://ddelice-love-at-first-bite.vercel.app',
    image: 'images/project-ddelice.jpg',
    author: 'ZENITH Team'
  },
  {
    id: 'newlife',
    name: 'NewLife Medz Platform',
    cat: 'fullstack',
    catLabel: 'Full Stack',
    desc: 'Full-scale telehealth and pharmaceutical e-commerce platform with encrypted prescription uploads, real-time pharmacy inventory dispatch, doctor consults, and secure payment processing.',
    quote: 'Healthcare infrastructure engineered for the next billion users.',
    stack: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    url: 'https://www.newlifemedz.com/',
    image: 'images/project-newlifemedz.jpg',
    author: 'ZENITH Team'
  },
  {
    id: 'mantronix',
    name: 'Mantronix Solutions',
    cat: 'fullstack',
    catLabel: 'Full Stack',
    desc: 'Corporate IT & enterprise digital transformation portal with interactive service matrix, client case study showcase, lead funnels, and enterprise cloud architecture.',
    quote: "Enterprise-grade digital foundations built for tomorrow's scale.",
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL', 'AWS'],
    url: 'https://www.mantronixsolutions.com/',
    image: 'images/project-mantronix.jpg',
    author: 'ZENITH Team'
  },
  {
    id: 'bizpro',
    name: 'BizPro Commercial Suite',
    cat: 'fullstack',
    catLabel: 'Full Stack',
    desc: 'Comprehensive multi-tenant business suite featuring automated invoicing, sales pipeline CRM, team payroll, role-based access control, and real-time revenue analytics dashboard.',
    quote: 'Running enterprise operations with programmatic precision.',
    stack: ['React', 'FastAPI', 'PostgreSQL', 'Docker', 'Redis'],
    url: '#',
    image: 'images/project-tokenforge.jpg',
    author: 'Avinash Lodhi'
  },

  // ── E-Commerce ─────────────────────────────────────────────
  {
    id: 'shopnova',
    name: 'ShopNova E-Commerce',
    cat: 'ecommerce',
    catLabel: 'E-Commerce',
    desc: 'High-throughput e-commerce platform with instant search, multi-currency checkout via Stripe, inventory synchronization, review moderation, and AI product recommender.',
    quote: 'Frictionless shopping designed for high conversion.',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
    url: '#',
    image: 'images/project-shopnova.jpg',
    author: 'Lavi Singh'
  },
  {
    id: 'luxestore',
    name: 'LuxeStore Fashion',
    cat: 'ecommerce',
    catLabel: 'E-Commerce',
    desc: 'Haute couture fashion storefront with high-resolution runway lookbooks, interactive AR virtual fitting room, size advisor AI, and white-glove concierge checkout.',
    quote: 'Fashion is code. Style is the output.',
    stack: ['React', 'Three.js', 'FastAPI', 'MongoDB', 'Cloudinary'],
    url: '#',
    image: 'images/project-luxestore.jpg',
    author: 'ZENITH Team'
  },
  {
    id: 'freshmart',
    name: 'FreshMart Grocery',
    cat: 'ecommerce',
    catLabel: 'E-Commerce',
    desc: 'Hyperlocal grocery and farm-to-table delivery portal with real-time driver telemetry, dynamic delivery slot booking, fresh inventory alerts, and recurring subscriptions.',
    quote: 'Farm freshness delivered to doorsteps in under 30 minutes.',
    stack: ['React', 'Node.js', 'Redis', 'WebSockets', 'Stripe'],
    url: '#',
    image: 'images/project-agrisense.jpg',
    author: 'ZENITH Team'
  },

  // ── AI / ML (Arijit Sharma Core Experience) ────────────────
  {
    id: 'rag',
    name: 'Enterprise RAG System',
    cat: 'aiml',
    catLabel: 'AI / ML',
    desc: 'End-to-end Retrieval-Augmented Generation pipeline utilizing vector embeddings, hybrid dense-sparse retrieval, reranking, and citation-backed LLM responses over private data.',
    quote: 'Every query is a step closer to deterministic understanding.',
    stack: ['Python', 'LangChain', 'FAISS', 'FastAPI', 'Qdrant'],
    url: '#',
    image: 'images/project-neuralvision.jpg',
    author: 'Arijit Sharma'
  },
  {
    id: 'conv',
    name: 'Conversational AI Agent',
    cat: 'aiml',
    catLabel: 'AI / ML',
    desc: 'Production GenAI assistant with multi-turn memory buffers, dynamic API tool execution, prompt orchestration, and fine-tuned domain reasoning deployed at enterprise scale.',
    quote: 'Intelligence is not stored — it is summoned on demand.',
    stack: ['PyTorch', 'Transformers', 'FastAPI', 'Docker', 'React'],
    url: '#',
    image: 'images/project-smartassist.jpg',
    author: 'Arijit Sharma'
  },
  {
    id: 'multimodal',
    name: 'Multimodal Reasoning Engine',
    cat: 'aiml',
    catLabel: 'AI / ML',
    desc: 'Vision-Language pipeline synthesizing document layout parsing, diagram comprehension, and visual reasoning into structured JSON representations for mission-critical workflows.',
    quote: 'The model sees what you see, and understands what you mean.',
    stack: ['Python', 'CLIP', 'GPT-4V', 'TorchVision', 'FastAPI'],
    url: '#',
    image: 'images/project-predictflow.jpg',
    author: 'Arijit Sharma'
  },

  // ── Computer Vision ────────────────────────────────────────
  {
    id: 'slam',
    name: 'LiDAR-SLAM Mapper',
    cat: 'cv',
    catLabel: 'Computer Vision',
    desc: 'Real-time 3D spatial mapping and 6-DOF odometry using LiDAR point clouds with ROS2. Graph-based SLAM enabling autonomous robotic navigation in GPS-denied environments.',
    quote: 'Every point cloud is a rich geometric story of physical space.',
    stack: ['C++', 'ROS2', 'OpenCV', 'PCL', 'CUDA'],
    url: '#',
    image: 'images/project-lidarslam.jpg',
    author: 'Arijit Sharma'
  },
  {
    id: 'yolo',
    name: 'Multimodal Object Detection',
    cat: 'cv',
    catLabel: 'Computer Vision',
    desc: 'Low-latency multimodal detection combining RGB streams with depth sensors. Custom-trained YOLO architecture with TensorRT/CUDA acceleration achieving 120+ FPS on edge hardware.',
    quote: 'Teaching machines to perceive before they compute.',
    stack: ['Python', 'YOLOv8', 'TensorRT', 'CUDA', 'OpenCV'],
    url: '#',
    image: 'images/hero-ai-core.jpg',
    author: 'ZENITH Team'
  },
  {
    id: 'segmentation',
    name: 'Semantic Segmentation Suite',
    cat: 'cv',
    catLabel: 'Computer Vision',
    desc: 'Pixel-accurate scene parsing for autonomous navigation and medical imaging. DeepLabV3+ with custom backbone architectures and edge quantization via TFLite.',
    quote: 'Dissecting the world with pixel-level mathematical rigor.',
    stack: ['Python', 'PyTorch', 'OpenCV', 'TFLite', 'ONNX'],
    url: '#',
    image: 'images/project-medibot.jpg',
    author: 'ZENITH Team'
  },

  // ── IoT ────────────────────────────────────────────────────
  {
    id: 'edge',
    name: 'Edge AI Telemetry Platform',
    cat: 'iot',
    catLabel: 'IoT',
    desc: 'Embedded neural network inferencing on ultra-low-power microcontrollers. Real-time vibration & acoustic anomaly detection with MQTT telemetry pipelines.',
    quote: 'Intelligence running at the outermost edges of perception.',
    stack: ['Embedded C', 'TinyML', 'MQTT', 'Python', 'InfluxDB'],
    url: '#',
    image: 'images/about-lab.jpg',
    author: 'ZENITH Team'
  },
  {
    id: 'smartfarm',
    name: 'SmartFarm Agritech Monitor',
    cat: 'iot',
    catLabel: 'IoT',
    desc: 'Decentralized agricultural sensor mesh monitoring soil moisture, microclimates, and solar irradiance with automated valve regulation and crop health telemetry.',
    quote: 'Empowering sustainable agriculture through continuous sensor telemetry.',
    stack: ['ESP32', 'Python', 'LoRaWAN', 'Grafana', 'FastAPI'],
    url: '#',
    image: 'images/project-agrisense.jpg',
    author: 'Avinash Lodhi'
  }
];

let currentCategory = 'all';
let carouselProjectList = [];
let carouselIndex = 0;

// ══════════════════════════════════════════════════════════════
// CUSTOM CURSOR
// ══════════════════════════════════════════════════════════════
function initCursor() {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mx=-100, my=-100, rx=-100, ry=-100;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx+'px'; dot.style.top = my+'px';
  });
  (function loop() {
    rx += (mx-rx)*0.14; ry += (my-ry)*0.14;
    ring.style.left = rx+'px'; ring.style.top = ry+'px';
    requestAnimationFrame(loop);
  })();
  document.querySelectorAll('a,button,.skill-card,.team-card,.orbit-card,.proj-card-3d').forEach(el => {
    el.addEventListener('mouseenter', () => {
      dot.style.transform = 'translate(-50%,-50%) scale(2.2)';
      ring.style.width = '40px'; ring.style.height = '40px';
      ring.style.borderColor = 'rgba(255,255,255,0.9)';
    });
    el.addEventListener('mouseleave', () => {
      dot.style.transform = 'translate(-50%,-50%) scale(1)';
      ring.style.width = '28px'; ring.style.height = '28px';
      ring.style.borderColor = 'rgba(255,255,255,0.6)';
    });
  });
}

// ══════════════════════════════════════════════════════════════
// NAVIGATION
// ══════════════════════════════════════════════════════════════
function initNav() {
  const nav  = document.getElementById('nav');
  const btn  = document.getElementById('nav-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
      menu.setAttribute('aria-hidden', !open);
    });
    menu.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', () => {
      menu.classList.remove('open'); btn.setAttribute('aria-expanded', false);
    }));
  }
  window.addEventListener('scroll', () => nav && nav.classList.toggle('scrolled', window.scrollY > 20), {passive:true});

  const sections = document.querySelectorAll('.section-snap[id]');
  const navLinks  = document.querySelectorAll('.nav-link');
  const observer  = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold:0.5 });
  sections.forEach(s => observer.observe(s));
}

// ══════════════════════════════════════════════════════════════
// STARFIELD CANVAS
// ══════════════════════════════════════════════════════════════
function initStarfield() {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize, {passive:true});

  // Dithered starfield like kimi.ai
  const stars = Array.from({length:320}, () => ({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*1.2 + 0.2,
    sp: Math.random()*0.12 + 0.02,
    o: Math.random()
  }));

  // Background: dark with faint pixel texture
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    // Base dark
    ctx.fillStyle = '#000';
    ctx.fillRect(0,0,canvas.width,canvas.height);

    // Pixel grid texture like kimi.ai
    ctx.fillStyle = 'rgba(255,255,255,0.025)';
    for (let x=0; x<canvas.width; x+=4) {
      for (let y=0; y<canvas.height; y+=4) {
        if (Math.random() < 0.18) ctx.fillRect(x,y,1,1);
      }
    }

    // Stars
    stars.forEach(s => {
      s.o += 0.004; if (s.o > 1) s.o = 0;
      ctx.globalAlpha = 0.2+0.7*Math.abs(Math.sin(s.o*Math.PI));
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
  }

  // Only draw once (static, since it's for hero only)
  draw();
  // Re-draw occasionally to shimmer
  setInterval(draw, 200);
}

// ══════════════════════════════════════════════════════════════
// HERO PLANET CANVAS
// ══════════════════════════════════════════════════════════════
function initHeroPlanet() {
  const canvas = document.getElementById('planet-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = 300, H = 300; canvas.width = W; canvas.height = H;
  let t = 0;
  function drawPlanet() {
    ctx.clearRect(0,0,W,H);
    const cx=W/2, cy=H/2, R=95;
    // pixel dot planet
    const dotSize = 4, spacing = 6;
    for (let dx=-R; dx<=R; dx+=spacing) {
      for (let dy=-R; dy<=R; dy+=spacing) {
        if (dx*dx+dy*dy <= R*R) {
          const nx=dx/R, ny=dy/R;
          const nz=Math.sqrt(Math.max(0,1-nx*nx-ny*ny));
          const light = 0.25+0.75*Math.max(0, nx*0.4+ny*(-0.25)+nz*0.85);
          const shade = Math.floor(light*200);
          const noiseX = Math.floor((dx+t*0.25)/10);
          const noiseY = Math.floor(dy/10);
          const noise  = ((noiseX*2341+noiseY*5783)%7)/7;
          const final  = Math.floor(shade*(0.72+0.28*noise));
          ctx.fillStyle = `rgb(${final},${final},${final})`;
          ctx.fillRect(cx+dx-dotSize/2, cy+dy-dotSize/2, dotSize, dotSize);
        }
      }
    }
    // ring
    ctx.save();
    ctx.translate(cx,cy); ctx.rotate(-0.32);
    ctx.scale(1, 0.26);
    ctx.beginPath();
    ctx.arc(0, 0, R+28, 0, Math.PI*2);
    ctx.strokeStyle='rgba(255,255,255,0.2)';
    ctx.lineWidth=9;
    ctx.stroke();
    ctx.restore();
    t++;
    requestAnimationFrame(drawPlanet);
  }
  drawPlanet();
}

// ══════════════════════════════════════════════════════════════
// PROJECT PLANET CANVAS (center of orbital ring)
// ══════════════════════════════════════════════════════════════
function initProjPlanet() {
  const canvas = document.getElementById('proj-planet-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W=200, H=200; canvas.width=W; canvas.height=H;
  let t=0;
  function draw() {
    ctx.clearRect(0,0,W,H);
    const cx=W/2, cy=H/2, R=68;
    const dotSize=3, spacing=5;
    for (let dx=-R; dx<=R; dx+=spacing) {
      for (let dy=-R; dy<=R; dy+=spacing) {
        if (dx*dx+dy*dy <= R*R) {
          const nx=dx/R, ny=dy/R;
          const nz=Math.sqrt(Math.max(0,1-nx*nx-ny*ny));
          const light=0.2+0.8*Math.max(0,nx*0.4+ny*-0.25+nz*0.85);
          const shade=Math.floor(light*180);
          const noiseX=Math.floor((dx+t*0.18)/8), noiseY=Math.floor(dy/8);
          const noise=((noiseX*1931+noiseY*4271)%7)/7;
          const f=Math.floor(shade*(0.72+0.28*noise));
          ctx.fillStyle=`rgb(${f},${f},${f})`;
          ctx.fillRect(cx+dx-dotSize/2, cy+dy-dotSize/2, dotSize, dotSize);
        }
      }
    }
    ctx.save(); ctx.translate(cx,cy); ctx.rotate(-0.3);
    ctx.scale(1, 0.27);
    ctx.beginPath(); ctx.arc(0,0,R+18,0,Math.PI*2);
    ctx.strokeStyle='rgba(255,255,255,0.18)';
    ctx.lineWidth=7; ctx.stroke();
    ctx.restore();
    t++; requestAnimationFrame(draw);
  }
  draw();
}

// ══════════════════════════════════════════════════════════════
// MATRIX CANVAS (About section)
// ══════════════════════════════════════════════════════════════
function initMatrixCanvas() {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  function resize() { canvas.width=canvas.offsetWidth; canvas.height=canvas.offsetHeight; }
  resize();
  const chars='01アイウエオカキクケコ'.split('');
  const cols=Math.floor(canvas.width/18);
  const drops=Array(cols).fill(1);
  function draw() {
    ctx.fillStyle='rgba(0,0,0,0.04)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle='rgba(255,255,255,0.3)';
    ctx.font='14px monospace';
    drops.forEach((y,i) => {
      ctx.fillText(chars[Math.floor(Math.random()*chars.length)], i*18, y*18);
      if (y*18>canvas.height && Math.random()>0.975) drops[i]=0;
      drops[i]++;
    });
  }
  setInterval(draw, 55);
}

// ══════════════════════════════════════════════════════════════
// NEBULA CANVAS (Contact section)
// ══════════════════════════════════════════════════════════════
function initNebulaCanvas() {
  const canvas = document.getElementById('nebula-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  function resize() { canvas.width=canvas.offsetWidth; canvas.height=canvas.offsetHeight; }
  resize();
  const particles = Array.from({length:100}, () => ({
    x:Math.random()*canvas.width, y:Math.random()*canvas.height,
    vx:(Math.random()-.5)*0.25, vy:(Math.random()-.5)*0.25,
    r:Math.random()*1.8+0.8, o:Math.random()
  }));
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => {
      p.x+=p.vx; p.y+=p.vy; p.o+=0.003;
      if (p.x<0) p.x=canvas.width; if (p.x>canvas.width) p.x=0;
      if (p.y<0) p.y=canvas.height; if (p.y>canvas.height) p.y=0;
      ctx.globalAlpha = 0.35+0.45*Math.sin(p.o);
      ctx.fillStyle='#fff';
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
    });
    ctx.globalAlpha=1;
    requestAnimationFrame(draw);
  }
  draw();
}

// ══════════════════════════════════════════════════════════════
// PROJECT BG CANVAS
// ══════════════════════════════════════════════════════════════
function initProjectBgCanvas() {
  const canvas = document.getElementById('project-bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  function resize() { canvas.width=canvas.offsetWidth; canvas.height=canvas.offsetHeight; }
  resize();
  // Draw dithered starfield like kimi.ai
  ctx.fillStyle='#000';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  for (let i=0;i<200;i++) {
    const x=Math.random()*canvas.width;
    const y=Math.random()*canvas.height;
    ctx.fillStyle=`rgba(255,255,255,${0.1+Math.random()*0.4})`;
    ctx.fillRect(x, y, 1, 1);
  }
  // Dither texture
  ctx.fillStyle='rgba(255,255,255,0.015)';
  for (let x=0; x<canvas.width; x+=4) {
    for (let y=0; y<canvas.height; y+=4) {
      if (Math.random() < 0.15) ctx.fillRect(x,y,1,1);
    }
  }
}

// ══════════════════════════════════════════════════════════════
// AVATAR CANVASES
// ══════════════════════════════════════════════════════════════
function initAvatarCanvases() {
  document.querySelectorAll('.avatar-canvas').forEach(canvas => {
    const ctx = canvas.getContext('2d');
    const W=80, H=80; canvas.width=W; canvas.height=H;
    const idx   = parseInt(canvas.dataset.index)||0;
    const init  = canvas.dataset.initials||'??';
    const shades= [70,60,80];
    const shade = shades[idx%shades.length];
    for (let x=0;x<W;x+=4) for (let y=0;y<H;y+=4) {
      const v = shade + Math.floor(((x*2341+y*1823)%17))-8;
      ctx.fillStyle=`rgb(${v},${v},${v})`;
      ctx.fillRect(x,y,3,3);
    }
    ctx.strokeStyle='rgba(255,255,255,0.35)';
    ctx.lineWidth=1; ctx.strokeRect(0.5,0.5,W-1,H-1);
    ctx.fillStyle='#fff';
    ctx.font='bold 28px "VT323", monospace';
    ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.fillText(init, W/2, H/2+2);
  });
}

// ══════════════════════════════════════════════════════════════
// COUNTER ANIMATION
// ══════════════════════════════════════════════════════════════
function initCounters() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el  = e.target.querySelector('.stat-number');
      if (!el || el.dataset.done) return;
      el.dataset.done='1';
      const target = parseInt(el.dataset.target)||0;
      const suffix = el.dataset.suffix||'';
      let cur=0;
      const inc = Math.ceil(target/40);
      const timer = setInterval(() => {
        cur = Math.min(cur+inc, target);
        el.textContent = cur+suffix;
        if (cur>=target) clearInterval(timer);
      }, 28);
    });
  }, {threshold:0.4});
  document.querySelectorAll('.stat-card').forEach(c => observer.observe(c));
}

// ══════════════════════════════════════════════════════════════
// REVEAL ANIMATIONS
// ══════════════════════════════════════════════════════════════
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach((e,i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i*70);
      }
    });
  }, {threshold:0.1});
  document.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));
}

// ══════════════════════════════════════════════════════════════
// TIMELINE TRAVELER ANIMATION
// ══════════════════════════════════════════════════════════════
function initTimeline() {
  const traveler = document.getElementById('timeline-traveler');
  const path     = document.querySelector('.timeline-svg path');
  if (!traveler || !path) return;
  const len = path.getTotalLength();
  let t=0;
  function animate() {
    t = (t + 0.0018) % 1;
    const pt = path.getPointAtLength(t * len);
    traveler.setAttribute('cx', pt.x);
    traveler.setAttribute('cy', pt.y);
    requestAnimationFrame(animate);
  }
  animate();
}

// ══════════════════════════════════════════════════════════════
// PROJECT CARD CANVASES — Kimi.ai style dithered grayscale
// ══════════════════════════════════════════════════════════════
function drawProjectCanvas(canvas, type) {
  const W=300, H=160; canvas.width=W; canvas.height=H;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0,0,W,H);
  // Lighter background — like kimi.ai card image area
  ctx.fillStyle='#d0cdc8'; ctx.fillRect(0,0,W,H);

  // Helper: dithered grayscale block
  function dBlock(x,y,w,h,lightness) {
    const v = Math.floor(lightness*255);
    ctx.fillStyle=`rgb(${v},${v},${v})`;
    ctx.fillRect(x,y,w,h);
    // dither
    ctx.fillStyle=`rgba(0,0,0,0.08)`;
    for(let px=x;px<x+w;px+=2) for(let py=y;py<y+h;py+=2) {
      if (Math.random()<0.3) ctx.fillRect(px,py,1,1);
    }
  }

  if (type==='rag' || type==='chat' || type==='multimodal') {
    // Neural graph silhouette
    dBlock(0,0,W,H,0.78);
    const nodes = [{x:55,y:80},{x:130,y:45},{x:130,y:115},{x:205,y:80},{x:245,y:45},{x:245,y:115}];
    ctx.strokeStyle='rgba(0,0,0,0.35)'; ctx.lineWidth=1.5;
    [[0,1],[0,2],[1,3],[2,3],[3,4],[3,5]].forEach(([a,b])=>{
      ctx.beginPath(); ctx.moveTo(nodes[a].x,nodes[a].y); ctx.lineTo(nodes[b].x,nodes[b].y); ctx.stroke();
    });
    nodes.forEach(n => {
      ctx.beginPath(); ctx.arc(n.x,n.y,9,0,Math.PI*2);
      ctx.fillStyle='rgba(0,0,0,0.2)'; ctx.fill();
      ctx.strokeStyle='rgba(0,0,0,0.5)'; ctx.lineWidth=1; ctx.stroke();
    });
  } else if (type==='detect') {
    // Object detection bounding boxes
    dBlock(0,0,W,H,0.76);
    [[28,18,115,95],[160,40,108,80],[38,120,75,32]].forEach(([x,y,w,h])=>{
      ctx.strokeStyle='rgba(0,0,0,0.5)'; ctx.lineWidth=1.5;
      ctx.strokeRect(x,y,w,h);
      ctx.fillStyle='rgba(0,0,0,0.08)'; ctx.fillRect(x,y,w,h);
      ctx.fillStyle='rgba(0,0,0,0.4)'; ctx.fillRect(x,y,44,14);
      ctx.fillStyle='rgba(255,255,255,0.9)'; ctx.font='bold 10px monospace';
      ctx.fillText('OBJ',x+4,y+11);
    });
  } else if (type==='slam' || type==='segment') {
    // Point cloud scatter
    dBlock(0,0,W,H,0.75);
    for (let i=0;i<80;i++) {
      const x=32+Math.random()*236, y=16+Math.random()*128;
      const s=Math.random()*2+0.5;
      ctx.fillStyle=`rgba(0,0,0,${0.15+Math.random()*0.45})`;
      ctx.beginPath(); ctx.arc(x,y,s,0,Math.PI*2); ctx.fill();
    }
    ctx.strokeStyle='rgba(0,0,0,0.55)'; ctx.lineWidth=1.5;
    ctx.beginPath(); ctx.moveTo(50,140); ctx.bezierCurveTo(110,110,180,85,250,42); ctx.stroke();
  } else if (type==='restaurant') {
    // Restaurant / menu feel
    dBlock(0,0,W,H,0.8);
    // Plate circles
    [70,155,238].forEach(cx => {
      ctx.beginPath(); ctx.arc(cx,75,38,0,Math.PI*2);
      ctx.fillStyle='rgba(0,0,0,0.08)'; ctx.fill();
      ctx.strokeStyle='rgba(0,0,0,0.35)'; ctx.lineWidth=1; ctx.stroke();
    });
    ctx.fillStyle='rgba(0,0,0,0.35)';
    ctx.font='bold 12px monospace'; ctx.textAlign='center';
    ctx.fillText('MENU',150,132);
  } else if (type==='medz') {
    // Medical cross + pills
    dBlock(0,0,W,H,0.79);
    ctx.strokeStyle='rgba(0,0,0,0.45)'; ctx.lineWidth=2.5;
    ctx.beginPath(); ctx.moveTo(150,22); ctx.lineTo(150,72); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(125,47); ctx.lineTo(175,47); ctx.stroke();
    [[38,88,76,22],[168,88,76,22],[55,126,56,18],[176,126,56,18]].forEach(([x,y,w,h])=>{
      ctx.fillStyle='rgba(0,0,0,0.1)';
      ctx.strokeStyle='rgba(0,0,0,0.4)'; ctx.lineWidth=1;
      ctx.beginPath(); ctx.roundRect(x,y,w,h,h/2);
      ctx.fill(); ctx.stroke();
    });
  } else if (type==='corporate' || type==='saas') {
    // Office grid / dashboard
    dBlock(0,0,W,H,0.77);
    for (let c=0;c<4;c++) for (let r=0;r<2;r++) {
      ctx.fillStyle='rgba(0,0,0,0.07)';
      ctx.strokeStyle='rgba(0,0,0,0.25)'; ctx.lineWidth=1;
      ctx.fillRect(28+c*64, 18+r*56, 56,48);
      ctx.strokeRect(28+c*64, 18+r*56, 56,48);
    }
    ctx.fillStyle='rgba(0,0,0,0.14)'; ctx.fillRect(28,132,244,16);
  } else if (type==='shop' || type==='grocery') {
    // Product cards
    dBlock(0,0,W,H,0.82);
    [[26,14,76,102],[114,14,76,102],[202,14,76,102]].forEach(([x,y,w,h])=>{
      ctx.fillStyle='rgba(0,0,0,0.08)';
      ctx.strokeStyle='rgba(0,0,0,0.28)'; ctx.lineWidth=1;
      ctx.fillRect(x,y,w,h); ctx.strokeRect(x,y,w,h);
    });
    ctx.strokeStyle='rgba(0,0,0,0.45)'; ctx.lineWidth=1.5;
    ctx.beginPath(); ctx.moveTo(68,132); ctx.lineTo(90,132); ctx.lineTo(98,148); ctx.lineTo(52,148); ctx.closePath(); ctx.stroke();
  } else if (type==='fashion') {
    // Fashion silhouettes
    dBlock(0,0,W,H,0.81);
    [62,150,238].forEach((x,i)=>{
      ctx.strokeStyle=`rgba(0,0,0,${0.3+i*0.08})`; ctx.lineWidth=1.5;
      ctx.beginPath(); ctx.moveTo(x,35); ctx.lineTo(x-18,100); ctx.lineTo(x+18,100); ctx.closePath(); ctx.stroke();
      ctx.beginPath(); ctx.arc(x,26,11,0,Math.PI*2); ctx.stroke();
    });
  } else if (type==='iot' || type==='farm') {
    // IoT network hub
    dBlock(0,0,W,H,0.76);
    const cx=150, cy=80;
    ctx.beginPath(); ctx.arc(cx,cy,22,0,Math.PI*2);
    ctx.strokeStyle='rgba(0,0,0,0.5)'; ctx.lineWidth=1.5; ctx.stroke();
    ctx.fillStyle='rgba(0,0,0,0.1)'; ctx.fill();
    [[36,28],[264,28],[36,132],[264,132],[55,80],[245,80]].forEach(([x,y])=>{
      ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(x,y);
      ctx.strokeStyle='rgba(0,0,0,0.22)'; ctx.lineWidth=1; ctx.stroke();
      ctx.beginPath(); ctx.arc(x,y,9,0,Math.PI*2);
      ctx.strokeStyle='rgba(0,0,0,0.4)'; ctx.lineWidth=1; ctx.stroke();
    });
  } else {
    // Generic fallback
    dBlock(0,0,W,H,0.78);
  }
}

// ══════════════════════════════════════════════════════════════
// ══════════════════════════════════════════════════════════════
// ORBITAL RING — White Playing-Card Style (careers.kimi.ai)
// ══════════════════════════════════════════════════════════════
function buildOrbitalWheel(cat) {
  const ring  = document.getElementById('proj-orbit-ring');
  const label = document.getElementById('orbit-cat-label');
  if (!ring) return;
  ring.innerHTML = '';

  const filtered = cat === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat === cat);
  const N = filtered.length;
  const RADIUS = 280; // orbit radius — ring div is 660x660, center = 330
  const CENTER = 330;

  filtered.forEach((proj, i) => {
    const angle = (i / N) * 2 * Math.PI - Math.PI / 2;
    const x = CENTER + RADIUS * Math.cos(angle);
    const y = CENTER + RADIUS * Math.sin(angle);
    const angleDeg = angle * (180 / Math.PI) + 90;

    const card = document.createElement('div');
    card.className = 'orbit-card';
    card.style.left = x + 'px';
    card.style.top  = y + 'px';
    card.style.setProperty('--rot', angleDeg + 'deg');
    card.style.transform = `translate(-50%, -50%) rotate(${angleDeg}deg)`;
    card.innerHTML = `
      <div class="orbit-card-corner">
        <span>${String(i + 1).padStart(2, '0')}</span>
        <span>✦</span>
      </div>
      <div class="orbit-card-center-emblem">
        <div class="orbit-emblem-glyph">⨁</div>
        <div class="orbit-emblem-text">ZENITH</div>
      </div>
      <div class="orbit-card-corner bot">
        <span>✦</span>
        <span>${String(i + 1).padStart(2, '0')}</span>
      </div>
      <div class="orbit-card-tooltip">
        <strong style="color:#fff;font-size:13px;">${proj.name}</strong><br>
        <span style="color:#38bdf8;">${proj.catLabel}</span> · Click to inspect
      </div>
    `;
    card.addEventListener('click', () => openCarousel(cat, i));
    ring.appendChild(card);
  });

  if (label) label.textContent = cat === 'all' ? 'All Projects' :
    (filtered[0]?.catLabel || 'Projects');

  // Smooth celestial rotation of the ring
  let currentAngle = 0;
  let isHovered = false;
  ring.onmouseenter = () => { isHovered = true; };
  ring.onmouseleave = () => { isHovered = false; };
  if (ring._animFrame) cancelAnimationFrame(ring._animFrame);
  function rotateRing() {
    if (!isHovered) {
      currentAngle += 0.0014;
      ring.style.transform = `rotate(${currentAngle}rad)`;
    }
    ring._animFrame = requestAnimationFrame(rotateRing);
  }
  rotateRing();
}

function initProjectCategory() {
  document.querySelectorAll('.proj-cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.proj-cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.cat;
      buildOrbitalWheel(currentCategory);
    });
  });
  buildOrbitalWheel('all');
}

// ══════════════════════════════════════════════════════════════
// FAN CAROUSEL — Kimi.ai card-hand rolling style
// ══════════════════════════════════════════════════════════════
function openCarousel(cat, startIdx) {
  const wheelView    = document.getElementById('proj-wheel-view');
  const carouselView = document.getElementById('proj-carousel-view');
  if (!wheelView || !carouselView) return;

  carouselProjectList = cat === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat === cat);
  carouselIndex = startIdx % carouselProjectList.length;

  wheelView.style.display    = 'none';
  carouselView.style.display = 'flex';

  renderCarousel();
}

function closeCarousel() {
  const wheelView    = document.getElementById('proj-wheel-view');
  const carouselView = document.getElementById('proj-carousel-view');
  if (!wheelView || !carouselView) return;
  wheelView.style.display    = 'flex';
  carouselView.style.display = 'none';
}

function renderCarousel() {
  const stage   = document.getElementById('carousel-stage');
  const ctaBtn  = document.getElementById('carousel-cta-link');
  const titleEl = document.getElementById('carousel-title');
  if (!stage) return;
  stage.innerHTML = '';

  const N = carouselProjectList.length;
  const posMap = {
    '-2': 'pos-left2',
    '-1': 'pos-left1',
    '0':  'pos-center',
    '1':  'pos-right1',
    '2':  'pos-right2'
  };

  // Render 5 visible cards: center ± 2
  // We render in order -2, 2, -1, 1, 0 so center card is on top in DOM stack
  const renderOffsets = [-2, 2, -1, 1, 0];
  for (const offset of renderOffsets) {
    const idx  = ((carouselIndex + offset) % N + N) % N;
    const proj = carouselProjectList[idx];
    const posClass = posMap[String(offset)];

    const card = document.createElement('div');
    card.className = `proj-card-3d ${posClass}`;
    card.dataset.idx = idx;

    card.innerHTML = `
      <div class="proj-card-header-bar">
        <span class="proj-card-header-title pixel-text">${proj.name}</span>
        <span class="proj-card-header-cat mono-text">${proj.catLabel}</span>
      </div>
      <div class="proj-card-visual">
        <img src="${proj.image}" alt="${proj.name}" class="proj-card-img" loading="lazy" />
      </div>
      <div class="proj-card-watermark mono-text">ZENITH COLLECTIVE</div>
      <div class="proj-card-body">
        <div class="proj-card-desc mono-text">${proj.desc}</div>
        <div class="proj-card-stack">
          ${proj.stack.map(s => `<span class="proj-stack-tag mono-text">${s}</span>`).join('')}
        </div>
        <div class="proj-card-quote mono-text">"${proj.quote}"</div>
        <div class="proj-card-author mono-text">From ZENITH Collective &gt; ${proj.author}</div>
      </div>
      <div class="proj-card-footer">
        <span class="proj-card-badge mono-text">ZENITH</span>
        <span class="proj-card-link-icon mono-text">${proj.url !== '#' ? '↗ Live Site' : '✦ Core Architecture'}</span>
      </div>
    `;

    // Clicking non-center cards navigates directly to them
    if (offset !== 0) {
      card.addEventListener('click', () => {
        carouselIndex = ((carouselIndex + offset) % N + N) % N;
        renderCarousel();
      });
    }

    stage.appendChild(card);
  }

  const centerProj = carouselProjectList[carouselIndex];
  if (titleEl) titleEl.textContent = centerProj.name;
  if (ctaBtn) {
    if (centerProj.url !== '#') {
      ctaBtn.href = centerProj.url;
      ctaBtn.textContent = 'View Live Site ›';
      ctaBtn.target = '_blank';
      ctaBtn.style.opacity = '1';
      ctaBtn.style.pointerEvents = 'auto';
    } else {
      ctaBtn.href = '#contact';
      ctaBtn.textContent = 'Inquire Architecture ›';
      ctaBtn.target = '_self';
      ctaBtn.style.opacity = '1';
      ctaBtn.style.pointerEvents = 'auto';
    }
  }
}

function initCarouselControls() {
  document.getElementById('carousel-back')?.addEventListener('click', closeCarousel);
  document.getElementById('carousel-prev')?.addEventListener('click', () => {
    const N = carouselProjectList.length;
    carouselIndex = ((carouselIndex - 1) % N + N) % N;
    renderCarousel();
  });
  document.getElementById('carousel-next')?.addEventListener('click', () => {
    const N = carouselProjectList.length;
    carouselIndex = (carouselIndex + 1) % N;
    renderCarousel();
  });

  // Keyboard navigation
  document.addEventListener('keydown', e => {
    const carouselView = document.getElementById('proj-carousel-view');
    if (!carouselView || carouselView.style.display === 'none') return;
    const N = carouselProjectList.length;
    if (e.key === 'ArrowLeft')  { carouselIndex = ((carouselIndex - 1) % N + N) % N; renderCarousel(); }
    if (e.key === 'ArrowRight') { carouselIndex = (carouselIndex + 1) % N; renderCarousel(); }
    if (e.key === 'Escape')     closeCarousel();
  });

  // Mouse wheel rolling through cards (like Kimi.ai)
  let lastWheelTime = 0;
  const carouselView = document.getElementById('proj-carousel-view');
  carouselView?.addEventListener('wheel', e => {
    if (carouselView.style.display === 'none') return;
    const now = Date.now();
    if (now - lastWheelTime < 160) return;
    lastWheelTime = now;
    const N = carouselProjectList.length;
    if (e.deltaY > 0 || e.deltaX > 0) {
      carouselIndex = (carouselIndex + 1) % N;
    } else {
      carouselIndex = ((carouselIndex - 1) % N + N) % N;
    }
    renderCarousel();
  }, { passive: true });

  // Swipe / drag support for touch
  let startX = 0;
  const stage = document.getElementById('carousel-stage');
  if (stage) {
    stage.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    stage.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) < 35) return;
      const N = carouselProjectList.length;
      if (dx < 0) { carouselIndex = (carouselIndex + 1) % N; }
      else { carouselIndex = ((carouselIndex - 1) % N + N) % N; }
      renderCarousel();
    }, { passive: true });
  }
}

// ══════════════════════════════════════════════════════════════
// INIT ALL
// ══════════════════════════════════════════════════════════════
function init() {
  initCursor();
  initNav();
  initStarfield();
  initHeroPlanet();
  initProjPlanet();
  initMatrixCanvas();
  initNebulaCanvas();
  initProjectBgCanvas();
  initAvatarCanvases();
  initCounters();
  initReveal();
  initTimeline();
  initProjectCategory();
  initCarouselControls();
}

document.readyState === 'loading'
  ? document.addEventListener('DOMContentLoaded', init)
  : init();
