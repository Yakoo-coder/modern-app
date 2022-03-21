import { api_key, base_url } from '../config'; // Api keyi her yerde çağıracağımaza bir tane config oluşturup ordan miras alıyoruz heryerde 

export class Movie {
    constructor(id) {
        this.id = id;
    }

    async GetMovie() {
        const response = await fetch(`${base_url}/movie/${this.id}?api_key=${api_key}`); //Url sini ve gelecek yolunu tanımluyoruz
        this.data = await response.json(); // Json olarak alıyoruz 
    }
}