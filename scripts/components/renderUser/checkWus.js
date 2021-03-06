export const checkYourWus = (dataBanano, dataFold) => {
  let lastPayDay = dataBanano.payments[0].created_at;
  let lastWorkUnit = dataFold.last;
  let nextDayFromTheLastWorkUnit = getJumpDate(lastWorkUnit, 1).getTime();
  let paydayTime = new Date(lastPayDay).getTime();
  let todayAtMidnight = todayDate().getTime();

  //Verify if the next day from the last work unit has payment, AND
  //Verify if the next day from last work unit done is bigger than today
  if (
    nextDayFromTheLastWorkUnit >= paydayTime &&
    todayAtMidnight <= nextDayFromTheLastWorkUnit &&
    lastWorkUnit
  ) {
    return `<section class="banano__info">
    <p>Your work unit has been working normal</p>
    </section>`;
  } else {
    return `<section class="banano__info">
    <p>Whoops has something wrong check if your fold@home is active!</p>
    </section>`;
  }
};

const todayDate = () => {
  const datetime = new Date();
  datetime.setHours(0, 0, 0, 0);
  return datetime;
};

const getJumpDate = (date, numberJump) => {
  let newDataJump = new Date(date);
  newDataJump.setDate(newDataJump.getDate() + numberJump);
  newDataJump.setHours(0, 0, 0, 0);
  return newDataJump;
};
