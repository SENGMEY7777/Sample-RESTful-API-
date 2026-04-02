const userService = require('../services/userService');

const getAll = async (req, res) => {
    try {
        let rows = await userService.getAllUsers();
        return res.status(200).json({
            result: true,
            message: 'Get all uers successfully',
            data: rows
        })
    }catch (error) {
        console.log(error);
        return res.status(500).json({
            result: false,
            message: 'Internal server error'
        })
    }
}

const createUser = async (req, res) => {
    try {
        let body = req.body;
        let rows = await userService.createUser(body);
        return res.status(200).json({
            result: true,
            message: 'Create user successfully',
            data: rows
        })
    }catch (error) {
        console.log(error);
        return res.status(500).json({
            result: false,
            message: error.message
        })
    }
}

const getMe = async (req, res) => {
    try {
        let id = req.params.id;
        let rows = await userService.getMe(id);
        return res.status(200).json({
            result: true,
            message: 'Get user successfully',
            data: rows
        })
    }catch (error) {
        console.log(error);
        return res.status(500).json({
            result: false,
            message: error.message
        })
    }
}

const setActive = async (req, res) => {
    try {
        let id = req.params.id;
        let rows = await userService.setActive(id);
        return res.status(200).json({
            result: true,
            message: 'Active user successfully',
            data: rows
        })
    }catch (error) {
        console.log(error);
        return res.status(500).json({
            result: false,
            message: error.message
        })
    }
}

const setInactive = async (req, res) => {
    try {
        let id = req.params.id;
        let rows = await userService.setInactive(id);
        return res.status(200).json({
            result: true,
            message: 'Active user successfully',
            data: rows
        })
    }catch (error) {
        console.log(error);
        return res.status(500).json({
            result: false,
            message: error.message
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        let id = req.params.id;
        let result = await userService.deleteUser(id);
        return res.status(200).json({
            result: true,
            message: 'Delete user successfully',
            data: result
        })
    }catch (error) {
        console.log(error);
        return res.status(500).json({
            result: false,
            message: error.message
        })
    }
}
module.exports = {
    getAll,
    createUser,
    getMe,
    setActive,
    setInactive,
    deleteUser
}