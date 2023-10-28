window.onload = async (event) => {
  await generateNewAdvice();
};

const generateNewAdvice = async () => {
  // At start display load spinner
  document.getElementById("loadSpinner").style.display = "block";
  document.getElementById("advice").style.display = "none";
  try {
    const adviceData = await getAdviceData();
    setAdviceData(adviceData);
    // After advice successfully set, remove loading spinner
    document.getElementById("loadSpinner").style.display = "none";
    document.getElementById("advice").style.display = "flex";
  } catch (err) {
    console.log("error");
  }
  //
};

const getAdviceData = async () => {
  const adviceData = await fetch("https://api.adviceslip.com/advice", {
    cache: "no-cache",
  }).then((response) => {
    return response.json();
  });
  return adviceData;
};

const setAdviceData = (adviceData) => {
  const adviceNumberElement = document.getElementById("adviceNumberElement");
  const adviceTextElement = document.getElementById("adviceTextElement");
  const adviceNumber = ("Advice #" + adviceData.slip.id).toUpperCase();
  const adviceText = '"' + adviceData.slip.advice + '"';
  adviceNumberElement.innerHTML = adviceNumber;
  adviceTextElement.innerHTML = adviceText;
};
