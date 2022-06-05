import "./loadMoreCta.css";
const LoadMoreCta = (props) => {
    const onCtaClick = (limit) => {
        props.loadMoreEvents(limit)
    }
    return (
        <div className="load-more-events">
            <hr className="line-wrapper"/>
            <div className="cta-wrapper"><button className="load-more-cta" onClick={()=> onCtaClick(props.eventLimit + 12)}> Load More </button></div>
      </div>
    );
}
export default LoadMoreCta;