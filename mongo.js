const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

// const url = `mongodb+srv://fullstack:${password}@cluster0.a5qfl.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0` 
const urlForTests = `mongodb+srv://paulgrossetete:${password}@cluster0.crimmia.mongodb.net/testNoteApp?retryWrites=true&w=majority&appName=Cluster0` 

mongoose.set('strictQuery', false)
// mongoose.connect(url)
mongoose.connect(urlForTests)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'HTML is easy',
  important: true,
})

note.save().then((result) => {
  console.log('note saved!')
  mongoose.connection.close()
})

// Note.find({}).then((result) => {
//   result.forEach((note) => {
//     console.log(note)
//   })
//   mongoose.connection.close()
// })