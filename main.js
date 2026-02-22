
// click me btu
function showAlert() {
    document.getElementById("customAlert").style.display = "block";
}
function closeAlert() {
    document.getElementById("customAlert").style.display = "none";
}

// add my photo

let myphoto = document.querySelector("#home > .right-side > img");
myphoto.src = "jegan.jpg"

// skills

let skill1 = document.querySelector("#skill > .skills > .span1")
skill1.innerHTML = `Java`
let skill2 = document.querySelector("#skill > .skills > .span2")
skill2.innerHTML = `JDBC Connectivity`
let skill3 = document.querySelector("#skill > .skills > .span3")
skill3.innerHTML = `Oracle SQL`
let skill4 = document.querySelector("#skill > .skills > .span4")
skill4.innerHTML = `HTML`
let skill5 = document.querySelector("#skill > .skills > .span5")
skill5.innerHTML = `CSS`
let skill6 = document.querySelector("#skill > .skills > .span6")
skill6.innerHTML = `GitHub`

//resume btn

let downloadBtn = document.getElementById("resumeBtn");

downloadBtn.addEventListener("click", () => {
    let anchor = document.createElement("a")
    anchor.href = "JeganResume.pdf";
    anchor.download = "JeganResume.pdf"
    document.body.appendChild(anchor); // add to DOM
    anchor.click(); // trigger download
    document.body.removeChild(anchor); // clean up
})

//View Resume

let resumeViewBtn = document.getElementById("resumeView");

resumeViewBtn.addEventListener("click", () => {

    let anchor = document.createElement("a");

    anchor.href = "https://drive.google.com/file/d/1dTZhUaP4LT8NIW6ULxuSa43IhCIyAkSa/view?usp=sharing"

    anchor.target = "_blank";

    document.body.appendChild(anchor); // add to DOM
    anchor.click(); // trigger download
    document.body.removeChild(anchor); // clean up
})

// footer 

document.getElementById("year").innerHTML = new Date().getFullYear();

