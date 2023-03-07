const observer = new IntersectionObserver((entrie) => {
    enterie.foreach((entry) => {
        console.log(entry)
        if ( entry.intersecting) {
            entry.target.classlist.add('show') ;
        }
        else{
            entry.target.classlist.remove('show')
        }
    })
})
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.foreach((el) => observer.observe(el));