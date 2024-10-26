const questions = [
    {
        question: "Are you ready?",
        options: [
            { text: "Yes 🥰", next: 1 },
            { text: "No 😢", next: "sadCat" },
            { text: "Kya Bakwaas Hai 🙄", next: "urduQuote" }
        ]
    },
    {
        question: "Do you want to spend time with me?",
        options: [
            { text: "Yes!! 🥳", next: 2 },
            { text: "No 😢", next: 7 }
        ]
    },
    {
        question: "Thank you I love you!!! Here's a list of things we can do:",
        options: [
            { text: "Have brunch/dinner/midnight snacks together 🥞", next: 3 }, // First option
            { text: "Watch scrubs 🩻", next: "callModal" }, // Opens modal for call
            { text: "Watch a movie 🍿", next: "callModal" }, // Opens modal for call
            { text: "Simp 😘", next: "callModal" }, // Opens modal for call
            { text: "Yap 🗣️", next: "callModal" }, // Opens modal for call
            { text: "Make plans for December ✈️", next: "callModal" }, // Opens modal for call
            { text: "Read a book together 😖", next: 21 }, // Opens modal for call
            { text: "All of the above (pick me) 🥰", next: "callModal" } // Opens modal for call
        ]
    },
    // Snack choice question
    {
        question: "OOO okay baby what do u wanna have?",
        options: [
            { text: "Pancakes 🥞", next: 4 },
            { text: "Chhole Kulche 🫘", next: 4 },
            { text: "Paneer Kulcha 🧀", next: 4 },
            { text: "___ Kulcha (latest fixation??) 🫓", next: 4 },
            { text: "Bun Omelette 🥯🍳", next: 4 },
            { text: "Something else 🤨", next: 13 }
        ]
    },
    {
        question: "Do u want chai or coffee with that my baby?",
        options: [
            { text: "Chai ☕️", next: 5 },
            { text: "Coffee ☕️", next: 6 },
            { text: "Neither", next: 12 }
        ]
    },
    {
        question: "Chai from where honey?",
        options: [
            { text: "Chaayos", next: 12 },
            { text: "Chai Point", next: 12 },
            { text: "Some other place ❓", next: 14 }
        ]
    },
    {
        question: "Coffee from where meri jaan?",
        options: [
            { text: "Blue Tokai", next: 12 },
            { text: "Blue Tokai (hehe)", next: 12 },
            { text: "Blue Tokai (hehehe)", next: 12 }
        ]
    },
    // Handle no response
    {
        question: "Are you still mad at me? 🙁",
        options: [
            { text: "Yes 🙁", next: 11 },
            { text: "No 🫂", next: 8 },
            { text: "A little 😕", next: 11 }
        ]
    },
    {
        question: "Okay my love. You don’t have to spend time with me baby but you can still have a nice weekend 🫂😘. Do you wanna stay in or go out jaana?",
        options: [
            { text: "Stay in 🏡", next: 9 },
            { text: "Go out 🚙", next: 10 }
        ]
    },
    // Options for staying in
    {
        question: "Here's a list of things you can do at home honey:",
        options: [
            { text: "Eat nice food 🥘", next: 3 },
            { text: "Relax", next: 15 },
            { text: "Study (with enough rest)", next: 15 },
            { text: "Watch Gilmore Girls 🍁", next: 15 }
        ]
    },
    // Options for going out
    {
        question: "OoOo where would you like to go baby?",
        options: [
            { text: "Blue Tokai ☕️", next: 16 },
            { text: "A nice meal 🥘", next: 17 },
            { text: "A full body massage 💆‍♀️", next: 18 },
            { text: "My arms 🫂", next: 20 }
        ]
    },
    // Placeholder question for continue flow
    {
        question: "Would you like to see a PPT on why you should not be mad at me?",
        options: [
            { text: "Yes 🤨", next: "pptModal" },
            { text: "No 🙄", next: 8 }
        ]
    },
    {
        question: "Okay baby!!! I'll order it for youuuu!!!",
        options: [
            { text: "Finish", next: "summary" }
        ]
    }, {
        question: "What else do you wanna eat jaana?",
        options: [
            { text: "", next: 12 }
        ],
        input: true
    },
    {
        question: "Ooo okay jaan where else?",
        options: [
            { text: "", next: 12 }
        ],
        input: true
    },
    {
        question: "Okay my love. I'll be here. I love you so much!! 😘😘😘😘 🫂🫂🫂🫂",
        options: [
            { text: "I love you", next: "summary" }
        ]
    },
    {
        question: "I'll get you a cab and coffee!! 😘😘😘😘",
        options: [
            { text: "Thank you I love you", next: "summary" }
        ]
    },
    {
        question: "I'll get you a list of options baby!! 😘😘😘😘",
        options: [
            { text: "Thank you I love you", next: "summary" }
        ]
    }, 
    {
        question: "Ooooo do you wanna go back to Roseate baby!! 😘😘😘😘",
        options: [
            { text: "Yes!!", next: 19 },
            { text: "Someplace else", next: 17 }
        ]
    },
    {
        question: "I'll reserve it honey!! 😘😘😘😘",
        options: [
            { text: "Thank you I love you", next: "summary" }
        ]
    },
    {
        question: "omw2hmb!! 🫂🫂🫂🫂🫂",
        options: [
            { text: "Thank you I love you", next: "summary" }
        ]
    },
    {
        question: "Fiiiine what do we wanna read baby? ",
        options: [
            { text: "Dante 🔥", next: 23 },
            { text: "Something else ❓", next: 22 },
        ]
    },
    {
        question: "What else do we wanna read jaana? ",
        options: [
            { text: "", next: 23 },
        ],
        input: true
    },
    {
        question: "ooo okay baby!!! we'll read!!! ",
        options: [
            { text: "Finish", next: "summary" }
        ]
    },

];

