import { config } from '../../../config';

class RecettesCategoriesService {
	endpoint = "categories.php";
	baseUrl = config.baseUrl;
	//categorieUrl = `${this.baseUrl}/${this.endpoint}`;

	async getAllCategories(limit = 151, offset = 0) {
		/*const res = await fetch(this.categorieUrl)
		if (!res.ok) throw new Error();
		const data = await res.json();
		return data.categories;*/
		//console.log(`${this.baseUrl}${this.endpoint}`);
		const response = await fetch(`${this.baseUrl}${this.endpoint}?limit=${limit}&offset=${offset}`);
		if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
		const data = await response.json();
		return data.categories;
	}


	/*endpoint2 = "filter.php?c=";
	async getRecetteByCategorie(name) {

		//console.log(`${this.baseUrl}${this.endpoint2}${name}`);
		
		const response = await fetch(`${this.baseUrl}${this.endpoint2}${name}`);
		if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
		const data = await response.json();
		return data.meals;
	}*/


	endpoint3 = "lookup.php?i=";
	async GetRecetteById(id) {

		//console.log('Le lien est : ');
		//console.log(`${this.baseUrl}${this.endpoint3}${id}`);

		const response = await fetch(`${this.baseUrl}${this.endpoint3}${id}`);
		if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
		const data = await response.json();
		return data.meals;
	}


}

export default RecettesCategoriesService;