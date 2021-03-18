
const app = require('./app')
app.set('port', 4444);
const server = app.listen(app.get('port'), ()=>{
    console.log(`Express running: PORT ${server.address().port}`)
})