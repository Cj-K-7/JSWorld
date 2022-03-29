const box = document.querySelector("#dragAndDrop");

let dragging = false;
let clickedOffsetX = 0;
let clickedOffsety = 0;

box.style.position = "absolute";
box.style.border = "2px solid black";
document.body.appendChild(box);

const selectBox = (event) => {
  const { offsetX, offsetY } = event;
  dragging = true;
  clickedOffsetX = offsetX;
  clickedOffsety = offsetY;
};
const dropBox = () => {
  dragging = false;
};
const dragBox = (event) => {
  if (dragging) {
    const { clientX, clientY } = event;
    box.style.top = `${clientY - clickedOffsety}px`;
    box.style.left = `${clientX - clickedOffsetX}px`;
  }
};

if (box) {
  box.addEventListener("mousedown", selectBox);
  box.addEventListener("mousemove", dragBox);
  box.addEventListener("mouseup", dropBox);
}
