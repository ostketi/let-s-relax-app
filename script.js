const btnMain = document.querySelector("#btnMain");
const container = document.querySelector("#btn-container");

btnMain.addEventListener("click", show);
function show() {
    container.style.display = "none";
    if (container.style.display === "none") {
        container.style.display = "block";
    }  

gsap.to("#btn-one", {
    duration: 1,
    ease: "bounce.in",
    y: 200,
    x: 20
 });

gsap.to("#btn-two", {
    delay: .5,
    duration: 1,
    ease: "bounce.in",
    y: 200,
    x: 10
});
        
gsap.to("#btn-three", {
    delay: 1,
    duration: 1,
    ease: "bounce.in",
    y: 200,
    x: 10
});
}



