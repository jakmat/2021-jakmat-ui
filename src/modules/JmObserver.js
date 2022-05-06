export const observer = {
    planets: null,
    async fetchPlanets() {
        try {
            // const protocol = 'http://';
            // const server = 'localhost';
            // const query = 'test';
            // const query = 'observation?objects=sun,mercury_barycenter,venus_barycenter,moon,mars_barycenter,jupiter_barycenter,saturn_barycenter,uranus_barycenter,neptune_barycenter,pluto_barycenter&time=1650773000&lat=52n&lon=19e';
            // const url = `${protocol}${server}/${query}`;
            await fetch('http://172.17.0.2:5000/test/').then(resolve => console.log(resolve));
            // TODO: watch https://www.udemy.com/course/docker-kubernetes-the-practical-guide/learn/lecture/22166996#content
            // const json = await response.json();
            // const { data } = json;
            // if (!data) return null;
            // return data;
        } catch (error) {
            console.error(error);
        }

    },
     getObservation() {
        fetch('http://localhost/test/')
            .then(resolve => console.log(resolve))
            .catch(reject => console.log(reject));
        // this.fetchPlanets();
        // this.planets = planets;
        // if (!this.planets) throw new Error('Cannot get planets');
        // const { azimuth, altitude, objective, place, time } = this.planets;
        // return `Obserwuję ${objective} w ${place}, dn. ${time}, kierunek: ${azimuth}, wysokość: ${altitude}`;
        // return `Obserwuję`; // ${objective} w ${place}, dn. ${time}, kierunek: ${azimuth}, wysokość: ${altitude}`;

    }
};
