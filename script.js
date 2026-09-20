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
  // ── AI / ML ────────────────────────────────────────────────
  {
    id:'rag',
    name:'RAG Pipeline System',
    cat:'aiml',
    catLabel:'AI / ML',
    icon:'#',
    desc:'Enterprise-grade Retrieval-Augmented Generation pipeline with vector embeddings, semantic search, and multi-document reasoning over private knowledge bases.',
    quote:'Every query is a step closer to understanding.',
    stack:['Python','LangChain','FAISS','FastAPI'],
    url:'#',
    canvasType:'rag'
  },
  {
    id:'conv',
    name:'Conversational AI Agent',
    cat:'aiml',
    catLabel:'AI / ML',
    icon:'#',
    desc:'Multi-turn conversational agent with tool-use, memory management, and domain-specific fine-tuning. Deployed at scale with real-time inference optimization.',
    quote:'Intelligence is not stored — it is summoned.',
    stack:['PyTorch','Transformers','Docker','React'],
    url:'#',
    canvasType:'chat'
  },
  {
    id:'multimodal',
    name:'Multimodal Reasoning Engine',
    cat:'aiml',
    catLabel:'AI / ML',
    icon:'#',
    desc:'Vision-language model combining image understanding with text reasoning. Supports OCR, diagram interpretation, and visual question answering at production scale.',
    quote:'The model sees what you see, and understands what you mean.',
    stack:['Python','CLIP','GPT-4V','FastAPI'],
    url:'#',
    canvasType:'vision'
  },
  // ── Computer Vision ────────────────────────────────────────
  {
    id:'slam',
    name:'LiDAR-SLAM Mapper',
    cat:'cv',
    catLabel:'Computer Vision',
    icon:'#',
    desc:'Real-time 3D mapping and localization using LiDAR point clouds with ROS2. Graph-based SLAM for autonomous navigation in GPS-denied environments.',
    quote:'Every point cloud is a story of space.',
    stack:['C++','ROS2','OpenCV','PCL'],
    url:'#',
    canvasType:'slam'
  },
  {
    id:'yolo',
    name:'Multimodal Object Detection',
    cat:'cv',
    catLabel:'Computer Vision',
    icon:'#',
    desc:'Real-time scene understanding combining RGB and depth sensors. Custom-trained YOLO variant with CUDA-accelerated inference pipeline for edge deployment.',
    quote:'The machine learned to see before it could think.',
    stack:['Python','CUDA','TensorFlow','OpenCV'],
    url:'#',
    canvasType:'detect'
  },
  {
    id:'segmentation',
    name:'Semantic Segmentation Pipeline',
    cat:'cv',
    catLabel:'Computer Vision',
    icon:'#',
    desc:'Pixel-level scene understanding for autonomous systems. Trained on custom datasets with DeepLabV3+ and deployed on edge hardware with TFLite quantization.',
    quote:'Understanding the world, one pixel at a time.',
    stack:['Python','PyTorch','OpenCV','TFLite'],
    url:'#',
    canvasType:'segment'
  },
  // ── Full Stack ─────────────────────────────────────────────
  {
    id:'ddelice',
    name:"D'Delice Restaurant",
    cat:'fullstack',
    catLabel:'Full Stack',
    icon:'#',
    desc:"Elegant full-stack restaurant web experience with animated menu, online reservation system, and a premium food photography showcase. Built with Next.js and deployed on Vercel.",
    quote:'Love at first bite — and first click.',
    stack:['Next.js','React','Tailwind','Vercel'],
    url:'https://ddelice-love-at-first-bite.vercel.app',
    canvasType:'restaurant'
  },
  {
    id:'newlife',
    name:'NewLife Medz Platform',
    cat:'fullstack',
    catLabel:'Full Stack',
    icon:'#',
    desc:'Healthcare e-commerce platform with medicine catalog, secure prescription upload, doctor consultation booking, and real-time order tracking with pharmacy integration.',
    quote:'Technology that keeps you alive and well.',
    stack:['React','Node.js','MongoDB','Stripe'],
    url:'https://www.newlifemedz.com/',
    canvasType:'medz'
  },
  {
    id:'mantronix',
    name:'Mantronix Solutions',
    cat:'fullstack',
    catLabel:'Full Stack',
    icon:'#',
    desc:'Corporate IT solutions website with dynamic service showcase, case study portfolio, lead generation forms, and animated technology stack display. SEO-optimized commercial web presence.',
    quote:"Solutions built for tomorrow's problems.",
    stack:['Next.js','TypeScript','PostgreSQL','AWS'],
    url:'https://www.mantronixsolutions.com/',
    canvasType:'corporate'
  },
  {
    id:'bizpro',
    name:'BizPro Commercial Suite',
    cat:'fullstack',
    catLabel:'Full Stack',
    icon:'#',
    desc:'Business management SaaS with CRM, invoice generation, team collaboration, project tracking, and analytics dashboard. Multi-tenant architecture with role-based access.',
    quote:'Run your business like a machine.',
    stack:['React','Django','PostgreSQL','Redis'],
    url:'#',
    canvasType:'saas'
  },
  // ── E-Commerce ─────────────────────────────────────────────
  {
    id:'shopnova',
    name:'ShopNova E-Commerce',
    cat:'ecommerce',
    catLabel:'E-Commerce',
    icon:'#',
    desc:'Full-featured e-commerce platform with product catalog, cart management, secure checkout via Stripe, seller dashboard, review system, and AI-powered recommendation engine.',
    quote:'Every product, one click away from home.',
    stack:['Next.js','Node.js','PostgreSQL','Stripe'],
    url:'#',
    canvasType:'shop'
  },
  {
    id:'luxestore',
    name:'LuxeStore Fashion',
    cat:'ecommerce',
    catLabel:'E-Commerce',
    icon:'#',
    desc:'Premium fashion e-commerce with AR virtual try-on integration, size recommendation AI, loyalty rewards system, and a beautifully crafted mobile-first shopping experience.',
    quote:'Fashion is code. Style is the output.',
    stack:['React','FastAPI','MongoDB','Cloudinary'],
    url:'#',
    canvasType:'fashion'
  },
  {
    id:'freshmart',
    name:'FreshMart Grocery',
    cat:'ecommerce',
    catLabel:'E-Commerce',
    icon:'#',
    desc:'Online grocery and fresh produce marketplace with real-time inventory, slot-based delivery scheduling, subscription boxes, and intelligent substitution engine.',
    quote:'Fresh from farm to your cart in minutes.',
    stack:['React','Node.js','Redis','Stripe'],
    url:'#',
    canvasType:'grocery'
  },
  // ── IoT ────────────────────────────────────────────────────
  {
    id:'edge',
    name:'Edge AI Sensor Platform',
    cat:'iot',
    catLabel:'IoT',
    icon:'#',
    desc:'Distributed edge intelligence deploying compressed ML models on resource-constrained devices. Real-time anomaly detection with MQTT telemetry pipeline and cloud aggregation.',
    quote:'Intelligence at the edge of perception.',
    stack:['Python','MQTT','TFLite','Linux'],
    url:'#',
    canvasType:'iot'
  },
  {
    id:'smartfarm',
    name:'SmartFarm Monitor',
    cat:'iot',
    catLabel:'IoT',
    icon:'#',
    desc:'Agricultural IoT system with soil moisture sensors, weather prediction integration, automated irrigation control, and crop health analytics dashboard with mobile alerts.',
    quote:'Data-driven farming for a sustainable future.',
    stack:['Arduino','Python','InfluxDB','Grafana'],
    url:'#',
    canvasType:'farm'
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
// ORBITAL RING — White Playing-Card Style (Kimi.ai)
// ══════════════════════════════════════════════════════════════
function buildOrbitalWheel(cat) {
  const ring  = document.getElementById('proj-orbit-ring');
  const label = document.getElementById('orbit-cat-label');
  if (!ring) return;
  ring.innerHTML='';

  const filtered = cat==='all' ? PROJECTS : PROJECTS.filter(p=>p.cat===cat);
  const N = filtered.length;
  const RADIUS = 270; // orbit radius — ring div is 660x660, center = 330
  const CENTER = 330;

  filtered.forEach((proj, i) => {
    const angle = (i/N)*2*Math.PI - Math.PI/2;
    const x = CENTER + RADIUS*Math.cos(angle);
    const y = CENTER + RADIUS*Math.sin(angle);

    const card = document.createElement('div');
    card.className = 'orbit-card';
    card.style.left = x+'px';
    card.style.top  = y+'px';
    card.innerHTML  = `
      <div class="orbit-card-header">
        <span class="orbit-card-icon pixel-text">ZN</span>
      </div>
      <div class="orbit-card-body">
        <div class="orbit-card-name pixel-text">${proj.name}</div>
        <div class="orbit-card-cat pixel-text">${proj.catLabel}</div>
      </div>
      <div class="orbit-card-badge"><span class="pixel-text">ZENITH</span></div>
    `;
    card.addEventListener('click', () => openCarousel(cat, i));
    ring.appendChild(card);
  });

  if (label) label.textContent = cat==='all' ? 'All Projects' :
    filtered[0]?.catLabel || 'Projects';

  // Animate ring rotation slowly
  let angle=0;
  if (ring._animFrame) cancelAnimationFrame(ring._animFrame);
  function rotateRing() {
    angle += 0.0012;
    ring.style.transform = `rotate(${angle}rad)`;
    // counter-rotate each card so it stays upright
    ring.querySelectorAll('.orbit-card').forEach(c => {
      c.style.transform = `translate(-50%,-50%) rotate(${-angle}rad)`;
    });
    ring._animFrame = requestAnimationFrame(rotateRing);
  }
  rotateRing();
}

function initProjectCategory() {
  document.querySelectorAll('.proj-cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.proj-cat-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.cat;
      buildOrbitalWheel(currentCategory);
    });
  });
  buildOrbitalWheel('all');
}

