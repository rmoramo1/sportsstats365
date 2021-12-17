import React from "react";
import { useTranslation } from "react-i18next";

import { NBA } from "../components/nba/nba";
import { Lista_results } from "../components/nba/lista_results";

import { NFL } from "./nfl/nfl";
import { Lista_results_nfl } from "./nfl/lista_results_nfl";


export const Tabs_index = () => {
    const { t, i18n } = useTranslation("global");

    return (
        <div className="pt-5">
            <ul className="nav nav-tabs col-12 col-lg-6 mx-auto justify-content-center" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="nba-odds-tab" data-bs-toggle="tab" data-bs-target="#nba-odds" type="button" role="tab" aria-controls="nba-odds" aria-selected="true">{t('tabs.span1')}</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="NBA-RESULTS-tab" data-bs-toggle="tab" data-bs-target="#NBA-RESULTS" type="button" role="tab" aria-controls="NBA-RESULTS" aria-selected="false">{t('tabs.span2')}</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="nfl-tab" data-bs-toggle="tab" data-bs-target="#nfl" type="button" role="tab" aria-controls="nfl" aria-selected="false">NFL</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="nfl_results-tab" data-bs-toggle="tab" data-bs-target="#nfl_results" type="button" role="tab" aria-controls="nfl_results" aria-selected="false">{t('tabs.span4')}</button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="nba-odds" role="tabpanel" aria-labelledby="nba-odds-tab">
                    <NBA />
                </div>
                <div className="tab-pane fade" id="NBA-RESULTS" role="tabpanel" aria-labelledby="NBA-RESULTS-tab">

                    <Lista_results />
                </div>
                <div className="tab-pane fade" id="nfl" role="tabpanel" aria-labelledby="nfl-tab">
                    <NFL/>
                </div>
                <div className="tab-pane fade" id="nfl_results" role="tabpanel" aria-labelledby="nfl_results-tab">
                        <Lista_results_nfl/>
                </div>
            </div>
        </div>
    )
}