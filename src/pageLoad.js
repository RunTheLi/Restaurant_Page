// greeting.js
export default function pageLoad(){
    const contentdiv = document.getElementById('content');

    const welcomeMessage = document.createElement('h1');
    welcomeMessage.textContent = "The Pareto Restaurant";
    contentdiv.appendChild(welcomeMessage);

}
