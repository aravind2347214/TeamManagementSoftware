const express = require("express");
const projectRouter = express.Router();
const projectController = require("../controller/projectController");

// -----GET REQUESTS-----
projectRouter.get("/get-all-projects", projectController.get_all_projects);
projectRouter.get("/get-project-by-id/:projectId",projectController.get_project_by_id)
projectRouter.get("/get-project-members-by-id/:projectId",projectController.get_project_members_by_id)
projectRouter.get("/get-all-tasks-by-project-id/:projectId",projectController.get_all_tasks_by_project_id)
projectRouter.get("/get-project-overall-performance-by-id/:projectId",projectController.get_project_overall_performance_by_id)




module.exports = projectRouter;