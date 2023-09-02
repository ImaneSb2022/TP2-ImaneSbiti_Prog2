import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import RecettesCategoriesService from '../service/recettesCategoriesService'
import FetchState from '../../components/FetchState/FetchState';
import Container from 'react-bootstrap/Container'


/*Accordion */
import { useState, useEffect } from "react"
import AccordionWithUseEffect from "./Accordion"
import "./accordion.css"
/*fin accordion */AccordionWithUseEffect




const NO_ACCORDION_SELECTED = 0;
const recettesCategoriesService = new RecettesCategoriesService();

const RecetteById = (props) => {



	const [active, setActive] = useState(NO_ACCORDION_SELECTED);

	const handleClick = (index) => {
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

    console.log('params.id : ' , params.id);
	console.log('data est : ' , data);
	
	return (
		<Container fluid className='min-vh-100 d-grid'>
			<FetchState isLoading={isLoading} isError={isError} error={error}>
				<Container className=' p-5'>
					
				<Link to={`/`}>
						<h6> Retour a l'accueil</h6>
				</Link>

						{data && data.map((meals) => (
							
							<div className='' key={meals.idMeal} xs={12} sm={6} md={4} lg={3} xl={2}>

								<h1 className='text-success pb-5'>{meals.strMeal}</h1>

								<div className='bg-warning p-5 my-auto text-center w-100 rounded-5 '>

									<h4>Catégorie : {meals.strCategory}</h4>
									<img src={meals.strMealThumb} alt="" className='img-thumbnail w-50 my-3'/>

									<div className="accordions">
										<AccordionWithUseEffect
											value={1}
											active={active}
											onClick={handleClick}
											title="Ingrédients"
										>
											{meals.strMeasure1} of {meals.strIngredient1}


																			
									<p><span>{meals.strMeasure2}</span> of <span>{meals.strIngredient2}</span></p>
									<p><span>{meals.strMeasure3}</span> of <span>{meals.strIngredient3}</span></p>
									<p><span>{meals.strMeasure4}</span> of <span>{meals.strIngredient4}</span></p>
									<p><span>{meals.strMeasure5}</span> of <span>{meals.strIngredient5}</span></p>
									<p><span>{meals.strMeasure6}</span> of <span>{meals.strIngredient6}</span></p>
									<p><span>{meals.strMeasure7}</span> of <span>{meals.strIngredient7}</span></p>
									<p><span>{meals.strMeasure8}</span> of <span>{meals.strIngredient8}</span></p>
									<p><span>{meals.strMeasure9}</span> of <span>{meals.strIngredient9}</span></p>
									<p><span>{meals.strMeasure10}</span> of <span>{meals.strIngredient10}</span></p>
									<p><span>{meals.strMeasure11}</span> of <span>{meals.strIngredient11}</span></p>
									<p><span>{meals.strMeasure12}</span> of <span>{meals.strIngredient12}</span></p>
									<p><span>{meals.strMeasure13}</span> of <span>{meals.strIngredient13}</span></p>
									<p><span>{meals.strMeasure14}</span> of <span>{meals.strIngredient14}</span></p>
									<p><span>{meals.strMeasure15}</span> of <span>{meals.strIngredient15}</span></p>
									<p><span>{meals.strMeasure16}</span> of <span>{meals.strIngredient16}</span></p>
									<p><span>{meals.strMeasure17}</span> of <span>{meals.strIngredient17}</span></p>
									<p><span>{meals.strMeasure18}</span> of <span>{meals.strIngredient18}</span></p>
									<p><span>{meals.strMeasure19}</span> of <span>{meals.strIngredient19}</span></p>
									<p><span>{meals.strMeasure20}</span> of <span>{meals.strIngredient20}</span></p>



										</AccordionWithUseEffect>
										
										<AccordionWithUseEffect
											value={2}
											active={active}
											onClick={handleClick}
											title="Instructions"
										>
											{meals.strInstructions}
										</AccordionWithUseEffect>
									</div>

								</div>
								
							</div>
						))}

				</Container>
			</FetchState>
		</Container>
	)
	
}

export default RecetteById
