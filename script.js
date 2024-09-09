const quizData = [
    { question: "1. Who is considered the father of psychology?", a: "Sigmund Freud", b: "Ivan Pavlov", c: "Wilhelm Wundt", d: "B.F. Skinner", correct: "c" },
    { question: "2. What is psychology originally known as?", a: "Study of the mind", b: "Study of behavior", c: "Study of consciousness", d: "Study of the soul", correct: "d" },
    { question: "3. In which year did Wilhelm Wundt establish the first psychology laboratory?", a: "1900", b: "1890", c: "1879", d: "1885", correct: "c" },
    { question: "4. What does the term 'psychology' mean in Greek?", a: "Mind and study", b: "Brain and behavior", c: "Soul and science", d: "Consciousness and process", correct: "c" },
    { question: "5. Which psychologist is associated with psychoanalysis?", a: "Carl Rogers", b: "Wilhelm Wundt", c: "Sigmund Freud", d: "Abraham Maslow", correct: "c" },
    { question: "6. What is the 'id' driven by?", a: "Reality principle", b: "Pleasure principle", c: "Morality principle", d: "Cognitive principle", correct: "b" },
    { question: "7. What is telepathy?", a: "Ability to move objects", b: "Communicating mind-to-mind", c: "Predicting future events", d: "Accessing distant information", correct: "b" },
    { question: "8. What does the term 'psychokinesis' refer to?", a: "Movement of the body", b: "Mental manipulation of objects", c: "Mind reading", d: "Precognition", correct: "b" },
    { question: "9. The Oedipus Complex is associated with which stage?", a: "Oral", b: "Anal", c: "Phallic", d: "Genital", correct: "c" },
    { question: "10. What does Freud mean by fixation?", a: "Continuous growth", b: "Failure to progress past a stage", c: "Personality development", d: "Resolution of conflicts", correct: "b" },
    { question: "11. Which need is at the bottom of Maslow’s Hierarchy of Needs?", a: "Esteem needs", b: "Love and belonging", c: "Physiological needs", d: "Self-actualization", correct: "c" },
    { question: "12. What is self-actualization according to Maslow?", a: "Attaining power and control", b: "Reaching one's full potential", c: "Acquiring social recognition", d: "Developing intimate relationships", correct: "b" },
    { question: "13. Who proposed the hierarchy of needs?", a: "Carl Rogers", b: "Abraham Maslow", c: "Sigmund Freud", d: "Ivan Pavlov", correct: "b" },
    { question: "14. In classical conditioning, what is the unconditioned response (UCR)?", a: "A learned response", b: "A response that is automatically triggered", c: "A conditioned behavior", d: "A response after learning", correct: "b" },
    { question: "15. What is positive reinforcement?", a: "Increasing behavior by introducing a reward", b: "Decreasing behavior by introducing a punishment", c: "Increasing behavior by removing an aversive stimulus", d: "Decreasing behavior by withholding a reward", correct: "a" },
    { question: "16. Who is the founder of operant conditioning?", a: "Sigmund Freud", b: "Ivan Pavlov", c: "B.F. Skinner", d: "Carl Rogers", correct: "c" },
    { question: "17. Which sense is considered the most primitive?", a: "Taste", b: "Smell", c: "Vision", d: "Touch", correct: "b" },
    { question: "18. What part of the brain is primarily responsible for vision?", a: "Temporal lobe", b: "Occipital lobe", c: "Frontal lobe", d: "Parietal lobe", correct: "b" },
    { question: "19. What is the function of taste buds?", a: "Distinguishing sounds", b: "Detecting chemical substances in food", c: "Perceiving textures", d: "Identifying visual stimuli", correct: "b" },
    { question: "20. The law of proximity refers to which of the following?", a: "Grouping objects based on similarity", b: "Grouping objects that are close together", c: "Recognizing patterns", d: "Detecting differences in stimuli", correct: "b" },
    { question: "21. What does the law of closure state?", a: "Objects close together are perceived as a group", b: "We perceive incomplete figures as complete", c: "Objects similar in shape are grouped together", d: "Perception is based on past experiences", correct: "b" },
    { question: "22. What does the principle of similarity imply in perception?", a: "Objects that move together are grouped", b: "Objects that are similar are grouped", c: "Objects that are far apart are grouped", d: "Dissimilar objects form a pattern", correct: "b" },
    { question: "23. Which part of the brain is responsible for processing auditory information?", a: "Occipital lobe", b: "Temporal lobe", c: "Parietal lobe", d: "Frontal lobe", correct: "b" },
    { question: "24. What is the term for the ability to perceive depth using one eye?", a: "Binocular vision", b: "Monocular cues", c: "Retinal disparity", d: "Visual acuity", correct: "b" },
    { question: "25. Who is associated with Gestalt psychology?", a: "Sigmund Freud", b: "B.F. Skinner", c: "Max Wertheimer", d: "Carl Rogers", correct: "c" },
    { question: "26. What is the primary purpose of perception?", a: "To sense objects", b: "To organize sensory input into meaningful patterns", c: "To activate reflexes", d: "To gather information without interpretation", correct: "b" },
    { question: "27. What does the term 'binocular disparity' refer to?", a: "The difference in the image each eye sees", b: "The convergence of two visual fields", c: "The sharpening of focus", d: "Depth perception from one eye", correct: "a" },
    { question: "28. The moon illusion refers to which phenomenon?", a: "The moon appears larger near the horizon", b: "The moon changes color during lunar eclipses", c: "The moon appears smaller than it is", d: "The moon's size remains constant in the sky", correct: "a" },
    { question: "29. What is stroboscopic motion?", a: "Real motion created by moving objects", b: "Apparent motion created by flashing lights", c: "Movement perceived through vibrations", d: "Continuous motion from static images", correct: "b" },
    { question: "30. What is the function of the 'blind spot' in the eye?", a: "It has enhanced vision", b: "It allows for depth perception", c: "It has no photoreceptors and does not detect light", d: "It enhances color perception", correct: "c" },
    // The rest of the questions follow the same format as above up to 100.
    { question: "31. What is the process of sensation?", a: "Interpreting sensory information", b: "Transmitting environmental information to the brain", c: "Perceiving stimuli from the environment", d: "Forming thoughts and beliefs", correct: "b" },
    { question: "32. What is perception?", a: "The process of receiving sensory input", b: "Recognizing and interpreting sensory stimuli", c: "Responding to environmental changes", d: "Monitoring changes in body temperature", correct: "b" },
    { question: "33. The blind spot in the eye occurs because:", a: "There are no photoreceptor cells at the optic nerve", b: "The lens is improperly shaped", c: "The retina fails to detect light", d: "It is covered by the cornea", correct: "a" },
    { question: "34. What is the law of figure-ground in Gestalt psychology?", a: "Objects closer together are perceived as a group", b: "We tend to focus on a central figure while everything else becomes background", c: "Similar objects are grouped together", d: "Perception is based on past experiences", correct: "b" },
    { question: "35. What does the term \"retinal disparity\" help with?", a: "Visual acuity", b: "Depth perception", c: "Color perception", d: "Hearing", correct: "b" },
    { question: "36. The law of similarity states:", a: "Objects that are similar are grouped together", b: "Objects that are close together are grouped", c: "The mind completes incomplete shapes", d: "The brain interprets motion", correct: "a" },
    { question: "37. What is the Gestalt principle of continuity?", a: "We perceive objects that are moving together as one", b: "We perceive patterns as continuous rather than disrupted", c: "We see incomplete figures as complete", d: "We group objects by their proximity", correct: "b" },
    { question: "38. What does operant conditioning rely on?", a: "Rewards and punishments", b: "Reflexes", c: "Unconscious thoughts", d: "Memory processes", correct: "a" },
    { question: "39. According to B.F. Skinner, what increases the likelihood of a behavior?", a: "Punishment", b: "Negative reinforcement", c: "Positive reinforcement", d: "Suppression", correct: "c" },
    { question: "40. What kind of reinforcement involves removing an aversive stimulus?", a: "Positive reinforcement", b: "Negative reinforcement", c: "Punishment", d: "Conditioning", correct: "b" },
    { question: "41. Which scientist is known for the theory of classical conditioning?", a: "Sigmund Freud", b: "Carl Rogers", c: "Ivan Pavlov", d: "B.F. Skinner", correct: "c" },
    { question: "42. What is the unconditioned stimulus in Pavlov's experiment with dogs?", a: "The bell", b: "The dog", c: "The food", d: "The salivation", correct: "c" },
    { question: "43. In Pavlov's experiment, what was the conditioned stimulus?", a: "The food", b: "The salivation", c: "The bell", d: "The dog", correct: "c" },
    { question: "44. The term \"latent learning\" was introduced by which psychologist?", a: "Edward Tolman", b: "Carl Rogers", c: "John Watson", d: "B.F. Skinner", correct: "a" },
    { question: "45. What did Edward Tolman's experiments with rats show?", a: "Learning occurs without immediate rewards", b: "Learning requires reinforcement", c: "Animals do not form cognitive maps", d: "Only punishment works in operant conditioning", correct: "a" },
    { question: "46. What is the \"zone of proximal development\" (ZPD) in Vygotsky's theory?", a: "What a learner can do independently", b: "The distance between actual development and potential development with guidance", c: "The phase where learning is impossible", d: "The gap between childhood and adulthood", correct: "b" },
    { question: "47. Who is associated with the development of cognitive psychology?", a: "B.F. Skinner", b: "Sigmund Freud", c: "Jean Piaget", d: "Wilhelm Wundt", correct: "c" },
    { question: "48. What stage is NOT part of Piaget's cognitive development theory?", a: "Sensorimotor", b: "Preoperational", c: "Formal operational", d: "Operant conditioning", correct: "d" },
    { question: "49. What is the final stage in Piaget's theory of cognitive development?", a: "Preoperational", b: "Formal operational", c: "Sensorimotor", d: "Concrete operational", correct: "b" },
    { question: "50. What term did Piaget use to refer to children's ability to understand that objects continue to exist even when they are not seen?", a: "Object permanence", b: "Symbolic function", c: "Conservation", d: "Egocentrism", correct: "a" },
    { question: "51. In classical conditioning, what is the term for a learned response?", a: "Unconditioned response", b: "Conditioned response", c: "Spontaneous response", d: "Reflex", correct: "b" },
    { question: "52. What is psychokinesis?", a: "Mind-to-mind communication", b: "Moving objects with the mind", c: "Predicting the future", d: "Reading someone's thoughts", correct: "b" },
    { question: "53. Which theory emphasizes the importance of personal growth and self-actualization?", a: "Behaviorism", b: "Psychoanalysis", c: "Humanism", d: "Cognitive theory", correct: "c" },
    { question: "54. Who is known for the theory of self-actualization?", a: "Sigmund Freud", b: "B.F. Skinner", c: "Abraham Maslow", d: "Carl Jung", correct: "c" },
    { question: "55. What is Maslow's highest need in his hierarchy?", a: "Esteem", b: "Love and belonging", c: "Physiological needs", d: "Self-actualization", correct: "d" },
    { question: "56. What does the concept of \"perceptual constancy\" refer to?", a: "Seeing an object as changing despite different angles", b: "Recognizing that objects do not change size, shape, or color despite changes in perspective", c: "Failing to notice changes in the environment", d: "The process of organizing sensory information", correct: "b" },
    { question: "57. What is the \"phi phenomenon\"?", a: "Seeing movement in stationary images", b: "The perception of color", c: "Grouping similar objects together", d: "Recognizing patterns in the dark", correct: "a" },
    { question: "58. What does the term \"Gestalt\" mean?", a: "Part of the whole", b: "Organized whole", c: "Fragmented perception", d: "Theory of cognition", correct: "b" },
    { question: "59. The experiment involving a visual cliff is designed to test what?", a: "Depth perception in infants", b: "Sound perception", c: "Color recognition", d: "Memory in animals", correct: "a" },
    { question: "60. What is the main purpose of classical conditioning?", a: "To associate a voluntary behavior with a consequence", b: "To link two stimuli to elicit a natural response", c: "To shape a child's behavior", d: "To punish undesired actions", correct: "b" },
    { question: "61. What is the term for the reflexive response in classical conditioning?", a: "Conditioned stimulus", b: "Conditioned response", c: "Unconditioned stimulus", d: "Unconditioned response", correct: "d" },
    { question: "62. Which psychologist is known for the concept of the unconscious mind?", a: "B.F. Skinner", b: "Ivan Pavlov", c: "Sigmund Freud", d: "Abraham Maslow", correct: "c" },
    { question: "63. What is the \"electra complex\" in Freud's theory?", a: "A girl's desire for her mother", b: "A girl's unconscious desire for her father", c: "A boy's rivalry with his father", d: "The final stage of psychosexual development", correct: "b" },
    { question: "64. The Gestalt law of proximity states:", a: "We group objects that are similar in size", b: "We see objects in their simplest form", c: "We group objects that are close together", d: "We focus on the figure and ignore the background", correct: "c" },
    { question: "65. According to Freud, the ego operates on which principle?", a: "Pleasure principle", b: "Reality principle", c: "Morality principle", d: "Unconscious principle", correct: "b" },
    { question: "66. What stage comes after the anal stage in Freud's psychosexual stages of development?", a: "Oral stage", b: "Phallic stage", c: "Latency stage", d: "Genital stage", correct: "b" },
    { question: "67. The principle of reinforcement is central to which theory?", a: "Psychoanalysis", b: "Behaviorism", c: "Humanism", d: "Cognitive theory", correct: "b" },
    { question: "68. Who proposed the theory of observational learning?", a: "Sigmund Freud", b: "Carl Rogers", c: "Albert Bandura", d: "B.F. Skinner", correct: "c" },
    { question: "69. What is observational learning?", a: "Learning through reinforcement", b: "Learning by watching others", c: "Learning through classical conditioning", d: "Learning by punishment", correct: "b" },
    { question: "70. What is the term for the ability to recognize and interpret stimuli?", a: "Sensation", b: "Perception", c: "Cognitive bias", d: "Attention", correct: "b" },
    { question: "71. The \"law of good figure\" is also known as:", a: "Law of similarity", b: "Law of pragnanz", c: "Law of proximity", d: "Law of continuity", correct: "b" },
    { question: "72. What does the term \"unconditioned stimulus\" refer to in classical conditioning?", a: "A stimulus that triggers a learned response", b: "A stimulus that naturally and automatically triggers a response", c: "A previously neutral stimulus that causes a learned response", d: "A stimulus associated with reinforcement", correct: "b" },
    { question: "73. Which scientist conducted the famous \"Little Albert\" experiment?", a: "Sigmund Freud", b: "B.F. Skinner", c: "John Watson", d: "Edward Thorndike", correct: "c" },
    { question: "74. What was the outcome of the \"Little Albert\" experiment?", a: "Albert developed a fear of rats", b: "Albert learned to discriminate between stimuli", c: "Albert overcame his fear of animals", d: "Albert developed a fear of loud noises", correct: "a" },
    { question: "75. What is \"classical conditioning\" primarily concerned with?", a: "Behavior modification through rewards", b: "Associating stimuli to elicit a natural response", c: "Cognitive problem solving", d: "Developing personality traits", correct: "b" },
    { question: "76. Which need must be satisfied before all other needs according to Maslow's hierarchy?", a: "Safety needs", b: "Esteem needs", c: "Love and belonging", d: "Physiological needs", correct: "d" },
    { question: "77. What is Gestalt psychology mainly concerned with?", a: "Individual parts of perception", b: "The whole is greater than the sum of its parts", c: "Subconscious desires", d: "Behavioral responses", correct: "b" },
    { question: "78. What does the law of continuity state in Gestalt psychology?", a: "Objects are grouped if they are similar", b: "Objects are seen as part of a continuous pattern", c: "Objects are perceived based on size", d: "Objects are grouped if they are close together", correct: "b" },
    { question: "79. Who is known for his work on memory and the \"forgetting curve\"?", a: "Carl Jung", b: "Hermann Ebbinghaus", c: "William James", d: "B.F. Skinner", correct: "b" },
    { question: "80. What is cognitive dissonance?", a: "Discomfort caused by holding conflicting beliefs", b: "Mental clarity after learning new information", c: "Learning by association", d: "A sudden insight into a problem", correct: "a" },
    { question: "81. Which term refers to the ability to recognize stimuli despite changes in distance, lighting, or angle?", a: "Perceptual bias", b: "Sensory adaptation", c: "Perceptual constancy", d: "Cognitive adjustment", correct: "c" },
    { question: "82. What is the ability to perceive the world in three dimensions called?", a: "Depth perception", b: "Motion perception", c: "Binocular vision", d: "Size constancy", correct: "a" },
    { question: "83. Which term refers to the change in responsiveness of sensory receptors after continuous stimulation?", a: "Perceptual constancy", b: "Sensory adaptation", c: "Gestalt perception", d: "Conditioned response", correct: "b" },
    { question: "84. Which psychological perspective focuses on observable behavior rather than internal processes?", a: "Psychoanalysis", b: "Humanism", c: "Behaviorism", d: "Cognitive psychology", correct: "c" },
    { question: "85. Who proposed the idea of \"schemas\" to explain how we organize and interpret information?", a: "Sigmund Freud", b: "Jean Piaget", c: "Carl Jung", d: "Wilhelm Wundt", correct: "b" },
    { question: "86. What is the process of interpreting new experiences in terms of existing schemas called?", a: "Accommodation", b: "Adaptation", c: "Assimilation", d: "Fixation", correct: "c" },
    { question: "87. According to Piaget, what term describes the modification of a schema to incorporate new information?", a: "Accommodation", b: "Assimilation", c: "Adaptation", d: "Habituation", correct: "a" },
    { question: "88. Who developed the theory of cognitive development that includes stages such as sensorimotor and formal operational?", a: "Sigmund Freud", b: "Erik Erikson", c: "B.F. Skinner", d: "Jean Piaget", correct: "d" },
    { question: "89. The law of closure in Gestalt psychology suggests that:", a: "We perceive objects as whole even when incomplete", b: "We group objects that are similar", c: "We perceive objects that are close together as a group", d: "We perceive motion in stationary objects", correct: "a" },
    { question: "90. Who conducted the \"Bobo doll\" experiment to study observational learning?", a: "Ivan Pavlov", b: "Albert Bandura", c: "B.F. Skinner", d: "John Watson", correct: "b" },
    { question: "91. In Gestalt psychology, the law of common fate suggests:", a: "We group objects that move together", b: "We perceive objects based on their proximity", c: "We recognize incomplete objects as whole", d: "We perceive objects in the simplest form", correct: "a" },
    { question: "92. The auditory system is responsible for processing which type of stimuli?", a: "Visual stimuli", b: "Sound stimuli", c: "Tactile stimuli", d: "Chemical stimuli", correct: "b" },
    { question: "93. What is the process of converting physical energy, such as light or sound waves, into neural signals?", a: "Transduction", b: "Sensory adaptation", c: "Perception", d: "Attention", correct: "a" },
    { question: "94. Which of the following is NOT one of the five primary sensory systems?", a: "Vision", b: "Hearing", c: "Taste", d: "Equilibrium", correct: "d" },
    { question: "95. Which Gestalt principle explains why we see a continuous path instead of separate segments?", a: "Proximity", b: "Similarity", c: "Continuity", d: "Closure", correct: "c" },
    { question: "96. The term \"kinesthetic sense\" refers to:", a: "The ability to perceive depth", b: "The sense of body movement and position", c: "The sense of taste and smell combined", d: "The ability to detect sound waves", correct: "b" },
    { question: "97. What is the term for a mental \"shortcut\" that allows people to solve problems quickly and efficiently?", a: "Algorithm", b: "Heuristic", c: "Schema", d: "Insight", correct: "b" },
    { question: "98. Which psychologist introduced the concept of the \"collective unconscious\"?", a: "Carl Jung", b: "Sigmund Freud", c: "Alfred Adler", d: "Wilhelm Wundt", correct: "a" },
    { question: "99. What does the term \"top-down processing\" refer to in perception?", a: "Processing that relies on sensory input alone", b: "Processing that is driven by higher-level cognition and experience", c: "Processing that occurs automatically", d: "Processing that is purely reflexive", correct: "b" },
    { question: "100. What is the function of the cochlea in the ear?", a: "To detect changes in balance", b: "To amplify sound waves", c: "To convert sound waves into neural signals", d: "To transmit sound waves to the auditory cortex", correct: "c" },
];

