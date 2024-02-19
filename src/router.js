import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {UserDetailsPage} from "./pages/UserDetailsPage";
import {PostsPage} from "./pages/PostsPage";
import {PostDetailsPage} from "./pages/postDetailsPage";

const router=createBrowserRouter([
    {
        path:'', element:<MainLayout/>, children:[
            {
                index:true, element:<Navigate to={'users'}/>
            },
            {
                path:'users', element:<UsersPage/>, children:[
                    {
                        path:':id', element:<UserDetailsPage/>, children:[
                            {
                                path:':posts', element:<PostsPage/>, children:[
                                    {
                                        path:'postDetails', element:<PostDetailsPage/>
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
])

export {
    router
}