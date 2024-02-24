const tagMap = {
    "p": [
        ["\\(\\displaystyle\\rho\\) (resistivity)", "resistivity"],
        ["\\(\\displaystyle\\rho\\) (density)", "density"],
    ],
    "f": [
        ["\\(\\displaystyle\\vec{F}\\) (force)", "force"],
    ],
    "e": [
        ["\\(\\displaystyle\\vec{E}\\) (electric field)", "efield"],
    ],
    "i": [
        ["\\(\\displaystyle I\\) (current)", "current"],
        ["\\(\\displaystyle \\Phi\\) (electric flux)", "eflux"],
    ],
    "l": [
        ["\\(\\displaystyle L\\) (length)", "length"],
    ],
    "a": [
        ["\\(\\displaystyle\\vec{A}\\) (area)", "area"],
    ],
    "v": [
        ["\\(\\displaystyle\\vec{v}\\) (velocity)", "velocity"],
        ["\\(\\displaystyle\\vec{v}_d\\) (drift velocity)", "driftvelocity"],
        ["\\(\\displaystyle V\\) (voltage)", "volt"],
    ],
    "r": [
        ["\\(\\displaystyle R\\) (resistance)", "resistance"],
    ],
    "j": [
        ["\\(\\displaystyle\\vec{J}\\) (current density)", "currentdensity"],
    ],
    "o": [
        ["\\(\\displaystyle\\sigma\\) (conductivity)", "conductivity"],
        ["\\(\\displaystyle\\sigma\\) (area charge density)", "areachargedensity"],
    ],
    "s": [
        ["\\(\\displaystyle\\sigma\\) (conductivity)", "conductivity"],
        ["\\(\\displaystyle\\sigma\\) (area charge density)", "areachargedensity"],
    ],
    "q": [
        ["\\(\\displaystyle q\\) (charge)", "charge"],
    ],
    "t": [
        ["\\(\\displaystyle t\\) (time)", "time"],
    ],
    "n": [
        ["\\(\\displaystyle n\\) (charge carrier density)", "chargecarrierdensity"],
    ],
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

