export interface Answer {
  definition: string;
  coreConcepts: string;
  visualRepresentation: {
    type: 'table' | 'diagram' | 'flowchart';
    content: any;
  };
  implementation?: {
    type: 'code' | 'example' | 'algorithm';
    language?: string;
    content: string;
  };
  keyPoints: string[];
}

export interface Question {
  id: string;
  questionText: string;
  answer: Answer;
}

export interface QuestionSet {
  id: string;
  title: string;
  questions: Question[];
}

export const pyqData: QuestionSet[] = [
  {
    id: "set1",
    title: "Question Set 1 (General)",
    questions: [
      {
        id: "1a",
        questionText: "What do you mean by internet and its applications?",
        answer: {
          definition: "The Internet is a global system of interconnected computer networks that use the standard Internet Protocol Suite (TCP/IP) to link several billion devices worldwide. It is a 'network of networks' that consists of millions of private, public, academic, business, and government networks of local to global scope. It serves as the physical infrastructure upon which various services, most notably the World Wide Web, are built.",
          coreConcepts: "The Internet works through packet switching, where data is broken into smaller chunks (packets) and routed through various nodes before being reassembled at the destination. Its primary logic is to provide a standardized, decentralized way for any two devices to exchange data regardless of their physical location or hardware type.",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Application", "Description", "Primary Protocol"],
              rows: [
                ["World Wide Web", "Accessing linked documents/sites", "HTTP/HTTPS"],
                ["Email", "Sending and receiving messages", "SMTP/IMAP/POP3"],
                ["File Transfer", "Sharing files between systems", "FTP/SFTP"],
                ["E-Commerce", "Online shopping and transactions", "HTTPS/TLS"],
                ["Streaming", "Video and audio consumption", "RTSP/UDP"]
              ]
            }
          },
          keyPoints: [
            "Infrastructure for global data exchange.",
            "Uses TCP/IP protocol suite.",
            "Supports WWW, Email, VoIP, and more.",
            "Decentralized and robust architecture."
          ]
        }
      },
      {
        id: "1b",
        questionText: "Differentiate between HTML and HTML 5.",
        answer: {
          definition: "HTML (HyperText Markup Language) is the standard markup language for creating web pages. HTML 5 is the fifth and current major version of the HTML standard. While earlier versions of HTML were primarily focused on static document structure, HTML 5 introduced advanced features to support modern web applications, including native multimedia support, offline capabilities, and improved semantic structure without relying heavily on third-party plugins.",
          coreConcepts: "HTML 5 was designed to provide a better experience for both developers and users by introducing tags like <video>, <audio>, and <canvas>. It also improved parsing rules for better cross-browser compatibility and introduced 'Semantics' which helps search engines and screen readers understand the content better.",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Feature", "HTML (Older)", "HTML 5"],
              rows: [
                ["Multimedia", "Required Flash/Silverlight", "Native <video> & <audio>"],
                ["Storage", "Cookies only", "Web Storage (Local/Session)"],
                ["Graphics", "External plugins used", "Native <canvas> & <svg>"],
                ["Mobile", "Not mobile-friendly", "Fully mobile responsive"],
                ["Elements", "Generic <div> and <span>", "Semantic <header>, <footer>, <nav>"]
              ]
            }
          },
          keyPoints: [
            "HTML5 supports multi-media without plugins.",
            "Introduced Geo-location and Web Workers.",
            "Allows persistent local storage.",
            "Better error handling and simplified doctype."
          ]
        }
      },
      {
        id: "1c",
        questionText: "Define JavaScript and its application.",
        answer: {
          definition: "JavaScript (JS) is a high-level, interpreted, and multi-paradigm programming language that is one of the core technologies of the World Wide Web. While HTML defines the structure and CSS defines the style, JavaScript enables interactive and dynamic behavior on web pages. It is a client-side language that runs in the browser but can also be used on the server side (Node.js).",
          coreConcepts: "JS follows an event-driven model. It can manipulate the Document Object Model (DOM), meaning it can change HTML content and styles in real-time. Modern JS applications use frameworks like React or Angular to build complex Single Page Applications (SPAs).",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Application", "Usage Context"],
              rows: [
                ["Client-Side", "Form validation, animations, dynamic content updates"],
                ["Server-Side", "API development, database interaction (Node.js)"],
                ["Mobile Apps", "Cross-platform development (React Native)"],
                ["Game Dev", "Browser-based 2D/3D games using Canvas/WebGL"]
              ]
            }
          },
          keyPoints: [
            "Interpreted, lightweight, and JIT compiled.",
            "First-class functions and prototype-based.",
            "Asynchronous programming via Promises/Async-Await.",
            "Essential for interactive UI."
          ]
        }
      },
      {
        id: "1d",
        questionText: "What do you meant by MARQUEE?",
        answer: {
          definition: "A marquee is a scrolling piece of text or an image that moves horizontally across or vertically up/down a web page. In traditional HTML, the <marquee> tag was used to create this effect. Although it was popular in early web design for announcements and scrolling news tickers, it is now considered 'obsolete' and 'deprecated' in HTML5, with developers encouraged to use CSS animations instead for better accessibility.",
          coreConcepts: "The marquee works by continuously shifting the position of its child elements. Attributes like 'behavior' (scroll, slide, alternate), 'direction' (left, right, up, down), and 'scrollamount' control the speed and nature of the movement. From a logic perspective, it creates a loop that updates the element's coordinate at set intervals.",
          visualRepresentation: {
            type: "diagram",
            content: "Logic: [Container] -> [Start Position] -> (Animation Loop) -> [Update X/Y] -> [End Position/Repeat]"
          },
          implementation: {
            type: "code",
            language: "html",
            content: `<!-- Traditional (Deprecated) -->
<marquee behavior="scroll" direction="left" scrollamount="10">
   Breaking News: Exam scores are out!
</marquee>

<!-- Modern CSS Alternative -->
<div class="marquee-css">
   <span>Modern Scrolling Text</span>
</div>

<style>
.marquee-css {
  overflow: hidden;
  white-space: nowrap;
}
.marquee-css span {
  display: inline-block;
  animation: marquee 5s linear infinite;
}
@keyframes marquee {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}
</style>`
          },
          keyPoints: [
            "Used for scrolling text/images.",
            "Deprecated in HTML5 standard.",
            "CSS animations are the modern replacement.",
            "Poor for accessibility as text is hard to read for some users."
          ]
        }
      },
      {
        id: "1e",
        questionText: "Define API and CGI.",
        answer: {
          definition: "API (Application Programming Interface) is a set of rules and protocols that allow different software applications to communicate with each other. CGI (Common Gateway Interface) is an older standard for web servers to interface with executable programs installed on a server that generate web pages dynamically. While API is a broad term for interfacing, CGI is a specific method for server-side processing.",
          coreConcepts: "API acts as a bridge; for example, a weather app uses an API to get data from a weather service. CGI acts as an interpreter; when a user submits a form, the web server passes the data to a CGI script (written in Perl, C, or Python), which processes it and returns HTML. CGI is largely replaced today by faster technologies like Servlets, PHP, and Node.js.",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Feature", "API", "CGI"],
              rows: [
                ["Full Form", "Application Programming Interface", "Common Gateway Interface"],
                ["Primary Purpose", "Software communication", "Dynamic web content generation"],
                ["Scope", "Broad (Web, OS, Library)", "Narrow (Web Server to Program)"],
                ["Performance", "Modern APIs are highly optimized", "CGI creates new process for each request (Slow)"],
                ["Example", "Google Maps API, REST API", "Perl scripts handling forms"]
              ]
            }
          },
          keyPoints: [
            "APIs allow modular development.",
            "CGI was the 'pioneer' of dynamic web pages.",
            "CGI is inefficient due to process overhead.",
            "REST and SOAP are common modern API types."
          ]
        }
      },
      {
        id: "1f",
        questionText: "What do you meant by Cookies?",
        answer: {
          definition: "Cookies are small data files (text files) stored on a user's computer by the web browser while browsing a website. They are designed to be a reliable mechanism for websites to remember stateful information (such as items added in the shopping cart) or to record the user's browsing activity (including clicking particular buttons, logging in, or recording which pages were visited in the past).",
          coreConcepts: "The server sends a 'Set-Cookie' header in the HTTP response. The browser then saves this and sends it back in the 'Cookie' header for all subsequent requests to the same domain. This allows the server to recognize the user and maintain a session even though HTTP is stateless.",
          visualRepresentation: {
            type: "flowchart",
            content: "1. Browser requests page -> 2. Server sends page + Cookie -> 3. Browser saves Cookie -> 4. Next request: Browser sends Cookie back -> 5. Server recognizes user."
          },
          keyPoints: [
            "Store user preferences and session data.",
            "Can be 'Session Cookies' (temporary) or 'Persistent Cookies' (long-term).",
            "Security risks: XSS and CSRF can target cookies.",
            "Modern browsers allow users to block cookies."
          ]
        }
      },
      {
        id: "1g",
        questionText: "Define AOP.",
        answer: {
          definition: "Aspect-Oriented Programming (AOP) is a programming paradigm that aims to increase modularity by allowing the separation of cross-cutting concerns. It allows developers to modularize systemic functionalities like logging, transaction management, and security that are typically scattered across various classes in standard Object-Oriented Programming (OOP).",
          coreConcepts: "AOP works by defining 'Aspects' which encapsulate behavior that affects multiple classes. It uses 'Pointcuts' to define where this behavior should be applied (Join Points) and 'Advice' to define what the behavior is (e.g., code to run before or after a method). This results in cleaner business logic code.",
          visualRepresentation: {
            type: "diagram",
            content: "Block Diagram: [Module A | Module B | Module C] <--- CROSS-CUTTING ASPECT (e.g., Security) --->"
          },
          keyPoints: [
            "Complements OOP.",
            "Reduces boilerplate code (e.g., opening/closing DB connections).",
            "Key terms: Aspect, Join Point, Pointcut, Advice.",
            "Commonly used in Spring Framework."
          ]
        }
      },
      {
        id: "1h",
        questionText: "What are the various attributes of Tables?",
        answer: {
          definition: "In HTML, the <table> element is used to display data in a tabular format (rows and columns). Various attributes are used to control the layout, spacing, and styling of the table. While many of these are now handled via CSS, understanding the basic attributes is crucial for historical context and simple styling in certain environments like HTML emails.",
          coreConcepts: "Table attributes define the physical dimensions and structural properties of the table and its cells. Core elements include <tr> (row), <td> (data), and <th> (header). Attributes like 'border', 'cellpadding', and 'cellspacing' govern the visual separation of data.",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Attribute", "Description", "Value Example"],
              rows: [
                ["border", "Width of the table border", "1, 2, ..."],
                ["cellpadding", "Space between cell content and border", "5px"],
                ["cellspacing", "Space between adjacent cells", "2px"],
                ["width", "Width of the table", "100%, 500px"],
                ["colspan", "Number of columns a cell should span", "2"],
                ["rowspan", "Number of rows a cell should span", "3"]
              ]
            }
          },
          implementation: {
            type: "code",
            language: "html",
            content: `<table border="1" cellpadding="10" cellspacing="0" width="100%">
  <tr>
    <th colspan="2">User Details</th>
  </tr>
  <tr>
    <td>Name</td>
    <td>Amit Kumar</td>
  </tr>
</table>`
          },
          keyPoints: [
            "Border, Width, Align control overall look.",
            "Colspan and Rowspan are used for merging cells.",
            "CSS is the modern way to style tables.",
            "Tables should be used for data, not page layout."
          ]
        }
      },
      {
        id: "1i",
        questionText: "Why Spring Boot is preferred over any other framework?",
        answer: {
          definition: "Spring Boot is an extension of the Spring Framework that eliminates much of the boilerplate configuration required for setting up a Spring application. It follows an 'opinionated' approach, making it the preferred choice for microservices and modern enterprise Java applications due to its speed of development and ease of deployment.",
          coreConcepts: "Spring Boot provides 'Starter' dependencies that bundle common libraries, 'Auto-configuration' that sets up beans automatically based on the classpath, and an 'Embedded Server' (like Tomcat) so applications can run as standalone JAR files without needing an external web server.",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Feature", "Spring Boot Benefit"],
              rows: [
                ["Setup", "Minimal (Spring Initializr)"],
                ["Configuration", "Auto-configuration (No XML)"],
                ["Deployment", "Self-contained JAR with embedded server"],
                ["Productivity", "Ready-to-use 'Starters'"],
                ["Monitoring", "Built-in 'Actuator' for health checks"]
              ]
            }
          },
          keyPoints: [
            "Rapid development and deployment.",
            "No XML configuration required.",
            "Embedded servers like Tomcat/Jetty.",
            "Excellent for Microservices architecture."
          ]
        }
      },
      {
        id: "1j",
        questionText: "What makes Spring Boot superior to JAX-RS?",
        answer: {
          definition: "JAX-RS is a Java API specification for RESTful Web Services, whereas Spring Boot is a full-featured framework that includes Spring MVC (its implementation of REST). Spring Boot is often considered superior because it offers a complete ecosystem, including security, data access, and cloud integration, while JAX-RS is just a specification for the web layer.",
          coreConcepts: "Spring Boot provides a 'one-stop-shop' experience. While JAX-RS requires a container (like Jersey or RestEasy) and manual setup for other layers (like DB), Spring Boot's 'Starters' integrate everything seamlessly. Spring also has a larger community and more consistent programming model across different modules.",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Feature", "JAX-RS", "Spring Boot (MVC)"],
              rows: [
                ["Nature", "Specification (Interface)", "Full Framework"],
                ["Configuration", "Often requires XML/Provider setup", "Annotation-based auto-config"],
                ["Ecosystem", "Limited to Web Services", "Full (Security, Data, Messaging)"],
                ["Integration", "Manual integration with other libs", "Out-of-the-box integration"],
                ["Standard", "EE Standard", "Industry Standard (De-facto)"]
              ]
            }
          },
          keyPoints: [
            "Spring Boot provides a complete development stack.",
            "Auto-configuration saves massive time.",
            "Spring Security is more robust and integrated.",
            "Better documentation and community support."
          ]
        }
      }
    ]
  },
  {
    id: "set2",
    title: "Question Set 2 (Advanced Concepts)",
    questions: [
      {
        id: "2a",
        questionText: "Explain the various protocols that are used on the internet.",
        answer: {
          definition: "Protocols are a set of rules and standards that govern how data is transmitted and received across a network. They ensure that different devices can understand each other regardless of their hardware or software differences. The Internet relies on a suite of protocols, primarily the TCP/IP stack, to manage everything from physical transmission to high-level application data.",
          coreConcepts: "Protocols operate at different layers of the OSI or TCP/IP model. Lower layers handle physical electrical signals and routing, while higher layers handle specific tasks like file transfer, webpage loading, and email. Each protocol has a specific format for its 'headers' and 'payload'.",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Protocol", "Full Form", "Purpose"],
              rows: [
                ["TCP", "Transmission Control Protocol", "Reliable, connection-oriented data delivery"],
                ["IP", "Internet Protocol", "Addressing and routing packets"],
                ["HTTP", "Hypertext Transfer Protocol", "Fetching HTML documents/Web data"],
                ["FTP", "File Transfer Protocol", "Uploading/Downloading files"],
                ["SMTP", "Simple Mail Transfer Protocol", "Sending emails"],
                ["DNS", "Domain Name System", "Translating URLs to IP addresses"]
              ]
            }
          },
          keyPoints: [
            "TCP/IP is the backbone of the Internet.",
            "HTTP/HTTPS is used for the Web.",
            "DNS acts as the Internet's 'Phonebook'.",
            "UDP is used for fast, non-reliable data (streaming)."
          ]
        }
      },
      {
        id: "2b",
        questionText: "Design a HTML form for Library Management System.",
        answer: {
          definition: "A Library Management System form is used to collect data related to books, members, or transactions (issuing/returning). It requires various input fields like text boxes, date pickers, and dropdowns to ensure structured data entry. Proper use of labels and validation attributes makes the form user-friendly and reliable.",
          coreConcepts: "The form uses the <form> tag with an action and method. Key fields include 'Book ID', 'Member Name', 'Date of Issue', and 'Book Category'. Each field uses a specific 'name' attribute which the server uses to process the data.",
          visualRepresentation: {
            type: "diagram",
            content: "Form Layout: [Title: Book Issue Form] | [Label: Book ID] [Input: Text] | [Label: Member Name] [Input: Text] | [Label: Issue Date] [Input: Date] | [Label: Category] [Dropdown: Fiction/Sci-Fi/...] | [Button: Issue Book]"
          },
          implementation: {
            type: "code",
            language: "html",
            content: `<form action="/issueBook" method="POST">
  <h2>Library Book Issue Form</h2>
  <div>
    <label>Book ISBN:</label>
    <input type="text" name="isbn" required>
  </div>
  <div>
    <label>Member ID:</label>
    <input type="text" name="memberId" required>
  </div>
  <div>
    <label>Issue Date:</label>
    <input type="date" name="issueDate">
  </div>
  <div>
    <label>Return Deadline:</label>
    <input type="date" name="dueDate">
  </div>
  <button type="submit">Submit Record</button>
</form>`
          },
          keyPoints: [
            "Use 'required' for mandatory fields.",
            "Date inputs ensure correct formatting.",
            "Group related fields using <fieldset>.",
            "Method='POST' is better for database transactions."
          ]
        }
      },
      {
        id: "2c",
        questionText: "Explain the life cycle of servlet.",
        answer: {
          definition: "The lifecycle of a servlet is the entire process from its creation to its destruction, managed by the Web Container (like Tomcat). The container controls when to instantiate the servlet, how to handle requests, and when to remove it from memory. This lifecycle ensures efficient resource management and allows the servlet to initialize resources (like DB connections) only once.",
          coreConcepts: "The lifecycle consists of four main phases: Loading, Initialization (init), Request Handling (service), and Destruction (destroy). The `init()` and `destroy()` methods are called only once, while `service()` is called for every incoming request.",
          visualRepresentation: {
            type: "flowchart",
            content: "1. Load Servlet Class -> 2. Instantiate -> 3. init() method (once) -> 4. service() method (per request: doGet/doPost) -> 5. destroy() method (once before shutdown)."
          },
          implementation: {
            type: "example",
            content: "init(): Setup DB connection. service(): Fetch user data. destroy(): Close DB connection."
          },
          keyPoints: [
            "Managed by the Servlet Container.",
            "init() is for one-time setup.",
            "service() dispatches to doGet/doPost.",
            "destroy() is for cleanup."
          ]
        }
      },
      {
        id: "2d",
        questionText: "What do you mean by Java bean? Is bean life cycle controlled by Spring?",
        answer: {
          definition: "A Java Bean is a simple Java class that follows specific conventions: it must have a no-argument constructor, private properties with public getter/setter methods, and should be serializable. In the context of the Spring Framework, a 'Spring Bean' is an object that is instantiated, assembled, and otherwise managed by a Spring IoC container.",
          coreConcepts: "Yes, the lifecycle of a Spring Bean is fully controlled by the Spring Container. The container manages everything from instantiation to destruction. Spring provides several 'hooks' to interact with this lifecycle, such as @PostConstruct (after init) and @PreDestroy (before destruction).",
          visualRepresentation: {
            type: "flowchart",
            content: "Bean Lifecycle: 1. Instantiate -> 2. Populate Properties -> 3. BeanNameAware / BeanFactoryAware -> 4. Pre-Initialization (BeanPostProcessor) -> 5. AfterPropertiesSet (InitializingBean) -> 6. Custom init-method -> 7. Bean is ready -> 8. DisposableBean (destroy) -> 9. Custom destroy-method."
          },
          keyPoints: [
            "Java Bean is a POJO (Plain Old Java Object) with conventions.",
            "Spring IoC container manages the bean lifecycle.",
            "Scopes (Singleton/Prototype) affect the lifecycle.",
            "Hooks like @PostConstruct allow custom initialization."
          ]
        }
      },
      {
        id: "2e",
        questionText: "How to save image in database using Spring Boot?",
        answer: {
          definition: "Saving an image in a database usually involves converting the image file into a byte array (BLOB - Binary Large Object) or storing it on a file system and saving only the file path in the database. In Spring Boot, we typically use the `MultipartFile` interface to receive the file from the frontend and JPA/Hibernate to persist the byte array to the database.",
          coreConcepts: "The process involves: 1. A Controller with a POST mapping that accepts `MultipartFile`. 2. An Entity class with a field annotated with `@Lob` (Large Object) to store the bytes. 3. A Repository to save the entity. Note: For very large files, it is generally recommended to store them in a cloud bucket (S3) or file system for performance.",
          visualRepresentation: {
            type: "diagram",
            content: "Flow: [Frontend Form (Multipart/form-data)] -> [Spring Boot Controller (MultipartFile)] -> [Service (getBytes())] -> [Repository (save)] -> [DB (BLOB column)]"
          },
          implementation: {
            type: "code",
            language: "java",
            content: `// Entity
@Entity
public class ImageEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Lob
    @Column(name = "data", length = 1000000)
    private byte[] data;
}

// Controller
@PostMapping("/upload")
public String uploadImage(@RequestParam("file") MultipartFile file) throws IOException {
    ImageEntity img = new ImageEntity();
    img.setData(file.getBytes());
    repository.save(img);
    return "Success";
}`
          },
          keyPoints: [
            "Use @Lob for large binary data.",
            "MultipartFile handles file uploads in Spring MVC.",
            "Configure 'spring.servlet.multipart.max-file-size' in properties.",
            "BLOB stores actual data; File Path stores the location."
          ]
        }
      }
    ]
  },
  {
    id: "set3",
    title: "Question Set 3 (UI & Logic)",
    questions: [
      {
        id: "3a",
        questionText: "Short note on— i) Form ii) List",
        answer: {
          definition: "Forms and Lists are two fundamental structural elements in HTML. A Form is used to collect user data, while a List is used to group related items together in an organized manner (ordered, unordered, or description). Both are essential for creating structured and interactive web content.",
          coreConcepts: "Forms act as a container for input elements (text, checkbox, etc.) and facilitate client-server communication. Lists organize information; Unordered lists (<ul>) use bullets, and Ordered lists (<ol>) use sequences (1, 2, A, B).",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Element", "Tag", "Common Child Elements / Attributes"],
              rows: [
                ["Form", "<form>", "<input>, <label>, <select>, <button>, action, method"],
                ["Unordered List", "<ul>", "<li> (List Item)"],
                ["Ordered List", "<ol>", "<li> (List Item), type (1, a, I)"],
                ["Description List", "<dl>", "<dt> (Term), <dd> (Description)"]
              ]
            }
          },
          implementation: {
            type: "code",
            language: "html",
            content: `<!-- List Example -->
<ul>
  <li>Java</li>
  <li>Python</li>
</ul>

<!-- Form Example -->
<form>
  <input type="text" placeholder="Username">
  <input type="submit">
</form>`
          },
          keyPoints: [
            "Forms are essential for interactivity.",
            "Lists improve readability and structure.",
            "Use <li> inside <ul> or <ol>.",
            "CSS can style list markers and form layouts."
          ]
        }
      },
      {
        id: "3b",
        questionText: "Write code in HTML for changing the background color.",
        answer: {
          definition: "Changing the background color of a web page can be done using the deprecated 'bgcolor' attribute in HTML or, preferably, using CSS. CSS provides more control, allowing for solid colors, gradients, and images. It can be applied inline, internally, or externally.",
          coreConcepts: "The 'body' tag defines the entire content of the page. By targeting the body in CSS, we can apply the `background-color` property. Colors can be specified by name (red), hex code (#ff0000), or RGB (rgb(255,0,0)).",
          visualRepresentation: {
            type: "diagram",
            content: "Styling Hierarchy: Inline CSS (High priority) -> Internal CSS (Inside <style>) -> External CSS (Linked file)"
          },
          implementation: {
            type: "code",
            language: "html",
            content: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Internal CSS */
    body {
      background-color: #f0f8ff; /* Alice Blue */
    }
    .yellow-box {
      background-color: yellow;
    }
  </style>
</head>
<body style="background-color: lightgrey;"> <!-- Inline CSS (Overrides Internal) -->
  <h1>Background Color Example</h1>
  <div class="yellow-box">This box has a yellow background.</div>
</body>
</html>`
          },
          keyPoints: [
            "Prefer CSS over 'bgcolor' attribute.",
            "Use hex codes for precise color matching.",
            "Background can also be set to images or gradients.",
            "Accessibility: Ensure high contrast between text and background."
          ]
        }
      }
    ]
  },
  {
    id: "set4",
    title: "Question Set 4 (Advanced JS & Models)",
    questions: [
      {
        id: "4a",
        questionText: "Differentiate between DOM and COM.",
        answer: {
          definition: "DOM (Document Object Model) and COM (Component Object Model) are both object models but serve completely different purposes. DOM is a programming interface for web documents (HTML/XML), representing the page as a tree structure. COM is a language-neutral, binary-interface standard for software components, primarily used in the Windows ecosystem for inter-process communication.",
          coreConcepts: "DOM allows scripts (like JS) to dynamically update the content, structure, and style of a document. COM allows different software components to communicate; for example, an Excel spreadsheet embedded in a Word document uses COM to interact.",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Feature", "DOM", "COM"],
              rows: [
                ["Full Form", "Document Object Model", "Component Object Model"],
                ["Usage", "Web Browsers", "Operating Systems (Windows)"],
                ["Structure", "Tree structure (Parent/Child nodes)", "Interface-based"],
                ["Language", "Mainly JS/HTML", "Language-neutral (C++, VB, etc.)"],
                ["Primary Goal", "Modify web pages", "Software component reusability"]
              ]
            }
          },
          keyPoints: [
            "DOM is platform-independent for the Web.",
            "COM is platform-specific (Windows).",
            "DOM is text/structure based.",
            "COM is binary based."
          ]
        }
      },
      {
        id: "4b",
        questionText: "What do you mean by Switch Case? Explain the various control statements in JavaScript.",
        answer: {
          definition: "Control statements in JavaScript are used to control the execution flow of the code based on certain conditions or loops. The `switch` statement is a specialized conditional statement used when there are multiple possible paths of execution for a single variable, acting as a cleaner alternative to a long chain of 'if-else if' statements.",
          coreConcepts: "Control statements are categorized into: 1. Conditional (if, if-else, switch). 2. Loops (for, while, do-while). 3. Jump (break, continue, return). The `switch` statement compares an expression against multiple `case` labels and executes the matching block.",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Type", "Statements", "Purpose"],
              rows: [
                ["Conditional", "if, else, switch", "Decide which block to run"],
                ["Looping", "for, while, for...in", "Repeat a block multiple times"],
                ["Breaking", "break, continue", "Exit or skip iterations"]
              ]
            }
          },
          implementation: {
            type: "code",
            language: "javascript",
            content: `// Switch Case Example
let day = 2;
switch (day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break; // Matches
    default: console.log("Other day");
}

// For Loop Example
for (let i = 0; i < 5; i++) {
    if (i === 2) continue; // Skips 2
    console.log(i);
}`
          },
          keyPoints: [
            "Switch uses strict equality (===) for comparison.",
            "'break' is crucial in switch to prevent 'fall-through'.",
            "Loops help in processing arrays and repetitive tasks.",
            "Proper flow control prevents infinite loops."
          ]
        }
      }
    ]
  },
  {
    id: "set5",
    title: "Question Set 5 (Architecture & Requests)",
    questions: [
      {
        id: "5a",
        questionText: "Explain Client–Server architecture with suitable diagram.",
        answer: {
          definition: "Client-Server architecture is a distributed application framework that partitions tasks or workloads between the providers of a resource or service, called servers, and service requesters, called clients. In the context of the Web, the client is typically a web browser (Chrome, Firefox) and the server is a machine hosting a web application (Tomcat, Nginx).",
          coreConcepts: "The relationship is based on a request-response model. The client initiates a request (e.g., clicks a link), and the server processes the request, interacts with databases or other services if needed, and sends back a response (e.g., an HTML file). The server is typically always-on and serves multiple clients simultaneously.",
          visualRepresentation: {
            type: "diagram",
            content: "Diagram: [Clients (Mobile, Laptop, Desktop)] --- (Request: HTTP) ---> [Internet] --- (Request) ---> [Server (Application + DB)] \n [Server] --- (Response: HTML/JSON) ---> [Internet] --- (Response) ---> [Clients]"
          },
          keyPoints: [
            "Centralized server, distributed clients.",
            "Follows Request-Response cycle.",
            "Server is the resource provider.",
            "Scalability: Servers can be scaled to handle more clients."
          ]
        }
      },
      {
        id: "5b",
        questionText: "Differentiate between Handling HTTP getRequests and Handling HTTP post Requests.",
        answer: {
          definition: "GET and POST are the two most common HTTP methods used for communication between a client and a server. GET is primarily used to request data from a specified resource, while POST is used to send data to a server to create/update a resource. Handling these in backend technologies like Servlets or Spring Boot requires different approaches to extract data.",
          coreConcepts: "In a GET request, parameters are appended to the URL (query strings), making them visible and limited in size. In a POST request, data is sent in the request body, allowing for large payloads and better security for sensitive info like passwords.",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Feature", "GET Request", "POST Request"],
              rows: [
                ["Data Location", "Appended to URL", "In Request Body"],
                ["Visibility", "Visible in address bar", "Not visible in address bar"],
                ["Size Limit", "Limited (approx 2KB)", "No specific limit"],
                ["Security", "Less secure (cached in history)", "More secure for sensitive data"],
                ["Use Case", "Searching, fetching data", "Submitting forms, file uploads"]
              ]
            }
          },
          keyPoints: [
            "GET is idempotent (repeated requests have no side effects).",
            "POST is not idempotent.",
            "Use GET for data retrieval.",
            "Use POST for data submission/modification."
          ]
        }
      }
    ]
  },
  {
    id: "set6",
    title: "Question Set 6 (Spring Framework)",
    questions: [
      {
        id: "6a",
        questionText: "Discuss Spring Framework architecture with suitable example.",
        answer: {
          definition: "The Spring Framework is a modular architecture consisting of about 20 modules organized into several layers: Core Container, Data Access/Integration, Web, AOP, Aspects, Instrumentation, and Test. This modularity allows developers to use only the parts they need for their specific application, making it lightweight and flexible.",
          coreConcepts: "The heart of the framework is the 'Core Container' (Beans, Core, Context, EL). It provides the IoC and Dependency Injection features. The 'Web' layer handles MVC, while 'Data Access' handles JDBC and ORM. For example, a typical web app uses the Web module for controllers and the Data Access module to talk to a MySQL database.",
          visualRepresentation: {
            type: "diagram",
            content: "Layered View: [Web Layer (MVC, WebSockets)] -> [AOP/Aspects Layer] -> [Data Access (JDBC, ORM, OXM)] -> [Core Container (Beans, Core, Context, EL)] -> [Test Layer]"
          },
          keyPoints: [
            "Layered and modular architecture.",
            "Core Container is the foundation.",
            "Supports Integration with various ORMs (Hibernate, JPA).",
            "Provides a comprehensive testing framework."
          ]
        }
      },
      {
        id: "6b",
        questionText: "Explain the various types of scopes in Spring.",
        answer: {
          definition: "In Spring, the 'scope' of a bean defines its lifecycle and how many instances of that bean are created within the Spring container. Choosing the correct scope is vital for memory management and ensures that the state of the application is handled correctly across different user sessions or requests.",
          coreConcepts: "There are two standard scopes (Singleton, Prototype) and four additional web-aware scopes (Request, Session, Application, WebSocket). Singleton is the default, where only one instance is created per Spring container.",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Scope", "Description"],
              rows: [
                ["Singleton", "Only one instance per Spring container (Default)"],
                ["Prototype", "A new instance created every time it's requested"],
                ["Request", "One instance per HTTP request (Web only)"],
                ["Session", "One instance per HTTP session (Web only)"],
                ["Application", "One instance per ServletContext (Web only)"],
                ["WebSocket", "One instance per WebSocket lifecycle"]
              ]
            }
          },
          keyPoints: [
            "Singleton is the most common and efficient.",
            "Prototype is used for stateful beans.",
            "Web-aware scopes require a web-aware Spring context.",
            "Scope is defined using @Scope annotation."
          ]
        }
      }
    ]
  },
  {
    id: "set7",
    title: "Question Set 7 (Modern Web Tech)",
    questions: [
      {
        id: "7a",
        questionText: "Explain Dependency Injection in Spring Boot.",
        answer: {
          definition: "Dependency Injection (DI) is a design pattern used to implement Inversion of Control (IoC). It allows the creation of dependent objects to be moved outside of a class, letting the Spring container 'inject' those dependencies at runtime. This results in loosely coupled code, making applications easier to maintain and unit test by allowing the swapping of implementations without changing the client code.",
          coreConcepts: "DI happens in three ways: Constructor Injection, Setter Injection, and Field Injection. Constructor injection is generally recommended as it ensures that the object is always in a valid state upon creation and promotes immutability.",
          visualRepresentation: {
            type: "flowchart",
            content: "1. Spring scans @Component -> 2. Finds @Autowired dependencies -> 3. Looks up bean in IoC Container -> 4. Injects instance into target class -> 5. Bean is ready for use."
          },
          implementation: {
            type: "code",
            language: "java",
            content: `// 1. Define Component
@Component
public class Engine {
    public void start() { System.out.println("Vroom!"); }
}

// 2. Inject Dependency
@Component
public class Car {
    private final Engine engine;

    // Constructor Injection (Recommended)
    @Autowired
    public Car(Engine engine) {
        this.engine = engine;
    }
}`
          },
          keyPoints: [
            "Promotes loose coupling.",
            "Facilitates easier Unit Testing (Mocking).",
            "Constructor injection is the industry best practice.",
            "@Autowired is the primary annotation for DI."
          ]
        }
      },
      {
        id: "7b",
        questionText: "Write a code in JavaScript for creating Alert and Confirm Box.",
        answer: {
          definition: "Alert and Confirm boxes are part of the Browser's standard dialog interface. An 'Alert' box is used to display a message with an 'OK' button to the user, typically for warnings. A 'Confirm' box is used to get a boolean confirmation (Yes/No) from the user before performing an action. Both are synchronous and block the execution of the script until the user interacts with them.",
          coreConcepts: "The `window.alert()` function takes a string as a message. The `window.confirm()` function returns `true` if the user clicks 'OK' and `false` if they click 'Cancel'. They are simple to use but can be disruptive to the user experience if overused.",
          visualRepresentation: {
            type: "diagram",
            content: "Dialog Flow: Script call -> Modal Dialog pops up -> Script execution pauses -> User interaction -> Dialog closes -> Script resumes."
          },
          implementation: {
            type: "code",
            language: "javascript",
            content: `// Alert Box
function showAlert() {
    alert("This is an important message!");
}

// Confirm Box
function showConfirm() {
    let result = confirm("Do you really want to delete this?");
    if (result) {
        console.log("Deleted successfully.");
    } else {
        console.log("Action cancelled.");
    }
}

// Triggering
showAlert();
showConfirm();`
          },
          keyPoints: [
            "Simple way to get user attention.",
            "Blocks browser UI while open.",
            "Confirm returns a boolean value.",
            "Modern UI often uses custom modals for better styling."
          ]
        }
      }
    ]
  }
];
