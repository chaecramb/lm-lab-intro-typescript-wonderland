import { askQuestion, clear, print } from "../ui/console";

const EXERCISE = ["yoga", "running"] as const;
type MorningExercise = (typeof EXERCISE)[number];

type Raining = boolean;

type YogaGear = "yoga mat";
type RunningGear = "trainers";

type ExerciseGear = YogaGear | RunningGear;

export function doMorningRoutine(): void {
  clear(true);
  print("What a weird dream!");
  print("Time to dust off the cobwebs, I think I'll do some exercise!");

  const rainingToday = checkWeather();
  print(`Let's see, it's ${rainingToday ? "raining" : "not raining"} today.`);

  const todaysExercise = decideOnExercise(rainingToday);
  print(`Seems like a good day for ${todaysExercise}.`);

  const exerciseGear = prepareForExercise(todaysExercise);
  print(`OK! Got my ${exerciseGear}. Let's go!`);
}

function checkWeather() {
  return Boolean(Math.round(Math.random()));
}

function decideOnExercise(rainingToday: Raining): MorningExercise {
  return rainingToday ? "yoga" : "running";
}

function prepareForExercise(todaysExercise: MorningExercise): ExerciseGear {
  if (todaysExercise === "yoga") {
    return "yoga mat";
  } else {
    return "trainers";
  }
}
