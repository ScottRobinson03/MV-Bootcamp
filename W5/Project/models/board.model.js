const model = (db, DataTypes) => {
    const Board = db.define('Board', {
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
        },
        rating: {
            type: DataTypes.INTEGER,
            defaultValue: null
        }
    }, {timestamps: false});

    Board.associate = (cheese) => {
        Board.belongsToMany(cheese, {through: 'Cheese_Board'});
    }

    return Board;
}

module.exports = model;