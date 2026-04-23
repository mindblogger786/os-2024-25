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

export const oopData: QuestionSet[] = [
  {
    id: "set1",
    title: "Question Set 1 (General Fundamentals)",
    questions: [
      {
        id: "1a",
        questionText: "Explain how bytecode makes Java a platform-independent language.",
        answer: {
          definition: "Bytecode is a highly optimized set of instructions designed to be executed by the Java Virtual Machine (JVM) rather than directly by the host computer's CPU. When a Java program is compiled, the 'javac' compiler converts the source code (.java) into bytecode (.class). This intermediate representation is not specific to any particular processor or operating system, allowing it to be executed on any device that has a compatible JVM installed.",
          coreConcepts: "The 'Why' lies in the 'Write Once, Run Anywhere' (WORA) philosophy. The compilation process is split: the compiler handles the source-to-bytecode translation (platform-neutral), and the JVM handles the bytecode-to-machine-code translation (platform-specific). The JVM acts as a translator, shielding the code from the underlying hardware differences.",
          visualRepresentation: {
            type: "diagram",
            content: "Process: [Source Code (.java)] --(Compiler)--> [Bytecode (.class)] --(Network/Disk)--> [JVM (Windows/Linux/Mac)] --(Interpreter/JIT)--> [Native Machine Code]"
          },
          keyPoints: [
            "Bytecode is intermediate, platform-neutral code.",
            "The JVM is platform-dependent; the Bytecode is not.",
            "Enables secure distribution of code across different networks.",
            "JIT (Just-In-Time) compiler ensures bytecode runs almost as fast as native code."
          ]
        }
      },
      {
        id: "1b",
        questionText: "Object is a variable of user-defined data type class, justify your answer.",
        answer: {
          definition: "In Java, an object is technically a 'reference variable' that points to a specific instance of a class in memory. While primitive types (like int, char) are predefined, a 'class' is a user-defined data type. Therefore, when we declare a variable of a class type, we are essentially creating a complex variable that can hold both data (state) and methods (behavior) as defined by the user in the class blueprint.",
          coreConcepts: "A class acts as a template or a new data type. Just as 'int x' creates a variable of type integer, 'Student s' creates a variable of type Student. However, unlike primitives, the variable 's' does not hold the object itself but holds the memory address (reference) of where the object's data is stored in the Heap memory.",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Feature", "Primitive Variable", "Object Variable (Class Type)"],
              rows: [
                ["Type", "Built-in (int, float)", "User-Defined (Class name)"],
                ["Data Stored", "Actual value", "Memory address (Reference)"],
                ["Memory Location", "Stack", "Reference on Stack, Data on Heap"],
                ["Capabilities", "Stores single value", "Stores multiple values and methods"]
              ]
            }
          },
          keyPoints: [
            "Classes are the 'blueprints' or 'types'.",
            "Objects are the 'variables' or 'instances'.",
            "The 'new' keyword allocates memory for this custom type.",
            "Allows for complex data structures beyond simple primitives."
          ]
        }
      },
      {
        id: "1c",
        questionText: "What is the role of a package in Java?",
        answer: {
          definition: "A package in Java is a mechanism used to group related classes, interfaces, and sub-packages together, acting as a namespace or a folder structure for the code. It is defined using the 'package' keyword at the very top of a Java source file. Packages are essential for organizing large projects and preventing naming conflicts, allowing multiple classes to have the same name as long as they reside in different packages.",
          coreConcepts: "The primary roles include: 1. **Encapsulation/Access Protection**: Providing access levels (like default/protected). 2. **Namespace Management**: Resolving name clashes between different libraries. 3. **Searchability**: Making it easier to locate specific classes. For example, 'java.util' contains utility classes, while 'java.io' handles input/output.",
          visualRepresentation: {
            type: "diagram",
            content: "Structure: [Root Project] -> [com.app.ui (UI Classes)] | [com.app.db (Database Classes)] | [com.app.util (Helper Classes)]"
          },
          keyPoints: [
            "Avoids naming collisions.",
            "Provides controlled access (Package-private).",
            "Facilitates modularity and code reuse.",
            "Mapping: package com.test -> folder structure /com/test/."
          ]
        }
      },
      {
        id: "1f",
        questionText: "Draw hierarchical diagram of Java Exception Handling package.",
        answer: {
          definition: "The Java Exception hierarchy is a structured tree of classes rooted at the 'Throwable' class. It branches into two main categories: 'Error' (serious system problems that applications shouldn't catch) and 'Exception' (conditions that an application might want to catch). Within 'Exception', there is a further distinction between 'RuntimeException' (unchecked) and other checked exceptions.",
          coreConcepts: "Hierarchy logic: Every error or exception is an object. Throwable provides methods like getMessage() and printStackTrace(). Errors are generally external to the application (like OutOfMemory), while Exceptions are internal to program logic (like NullPointerException).",
          visualRepresentation: {
            type: "diagram",
            content: "Throwable (Root)\n├── Error (Fatal: StackOverflow, OutOfMemory)\n└── Exception (Catchable)\n    ├── Checked Exceptions (IOException, SQLException)\n    └── RuntimeException (Unchecked: NullPointer, ArithmeticException)"
          },
          keyPoints: [
            "Throwable is the parent of all error-related classes.",
            "Errors are usually non-recoverable.",
            "Checked exceptions must be handled or declared.",
            "Unchecked exceptions occur due to programming errors."
          ]
        }
      },
      {
        id: "1g",
        questionText: "Explain types of ways to create thread in Java and which one is better.",
        answer: {
          definition: "In Java, there are two primary ways to create a thread: by extending the 'Thread' class or by implementing the 'Runnable' interface. Both methods allow code to run concurrently in a separate execution path. While both are functional, modern Java development almost universally prefers the interface-based approach due to the limitations of Java's single inheritance model.",
          coreConcepts: "1. **Extending Thread**: You create a subclass and override the 'run()' method. 2. **Implementing Runnable**: You define a task in a class that implements Runnable, then pass an instance of it to a Thread object. The interface approach is superior because it allows your class to inherit from another class (like a BaseService) while still being a Thread, promoting better separation of concerns.",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Feature", "Extending Thread class", "Implementing Runnable interface"],
              rows: [
                ["Inheritance", "Cannot inherit any other class", "Can inherit other classes"],
                ["Flexibility", "Low (Tight coupling)", "High (Loose coupling)"],
                ["Task/Thread", "Task and Thread are coupled", "Task and Thread are separate"],
                ["Usage", "Simple, small tasks", "Standard for enterprise applications"]
              ]
            }
          },
          keyPoints: [
            "Runnable is more flexible and object-oriented.",
            "Runnable supports Thread Pools (Executor Service) better.",
            "Thread class itself implements Runnable.",
            "Both require the 'start()' method to begin execution."
          ]
        }
      },
      {
        id: "1h",
        questionText: "Describe the role of generic programming in Java.",
        answer: {
          definition: "Generic programming in Java, introduced in J2SE 5.0, allows classes, interfaces, and methods to be parameterized by types. This enables the creation of a single class or method that can operate on various data types while maintaining strict compile-time type safety. The primary role of generics is to provide a way to reuse code without the risks and overhead of manual type-casting.",
          coreConcepts: "Before generics, collections stored 'Object' types, requiring messy casts (e.g., (String) list.get(0)) which could fail at runtime with a ClassCastException. Generics move these checks to compile-time. The compiler uses 'Type Erasure' to remove generic information during compilation, ensuring backward compatibility with older Java versions.",
          visualRepresentation: {
            type: "diagram",
            content: "Benefit Flow: [Code with Generics] -> [Compiler Check: Type mismatch?] -> (No) -> [Type Erasure] -> [Standard Bytecode]"
          },
          keyPoints: [
            "Ensures type safety at compile-time.",
            "Eliminates the need for explicit type casting.",
            "Enables the development of generic algorithms (e.g., Collections).",
            "Uses wildcards (<?>) for even greater flexibility."
          ]
        }
      },
      {
        id: "1i",
        questionText: "Draw hierarchical diagram of Java Swing Classes.",
        answer: {
          definition: "Java Swing is a GUI toolkit built on top of the AWT (Abstract Window Toolkit). Its hierarchy is designed to provide platform-independent components. Almost all Swing components are 'lightweight' and inherit from the 'JComponent' class, which in turn inherits from the AWT 'Container' and 'Component' classes, establishing a bridge between the two frameworks.",
          coreConcepts: "The hierarchy begins with the heavy-weight AWT components. JComponent is the powerhouse of Swing, providing features like double buffering, tooltips, and pluggable look-and-feel. Top-level containers like JFrame and JDialog are slightly different as they are 'heavyweight' to interact with the OS window manager.",
          visualRepresentation: {
            type: "diagram",
            content: "Object\n└── Component (AWT)\n    └── Container (AWT)\n        ├── Window (AWT) -> Frame -> JFrame\n        └── JComponent (Swing)\n            ├── JPanel, JScrollPane\n            ├── AbstractButton -> JButton, JCheckBox\n            └── JLabel, JTextField, JTable"
          },
          keyPoints: [
            "Most Swing components start with 'J'.",
            "JFrame is the top-level window.",
            "JComponent is the base for all lightweight components.",
            "Swing is built on the Model-View-Controller (MVC) pattern."
          ]
        }
      },
      {
        id: "1j",
        questionText: "What is the difference between Frame and JFrame in Java?",
        answer: {
          definition: "Frame and JFrame are both top-level window components in Java used to create GUI applications. 'Frame' belongs to the older AWT (Abstract Window Toolkit) package, while 'JFrame' is part of the newer Swing package. While they serve the same fundamental purpose, JFrame is much more advanced, providing better integration with other Swing components and more robust window management features.",
          coreConcepts: "The 'Why' behind the difference lies in weight. Frame is 'Heavyweight', meaning it relies on the host OS's peer to render, leading to inconsistent looks across platforms. JFrame is 'Lightweight' (mostly), providing a consistent 'look and feel'. JFrame also supports complex features like 'Close Operations' and a 'Root Pane' structure (ContentPane).",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Feature", "Frame (AWT)", "JFrame (Swing)"],
              rows: [
                ["Package", "java.awt", "javax.swing"],
                ["Component Type", "Heavyweight", "Lightweight"],
                ["Look & Feel", "Platform dependent", "Platform independent"],
                ["Default Close", "Must write code to close", "setDefaultCloseOperation()"],
                ["Structure", "Directly add components", "Add to ContentPane"]
              ]
            }
          },
          keyPoints: [
            "JFrame is preferred for modern applications.",
            "Frame is the parent (or indirect parent) of JFrame.",
            "JFrame handles 'double buffering' automatically.",
            "Always use JFrame when using other Swing components (like JButton)."
          ]
        }
      }
    ]
  },
  {
    id: "set2",
    title: "Question Set 2 (Key Keywords & IO)",
    questions: [
      {
        id: "2a",
        questionText: "What are the uses of the super keyword? Explain with a proper example.",
        answer: {
          definition: "The 'super' keyword in Java is a reference variable used by a subclass to refer to its immediate parent class object. It is primarily used to eliminate confusion between superclasses and subclasses that have methods or variables with the same name, and to ensure that the parent class is correctly initialized during object creation.",
          coreConcepts: "Uses of super: 1. **To invoke parent class constructor**: Must be the first line in the child constructor. 2. **To access parent class variables**: Useful if the child has a variable with the same name (shadowing). 3. **To invoke parent class methods**: Useful when a method is overridden in the child class but the original functionality is still needed.",
          visualRepresentation: {
            type: "diagram",
            content: "Context: [Parent (speed=50)] <- [Child (speed=100)] | Logic: 'this.speed' is 100, 'super.speed' is 50."
          },
          implementation: {
            type: "code",
            language: "java",
            content: `class Animal {
    String color = "White";
    Animal() { System.out.println("Animal Created"); }
    void eat() { System.out.println("Eating..."); }
}

class Dog extends Animal {
    String color = "Black";
    Dog() {
        super(); // 1. Call parent constructor
        System.out.println("Dog Created");
    }
    void printColor() {
        System.out.println(color);       // Black (this)
        System.out.println(super.color); // White (super)
    }
    void eat() {
        super.eat(); // 3. Call parent method
        System.out.println("Dog Eating Meat...");
    }
}`
          },
          keyPoints: [
            "Refers to immediate parent only.",
            "Cannot be used in static context.",
            "super() is implicitly added by the compiler if not present.",
            "Helps in maintaining the 'is-a' relationship logic."
          ]
        }
      },
      {
        id: "2c",
        questionText: "Write Java program to copy a binary file.",
        answer: {
          definition: "Copying a binary file (like an image, audio, or PDF) requires reading and writing raw bytes rather than characters. In Java, this is handled by the 'InputStream' and 'OutputStream' classes, specifically 'FileInputStream' and 'FileOutputStream'. This process ensures that every byte of the file is preserved exactly as it is, without any character encoding interference.",
          coreConcepts: "The algorithm follows a simple 'Read-Buffer-Write' loop. A buffer (byte array) is used to read chunks of data from the source file. This data is then immediately written to the destination file. The loop continues until the 'read()' method returns -1, indicating the end of the file.",
          visualRepresentation: {
            type: "flowchart",
            content: "Open Source (FIS) -> Open Dest (FOS) -> Read bytes to Buffer -> End of File? (Yes: Close) -> No: Write Buffer to Dest -> Repeat."
          },
          implementation: {
            type: "code",
            language: "java",
            content: `import java.io.*;

public class BinaryCopy {
    public static void main(String[] args) {
        try (FileInputStream in = new FileInputStream("input.jpg");
             FileOutputStream out = new FileOutputStream("output.jpg")) {
            
            byte[] buffer = new byte[4096]; // 4KB Buffer
            int bytesRead;
            
            while ((bytesRead = in.read(buffer)) != -1) {
                out.write(buffer, 0, bytesRead);
            }
            System.out.println("Binary file copied successfully.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}`
          },
          keyPoints: [
            "Use Byte streams for non-text files.",
            "Try-with-resources ensures streams are closed.",
            "Buffers improve I/O performance significantly.",
            "Preserves file integrity (no encoding changes)."
          ]
        }
      },
      {
        id: "2d",
        questionText: "Write generic Java program that displays multiply if pass as numeric data and merge text if pass as string data.",
        answer: {
          definition: "While Java Generics are designed to provide type safety, they do not inherently support arithmetic operations directly on type parameters (T). To implement a logic that behaves differently based on whether a number or a string is passed, we must use a combination of generic methods and type checking (using 'instanceof') or type-specific logic within the method body.",
          coreConcepts: "The logic checks the class of the provided input. If it is an instance of 'Number', it performs a multiplication (by casting to double). If it is an instance of 'String', it performs concatenation. This demonstrates the power of generics combined with Java's runtime type inspection.",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Input Type", "Logic Applied", "Result Type"],
              rows: [
                ["Integer / Double", "Multiply (val * 2)", "Double"],
                ["String", "Merge (val + val)", "String"],
                ["Other", "Unsupported", "Error Message"]
              ]
            }
          },
          implementation: {
            type: "code",
            language: "java",
            content: `public class GenericAction {
    public static <T> void process(T data) {
        if (data instanceof Number) {
            double result = ((Number) data).doubleValue() * 2;
            System.out.println("Multiplied: " + result);
        } else if (data instanceof String) {
            String result = (String) data + (String) data;
            System.out.println("Merged Text: " + result);
        } else {
            System.out.println("Unsupported type");
        }
    }
    
    public static void main(String[] args) {
        process(10);        // Multiplied: 20.0
        process("Hello");   // Merged Text: HelloHello
    }
}`
          },
          keyPoints: [
            "Generics provide the 'signature' flexibility.",
            "instanceof identifies the actual type at runtime.",
            "Number is the superclass of all numeric wrappers.",
            "Demonstrates ad-hoc polymorphism within a generic context."
          ]
        }
      }
    ]
  },
  {
    id: "set3",
    title: "Question Set 3 (OOP Advanced Concepts)",
    questions: [
      {
        id: "3a",
        questionText: "Explain the difference between abstract class and interface with proper example.",
        answer: {
          definition: "Both abstract classes and interfaces are used to achieve abstraction in Java, but they serve different architectural purposes. An abstract class is a partially implemented class that allows you to share common code among related subclasses. An interface is a 'contract' that specifies what a class must do, but not how it should do it, supporting multiple inheritance which classes do not.",
          coreConcepts: "The 'Why' for abstract classes is to define a base object with some shared state (fields). The 'Why' for interfaces is to define capabilities (like 'Runnable' or 'Serializable') that can be shared by completely unrelated classes. In Java 8+, interfaces can have 'default' and 'static' methods, narrowing the gap with abstract classes.",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Feature", "Abstract Class", "Interface"],
              rows: [
                ["Inheritance", "Subclass 'extends' (Single)", "Class 'implements' (Multiple)"],
                ["Methods", "Can have abstract and concrete", "Primarily abstract (till Java 7)"],
                ["Variables", "Can have final, static, or instance", "Only static and final"],
                ["Constructor", "Has constructors", "Cannot have constructors"],
                ["Access Modifiers", "Can be private, protected, etc.", "Methods are public by default"]
              ]
            }
          },
          implementation: {
            type: "code",
            language: "java",
            content: `// Abstract Class
abstract class Shape {
    String color; // Instance variable allowed
    abstract void draw();
}

// Interface
interface Drawable {
    void print(); // Abstract method
}

class Circle extends Shape implements Drawable {
    void draw() { System.out.println("Drawing Circle"); }
    public void print() { System.out.println("Printing Circle"); }
}`
          },
          keyPoints: [
            "Use Abstract Class for 'is-a' relationship.",
            "Use Interface for 'can-do' relationship.",
            "Abstract classes can store state; Interfaces cannot.",
            "Interfaces provide higher level of decoupling."
          ]
        }
      },
      {
        id: "3b",
        questionText: "Explain the striking features of Java as Object Oriented Programming.",
        answer: {
          definition: "Java's success is rooted in its robust implementation of Object-Oriented Programming (OOP) principles. Beyond the basic four pillars (Encapsulation, Abstraction, Inheritance, Polymorphism), Java offers features like strong type-checking, automatic memory management (Garbage Collection), and platform independence, making it a premier language for enterprise-level applications.",
          coreConcepts: "Key features include: 1. **Everything is an Object**: Promotes modular thinking. 2. **Simplicity**: No pointers or multiple inheritance of classes. 3. **Robustness**: Exception handling and memory management. 4. **Multithreading**: Built-in support for concurrent execution. 5. **Distributed**: Networking capabilities are integrated into the core libraries.",
          visualRepresentation: {
            type: "diagram",
            content: "OOP Pillars: [Encapsulation (Security)] | [Abstraction (Complexity Reduction)] | [Inheritance (Reusability)] | [Polymorphism (Flexibility)]"
          },
          keyPoints: [
            "Platform Independent (WORA).",
            "Automatic Garbage Collection (No memory leaks).",
            "Strong security model (Sandbox/Bytecode verifier).",
            "Rich standard API library."
          ]
        }
      }
    ]
  },
  {
    id: "set4",
    title: "Question Set 4 (Polymorphism & Abstraction)",
    questions: [
      {
        id: "4a",
        questionText: "What is Polymorphism? Explain its types with proper example.",
        answer: {
          definition: "Polymorphism, derived from the Greek words 'poly' (many) and 'morph' (form), is the ability of a single interface or entity to take on multiple forms. In Java, it allows us to perform a single action in different ways. It is crucial for creating flexible and extensible codebases where a generic reference can handle specific behaviors at runtime.",
          coreConcepts: "There are two types: 1. **Static (Compile-time) Polymorphism**: Achieved through 'Method Overloading' where multiple methods have the same name but different signatures. 2. **Dynamic (Runtime) Polymorphism**: Achieved through 'Method Overriding' where a subclass provides its own implementation of a parent method. The JVM determines which method to call at runtime.",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Type", "Mechanism", "Resolved at"],
              rows: [
                ["Compile-time", "Method Overloading", "Compilation time"],
                ["Runtime", "Method Overriding", "Runtime execution"]
              ]
            }
          },
          implementation: {
            type: "code",
            language: "java",
            content: `// Dynamic Polymorphism
class Bank { float getRate() { return 0; } }
class SBI extends Bank { float getRate() { return 8.4f; } }
class ICICI extends Bank { float getRate() { return 7.3f; } }

public class Test {
    public static void main(String args[]) {
        Bank b = new SBI(); // Upcasting
        System.out.println(b.getRate()); // 8.4
    }
}`
          },
          keyPoints: [
            "Increases code reusability.",
            "Allows for 'Loose Coupling'.",
            "Upcasting is required for Runtime Polymorphism.",
            "Method signature must be identical for overriding."
          ]
        }
      },
      {
        id: "4b",
        questionText: "What is Abstraction? How could you achieve abstraction from 0 to 100% in Java.",
        answer: {
          definition: "Abstraction is the process of hiding internal implementation details and showing only the essential functionality to the user. It simplifies complexity by letting the user focus on 'what' an object does instead of 'how' it does it. In Java, abstraction is a spectrum achieved using two primary tools: Abstract Classes and Interfaces.",
          coreConcepts: "1. **Abstract Classes (0-100% Abstraction)**: Can contain both abstract (no body) and concrete (with body) methods. If all methods are concrete, it's 0% abstract; if all are abstract, it's 100%. 2. **Interfaces (100% Abstraction)**: Before Java 8, interfaces could only have abstract methods, representing absolute abstraction. Even with default methods today, they represent a 'pure contract'.",
          visualRepresentation: {
            type: "diagram",
            content: "Spectrum: [Concrete Class (0%)] ---- [Abstract Class (0-100%)] ---- [Interface (100%)]"
          },
          keyPoints: [
            "Abstract classes can have state (variables).",
            "Interfaces cannot be instantiated.",
            "Interfaces support multiple inheritance.",
            "Abstraction reduces coding effort and improves maintenance."
          ]
        }
      }
    ]
  },
  {
    id: "set5",
    title: "Question Set 5 (Exception Handling & Streams)",
    questions: [
      {
        id: "5a",
        questionText: "Write Java program that accepts a temperature in Celsius and throws custom Exceptions based on range.",
        answer: {
          definition: "Exception handling in Java can be extended by creating user-defined (custom) exceptions. By extending the 'Exception' class, we can create specific error types for business logic, such as 'TemperatureBelowNormalException'. This makes the code more readable and allows the calling method to handle specific business failures differently.",
          coreConcepts: "The logic involves creating three custom classes that extend Exception. A check method evaluates the input temperature and uses the 'throw' keyword to raise the appropriate exception. The 'main' method then wraps the call in a try-catch block to handle these specific cases.",
          visualRepresentation: {
            type: "flowchart",
            content: "Input Temp -> < 15? (Yes: Throw BelowNormal) -> > 42? (Yes: Throw High) -> Else: Throw Normal."
          },
          implementation: {
            type: "code",
            language: "java",
            content: `class TempBelowNormal extends Exception { public TempBelowNormal(String s){super(s);}}
class NormalTemp extends Exception { public NormalTemp(String s){super(s);}}
class TempHigh extends Exception { public TempHigh(String s){super(s);}}

public class TempCheck {
    static void check(int t) throws TempBelowNormal, NormalTemp, TempHigh {
        if (t < 15) throw new TempBelowNormal("Too Cold!");
        else if (t > 42) throw new TempHigh("Too Hot!");
        else throw new NormalTemp("Just Right.");
    }
    public static void main(String[] args) {
        try { check(25); } 
        catch (Exception e) { System.out.println(e.getMessage()); }
    }
}`
          },
          keyPoints: [
            "Custom exceptions improve code semantic clarity.",
            "Use 'throw' to trigger the exception.",
            "Use 'throws' in method signature to declare it.",
            "Extending Exception creates a 'checked' exception."
          ]
        }
      },
      {
        id: "5b",
        questionText: "Explain the use Reader or Writer classes with suitable example.",
        answer: {
          definition: "The Reader and Writer classes are the root of the character-oriented stream hierarchy in Java (java.io package). Unlike Byte streams which handle 8-bit data, Reader and Writer handle 16-bit Unicode characters. This makes them the ideal choice for internationalization, as they correctly handle text files regardless of the underlying character encoding (like UTF-8 or ASCII).",
          coreConcepts: "Reader is an abstract class for reading character streams. Its subclasses like 'FileReader' and 'BufferedReader' are commonly used. Writer is for writing character streams, with 'FileWriter' and 'BufferedWriter' as counterparts. Using 'Buffered' versions is highly recommended as it minimizes disk access by reading/writing data in large blocks.",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Class", "Type", "Primary Subclass", "Purpose"],
              rows: [
                ["Reader", "Abstract Input", "FileReader", "Read text from file"],
                ["Writer", "Abstract Output", "FileWriter", "Write text to file"],
                ["BufferedReader", "Wrapper", "N/A", "Read lines efficiently"]
              ]
            }
          },
          implementation: {
            type: "code",
            language: "java",
            content: `import java.io.*;

public class TextIO {
    public static void main(String[] args) throws IOException {
        // Writing text
        FileWriter fw = new FileWriter("test.txt");
        fw.write("Hello OOP Students");
        fw.close();

        // Reading text
        BufferedReader br = new BufferedReader(new FileReader("test.txt"));
        System.out.println(br.readLine());
        br.close();
    }
}`
          },
          keyPoints: [
            "Character streams are for text data only.",
            "Handle Unicode characters correctly.",
            "Always close streams to prevent resource leaks.",
            "BufferedReader provides 'readLine()' which is very convenient."
          ]
        }
      }
    ]
  },
  {
    id: "set6",
    title: "Question Set 6 (Threads & Bounded Generics)",
    questions: [
      {
        id: "6a",
        questionText: "Describe threads and life cycle of threads with proper neat and clean diagram.",
        answer: {
          definition: "A thread is the smallest unit of execution within a process, often called a 'lightweight process'. Java provides a built-in Thread class and Runnable interface to manage these. A thread goes through various states from the time it is born until it dies. This sequence of states is known as the Thread Life Cycle, managed by the JVM's thread scheduler.",
          coreConcepts: "The 5 states are: 1. **New**: Born but not started. 2. **Runnable**: Ready to run, waiting for CPU time. 3. **Running**: CPU is executing the thread's task. 4. **Blocked/Waiting**: Thread is paused waiting for a resource or notification. 5. **Dead**: Execution finished. Transition between states happens via methods like start(), sleep(), wait(), and stop().",
          visualRepresentation: {
            type: "flowchart",
            content: "New -> (start) -> Runnable <-> Running -> (wait/sleep) -> Waiting -> (notify) -> Runnable -> (finish) -> Dead"
          },
          keyPoints: [
            "Threads share the same memory space.",
            "Lifecycle is managed by the OS and JVM.",
            "Dead threads cannot be restarted.",
            "Multithreading improves CPU utilization."
          ]
        }
      },
      {
        id: "6b",
        questionText: "Discuss generic bounded class with the help of a suitable example.",
        answer: {
          definition: "A bounded generic class is one where the type parameter is restricted to a specific range of types using the 'extends' keyword. By default, a generic parameter <T> can be any type. Bounding allows you to specify that <T> must be a subclass of a certain class or implement a certain interface. This is essential when you need to call specific methods on the generic object within the class.",
          coreConcepts: "Logic: If you want to create a 'Calculator' class that only works with numbers, you use '<T extends Number>'. This guarantees that whatever type is passed (Integer, Double, etc.) will have methods like 'doubleValue()'. This increases type safety and prevents logical errors where a user might try to use a 'String' in a math-heavy generic class.",
          visualRepresentation: {
            type: "diagram",
            content: "Bound: <T extends Number> | Accepts: [Integer, Float, Double] | Rejects: [String, Boolean, Object]"
          },
          implementation: {
            type: "code",
            language: "java",
            content: `// Bounded generic class
class Stats<T extends Number> {
    T[] nums;
    Stats(T[] o) { nums = o; }
    double average() {
        double sum = 0.0;
        for(T x : nums) sum += x.doubleValue(); // doubleValue() exists!
        return sum / nums.length;
    }
}

// Usage
Integer[] inums = {1, 2, 3};
Stats<Integer> iob = new Stats<>(inums); // Valid`
          },
          keyPoints: [
            "Restrict type parameters using 'extends'.",
            "Multiple bounds can be set using '&' (e.g., T extends A & B).",
            "Upper bounds use 'extends'; Lower bounds use 'super'.",
            "Enables use of class-specific methods inside generic code."
          ]
        }
      }
    ]
  },
  {
    id: "set7",
    title: "Question Set 7 (GUI Event Handling)",
    questions: [
      {
        id: "7a",
        questionText: "Write Java Swing program that calculates sum of two numbers whenever user clicks a button.",
        answer: {
          definition: "Building a calculator in Swing involves using JTextFields for input, a JButton to trigger the action, and a JLabel to display the result. The core of this program is the ActionListener, which captures the 'click' event, retrieves the text from the inputs, converts them to integers, and updates the UI with the sum.",
          coreConcepts: "The UI components are added to a JFrame. An anonymous inner class or a lambda expression is used to implement the 'actionPerformed' method. Proper error handling (like catching NumberFormatException) is important to prevent the application from crashing if the user enters non-numeric data.",
          visualRepresentation: {
            type: "diagram",
            content: "UI Layout: [Field 1] + [Field 2] -> [Button (Add)] -> [Result Label]"
          },
          implementation: {
            type: "code",
            language: "java",
            content: `import javax.swing.*;
import java.awt.event.*;

public class SumApp {
    public static void main(String[] args) {
        JFrame f = new JFrame("Sum Calculator");
        JTextField t1 = new JTextField(); t1.setBounds(50,50,150,20);
        JTextField t2 = new JTextField(); t2.setBounds(50,100,150,20);
        JButton b = new JButton("Add"); b.setBounds(50,150,95,30);
        JLabel l = new JLabel("Result: "); l.setBounds(50,200,150,20);

        b.addActionListener(e -> {
            int n1 = Integer.parseInt(t1.getText());
            int n2 = Integer.parseInt(t2.getText());
            l.setText("Result: " + (n1 + n2));
        });

        f.add(t1); f.add(t2); f.add(b); f.add(l);
        f.setSize(300,300); f.setLayout(null); f.setVisible(true);
    }
}`
          },
          keyPoints: [
            "Use JTextField for user input.",
            "Use ActionListener for button clicks.",
            "Integer.parseInt() converts String to int.",
            "setText() updates the display label."
          ]
        }
      },
      {
        id: "7b",
        questionText: "What is event and event delegation model, explain with proper example of keyboard or mouse event handling.",
        answer: {
          definition: "An event in Java is an object that describes a state change in a GUI component, such as a mouse click or a key press. The Event Delegation Model is the standard way Java handles these interactions. Instead of the component handling its own event, it 'delegates' the task to a separate object called a 'Listener'. This separation of concerns makes the code modular and easier to maintain.",
          coreConcepts: "The model has three parts: 1. **Event Source**: The component (e.g., Button, Canvas). 2. **Event Object**: Encapsulates state change info. 3. **Event Listener**: An interface that the programmer implements to define the response. For example, a MouseListener handles mouse events, while a KeyListener handles keyboard inputs like typing or pressing special keys.",
          visualRepresentation: {
            type: "flowchart",
            content: "User Input -> Source generates Event -> Source calls Listener Method -> Action executed."
          },
          implementation: {
            type: "code",
            language: "java",
            content: `import java.awt.event.*;
import javax.swing.*;

public class MouseTracker extends JFrame implements MouseListener {
    MouseTracker() {
        addMouseListener(this); // Registering source with listener
        setSize(300,300); setVisible(true);
    }
    public void mouseClicked(MouseEvent e) {
        System.out.println("Mouse Clicked at: " + e.getX() + "," + e.getY());
    }
    // Other methods must be implemented (even if empty)
    public void mouseEntered(MouseEvent e) {}
    public void mouseExited(MouseEvent e) {}
    public void mousePressed(MouseEvent e) {}
    public void mouseReleased(MouseEvent e) {}
}`
          },
          keyPoints: [
            "Separates GUI design from event logic.",
            "One source can have multiple listeners.",
            "Adapter classes can be used to avoid empty method implementations.",
            "Essential for interactive desktop applications."
          ]
        }
      }
    ]
  }
];