// ══════════════════════════════════════════════════════════════
// FAN CAROUSEL — Kimi.ai card-hand style
// ══════════════════════════════════════════════════════════════
function openCarousel(cat, startIdx) {
  const wheelView    = document.getElementById('proj-wheel-view');
  const carouselView = document.getElementById('proj-carousel-view');
  if (!wheelView || !carouselView) return;

  carouselProjectList = cat==='all' ? PROJECTS : PROJECTS.filter(p=>p.cat===cat);
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
  const stage  = document.getElementById('carousel-stage');
  const ctaBtn = document.getElementById('carousel-cta-link');
  const titleEl= document.getElementById('carousel-title');
  if (!stage) return;
  stage.innerHTML = '';

  const N = carouselProjectList.length;
  const positions = ['pos-hidden','pos-left2','pos-left1','pos-center','pos-right1','pos-right2','pos-hidden'];

  // Render 5 visible cards: center ± 2
  for (let offset = -2; offset <= 2; offset++) {
    const idx  = ((carouselIndex + offset) % N + N) % N;
    const proj = carouselProjectList[idx];
    const posClass = positions[offset + 2];

    const card = document.createElement('div');
    card.className = `proj-card-3d ${posClass}`;
    card.dataset.idx = idx;

    const cvId = `pcard-canvas-${Date.now()}-${idx}-${offset}`;
    card.innerHTML = `
      <div class="proj-card-header-bar">
        <span class="proj-card-header-title pixel-text">${proj.name}</span>
        <span class="proj-card-header-cat pixel-text">${proj.catLabel}</span>
      </div>
      <div class="proj-card-visual">
        <canvas id="${cvId}" style="width:100%;height:100%;display:block;"></canvas>
      </div>
      <div class="proj-card-body">
        <div class="proj-card-desc pixel-text">${proj.desc}</div>
        <div class="proj-card-stack">
          ${proj.stack.map(s=>`<span class="proj-stack-tag pixel-text">${s}</span>`).join('')}
        </div>
        <div class="proj-card-quote pixel-text">"${proj.quote}"</div>
      </div>
      <div class="proj-card-footer">
        <span class="proj-card-badge pixel-text">ZENITH</span>
        <span class="proj-card-link-icon pixel-text">${proj.url !== '#' ? '↗ Live' : '// WIP'}</span>
      </div>
    `;

    // Clicking non-center cards navigates to them
    if (offset !== 0) {
      card.addEventListener('click', () => {
        carouselIndex = ((carouselIndex + offset) % N + N) % N;
        renderCarousel();
      });
    }

    stage.appendChild(card);

    // Draw canvas for this card
    requestAnimationFrame(() => {
      const cv = document.getElementById(cvId);
      if (cv) drawProjectCanvas(cv, proj.canvasType);
    });
  }

  const centerProj = carouselProjectList[carouselIndex];
  if (titleEl) titleEl.textContent = centerProj.name;
  if (ctaBtn) {
    ctaBtn.href = centerProj.url;
    ctaBtn.textContent = centerProj.url !== '#' ? `View Live Site ›` : `[ In Progress ]`;
    ctaBtn.style.opacity = centerProj.url === '#' ? '0.4' : '1';
    ctaBtn.style.pointerEvents = centerProj.url === '#' ? 'none' : 'auto';
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
  // Keyboard support
  document.addEventListener('keydown', e => {
    const carouselView = document.getElementById('proj-carousel-view');
    if (!carouselView || carouselView.style.display==='none') return;
    const N = carouselProjectList.length;
    if (e.key==='ArrowLeft')  { carouselIndex=((carouselIndex-1)%N+N)%N; renderCarousel(); }
    if (e.key==='ArrowRight') { carouselIndex=(carouselIndex+1)%N; renderCarousel(); }
    if (e.key==='Escape')     closeCarousel();
  });
  // Swipe / drag support for touch
  let startX=0;
  const stage = document.getElementById('carousel-stage');
  if (stage) {
    stage.addEventListener('touchstart', e => { startX=e.touches[0].clientX; }, {passive:true});
    stage.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) < 40) return;
      const N = carouselProjectList.length;
      if (dx < 0) { carouselIndex=(carouselIndex+1)%N; }
      else { carouselIndex=((carouselIndex-1)%N+N)%N; }
      renderCarousel();
    }, {passive:true});
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
