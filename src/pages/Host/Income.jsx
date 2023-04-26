import React from "react";

const Income = () => {
  const transactionsData = [
    { amount: 720, date: "Mar 3, '23", id: "1" },
    { amount: 560, date: "Apr 12, '23", id: "2" },
    { amount: 980, date: "Apr 2, '23", id: "3" },
  ];
  return (
    <section className="host-income">
      <h1>Income</h1>
      <p>
        Last <span>30 days</span>
      </p>
      <h2>$2,260</h2>
      <img
        className="graph"
        src="../images/income-graph.png"
        alt="Income graph"
      />
      <div className="info-header">
        <h3>Your transactions (3)</h3>
        <p>
          Last <span>30 days</span>
        </p>
      </div>
      <div className="transactions">
        {transactionsData.map((item) => (
          <div key={item.id} className="transaction">
            <h3>${item.amount}</h3>
            <p>{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Income;
