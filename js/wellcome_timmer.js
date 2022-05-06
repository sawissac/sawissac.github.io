function initWellcomeTimmer(){
    const mainLink = document.getElementById("main-link");
    if(mainLink){
        const nextLinkTimmer = setTimeout(()=>{
            mainLink.click();
            clearTimeout(nextLinkTimmer);
        },2000);
    }
}