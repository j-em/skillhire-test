import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";

export const TaskList = ({ tasks, onTaskClick }) => {
  return (
    <List>
      {tasks.map(task => (
        <ListItem
        key={task.id}
          button
          style={
            task.status === "completed"
              ? { textDecoration: "line-through" }
              : undefined
          }
          onClick={() => onTaskClick(task.id)}
        >
          <ListItemText primary={task.content} />
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
