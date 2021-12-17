import React, {useContext} from "react";
import Single_NBA from "./single";
import { Context } from "../../store/appContext";
export const NBA = () => {
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
        <div className="">
            {teamFilter.map((item, index) => {
                if(index < 7){
                    return (
                        <div key={index}>
                            <Single_NBA
                                away={item.away}
                                home={item.home}
                                hour={item.hour}
                                status={item.status}
                                date={item.date}
                                spread_away={item.spread_away}
                                spread_home={item.spread_home}
                                juice_spread_away={item.juice_spread_away}
                                juice_spread_home={item.juice_spread_home}
                                moneyLineAway={item.moneyLineAway}
                                moneyLineHome={item.moneyLineHome}
                                total={item.total}
                                juice_total_over={item.juice_total_over}
                                juice_total_under={item.juice_total_under}
                                tt_away={item.tt_away}
                                tt_home={item.tt_home}
                                juice_over_away={item.juice_over_away}
                                juice_under_away={item.juice_under_away}
                                juice_over_home={item.juice_over_home}
                                juice_under_home={item.juice_under_home}
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