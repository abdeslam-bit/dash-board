import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { Box, Stack, TextField } from "@mui/material";
import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useForm } from "react-hook-form";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => console.log(data)
  const onSubmit = () => {
    console.log("done");
  };
  console.log(watch("example"));

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(age);
  };

  const { Ctheme } = useContext(ThemeContext);

  // Reusable styles object for TextFields
  const textFieldStyles = {
    "& .MuiFilledInput-root": {
      backgroundColor: Ctheme === "dark" ? "#1e293b" : "#f4f4f4",
      color: Ctheme === "dark" ? "white" : "black",
      "&:hover": {
        backgroundColor: Ctheme === "dark" ? "#2d3e52" : "#e8e8e8",
      },
      "&.Mui-focused": {
        backgroundColor: Ctheme === "dark" ? "#1e293b" : "#f4f4f4",
      },
    },
    "& .MuiInputLabel-filled": {
      color: Ctheme === "dark" ? "#9ca3af" : "#2e2e2e",
    },
    "& .MuiInputLabel-filled.Mui-focused": {
      color: Ctheme === "dark" ? "#60a5fa" : "#1976d2",
    },
    "& .MuiFilledInput-root:before": {
      borderBottomColor: Ctheme === "dark" ? "#4b5563" : "rgba(0, 0, 0, 0.42)",
    },
    "& .MuiFilledInput-root:after": {
      borderBottomColor: Ctheme === "dark" ? "#60a5fa" : "#1976d2",
    },
  };

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
      noValidate
      autoComplete="off"
    >
      <Stack direction={"row"} sx={{ gap: 2 }}>
        <TextField
          label="First Name"
          variant="filled"
          sx={{ flex: 1, ...textFieldStyles }}
          helperText={
            Boolean(errors.firstName)
              ? "This field is required & min 3 character"
              : ""
          }
          error={Boolean(errors.firstName)}
          {...register("firstName", { required: true, minLength: 3 })}
          FormHelperTextProps={{
            sx: {
              color: "red",
              fontSize: "0.85rem",
              fontWeight: "bold",
              marginLeft: 0,
            },
          }}
        />
        <TextField
          label="Last Name"
          variant="filled"
          sx={{ flex: 1, ...textFieldStyles }}
          helperText={
            Boolean(errors.lastName)
              ? "This field is required & min 3 character"
              : ""
          }
          error={Boolean(errors.lastName)}
          {...register("lastName", { required: true, minLength: 3 })}
          FormHelperTextProps={{
            sx: {
              color: "red",
              fontSize: "0.85rem",
              fontWeight: "bold",
              marginLeft: 0,
            },
          }}
        />
      </Stack>

      <TextField
        label="Email"
        variant="filled"
        sx={textFieldStyles}
        helperText={
          Boolean(errors.email) ? "Please provide a valid email address" : ""
        }
        error={Boolean(errors.email)}
        {...register("email", { required: true, pattern: emailRegex })}
        FormHelperTextProps={{
          sx: {
            color: "red",
            fontSize: "0.85rem",
            fontWeight: "bold",
            marginLeft: 0,
          },
        }}
      />
      <TextField
        label="Contact Number"
        variant="filled"
        sx={textFieldStyles}
        helperText={
          Boolean(errors.number) ? "Please provide a valid number" : ""
        }
        error={Boolean(errors.number)}
        {...register("number", { required: true, pattern: phoneRegex})}
        FormHelperTextProps={{
          sx: {
            color: "red",
            fontSize: "0.85rem",
            fontWeight: "bold",
            marginLeft: 0,
          },
        }}
      />
      <TextField label="Adress 1" variant="filled" sx={textFieldStyles} />
      <TextField label="Adress 2" variant="filled" sx={textFieldStyles} />

      {/* Select Component with Dark Mode Styling */}
      <FormControl fullWidth>
        <InputLabel
          id="demo-simple-select-label"
          sx={{
            color: Ctheme === "dark" ? "#9ca3af" : "#2e2e2e",
            "&.Mui-focused": {
              color: Ctheme === "dark" ? "#60a5fa" : "#1976d2",
            },
          }}
        >
          Role
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Role"
          onChange={handleChange}
          sx={{
            backgroundColor: Ctheme === "dark" ? "#1e293b" : "#f4f4f4",
            color: Ctheme === "dark" ? "white" : "black",
            "&:hover": {
              backgroundColor: Ctheme === "dark" ? "#2d3e52" : "#e8e8e8",
            },
            "&.Mui-focused": {
              backgroundColor: Ctheme === "dark" ? "#1e293b" : "#f4f4f4",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor:
                Ctheme === "dark" ? "#4b5563" : "rgba(0, 0, 0, 0.23)",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: Ctheme === "dark" ? "#60a5fa" : "#1976d2",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: Ctheme === "dark" ? "#60a5fa" : "#1976d2",
            },
            "& .MuiSvgIcon-root": {
              color: Ctheme === "dark" ? "white" : "black",
            },
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: Ctheme === "dark" ? "#1e293b" : "#ffffff",
                "& .MuiMenuItem-root": {
                  color: Ctheme === "dark" ? "white" : "black",
                  "&:hover": {
                    backgroundColor: Ctheme === "dark" ? "#2d3e52" : "#f5f5f5",
                  },
                  "&.Mui-selected": {
                    backgroundColor: Ctheme === "dark" ? "#334155" : "#e3f2fd",
                    "&:hover": {
                      backgroundColor:
                        Ctheme === "dark" ? "#475569" : "#bbdefb",
                    },
                  },
                },
              },
            },
          }}
        >
          <MenuItem value={"adin"}>Admin</MenuItem>
          <MenuItem value={"maneger"}>Maneger</MenuItem>
          <MenuItem value={"user"}>User</MenuItem>
        </Select>
      </FormControl>
      <Box sx={{ textAlign: "right" }}>
        <Button type="submit" variant="contained">
          Create New User
        </Button>
      </Box>
    </Box>
  );
}
