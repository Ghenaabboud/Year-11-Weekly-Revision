/* Interactive simulations used in the recall missions.
   Each sim: SIMS[name](root, api)
   api.store  persisted object for this sim (survives reloads)
   api.save() persist api.store
   api.done() call once the student has completed the task (unlocks the next step) */
(function () {
  const NS = "http://www.w3.org/2000/svg";
  const RM = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
  function h(tag, attrs, ...kids) {
    const e = document.createElement(tag);
    if (attrs) for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") e.className = v;
      else if (k === "html") e.innerHTML = v;
      else if (k.startsWith("on")) e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v);
    }
    for (const k of kids.flat()) if (k != null) e.append(k.nodeType ? k : document.createTextNode(k));
    return e;
  }
  function s(tag, attrs, ...kids) {
    const e = document.createElementNS(NS, tag);
    if (attrs) for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
    for (const k of kids.flat()) if (k != null) e.append(k.nodeType ? k : document.createTextNode(k));
    return e;
  }
  /* task checklist shown under each sim */
  function tasks(root, list) {
    const ul = h("ul", { class: "simtasks" });
    const lis = list.map(t => { const li = h("li", null, t); ul.append(li); return li; });
    root.append(h("div", { class: "simtask" }, h("b", null, "To unlock the next step:"), ul));
    return (i, ok) => lis[i].classList.toggle("ok", !!ok);
  }
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  const SIMS = {};

  /* =============== 1. Label the cells =============== */
  SIMS.cellExplorer = (root, api) => {
    const st = api.store; st.found = st.found || {}; st.seen = st.seen || {};
    const R = (cx, cy) => s("circle", { cx, cy, r: 2.6, class: "ribo" });
    const cells = [
      { k: "bact", name: "Bacterium", sub: "prokaryotic · about 2 µm long", draw: g => {
          g.append(
            s("path", { d: "M320 130 q 12 -16 24 0 t 24 0 t 24 0", class: "flag" }),
            s("rect", { x: 60, y: 72, width: 262, height: 116, rx: 58, class: "wall" }),
            s("rect", { x: 70, y: 82, width: 242, height: 96, rx: 48, class: "memb cyto" }),
            s("path", { d: "M150 130 C 170 100, 210 160, 232 118 S 272 140, 252 152 S 192 168, 172 150 S 130 152, 150 130 Z", class: "dna" }),
            s("circle", { cx: 112, cy: 110, r: 8, class: "dna" }), s("circle", { cx: 272, cy: 160, r: 6, class: "dna" }),
            [[200, 98], [130, 150], [240, 104], [180, 166], [100, 135], [285, 120], [215, 172], [150, 100]].map(p => R(...p)));
        },
        spots: [
          { x: 190, y: 72, n: "Cell wall", f: "prokaryotic (bacteria) and plant cells" },
          { x: 74, y: 130, n: "Cell membrane", f: "every cell" },
          { x: 120, y: 160, n: "Cytoplasm", f: "every cell" },
          { x: 200, y: 98, n: "Ribosome", f: "every cell" },
          { x: 210, y: 134, n: "DNA loop (no nucleus)", f: "prokaryotic cells only" },
          { x: 112, y: 110, n: "Plasmid", f: "prokaryotic cells only" },
          { x: 368, y: 130, n: "Flagellum", f: "some prokaryotes (and sperm cells)" }] },
      { k: "anim", name: "Animal cell", sub: "eukaryotic · about 20 µm across", draw: g => {
          g.append(
            s("path", { d: "M60 60 C 140 20, 280 30, 345 70 C 390 110, 380 200, 330 225 C 250 255, 120 250, 70 215 C 25 180, 25 100, 60 60 Z", class: "memb cyto" }),
            s("circle", { cx: 200, cy: 128, r: 40, class: "nuc" }), s("circle", { cx: 208, cy: 120, r: 12, class: "nucleolus" }),
            s("g", { transform: "rotate(-20 102 92)" }, s("ellipse", { cx: 102, cy: 92, rx: 24, ry: 12, class: "mito" }), s("path", { d: "M84 92 l6 -7 l6 14 l6 -14 l6 14 l6 -14 l6 7", class: "cristae" })),
            s("g", { transform: "rotate(15 300 192)" }, s("ellipse", { cx: 300, cy: 192, rx: 22, ry: 11, class: "mito" }), s("path", { d: "M284 192 l6 -7 l6 14 l6 -14 l6 14 l6 -7", class: "cristae" })),
            [0, 8, 16, 24].map(d => s("path", { d: `M276 ${78 + d} q 26 -12 52 0`, class: "golgi" })),
            [0, 10, 20].map(d => s("path", { d: `M110 ${172 + d} q 15 -8 30 0 t 30 0 t 30 0`, class: "er" })),
            [[120, 168], [150, 178], [180, 188], [135, 198], [250, 205], [80, 150], [260, 60], [330, 140]].map(p => R(...p)));
        },
        spots: [
          { x: 60, y: 60, n: "Cell membrane", f: "every cell" },
          { x: 214, y: 146, n: "Nucleus", f: "eukaryotic cells only" },
          { x: 102, y: 92, n: "Mitochondrion", f: "eukaryotic cells only" },
          { x: 302, y: 88, n: "Golgi apparatus", f: "eukaryotic cells only" },
          { x: 170, y: 182, n: "Endoplasmic reticulum", f: "eukaryotic cells only" },
          { x: 250, y: 205, n: "Ribosome", f: "every cell" },
          { x: 300, y: 140, n: "Cytoplasm", f: "every cell" }] },
      { k: "plant", name: "Plant cell", sub: "eukaryotic · about 50 µm long", draw: g => {
          g.append(
            s("rect", { x: 50, y: 30, width: 300, height: 200, rx: 8, class: "wall pwall" }),
            s("rect", { x: 60, y: 40, width: 280, height: 180, rx: 6, class: "memb cyto" }),
            s("rect", { x: 112, y: 60, width: 180, height: 130, rx: 30, class: "vac" }),
            s("circle", { cx: 86, cy: 78, r: 20, class: "nuc" }),
            [[82, 176], [318, 82], [318, 182], [200, 208]].map(([x, y]) => s("g", null, s("ellipse", { cx: x, cy: y, rx: 17, ry: 9, class: "chlo" }), s("path", { d: `M${x - 9} ${y - 2} h18 M${x - 9} ${y + 3} h18`, class: "grana" }))),
            s("ellipse", { cx: 86, cy: 128, rx: 14, ry: 8, class: "mito" }));
        },
        spots: [
          { x: 200, y: 32, n: "Cell wall", f: "plant cells and prokaryotes" },
          { x: 62, y: 100, n: "Cell membrane", f: "every cell" },
          { x: 200, y: 125, n: "Permanent vacuole", f: "plant cells" },
          { x: 86, y: 78, n: "Nucleus", f: "eukaryotic cells only" },
          { x: 318, y: 82, n: "Chloroplast", f: "plant cells (and algae)" },
          { x: 86, y: 128, n: "Mitochondrion", f: "eukaryotic cells only" }] }
    ];
    const ALL = [...new Set(cells.flatMap(c => c.spots.map(p => p.n)))];
    const total = cells.reduce((t, c) => t + c.spots.length, 0);
    let cur = 0;
    const tabs = h("div", { class: "simtabs", role: "tablist" });
    const stage = h("div", { class: "cellstage" });
    const panel = h("div", { class: "simpanel", "aria-live": "polite" });
    const count = h("div", { class: "simcount" });
    root.append(h("p", { class: "simhelp" }, "Tap a numbered dot, then choose its name. Label every structure in all three cells."), tabs, stage, panel, count);
    const mark = tasks(root, ["Label every structure in the bacterium", "Label every structure in the animal cell", "Label every structure in the plant cell"]);
    function nFound(c) { return c.spots.filter((_, i) => st.found[c.k + i]).length; }
    function upd() {
      const n = Object.keys(st.found).length;
      count.textContent = `Labelled ${n} of ${total}`;
      cells.forEach((c, i) => { mark(i, nFound(c) === c.spots.length); tabs.children[i].querySelector("small").textContent = `${nFound(c)}/${c.spots.length}`; });
      if (n === total) api.done();
    }
    cells.forEach((c, i) => tabs.append(h("button", { type: "button", role: "tab", class: "simtab", onclick: () => show(i) }, c.name, h("small", null, ""))));
    function show(i) {
      cur = i; const c = cells[i];
      [...tabs.children].forEach((b, j) => b.setAttribute("aria-selected", j === i));
      stage.innerHTML = ""; panel.innerHTML = `<span class="note">${c.name}: ${c.sub}</span>`;
      const narrow = (stage.clientWidth || window.innerWidth) < 600;
      const svg = s("svg", { viewBox: narrow ? "-46 0 492 260" : "-235 0 870 260", class: "cellsvg", role: "img", "aria-label": c.name });
      const g = s("g"), add = g.append.bind(g); g.append = (...k) => add(...k.flat()); c.draw(g); svg.append(g);
      /* numbered markers sit outside the cell, with a leader line to the structure, like an exam diagram */
      const pos = {};
      [0, 1].forEach(side => {
        const list = c.spots.map((p, j) => ({ p, j })).filter(({ p }) => (p.x >= 200) === !!side).sort((a, b) => a.p.y - b.p.y);
        let y = -1e9; list.forEach(o => { y = Math.max(o.p.y, y + 30); o.ly = y; });
        const over = list.length ? list[list.length - 1].ly - 246 : 0; if (over > 0) list.forEach(o => o.ly -= over);
        list.forEach(o => pos[o.j] = { lx: side ? 430 : -30, ly: Math.max(14, o.ly) });
      });
      c.spots.forEach((p, j) => {
        const key = c.k + j, done = !!st.found[key], { lx, ly } = pos[j], right = lx > 200;
        svg.insertBefore(s("g", { class: "lead" + (done ? " ok" : "") }, s("line", { x1: lx + (right ? -12 : 12), y1: ly, x2: p.x, y2: p.y }), s("circle", { cx: p.x, cy: p.y, r: 6 })), null);
        const hs = s("g", { class: "hs" + (done ? " ok" : ""), tabindex: 0, role: "button", "aria-label": done ? p.n : "Structure " + (j + 1) },
          s("circle", { cx: lx, cy: ly, r: 12 }), s("text", { x: lx, y: ly + 4.5, "text-anchor": "middle" }, done ? "✓" : String(j + 1)));
        if (done && !narrow) hs.append(s("text", { x: lx + (right ? 18 : -18), y: ly + 4.5, class: "hslab", "text-anchor": right ? "start" : "end" }, p.n));
        const ask = () => quiz(c, j, hs);
        hs.addEventListener("click", ask); hs.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); ask(); } });
        svg.append(hs);
      });
      stage.append(svg); upd();
    }
    function quiz(c, j, hs) {
      const p = c.spots[j], key = c.k + j;
      if (st.found[key]) { panel.innerHTML = `<b>${p.n}</b> · found in: ${p.f}`; return; }
      svgSel(hs);
      const opts = shuffle([p.n, ...shuffle(ALL.filter(n => n !== p.n)).slice(0, 2)]);
      panel.innerHTML = "";
      panel.append(h("b", null, `What is structure ${j + 1}?`), h("div", { class: "simopts" }, opts.map(o => h("button", { type: "button", class: "simopt", onclick: e => {
        if (o === p.n) { st.found[key] = 1; api.save(); show(cur); panel.innerHTML = `<span class="good">✓ <b>${p.n}</b></span> · found in: ${p.f}`; }
        else { const b = e.currentTarget; b.classList.remove("no"); void b.offsetWidth; b.classList.add("no"); b.disabled = true; }
      } }, o))));
    }
    function svgSel(hs) { hs.ownerSVGElement.querySelectorAll(".hs.sel").forEach(x => x.classList.remove("sel")); hs.classList.add("sel"); }
    show(0);
  };

  /* =============== 2. Stem cell lab =============== */
  SIMS.stemLab = (root, api) => {
    const st = api.store; st.dish = st.dish || []; st.t = st.t || {};
    const TYPES = {
      nerve: { n: "Nerve cell", blood: false }, muscle: { n: "Muscle cell", blood: false },
      rbc: { n: "Red blood cell", blood: true }, wbc: { n: "White blood cell", blood: true }
    };
    const icon = k => {
      const v = s("svg", { viewBox: "0 0 60 60", class: "cicon" });
      if (k === "stemE" || k === "stemA") v.append(s("circle", { cx: 30, cy: 30, r: 22, class: k === "stemE" ? "stE" : "stA" }), s("circle", { cx: 30, cy: 30, r: 10, class: "nuc" }));
      if (k === "nerve") v.append(s("path", { d: "M8 30 L22 30 M22 30 l-6 -8 M22 30 l-6 8 M38 30 L56 30 M56 30 l4 -5 M56 30 l4 5", class: "axon" }), s("circle", { cx: 30, cy: 30, r: 9, class: "ncell" }));
      if (k === "muscle") v.append(s("path", { d: "M4 30 Q30 14 56 30 Q30 46 4 30 Z", class: "mcell" }), s("ellipse", { cx: 22, cy: 30, rx: 4, ry: 2.5, class: "nuc" }), s("ellipse", { cx: 38, cy: 30, rx: 4, ry: 2.5, class: "nuc" }));
      if (k === "rbc") v.append(s("circle", { cx: 30, cy: 30, r: 18, class: "rbc" }), s("circle", { cx: 30, cy: 30, r: 7, class: "rbcin" }));
      if (k === "wbc") v.append(s("circle", { cx: 30, cy: 30, r: 20, class: "wbc" }), s("path", { d: "M20 30 q5 -10 10 0 q5 10 10 0", class: "lobe" }));
      return v;
    };
    let src = "stemE";
    const srcRow = h("div", { class: "simtabs" });
    const SRC = { stemE: "Embryonic stem cell (early embryo)", stemA: "Adult stem cell (bone marrow)" };
    Object.entries(SRC).forEach(([k, n]) => srcRow.append(h("button", { type: "button", class: "simtab", "data-k": k, onclick: () => { src = k; draw(); } }, icon(k), n)));
    const acts = h("div", { class: "simacts" });
    const dish = h("div", { class: "dish", "aria-label": "Petri dish" });
    const msg = h("div", { class: "simpanel", "aria-live": "polite" });
    root.append(h("p", { class: "simhelp" }, "Pick a stem cell, then make it divide or give it a signal to differentiate. Watch what it can and can't become."), srcRow, acts, dish, msg);
    const mark = tasks(root, ["Make a stem cell divide to copy itself (self-renewal)", "Make two different specialised cells from the embryonic stem cell", "Find one cell the adult stem cell CAN become and one it CAN'T"]);
    acts.append(h("button", { type: "button", class: "btn alt", onclick: () => {
      st.dish.push(src, src); st.t.renew = 1; api.save();
      msg.innerHTML = `<b>Self-renewal.</b> The stem cell divided by mitosis into two identical, still unspecialised stem cells.`; draw(true);
    } }, "Divide"));
    Object.entries(TYPES).forEach(([k, t]) => acts.append(h("button", { type: "button", class: "btn alt", onclick: () => {
      const ok = src === "stemE" || t.blood;
      if (ok) {
        st.dish.push(k);
        if (src === "stemE") { st.t.emb = st.t.emb || []; if (!st.t.emb.includes(k)) st.t.emb.push(k); } else st.t.adOk = 1;
        msg.innerHTML = `<b>Differentiation.</b> The ${src === "stemE" ? "embryonic" : "adult"} stem cell switched on the genes for a <b>${t.n.toLowerCase()}</b> and developed its specialised structures.`;
      } else {
        st.t.adNo = 1;
        msg.innerHTML = `<span class="bad">✗ Nothing happened.</span> An adult bone-marrow stem cell can only become <b>blood cells</b>. A ${t.n.toLowerCase()} is outside its <b>potency</b>.`;
      }
      api.save(); draw(ok);
    } }, "→ " + t.n)));
    function draw(pop) {
      [...srcRow.children].forEach(b => b.setAttribute("aria-selected", b.dataset.k === src));
      dish.innerHTML = "";
      if (!st.dish.length) dish.append(h("span", { class: "note" }, "The dish is empty."));
      st.dish.slice(-14).forEach((k, i, a) => { const c = h("span", { class: "dcell" + (pop && i >= a.length - 2 ? " pop" : ""), title: (TYPES[k] || { n: "Stem cell" }).n }, icon(k)); dish.append(c); });
      const t = st.t;
      mark(0, t.renew); mark(1, (t.emb || []).length >= 2); mark(2, t.adOk && t.adNo);
      if (t.renew && (t.emb || []).length >= 2 && t.adOk && t.adNo) api.done();
    }
    draw();
  };

  /* =============== 3. SA:V agar cubes =============== */
  SIMS.saVLab = (root, api) => {
    const st = api.store; st.tested = st.tested || {};
    const SIZES = [1, 3, 4, 6];
    let a = 1;
    const chips = h("div", { class: "simtabs" });
    SIZES.forEach(n => chips.append(h("button", { type: "button", class: "simtab", "data-n": n, onclick: () => { a = n; draw(); } }, n + " cm cube")));
    const vis = h("div", { class: "cubewrap" });
    const stats = h("div", { class: "cubestats" });
    const run = h("button", { type: "button", class: "btn gold" }, "Soak in acid for 10 minutes");
    const tbl = h("div", { class: "tbl" });
    root.append(h("p", { class: "simhelp" }, "Agar cubes contain an indicator that is pink until acid reaches it. Acid diffuses about 0.5 cm into every cube in 10 minutes. Pick a cube and soak it."), chips, vis, stats, h("div", { class: "row" }, run), tbl);
    const mark = tasks(root, ["Soak at least three different cubes", "Include the smallest (1 cm) and the largest (6 cm) cube"]);
    const pct = n => Math.round((1 - Math.pow(Math.max(0, n - 1) / n, 3)) * 1000) / 10;
    function cube(n, soaked) {
      const px = 22 + n * 22, o = px * 0.35, x0 = 40, y0 = 30 + o;
      const v = s("svg", { viewBox: `0 0 ${x0 + px + o + 40} ${y0 + px + 20}`, class: "cube" });
      v.append(s("path", { d: `M${x0} ${y0} l${o} ${-o} h${px} l${-o} ${o} Z`, class: "ctop" }),
        s("path", { d: `M${x0 + px} ${y0} l${o} ${-o} v${px} l${-o} ${o} Z`, class: "cside" }),
        s("rect", { x: x0, y: y0, width: px, height: px, class: "cfront" }));
      const sec = s("svg", { viewBox: "0 0 160 178", class: "csec" });
      const full = 140, inner = full * Math.max(0, n - 1) / n;
      sec.append(s("rect", { x: 10, y: 10, width: full, height: full, class: "clear" }));
      const pink = s("rect", { x: 80 - (soaked ? inner : full) / 2, y: 80 - (soaked ? inner : full) / 2, width: soaked ? inner : full, height: soaked ? inner : full, class: "pink" });
      sec.append(pink, s("text", { x: 80, y: 172, "text-anchor": "middle", class: "csectxt" }, "inside, cut in half"));
      return [v, sec, pink, full, inner];
    }
    let parts;
    function draw(soaked) {
      [...chips.children].forEach(b => b.setAttribute("aria-selected", Number(b.dataset.n) === a));
      parts = cube(a, soaked && !RM() ? false : soaked);
      vis.innerHTML = ""; vis.append(parts[0], parts[1]);
      const SA = 6 * a * a, V = a * a * a;
      stats.innerHTML = `<div><span>Surface area</span><b>${SA} cm²</b></div><div><span>Volume</span><b>${V} cm³</b></div><div><span>SA : V</span><b>${(SA / V).toFixed(1)} : 1</b></div>`;
      const rows = SIZES.filter(n => st.tested[n] != null);
      tbl.innerHTML = rows.length ? `<table><thead><tr><th>Cube</th><th>SA : V</th><th>% of volume the acid reached</th></tr></thead><tbody>${rows.map(n => `<tr><td>${n} cm</td><td>${(6 / n).toFixed(1)} : 1</td><td><b>${st.tested[n]}%</b> <span class="barx"><i style="width:${st.tested[n]}%"></i></span></td></tr>`).join("")}</tbody></table>` : "";
      const k = Object.keys(st.tested).length;
      mark(0, k >= 3); mark(1, st.tested[1] != null && st.tested[6] != null);
      if (k >= 3 && st.tested[1] != null && st.tested[6] != null) api.done();
    }
    run.onclick = () => {
      run.disabled = true;
      const [, , pink, full, inner] = parts;
      const t0 = performance.now(), dur = RM() ? 0 : 1800;
      const step = t => {
        const f = dur ? Math.min(1, (t - t0) / dur) : 1, w = full - (full - inner) * f;
        pink.setAttribute("x", 80 - w / 2); pink.setAttribute("y", 80 - w / 2); pink.setAttribute("width", w); pink.setAttribute("height", w);
        if (f < 1) requestAnimationFrame(step);
        else { st.tested[a] = pct(a); api.save(); run.disabled = false; draw(true); }
      };
      requestAnimationFrame(step);
    };
    draw();
  };

  /* =============== 4. Across the membrane =============== */
  SIMS.membraneLab = (root, api) => {
    const st = api.store;
    const W = 400, H = 220, MX = 200, GAPS = [[14, 50], [66, 102], [118, 154], [170, 206]];
    let mode = "diff", P = [], raf = 0, eqT = 0, carrier = null, moving = null;
    const tabs = h("div", { class: "simtabs" });
    const M = { diff: "Diffusion: oxygen", act: "Active transport: mineral ions" };
    Object.entries(M).forEach(([k, n]) => tabs.append(h("button", { type: "button", class: "simtab", "data-k": k, onclick: () => start(k) }, n)));
    const svg = s("svg", { viewBox: `0 0 ${W} ${H + 24}`, class: "memsvg", role: "img", "aria-label": "Particles on both sides of a cell membrane" });
    const counts = h("div", { class: "memcount" });
    const ctrl = h("div", { class: "row" });
    const msg = h("div", { class: "simpanel", "aria-live": "polite" });
    root.append(h("p", { class: "simhelp" }, "Watch the particles on both sides of the membrane. Then switch to active transport and power the carrier protein yourself."), tabs, svg, counts, ctrl, msg);
    const mark = tasks(root, ["Diffusion: watch until dynamic equilibrium is reached", "Active transport: use ATP to move 5 ions into the cell"]);
    const layer = s("g"), dots = s("g");
    svg.append(s("text", { x: 100, y: H + 18, "text-anchor": "middle", class: "memlab" }, "Outside"), s("text", { x: 300, y: H + 18, "text-anchor": "middle", class: "memlab" }, "Inside the cell"), layer, dots);
    function drawMembrane() {
      layer.innerHTML = "";
      let y = 0;
      const solid = mode === "diff" ? GAPS : [];
      const segs = []; solid.forEach(([a, b]) => { segs.push([y, a]); y = b; }); segs.push([y, H]);
      segs.forEach(([a, b]) => layer.append(s("rect", { x: MX - 6, y: a, width: 12, height: b - a, class: "mem" })));
      if (mode === "act") {
        carrier = s("g", { class: "carrier" }, s("rect", { x: MX - 14, y: 92, width: 28, height: 36, rx: 10 }), s("text", { x: MX, y: 114, "text-anchor": "middle" }, "C"));
        layer.append(carrier);
      }
    }
    function mk(n, side, cls) { for (let i = 0; i < n; i++) P.push({ x: side ? MX + 20 + Math.random() * 170 : 10 + Math.random() * 170, y: 10 + Math.random() * (H - 20), a: Math.random() * 6.28, el: s("circle", { r: 5, class: cls }) }); }
    function start(k) {
      mode = k; cancelAnimationFrame(raf); P = []; dots.innerHTML = ""; eqT = 0; moving = null; ctrl.innerHTML = "";
      [...tabs.children].forEach(b => b.setAttribute("aria-selected", b.dataset.k === k));
      drawMembrane();
      if (k === "diff") { mk(30, 0, "o2"); mk(6, 1, "o2"); msg.innerHTML = "Oxygen is more concentrated outside. The membrane has gaps it can pass through."; ctrl.append(h("button", { type: "button", class: "btn alt", onclick: () => start("diff") }, "Reset")); }
      else {
        mk(8, 0, "ion"); mk(24, 1, "ion");
        msg.innerHTML = "Mineral ions are <b>more</b> concentrated inside the root cell than in the soil. They cannot diffuse in. Only the carrier protein (C) can move them, and it needs energy.";
        const atp = h("button", { type: "button", class: "btn gold", onclick: pump }, "Use 1 ATP ⚡"); ctrl.append(atp);
      }
      P.forEach(p => dots.append(p.el));
      let last = performance.now();
      const tick = t => { if (!svg.isConnected) return; const dt = Math.min(0.05, (t - last) / 1000); last = t; stepP(dt); raf = requestAnimationFrame(tick); };
      raf = requestAnimationFrame(tick);
      upd();
    }
    function inGap(y) { return mode === "diff" && GAPS.some(([a, b]) => y > a + 4 && y < b - 4); }
    function stepP(dt) {
      const sp = 300;
      P.forEach(p => {
        if (p === moving) return;
        p.a += (Math.random() - 0.5) * 0.5;
        let nx = p.x + Math.cos(p.a) * sp * dt, ny = p.y + Math.sin(p.a) * sp * dt;
        if (ny < 6 || ny > H - 6) { p.a = -p.a; ny = Math.max(6, Math.min(H - 6, ny)); }
        if (nx < 6 || nx > W - 6) { p.a = Math.PI - p.a; nx = Math.max(6, Math.min(W - 6, nx)); }
        const crosses = (p.x < MX) !== (nx < MX) || Math.abs(nx - MX) < 11;
        if (crosses && !inGap(ny)) { p.a = Math.PI - p.a; nx = p.x < MX ? Math.min(nx, MX - 11) : Math.max(nx, MX + 11); }
        p.x = nx; p.y = ny; p.el.setAttribute("cx", p.x.toFixed(1)); p.el.setAttribute("cy", p.y.toFixed(1));
      });
      if (mode === "diff") {
        const L = P.filter(p => p.x < MX).length, R = P.length - L;
        if (Math.abs(L - R) <= 4) eqT += dt; else eqT = Math.max(0, eqT - dt);
        if (eqT > 1.5 && !st.eq) { st.eq = 1; api.save(); msg.innerHTML = "<b>Dynamic equilibrium.</b> The concentrations are now about equal. Particles still cross in both directions, but there is no <b>net</b> movement. No energy was used: diffusion is passive."; }
        upd(L, R);
      }
    }
    function pump() {
      if (moving) return;
      const out = P.filter(p => p.x < MX).sort((a, b) => Math.hypot(a.x - MX, a.y - 110) - Math.hypot(b.x - MX, b.y - 110))[0];
      if (!out) return;
      moving = out; carrier.classList.add("on");
      const from = { x: out.x, y: out.y }, path = [[MX - 20, 110], [MX + 22, 110], [MX + 40 + Math.random() * 120, 30 + Math.random() * 160]];
      let i = 0, t0 = performance.now();
      const go = t => {
        const [tx, ty] = path[i], f = Math.min(1, (t - t0) / (RM() ? 1 : 350));
        out.el.setAttribute("cx", from.x + (tx - from.x) * f); out.el.setAttribute("cy", from.y + (ty - from.y) * f);
        if (f >= 1) { from.x = tx; from.y = ty; i++; t0 = t; }
        if (i < path.length) requestAnimationFrame(go);
        else { out.x = from.x; out.y = from.y; moving = null; carrier.classList.remove("on"); st.atp = (st.atp || 0) + 1; api.save(); upd(); }
      };
      requestAnimationFrame(go);
    }
    function upd(L, R) {
      if (L == null) { L = P.filter(p => p.x < MX).length; R = P.length - L; }
      counts.innerHTML = `<span>Outside: <b>${L}</b></span><span class="memmid">${mode === "diff" ? (st.eq && Math.abs(L - R) <= 6 ? "≈ equal" : L - R > 4 ? "net movement →" : "") : `ATP used: <b>${st.atp || 0}</b>`}</span><span>Inside: <b>${R}</b></span>`;
      mark(0, st.eq); mark(1, (st.atp || 0) >= 5);
      if (mode === "act" && (st.atp || 0) >= 5 && !st.actMsg) { st.actMsg = 1; msg.innerHTML = "<b>Active transport.</b> Every ion was moved <b>against</b> the concentration gradient (low → high) by a carrier protein, and every move used energy (ATP) from respiration."; }
      if (st.eq && (st.atp || 0) >= 5) api.done();
    }
    start("diff");
  };

  /* =============== 5. Potato osmosis lab =============== */
  SIMS.potatoLab = (root, api) => {
    const st = api.store; st.res = st.res || {};
    const CONC = [0, 0.1, 0.2, 0.4, 0.6, 0.8, 1.0];
    const NOISE = { 0: 0.6, 0.1: -0.4, 0.2: 0.5, 0.4: -0.3, 0.6: 0.4, 0.8: -0.5, 1: 0.3 };
    const model = c => Math.round((30 * Math.tanh(2.2 * (0.3 - c)) + (NOISE[c] || 0)) * 10) / 10;
    let c = 0;
    const chips = h("div", { class: "simtabs" });
    CONC.forEach(n => chips.append(h("button", { type: "button", class: "simtab", "data-c": n, onclick: () => { c = n; draw(); } }, n.toFixed(1) + " M")));
    const bench = h("div", { class: "bench" });
    const run = h("button", { type: "button", class: "btn gold" }, "Leave for 1 hour, then weigh");
    const graph = h("div", { class: "pgraph" });
    root.append(h("p", { class: "simhelp" }, "Each potato cylinder starts at 2.00 g. Put it in a sucrose solution, wait, then weigh it again. Plot as many concentrations as you like."), chips, bench, h("div", { class: "row" }, run), graph);
    const mark = tasks(root, ["Test at least 5 concentrations", "Get at least one cylinder that gained mass and one that lost mass"]);
    function beaker(conc, pctv) {
      const v = s("svg", { viewBox: "0 0 220 150", class: "beaker" });
      const shade = 0.12 + conc * 0.55;
      v.append(s("path", { d: "M40 20 v110 q0 10 10 10 h120 q10 0 10 -10 v-110", class: "glass" }),
        s("rect", { x: 42, y: 55, width: 136, height: 83, rx: 6, class: "soln", style: `fill-opacity:${shade}` }));
      const len = 80 * (1 + (pctv || 0) / 100);
      v.append(s("rect", { x: 110 - len / 2, y: 100, width: len, height: 22, rx: 6, class: "spud" }),
        s("text", { x: 110, y: 46, "text-anchor": "middle", class: "btxt" }, `${conc.toFixed(1)} mol/dm³ sucrose`));
      return v;
    }
    function draw(anim) {
      [...chips.children].forEach(b => b.setAttribute("aria-selected", Number(b.dataset.c) === c));
      const r = st.res[c];
      bench.innerHTML = "";
      bench.append(beaker(c, r), h("div", { class: "bstats" }, h("div", null, h("span", null, "Start"), h("b", null, "2.00 g")),
        h("div", null, h("span", null, "End"), h("b", null, r == null ? "?" : (2 * (1 + r / 100)).toFixed(2) + " g")),
        h("div", null, h("span", null, "% change"), h("b", { class: r == null ? "" : r > 0 ? "good" : "bad" }, r == null ? "?" : (r > 0 ? "+" : "") + r.toFixed(1) + "%"))));
      if (anim && !RM()) bench.querySelector(".spud").animate([{ width: "80px", x: "70px" }, {}], { duration: 900, easing: "ease-out" });
      plot();
      const ks = Object.keys(st.res), vals = Object.values(st.res);
      mark(0, ks.length >= 5); mark(1, vals.some(v => v > 0) && vals.some(v => v < 0));
      if (ks.length >= 5 && vals.some(v => v > 0) && vals.some(v => v < 0)) api.done();
    }
    function plot() {
      const W = 380, H = 220, L = 46, B = 30, T = 12, Rr = 12;
      const X = v => L + v * (W - L - Rr), Y = v => T + (25 - v) / 50 * (H - T - B);
      const g = s("svg", { viewBox: `0 0 ${W} ${H}`, class: "psvg", role: "img", "aria-label": "Graph of percentage change in mass against sucrose concentration" });
      for (let v = -25; v <= 25; v += 5) g.append(s("line", { x1: L, x2: W - Rr, y1: Y(v), y2: Y(v), class: v === 0 ? "zero" : "grid" }), s("text", { x: L - 6, y: Y(v) + 4, "text-anchor": "end", class: "tick" }, (v > 0 ? "+" : "") + v));
      for (let v = 0; v <= 1.001; v += 0.2) g.append(s("text", { x: X(v), y: H - B + 16, "text-anchor": "middle", class: "tick" }, v.toFixed(1)));
      g.append(s("text", { x: (W + L) / 2, y: H - 2, "text-anchor": "middle", class: "axl" }, "Sucrose concentration (mol/dm³)"),
        s("text", { x: 12, y: (H - B) / 2, "text-anchor": "middle", class: "axl", transform: `rotate(-90 12 ${(H - B) / 2})` }, "% change in mass"));
      const pts = Object.entries(st.res).map(([k, v]) => [Number(k), v]).sort((a, b) => a[0] - b[0]);
      if (pts.length > 1) g.append(s("polyline", { points: pts.map(([x, y]) => X(x) + "," + Y(y)).join(" "), class: "pline" }));
      pts.forEach(([x, y]) => g.append(s("circle", { cx: X(x), cy: Y(y), r: 5, class: y > 0 ? "pgain" : "ploss" })));
      graph.innerHTML = ""; graph.append(g);
    }
    run.onclick = () => { st.res[c] = model(c); api.save(); draw(true); };
    draw();
  };

  /* =============== 6. Cells in different solutions =============== */
  SIMS.solutionViewer = (root, api) => {
    const st = api.store; st.seen = st.seen || {};
    const SOL = {
      hypo: { n: "Pure water", rbc: "Water moves <b>in</b> by osmosis. The red blood cell swells… and with no cell wall to hold it, it bursts.", pl: "Water moves <b>in</b> by osmosis. The vacuole swells and pushes the membrane hard against the cell wall. The wall stops the cell bursting." },
      iso: { n: "Same concentration as the cell", rbc: "Water moves in and out at the same rate: no <b>net</b> movement. The red blood cell keeps its normal shape.", pl: "No net movement of water. The vacuole is not full, so the cell is soft and not pushing on its wall." },
      hyper: { n: "Concentrated salt solution", rbc: "Water moves <b>out</b> by osmosis. The red blood cell shrinks and its surface becomes spiky.", pl: "Water moves <b>out</b> by osmosis. The vacuole shrinks and the membrane pulls away from the cell wall." }
    };
    let k = "iso";
    const tabs = h("div", { class: "simtabs" });
    Object.entries(SOL).forEach(([kk, v]) => tabs.append(h("button", { type: "button", class: "simtab", "data-k": kk, onclick: () => { k = kk; draw(); } }, v.n)));
    const grid = h("div", { class: "solgrid" });
    root.append(h("p", { class: "simhelp" }, "Put an animal cell and a plant cell into each solution and compare what happens."), tabs, grid);
    const mark = tasks(root, ["Try all three solutions"]);
    function blob(r, bumps, amp) {
      let d = ""; for (let i = 0; i <= 72; i++) { const t = i / 72 * Math.PI * 2, rr = r + (bumps ? amp * Math.max(0, Math.sin(t * bumps)) : 0); d += (i ? "L" : "M") + (80 + rr * Math.cos(t)).toFixed(1) + " " + (80 + rr * Math.sin(t)).toFixed(1); }
      return d + "Z";
    }
    function arrows(dir) {
      const g = s("g", { class: "warrows " + dir });
      [[80, 8, 90], [152, 80, 180], [80, 152, 270], [8, 80, 0]].forEach(([x, y, rot]) => {
        if (dir === "both") g.append(s("path", { d: "M2 -6 L10 0 L2 6 M-2 -6 L-10 0 L-2 6", transform: `translate(${x} ${y}) rotate(${rot})` }));
        else g.append(s("path", { d: "M-2 -6 L6 0 L-2 6 M-10 0 H6", transform: `translate(${x} ${y}) rotate(${dir === "in" ? rot : rot + 180})` }));
      });
      return g;
    }
    function rbc() {
      const v = s("svg", { viewBox: "0 0 160 160", class: "solsvg" });
      v.append(s("rect", { x: 0, y: 0, width: 160, height: 160, rx: 14, class: "bath " + k }));
      if (k === "hypo") {
        const c = s("path", { d: blob(46), class: "rbc" }); v.append(c, arrows("in"));
        if (!RM()) { c.animate([{ transform: "scale(1)" }, { transform: "scale(1.35)" }], { duration: 1100, fill: "forwards", easing: "ease-in" });
          setTimeout(() => { if (!c.isConnected) return; c.setAttribute("class", "rbc burst"); }, 1150); }
        else c.setAttribute("class", "rbc burst");
        c.style.transformOrigin = "80px 80px";
      } else if (k === "iso") v.append(s("path", { d: blob(46), class: "rbc" }), s("circle", { cx: 80, cy: 80, r: 18, class: "rbcin" }), arrows("both"));
      else v.append(s("path", { d: blob(34, 14, 6), class: "rbc" }), arrows("out"));
      return v;
    }
    function plant() {
      const v = s("svg", { viewBox: "0 0 160 160", class: "solsvg" });
      v.append(s("rect", { x: 0, y: 0, width: 160, height: 160, rx: 14, class: "bath " + k }), s("rect", { x: 22, y: 22, width: 116, height: 116, rx: 6, class: "wall pwall" }));
      const m = k === "hyper" ? 26 : k === "iso" ? 31 : 28, inset = k === "hyper" ? 48 : 31;
      const mem = s("rect", { x: k === "hyper" ? inset - 8 : 28, y: k === "hyper" ? inset - 8 : 28, width: k === "hyper" ? 160 - 2 * (inset - 8) : 104, height: k === "hyper" ? 160 - 2 * (inset - 8) : 104, rx: k === "hyper" ? 20 : 4, class: "memb cyto" + (k === "iso" ? " soft" : "") });
      const vac = k === "hypo" ? [36, 88] : k === "iso" ? [50, 60] : [56, 48];
      v.append(mem, s("rect", { x: vac[0], y: vac[0], width: vac[1], height: vac[1], rx: 16, class: "vac" }), arrows(k === "hypo" ? "in" : k === "iso" ? "both" : "out"));
      void m; return v;
    }
    function draw() {
      [...tabs.children].forEach(b => b.setAttribute("aria-selected", b.dataset.k === k));
      st.seen[k] = 1; api.save();
      grid.innerHTML = "";
      grid.append(h("figure", null, rbc(), h("figcaption", null, h("b", null, "Red blood cell"), h("span", { html: SOL[k].rbc }))),
        h("figure", null, plant(), h("figcaption", null, h("b", null, "Plant cell"), h("span", { html: SOL[k].pl }))));
      const n = Object.keys(st.seen).length; mark(0, n >= 3);
      if (n >= 3) api.done();
    }
    draw();
  };

  window.SIMS = SIMS;
})();
