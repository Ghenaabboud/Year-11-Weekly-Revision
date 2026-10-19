/* Talks to the Google Apps Script backend, or to a demo store when no URL is set. */
(function () {
  const CFG = window.REVISION_CONFIG || {};
  const URL_ = (CFG.SCRIPT_URL || "").trim();
  const DEMO = !URL_;

  function store(k, v) {
    try {
      if (v === undefined) return JSON.parse(localStorage.getItem(k) || "null");
      localStorage.setItem(k, JSON.stringify(v));
    } catch (e) { return null; }
  }

  async function get(params) {
    const qs = new URLSearchParams(params).toString();
    const r = await fetch(URL_ + "?" + qs, { method: "GET" });
    const j = await r.json();
    if (!j.ok) throw new Error(j.error || "Request failed");
    return j;
  }
  async function post(body) {
    const r = await fetch(URL_, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(body)
    });
    const j = await r.json();
    if (!j.ok) throw new Error(j.error || "Request failed");
    return j;
  }

  /* ---------- demo data (made-up students, no real contacts) ---------- */
  const DEMO_ROSTER = [
    ["D1001","Sc6","Omar","Haddad"],["D1002","Sc6","Lina","Farouk"],["D1003","Sc6","Yusuf","Karim"],
    ["D1004","Sc6","Sara","Mansour"],["D1005","Sc6","Adam","Nasser"],["D1006","Sc6","Maya","Khalil"],
    ["D1007","Sc6","Rami","Saleh"],["D1008","Sc6","Noor","Azzam"],
    ["D2001","Sc7","Hana","Rahman"],["D2002","Sc7","Zaid","Qasim"],["D2003","Sc7","Leen","Toma"],
    ["D2004","Sc7","Karim","Aoun"],["D2005","Sc7","Dana","Shami"],["D2006","Sc7","Tariq","Hamdan"]
  ].map(([id, cls, first, last]) => ({
    id, cls, first, last,
    p1: "Parent of " + first, e1: first.toLowerCase() + ".parent1@example.com",
    p2: "", e2: id.endsWith("3") ? "" : first.toLowerCase() + ".parent2@example.com"
  }));
  const DEMO_SETTINGS = {
    hodName: "Ms Abboud", hodTitle: "Head of Science", hodEmail: "",
    teachers: [
      { cls: "Sc6", name: "Ms Abboud", email: "" },
      { cls: "Sc7", name: "Ms Abboud", email: "" }
    ]
  };
  function demoSubs() {
    let s = store("y11rev_demo_subs");
    if (!s) {
      const mk = (id, week, ts, words, flag) => ({ id, week, ts, auto: 14, autoMax: 24, words, flag: flag || "", answers: {} });
      s = [
        mk("D1001","w1","2026-10-22T18:10:00+04:00",412),
        mk("D1002","w1","2026-10-24T21:40:00+04:00",388),
        mk("D1004","w1","2026-10-25T22:55:00+04:00",96,"Very short or repeated answers"),
        mk("D1006","w1","2026-10-26T16:00:00+04:00",351),
        mk("D1008","w1","2026-10-23T19:05:00+04:00",440),
        mk("D2001","w1","2026-10-21T17:30:00+04:00",405),
        mk("D2003","w1","2026-10-25T20:15:00+04:00",377),
        mk("D2004","w1","2026-10-24T12:00:00+04:00",420)
      ];
      store("y11rev_demo_subs", s);
    }
    return s;
  }

  window.RevisionAPI = {
    demo: DEMO,
    demoNow: DEMO ? new Date("2026-10-27T09:00:00+04:00") : null,

    async verify(id) {
      id = String(id || "").trim().toUpperCase();
      if (DEMO) {
        const rows = DEMO_ROSTER.filter(r => r.id === id);
        if (!rows.length) throw new Error("We couldn't find that student ID. In the demo, try D1003.");
        const subs = demoSubs().filter(s => s.id === id).map(s => ({ week: s.week, ts: s.ts, auto: s.auto, autoMax: s.autoMax, answers: s.answers }));
        return { id, first: rows[0].first, last: rows[0].last, classes: rows.map(r => r.cls), submissions: subs };
      }
      const j = await get({ action: "verify", id });
      return j.student;
    },

    async submit(payload) {
      if (DEMO) {
        const s = demoSubs().filter(x => !(x.id === payload.id && x.week === payload.week));
        s.push({ ...payload, ts: new Date().toISOString() });
        store("y11rev_demo_subs", s);
        return { ts: new Date().toISOString() };
      }
      return post({ action: "submit", ...payload });
    },

    /* Teacher-tracker demo only. The live tracker runs inside the Google Sheet. */
    async panel(key) {
      if (DEMO) {
        return { roster: DEMO_ROSTER, settings: DEMO_SETTINGS, submissions: demoSubs(), emails: store("y11rev_demo_emails") || [] };
      }
      throw new Error("The teacher tracker opens from the Google Sheet.");
    },

    async logEmail(key, entry) {
      if (DEMO) {
        const e = store("y11rev_demo_emails") || [];
        e.push({ ...entry, ts: new Date().toISOString() });
        store("y11rev_demo_emails", e);
        return {};
      }
      throw new Error("The teacher tracker opens from the Google Sheet.");
    }
  };
})();
