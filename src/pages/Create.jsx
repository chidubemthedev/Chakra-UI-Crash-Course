import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useRef } from "react";
import { Form, redirect } from "react-router-dom";

export default function Create() {
  const nameref = useRef();
  const descriptionref = useRef();
  const isPriorityref = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredName = nameref.current.value;
    const enteredDescription = descriptionref.current.value;
    const enteredIsPriority = isPriorityref.current.checked;

    const taskData = {
      name: enteredName,
      description: enteredDescription,
      isPriority: enteredIsPriority,
    };

    console.log(taskData);
    redirect("/");
  }

  return (
    <Box maxW="480px">
      <Form onSubmit={submitHandler}>
        <FormControl isRequired mb="40px">
          <FormLabel>Task name:</FormLabel>
          <Input type="text" name="title" ref={nameref
          } />
          <FormHelperText>Enter a descriptive task name</FormHelperText>
        </FormControl>

        <FormControl isRequired mb="40px">
          <FormLabel>Task description:</FormLabel>
          <Textarea
            name="description"
            placeholder="Enter the task description..."
            ref={descriptionref}
          />
        </FormControl>

        <FormControl mb="40px">
          <Checkbox colorScheme="purple" name="isPriority" ref={isPriorityref}>
            Make this a priority task!
          </Checkbox>
        </FormControl>

        <Button type="submit" colorScheme="purple" size="lg" w="100%">
          Submit
        </Button>
      </Form>
    </Box>
  );
}
