import React from 'react';
import './LandingPage.scss';
import savingMoneyImage from '../../assets/savingMoney.svg';
import simpleApp from '../../assets/simpleApp.svg';
import statisticsImage from '../../assets/statisticsImage.svg';

const LandingPage = () => {
    return (
        <div>
            <div className='flex-wrapper section--color-one'>
                <img className='image-wrapper' src={savingMoneyImage} alt='save-money'></img>
                <div className='description-wrapper'>
                    <h2 className='section-title'>{'Simple budget planner'}</h2>
                    <p className="description">{'Start take control of your personal finance. Plan your budget, track your expenses and build good habits with our app. This easy to use and super-friendly budget planner for everyne.'}</p>
                </div>
            </div>

            <div className='flex-wrapper section--color-two'>
                <div className='description-wrapper'>
                    <h2 className='section-title'>{'The easiest way to save money'}</h2>
                    <p className="description">{'Manage your budget in just few clicks daily. Add your income and expenses with diffrent default categories. You can also qiuckly add a short note on your transaction.'}</p>
                </div>
                <img className='image-wrapper' src={simpleApp} alt='save-money'></img>
            </div>

            <div className='flex-wrapper section--color-one'>
                <img className='image-wrapper' src={statisticsImage} alt='save-money'></img>
                <div className='description-wrapper'>
                    <h2 className='section-title'>{'Money lovers statistcs'}</h2>
                    <p className="description">{'Check all of yours spending expenses anf income reports with diffrent filters. Track your process and achive goals.'}</p>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;