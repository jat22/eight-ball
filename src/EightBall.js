import { useState } from "react";
import './EightBall.css';

const EightBall = ({ answers }) => {
	const [answer, setAnswer] = useState(	{msg: "Think of a question.", color: "black"})
	const randAns = () => answers[Math.floor(Math.random() * answers.length)];

	const changeAnswer= () => {
		setAnswer(randAns);
		
	}

	return(
		<div className="eightball-container">
			<div className={`eightball-ball ${answer.color}`} onClick={changeAnswer}>
				<div className="eightball-text">{answer.msg}</div>
			</div>
		</div>
	)
}

export default EightBall;
