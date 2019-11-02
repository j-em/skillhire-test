import React, { useCallback, useState } from "react";
import { Box, Container } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import TaskList from "../TaskList/index";
import uuid from "uuid/v4";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInput] = useState("");

  const addTask = useCallback(
    content => {
      if (content.length > 0) {
        const newTask = {
          id: uuid(),
          content: content,
          status: "active"
        };

        setTasks(tasks => [...tasks, newTask]);
        setInput("");
      }
    },
    [setTasks, setInput]
  );

  const toggleTask = useCallback(
    id => {
      setTasks(tasks =>
        tasks.map(t => {
          if (t.id === id) {
            const toggledStatus =
              t.status === "completed" ? "active" : "completed";
            return {
              ...t,
              status: toggledStatus
            };
          } else {
            return t;
          }
        })
      );
    },
    [setTasks]
  );
  return (
    <Container>
      <Box my={2} display="flex" flexDirection="column">
        <Input
          fullWidth
          placeholder="What do you need to do?"
          value={inputValue}
          onKeyDown={({ keyCode }) => keyCode === 13 && addTask(inputValue)}
          onChange={({ target: { value } }) => setInput(value)}
        />
        <TaskList tasks={tasks} onTaskClick={toggleTask} />
      </Box>
    </Container>
  );
}

export default App;
