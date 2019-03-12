
//defino modelo de sequelize de animales

module.exports = function (sequelize, DataTypes) {
    let gestion = sequelize.define('gestion',
        {
            identificador: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nombre: {
                type: DataTypes.STRING,
                validate: { notEmpty: { msg: "Falta nombre" } }
            },
            apellido: {
                type: DataTypes.STRING,
                validate: { notEmpty: { msg: "Falta apellido" } }
            },
            mail: {
                type: DataTypes.STRING,
                validate: { notEmpty: { msg: "Falta mail" } }
            },
        },
        {
            timestamps: false   
        });
    gestion.removeAttribute('id');
    return gestion;
};


