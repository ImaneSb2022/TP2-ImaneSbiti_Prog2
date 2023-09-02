import { useQuery } from '@tanstack/react-query';
import RecettesCategoriesService from '../service/recettesCategoriesService';
import FetchState from '../../components/FetchState/FetchState';
import './recette.css'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Link } from 'react-router-dom';

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
					<h1 className='text-success pb-5'>Liste des catégories</h1>
					<Row>
						{data?.map((categorie) => (
							<Col className='bg-warning border border-secondary rounded-3 m-3 p-3' key={categorie.strCategory} xs={12} sm={6} md={4} lg={3} xl={2} >

								<Link to={`/categories/${categorie.strCategory}`}>
									<h3 className='text-center'>{categorie.strCategory}</h3>
								</Link>
								
								<img src={categorie.strCategoryThumb} alt="" className='my-3 img-thumbnail'/>
								<p>{categorie.strCategoryDescription}</p>
							</Col>
						))}
					</Row>
				</Container>
			</FetchState>
		</Container>
	)




}

export default RecettesCategories;