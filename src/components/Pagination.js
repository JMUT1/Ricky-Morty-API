const Pagination = ({onPrevious, onNext})=>{

    const handlerPrevious =()=>{

    };

    const handlerNext = ()=>{

    };


    return(
        <nav>
            <ul className="pagination justify-content-center" >
                <li className="page-item">
                    <button className="page-link" onClick={}>Previous</button>
                </li>
                <li className="page-item">
                    <button className="page-link" onClick={}>Next</button>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;