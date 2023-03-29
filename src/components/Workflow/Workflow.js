import { List,  Typography } from "@mui/material";
import React from "react";
import useStyles from "./Workflow.style";

function Workflow() {
  const classess = useStyles();
  return (
    <div className={classess.container}>
      <Typography variant="h3" className={classess.haeding}>
        Our Workflow
      </Typography>
      <List className={classess.list}>
        <div className={classess.stepContainer}>
          <div className={classess.step}>
            <span>01</span>
            <div className={classess.line}></div>
          </div>
          <div className={classess.stepcontent}>
            <Typography>Idea</Typography>
          </div>
          <div className={classess.stepcontent}>
            <Typography variant="body2">
              Ideas begins with planning, logic and creativity to achieve
              customer's requirements.
            </Typography>
          </div>
        </div>
        <div className={classess.stepContainer}>
          <div className={classess.step}>
            <span>02</span>
            <div className={classess.line}></div>
          </div>
          <div className={classess.stepcontent}>
            <Typography>Design</Typography>
          </div>
          <div className={classess.stepcontent}>
            <Typography variant="body2">
              Design is the process and art of planning and making detailed flow
              diagram of planning.
            </Typography>
          </div>
        </div>
        <div className={classess.stepContainer}>
          <div className={classess.step}>
            <span>03</span>
            <div className={classess.line}></div>
          </div>
          <div className={classess.stepcontent}>
            <Typography>Development</Typography>
          </div>
          <div className={classess.stepcontent}>
            <Typography variant="body2">
              Development is the process of programming & documentation involved
              to build an Application.
            </Typography>
          </div>
        </div>
        <div className={classess.stepContainer}>
          <div className={classess.step}>
            <span>04</span>
            <div className={classess.line}></div>
          </div>
          <div className={classess.stepcontent}>
            <Typography>Test</Typography>
          </div>
          <div className={classess.stepcontent}>
            <Typography variant="body2">
              Testing is the process of validating and verifying the software
              program or application.
            </Typography>
          </div>
        </div>
        <div className={classess.stepContainer}>
          <div className={classess.step}>
            <span>05</span>
            <div className={classess.line}></div>
          </div>
          <div className={classess.stepcontent}>
            <Typography>Result</Typography>
          </div>
          <div className={classess.stepcontent}>
            <Typography variant="body2">
              Result is the output of planning, designing and programming.It is
              an execution of programming.
            </Typography>
          </div>
        </div>
      </List>
    </div>
  );
}

export default Workflow;
