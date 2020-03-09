const newman = require('newman'),
fs = require('fs')

newman.run({
    collection: require('./collection.json'), // can also provide a URL or path to a local JSON file.
    environment: require('./environment.json'),
    // iterationData: require('./data.json'),
    reporters: ['htmlextra', 'cli'],
    // iterationCount: 3,
    reporter: {
        htmlextra: {
          
            export: './htmlResults.html',
            template: './customTemplate.hbs',
            title: 'Qa Nelsonx Reporte',
            logs: true
        }
    }
}, (err) => {
    if (err) throw err 
    console.log('collection run complete!')
}).on('start', (err, args) => {
    console.log('running a collection...')
    if (err) console.log(err) 
  }).on('beforeDone', (err, data) => {
    if (err) console.log(err) 
  }).on('done', (err, summary) => {
    if (err || summary.error) 
        console.error('collection run encountered an error.')
    else 
        console.log('collection run completed.')
  }).on('item', (i, o) => {
    console.log(`name: ${o.item.name}`)
  }).on('request', function (error, args) {
    if (error) {
        console.error(error);
    }
    else {

        if(args.response.hasOwnProperty("stream")) {
          let json = JSON.parse(args.response.stream)
          fs.writeFile(`imagen.txt`,args.response.stream/*json.value ,'base64'*/,  function (error) {
              if (error) { 
                  console.error(error)
              }
          })  
        } else console.log("no es imagen")     
    }
  })

  //   .on('beforeRequest', function (error, args) {
//     if (error) {
//         console.error(error);
//     } else {
//         // fs.writeFile(`imagen.txt`, args.request.body, function (error) {
//         //     if (error) { 
//         //         console.error(error); 
//         //     }
//         // });    
//     }
//     })