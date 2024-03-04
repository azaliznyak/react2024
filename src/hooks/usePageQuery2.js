

import {useNavigate, useSearchParams} from "react-router-dom";


const usePageQuery2 = () => {
    const [query, setQuery] = useSearchParams({ page: '1' });
    const navigate = useNavigate();

    const page = parseInt(query.get('page'), 10);

    const setPage = (newPage) => {
        setQuery('page', newPage.toString());

        const currentUrl = window.location.href;
        const nextPageUrl = currentUrl.replace(/([&?]page=\d+)|$/, `?page=${newPage}`);
        navigate(nextPageUrl);
    };

    const nextPage = () => {
        setPage(page + 1);
    };

    const prevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };


    return {
        page,
        nextPage,
        prevPage
        // nextPage:()=>setQuery(prev => {
        //     prev.set('page', (+prev.get('page')+1).toString());
        //     return prev
        // }),
        // prevPage:()=>setQuery(prev => {
        //     prev.set('page', (+prev.get('page')-1).toString());
        //     return prev
        // })
    };
};
export { usePageQuery2 };
