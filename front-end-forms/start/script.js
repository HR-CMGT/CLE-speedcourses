const courseBtn = document.querySelector("#course")
const courseSection = document.querySelector("#coursesection")

courseBtn.addEventListener("click", function(){
    courseSection.scrollIntoView({behaviour:'smooth'})
})