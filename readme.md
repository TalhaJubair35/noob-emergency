1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans: 
* getElementById ==> it finds or gets the element of the given id.
* getElementsByClassName ==> it finds all elements with the class name. it could be one or more.
* querySelector ==> it finds the first element that matches a CSS selector. we have to use loop to get all.
* querySelectorAll ==> it finds all elements that match. we dont have to use loop for it.

2.How do you create and insert a new element into the DOM?
ans:
to create an element we use -> document.createElement()
to add content we use -> .innerText or appendChild()
to insert or make entry the content DOM we use -> .appendChild(), .prepend(), append()

3.What is Event Bubbling and how does it work?
ans:
when an event happens or occurs on an element it first runs the handler on the element then propagates to its parent then parent's parent and  so on till the <html>.

4.What is Event Delegation in JavaScript? Why is it useful?
ans:
to stop the propagation we use one sigle event instead of adding multiple events to its child/parents etc.

5.What is the difference between preventDefault() and stopPropagation() methods?
ans:
preventDefault() stops the default action of an element
stopPropagation() it stops bubbling/propagation.

<img width="1920" height="1613" alt="Joruri seba" src="https://github.com/user-attachments/assets/a078d08a-4016-4201-ab81-ff1ffb51bd1e" />
