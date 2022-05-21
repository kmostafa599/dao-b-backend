const express = require('express')
const router = express.Router()

const { getUsers, setUser, updateUser, deleteUser, addVote } = require('../controllers/userContorllers')


router.get('/',getUsers) //get
router.post('/',setUser) //set
router.put('/update/:id',updateUser)//update
router.put('/vote/:id',addVote)
router.delete('/:id',deleteUser)//delete


module.exports = router