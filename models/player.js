module.exports = function(sequelize, DataTypes) {
    var Player = sequelize.define("Player", {
        First_Name: DataTypes.STRING,
        Last_Name: DataTypes.STRING,
        Position: DataTypes.STRING,
        Stars: DataTypes.INTEGER,
        Archetype: DataTypes.STRING,
        Overall: DataTypes.INTEGER,
        Height: DataTypes.INTEGER,
        Weight: DataTypes.INTEGER,
        School: DataTypes.STRING,
        Hometown: DataTypes.STRING,
        State: DataTypes.STRING,
        Carrying: DataTypes.INTEGER,
        Agility: DataTypes.INTEGER,
        Catching: DataTypes.INTEGER,
        Zone_Coverage: DataTypes.INTEGER,
        Man_Coverage: DataTypes.INTEGER,
        Football_IQ: DataTypes.INTEGER,
        Kick_Accuracy: DataTypes.INTEGER,
        Kick_Power: DataTypes.INTEGER,
        Pass_Block: DataTypes.INTEGER,
        Pass_Rush: DataTypes.INTEGER,
        Punt_Accuracy: DataTypes.INTEGER,
        Punt_Power: DataTypes.INTEGER,
        Route_Running: DataTypes.INTEGER,
        Run_Block: DataTypes.INTEGER,
        Run_Defense: DataTypes.INTEGER,
        Speed: DataTypes.INTEGER,
        Strength: DataTypes.INTEGER,
        Tackle: DataTypes.INTEGER,
        Throw_Power: DataTypes.INTEGER,
        Throw_Accuracy: DataTypes.INTEGER,
        Injury: DataTypes.INTEGER,
        Stamina: DataTypes.INTEGER,
        Discipline: DataTypes.INTEGER,
        Academic: DataTypes.STRING,
        Free_Agency: DataTypes.STRING,
        Personality: DataTypes.STRING,
        Recruiting: DataTypes.STRING,
        Work_Ethic: DataTypes.STRING,
        Progression: DataTypes.INTEGER,
        Potential: DataTypes.STRING,
        Year: DataTypes.INTEGER
    });
    // return new Promise(() => Player);
    return Player;
}