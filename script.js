const eqns = [
    {
        latex: "\\(\\displaystyle\\vec{F}=m\\vec{a}\\)",
        tags: ["force", "mass", "acceleration"]
    },
    {
        latex: "\\(\\displaystyle|\\vec{F}_{\\text{electric}}| =\\frac{kq_1q_2}{r^2}\\)",
        tags: ["force", "mass", "acceleration", "charge"]
    },
    {
        latex: "\\(\\displaystyle|\\vec{E}| =\\frac{kq}{r^2}\\)",
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
