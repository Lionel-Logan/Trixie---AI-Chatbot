import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import './dashboard.css';

const Dashboard = () => {
  // Dummy dataset - in a real app,fetch this from an API
  const [questionData, setQuestionData] = useState([
    { name: 'Easy', value: 15, color: '#4CAF50' },  // Green for easy
    { name: 'Medium', value: 8, color: '#FFC107' }, // Yellow for medium
    { name: 'Hard', value: 3, color: '#F44336' }    // Red for hard
  ]);


  const totalQuestions = questionData.reduce((sum, item) => sum + item.value, 0);

  const [strengthsData, setStrengthsData] = useState([
    { topic: 'LinkedList', level: 90, color: '#6366f1' },
    { topic: 'C', level: 85, color: '#F44336' },
    { topic: 'Graphs', level: 78, color: '#FFBB28' },
    { topic: 'Trees', level: 75, color: '#00C49F' }
  ]);
  
  const [weaknessesData, setWeaknessesData] = useState([
    { topic: 'Python', level: 40, color: '#FF8042' },
    { topic: 'Dynamic Programming', level: 35, color: '#00E676' },
    { topic: 'Bit Manipulation', level: 30, color: '#FFC107' }
  ]);

  // Custom renderer for the pie chart labels
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor="middle" 
        dominantBaseline="central"
        fontSize={14}
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  // Function to toggle between demo data and empty data 
  const toggleData = () => {
    if (totalQuestions > 0) {
      // Set to empty data
      setQuestionData([
        { name: 'Easy', value: 0, color: '#4CAF50' },
        { name: 'Medium', value: 0, color: '#FFC107' },
        { name: 'Hard', value: 0, color: '#F44336' }
      ]);
      setStrengthsData([]);
      setWeaknessesData([]);
    } else {
      // Set to demo data
      setQuestionData([
        { name: 'Easy', value: 15, color: '#4CAF50' },
        { name: 'Medium', value: 8, color: '#FFC107' },
        { name: 'Hard', value: 3, color: '#F44336' }
      ]);
      setStrengthsData([
        { topic: 'LinkedList', level: 90, color: '#6366f1' },
        { topic: 'C', level: 85, color: '#F44336' },
        { topic: 'Graphs', level: 78, color: '#FFBB28' },
        { topic: 'Trees', level: 75, color: '#FF8042' } 
      ]);
      
      // Restore weaknesses data
      setWeaknessesData([
        { topic: 'Python', level: 40, color: '#00C49F' },
        { topic: 'Dynamic Programming', level: 35, color: '#00E676' },
        { topic: 'Bit Manipulation', level: 30, color: '#FFC107' }
      ]);

    }
  };
  const renderSkillBars = (data, title) => {
    return (
      <div className="skill-section">
        <h3>{title}</h3>
        {data.map((item, index) => (
          <div key={index} className="skill-bar-container">
            <div className="skill-name">{item.topic}</div>
            <div className="skill-bar-background">
              <div 
                className="skill-bar-fill" 
                style={{ 
                  width: `${item.level}%`, 
                  backgroundColor: item.color 
                }}
              ></div>
            </div>
            <div className="skill-level">{item.level}%</div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="modern-dashboard-container">
      <div className="dashboard-header">
        <h1>Quest Tracker</h1>
        <button className="toggle-button" onClick={toggleData}>
          Toggle Data
        </button>
      </div>

      <div className="stats-cards">
        <div className="stat-card total">
          <div className="stat-icon total-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16"/>
            </svg>
          </div>
          <div className="stat-info">
            <p className="stat-title">Total Questions</p>
            <h2 className="stat-value">{totalQuestions}</h2>
          </div>
        </div>
        
        <div className="stat-card easy">
          <div className="stat-icon easy-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 1 0 0 20a10 10 0 0 0 0-20zm0 14v.01"/>
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 16v.01"/>
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12.01L12 8"/>
            </svg>
          </div>
          <div className="stat-info">
            <p className="stat-title">Easy</p>
            <h2 className="stat-value">{questionData[0].value}</h2>
          </div>
        </div>
        
        <div className="stat-card medium">
          <div className="stat-icon medium-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M8 12h8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="stat-info">
            <p className="stat-title">Medium</p>
            <h2 className="stat-value">{questionData[1].value}</h2>
          </div>
        </div>
        
        <div className="stat-card hard">
          <div className="stat-icon hard-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <div className="stat-info">
            <p className="stat-title">Hard</p>
            <h2 className="stat-value">{questionData[2].value}</h2>
          </div>
        </div>
      </div>

      <div className="chart-container">
        <div className="chart-header">
          <h2>Questions by Difficulty</h2>
          <p className="chart-subtitle">Distribution of solved questions</p>
        </div>
        
        {totalQuestions > 0 ? (
          <div className="pie-chart-wrapper">
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <defs>
                  {questionData.map((entry, index) => (
                    <linearGradient key={`gradient-${index}`} id={`color-${index}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={entry.color} stopOpacity={1} />
                      <stop offset="100%" stopColor={entry.color} stopOpacity={0.8} />
                    </linearGradient>
                  ))}
                </defs>
                <Pie
                  data={questionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={160}
                  innerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  paddingAngle={5}
                  stroke="none"
                >
                  {questionData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={`url(#color-${index})`} 
                      className="pie-slice"
                    />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value} Questions`, 'Count']} 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    border: 'none',
                    padding: '10px'
                  }}
                />
                <Legend 
                  layout="horizontal" 
                  verticalAlign="bottom"
                  align="center"
                  iconType="circle"
                  iconSize={12}
                  wrapperStyle={{
                    paddingTop: '30px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="no-data">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64">
              <path fill="none" stroke="#DDD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 1 0 0 20a10 10 0 0 0 0-20zm0 14v.01"/>
              <path fill="none" stroke="#DDD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 16v.01"/>
              <path fill="none" stroke="#DDD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12.01L12 8"/>
            </svg>
            <h3>No questions solved yet</h3>
            <p>Start solving questions to see your progress!</p>
          </div>
        )}

        <div className="skills-container">
          {renderSkillBars(strengthsData, "Areas of Strength")}
          {renderSkillBars(weaknessesData, "Areas for Improvement")}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;