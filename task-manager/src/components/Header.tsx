import React, { useState } from "react";
import {Typography, Button } from "@mui/material";


export const HeaderComponent = () => {
  
  return (
    <div className="app-header">
      <Typography variant="h6">
        TASK MANAGER
      </Typography>
      <Button
            href={"https://github.com/NastyaKrp"}
            variant="outlined"
            sx={{ color: "white", borderColor: "white", marginRight: "40px"}}
          >
            My Github
      </Button>
    </div>
  );
};