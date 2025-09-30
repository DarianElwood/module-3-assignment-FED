currentState = "A1"; // Starting node ID

const generateButtons = (id) => {
    options = fetchNewState(id).options;
    let newDiv = document.createElement("div");
    for (let i = 0; i < options.length; i++) {
        let button = document.createElement("button")
        button.id = options[i].target;
        button.addEventListener("click", (event) => {
            updateState(options[i].target)
            //renderPage();
        } );
        newDiv.appendChild(button);
    }
}

const generateChoiceText = (id) => {
    customText = document.createElement("p");
    customText.innerText = fetchNewState(id).text;
    return customText;
}

const updateState = (id) => {
    /* Checks that a valid state has been passed, 
    and updates the currentState integer with the
    passed state.

    If an invalid state is given it will log it to the
    console and not update the state.
     */
    try {
        adventureNodes.find(n => n.id === id);
    }
    catch {
        throw new Error("Invalid state id.");
    }
    currentState = id;
}

const fetchNewState = (id) => {
    try {
        const newState = adventureNodes.find(n => n.id === id);
        return newState;
    }
    catch {
        console.log(Error);
    }
}

const renderPage = (id) => {
    const storyNode = document.getElementById("story");
    while (storyNode.firstChild){
        storyNode.removeChild(storyNode.firstChild);
    }
    storyNode.appendChild(generateChoiceText(id));

}

const adventureNodes = [
  {
    id: "A1",
    text: "You are the advisor for Echo Squad, deployed in a contested area with rebel activity. Do you fortify a secure position or move to a new location to avoid detection?",
    options: [
      { text: "Fortify Position", target: "B1" },
      { text: "Move to New Location", target: "C1" },
      { text: "Attempt to Contact Local Allies", target: "D1" }
    ]
  },
  // --- Fortify Path ---
  {
    id: "B1",
    text: "The team sets up a secure perimeter and successfully defends against an initial rebel attack. A soldier is injured.",
    options: [
      { text: "Begin medical treatment on-site", target: "B2" },
      { text: "Organize an immediate medevac", target: "B3" }
    ]
  },
  {
    id: "B2",
    text: "The team treats the injured soldier on-site. The rebel offensive never occurs. The team remains intact.",
    options: [
      { text: "Begin patrol missions in surrounding area", target: "B4" },
      { text: "Set up a more defensible base", target: "B5" }
    ]
  },
  {
    id: "B3",
    text: "Medevac alerts rebels. A larger attack follows. The team survives but with heavy casualties.",
    options: [
      { text: "Attempt to hold position", target: "B6" },
      { text: "Retreat to a safer location", target: "B7" }
    ]
  },
  {
    id: "B4",
    text: "The team conducts successful patrols, apprehending a high-value target. Huge success.",
    options: []
  },
  {
    id: "B5",
    text: "The team fortifies their position, but lack of movement lowers morale. Moderate success.",
    options: []
  },
  {
    id: "B6",
    text: "The team holds ground but is overrun due to reduced strength. Mission fails.",
    options: []
  },
  {
    id: "B7",
    text: "The team retreats successfully, but the mission is compromised. New plan needed.",
    options: []
  },
  // --- Move to New Location Path ---
  {
    id: "C1",
    text: "The team moves and avoids detection but encounters a rebel patrol.",
    options: [
      { text: "Engage the patrol", target: "C2" },
      { text: "Attempt to sneak past", target: "C6" }
    ]
  },
  {
    id: "C2",
    text: "The team engages and eliminates the threat without casualties.",
    options: [
      { text: "Continue to new location", target: "C3" },
      { text: "Set up temporary camp", target: "C4" }
    ]
  },
  {
    id: "C3",
    text: "The team continues to move but becomes fatigued. Morale drops. Moderate success.",
    options: []
  },
  {
    id: "C4",
    text: "The team rests and recovers at a temporary camp.",
    options: [
      { text: "Conduct reconnaissance missions", target: "C5" },
      { text: "Fortify the camp", target: "C9" }
    ]
  },
  {
    id: "C5",
    text: "Rebel activity is minimal. No valuable intel gathered. Minor success.",
    options: []
  },
  {
    id: "C6",
    text: "The team tries to sneak past but is detected. A firefight breaks out. Significant losses.",
    options: [
      { text: "Attempt to regroup", target: "C7" },
      { text: "Retreat to safer location", target: "C8" }
    ]
  },
  {
    id: "C7",
    text: "The team regroups, but morale and manpower are low. Mission fails.",
    options: []
  },
  {
    id: "C8",
    text: "The team retreats and must regroup. Mission compromised.",
    options: []
  },
  {
    id: "C9",
    text: "The camp is fortified and successfully defends against an attack. Minor injuries. Huge success.",
    options: []
  },
  // --- Contact Local Allies Path ---
  {
    id: "D1",
    text: "The team contacts a local militia but their loyalties are unclear.",
    options: [
      { text: "Request their assistance", target: "D2" },
      { text: "Decline and continue mission alone", target: "D5" }
    ]
  },
  {
    id: "D2",
    text: "The militia agrees to assist. A joint operation is successful.",
    options: [
      { text: "Pursue unverified intel about high-value target", target: "D3" },
      { text: "Focus on current mission", target: "D4" }
    ]
  },
  {
    id: "D3",
    text: "The intel is a trap. The team suffers heavy casualties. Mission fails.",
    options: []
  },
  {
    id: "D4",
    text: "The team completes the mission with militia help. Huge success.",
    options: []
  },
  {
    id: "D5",
    text: "The team declines help. Mission succeeds with higher casualties.",
    options: [
      { text: "Establish a permanent base", target: "D6" },
      { text: "Extract and return to base", target: "D7" }
    ]
  },
  {
    id: "D6",
    text: "A permanent base is set up. Area secured for future ops. Huge success.",
    options: []
  },
  {
    id: "D7",
    text: "The team extracts successfully and prepares for future missions. Minor success.",
    options: []
  }
];