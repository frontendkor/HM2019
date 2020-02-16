import React from "react";

import { Row } from "react-materialize";

import PageTitle from "../../components/PageTitle/PageTitle";
import RenderActions from "../../components/RenderActions/RenderActions";

const ActionsPage = props => {
  return (
    <Row>
      <PageTitle title="АКЦИИ !" />
      <RenderActions />
    </Row>
  );
};

export default ActionsPage;
