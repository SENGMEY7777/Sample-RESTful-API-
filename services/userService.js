const userModel = require('../models/userModel');

const getAllUsers = async () => {
    const rows = await userModel.getAllUser();

    return rows;
}

const createUser = async (body) => {
    if(!body.name || !body.email || !body.is_active === undefined) {
        throw new Error('Name, email and is_active are required');
    }

    let checkEmail = await userModel.findEmail(body.email);
    if(checkEmail.length > 0) {
        throw new Error ('Email already exists');
    }

    let result = await userModel.create(body);
    let rows = await userModel.getByID(result);
    return rows;
}


const getMe = async (id) => {
    let rows = await userModel.getByID(id);
    console.log(rows);
    if(rows.length === 0) {
        throw new Error('User not found');
    };
    return rows[0];
}

const setActive = async (id) => {
    let user = await userModel.getByID(id);
    if (user.length === 0) {
        throw new Error('User not found');
    }

    let rows = await userModel.updateStatus(id, 1);
    if(rows.affectedRows === 0) {
        throw new Error('Update user failed');
    }

    let result = await userModel.getByID(id);
    return result[0];
}

const setInactive = async (id) => {
    let user = await userModel.getByID(id);
    if (user.length === 0) {
        throw new Error('User not found');
    }

    let rows = await userModel.updateStatus(id, 0);
    if(rows.affectedRows === 0) {
        throw new Error('Update user failed');
    }

    let result = await userModel.getByID(id);
    return result[0];
}


const deleteUser = async (id) => {
    const rows = await userModel.deleteUser(id);
    if(rows.length === 0) {
        throw new Error('Delete user not found');
    }

    return rows[0];
}
module.exports = {
    getAllUsers,
    createUser,
    getMe,
    setActive,
    setInactive,
    deleteUser
}