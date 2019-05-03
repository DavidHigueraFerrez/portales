let models = require('../models');
let Sequelize = require('sequelize');   



//funcion de getMenus para tener los menus laterales de la bbbd
exports.getMenus = function (req, res, next) {
  
    req.session.menusLaterales = [];
    console.log('entra en getMenus');
    return models.menusLaterales.findAll({
        attributes: ['rol', 'nombre', 'url', 'seccion','estado'],
        raw: true
    })
        .each(function (menusLaterales) {
            let rol = menusLaterales['rol'];
            let nombre = menusLaterales['nombre'];
            let url = menusLaterales['url'];
            let seccion = menusLaterales['seccion'];
            let estado = menusLaterales['estado'];
            console.log('test-menus');
            console.log(menusLaterales['nombre']);
            let menusLateralespush = { rol: rol, nombre: nombre, url: url, seccion: seccion, estado: estado }
            console.log(menusLateralespush);
            req.session.menusLaterales.push(menusLateralespush);

        })
        .then(function () {
            let nuevopath = "" + req.baseUrl + "/guardarMenus";
            let cancelarpath = "" + req.baseUrl + "/guardarMenus";
            
            res.render('index-Admin', {
                nuevopath: nuevopath,
                cancelarpath: cancelarpath,
                menusLaterales: menusLaterales
            });


        })
        .catch(function (error) {
            console.log("Error:", error);
            next(error);
        });
    }
