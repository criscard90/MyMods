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
                                                    
                                                    elements.hydrogen_peroxide.reactions["potassium_iodide"].elem1 = "foam";
                                                    elements.hydrogen_peroxide.reactions["potassium_iodide"].chance = 1; // 100% di successo
                                                    elements.hydrogen_peroxide.reactions["potassium_iodide"].temp1 = 70; // Effetto termico