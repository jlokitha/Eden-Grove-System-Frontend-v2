export class Crop {
    constructor(
        public cropCode: string,
        public commonName: string,
        public scientificName: string,
        public category: string,
        public season: string,
        public status: string,
        public cropImage: string
    ) {
    }
}