import { config } from '../../../config';

class recettesService {
	endpoint = "filter.php?c=";
	baseUrl = config.baseUrl;

	async getRecetteByCategorie(name) {
		const response = await fetch(`${this.baseUrl}${this.endpoint}${name}`);
		if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
		const data = await response.json();
		return data.meals;
	}

}

export default recettesService;