import React from 'react';
import HighlightText from './HighlightText';
import knowYourProgress from '../../../assets/Images/Know_your_progress.svg'
import compareWithOthers from '../../../assets/Images/Compare_with_others.svg'
import planYourLesson from '../../../assets/Images/Plan_your_lessons.svg'
import CTAButton from '../HomePage/Button'

const LearningLanguageSection = () => {
    return (
        <div className='mt-[130px]'>
            <div className='flex flex-col gap-5 items-center mb-10'>

                <div className='text-4xl font-semibold text-center'>
                    Your Swiss Knife for
                    <HighlightText text={"learing any language !!"} />
                </div>

                <div className='text-center text-richblack-600  mx-auto text-base font-medium w-[70%]'>
                    Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
                </div>

                <div className='flex flex-row items-center justify-center mt-5 '>
                    <img
                        src={knowYourProgress}
                        alt="knowYourProgress"
                        className='object-contain -mr-32'
                    />
                    <img
                        src={compareWithOthers}
                        alt="compareWithOthers"
                        className='object-contain'
                    />
                    <img
                        src={planYourLesson}
                        alt="planYourLesson"
                        className='object-contain -ml-36'
                    />

                </div>
                <div className='fit'>
                    <CTAButton active={true} linkto={"/signup"}>
                        <div>
                            Learn More
                        </div>
                    </CTAButton>
                </div>
            </div>
        </div>
    );
};

export default LearningLanguageSection;