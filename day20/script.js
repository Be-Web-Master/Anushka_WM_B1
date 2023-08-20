//1. Use getElementById to target the element with the ID "main-heading" and print it to the console. (getElementById)

// const mainHeading = document.getElementById('main-heading')
// console.log(mainHeading)

// 2.  Utilize elem.type to target the input element with the ID "name" and print its type to the console. (elem.type)


// const elem = document.getElementById("name")
// console.log(elem.type)

//3. Make use of elem.name to target the input element with the ID "name" and print its name attribute to the console. (elem.name)

// console.log(elem.name)

//4. Using elem.id, target the input element with the ID "name" and print its ID attribute to the console. (elem.id)

// console.log(elem.id)

//5. With the help of elem.value, target the input element with the ID "name" and print its value to the console. (elem.value)

// console.log(elem.value)

//6. Using querySelectorAll, target all <li> elements within the <ul> with class "list" and print them to the console. (querySelectorAll)


// const elem = document.querySelectorAll(".list")
// console.log(elem[0].innerHTML)

//7.Leveraging querySelector, target the <p> element within the <div> with class "content" and print it to the console. (querySelector)

// const elem = document.querySelector(".content")
// console.log(elem.innerHTML)

//8. Utilizing document.body.children, target all child elements of the <body> element and print them to the console. (document.body.children)

// console.log(document.body.children)

//9.Using getElementsByTagName, target the first <li> element within the <ul> with class "list" and print it to the console. (getElementsByTagName)

// const elem = document.getElementsByTagName("li")
// console.log(elem[0])

//10. Make use of getElementsByClassName, target all elements with the class "content" and print them to the console. (getElementsByClassName)

// const elem = document.getElementsByClassName("content")
// console.log(elem)

//11.Using getElementsByName, target the input element with the name "fullName" and print it to the console. (getElementsByName)

// const elem = document.getElementsByName("fullName")
// console.log(elem)

//12.What classes are present in the classList of the element with the ID "main-heading"? (classList)

// const elem =document.getElementById("main-heading").classList
// console.log(elem)

//13.Add the class "highlight" to the element with the ID "main-heading". What classes are present now? (classList.add)

// const elem = document.getElementById("main-heading")
// elem.classList.add("highlight")
// console.log(elem.classList)

//14,Remove the class "highlight" from the element with the ID "main-heading". What classes are present now? (classList.remove)

// const elem = document.getElementById("main-heading")
// elem.classList.remove("highlight")
// console.log(elem.classList).

//15.Toggle the class "active" on the element with the class "inner-box" inside the element with the ID "container". What classes are present on the "inner-box" element? (classList.toggle)

// const elem = document.getElementsByClassName("inner-box")[0]
// elem.classList.toggle(".active")
// console.log(elem.classList)

//16.  Does the element with the ID "name" have the class "input-field"? Print true or false. (classList.contains)

// const elem = document.getElementById("name").classList.contains("input-field")
// console.log(elem)

//17.What is the background color of the element with the ID "main-heading"? (style.background-color)

// const elem = document.getElementById("main-heading")
// elem.style.backgroundColor= "red"
// console.log(elem)

//18.Does the element with the class "list" contain an <li> element with the text "Item 2"? Print true or false. (matches)

// const elem = document.getElementsByClassName("list")[0]

// console.log(elem.matches("Item2"))

//19.Does the element with the class "content" match a <div> tag? Print true or false. (matches)

// const elem  = document.getElementsByClassName("content")[0]
// console.log(elem.matches("div"))

//20. What is the nearest ancestor of the element with the class "inner-box" that has the ID "container"? (closest)

// const elem1 = document.getElementsByClassName("inner-box")[0].closest("#container")
// console.log(elem1)

// 21. Print the first child element of the <body> element. (document.body)

// console.log(document.body.firstElementChild)

//22. Print the number of child elements within the <body> element. (document.body.children)

// console.log(document.body.children)

//23. What is the tag name of the first child element of the <body> element? (document.body.firstChild.tagName)

