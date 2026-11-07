/* =====================================================================
   READING TEST CONTENT FOR SESSION 6
   ---------------------------------------------------------------------
   HOW TO FILL THIS IN (on GitHub: open this file, click the pencil icon)

   1. Replace every  PASTE ...  slot with text from your Google Doc.
      Keep the quotation marks "  " or backticks `  ` around each slot.
   2. Passages: paste the whole passage between the backticks.
      Leave one EMPTY LINE between paragraphs. If a paragraph letter
      (A, B, C …) is on its own line above the paragraph, that is fine.
   3. Answers: type the answer between the quotation marks in  a: ""
      - Headings: the roman numeral, e.g. "vii"
      - Letters: e.g. "C"
      - TRUE / FALSE / NOT GIVEN and YES / NO / NOT GIVEN: in capitals
      - Typed answers: if more than one answer is accepted, separate
        them with  /  for example "long-term / long term"
      - A question with two gaps (like 23): one answer per gap, e.g.
        a: ["first answer", "second answer"]
   4. Do NOT paste text that contains a backtick  `  inside a passage.
   5. Click "Commit changes". Then open Session 6 and press Ctrl+Shift+R.

   If you need a straight quotation mark " inside a question, type \"
   ===================================================================== */

window.TEST_DATA = {
  id: "reading-test-2",
  name: "Reading practice test",
  minutes: 60,
  parts: [

  /* ======================= PART 1: Questions 1–13 ======================= */
  {
    title: "Part 1", range: [1, 13], lettered: true,
    passageTitle: "PASTE THE TITLE OF PASSAGE 1",
    sub: "PASTE THE ITALIC LINE UNDER THE TITLE (or leave empty: \"\")",
    passage: `
PASTE PASSAGE 1 HERE (paragraphs A–G, one empty line between paragraphs)
`,
    groups: [
      { type: "headings", title: "Questions 1–7",
        ins: "Reading Passage 1 has seven paragraphs, A–G. Choose the correct heading for each paragraph from the list of headings.",
        list: [
          ["i",    "PASTE HEADING i"],
          ["ii",   "PASTE HEADING ii"],
          ["iii",  "PASTE HEADING iii"],
          ["iv",   "PASTE HEADING iv"],
          ["v",    "PASTE HEADING v"],
          ["vi",   "PASTE HEADING vi"],
          ["vii",  "PASTE HEADING vii"],
          ["viii", "PASTE HEADING viii"],
          ["ix",   "PASTE HEADING ix"]],
        items: [
          { n: 1, text: "Paragraph A", a: "" },
          { n: 2, text: "Paragraph B", a: "" },
          { n: 3, text: "Paragraph C", a: "" },
          { n: 4, text: "Paragraph D", a: "" },
          { n: 5, text: "Paragraph E", a: "" },
          { n: 6, text: "Paragraph F", a: "" },
          { n: 7, text: "Paragraph G", a: "" }]},

      { type: "tfng", title: "Questions 8–13",
        ins: "Do the following statements agree with the information given in Reading Passage 1? Choose TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
        items: [
          { n: 8,  text: "PASTE STATEMENT 8",  a: "" },
          { n: 9,  text: "PASTE STATEMENT 9",  a: "" },
          { n: 10, text: "PASTE STATEMENT 10", a: "" },
          { n: 11, text: "PASTE STATEMENT 11", a: "" },
          { n: 12, text: "PASTE STATEMENT 12", a: "" },
          { n: 13, text: "PASTE STATEMENT 13", a: "" }]}
    ]
  },

  /* ======================= PART 2: Questions 14–26 ====================== */
  {
    title: "Part 2", range: [14, 26], lettered: true,
    passageTitle: "PASTE THE TITLE OF PASSAGE 2",
    sub: "",
    passage: `
PASTE PASSAGE 2 HERE (paragraphs A–F, one empty line between paragraphs)
`,
    groups: [
      { type: "match", title: "Questions 14–17",
        ins: "Reading Passage 2 has six paragraphs, A–F. Which paragraph contains the following information? You may use any letter more than once.",
        options: [["A","A"],["B","B"],["C","C"],["D","D"],["E","E"],["F","F"]],
        items: [
          { n: 14, text: "PASTE QUESTION 14", a: "" },
          { n: 15, text: "PASTE QUESTION 15", a: "" },
          { n: 16, text: "PASTE QUESTION 16", a: "" },
          { n: 17, text: "PASTE QUESTION 17", a: "" }]},

      { type: "match", title: "Questions 18–22",
        ins: "Look at the following statements and the list of people. Match each statement with the correct person or people, A–E.",
        box: "List of people",
        options: [
          ["A", "PASTE PERSON A"],
          ["B", "PASTE PERSON B"],
          ["C", "PASTE PERSON C"],
          ["D", "PASTE PERSON D"],
          ["E", "PASTE PERSON E"]],
        items: [
          { n: 18, text: "PASTE STATEMENT 18", a: "" },
          { n: 19, text: "PASTE STATEMENT 19", a: "" },
          { n: 20, text: "PASTE STATEMENT 20", a: "" },
          { n: 21, text: "PASTE STATEMENT 21", a: "" },
          { n: 22, text: "PASTE STATEMENT 22", a: "" }]},

      { type: "complete", title: "Questions 23–26",
        ins: "Complete the sentences below. Choose NO MORE THAN THREE WORDS from the passage for each answer.",
        /* Write ___ (three underscores) where each gap goes. */
        items: [
          { n: 23, text: "PASTE SENTENCE 23 with ___ and ___ for its two gaps", a: ["", ""] },
          { n: 24, text: "PASTE SENTENCE 24 with ___ for the gap", a: "" },
          { n: 25, text: "PASTE SENTENCE 25 with ___ for the gap", a: "" },
          { n: 26, text: "PASTE SENTENCE 26 with ___ for the gap", a: "" }]}
    ]
  },

  /* ======================= PART 3: Questions 27–40 ====================== */
  {
    title: "Part 3", range: [27, 40], lettered: false,
    passageTitle: "PASTE THE TITLE OF PASSAGE 3",
    sub: "PASTE THE ITALIC LINE UNDER THE TITLE (or leave empty: \"\")",
    passage: `
PASTE PASSAGE 3 HERE (one empty line between paragraphs)
`,
    groups: [
      { type: "summary", title: "Questions 27–31",
        ins: "Complete the summary using the list of words, A–L.",
        heading: "PASTE THE SUMMARY TITLE",
        box: "List of words",
        options: [
          ["A", "PASTE WORD A"], ["B", "PASTE WORD B"], ["C", "PASTE WORD C"],
          ["D", "PASTE WORD D"], ["E", "PASTE WORD E"], ["F", "PASTE WORD F"],
          ["G", "PASTE WORD G"], ["H", "PASTE WORD H"], ["I", "PASTE WORD I"],
          ["J", "PASTE WORD J"], ["K", "PASTE WORD K"], ["L", "PASTE WORD L"]],
        /* Paste the summary and put [27], [28] … where each gap is. */
        text: "PASTE THE SUMMARY HERE, with [27] [28] [29] [30] [31] where the gaps are.",
        items: [
          { n: 27, a: "" }, { n: 28, a: "" }, { n: 29, a: "" }, { n: 30, a: "" }, { n: 31, a: "" }]},

      { type: "mcq", title: "Questions 32–35",
        ins: "Choose the correct letter, A, B, C or D.",
        items: [
          { n: 32, text: "PASTE QUESTION 32", opts: ["PASTE OPTION A", "PASTE OPTION B", "PASTE OPTION C", "PASTE OPTION D"], a: "" },
          { n: 33, text: "PASTE QUESTION 33", opts: ["PASTE OPTION A", "PASTE OPTION B", "PASTE OPTION C", "PASTE OPTION D"], a: "" },
          { n: 34, text: "PASTE QUESTION 34", opts: ["PASTE OPTION A", "PASTE OPTION B", "PASTE OPTION C", "PASTE OPTION D"], a: "" },
          { n: 35, text: "PASTE QUESTION 35", opts: ["PASTE OPTION A", "PASTE OPTION B", "PASTE OPTION C", "PASTE OPTION D"], a: "" }]},

      { type: "ynng", title: "Questions 36–40",
        ins: "Do the following statements agree with the views of the writer in Reading Passage 3? Choose YES if the statement agrees with the views of the writer, NO if the statement contradicts the views of the writer, or NOT GIVEN if it is impossible to say what the writer thinks about this.",
        items: [
          { n: 36, text: "PASTE STATEMENT 36", a: "" },
          { n: 37, text: "PASTE STATEMENT 37", a: "" },
          { n: 38, text: "PASTE STATEMENT 38", a: "" },
          { n: 39, text: "PASTE STATEMENT 39", a: "" },
          { n: 40, text: "PASTE STATEMENT 40", a: "" }]}
    ]
  }]
};
