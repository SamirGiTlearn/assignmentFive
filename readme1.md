1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

answer. 
      getElementById  select only one element by its special or unicq id and its Flexibility fastest.

                                         Example:   [document.getElementById('uniqueId')]

      getElementsByClassName   its a class selector the given class name select inside all 
                               element by h1-h6 p etc.its Flexibility limited.                                 
                                        Example:   [document.getElementByClassName('bazarList')]

      querySelector its like this css selector.select first element with given class/id name.its very flexible.
                                         Example:   [document.querySelector('.bazarList')]
                                         Example:   [document.querySelector('#bazarList')]

      querySelectorAll its like this css selector ,select all matching element with given class/id name.its very flexible.
                                        Example:   [document.querySelectorAll(".salaryList");]
                                                   [document.querySelectorAll("#salaryList");

2.  How do you **create and insert a new element into the DOM**?

answer.
       document.createElement() to create a new HTML element
       example; const newDiv = document.createElement("div");

3. What is **Event Bubbling** and how does it work?

answer.
      when i slect id/class  and add eventListener click function than make click event .
      only working selected id/class.its Event Bubbling etc.

4. What is **Event Delegation** in JavaScript? Why is it useful?

answer.
     Event Delegation means attaching a single event listener to a parent element.

     why usefil is it 
            One listener instead of many.
            Perfect for grids,
            perfect for responsive design.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

answer.
      preventDefault() : stop browser defult bahavior for an event
      preventDefault() and stopPropagation() :- Stops the event from child element to parent elements.


   
     


 
      

