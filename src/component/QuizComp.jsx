import React from "react";
import './quizStyle.css'
import { useState } from "react";

const QuizComp = () => {

    const questions = [
		{
			questionText: 'What is the capital of Pakistan?',
			answerOptions: [
				{ answerText: 'Karachi', isCorrect: false },
				{ answerText: 'Multan', isCorrect: false },
				{ answerText: 'Islamabad', isCorrect: true },
				{ answerText: 'Quetta', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};



	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length} 
					
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}





//     var Questionbank = [
//         {
//             Question: 'What is the capital of Pakistan?',
//             Answers: [
//                 { Answer: 'Karachi', isCorrect: false },
//                 { Answer: 'Lahore', isCorrect: false },
//                 { Answer: 'Islamabad', isCorrect: true },
//                 { Answer: 'Quetta', isCorrect: false },
//             ],
//         },
//         {
//             Question: 'Who is CEO of Tesla?',
//             Answers: [
//                 { Answer: 'Jeff Bezos', isCorrect: false },
//                 { Answer: 'Elon Musk', isCorrect: true },
//                 { Answer: 'Bill Gates', isCorrect: false },
//                 { Answer: 'Tony Stark', isCorrect: false },
//             ],
//         },
//         {
//             Question: 'The iPhone was created by which company?',
//             Answers: [
//                 { Answer: 'Apple', isCorrect: true },
//                 { Answer: 'Intel', isCorrect: false },
//                 { Answer: 'Amazon', isCorrect: false },
//                 { Answer: 'Microsoft', isCorrect: false },
//             ],
//         },
//         {
//             Question: 'How many Harry Potter books are there?',
//             Answers: [
//                 { Answer: '1', isCorrect: false },
//                 { Answer: '4', isCorrect: false },
//                 { Answer: '6', isCorrect: false },
//                 { Answer: '7', isCorrect: true },
//             ],
//         },
//     ];
    
//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [score, setScore] = useState(0);
//     const [showScore, setShowScore] = useState(false);

//     const handleAnswerResponse = (isCorrect) => {
//         if (isCorrect) {
//             setScore(score + 1);
//         }
//     }

//     const nextQuestion = currentQuestion+1;
//     if (nextQuestion<Questionbank.length) {
//         setCurrentQuestion(nextQuestion);
//     }
//     else {
//         setShowScore(true);
//     }


//     console.log(Questionbank);

//     return (
//         <div>
//             {showScore ? (
//                 <div>
//                     You have scored {score} out of {Questionbank.length}
//                 </div>
//             )
//                 : (
//                     <>
//                         <div>
//                             <div>

//                                 <span>{currentQuestion}</span>/{Questionbank.length}

//                             </div>
//                             <div>
//                                 {Questionbank[currentQuestion].Question}
//                             </div>
//                         </div>

//                         <div>
//                             {Questionbank[currentQuestion].Answers.map((answer) =>
//                             (

//                                 <button onClick={() => handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>

//                             ))}
//                         </div>
//                     </>
//                 )
//             }
//         </div>
//     );
// }

export default QuizComp;