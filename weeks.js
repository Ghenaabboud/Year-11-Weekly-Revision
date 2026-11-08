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
  lessons: "Unit 6 – Lessons 1–3",
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
        html: "<p>A sports drink company claims its new drink has <b>“zero added sugar”</b>. You are a food-safety investigator. You have three brands of sports drink (X, Y and Z), Benedict's solution, test tubes, a boiling water bath and a stopwatch.</p><p>You plan to add Benedict's solution to each drink, heat it, and time how long it takes for the first colour change from blue. A faster colour change means more reducing sugar.</p><figure class='fig'><img src='images/w1-sports-drinks-benedicts.jpg' alt='Sports drinks X, Y and Z are each mixed with Benedict&#39;s solution in a test tube, heated in a boiling water bath, and timed until the first colour change from blue. Example times: X 0:45, Y 1:30, Z 3:15.' loading='lazy'><figcaption>Figure 1: The planned method.</figcaption></figure>" },

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
  lessons: "Unit 6 – Lessons 4–5",
  opens: "2026-10-26T07:00:00+04:00",
  due: "2026-11-04T23:59:00+04:00",
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
        html: "<p>Camelicious in Dubai turns camel milk into cheese using <b>rennet</b>, an enzyme that makes milk clot (thicken). One batch of milk was mixed with acidic whey by mistake and the rennet barely worked.</p><p>You will investigate how pH affects the activity of rennet. You have milk, rennet, pH buffer solutions (pH 4, 5, 6, 7 and 8), test tubes, a 37 °C water bath, syringes and a stopwatch. The milk has clotted when it no longer runs down the side of the tilted tube.</p><figure class='fig'><img src='images/w2-rennet-method.jpg' alt='Five steps: set up test tubes of milk labelled pH 4 to pH 8; add the same volume of each buffer; add the same volume of rennet and place the tubes in a 37 °C water bath; every 30 seconds tilt each tube to check whether the milk has clotted; record the time taken to clot at each pH.' loading='lazy'><figcaption>Figure 1: Outline of the rennet investigation.</figcaption></figure>" },

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
        prompt: "<b>Design</b> a method for this investigation. Include:<ul><li>safety precautions <b>(write these first)</b></li><li>how you will change the independent variable</li><li>how you will measure the dependent variable</li><li>two control variables and how you will keep them the same</li><li>how you will collect sufficient data</li></ul>",
        howto: "Write at least 70 words as numbered steps, one step per line. The bar turns green when you have written enough.",
        placeholder: "Safety:\n- \n\nMethod:\n1. \n2. \n3. ",
        hint: "Write your method as <b>numbered bullet points</b>, one step per line, not as a paragraph. Start with your safety precautions, then write the steps in the order you would do them, with volumes, equipment and timings.",
        model: "Safety: wear eye protection; do not taste the milk or rennet; wipe up spills straight away; handle glassware carefully. Method: 1. Label five test tubes pH 4, 5, 6, 7 and 8. 2. Use a syringe to add 5 cm³ of milk to each tube. 3. Add 2 cm³ of the matching pH buffer to each tube. 4. Put 1 cm³ of rennet in five separate tubes. 5. Stand all tubes in the 37 °C water bath for 5 minutes so they reach the same temperature (check with a thermometer). 6. Add the rennet to the pH 4 milk, mix and start the stopwatch. 7. Every 30 s, tilt the tube; stop the clock when the milk no longer runs down the side and record the time. 8. Repeat for pH 5, 6, 7 and 8. 9. Repeat the whole investigation three times and calculate a mean time for each pH. Controls: same volumes of milk, buffer and rennet (syringes); same temperature (37 °C water bath); same type of milk.",
        points: ["Safety precautions given first", "Written as logical numbered steps (not a paragraph)", "IV changed with buffers across a range; DV measured as time to clot with a clear end-point", "Two controls with how they are kept the same", "Equilibrate at 37 °C before mixing", "Repeats (×3) and means"] }
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
        hint: "<b>Evaluate</b> means weigh up the strengths and the limitations, then make a judgement. Say which data <b>support</b> the conclusion, which data or gaps <b>do not</b>, and finish with how far you agree (fully, partly or not at all).",
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
      { type: "info", guide: {
        title: "How to reach the top level (7–8) in criterion D",
        intro: "Criterion D questions ask you to use science to judge a real-world issue. Examiners look for four things. Build your long answer in this order.",
        steps: [
          { h: "Explain the science", strand: "Strand i", what: "Say how the science works and how it solves the problem. Use key words from the unit.",
            starters: ["This works because…", "The enzyme … breaks down … into …, so …"] },
          { h: "Discuss the implications", strand: "Strand ii", what: "Look at the issue from at least two angles: health, social, economic, environmental or ethical. Give an advantage AND a disadvantage.",
            starters: ["One advantage is … because …", "However, a disadvantage is …", "Economically, …"] },
          { h: "Evaluate", strand: "Strand ii", what: "Weigh the points against each other. Which matters more, for whom, and why? Use “depends on” thinking.",
            starters: ["The benefit outweighs the cost because…", "This depends on…", "For people who … this is less useful because…"] },
          { h: "Conclude", strand: "Strand ii", what: "Finish with a clear judgement that answers the question. Back it up with your strongest reason.",
            starters: ["Overall, I think … because…", "The best option is … as long as…"] }
        ],
        ladder: [
          { lv: "1–2", verb: "States", d: "lists facts or one side only" },
          { lv: "3–4", verb: "Outlines", d: "gives brief points, some science" },
          { lv: "5–6", verb: "Describes / discusses", d: "covers both sides with some detail" },
          { lv: "7–8", verb: "Explains / evaluates", d: "explains the science, weighs both sides and justifies a conclusion" }
        ],
        checklist: ["Every bullet point in the question is answered", "Correct scientific words are used (strand iii)", "Both sides are covered, not just one", "A clear conclusion is given at the end"]
      } },
      { type: "info",
        html: "<p>Many adults around the world, including in the Gulf region, are <b>lactose intolerant</b>: they make little or no lactase, the enzyme that digests lactose (milk sugar). Two solutions exist: <b>lactose-free milk</b>, made in a factory by adding lactase to milk, and <b>lactase tablets</b> taken with a meal.</p>" },

      { id: "w2d1", type: "text", marks: 2, minWords: 15,
        prompt: "<b>Explain</b> why lactose that is not digested cannot be used by the body.",
        model: "Lactose is a sugar molecule too large to be absorbed; it must be broken down by lactase into glucose and galactose (1). Without lactase it stays in the gut, cannot pass through the villi into the blood and passes to the large intestine, where bacteria ferment it and cause gas and discomfort (1).",
        points: ["Must be digested to smaller sugars to be absorbed", "Undigested lactose not absorbed → large intestine / symptoms"] },

      { id: "w2d2", type: "text", marks: 6, minWords: 80,
        prompt: "<b>Discuss and evaluate</b> lactose-free milk and lactase tablets as ways to help lactose-intolerant people in the UAE. In your answer include:<ul><li>how each option uses the enzyme lactase</li><li>one <b>economic</b> disadvantage of lactose-free milk</li><li>one <b>social</b> advantage of lactase tablets</li><li>one <b>health</b> disadvantage of lactase tablets, including why storing them in the UAE summer (above 45 °C) matters</li><li>a concluding judgement on which option is better</li></ul>",
        model: "Science: lactose-free milk is made by adding lactase in the factory, which breaks lactose into glucose and galactose before the milk is sold; tablets supply lactase that digests lactose in the person's own small intestine (1). Economic: lactose-free milk costs more to produce because of the extra enzyme and processing step, so it is more expensive for families to buy every week and smaller shops may not stock it (1). Social: tablets let a person eat the same dairy foods as friends and family at restaurants, school events or gatherings, without needing special products, so they do not feel left out (1). Health: lactase is a protein, so tablets left in a hot car or bag above 45 °C can denature; the active site changes shape and the tablet stops working (1), so the person may get pain and bloating without knowing why, and the dose may not match the amount of lactose eaten (1). Conclusion: lactose-free milk is the more reliable everyday choice at home despite the cost, while tablets are best for eating out, as long as they are stored somewhere cool (1).",
        points: ["Science: how lactase works in each option", "Economic disadvantage of lactose-free milk, explained", "Social advantage of lactase tablets, explained", "Health disadvantage: heat denatures lactase in storage", "Consequence for the person (symptoms, dose)", "Justified concluding judgement"] }
    ]
  }
  ]
},

