const dataForge = require('data-forge');
require('data-forge-fs');
require('data-forge-plot');
require('@data-forge-plot/render');

async function main() {
    let df = await dataForge
        .readFile('./test.json')
        .parseJSON();

    let indexedDf = df.setIndex('x').bake();
    console.log(indexedDf.head(5).toString());

    indexedDf = indexedDf.where(row => row.y > 2)
    console.log(indexedDf.head(5).toString());
    
    // await display(df);
    const plot = indexedDf.plot({}, {y:['y', 'z']});
    await plot.renderImage('my-chart.png');
    // await df.plot().exportWeb('./test');
    // df.plot().chartType()
}

main();
// df = await bla();
// console.log(df);
// df.plot()
// require('data-forge-plot');
// require('@data-forge-plot/render');

// console.log(dataForge);