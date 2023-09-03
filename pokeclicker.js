let clicker;
let combatUsage;
let berryFarm;

let startup = setInterval(() => {
  let rightCol = document.getElementById("right-column");

  //#region Card Setup

  //Card Div
  let cheatCard = document.createElement("div");
  cheatCard.id = "cheat-card";
  cheatCard.classList.add("card", "sortable", "border-secondary", "mb-3");

  //Card Header
  let cheatHeader = document.createElement("div");
  cheatHeader.classList.add("card-header", "p-0");
  cheatHeader.innerHTML = "Cheats";
  cheatCard.appendChild(cheatHeader);

  //Card Body
  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "p-0", "col-12");
  cheatCard.appendChild(cardBody);
  //#endregion

  //Cheat Settings Modules

  //#region Toggles
  //#region Auto Clicking
  let autoClickLabel = document.createElement("label");
  let clickerToggle = document.createElement("input");
  clickerToggle.type = "checkbox";
  clickerToggle.id = "autoclick";
  clickerToggle.checked = true;
  autoClickLabel.appendChild(clickerToggle);
  autoClickLabel.innerHTML += "AutoClicker";
  cardBody.appendChild(autoClickLabel);
  //#endregion

  //#region Auto-Item Usage
  let combatUsageLabel = document.createElement("label");
  let combatUsageToggle = document.createElement("input");
  combatUsageToggle.type = "checkbox";
  combatUsageToggle.id = "autouse";
  combatUsageToggle.checked = false;
  combatUsageLabel.appendChild(combatUsageToggle);
  combatUsageLabel.innerHTML += "Auto-Use Combat Items";
  cardBody.appendChild(combatUsageLabel);
  //#endregion

  //#region Auto-Farm
  let farmLabel = document.createElement("label");
  let farmToggle = document.createElement("input");
  farmToggle.type = "checkbox";
  farmToggle.id = "autoFarmToggle";
  farmToggle.checked = false;
  farmLabel.appendChild(farmToggle);
  farmLabel.innerHTML += "Auto-Farm Berries";
  cardBody.appendChild(farmLabel);

  //#endregion
  //#endregion

  //Final Appends
  rightCol.appendChild(cheatCard);

  if (rightCol) {
    clearInterval(startup);
  }
}, 1000);

function activateClicker() {
  clicker = setInterval(() => {
    let enemy = document.getElementsByClassName("enemy")[0];
    let autoclicktoggle = document.getElementById("autoclick");
    if (enemy && autoclicktoggle) {
      if (autoclicktoggle.checked) {
        enemy.click();
      }
    }
  }, 1);
}

function autoUseCombatItems() {
  combatUsage = setInterval(() => {
    let battleItemUI = document.getElementById("battleItemContainerBody");
    let auto = document.getElementById("autouse");
    if (battleItemUI && auto) {
      if (auto.checked) {
        battleItemUI = battleItemUI.children[1].children[1].children[1];
        let xattack = battleItemUI.children[0].children[0];
        let clickATK = battleItemUI.children[1].children[0];
        xattack.click();
        clickATK.click();
      }
    }
  }, 30000);
}

function autoFarmBerries() {
  berryFarm = setInterval(() => {
    let farmTiles = document.getElementById("plotList").children;
    let auto = document.getElementById("autoFarmToggle");
    if (farmTiles && auto) {
      if (auto.checked) {
        for (let i = 0; i < farmTiles.length; i++) {
          const element = farmTiles[i];
          if (
            !(
              element.classList.contains("w-100") ||
              element.classList.contains("plotLocked")
            )
          ) {
            element.children[0].children[0].children[1].click();
            element.children[0].children[0].children[1].click();
          }
        }
      }
    }
  }, 10000);
}

autoFarmBerries();
activateClicker();
autoUseCombatItems();
