const model = (db, DataTypes) => {
    const Cheese = db.define('Cheese', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            defaultValue: null
        }
    }, {timestamps: false});

    Cheese.associate = (board) => {
        Cheese.belongsToMany(board, {through: 'Cheese_Board'});
    };

    return Cheese;
}

module.exports = model;