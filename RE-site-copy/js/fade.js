const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    if (entry.isIntersecting) {
    entry.target.classList.add('show');
    } else {
    entry.target.classList.remove('show');
    }
    });
}); 
    /*
      we make a object called observer, through instersectionObserver
      new intersectionObserver is a constructor function that creates a IO object.
      each time a element is observed, this if statment will initiate.

      each entry is a element
    */

    /*
    if the entry is in viewport it will add the class of show, to the element
    if it is not then you remove the class of show
    for example if i wanted only to fade once then i would remove the else statment
    */

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe (el));

    //loop all the elements, each one will iterate through the observer function
    /* observer.observe is the built in function in the object, this looks for the hiddenElement variable,
       if its in view, it intiates the if statments we wrote
    */