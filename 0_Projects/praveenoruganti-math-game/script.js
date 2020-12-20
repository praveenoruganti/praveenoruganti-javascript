"use strict";

var Counter = {
  PlayingState: null,
  IsStopped: true,
  Score: 0,
  TimeRemaining: 0,
  FirstNumber: 0,
  SecondNumber: 0,
  CorrectAnswer: 0,
  CorrectPosition: 0,
  WrongAnswer: 0,
  AddContentToElement: function (selector, content) {
    document.querySelector(selector).innerHTML = content;
  },
  ChangeStyle: function (selector, property, value) {
    document.querySelector(selector).setAttribute(property, value);
  },
  Initialize: function (timeRemaining) {
    this.TimeRemaining = timeRemaining;
  },
  GenerateRandomNumber: function (multiplier) {
    return Math.round(Math.random() * multiplier) + 1;
  },
  Refresh: function (selector, data) {
    document.querySelector(selector).innerText = (data < 10 ? "0" : "") + data;
  },
  LoopThroughElements: function () {
    var answers = [this.CorrectAnswer];

    for (var index = 1; index < 5; index++) {
      this.ChangeStyle(
        "ul#choices > li:nth-of-type(" + index + ")",
        "style",
        "height:auto;"
      );

      if (index !== this.CorrectPosition) {
        do {
          this.WrongAnswer =
            this.GenerateRandomNumber(9) * this.GenerateRandomNumber(9);
        } while (answers.indexOf(this.WrongAnswer) > -1);

        this.AddContentToElement(
          "ul#choices > li:nth-of-type(" + index + ")",
          this.WrongAnswer
        );
        answers.push(this.WrongAnswer);
      }
    }
  },
  Launch: function () {
    this.IsStopped = false;
    this.Action();
    this.ChangeStyle("aside#time-remaining", "style", "visibility:visible;");
    this.ChangeStyle("#game-over", "style", "display:none;");
    this.ChangeStyle(
      "ul#choices",
      "style",
      "pointer-events:initial; opacity:1;"
    );
    this.ChangeStyle("button#start-reset", "style", "visibility:hidden;");
    this.AddContentToElement("button#start-reset", "Reset Game");
    this.Refresh("aside#time-remaining > span", this.TimeRemaining);
    this.GenerateQuestionAndAnswers();
  },
  GenerateQuestionAndAnswers: function () {
    this.FirstNumber = this.GenerateRandomNumber(9);
    this.SecondNumber = this.GenerateRandomNumber(9);
    this.CorrectAnswer = this.FirstNumber * this.SecondNumber;
    this.CorrectPosition = this.GenerateRandomNumber(3);
    this.ChangeStyle("section#question", "style", "height:auto;");
    this.AddContentToElement(
      "section#question",
      this.FirstNumber + "x" + this.SecondNumber
    );
    this.AddContentToElement(
      "ul#choices > li:nth-of-type(" + this.CorrectPosition + ")",
      this.CorrectAnswer
    );
    this.LoopThroughElements();
  },
  Action: function () {
    Counter.PlayingState = setInterval(function () {
      Counter.TimeRemaining--;

      if (Counter.TimeRemaining <= 50) {
        Counter.ChangeStyle(
          "button#start-reset",
          "style",
          "visibility:visible;"
        );
      }

      if (Counter.TimeRemaining < 1) {
        Counter.Stop();
      } else {
        Counter.Refresh("aside#time-remaining > span", Counter.TimeRemaining);
      }
    }, 1000);
  },
  EventListener: function (event) {
    if (
      Number(event.currentTarget.innerText) === Number(Counter.CorrectAnswer)
    ) {
      Counter.Score++;
      Counter.Refresh("aside#score > span", Counter.Score);
      Counter.GenerateQuestionAndAnswers();
      Counter.ChangeStyle(
        "p#message",
        "style",
        "visibility:visible; background-color:#23A230;"
      );
      Counter.AddContentToElement("p#message", "Correct");
    } else {
      if (Counter.Score >= 1) {
        Counter.Score -= 0.5;
        Counter.Refresh("aside#score > span", Counter.Score);
      }

      Counter.ChangeStyle(
        "p#message",
        "style",
        "visibility:visible; background-color:#DE401A;"
      );
      Counter.AddContentToElement("p#message", "Try again");
    }

    setTimeout(function () {
      Counter.ChangeStyle("p#message", "style", "visibility:hidden;");
    }, 1000);
  },
  CheckClickOnRightAnswer: function () {
    for (var index = 1; index < 5; index++) {
      document
        .querySelector("ul#choices > li:nth-of-type(" + index + ")")
        .removeEventListener("click", this.EventListener, false);
      document
        .querySelector("ul#choices > li:nth-of-type(" + index + ")")
        .addEventListener("click", this.EventListener);
    }
  },
  Stop: function () {
    this.IsStopped = true;
    clearInterval(this.PlayingState);
    this.ChangeStyle(
      "ul#choices",
      "style",
      "pointer-events:none; opacity:0.4;"
    );
    this.ChangeStyle("aside#time-remaining", "style", "visibility:hidden;");
    this.ChangeStyle("div#game-over", "style", "display:block;");
    this.AddContentToElement("button#start-reset", "Start Game");
    this.AddContentToElement(
      "div#game-over > p:last-of-type > span",
      (this.Score !== "00" && this.Score < 10 ? "0" : "") + this.Score
    );
    this.AddContentToElement("aside#score > span", (this.Score = "00"));
  },
};

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("start-reset").addEventListener("click", function () {
    Counter.Initialize(60);
    Counter.IsStopped ? Counter.Launch() : Counter.Stop();
    Counter.CheckClickOnRightAnswer();
  });
});
