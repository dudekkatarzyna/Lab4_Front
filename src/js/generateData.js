export const generateData = () => {
    let series = []
    for (let y = 0; y < 20; y++) {


        series.push({

            name: y,
            data: generate(40, {
                min: 0,
                max: 5
            })

        })
    }
    return series

}


const generate = (count, yrange) => {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = (i + 1).toString();
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        series.push({
            x: x,
            y: y
        });
        i++;
    }
    return series;
}