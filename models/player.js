module.exports = function(sequelize, DataTypes) {
    var Player = sequelize.define("Player", {
        team: DataTypes.INTEGER,
        fname: DataTypes.STRING,
        lname: DataTypes.STRING,
        age: DataTypes.INTEGER,
        height: DataTypes.INTEGER,
        weight: DataTypes.INTEGER,
        position: DataTypes.STRING,
        hometown: DataTypes.STRING,
        homestate: DataTypes.STRING,
        highschool: DataTypes.STRING,
        college: DataTypes.STRING,
        stars: DataTypes.INTEGER,
        archetype: DataTypes.STRING,
        year: DataTypes.INTEGER,
        redshirt: DataTypes.BOOLEAN,
        progression: DataTypes.INTEGER,
        potential: DataTypes.STRING,
        overall: DataTypes.INTEGER,
        footballIQ: DataTypes.INTEGER,
        runBlock: DataTypes.INTEGER,
        passBlock: DataTypes.INTEGER,
        strength: DataTypes.INTEGER,
        runDefense: DataTypes.INTEGER,
        passRush: DataTypes.INTEGER,
        carrying: DataTypes.INTEGER,
        routeRunning: DataTypes.INTEGER,
        catching: DataTypes.INTEGER,
        speed: DataTypes.INTEGER,
        puntPower: DataTypes.INTEGER,
        puntAcc: DataTypes.INTEGER,
        kickPower: DataTypes.INTEGER,
        kickAcc: DataTypes.INTEGER,
        agility: DataTypes.INTEGER,
        manCoverage: DataTypes.INTEGER,
        zoneCoverage: DataTypes.INTEGER,
        throwPower: DataTypes.INTEGER,
        throwAcc: DataTypes.INTEGER,
        injury: DataTypes.INTEGER,
        stamina: DataTypes.INTEGER,
        discipline: DataTypes.INTEGER,
        isInjured: DataTypes.BOOLEAN,
        injuryType: DataTypes.STRING,
        injuryLeft: DataTypes.INTEGER,
        injuryQtrs: DataTypes.INTEGER,
        recruiting: DataTypes.STRING,
        academic: DataTypes.STRING,
        personality: DataTypes.STRING,
        workEthic: DataTypes.STRING,
        freeAgent: DataTypes.STRING
    });
    return Player;
}