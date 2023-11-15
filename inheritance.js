class Human {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }
}

class Player extends Human {
    constructor(name, age, sportName, inMainTeam) {
        super(name, age);
        this._sportName = sportName;
        this._inMainTeam = inMainTeam;
    }

    get sportName() {
        return this._sportName;
    }

    get inMainTeam() {
        return this._inMainTeam;
    }
}

class FootbalPlayer extends Player {
    constructor(name, age, inMainTeam) {
        super(name, age, 'football', inMainTeam);
    }
}

class Team {
    constructor() {
        this._footbalPlayers = [];
    }

    get players() {
        return [...this._footbalPlayers];
    }

    addPlayers(...footbaPlayers) {
        this._footbalPlayers.push(...footbaPlayers);
    }

    deletePlayer(footbaPlayer) {
        const index = this._footbalPlayers.indexOf(footbaPlayer);
        if (index !== -1) {
            this._footbalPlayers.splice(index, 1);
        }
    }

    getPlayersSortedByName() {
        return [...this._footbalPlayers].sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            return nameA.localeCompare(nameB);
        });
    }

    getFilteredPlayers(inMainTeam) {
        return this._footbalPlayers.filter(player => player.inMainTeam === inMainTeam);
    }
}