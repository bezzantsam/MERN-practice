
//@ desc Change goal
//@route  GET/api/goals
//@access Private
const getGoals = (req, res) => {
    res.status(200).json({message: 'Get goals'})
}

//@ desc Set goal
//@route  POST /api/goals
//@access Private
const setGoal = (req, res) => {
    if(!req.body.text){
        res.status(400).json({message: 'Please provide a goal'})
    }
    
    
    res.status(200).json({message: 'Set goal'})
}

//@ desc Update goal
//@route  Put /api/goals/:id
//@access Private
const updateGoal = (req, res) => {
    res.status(200).json({message:`Update goal ${req.params.id}`})
}

//@ desc Delete goal
//@route  Delete /api/goals/:id
//@access Private
const deleteGoal = (req, res) => {
    res.status(200).json(
    {message:`Delete goal ${req.params.id}`})
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}