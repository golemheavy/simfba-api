
        module.exports = function(sequelize, DataTypes) {
        var Team = sequelize.define("Team", {"Team":"VARCHAR(255)","Nickname":"VARCHAR(255)","Abbr":"VARCHAR(255)","City":"VARCHAR(255)","State":"VARCHAR(255)","Enrollment":"INTEGER","Current_Conference":"VARCHAR(255)","First_Played":"INTEGER","Coach":"VARCHAR(255)","flag":"TINYINT(1)","createdAt":"VARCHAR(255)","updatedAt":"VARCHAR(255)"}); return Team;}
        