window.onload = () => {
  const participants = [
    "Ito",
    "Kubo",
    "Shion",
    "Kojima",
    "Sunguk",
    "Tomoya",
    "Koichi",
    "Yata",
  ];
  let shuffledArray = [];

  while (shuffledArray.length < participants.length) {
    const numberOfParticipants = participants.length;
    const randomIndex = Math.floor(numberOfParticipants * Math.random());
    if (!shuffledArray.includes(participants[randomIndex])) {
      shuffledArray.push(participants[randomIndex]);
    }
  }
  console.log(shuffledArray);
};
