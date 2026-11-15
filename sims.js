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

  /* =============== Plot grid (shared: graph practice sim + plot questions) ===============
     PlotGrid(root, { xs, xLabels, xMin, xMax, xTitle, yTitle, yMin, yMax, yMajor, yMinor, title,
                      values, onChange(values), readOnly, correct, good }) */
  function PlotGrid(root, o) {
    const vals = (o.values || o.xs.map(() => null)).slice();
    const W = 600, H = 420, L = 70, Rr = 18, T = o.title ? 34 : 14, B = 64;
    const xMin = o.xMin ?? 0, xMax = o.xMax ?? o.xs[o.xs.length - 1];
    const X = v => L + (v - xMin) / (xMax - xMin) * (W - L - Rr);
    const Y = v => T + (o.yMax - v) / (o.yMax - o.yMin) * (H - T - B);
    const yOf = py => o.yMin + (H - B - py) / (H - T - B) * (o.yMax - o.yMin);
    let sel = -1;
    const wrap = h("div", { class: "pgrid" });
    const svg = s("svg", { viewBox: `0 0 ${W} ${H}`, class: "pgsvg" + (o.readOnly ? "" : " live"), role: "img", "aria-label": `Graph grid: ${o.yTitle} against ${o.xTitle}` });
    const pts = s("g");
    function base() {
      if (o.title) svg.append(s("text", { x: (W + L) / 2, y: 20, "text-anchor": "middle", class: "pgtitle" }, o.title));
      const steps = Math.round((o.yMax - o.yMin) / o.yMinor);
      for (let i = 0; i <= steps; i++) {
        const v = +(o.yMin + i * o.yMinor).toFixed(6), major = Math.abs(v / o.yMajor - Math.round(v / o.yMajor)) < 1e-6;
        svg.append(s("line", { x1: L, x2: W - Rr, y1: Y(v), y2: Y(v), class: v === 0 ? "pz" : major ? "pmaj" : "pmin" }));
        if (major) svg.append(s("text", { x: L - 8, y: Y(v) + 4, "text-anchor": "end", class: "ptick" }, (v > 0 ? "+" + v : v < 0 ? "−" + Math.abs(v) : "0")));
      }
      const xMinor = o.xMinor || (o.xs[1] - o.xs[0]) / 5;
      for (let v = xMin; v <= xMax + 1e-9; v += xMinor) svg.append(s("line", { x1: X(v), x2: X(v), y1: Y(o.yMax), y2: Y(o.yMin), class: "pmin" }));
      o.xs.forEach((x, i) => svg.append(s("line", { x1: X(x), x2: X(x), y1: Y(o.yMax), y2: Y(o.yMin), class: "pmaj" }),
        s("text", { x: X(x), y: H - B + 18, "text-anchor": "middle", class: "ptick" }, o.xLabels ? o.xLabels[i] : String(x))));
      svg.append(s("line", { x1: L, x2: L, y1: Y(o.yMax), y2: Y(o.yMin), class: "paxis" }),
        s("text", { x: (W + L) / 2, y: H - 14, "text-anchor": "middle", class: "paxl" }, o.xTitle),
        s("text", { x: 16, y: (T + H - B) / 2, "text-anchor": "middle", class: "paxl", transform: `rotate(-90 16 ${(T + H - B) / 2})` }, o.yTitle));
      svg.append(pts);
    }
    function cross(x, y, cls) {
      const g = s("g", { class: "px " + cls, transform: `translate(${x} ${y})` });
      g.append(s("path", { d: "M-7 -7 L7 7 M-7 7 L7 -7" }));
      return g;
    }
    const status = h("div", { class: "pstatus" });
    function draw() {
      pts.innerHTML = "";
      if (o.correct) o.correct.forEach((y, i) => pts.append(s("circle", { cx: X(o.xs[i]), cy: Y(y), r: 8, class: "pghost" })));
      vals.forEach((y, i) => {
        if (typeof y !== "number") return;
        const cls = o.good ? (o.good[i] ? "good" : "bad") : (o.marks ? (o.marks[i] === true ? "good" : o.marks[i] === false ? "bad" : "") : "") + (i === sel ? " sel" : "");
        pts.append(cross(X(o.xs[i]), Y(y), cls));
      });
      if (!o.readOnly) {
        status.innerHTML = "";
        o.xs.forEach((x, i) => status.append(h("button", { type: "button", class: "pchip" + (typeof vals[i] === "number" ? " on" : "") + (i === sel ? " sel" : ""),
          "aria-pressed": i === sel, onclick: () => { sel = i; draw(); } }, (typeof vals[i] === "number" ? "✓ " : "") + (o.xLabels ? o.xLabels[i] : x))));
      }
    }
    function emit() { if (o.onChange) o.onChange(vals.slice()); }
    if (!o.readOnly) {
      svg.addEventListener("click", e => {
        const pt = svg.createSVGPoint(); pt.x = e.clientX; pt.y = e.clientY;
        const p = pt.matrixTransform(svg.getScreenCTM().inverse());
        if (p.y < Y(o.yMax) - 10 || p.y > Y(o.yMin) + 10 || p.x < L - 20) return;
        let i = 0; o.xs.forEach((x, j) => { if (Math.abs(X(x) - p.x) < Math.abs(X(o.xs[i]) - p.x)) i = j; });
        const y = Math.max(o.yMin, Math.min(o.yMax, Math.round(yOf(p.y) * 10) / 10));
        vals[i] = y; sel = i; draw(); emit();
      });
    }
    base(); wrap.append(svg);
    if (!o.readOnly) {
      const nudge = d => { if (sel < 0 || typeof vals[sel] !== "number") return; vals[sel] = Math.max(o.yMin, Math.min(o.yMax, Math.round((vals[sel] + d) * 10) / 10)); draw(); emit(); };
      wrap.append(h("div", { class: "pctrl" }, h("span", { class: "note" }, "Selected cross:"), status,
        h("button", { type: "button", class: "btn ghost small", "aria-label": "Move selected cross up", onclick: () => nudge(o.yMinor / 2) }, "▲"),
        h("button", { type: "button", class: "btn ghost small", "aria-label": "Move selected cross down", onclick: () => nudge(-o.yMinor / 2) }, "▼"),
        h("button", { type: "button", class: "btn ghost small", onclick: () => { if (sel < 0) return; vals[sel] = null; draw(); emit(); } }, "Remove")));
    }
    root.innerHTML = ""; root.append(wrap); draw();
    return { set marks(m) { o.marks = m; draw(); }, values: () => vals.slice() };
  }
  window.PlotGrid = PlotGrid;

  /* =============== Graph practice: plot negative values =============== */
  SIMS.graphPlot = (root, api) => {
    const st = api.store;
    const D = [[0, 15.0], [0.2, 6.2], [0.4, -5.1], [0.6, -12.2], [0.8, -17.0], [1.0, -19.2]];
    st.vals = st.vals || D.map(() => null);
    root.append(h("p", { class: "simhelp", html: "These are the potato means from Lesson 6. Plot each one with a cross. The zero line is in the <b>middle</b> of the grid: gains go above it, losses go below it. Each small square on the y-axis is <b>1%</b>." }),
      h("div", { class: "tbl" }, h("table", null, h("thead", null, h("tr", null, h("th", null, "Sucrose (mol/dm³)"), ...D.map(d => h("th", null, d[0].toFixed(1))))),
        h("tbody", null, h("tr", null, h("td", null, "Mean % change"), ...D.map(d => h("td", null, (d[1] > 0 ? "+" : "") + d[1].toFixed(1))))))));
    const host = h("div");
    const fb = h("div", { class: "simfb", "aria-live": "polite" });
    const chk = h("button", { type: "button", class: "btn" }, "Check my points");
    root.append(host, h("div", { class: "row" }, chk), fb);
    const mark = tasks(root, ["Plot all six means", "Get every cross within half a small square (press Check)"]);
    const g = PlotGrid(host, { xs: D.map(d => d[0]), xLabels: D.map(d => d[0].toFixed(1)), xMin: 0, xMax: 1.0, xMinor: 0.04, xTitle: "Sucrose concentration (mol/dm³)", yTitle: "Mean % change in mass (%)",
      yMin: -20, yMax: 20, yMajor: 5, yMinor: 1, values: st.vals, onChange: v => { st.vals = v; api.save(); g.marks = null; mark(0, v.every(x => typeof x === "number")); fb.textContent = ""; } });
    mark(0, st.vals.every(x => typeof x === "number"));
    chk.onclick = () => {
      const v = g.values();
      if (!v.every(x => typeof x === "number")) { fb.innerHTML = "<b>Plot all six points first.</b>"; return; }
      const m = v.map((y, i) => Math.abs(y - D[i][1]) <= 0.6);
      g.marks = m;
      const bad = m.map((ok, i) => ok ? null : D[i]).filter(Boolean);
      if (!bad.length) { fb.innerHTML = "<b>All six are accurate.</b> Notice how the points go below the zero line once the potato starts losing mass."; mark(1, true); api.done(); return; }
      const tip = bad.some(d => d[1] < 0) ? " For a negative value, count the small squares <b>down from zero</b>: −12.2 is 12 squares and a bit below the zero line." : " Count the small squares up from zero.";
      fb.innerHTML = `<b>${bad.length} cross${bad.length > 1 ? "es are" : " is"} not accurate yet</b> (red): ${bad.map(d => d[0].toFixed(1)).join(", ")} mol/dm³. Click the right place to move it, then check again.${tip}`;
    };
  };


  /* ---------- shared: label a diagram with numbered markers and leader lines ---------- */
  function labeller(stage, panel, found, cfg, onChange) {
    const W = cfg.w || 400, H = cfg.h || 260;
    const pool = cfg.pool || cfg.spots.map(p => p.n);
    function draw() {
      stage.innerHTML = "";
      const narrow = (stage.clientWidth || window.innerWidth) < 600;
      const svg = s("svg", { viewBox: narrow ? `-46 0 ${W + 92} ${H}` : `-${cfg.pad || 235} 0 ${W + 2 * (cfg.pad || 235)} ${H}`, class: "cellsvg " + (cfg.cls || ""), role: "img", "aria-label": cfg.label || "Diagram" });
      const g = s("g"), add = g.append.bind(g); g.append = (...k) => add(...k.flat()); cfg.draw(g); svg.append(g);
      const pos = {};
      [0, 1].forEach(side => {
        const list = cfg.spots.map((p, j) => ({ p, j })).filter(({ p }) => (p.x >= W / 2) === !!side).sort((a, b) => a.p.y - b.p.y);
        let y = -1e9; list.forEach(o => { y = Math.max(o.p.y, y + 30); o.ly = y; });
        const over = list.length ? list[list.length - 1].ly - (H - 14) : 0; if (over > 0) list.forEach(o => o.ly -= over);
        list.forEach(o => pos[o.j] = { lx: side ? W + 30 : -30, ly: Math.max(14, o.ly) });
      });
      cfg.spots.forEach((p, j) => {
        const done = !!found[j], { lx, ly } = pos[j], right = lx > W / 2;
        svg.append(s("g", { class: "lead" + (done ? " ok" : "") }, s("line", { x1: lx + (right ? -12 : 12), y1: ly, x2: p.x, y2: p.y }), s("circle", { cx: p.x, cy: p.y, r: 6 })));
      });
      cfg.spots.forEach((p, j) => {
        const done = !!found[j], { lx, ly } = pos[j], right = lx > W / 2;
        const hs = s("g", { class: "hs" + (done ? " ok" : ""), tabindex: 0, role: "button", "aria-label": done ? p.n : "Structure " + (j + 1) },
          s("circle", { cx: lx, cy: ly, r: 12 }), s("text", { x: lx, y: ly + 4.5, "text-anchor": "middle" }, done ? "✓" : String(j + 1)));
        if (done && !narrow) hs.append(s("text", { x: lx + (right ? 18 : -18), y: ly + 4.5, class: "hslab", "text-anchor": right ? "start" : "end" }, p.n));
        const ask = () => quiz(j, hs);
        hs.addEventListener("click", ask); hs.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); ask(); } });
        svg.append(hs);
      });
      stage.append(svg);
      onChange(cfg.spots.filter((_, j) => found[j]).length, cfg.spots.length);
    }
    function quiz(j, hs) {
      const p = cfg.spots[j];
      if (found[j]) { panel.innerHTML = `<b>${p.n}</b>${p.info ? " · " + p.info : ""}`; return; }
      hs.ownerSVGElement.querySelectorAll(".hs.sel").forEach(x => x.classList.remove("sel")); hs.classList.add("sel");
      const opts = shuffle([p.n, ...shuffle(pool.filter(n => n !== p.n)).slice(0, 2)]);
      panel.innerHTML = "";
      panel.append(h("b", null, cfg.question ? cfg.question(j) : `What is structure ${j + 1}?`), h("div", { class: "simopts" }, opts.map(o => h("button", { type: "button", class: "simopt", onclick: e => {
        if (o === p.n) { found[j] = 1; draw(); panel.innerHTML = `<span class="good">✓ <b>${p.n}</b></span>${p.info ? " · " + p.info : ""}`; }
        else { const b = e.currentTarget; b.classList.remove("no"); void b.offsetWidth; b.classList.add("no"); b.disabled = true; }
      } }, o))));
    }
    draw();
  }

  /* =============== 7. Sense organs + CNS / PNS map =============== */
  SIMS.senseMap = (root, api) => {
    const st = api.store; st.found = st.found || {}; st.seen = st.seen || {};
    const stage = h("div", { class: "cellstage" }), panel = h("div", { class: "simpanel", "aria-live": "polite" }), count = h("div", { class: "simcount" });
    root.append(h("p", { class: "simhelp" }, "Part 1: tap each numbered receptor and choose the stimulus it detects."), stage, panel, count);
    const body = h("div", { class: "nsbody" });
    const btns = h("div", { class: "simtabs" });
    const info = h("div", { class: "simpanel", "aria-live": "polite" }, "Part 2: switch between the two parts of the nervous system.");
    root.append(h("p", { class: "simhelp", style: "margin-top:14px" }, "Part 2: show where each part of the nervous system is."), btns, body, info);
    const mark = tasks(root, ["Identify the stimulus for all six receptors", "Show the central nervous system (CNS)", "Show the peripheral nervous system (PNS)"]);
    const POOL = ["Light", "Sound", "Change in position", "Chemicals in food", "Chemicals in the air", "Touch, pressure, pain and temperature"];
    const cfg = {
      label: "Head and hand with receptors", w: 400, h: 260, pad: 350, pool: POOL,
      question: j => `What stimulus is detected at receptor ${j + 1}?`,
      draw: g => g.append(
        s("path", { d: "M70 210 C 50 150, 60 70, 130 40 C 190 18, 250 40, 262 95 L 284 128 L 262 136 C 266 160, 262 178, 246 186 C 236 206, 200 214, 170 214 L 165 250 L 92 250 Z", class: "skin" }),
        s("ellipse", { cx: 228, cy: 100, rx: 13, ry: 8, class: "eyew" }), s("circle", { cx: 232, cy: 100, r: 5, class: "iris" }),
        s("path", { d: "M216 92 q 12 -10 24 0", class: "lid" }),
        s("path", { d: "M128 102 C 104 96, 104 150, 128 146 C 120 136, 120 112, 128 102 Z", class: "earo" }),
        s("path", { d: "M152 128 m -7 0 a 7 7 0 1 0 14 0 a 4 4 0 1 0 -8 0", class: "coch" }),
        [0, 1, 2].map(i => s("ellipse", { cx: 150 + i * 4, cy: 110 - i * 3, rx: 7, ry: 4, class: "canal", transform: `rotate(${i * 50 - 40} ${150 + i * 4} ${110 - i * 3})` })),
        s("path", { d: "M236 120 C 252 112, 270 118, 280 126", class: "nasal" }),
        s("path", { d: "M222 170 q 16 10 30 0", class: "lips" }), s("path", { d: "M222 172 q 14 6 26 -1", class: "tongue" }),
        s("g", { transform: "translate(300 150)" },
          s("rect", { x: 0, y: 30, width: 50, height: 60, rx: 14, class: "skin" }),
          [0, 1, 2, 3].map(i => s("rect", { x: 2 + i * 12, y: 0, width: 10, height: 40, rx: 5, class: "skin" })),
          s("rect", { x: -14, y: 40, width: 18, height: 10, rx: 5, class: "skin", transform: "rotate(-30 -5 45)" }))),
      spots: [
        { x: 236, y: 100, n: "Light", info: "Sense: sight · Receptors: retina, at the back of the eye" },
        { x: 152, y: 130, n: "Sound", info: "Sense: hearing · Receptors: cochlea, in the inner ear" },
        { x: 152, y: 106, n: "Change in position", info: "Sense: balance · Receptors: semicircular canals, in the inner ear" },
        { x: 236, y: 172, n: "Chemicals in food", info: "Sense: taste · Receptors: taste buds on the tongue" },
        { x: 262, y: 118, n: "Chemicals in the air", info: "Sense: smell · Receptors: lining at the top of the nasal cavity" },
        { x: 307, y: 156, n: "Touch, pressure, pain and temperature", info: "Sense: touch · Receptors: all over the skin, most in the fingertips and lips" }]
    };
    let nF = 0;
    const done = () => { mark(0, nF === 6); mark(1, st.seen.cns); mark(2, st.seen.pns); if (nF === 6 && st.seen.cns && st.seen.pns) api.done(); };
    labeller(stage, panel, st.found, cfg, (n, t) => { nF = n; count.textContent = `Identified ${n} of ${t}`; api.save(); done(); });
    /* body map */
    const svg = s("svg", { viewBox: "0 0 240 300", class: "nssvg", role: "img", "aria-label": "Human body showing the nervous system" });
    svg.append(
      s("circle", { cx: 120, cy: 40, r: 28, class: "bodyo" }),
      s("path", { d: "M92 76 h56 l18 110 h-20 l-6 100 h-16 l-4 -90 l-4 90 h-16 l-6 -100 h-20 Z", class: "bodyo" }),
      s("path", { d: "M92 80 l-34 90 M148 80 l34 90", class: "limb" }));
    const cns = s("g", { class: "cns" }, s("ellipse", { cx: 120, cy: 36, rx: 20, ry: 15 }), s("path", { d: "M120 52 V 182" }));
    const pns = s("g", { class: "pns" }, s("path", { d: "M120 90 L 70 150 L 60 172 M120 90 L 170 150 L 180 172 M120 110 L 96 120 M120 110 L 144 120 M120 182 L 104 280 M120 182 L 136 280 M120 140 L 100 150 M120 140 L 140 150" }));
    svg.append(pns, cns); body.append(svg);
    const TXT = {
      cns: "<b>Central nervous system (CNS)</b>: the brain and spinal cord. It is the coordinator: it receives impulses, processes the information and decides on a response.",
      pns: "<b>Peripheral nervous system (PNS)</b>: all the nerves that connect the CNS to every part of the body. Sensory neurones carry impulses to the CNS; motor neurones carry them back out to muscles and glands."
    };
    [["cns", "Show the CNS"], ["pns", "Show the PNS"]].forEach(([k, t]) => btns.append(h("button", { type: "button", class: "simtab", "data-k": k, onclick: () => {
      svg.classList.toggle("showC", k === "cns"); svg.classList.toggle("showP", k === "pns");
      [...btns.children].forEach(b => b.setAttribute("aria-selected", b.dataset.k === k));
      info.innerHTML = TXT[k]; st.seen[k] = 1; api.save(); done();
    } }, t)));
    done();
  };

  /* =============== 8. Stimulus → response pathway =============== */
  SIMS.pathwayBuilder = (root, api) => {
    const st = api.store; st.ran = st.ran || {};
    const STAGES = ["Stimulus", "Receptor", "Sensory neurone", "Coordinator (CNS)", "Motor neurone", "Effector", "Response"];
    const SC = {
      pan: { n: "Hot pan", t: 0.05, cells: ["Heat from the pan", "Temperature receptors in the skin", "Sensory neurone", "Spinal cord (relay neurone)", "Motor neurone", "Arm muscle", "Hand pulls away"], note: "The spinal cord coordinates this response, with no thinking involved. The pathway is short, so it is very fast: you pull away before the brain even registers pain." },
      light: { n: "Red light", t: 0.75, cells: ["Red traffic light", "Light receptors in the retina", "Sensory neurone", "Brain", "Motor neurone", "Leg muscle", "Foot presses the brake"], note: "The brain has to process the information and decide to stop, so this takes much longer than the hot pan." },
      phone: { n: "Red light + phone", t: 1.5, cells: ["Red traffic light", "Light receptors in the retina", "Sensory neurone", "Brain (distracted)", "Motor neurone", "Leg muscle", "Foot presses the brake"], note: "The driver's attention is on the phone, so the light is noticed later and the brain takes longer to decide. At 100 km/h a car travels about 28 m every second: about 21 m before braking starts when focused, but about 42 m when distracted." },
      save: { n: "Penalty save", t: 0.4, cells: ["Moving ball (light)", "Light receptors in the retina", "Sensory neurones", "Brain", "Motor neurones", "Leg and arm muscles", "Keeper dives"], note: "The brain must work out where the ball is going and choose a movement. Practice makes it faster, but it is still slower than an automatic response coordinated by the spinal cord." }
    };
    st.placed = st.placed || 0;
    const slots = h("ol", { class: "pslots" });
    const chips = h("div", { class: "pchips" });
    const msg = h("div", { class: "simpanel", "aria-live": "polite" });
    const tabs = h("div", { class: "simtabs" });
    const timer = h("div", { class: "ptimer" });
    root.append(h("p", { class: "simhelp" }, "Step 1: tap the stages in the right order to build the pathway. Step 2: run real scenarios through it and compare how long they take."), slots, chips, msg, tabs, timer);
    const mark = tasks(root, ["Build the pathway in the right order", "Run the hot pan", "Run the red light", "Run the red light with a distracted driver"]);
    STAGES.forEach((t, i) => slots.append(h("li", { class: "pslot" }, h("b", null, i < st.placed ? t : "?"), h("small", null, ""))));
    const order = shuffle(STAGES.map((t, i) => i));
    function drawChips() {
      chips.innerHTML = "";
      order.filter(i => i >= st.placed).forEach(i => chips.append(h("button", { type: "button", class: "simopt", onclick: e => {
        if (i === st.placed) {
          slots.children[i].querySelector("b").textContent = STAGES[i]; slots.children[i].classList.add("in");
          st.placed++; api.save(); msg.innerHTML = st.placed === 7 ? "<span class='good'>✓ Pathway complete.</span> Every response to a stimulus follows these seven stages. Now run a scenario." : `✓ ${STAGES[i]}`; drawChips(); upd();
        } else { const b = e.currentTarget; b.classList.remove("no"); void b.offsetWidth; b.classList.add("no"); msg.textContent = `Not yet. What comes straight after “${st.placed ? STAGES[st.placed - 1] : "the start"}”?`; }
      } }, STAGES[i])));
    }
    let busy = false;
    Object.entries(SC).forEach(([k, v]) => tabs.append(h("button", { type: "button", class: "simtab", "data-k": k, onclick: () => run(k) }, "▶ " + v.n)));
    function run(k) {
      if (st.placed < 7) { msg.textContent = "Build the pathway first (step 1)."; return; }
      if (busy) return; busy = true;
      const v = SC[k];
      [...tabs.children].forEach(b => b.setAttribute("aria-selected", b.dataset.k === k));
      [...slots.children].forEach((li, i) => { li.classList.remove("lit"); li.querySelector("small").textContent = v.cells[i]; });
      const step = RM() ? 0 : Math.max(120, v.t * 900 / 7 * 2);
      let i = 0;
      const tick = () => {
        if (i > 0) slots.children[i - 1].classList.remove("hot");
        if (i < 7) { slots.children[i].classList.add("lit", "hot"); timer.textContent = `⏱ ${(v.t * (i + 1) / 7).toFixed(2)} s`; i++; setTimeout(tick, step); }
        else { timer.innerHTML = `⏱ about <b>${v.t} s</b> from stimulus to response`; msg.innerHTML = v.note; st.ran[k] = 1; api.save(); busy = false; upd(); }
      };
      tick();
    }
    function upd() {
      mark(0, st.placed >= 7); mark(1, st.ran.pan); mark(2, st.ran.light); mark(3, st.ran.phone);
      if (st.placed >= 7 && st.ran.pan && st.ran.light && st.ran.phone) api.done();
    }
    if (st.placed) [...slots.children].forEach((li, i) => { if (i < st.placed) li.classList.add("in"); });
    drawChips(); upd();
  };

  /* =============== 9. Neurone lab =============== */
  SIMS.neuronLab = (root, api) => {
    const st = api.store; st.found = st.found || {};
    const stage = h("div", { class: "cellstage" }), panel = h("div", { class: "simpanel", "aria-live": "polite" }), count = h("div", { class: "simcount" });
    root.append(h("p", { class: "simhelp" }, "Part 1: this is a motor neurone. Tap each number and choose the name of the part."), stage, panel, count);
    const race = h("div", { class: "race" }), rmsg = h("div", { class: "simpanel", "aria-live": "polite" });
    const go = h("button", { type: "button", class: "btn gold" }, "Send an impulse along both axons");
    root.append(h("p", { class: "simhelp", style: "margin-top:14px" }, "Part 2: the impulse race. One axon has a myelin sheath, the other does not."), race, h("div", { class: "row" }, go), rmsg);
    const mark = tasks(root, ["Label all six parts of the motor neurone", "Run the impulse race"]);
    const cfg = {
      label: "Motor neurone", w: 400, h: 200, pool: ["Dendrite", "Cell body", "Nucleus", "Axon", "Myelin sheath", "Axon terminal", "Receptor", "Synapse"],
      draw: g => {
        g.append([[-1, -1], [-1, 1], [1, -1], [0, -1.3], [0, 1.3], [-1.3, 0]].map(([dx, dy]) => s("path", { d: `M60 100 l ${dx * 34} ${dy * 30} l ${dx * 10 - 6} ${dy * 4 + 6} M${60 + dx * 34} ${100 + dy * 30} l ${dx * 4 + 8} ${dy * 12}`, class: "dend" })));
        g.append(s("circle", { cx: 60, cy: 100, r: 24, class: "soma" }), s("circle", { cx: 60, cy: 100, r: 9, class: "nucl" }));
        g.append(s("path", { d: "M84 100 H 330", class: "axon" }));
        g.append([0, 1, 2, 3, 4].map(i => s("rect", { x: 100 + i * 44, y: 91, width: 36, height: 18, rx: 9, class: "myel" })));
        g.append(s("path", { d: "M330 100 l 22 -26 M330 100 l 26 0 M330 100 l 22 26 M352 74 l 8 -4 M356 100 l 8 0 M352 126 l 8 4", class: "axon" }));
        g.append([[360, 70], [364, 100], [360, 130]].map(([x, y]) => s("circle", { cx: x, cy: y, r: 4, class: "term" })));
        g.append(s("rect", { x: 368, y: 60, width: 28, height: 80, rx: 8, class: "muscle" }));
      },
      spots: [
        { x: 30, y: 72, n: "Dendrite", info: "receives impulses from other neurones" },
        { x: 52, y: 118, n: "Cell body", info: "contains the nucleus and most of the cytoplasm" },
        { x: 60, y: 100, n: "Nucleus", info: "controls the cell" },
        { x: 142, y: 100, n: "Myelin sheath", info: "a fatty layer that insulates the axon and speeds up the impulse" },
        { x: 327, y: 100, n: "Axon", info: "carries the impulse away from the cell body, can be over 1 m long" },
        { x: 362, y: 72, n: "Axon terminal", info: "releases neurotransmitters to the next cell (here, a muscle fibre)" }]
    };
    let nF = 0;
    const upd = () => { mark(0, nF === 6); mark(1, st.raced); if (nF === 6 && st.raced) api.done(); };
    labeller(stage, panel, st.found, cfg, (n, t) => { nF = n; count.textContent = `Labelled ${n} of ${t}`; api.save(); upd(); });
    /* race */
    const rs = s("svg", { viewBox: "0 0 400 130", class: "racesvg", role: "img", "aria-label": "Two axons, one with myelin and one without" });
    rs.append(s("text", { x: 4, y: 22, class: "rlab" }, "With myelin sheath"), s("path", { d: "M10 42 H 390", class: "axon" }),
      [0, 1, 2, 3, 4, 5, 6].map(i => s("rect", { x: 14 + i * 54, y: 33, width: 46, height: 18, rx: 9, class: "myel" })),
      s("text", { x: 4, y: 88, class: "rlab" }, "Without myelin sheath"), s("path", { d: "M10 108 H 390", class: "axon" }));
    const d1 = s("circle", { cx: 10, cy: 42, r: 7, class: "imp" }), d2 = s("circle", { cx: 10, cy: 108, r: 7, class: "imp" });
    rs.append(d1, d2); race.append(rs);
    go.onclick = () => {
      go.disabled = true; rmsg.textContent = "Impulses travelling…";
      const t0 = performance.now(), T1 = RM() ? 1 : 900, T2 = RM() ? 1 : 3600;
      const nodes = [10, 64, 118, 172, 226, 280, 334, 390];
      const f = t => {
        const e = t - t0, p1 = Math.min(1, e / T1), p2 = Math.min(1, e / T2);
        d1.setAttribute("cx", nodes[Math.min(7, Math.floor(p1 * 7.999))]); d2.setAttribute("cx", 10 + 380 * p2);
        if (p2 < 1) requestAnimationFrame(f);
        else { go.disabled = false; st.raced = 1; api.save(); upd();
          rmsg.innerHTML = "<b>The myelinated axon wins easily.</b> The myelin sheath insulates the axon, so the impulse jumps from gap to gap instead of travelling along every part of the membrane. In humans, impulses in myelinated neurones travel at up to about 100 m/s, compared with about 1 m/s in unmyelinated ones. That speed matters for survival: think of pulling away from a hot pan."; }
      };
      requestAnimationFrame(f);
    };
    upd();
  };

  window.SIMS = SIMS;
})();
