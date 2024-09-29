//typing animation
var typed = new Typed(".typing",{
    strings:["Python Developer","Web Developer","Software Developer",],
    typeSpeed:100,
    BackSpedd:100,
    loop:true
})
//Aside
const nav = document.querySelector(".nav"),
     navList = nav.querySelectorAll("li"),
     totalNavList = navList.length,
     allsection = document.querySelectorAll(".section"),
     totalSection = allsection.length;
     for(let i=0; i<totalNavList;i++)
     {
        const a =navList[i].querySelector("a");
        a.addEventListener("click",function()
        {
            removeBackSection();
            for(let j=0; j<totalNavList; j++)
            {
                if(navList[j].querySelector("a").classList.contains("active"))
                {
                  addBackSection(j);
                   // allsection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
            if(window.innerWidth < 1200)
            {
                asideSectionTogglerBtn();
            }
        })
     }
     function removeBackSection()
     {
       for(let i=0; i<totalNavList; i++)
       {
        allsection[i].classList.remove("back-section");
       }
     }
     function addBackSection(num)
     {
       allsection[num].classList.add("back-section")
     }
     function showSection(element)
     {
       for(let i=0; i<totalSection; i++) 
       {
         allsection[i].classList.remove("active");
       }
       const target = element.getAttribute("href").split("#")[1];
       document.querySelector("#" + target).classList.add("active")
     }
     function updateNav(element)
     {
      for(let i=0; i<totalNavList; i++)
      {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
          navList[i].querySelector("a").classList.add("active");
        }
      }
     }
     document.querySelector(".hire-me").addEventListener("click",function()
     {
         const sectionIndex = this.getAttribute("data-section-index");
         showSection(this);
         updateNav(this);
         removeBackSection();
         addBackSection(sectionIndex);
     })
     const navTogglerBtn = document.querySelector(".nav-toggler"),
         asdie = document.querySelector(".aside");
         navTogglerBtn.addEventListener("click",()=>
          {
            asideSectionTogglerBtn();
          })
          function asideSectionTogglerBtn()
          {
            asdie.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for(let i=0; i<totalSection; i++)
            {
                allsection[i].classList.toggle("open");
            }
          }

