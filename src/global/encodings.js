const ButtonEncodings = {
  math: [
    {
      id: 1,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\huge\\times",
      encodes: "\\times",
    },
    {
      id: 2,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\huge\\div",
      encodes: "\\div",
    },
    {
      id: 3,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\huge\\pm",
      encodes: "\\pm",
    },
    {
      id: 4,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\huge\\mp",
      encodes: "\\mp",
    },
    {
      id: 5,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\huge\\cdot",
      encodes: "\\cdot",
    },
    {
      id: 6,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\huge\\star",
      encodes: "\\star",
    },
    {
      id: 7,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\sqrt{ab}",
      encodes: "\\sqrt{ab}",
      class: "ml_-12 bf",
    },
    {
      id: 8,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\sqrt[n]{ab}",
      encodes: "\\sqrt[n]{ab}",
      class: "bf",
    },
    {
      id: 9,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\log_{a}{b}",
      encodes: "\\log_{a}{b}",
      class: "bf",
    },
    {
      id: 10,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\lg{ab}",
      encodes: "\\lg{ab}",
      class: "bf",
    },
    {
      id: 11,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\a^{b}",
      encodes: " a^{b} ",
      class: "mr_-16",
    },
    {
      id: 12,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\a_{b}",
      encodes: " a_{b} ",
      class: "mr_-16",
    },
    {
      id: 13,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\c_a^b",
      encodes: " c_a^b ",
      class: "mr_-12",
    },
    {
      id: 14,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\widetilde{ab}",
      encodes: "\\widetilde{ab}",
    },
    {
      id: 15,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\widehat{ab}",
      encodes: "\\widehat{ab}",
    },
    {
      id: 16,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\overleftarrow{ab}",
      encodes: "\\overleftarrow{ab}",
    },
    {
      id: 17,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\overrightarrow{ab}",
      encodes: "\\overrightarrow{ab}",
      class: "mr_-2",
    },
    {
      id: 18,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\overbrace{ab}",
      encodes: "\\overbrace{ab}",
      class: "mr_-2",
    },
    {
      id: 19,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\underbrace{ab}",
      encodes: "\\underbrace{ab}",
    },
    {
      id: 20,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\underline{ab}",
      encodes: "\\underline{ab}",
    },
    {
      id: 21,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\overline{ab}",
      encodes: "\\overline{ab}",
      class: "ml_-2",
    },
    {
      id: 22,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\frac{ab}{cd}",
      encodes: "\\frac{ab}{cd}",
    },
    {
      id: 23,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\frac{\\partial{a}}{\\partial{b}}",
      encodes: "\\frac{\\partial{a}}{\\partial{b}}",
      class: "mr_-2",
    },
    {
      id: 24,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\frac{\\text{d}x}{\\text{d}y}",
      encodes: "\\frac{\\text{d}x}{\\text{d}y}",
      class: "mr_-2",
    },
    {
      id: 25,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\normalsize\\lim_{a \\rightarrow b}",
      encodes: "\\lim_{a \\rightarrow b}",
      class: "mr_-8 bf",
    },
    {
      id: 26,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\normalsize\\bf\\int_{a}^{b}",
      encodes: "\\int_{a}^{b}",
      class: "bf",
    },
    {
      id: 27,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\normalsize\\bf\\oint_a^b",
      encodes: "\\oint_a^b",
      class: "bf",
    },
    {
      id: 28,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\normalsize\\prod_a^b",
      encodes: "\\prod_a^b",
      class: "mr_-16",
    },
    {
      id: 29,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\normalsize\\coprod_a^b",
      encodes: "\\coprod_a^b",
      class: "mr_-15",
    },
    {
      id: 30,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\small\\bf\\bigcap_a^b",
      encodes: "\\bigcap_a^b",
      class: "mr_-6 bf",
    },
    {
      id: 31,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\small\\bf\\bigcup_a^b",
      encodes: "\\bigcup_a^b",
      class: "mr_-3 bf",
    },
    {
      id: 32,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\bf\\bigvee_a^b",
      encodes: "\\bigvee_a^b",
    },
    {
      id: 33,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\bf\\bigwedge_a^b",
      encodes: "\\bigwedge_a^b",
    },
    {
      id: 34,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\normalsize\\bf\\bigsqcup_a^b",
      encodes: "\\bigsqcup_a^b",
      class: "mr_-5",
    },
    {
      id: 35,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\normalsize\\bf\\sum_a^b",
      encodes: "\\sum_a^b",
      class: "mr_-17 bf",
    },
    {
      id: 36,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\tiny\\bf\\left(\\begin{array}{c} a\\\\ b\\\\ \\end{array}\\right)",
      encodes: "\\left(\\begin{array}{c}a\\\\\\\\b\\end{array}\\right)",
      class: "mr_-2 bf",
    },
    {
      id: 37,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\tiny\\bf\\begin{bmatrix}a%26b\\\\c%26d\\end{bmatrix}",
      encodes: "\\begin{bmatrix}a&b\\\\\\\\c&d\\end{bmatrix}",
      class: "bf",
    },
    {
      id: 38,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\tiny\\bf\\begin{cases}a %26 x = 0\\\\b %26 x > 0\\end{cases}",
      encodes: "\\begin{cases}a&x=0\\\\\\\\b&x>0\\end{cases}",
      class: "mr_-6 bf",
    },
  ],
  gkandfun: [
    {
      id: 39,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\alpha",
      encodes: "\\alpha",
    },
    {
      id: 40,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\beta",
      encodes: "\\beta",
    },
    {
      id: 41,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\gamma",
      encodes: "\\gamma",
    },
    {
      id: 42,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\delta",
      encodes: "\\delta",
    },
    {
      id: 43,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\huge\\epsilon",
      encodes: "\\epsilon",
    },
    {
      id: 44,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\zeta",
      encodes: "\\zeta",
    },
    {
      id: 45,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\eta",
      encodes: "\\eta",
    },
    {
      id: 46,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\theta",
      encodes: "\\theta",
    },
    {
      id: 47,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\huge\\iota",
      encodes: "\\iota",
    },
    {
      id: 48,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\kappa",
      encodes: "\\kappa",
    },
    {
      id: 49,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\lambda",
      encodes: "\\lambda",
    },
    {
      id: 50,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\mu",
      encodes: "\\mu",
    },
    {
      id: 51,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\nu",
      encodes: "\\nu",
    },
    {
      id: 52,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\xi",
      encodes: "\\xi",
    },
    {
      id: 53,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\pi",
      encodes: "\\pi",
    },
    {
      id: 54,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\rho",
      encodes: "\\rho",
    },
    {
      id: 55,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\sigma",
      encodes: "\\sigma",
    },
    {
      id: 56,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\tau",
      encodes: "\\tau",
    },
    {
      id: 57,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\upsilon",
      encodes: "\\upsilon",
    },
    {
      id: 58,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\phi",
      encodes: "\\phi",
    },
    {
      id: 59,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\chi",
      encodes: "\\chi",
    },
    {
      id: 60,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\psi",
      encodes: "\\psi",
    },
    {
      id: 61,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\omega",
      encodes: "\\omega",
    },
    {
      id: 62,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\arccos",
      encodes: "\\arccos",
    },
    {
      id: 63,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\arcsin",
      encodes: "\\arcsin",
    },
    {
      id: 64,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\arctan",
      encodes: "\\arctan",
    },
    {
      id: 65,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\cos",
      encodes: "\\cos",
    },
    {
      id: 66,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\cosh",
      encodes: "\\cosh",
    },
    {
      id: 67,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\cot",
      encodes: "\\cot",
    },
    {
      id: 68,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\coth",
      encodes: "\\coth",
    },
    {
      id: 69,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\csc",
      encodes: "\\csc",
    },
    {
      id: 70,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\sec",
      encodes: "\\sec",
    },
    {
      id: 71,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\sin",
      encodes: "\\sin",
    },
    {
      id: 72,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\sinh",
      encodes: "\\sinh",
    },
    {
      id: 73,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\tan",
      encodes: "\\tan",
    },
    {
      id: 74,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\tanh",
      encodes: "\\tanh",
    },
    {
      id: 75,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\exp",
      encodes: "\\exp",
    },
    {
      id: 76,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\log",
      encodes: "\\log",
    },
    {
      id: 77,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\ln",
      encodes: "\\ln",
    },
    {
      id: 78,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\max",
      encodes: "\\max",
    },
    {
      id: 79,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\min",
      encodes: "\\min",
    },
    {
      id: 80,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\sup",
      encodes: "\\sup",
    },
    {
      id: 81,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\inf",
      encodes: "\\inf",
    },
    {
      id: 82,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\lim",
      encodes: "\\lim",
    },
    {
      id: 83,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\gcd",
      encodes: "\\gcd",
    },
    {
      id: 84,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\hom",
      encodes: "\\hom",
    },
    {
      id: 85,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\ker",
      encodes: "\\ker",
    },
    {
      id: 86,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\det",
      encodes: "\\det",
    },
    {
      id: 87,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\mod",
      encodes: "\\bmod",
    },
  ],
  logic: [
    {
      id: 88,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\neq",
      encodes: "\\neq",
    },
    {
      id: 89,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\leq",
      encodes: "\\leq",
    },
    {
      id: 90,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\geq",
      encodes: "\\geq",
    },
    {
      id: 91,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\sim",
      encodes: "\\sim",
    },
    {
      id: 92,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\approx",
      encodes: "\\approx",
    },
    {
      id: 93,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\cong",
      encodes: "\\cong",
    },
    {
      id: 94,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\equiv",
      encodes: "\\equiv",
    },
    {
      id: 95,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\propto",
      encodes: "\\propto",
    },
    {
      id: 96,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\ll",
      encodes: "\\ll",
    },
    {
      id: 97,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\gg",
      encodes: "\\gg",
    },
    {
      id: 98,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\in",
      encodes: "\\in",
    },
    {
      id: 99,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\subset",
      encodes: "\\subset",
    },
    {
      id: 100,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\subseteq",
      encodes: "\\subseteq",
    },
    {
      id: 101,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\prec",
      encodes: "\\prec",
    },
    {
      id: 102,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\preceq",
      encodes: "\\preceq",
    },
    {
      id: 103,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\simeq",
      encodes: "\\simeq",
    },
    {
      id: 104,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\asymp",
      encodes: "\\asymp",
    },
    {
      id: 105,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\doteq",
      encodes: "\\doteq",
    },
    {
      id: 106,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\succ",
      encodes: "\\succ",
    },
    {
      id: 107,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\succeq",
      encodes: "\\succeq",
    },
    {
      id: 108,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\sqsubseteq",
      encodes: "\\sqsubseteq",
    },
    {
      id: 109,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\sqsupseteq",
      encodes: "\\sqsupseteq",
    },
    {
      id: 110,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\ni",
      encodes: "\\ni",
    },
    {
      id: 111,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\models",
      encodes: "\\models",
    },
    {
      id: 112,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\vdash",
      encodes: "\\vdash",
    },
    {
      id: 113,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\dashv",
      encodes: "\\dashv",
    },
    {
      id: 114,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\perp",
      encodes: "\\perp",
    },
    {
      id: 115,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\mid",
      encodes: "\\mid",
    },
    {
      id: 116,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\parallel",
      encodes: "\\parallel",
    },
    {
      id: 117,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\smile",
      encodes: "\\smile",
    },
    {
      id: 118,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\frown",
      encodes: "\\frown",
    },
    {
      id: 119,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\bowtie",
      encodes: "\\bowtie",
    },
    {
      id: 120,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\unlhd",
      encodes: "\\unlhd",
    },
    {
      id: 121,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\unrhd",
      encodes: "\\unrhd",
    },
    {
      id: 122,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\hat{a}",
      encodes: "\\hat{a}",
    },
    {
      id: 123,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\check{a}",
      encodes: "\\check{a}",
    },
    {
      id: 124,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\breve{a}",
      encodes: "\\breve{a}",
    },
    {
      id: 125,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\acute{a}",
      encodes: "\\acute{a}",
    },
    {
      id: 126,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\grave{a}",
      encodes: "\\grave{a}",
    },
    {
      id: 127,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\tilde{a}",
      encodes: "\\tilde{a}",
    },
    {
      id: 128,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\bar{a}",
      encodes: "\\bar{a}",
    },
    {
      id: 129,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\vec{a}",
      encodes: "\\vec{a}",
    },
    {
      id: 130,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\dot{a}",
      encodes: "\\dot{a}",
    },
    {
      id: 131,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\ddot{a}",
      encodes: "\\ddot{a}",
    },
  ],
  arrow: [
    {
      id: 132,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\bf(",
      encodes: "\\left(",
    },
    {
      id: 133,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\bf)",
      encodes: "\\right)",
    },
    {
      id: 134,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\bf[",
      encodes: "\\left[",
    },
    {
      id: 135,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\bf]",
      encodes: "\\right]",
    },
    {
      id: 136,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\bf\\{",
      encodes: "\\left\\{",
    },
    {
      id: 137,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\bf\\}",
      encodes: "\\right\\}",
    },
    {
      id: 138,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\lfloor",
      encodes: "\\lfloor",
      class: "bf",
    },
    {
      id: 139,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\lceil",
      encodes: "\\lceil",
      class: "bf",
    },
    {
      id: 140,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\rfloor",
      encodes: "\\rfloor",
      class: "bf",
    },
    {
      id: 141,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\rceil",
      encodes: "\\rceil",
      class: "bf",
    },
    {
      id: 142,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\normalsize\\bf\\langle",
      encodes: "\\langle",
      class: "bf",
    },
    {
      id: 143,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\normalsize\\bf\\rangle",
      encodes: "\\rangle",
      class: "bf",
    },
    {
      id: 144,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\backslash",
      encodes: "\\backslash",
      class: "bf",
    },
    {
      id: 145,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\cap",
      encodes: "\\cap",
      class: "bf",
    },
    {
      id: 146,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\cup",
      encodes: "\\cup",
      class: "bf",
    },
    {
      id: 147,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\uplus",
      encodes: "\\uplus",
    },
    {
      id: 148,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\sqcap",
      encodes: "\\sqcap",
    },
    {
      id: 149,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\sqcup",
      encodes: "\\sqcup",
    },
    {
      id: 150,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\vee",
      encodes: "\\vee",
      class: "bf",
    },
    {
      id: 151,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\wedge",
      encodes: "\\wedge",
      class: "bf",
    },
    {
      id: 152,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\wr",
      encodes: "\\wr",
      class: "bf",
    },
    {
      id: 153,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\leftarrow",
      encodes: "\\leftarrow",
      class: "bf",
    },
    {
      id: 154,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\Leftarrow",
      encodes: "\\Leftarrow",
    },
    {
      id: 155,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\rightarrow",
      encodes: "\\rightarrow",
      class: "bf",
    },
    {
      id: 156,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\Rightarrow",
      encodes: "\\Rightarrow",
    },
    {
      id: 157,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\leftrightarrow",
      encodes: "\\leftrightarrow",
    },
    {
      id: 158,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\Leftrightarrow",
      encodes: "\\Leftrightarrow",
    },
    {
      id: 159,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\mapsto",
      encodes: "\\mapsto",
    },
    {
      id: 160,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\leftharpoonup",
      encodes: "\\leftharpoonup",
    },
    {
      id: 161,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\leftharpoondown",
      encodes: "\\leftharpoondown",
    },
    {
      id: 162,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\rightleftharpoons",
      encodes: "\\rightleftharpoons",
    },
    {
      id: 163,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\leftrightharpoons",
      encodes: "\\leftrightharpoons",
    },
    {
      id: 164,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\hookrightarrow",
      encodes: "\\hookrightarrow",
    },
    {
      id: 165,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\rightharpoonup",
      encodes: "\\rightharpoonup",
    },
    {
      id: 166,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\uparrow",
      encodes: "\\uparrow",
    },
    {
      id: 167,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\Uparrow",
      encodes: "\\Uparrow",
    },
    {
      id: 168,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\downarrow",
      encodes: "\\downarrow",
    },
    {
      id: 169,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\Downarrow",
      encodes: "\\Downarrow",
    },
    {
      id: 170,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\updownarrow",
      encodes: "\\updownarrow",
    },
    {
      id: 171,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\Updownarrow",
      encodes: "\\Updownarrow",
    },
    {
      id: 172,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\leftleftarrows",
      encodes: "\\leftleftarrows",
    },
    {
      id: 173,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\rightrightarrows",
      encodes: "\\rightrightarrows",
    },
    {
      id: 174,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\leftrightarrows",
      encodes: "\\leftrightarrows",
    },
    {
      id: 175,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\rightleftarrows",
      encodes: "\\rightleftarrows",
    },
    {
      id: 176,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\Lleftarrow",
      encodes: "\\Lleftarrow",
    },
    {
      id: 177,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\Rrightarrow",
      encodes: "\\Rrightarrow",
    },
    {
      id: 178,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\twoheadleftarrow",
      encodes: "\\twoheadleftarrow",
    },
    {
      id: 179,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\twoheadrightarrow",
      encodes: "\\twoheadrightarrow",
    },
    {
      id: 180,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\leftarrowtail",
      encodes: "\\leftarrowtail",
    },
    {
      id: 181,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\rightarrowtail",
      encodes: "\\rightarrowtail",
    },
    {
      id: 182,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\looparrowleft",
      encodes: "\\looparrowleft",
    },
    {
      id: 183,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\looparrowright",
      encodes: "\\looparrowright",
    },
    {
      id: 184,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\curvearrowleft",
      encodes: "\\curvearrowleft",
    },
    {
      id: 185,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\curvearrowright",
      encodes: "\\curvearrowright",
    },
    {
      id: 186,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\circlearrowleft",
      encodes: "\\circlearrowleft",
    },
    {
      id: 187,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\circlearrowright",
      encodes: "\\circlearrowright",
    },
    {
      id: 188,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\dashleftarrow",
      encodes: "\\dashleftarrow",
    },
    {
      id: 189,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\dashrightarrow",
      encodes: "\\dashrightarrow",
    },
    {
      id: 190,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\Lsh",
      encodes: "\\Lsh",
    },
    {
      id: 191,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\Rsh",
      encodes: "\\Rsh",
    },
    {
      id: 192,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\upuparrows",
      encodes: "\\upuparrows",
    },
    {
      id: 193,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\downdownarrows",
      encodes: "\\downdownarrows",
    },
    {
      id: 194,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\upharpoonleft",
      encodes: "\\upharpoonleft",
    },
    {
      id: 195,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\upharpoonright",
      encodes: "\\upharpoonright",
    },
    {
      id: 196,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\downharpoonleft",
      encodes: "\\downharpoonleft",
    },
    {
      id: 197,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\downharpoonright",
      encodes: "\\downharpoonright",
    },
    {
      id: 198,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\rightsquigarrow",
      encodes: "\\rightsquigarrow",
    },
    {
      id: 199,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\leftrightsquigarrow",
      encodes: "\\leftrightsquigarrow",
    },
    {
      id: 200,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\multimap",
      encodes: "\\multimap",
    },
    {
      id: 201,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\nleftarrow",
      encodes: "\\nleftarrow",
    },
    {
      id: 202,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\nrightarrow",
      encodes: "\\nrightarrow",
    },
    {
      id: 203,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\nLeftarrow",
      encodes: "\\nLeftarrow",
    },
    {
      id: 204,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\nRightarrow",
      encodes: "\\nRightarrow",
      class: "mr_-6",
    },
    {
      id: 205,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\nleftrightarrow",
      encodes: "\\nleftrightarrow",
      class: "mr_-2",
    },
    {
      id: 206,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\nLeftrightarrow",
      encodes: "\\nLeftrightarrow",
      class: "mr_-2",
    },
  ],
  symbol: [
    {
      id: 207,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\huge\\imath",
      encodes: "\\imath",
    },
    {
      id: 208,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\bf\\jmath",
      encodes: "\\jmath",
    },
    {
      id: 209,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\bf\\ell",
      encodes: "\\ell",
    },
    {
      id: 210,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\wp",
      encodes: "\\wp",
    },
    {
      id: 211,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\Im",
      encodes: "\\Im",
    },
    {
      id: 212,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Huge\\prime",
      encodes: "\\prime",
    },
    {
      id: 213,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\bf\\angle",
      encodes: "\\angle",
    },
    {
      id: 214,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\bf\\flat",
      encodes: "\\flat",
    },
    {
      id: 215,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\bf\\natural",
      encodes: "\\natural",
    },
    {
      id: 216,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\bf\\sharp",
      encodes: "\\sharp",
    },
    {
      id: 217,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\bf\\S",
      encodes: "\\S",
      class: "mr_-14",
    },
    {
      id: 218,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\checkmark",
      encodes: "\\checkmark",
    },
    {
      id: 219,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\huge\\ulcorner",
      encodes: "\\ulcorner",
    },
    {
      id: 220,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\huge\\urcorner",
      encodes: "\\urcorner",
    },
    {
      id: 221,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\huge\\llcorner",
      encodes: "\\llcorner",
    },
    {
      id: 222,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\huge\\lrcorner",
      encodes: "\\lrcorner",
    },
    {
      id: 223,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\triangle",
      encodes: "\\triangle",
    },
    {
      id: 224,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\triangledown",
      encodes: "\\triangledown",
    },
    {
      id: 225,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\triangleleft",
      encodes: "\\triangleleft",
    },
    {
      id: 226,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\triangleright",
      encodes: "\\triangleright",
    },
    {
      id: 227,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\forall",
      encodes: "\\forall",
      class: "mr_-20",
    },
    {
      id: 228,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\exists",
      encodes: "\\exists",
      class: "exists",
    },
    {
      id: 229,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\tiny\\bf\\surd",
      encodes: "\\surd",
      class: "surd",
    },
    {
      id: 230,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\bf\\top",
      encodes: "\\top",
    },
    {
      id: 231,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\bf\\bot",
      encodes: "\\bot",
    },
    {
      id: 232,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\heartsuit",
      encodes: "\\heartsuit",
    },
    {
      id: 233,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Huge\\backprime",
      encodes: "\\backprime",
    },
    {
      id: 234,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\varnothing",
      encodes: "\\varnothing",
    },
    {
      id: 235,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\sphericalangle",
      encodes: "\\sphericalangle",
    },
    {
      id: 236,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\nexists",
      encodes: "\\nexists",
      class: "mr_-20",
    },
    {
      id: 237,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\Game",
      encodes: "\\Game",
    },
    {
      id: 238,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\dotplus",
      encodes: "\\dotplus",
    },
    {
      id: 239,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\ltimes",
      encodes: "\\ltimes",
    },
    {
      id: 240,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\rtimes",
      encodes: "\\rtimes",
    },
    {
      id: 241,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\Cap",
      encodes: "\\Cap",
    },
    {
      id: 242,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\Cup",
      encodes: "\\Cup",
    },
    {
      id: 243,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\leftthreetimes",
      encodes: "\\leftthreetimes",
    },
    {
      id: 244,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\rightthreetimes",
      encodes: "\\rightthreetimes",
    },
    {
      id: 245,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\curlywedge",
      encodes: "\\curlywedge",
    },
    {
      id: 246,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\curlyvee",
      encodes: "\\curlyvee",
    },
    {
      id: 247,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\Finv",
      encodes: "\\Finv",
    },
    {
      id: 248,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\diagup",
      encodes: "\\diagup",
    },
    {
      id: 249,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\large\\diagdown",
      encodes: "\\diagdown",
    },
    {
      id: 250,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\barwedge",
      encodes: "\\barwedge",
    },
    {
      id: 251,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\veebar",
      encodes: "\\veebar",
    },
    {
      id: 252,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\doublebarwedge",
      encodes: "\\doublebarwedge",
    },
    {
      id: 253,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\Box",
      encodes: "\\Box",
      class: "mr_-8",
    },
    {
      id: 254,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\boxplus",
      encodes: "\\boxplus",
    },
    {
      id: 255,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\boxminus",
      encodes: "\\boxminus",
    },
    {
      id: 256,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\boxtimes",
      encodes: "\\boxtimes",
    },
    {
      id: 257,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\boxdot",
      encodes: "\\boxdot",
    },
    {
      id: 258,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\circledast",
      encodes: "\\circledast",
    },
    {
      id: 259,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\circledcirc",
      encodes: "\\circledcirc",
    },
    {
      id: 260,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\divideontimes",
      encodes: "\\divideontimes",
    },
    {
      id: 261,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\therefore",
      encodes: "\\therefore",
    },
    {
      id: 262,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\because",
      encodes: "\\because",
    },
    {
      id: 263,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\oplus",
      encodes: "\\oplus",
    },
    {
      id: 264,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\ominus",
      encodes: "\\ominus",
    },
    {
      id: 265,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\otimes",
      encodes: "\\otimes",
    },
    {
      id: 266,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\oslash",
      encodes: "\\oslash",
    },
    {
      id: 267,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\diamondsuit",
      encodes: "\\diamondsuit",
    },
    {
      id: 268,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\diamond",
      encodes: "\\diamond",
    },
    {
      id: 269,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\circ",
      encodes: "\\circ",
    },
    {
      id: 270,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\hslash",
      encodes: "\\hslash",
    },
    {
      id: 271,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\hbar",
      encodes: "\\hbar",
    },
    {
      id: 272,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\mho",
      encodes: "\\mho",
    },
    {
      id: 273,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\infty",
      encodes: "\\infty",
    },
    {
      id: 274,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\partial",
      encodes: "\\partial",
      class: "mr_-8",
    },
    {
      id: 275,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\eth",
      encodes: "\\eth",
    },
    {
      id: 276,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\blacktriangleleft",
      encodes: "\\blacktriangleleft",
    },
    {
      id: 277,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\blacktriangleright",
      encodes: "\\blacktriangleright",
    },
    {
      id: 278,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\blacklozenge",
      encodes: "\\blacklozenge",
    },
    {
      id: 279,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\blacktriangle",
      encodes: "\\blacktriangle",
    },
    {
      id: 280,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\blacktriangledown",
      encodes: "\\blacktriangledown",
    },
    {
      id: 281,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\blacksquare",
      encodes: "\\blacksquare",
    },
    {
      id: 282,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\clubsuit",
      encodes: "\\clubsuit",
    },
    {
      id: 283,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\spadesuit",
      encodes: "\\spadesuit",
    },
    {
      id: 284,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\bigstar",
      encodes: "\\bigstar",
    },
    {
      id: 285,
      url:
        "https://render.githubusercontent.com/render/math?math=\\color{white}\\Large\\maltese",
      encodes: "\\maltese",
      class: "mr_-2",
    },
  ],
  format: [
    {
      id: 286,
      url:
        "https://render.githubusercontent.com/render/math?math=\\Large\\color{white}aqua",
      encodes: "\\color{aqua}",
      class: "aqua mb_-1 mr_-3",
    },
    {
      id: 287,
      url:
        "https://render.githubusercontent.com/render/math?math=\\Large\\color{white}black",
      encodes: "\\color{black}",
      class: "black mt_-6",
    },
    {
      id: 288,
      url:
        "https://render.githubusercontent.com/render/math?math=\\Large\\color{white}blue",
      encodes: "\\color{blue}",
      class: "blue mt_-6",
    },
    {
      id: 289,
      url:
        "https://render.githubusercontent.com/render/math?math=\\Large\\color{white}fuchsia",
      encodes: "\\color{gray}",
      class: "fuchsia",
    },
    {
      id: 290,
      url:
        "https://render.githubusercontent.com/render/math?math=\\Large\\color{white}gray",
      encodes: "\\color{gray}",
      class: "gray mb_-1",
    },
    {
      id: 291,
      url:
        "https://render.githubusercontent.com/render/math?math=\\Large\\color{white}green",
      encodes: "\\color{green}",
      class: "green mb_-1",
    },
    {
      id: 292,
      url:
        "https://render.githubusercontent.com/render/math?math=\\Large\\color{white}lime",
      encodes: "\\color{lime}",
      class: "lime mt_-4 mr_-4",
    },
    {
      id: 293,
      url:
        "https://render.githubusercontent.com/render/math?math=\\Large\\color{white}maroon",
      encodes: "\\color{maroon}",
      class: "maroon",
    },
    {
      id: 294,
      url:
        "https://render.githubusercontent.com/render/math?math=\\Large\\color{white}navy",
      encodes: "\\color{navy}",
      class: "navy mb_-3",
    },
    {
      id: 295,
      url:
        "https://render.githubusercontent.com/render/math?math=\\Large\\color{white}olive",
      encodes: "\\color{olive}",
      class: "olive mt_-4",
    },
    {
      id: 296,
      url:
        "https://render.githubusercontent.com/render/math?math=\\Large\\color{white}orange",
      encodes: "\\color{orange}",
      class: "orange mb_-3",
    },
    {
      id: 297,
      url:
        "https://render.githubusercontent.com/render/math?math=\\Large\\color{white}purple",
      encodes: "\\color{purple}",
      class: "purple mt_-2",
    },
    {
      id: 298,
      url:
        "https://render.githubusercontent.com/render/math?math=\\Large\\color{white}red",
      encodes: "\\color{red}",
      class: "red mt_-4",
    },
    {
      id: 299,
      url:
        "https://render.githubusercontent.com/render/math?math=\\Large\\color{white}silver",
      encodes: "\\color{silver}",
      class: "silver mt_-5",
    },
    {
      id: 300,
      url:
        "https://render.githubusercontent.com/render/math?math=\\Large\\color{white}teal",
      encodes: "\\color{teal}",
      class: "teal mt_-4",
    },
    {
      id: 301,
      url:
        "https://render.githubusercontent.com/render/math?math=\\Large\\color{white}yellow",
      encodes: "\\color{yellow}",
      class: "yellow",
    },
    {
      id: 302,
      url:
        "https://render.githubusercontent.com/render/math?math=\\Large\\bf\\color{white}bold",
      encodes: "\\bf ",
      class: "mt_-3",
    },
    {
      id: 303,
      url:
        "https://render.githubusercontent.com/render/math?math=\\Large\\it\\color{white}italic",
      encodes: "\\it ",
      class: "mt_-4",
    },
    {
      id: 304,
      url:
        "https://render.githubusercontent.com/render/math?math=\\Large\\tt\\color{white}truetype",
      encodes: "\\tt ",
      class: "mr_-6",
    },
    {
      id: 305,
      url:
        "https://render.githubusercontent.com/render/math?math=\\normalsize\\bf\\color{white}tiny",
      encodes: "\\tiny ",
      class: "mt_-3",
    },
    {
      id: 306,
      url:
        "https://render.githubusercontent.com/render/math?math=\\huge\\scriptsize\\color{white}scriptsize",
      encodes: "\\scriptsize ",
      class: "mt_-2",
    },
    {
      id: 307,
      url:
        "https://render.githubusercontent.com/render/math?math=\\normalsize\\bf\\color{white}small",
      encodes: "\\small ",
      class: "mt_-5",
    },
    {
      id: 308,
      url:
        "https://render.githubusercontent.com/render/math?math=\\Large\\color{white}normalsize",
      encodes: "\\normalsize ",
      class: "mt_-5 mr_-4",
    },
    {
      id: 209,
      url:
        "https://render.githubusercontent.com/render/math?math=\\huge\\color{white}large",
      encodes: "\\large ",
      class: "mb_-3",
    },
    {
      id: 310,
      url:
        "https://render.githubusercontent.com/render/math?math=\\huge\\color{white}huge",
      encodes: "\\huge ",
      class: "mb_-2",
    },
  ],
};

export default ButtonEncodings;
