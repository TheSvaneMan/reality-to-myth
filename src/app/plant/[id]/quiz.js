'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const MythicalStoryQuestion = () => {
	const [selectedOption, setSelectedOption] = useState(null);
	const [isCorrect, setIsCorrect] = useState(null);

	const handleOptionSelect = (option) => {
		setSelectedOption(option);
		// Check if the selected option is correct
		const correctOption = 'C. Flora';
		if (option === correctOption) {
			setIsCorrect(true);
		} else {
			setIsCorrect(false);
		}
	};

	const options = ['A. Lyra', 'B. Ignis', 'C. Flora', 'D. Arbutus'];

	return (
		<div className='p-4 grid grid-cols-1 gap-8'>
			<div>
				<span className='font-bold'>
					Question:
				</span>
				<h3 className='italic'>Who did the villagers believe blessed their land with the Strawberry Tree?</h3>
			</div>
			<ul className='grid grid-cols-1 gap-2 mb-8'>
				{options.map((option, index) => (
					<li key={index}

						onClick={() => handleOptionSelect(option)}
						className={selectedOption === option ? 'bg-orange-600 border mflex items-center text-white px-4 py-2 rounded-md' : 'border-orange-600 border flex items-center text-orange-600 px-4 py-2 rounded-md' }>
						<label>
							<input
								type="radio"
								value={option}
								onChange={() => handleOptionSelect(option)}
								checked={selectedOption === option}
							/>
							<span className='ml-8'>
								{option}
							</span>

						</label>
					</li>
				))}
			</ul>
			{isCorrect !== null && (
				<div className='grid grid-cols-1 gap-4'>
					<div className={isCorrect ? 'border border-[#355835] p-4 rounded-md' : 'border border-red-400 p-4 rounded-md' }>

						<p className={isCorrect ? 'text-[#355835]' : 'text-red-400'}>
							{isCorrect ? 'That is correct! Flora blessed their land with the Strawberry Tree.' : 'Sorry, that is incorrect. Try again!'}
						</p>

					</div>
					{
						isCorrect && <div className='flex items-center bg-[#355835] text-white p-4 rounded-md '>
							<span>
								You have been awarded a key!
							</span>
							<Image
								src="/images/quiz/cute-key.jpg"
								className='rounded-full ml-4'
								width={40}
								height={80}
								priority
								alt="Image of a cute key you unlocked"
							/>

						</div>
					}
				</div>
			)}
		</div>
	);
};

export default MythicalStoryQuestion;