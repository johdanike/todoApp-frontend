import Layout from '../../src/components/layout/Layout'
import Feature from '../../src/features/Feature'
export const Route =[
    {
        path:"",
        element:<Layout/>,
        children:[
            {
                path:"",
                element: <Feature/>
            }
        ]
    }
]