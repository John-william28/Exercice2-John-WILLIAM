import readline from "readline";
import fetch from "node-fetch"; 

const API_URL = "http://localhost:5000/api/tasks";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function displayTasks() {
  const res = await fetch(API_URL);
  const tasks = await res.json();
  console.log("\n Liste des tâches :");
  if (tasks.length === 0) console.log("Aucune tâche pour le moment !");
  else tasks.forEach(task => console.log(`${task.id}. ${task.title}`));
}

async function addTask(title) {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title })
  });
  console.log(`Tâche ajoutée : "${title}"`);
}

async function deleteTask(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  console.log(`Tâche supprimée (id: ${id})`);
}

function showMenu() {
  console.log(`
Que voulez-vous faire ?
1 - Afficher les tâches
2 - Ajouter une tâche
3 - Supprimer une tâche
0 - Quitter
`);
}

async function main() {
  while (true) {
    showMenu();
    const choice = await new Promise(resolve => rl.question("Votre choix : ", resolve));
    
    if (choice === "1") {
      await displayTasks();
    } else if (choice === "2") {
      const title = await new Promise(resolve => rl.question("Titre de la tâche : ", resolve));
      if (title.trim() !== "") await addTask(title);
    } else if (choice === "3") {
      const id = await new Promise(resolve => rl.question("Id de la tâche à supprimer : ", resolve));
      if (!isNaN(id)) await deleteTask(id);
    } else if (choice === "0") {
      console.log("Au revoir !");
      rl.close();
      process.exit(0);
    } else {
      console.log("Choix invalide.");
    }
  }
}

main();
