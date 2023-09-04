import { useQuery } from '@tanstack/react-query'
import RecettesCategoriesService from '../service/recettesCategoriesService'
import FetchState from '../../components/FetchState/FetchState'
import './style/MealDBStyle.css'

/*bootstrap*/
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Link } from 'react-router-dom'

const recettesCategoriesService = new RecettesCategoriesService();

const RecettesCategories = () => {

	const { isError, isLoading, error, data } = useQuery({
		queryKey: ["categorie"],
		queryFn: () => recettesCategoriesService.getAllCategories(),
	})

	return (
		<Container fluid className='d-grid min-vh-100'>

			<FetchState isLoading={isLoading} isError={isError} error={error}>

				<Container className=' p-5'>

					<h1>Welcome to TheMealDB</h1>

					<h2 className='text-success pb-5'> - Categories - </h2>
					
						{data?.map((categorie) => (
							
							<Row className='categorie border border-secondary rounded-3 m-3 p-3' key={categorie.strCategory}>
								
								<Col className='categorie-title'>
									
									<Link className='categorie-title_link' to={`/categories/${categorie.strCategory}`}>
										<h3>{categorie.strCategory}</h3>
									</Link>
									
									<img src={categorie.strCategoryThumb} alt="" className='my-3 img-thumbnail'/>
								
								</Col>
								
								<Col className='categorie-text'>
									
									<p>{categorie.strCategoryDescription}</p>
								
								</Col>

							</Row>
						))}
					
				</Container>

			</FetchState>

		</Container>

	)

}

export default RecettesCategories;