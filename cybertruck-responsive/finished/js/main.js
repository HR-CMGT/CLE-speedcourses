let contactLink = document.getElementById("btn-specs");

contactLink.addEventListener("click", function(){
    console.log("je klikt op de specs button");

    let specsSection = document.getElementById("specs");
    specsSection.scrollIntoView({ behavior: 'smooth' });
});