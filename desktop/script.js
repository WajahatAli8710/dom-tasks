let bar = document.querySelector(".taskbar");
let container = document.querySelector(".container");

const icons = [
  { id: "window", name: "Window", flag: false, visible: true },
  { id: "task-view", name: "TaskView", flag: false, visible: true },
  { id: "file-explorer", name: "FileExplorer", flag: false, visible: true },
  {id: "microsoft-copilot",name: "MicrosoftCopilot",flag: false,visible: true},
  { id: "microsoft-edge", name: "MicrosoftEdge", flag: false, visible: true },
  { id: "microsoft-word", name: "MicrosoftWord", flag: false, visible: true },
  { id: "brave", name: "Brave", flag: false, visible: true },
  { id: "vscode", name: "Vscode", flag: false, visible: true },
];

let x_axix = 0;
let y_axix = 0;

bar.addEventListener("click", function (dets) {
  icons.forEach(function (elem) {
    if (dets.target.id === elem.id) {
      if (!elem.flag) {
        let terminal = document.createElement("div");
        terminal.id = `${elem.id}`;
        terminal.className = "terminal";
        terminal.style.marginTop = x_axix + "px";
        terminal.style.marginLeft = y_axix + "px";
        terminal.innerHTML = `
        <div class="controls">
                        <div class="terminal-name">
                        <p>${elem.name}</p>
                        <i class="ri-close-fill treminal-icon"></i>
                        </div>
                        <div class="right">
                        <i class="ri-subtract-fill icon "></i>
                        <i class="ri-checkbox-blank-line  icon"></i>
                        <i class="ri-close-fill icon closeBtn"></i>
                        </div>
                        </div>
                        <div class="content">
                        <h2>${elem.name}</h2>
                    </div>
                    `;

        container.appendChild(terminal);
        elem.flag = true;
        x_axix += 30;
        y_axix += 30;

        let terminals = document.querySelectorAll(".terminal");
        terminals.forEach(function (elems) {
          elems.addEventListener("click", function (e) {
            console.log(
              e.target.classList.forEach(function (e) {
                if (e === "closeBtn") {
                  elems.remove();
                  elem.flag = false;
                }
              })
            );
          });
        });
      }
    }
  });
});
