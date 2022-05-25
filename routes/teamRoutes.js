const express = require('express')
const router = express.Router()

const { getTeams, setTeam } = require('../controllers/teamControllers')


router.get('/',getTeams) //get team
router.post('/', setTeam)


module.exports = router