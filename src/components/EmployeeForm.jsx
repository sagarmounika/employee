import React from "react"
import {
  Button,
  Dialog,
  Card,
  Select,
  Option,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Alert,
} from "@material-tailwind/react"
const EmployeeForm = ({
  formData,
  setFormData,
  handleSubmit,
  showModal,
  setShowModal,
  isEditMode,
  error,
}) => {
  const handleChange = e => {
    const {name, value} = e.target

    switch (name) {
      case "name":
        if (/^[a-zA-Z\s]*$/.test(value) || value === "") {
          setFormData({...formData, [name]: value})
        }
        break
      case "employeeId":
        if (/^\d*$/.test(value) || value === "") {
          setFormData({...formData, [name]: value})
        }
        break
      case "city":
      case "gender":
        setFormData({...formData, [name]: value})
        break
      default:
        break
    }
  }
  return (
    <Dialog
      size="md"
      open={showModal}
      handler={() => setShowModal(false)}
      className="bg-transparent shadow-none"
    >
      <Card className="mx-auto w-full">
        <CardBody className="flex flex-col gap-3">
          <Typography variant="h4" color="blue-gray">
            {isEditMode ? "Edit Employee" : "Add Employee"}
          </Typography>
          {error && <Alert color="red">{error}</Alert>}
          <Typography className="font-normal" variant="paragraph" color="gray">
            Please fill in the details below:
          </Typography>
          <Typography className="-mb-2" variant="h6">
            Name
          </Typography>
          <Input
            label="Name"
            name="name"
            type="text"
            value={formData.name}
            size="lg"
            onChange={handleChange}
          />
          <Typography className="-mb-2" variant="h6">
            Employee ID
          </Typography>
          <Input
            label="Employee ID"
            name="employeeId"
            type="number"
            value={formData.employeeId}
            size="lg"
            onChange={handleChange}
          />
          <Typography className="-mb-2" variant="h6">
            City
          </Typography>
          <Select
            value={formData.city}
            onChange={val => handleChange({target: {name: "city", value: val}})}
            required
            label="Select City"
          >
            <Option value="New York">New York</Option>
            <Option value="London">London</Option>
            <Option value="Tokyo">Tokyo</Option>
          </Select>
          <Typography className="-mb-2" variant="h6">
            Gender
          </Typography>
          <div className="flex items-center gap-4">
            <Checkbox
              label="Male"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />
            <Checkbox
              label="Female"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" onClick={handleSubmit} fullWidth>
            {isEditMode ? "Save Changes" : "Add Employee"}
          </Button>
        </CardFooter>
      </Card>
    </Dialog>
  )
}

export default EmployeeForm
