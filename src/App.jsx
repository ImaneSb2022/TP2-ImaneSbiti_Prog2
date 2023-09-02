
import {Route, Routes} from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import Categories from './assets/recettes/components/recettesCategories'
import RecetteByCategorie from './assets/recettes/components/recetteByCategorie'
import Recette from './assets/recettes/components/recetteById'

const queryClient = new QueryClient();

function App() {

  return (


    <QueryClientProvider client={queryClient}>

      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path='/categories/:name' element={<RecetteByCategorie />} />
        <Route path='/meals/:id' element={<Recette />} />
      </Routes>
      
    </QueryClientProvider>
   
    
  )
}

export default App
