const model = (db, DataTypes) => {
    const User = db.define('User', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {timestamps: false});

    User.associate = (board) => {
        User.hasMany(board);
    };

    return User;
}

module.exports = model;