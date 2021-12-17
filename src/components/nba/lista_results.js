import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import ResultsSpan from "./results_single";

export const Lista_results = () => {
    const { store, actions } = useContext(Context);

    let teamFilter = store.nba;

	// change page
	// sort by born date
	// use slice() to copy the array and not just make a reference
	var byDate = teamFilter;
	byDate.sort(function(a,b) {
		return b.id - a.id;
	});

    return (
        <div className="row g-0">
            {teamFilter.map((item, index) => {
                if(index < 9){

                    return (
                        <div className="col-12 col-lg-4 p-3" key={index} >
                            <ResultsSpan
                                away={item.away}
                                home={item.home}
                                date={item.date}
                                final_score_away={item.final_score_away}
                                final_score_home={item.final_score_home}
                                />
                        </div>
                    );
                }
           
            })}
        </div>

    )

}


