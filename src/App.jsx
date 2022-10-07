import "./app.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("₹ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "The 'sasural' of which of these international sports person from India is in Pakistan?",
      answers: [
        {
          text: "Saina Nehwal",
          correct: false,
        },
        {
          text: "Saina Mirza",
          correct: true,
        },
        {
          text: "Anisa Sayyed",
          correct: false,
        },
        {
          text: "Anjum Chopra",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "With Which of these states do Chhattisgarh, Jharkhand and Andhra Pradesh all share their borders?",
      answers: [
        {
          text: "Madhya Pradesh",
          correct: false,
        },
        {
          text: "Uttar Pradesh",
          correct: true,
        },
        {
          text: "Bihar",
          correct: false,
        },
        {
          text: "Odisha",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which of these terms can only be used for woman?",
      answers: [
        {
          text: "Drighaayu",
          correct: false,
        },
        {
          text: "Chiranjeevi",
          correct: false,
        },
        {
          text: "Suhaagan",
          correct: true,
        },
        {
          text: "Sushil",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Which component of blood is transfused into patients to treat dengue?",
      answers: [
        {
          text: "WBC",
          correct: false,
        },
        {
          text: "RBC",
          correct: false,
        },
        {
          text: "Platelets",
          correct: true,
        },
        {
          text: "Haemoglobin",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which of these cricket tournaments is often referred to as the 'Mini World Cup'?",
      answers: [
        {
          text: "ICC Championship Trophy",
          correct: true,
        },
        {
          text: "Natwest Series",
          correct: false,
        },
        {
          text: "Asia Cup",
          correct: false,
        },
        {
          text: "Twenty20 World Cup",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Who was the president of India at the turn of the century, as the 20th century became the 21st century?",
      answers: [
        {
          text: "K R Narayan",
          correct: true,
        },
        {
          text: "APJ Abdul Kalam",
          correct: false,
        },
        {
          text: "R Venkataraman",
          correct: false,
        },
        {
          text: "Shankar Dayal Sharma",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "From which country did India buy an aircraft carrier which was renamed as INS Vikramaditya?",
      answers: [
        {
          text: "Germany",
          correct: false,
        },
        {
          text: "England",
          correct: false,
        },
        {
          text: "Russia",
          correct: true,
        },
        {
          text: "France",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "For his contribution in which field of economics was Amartya Sen Awarded the Nobel Prize?",
      answers: [
        {
          text: "Welfare economics",
          correct: false,
        },
        {
          text: "Macroeconomics analysis",
          correct: false,
        },
        {
          text: "Monetary and Fiscal policy",
          correct: false,
        },
        {
          text: "Economic Growth",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "Which of these states is the largest producer of natural rubber in India?",
      answers: [
        {
          text: "Kerala",
          correct: true,
        },
        {
          text: "Karnataka",
          correct: false,
        },
        {
          text: "Tamil Nadu",
          correct: false,
        },
        {
          text: "Andhra Pradesh",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Who became the first woman president of the United Nations General Assembly in 1953?",
      answers: [
        {
          text: "ChinLakshmi Segal",
          correct: false,
        },
        {
          text: "Gayatri Devi",
          correct: false,
        },
        {
          text: "Sarojini Naidu",
          correct: false,
        },
        {
          text: "Vijaya Lakshmi Pandit",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: "Which battle is 1757 marked the beginning of British occupation in India?",
      answers: [
        {
          text: "Buxer",
          correct: false,
        },
        {
          text: "Plassey",
          correct: true,
        },
        {
          text: "Cuddalore",
          correct: false,
        },
        {
          text: "Assaye",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Who are the only married couple elected to the 16th Lok Sabha?",
      answers: [
        {
          text: "Sukhbir Singh - Harsimrat Kaur Badal",
          correct: false,
        },
        {
          text: "Prakash - Brinda Karat",
          correct: false,
        },
        {
          text: "Priya Rajan - Deepa Dasmunsi",
          correct: false,
        },
        {
          text: "Pappu Yadav - Ranjeet Rajan",
          correct: true,
        },
      ],
    },
    {
      id: 15,
      question: "Where did Homi Jehangir Bhabha, the principal architect of India's nuclear energy program, die in a plane crash?",
      answers: [
        {
          text: "Mount Elbrus",
          correct: false,
        },
        {
          text: "Mount Rosa",
          correct: false,
        },
        {
          text: "Mount Blanc",
          correct: true,
        },
        {
          text: "Mount Ararat",
          correct: false,
        },
      ],
    },
    {
      id: 16,
      question: "Which is the only bird with a digestive system that ferments vegetation as a bovine does, which enables it to eat leaves and buds exclusively?",
      answers: [
        {
          text: "Shoebill stork",
          correct: false,
        },
        {
          text: "Hoatzin",
          correct: true,
        },
        {
          text: "Shoveler",
          correct: false,
        },
        {
          text: "Galapagos cormorant",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "₹ 1,000" },
        { id: 2, amount: "₹ 2,000" },
        { id: 3, amount: "₹ 3,000" },
        { id: 4, amount: "₹ 5,000" },
        { id: 5, amount: "₹ 10,000" },
        { id: 6, amount: "₹ 20,000" },
        { id: 7, amount: "₹ 40,000" },
        { id: 8, amount: "₹ 80,000" },
        { id: 9, amount: "₹ 1,60,000" },
        { id: 10, amount: "₹ 3,20,000" },
        { id: 11, amount: "₹ 6,40,000" },
        { id: 12, amount: "₹ 12,50,000" },
        { id: 13, amount: "₹ 25,00,000" },
        { id: 14, amount: "₹ 50,00,000" },
        { id: 15, amount: "₹ 1 Crore" },
        { id: 16, amount: "₹ 7 Crore" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;