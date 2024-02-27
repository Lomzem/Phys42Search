const eqns = [
    {
        latex: "\\(\\displaystyle\\vec{F}=m\\vec{a}\\)",
        tags: ["force", "mass", "acceleration"]
    },
    {
        latex: "\\(\\displaystyle|\\vec{F}_{\\text{electric}}| =\\frac{kq_1q_2}{r^2}\\)",
        tags: ["force", "charge"]
    },
    {
        // point charge
        latex: "\\(\\displaystyle|\\vec{E}_\\text{point}| =\\frac{kq}{r^2}\\)",
        tags: ["efield", "charge"]
    },
    {
        latex: "\\(\\displaystyle\\vec{F} = \\vec{E} q\\)",
        tags: ["efield", "force", "charge"]
    },
    {
        latex: "\\(\\displaystyle\\lambda = \\frac{dq}{dL}\\)",
        tags: ["lambda", "linearchargedensity", "length", "charge"]
    },
    {
        // electric flux
        latex: "\\(\\displaystyle\\Phi_E = \\frac{q_{\\text{enc}}}{\\epsilon_0} = \\oint \\vec{E} \\cdot d\\vec{A}\\)",
        tags: ["efield", "area", "eflux", "charge", "area"]
    },
    {
        // area charge density
        latex: "\\( \\displaystyle \\sigma = \\frac{q}{A}\\)",
        tags: ["sigma", "areachargedensity", "area", "charge"]
    },
    {
        // volume charge density
        latex: "\\( \\displaystyle \\rho = \\frac{q}{\\text{Volume}}\\)",
        tags: ["charge", "volume", "density"]
    },
    {
        // point charge penergy
        latex: "\\( \\displaystyle U_{\\text{point}} = \\frac{kqQ}{r}\\)",
        tags: ["penergy", "charge"],
    },
    {
        // volt U
        latex: "\\( \\displaystyle \\Delta U = \\Delta V q\\)",
        tags: ["volt", "penergy", "charge"],
    },
    {
        // volt E int
        latex: "\\(\\displaystyle \\Delta V = - \\int \\vec{E} \\cdot d\\vec{r}\\)",
        tags: ["volt", "efield"],
    },
    {
        // capacitance
        latex: "\\(\\displaystyle C = \\frac{q}{V}\\)",
        tags: ["capacitance", "charge", "volt"],
    },
    {
        // ceq series
        latex: "\\(\\displaystyle \\frac{1}{C_{\\text{(eq series)}}} = \\sum_{i=1}^{N} \\frac{1}{C_i}\\)",
        tags: ["capacitance"],
    },
    {
        // ceq parallel
        latex: "\\(\\displaystyle C_{\\text{(eq parallel)}} = \\sum_{i=1}^{N} C_i\\)",
        tags: ["capacitance"],
    },
    {
        // capacitance parallel plate
        latex: "\\(\\displaystyle C_{\\text{(parallel plate)}} = \\epsilon_0 \\frac{A}{d}\\)",
        tags: ["capacitance", "area", "distance"],
    },
    {
        // capacitance cylinder
        latex: "\\(\\displaystyle C_{\\text{cylinder}} = \\frac{2 \\pi L \\epsilon_0}{\\ln (\\frac{r_o}{r_i})}\\)",
        tags: ["capacitance", "length"]
    },
    {
        // dielectric constant
        latex: "\\(\\displaystyle C = \\kappa C_0\\)",
        tags: ["dielectricconstant", "capacitance"],
    },
    {
        // energy density
        latex: "\\(\\displaystyle u = \\frac{1}{2} \\epsilon_0 E^2\\)",
        tags: ["energydensity", "efield"],
    },
    {
        // electric current
        latex: "\\(\\displaystyle I = \\frac{dq}{dt}\\)",
        tags: ["current", "charge", "time"]
    },
    {
        // electric current
        latex: "\\(\\displaystyle I = neAv_d\\)",
        tags: ["current", "charge", "area", "driftvelocity", "chargecarrierdensity"]
    },
    {
        // current density
        latex: "\\(\\displaystyle |\\vec{J}| = \\frac{I}{A}\\)",
        tags: ["currentdensity", "current", "area"]
    },
    {
        // current density
        latex: "\\(\\displaystyle |\\vec{J}| = nev_d\\)",
        tags: ["currentdensity", "chargecarrierdensity", "driftvelocity"]
    },
    {
        // current density
        latex: "\\(\\displaystyle \\vec{J} = \\sigma \\vec{E}\\ = \\frac{\\vec{E}}{\\rho}\\)",
        tags: ["currentdensity", "efield", "conductivity", "resistivity"]
    },
    {
        // conductivity resistivity
        latex: "\\(\\displaystyle \\rho = \\frac{1}{\\sigma} \\Leftrightarrow \\sigma = \\frac{1}{\\rho}\\)",
        tags: ["conductivity", "resistivity"]
    },
    {
        // resistance
        latex: "\\(\\displaystyle R = \\rho \\frac{L}{A}\\)",
        tags: ["resistance", "conductivity", "resistivity", "length", "area"]
    },
    {
        // resistivity
        latex: "\\(\\displaystyle \\rho = \\rho_0 (1 + \\alpha(T - T_0)\\)",
        tags: ["resistivity", "conductivity", "tempcoeffresistivity", "temp"]
    },
    {
        // ohms law
        latex: "\\(\\displaystyle V = I R\\)",
        tags: ["resistance", "volt", "current"]
    },
    {
        // power
        latex: "\\(\\displaystyle P = \\frac{\\Delta U}{\\Delta t}\\)",
        tags: ["power", "penergy", "time"]
    },
    {
        // power
        latex: "\\(\\displaystyle P = IV\\)",
        tags: ["power", "current", "volt"]
    },
    {
        // power
        latex: "\\(\\displaystyle P_{\\text{resistor}} = I^2 R = \\frac{V^2}{R}\\)",
        tags: ["power", "current", "resistance", "volt"],
    },
]

function showAllEqn() {
    const eqnList = document.getElementById("eqnList");
    eqnList.innerHTML = "";
    const htmlString = eqns.map((eqn) => {
        return `
        <li class="eqn">
            <p>${eqn.latex}</p>
        </li>
        `;
    }).join("");
    eqnList.innerHTML = htmlString;

    MathJax.typesetPromise();
}

function searchEquations() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const eqnList = document.getElementById("eqnList");
    eqnList.innerHTML = "";

    if (searchInput == "") {
        showAllEqn();
        return;
    }

    // eqns.forEach((eqn) => {
    //     const eqnLi = document.createElement("span");
    //     eqnLi.innerHTML = eqn.latex;
    //     eqnList.append(eqnLi);
    // })
    const htmlString = eqns.map((eqn) => {
        var searchMatches = searchInput.split(" ").every(
            tag => eqn.tags.includes(tag)
        );
        if (searchMatches) {
            return `
            <li class="eqn">
                <p>${eqn.latex}</p>
            </li>
            `;
        }
    }).join("");
    eqnList.innerHTML = htmlString;

    MathJax.typesetPromise();
}
