const randomColor = () => {
  const random = Math.floor(Math.random() * 11677215);
  const hexaDecimal = "#" + random.toString(16);
  document.body.style.backgroundColor = hexaDecimal;
//   console.log(hexaDecimal);
  document.getElementById("CCode").innerText = hexaDecimal;
};

// Adding event listener
document.getElementById("btn").addEventListener("click", randomColor);

// initial call
randomColor();