// const elem = document.body.firstElementChild.tagName
// console.log(elem)

//24. What is the class name of the first child element of the <body> element? (document.body.firstChild.className)

// console.log(document.body.firstElementChild.className)

//25. Print the innerHTML of the element with the class "content". (innerHTML)

// const elem = document.getElementsByClassName("content")[0]
// console.log(elem.innerHTML)

//26. Print the innerText of the element with the class "content". (innerText)

// const elem = document.getElementsByClassName("content")[0]
// console.log(elem.innerText)

//27.Get the value of the "type" attribute of the input element with the ID "name". (getAttribute())


// const elem = document.getElementById("name")
// console.log(elem.getAttribute("type"))

//28. Set the "placeholder" attribute of the input element with the ID "name" to "Enter your full name". (setAttribute())

// const elem = document.getElementById("name")
// console.log(elem.setAttribute("placeholder","Enter your full name"))

//29. Does the input element with the ID "name" have the "placeholder" attribute? Print true or false. (hasAttribute())

// const elem = document.getElementById("name")
// console.log(elem.hasAttribute("placeholder"))

//30. Remove the "value" attribute from the input element with the ID "name". (removeAttribute())

// const elem = document.getElementById("name")
// console.log(elem.removeAttribute("value"))


//31. Print the total number of attributes present in the element with the ID "main-heading". (attributes())

// const elem = document.getElementById("main-heading")
// console.log(elem.attributes)

//32. Create a new <div> element using the document.createElement method. Print the created element. (document.createElement)

// const elem = document.createElement("div")
// console.log(elem)

//33.Create a new text node with the content "This is a new text node." using the document.createTextNode method. Print the created text node. (document.createTextNode)

// const elem1 = document.createTextNode("This is a new text node.")
// console.log(elem1)


//34. Append the created text node to the element with the ID "main-heading". Print the updated element. (append)

// const elem2 = document.getElementById("main-heading")
// elem2.append(elem1)
// console.log(elem2)

//35.Prepend the created <div> element to the element with the class "content". Print the updated element. (prepend)

// const elem3 = document.getElementsByClassName("content")[0];
// elem3.prepend(elem);
// console.log(elem3)

//36. Replace the element with the ID "main-heading" with the created text node. Print the updated element. (replaceWith)

// const elem4 = document.getElementById("main-heading")
// console.log(elem4.replaceWith("elem1"))

//37. Insert the created <div> element before the element with the class "inner-box". Print the updated parent element. (before)

// const elem5 = document.getElementsByClassName("inner-box")[0]
// const updated = elem5.before(elem, "before")
// console.log(updated)

//38. Insert the created <div> element after the element with the class "inner-box". Print the updated parent element. (after)

// const elem6 = document.getElementsByClassName("inner-box")[0]
// console.log(elem6.after(elem, "after"))

//39. Print the offsetHeight and offsetWidth of the element with the class "content". (offsetHeight / offsetWidth)

// const elem = document.getElementsByClassName("content")[0].offsetHeight
// console.log(elem)
// const elem1 = document.getElementsByClassName("content")[0].offsetWidth
// console.log(elem1)

//40.. Print the clientHeight and clientWidth of the element with the class "content". (clientHeight / clientWidth)

// const elem = document.getElementsByClassName("content")[0].clientHeight
// console.log(elem)
// const elem1 = document.getElementsByClassName("content")[0].clientWidth
// console.log(elem1)

//41.Print the scrollHeight and scrollWidth of the element with the class "content". (scrollHeight / scrollWidth)

// const elem = document.getElementsByClassName("content")[0].scrollHeight
// console.log(elem)
// const elem1 = document.getElementsByClassName("content")[0].scrollWidth
// console.log(elem1)

//42. Print the innerHeight and innerWidth of the window. (innerHeight / innerWidth)

// console.log(window.innerHeight)
// console.log(window.innerWidth)

//43. Print the outerHeight and outerWidth of the window. (outerHeight / outerWidth)

