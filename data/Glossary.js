const glossary = [
  {
    term: "Virtual Machine",
    class: 00,
    definition:
      "A computer system emulator. A way to run other operating systems on your machine",
    tags: []
  },
  {
    term: "Browser",
    class: 00,
    definition:
      "An application that navigates and presents the World Wide Web. Examples include Google Chrome and Mozilla Firefox",
    tags: []
  },
  {
    term: "Text Editor",
    class: 00,
    definition:
      "An application designed for editing plain text, often with syntax highlighting and additional programming features. Examples include GitHub Atom, Sublime Text and Visual Studio Code",
    tags: []
  },
  {
    term: "Terminal",
    class: 00,
    definition:
      "A program that is a text-based computer interface, also called a console",
    tags: []
  },
  {
    term: "Git",
    class: 00,
    definition: "An open-source distributed version control system",
    tags: []
  },
  {
    term: "GUI",
    class: 00,
    definition: "A Graphical User Interface",
    tags: []
  },
  {
    term: "GitHub",
    class: 00,
    definition: "A web-based hosting service for Git",
    tags: []
  },
  {
    term: "Node",
    class: 00,
    definition:
      "A JavaScript runtime based on the Chrome's V8 engine that executes JavaScript code server-side",
    tags: []
  },
  {
    term: "Web",
    class: 00,
    definition: "A physical network of devices",
    tags: []
  },
  {
    term: "Internet",
    class: 00,
    definition: "A virtual network of information",
    tags: []
  },
  {
    term: "The Galactic Network",
    class: 00,
    definition:
      "A conceptual precursor to the Internet, written by J.C.R Licklider",
    tags: []
  },
  {
    term: "ARPANet",
    class: 00,
    definition:
      "Advanced Research Projects Agency Network is an early packet switching network and the first network to implement the TCP and IP Protocols. The precursor to the internet",
    tags: []
  },
  {
    term: "TCP",
    class: 00,
    definition:
      "The Transmission Control Protocol is a way that two devices can communicate with each other - it provides a stream of octets between applications",
    tags: []
  },
  {
    term: "IP",
    class: 00,
    definition:
      "The Internet Protocol is a communications protocol that relays packets across network boundaries",
    tags: []
  },
  {
    term: "IP Address",
    class: 00,
    definition:
      "IP Addresses are numerical labels assigned to each device on the internet. A name for each device",
    tags: []
  },
  {
    term: "Client-Server Model",
    class: 00,
    definition:
      "A model that provides resources and services to one or more clients",
    tags: []
  },
  {
    term: "HTTP",
    class: 00,
    definition:
      "The HyperText Transfer Protocol is an application protocol for hypermedia systems. The foundation of data communication for the World Wide Web",
    tags: []
  },
  {
    term: "HTTP Request",
    class: 00,
    definition: "Asking for resources or services using the HTTP protocol",
    tags: []
  },
  {
    term: "HTTP Response",
    class: 00,
    definition:
      "Resources sent back to the requesting client using the HTTP protocol",
    tags: []
  },
  {
    term: "HTTP Method",
    class: 00,
    definition:
      "Request methods to indicate the desired action to be performed by a resource through semantics. Examples include GET, PUT, PATCH, POST and DELETE. Often called HTTP Nouns or HTTP Verbs",
    tags: []
  },
  {
    term: "DNS Server",
    class: 00,
    definition:
      "A Domain Name System that contains a database of IP Address and Host Names. Its role is to translate or convert a host name to an IP Address",
    tags: []
  },
  {
    term: "Web Development",
    class: 00,
    definition:
      "The creation and management of websites or web-based applications",
    tags: []
  },
  {
    term: "Front-end",
    class: 00,
    definition:
      "What the user sees - it powers the visuals and interactions of the web. Made up of HTML, CSS and JavaScript. What is seen by the client device",
    tags: []
  },
  {
    term: "Back-end",
    class: 00,
    definition:
      "What goes on behind the scenes, often consisting of databases, servers etc. The processes and operations created and performed by the server device",
    tags: []
  },
  {
    term: "HTML",
    class: 00,
    definition:
      "HyperText Markup Language. A system for defining or tagging pieces of text",
    tags: []
  },
  {
    term: "CSS",
    class: 00,
    definition:
      "Cascading Style Sheets. A system for selecting, and manipulating the presentation of HTML elements",
    tags: []
  },
  {
    term: "JavaScript",
    class: 00,
    definition:
      "A scripting language designed to add behaviour and interactivity to webpages. Created by Brendan Eich",
    tags: []
  },
  {
    term: "Programming",
    class: 00,
    definition:
      "Programming is the ability to solve problems, or rather, instruct a device to be able to solve problems",
    tags: []
  },
  {
    term: "Coding",
    class: 00,
    definition:
      "Coding is the practice of writing in a language that a computer interprets to perform a task",
    tags: []
  },
  {
    term: "Pseudocode",
    class: 00,
    definition:
      "Pseudocode is the language we use when writing a program without using the syntax of a programming language. A way to plan - a universal programming language for humans",
    tags: []
  },
  {
    term: "W.I.M.P Model",
    class: 01,
    definition: "Windows, Icons, Menus and Pointers",
    tags: []
  },
  { term: "CLI", class: 01, definition: "Command-Line Iteraction", tags: [] },
  {
    term: "Shell",
    class: 01,
    definition:
      "A program that processes commands and returns outputs. Examples include BASH and ZSH. We interact with this through a Terminal Emulator",
    tags: []
  },
  {
    term: "Bash Shell Language",
    class: 01,
    definition: "The language that we use to send messages to the shell",
    tags: []
  },
  {
    term: "REPL",
    class: 01,
    definition: "A Read-Evaluate-Print-Loop",
    tags: []
  },
  {
    term: "Markdown",
    class: 01,
    definition:
      "A lightweight markup language designed, with a plain text formatting syntax, to create HTML easily",
    tags: []
  },
  {
    term: "Version Control",
    class: 01,
    definition:
      "A system designed to record changes to a file or a set of files over time, so that you can recall specific versions",
    tags: []
  },
  {
    term: "Git Repository",
    class: 01,
    definition:
      "Git manages a project, or a set of files, as they change over time. It does this through a data structure called a Git Repository. Essentially it is a folder on our computer, that records changes over time",
    tags: []
  },
  {
    term: "Git Add",
    class: 01,
    definition:
      "Specifies which files Git pays attention to (and records changes of)",
    tags: []
  },
  {
    term: "Git Commit",
    class: 01,
    definition: "Taking a snapshot of the files that Git cares about",
    tags: []
  },
  {
    term: "Git Push",
    class: 01,
    definition:
      "Uploads the files, and associated changes, of a Git repository to a server somewhere (often GitHub)",
    tags: []
  },
  {
    term: "Git Pull",
    class: 01,
    definition:
      "Downloads the files, and associated changes, of a Git Repository from a server somewhere (often GitHub)",
    tags: []
  },
  {
    term: "Git Status",
    class: 01,
    definition: "Tells us the current state of a Git Repository.",
    tags: []
  },
  {
    term: "Git Log",
    class: 01,
    definition: "Shows us the history of a Git Repository",
    tags: []
  },
  {
    term: "Git Remotes",
    class: 01,
    definition: "URLs pointing to other copies of a given Git Repository",
    tags: []
  },
  {
    term: "Git Origin",
    class: 01,
    definition:
      "The main Git remote that is often automatically created for us",
    tags: []
  },
  {
    term: "Git Branch",
    class: 01,
    definition:
      "Pointers to snapshots of your Git Repository changes. A way to encapsulate changes and make sure that you don't merge unstable code into the main, or master, code base",
    tags: []
  },
  {
    term: "Git Merge",
    class: 01,
    definition:
      "Git's way of joining Git Repository commit histories - essentially taking independent lines of different branches, and integrating them into a single branch",
    tags: []
  },
  {
    term: "Merge Conflict",
    class: 01,
    definition:
      "An error when you are trying to merge branches, often occuring because Git can't figure out how to integrate the two branches",
    tags: []
  },
  {
    term: "GitHub Fork",
    class: 01,
    definition: "A copy of a repository",
    tags: []
  },
  {
    term: "Pull Request",
    class: 01,
    definition:
      "An approach to telling others about changes you've made to a GitHub repository",
    tags: []
  },
  {
    term: "Clone",
    class: 01,
    definition: "Copying a Git repository",
    tags: []
  },
  {
    term: "GUI",
    class: 01,
    definition: "A Graphical User Interface",
    tags: []
  },
  {
    term: "Synchronous",
    class: 01,
    definition:
      "A type of programming language that waits for previous operations to complete. Often called 'blocking'",
    tags: []
  },
  {
    term: "Asynchronous",
    class: 01,
    definition:
      "A type of programming language that doesn't wait for previous operations to complete. Often called non-blocking",
    tags: []
  },
  {
    term: "ECMAScript",
    class: 01,
    definition:
      "The standardization and versioning of JavaScript. It is a scripting language specification. It provides the syntax",
    tags: []
  },
  {
    term: "Syntax",
    class: 01,
    definition:
      "A set of rules that define the correct combinations of symbols that are used to make a valid program",
    tags: []
  },
  {
    term: "Data Types",
    class: 01,
    definition:
      "The building blocks of a programming language - the types of data that a programming language that provides. Examples include strings and numbers",
    tags: []
  },
  {
    term: "Inheritance",
    class: 01,
    definition:
      "When you create a data type, you automatically receive properties and methods. Essentially what is automatically included when you create a data type",
    tags: []
  },
  {
    term: "Primitive Data Type",
    class: 02,
    definition:
      "A basic, built-in, immutable type provided by a programming language. A single item or element. Examples include numbers and strings",
    tags: []
  },
  {
    term: "Composite Data Type",
    class: 02,
    definition:
      "A complex, mutable type provided by a programming language. Often a collection of different types of data. Examples include Arrays",
    tags: []
  },
  {
    term: "Immutable",
    class: 02,
    definition: "A data type whose state cannot be changed after creation",
    tags: []
  },
  {
    term: "Mutable",
    class: 02,
    definition: "A data type whose state can be changed after creation",
    tags: []
  },
  {
    term: "Strings",
    class: 02,
    definition: "A collection of characters. Words",
    tags: []
  },
  {
    term: "Concatenation",
    class: 02,
    definition: "Combining two strings",
    tags: []
  },
  {
    term: "Booleans",
    class: 02,
    definition:
      "True or false values used to make decisions in a programming language",
    tags: []
  },
  {
    term: "Undefined",
    class: 02,
    definition:
      "An implicit 'nothing' value, that is often automatically assigned. Refers to the absence of a value",
    tags: []
  },
  {
    term: "Null",
    class: 02,
    definition: "An explicit 'nothing value'. Refers to the absence of a value",
    tags: []
  },
  {
    term: "Objects",
    class: 02,
    definition:
      "An unordered composite data type made up of key-value pairs. Values are accessed through their keys",
    tags: []
  },
  {
    term: "Arrays",
    class: 02,
    definition:
      "An ordered composite data type. Values are accessed through a zero-based operations",
    tags: []
  },
  {
    term: "Functions",
    class: 02,
    definition:
      "A reusable section of code that has a purpose and a name. A sub-program",
    tags: []
  },
  {
    term: "Properties",
    class: 02,
    definition:
      "A static piece of information about a data type, often provided through inheritance",
    tags: []
  },
  {
    term: "Methods",
    class: 02,
    definition:
      "An operation you can perform on a data type, often provided through inheritance",
    tags: []
  },
  {
    term: "Predicate Method",
    class: 02,
    definition: "A method that returns a boolean value",
    tags: []
  },
  {
    term: "Destructive Method",
    class: 02,
    definition: "A method that permanently changes a data type",
    tags: []
  },
  { term: "Integers", class: 02, definition: "Whole numbers", tags: [] },
  { term: "Floats", class: 02, definition: "Decimal numbers", tags: [] },
  {
    term: "Arithmetic Operator",
    class: 02,
    definition:
      "The arithmetic operators provided by a programming language, used to perform operations like multiplication",
    tags: []
  },
  {
    term: "Comparison Operator",
    class: 02,
    definition:
      "Comparison operators are operators used to compare two different values provided by a programming language",
    tags: []
  },
  {
    term: "Variables",
    class: 02,
    definition:
      "Named containers for storing, accessing and manipulating data. Ways to store information in memory",
    tags: []
  },
  {
    term: "Variable Declaration",
    class: 02,
    definition: "Registers a variable in the current scope",
    tags: []
  },
  {
    term: "Variable Initialization",
    class: 02,
    definition:
      "A process of memory allocation performed when you declare a variable",
    tags: []
  },
  {
    term: "Variable Assignment",
    class: 02,
    definition: "Assigns a specified value to a variable",
    tags: []
  },
  {
    term: "Identifier",
    class: 02,
    definition:
      "The name used to access a piece of data in a programming language",
    tags: []
  },
  {
    term: "lowerCamelCase",
    class: 02,
    definition:
      "A naming convention used in JavaScript. The first word is lower-cased, and every word after that is capitalized",
    tags: []
  },
  {
    term: "Static Typing",
    class: 02,
    definition:
      "A language is statically typed if the type of a variable is known at compile time, and cannot be changed",
    tags: []
  },
  {
    term: "Dynamic Typing",
    class: 02,
    definition:
      "A language is dynamically typed if the type of a variable is known at runtime, and can be changed",
    tags: []
  },
  {
    term: "Conditional",
    class: 02,
    definition:
      "Making decisions with code. They often rely on boolean-ish values",
    tags: []
  },
  {
    term: "Type Coercion",
    class: 02,
    definition: "Converting a value from one type to another",
    tags: []
  },
  {
    term: "Implicit Type Coercion",
    class: 02,
    definition:
      "Type Coercion performed automatically by a programming language",
    tags: []
  },
  {
    term: "Explicit Type Coercion",
    class: 02,
    definition: "Type Coercion performed manually by a programmer",
    tags: []
  },
  {
    term: "Loose Equality",
    class: 02,
    definition:
      "A Comparison Operator (==) that tests for rough equality. The types don't have to match",
    tags: []
  },
  {
    term: "Strict Equality",
    class: 02,
    definition:
      "A Comparison Operator (===) that tests for absolute equality. The types have to match, as do the values",
    tags: []
  },
  {
    term: "Syntactic Sugar",
    class: 02,
    definition:
      "Shortcuts provided by a programming language to perform common operations. Examples include += and ++",
    tags: []
  },
  {
    term: "Loops",
    class: 02,
    definition: "A programming utility that repeats a block of code",
    tags: []
  },
  {
    term: "Index",
    class: 03,
    definition:
      "An integer used to access a single item in an array. They are zero-based (the first item is accessed through 0)",
    tags: []
  },
  {
    term: "Iteration",
    class: 03,
    definition:
      "Using a loop to go through all items in a collection of data (like an array)",
    tags: []
  },
  {
    term: "Encapsulation",
    class: 03,
    definition:
      "A process of grouping, or bundling related code. Often done through the use of an object",
    tags: []
  },
  {
    term: "Modularity",
    class: 03,
    definition:
      "The degree to which a program's units can be separated and recombined",
    tags: []
  },
  {
    term: "Call-site",
    class: 03,
    definition:
      "The location in code where we start the execution of a function",
    tags: []
  },
  {
    term: "Parameters",
    class: 03,
    definition: "Where the data is received and named by a function",
    tags: []
  },
  {
    term: "Arguments",
    class: 03,
    definition: "Where the data is passed in (the actual data)",
    tags: []
  },
  {
    term: "Return Values",
    class: 03,
    definition: "The output of a function. Always the last line to run!",
    tags: []
  },
  {
    term: "FIRST Principle",
    class: 03,
    definition:
      "A guideline for functions. Functions should be Focussed, Independent, Reusable, Small and Testable.",
    tags: []
  },
  {
    term: "Scope",
    class: 04,
    definition:
      "Scope defines all the things (variables, functions etc.) you have access to at some point of code, can also be called name resolution",
    tags: []
  },
  {
    term: "Global Scope",
    class: 04,
    definition:
      "The top level scope - a place in your program that all parts can access",
    tags: []
  },
  {
    term: "Lexical Scope",
    class: 04,
    definition:
      "A style of scoping where scope is defined by the position of a line in the source code",
    tags: []
  },
  {
    term: "Hoisting",
    class: 04,
    definition:
      "A made-up term for the process of declarations in a program getting put in memory during the compilation phase. One way to think of it is that variable declarations and function declarations get physically moved to the top of the scope",
    tags: []
  },
  {
    term: "Browser User Interface",
    class: 05,
    definition:
      "Every part of the browser display except the window where you see the requested page. Things like the search bar, window control etc.",
    tags: []
  },
  {
    term: "Browser Engine",
    class: 05,
    definition:
      "Marshals actions, or communicates, between the UI and the rendering engine.",
    tags: []
  },
  {
    term: "Browser Rendering Engine",
    class: 05,
    definition: "Responsible for displaying requested content",
    tags: []
  },
  {
    term: "Browser Networking",
    class: 05,
    definition: "Deals with network calls (e.g. HTTP Requests)",
    tags: []
  },
  {
    term: "Browser UI Backend",
    class: 05,
    definition:
      "A generic interface that is used to draw basic widgets like combo boxes, windows and scroll bars",
    tags: []
  },
  {
    term: "Browser JavaScript Interpreter",
    class: 05,
    definition: "Used to parse and execute JavaScript code",
    tags: []
  },
  {
    term: "Browser Data Storage",
    class: 05,
    definition:
      "The persistence layer of a browser (stores things like cookies etc.)",
    tags: []
  },
  {
    term: "Parsing",
    class: 05,
    definition:
      "Translating a document into a structure that can be used (by an engine, for example). The resulting structure is often a tree of nodes (which can be called a Parse Tree or a Syntax Tree)",
    tags: []
  },
  {
    term: "DOM",
    class: 05,
    definition:
      "A Document Object Model is a tree that stores HTML elements in a way that can be interacted with through JavaScript. Essentially a large object stored in the document global variable. The result of a browser parsing your HTML",
    tags: []
  },
  {
    term: "DOM Node",
    class: 05,
    definition: "A single item in the Document Object Model.",
    tags: []
  },
  {
    term: "CSSOM",
    class: 05,
    definition:
      "The result of a browser parsing your CSS, the CSS Object Model",
    tags: []
  },
  {
    term: "Render Tree Construction",
    class: 05,
    definition:
      "The creation of another tree that is the combination of the DOM and the CSSOM. Stores the nodes, and their attached styles",
    tags: []
  },
  {
    term: "Render Tree Layout",
    class: 05,
    definition:
      "Works out the layout for all nodes in the Render Tree (the actual pixels that will be occupied)",
    tags: []
  },
  {
    term: "Painting",
    class: 05,
    definition:
      "The process of taking the render tree layout and turning it into pixels on the screen in the browser",
    tags: []
  },
  {
    term: "DOM Traversal",
    class: 05,
    definition:
      "Navigating the DOM, often used for searching for a particular DOM node",
    tags: []
  },
  {
    term: "Callback",
    class: 06,
    definition:
      "A function provided as an argument to another function. Essentially functions that act as a response to something occuring",
    tags: []
  },
  {
    term: "Higher-Order Function",
    class: 06,
    definition:
      "A special type of function that either receives a function as a parameter, or returns a functions as a result",
    tags: []
  },
  {
    term: "Event",
    class: 06,
    definition:
      "Something that takes place in a browser (for example, a click or a mousemove)",
    tags: []
  },
  {
    term: "Event Listener",
    class: 06,
    definition:
      "A name given to the combination of an event, a callback and a target element. The process of combining these is called 'binding'. A target element is interacted with in some way, and as a result a callback function is executed",
    tags: []
  },
  {
    term: "Event Parameter",
    class: 06,
    definition:
      "A piece of information that is automatically provided to an event listener's callback function. It stores information about the actual event that took place",
    tags: []
  },
  {
    term: "Templating",
    class: 06,
    definition:
      "A process of representing data in a different form. For example, receiving a JavaScript object and turning that into a string representing some HTML markup",
    tags: []
  }
];
