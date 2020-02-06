var express = require('express');
const Sequelize = require('sequelize');

var app = express();

app.get('/', function(req, res){
    

    var sequelize = new Sequelize('coagril_ee_dd_pgsql_006', 'cooperate', 'cooperate', {
        host: 'pgsql01.datacoper.com.br',
        dialect: 'postgres'
    });

    const Marca = sequelize.define('marca', {
        idmarca: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
          },
          descricao: {
            type: Sequelize.STRING
          },
          codigo: {
            type: Sequelize.INTEGER
          },
          idgrupoempresarial: {
            type: Sequelize.INTEGER
          }   
      }, {
        freezeTableName: true,
        timestamps: false
      });    

    Marca.findAll().then(marca => {
        var texto = JSON.stringify(marca, null, 4);        
        res.send(texto);
      });        

});

app.listen(3001, function() {
    console.log('example app listening on port 3001!');
});
