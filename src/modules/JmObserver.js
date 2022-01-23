export const observer = {
    planets: null,
    fetchPlanets() {
        try {
            // this.planets = fetch('http://127.0.0.1:5000/celestial-objects?object=venus&timestamp=1642869582').then(response => response.json()).then(response => response.data);
            this.planets = fetch('http://127.0.0.1:5000/celestial-objects?object=uranus&timestamp=1642869582').then(response => response.json()).then(response => response.data);
            if (!this.planets) return null;
        } catch (error) {
            console.error(error);
        }

    },
     async getObservation() {
        await this.fetchPlanets();
        if (!this.planets) throw new Error('Cannot get planets');
        const { azimuth, altitude, objective, place, time } = this.planets;
        return `Obserwuję ${objective} w ${place}, dn. ${time}, kierunek: ${azimuth}, wysokość: ${altitude}`;
    }
};
