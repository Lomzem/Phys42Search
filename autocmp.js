const tagMap = {
    "a": [["\\(\\displaystyle\\vec{A}\\) (area)", "area"], ["\\(\\displaystyle a\\) (acceleration)", "acceleration"],],
    "c": [["\\(\\displaystyle C\\) (capacitance)", "capacitance"],],
    "d": [["\\(\\displaystyle d\\) (distance)", "distance"],],
    "e": [["\\(\\displaystyle\\vec{E}\\) (electric field)", "efield"],],
    "f": [["\\(\\displaystyle\\vec{F}\\) (force)", "force"],],
    "i": [["\\(\\displaystyle I\\) (current)", "current"], ["\\(\\displaystyle \\Phi\\) (electric flux)", "eflux"],],
    "j": [["\\(\\displaystyle\\vec{J}\\) (current density)", "currentdensity"],],
    "k": [["\\(\\displaystyle \\kappa\\) (dielectric constant)", "dielectricconstant"],],
    "l": [["\\(\\displaystyle L\\) (length)", "length"],],
    "m": [["\\(\\displaystyle m\\) (mass)", "mass"],],
    "n": [["\\(\\displaystyle n\\) (charge carrier density)", "chargecarrierdensity"],],
    "o": [["\\(\\displaystyle\\sigma\\) (conductivity)", "conductivity"], ["\\(\\displaystyle\\sigma\\) (area charge density)", "areachargedensity"],],
    "p": [["\\(\\displaystyle P\\) (power)", "power"], ["\\(\\displaystyle\\rho\\) (resistivity)", "resistivity"], ["\\(\\displaystyle\\rho\\) (density)", "density"],],
    "q": [["\\(\\displaystyle q\\) (charge)", "charge"],],
    "r": [["\\(\\displaystyle R\\) (resistance)", "resistance"],],
    "s": [["\\(\\displaystyle\\sigma\\) (conductivity)", "conductivity"], ["\\(\\displaystyle\\sigma\\) (area charge density)", "areachargedensity"],],
    "t": [["\\(\\displaystyle t\\) (time)", "time"],],
    "u": [["\\(\\displaystyle U\\) (potential energy)", "penergy"], ["\\(\\displaystyle u\\) (energy density)", "energydensity"],],
    "v": [["\\(\\displaystyle\\vec{v}\\) (velocity)", "velocity"], ["\\(\\displaystyle\\vec{v}_d\\) (drift velocity)", "driftvelocity"], ["\\(\\displaystyle V\\) (voltage)", "volt"], ["\\(\\displaystyle V\\) (volume)", "volume"]],
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
            return `<li class="autocomplete-item" onclick="addAutoCmp('${tag[1]}')"><p>${tag[0]}</p></li>`;
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

