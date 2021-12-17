import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

const Single_NFL = props => {
    const [style, setStyle] = useState('');
    useEffect(() => {
        let status = props.status;
        if (status === 'Cancelled') {
            setStyle('bg-cancel')
        } else if (status === 'In Progress') {
            setStyle('bg-process')
        } else if (status === 'Finished') {
            setStyle('bg-finish')
        }
    }, []);

    return (
        <div className="col-12 overflow-scroll">
            <div className="row g-0 bg-lines text-white text-center odds-list">
                <div className="odds-spanTeam fw-bold" id="statusNfl">{props.status}</div>
                <div className="odds-span"></div>
                <div className="odds-span">Spread</div>
                <div className="odds-span">Juice</div>
                <div className="odds-span">Money Line</div>
                <div className="odds-span">Total</div>
                <div className="odds-span">Juice</div>
                <div className="odds-span">Team Total</div>
                <div className="odds-span">Juice Over</div>
                <div className="odds-span">Juice Under</div>
                <div className="odds-span">Score</div>
            </div>
            <div className={style}>
                <div className="row g-0 text-center odds-list">
                    <div className="odds-span fw-bold">{props.date}</div>
                    <div className="odds-spanTeam bb1px lines fw-bold">{props.away}</div>
                    <div className="odds-span bb1px lines">{props.spread_away}</div>
                    <div className="odds-span bb1px lines">{props.juice_spread_away}</div>
                    <div className="odds-span bb1px lines">{props.moneyLineAway}</div>
                    <div className="odds-span bb1px lines">{props.total}</div>
                    <div className="odds-span bb1px lines">{props.juice_total_over}</div>
                    <div className="odds-span bb1px lines">{props.tt_away}</div>
                    <div className="odds-span bb1px lines">{props.juice_over_away}</div>
                    <div className="odds-span bb1px lines">{props.juice_under_away}</div>
                    <div className="odds-span bb1px lines">{props.final_score_away}</div>
                </div>
                <div className="row g-0 text-center odds-list">
                    <div className="odds-span fw-bold">{props.hour}</div>
                    <div className="odds-spanTeam lines fw-bold">{props.home}</div>
                    <div className="odds-span lines">{props.spread_home}</div>
                    <div className="odds-span lines">{props.juice_spread_home}</div>
                    <div className="odds-span lines">{props.moneyLineHome}</div>
                    <div className="odds-span lines"></div>
                    <div className="odds-span lines">{props.juice_total_under}</div>
                    <div className="odds-span lines">{props.tt_home}</div>
                    <div className="odds-span lines">{props.juice_over_home}</div>
                    <div className="odds-span lines">{props.juice_under_home}</div>
                    <div className="odds-span lines">{props.final_score_home}</div>
                </div>
            </div>
        </div>
    );
};
Single_NFL.propTypes = {
    away: PropTypes.string,
    home: PropTypes.string,
    hour: PropTypes.string,
    status: PropTypes.string,
    date: PropTypes.string,
    spread_away: PropTypes.string,
    juice_spread_away: PropTypes.string,
    juice_spread_home: PropTypes.string,
    moneyLineAway: PropTypes.string,
    moneyLineHome: PropTypes.string,
    total: PropTypes.string,
    juice_total_over: PropTypes.string,
    juice_total_under: PropTypes.string,
    tt_away: PropTypes.string,
    tt_home: PropTypes.string,
    juice_over_away: PropTypes.string,
    juice_over_home: PropTypes.string,
    juice_under_away: PropTypes.string,
    juice_under_home: PropTypes.string,
    final_score_away: PropTypes.string,
    final_score_home: PropTypes.string,

};
export default Single_NFL;
