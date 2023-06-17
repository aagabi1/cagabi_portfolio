const local_data = [
  {
    id: "processing",
    tag: "Computer Graphics in Processing",
    title:
      "Understanding the fundamentals of computer graphics using processing",
    content: [
      "Before starting this series of projects, computer graphics programming was a like foreign language. Little did I know that it would become one of the most expansive mediums of creative expression that I'd have the pleasure of tackling in my college career. I was a bit frightened by the flashes of linear algebra and matrix multiplication that showed up early in the semester. But this class was much less abstract and, for the first time in a long time, transformation matrices didn't seem so scary.",

      "There are exactly 8 CGI compositions in this repository covering a range of topics from object modeling and GPU programming to ray tracing and complex triangle subdivision techniques. You can check out all that technical stuff in the source code. What I'm really excited to show you though is this...",

      "image",

      "This is my model car designed from a combination of primitive shapes. The car is largely unimpressive, but as with anything in computer science, the real joy is in the exploration. Behind the scenes, processing is actually redrawing all the shapes 120 times a second - and the animation is still playing flawlessly. With this small glimpse into the fundaentals of CGI technology, I was instantly invested in the sheer possibilities - specifically shaders for game desing and so on.",

      "This is a simple example of object modeling but the concept can be taken to much higher degrees. It all starts with simple matrices that we apply to primitive shapes to position them in 3D space. Eventually, the compositions can get fairly complex:",

      "image",

      "All the projects were built in processing using the python framework.",
    ],
    images: ["processing.jpg", "car.gif", "car_chase.gif"],
    demo_link: "/processing",
    source_link: "Link 1B",
  },

  {
    id: "prototyping",
    tag: "RFID Soundbox Moduldar Prototype",
    title: "The RFID Gramophone — An exploration in modular prototyping",
    content: [
      'The year was 2018 and my little sister had just walked up to me and stuck her phone in my face followed by a snarky remark: "Can you make this?" This was back when TikTok was still called Musically or something. What she had stumbled upon was a viral video of a computer engineering student showing off a prototype of a device that could play music  via rfid tags. That had been my ideal vision of computer science for years - integrating software and hardware - and that video never fled my mind!',

      'About 5 years later, I stumbled into a class called "Prototyping Intelligent Devices" and I quickly found the tools needed to make that idea a reality with my own two hands. At some point in the future there will be a video chronicaling the entire building process from start o finish but for now this article should do.',

      "Behold! The RFID Soundbox (I'm still workshopping the name)",

      "image",

      "Here is a bunch of technical jargon from my project proposal: The music player will be composed of the Teensy 4.1 board, an RFID module, capacitive touch module, 16-bit audio DAC, and external speakers. The RFID module will read the value on the NFC tag and send the corresponding value to the Teensy board. The Teensy will then retrieve the corresponding song from the SD card or web interface and play it via the audio DAC. In terms of controls, a capacitive touch sensor will handle play, pause, skip forward and skip backwards operations.",

      "There are a lot of music players so there is no groundbreaking achievement here. But this was a cool way to recreate the olden day gramophone with a modern twist. Plus, it was a chance to explore the idea of mdular design in a safe space.",
    ],
    images: ["prototyping.jpg", "processing_car.png"],
    demo_link: "",
    source_link: "Link 2B",
  },

  {
    id: "game_dev",
    tag: "Enemy AI in Unity3D",
    title: "Building smarter enemy archetypes in Unity3D",
    content: [
      "Up until recently, most of my game development projects have steered away from autonomous agents or enemy AI that operate on anything more that predetermined routes and actions. That is until I discovered the navmesh tool and the strikingly simple math behind complex movements.",

      "I won't bore you here with the details on navigation meshes - you can find more detailed documentation on the Unity3D website. What I will say is that they operated based on a baked mesh generated on the map and a familiar shortest path algorithm using ray casting on the 2D mesh. I was able to recognize the technique from my brief stint in the world of computer vision and path finding (more on that in another article).",

      "image",

      "This is the navigation mesh generated on a simple map in Unity. This is interesting and whatnot, but by itself, the navmesh is unimpressive.",

      "I want to draw your attention to the path interception algorithm that brings everything to life. Each character has a velocity reporter that track the velocity with respect to real world time. Using the velocity and direction of a player, an enemy character can predict the future position of that player and move to intercept instead of just following linearly.",

      "image",

      "I'm always intrigued by the humble beginnings of complex concepts. It's techniques like theses that formed the basis for making opposing gunmen in Call of Duty feel more believeable. Feel free to use the algorithm to make your enemies appear smarter.",
    ],
    images: ["game_dev.jpg", "game_dev_demo02.png", "game_dev_demo01.gif"],
    demo_link: "/game_dev",
    source_link: "Link 3B",
  },

  {
    id: "assembly",
    tag: "Working with FPGA boards and assembly code",
    title: "The wacky world of FPGA boards and assembly programming",
    content: [
      "An FPGA development board is an integrated circuit designed to be programmed after manufacturing. For those who have no idea what that means, FPGA boards are devices that allow you to connect different wires dynamically so you can tell the board to do different thing based on the flow of current - and it can do it really fast and efficiently. But before we got to the FPGA board, we started out builng these circuits using simple gates.",

      "image",

      "The logic for the breadboard circuit was a simple sum of products of logic gates. However, at some point the circuits got too complex to design by hand so we moved to using an application called Quartus prime (not to be confused with Optimus prime).",

      "image",

      "This final project was a combination of these FPGA boards and assembly language. It was my first time exploring the cryptic langauge and using code to affect hardware and I was thoroughly excited for the adventure.",

      "The objective was to turn the FPGA board into a peripheral to control a row of neopixels. The peripheral turned the row into a 2D array and then use the array to simulate an endless runner game written in VHDL. Additionally, the peripheral can resize the neopixel grid and shift a given coordinate in any direction. It was important to specify the formatting for input and outputs of the peripheral so that teammates building different parts of the project could work concurrently and with certainty regarding syntax and semantics.",

      "image",

      "P.S. this is a borrowed image. I couldn't find any recordings of the demo from class.",

      "There is an extensive explanation of the neopixel project on the github page as well as the vhd code for programming the board. Ultimately, this is an API to interact with the neopixels in a systematic way.",
    ],
    images: [
      "assembly.jpg",
      "breadboard.jpg",
      "schematic04.jpg",
      "neopixel.gif",
    ],
    demo_link: "/assembly",
    source_link: "Link 4B",
  },

  {
    id: "todo_list",
    tag: "Simple React-based Todo List App",
    title: "Homemade todo list (bon apetit)",
    content: [
      "React is genius. It's like a sweet blend of HTML and CSS and Javascript. So, I wanted to see how my first react project could showcase these capabilities. I decided to make a dynamic todo list but I think I bit off more than I could chew. The first hurdle was adding new items to the list on the fly. This was pretty straightforward after a got a handle on React's DOM and component-style approach.",

      "image",

      " Then, I had to add functionality to rearrange list items. The problem is that I would have to offset elements, handle mouse movements, set up triggers when list items overlapp and smoothly animate list items while performing bounds checking.",

      "image",

      "In hindsight, I was pushing react a bit too far. React by itself is limited when it comes to robust cross component state management. In the next iteration of this todo-list, I'll be using react redux for state management. It would also be better to move away from the class-based componenents and bulid the app using function-based components.",

      "All in all, I think this was an ingightful first expedition into the world of react. In more recent news, this website was built with react. With a better grasp of the react way of thinking, I'm moving on to integrating express and mongoDB to somplete my MERN stack skillset.",
    ],
    images: ["todo_list.jpg", "todo_list_demo01.gif", "todo_list_demo02.gif"],
    demo_link: "",
    source_link: "Link 4B",
  },

  {
    name: "about",
    title: "about me",
    content: [
      "Hi, I'm Courage - Georgia Tech Computer Science graduate, full-stack web developer, tech enthusiast, and occasional filmmaker. I take great pride in my unorthodox approach to life. I've grown less afraid to acknowledge my shortcomings as a programmer and I'm working everyday to be a better person, first and foremost. I encourage you to take a look at my body of work here on the website, as well as my github account and YouTube channel.",
      "(In case you're wondering, the picture on the left was from my first roll of film shot on a trip to Nigeria for christmas after 10 years in the US. It might not be 'professional' but it holds a special place in my heart)",
    ],
    images: [],
  },
];

export default local_data;
