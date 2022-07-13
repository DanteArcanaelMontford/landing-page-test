import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

(function () {
  function openTab(tabID) {
    const tabs = document.getElementsByClassName("tab__page");

    [...tabs].forEach(tab => tab.style.display = "none")

    document.getElementById(tabID).style.display = "block";
  }



  const tabs = document.querySelectorAll('.tab__page');
  const tabBtns = document.querySelectorAll('.tab__button');

  const removeActives = () => {
    tabBtns.forEach(btn => {
      btn.classList.remove('active_1');
      btn.classList.remove('active_2');
    })
  }

  tabBtns.forEach((btn, i) => {
    btn.onclick = () => {
      removeActives();
      i === 0 ? btn.classList.add('active_1') : btn.classList.add('active_2');
      openTab(tabs[i].id);
    }
  })
})();


