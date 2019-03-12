
//defino modelo de sequelize de animales

module.exports = function (sequelize, DataTypes) {
    let menusLaterales = sequelize.define('menusLaterales',
        {
            identificador: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            rol: {
                type: DataTypes.ENUM('PDI', 'PAS','ESTD'),
                validate: { notEmpty: { msg: "Falta Rol" } }
            },
            nombre: {
                type: DataTypes.STRING,
                validate: { notEmpty: { msg: "Falta Nombre" } }
            },
            url: {
                type: DataTypes.STRING,
                validate: { notEmpty: { msg: "Falta Url" } }
            },
            
            seccion: {
                type: DataTypes.ENUM('Aplicaciones Docentes', 'Servicios Generales'),
                validate: { notEmpty: { msg: "Falta seccion" } }
            },
            estado: {
                type: DataTypes.ENUM('PreProduccion', 'Produccion'),
                validate: { notEmpty: { msg: "Falta Estado" } }
            },
        },
        {
            timestamps: false   
        });
    menusLaterales.removeAttribute('id');
    return menusLaterales;
};


