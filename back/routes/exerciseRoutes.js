import express from "express";
import { createNewExerciseLog } from "../controllers/exercise/log/createController.js";
import {
  getExerciseLog,
  getExerciseLogList,
} from "../controllers/exercise/log/getController.js";
import {
  updateCompleteExerciseLog,
  updateExerciseLog,
} from "../controllers/exercise/log/updateController.js";
import {
  createNewExercise,
  deleteExercise,
  getExercises,
  updatedExercise,
} from "../controllers/exercise/mainController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .get(protect, getExercises)
  .post(protect, createNewExercise)
  .put(protect, updatedExercise)
  .delete(protect, deleteExercise);

router
  .route("/log")
  .get(protect, getExerciseLogList)
  .post(protect, createNewExerciseLog)
  .put(protect, updateExerciseLog);

router.route("/log/completed").put(protect, updateCompleteExerciseLog);

router.route("/log/:id").get(protect, getExerciseLog);

export default router;