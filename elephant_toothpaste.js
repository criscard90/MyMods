// ==UserScript==
// @name         Sandboxels Elephant Toothpaste Mod
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Aggiunge la reazione dell'Elephant Toothpaste a Sandboxels
// @author       Il Tuo Nome
// @match        *://sandboxels.js.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 1. Definizione del Perossido di Idrogeno (H₂O₂)
    elements.hydrogen_peroxide = {
        color: "#a3d9ff",
        behavior: behaviors.LIQUID,
        reactions: {
            "potassium_iodide": { elem1: "foam", temp1: 50 },
            "yeast": { elem1: "foam", temp1: 50 }
        },
        tempHigh: 100,
        stateHigh: "steam",
        category: "liquids"
    };

    // 2. Definizione dell'Ioduro di Potassio e del Lievito (Catalizzatori)
    elements.potassium_iodide = {
        color: "#d1cfd0",
        behavior: behaviors.POWDER,
        category: "solids"
    };

    elements.yeast = {
        color: "#c1a775",
        behavior: behaviors.POWDER,
        category: "solids"
    };

    // 3. Creazione della Schiuma (Foam)
    elements.foam = {
        color: "#ffffff",
        behavior: [
            "XX|XX|XX",
            "XX|FX|XX",
            "XX|M1|XX"
        ],
        tempHigh: 50,
        stateHigh: "steam",
        category: "gases"
    };

    // 4. Creazione del Perossido di Idrogeno da Acqua + Ossigeno
    if (!elements.water.reactions) elements.water.reactions = {}; // Se non esiste, crea l'oggetto reazioni
    elements.water.reactions["oxygen"] = { elem1: "hydrogen_peroxide", chance: 0.3, temp1: -10 };

    // 5. Opzionale: Aggiungere il catalizzatore MnO₂ per aumentare la probabilità di reazione
    elements.manganese_dioxide = {
        color: "#3d3d3d",
        behavior: behaviors.POWDER,
        category: "solids"
    };
    elements.water.reactions["manganese_dioxide"] = { elem1: "hydrogen_peroxide", chance: 0.8 };

})();
