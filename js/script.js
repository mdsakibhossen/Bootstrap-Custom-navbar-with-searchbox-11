// Start Nav-Button(Sidebar Button/Menu-Button)
const menu_btn = document.querySelector('#menu_btn');

// Run On Nav-Button Click 
function menu_run() {
    const bar = document.querySelectorAll('.bar')
    const bar1 = bar[0];
    const bar2 = bar[1];
    const bar3 = bar[2];

    // Nav-Button Styling
    bar1.classList.toggle("bar1");
    bar2.classList.toggle("bar2");
    bar3.classList.toggle("bar3");
};
// End Nav-Button(Sidebar Button/Menu-Button)


const menu_item = document.querySelectorAll('.navbar-nav li')
// console.log(menu_item)
menu_item.forEach(element => {
    // console.log(element.childElementCount)
    if (element.childElementCount > 1){
        element.addEventListener('click',()=>{
            // console.log('clicked')
            document.querySelector('.course_icon').classList.toggle('course_icon_on')
            document.querySelector('.dropdown').classList.toggle('dropdown_on')
        })
    }
});