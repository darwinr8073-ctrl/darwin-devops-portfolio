/* ============================================================
   EDIT EVERYTHING BELOW — this is the only place you need to
   touch to make the site yours. Layout/animation code needs
   no changes.
   ============================================================ */
const CONFIG = {
  bootLines: [
    {t:"> INITIALIZING CHARACTER FILE...", tag:"info"},
    {t:"> LOADING: DARWIN_PREM_KUMAR_R.PROFILE", tag:"ok"},
    {t:"> CLASS: DEVOPS_ENGINEER", tag:"ok"},
    {t:"> STATUS: AVAILABLE_FOR_HIRE", tag:"ok"},
    {t:"", tag:""},
    {t:"Loading Linux Kernel...", tag:"info"},
    {t:"Linux.......................OK", tag:"ok"},
    {t:"AWS Cloud...................OK", tag:"ok"},
    {t:"Docker Engine...............OK", tag:"ok"},
    {t:"Terraform...................OK", tag:"ok"},
    {t:"Kubernetes..................OK", tag:"ok"},
    {t:"Jenkins......................OK", tag:"ok"},
    {t:"Git & GitHub.................OK", tag:"ok"},
    {t:"Prometheus...................OK", tag:"ok"},
    {t:"Grafana......................OK", tag:"ok"},
    {t:"", tag:""},
    {t:"> ACCESS GRANTED", tag:"ok"},
    {t:"> PRESS ENTER TO CONTINUE_", tag:"info"},
  ],
 
  skillCategories: [
    { label:"Operating Systems", skills:[
      {name:"🐧 Linux", level:85}, {name:"⌨️ Shell Scripting", level:70}
    ]},
    { label:"Cloud Platforms", skills:[
      {name:"☁️ AWS", level:70}
    ]},
    { label:"Containers & Orchestration", skills:[
      {name:"🐳 Docker", level:75}, {name:"☸️ Kubernetes", level:55}
    ]},
    { label:"Infra as Code", skills:[
      {name:"🏗️ Terraform", level:60}
    ]},
    { label:"CI / CD", skills:[
      {name:"🎩 Jenkins", level:60}
    ]},
    { label:"Version Control", skills:[
      {name:"🔀 Git", level:80}, {name:"🐙 GitHub", level:80}
    ]},
    { label:"Monitoring & Observability", skills:[
      {name:"🔥 Prometheus", level:50}, {name:"📊 Grafana", level:50}
    ]},
  ],
 
  projects: [
    {
      title:"Docker Three Tier Application",
      status:"done",
      desc:"A three-tier application containerized and orchestrated with Docker Compose — frontend, backend, and database running as separate services behind Nginx.",
      bullets:[
        "Set up multi-container architecture with Docker Compose.",
        "Configured Nginx as reverse proxy for the frontend layer.",
        "Connected backend service to a containerized database."
      ],
      tags:["Docker Compose","Nginx","Backend","Database"],
      repo:"https://darwinr8073-ctrl.github.io/darwin-devops-portfolio/#"
    },
    {
      title:"AWS Application Deployment",
      status:"done",
      desc:"Deployed a containerized application on AWS EC2, served through Nginx.",
      bullets:[
        "Provisioned and configured an EC2 instance for hosting.",
        "Containerized the application with Docker.",
        "Set up Nginx to route and serve traffic to the app."
      ],
      tags:["AWS","EC2","Docker","Nginx"],
      repo:"https://darwinr8073-ctrl.github.io/darwin-devops-portfolio/#"
    },
    {
      title:"Terraform Multi-Region Infrastructure",
      status:"done",
      desc:"Infrastructure as Code setup spanning two AWS regions — Mumbai and Virginia — provisioned entirely with Terraform.",
      bullets:[
        "Wrote Terraform configs to provision resources across ap-south-1 (Mumbai) and us-east-1 (Virginia).",
        "Managed multi-region state and provider configuration.",
        "Automated repeatable, version-controlled infrastructure deployment."
      ],
      tags:["Terraform","AWS","Multi-Region","IaC"],
      repo:"https://darwinr8073-ctrl.github.io/darwin-devops-portfolio/#"
    },
    {
      title:"React Containerization",
      status:"done",
      desc:"A React application containerized with Docker and served through Nginx for production deployment.",
      bullets:[
        "Built a multi-stage Dockerfile to build and serve the React app.",
        "Configured Nginx to serve static production assets.",
        "Optimized image size for faster container startup."
      ],
      tags:["React","Docker","Nginx"],
      repo:"https://darwinr8073-ctrl.github.io/darwin-devops-portfolio/#"
    },
    {
      title:"Jenkins CI/CD Pipeline",
      status:"done",
      desc:"Automated build-and-deploy pipeline using Jenkins for continuous integration and delivery.",
      bullets:[
        "Configured Jenkins pipeline stages for build, test, and deploy.",
        "Automated pipeline triggers on code changes.",
        "Integrated with version control for continuous delivery."
      ],
      tags:["Jenkins","CI/CD","Pipeline Automation"],
      repo:"https://darwinr8073-ctrl.github.io/darwin-devops-portfolio/#"
    },
  ],
 
  experience: [
    {
      role:"System Administrator",
      org:"Novo Nordisk | FIS — ODC (Offshore Development Center, US project)",
      desc:"Provided remote support for US-based clients by troubleshooting system and network-related issues, ensuring timely resolution, and maintaining effective communication until ticket closure. Utilized basic Git version control, Docker container troubleshooting, and CI/CD pipeline monitoring to support application deployment and operational activities."
    },
  ],
 
  education: [
    { deg:"DevOps Certification — Docker, Terraform, Linux, Jenkins, AWS Cloud", school:"GUVI Technology" },
    { deg:"CCNA", school:"Bsoft Technology", gradient:true },
  ],
};
 
