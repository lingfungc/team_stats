const team = {
  _players: [ {firstName: 'Mo', lastName: 'Salah', age: 30},
              {firstName: 'Bobby', lastName: 'Firmino', age: 31},
              {firstName: 'Virgil', lastName: 'van Dijk', age: 30}
  ],
  _games: [ {opponent: 'Man City', teamPoints: 3, opponentPoints: 1},
            {opponent: 'Ajax', teamPoints: 2, opponentPoints: 1},
            {opponent: 'Arsenal', teamPoints: 4, opponentPoints: 1}
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newfirstName, newlastName, newAge) {
    let player = {
      firstName: newfirstName,
      lastName: newlastName,
      age: newAge
    };
    this.players.push(player);
  }
};

// console.log(team._players);
// console.log(team._games);

team.addPlayer('Justin', 'Chan', 27);

console.log(team.players);
console.log(team.games);
