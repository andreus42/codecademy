const team = {
    _players: [
      {  
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 21
      },
      {
        firstName: 'Sanchito',
        lastName: 'Swarez',
        age: 35
      },
      {
        firstName: 'Kelty',
        lastName: 'Banner',
        age: 25
      }
    ],
    _games: [
        {  
          opponent: 'Brocos',
          teamPoints: 42,
          opponentPoints: 21
        },
        {
          opponent: 'Gators',
          teamPoints: 17,
          opponentPoints: 35
        },
        {
          opponent: 'Senators',
          teamPoints: 10,
          opponentPoints: 2
        },
      ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        }
        this.players.push(player)
    },
    addGames(opponent, teamPoints, opponentPoints) {
        let game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        }
        this.games.push(game)
    }
};

// add players
team.addPlayer('Andrew', 'Metell', 42)
team.addPlayer('Steve', 'Curry', 28)
team.addPlayer('Bugs', 'Bunny', 76)

// add games
team.addGames('Cowboys', 42, 47)
team.addGames('Bruins', 3, 1)
team.addGames('Oriels', 5, 10)

console.log(team.players);
console.log(team.games);