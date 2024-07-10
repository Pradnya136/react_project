// const root = document.getElementById("root");

// const msg = document.createElement("h1");
// msg.innerHTML = "Hey there !!";

// root.appendChild(msg)

const heading = React.createElement("h1",{}, "Hello by react !!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);