const skills = [
    {id: 125223, skill: 'HTML 5', done: true},
    {id: 127904, skill: 'CSS 3', done: true},
    {id: 139608, skill: 'JavaScript', done: true},
    {id: 123454, skill: 'BASH', done: true},
    {id: 123455, skill: 'GitHub', done: true},
    {id: 123456, skill: 'NodeJS', done: false},
    {id: 123457, skill: 'Express', done: false},
    {id: 123458, skill: 'Django', done: false},
    {id: 123459, skill: 'Python', done: false},
    {id: 123460, skill: 'R', done: false}
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
}
function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}