// Shuffle the quiz data for random order

quizData.sort(() => Math.random() - 0.5);

// Function to render the quiz
const quiz = document.getElementById('quiz');
let score = 0;
let answeredQuestions = 0;

function loadQuiz() {
    quizData.forEach((data, index) => {
        const quizBlock = document.createElement('div');
        quizBlock.classList.add('question');

        // Create the question
        const questionText = document.createElement('p');
        questionText.innerText = `${index + 1}. ${data.question}`;
        quizBlock.appendChild(questionText);

        // Create answer options
        ['a', 'b', 'c', 'd'].forEach(option => {
            const label = document.createElement('label');
            label.innerHTML = `
                <input type="radio" name="q${index}" value="${option}" data-correct="${data.correct}">
                ${data[option]}
            `;
            quizBlock.appendChild(label);
        });

        quiz.appendChild(quizBlock);
    });

    // Add event listeners to all radio buttons
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', function() {
            checkAnswer(this);
        });
    });
}

// Function to check if the answer is correct
function checkAnswer(selectedRadio) {
    const questionBlock = selectedRadio.closest('.question');
    const allOptions = questionBlock.querySelectorAll('input[type="radio"]');
    const correctAnswer = selectedRadio.dataset.correct;

    // Disable all options for this question
    allOptions.forEach(option => {
        option.disabled = true;
        option.parentElement.classList.remove('correct', 'wrong');
    });

    // Mark the selected answer
    if (selectedRadio.value === correctAnswer) {
        selectedRadio.parentElement.classList.add('correct');
        score++;
    } else {
        selectedRadio.parentElement.classList.add('wrong');
    }

    // Always show the correct answer in green
    allOptions.forEach(option => {
        if (option.value === correctAnswer) {
            option.parentElement.classList.add('correct');
        }
    });

    answeredQuestions++;
    updateScore();
}

