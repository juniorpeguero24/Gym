document.addEventListener("DOMContentLoaded", function () {
  const muscleButtons = document.querySelectorAll("#muscle-groups button");
  const exerciseList = document.getElementById("exercise-list");

  // Datos de ejemplo de ejercicios (puedes cargar estos datos desde una base de datos o archivo JSON)
  const exercises = {
    pecho: [
      "Press de banca (Bench Press)",
      "Press inclinado (Incline Bench Press)",
      "Press declinado (Decline Bench Press)",
      "Aperturas con mancuernas (Dumbbell Flyes)",
      "Fondos en máquina (Chest Dips)",
      "Pull-overs",
      "Press de banca con agarre cerrado (Close-Grip Bench Press)",
      "Press inclinado con mancuernas (Incline Dumbbell Press)",
      "Press declinado con mancuernas (Decline Dumbbell Press)",
      "Aperturas en máquina",
    ],
    espalda: [
      "Dominadas (Pull-Ups)",
      "Pull-downs en polea alta (Lat Pulldowns)",
      "Peso muerto (Deadlift)",
      "Remo con barra (Barbell Rows)",
      "Pull-downs en polea baja (Cable Rows)",
      "Pull-overs con barra",
      "Dominadas con agarre cerrado (Close-Grip Pull-Ups)",
      "Pull-downs con agarre inverso (Reverse-Grip Lat Pulldowns)",
      "Remo con mancuerna (Dumbbell Rows)",
      "Pulldowns en máquina",
    ],
    piernas: [
      "Sentadillas (Squats)",
      "Prensa (Leg Press)",
      "Sillon (Leg Extensions)",
      "Peso muerto (Deadlift)",
      "Zancadas (Lunges)",
      "Camilla (Leg Curls)",
      "Gemelos (Calf Raises)",
      "Sentadillas búlgaras (Bulgarian Split Squats)",
      "Hip Thrusts",
      "Step-ups",
    ],
    hombros: [
      "Press de hombros (Shoulder Press)",
      "Elevaciones laterales (Lateral Raises)",
      "Elevaciones frontales (Front Raises)",
      "Pájaro (Rear Delt Flyes)",
      "Press Arnold",
      "Encogimientos de hombros (Shrugs)",
      "Press militar",
      "Elevaciones en máquina",
      "Face Pulls",
      "Press detrás de la cabeza",
    ],
    biceps: [
      "Curl de bíceps con barra (Barbell Bicep Curls)",
      "Curl de bíceps con mancuernas (Dumbbell Bicep Curls)",
      "Curl martillo (Hammer Curls)",
      "Curl 21s",
      "Curl de predicador (Preacher Curls)",
      "Curl de concentración (Concentration Curls)",
      "Curl con polea alta (Cable Curls)",
      "Curl con barra Z (EZ-Bar Curls)",
      "Curl Scott",
      "Curl 21s inversos",
    ],
    triceps: [
      "Press de tríceps en polea alta (Tricep Pushdown)",
      "Fondos en máquina (Dips)",
      "Extensiones de tríceps en polea alta (Overhead Tricep Extensions)",
      "Fondos en paralelas",
      "Extensiones de tríceps con mancuerna (Dumbbell Tricep Extensions)",
      "Fondos en banco inclinado",
      "Press de tríceps en máquina",
      "Fondos en máquina Smith",
      "Extensiones de tríceps tumbado (Skull Crushers)",
      "Fondos en banco declinado",
    ],
    // Agrega más ejercicios aquí
  };

  muscleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const muscle = button.getAttribute("data-muscle");
      displayExercises(exercises[muscle]);
    });
  });

  function displayExercises(exerciseArray) {
    exerciseList.innerHTML = "";
    exerciseArray.forEach((exercise) => {
      const exerciseItem = document.createElement("div");
      exerciseItem.textContent = exercise;
      exerciseList.appendChild(exerciseItem);
    });
  }
});
