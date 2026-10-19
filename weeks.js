/* =========================================================
   Year 11 Biology — Weekly Revision content
   Unit: Food and Digestion
   ---------------------------------------------------------
   To add a week: copy one week object, give it a new id
   (w3, w4 ...), set opens/due dates and write the questions.
   Question types:
     mcq      one correct option (auto-marked)
     match    a dropdown per row (auto-marked, 1 mark per row)
     num      one number, accepted between min and max
     numtable a number per row, accepted within tol
     text     written answer, min words enforced, model answer
              shown after submission
     info     stimulus text / tables (no marks)
   ========================================================= */

window.REVISION_WEEKS = [
{
  id: "w1",
  title: "Molecules, food tests and the digestive system",
  topic: "Food and Digestion",
  lessons: "Lessons 1–3",
  opens: "2026-10-19T07:00:00+04:00",
  due: "2026-10-25T23:59:00+04:00",
  minutes: 40,
  sections: [
  {
    crit: "A", name: "Knowing and understanding",
    items: [
      { id: "w1a1", type: "mcq", marks: 1,
        prompt: "Which element is found in proteins but <b>not</b> in carbohydrates or lipids?",
        options: ["Carbon", "Hydrogen", "Nitrogen", "Oxygen"], answer: 2,
        explain: "Carbohydrates and lipids contain only C, H and O. Proteins also contain nitrogen (and sometimes sulfur)." },

      { id: "w1a2", type: "match", marks: 3,
        prompt: "Complete the table: select the smallest unit (monomer or building block) of each molecule.",
        head: ["Molecule", "Smallest unit"],
        options: ["glucose", "amino acids", "glycerol and fatty acids", "nucleotides", "maltose"],
        rows: [
          { label: "Starch", answer: "glucose" },
          { label: "Protein", answer: "amino acids" },
          { label: "Lipid (fat)", answer: "glycerol and fatty acids" }
        ] },

      { id: "w1a3", type: "match", marks: 4,
        prompt: "A food scientist tests a smoothie. State the <b>positive result</b> for each food test.",
        head: ["Test", "Positive result"],
        options: ["blue-black colour", "brick-red / orange precipitate", "purple / lilac colour", "red layer floats on top", "stays blue", "turns colourless"],
        rows: [
          { label: "Iodine solution (starch)", answer: "blue-black colour" },
          { label: "Benedict's solution, heated (reducing sugar)", answer: "brick-red / orange precipitate" },
          { label: "Biuret solution (protein)", answer: "purple / lilac colour" },
          { label: "Sudan III (lipid)", answer: "red layer floats on top" }
        ] },

      { id: "w1a4", type: "match", marks: 4,
        prompt: "Organ case files: identify the organ from each clue.",
        head: ["Clue", "Organ"],
        options: ["Liver", "Gallbladder", "Pancreas", "Small intestine", "Stomach", "Large intestine"],
        rows: [
          { label: "“I make bile, but I don't store it.”", answer: "Liver" },
          { label: "“I store and concentrate bile.”", answer: "Gallbladder" },
          { label: "“I neutralise stomach acid and release three digestive enzymes.”", answer: "Pancreas" },
          { label: "“Nearly all chemical digestion finishes here and I absorb most nutrients.”", answer: "Small intestine" }
        ] },

      { id: "w1a5", type: "text", marks: 2, minWords: 15,
        prompt: "<b>Explain</b> why lipids are not true polymers, even though starch and proteins are.",
        model: "Polymers are long chains made of many repeating monomers joined together (starch = many glucose, protein = many amino acids) (1). A lipid is made of only one glycerol joined to three fatty acids, so it is not a long chain of repeating units (1).",
        points: ["Polymer = many repeating monomers in a chain", "Lipid = 1 glycerol + 3 fatty acids, not a repeating chain"] },

      { id: "w1a6", type: "text", marks: 3, minWords: 25,
        prompt: "<b>Outline</b> the difference between mechanical and chemical digestion. Give one example of each.",
        model: "Mechanical digestion physically breaks food into smaller pieces without forming new substances; it increases surface area (1), e.g. chewing in the mouth or churning in the stomach (1). Chemical digestion uses enzymes to break large molecules into smaller, soluble molecules that can be absorbed, e.g. amylase breaking starch into maltose (1).",
        points: ["Mechanical: physical breakdown, no new substances, increases surface area", "Example of mechanical (chewing, churning, emulsification by bile)", "Chemical: enzymes break large molecules into small ones + correct example"] },

      { id: "w1a7", type: "text", marks: 3, minWords: 25,
        prompt: "Bile is <b>not</b> an enzyme, yet it makes fat digestion faster. <b>Explain</b> how.",
        model: "Bile, made by the liver and stored in the gallbladder, emulsifies fat: it breaks large fat droplets into many small droplets (1). This greatly increases the surface area of fat (1), so the enzyme lipase has more surface to act on and breaks fat into fatty acids and glycerol faster (1). (Bile is also alkaline, which neutralises stomach acid so intestinal enzymes work at their optimum pH.)",
        points: ["Emulsification: large droplets → many small droplets", "Increases surface area", "Lipase can act faster / more fat digested at once"] }
    ]
  },
  {
    crit: "B", name: "Inquiring and designing",
    items: [
      { type: "info",
        html: "<p>A sports drink company claims its new drink has <b>“zero added sugar”</b>. You are a food-safety investigator. You have three brands of sports drink (X, Y and Z), Benedict's solution, test tubes, a boiling water bath and a stopwatch.</p><p>You plan to add Benedict's solution to each drink, heat it, and time how long it takes for the first colour change from blue. A faster colour change means more reducing sugar.</p>" },

      { id: "w1b1", type: "text", marks: 2, minWords: 12,
        prompt: "<b>Formulate</b> a research question for this investigation.",
        model: "How does the brand of sports drink (X, Y or Z) affect the amount of reducing sugar present, measured by the time taken (s) for Benedict's solution to first change colour from blue when heated in a boiling water bath?",
        points: ["Independent variable stated (brand of drink X, Y, Z)", "Dependent variable and how it is measured (time in s for first colour change)"] },

      { id: "w1b2", type: "match", marks: 2,
        prompt: "<b>Identify</b> the independent and dependent variables.",
        head: ["Variable", "In this investigation"],
        options: ["brand of sports drink", "time for Benedict's to change colour", "volume of Benedict's solution", "temperature of the water bath"],
        rows: [
          { label: "Independent variable", answer: "brand of sports drink" },
          { label: "Dependent variable", answer: "time for Benedict's to change colour" }
        ] },

      { id: "w1b3", type: "text", marks: 3, minWords: 25,
        prompt: "<b>State</b> two control variables and <b>explain</b> how you would control each one.",
        model: "1. Volume of drink and of Benedict's solution: measure the same volume each time (e.g. 2 cm³ drink + 2 cm³ Benedict's) with a measuring cylinder or syringe. 2. Temperature of the water bath: use a boiling water bath (about 100 °C) for every tube and check with a thermometer. (Also accept: same size test tubes, start timing at the same moment, same person judging the colour.)",
        points: ["Two valid control variables (1 each)", "A method to control them (1)"] },

      { id: "w1b4", type: "text", marks: 3, minWords: 25,
        prompt: "<b>Formulate</b> a testable hypothesis and <b>explain</b> it using scientific reasoning. Use the frame: “If … then … because …”",
        model: "If a drink contains more reducing sugar, then Benedict's solution will change colour from blue in a shorter time (1), because reducing sugars reduce the blue copper(II) ions in Benedict's solution to form an orange/brick-red precipitate; more sugar means this reaction happens faster and the colour changes sooner (1). If drink X really has zero added sugar, it should take the longest time or stay blue (1).",
        points: ["Testable prediction linking sugar content to time", "Scientific reasoning (reducing sugar reacts with Benedict's / copper ions)", "Clear direction of the relationship"] },

      { id: "w1b5", type: "text", marks: 2, minWords: 15,
        prompt: "<b>Explain</b> how you would collect <b>sufficient</b> data.",
        model: "Repeat the test at least three times for each brand and calculate a mean (1), so that anomalies can be identified and the results are more reliable (1). Also test a known glucose solution and water as positive and negative controls.",
        points: ["At least 3 repeats per brand / calculate mean", "Justification: identify anomalies, more reliable"] },

      { id: "w1b6", type: "text", marks: 1, minWords: 6,
        prompt: "<b>State</b> one safety precaution for this method.",
        model: "Use a test-tube holder and wear eye protection when heating tubes in the boiling water bath, because boiling liquid can spit and cause scalds.",
        points: ["Any valid precaution linked to a hazard (heating / Benedict's irritant)"] }
    ]
  },
  {
    crit: "C", name: "Processing and evaluating",
    items: [
      { type: "info",
        html: "<p>To check her method, a student timed how long Benedict's solution took to first change colour from blue for glucose solutions of known concentration. She repeated each concentration three times.</p><div class='tbl'><table><thead><tr><th>Glucose concentration (%)</th><th>Trial 1 (s)</th><th>Trial 2 (s)</th><th>Trial 3 (s)</th></tr></thead><tbody><tr><td>0.2</td><td>92</td><td>95</td><td>89</td></tr><tr><td>0.4</td><td>61</td><td>58</td><td>64</td></tr><tr><td>0.6</td><td>44</td><td>71</td><td>46</td></tr><tr><td>0.8</td><td>35</td><td>33</td><td>34</td></tr><tr><td>1.0</td><td>28</td><td>27</td><td>29</td></tr></tbody></table></div>" },

      { id: "w1c1", type: "mcq", marks: 1,
        prompt: "<b>Identify</b> the anomalous result.",
        options: ["0.2% — trial 2 (95 s)", "0.6% — trial 2 (71 s)", "0.8% — trial 1 (35 s)", "1.0% — trial 3 (29 s)"], answer: 1,
        explain: "71 s is far from the other two repeats (44 s and 46 s) and does not fit the trend." },

      { id: "w1c2", type: "numtable", marks: 5,
        prompt: "<b>Calculate</b> the mean time for each concentration to 1 decimal place. Leave out the anomalous result.",
        head: ["Glucose concentration (%)", "Mean time (s)"],
        rows: [
          { label: "0.2", answer: 92.0, tol: 0.05 },
          { label: "0.4", answer: 61.0, tol: 0.05 },
          { label: "0.6", answer: 45.0, tol: 0.05, hint: "Did you leave out 71 s? Including it gives 53.7 s." },
          { label: "0.8", answer: 34.0, tol: 0.05 },
          { label: "1.0", answer: 28.0, tol: 0.05 }
        ] },

      { id: "w1c3", type: "text", marks: 2, minWords: 20,
        prompt: "<b>Describe</b> the trend in the data. Use numbers from your means.",
        model: "As glucose concentration increases from 0.2% to 1.0%, the mean time for the colour change decreases from 92.0 s to 28.0 s (1). The decrease is steepest at low concentrations (92.0 s to 61.0 s between 0.2% and 0.4%) and smaller at high concentrations (34.0 s to 28.0 s), so it is a curved, not straight-line, relationship (1).",
        points: ["Negative trend with data quoted", "Not linear: time falls steeply at first then levels off"] },

      { id: "w1c4", type: "num", marks: 2, min: 0.45, max: 0.6, unit: "%",
        prompt: "An unknown fruit juice took <b>50 s</b> to change colour. Use the means to <b>estimate</b> its glucose concentration.",
        explain: "50 s lies between 0.4% (61.0 s) and 0.6% (45.0 s), closer to 0.6%. Accept about 0.45–0.60% (≈0.54%)." },

      { id: "w1c5", type: "text", marks: 3, minWords: 25,
        prompt: "<b>Evaluate</b> the method: state one limitation, <b>explain</b> how it affects the results, and <b>suggest</b> an improvement.",
        model: "The first colour change is judged by eye, which is subjective, so different people (or the same person in different trials) may stop the stopwatch at different times (1). This makes the times less accurate and causes spread between repeats, like the 71 s anomaly (1). Improvement: use a colorimeter to measure the colour change, or compare each tube with a colour standard chart under the same lighting (1).",
        points: ["Valid limitation", "Effect on reliability / accuracy explained", "Specific improvement that fixes it"] }
    ]
  },
  {
    crit: "D", name: "Reflecting on the impacts of science",
    items: [
      { type: "info",
        html: "<p>About 1 in 5 adults in the UAE (20.7%) live with diabetes, one of the highest rates in the world. Diabetes is a problem with how the body controls blood glucose.</p>" },

      { id: "w1d1", type: "text", marks: 2, minWords: 20,
        prompt: "A bowl of white rice does not taste sweet, but it still raises blood glucose. <b>Explain</b> why.",
        model: "Rice is mostly starch, a polymer of glucose (1). Amylase from the salivary glands and pancreas breaks starch down into maltose and then glucose in the small intestine, and the glucose is absorbed through the villi into the blood, raising blood glucose (1).",
        points: ["Rice contains starch made of glucose", "Starch digested (amylase) to glucose, absorbed into blood in small intestine"] },

      { id: "w1d2", type: "text", marks: 2, minWords: 15,
        prompt: "<b>Explain</b> one way that clear sugar information on food labels could help a person with diabetes.",
        model: "Labels show how much sugar or carbohydrate is in a serving (1), so a person with diabetes can choose lower-sugar foods or plan portions and medication to avoid a sharp rise in blood glucose (1).",
        points: ["Labels show sugar / carbohydrate content", "Allows informed choices to control blood glucose"] },

      { id: "w1d3", type: "text", marks: 6, minWords: 80,
        prompt: "Your school plans to <b>remove all sugary drinks</b> from the canteen and sell only water and unsweetened drinks. <b>Discuss and evaluate</b> this plan. In your answer include:<ul><li>how sugary drinks affect blood glucose (use your knowledge of digestion and absorption)</li><li>one benefit of the plan for students' health</li><li>one argument against the plan (social, economic or personal choice)</li><li>one other action the school could take</li><li>a concluding judgement</li></ul>",
        model: "Sugary drinks contain glucose and sucrose that need little or no digestion, so they are absorbed quickly through the villi of the small intestine and cause a fast spike in blood glucose (1). Benefit: students take in less sugar, which lowers the risk of weight gain and type 2 diabetes, a serious problem in the UAE where 20.7% of adults have diabetes (1). Against: students lose personal choice and may simply buy sugary drinks outside school, so the ban may not change their habits; the canteen may also lose income (1). Another action: teach students to read food labels or run a campaign showing the sugar content of popular drinks, so they understand the reason for the change (1). Evaluation: the ban helps at school but does not control what students drink at home (1). Conclusion: the plan is worthwhile if it is combined with education, because changing habits needs understanding as well as rules (1).",
        points: ["Science: fast absorption → blood glucose spike", "Health benefit (with UAE context)", "Argument against (choice / economic / students buy elsewhere)", "Alternative or extra action", "Weighs both sides", "Clear concluding judgement"] }
    ]
  }
  ]
},

{
  id: "w2",
  title: "Absorption and enzymes",
  topic: "Food and Digestion",
  lessons: "Lessons 4–5",
  opens: "2026-10-26T07:00:00+04:00",
  due: "2026-11-01T23:59:00+04:00",
  minutes: 40,
  sections: [
  {
    crit: "A", name: "Knowing and understanding",
    items: [
      { id: "w2a1", type: "mcq", marks: 1,
        prompt: "Where in the digestive system does <b>most</b> absorption of digested food happen?",
        options: ["Stomach", "Small intestine", "Large intestine", "Oesophagus"], answer: 1,
        explain: "The small intestine is lined with villi and microvilli, giving a surface area of about 30 m²." },

      { id: "w2a2", type: "match", marks: 4,
        prompt: "Match each feature of a villus to how it helps absorption.",
        head: ["Feature", "How it helps"],
        options: ["increases surface area", "carries absorbed nutrients away, keeping the gradient steep", "short diffusion distance", "absorbs fatty acids and glycerol into the lymph", "produces bile"],
        rows: [
          { label: "Villi and microvilli", answer: "increases surface area" },
          { label: "Dense capillary network", answer: "carries absorbed nutrients away, keeping the gradient steep" },
          { label: "Wall only one cell thick", answer: "short diffusion distance" },
          { label: "Lacteal", answer: "absorbs fatty acids and glycerol into the lymph" }
        ] },

      { id: "w2a3", type: "mcq", marks: 1,
        prompt: "What is the optimum pH of pepsin, the protein-digesting enzyme in the stomach?",
        options: ["About 2", "About 7", "About 8", "About 11"], answer: 0,
        explain: "Pepsin works in the acidic stomach, optimum about pH 2." },

      { id: "w2a4", type: "mcq", marks: 1,
        prompt: "A student heats amylase to 80 °C, cools it back to 37 °C and adds starch. What happens?",
        options: ["It works faster than before", "It works normally again at 37 °C", "It does not work, because its active site has permanently changed shape", "It works only at pH 2"], answer: 2,
        explain: "Heating above the optimum denatures the enzyme. The change in the active site is permanent, so activity does not return." },

      { id: "w2a5", type: "text", marks: 3, minWords: 25,
        prompt: "<b>Explain</b> why the rate of an enzyme-controlled reaction falls sharply above the optimum temperature. Use the words <i>active site</i> and <i>denatured</i>.",
        model: "Above the optimum, the enzyme molecule vibrates so much that the bonds holding its 3D shape break (1). The active site changes shape, so it is no longer complementary to the substrate and the substrate cannot fit (1). The enzyme is denatured, so fewer enzyme–substrate complexes form and the rate falls (1).",
        points: ["Bonds holding shape break", "Active site changes shape, substrate no longer fits", "Denatured → fewer enzyme–substrate complexes"] },

      { id: "w2a6", type: "text", marks: 2, minWords: 15,
        prompt: "<b>Explain</b> why adding more and more substrate does not increase the rate of reaction forever.",
        model: "At high substrate concentration all the active sites are occupied (the enzyme is saturated) (1), so extra substrate has nowhere to bind and enzyme concentration becomes the limiting factor (1).",
        points: ["All active sites occupied / saturated", "Enzyme concentration becomes limiting"] },

      { id: "w2a7", type: "text", marks: 3, minWords: 20,
        prompt: "In coeliac disease the villi become damaged and flattened. <b>Predict</b> the effect on absorption and <b>explain</b> your prediction.",
        model: "Absorption of nutrients will decrease (1). Flattened villi have a much smaller surface area (1), so fewer nutrient molecules can cross into the blood per unit time and the person may become malnourished even if they eat enough (1).",
        points: ["Absorption decreases", "Smaller surface area", "Fewer nutrients absorbed per unit time / consequence"] }
    ]
  },
  {
    crit: "B", name: "Inquiring and designing",
    items: [
      { type: "info",
        html: "<p>Camelicious in Dubai turns camel milk into cheese using <b>rennet</b>, an enzyme that makes milk clot (thicken). One batch of milk was mixed with acidic whey by mistake and the rennet barely worked.</p><p>You will investigate how pH affects the activity of rennet. You have milk, rennet, pH buffer solutions (pH 4, 5, 6, 7 and 8), test tubes, a 37 °C water bath, syringes and a stopwatch. The milk has clotted when it no longer runs down the side of the tilted tube.</p>" },

      { id: "w2b1", type: "text", marks: 2, minWords: 12,
        prompt: "<b>Formulate</b> a research question for this investigation.",
        model: "How does pH (4, 5, 6, 7 and 8) affect the activity of rennet, measured as the time taken (s) for milk to clot at 37 °C?",
        points: ["IV with range (pH 4–8)", "DV and how it is measured (time to clot, s)"] },

      { id: "w2b2", type: "match", marks: 3,
        prompt: "<b>Identify</b> each variable.",
        head: ["Variable type", "In this investigation"],
        options: ["pH of the buffer", "time for the milk to clot", "temperature of the water bath", "colour of the milk"],
        rows: [
          { label: "Independent variable", answer: "pH of the buffer" },
          { label: "Dependent variable", answer: "time for the milk to clot" },
          { label: "Control variable", answer: "temperature of the water bath" }
        ] },

      { id: "w2b3", type: "text", marks: 3, minWords: 25,
        prompt: "<b>Formulate</b> a testable hypothesis and <b>explain</b> it using scientific reasoning.",
        model: "If the pH increases from 4 to 8, the time for milk to clot will be shortest at rennet's optimum pH and longer at pH values above and below it (1), because at the optimum pH the active site has the right shape and charges for the substrate to bind and form enzyme–substrate complexes (1). Away from the optimum, the change in H⁺ ions alters charges in the active site, bonds break and its shape changes, so fewer enzyme–substrate complexes form and clotting is slower (1).",
        points: ["Testable prediction with direction", "Optimum pH: active site right shape / charges", "Away from optimum: charges change, active site changes shape"] },

      { id: "w2b4", type: "text", marks: 6, minWords: 70,
        prompt: "<b>Design</b> a method for this investigation. Include:<ul><li>how you will change the independent variable</li><li>how you will measure the dependent variable</li><li>two control variables and how you will keep them the same</li><li>how you will collect sufficient data</li><li>one safety precaution</li></ul>",
        model: "1. Put 5 cm³ of milk and 1 cm³ of pH 4 buffer in a test tube; put 1 cm³ of rennet in a separate tube. 2. Stand both tubes in the 37 °C water bath for 5 minutes so they reach the same temperature (control). 3. Add the rennet to the milk, mix, and start the stopwatch. 4. Every 30 s tilt the tube; stop the clock when the milk no longer runs down the side and record the time. 5. Repeat three times at pH 4, then repeat for pH 5, 6, 7 and 8 and calculate a mean for each pH. Controls: same volumes of milk, buffer and rennet (measured with syringes); same temperature (37 °C, checked with a thermometer); same type of milk. Safety: wipe up spills; do not taste the milk or rennet; take care with glassware.",
        points: ["IV changed with buffers across a range", "DV measured: time to clot, clear end-point", "Two controls with method", "Equilibrate at 37 °C before mixing", "Repeats (×3) and means", "Safety precaution"] }
    ]
  },
  {
    crit: "C", name: "Processing and evaluating",
    items: [
      { type: "info",
        html: "<p>A student measured how long pepsin took to digest a small cube of cooked egg white (protein) at different pH values at 37 °C. Rate = 1000 ÷ mean time.</p><div class='tbl'><table><thead><tr><th>pH</th><th>Trial 1 (s)</th><th>Trial 2 (s)</th><th>Trial 3 (s)</th><th>Mean (s)</th><th>Rate (s⁻¹)</th></tr></thead><tbody><tr><td>1</td><td>160</td><td>156</td><td>158</td><td>158.0</td><td>?</td></tr><tr><td>2</td><td>98</td><td>102</td><td>100</td><td>100.0</td><td>10.0</td></tr><tr><td>3</td><td>125</td><td>128</td><td>122</td><td>125.0</td><td>?</td></tr><tr><td>4</td><td>205</td><td>199</td><td>262</td><td>?</td><td>?</td></tr><tr><td>5</td><td>400</td><td>395</td><td>405</td><td>400.0</td><td>2.5</td></tr><tr><td>6</td><td colspan='3'>not digested after 600 s</td><td>—</td><td>0</td></tr></tbody></table></div>" },

      { id: "w2c1", type: "numtable", marks: 4,
        prompt: "<b>Calculate</b> the missing values to 1 decimal place. Leave out any anomalous result.",
        head: ["Value", "Answer"],
        rows: [
          { label: "Rate at pH 1 (s⁻¹)", answer: 6.3, tol: 0.05 },
          { label: "Rate at pH 3 (s⁻¹)", answer: 8.0, tol: 0.05 },
          { label: "Mean time at pH 4 (s)", answer: 202.0, tol: 0.05, hint: "262 s is anomalous. Including it gives 222.0 s." },
          { label: "Rate at pH 4 (s⁻¹)", answer: 5.0, tol: 0.05 }
        ] },

      { id: "w2c2", type: "num", marks: 1, min: 1.5, max: 2.5, unit: "",
        prompt: "<b>Estimate</b> the optimum pH of pepsin from these data.",
        explain: "The highest rate (10.0 s⁻¹) is at pH 2. Because the pH values are 1 unit apart, the true optimum could be anywhere between about 1.5 and 2.5." },

      { id: "w2c3", type: "text", marks: 3, minWords: 30,
        prompt: "<b>Describe</b> the trend in the data, using numbers, and <b>explain</b> it using your scientific knowledge.",
        model: "The rate increases from 6.3 s⁻¹ at pH 1 to a peak of 10.0 s⁻¹ at pH 2, then falls to 2.5 s⁻¹ at pH 5 and 0 at pH 6 (1). At pH 2 the active site of pepsin has the right shape and charges, so most enzyme–substrate complexes form (1). As pH moves away from 2, the H⁺ concentration changes the charges in the active site, bonds break and its shape changes, so the protein fits less well; by pH 6 the enzyme is denatured (1).",
        points: ["Trend with data (rise to peak at pH 2, then fall)", "Optimum: active site correct shape / charges", "Away from optimum: charges change, shape changes, denatured"] },

      { id: "w2c4", type: "text", marks: 2, minWords: 20,
        prompt: "The student concludes: <i>“Pepsin does not work at all above pH 5.”</i> <b>Evaluate</b> this conclusion.",
        model: "The conclusion is only partly supported: there was no digestion at pH 6 within 600 s (1), but pH values between 5 and 6 were not tested and the test stopped at 600 s, so pepsin may still work very slowly; the student cannot say it does not work at all (1).",
        points: ["Supported by pH 6 result", "Limited: gap between pH 5 and 6 / time limit of 600 s / one value only"] },

      { id: "w2c5", type: "text", marks: 3, minWords: 25,
        prompt: "<b>Suggest</b> two improvements to the method and <b>justify</b> each one.",
        model: "1. Test smaller pH intervals between 1 and 3 (e.g. 1.5, 2.0, 2.5) to find the optimum more precisely (1.5). 2. Cut egg-white cubes to exactly the same size (e.g. 5 mm with a ruler and scalpel), because a larger cube has a different surface area and would change the time (1.5). Also accept: more repeats, use a water bath to control temperature, a clearer end-point.",
        points: ["Improvement 1 + justification", "Improvement 2 + justification"] }
    ]
  },
  {
    crit: "D", name: "Reflecting on the impacts of science",
    items: [
      { type: "info",
        html: "<p>Many adults around the world, including in the Gulf region, are <b>lactose intolerant</b>: they make little or no lactase, the enzyme that digests lactose (milk sugar). Two solutions exist: <b>lactose-free milk</b>, made in a factory by adding lactase to milk, and <b>lactase tablets</b> taken with a meal.</p>" },

      { id: "w2d1", type: "text", marks: 2, minWords: 15,
        prompt: "<b>Explain</b> why lactose that is not digested cannot be used by the body.",
        model: "Lactose is a sugar molecule too large to be absorbed; it must be broken down by lactase into glucose and galactose (1). Without lactase it stays in the gut, cannot pass through the villi into the blood and passes to the large intestine, where bacteria ferment it and cause gas and discomfort (1).",
        points: ["Must be digested to smaller sugars to be absorbed", "Undigested lactose not absorbed → large intestine / symptoms"] },

      { id: "w2d2", type: "text", marks: 6, minWords: 80,
        prompt: "<b>Discuss and evaluate</b> lactose-free milk and lactase tablets as ways to help lactose-intolerant people in the UAE. In your answer include:<ul><li>how each option uses an enzyme</li><li>one advantage and one disadvantage of each option</li><li>why storage matters in the UAE summer, when temperatures can go above 45 °C</li><li>a concluding judgement</li></ul>",
        model: "Lactose-free milk uses lactase in the factory to break lactose into glucose and galactose before the milk is sold; tablets supply lactase that works in the person's own small intestine (1). Lactose-free milk: advantage, it is ready to drink and needs no planning; disadvantage, it costs more and is not available in every shop or café (1). Tablets: advantage, they let the person eat many different dairy foods, including in restaurants; disadvantage, the person must remember to take them with every meal, and the dose may not match the amount of lactose (1). Storage: lactase is a protein, so tablets left in a hot car above 45 °C can denature, the active site changes shape and they stop working (1). This means a tablet may fail without the person knowing (1). Conclusion: lactose-free milk is more reliable for everyday use at home, while tablets are useful for eating out, as long as they are stored below about 25 °C (1).",
        points: ["Enzyme role in each option", "Advantage + disadvantage of milk", "Advantage + disadvantage of tablets", "Heat denatures lactase in storage", "Consequence for the user", "Concluding judgement"] }
    ]
  }
  ]
}
];
