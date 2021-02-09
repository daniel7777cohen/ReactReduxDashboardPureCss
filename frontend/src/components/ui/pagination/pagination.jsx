import React from 'react';
import {useDispatch} from 'react-redux';
import { setPaginationCount,setStartPosition,nextPagination,previousPagination } from "../../../store/actions/trs";
import './pagination.css';

const Pagination = ({displayCount,currentDisplayedData,startPosition}) => {
    const dispatch = useDispatch();
    const totalPagination = Math.round(currentDisplayedData.length/displayCount);

    const displayRecordhandler = (e) => {
        const paginationCount = e.target.value;
        dispatch(setPaginationCount(paginationCount));
    }
    return (
        <div className="pagination-container">
            <ul>
                {totalPagination !== 0 && <li className={`pagination-cards ${ startPosition === 1 && 'disabled'}`} onClick={() => dispatch(previousPagination())}><i className="fas fa-angle-left"></i></li> }
                {[...Array(totalPagination)].map((e, i) =>  <li onClick={() => dispatch(setStartPosition(i+1))} key={i} className={`pagination-cards ${startPosition === i+1 ? 'active' : null}`}>{i+1}</li>)}
                {totalPagination !== 0 && <li className={`pagination-cards ${totalPagination <= startPosition && 'disabled'}`} onClick={() => dispatch(nextPagination())} ><i className="fas fa-angle-right"></i></li> }
                <li className='pagination-cards-select'>
                    <select onChange={(e) => displayRecordhandler(e)}>
                         <option value='10'>10</option>
                         <option value='20'>20</option>
                         <option value='50'>50</option>
                         <option value='100'>100</option>
                    </select>
                </li> 
            </ul>
        </div>
    )
}

export default Pagination;