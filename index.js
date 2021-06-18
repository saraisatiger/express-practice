const express = require('express')
const { staff } = require('./data/staff')

const app = express()

app.get('/courses', (req, res) => {
  res.send('Course List 📚')
})

app.get('/courses/:courseId', (req, res) => {
  const { courseId } = req.params

  res.send('You requested Course ID: ' + courseId)
})

app.get('/staff/:instructor', (req, res) => {
  const { instructor } = req.params
  const thisStaffMember = staff.find(employee => employee.name.startsWith(instructor))

  res.send(thisStaffMember)
})

app.get('/staff', (req, res) => {
  res.send(staff)
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})