// console.log(window.outerHeight)
// console.log(window.outerWidth)

//44. Change the text content of the <h1> element with the ID "main-heading" to "Hello, DOM!".

// const elem = document.getElementById("main-heading").replaceChildren("hello! DOM")
// console.log(elem)

//45. Change the value of the input element with the ID "name" to "Jane Smith".

// const elem = document.getElementById("name").setAttribute("value","Jane Smith")
// console.log(elem)

//46. Add a new <li> element to the <ul> element with class "list" containing the text "Item 4".

// const elem = document.getElementsByClassName("list")[0]
// const li = document.createElement("li")
// li.innerHTML="Item 4"
// const content = elem.appendChild(li)
// console.log(content)

//47. Change the text content of the <p> element within the <div> with class "content" to "Updated paragraph text".

// const elem = document.getElementsByClassName("content")[0]
// elem.replaceWith("Updated paragraph text.")
// console.log(elem)

//48. Change the background color of the <div> element with ID "container" to blue.

// const elem = document.getElementById("container")
// elem.style.backgroundColor= "blue"
// console.log(elem)

//49. Remove the class "inner-box" from the <div> element with class "inner-box".

// const elem = document.getElementsByClassName("inner-box")[0]
// elem.classList.remove("inner-box")
// console.log(elem)

//50.Clone the <div> element with ID "container" and append it to the body.

// const elem = document.createElement("div")
// elem.id ="container"
// const text = elem.appendChild(document.createElement("p"))
// const div = elem.appendChild(document.createElement("div"))
// div.className="inner-box"
// const newP = div.appendChild(document.createElement("p"))
// newP.textContent="This is an inner box."
// text.textContent ="This is container element"
// console.log(elem)
// document.body.appendChild(elem)

//51.Wrap the contents of the <div> with ID "container" in a new <div> with class "wrapper".

const elem = document.getElementById("container")
const wrapper = document.createElement("div")
wrapper.className="wrapper";
wrapper.appendChild(elem)
console.log(wrapper)

//52. Remove the first <li> element from the <ul> with class "list".

// document.getElementsByClassName("list")[0].firstElementChild.remove("li")

//53. Add the class "highlight" to the <p> element within the <div> with class "content".

// const elem = document.getElementsByClassName("content")[0]
// elem.getElementsByTagName("p")[0].classList.add("highlight")
// console.log(elem)

//54. Change the type of the input element with ID "name" to "email".

// const elem = document.getElementById("name").type = "email"
// console.log(elem)
// console.log(document.getElementsByTagName("form")[0])

//55. Replace the text content of the <li> element with "Item 2" to "Updated Item 2".

// document.getElementsByTagName("li")[1].replaceChildren("Updated Item 2")

//56.Change the value of the input element with ID "name" to an empty string.

// document.getElementById("name").value = ""

//57.Remove the entire <form> element from the DOM.

// document.getElementsByTagName("form")[0].remove("form")

//58.Add an event listener to the <h1> element with ID "main-heading" that logs a message when clicked.

// const elem = document.getElementById("main-heading")
// elem.addEventListener("click",function(){
//     console.log("clicked")
// })

//59. Change the font size of the <p> element within the <div> with class "content" to 18px.

// const Size = document.getElementsByClassName("content")[0]
// const size = Size.style.fontSize="18px"
// console.log(size)

//60. Remove the <ul> element with class "list" from the DOM.

// const remove = document.getElementsByClassName("list")[0].remove("ul")

//61. Create a new <div> element, give it a class of "new-div", and append it to the body

// const newDiv = document.createElement("div")
// newDiv.className="new-div"
// const div = document.body.append(newDiv, " hello")
// console.log(div)

//62. Append a new <p> element with the text "New paragraph" to the <div> with class "inner-box"

// const elem = document.getElementsByClassName("inner-box")[0]
// const text = elem.appendChild(document.createElement("p")).textContent ="New paragraph"
// console.log(text)
