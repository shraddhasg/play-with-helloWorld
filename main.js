function display(event) {
  document.getElementById("action").innerText = "";
  let input = event.target.innerText;
  showCode(input);
}

function showCode(text) {
  if (text == "Java") {
    // var element = document.getElementsById("id");
    // console.log(element);
    // var element = document.getElementsByTagName("code");
    // var pre = document.createElement("pre");
    // var code = document.createElement("code");
    // code.textContent =
    //   'class HelloWorld{ \npublic static void main(String args[]){\nSystem.out.println("Hello world")\n}\n};';
    console.log(document.getElementsByTagName("code"));
    document.getElementsByTagName("code")[0].innerText =
      'class HelloWorld{ \npublic static void main(String args[]){\nSystem.out.println("Hello world")\n}\n};';

    // code.innerText =
    //   'class HelloWorld{ \npublic static void main(String args[]){\nSystem.out.println("Hello world")\n}\n};';
    // var data = document.createTextNode(
    //   'class HelloWorld{ \npublic static void main(String args[]){\nSystem.out.println("Hello world")\n}\n};'
    // );
    // code.appendChild(data);
    // pre.appendChild(code);
    // document.getElementById("action").appendChild(code);
  } else if (text == "C") {
    var code = document.createElement("code");
    code.innerText = "Hello world in " + text + " is =";
    code.innerText +=
      '\n\n#include <stdio.h>\n int main(){\n printf("Hello world!");\n return 0;\n}';

    document.getElementById("action").appendChild(code);
  } else if (text == "JavaScript") {
    var code = document.createElement("code");
    code.innerText = "Hello world in " + text + " is =";
    code.innerText += '\n\nconsole.log("Hello World!)';

    document.getElementById("action").appendChild(code);
  } else if (text == "CPP") {
    var code = document.createElement("code");
    code.innerText = "Hello world in " + text + " is =";
    code.innerText +=
      '\n\n#include <iostream> \n int main() { \n std::cout << "Hello World!"; \n return 0;\n}';

    document.getElementById("action").appendChild(code);
  } else if (text == "Ruby") {
    var code = document.createElement("code");
    code.innerText = "Hello world in " + text + " is =";
    code.innerText += '\n\nputs "Hello World"';

    document.getElementById("action").appendChild(code);
  } else if (text == "Python") {
    var code = document.createElement("code");
    code.innerText = "Hello world in " + text + " is =";
    code.innerText += "\n\nprint('Hello, world!')";

    document.getElementById("action").appendChild(code);
  } else if (text == "C#") {
    var code = document.createElement("code");
    code.innerText = "Hello world in " + text + " is =";
    code.innerText +=
      '\n\nnamespace HelloWorld{\nclass Hello { \nstatic void Main(string[] args){\nSystem.Console.WriteLine("Hello World!");\n \t\t}\n\t}\n}';

    document.getElementById("action").appendChild(code);
  } else if (text == "PHP") {
    var code = document.createElement("code");
    code.innerText = "Hello world in " + text + " is =";
    code.innerText += '\n\n<?php \n echo "Hello, world!"; \n?> ';

    document.getElementById("action").appendChild(code);
  } else if (text == "HTML") {
    var code = document.createElement("code");
    code.innerText = "Hello world in " + text + " is =";
    code.innerText +=
      "\n\n<html>\n<header><title>This is title</title></header>\n<body>\nHello world \n</body> \n </html>";

    document.getElementById("action").appendChild(code);
  } else if (text == "Kotlin") {
    var code = document.createElement("code");
    code.innerText = "Hello world in " + text + " is =";
    code.innerText +=
      '\n\n fun main(args: Array<String>) { \n println("Hello, World!") \n }';

    document.getElementById("action").appendChild(code);
  } else if (text == "Go") {
    var code = document.createElement("code");
    code.innerText = "Hello world in " + text + " is =";
    code.innerText +=
      '\n\n package main \n import "fmt" \n func main() { \n fmt.Println("hello world") \n }';

    document.getElementById("action").appendChild(code);
  } else if (text == "R") {
    var code = document.createElement("code");
    code.innerText = "Hello world in " + text + " is =";
    code.innerText += '\n\n myString <- "Hello, World!" \n print ( myString)';

    document.getElementById("action").appendChild(code);
  }
}
