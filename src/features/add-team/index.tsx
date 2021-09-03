import React, { useState } from "react";
import TeamForm from "../team-form";

interface Props {}
interface Leader {
  name: string;
  id: string;
}

const AddTeam: React.FC<Props> = () => {
  const handleResetClick = (values: TeamType) => {};

  const handleSaveClick = (values: TeamType) => {
    console.log(values);
  };

  const initialValues = {
    leader: "",
    teamName: "",
  };

  return (
    <div className='card shadow'>
      <div className='card-header'>Add New Team</div>
      <div className='card-body'>
        <TeamForm
          dangerText='Reset'
          initialValues={initialValues}
          handleDanger={handleResetClick}
          handleSave={handleSaveClick}
        />
      </div>
    </div>
  );
};

export default AddTeam;
