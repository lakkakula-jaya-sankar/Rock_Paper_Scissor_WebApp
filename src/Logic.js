import { useState } from "react";

export default function Logic(){

    const [getScore, setScore] = useState([0, 0]);
    const [getChoice, setChoice] = useState(['Start the game by clicking any button', '']);
    const [getMsg, setMsg] = useState(['', '']);
    const [getUserResColor, setUserResColor] = useState();
    const [getComResColor, setComResColor] = useState();

    let x = ['rock', 'paper', 'scissor'];

    function random(s, e){
        return Math.floor(Math.random() * (e - s + 1)) + s;
    }

    function cal(e){
        let z = e;
        let uval = x.indexOf(z);
        let cval = random(0,2);

        if(uval === cval){
            setMsg(['Draw', 'Draw']);
            setChoice(['Your Choice : ' + z, 'Computer\'s Choice : ' + x[cval]]);
            setUserResColor('text-primary fs-5 fw-bold');
            setComResColor('text-primary fs-5 fw-bold');
        }
        else if(uval === 0 && cval === 1 || uval === 1 && cval === 2 || uval === 2 && cval === 0){
            setScore([getScore[0], getScore[1]+1]);
            setMsg(['You Lost', 'Computer Won']);
            setChoice(['Your Choice : ' + z, 'Computer\'s Choice : ' + x[cval]]);
            setUserResColor('text-danger fs-5 fw-bold');
            setComResColor('text-success fs-5 fw-bold');
        }
        else{
            setScore([getScore[0]+1, getScore[1]]);
            setMsg(['You Won', 'Computer Lost']);
            setChoice(['Your Choice : ' + z, 'Computer\'s Choice : ' + x[cval]]);
            setUserResColor('text-success fs-5 fw-bold');
            setComResColor('text-danger fs-5 fw-bold');
        }
    }

    return (
        <div>
            <div className="row w-100 m-0">
                <div className="col-1 col-lg-2"></div>
                <div className="col-10 col-lg-8">
                    <h1 className="heading-1 m-3 m-md-5 text-center">Rock Paper Scissors</h1>
                    <div className="border border-2 mt-5 rounded-4 shadow-lg p-3">
                        <div className="row justify-content-around gap-4">
                            <div className="col-11 col-xl-5 border border-3 border-dark text-center rounded-4 p-3">
                                <h2 className="fs-4 fw-normal">Your Score</h2>
                                <p className="fs-2 fw-bolder">{getScore[0]}</p>
                                <p className="fs-5">{getChoice[0]}</p>
                                <p className={getUserResColor}>{getMsg[0]}</p>
                                <div className="btn-group">
                                    <button className="btn btn-outline-secondary" onClick={() => cal('rock')}><img src="rock.svg" style={{width: "30px"}} title="rock"/></button>
                                    <button className="btn btn-outline-secondary" onClick={() => cal('paper')}><img src="paper.svg" style={{width: "30px"}} title="paper"/></button>
                                    <button className="btn btn-outline-secondary" onClick={() => cal('scissor')}><img src="scissor.svg" style={{width: "30px"}} title="scissor"/></button>
                                </div>
                            </div>
                            <div className="col-11 col-xl-5 border border-3 text-center rounded-4 p-3">
                                <h2 className="fs-4 fw-normal">Computer Score</h2>
                                <p className="fs-2 fw-bolder">{getScore[1]}</p>
                                <p className="fs-5">{getChoice[1]}</p>
                                <p className={getComResColor}>{getMsg[1]}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1 col-lg-2"></div>
            </div>
        </div>
    );
}