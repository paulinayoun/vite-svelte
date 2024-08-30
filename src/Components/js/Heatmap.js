export default class Heatmap {

    constructor(points, element) {

        this.element = element;
        this.config = {
            container : element,
            radius : 50,
            maxOpacity : .6,
            minOpacity : 0,
            blur : .75,
            gradient: {
                0.1: '#4421A6',
                0.2: '#4578D9',
                0.3: '#299FD5',
                0.4: '#61D748',
                0.5: '#A8E315',
                0.6: '#DBE847',
                0.7: '#E3D70B',
                0.8: '#FFAF38',
                0.9: '#FF7C33',
                1.0: '#FF532E'
            }
        };
        
        this.instance = h337.create(this.config);

        this.max = 45;
        this.min = 10;
        const width = 482;
        const height = 328;
        const len = 200;

        this.dataObj = {
            max: this.max,
            min: this.min,
            data: points,
        };
    }

    init() {
        this.instance.setData(this.dataObj);
    }

    updateData(points) {

        this.dataObj = {
            max: this.max,
            min: this.min,
            data: points,
        };

        this.instance.setData(this.dataObj);
    }
}