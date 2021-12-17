import PropTypes from "prop-types";

const ResultsSpan = props => {
    return (
        <div className="col-12 shadow">
            <div className="row g-0 bg-lines text-white text-center">
            <div className="">{props.date}</div>
            </div>
            <div className="row g-0 text-center py-1">
                <div className="col-3 d-flex justify-content-center align-items-center">{props.away}</div>
                <div className="col-2 fs-3">{props.final_score_away}</div>
                <div className="col-2 d-flex justify-content-center align-items-center">VRS</div>
                <div className="col-2 fs-3">{props.final_score_home}</div>
                <div className="col-3 d-flex justify-content-center align-items-center">{props.home}</div>
            </div>
        </div>
    );
};
ResultsSpan.propTypes = {
    away: PropTypes.string,
    home: PropTypes.string,
    final_score_away: PropTypes.string,
    final_score_home: PropTypes.string,

};
export default ResultsSpan;
