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
        // electric flux integral
        latex: "\\(\\displaystyle\\Phi_E = \\oint \\vec{E} \\cdot d\\vec{A}\\)",
        tags: ["efield", "area", "eflux"]
    },
    {
        // electric flux qenc
        latex: "\\(\\displaystyle\\Phi_E = \\frac{q_{\\text{enc}}}{\\epsilon_0}\\)",
        tags: ["efield", "area", "eflux", "charge", "area"]
    },
    {
        // area charge density
        latex: "\\( \\displaystyle \\sigma = \\frac{q}{A}\\)",
        tags: ["sigma", "areachargedensity", "area", "charge"]
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
