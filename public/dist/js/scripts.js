(function () {
  'use strict';

  // 1. Fetch Data
  fetch("/api/dashboard")
    .then((response) => response.json())
    .then((data) => {
      
      //Updating Total Metrics
      document.getElementById('totalfollowers').innerHTML = `
      Total ${data.primary_metrics.total.label}: ${data.primary_metrics.total.value}
    `;

      //Updating Contents of primary metrics
      document.getElementById('upperlayer').innerHTML = "";
      data.primary_metrics.cards.forEach(card => {
        document.getElementById('upperlayer').innerHTML += `
        <div class="card">
          <div class="${card.service}border">
          <p class="username">
              <img class="logo" src="/design/images/icon-${card.service}.svg"/>
              @nathanf${card.username}
          </p>
          <p class="numbers">${card.value}</p>
          <p class="interactiontop">${card.label}</p>
          <p class="updates${card.metric.trend}">
              <img src="/design/images/icon-${card.metric.trend}.svg"/>
              ${card.metric.value}Today
          </p>
          </div>
        </div>
      `;
      });

      //Updating contents of supporting metrics.
      document.getElementById('lowerlayer').innerHTML = "";
      data.supporting_metrics.forEach(card => {
        document.getElementById('lowerlayer').innerHTML += `
       <div class="card2">
          <p class="interaction">
        ${card.label}
        <img class="logo" src="/design/images/icon-${card.service}.svg"/>
        </p>
        <div class="a">
        <p class="numbersbottom">${card.value}</p>
        <p class="updates${card.metric.trend}">
                <img src="/design/images/icon-${card.metric.trend}.svg"/>
                ${card.metric.percent}%
            </p>
        </div>
       </div>

      `;
      });
    });

})();
