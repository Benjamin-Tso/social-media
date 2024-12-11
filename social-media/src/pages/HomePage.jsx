import { useEffect, useState } from 'react'
import Post from '../components/Post'

const HomePage = () => {
    const pageLength = 5
    const [pageNumber, setPageNumber] = useState(1)
    const range = (start, end) =>{
        let array = []
        for(let i = start; i<end+1; i++){
            array.push(i)
        }
        return array
    }
    const [postIds, setPostIds] = useState(range(1,pageLength))
    useEffect(()=>{
        setPostIds(range((pageNumber-1)*pageLength+1, pageNumber*pageLength))
    },[pageNumber])
    const handlePrevPage = (e) => {
        setPageNumber(Math.max(1,pageNumber-1))
    }
    const handleNextPage = (e) => {
        setPageNumber(Math.min(100/pageLength, pageNumber+1))
    }

    return (
        <>
            {
                postIds.map((id, idx)=><Post key={idx} id={id}/>)
            }
            <button onClick={handlePrevPage} className='clickable'>Prev</button>
            <p>page : {pageNumber}</p>
            <button onClick={handleNextPage} className='clickable'>Next</button>
        </>
    )
}
export default HomePage