// Update score display
function updateScore() {
    const scoreDisplay = document.getElementById('score');
    scoreDisplay.innerHTML = `Your current score is: ${score}/${answeredQuestions} (Total questions: ${quizData.length})`;
}

// Load the quiz on page load
loadQuiz();



/*
quizData.sort(() => Math.random() - 0.5);

// Function to render the quiz
const quiz = document.getElementById('quiz');
let score = 0;

function loadQuiz() {
    quizData.forEach((data, index) => {
        const quizBlock = document.createElement('div');
        quizBlock.classList.add('question');

        // Create the question
        const questionText = document.createElement('p');
        questionText.innerText = `${index + 1}. ${data.question}`;
        quizBlock.appendChild(questionText);

        // Create answer options
        ['a', 'b', 'c', 'd'].forEach(option => {
            const label = document.createElement('label');
            label.innerHTML = `
                <input type="radio" name="q${index}" value="${option}" onclick="checkAnswer('${option}', '${data.correct}', this)">
                ${data[option]}
            `;
            quizBlock.appendChild(label);
        });

        quiz.appendChild(quizBlock);
    });
}

// Function to check if the answer is correct
function checkAnswer(selected, correct, element) {
    if (selected === correct) {
        element.parentElement.classList.add('correct');
        element.parentElement.classList.remove('wrong');
        score++;
    } else {
        element.parentElement.classList.add('wrong');
        element.parentElement.classList.remove('correct');
    }
    updateScore();
}

// Update score display
function updateScore() {
    const scoreDisplay = document.getElementById('score');
    scoreDisplay.innerHTML = `Your current score is: ${score}/${quizData.length}`;
}

// Load the quiz on page load
loadQuiz();

*/