// Tracking user responses
const responses = [];
let currentQuestionIndex = 0;
const questionHistory = [];

function showQuestion(index) {
    const questionContainer = document.getElementById("question");
    const optionsContainer = document.getElementById("options");

    // Handle special cases for the first question options
    if (index === "sadCat") {
        showSadCatPopup();
        return;
    } else if (index === "urduQuote") {
        showUrduQuote();
        return;
    } else  if (index === "callModal") {
        showCallModal(); // Open the call modal
        return; // Exit to prevent showing a question
    } else if (index === "summary") {
        showSummary();
        return;
    } else if (index === "pptModal") {
        showPptModal();
        return;
    }

    if (index > 0) {
        document.getElementById("start-over-btn").classList.remove("hidden");
    } else {
        document.getElementById("start-over-btn").classList.add("hidden");
    }

    const question = questions[index];

    // Add current question to history unless it's the first question
    if (index !== 0) {
        questionHistory.push(currentQuestionIndex);
    }

    // Remove existing animations
    if (questionContainer.classList.contains("fade-in", "fade-out")) {
        questionContainer.classList.remove("fade-in", "fade-out");
    }
    

    // Add fade-out animation, then update content after it finishes
    questionContainer.classList.add("fade-out");

    setTimeout(() => {
        // Update question text and clear previous options
        optionsContainer.innerHTML = '';

         if (question.input) {
            questionContainer.innerHTML = question.question; // Display the question text
            const inputField = document.createElement("input");
            inputField.type = "text";
            inputField.placeholder = "Type your answer here...";
            inputField.classList.add("text-input");
            optionsContainer.appendChild(inputField); // Add the input field

            // Create a submit button
            const submitButton = document.createElement("button");
            submitButton.innerText = "Submit";
            submitButton.classList.add("option");
            submitButton.onclick = () => {
                const answer = inputField.value;
                // Store the answer (assuming a global responses array exists)
                responses.push({ question: question.question, answer });
                showQuestion(question.options[0].next); // Move to the next question
            };
            optionsContainer.appendChild(submitButton); // Add the submit button
        } else {
            // Update question text if it’s not an input question
            questionContainer.innerText = question.question;

            // Generate new options
            question.options.forEach((option) => {
                const button = document.createElement("button");
                button.innerText = option.text;
                button.classList.add("option");
                button.onclick = () => {
                    if (typeof option.next === "number") {
                        currentQuestionIndex = option.next;
                        showQuestion(currentQuestionIndex);
                        responses.push({ question: question.question, answer: option.text });
                    } else {
                        showQuestion(option.next); // Handle special cases
                    }
                };
                optionsContainer.appendChild(button);
            });
        }

        // Switch to fade-in animation for the new content
        questionContainer.classList.remove("fade-out");
        questionContainer.classList.add("fade-in");

    }, 500); // 500ms to match fade-out duration
}

