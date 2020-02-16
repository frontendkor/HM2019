import React from "react";
import { CollectionItem } from "react-materialize";
import "../RenderActions.sass";

const ActionsCard = props => {
  const { id, title, text, date } = props;
  return (
    <CollectionItem>
      <div className="actionsImg">
        <img src={`data/actions/img/${id}.png`} alt="img" />
      </div>
      <div className="actionsText">
        <h6>{title}</h6>
        <p>{text}</p>
      </div>
      <div className="actionsDate">
        <h6>Актуально:</h6>
        <p>{date}</p>
      </div>
    </CollectionItem>
  );
};

export default ActionsCard;
