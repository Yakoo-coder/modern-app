import { api_key, base_url } from '../config'; //Api keyi her yerde çağıracağımaza bir tane config oluşturup ordan miras alıyoruz heryerde

//sync anahtar kelimesi fonksiyon sonucunun bir Promise olduğu belirtirken
//await ise sonucu Promise olan fonksiyonun bitmesini bekler.

//Search İşlemleri 
export default class Search {

    //Dışarıdan bir constructor alıyoruz.
    constructor(keyword) {
        this.keyword = keyword;

    }
    //Asenkron bir metod
    async getResults() {

        //Fetch Apı : Ajaxda gibi veri alma,veri gönderme işlemlerinde kullanılan asenkron bir yapıdır.Resolved,Reject! Promise yapısını bilmek gerek
        const response = await fetch(`${base_url}/search/movie?api_key=${api_key}&page=1&query=${this.keyword}`);
        this.data = await response.json();
    }
}