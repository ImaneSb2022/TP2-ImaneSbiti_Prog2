import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import RecettesCategoriesService from '../service/recetteIdService'
import FetchState from '../../components/FetchState/FetchState'
import './style/MealDBStyle.css'

/*Bootstrap*/
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

/*Accordion */
import { useState, useEffect } from "react"
import AccordionWithUseEffect from "./Accordion"

const NO_ACCORDION_SELECTED = 0;
const recettesCategoriesService = new RecettesCategoriesService();

const RecetteById = (props) => {

	const [active, setActive] = useState(NO_ACCORDION_SELECTED);

	/* handleclick for ingredients */
	const handleClick1 = (index) => {
		if (index === active) {
			setActive(NO_ACCORDION_SELECTED);
			return;
		}

		/* fonction qui regroupe les ingrédients et mesures */	
		const ingredientsAndMesures = [];
		for (let i = 1; i < 21; i++) {
			const ingredientItem = data[0][`strIngredient${i}`];
			const mesureItem = data[0][`strMeasure${i}`];
			if (!ingredientItem || !mesureItem) {
				break;
			}
			ingredientsAndMesures.push(`${mesureItem} of ${ingredientItem}`);
		}
		console.log(ingredientsAndMesures);
		ingredientsToListItems();
		setActive(index);
	};

	/* handleclick for instructions */
	const handleClick2 = (index) => {
		if (index === active) {
			setActive(NO_ACCORDION_SELECTED);
			return;
		}
		setActive(index);
	};

	const handleOutsideClick = (event) => {
	if (event.target.closest(".accordion")) {
		return;
	}
	setActive(NO_ACCORDION_SELECTED);
	};

	useEffect(() => {
		window.addEventListener("click", handleOutsideClick);
		return () => {
			window.removeEventListener("click", handleOutsideClick);
		};
	}, []);

	const params = useParams();
	
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["meals", params.id],
		queryFn: () => recettesCategoriesService.GetRecetteById(params.id),
	});

	const ingredientsToListItems = () => {

		for (let i in data) {
			if((data[i].strIngredient9 === "" || data[i].strIngredient9 === " ") && (data[i].strMeasure9 === "" || data[i].strMeasure9 === " ")){
				delete data[i].strIngredient9;
				delete data[i].strMeasure9;
				document.getElementById("li9").remove();
				}
			if((data[i].strIngredient10 === "" || data[i].strIngredient10 === " ") && (data[i].strMeasure10 === "" || data[i].strMeasure10 === " ")){
				delete data[i].strIngredient10;
				delete data[i].strMeasure10;
				document.getElementById("li10").remove();
				}
			if((data[i].strIngredient11 === "" || data[i].strIngredient11 === " ") && (data[i].strMeasure11 === "" || data[i].strMeasure11 === " ")){
				delete data[i].strIngredient11;
				delete data[i].strMeasure11;
				document.getElementById("li11").remove();
				}
			if((data[i].strIngredient12 === "" || data[i].strIngredient12 === " ") && (data[i].strMeasure12 === "" || data[i].strMeasure12 === " ")){
				delete data[i].strIngredient12;
				delete data[i].strMeasure12;
				document.getElementById("li12").remove();
				}
			if((data[i].strIngredient13 === "" || data[i].strIngredient13 === " ") && (data[i].strMeasure13 === "" || data[i].strMeasure13 === " ")){
				delete data[i].strIngredient13;
				delete data[i].strMeasure13;
				document.getElementById("li13").remove();
				}
			if((data[i].strIngredient14 === "" || data[i].strIngredient14 === " ") && (data[i].strMeasure14 === "" || data[i].strMeasure14 === " ")){
				delete data[i].strIngredient14;
				delete data[i].strMeasure14;
				document.getElementById("li14").remove();
				}
			if((data[i].strIngredient15 === "" || data[i].strIngredient15 === " ") && (data[i].strMeasure15 === "" || data[i].strMeasure15 === " ")){
				delete data[i].strIngredient15;
				delete data[i].strMeasure15;
				document.getElementById("li15").remove();
				}
			if((data[i].strIngredient16 === "" || data[i].strIngredient16 === " ") && (data[i].strMeasure16 === "" || data[i].strMeasure16 === " ")){
				delete data[i].strIngredient16;
				delete data[i].strMeasure16;
				document.getElementById("li16").remove();
				}
			if((data[i].strIngredient17 === "" || data[i].strIngredient17 === " ") && (data[i].strMeasure17 === "" || data[i].strMeasure17 === " ")){
				delete data[i].strIngredient17;
				delete data[i].strMeasure17;
				document.getElementById("li17").remove();
				}
			if((data[i].strIngredient18 === "" || data[i].strIngredient18 === " ") && (data[i].strMeasure18 === "" || data[i].strMeasure18 === " ")){
				delete data[i].strIngredient18;
				delete data[i].strMeasure18;
				document.getElementById("li18").remove();
				}
			if((data[i].strIngredient19 === "" || data[i].strIngredient19 === " ") && (data[i].strMeasure19 === "" || data[i].strMeasure19 === " ")){
				delete data[i].strIngredient19;
				delete data[i].strMeasure19;
				document.getElementById("li19").remove();
				}
			if((data[i].strIngredient20 === "" || data[i].strIngredient20 === " ") && (data[i].strMeasure20 === "" || data[i].strMeasure20 === " ")){
				delete data[i].strIngredient20;
				delete data[i].strMeasure20;
				document.getElementById("li20").remove();
				}
				
			}
	}

	return (

		<Container fluid className='min-vh-100 d-grid'>

			<FetchState isLoading={isLoading} isError={isError} error={error}>

				<Container className=' p-5'>

				<Link to={`/`}>
						<h6 className='btn btn-primary'> Home - Categories</h6>
				</Link>

						{data && data.map((meals) => (
							
							<div className='' key={meals.idMeal} xs={12} sm={6} md={4} lg={3} xl={2}>
								
								<h2>Meal : </h2>

								<h2 className='text-success pb-5'>{meals.strMeal}</h2>

								<div className='detail-meal'>

									<Row className='detail-meal-Row'>

										<Col className='detail-meal_title'>
											<h5>Catégory : {meals.strCategory}</h5>

											<img src={meals.strMealThumb} alt={meals.strMealThumb} className='img-thumbnail'/>
										</Col>

										<Col className='detail-meal_ingredients'>

											<div className="accordions">
												<AccordionWithUseEffect
													value={1}
													active={active}
													onClick={handleClick1}
													title="Ingrédients"
												>

													<ul>
														<li id='li1'>{meals.strMeasure1} of {meals.strIngredient1}</li>
														<li id='li2'>{meals.strMeasure2} of {meals.strIngredient2}</li>
														<li id='li3'>{meals.strMeasure3} of {meals.strIngredient3}</li>
														<li id='li4'>{meals.strMeasure4} of {meals.strIngredient4}</li>
														<li id='li5'>{meals.strMeasure5} of {meals.strIngredient5}</li>
														<li id='li6'>{meals.strMeasure6} of {meals.strIngredient6}</li>
														<li id='li7'>{meals.strMeasure7} of {meals.strIngredient7}</li>
														<li id='li8'>{meals.strMeasure8} of {meals.strIngredient8}</li>
														<li id='li9'>{meals.strMeasure9} of {meals.strIngredient9}</li>
														<li id='li10'>{meals.strMeasure10} of {meals.strIngredient10}</li>
														<li id='li11'>{meals.strMeasure11} of {meals.strIngredient11}</li>
														<li id='li12'>{meals.strMeasure12} of {meals.strIngredient12}</li>
														<li id='li13'>{meals.strMeasure13} of {meals.strIngredient13}</li>
														<li id='li14'>{meals.strMeasure14} of {meals.strIngredient14}</li>
														<li id='li15'>{meals.strMeasure15} of {meals.strIngredient15}</li>
														<li id='li16'>{meals.strMeasure16} of {meals.strIngredient16}</li>
														<li id='li17'>{meals.strMeasure17} of {meals.strIngredient17}</li>
														<li id='li18'>{meals.strMeasure18} of {meals.strIngredient18}</li>
														<li id='li19'>{meals.strMeasure19} of {meals.strIngredient19}</li>
														<li id='li20'>{meals.strMeasure20} of {meals.strIngredient20}</li>
													</ul>  
												</AccordionWithUseEffect>
											
												<AccordionWithUseEffect
													value={2}
													active={active}
													onClick={handleClick2}
													title="Instructions"
												>
													{meals.strInstructions}
												</AccordionWithUseEffect>

											</div>

										</Col>

									</Row>

								</div>
								
							</div>
						))}

				</Container>

			</FetchState>

		</Container>

	)
	
}

export default RecetteById
