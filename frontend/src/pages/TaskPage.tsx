import { AccountCircle, Logout } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { colors } from "../Constants";
import Logo from "../common/Logo";
import TaskPageTaskInfo from "../components/TaskPageTaskInfo";
import TaskPageAttachedMedia from "../components/TaskPageAttachedMedia";
import TaskPageTaskStatusMarker from "../components/TaskPageTaskStatusMarker";

function TaskPage() {
  return (
    <>
      <div className="flex flex-row h-[100vh] text-C11">
        <div className="bg-C44 w-[60px] pt-2 flex flex-col">
          <div className="flex-1">
            <Tooltip title="Dashboard" placement="right" arrow>
              <Link to="/dashboard">
                <div className="flex justify-center py-2 cursor-pointer">
                  <Logo size={"0.5"} color={colors.C11} />
                </div>
              </Link>
            </Tooltip>
            <Tooltip title="Profile" placement="right" arrow>
              <div className="flex justify-center py-2 cursor-pointer">
                <AccountCircle sx={{ fontSize: 30, color: colors.C11 }} />
              </div>
            </Tooltip>
          </div>
          <Tooltip title="Logout" placement="right" arrow>
            <div className="flex justify-center py-4 cursor-pointer">
              <Logout sx={{ fontSize: 20, color: colors.C11 }} />
            </div>
          </Tooltip>
        </div>
        <div className=" p-10 flex-row flex flex-1 pt-20 max-h-[100vh] overflow-y-auto  gap-2">
          {/* Task Info */}
          <div className="flex flex-col  max-w-[60%]   h-fit">
            <TaskPageTaskInfo />
            <TaskPageAttachedMedia />
          </div>

          <div className="flex flex-col flex-1 gap-2 ">
            {/* <div className=" text-[#cfcfcf]  h-[600px] border-2 border-C44 rounded-[8px] bg-C44 justify-center items-center flex">
              No Media Selected
            </div> */}
            <TaskPageTaskStatusMarker/>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskPage;
