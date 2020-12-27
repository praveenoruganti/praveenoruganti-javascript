let getMarks = () => {
  const maths = Number(document.getElementById("maths").value);
  const english = Number(document.getElementById("english").value);
  const chemistry = Number(document.getElementById("chemistry").value);
  const physics = Number(document.getElementById("physics").value);

  if (maths > 100 || english > 100 || chemistry > 100 || physics > 100) {
    alert("Marks can't be greater than 100");
  } else {
    const totalMarks = 400;
    const MarksObtained = maths + english + chemistry + physics;
    const percentage = (MarksObtained / totalMarks) * 100;
    let grade;
    let message;
    document.getElementById("percentage").innerHTML = percentage + "%";
    if (percentage < 35) {
      message = "Sorry! you failed! please try next time.";
      grade = "F";
    } else if (percentage < 60) {
      message = "Congratulations! you have passed.";
      grade = "B";
    } else if (percentage > 70 && percentage < 90) {
      grade = "A";
      message = "Congratulations! you have passed with First Class.";
    } else {
      grade = "A+";
      message = "Congratulations! you have passed with Distinction.";
    }
    document.getElementById("grade").innerHTML = grade;
    document.getElementById("pass").innerHTML = message;
  }
};

const calculate = document.getElementById("calculate");

document.onkeydown=function(){
  if(window.event.keyCode=='13'){
    getMarks();
  }
}

calculate.addEventListener("click", () => getMarks());
