const { DataTypes } = require("sequelize")
const { db } = require("./../utils/database")

const Estado = db.define("Estado", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nombre: {
        allowNull: false,
        type: DataTypes.STRING(50)
    },
    descripcion: {
        allowNull: false,
        type: DataTypes.STRING
    },
    color: {
        allowNull: false,
        type: DataTypes.STRING(20)
    }
})

module.exports = Estado