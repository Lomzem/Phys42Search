const tagMap = {
    "a": [
        {
            "latex": "\\(\\displaystyle\\vec{ A }\\)(area)",
            "keyword": "area"
        },
        {
            "latex": "\\(\\displaystyle a\\) (acceleration)",
            "keyword": "acceleration"
        }
    ],
    "c": [
        { "latex": "\\(\\displaystyle C\\) (capacitance)", "keyword": "capacitance" }
    ],
    "d": [
        {
            "latex": "\\(\\displaystyle d\\) (distance)",
            "keyword": "distance"
        }
    ],
    "d": [
        {
            "latex": "\\(\\displaystyle d\\) (distance)",
            "keyword": "distance"
        }
    ],

    "e": [
        {
            "latex": "\\(\\displaystyle\\vec{E}\\) (electric field)",
            "keyword": "efield"
        }
    ],

    "f": [
        {
            "latex": "\\(\\displaystyle\\vec{F}\\) (force)",
            "keyword": "force"
        }
    ],

    "i": [
        {
            "latex": "\\(\\displaystyle I\\) (current)",
            "keyword": "current"
        },
        {
            "latex": "\\(\\displaystyle \\Phi\\) (electric flux)",
            "keyword": "eflux"
        }
    ],

    "j": [
        {
            "latex": "\\(\\displaystyle\\vec{J}\\) (current density)",
            "keyword": "currentdensity"
        }
    ],

    "k": [
        {
            "latex": "\\(\\displaystyle \\kappa\\) (dielectric constant)",
            "keyword": "dielectricconstant"
        }
    ],

    "l": [
        {
            "latex": "\\(\\displaystyle L\\) (length)",
            "keyword": "length"
        }
    ],

    "m": [
        {
            "latex": "\\(\\displaystyle m\\) (mass)",
            "keyword": "mass"
        }
    ],

    "n": [
        {
            "latex": "\\(\\displaystyle n\\) (charge carrier density)",
            "keyword": "chargecarrierdensity"
        }
    ],

    "o": [
        {
            "latex": "\\(\\displaystyle\\sigma\\) (conductivity)",
            "keyword": "conductivity"
        },
        {
            "latex": "\\(\\displaystyle\\sigma\\) (area charge density)",
            "keyword": "areachargedensity"
        }
    ],

    "p": [
        {
            "latex": "\\(\\displaystyle P\\) (power)",
            "keyword": "power"
        },
        {
            "latex": "\\(\\displaystyle\\rho\\) (resistivity)",
            "keyword": "resistivity"
        },
        {
            "latex": "\\(\\displaystyle\\rho\\) (density)",
            "keyword": "density"
        }
    ],

    "q": [
        {
            "latex": "\\(\\displaystyle q\\) (charge)",
            "keyword": "charge"
        }
    ],

    "r": [
        {
            "latex": "\\(\\displaystyle R\\) (resistance)",
            "keyword": "resistance"
        }
    ],

    "s": [
        {
            "latex": "\\(\\displaystyle\\sigma\\) (conductivity)",
            "keyword": "conductivity"
        },
        {
            "latex": "\\(\\displaystyle\\sigma\\) (area charge density)",
            "keyword": "areachargedensity"
        }
    ],

    "t": [
        {
            "latex": "\\(\\displaystyle t\\) (time)",
            "keyword": "time"
        }
    ],

    "u": [
        {
            "latex": "\\(\\displaystyle U\\) (potential energy)",
            "keyword": "penergy"
        },
        {
            "latex": "\\(\\displaystyle u\\) (energy density)",
            "keyword": "energydensity"
        }
    ],

    "v": [
        {
            "latex": "\\(\\displaystyle\\vec{v}\\) (velocity)",
            "keyword": "velocity"
        },
        {
            "latex": "\\(\\displaystyle\\vec{v}_d\\) (drift velocity)",
            "keyword": "driftvelocity"
        },
        {
            "latex": "\\(\\displaystyle V\\) (voltage)",
            "keyword": "volt"
        },
        {
            "latex": "\\(\\displaystyle V\\) (volume)",
            "keyword": "volume"
        }
    ]
};

function showAuto() {
    const searchInput = document.getElementById("searchInput");
    const autoList = document.getElementById("autoList");
    autoList.innerHTML = "";

    const input = searchInput.value.trim().split(" ").pop().toLowerCase();

    if (input.length !== 1) {
        selectedIndex = -1
        return;
    }

    const tags = tagMap[input];
    if (tags) {
        const htmlString = tags.map((tag) => {
            return `<li class="autocomplete-item" onclick="addAutoCmp('${tag["keyword"]}')"><p>${tag["latex"]}</p></li>`;
        });
        autoList.innerHTML = htmlString.join("");
    }

    MathJax.typesetPromise();
}

function addAutoCmp(tag) {
    const searchInput = document.getElementById("searchInput");
    searchInput.value = searchInput.value.slice(0, -1);
    searchInput.value += tag;
    searchInput.focus();
    showAuto();
    searchEquations();
}

