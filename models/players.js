
        module.exports = function(sequelize, DataTypes) {
        var Player = sequelize.define("Player", {"Id":"INTEGER","First_Name":"VARCHAR(255)","Last_Name":"VARCHAR(255)","Stars":"INTEGER","Position":"VARCHAR(255)","Archetype":"VARCHAR(255)","Overall":"INTEGER","Height":"INTEGER","Weight":"INTEGER","School":"VARCHAR(255)","Hometown":"VARCHAR(255)","State":"VARCHAR(255)","Carrying":"INTEGER","Agility":"INTEGER","Catching":"INTEGER","Zone_Coverage":"INTEGER","Man_Coverage":"INTEGER","Football_IQ":"INTEGER","Kick_Accuracy":"INTEGER","Kick_Power":"INTEGER","Pass_Block":"INTEGER","Pass_Rush":"INTEGER","Punt_Accuracy":"INTEGER","Punt_Power":"INTEGER","Route_Running":"INTEGER","Run_Block":"INTEGER","Run_Defense":"INTEGER","Speed":"INTEGER","Strength":"INTEGER","Tackle":"INTEGER","Throw_Power":"INTEGER","Throw_Accuracy":"INTEGER","Injury":"INTEGER","Stamina":"INTEGER","Discipline":"INTEGER","Academic":"VARCHAR(255)","Free_Agency":"VARCHAR(255)","Personality":"VARCHAR(255)","Recruiting":"VARCHAR(255)","Work_Ethic":"VARCHAR(255)","Progression":"INTEGER","Potential":"VARCHAR(255)","Year":"INTEGER","Team":"INTEGER","Redshirt":"TINYINT(1)","JerseyNum":"VARCHAR(255)","createdAt":"VARCHAR(255)","updatedAt":"VARCHAR(255)"}); return Player;}
        