/* ============================================================
   RENDER LOGIC — no need to edit below this line
   ============================================================ */
(function(){
  // ---- Boot sequence ----
  const bootLog = document.getElementById('boot-log');
  const boot = document.getElementById('boot');
  const skipHint = document.getElementById('boot-skip');
  let finished = false;
 
  function tagClass(tag){
    if(tag==="ok") return "tag-ok";
    if(tag==="warn") return "tag-warn";
    if(tag==="info") return "tag-info";
    return "";
  }
 
  function typeLines(lines, i=0){
    if(i >= lines.length){
      skipHint.classList.add('show');
      const cursor = document.createElement('span');
      cursor.className = 'cursor-blink';
      bootLog.appendChild(cursor);
      return;
    }
    const div = document.createElement('div');
    div.className = 'line ' + tagClass(lines[i].tag);
    div.style.animationDelay = '0s';
    div.textContent = lines[i].t;
    bootLog.appendChild(div);
    const delay = lines[i].t === "" ? 80 : (40 + Math.random()*70);
    setTimeout(()=>typeLines(lines, i+1), delay);
  }
 
  function finishBoot(){
    if(finished) return;
    finished = true;
    boot.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
 
  document.body.style.overflow = 'hidden';
  typeLines(CONFIG.bootLines);
  boot.addEventListener('click', finishBoot);
  window.addEventListener('keydown', (e)=>{ if(e.key === 'Enter') finishBoot(); });
  setTimeout(finishBoot, 6500); // auto-continue safety net
 
  // ---- Nav scroll ----
  document.querySelectorAll('#site-nav button').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelector(btn.dataset.target)?.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
 
  // ---- Skills render ----
  const skillGrid = document.getElementById('skill-grid');
  CONFIG.skillCategories.forEach(cat=>{
    const col = document.createElement('div');
    const label = document.createElement('div');
    label.className = 'skill-cat-label';
    label.textContent = cat.label;
    col.appendChild(label);
    cat.skills.forEach(s=>{
      const row = document.createElement('div');
      row.className = 'skill-bar-row';
      row.innerHTML = `
        <div class="skill-name"><span>${s.name}</span><span>${s.level}%</span></div>
        <div class="skill-track"><div class="skill-fill" data-level="${s.level}"></div></div>
      `;
      col.appendChild(row);
    });
    skillGrid.appendChild(col);
  });
 
  // animate bars when visible
  const bars = document.querySelectorAll('.skill-fill');
  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.style.width = e.target.dataset.level + '%';
        io.unobserve(e.target);
      }
    });
  }, {threshold:0.3});
  bars.forEach(b=>io.observe(b));
 
  // ---- Projects render ----
  const projectList = document.getElementById('project-list');
  CONFIG.projects.forEach(p=>{
    const el = document.createElement('div');
    el.className = 'project';
    el.innerHTML = `
      <div class="project-head">
        <div class="project-title">${p.title}</div>
        <div class="project-status ${p.status==='done'?'status-done':'status-progress'}">
          ${p.status==='done' ? 'CLEARED' : 'IN PROGRESS'}
        </div>
      </div>
      <div class="project-desc">${p.desc}</div>
      <ul>${p.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>
      <div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      ${p.repo ? `<a class="repo" href="${p.repo}" target="_blank" rel="noopener">→ ${p.repo}</a>` : ''}
    `;
    projectList.appendChild(el);
  });
 
  // ---- Experience render ----
  const historyList = document.getElementById('history-list');
  CONFIG.experience.forEach((h,i)=>{
    const el = document.createElement('div');
    el.className = 'history-item';
    el.innerHTML = `
      <div class="history-idx">[${String(i+1).padStart(2,'0')}]</div>
      <div>
        <div class="history-role">${h.role}</div>
        <div class="history-org">${h.org}</div>
        <div class="history-desc">${h.desc}</div>
      </div>
    `;
    historyList.appendChild(el);
  });
 
  // ---- Education render ----
  const eduList = document.getElementById('edu-list');
  CONFIG.education.forEach(e=>{
    const el = document.createElement('div');
    el.className = 'edu-item';
    el.innerHTML = `<div class="deg">${e.deg}</div><div class="school${e.gradient ? ' gradient' : ''}">${e.school}</div>`;
    eduList.appendChild(el);
  });
})();
 