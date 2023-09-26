function points(games) {
  let totalPoints = 0;
  games.map((game) => {
    const [myTeam, enemy] = game.split(":");
    if (myTeam > enemy) {
      totalPoints += 3;
    } else if (myTeam === enemy) {
      totalPoints++;
    }
  });
  return totalPoints;
}

points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]);