// Function to display a full-screen summary with only the summary and "Start Over" button
function showSummary() {
    const questionContainer = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    const startOverButton = document.getElementById("start-over-btn");
    
    // Hide or clear question and options elements
    questionContainer.innerHTML = ''; // Clear the question
    optionsContainer.innerHTML = ''; // Clear the options

    // Create a new summary section
    const summarySection = document.createElement("div");
    summarySection.classList.add("summary-section");
    summarySection.innerHTML = "<h2>Your Quiz Summary</h2>";

    // Append each question and selected answer to the summary
    responses.forEach((response) => {
        const item = document.createElement("p");
        item.innerHTML = `<strong>Question:</strong> ${response.question} <br><strong>Your Answer:</strong> ${response.answer}`;
        summarySection.appendChild(item);
    });

    const restartButton = document.createElement("button");
    restartButton.innerText = "Start Over";
    restartButton.id = "start-over-btn"; // Set the same ID as the original button
    restartButton.classList.add("start-over-btn"); // Use the same class as the original button
    restartButton.onclick = () => {
        responses.length = 0; // Clear responses
        currentQuestionIndex = 0;
        summarySection.innerHTML = '';
        showQuestion(currentQuestionIndex); // Restart the quiz from the beginning
    };

    summarySection.appendChild(restartButton);
    container.appendChild(summarySection); // Display summary section in the main container
}

function showSadCatPopup() {
    const modal = document.getElementById("sadCatModal");
    modal.classList.remove("hidden"); // Show the modal
}

// Close modal functionality
document.getElementById("close-modal-btn").onclick = function() {
    const modal = document.getElementById("sadCatModal");
    modal.classList.add("hidden"); // Hide the modal
    // Show the initial question again
    currentQuestionIndex = 0; 
    questionHistory.length = 0; // Clear history to start fresh
    showQuestion(currentQuestionIndex);
};

function showUrduQuote() {
    const urduText = "Yun toh humein fizool ki baatein karne ka shauq nahi, magar tumse dil-lagi kya kee; mann kehta hai ke aankhon, labon, zubaan aur dil se tumhari meri baatein chalti rahein.";
    
    const questionContainer = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = '';

    // Split text into words, wrap each word with a <span> for animation
    questionContainer.innerHTML = urduText
        .split(" ")
        .map((word, index) => `<span class="animated-word" style="animation-delay: ${index * 0.1}s;">${word}</span>`)
        .join(" ") + 
        '<br><br><span class="author">- Varun Chopra, 2024</span>';
    
    // Add a continue button
    const continueButton = document.createElement("button");
    continueButton.innerText = "Continue";
    continueButton.classList.add("option");
    continueButton.onclick = () => showQuestion(0); // Return to the first question
    optionsContainer.appendChild(continueButton);
}

// Start Over functionality
document.getElementById("start-over-btn").onclick = function() {
    currentQuestionIndex = 0; 
    showQuestion(currentQuestionIndex);
};

// Function to show the call modal
function showCallModal() {
    const modal = document.getElementById("callModal");
    modal.classList.remove("hidden"); // Show the modal
}

// Close modal functionality
document.getElementById("close-modal-call-btn").onclick = function() {
    const modal = document.getElementById("callModal");
    modal.classList.add("hidden"); // Hide the modal
    showQuestion(currentQuestionIndex);
};

// Function to show the PowerPoint link modal
function showPptModal() {
    const modal = document.getElementById("pptModal");
    modal.classList.remove("hidden"); // Show the modal
}

// Close modal functionality
document.getElementById("close-modal-ppt-btn").onclick = function() {
    const modal = document.getElementById("pptModal");
    modal.classList.add("hidden"); // Hide the modal
};

// Initial question display
showQuestion(currentQuestionIndex);