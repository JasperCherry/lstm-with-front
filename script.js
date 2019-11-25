const net = new brain.recurrent.LSTM();
net.fromJSON(model)

const onTextChange = () => {
  const input = document.getElementById("textarea").value;
  const result = net.run(input);
  const combinedResult = input + result;
  document.getElementById("outputText").innerHTML = combinedResult;
}
