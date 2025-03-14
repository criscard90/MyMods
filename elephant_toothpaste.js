// ==UserScript==
// @name         Sandboxels Elephant Toothpaste Mod
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Aggiunge la reazione dell'Elephant Toothpaste a Sandboxels
// @author       Il Tuo Nome
// @match        *://sandboxels.js.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 1️⃣ Perossido di Idrogeno (H₂O₂)
    elements.hydrogen_peroxide = {
        color: "#a3d9ff",
        behavior: behaviors.LIQUID,
        reactions: {
            "potassium_iodide": { elem1: "foam", temp1: 50 },
            "yeast": { elem1: "foam", temp1: 50 }
        },
        tempHigh: 100,
        stateHigh: "steam",
        category: "liquids",
        state: "liquid",
        hidden: false
    };

    // 2️⃣ Ioduro di Potassio (Catalizzatore)
    elements.potassium_iodide = {
        color: "#d1cfd0",
        behavior: behaviors.POWDER,
        category: "powders",
        state: "solid",
        hidden: false
    };

    // 3️⃣ Lievito (Catalizzatore alternativo)
    elements.yeast = {
        color: "#c1a775",
        behavior: behaviors.POWDER,
        category: "powders",
        state: "solid",
        hidden: false
    };

    // 4️⃣ Schiuma dell'Elephant Toothpaste
    elements.foam = {
        color: "#ffffff",
        behavior: [
            "XX|XX|XX",
            "XX|FX|XX",
            "XX|M1|XX"
        ],
        tempHigh: 50,
        stateHigh: "steam",
        category: "gases",
        state: "gas",
        hidden: false
    };

    // 5️⃣ Biossido di Manganese (MnO₂) - Aumenta la creazione di H₂O₂
    elements.manganese_dioxide = {
        color: "#3d3d3d",
        behavior: behaviors.POWDER,
        category: "powders",
        state: "solid",
        hidden: false
    };

    // 6️⃣ Reazione Acqua + Ossigeno → Perossido di Idrogeno
    if (!elements.water.reactions) elements.water.reactions = {};
    elements.water.reactions["oxygen"] = { elem1: "hydrogen_peroxide", chance: 0.3, temp1: -10 };
    elements.water.reactions["manganese_dioxide"] = { elem1: "hydrogen_peroxide", chance: 0.8 };

})();
