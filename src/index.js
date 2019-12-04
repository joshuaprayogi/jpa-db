import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Clever Tap!</h1>
<div>
  TAM - Customer Success Questionnaire<br><br>
  <button onclick="pushEvent()">Push Event and user Information!</button><br><br>
  <button onclick="pushNotification()">Push Notification!</button>
</div>
`;
