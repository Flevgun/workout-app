import React from "react";
import ReactSelect from "react-select";
import Layout from "../../common/Layout";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import bgImage from "../../../images/new-workout-bg.jpg";
import Field from "../../ui/Field/Field";
import Button from "../../ui/Button/Button";

import styles from './NewWorkout.module.scss'

const NewWorkout = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [exercises, setExercises] = useState([]);

  const handleSubmit = () => {
    console.log("sumbit");
  };

  return (
    <>
      <Layout
        bgImage={bgImage}
        heading="Create new workout"
        backCallback={() => navigate(-1)}
      />
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit}>
          <Field
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Link to='/new-exercise' className="dark-link">
            Add new exercise
          </Link>
          <ReactSelect
            classNamePrefix="select2-selection"
            placeholder="Exercises..."
            title="Exercises"
            options={[
              { value: "sw2rwefse", label: "Push-ups" },
              { value: "sadvrtvrv32v45", label: "Pull-ups" },
            ]}
            value={exercises}
            onChange={setExercises}
            isMulti={true}
          />
          <Button text="Create" callback={() => {}} />
        </form>
      </div>
    </>
  );
};

export default NewWorkout;
