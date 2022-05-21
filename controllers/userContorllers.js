const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')


const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find() //find all users
    console.log(users)
    res.status(200).json(users)
})

const setUser = asyncHandler(async (req, res) => {
    if (!req.body) { // if no request body sent 
        res.status(400)
        throw new Error('Please add user data')
    }
    const {
        firstName,
        email,
        business,
        image,
        position,
        team,
        phone,
        city,
        address,
    } = req.body 
    const user = await User.create({ //create the user
        name: firstname,
        email: email,
        business: business,
        image: image,
        position: position,
        team: team,
        phone: phone,
        city: city,
        address: address,
    })

    res.status(201).json(user)
})

const updateUser = async (req, res) => {
    const user = await User.findById(req.params.id) 
    if (!user) {// check if the user exists
        res.status(400)
        throw new Error('User not found')
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id,
        req.body,
        {
            new: true
        }
    ,)
    res.status(200).json(updatedUser)
}

const deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.params.id
    const user = await User.findById(id)
    if (!user) {// check if the user exists
        res.status(400)
        throw new Error('User not found')
    }
    await user.remove()
    res.status(200).json(id)
})

module.exports = {
    getUsers,
    setUser,
    updateUser,
    deleteUser,
}
