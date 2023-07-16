function getBotResponse(input) {


    // Simple responses
    
        if (input === "hello") {
          return "Hello there! How can I help you?";
        } else if (input === "goodbye") {
          return "Talk to you later!";
        } else if (input === "hi") {
          return "Hello there! How can I help you?";
        } else if (input === "how many courses do you provide") {
          return "Career Corps provides courses in the following fields:<br>1. Full Stack Web Developer<br>2. Blockchain Developer<br>3. UI/UX Designer<br>4. Human Resources";
        } else if (input === "what is the eligibility for internships") {
          return "The eligibility criteria for internships may vary depending on the specific role and program. Generally, we consider candidates with relevant educational background and skills. Please visit our website or contact us for more details.";
        } else if (input === "how do I apply for internships") {
          return "To apply for internships, please visit our website and navigate to the 'Internships' section. There, you will find details about the available internships and the application process.";
        } else if (input === "what are the benefits of taking the blockchain course") {
          return "Our blockchain course offers hands-on experience in blockchain development, smart contracts, and decentralized applications. By taking this course, you can gain valuable skills and knowledge to excel in the blockchain industry and explore career opportunities in this cutting-edge technology field.";
        } else if (input === "what does the full stack web developer course cover") {
          return "The full stack web developer course covers a comprehensive range of web development technologies, including front-end technologies like HTML, CSS, and JavaScript, as well as back-end technologies like Node.js, Express, and databases. You will learn to build complete web applications from scratch.";
        } else if (input === "Are internships online") {
          return "Yes, we do offer online internships. We understand the importance of flexibility and provide online internship opportunities to accommodate candidates from different locations.";
        } else if (input === "when does the UI/UX Designer course start") {
          return "The start date for the UI/UX Designer course may vary based on the upcoming batch schedule. Please check our website or contact us for the next available course start date.";
        } else if (input === "what is the duration of the human resources course") {
          return "The duration of the human resources course is typically 3 months. During this period, you will cover various HR topics and gain practical insights into the HR industry.";
        } else if (input === "who are you"){
            return "I am here to help you."
        }
         else {
          return "Try asking something else!";
        }
      }
      
