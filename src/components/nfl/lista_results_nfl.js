import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import ResultsSpan_nfl from "./results_single_nfl";

export const Lista_results_nfl = () => {
    const { store, actions } = useContext(Context);

    let teamFilter = store.nflGames;

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
                            <ResultsSpan_nfl
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