{
  id: "w3",
  title: "Cells, specialised cells and transport",
  topic: "Year 10 recap: Cells",
  lessons: "Year 10 Unit 1 – Lessons 3–5",
  opens: "2026-11-02T07:00:00+04:00",
  due: "2026-11-08T23:59:00+04:00",
  minutes: 40,
  sections: [
  {
    crit: "R", name: "Recall missions",
    items: [
      { type: "info", mission: { n: 1, title: "Cell ID", lesson: "Lesson 3 · What are cells?",
        story: "A new sample has arrived at the lab. Before you can identify it, prove you remember what every cell is built from." } },
      { type: "info", predict: { q: "A cell is 2 µm long and has <b>no nucleus</b>. What is it most likely to be?",
        options: ["A plant cell", "A red blood cell", "A prokaryotic cell such as a bacterium", "A nerve cell"], answer: 2,
        reveal: "The size gives it away. A red blood cell also has no nucleus, but it is about 7 µm across and it is eukaryotic: it loses its nucleus as it matures. A cell of about 2 µm with its DNA loose in the cytoplasm is prokaryotic." } },
      { type: "info", sim: { name: "cellExplorer", title: "Label the cells" } },
      { type: "info", flash: [
        { q: "What are the three principles of cell theory?", a: "1. All living organisms are made of one or more cells. 2. The cell is the basic unit of structure and function. 3. All cells arise from pre-existing cells." },
        { q: "What is the ONE feature that tells you a cell is prokaryotic?", a: "No nucleus: its DNA is free in the cytoplasm (often as a loop). Prokaryotes also have no membrane-bound organelles." },
        { q: "Typical size: prokaryotic vs eukaryotic cells?", a: "Prokaryotic: about 0.1–10 micrometres. Eukaryotic: about 10–100 micrometres." }
      ] },
      { id: "w3r1", type: "match", marks: 6,
        prompt: "<b>Sort</b> each feature: is it found in prokaryotic cells only, eukaryotic cells only, or both?",
        head: ["Feature", "Found in"],
        options: ["Prokaryotic only", "Eukaryotic only", "Both"],
        rows: [
          { label: "DNA free in the cytoplasm (no nucleus)", answer: "Prokaryotic only" },
          { label: "Membrane-bound nucleus", answer: "Eukaryotic only" },
          { label: "Mitochondria", answer: "Eukaryotic only" },
          { label: "Ribosomes", answer: "Both" },
          { label: "Cell membrane", answer: "Both" },
          { label: "Cytoplasm", answer: "Both" }
        ] },
      { id: "w3r2", type: "match", marks: 6,
        prompt: "Organelle library: <b>identify</b> the job of each organelle.",
        head: ["Organelle", "Job"],
        options: ["controls the cell's activities and stores DNA", "makes proteins", "releases energy by respiration", "modifies and packages proteins", "carries out photosynthesis", "supports the cell and keeps its shape", "digests waste material"],
        rows: [
          { label: "Nucleus", answer: "controls the cell's activities and stores DNA" },
          { label: "Ribosome", answer: "makes proteins" },
          { label: "Mitochondrion", answer: "releases energy by respiration" },
          { label: "Golgi apparatus", answer: "modifies and packages proteins" },
          { label: "Chloroplast", answer: "carries out photosynthesis" },
          { label: "Cell wall", answer: "supports the cell and keeps its shape" }
        ] },
      { id: "w3r3", type: "mcq", marks: 1,
        prompt: "Spot the correct statement.",
        options: ["Prokaryotic cells have a nucleus that stores their DNA.", "Eukaryotic cells are usually smaller than prokaryotic cells.", "Both cell types have membrane-bound organelles such as mitochondria.", "Every cell is surrounded by a cell membrane and contains ribosomes and cytoplasm."], answer: 3,
        explain: "Prokaryotes have no nucleus, eukaryotic cells are usually larger (10–100 µm), and only eukaryotes have membrane-bound organelles. All cells share a cell membrane, cytoplasm and ribosomes." },

      { type: "info", exam: "<b>In criterion A this becomes:</b> “<b>Compare and contrast</b> prokaryotic and eukaryotic cells [4]” (question A2). Use <i>both</i> for similarities and <i>whereas</i> for differences, and give one point per mark." },

      { type: "info", mission: { n: 2, title: "Specialist match", lesson: "Lesson 4 · Specialised cells",
        story: "The Abu Dhabi Stem Cells Center needs a lab assistant who knows how cells become specialised. Show them you are ready." } },
      { type: "info", predict: { q: "A stem cell taken from an adult's <b>bone marrow</b> is given the chemical signal to become a <b>nerve cell</b>. What happens?",
        options: ["It becomes a nerve cell, because stem cells can become anything", "It does not become a nerve cell", "It becomes a nerve cell, but only if it divides first"], answer: 1,
        reveal: "Adult bone-marrow stem cells can only make blood cells. Their <b>potency</b> is limited. Embryonic stem cells can become almost any cell type. This is why the ADSCC has to choose the right type of stem cell for each treatment." } },
      { type: "info", sim: { name: "stemLab", title: "Stem cell lab" } },
      { type: "info", flash: [
        { q: "What is a stem cell?", a: "An unspecialised cell that can divide to make more stem cells (self-renewal) and whose daughter cells can differentiate into specialised cells." },
        { q: "What does 'cell potency' mean?", a: "The range of cell types a stem cell can become. It depends on the type of stem cell, so not every stem cell can become every cell." },
        { q: "Why does a sperm cell's midpiece contain many mitochondria?", a: "Mitochondria release energy by respiration, which powers the tail (flagellum) so the sperm can swim to the egg." }
      ] },
      { id: "w3r4", type: "match", marks: 4,
        prompt: "<b>Identify</b> the key adaptation of each specialised cell.",
        head: ["Specialised cell", "Key adaptation"],
        options: ["no nucleus, leaving more room for haemoglobin", "long extension that increases surface area", "midpiece packed with mitochondria and a long tail", "long axon with branched ends", "many chloroplasts"],
        rows: [
          { label: "Red blood cell (carries oxygen)", answer: "no nucleus, leaving more room for haemoglobin" },
          { label: "Root hair cell (absorbs water and minerals)", answer: "long extension that increases surface area" },
          { label: "Sperm cell (swims to the egg)", answer: "midpiece packed with mitochondria and a long tail" },
          { label: "Nerve cell (carries electrical signals)", answer: "long axon with branched ends" }
        ] },
      { id: "w3r5", type: "cloze", marks: 4,
        prompt: "Complete the description of stem cells.",
        text: "Stem cells are [[0]] cells. They divide to produce more stem cells: this is called [[1]]. Some of their daughter cells develop structures for one particular job: this is called [[2]]. The types of cell a stem cell can turn into is called its [[3]].",
        options: ["unspecialised", "specialised", "self-renewal", "differentiation", "potency", "osmosis"],
        blanks: ["unspecialised", "self-renewal", "differentiation", "potency"] },
      { id: "w3r6", type: "mcq", marks: 1,
        prompt: "Why do root hair cells have <b>no</b> chloroplasts?",
        options: ["They are too small to hold chloroplasts.", "They are underground, so they receive no light and cannot photosynthesise.", "Chloroplasts would block water from entering.", "They get all their energy from the soil."], answer: 1,
        explain: "Root hair cells are underground and never receive light, so chloroplasts would be useless. Their job is absorption, not photosynthesis." },

      { type: "info", exam: "<b>In criterion A this becomes:</b> the ADSCC question (A5), strand (ii): <b>apply</b> what you know about potency and rejection to a real treatment in the UAE." },

      { type: "info", mission: { n: 3, title: "Transport detective", lesson: "Lesson 5 · Cell transport",
        story: "Bustanica, Dubai's vertical farm, has a problem with its lettuce roots. First, prove you can work out how substances get in and out of cells." } },
      { type: "info", predict: { q: "A 1 cm agar cube and a 6 cm agar cube are soaked in acid for 10 minutes. Which one has the <b>greater percentage</b> of its volume reached by the acid?",
        options: ["The 1 cm cube", "The 6 cm cube", "Both the same: the acid moves at the same speed"], answer: 0,
        reveal: "The acid moves at the same speed into both, but the small cube has a much bigger surface area to volume ratio (6 : 1 compared with 1 : 1), so a much larger share of it is reached. Big cells have the same problem." } },
      { type: "info", sim: { name: "saVLab", title: "Agar cube lab: surface area to volume" } },
      { type: "info", sim: { name: "membraneLab", title: "Across the membrane: diffusion vs active transport" } },
      { type: "info", flash: [
        { q: "What happens to the SA:V ratio as a cell gets bigger?", a: "It decreases. Volume grows faster than surface area, so each unit of volume has less membrane for exchange. This is one reason cells divide instead of growing very large." },
        { q: "Passive vs active transport?", a: "Passive (diffusion, osmosis): down a concentration gradient, no energy needed. Active transport: against the gradient (low → high), needs energy from respiration (ATP) and carrier proteins." },
        { q: "What is dynamic equilibrium?", a: "When concentrations are equal: particles keep moving randomly, but there is no net change in concentration." }
      ] },
      { id: "w3r7", type: "numtable", marks: 4,
        prompt: "<b>Calculate</b> for each cube. Surface area = 6 × edge², volume = edge³, SA:V = surface area ÷ volume. Give SA:V as a number (for 6:1 type 6).",
        head: ["Value", "Answer"],
        rows: [
          { label: "SA:V of a 2 cm cube", answer: 3.0, tol: 0.05 },
          { label: "Surface area of a 5 cm cube (cm²)", answer: 150.0, tol: 0.05 },
          { label: "Volume of a 5 cm cube (cm³)", answer: 125.0, tol: 0.05 },
          { label: "SA:V of a 5 cm cube (to 1 d.p.)", answer: 1.2, tol: 0.05 }
        ] },
      { id: "w3r8", type: "match", marks: 4,
        prompt: "<b>Identify</b> the transport process in each situation at a root hair cell.",
        head: ["Situation", "Process"],
        options: ["diffusion", "osmosis", "active transport"],
        rows: [
          { label: "Oxygen moves into the root hair cell from water with more dissolved oxygen", answer: "diffusion" },
          { label: "Water moves into the root hair cell from a dilute solution", answer: "osmosis" },
          { label: "Mineral ions move in from soil water where their concentration is lower than in the cell", answer: "active transport" },
          { label: "Carbon dioxide made in respiration moves out of the cell", answer: "diffusion" }
        ] },
      { id: "w3r9", type: "mcq", marks: 1,
        prompt: "Which process needs energy from respiration?",
        options: ["Diffusion", "Osmosis", "Active transport", "All three"], answer: 2,
        explain: "Only active transport needs energy (ATP), because it moves substances against their concentration gradient." },

      { type: "info", exam: "<b>In criterion A this becomes:</b> question A6. It gives you data (6 : 1 and 1.5 : 1). <b>Quote the numbers</b> in your answer, then explain what a smaller SA : V means for exchange across the membrane." }
    ]
  },
  {
    crit: "A", name: "Knowing and understanding",
    items: [
      { type: "info",
        html: "<p>These questions are in the style of the MYP eAssessment. They test three strands: <b>(i)</b> explaining scientific knowledge, <b>(ii)</b> applying it to familiar and unfamiliar situations, and <b>(iii)</b> analysing and evaluating information to make a judgement.</p>" },

      { id: "w3a1", type: "text", marks: 3, minWords: 20,
        prompt: "<b>State</b> the three principles of cell theory.",
        model: "1. All living organisms are made of one or more cells (1). 2. The cell is the basic unit of structure and function in living organisms (1). 3. All cells arise from pre-existing cells (1).",
        points: ["All living things are made of one or more cells", "The cell is the basic unit of structure and function", "All cells come from pre-existing cells"] },

      { id: "w3a2", type: "text", marks: 4, minWords: 40,
        prompt: "<b>Compare and contrast</b> prokaryotic and eukaryotic cells.",
        hint: "<b>Compare and contrast</b> means give similarities AND differences. Use words like “both”, “whereas” and “however”. Aim for at least one similarity and three differences.",
        model: "Similarity: both prokaryotic and eukaryotic cells have a cell membrane, cytoplasm and ribosomes (1). Differences: prokaryotic cells have no nucleus and their DNA is free in the cytoplasm, whereas eukaryotic cells have their DNA enclosed in a nucleus (1). Prokaryotic cells have no membrane-bound organelles, whereas eukaryotic cells have organelles such as mitochondria (1). Prokaryotic cells are much smaller (about 0.1–10 µm) than eukaryotic cells (about 10–100 µm) (1).",
        points: ["Similarity: both have cell membrane / cytoplasm / ribosomes", "Nucleus: absent in prokaryotes (DNA free) vs present in eukaryotes", "Membrane-bound organelles only in eukaryotes", "Size: prokaryotes smaller than eukaryotes"] },

      { id: "w3a3", type: "text", marks: 3, minWords: 25,
        prompt: "A mutation stops the Golgi apparatus in a cell from working. <b>Predict</b> what would happen to the proteins made by this cell and <b>explain</b> your prediction.",
        model: "Proteins would still be made by the ribosomes and assembled in the endoplasmic reticulum (1), but they would not be modified and packaged (1), so they could not be sent to where they are needed in the cell or released from it, and they would not work properly (1).",
        points: ["Proteins are still made (ribosomes / ER)", "Golgi normally modifies and packages proteins", "So proteins are not packaged or transported to where they are needed"] },

      { id: "w3a4", type: "text", marks: 3, minWords: 25,
        prompt: "<b>Explain</b> how the structure of a root hair cell is suited to its function.",
        model: "A root hair cell absorbs water and mineral ions from the soil (1). Its long, thin extension increases the surface area of the membrane in contact with soil water, so more water and ions can be absorbed at the same time (1). It has no chloroplasts because it is underground and receives no light, so it does not photosynthesise; it may have many mitochondria to release energy for the active transport of mineral ions (1).",
        points: ["Function: absorbs water and mineral ions", "Long extension → larger surface area → faster absorption", "Second adaptation explained (no chloroplasts / mitochondria for active transport)"] },

      { id: "w3a5", type: "text", marks: 3, minWords: 30,
        prompt: "In 2023, the Abu Dhabi Stem Cells Center (ADSCC) treated a patient with Multiple Sclerosis using a bone-marrow stem-cell transplant made from the <b>patient's own</b> stem cells. <b>Explain</b> why doctors must choose a specific type of stem cell, and <b>suggest</b> why they used the patient's own cells.",
        model: "Stem cells have different potency: the type of stem cell determines which specialised cells it can differentiate into (1), so doctors must use a stem cell that can become the type of cell needed to repair that tissue; any stem cell would not work (1). Using the patient's own stem cells means the immune system recognises them as 'self', so they are less likely to be rejected (1).",
        points: ["Potency: stem-cell type determines which cells it can become", "So the stem cell must match the tissue being repaired", "Own cells: less risk of rejection by the immune system"] },

      { id: "w3a6", type: "text", marks: 3, minWords: 30,
        prompt: "A 1 cm cube has a surface area to volume ratio of 6:1, but a 4 cm cube has a ratio of only 1.5:1. Use this information to <b>explain</b> why cells divide instead of growing very large.",
        model: "As a cell gets larger, its volume increases faster than its surface area, so the SA:V ratio falls (from 6:1 to 1.5:1) (1). The membrane is the exchange surface, so a large cell has less membrane per unit of volume to take in nutrients and oxygen and remove wastes (1). Substances would not move in and out fast enough to meet the cell's needs, so cells divide to keep a high SA:V ratio (1).",
        points: ["Volume increases faster than surface area, SA:V decreases (uses data)", "Less membrane (exchange surface) per unit volume", "Exchange too slow for the cell's needs, so cells divide"] },

      { id: "w3a8", type: "text", marks: 3, minWords: 30,
        prompt: "A student writes: <i>“Diffusion and active transport are the same thing, because both move particles across the cell membrane.”</i> <b>Evaluate</b> this statement.",
        hint: "<b>Evaluate</b> means weigh up what is correct and what is wrong in the statement, then give a judgement.",
        model: "The student is partly right: both processes move particles across the cell membrane (1). However, diffusion is passive: particles move down a concentration gradient (high to low) and no energy is needed, whereas active transport moves particles against a concentration gradient (low to high) and needs energy from respiration (ATP) and carrier proteins (1). So the statement is incorrect: they are different processes, for example oxygen enters a root hair cell by diffusion but mineral ions are absorbed by active transport (1).",
        points: ["Similarity acknowledged: both move particles across the membrane", "Difference: direction relative to gradient and energy (ATP) needed", "Clear judgement that the statement is wrong, with an example"] }
    ]
  }
  ]
},
{
  id: "w4",
  title: "Osmosis investigations: planning and processing",
  topic: "Year 10 recap: Cells",
  lessons: "Year 10 Unit 1 – Lessons 6–7",
  opens: "2026-11-09T07:00:00+04:00",
  due: "2026-11-15T23:59:00+04:00",
  minutes: 60,
  sections: [
  {
    crit: "R", name: "Skills workshop: how to write criteria B and C", short: "skills workshop",
    tests: "Step-by-step lessons on how to write each part of criteria B and C, with quick marked checks.",
    how: "Each mission teaches <b>one part</b> of criterion B or C. Read the <b>Learn</b> card, then answer the <b>Check yourself</b> questions. Finish each mission to unlock the next one. You will use every skill in the carrot investigation afterwards.",
    items: [
      /* ---------- Mission 1: research question ---------- */
      { type: "info", mission: { n: 1, title: "The research question", lesson: "Criterion B · strand i",
        story: "Every investigation starts with one clear question. A focused question tells the examiner exactly what you will change, what you will measure and how." } },
      { type: "info", learn: { h: "Write a research question in 4 parts",
        html: "<div class='frame'>How does <span class='p1'>① the independent variable + its range</span> affect <span class='p2'>② the dependent variable</span> <span class='p3'>③ + how it is measured</span> in <span class='p4'>④ the organism or tissue</span>?</div>"
          + "<ol class='steps'><li><b>Name the variable you change</b> and give its range, e.g. <i>salt concentration (0, 2, 4, 6, 8 and 10%)</i>.</li><li><b>Name what you measure.</b> Be precise: <i>percentage change in mass</i>, not just <i>mass</i> or <i>the cucumber</i>.</li><li><b>Say how you measure it</b>, with the instrument and its precision: <i>using a balance (0.01 g)</i>.</li><li><b>Name the tissue or organism</b> and, if useful, the time: <i>cucumber chips after 20 minutes</i>.</li></ol>"
          + "<div class='wex'><b>Worked example: Lesson 7</b>How does <span class='p1'>salt concentration (0, 2, 4, 6, 8 and 10%)</span> affect <span class='p2'>the percentage change in mass</span> of <span class='p4'>cucumber chips after 20 minutes</span>, <span class='p3'>measured using a balance (0.01 g)</span>?</div>"
          + "<div class='mist'><b>Common mistakes</b><ul><li>“<i>Does salt affect cucumbers?</i>” A yes/no question with no range and no measurement.</li><li>“<i>What happens to cucumber in salt water?</i>” The dependent variable is missing.</li></ul></div>"
          + "<p><b>Strand i also asks you to explain the problem.</b> In 2–3 sentences, say <b>why</b> the question matters, using science: water moves in or out of cells by osmosis, plant cells need water to stay turgid, and a real example such as salty soil in the UAE.</p>" } },
      { id: "w4r1", type: "mcq", marks: 1,
        prompt: "Which is the <b>best</b> research question?",
        options: ["Does sugar affect potatoes?", "What happens to potato cylinders in sugar solution?", "How does sucrose concentration (0, 0.2, 0.4, 0.6, 0.8 and 1.0 mol/dm³) affect the percentage change in mass of potato cylinders after 30 minutes, measured using a balance (0.01 g)?", "How does the mass of a potato change over time?"], answer: 2,
        explain: "It has all four parts: the independent variable with its range, the dependent variable, how it is measured, and the tissue. The others are missing the range, the measurement or the independent variable." },
      { id: "w4r2", type: "match", marks: 4,
        prompt: "A student wrote: <i>“How does the concentration of sugar solution (0–1.0 mol/dm³) affect the percentage change in length of beetroot strips after 30 minutes, measured with a ruler (mm)?”</i> <b>Identify</b> each part of the question.",
        head: ["Part of the question", "What it is"],
        options: ["the independent variable", "the range of the independent variable", "the dependent variable", "how the dependent variable is measured", "a control variable"],
        rows: [
          { label: "concentration of sugar solution", answer: "the independent variable" },
          { label: "0–1.0 mol/dm³", answer: "the range of the independent variable" },
          { label: "percentage change in length", answer: "the dependent variable" },
          { label: "measured with a ruler (mm)", answer: "how the dependent variable is measured" }
        ] },
      { type: "info", exam: "<b>In criterion B this becomes:</b> “<b>Formulate</b> a research question” and “<b>Explain</b> why this question is worth investigating.” For the top level (7–8), all four parts must be there <i>and</i> your explanation must use science, not just “because it is interesting”." },

      /* ---------- Mission 2: hypothesis ---------- */
      { type: "info", mission: { n: 2, title: "The hypothesis", lesson: "Criterion B · strand ii",
        story: "A hypothesis is a prediction you can test, plus the science that explains it. The “because” part is where most of the marks are." } },
      { type: "info", learn: { h: "If … then … because …",
        html: "<div class='frame'>If <span class='p1'>[the independent variable changes like this]</span>, then <span class='p2'>[the dependent variable will change like this]</span>, because <span class='p3'>[the scientific reason]</span>.</div>"
          + "<ol class='steps'><li><b>Predict both ends.</b> Say what happens at <b>low</b> concentration AND at <b>high</b> concentration.</li><li><b>Give the direction:</b> gain or lose mass, and “more as the concentration increases”.</li><li><b>Explain with the 4 osmosis steps</b> from Lesson 6:<br>① <b>Compare:</b> the solution is hypotonic / hypertonic compared with the cell sap.<br>② <b>Water concentration:</b> so the water concentration is higher / lower outside the cells.<br>③ <b>Movement:</b> water moves into / out of the cells by osmosis through the partially permeable membrane.<br>④ <b>Effect:</b> so the cells become turgid and gain mass / become plasmolysed and lose mass.</li></ol>"
          + "<div class='wex'><b>Worked example: Lesson 7</b>If the salt concentration is low (0–1%), then the chips will gain mass, because the solution is hypotonic: the water concentration is higher outside, so water enters the cells by osmosis through the partially permeable membrane and the cells become turgid. If the salt concentration is high (4–10%), then the chips will lose mass, and lose more as the concentration increases, because the solution is hypertonic, so water leaves the cells by osmosis and the cells become plasmolysed.</div>"
          + "<div class='mist'><b>Not good enough</b><ul><li>“<i>The cucumber will change.</i>” This can't be tested: change how?</li><li>“<i>If salt increases, mass decreases.</i>” There's no “because”, so there are no marks for scientific reasoning.</li><li>“<i>Salt moves into the cells.</i>” Wrong: in osmosis, <b>water</b> moves.</li></ul></div>" } },
      { id: "w4r3", type: "cloze", marks: 6,
        prompt: "Complete this hypothesis for potato cylinders in sucrose solution.",
        text: "If the sucrose concentration is [[0]], then the potato cylinders will gain mass, because the solution is [[1]] compared with the cell sap. The water concentration is [[2]] outside the cells, so water moves [[3]] the cells by [[4]] through the partially permeable membrane, and the cells become [[5]].",
        options: ["low", "high", "hypotonic", "hypertonic", "higher", "lower", "into", "out of", "osmosis", "active transport", "turgid", "plasmolysed"],
        blanks: ["low", "hypotonic", "higher", "into", "osmosis", "turgid"] },
      { id: "w4r4", type: "mcq", marks: 1,
        prompt: "Which “because” correctly explains why potato cylinders <b>lose</b> mass in a <b>high</b> sucrose concentration?",
        options: ["because sucrose moves into the cells and makes them heavier", "because the solution is hypertonic, so the water concentration is lower outside and water moves out of the cells by osmosis", "because the cells use energy to pump water out by active transport", "because the solution is hypotonic, so water moves into the cells"], answer: 1,
        explain: "In a hypertonic solution the water concentration is lower outside the cells, so water leaves by osmosis (a passive process). Sucrose is too big to cross the membrane." },
      { type: "info", exam: "<b>In criterion B this becomes:</b> “<b>Formulate</b> a testable hypothesis and <b>explain</b> it using scientific reasoning.” A prediction alone gets 1–2. A prediction for low <i>and</i> high concentrations, explained with the 4 osmosis steps, gets 7–8." },

      /* ---------- Mission 3: variables and sufficient data ---------- */
      { type: "info", mission: { n: 3, title: "Variables and sufficient data", lesson: "Criterion B · strand iii",
        story: "Examiners want to know exactly what you will change, what you will measure, what you will keep the same, and how much data you will collect." } },
      { type: "info", learn: { h: "Explain every variable, not just name it",
        html: "<div class='tbl'><table><thead><tr><th>Variable</th><th>What to write</th><th>Example (Lesson 7)</th></tr></thead><tbody>"
          + "<tr><td><b>Independent</b><br>(what you change)</td><td>What it is, <b>how</b> you change it, and the values you will use (at least 5)</td><td>Salt concentration: use 0, 2, 4, 6, 8 and 10% solutions, measuring 50 cm³ of each with a measuring cylinder.</td></tr>"
          + "<tr><td><b>Dependent</b><br>(what you measure)</td><td>What it is, the <b>instrument</b> and <b>units</b>, and any calculation</td><td>% change in mass: weigh each chip before and after on a balance (0.01 g), then % change = (end − start) ÷ start × 100.</td></tr>"
          + "<tr><td><b>Control</b><br>(kept the same)</td><td>What + how + why</td><td>See the sentence frame below.</td></tr></tbody></table></div>"
          + "<div class='frame'>I will keep <span class='p1'>[the control variable]</span> the same by <span class='p2'>[exactly how]</span>, because <span class='p3'>[how it would otherwise change the results]</span>.</div>"
          + "<div class='wex'><b>Worked example</b>I will keep the <b>size of the chips</b> the same by cutting every chip to 4 cm × 1 cm × 0.5 cm with a ruler, because a bigger chip has a larger surface area and would gain or lose more water.</div>"
          + "<p><b>Sufficient data</b> means enough data to see a pattern you can trust:</p><ul><li>at least <b>5 values</b> of the independent variable, including 0%</li><li>at least <b>3 repeats</b> at each value, so you can spot anomalies and calculate a <b>mean</b></li></ul><p><b>Relevant data</b> means data that answers your question, e.g. mass before and after, not the colour of the chip.</p>" } },
      { id: "w4r5", type: "match", marks: 5,
        prompt: "Potato cylinders are left in sucrose solutions (0–1.0 mol/dm³) for 30 minutes and weighed before and after. <b>Identify</b> each variable.",
        head: ["Variable", "Type"],
        options: ["independent variable", "dependent variable", "control variable"],
        rows: [
          { label: "sucrose concentration", answer: "independent variable" },
          { label: "percentage change in mass", answer: "dependent variable" },
          { label: "length and diameter of each cylinder", answer: "control variable" },
          { label: "time left in the solution", answer: "control variable" },
          { label: "volume of solution in each tube", answer: "control variable" }
        ] },
      { id: "w4r6", type: "mcq", marks: 1,
        prompt: "Which plan collects <b>sufficient</b> data?",
        options: ["2 concentrations, 1 cylinder each", "6 concentrations, 1 cylinder each", "6 concentrations, 3 cylinders each, then calculate a mean for each concentration", "1 concentration, 10 cylinders"], answer: 2,
        explain: "At least 5 values of the independent variable show the pattern, and 3 repeats at each value let you spot anomalies and calculate a reliable mean." },
      { type: "info", exam: "<b>In criterion B this becomes:</b> “<b>Explain</b> how you will manipulate the variables” and “<b>Explain</b> how you will collect sufficient data.” Use the what + how + why frame for every control variable." },

      /* ---------- Mission 4: method and safety ---------- */
      { type: "info", mission: { n: 4, title: "The method and safety", lesson: "Criterion B · strand iv",
        story: "A good method is like a recipe: another student could follow it and get the same results without asking you a single question." } },
      { type: "info", learn: { h: "Write a method someone else could follow",
        html: "<ol class='steps'><li><b>Number every step</b>, with one action per step.</li><li><b>Give amounts and sizes:</b> 50 cm³, 4 cm × 1 cm × 0.5 cm, 20 minutes.</li><li><b>Name the equipment</b> and its precision: balance (0.01 g), measuring cylinder, ruler.</li><li><b>Show how each control is kept the same</b>, e.g. “blot by rolling once on a paper towel”.</li><li><b>Measure before AND after</b> (start mass and end mass).</li><li><b>Say how many repeats</b> you will do, and that you will calculate the mean.</li><li><b>Safety:</b> name the hazard, then the precaution: “The knife is sharp, so cut on a white tile, away from your hand.”</li></ol>"
          + "<div class='mist'><b>Not good enough</b><ul><li>“<i>Put the chip in salt water, then weigh it.</i>” There are no amounts, no start mass, no time and no repeats.</li><li>“<i>Be careful.</i>” This is not a safety precaution: what hazard, and what will you do?</li></ul></div>" } },
      { id: "w4r7", type: "match", marks: 6,
        prompt: "Put the cucumber method in the right order. Choose the action for each step.",
        head: ["Step", "Action"],
        options: ["Label six beakers and add 50 cm³ of each salt solution", "Cut six chips, 4 cm × 1 cm × 0.5 cm, using a ruler", "Blot each chip once and weigh it on a balance (0.01 g)", "Put one chip in each beaker for exactly 20 minutes", "Remove each chip with forceps, blot it the same way and reweigh", "Repeat twice more and calculate the mean % change"],
        rows: [
          { label: "Step 1", answer: "Label six beakers and add 50 cm³ of each salt solution" },
          { label: "Step 2", answer: "Cut six chips, 4 cm × 1 cm × 0.5 cm, using a ruler" },
          { label: "Step 3", answer: "Blot each chip once and weigh it on a balance (0.01 g)" },
          { label: "Step 4", answer: "Put one chip in each beaker for exactly 20 minutes" },
          { label: "Step 5", answer: "Remove each chip with forceps, blot it the same way and reweigh" },
          { label: "Step 6", answer: "Repeat twice more and calculate the mean % change" }
        ] },
      { id: "w4r8", type: "mcq", marks: 1,
        prompt: "Which is a correct safety precaution?",
        options: ["Wear a lab coat to stay clean.", "Be careful with the salt.", "The knife is sharp, so cut on a white tile, away from your hand.", "Do not eat the cucumber because it tastes salty."], answer: 2,
        explain: "A safety precaution names the hazard (sharp knife) and the action that reduces the risk (cut on a tile, away from your hand)." },
      { type: "info", exam: "<b>In criterion B this becomes:</b> “<b>Design</b> a logical, complete and safe method.” For 7–8, it must include amounts, sizes, time, measuring instruments, how controls are kept the same, repeats and safety." },

      /* ---------- Mission 5: process and present data ---------- */
      { type: "info", mission: { n: 5, title: "Process and present the data", lesson: "Criterion C · strand i",
        story: "Raw masses mean nothing until you process them. Calculate, average, then show the pattern on a graph that the examiner can read at a glance." } },
      { type: "info", learn: { h: "Calculate → average → present",
        html: "<ol class='steps'><li><b>Change in mass</b> = end mass − start mass. Keep the sign: <b>+</b> for a gain, <b>−</b> for a loss.</li><li><b>% change</b> = change ÷ start mass × 100. Round to 1 decimal place.</li><li><b>Mean</b> = add the repeats, then divide by how many you used. <b>Leave out an anomaly</b> and divide by the number you kept. The mean of negative values is negative.</li></ol>"
          + "<div class='wex'><b>Worked example: Lesson 7</b>Start = 2.40 g, end = 2.04 g<br>Change = 2.04 − 2.40 = <b>−0.36 g</b><br>% change = −0.36 ÷ 2.40 × 100 = <b>−15.0%</b></div>"
          + "<p><b>Table rules:</b> the independent variable goes in the first column; units go in the headings, not in the cells; use the same number of decimal places.</p>"
          + "<p><b>Graph rules:</b></p><ul><li>Independent variable on the x-axis, dependent variable on the y-axis, both with units.</li><li>When values are positive <b>and</b> negative, the <b>zero line goes inside the graph</b>, not at the bottom.</li><li>Use even steps above and below zero.</li><li>Plot each mean with a small cross (×), then draw a smooth line of best fit (don't join the dots).</li></ul>"
          + "<div class='mist'><b>Mistakes from the last assessment</b><ul><li>Starting the y-axis at 0 at the bottom, so negative values had nowhere to go.</li><li>Putting −2 lower than −8. Remember: −8 is further <b>below</b> zero.</li><li>Plotting a negative value above the zero line.</li></ul></div>" } },
      { id: "w4r9", type: "numtable", marks: 3,
        prompt: "<b>Calculate</b> the % change in mass for each potato cylinder (1 d.p.).<div class='tbl'><table><thead><tr><th>Cylinder</th><th>Start mass (g)</th><th>End mass (g)</th></tr></thead><tbody><tr><td>A</td><td>2.50</td><td>2.80</td></tr><tr><td>B</td><td>3.20</td><td>2.88</td></tr><tr><td>C</td><td>2.00</td><td>1.93</td></tr></tbody></table></div>",
        howto: "Type the number to 1 decimal place. Type a minus sign (-) for a loss, e.g. -4.5.",
        head: ["Cylinder", "% change in mass"],
        rows: [
          { label: "A", answer: 12.0, tol: 0.05 },
          { label: "B", answer: -10.0, tol: 0.05, hint: "Change = 2.88 − 3.20 = −0.32 g; −0.32 ÷ 3.20 × 100" },
          { label: "C", answer: -3.5, tol: 0.05, hint: "Change = 1.93 − 2.00 = −0.07 g; −0.07 ÷ 2.00 × 100" }
        ] },
      { id: "w4r10", type: "numtable", marks: 2,
        prompt: "<b>Calculate</b> the mean % change for each concentration (1 d.p.). One result is an anomaly: leave it out.<div class='tbl'><table><thead><tr><th>Concentration</th><th>Trial 1</th><th>Trial 2</th><th>Trial 3</th></tr></thead><tbody><tr><td>0.1 mol/dm³</td><td>+6.2</td><td>+5.6</td><td>+6.5</td></tr><tr><td>0.5 mol/dm³</td><td>−5.2</td><td>−1.0</td><td>−5.4</td></tr></tbody></table></div>",
        howto: "Type the number to 1 decimal place. Type a minus sign (-) for a negative value.",
        head: ["Concentration", "Mean % change"],
        rows: [
          { label: "0.1 mol/dm³", answer: 6.1, tol: 0.05 },
          { label: "0.5 mol/dm³", answer: -5.3, tol: 0.05, hint: "−1.0 is the anomaly. (−5.2 + −5.4) ÷ 2 = −5.3" }
        ] },
      { type: "info", sim: { name: "graphPlot", title: "Practice: plot positive and negative values" } },
      { type: "info", exam: "<b>In criterion C this becomes:</b> “<b>Calculate</b>…”, “<b>Present</b> the data in a suitable table” and “<b>Plot</b> a graph”. Marks are lost for a missing sign, a missing unit or a zero line in the wrong place." },

      /* ---------- Mission 6: interpret ---------- */
      { type: "info", mission: { n: 6, title: "Describe, explain and test the hypothesis", lesson: "Criterion C · strands ii and iii",
        story: "First say what the data shows, with numbers. Then explain it with science. Then decide whether your hypothesis was right." } },
      { type: "info", learn: { h: "Describe → explain → judge the hypothesis",
        html: "<p><b>1. Describe the trend</b> (what happens), with numbers and units:</p><div class='frame'>As the <span class='p1'>[independent variable]</span> increased from <span class='p1'>__</span> to <span class='p1'>__</span>, the <span class='p2'>[dependent variable]</span> decreased from <span class='p2'>__</span> to <span class='p2'>__</span>.</div>"
          + "<ul><li>Say where the line <b>crosses zero</b>: that is where there is no net water movement, so the solution is <b>isotonic</b> with the cell sap. Read it off the graph and give it as an estimate.</li><li>Mention any anomaly.</li></ul>"
          + "<p><b>2. Explain the trend</b> (why it happens) using the 4 osmosis steps: compare → water concentration → osmosis through the partially permeable membrane → effect on the cells and their mass.</p>"
          + "<p><b>3. Judge the hypothesis.</b> Is it supported, partly supported or not supported? Quote data as evidence.</p>"
          + "<div class='wex'><b>Worked example</b>As the salt concentration increased from 0% to 10%, the mean % change in mass decreased from +6.0% to −18.0%. The line crosses zero at about 1%, so 1% salt is roughly isotonic with the cucumber cell sap. At 0%, the solution was hypotonic, so water moved into the cells by osmosis… My hypothesis is supported because the chips gained mass at low concentrations and lost more mass as the concentration increased.</div>" } },
      { id: "w4r11", type: "mcq", marks: 1,
        prompt: "Mean % change in mass of potato: 0.0 mol/dm³ = +15.0%, 0.4 mol/dm³ = −5.1%, 1.0 mol/dm³ = −19.2%. Which is the best <b>description</b> of the trend?",
        options: ["The potato changed mass.", "The mass went down.", "As the sucrose concentration increased from 0.0 to 1.0 mol/dm³, the mean % change in mass decreased from +15.0% to −19.2%.", "The potato lost mass because water moved out by osmosis."], answer: 2,
        explain: "A description gives the direction of the trend with numbers and units from both ends. Option 4 is an explanation, not a description." },
      { id: "w4r12", type: "num", marks: 1, min: 0.28, max: 0.36, unit: "mol/dm³",
        prompt: "Mean % change: 0.2 mol/dm³ = +3.0% and 0.4 mol/dm³ = −2.0%. <b>Estimate</b> the concentration where the line crosses zero (the isotonic point).",
        explain: "Zero is between +3.0 and −2.0. That's 3 parts out of 5 of the way from 0.2 to 0.4: 0.2 + 0.6 × 0.2 = 0.32 mol/dm³. Accept 0.28–0.36." },
      { type: "info", exam: "<b>In criterion C this becomes:</b> “<b>Describe</b> the trend”, “<b>Explain</b> the results using scientific reasoning” and “<b>Discuss</b> whether the hypothesis is supported.” Always quote numbers from the data." },

      /* ---------- Mission 7: evaluate and improve ---------- */
      { type: "info", mission: { n: 7, title: "Evaluate and improve the method", lesson: "Criterion C · strands iv and v",
        story: "No method is perfect. Examiners reward students who spot what went wrong, say how it affected the results, and fix it precisely." } },
      { type: "info", learn: { h: "Limitation → effect → improvement",
        html: "<div class='frame'><span class='p1'>Limitation:</span> what was wrong. <span class='p2'>Effect:</span> how it changed the results. <span class='p3'>Improvement:</span> exactly what you would do instead.</div>"
          + "<div class='tbl'><table><thead><tr><th>Limitation</th><th>Effect on results</th><th>Specific improvement</th></tr></thead><tbody>"
          + "<tr><td>Chips blotted differently</td><td>Extra surface water adds mass, so the end mass is too high</td><td>Blot every chip by rolling it once on a paper towel</td></tr>"
          + "<tr><td>Only one chip per concentration</td><td>An anomaly can't be spotted</td><td>Do 3 repeats and calculate a mean</td></tr>"
          + "<tr><td>Chips cut to different sizes by eye</td><td>Different surface areas, so different amounts of water move</td><td>Cut with a cork borer and ruler to the same length and diameter</td></tr>"
          + "<tr><td>Temperature not controlled</td><td>Osmosis is faster when it's warmer</td><td>Keep all tubes in a water bath at 25 °C</td></tr>"
          + "<tr><td>Big gaps between concentrations</td><td>The isotonic point can only be estimated roughly</td><td>Add more concentrations close to where the line crosses zero</td></tr></tbody></table></div>"
          + "<div class='mist'><b>Too vague, so no marks</b><ul><li>“<i>Be more careful.</i>” “<i>Use better equipment.</i>” “<i>Human error.</i>”</li></ul></div>"
          + "<p><b>Extension:</b> suggest a <b>new</b> question to investigate next, e.g. testing a different vegetable or a different solute.</p>" } },
      { id: "w4r13", type: "match", marks: 4,
        prompt: "Match each limitation to the best improvement.",
        head: ["Limitation", "Improvement"],
        options: ["Blot every chip by rolling it once on a paper towel", "Do 3 repeats at each concentration and calculate a mean", "Keep all the tubes in a water bath at 25 °C", "Add more concentrations close to where the line crosses zero"],
        rows: [
          { label: "Some chips were wetter than others when weighed", answer: "Blot every chip by rolling it once on a paper towel" },
          { label: "There was only one chip at each concentration", answer: "Do 3 repeats at each concentration and calculate a mean" },
          { label: "The room got warmer during the experiment", answer: "Keep all the tubes in a water bath at 25 °C" },
          { label: "The isotonic point could only be estimated roughly", answer: "Add more concentrations close to where the line crosses zero" }
        ] },
      { id: "w4r14", type: "mcq", marks: 1,
        prompt: "Which improvement would get marks?",
        options: ["Be more careful when cutting.", "Use better equipment.", "Use a cork borer and a ruler to cut every cylinder to 1 cm diameter and 4 cm long.", "Avoid human error."], answer: 2,
        explain: "It says exactly what to do and with which equipment, so it is a specific improvement. The others are too vague." },
      { type: "info", exam: "<b>In criterion C this becomes:</b> “<b>Evaluate</b> the method” and “<b>Suggest</b> improvements and an extension.” Write limitation → effect → improvement for each point." }
    ]
  },
  {
    crit: "B", name: "Inquiring and designing: salty water on a UAE farm",
    tests: "Plan a new osmosis investigation using the steps from the skills workshop: research question, hypothesis, variables, sufficient data and method.",
    tip: "Use the sentence frame in each hint. Every answer must mention the carrot, the salt solutions and osmosis.",
    items: [
      { type: "info",
        html: "<p><b>The problem.</b> A farm near Al Ain grows carrots using water pumped from a well. Over the years the groundwater has become saltier. The farmer has noticed that carrots in the saltiest fields are soft and bendy instead of firm.</p><p>A carrot is a <b>root</b>. Its cells take in water from the soil by osmosis. You are a plant scientist. Plan an investigation to find out how the salt concentration of the water affects carrot root cells.</p><div class='tbl'><table><thead><tr><th>Equipment available</th></tr></thead><tbody><tr><td>carrots · cork borer (1 cm diameter) · ruler · knife and white tile · sodium chloride (salt) solutions: 0, 0.5, 1.0, 1.5, 2.0 and 2.5% · boiling tubes and rack · 20 cm³ measuring cylinder · balance (0.01 g) · paper towels · forceps · stopwatch · marker pen · eye protection</td></tr></tbody></table></div>" },
      { type: "info", guide: {
        title: "Your criterion B checklist",
        intro: "Answer B1–B8 in order. Each one matches a mission from the skills workshop. Use the frames in the hints.",
        steps: [
          { h: "Research question and the problem", strand: "Strand i", what: "Four parts: independent variable + range, dependent variable, how it is measured, the tissue. Then explain why it matters, using osmosis.",
            starters: ["How does … (0–2.5%) affect … measured using …?", "Root cells take in water by osmosis, so…"] },
          { h: "Hypothesis", strand: "Strand ii", what: "Predict what happens at low AND high salt concentrations. Explain with the 4 osmosis steps.",
            starters: ["If the salt concentration is low, then…", "because the solution is hypotonic…"] },
          { h: "Variables and sufficient data", strand: "Strand iii", what: "Explain how you change the independent variable, how you measure the dependent variable, and how you keep each control variable the same.",
            starters: ["I will keep … the same by …, because…", "I will repeat each concentration 3 times so that…"] },
          { h: "Method and safety", strand: "Strand iv", what: "Numbered steps with amounts, sizes, time, instruments, repeats and safety.",
            starters: ["1. Put on eye protection because…", "2. Use the cork borer to cut…"] }
        ],
        ladder: [
          { lv: "1–2", verb: "States", d: "a question, a prediction and the variables" },
          { lv: "3–4", verb: "Outlines", d: "a question, a hypothesis with some science, and how variables are changed" },
          { lv: "5–6", verb: "Describes", d: "the question, a hypothesis with reasoning, and how sufficient data are collected" },
          { lv: "7–8", verb: "Explains", d: "the problem, a hypothesis with correct scientific reasoning, and every variable, with a complete, safe method" }
        ],
        checklist: ["Units with every measurement (%, g, cm³, min)", "The 4 osmosis steps in the hypothesis", "What + how + why for each control variable", "At least 3 repeats and a mean", "Safety: the hazard and the precaution"]
      } },

      { id: "w4b1", type: "text", marks: 2, minWords: 20,
        prompt: "<b>Formulate</b> a focused research question for this investigation.",
        hint: "How does <b>[independent variable + range]</b> affect the <b>[dependent variable]</b> of <b>[tissue + time]</b>, measured using <b>[instrument]</b>?",
        model: "How does the concentration of salt solution (0, 0.5, 1.0, 1.5, 2.0 and 2.5%) affect the percentage change in mass of carrot cylinders after 60 minutes, measured using a balance (0.01 g)?",
        points: ["Independent variable with its range (salt concentration 0–2.5%)", "Dependent variable and how it is measured (% change in mass, balance), with the tissue (carrot)"] },

      { id: "w4b2", type: "text", marks: 3, minWords: 30,
        prompt: "<b>Explain</b> why this question is worth investigating. Use scientific reasoning and the farmer's problem.",
        hint: "Carrot root cells take in water by … . If the soil water is too salty, … . This matters to the farmer because … . Finding the concentration where the cells neither gain nor lose water tells us … .",
        model: "Carrot root cells take in water from the soil by osmosis, and they need water to stay turgid so the carrot is firm (1). If the well water is too salty it becomes hypertonic to the root cells, so water leaves the cells by osmosis and the carrots become soft and bendy, which is what the farmer has seen (1). Finding the salt concentration at which the carrot neither gains nor loses mass tells the farmer the highest salt level the water can have before the crop is damaged, which matters in the UAE where groundwater is becoming saltier (1).",
        points: ["Root cells take in water by osmosis / need water to stay turgid", "Salty (hypertonic) water makes cells lose water → soft carrots", "Real-world value: safe salt level for irrigation / UAE groundwater"] },

      { id: "w4b3", type: "text", marks: 4, minWords: 45,
        prompt: "<b>Formulate</b> a testable hypothesis and <b>explain</b> it using scientific reasoning. Predict what happens at <b>low</b> and at <b>high</b> salt concentrations.",
        hint: "If the salt concentration is low (…%), then the carrot cylinders will … mass, because the solution is … compared with the cell sap, so the water concentration is … outside, and water moves … the cells by osmosis through the partially permeable membrane, so the cells become … . If the salt concentration is high (…%), then … .",
        model: "If the salt concentration is low (0–0.5%), then the carrot cylinders will gain mass, because the solution is hypotonic compared with the cell sap: the water concentration is higher outside the cells, so water moves into the cells by osmosis through the partially permeable membrane and the cells become turgid (2). If the salt concentration is high (1.5–2.5%), then the cylinders will lose mass, and lose more as the concentration increases, because the solution is hypertonic: the water concentration is lower outside, so water moves out of the cells by osmosis and the cells become plasmolysed (2).",
        points: ["Testable prediction for low concentration (gain mass)", "Testable prediction for high concentration (lose more mass as concentration increases)", "Reasoning: hypotonic / hypertonic and water concentration", "Reasoning: osmosis through a partially permeable membrane → turgid / plasmolysed"] },

      { id: "w4b4", type: "match", marks: 3,
        prompt: "<b>Identify</b> the variables and the measuring instrument.",
        head: ["Part of the plan", "In this investigation"],
        options: ["salt concentration", "percentage change in mass", "balance (0.01 g)", "measuring cylinder", "size of the carrot cylinders"],
        rows: [
          { label: "Independent variable", answer: "salt concentration" },
          { label: "Dependent variable", answer: "percentage change in mass" },
          { label: "Instrument used to measure the dependent variable", answer: "balance (0.01 g)" }
        ] },

      { id: "w4b5", type: "text", marks: 2, minWords: 25,
        prompt: "<b>Explain</b> how you will change the independent variable and how you will measure the dependent variable. Include units.",
        hint: "I will change the salt concentration by … . I will measure the dependent variable by weighing each cylinder … and … , then calculate % change = … .",
        model: "I will change the salt concentration by putting 20 cm³ of each salt solution (0, 0.5, 1.0, 1.5, 2.0 and 2.5%) into a labelled boiling tube, measured with a measuring cylinder (1). I will weigh each carrot cylinder on a balance (0.01 g) before and after 60 minutes in the solution, then calculate % change in mass = (end mass − start mass) ÷ start mass × 100 (1).",
        points: ["IV changed: 20 cm³ of each concentration in labelled tubes", "DV: mass before and after on a balance (g), converted to % change"] },

      { id: "w4b6", type: "text", marks: 3, minWords: 45,
        prompt: "<b>State</b> three control variables. For each one, <b>explain</b> how you will keep it the same and why.",
        hint: "Use this frame three times: I will keep <b>[control variable]</b> the same by <b>[exactly how]</b>, because <b>[how it would change the results]</b>.",
        model: "1. Size of the carrot cylinders: cut each one with the 1 cm cork borer and a ruler to 4 cm long, because a bigger cylinder has more surface area and would gain or lose more water (1). 2. Time in the solution: use a stopwatch and leave every cylinder for exactly 60 minutes, because a longer time lets more water move by osmosis (1). 3. Volume of solution: measure 20 cm³ into each tube with a measuring cylinder, so every cylinder is fully covered. (Also accept: blotting the same way, same carrot, same temperature.) (1)",
        points: ["Control 1 + how + why", "Control 2 + how + why", "Control 3 + how + why"] },

      { id: "w4b7", type: "text", marks: 2, minWords: 20,
        prompt: "<b>Explain</b> how you will collect <b>sufficient</b> data.",
        hint: "I will test … concentrations and repeat each one … times, so that … .",
        model: "I will test six salt concentrations (0–2.5%), which is enough to see the trend and where the line crosses zero (1). I will use three cylinders at each concentration and calculate a mean, so that I can spot and leave out any anomaly and the results are more reliable (1).",
        points: ["At least 5 concentrations to show the trend", "3 repeats at each concentration + mean, to spot anomalies"] },

      { id: "w4b8", type: "text", marks: 6, minWords: 80,
        prompt: "<b>Design</b> a method that another student could follow. Write numbered steps. Include safety.",
        hint: "1. Safety: … because … . 2. Label six boiling tubes … and add … cm³ of … . 3. Use the cork borer to cut … and trim each cylinder to … cm with … . 4. Blot each cylinder … and weigh it … . 5. Put … and start the stopwatch for … minutes. 6. Remove … , blot … and reweigh. 7. Repeat … times and calculate … .",
        model: "1. Put on eye protection, because salt solution stings the eyes. Cut on a white tile, away from your hand, because the knife is sharp. 2. Label six boiling tubes 0, 0.5, 1.0, 1.5, 2.0 and 2.5% and add 20 cm³ of the matching salt solution to each, using a measuring cylinder. 3. Use the 1 cm cork borer to cut six carrot cylinders and trim each one to 4 cm with a ruler. 4. Blot each cylinder by rolling it once on a paper towel, then weigh it on a balance (0.01 g) and record the start mass. 5. Put one cylinder into each tube and start the stopwatch for 60 minutes. 6. Remove each cylinder with forceps, blot it in the same way and record the end mass. 7. Repeat steps 2–6 twice more (3 cylinders per concentration) and calculate the mean % change in mass for each concentration. 8. Wipe up any spills and do not eat anything used in the lab.",
        points: ["Numbered, logical order", "Volumes and concentrations of solutions", "Cylinder size controlled (cork borer + ruler)", "Start and end mass on a balance, blotting the same way", "Time stated (stopwatch) and 3 repeats + mean", "Safety: hazard + precaution"] }
    ]
  },
  {
    crit: "C", name: "Processing and evaluating: the carrot results",
    tests: "Process, present and interpret real data from the carrot investigation, then judge the hypothesis and the method.",
    tip: "Keep the sign (+ or −) on every value. Quote numbers with units in your written answers.",
    items: [
      { type: "info",
        html: "<p>A scientist carried out the carrot investigation. Carrot cylinders were cut, blotted, weighed, left in 20 cm³ of each salt solution for 60 minutes, then blotted and weighed again. There were three trials at each concentration.</p><p><b>Scientist's notes:</b> the cylinders were cut with a knife to “about 4 cm” by eye. Different students blotted the cylinders, some pressing harder than others. The tubes were left on a sunny windowsill.</p>"
          + "<p><b>Raw data for two cylinders</b></p><div class='tbl'><table><thead><tr><th>Cylinder</th><th>Start mass (g)</th><th>End mass (g)</th></tr></thead><tbody><tr><td>X: 0%, trial 1</td><td>3.12</td><td>3.42</td></tr><tr><td>Y: 2.5%, trial 2</td><td>3.40</td><td>2.95</td></tr></tbody></table></div>"
          + "<p><b>Table 1: Percentage change in mass of carrot cylinders after 60 minutes in salt solutions</b></p><div class='tbl'><table><thead><tr><th>Salt concentration (%)</th><th>Trial 1 (%)</th><th>Trial 2 (%)</th><th>Trial 3 (%)</th></tr></thead><tbody><tr><td>0</td><td>X = ?</td><td>+10.2</td><td>+9.9</td></tr><tr><td>0.5</td><td>+4.5</td><td>+4.1</td><td>+4.9</td></tr><tr><td>1.0</td><td>−1.2</td><td>−0.8</td><td>−1.6</td></tr><tr><td>1.5</td><td>−6.1</td><td>−2.0</td><td>−6.5</td></tr><tr><td>2.0</td><td>−10.4</td><td>−9.8</td><td>−10.1</td></tr><tr><td>2.5</td><td>−12.6</td><td>Y = ?</td><td>−12.9</td></tr></tbody></table></div>" },
      { type: "info", guide: {
        title: "Your criterion C checklist",
        intro: "Answer C1–C11 in order. They follow missions 5, 6 and 7 of the skills workshop.",
        steps: [
          { h: "Process and present", strand: "Strand i", what: "Calculate with the sign, leave out the anomaly in the mean, choose an even scale with zero inside the graph, then plot accurately.",
            starters: ["% change = (end − start) ÷ start × 100", "Mean = (… + …) ÷ 2, leaving out the anomaly"] },
          { h: "Describe and explain", strand: "Strand ii", what: "Describe the trend with numbers from both ends and the zero crossing. Explain it with the 4 osmosis steps.",
            starters: ["As the salt concentration increased from 0% to 2.5%, …", "At 0% the solution was hypotonic, so…"] },
          { h: "Judge the hypothesis", strand: "Strand iii", what: "Say whether it is supported, partly supported or not supported, quoting data.",
            starters: ["The hypothesis is partly supported because…", "However, at 0.5% …"] },
          { h: "Evaluate and improve", strand: "Strands iv–v", what: "Limitation → effect → specific improvement. Then suggest an extension.",
            starters: ["One limitation was … This made the end mass …", "To improve this, I would…"] }
        ],
        ladder: [
          { lv: "1–2", verb: "States", d: "some values, a simple trend and a limitation" },
          { lv: "3–4", verb: "Outlines", d: "correct calculations, a trend with some science, and a basic improvement" },
          { lv: "5–6", verb: "Describes", d: "accurate data and graph, a trend with numbers, and limitations with improvements" },
          { lv: "7–8", verb: "Explains", d: "the results with correct osmosis reasoning, judges the hypothesis with data, and explains how each limitation affected the results" }
        ],
        checklist: ["Signs kept on every value (+ or −)", "Anomaly left out of the mean", "Numbers and units quoted in every description", "Limitation → effect → improvement for each point"]
      } },

      { id: "w4c1", type: "numtable", marks: 2,
        prompt: "<b>Calculate</b> the missing values X and Y (1 d.p.). Keep the sign.",
        howto: "Type the number to 1 decimal place. Type a minus sign (-) for a loss.",
        head: ["Cylinder", "% change in mass"],
        rows: [
          { label: "X (0%, trial 1)", answer: 9.6, tol: 0.05, hint: "(3.42 − 3.12) ÷ 3.12 × 100" },
          { label: "Y (2.5%, trial 2)", answer: -13.2, tol: 0.05, hint: "(2.95 − 3.40) ÷ 3.40 × 100" }
        ] },

      { id: "w4c2", type: "mcq", marks: 1,
        prompt: "<b>Identify</b> the anomalous result in Table 1.",
        options: ["0%, trial 2 (+10.2%)", "1.0%, trial 2 (−0.8%)", "1.5%, trial 2 (−2.0%)", "2.0%, trial 1 (−10.4%)"], answer: 2,
        explain: "−2.0% is far from the other two repeats at 1.5% (−6.1% and −6.5%) and does not fit the trend." },

      { id: "w4c3", type: "numtable", marks: 6,
        prompt: "<b>Calculate</b> the mean % change in mass for each concentration (1 d.p.). Use your values for X and Y, and leave out the anomaly.",
        howto: "Type the number to 1 decimal place. Type a minus sign (-) for a negative mean.",
        head: ["Salt concentration (%)", "Mean % change in mass"],
        rows: [
          { label: "0", answer: 9.9, tol: 0.05 },
          { label: "0.5", answer: 4.5, tol: 0.05 },
          { label: "1.0", answer: -1.2, tol: 0.05 },
          { label: "1.5", answer: -6.3, tol: 0.05, hint: "Leave out −2.0: (−6.1 + −6.5) ÷ 2" },
          { label: "2.0", answer: -10.1, tol: 0.05 },
          { label: "2.5", answer: -12.9, tol: 0.05 }
        ] },

      { id: "w4c4", type: "mcq", marks: 1,
        prompt: "Your means go from about +10% to about −13%. Which y-axis scale is best for the graph?",
        options: ["0% at the bottom to +10% at the top", "−15% to +15% in even steps of 5%, with the zero line inside the graph", "−13% to +10%, with steps of 2, 5 and 10", "+15% at the bottom to −15% at the top"], answer: 1,
        explain: "The scale must include every value, use even steps, and put zero inside the graph so the negative means can be plotted below it." },

      { id: "w4c5", type: "plot", marks: 6, tol: 0.6,
        prompt: "<b>Plot</b> your six means on the graph. Each small square on the y-axis is 1%.",
        title: "Mean % change in mass of carrot against salt concentration",
        xTitle: "Salt concentration (%)", yTitle: "Mean % change in mass (%)", xMin: 0, xMax: 2.5,
        yMin: -15, yMax: 15, yMajor: 5, yMinor: 1,
        points: [ { x: 0, y: 9.9, label: "0" }, { x: 0.5, y: 4.5, label: "0.5" }, { x: 1.0, y: -1.2, label: "1.0" }, { x: 1.5, y: -6.3, label: "1.5" }, { x: 2.0, y: -10.1, label: "2.0" }, { x: 2.5, y: -12.9, label: "2.5" } ] },

      { id: "w4c6", type: "text", marks: 3, minWords: 30,
        prompt: "<b>Describe</b> the trend shown by your graph. Use numbers from your means.",
        hint: "As the salt concentration increased from …% to …%, the mean % change in mass … from …% to …% . The cylinders gained mass at … and lost mass at … . The line crosses zero at about …% .",
        model: "As the salt concentration increased from 0% to 2.5%, the mean % change in mass decreased from +9.9% to −12.9% (1). The cylinders gained mass at 0% and 0.5% (+4.5%) but lost mass from 1.0% upwards (−1.2% at 1.0%) (1). The line crosses zero at about 0.9%, and the decrease becomes smaller at high concentrations (−10.1% to −12.9% between 2.0% and 2.5%) (1).",
        points: ["Negative trend with values from both ends (+9.9% to −12.9%)", "Gain at low concentrations, loss from 1.0% upwards", "Crosses zero at about 0.9% / levels off at high concentrations"] },

      { id: "w4c7", type: "num", marks: 2, min: 0.8, max: 1.0, unit: "%",
        prompt: "<b>Estimate</b> the salt concentration that is isotonic with the carrot cell sap (where the line crosses zero).",
        explain: "Zero lies between 0.5% (+4.5%) and 1.0% (−1.2%), much closer to 1.0%. Accept 0.8–1.0% (about 0.9%)." },

      { id: "w4c8", type: "text", marks: 4, minWords: 50,
        prompt: "<b>Explain</b> the results at <b>0%</b> and at <b>2.5%</b> salt, using scientific reasoning.",
        hint: "Use the 4 steps for each one. At 0%, the solution is … compared with the cell sap, so the water concentration is … outside; water moves … by osmosis through the partially permeable membrane, so the cells become … and the cylinder … mass. At 2.5%, … .",
        model: "At 0% (pure water) the solution was hypotonic compared with the carrot cell sap, so the water concentration was higher outside the cells (1). Water moved into the cells by osmosis through the partially permeable membrane, so the cells became turgid and the cylinders gained mass (+9.9%) (1). At 2.5% the solution was hypertonic, so the water concentration was lower outside the cells (1). Water moved out of the cells by osmosis, the vacuoles shrank and the cells became plasmolysed, so the cylinders lost mass (−12.9%) (1).",
        points: ["0%: hypotonic → higher water concentration outside", "0%: water in by osmosis through partially permeable membrane → turgid, gain mass", "2.5%: hypertonic → lower water concentration outside", "2.5%: water out by osmosis → plasmolysed, lose mass"] },

      { id: "w4c9", type: "text", marks: 3, minWords: 30,
        prompt: "A student's hypothesis was: <i>“Carrot cylinders will lose mass in every salt solution, and lose more as the salt concentration increases.”</i> <b>Discuss</b> whether the data supports this hypothesis.",
        hint: "The hypothesis is partly supported because … (quote data). However, … (quote data). So … .",
        model: "The hypothesis is partly supported: from 1.0% to 2.5% the cylinders lost mass, and lost more as the concentration increased (−1.2% to −12.9%) (1). However, at 0.5% salt the cylinders gained mass (+4.5%), so they did not lose mass in every salt solution, because 0.5% is still hypotonic to the cell sap (1). So the second part of the hypothesis is supported, but the first part is not: the carrot only loses mass above about 0.9% salt (1).",
        points: ["Supported part with data (loss increases from 1.0% to 2.5%)", "Not supported part with data (gain at 0.5%)", "Clear judgement: partly supported, linked to the isotonic point"] },

      { id: "w4c10", type: "text", marks: 4, minWords: 50,
        prompt: "Use the scientist's notes. <b>Evaluate</b> the method: describe <b>two</b> limitations, explain how each affected the results, and suggest a specific improvement for each.",
        hint: "Limitation 1: … . This affected the results because … . Improvement: … . Limitation 2: … .",
        model: "1. Different students blotted the cylinders with different pressure, so some cylinders kept more surface water and their end mass was too high; this may explain the −2.0% anomaly (1). Improvement: one person blots every cylinder by rolling it once on a paper towel (1). 2. The cylinders were cut to “about 4 cm” by eye, so they had different surface areas and different amounts of water moved in or out (1). Improvement: cut every cylinder with the cork borer and trim it to exactly 4.0 cm with a ruler. (Also accept: the windowsill changed the temperature, so use a water bath at 25 °C.) (1)",
        points: ["Limitation 1 (blotting) + effect on mass", "Specific improvement for limitation 1", "Limitation 2 (size by eye / temperature) + effect", "Specific improvement for limitation 2"] },

      { id: "w4c11", type: "text", marks: 2, minWords: 20,
        prompt: "<b>Suggest</b> one extension to this investigation that would help the farmer, and explain what data you would collect.",
        hint: "To find the isotonic point more precisely, I would … . OR: I would test … to see whether … .",
        model: "Test more concentrations between 0.5% and 1.0% (e.g. 0.6, 0.7, 0.8 and 0.9%) with three cylinders each, measuring % change in mass, to find the isotonic point more precisely (1). This tells the farmer more exactly the highest salt level the irrigation water can have before carrot cells start losing water (1). (Also accept: testing well water samples from the farm, or a different crop.)",
        points: ["A sensible new investigation (smaller intervals / farm water / other crops)", "Data to be collected and why it helps the farmer"] }
    ]
  }
  ]
}


];
