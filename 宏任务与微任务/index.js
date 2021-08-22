function taskOne() {
  console.log('task one ...')
  setTimeout(() => {
    Promise.resolve().then(() => {
      console.log('task one micro in macro ...')
      Promise.resolve().then(() => {
        console.log('task one micro in macro double...')
      })
    })
    setTimeout(() => {
      console.log('task one macro ...')
    }, 0)
  }, 0)
  taskTwo()
}


function taskTwo() {
  console.log('task two ...')
  Promise.resolve().then(() => {
    setTimeout(() => {
      console.log('task two macro in micro...')
    }, 0)
  })

  setTimeout(() => {
    console.log('task two macro ...')
  }, 0)
}

setTimeout(() => {
  console.log('running macro ...')
}, 0)

taskOne()

Promise.resolve().then(() => {
  console.log('running micro ...')
})